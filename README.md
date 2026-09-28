# Portfolio foundation

A multilingual, multi-page personal portfolio. The visual system, navigation,
Home Hero, Selected Work, About Preview, and the shared site footer are implemented.
The full About and Projects pages still await their final content and design.
See [the visual system notes](docs/visual-system.md) for tokens, fonts, portrait
replacement, responsive behavior, and scroll compatibility.

## Stack and commands

The original stack is preserved: Next.js 16.3.5, React / React DOM 19.2.8,
TypeScript 5.9.3, Tailwind CSS / PostCSS plugin 4.3.3, ESLint 9.39.5,
eslint-config-next 16.3.5, and pnpm 12.4.1. Added: next-intl 4.14.7 for
internationalization and next-themes 0.4.6 for persistent theme preferences.

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm exec next typegen
pnpm exec tsc --noEmit
pnpm test
pnpm build
pnpm start
```

Run `next typegen` before standalone type checking on a fresh checkout. Next.js
also generates route and root-parameter types during development and builds.
There is no configured formatter or additional test framework. Tests use Node's
built-in test runner. Existing dependency versions and build-script restrictions
are preserved; the new optional Parcel/SWC scripts are disabled as well. The
production build works with their prebuilt platform packages.

## Source structure

```text
src/
  app/
    globals.css
    [locale]/
      layout.tsx
      page.tsx
      not-found.tsx
      about/page.tsx
      projects/page.tsx
      [...rest]/page.tsx
  components/
    layout/       # Server header/footer and shared layout CSS Modules
    navigation/   # Navigation definitions, active links, locale switcher
    projects/     # Server-rendered project list, selected work, and previews
    home/         # Hero, portrait configuration, decorative SVG, and About preview
    ui/           # Physical media frame and interactive carousel
    theme/        # Theme provider and selector
  fonts/          # Local variable fonts, loader, and OFL licenses
  i18n/
    messages/en.json
    messages/es.json
    routing.ts
    navigation.ts
    request.ts
    types.d.ts
  lib/
    metadata.ts
    site.ts
    projects/
      types.ts
      catalog.ts
      queries.ts
  proxy.ts
tests/
  messages.test.mjs
docs/
  visual-system.md
```

## Locale routing

`i18n/routing.ts` owns supported locales and the English default. Every public
page has a locale prefix: `/en`, `/en/about`, `/en/projects` and their `/es`
equivalents. The next-intl proxy negotiates unprefixed requests using the locale
cookie and browser language, with English as the fallback. Explicit prefixes
take precedence. The locale switcher preserves the pathname, including future
project slugs; query strings and fragments are not currently retained.

The root layout lives inside `[locale]` and sets the HTML language. Request
configuration uses the installed Next.js 16.3 `next/root-params` API, validates
the locale, and loads the matching message file. All six pages are prerendered.
The catch-all route produces a localized 404 for unmatched paths. Unsupported
locale-like paths are not treated as new supported languages.

English messages define the TypeScript message-key contract. Translation tests
require matching, non-empty messages in Spanish; missing translations should be
fixed rather than silently mixed with another language.

## Server and client boundaries

Pages, project rendering, header, footer, content lookup, and metadata run on the
server. The application Client Components are:

- `Carousel`: scroll position, pointer/keyboard controls, and playback lifecycle.
- `ThemeProvider`: next-themes browser preference management.
- `ThemeSwitcher`: theme selection and hydration-safe browser state.
- `SiteNavigation`: current-path awareness for `aria-current`.
- `LocaleSwitcher`: current-path awareness when changing language.
- `NavigationMenu`: mobile disclosure state and keyboard/focus handling.

`NextIntlClientProvider` supplies locale context to navigation with
`messages={null}`. Translated labels are passed from the server, so the full
message catalog is not shipped to the client. Wrapping server-rendered children
with providers does not make those children Client Components.

## Themes and styling

next-themes defaults to the system preference, persists explicit choices in
local storage, and sets `data-theme` on the HTML element. Its startup script
applies the preference before hydration to minimize flashing. The HTML
element suppresses the expected theme-attribute hydration difference. See
[theme compatibility](docs/theme-compatibility.md) for the supported scriptProps
workaround and the library-owned script hydration boundary. The
selector uses the same disabled server/hydration state before enabling browser
preferences. Content remains server-rendered.

`app/globals.css` owns the ivory/sage/petrol palette, semantic color tokens,
typography, focus outlines, and reduced-motion rules. Component styling uses
CSS Modules. Tailwind's existing import and PostCSS configuration are retained.
Mobile navigation uses a compact disclosure with native links and controls.
Desktop navigation stays inline, independent of the Hero scroll composition.

## Project content

`lib/projects/types.ts` defines the public project shape: slug, title, short
description, optional case study, technologies, images with dimensions and alt
text, optional repository/live URLs, optional status, category, placeholder tone, and featured flag.

`catalog.ts` owns language-independent project records. `queries.ts` resolves
their text from the `ProjectContent` message namespace and returns the domain
model to presentation components. Three named projects are included with explicitly pending details and media,
without invented technology claims, external URLs, or imagery.

To add a real project, add its catalog entry and matching English/Spanish text.
Long case studies and image alt text should be localized in the content layer
when real content arrives. Add `app/[locale]/projects/[slug]/page.tsx` when detail
pages are needed, look up the shared slug, and return `notFound()` for unknown
projects. No detail links or empty detail routes are published yet.

## About preview and footer

`AboutPreview` supplies two short translated paragraphs and a locale-aware link
to `/about`. Desktop uses an offset text column; mobile uses a vertical flow.
`SiteFooter` stays in the shared locale layout, with identity, existing internal
navigation, copyright, and an aria-hidden SVG divider. Both are Server Components
with CSS Modules and no motion or client effects.

`lib/site.ts` owns `owner`, `role`, and the optional `contact` fields: `github`,
`linkedin`, and `email`. No personal contact values were found in the repository.
Add only verified public values to `contact`; use full HTTPS profile URLs and a
plain email address. The footer omits missing entries and the entire contact list
when empty. It derives internal links from `navigationItems` and translates their
labels. The copyright intentionally omits a year to avoid a stale build-time date.

## Metadata and production configuration

`lib/site.ts` owns the temporary site name and optional `SITE_URL` environment
variable. Set `SITE_URL` to the real HTTP(S) origin, without credentials, a path,
query, or fragment, before the production build. No domain is assumed and no
environment file is committed.

`lib/metadata.ts` generates localized titles, descriptions, and basic Open Graph
metadata. With `SITE_URL` configured, it also emits canonical URLs, language
alternates, `x-default` pointing to English, and Open Graph URLs. These absolute
URLs are omitted until configured. The proxy can also emit request-origin
language alternate HTTP headers. Add actual Open Graph images when assets are
available. Reuse the URL strategy with project-specific content for future
detail metadata; do not reuse list-page titles for individual projects.

The generic metadata site name, remaining temporary copy, project details, and
missing contact information must be replaced before launch. The Hero portrait
is still a placeholder. No motion library, CMS, or deployment configuration is included. See
[selected work](docs/selected-work.md) for carousel behavior and media replacement.

## Documentation references

- Installed framework guides: `node_modules/next/dist/docs/`
- [next-intl routing](https://next-intl.dev/docs/routing/setup)
- [next-intl navigation](https://next-intl.dev/docs/routing/navigation)
- [next-themes](https://github.com/pacocoursey/next-themes)
