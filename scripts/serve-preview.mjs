import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

// Local verification only. Match the portfolio's /genetikon/ mount point.
const root = resolve(".next-preview");
const port = Number(process.env.PORT || 3017);
const types = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json",
  ".webmanifest": "application/manifest+json", ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".ico": "image/x-icon",
};
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://127.0.0.1:${port}`);
    if (!url.pathname.startsWith("/genetikon/")) {
      res.writeHead(404).end(); return;
    }
    const path = resolve(root, decodeURIComponent(url.pathname.slice("/genetikon/".length)));
    if (path !== root && !path.startsWith(root + sep)) {
      res.writeHead(404).end(); return;
    }
    const info = await stat(path);
    const target = info.isDirectory() ? resolve(path, "index.html") : path;
    const body = await readFile(target);
    res.writeHead(200, { "Content-Type": types[extname(target)] || "application/octet-stream", "X-Robots-Tag": "noindex, nofollow" });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(port, "127.0.0.1", () => console.log(`Preview test server: http://127.0.0.1:${port}/genetikon/`));
