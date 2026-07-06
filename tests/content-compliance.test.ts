import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));

function listFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) return listFiles(path);
    return path;
  });
}

const publicContentFiles = [
  join(projectRoot, "src", "lib", "content", "site-content.ts"),
  ...listFiles(join(projectRoot, "messages")),
].filter((path) => /\.(ts|json)$/.test(path));

function readPublicText() {
  return publicContentFiles
    .map((path) => readFileSync(path, "utf8"))
    .join("\n");
}

describe("public medical-site compliance", () => {
  it("does not expose owner or personal/team identity on public web surfaces", () => {
    expect(readPublicText()).not.toMatch(/Huseyin|Hüseyin|Yurdakul|Dr\.\s/i);
  });

  it("does not publish draft placeholders in public legal content", () => {
    expect(readPublicText()).not.toMatch(/DRAFT|TASLAK|\[DATE TO CONFIRM\]|\[TARIH TEYIT EDILECEK\]|must be confirmed during final legal review|yayindan once/i);
  });

  it("does not publish concrete prices, campaigns, testimonials or before-after claims", () => {
    expect(readPublicText()).not.toMatch(/\d+\s*(₺|TL|TRY|USD|EUR|\$|€)/i);
    expect(readPublicText()).not.toMatch(/testimonial widget|hasta yorumu widget|before-after gallery|oncesi-sonrasi galeri|discount campaign|indirim kampanyasi/i);
  });
});
