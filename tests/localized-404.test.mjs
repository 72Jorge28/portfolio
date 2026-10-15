import assert from "node:assert/strict";
import test from "node:test";

// Native red attribution: MEMORY.md, "Localized 404 without JavaScript", records
// actual-app direct visits in development and production, en/es and nested paths:
// HTTP 404 with empty __next_error__ HTML; native CDP script disabling exposed a
// blank document without a heading, document language or recovery link. Valid
// localized routes returned HTML/200. This predates the production correction.
// The ordinary-DOM regression must check content outside scripts/templates:
// en: "Page not found" / "This page is unavailable." / "Return home" -> /en;
// es: "Página no encontrada" / "Esta página no está disponible." /
// "Volver al inicio" -> /es; correct html lang, one main/main-content, semantic
// h1, visible native anchor, noindex, visible focus and Tab/Enter -> localized Home200.
// Disable native top-level browser scripts BEFORE direct visits and reloads for
// all four missing paths below, in dev/prod; repeat with scripts enabled in T8.
// Limits: this is the recorded historical baseline, not a new browser execution.
// It does not establish historical exact-copy, reload, focus/keyboard or RNF-3
// matrix coverage. Historical /tmp evidence is unavailable, not reconstructed.
// HTTP-only assertions below may already pass on the blank baseline: they are
// not the native red/green regression or proof of visible localization/recovery.
// Invocations against coordinator-owned actual-app servers (T8, not started here):
// LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test
// LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test
// pnpm test without the variable explicitly skips these integration contracts.

const configuredOrigin = process.env.LOCALIZED_404_TEST_ORIGIN;

test("localized 404 HTTP contracts (not native browser coverage)", {
  skip: configuredOrigin === undefined
    ? "Set LOCALIZED_404_TEST_ORIGIN to an explicit loopback HTTP origin; integration coverage not run"
    : false,
}, async (t) => {
  const originError = "LOCALIZED_404_TEST_ORIGIN must be a loopback HTTP origin (localhost, 127.0.0.1 or [::1]) without credentials, a path, query or fragment";
  assert.match(
    configuredOrigin,
    /^http:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?\/?$/i,
    originError,
  );
  const origin = new URL(configuredOrigin);
  assert.equal(origin.protocol, "http:", originError);
  assert.equal(origin.username, "", originError);
  assert.equal(origin.password, "", originError);
  assert.equal(origin.pathname, "/", originError);
  assert.equal(origin.search, "", originError);
  assert.equal(origin.hash, "", originError);

  // Alternate en/es sequentially; language/leakage proof remains a browser check.
  // These are document requests, not RSC/prefetch requests; no automatic redirects.
  const cases = [
    ["/en/audit-missing", 404],
    ["/es/audit-missing", 404],
    ["/en/audit-missing/deeper", 404],
    ["/es/audit-missing/deeper", 404],
    ["/en", 200],
    ["/es", 200],
    ["/en/about", 200],
    ["/es/about", 200],
    ["/en/projects", 200],
    ["/es/projects", 200],
  ];

  for (const [path, expectedStatus] of cases) {
    await t.test(`${path} returns ${expectedStatus} without redirect`, async () => {
      const contraryLocale = path.startsWith("/en") ? "es" : "en";
      const response = await fetch(new URL(path, origin), {
        redirect: "manual",
        headers: {
          Accept: "text/html",
          "Accept-Language": contraryLocale,
          Cookie: `NEXT_LOCALE=${contraryLocale}`,
        },
        signal: AbortSignal.timeout(10_000),
      });
      // Consume the response without parsing HTML or mistaking Flight text for DOM.
      await response.text();
      assert.equal(response.status, expectedStatus, `${path}: document status`);
      assert.equal(response.headers.get("location"), null, `${path}: no Location`);
      assert.match(
        response.headers.get("content-type") ?? "",
        /^text\/html(?:\s*;|$)/i,
        `${path}: HTML document content type`,
      );
    });
  }
});
