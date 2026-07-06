import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pagesContent } from "@/lib/content/site-content";
import { lt } from "@/lib/content/localize";
import { ContentSections } from "@/components/content-sections";
import { PageHeader } from "@/components/page-header";
import { Link } from "@/lib/i18n/navigation";
import { siteConfig } from "@/site.config";
import { localizedAlternates } from "@/lib/i18n/metadata";
import { btn } from "@/lib/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = pagesContent["international-patients"]!;
  return {
    title: `${lt(c.title, locale)} — ${siteConfig.name}`,
    description: lt(c.intro, locale).slice(0, 155),
    alternates: localizedAlternates("/international-patients", locale),
  };
}

export default async function InternationalPatientsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = pagesContent["international-patients"]!;
  const t = await getTranslations("home");
  return (
    <>
      <PageHeader image="/img/intl-1.jpg" eyebrow={t("internationalKicker")} title={lt(c.title, locale)} />
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="measure text-lg leading-[1.6] text-ink-muted">{lt(c.intro, locale)}</p>
        <ContentSections sections={c.sections} locale={locale} />
        <div className="mt-12">
          <Link href="/contact" className={btn("primary", "md")}>
            {t("heroCtaPrimary")}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
