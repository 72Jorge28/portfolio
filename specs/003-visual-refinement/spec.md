# Spec 003 — Home and shared visual refinement

Estado: implementada

Closure — 2026-10-14: the owner explicitly accepted the final visual result,
“Si, acepto los resultados visuales”. The coordinator relayed the final independent
reviewer's **VEREDICTO: APROBADO**, covering RF-1–15, RNF-1–6 and all completion
criteria. RNF-4/T10 are satisfied; Spec003 is closed without requirement changes.
See [final acceptance and evidence attribution](validation.md#final-acceptance-and-closure--2026-10-14).
Approval-time pending/proposed/unchecked statements below remain historical
checkpoints, not current status or outstanding gates.

## Approved width and interior-alignment amendment — 2026-10-13

Amendment Estado: aprobada. **REQUIREMENTS APPROVAL RECORDED — 2026-10-13.**
The owner explicitly answered “Los apruebo”, as relayed by the coordinator, approving
the latest RF-7/RF-15 width and interior-alignment amendment, including the at-most
1 CSS-pixel tolerance and its preservation/scope additions. This STATUS-ONLY record
changes no substantive requirement. Retained proposed/pending labels below describe
the drafting checkpoint, not current authority. The amendment is now effective;
earlier approved requirements remain valid where not superseded.
The owner requested “revise tambien si los elementos de la pagina cumplen todos
con seguir el mismo ancho” and selected “También alinear contenido” when asked
whether to assess only outer limits or also text, images and controls. These answers
established the requested direction; the later “Los apruebo” records approval.

The separate “Lo apruebo” relayed on 2026-10-13 approves ONLY the existing V3-3
technical paint-order amendment jointly in the plan and tasks. It neither approves
this new alignment requirement nor accepts the final visual result. The later
requirements approval authorizes revised alignment planning/tasks, but they require
SEPARATE JOINT OWNER APPROVAL before implementation. Historical completed work
remains recorded; V3-3–5 and T10 remain unchecked. No code, memory or validation
edit or final visual acceptance is authorized by this status record.

### Context, objective and scope

Make the page's available width and interior alignment coherent across navigation,
Home sections and footer, and across the existing About, Projects and localized
missing-page presentations. The assessment must include actual text, image and
control placement, not merely prove that an ancestor has a maximum width.
Correct discrepancies between comparable alignment roles without turning the
approved organic compositions into identical centered rectangles.

This is a bounded width/alignment extension of RF-7/8, not authorization to complete
pending About/Projects content or redesign their individual compositions. Existing
column relationships, media shapes, proportions, hierarchy and specific frame-edge
anchors take precedence over an indiscriminate single-coordinate interpretation.

### Definitions

- **Common outer limits:** The existing bounded page's inner left/right limits,
  inside the straight frame strokes when present, and the equivalent bounded limits
  when decoration is absent. Navigation surfaces, Home section surfaces and the
  available footer region refer to this same page width. A narrower readable-content
  area is an interior region, not a different outer page limit. This does not require
  inventing a full-width painted footer or filling every region with content.
- **Common interior rails:** One coherent responsive pair of left/right content
  alignment references inside the outer limits, with safe breathing room for text,
  ordinary images and controls. Comparable full-row content groups use the same
  available width and insets. In multi-column compositions, their corresponding
  column references derive from that bounded composition; a right-column heading
  is not required to begin at the page's left rail.
- **Comparable alignment role:** Groups serving the same outer, full-row or column
  alignment role in the same responsive condition. Compare the start/end of their
  layout areas, not the unequal lengths of visible words or intrinsic button widths.
  Headings, body text and actions within a reading group share its reference; numbered
  heading prefixes, centered groups and end-aligned preferences retain their intended
  internal organization. A narrower paragraph measure may end before the right rail.
- **Protected compositional exception:** A relationship required by RF-2/3/11/12/13
  or the approved organic/column direction: wider natural Hero portrait within its
  column or centered stack; original masked About media and explicit inner-frame
  anchors; upper central organic boundary/right-text clearance; integrated full-width
  lower mobile joint and clean desktop arc; accepted carousel card proportions,
  centered controls and intentionally offscreen inert loop copies. These exceptions
  do not excuse arbitrary additional text/control gutters or independent row caps.
- **Proposed alignment tolerance:** At most 1 CSS pixel between a layout edge and
  its intended common outer/interior/column reference under matching conditions.
  This is a proposed measurement allowance for approval, not an owner-selected gutter
  size or a demand that every point of a curved/rotated silhouette lie on a straight
  rail. Compare untransformed layout references separately from actual painted media,
  decoration, readable glyph bounds and focus outlines.

### Proposed functional requirements (EARS)

- **RF-7 width amendment — pending:** WHEN navigation, Home sections and footer
  are displayed, THE SYSTEM SHALL use the common outer limits defined above,
  preserving the existing bounded maximum-width constraint and responsive frame
  applicability. THE SYSTEM SHALL distinguish full-width available regions and
  surfaces from narrower interior content without unexpected independent outer
  offsets, recessed required full-width paint or viewport bleed.
- **RF-15 — pending:** WHEN a visitor views Home, About, Projects or a localized
  missing page, THE SYSTEM SHALL align comparable text, image and control layout
  groups to the common interior or corresponding column rails within the proposed
  tolerance. THE SYSTEM SHALL use the same responsive available content width and
  outer inset references across comparable header, section and footer groups,
  correcting additional offsets or width caps that do not serve a protected
  compositional exception. THE SYSTEM SHALL preserve those exceptions, intrinsic
  control sizing, readable paragraph measures and existing responsive organization;
  it SHALL NOT stretch every image/button to full width, center all text, flatten
  column asymmetry or move specifically frame-anchored About media to text gutters.

### Proposed non-functional, edge-case and scope additions

- **RNF-1/2 — pending addition:** Assess both locales/themes at 320, 390, 768,
  1024 and 1440 CSS pixels, normal and 150% text. Record actual responsive composition
  under browser-default 16/24-pixel text as well as the resulting root size; do not
  infer columns or frame presence solely from viewport labels. Wrapping may increase
  height but must not create unexpected horizontal offsets, document overflow,
  essential-content overlap or clipped visible focus. Narrow layouts retain safe
  insets, upright readable placeholders and full portrait hair without shrinking
  supporting typography or hiding overflow to make the measurements pass.
- **RNF-4 — pending addition:** Final owner review includes common page limits and
  interior alignment across the affected existing pages, with protected composition
  differences explicitly identified. Prior technical conformity, carousel partial
  acceptance and paint-order planning approval do not accept this result or T10.
- **RNF-5 — pending exception:** Minimal width/inset/alignment corrections in existing
  About/Projects/missing-page content are in scope only for RF-15; no new composition,
  content, destination, media or hierarchy is introduced. Preserve verified full
  identity, Developer/degree wording, Hero 16/24-pixel supporting minimum and wider
  undistorted full-haired portrait, JR/navigation sizing and accepted height, fonts,
  supplied photo/shape bytes, themes and accepted carousel appearance/playback.
  No asset editing, broad styling migration, dependency, service or route/API change.
- **RNF-6 — pending addition:** Alignment changes must preserve accessible persistent
  navigation, native page/menu scrolling and localized 404 status/explanation/native
  same-language recovery in both document presentations, with scripts on/off before
  visits. Existing script-disabled mobile-menu expansion limitation remains unchanged.

At responsive transitions or natural unequal text/media heights, assess the actual
role in use. A centered mobile Hero and a desktop right-column About reading group
need different references, not an arbitrary common text-left coordinate. Curves,
soft shadows and carousel content deliberately outside its own scroll viewport are
not all required to fit inside text rails; essential visible content and stable
controls must remain usable inside the bounded page. A conflicting protected anchor,
portrait fit or accepted carousel geometry returns to the owner, not a silent redesign.

### Proposed completion evidence and gates

Fresh matched evidence must identify each affected outer region and content group,
its intended outer/interior/column reference, actual left/right layout bounds and
deviation, and any protected exception with its requirement/direction rationale.
Include header and opened mobile menu, every existing Home region, footer, current
About/Projects content and localized missing-page explanation/recovery. A maximum-width
declaration, zero-overflow result or screenshot alone does not establish alignment.
Compare like roles; do not accept arbitrary current offsets merely because they exist.

Show native-resolution whole-region comparisons and supporting edge measurements
in the locale/theme/width/text matrix, with keyboard/focus and preservation evidence.
Confirm full required navigation paint/bottom edge and complete unobstructive frame;
retain organic media anchors, original contours, full hair and accepted carousel.
Applicable project checks and independent amended-requirement review remain required
after authorized implementation. This proposal provides no fresh browser conformity
claim and completes or reopens no historical task.

No critical product clarification remains in the relayed direction. **REQUIREMENTS
GATE PASSED — 2026-10-13, “Los apruebo”. NEXT GATE: separate joint owner approval
of revised plan/tasks.** Update those documents before implementation. The prior V3-3
technical approval remains valid within its unchanged scope; final visual acceptance
of About/shared/whole Home and this alignment extension remains pending for closure.

## Previously latest approved requirements amendment — 2026-10-12

Amendment status: **APPROVED**. The owner explicitly answered “lo apruebo”, as
relayed by the coordinator on 2026-10-12, approving all three latest deltas below.
This is a STATUS-ONLY approval record: no requirement text or scope is changed.
Retained “proposed”, “pending” and conditional-approval labels describe the drafting
checkpoint, not current requirements authority. Original, About and V2 approvals
remain valid where not superseded. Revised plan/tasks may now be prepared, but
require SEPARATE JOINT OWNER APPROVAL before implementation. This requirements
approval authorizes no code, validation or memory edit and no final UI acceptance.

### Context and confirmed direction

Historical T1–T9, the About revision and V2-1–5 are checked. The coordinator reports
independent technical conformity with the previously approved requirements, but
the owner has NOT accepted the final visual result; T10 and spec closure remain
pending. Existing validation proves its attributed revision, not this new delta.

The owner's latest Image 1 feedback concerns the LOWER MOBILE About composition:
the feather appears independent, the two parts look separated, and its size does
not follow the complete section. The request is an integrated text/transition/media
composition, not merely another seam-only correction or a desktop redesign.

Navigation already remains visible while scrolling. The new concern is its open,
recessed or incomplete appearance. The owner explicitly chooses “Una barra de ancho
completo con fondo y borde inferior”; the floating rounded-panel alternative is
rejected. The owner also requests mobile-menu closure when touching/clicking any
outside part of the page, including uncovered non-menu header areas.

### Definitions for this proposed delta

- **Current comparison baseline:** The completed V2 result before this delta.
  Compare matching locale, theme, viewport, actual responsive composition, text
  enlargement and region-aligned scroll; original portrait-width evidence remains
  separately attributed to its original baseline.
- **Full bounded width:** The left-to-right inner content edges of the existing
  bounded site frame, also when its decorative lines are absent. For lower About,
  these are the joint section's horizontal limits; for navigation, they are the
  shared header bar's limits. This is not the narrower text/control gutter area,
  unrestricted viewport bleed, or permission to cover/crop gold/brass frame strokes.
- **Integrated lower mobile composition:** Lower text, its rounded transition and
  secondary media read as one continuous section. Their joining paint shares the
  section's full bounded horizontal limits and follows the actual responsive joint,
  including natural wrapping and unequal content heights, rather than a detached
  band, inset piece or independently mis-sized transition. This does not require
  feathering over the entire section height or a new image/card silhouette.
- **Outside tap/click:** A completed tap or click outside BOTH the open menu panel
  and its toggle. Initial finger contact, dragging, cancelled contact and a native
  vertical scroll gesture alone are not completed taps. Non-menu header space,
  the brand, page background and uncovered page content are outside targets.

### Proposed functional requirement deltas (EARS)

- **RF-13 integration amendment — pending:** WHEN lower About Preview uses its
  stacked mobile composition, THE SYSTEM SHALL present its text, preserved rounded
  downward horizontal feather and secondary media as the integrated composition
  defined above, with joining paint reaching both full bounded section edges.
  THE SYSTEM SHALL make that curved blend follow the actual text/media joint as
  content wraps or heights differ, without a detached band, recessed transition
  width, empty internal strip, visible internal straight edge, abrupt color step
  or rectangular underlay. THE SYSTEM SHALL preserve the approved transition
  direction, curved relationship, soft blend and existing semantic theme palettes,
  keeping text and placeholder upright, unobscured and readable. THE SYSTEM SHALL
  NOT conceal the separation through an arbitrary deep fade beneath essential text,
  replace the curved transition with a straight fade or introduce a new media shape.
  WHEN the lower side-by-side desktop/tablet composition is displayed, THE SYSTEM
  SHALL preserve its already corrected rounded arc without an internal square edge.
- **RF-6 bar-surface amendment — pending:** WHEN the shared persistent header is
  displayed on any screen, THE SYSTEM SHALL present one continuous opaque,
  theme-coherent navigation bar whose surface and lower border span the full
  bounded header width. THE SYSTEM SHALL leave no inset unpainted side strips,
  empty surface gaps or clipped brand/menu controls that make the bar appear
  recessed or incomplete, in collapsed and open mobile states as well as the
  tablet/desktop presentation. THE SYSTEM SHALL retain existing inner control
  gutters, JR brand/size, nominal navigation typography, authored padding and
  accepted header height rather than deliberately compressing it. THE SYSTEM SHALL
  preserve vertical mobile main links, separate preferences and horizontal
  tablet/desktop organization; no floating rounded panel or new ornament is added.
  WHILE visitors scroll Home, About, Projects or localized missing pages, THE
  SYSTEM SHALL retain the approved always-visible, accessible navigation on all
  screens, without requiring upward scrolling or returning to page top.
- **RF-6 outside-dismissal amendment — pending:** WHILE the mobile menu is open
  with JavaScript enabled, WHEN a visitor completes an outside tap/click, THE
  SYSTEM SHALL close the menu, including for uncovered non-menu header space and
  any uncovered page background/content. THE SYSTEM SHALL preserve the intended
  outside action: an outside link/control remains operable and ordinary page
  scrolling remains available. WHEN a visitor interacts inside the menu panel or
  with its toggle, THE SYSTEM SHALL NOT treat that interaction as outside dismissal;
  existing destination-link closure, toggle operation and keyboard Escape behavior
  SHALL remain effective. WHEN contact is cancelled or becomes a drag/native
  vertical scroll rather than a tap, THE SYSTEM SHALL NOT dismiss solely because
  that contact began outside. Closing an already closed menu SHALL have no new
  effect on outside actions.

### Proposed RNF, edge-case and preservation deltas

- **RNF-1/2 — pending addition:** Assess the actual stacked composition, not just
  device labels, in both locales/themes at all five existing widths and normal/
  150% text. Joint geometry must adapt to natural content height without overflow,
  clipping or essential-text overlap. All changed used text/background combinations,
  including placeholder labels across the blend, must retain RNF-2 contrast.
  Header surface expansion must not clip JR, controls or focus outlines, or cover
  skip/anchor destinations and newly focused essential page content. Native page
  and menu scrolling, short-screen control reachability and keyboard access remain.
  Outside dismissal must introduce no focus loss to the document or hidden panel:
  preserve focus on an activated outside destination/control, and provide a visible
  navigation focus destination if closing would otherwise strand focus inside the
  hidden menu. Do not force focus away from an outside action. The separately
  recorded current-route link-to-BODY issue remains pre-existing, not new repair scope.
- **RNF-4 — pending addition:** Owner review must explicitly assess the complete
  integrated lower MOBILE section, full-width bounded navigation surface/border,
  and outside dismissal. A seam-only crop, continuity at one point, prior technical
  conformity or earlier “much better” feedback is not final visual acceptance.
  Selected Work's explicit partial visual/functional acceptance remains unchanged.
- **RNF-5 — pending preservation:** Preserve the original upper-mobile downward
  organic contour, compact separation and upright content. The current matched
  painted-contour-to-heading gap is recorded as 22–35px, a preservation reference,
  not a newly prescribed universal geometry. Preserve upper side-by-side anchors
  and the corrected lower desktop result; neither is redesigned by this feedback.
  Preserve full approved public identity, Developer/degree wording and 16/24-pixel
  Hero supporting-text minimum, plus wider undistorted portrait/full top and side
  hair at all five widths. No portrait retouching or new acceptance claim is added.
  About still uses existing localized placeholders and supplied shape sources;
  no new About photograph has been supplied. Preserve photo/SVG/font/license bytes,
  contacts, claims, routes, APIs, services, dependencies and accepted carousel styling,
  controls and playback policy. No new image/card shape or theme choice is authorized.

The scope exceptions, ONLY upon approval, supersede conflicting historical
lower-mobile pixel/geometry-preservation wording to the extent needed for integration,
and unchanged-menu-interaction exclusions ONLY for the specified outside dismissal.
Existing overlay behavior is not converted to a modal, drawer, blocking backdrop,
focus trap or body-scroll lock. Internal gutters are not removed merely because
surface/border paint must reach the frame's inner edges. Natural header growth for
enlarged text remains permissible; deliberate height reduction remains excluded.

### Proposed completion evidence and approval gates

Fresh matched native-resolution before/after views must show the ENTIRE lower
mobile text/transition/media composition and its two bounded horizontal edges,
with enlarged-text/unequal-height supplements. Record actual joint/section bounds
and supporting color profiles at both endpoints and intermediate positions:
joining paint must meet the same semantic surface continuously before following
the rounded blend, with no internal straight one-pixel artifact or abrupt color
step (especially in dark). A natural smooth gradient change is not itself a seam.
Exclude glyphs from decorative color profiles, but separately verify actual label
readability/contrast. No deep fade that hides text passes this criterion.

Navigation comparisons must show complete surface and full-width lower border,
both bounded edges, JR/controls and visible focus at scroll top/middle/end,
collapsed/open mobile and horizontal desktop, including short/enlarged screens.
Verify completed outside taps/clicks on non-menu header space, brand, background,
page content and outside links/controls; also panel preferences, existing link
closure, toggle, Escape, cancelled/drag/scroll non-taps, and visible focus after
closure. Test both locales/themes and normal/150% mobile conditions on Home,
About, Projects and localized missing pages with scripts on. Preserve native
script-disabled header persistence, localized 404 explanation/status and same-language
recovery; script-disabled dropdown expansion remains an existing limitation,
not a new requirement. Desktop keyboard behavior and safe page anchors stay intact.

Protected upper-mobile, desktop About, Hero and carousel need preservation evidence,
not new implementation. Applicable project checks and independent amended-requirement
review remain mandatory after authorized implementation. All prior checked tasks
remain historical records; this stage does not reopen or complete any checkbox.

No blocking product question remains in the relayed decisions. **REQUIREMENTS GATE
PASSED — 2026-10-12, “lo apruebo”**, for all THREE changes (lower-mobile About
integration, full bounded navigation bar, mobile outside dismissal). The NEXT GATE
is separate joint approval of revised plan/tasks before implementation.
Final owner About/shared/whole-Home visual acceptance remains required for T10/closure.

## Approved requirements amendment — drafted 2026-10-11, approved 2026-10-12

Amendment status: **APPROVED**. The owner explicitly answered “La apruebo”, as
relayed by the coordinator on 2026-10-12, approving the entire latest amendment,
including the 16/24 CSS-pixel Hero role/degree minimum. This is a STATUS-ONLY
approval record: no requirement text or scope is changed. The deltas below now
take effect with the existing RF/RNF identifiers and supersede only conflicting
preservation wording. Their retained “proposed”, “pending” and conditional-approval
labels describe the drafting checkpoint, not current requirements authority.
Earlier requirements and approvals remain valid where not superseded. Revised
plan/tasks may now be prepared but require SEPARATE JOINT OWNER APPROVAL before
implementation. No code, memory or validation change or final UI acceptance is
authorized by this requirements approval.

### Context, confirmed decisions and preservation references

The owner considers the result much better, but requests closer upper mobile
About text, removal of a horizontal line before the lower mobile feather,
persistent navigation on every screen, and a clearer initial identity presentation.
The supplied feedback reports the lower line in both themes, more strongly in dark.
This records the owner's observation, not a newly established technical cause.

The previous About revision and its separate planning approval remain recorded:
T6-R1/R2/R3 and T9-R1 are checked. The coordinator reports the latest independent
review technically conforming to those approved requirements, with only owner
visual acceptance pending. T10 remains unchecked; neither that review nor “much
better” accepts the whole Home. Retain the explicit visual/functional acceptance
of Selected Work, its current playback and wheel-interruption behavior, and the
corrected lower desktop arc without an internal rectangular patch.

Confirmed owner answers:

- “Todas las pantallas”: navigation remains visible while scrolling on mobile,
  tablet and desktop, not only a selected device class.
- Exact public name: **Jorge Luis Ramos Suárez**, unchanged across languages.
  Public given names are Jorge Luis and surnames Ramos Suárez; brand initials
  remain **JR**, not initials for every word.
- “Conservar desarrollador”: retain **Desarrollador de software / Software
  Developer**. Retain **Graduado en Ingeniería Informática / Graduate in Computer
  Engineering** beneath it. No substitution with an Engineer role or new claim.
- The typography request concerns the initial Home introduction, not a standalone
  footer redesign. Consistent public-name follow-through elsewhere is in scope,
  but larger footer typography is not requested.

### Definitions for the proposed delta

- **Amendment comparison baseline:** The completed prior About revision and current
  Hero/header presentation, before implementing this new amendment. Compare the
  same locale, theme, viewport, actual responsive composition, text size and
  region-aligned scroll. The original portrait-width baseline remains unchanged.
- **Upper mobile painted-contour gap:** The vertical distance from the lowest
  actually painted point of the complete downward primary contour to the top of
  the following heading's visible text bounds. Transparent reserved image area
  is not a painted boundary. Assess each stacked RNF-1 condition separately;
  device labels alone do not determine whether the composition is stacked.
- **Proposed Hero supporting-text minimum:** At least **16 CSS pixels with a
  normal 16-pixel root**, increasing to at least **24 CSS pixels at 150% text
  size**, for both role and degree. This measurable minimum is a proposal for
  approval, not a number already selected by the owner and not a fixed-pixel lock
  that defeats enlargement. Exact headline sizing remains a later design decision.

### Proposed functional requirement deltas (EARS)

- **RF-1 amendment — pending:** WHEN Home displays its initial introduction,
  THE SYSTEM SHALL present the complete public name “Jorge Luis Ramos Suárez” as
  its primary identity heading, with the existing localized developer role and
  degree underneath, in that order. THE SYSTEM SHALL make the name typographically
  dominant over the supporting role and degree, and display both supporting lines
  at the proposed minimum above. WHEN available width requires the name to wrap,
  THE SYSTEM SHALL wrap at word boundaries without splitting individual name
  words, truncating them or obscuring any part of the full name.
- **RF-1 identity consistency amendment — pending:** WHERE the existing portfolio
  identifies its owner by full name in visible copy, accessible names, image
  alternatives or metadata, THE SYSTEM SHALL use the same confirmed public name
  in both locales. THE SYSTEM SHALL retain JR branding and existing localized role
  and degree wording. This does not require adding the owner's name to metadata
  that currently contains no owner identity, rewriting unrelated copy, adding
  credentials, or redesigning the footer.
- **RF-6 amendment — pending:** WHILE a visitor scrolls any page displaying the
  shared header, THE SYSTEM SHALL keep navigation visible and accessible within
  the viewport on mobile, tablet and desktop, including Home, About, Projects and
  localized missing pages. In the collapsed mobile presentation the brand and
  menu trigger SHALL remain visible; WHEN the visitor opens that menu, THE SYSTEM
  SHALL make all existing destinations and separate language/theme preferences
  reachable. THE SYSTEM SHALL preserve nominal 16-pixel navigation typography,
  baseline brand size/JR identity, vertical mobile main links, horizontal
  tablet/desktop organization, existing destinations and menu interactions.
  Persistence SHALL NOT depend on first scrolling upward or returning to page top.
- **RF-12 spacing amendment — pending:** WHEN upper About Preview uses its stacked
  mobile composition, THE SYSTEM SHALL bring its following heading and body closer
  to the downward contour, with a strictly smaller painted-contour-to-heading gap
  than the amendment comparison baseline in each corresponding stacked RNF-1
  condition. THE SYSTEM SHALL retain the complete original contour, downward
  orientation, uniform proportions, upright unobscured placeholder/content and
  legible separation from the heading/body. THE SYSTEM SHALL NOT achieve closeness
  by cropping the original profile, overlapping essential text with decoration,
  reducing text legibility or substituting an unmasked square. Desktop/tablet
  side-by-side anchors, central boundary and readable text remain protected.
- **RF-13 seam amendment — pending:** WHEN lower About Preview uses its stacked
  mobile composition, THE SYSTEM SHALL show the preserved rounded downward
  horizontal feather without a visible straight horizontal line or abrupt seam
  immediately before the curved transition, in light and dark themes at normal
  and 150% text size. THE SYSTEM SHALL preserve its rounded profile, soft blend,
  upright readable content and bounded alignment; seam removal does not authorize
  replacing the liked feather with a straight fade. WHEN the desktop lower
  composition is displayed, THE SYSTEM SHALL preserve its corrected continuously
  rounded feather without an internal square/rectangular underlay edge.

RF-2/RF-3 remain unchanged: preserve the supplied portrait bytes, complete top and
side hair, natural subject proportions and already widened presentation at all
five normal-size widths. Name/typography changes do not authorize narrowing or
recropping it to make room. RF-4/5/7–11/14 remain unchanged; no new carousel work,
speed change, automatic focus pause, animation, route or recovery policy is added.

### Proposed RNF, edge-case and scope deltas

- **RNF-1/2 — pending addition:** Persistent navigation must retain readable
  contrast, keyboard access and visible focus in the full existing locale/theme/
  width/text-size matrix. Skip-to-content, anchor destinations and newly focused
  essential content/controls must be visible rather than covered by the persistent
  header. Ordinary page content must remain reachable by normal scrolling.
  On short phones and enlarged text, the open menu's entire set of controls must
  remain reachable without shrinking lettering or trapping visitors in a panel
  that obscures the whole usable screen with inaccessible content. Closing the
  menu must restore access to the page. This introduces no modal/drawer requirement
  or blanket repair of the separately recorded pre-existing menu-focus issue.
- **RNF-4 — pending addition:** Owner review must cover the closer upper mobile
  composition, seam-free lower mobile feather, persistent shared navigation and
  revised Hero hierarchy. Preserve Selected Work partial acceptance, not whole-Home
  acceptance; previous technical conformity does not validate the new delta.
- **RNF-5 — pending exception:** Preservation of identity/copy is superseded only
  for the confirmed public-name correction and its consistent existing public
  uses. Preserve developer-role and degree text, contacts, claims, routes, supplied
  photo/mask/font bytes and other verified content. No new About photograph,
  portrait editing, credential, contact or production URL is authorized.
- **RNF-6 — pending addition:** Revalidate changed presentation and shared-page
  behavior under the established project checks, including native localized 404
  explanation/status/recovery with scripts enabled and disabled before visits.
  Persistent presentation does not newly require script-disabled mobile menu
  expansion; the existing native same-language recovery must remain usable.

Natural wrapping of the full name, role and degree may increase Hero height;
all identity content need not fit above the fold. Preserve word integrity, logical
reading order, full-hair containment, effective enlargement and zero horizontal
document overflow at every RNF-1 width in both locales/themes. Do not shrink or
clip the portrait/name to fit one short viewport. Upper About closeness is measured
against visible paint, not an empty canvas; the entire original silhouette must
remain visible with safe text separation. The lower seam criterion concerns the
unwanted internal line before the feather, not every legitimate outer section edge.

The earlier nonpersistent header is a baseline observation, not a protected
product requirement. Upon approval, RF-6 persistence supersedes only conflicting
unchanged-position/preservation wording. No scrolling mechanism is prescribed.
Preserving the lower mobile feather means preserving its liked shape/relationship,
not preserving defective seam pixels or forbidding a bounded seam correction.
Prior mobile pixel-equality planning constraints must be reconciled at the later
planning gate, not silently applied against this new request. No particular
image-canvas reservation or numerical contour gap is a product requirement.

Existing out-of-scope exclusions remain except for this explicit name/typography,
persistence and mobile About delta. In particular, no standalone footer redesign
or supporting-text minimum outside the Hero, menu redesign, new asset, broad
accessibility cleanup, or carousel alteration is authorized.

### Proposed completion additions and remaining gate

Fresh matched evidence must show reduced upper-mobile painted-contour gaps in
each applicable stacked condition, full original downward profile/upright content,
and no lower-mobile horizontal seam through native-resolution visual inspection
and supporting transition pixel/profile evidence in both themes and text sizes.
Preserve the corrected lower desktop arc and accepted carousel.

Hero proof must cover the exact full name and existing role/degree, word-boundary
wrapping, dominant heading hierarchy, proposed 16/24-pixel supporting-text minima,
both locales/themes and all five widths/text sizes, plus preserved portrait fit.
Existing owner-name uses must be consistent while JR/footer scope remain intact.
Shared navigation proof must cover scrolling at top/middle/end, collapsed/open
mobile access, short/enlarged viewports, keyboard focus, skip/anchor visibility,
valid localized pages and native 404 recovery without regressions. Applicable
project checks and independent requirement review remain mandatory.

No unanswered critical product question remains from the relayed clarifications.
**Requirements gate passed — 2026-10-12:** The entire amendment, including the
**16 CSS-pixel / 24 CSS-pixel Hero role/degree minimum**, is explicitly approved.
Separate joint approval of revised plan/tasks is still required before any
implementation. Final owner acceptance of About, Hero/shared presentation and
whole Home remains required; T10/spec closure is not implied by either gate.

## Previously approved specification — retained

Amendment status — 2026-10-11: **APPROVED**. The owner explicitly answered
“Los apruebo”, as relayed by the coordinator. The original requirements remain
approved; the additions below to RF-12, RF-13, RNF-4, edge cases and completion
criteria are now effective approved requirements.
Earlier silhouette-preservation wording retains the original contour, not a fixed
mobile orientation, under this approved amendment. Revised planning is authorized,
not implementation. Revised plan and
tasks require a separate joint approval before implementation. Preserve completed
T1–T9 work; T10 and whole-spec final visual acceptance remain pending.

Approval record — 2026-10-10: The owner explicitly answered “La apruebo” to the
coordinator's summary and path for this specification, as relayed in the planner
handoff. This records specification approval only; RF, RNF and scope are unchanged.
References below to draft status and pending specification approval retain their
clarification-time context and are superseded by this record. Plan and tasks still
require separate joint owner approval before implementation. No final rendering
or visual validation is approved by this record.

## Context and objective

The owner has explicitly chosen SDD for the next visual changes because they
affect the page composition and may become complex. This is a new, unapproved
specification, not an extension of the completed portrait insertion.

The scope is the entire Home page: the introduction and portrait, Selected Work,
and About Preview. Shared navigation, theme presentation, and the gold site frame
are also included, with footer changes limited to maintaining visual coherence.
Shared visual changes may consequently appear on other pages; their individual
compositions are not being redesigned here.

The owner likes the existing light palette, shadows, and contrasts. The dark
theme is unsatisfactory, particularly because its shadows are not visible enough.
The gold frame's role in defining the site's maximum width is acceptable, but its
visual integration needs refinement. In the latest clarification, the owner
explicitly says navigation is not too tall on any platform; its lettering feels
too small instead. This supersedes the earlier height-reduction goal. Home's
image areas also need adjustment.

The latest clarification preserves the carousel image shapes and requests only
better shadows for their visual treatment. It also introduces a bounded behavior
request: autoplay should pause temporarily while the mouse is over the carousel
or a finger touches it on mobile, then resume when the pointer leaves or the last
touch ends. Explicit manual pause and reduced-motion behavior remain protected;
keyboard focus must not automatically pause autoplay. About Preview needs
outer-edge image alignment and a rounded,
feathered text-to-image boundary in its lower composition, as detailed below.

The owner has accepted larger navigation text and vertically arranged main links
on mobile, with language/theme preferences grouped separately, while preserving
the current horizontal organization on tablet and desktop.

The desired Art Nouveau influence is expressed through curves, soft compositional
offsets, and fluid relationships, not abundant flowers, branches, or leaves.
These words do not constitute a request for new animation.

The supplied portrait is already present. The new request is to make its visible
presentation a little wider and avoid cutting off the head, including the hair,
without stretching the photograph. The owner confirms “En todos ajustar el ancho”:
the width adjustment applies to mobile, tablet, and desktop.

This draft records the accepted product directions and comparison conditions.
Exact rendering values are future planning decisions, not unanswered product
questions. The draft still requires review and explicit owner approval; no planning
or implementation is authorized by the clarification answers alone.

## Users

- Prospective employers and other visitors exploring the owner's work in English
  or Spanish, on mobile and desktop, in either theme.
- The portfolio owner reviewing whether the visual identity represents the
  intended professional, organic style.
- Visitors using enlarged text, keyboard navigation, or reduced motion.

## User stories

- HU-1. As the owner, I want the whole Home composition refined together so that
  the result is not limited to an isolated portrait or introduction change.
- HU-2. As a visitor, I want to see the owner's portrait without a clipped head or
  distorted proportions so that the introduction presents the person clearly.
- HU-3. As the owner, I want to retain the light theme's character while improving
  the dark theme, frame integration, and navigation text legibility without
  deliberately compressing the header.
- HU-4. As a visitor, I want the visual refinements to preserve readable content
  and working navigation across languages, themes, and screen sizes.

## Definitions

- **Home regions:** Introduction and portrait, Selected Work, and About Preview,
  including the relationships and boundaries between those regions.
- **Shared presentation:** The navigation/header, theme colors and depth, outer
  site frame, and footer styling common to the portfolio pages.
- **Baseline:** The current presentation after the completed portrait insertion,
   before implementation of this specification. Future comparisons must use the
   same locale, theme, viewport width and height, text size, and scroll position;
   historical checks alone are not evidence of current behavior. Capture fresh
   before/after evidence rather than treating historical screenshots as proof.
- **Wider portrait presentation:** A greater horizontal span of the visible image
  boundary than the baseline at normal text size, assessed in the initial resting
  Hero presentation at each width of 320, 390, 768, 1024, and 1440 CSS pixels.
  Shadows do not count as image width. The increase must remain modest and inside
  the bounded site frame; it does not mean widening beyond available space,
  stretching the subject, or requiring a particular percentage or height change.
- **Nominal navigation text size:** 16 CSS pixels at normal text size with a
  16-pixel browser root, for main links, language controls, the menu trigger, and
  the theme selector. This is a normal-size reference, not a fixed-pixel lock:
  user text enlargement and zoom must remain effective. The brand retains its
  baseline nominal 36-pixel size and must also respect user text enlargement.
- **Unclipped head:** The face and complete top and sides of the hair visible in
  the supplied photograph remain inside the displayed image boundary, without
  being cut by framing or covered by adjacent content or decoration.
- **About Preview primary and secondary media:** The upper image area with the
  owner's existing organic silhouette, and the lower image area respectively.
  In the supplied desktop reference, the primary media is on the left; the lower
  composition has text on the left and secondary media on the right. These side
  descriptions do not prescribe a two-column mobile arrangement.
- **Outer-edge alignment:** The requested primary-left and secondary-right media
  alignment flush with the corresponding inner boundary of the bounded gold site
  frame, not the viewport. The site's existing maximum width remains the limit;
  image alignment does not authorize removing all interior text spacing.
- **Rounded feathered boundary:** The lower left text area's right edge forms a
   rounded arc extending into the adjoining image, with a soft blend rather than
   a straight vertical fade. The accepted direction fixes the curved relationship,
   not exact coordinates or a completed drawing.
- **Approved visual reference:** A visual direction explicitly accepted by the
  owner during clarification and recorded as part of this specification. The
   palette roles, navigation arrangement, side-frame curves, preserved media
   silhouettes, About Preview anchors and curved blend, and comparative portrait
   width below form these references. They may be verbal directions together with
   the existing shapes and supplied baseline comparison; a new pixel mockup is not
   required. They do not approve final rendering or tested shadow quality, and do
   not authorize implementation before the specification and later planning gates.

## Recorded visual direction

### Approved About amendment and bounded partial acceptance — 2026-10-11

The owner reports a visible rectangular background patch beneath the lower desktop
About Preview feathered arc (dark reference, Image 1). The requested separation
must be continuously rounded and feathered, without a square or rectangular underlay
edge showing beneath or beyond it. The owner likes the current lower mobile curved,
downward horizontal feather; preserve that solution rather than redesigning it.

For the upper mobile composition, the owner explicitly chooses “Rotar la curva
hacia abajo sin girar la fotografia”: orient the supplied original organic contour
downward toward the following text, not sideways as a detached shape. Only the
contour's mobile orientation may change; preserve its identity and uniform scaling,
unmodified source bytes, and upright, undistorted photograph/content/placeholder.
The square, unmasked-photo alternative is rejected; no redrawn contour is authorized.
Preserve the current desktop/tablet left anchor, central curve and readable right
text. Mobile here means the responsive stacked composition already described above,
not a new product breakpoint. The upper area remains a localized personal-photo
placeholder; the forthcoming photograph has not been supplied or authorized here.

The owner explicitly accepts the carousel visually and functionally: “El carrusel
si lo veo bien, y funciona correctamente”. This is partial acceptance of Selected
Work only, not acceptance of other Home regions, shared presentation or the whole
specification. The liked lower mobile boundary is likewise a bounded preservation
reference, not acceptance of all About Preview. Existing carousel requirements and
supplied portrait remain unchanged.

The owner answered “Probemos con la opcion 1” to the coordinator's three-palette
comparison, selecting **Bosque y latón** for the dark theme. Its color roles are
a deep-green background, lighter moss surfaces, dark-sage elevated surfaces,
ivory text, sage accents, and an aged-brass frame. This resolves the color-family
choice only; the existing light palette remains unchanged, with its recognizable
shadow and contrast character retained during the scoped media-shadow refinement.

The accompanying depth proposal distinguishes surfaces from the darker background
with soft dark shadows and discreet edge highlights, without glows. This records
the intended proposal, not owner acceptance of rendered shadow quality or a
completed visual result. RF-5 still requires comparison against this direction;
RNF-2 contrast must be measured rather than inferred from the palette selection.
Exact color values and internal color assignments belong to future planning.
Neither this selection nor the proposal approves the draft specification,
authorizes implementation, or assumes approval of a future prototype.

### Resolved navigation clarification

The owner says: “No lo noto alto en ninguna plataforma, lo que si noto es que las
letras son pequeñas”, and asks for the current text size and an assessment of the
mobile and desktop/tablet structure. The coordinator reports a baseline of
12 CSS pixels for destination links, language choices, the mobile menu label,
and the theme choice at normal text size. The 36-pixel brand lettering is separate;
44-pixel minimum control heights describe touch targets, not text size.

The supplied comparison covers mobile widths of 393, 430, and 480 pixels, tablet
at 820 pixels, and desktop at 1539 pixels. It shows the current dark theme, not an
implemented Bosque y latón result. The current organization has horizontal
navigation on desktop/tablet and a collapsible menu on mobile; the opened mobile
panel overlays the introduction rather than pushing it down. These are baseline
observations, not newly approved behavior requirements.

The owner's latest answer, “Me parece bien”, explicitly accepts the coordinator's
proposal: nominal 16-pixel text for main links, language controls, the menu
trigger, and the theme selector; the nominal 36-pixel brand remains unchanged.
Mobile main links are arranged vertically, with language/theme preferences in a
separate group. Tablet and desktop retain their current horizontal main-navigation
and preferences organization. This resolves Q2, not approval of the whole draft.

Existing menu interactions remain unchanged. No overlay removal, drawer/modal
conversion, new closing interaction, or correction of pre-existing focus issues
is authorized. The open mobile panel's temporary concealment of part of the Hero
is separate from portrait-mask cropping; Q2 does not authorize changing that
overlay mechanism. The existing responsive transition remains the baseline, not
a newly owner-fixed breakpoint; implementation details belong to later planning.
Header height is acceptable and must not be deliberately compressed.

### Resolved side-frame direction

The owner explains that the existing line is visible but lacks the identity of
gold traces in Art Nouveau paintings. The original width boundary keeps the lower
image compositions from expanding across an unrestricted desktop width; that
use case remains valid and is separate from the decorative line treatment.

With “Probemos la primera direccion”, the owner selects the coordinator's first
proposal: retain two continuous vertical side lines, give them modestly more
visible presence without a heavy border, and use gentle curved terminals rather
than generic straight endpoints. Leave breathing room between frame and content;
relate the curves to the imagery's organic forms without adding flowers or
branches. Retain the existing light-theme gold and use aged brass in Bosque y latón.
The alternative without continuous side lines is rejected for now.

This selects the visual direction, not a finished drawing or implementation
approval. The existing maximum-width constraint and responsive applicability of
the side lines remain unchanged. Exact line thickness, curve geometry, spacing,
and terminal placement are design choices to propose in the future plan under this
direction, not additional product questions or a mandatory pre-spec prototype gate.
Do not reopen the choice between continuous lines and the rejected alternative.

### Resolved Home-media direction

The owner likes the carousel image shapes: preserve them, improving their shadows
only rather than replacing their silhouettes. The separate playback clarification
below defines temporary hover/contact pauses, not unconditional perpetual motion.

For About Preview, both image areas should meet their corresponding outer edges:
the primary image on the left and the secondary image on the right in the supplied
desktop reference. Preserve the primary organic silhouette created by the owner.
In the lower composition, text remains on the left and media on the right; the
text block's right boundary should form a rounded, feathered arc extending into
the image, not the current straight vertical fade. The supplied reference shows
an inset gap to the right of the lower image. Asked whether these edges mean the
inner boundaries of the gold frame, retaining bounded width rather than the window
edges, the owner confirms: “Al borde de del marco, ese seria el limite”. The primary
media therefore meets the frame's inner left boundary and the secondary media its
inner right boundary. The width limit keeps the desktop image compositions from
expanding unrestrictedly; neither media nor the feathered overlap extends outside
that bounded frame. This specific media alignment does not remove all interior
text spacing or supersede readable content hierarchy. The upper treatment preserves
the existing owner-created organic mask; it does not request a new portrait or art
asset for either image area.

The owner has now clarified the earlier upper-image “centro” wording. Asked whether
the curve separating image and text should be as close as possible to the section's
horizontal center, with the image meeting the frame's left edge and readable text
on the right without overlap, the owner confirms: “Si, exacto”. This centers the
upper image-to-text boundary, not the whole image as a floating, inset object. In
the side-by-side desktop/tablet composition, the target reference axis is 50% of
the section's full bounded width between the frame's inner edges, not the midpoint
of the image box. The boundary remains the owner's existing organic curve; its
individual points need not all lie on that axis. Future planning must propose a
measurable boundary-position reference and tolerance relative to this central axis
for owner approval, preserving the silhouette, left-frame anchor, undistorted
media, and clear text on the right. Do not alter supplied asset bytes or distort
the mask's identity to achieve centering. Mobile remains governed by responsive
readability, not a mandatory horizontal arrangement. This upper organic boundary
is separate from the lower rounded feathered text-right arc. Q4's product direction
is resolved; exact geometry, centering tolerance, and shadow values belong to
planning and final visual review, not to a mandatory new reference drawing before
spec approval. If those constraints genuinely conflict during planning, return
that specific conflict to the owner rather than silently changing the direction.

### Resolved portrait-width clarification

To the question whether widening applies only to desktop/tablet or also to mobile,
the owner answers “En todos ajustar el ancho”. Increase the portrait's displayed
width modestly in all three contexts, comparing fresh matched baseline and result
at 320, 390, 768, 1024, and 1440 pixels at normal text size. Preserve the supplied
photograph and subject proportions; the complete head, including hair, must remain
visible inside its image boundary and bounded site frame. Neither an exact increase
nor a required height change has been selected. Proposed proportions belong to the
future plan, with before/after visual review required for the implemented result.

### Resolved playback clarification

Current source inspection shows temporary hover suspension that clears on pointer
leave. Focus within the carousel other than the Play/Pause button, wheel input,
and pointer-down set a paused state that remains until Play is selected. Playback
also depends on reduced-motion preference, document visibility, sufficient
carousel visibility (at least half), and availability of autoplay. These are
intentional conditions in the current implementation, not proven bugs or newly
owner-approved requirements.

The owner now explicitly says: “Solo quiero que se pare cuando pasas el cursor por
encima y en movil al tocar el carrusel, pero al soltar o quitar el cursor siga
caminando el carrusel”. This confirms temporary mouse-hover and mobile-contact
pauses with automatic resumption after those conditions end. Normal pointer or
wheel interaction must not leave previously enabled autoplay permanently paused
after hover/contact ends. This does not select a new position, speed, or loop
behavior, or remove manual Play/Pause controls.

Resumption applies only when autoplay was enabled and no explicit manual pause,
reduced-motion restriction, or existing visibility/resource condition prevents it.
Hidden-document and offscreen playback policy remains unchanged; resumption does
not promise advancement while the carousel is not eligible to run.

The coordinator asked whether entering with Tab should keep playback paused until
the visitor selects Play. The owner answered “No lo del teclado no”, rejecting
automatic keyboard-focus pause, not keyboard access or carousel controls. The
coordinator confirmed that focus must not automatically pause the carousel and
that Tab/Enter access, including explicit manual Play/Pause, remains available.
This resolves Q6 without a further approval of that individual decision. Focus
alone must neither stop eligible autoplay nor restart explicitly paused playback.
Keyboard access, visible focus, and usable controls remain mandatory; rejecting
automatic focus pause does not establish full ARIA APG carousel conformance or
waive the WCAG requirement for an effective way to pause automatic movement.
The full specification still requires approval before planning or implementation.

## Functional requirements

- **RF-1:** THE SYSTEM SHALL retain all three Home regions, their existing
  localized information, featured-project selection, and existing destination
  links while applying the approved visual refinement across Home rather than
  only its introduction.
- **RF-2:** WHEN Home displays the supplied portrait, THE SYSTEM SHALL show an
  unclipped head and preserve the photograph's subject proportions without
  stretching it or replacing the supplied photograph.
- **RF-3:** WHEN Home is compared with the matched baseline at normal text size at
  each width of 320, 390, 768, 1024, and 1440 pixels, THE SYSTEM SHALL display a
  modestly wider portrait presentation as defined above, in mobile, tablet, and
  desktop contexts, while keeping the full head visible and the photograph
  undistorted inside the bounded frame. THE SYSTEM SHALL NOT achieve widening
  merely by enlarging the shadow or extending the image outside the frame.
- **RF-4:** WHILE the light theme is active, THE SYSTEM SHALL retain its existing
  palette and recognizable shadow and contrast character; layout refinement SHALL
  NOT replace it with a new light-theme color direction.
- **RF-5:** WHILE the dark theme is active, THE SYSTEM SHALL display the colors and
  distinguishable background, surface, and elevated-surface relationships of the
   recorded Bosque y latón direction, using soft shadows and restrained edge
   highlights without glow to distinguish surfaces from the darker background.
   Final depth and shadow quality SHALL be compared with the matched baseline and
   recorded direction; palette selection alone SHALL NOT count
  as acceptance of those qualities or proof of accessible contrast.
- **RF-6:** WHEN the shared header is displayed in mobile, tablet, or desktop
  contexts, THE SYSTEM SHALL present its destination links, language choices,
  mobile menu trigger where applicable, and theme selector at the nominal
  16-pixel text size defined above, while preserving the baseline brand size,
  existing destinations, language/theme choices, and menu interactions in both
  locales. WHILE the mobile menu is open, THE SYSTEM SHALL arrange its main links
  vertically and group language/theme preferences separately. WHILE the header
  uses its tablet/desktop presentation, THE SYSTEM SHALL retain its current
  horizontal main-navigation and preferences organization. THE SYSTEM SHALL
  respect user text enlargement and SHALL NOT deliberately reduce header height.
- **RF-7:** THE SYSTEM SHALL retain the site's bounded maximum-width role while
  preserving its existing width constraint. WHILE the side frame is displayed,
   THE SYSTEM SHALL retain two continuous vertical lines with modestly greater
   visual presence than the baseline, gentle curved terminals related to the
   imagery's organic forms, and breathing room from content except for the confirmed
   About Preview media-to-inner-frame alignment in RF-12, without a heavy
  border or added flowers or branches. WHILE the light theme is active, THE SYSTEM
  SHALL retain the existing frame gold; WHILE the dark theme is active, THE SYSTEM
   SHALL use the recorded aged-brass direction. Final presence SHALL be compared
   with the matched baseline, and curved terminals and spacing SHALL be reviewed
   against the recorded direction, without treating it as approval of unseen
   final geometry.
- **RF-8:** WHEN a visitor views Home, About, Projects, or a localized missing page,
  THE SYSTEM SHALL present the same approved shared visual treatment for the
  applicable navigation, theme, frame, and footer, without redesigning the
  individual About, Projects, or missing-page compositions.
- **RF-9:** WHEN a visitor changes themes or navigates between localized pages,
  THE SYSTEM SHALL preserve the existing theme choices, initial theme application,
  persistence, system-preference behavior, and equivalent logical-route switching.
- **RF-10:** WHEN a visitor directly opens a scoped missing English or Spanish URL,
  THE SYSTEM SHALL preserve its genuine HTTP 404, requested document language,
  visible localized explanation, and native same-language Home recovery, both
  with and without JavaScript, as established by the implemented 404 specification.
- **RF-11:** WHEN Selected Work image areas are displayed, THE SYSTEM SHALL retain
   their baseline silhouettes and display soft, discernible shadows separating
   them from adjoining surfaces, compared side by side with the matched baseline,
   without replacing those shapes or introducing glow. THE SYSTEM SHALL retain
   the light theme's recognizable shadow character while improving media depth.
- **RF-12:** WHEN About Preview displays its primary media, THE SYSTEM SHALL retain
   the owner's existing organic silhouette. WHEN its desktop composition is
   displayed, THE SYSTEM SHALL align the primary media's left side and secondary
   media's right side flush with the gold site frame's inner left and right
   boundaries respectively, retaining the site's existing maximum-width constraint
    rather than extending to the viewport edges. THE SYSTEM SHALL keep both media
    presentations inside the bounded frame without removing all interior text spacing.
    WHEN the upper image-left/text-right composition is displayed on desktop or
    tablet, THE SYSTEM SHALL position its preserved organic image-to-text boundary
    around the central axis at 50% of the section's full inner-frame width, assessed
    against the measurable position reference and tolerance to be approved in the
    future plan, while keeping the image flush left and text readable on the right
    without overlap. THE SYSTEM SHALL NOT center the whole image as an inset object,
    alter supplied asset bytes, or distort the original silhouette to meet this
    target; centering SHALL NOT require every point of the curve to share one
     horizontal coordinate or impose a two-column mobile layout.
- **RF-12 amendment — approved:** WHEN the upper About Preview uses its
  stacked mobile composition, THE SYSTEM SHALL orient the owner's original organic
  contour downward toward the following text rather than retaining a sideways,
  detached presentation. THE SYSTEM SHALL preserve the original contour through
  uniform scaling without redrawing, distortion, source-byte changes or substitution
  by a square unmasked image. THE SYSTEM SHALL keep the photograph, placeholder and
  text upright and undistorted; contour orientation SHALL NOT rotate that content.
  WHEN the desktop/tablet image-left/text-right composition is displayed, THE SYSTEM
  SHALL preserve its current left anchor, central boundary and readable right text
  under the original RF-12 constraints.
- **RF-13:** WHEN About Preview displays its lower text-left/media-right desktop
   composition, THE SYSTEM SHALL present the text area's right boundary as a rounded,
   feathered arc extending into the image rather than a straight vertical fade,
   matching the accepted visual reference without obscuring readable text or
    extending the overlap outside the bounded site frame.
- **RF-13 amendment — approved:** WHEN the lower About Preview uses its
  desktop text-left/media-right composition, THE SYSTEM SHALL show a continuous
  rounded, feathered separation without a visible square or rectangular background
  patch edge beneath or beyond the arc, including the reported central lower edge.
  WHEN its stacked mobile composition is displayed, THE SYSTEM SHALL preserve the
  current curved downward horizontal feathered transition and readable content.
- **RF-14:** WHILE enabled Selected Work autoplay is eligible to run and the mouse
  pointer is over the carousel or mobile finger contact remains on it, THE SYSTEM
  SHALL temporarily suspend automatic advancement. WHEN the pointer leaves or the
  last finger contact ends, THE SYSTEM SHALL resume previously enabled autoplay
  if no explicit manual pause, reduced-motion restriction, or preserved playback
  eligibility condition prevents it. WHEN a touch gesture is cancelled or contact
  tracking is lost, THE SYSTEM SHALL clear the temporary contact pause once no
  contact remains, under the same resumption conditions. WHEN normal pointer or
  wheel interaction ends and those temporary conditions clear, THE SYSTEM SHALL
  NOT leave eligible, previously enabled autoplay permanently paused solely
  because of that interaction. THE SYSTEM SHALL NOT override explicit manual
  pause or reduced-motion behavior to perform this resumption. WHEN keyboard focus
  enters, moves within, or leaves the carousel, THE SYSTEM SHALL NOT automatically
  pause, latch a pause, or restart autoplay solely because of that focus change.
  WHILE keyboard focus remains within the carousel, THE SYSTEM SHALL allow eligible
  autoplay to continue or resume after hover/contact ends under the same conditions.
  THE SYSTEM SHALL preserve keyboard-operable explicit manual Play/Pause controls.

The recorded directions, preserved shapes, explicit frame anchors, and matched
baseline comparisons are the acceptance references for RF-3, RF-5, RF-7, and
RF-11–RF-13. Final visual quality still requires owner review of the implemented
before/after result; numerical width evidence, preserved silhouettes, full-head
visibility, edge alignment, a curved rather than straight blend, surface separation,
and measured contrast provide independently checkable conditions. No unseen final
rendering is approved. RF-14 preserves keyboard access and explicit manual pause
without automatic focus pause. No implementation is authorized by this draft.

## Non-functional requirements

- **RNF-1 — Responsive usability:** Home and affected shared presentation must
  remain readable and usable in both locales and themes at viewport widths of
  320, 390, 768, 1024, and 1440 pixels, at normal and 150% text size. Refinement
  must not introduce horizontal document overflow, overlapping essential text or
  controls, or clipped portrait heads in these conditions.
- **RNF-2 — Accessibility:** Preserve semantic headings, existing localized useful
  image alternatives, keyboard-operable controls, and visible focus. Changed
  text/background combinations must meet WCAG AA text contrast: 4.5:1 for normal
  text and 3:1 for large text. Decoration must not obscure content or focus.
  Essential carousel controls must remain stable, visible, keyboard reachable, and
  usable while autoplay moves content; focus must not be lost or obscured by that
  movement. Validate Tab/Enter operation and visible focus during autoplay, including
  the always-available manual Play/Pause control. Existing unrelated audit findings
  are not added correction work.
- **RNF-3 — Motion:** Essential content and navigation must remain understandable
  without motion. Preserve reduced-motion behavior and manual carousel access.
  Keep an effective explicit Play/Pause control and keyboard-operable access.
  Compositional offsets do not authorize new animations. Only the bounded autoplay
  pause/resume policy in RF-14 may change after
  specification approval; the continuity request does not authorize unconditional
  playback, defeating explicit manual pause, or moving content that interferes with
  keyboard use or dragging. Preserve an effective pause mechanism for WCAG automatic
  movement requirements; the selected no-focus-pause policy is not a claim of full
  ARIA APG carousel conformance.
- **RNF-4 — Visual boundaries:** Retain the current fonts and a professional,
  organic identity. Do not introduce abundant botanical ornament, neon,
   cyberpunk effects, or decorative code. Use the recorded accepted directions and
   matched baseline evidence to review composition; final visual acceptance must
    not be inferred from approving the direction or passing static checks.
  **Approved amendment:** Record the owner's explicit carousel visual/functional
  acceptance only for Selected Work and preserve the liked lower mobile boundary.
  Neither constitutes whole-Home/spec acceptance or acceptance of any other region;
  the amended About result still requires owner visual review.
- **RNF-5 — Content and scope integrity:** Preserve verified copy, identity,
  contacts, project information, existing image assets, public routes, and
  supported languages. Do not invent media, personal claims, project results, or
  destinations. Do not add dependencies or perform a broad styling migration.
- **RNF-6 — Regression validation:** Validate affected behavior and presentation
  using the project's established checks and browser-validation rules. Preserve
  the implemented localized 404 contract, including script-independent recovery;
  do not treat a hydrated screenshot or a prior audit as sufficient proof.

## Edge cases

- Narrow screens and larger or enlarged Spanish or English text may require more
  vertical space. Navigation must not force controls to overlap or lose access.
  Retaining the current height as the starting point does not freeze pixel height:
  text wrapping and responsive usability may require natural height growth.
- A wider portrait must not push the introduction outside the viewport or rely on
   clipping the hair to fit its decorative boundary. The head requirement applies
   at every RNF-1 width and text size, not just a desktop reference.
  Width growth is compared at normal text size; at 150% text size, containment,
  full-head visibility, and readable content take precedence over reproducing the
  normal-size increase. No fixed height or above-the-fold arrangement is required.
  If a proposed design cannot increase normal-size width at any required viewport
  while respecting the frame and full-head constraints, report the conflict rather
  than silently exempting that width or allowing overflow.
- Short mobile viewports may scroll normally. This specification does not require
  all identity content or the entire portrait to fit above the fold.
- Home still includes placeholder image areas where final media is unavailable;
  refinement must not silently supply invented images or project claims.
  **Approved amendment:** Upper About Preview retains its localized personal-photo
  placeholder until separately supplied and authorized. On stacked mobile, rotating
  the original contour downward must leave that placeholder and all content upright,
  readable and unobscured at normal and 150% text size; no new photo is authorized.
- Shared visual changes also affect short About/Projects pages and error pages;
  they must not cause overflow or become an implicit redesign of those pages.
- Direct visits and locale changes must preserve initial and stored themes without
  a new hydration or theme-flash regression.
- Missing single-segment and nested paths in either locale must retain readable
  error content and native recovery when scripts are disabled before the visit.
- With reduced motion, portrait visibility, content hierarchy, and manual carousel
  navigation must not depend on an animation reaching a particular position.
- About Preview's desktop side relationships must adapt on narrow screens without
   forcing a two-column layout, obscuring text under the feathered boundary, or
   introducing document overflow to achieve inner-frame alignment. Wide desktop
   screens must retain the bounded composition rather than turning these media
    areas or their curved overlap into full-viewport bleed.
  **Approved amendment:** Enlarged text or unequal desktop text/media heights must
  not expose a rectangular underlay edge beneath or beyond the lower feathered arc.
  Mobile adaptation must preserve the liked lower transition rather than applying
  the upper contour-orientation change to it.
- Multiple mobile contacts keep the temporary contact pause active until the last
  contact ends. A cancelled gesture or lost contact tracking must not leave that
  pause stuck after all contact ends; clearing it must not override manual Pause.
- If manual Pause is selected during hover/contact, ending that interaction must
  not restart playback. Reduced-motion restrictions and existing hidden-document
  or offscreen eligibility conditions also take precedence over automatic resume.
- Pointer or wheel interaction must not latch a permanent pause once hover/contact
  ends for otherwise eligible autoplay. Keyboard focus must not introduce a separate
  pause or prevent eligible resumption after hover/contact ends. Entering or leaving
  with Tab must not restart manually paused playback; activating manual Play/Pause
  with the keyboard must remain effective. Motion must not interfere with keyboard
  operation or visible focus.
- Empty-carousel fallback and single-item behavior remain unchanged; ending
  hover/contact must not enable autoplay where it was unavailable.

## Out of scope

- Separate redesigns of About and Projects; those compositions need their own specs.
- New Home sections, rewritten copy, final project/case-study content, or new routes.
- Repeating the completed portrait insertion, renaming or replacing its source,
  or editing the supplied image bytes to solve presentation cropping.
- A standalone footer redesign, new footer content, or new recovery destinations.
- Changes to fonts, theme-selection mechanics, or locale policy.
- Carousel mechanics beyond the bounded existing-autoplay pause/resume policy
  recorded in RF-14, including the resolved no-automatic-focus-pause decision. Preserve controls,
  manual navigation, drag access, looping geometry, and reduced-motion support;
  no speed or new animation change
  is requested. No pause/resume change is authorized before spec approval.
- Deliberate navigation-height reduction, menu-function changes (including overlay
  removal, drawer/modal conversion, or new closing interactions), or changes to
  link organization beyond the approved vertical mobile main links with a separate
  preferences group and preserved horizontal tablet/desktop organization.
- Fixing the existing mobile-menu focus issue, header brand accessible-name issue,
  theme-control identification issue, favicon absence, or query/fragment policy.
- Dependency additions/upgrades, broad styling migration, unrelated cleanup, or
  reconciliation of historical visual documentation.
- Removing the maximum-width constraint or departing from the recorded directions.
  Exact dimensions, color values, and curve coordinates are future planning
  choices within those directions, subject to plan approval, not predetermined
  product requirements or authorization to implement during clarification.
- Replacing the carousel silhouettes or the owner's primary About Preview shape.

## Completion criteria

- Blocking questions are resolved in the specification, and the owner explicitly
  approves it before planning; plan and tasks then receive their required approval
  before implementation.
  The approved amendment has passed the requirements gate; separate joint approval
  of its revised plan and tasks is still required before implementation.
- All RF and RNF are validated against recorded comparison conditions and the
   approved visual references, including all Home regions and shared presentation.
- Fresh matched before/after evidence shows a greater visible portrait width at
  all five normal-size widths, the complete head including hair without distorted
  subject proportions, retained media silhouettes, the two About Preview frame
  anchors, the lower curved feathered boundary, and distinguishable dark surfaces
  and media shadows. The owner reviews the final visual result against the recorded
  directions; specification approval does not substitute for that review.
- Browser evidence covers both locales, both themes, all RNF-1 widths and text
  sizes, portrait visibility, keyboard/focus, relevant reduced-motion behavior,
  and the preserved localized missing-page contract.
  **Approved amendment:** Matched About evidence in those applicable composition
  modes must explicitly verify no square/rectangular underlay edge beneath or beyond
  the lower desktop arc, the unchanged lower mobile curved horizontal feather,
  and the original upper mobile contour directed downward with upright, undistorted
  placeholder/content and unchanged source bytes. Desktop/tablet upper anchors,
  central boundary and text readability must remain intact. Owner acceptance of
  the amended result is required; carousel partial acceptance does not complete T10.
- Carousel evidence verifies temporary hover/contact pause and subsequent resume
  of eligible autoplay, last-contact release and cancellation recovery, no
  permanent pointer/wheel-induced pause, and preservation of explicit manual
  Pause, reduced-motion restrictions, visibility policy, and empty/single-item
  behavior. Keyboard evidence must verify no automatic focus-induced pause or
  restart, eligible resume after hover/contact ends even while focused, stable and
  usable controls with visible focus during motion, and effective manual Play/Pause
  through Tab/Enter without overriding a manual pause.
- Applicable project checks pass, with unavailable checks and unrelated
  pre-existing failures identified honestly. No new related regression remains.
- The final changes stay inside the agreed visual scope; completed portrait and
  localized 404 work are preserved rather than reopened as new implementations.

## Open questions

No blocking product question remains on the supplied clarification record. Q1–Q6
are resolved at the product-direction level:

- **Q1:** Bosque y latón's six color roles; separated dark surfaces, soft shadows,
  restrained highlights, and no glow. Light palette unchanged; contrast measured.
- **Q2:** Nominal 16-pixel navigation and preference text, 36-pixel brand unchanged;
  vertical mobile main links and separate preferences, horizontal tablet/desktop
  organization retained. No deliberate header compression or menu-mechanism change.
- **Q3:** Continuous gold/brass side lines with modestly greater presence, curved
  terminals, and breathing room; existing bounded width and applicability retained.
- **Q4:** Carousel silhouettes preserved, shadows refined. About Preview keeps the
  original upper silhouette and inner-left-frame anchor. The owner's “Si, exacto”
  accepts positioning the upper image-to-text curve around the central axis at
  50% of the full bounded section width, with readable text on the right and no
  overlap, not centering the whole image as an inset object. A measurable boundary
  reference and tolerance require future plan approval; mobile remains adaptive.
  Lower media meets the inner-right-frame anchor, with a separate rounded feathered
  text-right arc into the image. No asset-byte changes, silhouette distortion,
  viewport bleed, or wholesale gutter removal.
- **Q5:** “En todos ajustar el ancho” confirms modest portrait widening on mobile,
  tablet, and desktop, compared at all five normal-size widths, with complete hair,
  preserved photo bytes and subject proportions, and containment inside the frame.
- **Q6:** Temporary mouse-hover/mobile-contact pauses and eligible resume on
  leave/release/cancellation; no focus-induced pause or pointer/wheel pause latch.
  Manual Pause, keyboard access, reduced motion, and existing eligibility take priority.

Exact color values, width proportions, shadow parameters, and curve coordinates
are future design choices in the plan within these directions. They are not
already approved values and do not require the owner to invent numerical targets.
If planning exposes a genuine conflict with frame containment, the full-head
requirement, or the confirmed About Preview anchors, return that specific decision
to the owner rather than broadening scope. This draft is ready for specification
QA and subsequent explicit owner approval, not for implementation. Final rendered
visual quality remains subject to the completion review.
