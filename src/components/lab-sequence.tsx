import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";

export type Lab = {
  slug: string;
  name: string;
  summary: string;
  cta: string;
  img: string;
};

/**
 * "Tek merkez, üç laboratuvar" — statik, editoryal dönüşümlü (image/text)
 * düzen. Pinli scroll YOK (aşırı boşluk + proporsiyon sorunu yaptığı için
 * kaldırıldı); sıkı dikey ritim, her departman eşit ağırlıkta. Server component
 * (client JS yok) — SSR-safe, her zaman görünür.
 */
export function LabSequence({
  labs,
  eyebrow,
  heading,
}: {
  labs: Lab[];
  eyebrow: string;
  heading: string;
}) {
  return (
    <section className="bg-brand-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brand-200">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-[1.14] tracking-[-0.01em] md:text-4xl">
          {heading}
        </h2>

        <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
          {labs.map((lab, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={lab.slug}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] lg:aspect-[5/4] ${
                    flip ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={lab.img}
                    alt={lab.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>

                <div className={flip ? "md:order-1" : ""}>
                  <span className="block font-serif text-5xl leading-none text-brand-200/60 md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl leading-[1.12] tracking-[-0.01em] md:text-4xl">
                    {lab.name}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-brand-50/85">
                    {lab.summary}
                  </p>
                  <Link
                    href={`/departments/${lab.slug}`}
                    className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-medium text-white transition-colors duration-[var(--duration-base)] hover:border-white/60 hover:bg-white/10"
                  >
                    {lab.cta}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
