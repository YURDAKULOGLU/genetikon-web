import type { LT } from "./site-content";

/** LT (bilingual) → aktif locale metni. Bilinmeyen locale → EN default. */
export function lt(value: LT, locale: string): string {
  return locale === "tr" ? value.tr : value.en;
}
