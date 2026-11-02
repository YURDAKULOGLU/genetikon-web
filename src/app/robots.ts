import type { MetadataRoute } from "next";
import { absoluteSiteUrl, isIndexable, siteOrigin } from "@/lib/site-environment";
export const dynamic = "force-static";

// SEO §4.4: Googlebot + AI-search botları explicit allow; sitemap referansı.
export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
    ],
    sitemap: absoluteSiteUrl("/sitemap.xml"),
    host: siteOrigin,
  };
}
