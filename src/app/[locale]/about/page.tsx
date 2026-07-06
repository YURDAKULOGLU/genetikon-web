import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pagesContent } from "@/lib/content/site-content";
import { lt } from "@/lib/content/localize";
import { ContentSections } from "@/components/content-sections";
import { ContactCta } from "@/components/contact-cta";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/site.config";
import { localizedAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = pagesContent["about"]!;
  return {
    title: `${lt(c.title, locale)} — ${siteConfig.name}`,
    description: lt(c.intro, locale).slice(0, 155),
    alternates: localizedAlternates("/about", locale),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = pagesContent["about"]!;
  return (
    <>
      <PageHeader image="/img/intl-2.jpg" eyebrow="Genetikon" title={lt(c.title, locale)} />
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="measure text-lg leading-[1.6] text-ink-muted">{lt(c.intro, locale)}</p>
        <ContentSections sections={c.sections} locale={locale} />
        <div className="mt-14">
          <ContactCta />
        </div>
      </div>
    </>
  );
}
