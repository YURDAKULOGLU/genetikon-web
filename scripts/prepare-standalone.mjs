import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const standaloneRoot = path.join(root, ".next", "standalone");

if (!existsSync(standaloneRoot)) {
  throw new Error("Next standalone output missing. Run `next build` first.");
}

async function copyFresh(source, target) {
  if (!existsSync(source)) return;
  await rm(target, { recursive: true, force: true });
  await mkdir(path.dirname(target), { recursive: true });
  await cp(source, target, { recursive: true });
}

await copyFresh(path.join(root, ".next", "static"), path.join(standaloneRoot, ".next", "static"));
await copyFresh(path.join(root, "public"), path.join(standaloneRoot, "public"));
