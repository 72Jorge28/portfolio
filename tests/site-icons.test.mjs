import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const origin = process.env.SITE_ICONS_TEST_ORIGIN;

test("site icons are served in localized pages and the global 404 document", {
  skip: origin === undefined
    ? "Set SITE_ICONS_TEST_ORIGIN to an explicit loopback HTTP origin; integration coverage not run"
    : false,
}, async () => {
  assert.match(origin, /^http:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?\/?$/i);
  const icons = [
    "/favicon.ico",
    "/images/favicon-16x16.png",
    "/images/favicon-32x32.png",
    "/images/android-chrome-192x192.png",
    "/images/android-chrome-512x512.png",
    "/images/apple-touch-icon.png",
  ];

  for (const locale of ["en", "es"]) {
    for (const path of ["", "/about", "/projects", "/icon-check-missing"]) {
      const response = await fetch(new URL(`/${locale}${path}`, origin), {
        redirect: "manual",
        signal: AbortSignal.timeout(10_000),
      });
      assert.equal(response.status, path === "/icon-check-missing" ? 404 : 200);
      // Check actual head links, not metadata strings embedded in Flight scripts.
      const html = await response.text();
      const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? "";
      const links = [...head.matchAll(/<link\b[^>]*rel="(?:icon|apple-touch-icon)"[^>]*>/g)];
      assert.deepEqual(
        links.map(([link]) => link.match(/href="([^"]+)"/)?.[1]).sort(),
        [...icons].sort(),
        `/${locale}${path}: complete icon links in document head`,
      );
    }
  }

  for (const path of icons) {
    const response = await fetch(new URL(path, origin), {
      redirect: "manual",
      signal: AbortSignal.timeout(10_000),
    });
    assert.equal(response.status, 200, `${path}: no missing icon or redirect`);
    assert.match(response.headers.get("content-type") ?? "", /^image\//);
    const source = path === "/favicon.ico" ? "/images/favicon.ico" : path;
    assert.deepEqual(
      Buffer.from(await response.arrayBuffer()),
      await readFile(new URL(`../public${source}`, import.meta.url)),
      `${path}: supplied asset bytes preserved`,
    );
  }
});
