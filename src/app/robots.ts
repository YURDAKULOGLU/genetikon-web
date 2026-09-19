import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
export const dynamic = "force-static";

// SEO §4.4: Googlebot + AI-search botları explicit allow; sitemap referansı.
export default function robots(): MetadataRoute.Robots {
  if (process.env.GENETIKON_PREVIEW === "1") return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
