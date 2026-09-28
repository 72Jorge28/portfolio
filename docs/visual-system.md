# Visual system and Home Hero

## Scope

This iteration covers typography, semantic visual tokens, global navigation, and
the Home introduction. Selected work now has its own
[implementation notes](selected-work.md); About and Contact retain placeholders. Routing, locale resolution, metadata, and theme persistence are
unchanged. No production dependencies were added or upgraded.

## Color and depth tokens

All colors derive from ivory `#F1EBDD`, sage `#8F9B82`, and petrol `#354F52`.
`app/globals.css` owns every palette decision. White and black are used only to
create lighter/darker tonal variations; neither is a separate accent family.

| Semantic token | Light | Dark |
| --- | --- | --- |
| `--background` | Ivory | 48% petrol mixed with black |
| `--surface` | 94% ivory, 6% sage | 65% petrol mixed with black |
| `--foreground` | Petrol | Ivory |
| `--muted` | 85% petrol, 15% sage | 72% ivory, 28% sage |
| `--border` | 50% sage, 50% ivory | 32% sage, 68% background |
| `--control-border` | 65% petrol, 35% ivory | 78% sage, 22% background |
| `--accent` | Petrol | 65% sage, 35% ivory |
| `--accent-foreground` | Ivory | Background |
| `--ornament` | 70% sage, 30% ivory | 48% sage, 52% background |
| `--media-mat` | 97% ivory, 3% white | 80% petrol, 20% sage |
| `--media-placeholder` | 35% sage, 65% ivory | 65% petrol, 35% sage |
| `--media-foreground` | Petrol | Ivory |
| `--media-line` | Petrol at 24% opacity | Sage at 55% opacity |
| `--shadow-media` | Three soft petrol-derived shadows | Three soft background-derived shadows |

The stronger control border is separate from decorative rules to preserve
control visibility. The reusable `MediaFrame` owns the mat, border, and physical
shadow. Rotation belongs to the Hero portrait, not to all future framed media.

## Typography

`src/fonts/fonts.ts` uses `next/font/local` with two variable Latin WOFF2 files:
Cormorant Garamond (300–700) and Manrope (200–800). The Latin files include Spanish
accented characters. `display: swap` and framework fallback metrics are enabled.
Both font variable classes are attached to the existing locale root layout.

`--font-display` is used for the name and headings; `--font-body` is used for body
copy, navigation, labels, and controls. Font licenses and source attribution are
in `src/fonts/`. Builds and visitors require no Google font request.

## Hero composition and portrait replacement

- `HomeHero` is an async Server Component that owns the semantic introduction.
- `HeroOrnament` is a decorative, unfocusable, aria-hidden inline SVG.
- `MediaFrame` is a reusable Server Component for physical media presentation.
- `portrait.ts` owns `src`, dimensions, and crop position.

The Hero creates its own stacking context: the page is the background, the SVG
sits behind the composition, and media/text sit above it. No global scroll layer
or 3D dependency is introduced.

The temporary portrait uses CSS and initials, with an explicit translated
placeholder label. It does not depict a person. To replace it, put the selected
image in `public/` and set `portrait.src` to its local path, or use a static image
import. Keep the reserved aspect ratio or adjust the configured dimensions
intentionally, update `objectPosition`, and review the translated `portraitAlt`
in both message files. The existing branch uses `next/image`, responsive sizes,
`fill`, and preload. The default reserved proportion is 3:4.

The name and the requested title “Software Developer” deliberately remain the
same in both languages; degree information and interface labels are translated.

## Responsive navigation and motion

Below 48rem, the header exposes a compact disclosure button. The same navigation
and preference controls are expanded in a panel; they are not duplicated. Escape
closes the panel and returns focus to the button. Following a link also closes
it. It is a disclosure, not a modal dialog, so focus is not trapped. At 48rem and
above, links and preferences appear inline without a menu button.

Mobile Hero order is portrait, name, role, degree. At 48rem, the composition
becomes an asymmetric two-column layout. Portrait and type sizes remain fluid.

Scroll choreography is progressive enhancement behind CSS `@supports` for
`animation-timeline` and `animation-range`. It is enabled only from 64rem wide,
40rem high, and with `prefers-reduced-motion: no-preference`:

1. The Hero itself owns a named view timeline and a 130svh transition region.
2. Its 85svh stage is sticky only within that region.
3. Over the timeline's `contain` range, the portrait moves 12% of its own width
   toward the outside and straightens from -2 degrees to zero.
4. The text moves upward by 1.5rem. It never disappears.
5. The stage leaves with its containing Hero; nothing stays fixed across the
   remaining Home sections.

No scroll listeners, animation loop, polyfill, or animation library is used.
Unsupported browsers, short windows, and mobile use the complete static layout
without the extended sticky region. Reduced motion also removes the portrait's
rotation; global rules disable nonessential transitions. Content is visible from
the first render in every mode.

`animation-timeline` is not universally supported. Static composition is the
intentional fallback, rather than a JavaScript imitation. See
[MDN compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline).

## Client boundary and visual review

Only `NavigationMenu` is a new Client Component, for disclosure state, Escape,
and focus restoration. Existing client navigation and theme controls retain
their responsibilities. Hero, SVG, media frame, and font configuration remain on
the server.

Before designing the next section, review the real portrait crop, type-to-photo
scale, negative space, curve prominence, dark-theme mat, and scroll travel.
The temporary initials are scaffolding and will disappear when `src` is set.
