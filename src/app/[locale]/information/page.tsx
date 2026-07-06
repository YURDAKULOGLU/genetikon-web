import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { pagesContent } from "@/lib/content/site-content";
import { lt } from "@/lib/content/localize";
import { ContentSections } from "@/components/content-sections";
import { PageHeader } from "@/components/page-header";
import { Link } from "@/lib/i18n/navigation";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";
import { siteConfig } from "@/site.config";
import { localizedAlternates } from "@/lib/i18n/metadata";

const DEPTS = [
  { slug: "medical-genetics", img: "/img/genetics-1.jpg", name: "Medical Genetics" },
  { slug: "stem-cell-therapy", img: "/img/stemcell-1.jpg", name: "Stem Cell Therapy" },
  { slug: "ivf-center", img: "/img/ivf-1.jpg", name: "IVF Center" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = pagesContent["information"]!;
  return {
    title: `${lt(c.title, locale)} — ${siteConfig.name}`,
    description: lt(c.intro, locale).slice(0, 155),
    alternates: localizedAlternates("/information", locale),
  };
}

export default async function InformationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = pagesContent["information"]!;
  return (
    <>
      <PageHeader image="/img/labtech-1.jpg" eyebrow="Genetikon" title={lt(c.title, locale)} />
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="measure text-lg leading-[1.6] text-ink-muted">{lt(c.intro, locale)}</p>
        <ContentSections sections={c.sections} locale={locale} />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {DEPTS.map((d) => (
            <Link
              key={d.slug}
              href={`/departments/${d.slug}`}
              className="group relative overflow-hidden rounded-[var(--radius-card)]"
            >
              <div className="relative aspect-[4/3]">
                <Image src={d.img} alt={d.name} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 to-brand-900/20" aria-hidden />
              </div>
              <span className="absolute bottom-4 left-4 font-serif text-lg text-white">
                {d.name} →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <MedicalDisclaimer variant="medical" />
        </div>
      </div>
    </>
  );
}
