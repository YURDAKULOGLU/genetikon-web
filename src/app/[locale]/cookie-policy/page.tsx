import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalContent } from "@/lib/content/site-content";
import { lt } from "@/lib/content/localize";
import { siteConfig } from "@/site.config";
import { localizedAlternates } from "@/lib/i18n/metadata";

const CONTENT_KEY = "cookie-policy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = legalContent[CONTENT_KEY]!;
  const path = "/cookie-policy";
  return {
    title: `${lt(content.heading, locale)} — ${siteConfig.name}`,
    description: lt(content.intro ?? content.heading, locale).slice(0, 155),
    alternates: localizedAlternates(path, locale),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LegalPage contentKey={CONTENT_KEY} locale={locale} />;
}
