import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import { localizedAlternates } from "@/lib/i18n/metadata";
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
  return {
    metadataBase: new URL(siteConfig.url),
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates("/", locale),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

// JSON-LD MedicalClinic (SEO §4.4 — en spesifik LocalBusiness alt tipi).
function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    alternateName: "Genetikon",
    url: siteConfig.url,
    description:
      "Genetikon Genetics Center is a medical institution in Batumi, Georgia combining a Medical Genetics Laboratory, a Stem Cell Therapy Laboratory and an IVF Center, serving international patients.",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "165 Vakhtang Gorgasali St",
      addressLocality: "Batumi",
      postalCode: "6004",
      addressCountry: "GE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.lat,
      longitude: siteConfig.contact.geo.lng,
    },
    areaServed: "Worldwide",
    availableLanguage: ["en", "tr"],
    // MedicalSpecialty enum'unda kök hücre karşılığı yok; kapsamı knowsAbout taşır.
    medicalSpecialty: ["Genetic", "ObGyn"],
    knowsAbout: [
      "Medical genetics",
      "Genetic counseling",
      "Prenatal diagnosis",
      "Non-invasive prenatal testing (NIPT)",
      "Preimplantation genetic testing (PGT)",
      "Karyotyping",
      "Fluorescence in situ hybridization (FISH)",
      "PCR-based molecular analysis",
      "Regenerative medicine",
      "Autologous stem cell therapy",
      "In vitro fertilization (IVF)",
      "ICSI",
      "Egg and sperm donation",
      "Surrogacy",
    ],
    department: [
      {
        "@type": "MedicalClinic",
        name: "Medical Genetics Laboratory",
        url: `${siteConfig.url}/en/departments/medical-genetics`,
      },
      {
        "@type": "MedicalClinic",
        name: "Stem Cell Therapy Laboratory",
        url: `${siteConfig.url}/en/departments/stem-cell-therapy`,
      },
      {
        "@type": "MedicalClinic",
        name: "IVF Center",
        url: `${siteConfig.url}/en/departments/ivf-center`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
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
