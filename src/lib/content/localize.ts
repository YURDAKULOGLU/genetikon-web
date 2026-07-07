import type { LT } from "./site-content";

/**
 * LT (çok-dilli) → aktif locale metni. Locale çevirisi yoksa EN'e düşer
 * (graceful fallback: derin içerik henüz çevrilmemişse İngilizce görünür,
 * build kırılmaz). Kabuk/UI dizeleri messages/{locale}.json'dan gelir.
 */
export function lt(value: LT, locale: string): string {
  return (value as Record<string, string | undefined>)[locale] ?? value.en;
}
