import { spawnSync, execFileSync } from "node:child_process";
import { readdirSync, existsSync, copyFileSync, writeFileSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const result = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build", "--webpack"], {
  cwd: root, stdio: "inherit", env: { ...process.env, GENETIKON_PREVIEW: "1" },
});
if (result.status !== 0) process.exit(result.status || 1);
const output = join(root, ".next-preview");
if (!existsSync(join(output, "en/index.html"))) throw new Error("Preview export missing English home");

// Next's segment requests use dot-joined names; retain directory-form outputs too.
function walk(directory) {
  for (const item of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) { walk(path); continue; }
    const relative = path.slice(output.length + 1).split(/[\\/]/);
    const index = relative.findIndex((part) => part.startsWith("__next."));
    if (index >= 0 && index < relative.length - 1) {
      copyFileSync(path, join(output, ...relative.slice(0, index), relative.slice(index).join(".")));
    }
  }
}
walk(output);
writeFileSync(join(output, "index.html"), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex, nofollow"><meta http-equiv="refresh" content="0;url=/genetikon/en/"><title>Genetikon site preview</title></head><body><a href="/genetikon/en/">Genetikon site preview</a></body></html>\n');
writeFileSync(join(output, "preview-source.json"), JSON.stringify({
  repository: "YURDAKULOGLU/genetikon-web",
  commit: execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim(),
}) + "\n");
