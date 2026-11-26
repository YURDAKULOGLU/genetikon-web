import { spawnSync, execFileSync } from "node:child_process";
import { readdirSync, existsSync, copyFileSync, writeFileSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { preparePreviewImages } from "./prepare-preview-images.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
await preparePreviewImages(root);
const result = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build", "--webpack"], {
  cwd: root, stdio: "inherit",
  env: { ...process.env, GENETIKON_PREVIEW: "0", GENETIKON_SHARED_HOSTING: "1", GENETIKON_PUBLIC_RELEASE: "1" },
});
if (result.status !== 0) process.exit(result.status || 1);
const output = join(root, ".next-hosting");
for (const locale of ["en", "tr", "ru", "ka", "az"]) {
  if (!existsSync(join(output, locale, "index.html"))) throw new Error(`Missing ${locale} home`);
}

// Retain both exported segment paths and the dot-joined paths used by Next navigation.
function walk(directory) {
  for (const item of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) { walk(path); continue; }
    const relative = path.slice(output.length + 1).split(/[\\/]/);
    const index = relative.findIndex(part => part.startsWith("__next."));
    if (index >= 0 && index < relative.length - 1) {
      copyFileSync(path, join(output, ...relative.slice(0, index), relative.slice(index).join(".")));
    }
  }
}
walk(output);
writeFileSync(join(output, "index.html"), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=/en/"><link rel="canonical" href="https://www.genetikon.com/en/"><title>Genetikon Genetics Center</title></head><body><a href="/en/">English</a> · <a href="/tr/">Türkçe</a> · <a href="/ru/">Русский</a> · <a href="/ka/">ქართული</a> · <a href="/az/">Azərbaycanca</a></body></html>\n');
writeFileSync(join(output, ".htaccess"), `DirectoryIndex index.html
ErrorDocument 404 /404.html
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set X-Frame-Options "SAMEORIGIN"
</IfModule>
`);
writeFileSync(join(output, "release.json"), JSON.stringify({
  site: "https://www.genetikon.com", build: "shared-hosting-static",
  sourceCommit: execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim(),
  builtAt: new Date().toISOString(),
}) + "\n");
console.log("Hosting files ready in .next-hosting; no upload or DNS changes performed.");
