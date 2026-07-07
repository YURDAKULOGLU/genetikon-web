// scripts/screenshot.mjs
//
// Verilen URL listesinin desktop (1440x900) ve iPhone 13 full-page
// screenshot'ini alir, ayrica her viewport icin yatay-tasma (horizontal
// overflow) degerini olcer. Bu repoda tekrar tekrar elle yazilan gecici
// _shot*.mjs kaliplarinin yerini alir.
//
// Kullanim:
//   node scripts/screenshot.mjs <url1> [url2] [...] [--out <dizin>]
//
// Ornek:
//   node scripts/screenshot.mjs http://127.0.0.1:3000/en http://127.0.0.1:3000/tr
//   node scripts/screenshot.mjs http://127.0.0.1:3000/en --out ./_shots/run1
//
// Cikti: <out>/<slug>-desktop.png, <out>/<slug>-mobile.png,
//        <out>/overflow-report.json (her url+viewport icin scrollWidth vs
//        clientWidth farki)
//
// Not: paket kokunde zaten devDependency olan @playwright/test kullanilir;
// ek kurulum gerekmez (npx playwright install ile tarayici inmis olmali).

import { chromium, devices } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

function parseArgs(argv) {
  const urls = [];
  let outDir = "./_shots";
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--out" || arg === "-o") {
      i += 1;
      outDir = argv[i];
      if (!outDir) throw new Error("--out bir dizin degeri bekliyor.");
      continue;
    }
    urls.push(arg);
  }
  return { urls, outDir };
}

function slugify(url) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

const VIEWPORTS = [
  {
    key: "desktop",
    label: "Desktop 1440x900",
    contextOptions: { viewport: { width: 1440, height: 900 } },
  },
  {
    key: "mobile",
    label: "iPhone 13",
    contextOptions: { ...devices["iPhone 13"] },
  },
];

async function measureOverflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const scrollWidth = Math.max(doc.scrollWidth, body ? body.scrollWidth : 0);
    const clientWidth = doc.clientWidth;
    return {
      scrollWidth,
      clientWidth,
      overflowPx: Math.max(0, scrollWidth - clientWidth),
    };
  });
}

async function main() {
  const { urls, outDir } = parseArgs(process.argv.slice(2));
  if (urls.length === 0) {
    console.error("Kullanim: node scripts/screenshot.mjs <url1> [url2] [...] [--out <dizin>]");
    process.exit(1);
  }

  const resolvedOutDir = path.resolve(process.cwd(), outDir);
  await mkdir(resolvedOutDir, { recursive: true });

  const browser = await chromium.launch();
  const report = [];
  let hadError = false;

  try {
    for (const url of urls) {
      const slug = slugify(url);
      for (const viewport of VIEWPORTS) {
        const context = await browser.newContext(viewport.contextOptions);
        const page = await context.newPage();
        const entry = {
          url,
          viewport: viewport.key,
          viewportLabel: viewport.label,
        };
        try {
          await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
          const overflow = await measureOverflow(page);
          const fileName = `${slug}-${viewport.key}.png`;
          const filePath = path.join(resolvedOutDir, fileName);
          await page.screenshot({ path: filePath, fullPage: true });

          entry.screenshot = filePath;
          entry.scrollWidth = overflow.scrollWidth;
          entry.clientWidth = overflow.clientWidth;
          entry.overflowPx = overflow.overflowPx;
          entry.status = "ok";

          const overflowFlag = overflow.overflowPx > 0 ? ` OVERFLOW +${overflow.overflowPx}px` : "";
          console.log(`[ok] ${url} (${viewport.key}) -> ${fileName}${overflowFlag}`);
        } catch (error) {
          hadError = true;
          entry.status = "error";
          entry.error = error instanceof Error ? error.message : String(error);
          console.error(`[error] ${url} (${viewport.key}): ${entry.error}`);
        } finally {
          await context.close();
        }
        report.push(entry);
      }
    }
  } finally {
    await browser.close();
  }

  const reportPath = path.join(resolvedOutDir, "overflow-report.json");
  await writeFile(reportPath, JSON.stringify(report, null, 2), "utf8");
  console.log(`\nRapor: ${reportPath}`);

  const overflowing = report.filter((entry) => entry.status === "ok" && entry.overflowPx > 0);
  if (overflowing.length > 0) {
    console.warn(`\nUYARI: ${overflowing.length} sayfa/viewport'ta yatay tasma tespit edildi.`);
  }

  if (hadError) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
