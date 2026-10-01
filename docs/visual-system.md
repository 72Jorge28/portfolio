# Visual system and Home Hero

## Scope

This iteration covers typography, semantic visual tokens, global navigation, and
the Home introduction. Selected work now has its own
[implementation notes](selected-work.md). Home also includes an About preview
and the shared site footer. Routing, locale resolution, metadata, and theme persistence are
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
| `--shadow-shaped-media` | Petrol at 16% opacity | Background at 75% opacity |
| `--shadow-media` | Three soft petrol-derived shadows | Three soft background-derived shadows |

The stronger control border is separate from decorative rules to preserve
control visibility. The reusable `MediaFrame` owns media masking and restrained physical
shadow. Small rotations belong to their compositions rather than the shared frame.

## Typography

`src/fonts/fonts.ts` uses `next/font/local` with two variable Latin WOFF2 files:
Cormorant Garamond (300–700) and Manrope (200–800). The Latin files include Spanish
accented characters. `display: swap` and framework fallback metrics are enabled.
Both font variable classes are attached to the existing locale root layout.

`--font-display` is used for the name and headings; `--font-body` is used for body
copy, navigation, labels, and controls. Font licenses and source attribution are
in `src/fonts/`. Builds and visitors require no Google font request.

## Structural Home composition

Home is a full-width sequence of regions, each with a constrained inner container:
Hero, Selected Work, one About section with present/future compositions, and the
shared footer. Other route widths are unchanged. `home-regions.module.css` owns
inner width; the shell scopes its full-width rule to the Home wrapper.

`SectionCurve` remains the filled Hero-to-Selected Work boundary. About uses
straight outer boundaries and one broad CSS elliptical arc between its present
and future compositions. These boundaries occupy ordinary document flow and
have no JavaScript, focus targets, or accessible content.

The former arch, sweep, stem, and divider ornaments have no remaining consumers
and were removed. Definitive decoration is intentionally deferred.

## Media and replacement

`MediaFrame` uses the user-supplied SVG files unchanged as alpha masks:
`public/shapes/hero-frame-02.svg` and `public/shapes/media-frame-02.svg`.
Both have a 1200:760 viewBox. Project media keeps that ratio. The Hero mask
rotates 90 degrees into a 760:1200 portrait box; its content counter-rotates
so the future photograph and current label remain upright. The outer
wrapper applies a restrained semantic-color drop shadow to the masked child,
so clipping does not remove the external depth. There is no rectangular matte
behind the transparent shape. All projects share the project mask.

`portrait.ts` owns the Hero source, reserved dimensions, and crop position.
Set its source and review the translated alt text when the real portrait arrives.
Project media continues to come from the centralized catalog; see
[selected-work.md](selected-work.md). Check safe areas with actual imagery: masks
must not crop important faces, interface labels, or meaningful screenshot details.

## About media and transition

About keeps full-width backgrounds and centers the text within an 84rem layout.
The present media extends from that layout to the viewport's left edge. From
48rem, media and text share one grid row: the media starts with a 72% inner-width
region, while text starts at 58%. The SVG's transparent side lets them share
layout space without covering the copy. The present composition has no vertical
padding, so its media meets both boundaries.
The supplied `public/shapes/about-primary-divider.svg` scales proportionally to
the row height. On mobile, the media stacks above the text in a 10:7 box with a
contained mask and still reaches the viewport's left edge without overflow
clipping. The boundary between the two About backgrounds is straight.

Future keeps unboxed text and image in the same constrained composition. A short
linear fade across the image's leading edge combines with
a subtle radial arc. Both overlays stay inside the first 3–5rem of the image;
the rest remains clear. On desktop, the image touches the future region's top
and bottom edges. Mobile stacks the content and uses a short vertical fade at
the image's upper edge.

Both About compositions derive height from their content and responsive block
padding. Real-image crops remain to be reviewed; Hero, gallery, and Footer are
unchanged.

## Responsive behavior and motion

Hero shows text left and media right from 48rem; mobile shows media then identity.
Its content-growing minimum height is 100svh minus the measured header height.
Home has no additional main padding. The existing SiteHeaderFrame ResizeObserver
handles header wrapping and font/viewport changes; a rem-based estimate is used
before measurement. Short viewports and enlarged text can grow the composition.

Hero retains its short CSS exit transition: 3% lateral media travel on mobile,
8% on larger screens, a small lift, and rotation normalization. No sticky stage
or scroll listener is introduced. Unsupported scroll-timeline browsers show the
static composition. Reduced motion disables choreography and rotation.

Selected Work presents heading, gallery, controls, then its localized Projects
link. Its continuous track and accessibility are unchanged. About reads image
then present text/CTA, followed by future text then image. From 48rem these become
opposing two-column compositions. There is one About heading, and both original
localized paragraphs remain unchanged. Padding and straight region boundaries set the rhythm;
there are no fixed-height sections or negative-margin gap corrections.

Footer retains identity, localized navigation, copyright, and only verified
contact values from site configuration. Its former ornamental divider is gone.

## Component boundaries

Hero, curves, About, Footer, MediaFrame, and project content remain Server
Components. Existing navigation, theme, header measurement, and carousel client
boundaries are preserved. No dependencies, routing, metadata, or font changes.

Review real-image crops, definitive decorative assets, and the pending palette
refinement separately. The current surface contrast is deliberately provisional.

## Structural recomposition verification

The structural pass passed lint, TypeScript, all three existing test files,
production build, and whitespace validation. Local Chrome checks covered EN/ES,
light/dark, and widths 320, 390, 430, 480, 768, 1024, and 1440px. All four curves,
both SVG mask URLs, one About heading, and two About compositions were present.
No horizontal page overflow was measured. The enlarged upright Hero grows naturally in short viewports: at 390x500 its
composition ends around 743px, and at 150% text sizing around 949px, without
clipping or horizontal overflow.

Keyboard selection, indicators, Play/Pause, pointer drag, emulated touch swipe,
continuous movement, seam normalization, and reduced-motion manual navigation
were checked. Desktop placement and localized CTA destinations were confirmed.
Screenshots were reviewed in light and dark. No application exceptions were
observed; an existing request for missing `/favicon.ico` returned 404.
Safari, Firefox, and physical touch devices were not tested in this pass.
