import type { Metadata } from "next";
import { DepartmentPage } from "@/components/department-page";
import { departmentsContent } from "@/lib/content/site-content";
import { lt } from "@/lib/content/localize";
import { siteConfig } from "@/site.config";
import { localizedAlternates } from "@/lib/i18n/metadata";

const SLUG = "ivf-center";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = departmentsContent[SLUG]!;
  const path = `/departments/${SLUG}`;
  return {
    title: `${lt(c.title, locale)} — ${siteConfig.name}`,
    description: lt(c.intro, locale).slice(0, 155),
    alternates: localizedAlternates(path, locale),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <DepartmentPage slug={SLUG} locale={locale} />;
}
