import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import { pageMetadata } from "@/lib/i18n/metadata";
import { siteUrl } from "@/lib/site-environment";
import { siteConfig, type Locale } from "@/site.config";
import { getTranslations as getT } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";
import { StickyContact } from "@/components/sticky-contact";
import { SmoothScroll } from "@/components/smooth-scroll";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport = {
  themeColor: "#00aea6",
  colorScheme: "light" as const,
};

// Self-hosted webfonts (next/font — build-time bundle, dış Google çağrısı yok).
// latin-ext: Türkçe karakter desteği. Fraunces = editoryal serif display
// (logo serif wordmark ile rezonans); Figtree = temiz sans gövde (Inter DEĞİL).
const sans = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-loaded",
  display: "swap",
});
// Yalnız kullanılan varyantlar (400/500 normal) — font budget ≤100KB (§4.2).
// latin-ext: TR başlık karakterleri (ğ/ı/ş) fallback'e düşmesin.
const serif = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-serif-loaded",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return pageMetadata("/", locale, t("title"), t("description"));
}

// Only the brand identity is asserted until current clinic facts are approved.
function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}#organization`, name: siteConfig.name, url: siteUrl },
      { "@type": "WebSite", "@id": `${siteUrl}#website`, name: siteConfig.name, url: siteUrl,
        publisher: { "@id": `${siteUrl}#organization` } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getT({ locale, namespace: "a11y" });

  return (
    <html lang={locale} className={`${sans.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider>
          <SmoothScroll />
          <OrganizationJsonLd />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-brand-800"
          >
            {t("skipToContent")}
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <StickyContact />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
