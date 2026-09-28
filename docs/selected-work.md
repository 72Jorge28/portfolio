# Selected work

SelectedProjects renders immediately after HomeHero. It resolves featured project
records and translated labels on the server. ProjectPreview and MediaFrame remain
Server Components, passed as children to the reusable client Carousel. Only the
carousel interaction and its playback hook add client behavior.

## Catalog and media

The catalog contains Expenses & Savings, Gely's Event Styling, and Living Gallery.
Only their names were supplied. Categories/descriptions are explicitly pending;
technology lists, media, status, and URLs remain empty or unset until verified.
No detail routes or invented links are published.

To replace a placeholder, add a local image under `public/` and set the project's
first `images` entry in `src/lib/projects/catalog.ts` with `src`, useful `alt`,
`width`, and `height`. ProjectPreview automatically renders it with next/image
inside the existing 8:5 print area using contain, preserving the full screenshot.
Localize meaningful alt text through the content layer when adding real media.
The centralized `mediaTone` chooses the neutral placeholder palette. Add verified
category and description translations in both ProjectContent message namespaces.

## Interaction

Native horizontal scrolling and CSS scroll snap support touch/trackpad input.
A small mouse-pointer drag handler adds desktop dragging; controls also support
previous/next and direct project selection. Arrow keys, Home, and End work when
the scroll area is focused. Controls are native buttons with localized names,
visible focus states, and 44px minimum targets. Focus is never moved by autoplay.
The slides remain a semantic list and all content remains accessible.

The active slide occupies 88% of the scroll area on mobile and 76% from 48rem,
with neighboring media visible where spacing permits. Overflow stays inside the
carousel. Controls wrap on narrow screens. Inactive prints have restrained
rotation/opacity; MediaFrame provides the shared mat and soft shadow.

Autoplay waits six seconds between selections, only when at least half the
viewport is visible and the document is visible. Hover temporarily pauses it.
Focus entering content, pointer input, wheel input, and manual controls pause it
until the user explicitly presses Play. Leaving hover or restoring visibility
starts a fresh interval. Returning from the last slide to the first is instant,
with no clones or rapid sweep through the collection. Position announcements are
polite during manual use and off during autoplay.

Reduced motion disables autoplay, smooth scrolling, and slide rotation/transitions.
Manual controls remain available. No animation or carousel dependency is needed.
ResizeObserver, IntersectionObserver, media queries, and CSS scroll snap are
supported by the modern browsers targeted by this Next.js application. Without
JavaScript, the server-rendered list still scrolls natively.

Before About implementation, review the real screenshots/crop, verified category
labels, print scale, slide spacing, and the six-second progression rhythm.

## Palette ownership

Global `--print-paper`, `--print-soft`, and `--print-strong` tokens and their
`-foreground` pairs map to ivory, sage, and petrol. The sage foreground uses a
darker petrol mix for contrast. These print colors intentionally remain stable
in both themes, while the surrounding mat, page, and interface adapt by theme.
Components only select a semantic print pair; palette values stay in globals.

## Verification

Validated with the installed stack and local headless Chrome through CDP:

- English and Spanish layouts at 320, 390, 768, 1024, and 1440px, without page overflow.
- Light, dark, and system themes, persisted reload, system preference changes,
  page navigation, locale switching, and no development console errors.
- Server bootstrap sets stored dark preference even with external framework
  scripts blocked and a light system preference, before hydration is possible.
- Keyboard selection, previous/next, mouse dragging, and emulated touch swiping.
- Six-second autoplay, persistent manual-interaction pause, reduced-motion
  autoplay suppression, hidden-tab pause, and a fresh interval after tab return.
- Desktop/mobile screenshots, including Spanish dark mode.

Firefox, Safari, physical touch devices, and assistive-technology output were not
independently tested. Review final assets on those targets before release.
