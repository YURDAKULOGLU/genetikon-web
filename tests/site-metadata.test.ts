import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

async function metadataFor(preview: boolean, released: boolean) {
  vi.stubEnv("GENETIKON_PREVIEW", preview ? "1" : "0");
  vi.stubEnv("GENETIKON_PUBLIC_RELEASE", released ? "1" : "0");
  vi.resetModules();
  return import("../src/lib/i18n/metadata");
}

describe("deployment-aware metadata", () => {
  it("keeps preview links and assets inside its subdirectory even with release enabled", async () => {
    const { pageMetadata } = await metadataFor(true, true);
    const metadata = pageMetadata("/about", "tr", "Title", "Description");
    expect(metadata.alternates?.canonical).toBe("https://yurdakul.net.tr/genetikon/tr/about/");
    expect(metadata.openGraph).toMatchObject({
      url: "https://yurdakul.net.tr/genetikon/tr/about/",
      locale: "tr_TR",
      images: [{ url: "https://yurdakul.net.tr/genetikon/brand/wordmark.png" }],
    });
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it("requires explicit release approval for production indexing", async () => {
    const draft = await metadataFor(false, false);
    expect(draft.pageMetadata("/", "en", "Title", "Description").robots)
      .toEqual({ index: false, follow: false });
    const live = await metadataFor(false, true);
    const metadata = live.pageMetadata("/contact", "ka", "Title", "Description");
    expect(metadata.robots).toEqual({ index: true, follow: true });
    expect(metadata.openGraph).toMatchObject({
      url: "https://www.genetikon.com/ka/contact",
      locale: "ka_GE",
    });
  });

  it("advertises complete translated routes with matching locale metadata", async () => {
    const { pageMetadata } = await metadataFor(false, true);
    const metadata = pageMetadata("/about", "az", "Title", "Description");
    expect(metadata.robots).toEqual({ index: true, follow: true });
    expect(Object.keys(metadata.alternates?.languages ?? {})).toEqual(["en", "tr", "ru", "ka", "az"]);
    expect(metadata.openGraph).toMatchObject({ locale: "az_AZ" });
  });
});
