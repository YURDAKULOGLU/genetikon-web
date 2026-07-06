import { use } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { siteConfig } from "@/site.config";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { Reveal } from "@/components/reveal";
import { HeroParallax } from "@/components/hero-parallax";
import { LabSequence } from "@/components/lab-sequence";
import { FaqSection } from "@/components/faq-section";
import { faqItems } from "@/lib/content/faq";
import { lt } from "@/lib/content/localize";
import { btn } from "@/lib/ui/button";

const DEPT_IMG: Record<string, string> = {
  "medical-genetics": "/img/genetics-1.jpg",
  "stem-cell-therapy": "/img/stemcell-1.jpg",
  "ivf-center": "/img/ivf-1.jpg",
};

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("home");
  const td = useTranslations("departments");

  const labs = siteConfig.departments.map((dept) => ({
    slug: dept.slug,
    name: td(`${dept.key}.name`),
    summary: td(`${dept.key}.summary`),
    cta: td(`${dept.key}.cta`),
    img: DEPT_IMG[dept.slug] ?? "/img/hero-1.jpg",
  }));

  const faqLocalized = faqItems.map((f) => ({
    q: lt(f.q, locale),
    a: lt(f.a, locale),
  }));

  return (
    <>
      {/* Hero — "Living Helix": gerçek DNA fotoğrafı + gradient + canvas overlay */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-brand-900 text-white">
        {/* Katman 1: gerçek DNA fotoğrafı + scroll parallax */}
        <HeroParallax src="/img/hero-1.jpg" />
        {/* Katman 2: gradient — sol tarafta koyu (metin okunurluğu), sağda açılır */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/85 to-brand-900/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-brand-900/40"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <Reveal as="p" className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brand-100">
            {t("heroKicker")}
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-5 max-w-3xl font-serif text-[2.7rem] font-medium leading-[1.06] tracking-[-0.02em] sm:text-5xl md:text-6xl">
              {t("heroTitle")}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-50">
              {t("heroSubtitle")}
            </p>
          </Reveal>
          <Reveal delay={270}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className={btn("inverse", "lg")}>
                {t("heroCtaPrimary")}
              </Link>
              <Link href="/departments/medical-genetics" className={btn("outlineLight", "lg")}>
                {t("heroCtaSecondary")}
              </Link>
            </div>
          </Reveal>
          <Reveal as="p" delay={360} className="mt-8 text-sm text-brand-100">
            {t("trustLine")}
          </Reveal>
        </div>
      </section>

      {/* Trust strip — kurumsal güven markeri (kritik: isimsiz-kadro → kurumsal kanıt) */}
      <section className="border-b border-divider bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-divider md:grid-cols-4 md:divide-y-0">
          {(["labs", "center", "lang", "care"] as const).map((k) => (
            <div key={k} className="flex items-center justify-center px-6 py-8 text-center">
              <p className="text-sm font-medium leading-snug text-ink">
                {t(`trust.${k}`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* İmza sahnesi — pinned crossfade "tek merkez, üç laboratuvar" */}
      <LabSequence
        labs={labs}
        eyebrow={t("departmentsHeading")}
        heading={t("departmentsLede")}
      />

      {/* International patients — gerçek Batumi fotoğrafı */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <Reveal>
          <div className="relative flex min-h-[380px] flex-col justify-center overflow-hidden rounded-[var(--radius-card)] text-white md:min-h-[460px]">
            <Image
              src="/img/intl-1.jpg"
              alt="Batumi, Georgia"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/92 via-brand-900/70 to-brand-900/25" aria-hidden />
            <div className="relative px-7 py-14 md:px-16 md:py-20">
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brand-100">
                {t("internationalKicker")}
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-[1.12] tracking-[-0.01em] md:text-4xl">
                {t("internationalHeading")}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-brand-50">{t("internationalBody")}</p>
              <Link href="/international-patients" className={`mt-8 ${btn("inverse", "md")}`}>
                {t("heroCtaSecondary")}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SSS — görünür accordion + FAQPage schema (answer-engine / GEO) */}
      <FaqSection
        items={faqLocalized}
        heading={t("faqHeading")}
        eyebrow={t("faqEyebrow")}
        support={t("faqSupport")}
        contactLabel={t("faqContact")}
      />

      {/* Kapanış CTA — hafif brand-tinted band (ağırlık + genişliği doldurur) */}
      <section className="bg-brand-50/60">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div>
              <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.01em] text-ink md:text-4xl">
                {t("contactHeading")}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-ink-muted">
                {t("contactBody")}
              </p>
            </div>
            <div className="md:justify-self-end">
              <Link href="/contact" className={btn("primary", "lg")}>
                {t("heroCtaPrimary")}
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <MedicalDisclaimer variant="medical" />
          </div>
        </div>
      </section>
    </>
  );
}
