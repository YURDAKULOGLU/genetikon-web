import { siteConfig } from "../site.config";

/** Search visibility is a release decision, independent of deployment shape. */
export const isPreview = process.env.GENETIKON_PREVIEW === "1";
export const isIndexable = !isPreview && process.env.GENETIKON_PUBLIC_RELEASE === "1";
export const siteOrigin = isPreview ? "https://yurdakul.net.tr" : siteConfig.url;
export const siteBasePath = isPreview ? "/genetikon" : "";
export const siteUrl = `${siteOrigin}${siteBasePath}`;

/** For document/asset URLs; Next Link/router already apply their own basePath. */
export function sitePath(path = "/") {
  return `${siteBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteSiteUrl(path = "/") {
  return `${siteOrigin}${sitePath(path)}`;
}
