import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "@/lib/i18n/routing";

const handle = createMiddleware(routing);

/**
 * Ülke (edge geo header) → başlangıç dili. Batumi/Gürcistan tıbbi turizm hattı.
 * Georgia→Gürcüce; TR→Türkçe; RU + Rusça-konuşan komşular→Rusça; AZ→Azerice.
 * Eşleşme yoksa next-intl Accept-Language + default (EN) kullanır.
 */
const COUNTRY_LOCALE: Record<string, string> = {
  GE: "ka",
  TR: "tr",
  RU: "ru",
  BY: "ru",
  KZ: "ru",
  KG: "ru",
  AM: "ru",
  MD: "ru",
  UA: "ru",
  AZ: "az",
};

export default function proxy(req: NextRequest) {
  // Kullanıcı henüz dil seçmediyse (NEXT_LOCALE cookie yok) ve edge geo header'ı
  // varsa, ülkeye göre başlangıç dilini cookie'ye yaz → next-intl bunu kullanır.
  // Coolify/self-host'ta geo header ancak Cloudflare/edge arkasında gelir;
  // gelmezse otomatik Accept-Language devreye girer.
  if (!req.cookies.has("NEXT_LOCALE")) {
    const country = (
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      ""
    ).toUpperCase();
    const mapped = COUNTRY_LOCALE[country];
    if (mapped) req.cookies.set("NEXT_LOCALE", mapped);
  }
  return handle(req);
}

export const config = {
  // i18n routing dışındaki statik/asset yollarını atla.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
