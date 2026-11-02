import type { Metadata } from "next";
import { siteConfig } from "../../site.config";
import { absoluteSiteUrl, isIndexable, isPreview, siteOrigin } from "../site-environment";

// Deep content is only supplied in EN/TR. Do not claim missing translations
// as hreflang equivalents or submit their English fallback pages for indexing.
export function translatedLocalesForPath(path = "/"): readonly string[] {
  return ["", "/", "/contact", "/contact/"].includes(path)
    ? siteConfig.locales
    : ["en", "tr"];
}

export function contentLocaleForPath(locale: string, path = "/") {
  return translatedLocalesForPath(path).includes(locale) ? locale : "en";
}

export function localizedPath(locale: string, path = "/") {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const route = `/${locale}${normalizedPath}`.replace(/\/$/, "");
  return isPreview ? `${route}/` : route;
}

export function localizedAlternates(path = "/", currentLocale: string) {
  return {
    canonical: absoluteSiteUrl(localizedPath(currentLocale, path)),
    languages: Object.fromEntries(
      translatedLocalesForPath(path).map((locale) => [
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
  const contentLocale = contentLocaleForPath(locale, path);
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
      alternateLocale: translatedLocalesForPath(path)
        .filter((value) => value !== contentLocale)
        .map((value) => ogLocales[value]!),
      images,
    },
    twitter: { card: "summary", title, description, images },
  };
}
