import { createServer } from "node:http";
import { readFile, stat, mkdir, writeFile } from "node:fs/promises";
import { resolve, sep, extname, join } from "node:path";
import assert from "node:assert/strict";
import { chromium } from "playwright";

const root = resolve('.next-hosting');
const mime = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json', '.xml':'application/xml', '.txt':'text/plain', '.webmanifest':'application/manifest+json', '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.woff2':'font/woff2' };
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let file = resolve(root, '.' + decodeURIComponent(url.pathname));
    if (file !== root && !file.startsWith(root + sep)) throw new Error('Invalid path');
    const info = await stat(file);
    if (info.isDirectory()) file = join(file, 'index.html');
    res.writeHead(200, { 'Content-Type': `${mime[extname(file)] || 'application/octet-stream'}; charset=utf-8` });
    res.end(await readFile(file));
  } catch { res.writeHead(404).end('Not found'); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch();
const routes = ['', 'about/', 'contact/', 'information/', 'international-patients/', 'departments/medical-genetics/', 'departments/stem-cell-therapy/', 'departments/ivf-center/', 'privacy/', 'terms/', 'cookie-policy/'];
const locales = ['en', 'tr', 'ru', 'ka', 'az'];
const localTargets = new Set();
const failures = [];
let pages = 0;
try {
  for (const locale of locales) {
    const page = await browser.newPage({ viewport:{width:1280,height:800} });
    page.on('response', response => { if (response.url().startsWith(base) && response.status() >= 400) failures.push(`${response.status()} ${response.url()}`); });
    for (const route of routes) {
      const path = `/${locale}/${route}`;
      const response = await page.goto(base + path, {waitUntil:'networkidle'});
      assert.equal(response.status(), 200, path);
      assert.equal(await page.locator('html').getAttribute('lang'), locale);
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), `https://www.genetikon.com${path}`);
      assert(!/noindex/.test(await page.locator('meta[name="robots"]').getAttribute('content')));
      assert.equal(await page.locator('link[rel="alternate"][hreflang]').count(), 5);
      const targets = await page.locator('a[href], img[src], link[href], script[src]').evaluateAll(elements => elements.map(e => e.getAttribute('href') || e.getAttribute('src')));
      for (const target of targets) if (target?.startsWith('/')) {
        assert(!target.startsWith('/genetikon/'), `${path}: preview prefix ${target}`);
        localTargets.add(target.split('#')[0].split('?')[0]);
      }
      assert.equal(await page.locator('img').evaluateAll(images => images.filter(i => !i.complete || !i.naturalWidth).length), 0, `Broken image: ${path}`);
      if (route === 'departments/stem-cell-therapy/') {
        assert.equal(await page.locator('[data-application-list]').count(), 2);
        await page.setViewportSize({width:320,height:740});
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        await page.setViewportSize({width:1280,height:800});
      }
      pages++;
    }
    await page.goto(`${base}/${locale}/departments/stem-cell-therapy/`);
    await page.getByRole('link', {name: locale === 'tr' ? 'EN' : 'TR', exact:true}).click();
    await page.waitForURL(`**/${locale === 'tr' ? 'en' : 'tr'}/departments/stem-cell-therapy/`);
    assert(new URL(page.url()).origin === base);
    await page.close();
  }
  for (const path of localTargets) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, `Missing local destination: ${path}`);
  }
  const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
  assert.equal((sitemap.match(/<loc>/g) || []).length, 55);
  assert(!sitemap.includes('yurdakul.net.tr'));
  const robots = await readFile(join(root, 'robots.txt'), 'utf8');
  assert(!robots.includes('Disallow: /'));
  assert(robots.includes('https://www.genetikon.com/sitemap.xml'));
  const manifest = JSON.parse(await readFile(join(root, 'manifest.webmanifest'), 'utf8'));
  assert.equal(manifest.start_url, '/en/');
  assert.equal(manifest.icons[0].src, '/icon.png');
  const page = await browser.newPage();
  await page.goto(base + '/');
  await page.waitForURL('**/en/');
  await page.close();
  assert.deepEqual(failures, []);
  const result = { checkedAt:new Date().toISOString(), pages, localTargets:localTargets.size, languages:locales, domain:'https://www.genetikon.com', mobile:'passed', languageNavigation:'passed', rootRedirect:'passed', missingAssets:0, note:'Local static hosting simulation; provider account and server configuration still require access.' };
  await mkdir('test-results', {recursive:true});
  await writeFile('test-results/hosting-verification.json', JSON.stringify(result,null,2));
  console.log(JSON.stringify(result));
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
