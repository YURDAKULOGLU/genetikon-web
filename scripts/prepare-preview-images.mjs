import { mkdir, readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

// Match next.config.ts. Original photographs are never modified or enlarged.
const widths = [32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1400, 1920, 2000];
const qualities = [75, 90];

export async function preparePreviewImages(root) {
  const source = join(root, "public", "img");
  const output = join(source, "responsive");
  await mkdir(output, { recursive: true });
  let generated = 0;
  for (const file of await readdir(source)) {
    if (!/^[a-z0-9-]+\.jpg$/.test(file)) continue;
    const input = join(source, file);
    const inputStat = await stat(input);
    for (const width of widths) {
      for (const quality of qualities) {
        const destination = join(output, `${file.slice(0, -4)}-w${width}-q${quality}.webp`);
        const existing = await stat(destination).catch(() => null);
        if (existing && existing.mtimeMs >= inputStat.mtimeMs) continue;
        await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(destination);
        generated += 1;
      }
    }
  }
  console.log(`Preview images: ${generated} responsive variants generated.`);
}
