import { use } from "react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/site.config";
import { ContactForm } from "@/components/contact-form";
import { localizedAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "form" });
  const path = "/contact";
  return {
    title: `${t("title")} — ${siteConfig.name}`,
    description:
      locale === "tr"
        ? "Genetikon Genetics Center Batumi ile bilgi talebi, telefon, e-posta ve WhatsApp üzerinden iletişim."
        : "Contact Genetikon Genetics Center in Batumi by information request, phone, email or WhatsApp.",
    alternates: localizedAlternates(path, locale),
  };
}

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("home");
  const tf = useTranslations("form");

  return (
    <div className="mx-auto flex max-w-4xl flex-col px-6 py-16 md:min-h-[calc(100vh-4.5rem)] md:justify-center md:py-20">
      <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.015em] text-brand-900 md:text-5xl">
        {tf("title")}
      </h1>
      <p className="measure mt-4 leading-relaxed text-ink-muted">{t("contactBody")}</p>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
        <ContactForm />
        <address className="h-fit rounded-[var(--radius-card)] border border-divider bg-bg-soft p-6 text-sm not-italic text-ink md:mt-8">
          <p className="font-medium">Genetikon Genetics Center — Batumi</p>
          <p className="mt-2">{siteConfig.contact.address}</p>
          <p className="mt-2">
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="inline-flex min-h-[32px] items-center text-brand-700">
              {siteConfig.contact.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex min-h-[32px] items-center text-brand-700">
              {siteConfig.contact.email}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              className="inline-flex min-h-[32px] items-center text-brand-700"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </p>
        </address>
      </div>
    </div>
  );
}
