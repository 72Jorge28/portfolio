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
inside the supplied 1200:760 media mask using contain with an inset. Review the safe
area and screenshot readability with real media; adjust presentation rather than
embedding important text into clipped corners.
Localize meaningful alt text through the content layer when adding real media.
The centralized `mediaTone` chooses the neutral placeholder palette. Add verified
category and description translations in both ProjectContent message namespaces.

## Continuous track and interaction

The existing native scroll viewport is retained. CSS scroll snap is removed
because it conflicts with constant motion. `useCarouselTrack` measures centers
and the repeating period only on layout/resize or reduced-motion changes.
`useCarouselPlayback` advances at 32 CSS pixels per second via requestAnimationFrame,
using elapsed time and a fractional position accumulator rather than assuming a
refresh rate. A stalled frame is capped at 50ms. React state changes only when
the logical nearest project changes, not on each animation frame.

Three visual copies surround a canonical middle copy. Before hydration, without
JavaScript, and with reduced motion, only the canonical copy is displayed.
During playback, crossing the repeating period subtracts exactly one period:
the next copy and current copy occupy identical visual positions, so there is no
last-to-first sweep or blank gap. Both outer copies are aria-hidden and inert;
assistive technology sees only the three original projects. Items supplied to
this presentation carousel must have no document IDs or stateful controls.
Future project links belong in canonical content; inert copies cannot receive focus.

Native touch/trackpad scrolling and mouse drag pause automatic movement until
Play is explicitly selected. Keyboard focus entering content, wheel input, and
manual controls do the same. Hover pauses temporarily on mouse devices. Playback
runs only when the document is visible and at least half the viewport is in view.
It stops requesting frames when paused/hidden/offscreen/reduced-motion and resumes
from its current phase, without accumulating hidden time.

The visible previous/next buttons have been removed. Keyboard arrows, Home, and End work on
the focused scroll area. After touch momentum or smooth manual scrolling settles,
the offset is normalized to the canonical period. `scrollend` is used when
available, with a 160ms quiet-scroll fallback. Controls never move keyboard focus.
Position announcements are polite during manual use and off during automatic movement.

The active slide occupies 90% of the mobile track's inner viewport, 60% from
48rem. Neighbors remain visible on larger screens. All projects use the same supplied media mask, ensuring each physical copy
remains visually identical at the seam. Captions retain their
full contrast; only inactive media has softened opacity. The dot
selector is now visible at every width. Play/Pause, project indicators, and the
position counter form one compact centered group, with 44px controls.

Reduced motion hides visual copies and disables automatic movement, smooth
scrolling, and rotation/transitions; manual navigation remains available. No
carousel or animation dependency was added.

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
- Continuous movement, fractional phase continuity across the seam, manual
  interaction pause, reduced motion, and hidden/offscreen pause.
- Desktop/mobile screenshots in both themes; the accessibility tree exposes
  three project headings, with no duplicate project announcements.

Firefox, Safari, physical touch devices, and assistive-technology output were not
independently tested. Review final assets on those targets before release.
