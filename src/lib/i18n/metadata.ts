import type { Metadata } from "next";
import { siteConfig } from "../../site.config";
import { absoluteSiteUrl, isIndexable, isPreview, siteOrigin } from "../site-environment";

// All supported routes have complete translations; clinical release approval is separate.
export function localizedPath(locale: string, path = "/") {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const route = `/${locale}${normalizedPath}`.replace(/\/$/, "");
  return isPreview ? `${route}/` : route;
}

export function localizedAlternates(path = "/", currentLocale: string) {
  return {
    canonical: absoluteSiteUrl(localizedPath(currentLocale, path)),
    languages: Object.fromEntries(
      siteConfig.locales.map((locale) => [
        locale,
        absoluteSiteUrl(localizedPath(locale, path)),
      ]),
    ),
  };
}

const ogLocales: Record<string, string> = {
  en: "en_US", tr: "tr_TR", ru: "ru_RU", ka: "ka_GE", az: "az_AZ",
};

export function pageMetadata(
  path: string,
  locale: string,
  title: string,
  description: string,
): Metadata {
  const contentLocale = siteConfig.locales.includes(locale as (typeof siteConfig.locales)[number]) ? locale : "en";
  const canIndex = isIndexable && contentLocale === locale;
  const images = [{
    url: absoluteSiteUrl("/brand/wordmark.png"),
    width: 644,
    height: 167,
    alt: siteConfig.name,
  }];
  return {
    metadataBase: new URL(siteOrigin),
    title,
    description,
    robots: { index: canIndex, follow: isIndexable },
    alternates: localizedAlternates(path, locale),
    openGraph: {
      title,
      description,
      url: absoluteSiteUrl(localizedPath(locale, path)),
      siteName: siteConfig.name,
      type: "website",
      locale: ogLocales[contentLocale],
      alternateLocale: siteConfig.locales
        .filter((value) => value !== contentLocale)
        .map((value) => ogLocales[value]!),
      images,
    },
    twitter: { card: "summary", title, description, images },
  };
}
