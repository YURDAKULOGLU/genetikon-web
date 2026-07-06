/**
 * Tek buton kontratı — sitedeki 3-4 farklı inline buton "kostümünü" birleştirir.
 * className helper (Link/button/anchor'ı bozmadan). Tek yükseklik, tek padding,
 * tek hover, tek shadow. variant: yüzeye göre; size: md (varsayılan) / lg (hero).
 */
type Variant = "primary" | "inverse" | "outline" | "outlineLight";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]";

const SIZES: Record<Size, string> = {
  md: "min-h-12 px-6 py-3 text-[0.95rem]",
  lg: "min-h-[3.5rem] px-8 py-4 text-[1.02rem]",
};

const VARIANTS: Record<Variant, string> = {
  // Açık yüzeyde birincil aksiyon
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  // Koyu yüzeyde (hero/band) birincil — beyaz zemin
  inverse:
    "bg-white text-brand-900 shadow-[var(--shadow-card)] hover:bg-brand-50",
  // Açık yüzeyde ikincil
  outline:
    "border border-brand-300 text-brand-800 hover:border-brand-500 hover:bg-brand-50",
  // Koyu yüzeyde ikincil
  outlineLight: "border border-white/30 text-white hover:border-white/70 hover:bg-white/10",
};

export function btn(variant: Variant = "primary", size: Size = "md"): string {
  return `${BASE} ${SIZES[size]} ${VARIANTS[variant]}`;
}
