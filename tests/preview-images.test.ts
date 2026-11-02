import { describe, expect, it } from "vitest";
import { mkdtemp, mkdir, rm, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";
import { preparePreviewImages } from "../scripts/prepare-preview-images.mjs";
import previewImageLoader from "../src/lib/preview-image-loader";

describe("exported responsive photographs", () => {
  it("provides real smaller WebP variants without enlarging the source", async () => {
    sharp.cache(false);
    const root = await mkdtemp(join(tmpdir(), "genetikon-images-"));
    try {
      await mkdir(join(root, "public", "img"), { recursive: true });
      await sharp({ create: { width: 1200, height: 800, channels: 3, background: "#aacaca" } }).jpeg().toFile(join(root, "public", "img", "hero-1.jpg"));
      await preparePreviewImages(root);
      for (const width of [640, 1080, 2000]) {
        const url = previewImageLoader({ src: "/img/hero-1.jpg", width, quality: 75 });
        const file = join(root, "public", url.replace("/genetikon/", ""));
        const metadata = await sharp(await readFile(file)).metadata();
        expect(metadata.format).toBe("webp");
        expect(metadata.width).toBe(Math.min(width, 1200));
      }
      expect(previewImageLoader({ src: "/genetikon/brand/wordmark-hd.png", width: 640 })).toBe("/genetikon/brand/wordmark-hd.png");
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });
});
