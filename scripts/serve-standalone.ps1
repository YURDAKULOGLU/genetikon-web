<#
.SYNOPSIS
  Genetikon Web'i .next/standalone uzerinden :3000'de detached olarak servise
  alir (repo kokunden calistirin).

.DESCRIPTION
  1. Port 3000'i dinleyen mevcut process'i durdurur (varsa).
  2. -Build verilirse `npm run build` calistirir (bu zaten
     scripts/prepare-standalone.mjs'i tetikler ve .next/static + public'i
     .next/standalone icine kopyalar). -Build verilmezse mevcut
     .next/standalone kullanilir; icinde .next/static veya public eksikse
     yine de bu script tazeler (prepare-standalone.mjs'in yaptigi kopyayi
     tekrarlar), boylece build atlansa da servis 404/asset-eksik vermez.
  3. PORT=3000 HOSTNAME=0.0.0.0 env'i ile .next/standalone/server.js'i
     Start-Process ile ayri (detached) bir process olarak baslatir.
  4. http://127.0.0.1:3000/en adresinden 200 donene kadar kisa polling yapar
     ve sonucu ekrana yazar.

.PARAMETER Build
  Servis etmeden once `npm run build` calistirir.

.PARAMETER Port
  Dinlenecek port. Varsayilan 3000.

.PARAMETER TimeoutSeconds
  /en saglik kontrolu icin maksimum bekleme suresi. Varsayilan 60.

.EXAMPLE
  pwsh -NoProfile -File scripts/serve-standalone.ps1
.EXAMPLE
  pwsh -NoProfile -File scripts/serve-standalone.ps1 -Build
#>

[CmdletBinding()]
param(
  [switch]$Build,
  [int]$Port = 3000,
  [int]$TimeoutSeconds = 60
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Push-Location $repoRoot
try {
  $standaloneRoot = Join-Path $repoRoot ".next\standalone"
  $serverJs = Join-Path $standaloneRoot "server.js"

  Write-Host "== [1/4] Port $Port dinleyen process'i durduruluyor =="
  $connections = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
  if ($connections) {
    $processIds = $connections | Select-Object -ExpandProperty OwningProcess -Unique
    foreach ($processId in $processIds) {
      $proc = Get-Process -Id $processId -ErrorAction SilentlyContinue
      if ($proc) {
        Write-Host "  - Durduruluyor: PID $processId ($($proc.ProcessName))"
        Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
      }
    }
    Start-Sleep -Seconds 1
  } else {
    Write-Host "  - Port $Port bos, durdurulacak process yok."
  }

  if ($Build) {
    Write-Host "== [2/4] npm run build calistiriliyor =="
    npm run build
    if ($LASTEXITCODE -ne 0) {
      throw "npm run build basarisiz oldu (exit code $LASTEXITCODE)."
    }
  } else {
    Write-Host "== [2/4] -Build verilmedi, mevcut .next/standalone kullaniliyor =="
    if (!(Test-Path $serverJs)) {
      throw ".next/standalone/server.js bulunamadi. Once 'npm run build' calistirin veya -Build parametresini kullanin."
    }
  }

  Write-Host "== [3/4] .next/static + public -> .next/standalone kopyalaniyor =="
  if (!(Test-Path $standaloneRoot)) {
    throw ".next/standalone bulunamadi. Once 'npm run build' calistirin veya -Build parametresini kullanin."
  }

  $staticSource = Join-Path $repoRoot ".next\static"
  $staticTarget = Join-Path $standaloneRoot ".next\static"
  if (Test-Path $staticSource) {
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $staticTarget) | Out-Null
    Copy-Item -Path $staticSource -Destination $staticTarget -Recurse -Force
  } else {
    Write-Warning "  - .next/static bulunamadi, atlaniyor (build tazeligi supheli olabilir)."
  }

  $publicSource = Join-Path $repoRoot "public"
  $publicTarget = Join-Path $standaloneRoot "public"
  if (Test-Path $publicSource) {
    Copy-Item -Path $publicSource -Destination $publicTarget -Recurse -Force
  } else {
    Write-Warning "  - public/ bulunamadi, atlaniyor."
  }

  if (!(Test-Path $serverJs)) {
    throw ".next/standalone/server.js bulunamadi. Build cikisi beklenenden farkli olabilir."
  }

  Write-Host "== [4/4] server.js baslatiliyor (PORT=$Port HOSTNAME=0.0.0.0, detached) =="
  $psi = New-Object System.Diagnostics.ProcessStartInfo
  $psi.FileName = "node.exe"
  $psi.Arguments = '"' + $serverJs + '"'
  $psi.WorkingDirectory = $standaloneRoot
  $psi.UseShellExecute = $false
  $psi.EnvironmentVariables["PORT"] = "$Port"
  $psi.EnvironmentVariables["HOSTNAME"] = "0.0.0.0"

  $started = [System.Diagnostics.Process]::Start($psi)
  Write-Host "  - server.js baslatildi: PID $($started.Id)"

  $healthUrl = "http://127.0.0.1:$Port/en"
  $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
  $ok = $false
  $lastStatus = $null
  while ((Get-Date) -lt $deadline) {
    try {
      $response = Invoke-WebRequest -Uri $healthUrl -UseBasicParsing -TimeoutSec 5
      $lastStatus = $response.StatusCode
      if ($lastStatus -eq 200) { $ok = $true; break }
    } catch {
      $lastStatus = $_.Exception.Message
    }
    Start-Sleep -Milliseconds 1000
  }

  if ($ok) {
    Write-Host ""
    Write-Host "OK: $healthUrl -> 200 (PID $($started.Id))" -ForegroundColor Green
  } else {
    Write-Warning "Saglik kontrolu basarisiz: $healthUrl -> $lastStatus (timeout ${TimeoutSeconds}s). Process PID $($started.Id) yine de calisiyor olabilir; loglari kontrol edin."
    exit 1
  }
} finally {
  Pop-Location
}
