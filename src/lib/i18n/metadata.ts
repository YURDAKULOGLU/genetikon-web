import { routing } from "./routing";

export function localizedPath(locale: string, path = "/") {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalizedPath || ""}`;
}

export function localizedAlternates(path = "/", currentLocale: string) {
  return {
    canonical: localizedPath(currentLocale, path),
    languages: Object.fromEntries(
      routing.locales.map((locale) => [locale, localizedPath(locale, path)]),
    ),
  };
}
