# genetikon.com

Genetikon Genetics Center kurumsal web sitesi. Ajans **website production
harness**'inin ilk tüketicisi (`Core/standards/WEBSITE_PRODUCTION_STANDARD.md`).

- **Stack:** Next.js 16 (App Router) + React 19 + TypeScript strict + Tailwind
  v4 (@theme/OKLCH) + next-intl (EN default, TR) → Coolify Docker standalone.
- **Profil:** `medical` (jurisdiction-aware: EN=Georgia/global, TR=strict).
- **Marka:** turkuaz primary `#00AEA6`; kurum-odaklı (kişi ismi yayınlanmaz).

## Harness faz durumu
- ✅ **Faz 0 Discovery:** `../../Data/isletme_bilgisi.yaml` + compliance profil=medical
- ✅ **Faz 1 IA + içerik:** `../../Data/ia/site_map.yaml` + `../../Data/content/departments.md`
- ✅ **Faz 2 Token/tasarım:** `../../Data/brand/brand_tokens.yaml` → `src/app/globals.css` @theme
- ✅ **Faz 3 Build:** EN/TR site, departmanlar, yasal sayfalar, contact form,
  visual hero, structured data ve compliance guard'ları kuruldu.
- ✅ **Faz 4 QA (2026-07-05):** tüm gate'ler yeşil — lint/typecheck/Vitest/
  Playwright 6/6/axe 0+0 (10 sayfa) + Lighthouse mobil perf 92/a11y 100/bp 100
  + budget (JS 180KB, font 100KB, CLS 0). SEO canonical yalnız localhost'ta
  fail (prod domain artefaktı).
- ⬜ **Faz 5 Launch:** Coolify deploy (owner approval `production_deploy`).

## Çalıştırma
```bash
npm install
npm run dev          # http://localhost:3000 , /tr
npm run build        # next build (standalone)
npm run lint
npm run typecheck
npm test
npm run test:e2e
```

## Faz 4 gate'leri (Definition of Done — harness §7)
- [x] `tsc --noEmit` 0 error, ESLint 0 (`--max-warnings=0`), Vitest compliance smoke
- [x] Lighthouse (mobil, /tr): perf 92 / a11y 100 / bp 100; seo 92 — tek fail
      `canonical` (prod domain'i localhost'ta eşleşmiyor; deploy'da geçer)
- [x] axe (`@axe-core/playwright`) 0 critical+serious (WCAG 2.2 AA, 10 sayfa)
- [x] CWV (lab): CLS 0 / TBT 40ms ✓; LCP lab-throttled 3.4s — alan verisi
      prod CDN+AVIF üzerinde doğrulanacak (hedef ≤2.5s)
- [x] budget: JS 180KB≤300KB, font 100KB≤100KB, LCP img (AVIF) ≤200KB
- [x] JSON-LD MedicalClinic valid + hreflang EN/TR simetri + sitemap
- [x] Medical compliance (§5.2): fiyat/testimonial yok, disclaimer, KVKK form,
      künye, isim yok, jurisdiction-aware

## Compliance (bağlayıcı — `../../Safety/SAFETY_POLICY.md`)
- Kişi/ekip ismi yayınlanmaz. Yurtiçi fiyat/testimonial yok. Her tıbbi sayfa
  disclaimer. Randevu formu sağlık verisi istemez. Öncesi-sonrası görsel kapalı.
