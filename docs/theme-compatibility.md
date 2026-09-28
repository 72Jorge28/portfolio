# Theme bootstrap compatibility

Verified with Next.js 16.3.5, React / React DOM 19.2.8, and next-themes 0.4.6.

## Cause

next-themes renders an inline ThemeScript during both SSR and client rendering.
React warns when a JavaScript script element is created on the client: these
scripts are inert and do not execute. Locale-root navigation can mount a new
provider and trigger this warning. This is also reported upstream in
[issue 385](https://github.com/pacocoursey/next-themes/issues/385) and
[issue 387](https://github.com/pacocoursey/next-themes/issues/387).

The installed package's `dist/index.mjs` and `dist/index.d.ts` expose `scriptProps`
and spread it onto the script. The installed React DOM implementation distinguishes
JavaScript scripts from inert data blocks through `isScriptDataBlock`.

## Decision

Use the supported `scriptProps` API in our ThemeProvider:

- On the server, keep `type="text/javascript"`. The browser parser executes the
  original library bootstrap synchronously before page content and hydration.
  Persisted or system preference is therefore applied before the first paint.
- On the client, use `type="application/x-next-themes-bootstrap"`. A newly mounted
  script is explicitly inert. next-themes effects apply the theme and subscribe
  to system/storage changes; executing the bootstrap again is unnecessary.

The library already suppresses its script's hydration differences. The expected
server/client type difference uses that existing boundary; no new warning
suppression is added. This does not intercept console output, remove the early
bootstrap, defer the provider until mounting, or duplicate its storage logic.
No package patch or dependency change is required.

This is a version-specific compatibility measure, not a general script-loading
pattern. Reassess it when upgrading React or next-themes. Preserve the early
bootstrap if replacing it. Framework script loading guidance was checked in
`node_modules/next/dist/docs/01-app/02-guides/scripts.md`.

## Regression checks

Use a development build, where the warning is emitted. Check initial hydration,
client page navigation, and locale-root navigation with all three theme choices.
Reload with a stored dark preference and a light system preference, then reverse
them. Inspect the server response to ensure the bootstrap remains executable.
Check system changes, storage persistence, and the absence of console errors.
