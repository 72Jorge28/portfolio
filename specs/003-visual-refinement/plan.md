# Plan 003 — Home and shared visual refinement

Estado: completado y cerrado — 2026-10-14; final owner acceptance and independent
approval recorded in [validation.md](validation.md#final-acceptance-and-closure--2026-10-14).
Historical approval-time pending statements below are retained, not current status.

## V3 width and interior-alignment revision — APPROVED jointly with tasks.md, 2026-10-13

STATUS-ONLY approval record: the owner explicitly answered “Lo apruebo”, as relayed
by the coordinator on 2026-10-13, jointly approving this latest alignment-extended
plan and tasks. No substantive requirement, technical decision, task content or
checkbox is changed. No implementation, validation, MEMORY edit or final visual
acceptance occurs here. Historical completed work, including V3-1/2, remains checked;
V3-A1/A2, V3-3/4/5 and T10 remain unchecked.

Basis: latest RF-7/RF-15 and associated RNF amendment in [spec.md](spec.md), explicitly
approved with “Los apruebo” on 2026-10-13. Requirements approval is NOT planning
approval. This section supersedes conflicting V3 file boundaries, narrower-outer-box
recipes and pending-task dependencies ONLY for width/alignment and combined proof.
The separately approved V3-3 paint-order exception below remains valid, not expanded.
**Separate joint owner approval of this revised plan and tasks is recorded above.**
No new task is completed or historical checkbox reopened here.

Current evidence: T1–T9, About-R, V2-1–5 and V3-1/2 are completed historical work.
V3-2 retains the integrated lower plane (core20%/feather32% of16:10 media height).
V3-3's withdrawn candidate hid61 pixels at EACH upper corner; its336 dev cells and
1008 scroll probes are partial candidate evidence, NOT final paint-order proof.
V3-1's128 trusted outside actions supply attributed RED, not GREEN. No RF-15
interior-alignment diagnosis has yet been performed; old width/overflow checks do
not complete the new audit. V3-3/4/5 and T10 remain pending; global acceptance absent.

### Source map and one bounded layout responsibility

Read-only current CSS establishes these sources, not rendered conformity:

| Current source | Actual width/inset responsibility and discrepancy to audit |
| --- | --- |
| `src/app/globals.css` | Existing `--content-width:76rem` and `--page-gutter:clamp(1.25rem,5vw,5rem)` are the readable-width/gutter sources. There is NO current `--layout-gutter` token. |
| `src/components/layout/site-shell.module.css` | `.frame` alone owns96rem maximum/64rem frame applicability/transparent2px borders. `.header,.main` repeat the76rem/gutter expression; Home main alone overrides100%. Header currently paints the narrower box. `.headerContent` has reciprocal−0.5rem focus margins/padding. |
| `src/components/home/home-regions.module.css` | `.inner` repeats the same76rem/gutter expression, used by Hero stage and Selected Work. |
| `src/components/layout/site-footer.module.css` | `.footer` repeats that expression; row/bottom are full available flex rows, mobile start-aligned, desktop identity/start and links/end. No inline footer padding currently exists; do not invent a duplicate. |
| `src/components/home/hero.module.css` | Desktop introduction adds4% start padding; `.details` adds0.35rem. Audit these reading-group offsets separately from preserved1:1.15 columns/gap and centered portrait. |
| `src/components/projects/selected-projects.module.css` | Desktop heading adds4%/8% padding inside `.inner`; caption7%, placeholder12%,14ch/28ch measures are CARD-internal, not outer-row rails. Carousel viewport/controls already inherit `.inner`. |
| `src/components/home/about-preview.module.css` | Full100% compositions/media; `.content`/`.direction` use raw page gutter rather than the centered76rem inset. Upper desktop start is `51.7% + 1.5rem`; lower uses50% columns/arc clearance. Safe-mask10%/20% padding is media-internal. These distinct roles must not be merged blindly. |
| `src/components/layout/page-content.module.css` | Current About/Projects and both missing presentations inherit `.main`;65ch paragraphs are deliberate reading measures. No independent page-width cap exists here. |
| `src/components/navigation/navigation-menu.module.css` | Absolute mobile panel inherits narrow header with−0.5rem margins/0.5rem focus padding; desktop panel is static/wrapping. Link0.5rem padding in `site-navigation.module.css` is intrinsic hit-area spacing, not a second page gutter. |

Keep ONE outer bound: frame content box `[L,R]`, width `W=R-L`, using actual used
inline borders (nominal2px when64rem query matches), not assumed viewport edges.
Reuse existing76rem readable width and responsive page gutter `G`. Proposed common
row width `C=min(76rem,W-2G)`; inset `I=(W-C)/2`; rails `[L+I,R-I]`. This preserves
the current common container width instead of widening the accepted carousel.
At1440/root16/nativeDPR1, an illustrative W1436 givesC1216/I110; these are arithmetic
examples, not fresh browser evidence. Root/default enlargement and scrollbars change
actual inputs; use recorded values, not hardcoded110px or viewport5vw alone.

Globals owns the existing width/gutter inputs; shell owns outer limits; local CSS
consumers own placement, column grids and paint. Reuse a single derived CSS width
expression there if needed to prevent drift between shell/Home/footer consumers;
do not introduce typed JS helpers, a generic layout component or a styling migration.
For full-width About text, evaluate the same inset against the FULL composition,
not the half-width grid child. Existing `.present`/stacked `.future` inline-size
containers permit a composition-local derived inset using100cqw; extending future's
inline-size containment to desktop is conditional on measured unchanged intrinsic/
arc geometry. Do not inherit unresolved percentage padding into half-column owners.
If that minimal local approach changes protected sizing, stop at coordinator with
evidence rather than choosing another composition or waiving RF-15.

Footer's AVAILABLE region becomes full bounded width; retain existing row/bottom
content on C/rails with local padding or existing-row sizing, not new markup/paint.
Main on About/Projects/404 stays the shared readable container; it need not paint a
full-width panel. Header outer paint spansW while its control group usesC and reserves
outline padding OUTSIDE that layout reference; controls do not inherit paint width.
Opened menu paint usesW and interior groups use the same responsive rails, native
scrolling and focus clearance. No required control is stretched to100%.

### V3-A1 measurable role audit, before correction

Under NEW joint planning approval and safe preflight, capture current V3-2 baseline
and fill this table for EVERY applicable matrix condition. V3-1 boxes can seed
attributed references only when source/conditions match; RF-15 needs fresh group data.

| Region / eligible group | Semantic role and intended reference | Required bounds and protected exception |
| --- | --- | --- |
| Frame; Home main; Hero/Selected surfaces; About present/future | Page-bounded / full surface: L,R | Actual layout L/R/W, borders and paint endpoints; SectionCurve shares outer width. Frame drawing is decoration, not a text rail. |
| Header outer and lower border; opened mobile panel | Full surface: L,R | Paint/opacity/edge profile at top/middle/end; no recessed strips. Panel hidden state is not a zero-width alignment pass. |
| Header control group; mobile main links/preferences | Content rail start/end; intrinsic controls within group | Wrapper/control content areas vs reciprocal focus reserve. JR starts at start rail, toggle/preferences end group at end rail; intrinsic glyph/button widths may differ. Main-link padded boxes versus label ink recorded separately. |
| Hero stage/introduction/name/role/degree; portrait | Full-row stageC; desktop corresponding column; centered mobile reading group/media | Reading-group start/end references; remove demonstrated extra4%/0.35rem offsets, not name typography. Preserve centered mobile organization,1:1.15 column proportions, natural portrait width/rotation/mask/5% safe box. |
| Selected heading/title prefix; carousel outer viewport; action/controls | Heading/viewportC; centered control/action group in C | Audit heading4%/8% extra row insets. Number prefix/gap belongs to heading-group internal organization, not h2 ink at left rail. Preserve track/item/edge-space/gap/caption measures and three-copy geometry. |
| About upper reading group/heading/body/link | StackedC; side-by-side right-column start from protected maximum contour + clearance, end at common right rail | Prefix/internal heading organization retained; paragraphs/actions share reading-group reference. Original primary media stays frame-left; central reference45–55%,≥1.5rem clearance preserved. |
| About lower text/media/placeholder | Stacked textC; desktop left-column start at left rail with protected arc-side clearance; media frame-right | Integrated lower joining PAINT reachesL/R; media16:10 and actual upright safe label region stay independent of text rails. Do not move anchored media to gutters or replace curve. |
| Footer region; row/bottom identity/navigation/copyright/contacts | Page-bounded available regionW; full-row contentC, desktop start/end groups, mobile start | Measure row area/column edges; quiet wrapping/intrinsic links preserved, no new painted footer/content. |
| Existing About header/approach; Projects header/list; missing h1/description/recovery | Common `.main`/contentC, start-aligned reading groups | Record start/end areas and actual heading/body/action references;65ch may end earlier. Preserve existing list hierarchy, no new cards/content/case-study URLs. Both root presentations share this contract. |

For each row retain mode/page/locale/theme/viewport/default/root/DPR/actual query/
fonts/source-build/scroll/menu state, responsible selector/property, expected reference,
actual start/end/C and signed deviations, BEFORE classification (conforming,
unexpected offset, protected exception) and AFTER evidence. Exceptions cite RF-2/3/
11/12/13 or approved centered/column organization; current accidental padding alone
is not justification. Audit like columns/groups, not every short word's right edge.

Use untransformed layout bounds from actual grid/containing box/computed dimensions;
record transformed bboxes separately. DOM Range ink/line bounds, native pixel/canvas
or original-mask path probes establish readable paint and safe media regions; the
SVG transparent canvas's minimum x is not the minimum opaque x. Focus outlines are
checked separately, never counted as layout drift. At most1 CSSpx inclusive is
authorized:1.01px is a failure, not rounded to1 or granted a second sampling allowance.
NativeDPR1/integer raster captures supplement fractional CSS measurements; assert
actual backend viewport/DPR/scrollbars. MCP resize alone previously returned500px
and subpixel borders; invalid conditions cannot be credited or hidden with overflow.

Eligible carousel elements: outer row/viewport and stable controls/action groups.
Assess visible active/middle content with matched logical position under explicit
manual Pause (and reduced-motion supplement); resume for event/focus smoke. Outer
two copies stay aria-hidden/inert and deliberately offscreen; no Tab, IDs or new
controls in them, no demand that virtual slides fit page/text rails. Existing local
viewport overflow is intentional; document overflow hiding is prohibited.

### V3-A2 bounded correction and downstream sequence

Sequence after joint approval: **V3-A1 audit → V3-A2 minimal common-rail correction
→ V3-3 complete bar/approved frame paint order → V3-4 dismissal → V3-5 combined
RF-1–15 proof → T10 owner/independent gate**. Six pending scopes including T10,
not20 new tasks. Preserve completed V3-1/2; audit/rail correction is not already done.
V3-A2 establishes content references before V3-3 reconciles full-surface/menu paint.

| Authorized application file | Responsibility ONLY if V3-A1 demonstrates need |
| --- | --- |
| `src/app/globals.css` | Existing width/gutter source reuse and one derived CSS expression if useful; preserve values/palette/fonts/scroll policy except V3's already conditional offset correction. |
| `src/components/layout/site-shell.module.css` | Main/control reference reuse, full header surface independent of rails; existing frame geometry unchanged, ONLY approved pseudo paint-order exception. |
| `src/components/home/home-regions.module.css` | Existing shared Hero/Selected container consumes common reference; keepC unchanged so carousel geometry remains intact. |
| `src/components/layout/site-footer.module.css` | Full available region with row/bottom common rails; preserve typography/content/flex organization. |
| `src/components/home/hero.module.css` | Demonstrated reading-group margin/inset alignment ONLY; no font-size, photo geometry/safe box, column-ratio/gap or motion change. |
| `src/components/projects/selected-projects.module.css` | Heading outer insets ONLY; accepted card/media/placeholder/caption/controls untouched. |
| `src/components/home/about-preview.module.css` | Text-side common inset/end references ONLY; preserve original masks, full-edge media/central clearance, upper22–35px matched gap, lower mobile20%/32%/16:10 plane and clean desktop arc. |
| `src/components/layout/page-content.module.css` | Existing shared reading-group alignment ONLY if inherited rails alone fail; retain65ch paragraphs/gaps/hierarchy. |
| `src/components/navigation/navigation-menu.module.css` | Common panel interior rails/focus bounds with V3-3 surface/native overflow scope; preserve organization and intrinsic control sizes. |

Existing V3-4 menu event file and conditional production-used pure policy/tests
retain their separate task authority below. Existing header-frame/header minimal
markup remains conditional ONLY for V3-3's demonstrated sizing/focus need, observer
unchanged. `project-list.module.css`/all page/root TSX are inspection-only: current
lists inherit the shared container, so no individual card/list redesign is justified.
No other app file is authorized by RF-15. Assets/fonts/data/site/catalogs/metadata/
router/config/providers/carousel source remain read-only. A need beyond this table,
portrait narrowing, meaningful carousel item/gap/viewport geometry change or About
curve/composition change stops at coordinator; do not silently exempt a requirement.

### Combined verification, owner evidence and approval gate

Use V3-5's six exact AGENTS commands and explicit-origin tests after final meaningful
application changes: current baseline32/32 dev/prod, plus genuine new cases if any.
CSS alignment uses meaningful native browser coordinate/paint regression, NOT
CSS-string assertions or a new runner. V3-4 still needs trusted native RED→GREEN
against real header/page targets/inside controls and actual pan/cancel lifecycles;
no fake dispatchEvent proof, swallowed outside actions or continuous scroll listeners.

Extend the existing fresh280 presentation conditions PER mode with ALL audit-table
roles and≤1CSSpx references: dev AND production, en/es/light/dark,320/390/768/1024/
1440, actual default/root16/24;480 supplements for owner views and frame64rem/96rem
boundary probes are separately counted, not duplicate280 conditions. Record actual
48rem composition and64rem frame queries; browser DEFAULT size, not root-only CSS,
determines rem queries. Include top/middle/bottom/sticky bottom clamp, mobile open/
collapsed and short320×568/150%, desktop low-height reachability. Both roots require
full-height unobstructive frame traces/content/focus, not only restored61px corners.
Validate scripts-off BEFORE genuine global404 direct/reload, lang/explanation/native
Tab/Enter Home200; external waits only. No metadata/router/root/API change or repair.

Capture readable native-resolution BEFORE/AFTER whole-region owner pairs with
overlaid/labelled rail coordinates as separate supporting views: header/open menu,
Hero, every Home section/footer, existing About/Projects and missing-page content.
Cover both locales/themes at390/1440 plus320/default24 and actual enlarged stacked
768/1024 supplements. Preserve full hair and source photo/mask/font bytes; use the
current full-haired photo reference, not obsolete T1 cropped-head styling. Report
exception roles/why, actual measured deltas and source identity. Prior carousel
acceptance stays partial; owner must accept common widths/interior alignment AND
final About/shared/whole Home, reviewer independently checks RF-7/RF-15 together
with RF-6/13 and all preserved RF/RNF. T10 remains open until both final gates pass.

Traceability: RF-7/15→V3-A1/A2 role diagnosis/correction, V3-3 outer paint and V3-5
full proof; RF-6→V3-3/4; RF-1–5/8–14→preservation and V3-5; RNF-1/2→coordinate/
paint/readability/focus/gesture matrix, RNF-3→motion smoke, RNF-4→owner pairs/T10,
RNF-5→conditional CSS table/source guards, RNF-6→checks/native TDD/independent review.

Preflight remains mandatory: fresh tracked/untracked user-work/source inventory,
process/port/output ownership before own sequential3110/3111/fresh final build;
protect unknown PIDs/user pages/about:blank. No install/lock/cache/output repair,
asset/generated-file edit or deferred documentation cleanup. Planner has no shell
tool; actual git inventory/`git diff --check` unavailable, not passed. References,
source responsibilities/requirements and historical checkbox consistency were read;
coordinator must check final diff/whitespace before delegation. No app checks or fresh
browser validation were run for this prose-only phase. No critical product question;
**JOINT PLANNING GATE PASSED — 2026-10-13, “Lo apruebo”.** Final owner visual
acceptance and independent current-spec review remain required for T10.

## V3-3 paint-order amendment — APPROVED jointly with tasks.md, 2026-10-13

STATUS-ONLY approval record: the owner explicitly answered “Lo apruebo”, as relayed
by the coordinator on 2026-10-13, jointly approving this existing technical amendment
and its matching task additions. No technical recipe, file authority or task content
is added by this record. It approved neither width/interior-alignment requirements
nor final UI acceptance. The later requirements approval and proposed alignment
revision above are separate; that revision's new joint planning approval is now recorded.

Requirements are unchanged; no spec amendment. The read-only planner assessment
`ses_ecc814d82ffeHALBNgsc0Bz0LZ` returns **PLAN CHANGE REQUIRED**: the original
behind-content frame contract conflicts with the full opaque bar. The attributed
[V3-3 blocking evidence](validation.md#v3-3-blocked--full-bar-occludes-protected-upper-frame-terminals-2026-10-13)
records61 hidden pixels per upper corner, restored by isolating header background.
The shell/menu candidate was withdrawn and restored byte-for-byte; it is not installed
or complete. V3-3 stays unchecked, V3-4/5 pending and T10 human acceptance pending.

**APPROVED — separate joint owner approval of this amendment to plan.md/tasks.md
is recorded above.** All other approved V3 decisions, historical approvals and completed
checkboxes remain valid. Under that approval, extend `site-shell.module.css` authority
to the smallest local stacking adjustment of `.frame::before`/`.frame::after` needed
to retain complete gold/brass traces ABOVE the opaque header. This supersedes the
original “behind content” recipe ONLY for the decorative paint relationship; it
does not permit decoration to obscure media, essential content, controls or focus.

Preserve absolute document-relative coordinates/inset-block0, frame isolation,
pointer-events:none and transparent pseudo interiors; all dimensions,2px strokes,
terminal radii, semantic tokens,64rem applicability and96rem maximum stay unchanged.
Keep the bar fully opaque across its full inner width, continuous lower edge, inner
control gutters and in-flow sticky behavior. No clipping/cutouts, duplicated art,
asset edits, wrapper/JS/document-root/API change is authorized by this exception.

Fresh dev/prod proof must inspect the FULL-HEIGHT decoration, not only restored top
corners, in both document roots across the existing locale/theme/width/enlargement
matrix and actual64rem/96rem boundaries. Verify complete traces and no obstruction
of media/content/control outlines/skip link at top/middle/page bottom and the actual
sticky containing-frame bottom clamp. Preserve native input/scroll and JS-off404
recovery. Prior withdrawn-candidate passes are attributed partial evidence, not fresh
proof of this paint order. Unsafe overlap or need beyond this exception returns to
coordinator before further edits; final numeric stacking follows that bounded proof.

Traceability: RF-6/7/8, RNF-1/2/5/6. Full-height positive-z paint can cross isolated
Home regions or bottom terminals; unobscured-content/focus proof is the principal risk.

## Previously approved V3 — integrated lower mobile About, complete bar and outside dismissal

Basis: latest [spec.md](spec.md) amendment approved with “lo apruebo” on
2026-10-12. **APPROVED, JOINTLY WITH tasks.md.** The owner explicitly answered
“Lo apruebo”, as relayed by the coordinator on 2026-10-12, separately approving
this V3 plan/tasks revision jointly. This STATUS-ONLY record changes no requirements,
technical decisions or task content, completes no task and performs no implementation,
runtime diagnosis, validation, MEMORY edit or final UI acceptance. The coordinator
could delegate V3-1 → V3-2 → V3-3 → V3-4 → V3-5 → T10 under that approved
plan and preflight rules. The alignment revision above now records its separate joint
approval before pending work resumes. Historical approvals and checked T1–T9, About-R and V2-1–5 remain
intact; their technical conformity proves their attributed versions, not V3 or
owner acceptance. V3 takes precedence only for these deltas and their proof. T10
stays unchecked and follows V3-5; Selected Work partial acceptance stays intact.

### Actual source basis and causal investigation prerequisite

Read-only inspection establishes the following, NOT a fresh rendered diagnosis:

- Lower stacked `.future` paints surface across the section; its full-width grid
  separates natural text from a16:10 elevated media box. Only that media's `::before`
  owns the blend: fixed4rem height, horizontal core50%×2.5rem, outward feather to160%.
  V2 demonstrated opaque endpoint continuity, but this independently sized overlay
  does not itself prove integration of the whole text/joint/media section. Trace
  full-width paint, text padding/grid gap, media height, ellipse/core/feather bounds
  and scaling together against the owner's mobile AND desktop views before editing.
- `.header` still shares `.main`'s narrower76rem/gutter width. Its background/border
  paint that narrow box, not the96rem frame's inner width. `.headerContent` has
  reciprocal negative margins/padding for focus; desktop owns capped overflow there.
  Mobile panel is absolutely positioned against the sticky header (menu/wrapper are
  not positioned), with inline0 plus negative0.5rem margins and native overflow.
  Measure these containing/paint/control boxes and actual border endpoints; expanding
  paint alone must not carry those reciprocal offsets into offscreen menu controls.
  The owner reports incomplete paint and clipped menu controls; previous focus/control
  passes are V2 evidence, not proof against the new complete-surface requirement.
- Actual `navigation-menu.tsx` contains ONLY a trigger ref, state, toggle click,
  menu-root Escape and panel anchor click closure. There is NO pointerdown outside
  listener, wrapper containment ref or document outside handler to repair. The
  source-level cause of absent outside dismissal is absent behavior, not a presumed
  header-wide ignored-target ref. Confirm actual trusted click/touch behavior first.
- Shared SiteHeaderFrame measures the outer header with its existing ResizeObserver;
  both locale and global404 roots use the same header. Native root/target offsets
  already exist in globals. Preserve this data flow and standard in-flow sticky
  top0 through the frame's bottom phase; no fixed/hide-on-scroll replacement.

### Bounded files and responsibilities

| File/area | V3 authority after separate joint approval |
| --- | --- |
| `src/components/home/about-preview.module.css` | Stacked LOWER joint/paint geometry only; keep upper rules and side-by-side block protected. |
| `src/components/layout/site-shell.module.css` | Separate full-inner-frame sticky surface/border width from existing narrower control gutters; local sizing/focus clearance. Frame strokes/terminals/main widths unchanged; ONLY the approved V3-3 exception above may amend decorative paint order under its recorded joint approval. |
| `src/components/navigation/navigation-menu.module.css` | Mobile full-available-width panel sizing/gutters, native short-screen scroll and uncut control/focus bounds; desktop organization preserved. |
| `src/components/navigation/navigation-menu.tsx` | Completed outside click/tap lifecycle, actual panel/toggle refs and bounded focus handling; existing semantics retained. |
| `src/components/layout/site-header-frame.tsx`, `site-header.tsx` | Minimal shared wrapper adjustment ONLY if measured CSS geometry cannot retain control alignment/focus safely; no observer/event redesign or new shell responsibility. |
| `src/app/globals.css` | ONLY a demonstrated sticky-height fallback/anchor/focus-offset adjustment necessitated by this geometry; no root font, palette or broad styling change. |
| Navigation-local pure policy and `tests/*.test.mjs`, conditional | Only if real nontrivial production-used target/gesture policy warrants extraction; existing ESM native runner, no artificial helper solely for testing. |

About markup remains read-only; a demonstrated need outside this table returns to
coordinator before editing. No new application structure, API, asset, dependency,
runner, route or provider. Future implementer/reviewer may record actual evidence in
validation.md; planner does not edit it. No MEMORY/AGENTS/constitution edits.

Protect public identity through `site.ts`, full Hero name/Developer/degree and16/24px
supporting minimum, JR2.25rem,1rem nav and authored1/1.5rem padding/accepted height;
no deliberate compression. Preserve wider natural Hero portrait/full top/side hair
at all five widths, PNG/SVG/fonts/licenses, original upper-mobile clockwise-down
contour/upright content and matched22–35px gap reference, upper desktop left anchor/
45–55% axis/≥1.5rem clearance, corrected desktop lower arc. Keep semantic palettes,
print pairs,0.72/0.9 opacity, shadows,96rem/64rem frame and accepted carousel sources/
tests/events:32px/s, hover/contact release, no automatic focus pause, explicit Pause/
reduced-motion priority, smooth ownership and corrected wheel interruption. No new
photos/claims/contacts or unrelated accessibility repair.

### V3-1 → V3-2: one responsive lower composition, not another seam-only patch

After planning approval and safe preflight, capture a fresh V2 baseline of the ENTIRE
lower section at native resolution, both bounded edges visible, matching the owner
feedback; use viewport tiles without rescaling for tall sections. Compare desktop
preservation views and stacked-mobile closeups in both themes. If the original owner
image bytes are unavailable, record that limitation rather than claiming pixel match.
Measure future/composition/text/media/pseudo rectangles, content lines, actual joint,
opaque paint/alpha and semantic profiles. Isolate one browser paint layer/bounds
variable at a time, remove diagnostic styles and prove exact restoration. The
responsible height/width/layer relationship must be established before correction.

Implement the smallest LOWER-stacked CSS change following that diagnosis. Give
text-plane plus rounded transition a single composition-referenced paint geometry:
opaque semantic surface under text/gap must meet the entire bounded joint, then
decline along the preserved downward horizontal ellipse into secondary semantic
media paint. Derive joint origin from actual layout and shape dimensions from the
available joint width/media geometry rather than a separately detached fixed band.
Keep content boxes/16:10 ratio and upright placeholder independent of decorative
paint; text wrapping changes joint y naturally, not by a hardcoded document offset.
Local inert composition pseudos/native masks are available without DOM restructuring;
precise core/feather sizing follows V3-1 evidence within this recipe, not arbitrary
blur tuning. Full section means the joint's full INNER WIDTH and responsive geometry,
NOT a forced full-height gradient. Preserve rounded identity/direction and soft blend.

Do not replace the ellipse with a straight linear fade, make the whole lower section
a plain rectangle, deepen blur/fade under essential text, crop/distort original
content, hide overflow or recolor tokens to mask separation. Keep layers below
readable content. Verify endpoints AND intermediate positions through the complete
rounded blend, natural unequal text/media heights and newly stacked tablet widths.
Current4rem geometry/lower pixel equality is not a V3 preservation constraint; upper
and desktop geometry remain protected. A shape/content conflict stops at coordinator.

### V3-3: continuous bounded bar, separate inner controls

Use the sticky OUTER header to paint existing opaque `--background` and semantic
lower border from left inner-frame edge to right inner-frame edge (≤1CSSpx measured
alignment). Keep control group width/alignment at existing content gutters/76rem,
including mobile inset; surface width is not permission to remove gutters. Scope
header width separately from main; reconcile inner reciprocal margins/focus padding
and panel containing block using actual V3-1 boxes. Prefer local CSS; minimal existing
shared wrapper changes only for demonstrated need, observer unchanged. No rounded
floating panel, left empty strip, viewport bleed, clipped frame strokes or controls.

Opened mobile panel uses full available bounded bar width with its OWN preserved
content/focus gutters, no inherited negative-width escape. Keep all links/preferences
inside physical horizontal bounds and every control reachable by native panel scroll
and keyboard at320×568/root24. Preserve vertical links/separate preferences, desktop
horizontal/wrapping organization and short desktop native control scroller. Retain
page-access strip, ordinary page scrolling, skip/focus/anchor clearance, early JS-off
fallback and print behavior. Verify top/middle/end, including actual sticky containing
frame bottom clamp, instead of screenshotting only page top. No continuous scroll JS.

### V3-4: completed outside action and safe native focus (TDD)

Choose a scoped native document **click** listener while open: native completed
click/tap, not pointerdown/touchstart, is the dismissal boundary. Compare event path/
target against actual panel and toggle refs ONLY, not entire header/menu wrapper.
Nested panel content/preferences and toggle descendants are inside; uncovered header,
JR and page content/background are outside. Do not call preventDefault/stopPropagation,
capture pointers, change touch-action, add backdrop/trap/body lock or contact pause.
Outside navigation/control activation continues normally, exactly once. Cancelled/
drag/native vertical pan must not close solely from initial contact. If trusted
gesture evidence shows a completed-click listener still accepts a drag compatibility
click, add only demonstrated gesture discrimination (explicit start/end/movement/
cancel state, no arbitrary timer), with listeners/state cleaned on close/unmount.
Reopen and locale/route lifecycle must not accumulate listeners or stale targets.

Focus follows the approved RNF-2 rule, not a new global autofocus policy: let an
activated focusable outside target/destination own native focus; never move it back
to toggle or consume its action. For nonfocusable outside background, restore visible
toggle ONLY if closing would leave focus in hidden panel or cause dismissal-induced
BODY loss; otherwise preserve existing visible outside focus. Assess focus after
native activation/commit, including nested brand/link targets. Escape retains trigger
restoration; toggle/native keyboard behavior and destination-link closure remain.
The separate current-route anchor→BODY bug is observation-only, not blanket repair;
any focus work required for THIS outside path stays precisely in V3-4.

Before changing behavior, retain attributable RED from the same external native-CDP
browser regression harness: trusted outside background AND non-menu-header click/
touch leave menu open on current source. Then minimal implementation and identical
GREEN with action/focus/scroll assertions. This meaningful browser TDD is sufficient
for a trivial event fix; no helper/source-string test to inflate coverage. If a
nontrivial pure target/gesture policy is actually extracted and used in production,
also use `pnpm test` RED→GREEN with explicit inputs and Node-native erasable `.ts`
direct ESM/type-only imports; never import TSX or assume aliases. Existing copy,
identity, carousel, project and404 tests remain intact; no new runner/dependency.
Consult relevant installed/current documentation before any library/API change;
retain existing React19 lifecycle/event patterns, no framework upgrade.

### V3-5 and T10: fresh combined proof and distinct owner gate

Run all six AGENTS commands after the last meaningful source change:
`pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`,
`pnpm build`, `git diff --check`. Additionally run
`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test` and3111 equivalent:
current baseline32/32 per mode (21 unit+11 HTTP), plus any meaningful new policy
tests. Record actual counts; no-origin skips are not HTTP proof.

Fresh affected matrix in BOTH dev/prod: en/es×light/dark×320/390/768/1024/1440,
heights568/844/1024/768/900, normal/150% actual browser default AND root16/24. Assert
viewport, fonts, locale, actual theme chooser/scheme, query48rem matches and build/
source identity. Classify actual stacked vs side-by-side, not phone/tablet labels;
root-only enlargement does not change browser-default rem query evaluation.

- Home40 per mode: entire lower joint/section widths, responsive core/feather/height,
  readable lines/AA and no detached band/straight seam/color step/rectangle. Sample
  alpha/color profiles at both edges/quarters/center through normal/enlarged and
  natural unequal-height joints; exclude glyphs from decorative probes, separately
  verify actual label contrast. Native full-section inspection is mandatory, not
  one continuous seam row or source/function assertions. Upper/desktop/Hero guards
  are measured preservation, not a replay of earlier widening/shadow implementation.
- About/Projects80 shared cells per mode plus simple/nested en/es404160 per mode
  (scripts ON/OFF before visit/reload): total280 unique presentation conditions per
  mode, not multiplied by interactions. Every shared condition checks surface/border
  edges≤1px from inner-frame bounds, opacity, brand/control physical bboxes/focus,
  overflow and persistence at top/middle/end. On actual mobile, verify full-width
  open panel/no offscreen controls with native scroll/Tab/Enter, short320×568/root24,
  toggle/Escape/inside preferences and completed outside click/touch behavior on each
  page with scripts on. Scripts-off preserves native sticky header, genuine404/lang/
  explanation and native Tab/Enter same-language Home200; dropdown expansion remains
  the existing limitation. Wait externally, never on suspended in-page timers.
- Outside supplements cover header space, JR, background, uncovered content, links/
  controls (activation count1), focusable/nonfocusable focus outcomes, inside panel,
  repeated open/close, cancel/drag/native page-pan non-taps, page action after closure
  and desktop keyboard preservation. Measure focus rings/scroll access, real heading
  anchors and skip targets; do not conflate synthetic clicks with trusted input.
- Bounded source-hash guards and native smoke for theme System/persistence/bootstrap,
  locale/direct/client/history navigation, reduced motion, carousel contact/hover
  resume, focused manual Pause/Play/End and smooth→wheel interruption/32px/s priority.
  No all-old-baseline replay or new playback changes; reuse only explicitly attributed
  unchanged-source evidence, never as fresh V3 paint/event proof.

Capture matched owner pairs en/es×light/dark at390/1440/root16: ENTIRE mobile lower
composition plus readable closeups, preserved desktop arc, full bar at mid/end and
opened mobile menu after FINAL styles, outside dismissal before/after action. Add
320/root24 and actual newly stacked768/1024/default24 unequal-height supplements.
Record paths/hashes, actual scroll/composition, command exits/RED→GREEN and inspected
images/limitations durably during implementation. Chrome DevTools MCP inspection
plus native CDP actual viewport/default/input assertion: resize alone is not proof.

Reviewer independently checks latest RF-6/RF-13 and protected RF/RNF/current diff/
constitution. Then owner must accept integrated mobile lower, full bar/dismissal
and final About/shared/whole Home; V2 technical conformity and carousel partial
acceptance do not pass T10. No new task checked at planning time.

Operational preflight: actual git status/diff/unknown user work/source hashes,
Node>=24.12.0/pnpm12.4.1 and fresh process/port/output ownership BEFORE writers.
Owned sequential dev3110/prod3111, fresh final build for production; protect user
about:blank/pages. No unknown kill, install/lock repair/cache/output deletion or
hand-edited generated artifacts. Runtime conflicts stop at coordinator. Checkpoint
short browser batches; do not replay passed history merely for task time estimates.
This planner lacks a shell tool: working-tree inventory and `git diff --check`
are unavailable, NOT claimed passed. Document references/requirements/approval/
checkbox consistency checked; coordinator must verify diff/whitespace before delegation.
No application build needed solely for this prose revision.

Traceability: RF-13→V3-1/2 integrated geometry; RF-6/8→V3-1/3 full shared bar and
V3-4 dismissal; RF-9/10→V3-3/5 native shared/404 proof; RF-1–5/7/11/12/14→protected
sources and V3-5 smoke; RNF-1/2→matrix/AA/physical/focus/gesture bounds; RNF-3→native
scroll/motion guards; RNF-4→whole-composition pairs/T10; RNF-5→bounded files/hash
guards; RNF-6→six checks/origin tests/RED→GREEN/independent current review.

Risks: actual integrated sizing and reciprocal sticky/panel geometry need V3-1
diagnosis; native gesture/focus ordering needs trusted RED/GREEN, not assumptions.
No blocking product question remains. **Separate joint approval of THIS V3 plan
and tasks.md is recorded — 2026-10-12, “Lo apruebo”.** Final owner visual acceptance
and independent current-spec review remain required for T10; V3-1–5 stay unchecked.

## Historical approved revision V2 — mobile About, Hero identity and persistent shared navigation

Requirements basis: the latest [spec.md](spec.md) amendment, explicitly approved
with “La apruebo” on 2026-10-12. **APPROVED, JOINTLY WITH tasks.md.** The owner
explicitly answered “Lo apruebo”, as relayed by the coordinator on 2026-10-12,
separately approving this latest V2 plan/tasks revision jointly. This STATUS-ONLY
record changes no scope or technical decisions and completes no task. No
implementation, runtime diagnosis, new validation or final UI acceptance is
performed by this document change. The coordinator may delegate V2-1 → V2-2 →
V2-3 → V2-4 → V2-5 → T10 sequentially under the approved plan and preflight rules.

Historical original/T2/T8/About approvals below remain recorded. T1–T9 and
T6-R1/R2/R3/T9-R1 are complete historical work, not proof of V2. Latest independent
review was technically conforming to the earlier revision; owner whole-Home
acceptance alone remained pending. New feedback introduces bounded new work.
T10 remains unchecked and now follows V2-5. This section takes precedence ONLY
for the new deltas, their affected preservation constraints and final review.
In particular, lower-mobile pixel equality, fixed 7:10 layout reservation,
unchanged identity and nonpersistent positioning are not V2 acceptance rules.

### Sources, responsibilities and scope

Read-only source inspection, not rendered diagnosis, establishes:

- About upper mobile reserves a full 7:10 box, with a separate clockwise-90-degree
  original 1000×700 mask behind upright content. Actual paint occupies less vertical
  space than the transformed transparent canvas; the following grid gap adds space.
  Therefore measure paint-to-glyph separation, not just DOM box-to-box separation.
- Lower mobile `.future` paints surface, grid has a gap, and `.directionMedia`
  paints a rectangle plus a 4rem radial masked surface pseudo below text. These are
  competing cause hypotheses for the reported line, not a proved diagnosis.
  The corrected lower-desktop paint separation is already complete and protected.
- Shared header is a relative-positioned flex child of the full-document `.frame`;
  frame has no overflow clipping and has isolation/inert negative-z frame pseudos
  from64rem. Header is z-index5, skip link10; Home regions also establish isolation.
  Both locale layout and separate global404 root consume this same header/shell.
  Existing ResizeObserver publishes actual header height on the document root.
  Mobile menu is an absolute overlay; desktop panel becomes static/wrapping at48rem.
- Hero uses existing firstName/lastName fields, `overflow-wrap:anywhere`, large
  display clamps and an indented desktop surname span. Supporting text is currently
  0.8rem (degree0.875rem desktop). Word splitting/indent plus the longer name need
  real layout checks; do not assume a desktop nowrap rule is safe.
- `site.ts` derives fullName and initials. Header accessible name, portrait alt,
  footer identity/copyright consume it already. Current metadata has no literal
  owner name; do not introduce one or rewrite metadata descriptions unnecessarily.

| Area | V2 responsibility / boundary |
| --- | --- |
| `src/components/home/about-preview.module.css` | Diagnosed stacked-only paint/gap correction; original profile/uniform scale/upright safe content, desktop CSS protected. |
| `src/lib/site.ts` | Set existing firstName to `Jorge Luis`, lastName to `Ramos Suárez`; keep derived fullName/initials, yielding JR without a new display-name field or contract change. |
| `src/components/home/hero.module.css` | Full-name word wrapping, dominant heading and scalable role/degree minimum1rem; preserve all photo fit/width/motion declarations. |
| `src/components/home/home-hero.tsx` | Only if CSS cannot express safe name grouping using existing data/heading; no new copy, image API or duplicate identity. |
| `src/components/layout/site-shell.module.css` | Sticky header/background/stacking and shared header-height fallback placement; widths, frame strokes/terminals and authored padding unchanged. |
| `src/components/navigation/navigation-menu.module.css` | Viewport-bounded scrollable mobile overlay with focus clearance; preserve desktop horizontal wrap, vertical main links and separate preferences. |
| `src/app/globals.css` | Only shared header-height fallback/scroll-padding and targeted anchor/focus scroll-margin needed by persistence; no palette, root-font lock or global restyling. |
| `site-header-frame.tsx` / `site-header.tsx` | Minimal shared sizing/markup only if demonstrated necessary for persistent-header geometry; reuse observer, no continuous scroll listener or broad shell extraction. |
| `site-footer.module.css` | Only demonstrated full-name wrapping need; no larger supporting text, new content or standalone redesign. |

Metadata/footer/alt/header identity should follow the single corrected data source
without consumer edits. Audit both catalogs and public identity uses for leftovers;
current catalogs contain no literal old name, and role/degree wording must remain
byte-identical. `metadata.ts`, both roots, route/config/provider code, navigation
event logic and About markup are read-only. If evidence needs edits outside the
bounded table or changes to routing/data contracts, return to coordinator first.
No dependency, service, asset or speculative contact/credential is added.

Protect supplied PNG/SVG/font/license bytes, wider natural Hero photo/full hair,
light/dark palette and print pairs, opacity0.72/0.9, shadows,96rem/64rem frame,
navigation1rem/2.25rem JR logo/padding, existing overlay/Escape semantics and all
unknown user work. Accepted carousel sources/events/tests stay unchanged, including
native smooth ownership, wheel interruption,32px/s, manual Pause/reduced-motion
priority and no automatic focus pause/timer. Desktop About fix is not replayed.

### V2-1 / V2-2 — measured mobile About correction

After joint approval and safe preflight, establish fresh source/build identities,
baseline Hero/header/About captures and gap values in every actual stacked condition.
Inspect painted path extrema, transformed dimensions, reserved canvas, placeholder
line bounds, grid gap and heading visible glyph bounds. Separately reproduce the
lower line in both themes (especially dark), inspect background/gap/mask/pseudo
bounds and isolate one paint layer at a time in the owned browser. Restore each
diagnostic and verify restoration; distinguish an internal seam from a legitimate
outer section edge. Keep durable diagnosis/checkpoints; no guessed blur fix.

For upper mobile retain the original clockwise90° transform and equal-axis scale.
Decouple the decorative full canvas from flow reservation where necessary: derive
the compact occupied height from the complete rotated path's painted extent plus
safe separation, rather than reserving its unpainted tail. Keep the full decorative
canvas unclipped; its transparent rectangle may extend past the flow box without
painting over text. Reposition its center explicitly if flow height changes (current
top50%/height70% refer to the old reservation). Keep upright placeholder lines inside
the original opaque safe area. Reduce stacked-only grid spacing as useful, but gap
reduction alone must not leave the avoidable unpainted canvas tail untreated.
Uniformly reducing the whole original shape is permissible only with original
identity/content/legibility intact; no nonuniform scale, silhouette crop/redrawing,
square fallback, essential text overlap or overflow-hiding workaround.

For lower mobile change only the demonstrated paint/bounds discontinuity using
existing native masks/semantic endpoint colors and local layers. Retain rounded
downward horizontal feather and soft blend; do not remove the feather, substitute
a straight fade, blur a seam, recolor surfaces or hide essential content. Preserve
negative-z decoration below upright text. Exact declarations follow causal evidence.
Keep48rem composition transition and all side-by-side anchors/45–55% reference/
1.5rem clearance/corrected lower desktop arc. Verify actual browser-default16/24
media-query evaluation; root-only CSS enlargement is not the complete150% condition.

### V2-3 — coherent full public identity and Hero legibility

Keep the existing data contract and name derivations. Use the exact approved names
above in both locales, preserving JR; consumer output updates through existing data
flow. Retain the single h1 and name → developer role → degree reading order.
Use normal word-boundary wrapping (`overflow-wrap:anywhere` is not acceptable for
the name); no nowrap surname/name group unless proven to fit every applicable cell.
Adjust Hero-local rem-responsive heading clamps/line-height/span indent as needed
to fit the longest whole word at320/root24, preserving clear dominant serif heading
hierarchy. Keep role/degree at least1rem (16/24 CSSpx); allow normal line wrapping and
natural taller Hero. Do not translate the name, change role/degree text, shrink the
portrait or clip overflow to make the new copy fit above the fold. Verify footer
full-name natural wrapping before making any minimal name-only CSS accommodation.

### V2-4 — CSS sticky shared header and safe offsets

Choose **position:sticky at block-start0**, retaining in-flow space within the full
document frame. Source inspection supports this mechanism: no short parent bounds
or ancestor clipping was found. It reaches both existing document roots without
route/root changes and remains native with scripts disabled. Fixed positioning is
discarded here because it would remove flow space and require extra JS-off spacers/
width synchronization. Do not add hide-on-scroll, a collapsed logo, authored height
reduction, animation, continuous scroll work or an automatic menu redesign.

Give the persistent header an opaque existing semantic background and retain shared
z-order above content/below skip link without covering frame terminals improperly.
Keep bounded header width/gutters/main76rem and shell96rem; no viewport-width bleed.
Verify actual sticky behavior against frame isolation/pseudos, all Home isolated
regions and short pages at scroll top/middle/end. If actual ancestor behavior defeats
this recipe, stop with evidence/proposed bounded revision, not an automatic fixed swap.

Reuse `--site-header-height` observation; move/add a conservative rem fallback to
shared root scope usable BEFORE hydration and with scripts off in BOTH document
roots. Reflect actual48rem responsive padding/wrap. Set root scroll-padding and
targeted main/heading/focusable scroll-margin so native skip, fragment and keyboard
scroll targets plus outline clearance stay below the persistent band. Avoid blindly
double-counting both offsets; prove used target geometry. Keep Hero min-height's
existing header-height consumption coherent, not a second in-flow header spacer.

Bound only the opened mobile panel by available dynamic viewport height below the
measured/fallback header, with native vertical overflow and padding for focus outlines.
All destinations/preferences must be scrollable/reachable at320×568/root16 AND24;
do not let the expanded panel enlarge the persistent band to the full viewport or
make its lower controls inaccessible. Retain ordinary page scrolling and existing
Escape/link closure. Desktop panel stays horizontal/static/wrapping; inspect short
height/enlargement separately. If a naturally tall desktop header exceeds usable
height, use a bounded native header/control scroll area only where needed, retaining
at least one2.75rem page-access strip without reducing authored text/padding/brand.
Any minimal markup must remain shared and preserve native semantics; no modal,
trap, scroll-lock or new closing policy. Test normal keyboard focus at header and
page start/end; report pre-existing current-link BODY focus without silently fixing
it. Newly introduced focus obstruction is a V2 failure, not that old exemption.

### V2-5 — bounded combined final-source validation

Sequence: V2-1 diagnosis/baseline → V2-2 About → V2-3 Hero/data → V2-4 navigation →
V2-5 combined proof → T10 owner/independent final gate. Small implementation tasks
target20–30 minutes; baseline/final browser batches may take longer. Report/stop
after each delegated task; checkpoint short batches (preferably<120s), resume valid
cells without replaying history. No new task is complete at planning time.

Run all six exact AGENTS commands after meaningful final application changes:
`pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`,
`pnpm build`, `git diff --check`. Explicit-origin tests additionally use
`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test` and3111 equivalent;
current baseline31/31 per mode (20 unit+11 HTTP), zero skips. No-origin skip is not
HTTP proof. Existing Node native erasable .ts/ESM runner only; TDD only for meaningful
new production-used pure logic if needed, no artificial CSS/source assertions or
new testing library. Browser paint evidence is the visual regression test.

In BOTH dev/prod run the bounded affected matrix en/es × light/dark × five widths
320/390/768/1024/1440 (heights568/844/1024/768/900) × actual browser default/root16/24.
Home40 per mode combines upper painted-gap reduction/full profile/safe text, lower
seam pixel profiles/native-resolution inspection, exact full name/word line ranges/
computed hierarchy/role-degree16–24, wider photo/full hair, AA/overflow/focus and
sticky scrolling. About/Projects80 shared cells per mode verify persistence/access
without redesigning their composition. For simple/nested en/es404, repeat the40
conditions per path with native scripts-off/on, direct visits/reload and native
Tab/Enter recovery; this shared-header change warrants fresh error-shell coverage.
That is280 presentation cells per mode, grouped in short batches, not new tasks or
a replay of carousel/depth implementation. Assert actual viewport, default/root,
fonts, locale, actual chooser/theme/scheme, composition and source/build identity.

Each applicable shared cell checks header visible at top/middle/end (short pages
may clamp), unobscured essential text/focus, ordinary scroll reachability and native
skip/anchor targets. Check collapsed/open mobile panel, every destination/preference,
native panel scroll/Tab/Enter/Escape at short568/root24 and representative others;
desktop enlarged wrap/small heights; valid direct/client links, history and equivalent
locale navigation. Missing documents require genuine404/lang/explanation/native
Home200 with disabling BEFORE visit/reload, not hydration or iframe proof. JS-off
menu expansion remains the established limitation, not a new requirement. Include
pre-hydration native fallback/offset inspection and theme persistence/System/bootstrap
in both roots/modes; console/hydration errors are attributed, not guessed favicon bugs.

Preservation smoke includes reduced-motion/manual controls, hover/contact release,
focused Pause/End/Play and current smooth→wheel interruption/resume32px/s/priority.
No event changes or automatic focus pause. Attribute old portrait/depth/carousel
proof only where source identities remain applicable; fresh composition/head/focus
checks are needed after new Hero/header layout. Source/asset hashes and final diff
protect all nonauthorized files. New matched upper/lower MOBILE, Hero and scrolled
header owner pairs cover en/es×both themes at390/1440/root16, with320/24 and actual
newly stacked768/1024/default24 supplements; desktop About gets preservation captures.
Record actual gap/pixel/line/offset/contrast metrics, paths/hashes, source/build IDs,
exits, inspected images and limits durably in future validation.md updates. Prior
technical review/tests never become fresh V2 evidence by changing a checkbox.

Operational preflight: actual git status/diff/user work, Node>=24.12.0/pnpm12.4.1,
ports/process/output ownership before any writer. Own sequential dev3110/prod3111
and Chrome resources only; production requires fresh final build. No install/lock
repair, unknown kill, automatic cache/output/lock deletion or generated-file edits.
Preserve user about:blank/pages. Root/installed pnpm-lock mismatch remains pre-existing.
This planner has no shell tool: git inventory and `git diff --check` are unavailable,
not claimed passing. Read-only sources/references/approval/task consistency checked;
coordinator must check whitespace and protected tree before delegation. No build
is needed solely for this documentation revision.

Traceability: RF-12→V2-1/2 painted spacing; RF-13→V2-1/2 causal mobile seam correction;
RF-1→V2-3 full-name/identity/hierarchy; RF-6/8→V2-4 persistent shared header;
RF-2–5/7/9–11/14→protected sources and V2-5 targeted/current-shell proof;
RNF-1/2→matrix/contrast/word and focus geometry; RNF-3→unchanged motion/guards;
RNF-4→matched owner review/T10; RNF-5→scoped source/data/asset guards;
RNF-6→six checks/origin suites/native dev-prod proof/independent verdict.

Remaining risks: seam cause and compact paint geometry require actual diagnosis;
full-name fit, native focus offsets/JS-off fallback and short-menu scroll require
fresh browser proof. Genuine conflict with protected geometry or safe navigation
returns to coordinator. **Separate joint approval of THIS plan and tasks.md is
recorded above — 2026-10-12, “Lo apruebo”.** T10 owner whole-Home acceptance and independent current-spec verdict
remain final gates; approved carousel partial acceptance is preserved.

## Historical approved About revision — retained

About revision status — 2026-10-11: **APPROVED, JOINTLY WITH tasks.md**. The owner
explicitly answered “Las apruebo”, as relayed by the coordinator. This records separate
joint planning approval following requirements approval with “Los apruebo”. The
coordinator may delegate T6-R1 → T6-R2 → T6-R3 → T9-R1 → final T10 sequentially.
Original approved scope and historical approvals remain valid. T1–T9 are complete
historical records; new T6/T9 revision subtasks are unchecked,
and T10 remains pending. Historical partial-status passages below describe their
original checkpoints, not current execution authority. The section below supersedes
only the affected About recipe/revalidation and final acceptance procedure.
This approval record implements or validates nothing and does not accept final UI.

## Approved About revision — separate joint owner approval recorded

### Scope, source basis and preserved work

Implement only the approved RF-12/RF-13 additions and affected RNF-1/2/4/5/6 proof.
Primary application file: `src/components/home/about-preview.module.css`. Preserve
the current component/DOM, localized placeholders, semantic color tokens and all
supplied asset bytes. No real About photograph has been supplied. No new asset,
dependency, route, tool, global styling responsibility or generic MediaFrame API.
If CSS-only separation cannot safely keep content upright, stop with the exact
technical need and proposed minimal About-local component change for coordinator
authorization before editing `about-preview.tsx`; it is not blanket authorized here.

Inspected source: primary media currently masks its entire 10:7 box, including its
text node, with the unmodified 1000×700 SVG. The SVG fills the left side with its
organic boundary on the right. Upper desktop uses 83.9% canvas width and a separate
content layer at `calc(51.7% + 1.5rem)`. Lower desktop uses centered, potentially
unequal-height grid children; `.future` paints surface, `.directionMedia` paints
the rectangular placeholder, and composition `::after` paints a masked surface arc
from 50% across the full composition height. Source alone does not establish which
layer produces the owner's reported rectangular edge. Lower mobile uses its own
4rem-high radial `::before`, isolated below text at z-index−1; retain that exact
downward horizontal feather, geometry and layer order unchanged.

The surviving T9 `/tmp/opencode/spec003-t9-resume/about-inspection.png` was visually
inspected during planning: its lower views show the rounded intrusion terminating
against the rectangular media bottom. This is an attributed old-version contact
sheet, not a fresh reproduction, pixel diagnosis or approval of the new result.

Carousel is explicitly accepted visually/functionally. Preserve all current carousel
CSS/components/hooks/policy/tests, including correction-cycle-1 wheel capture and
interruption; do not replay implementation or add playback tasks. Current final
source guards are the five SHA256 entries in validation.md's “Current source —
supersedes historical playback hashes” table, not the older T8 table. Current suites
are 31/31 explicit-origin per mode (20 unit +11 HTTP), not historical 29/29 or15/15.
Preserve Hero identity/full-head fit/photo bytes, palette, shadows, navigation,
frame, fonts, footer, routes/providers and all unrelated user work. Existing T1–T9
proof remains attributed to its actual version; it does not validate new About RF.

### Investigation before the lower desktop correction

Under the recorded joint planning approval, capture the current About baseline on a safely owned server
before changing CSS. Reproduce the reported central lower edge, including dark theme,
both locales and normal/150% text. Inspect actual media/text/composition rectangles,
backgrounds, borders, mask extents, stacking/compositing and pixels beneath/beyond the
arc. Compare the owner reference when available and fresh captures. Temporarily
isolate one paint layer at a time in owned browser diagnostics, not committed code;
record which edge disappears and why. Include unequal heights in both directions
where the existing localized content naturally produces them; a diagnostic height
probe may supplement, but must be labelled and must not alter published copy.

The implementation is the smallest About-desktop-local CSS change addressing the
demonstrated paint/bounds cause, using existing native masks/gradients/layering and
semantic tokens. Keep the rounded feathered intrusion, readable text/placeholder,
right anchor≤1px and media proportions. The visible separation must remain curved
through its lower/upper ends, not just at mid-height. No arbitrary blur to hide a
square, clipping of essential content, blanket overflow hiding, rectangular cover,
global palette change or mobile-feather change. If diagnosis needs another file or
a different architectural responsibility, return evidence to coordinator first.
The exact CSS correction is intentionally not guessed before rendering diagnosis.

### Upper stacked-mobile contour geometry

Keep the existing 48rem transition: change only the stacked upper composition below
it; desktop/tablet upper at/above48rem stays unrotated with original anchors,45–55%
mid-height reference and≥1.5rem right-text clearance. Record the browser's actual
media-query match at root16/24; do not infer layout solely from a width label or
introduce a product breakpoint change.

Propose an About-local decorative masked pseudo-layer behind the unchanged upright
placeholder, rather than rotating the existing text-bearing element. The inspected
SVG's right-facing boundary maps downward with CSS clockwise90°: canvas points
(x,y) map to (700−y,x) before uniform scale/translation. The rotated bounding canvas
is700×1000 (7:10), not10:7. For a rendered final canvas width B, use uniform scale
s=B/700, pre-rotation canvas1000s×700s and reserve final height1000s; center the
rotation/translation so its full transformed canvas is inside the reserved box.
Do not stretch mask-size into a differently proportioned box or let transforms
collapse layout height. No SVG editing, contour redrawing, unmasked square fallback,
photo-pixel changes or content rotation. An equivalent clip/counter-content solution
requires the same verified reciprocal sizing and upright content; the existing
Hero demonstrates that principle but its API/CSS must not be changed or reused
with Hero-specific ratio assumptions.

Derive the upright placeholder safe box from the transformed opaque path, including
its concavity, not the full rectangular canvas. Check every localized wrapped line
and enlarged text against that region; allow natural section height and following
text separation. Verify contour direction visually, source-byte identity and equal
horizontal/vertical scale. Do not shrink typography or crop essential content to fit.
A future photo remains outside this revision; current validation uses the actual
placeholder, not invented media. If the original geometry cannot satisfy these
constraints at320/390 and150%, stop with measurements rather than changing shape.

### Bounded affected validation and final review

Sequence: T6-R1 baseline/diagnosis → T6-R2 upper mobile → T6-R3 lower desktop →
T9-R1 final-source revalidation → T10 revised owner/independent review. Each bounded
subtask reports and stops; checkpoints retain valid cells rather than rerunning
passed batches. Original completed checkboxes are not reopened or erased.

Fresh About matrix in BOTH dev/prod: en/es × light/dark ×320/390/768/1024/1440
(heights568/844/1024/768/900) × root16/24 =40 cells per mode. Assert actual viewport,
root, chooser-derived theme/color-scheme, locale, loaded fonts and composition mode.
Inspect upper downward original contour/upright unobscured placeholder on mobile,
unrotated desktop/tablet anchors/central curve/right-text clearance, unchanged lower
mobile pixel profile/layer order, and lower desktop continuously curved feather with
no rectangular underlay at any edge. Measure actual transformed SVG dimensions,
safe-box containment, document/body overflow0, unequal-height rectangles, used
text/background compositing contrast (normal4.5:1/large3:1), and About link hit-test,
keyboard access/visible focus. DOM box assertions alone cannot prove the paint fix.
Use fresh paired pixel/profile probes and Chrome DevTools visual inspection.
No artificial CSS unit/source-string tests or new runner are justified.

Run all six AGENTS commands after meaningful final CSS changes, on Node24>=24.12.0
and pnpm12.4.1: `pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`,
`pnpm test`, `pnpm build`, `git diff --check`. Also run
`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test` and the3111 equivalent;
expect the unchanged31/31 suite with no skips in each mode. Default no-origin skip
is not HTTP proof. Do not install, delete caches/outputs or hand-edit generated files.
Recheck current working tree, process/port/output ownership before any writer; use
only owned sequential dev3110/prod3111 resources as defined below, a fresh build for
prod, and leave unknown/user processes and protected about:blank untouched.

Guard unchanged regions with fresh source/asset hashes and bounded smoke per mode:
en/es native nested404 JS-off/on recovery (disable scripts BEFORE visit, actual404,
lang/native Tab/Enter Home200); theme persistence/System/locale navigation in both
locales; carousel hover/release, focused manual navigation/Pause, reduced-motion
access and the correction-1 wheel-during-smooth sequence at representative desktop/
mobile contexts. These are preservation checks, not new playback work or a replay
of the old280-cell whole-app baseline. Reuse attributed T5/T7/T9/reviewer evidence
only where source identities still match; expand checks only for a demonstrated risk.

Capture fresh matched before/after upper-mobile and lower-desktop pairs in all four
en/es×light/dark combinations at representative390/1440/root16, with150% supplements
for the narrow/unequal-height cases and unchanged lower-mobile/upper-tablet guards.
Keep mode, dimensions, root, theme, region-aligned scroll, source/build identity,
actual file paths/hashes and inspected findings. Subsequent implementer records
bounded logs, command exits, valid-cell IDs and substantive geometry/pixel metrics
durably in validation.md; temporary capture loss must not erase the comparison facts
or be misrepresented as surviving images. No validation.md edit occurs in planning.
Present the actual paired captures to the owner, especially the upright downward
mobile upper contour and square-free desktop lower arc. Reviewer independently
validates amended RF-12/RF-13 and preservation of other RF/RNF against current sources
and attributed prior proof. Earlier technical approval is for the old requirements;
new About review and final owner visual acceptance remain required. Carousel partial
acceptance is retained and is not whole-Home acceptance or T10 completion.

Traceability: RF-12→mobile orientation/uniform geometry/source guards and preserved
upper desktop metrics; RF-13→diagnosed desktop paint correction/pixel proof and
unchanged lower mobile; RNF-1/2→80 controlled About cells, readability/AA/focus;
RNF-4→owner paired review/partial-acceptance boundary; RNF-5→scoped CSS and hashes;
RNF-6→six checks,31/31 per mode, native targeted regressions and independent verdict.
Other RF remain covered by preserved source-matching proof and bounded smoke.

## Historical original approvals and implementation plan — retained

T8 technical amendment status: **APPROVED**, jointly with tasks.md. The owner
explicitly answered “Las apruebo”, as relayed in the planner handoff on 2026-10-11;
original approved scope remains valid.

Joint approval record — 2026-10-10: The owner explicitly answered “Lo apruebo”
to the coordinator's summary of the ten tasks and the paths
specs/003-visual-refinement/plan.md and specs/003-visual-refinement/tasks.md,
as relayed in the planner handoff. This approves the original plan and all ten
tasks jointly, including the numerical geometry, palette, shadow and playback
proposals below, without changing scope, architecture or the approved RF/RNF.
The coordinator may delegate T1–T10 sequentially without another owner approval
between valid approved tasks. At that approval, all tasks were unchecked and unstarted;
this document-only record does not execute T1, validate actual geometry or contrast,
or accept final rendered UI. Final owner visual acceptance and independent review
remain required. Earlier proposal/gate wording below is superseded only as to
joint planning approval, not operational preflight or validation safeguards.

Basis: approved [spec.md](spec.md), owner’s “La apruebo” relayed by the coordinator
on 2026-10-10. No requirement changes. Numerical proposals below are implementation
choices offered for this planning gate, not previously accepted renderings.
No application implementation, runtime baseline or visual acceptance occurs here.

## Approved T2 amendment — joint owner approval recorded

Joint amendment approval — 2026-10-10: The owner explicitly answered “La apruebo”
to the coordinator's exact summary of the bounded T2 opacity amendment in this
plan and tasks.md: light inactive opacity remains72%, dark changes72% to90%,
observed contrast is approximately3.54:1 and projected contrast approximately4.70:1,
with actual verification still required. This jointly approves the amendment,
superseding its pending/proposed-only authority wording, not accepting a final
rendering or declaring AA compliance. Spec approval and all RF/RNF remain unchanged;
the original approval, all other task scopes and dependency order remain valid.
T1 is complete; T2 is PARTIAL and unchecked. Preserve the already-applied dark core
in globals.css without redoing or rolling it back. Coordinator may now delegate
T2 resumption for only the delta below and its checks; T3 must wait until T2 meets
its actual AA and completion gates.

Evidence: [validation.md](validation.md#t2-partial-implementation--contrast-gate-returned-to-coordinator)
records the inactive soft-print 10px label at ancestor opacity0.72 over the changed
moss surface: effective foreground29.32/42.44/40.08, background115/128.12/107.04,
contrast3.542569:1. The matched old surface gives3.532121:1, so this is pre-existing,
not a demonstrated newly introduced defect or an established unique root cause.
It is nevertheless related: T2 changes the actual blended text/background pair,
which must satisfy existing RNF-2 and T2's AA criterion. The opaque print pair's
5.447144:1 does not prove the visible inactive label passes. At0.625rem/10px this
is normal text requiring4.5:1, not the large-text3:1 exception.

Authorize only these additions to T2's existing application scope:

- src/app/globals.css: add semantic --carousel-inactive-media-opacity with0.72 in
  :root and0.9 in the existing dark theme selector. Existing light/root colors,
  all print colors and the six approved dark palette values stay unchanged.
- src/components/ui/carousel.module.css: replace only the inactive opacity0.72
  declaration on .slide > article > :first-child with consumption of
  var(--carousel-inactive-media-opacity, 0.72). Preserve active/focus opacity1,
  the350ms transition, selectors, silhouettes, repeated copies and track geometry.

Coordinator-supplied local compositing calculations using the observed soft-print
inputs project4.3498:1 at0.85,4.5546:1 at0.88 and4.695186:1 at0.9. These are static
projections, not fresh browser measurements or final visual acceptance. Use0.9 for modest
margin while retaining a slightly muted dark inactive state; light stays at0.72.
The dark active/inactive hierarchy will become subtler and needs visual review.
Do not apply a literal0.9 across both themes, alter print colors, typography,
palette roles, masks, image bytes, carousel algorithms or dependencies.

On T2 resumption, measure all three print tones and their visible labels in both
locales using actual computed colors and the full ancestor/compositing chain,
including inactive, active, focus and intermediate dark transition states0.9–1.
Record AA evidence for every changed used pair, not just the soft-print example
or opacity1. Confirm unchanged light inactive behavior, and run the existing
T2/AGENTS checks and theme/shell regressions; prior partial checks are not proof
of the amended result. If another pair fails or this exact bounded correction
cannot meet AA, STOP and return evidence rather than expanding opacity work or
weakening acceptance. No broad pre-existing accessibility cleanup is authorized.

Traceability: RF-5 and RNF-2; RF-4/RNF-5 preservation. This one declaration moves
into T2 from the carousel CSS area already listed for later T7 media work; T7
retains its shadow scope and observes, rather than replaces, the approved T2 rule.
Final visual acceptance remains T10. This approval record changes documentation
only; it does not implement the opacity delta. Typegen/lint/tsc/tests/build passed
before the opacity change; applicable checks must be rerun after the delta, not
reported as validation of it.

## Approved T8 amendment — joint owner approval recorded

Date: 2026-10-11. Evidence: [validation.md](validation.md#t8-partial--manual-smooth-navigation-conflict-returned-to-coordinator)
records native smooth End navigation failing with eligible autoplay and settling
with explicit Pause. Source inspection confirms goTo's native scrollTo and advance's
RAF scrollLeft writes compete, including advance(0). Offset synchronization alone
is insufficient. This is a technical correction within RF-14 and RNF-2/3/5/6;
spec.md, playback eligibility and explicit manual intent remain unchanged.

Authorize only temporary exclusive scroll-write ownership in the existing
use-carousel-track.ts hook for native smooth manual navigation:

- Acquire ownership before starting native smooth goTo. Until actual native
  settlement or a handled interruption, suppress all autoplay RAF scroll writes,
  including advance(0), and defer loop-normalization writes that could cancel it.
  Continue reading native offsets/active selection; ownership is not a playback
  pause flag and must not change manual preference, eligibility or focus policy.
- Release on actual native settlement using the viewport's supported scrollend
  signal, with current-operation identity and observed offset/target reconciliation.
  Handle already-settled/no-op targets without waiting for an event that cannot fire.
  Do not use the existing160ms quiet-scroll fallback as proof of native smooth
  settlement or introduce an arbitrary resume timer. If reliable settlement cannot
  be established in the executing browser, STOP and return evidence to planning;
  do not silently leave ownership latched or substitute instant full-motion movement.
- Superseding navigation replaces the current operation, retaining nearest-copy
  targeting; stale completion callbacks must not release a newer operation. Pointer
  contact/drag interruption, hidden/offscreen visibility transitions, resize/geometry
  remeasurement, reduced-motion changes and unmount must explicitly invalidate or
  reconcile the current operation before another writer takes over. A handled
  interruption must stop/reconcile the outstanding native operation, not merely
  clear a flag while its writes continue. Clean up listeners/operation identity;
  preserve existing drag completion/cancellation and visibility policy.
- At settlement or handled interruption, reconcile fractional autoplay position
  from the actual native offset, applying existing equivalent-copy normalization
  only when safe. Resume32px/s only if existing eligibility still permits it; reset
  the advancement time baseline so ownership time produces no accumulated catch-up.
  Preserve fractional progress between eligible frames,0.05s cap, loop geometry,
  repeated copies, masks, stable controls and reduced-motion instant manual access.

No focus autopause, permanent latch, new animation engine, dependency, speed change
or instant full-motion replacement is authorized. Minimal event coordination with
the current carousel/playback hooks is allowed solely for interruption handling
and clock reconciliation, not a new eligibility condition or architecture.

T8 remains partial and unchecked; preserve valid partial policy/contact work and
completed T1–T7. T9/T10 remain pending. No implementation of this amendment or T8
resumption occurred in this approval record. The owner jointly approved updated
plan.md and tasks.md with “Las apruebo”; the coordinator may delegate bounded T8
resumption and its required checks. Approval does not validate the amended result.

## Scope and preserved boundaries

Refine all Home regions together, shared header/theme/frame, and footer coherence.
Keep About/Projects/404 individual compositions, copy, routes, project selection,
fonts/licenses, supplied asset bytes and identity sources unchanged. Reuse existing
Server Component composition and small carousel client boundaries. No dependency,
configuration, locale policy, broad CSS migration or new animation is proposed.

Spec002 is implemented and closed. Preserve its complete global-not-found document,
native localized recovery, request-locale bridge and experimental configuration.
The locale layout and global document already consume the same shell CSS/header/
footer/providers: shared CSS changes reach both without a new document wrapper,
shell extraction, routing change or duplicated decorative markup.

## Evidence basis and operational preflight

Read root/global AGENTS, constitution, full MEMORY and spec003; spec002 requirements,
current plan/tasks authority and validation record; Home, media, shell, navigation,
theme and carousel sources; all four test files; package/scripts and lockfiles.
Technical baseline, not runtime measurements:

- Hero wrapper: min(84%,23rem), then min(92%,30rem) from 48rem; rotated supplied
  hero mask, 760/1200 display ratio, cover at 50% 50%. Supplied PNG is 1122×1402
  according to the handoff; source image was visually inspected, not byte-hashed.
- Shell max-width 96rem, lines from 64rem, 1px; inner text max-width 76rem.
- Navigation text 0.75rem, brand 2.25rem, 2.75rem minimum controls; header block
  padding 1rem/1.5rem and an existing ResizeObserver for actual height.
- About compositions currently cap at 80rem with gutters; upper SVG is 1000×700,
  lower boundary combines a vertical linear fade and radial overlay.
- Playback currently latches pause on focus, wheel, pointer-down and goTo; hover
  alone is temporary. Visibility threshold 0.5, speed 32px/s, frame cap 0.05s.

Before implementation, inspect git status/diff and record user/uncommitted work,
including spec002 and the portrait feature. Preserve it; unknown ownership stops
affected work. Record original SHA256 for portrait.png and all supplied masks.
Check Node >=24.12.0, pnpm12.4.1, installed graph, outputs/process ownership and
ports. Root pnpm-lock.yaml currently shows only pnpm/configDependencies, whereas
node_modules/.pnpm/lock.yaml records the app graph. This discrepancy requires
coordinator assessment before any installation; do not silently regenerate it,
install, upgrade or weaken frozen-lockfile checks as part of this spec.

This planner has no shell tool: current git inventory and git diff --check were not
executed. They remain coordinator/reviewer checks, not a clean-tree claim.

Only after joint approval and safe output ownership, use sequential actual-app
servers: pnpm dev --port 3110 --hostname 127.0.0.1; after a successful build,
pnpm start --port 3111 --hostname 127.0.0.1. Check ports afresh. An existing3000
server is not disposable: do not kill/restart it or overwrite shared .next while
it is active without specific ownership/permission resolution. Busy ports/output
conflicts STOP; no automatic distDir change, fixture or historical experiment.
A confirmed existing app server may supply read-only baseline evidence if its
source identity is established. Otherwise capture baseline on a newly owned safe
server before edits. Close only newly owned task servers/pages; leave user tabs,
about:blank, unrelated processes and artifacts untouched.

## Design brief and review

The distinctive element remains the owner's portrait and organic silhouettes,
not a replacement card kit or decorative botanical layer. Preserve Cormorant
Garamond display and Manrope body, existing localized copy and left-aligned desktop
reading. Mobile stays a readable vertical composition. Curves coordinate the image
edges, gold frame terminals and lower About blend; offsets remain restrained.

Six dark base roles, proposed exact values:

| Role | Value | Semantic assignment |
| --- | --- | --- |
| Forest background | #18231E | --background |
| Moss surface | #2B3B30 | --surface |
| Sage elevated surface | #3B4D3E | --surface-elevated; --media-placeholder |
| Ivory foreground | #F1EBDD | --foreground, --media-foreground |
| Sage accent | #AFBEA1 | --accent; --accent-foreground uses background |
| Aged brass | #B49A65 | --page-frame |

Derive muted text from ivory/sage, borders/control borders from sage/background
through existing semantic tokens; measure every actually used pair. Keep print
paper/soft/strong pairs stable in both themes. Light #F1EBDD ivory, #8F9B82 sage,
#354F52 petrol and all existing light color assignments remain unchanged, including
the current mixed gold. Do not remove unrelated unused tokens.

Review against brief: the warm ivory/serif and forest direction are explicit owner
choices, not generic defaults to replace. No new font, all-caps label, numbered
section, marketing copy, flower/branch, glow or animated ornament is introduced.
Existing section numbering/content remains untouched. Memorability stays in the
supplied forms; navigation and footer stay quiet.

```text
desktop/tablet:                 mobile:
   introduction | wider photo    wider photo
   Selected Work / same shapes   introduction
| primary image ~50% | text |     Selected Work
| text       rounded ) media |   primary media, then text
|       coherent footer     |    direction text, then secondary media
```

Side bars apply only at the existing 64rem transition. Diagram expresses anchors,
not a new breakpoint or mandatory mobile side-by-side layout.

## Files and responsibilities

| File/area | Planned change |
| --- | --- |
| src/app/globals.css | Dark semantic colors/elevated role and scoped media-depth tokens; light palette unchanged. Approved T2 amendment adds only the theme-specific inactive-media opacity token to the already-applied dark core. |
| src/components/layout/site-shell.module.css | Continuous side frame/terminals; responsive header wrapping/preferences if needed, bounded widths retained. |
| src/components/navigation/site-navigation.tsx and site-navigation.module.css | Separate main-link orientation from locale links; 1rem text. |
| src/components/navigation/navigation-menu.module.css | 1rem trigger, preserve overlay/interaction/padding; natural wrapping. |
| src/components/theme/theme-switcher.module.css | 1rem selector, retain minimum target and native behavior. |
| src/components/home/portrait.ts, home-hero.tsx, hero.module.css | Natural photo ratio, wider wrapper, safe photo fit and accurate sizes. |
| src/components/ui/media-frame.module.css | Hero-only rotated geometry update and mask-external shadow cascade. |
| src/components/home/about-preview.module.css | Bounded frame anchors, uniformly scaled original upper mask and lower elliptical blend. |
| src/components/projects/selected-projects.module.css, ui/carousel.module.css | T7 media-depth/edge or shadow clearance; no carousel shape/track layout redesign. Approved T2 amendment additionally replaces only the single inactive opacity declaration in carousel.module.css. |
| src/components/ui/carousel.tsx, use-carousel-playback.ts, use-carousel-track.ts | Separate manual pause from temporary contacts/hover, remove latches and retain drag/navigation. |
| src/components/ui/carousel-playback.ts (new) | Pure typed playback policy/contact transitions, directly exercised by the hook. |
| tests/carousel-playback.test.mjs (new) | Behavioral transition regressions with existing Node test runner. |
| src/components/layout/site-footer.module.css | Only demonstrated coherence/contrast/spacing needs; no standalone redesign. |
| specs/003-visual-refinement/validation.md (future) | Durable baseline, dimensions, checks, RF/RNF evidence and limits. |

Read-only invariants: public/images/me/portrait.png; supplied SVGs; theme-provider.tsx;
both document roots; navigation-menu.tsx interaction logic; i18n/site/project data;
config, package files and tests/localized-404.test.mjs. Do not change those invariants
to solve geometry. No source file is created or modified in this planning phase.

## Geometry proposals

### Hero fit and comparative width

Propose min(90%,25rem) below48rem and min(98%,32rem) above, preserving the existing
desktop column split/gap. At normal size, uncapped wrapper growth is90/84=1.0714
and98/92=1.0652; capped growth25/23=1.0870 and32/30=1.0667. These are source-based
projections, not measured visible-photo widths. Keep min-width:0 and room for the
existing gentle rotation; do not hide document overflow to mask failure.

Use1122/1402 (~0.8003) as the frame/display ratio rather than760/1200 (~0.6333),
so widening does not simply make the already tall crop taller. Retain hero-frame-02.svg
and its contour; no new silhouette or photo edits. Recompute rotated clip and
counter-rotated child sizing from the new ratio r: clip width1/r, height r;
child width r, height1/r, centered as today. This changes the Hero frame proportions,
not the project mask. It does not authorize redrawing the supplied path.

Use a centered photo safe box inset5% on each side, matching its natural ratio,
object-fit:contain and object-position:50% 0%. The existing media background fills
the narrow shaped rim. Scaling is uniform; never stretch the photograph. The inset
adds breathing room above hair where object-position alone cannot move an exactly
ratio-matched image. Keep actual intrinsic dimensions separate from CSS display
geometry, retain fill/preload/localized alt, and update sizes to follow the approved
CSS maxima/breakpoints rather than retaining the old560px assumption.

Validate photo-boundary span excluding shadows and rim against fresh baseline at
all five widths; wrapper math alone is insufficient. Record image rectangle, mask
visible span and photo-visible span, plus head/hair screenshot inspection against
the original photo. At150% allow natural height growth/stacking and preserve full
head before normal-size widening. Check resting Hero and affected existing scroll
offsets; add no new motion. If this fit still clips hair or fails comparative width,
adjust positioning/inset within this same fit strategy and verify again. A required
new silhouette, asset-byte edit, frame escape or narrower exempted viewport is a
conflict: return to coordinator, not an automatic workaround.

### Continuous frame

Retain96rem maximum and64rem applicability. Propose2 CSS-pixel strokes (not a
root-font-dependent heavy border), unchanged light gold, new dark brass. Draw
decoration through shell pseudo-elements with pointer-events:none, behind content;
no generated semantic content, viewport bleed or new document wrapper.

Propose a1.5rem-high terminal at each top/bottom end, curling inward by0.75rem:
a quarter-ellipse with vertical tangent at the side line and horizontal tangent at
its inner tip. Mirror left/right and bottom/top. Continuous middle strokes meet
terminals without a visible gap or double-thickness join. The straight inner
stroke boundary is the media alignment reference. Keep ordinary text at existing
gutters; terminal zones lie above/below media anchors and never overlay images,
essential text or focus. If CSS quarter-ellipse pseudos need layered backgrounds,
keep that drawing shell-local; no new ornament asset is necessary.

### About primary boundary and bounded anchors

Make About's composition reference the full inner shell width W rather than its
current80rem inset. Reserve ordinary text gutters independently. At widths without
visible lines the same bounded shell edges remain the alignment references.
Desktop media anchors are flush within1 CSS pixel of the straight inner strokes;
never draw the line over media. Keep inner frame width consistent across both parts.

From48rem, uniformly scale the unchanged1000×700 primary SVG and its canvas:
height=0.7×canvasWidth, left canvas edge at the inner frame edge. Do not stretch,
crop the path or use contain letterboxing that moves that anchor. At normalized
mid-height y=350, the path's rightmost boundary crossing is approximatelyx=596.24
of1000 (source Bézier sampling, not browser measurement). Proposed canvasWidth=
0.5W/0.59624 (~0.839W) places that reference at0.5W. Include the entire supplied
path, including its concavity; do not substitute a generic arc here.

Proposed measurable tolerance: rightmost opaque primary-mask edge at half the
rendered mask height must be45–55% of W. Record reference coordinate and W; other
curve points need not be centered. Text starts to the right of the maximum opaque
curve extent with at least24 CSS pixels clearance at normal text size (1.5rem for
scaling), retaining right gutter and no overlap. Section height can grow with text;
do not stretch the SVG to text height. If necessary align media within a taller
section while retaining its own aspect ratio and metric reference. Mobile stacks
media then text, with the original uniformly scaled silhouette and readable
localized placeholder in its safe left area; no invented photo or reused Hero PNG.

### About lower rounded blend

Keep left text/right secondary media from48rem, right media edge flush to inner
frame. Retain16/10 media ratio and localized placeholder. Remove the straight
desktop fade as the boundary's determining shape. Propose a surface-colored
elliptical overlay attached to the text's right edge, centered vertically, with
its rightmost point intruding clamp(3rem,6vw,6rem) (48–96px at16px root) into media.
Its vertical semiaxis is half the composition height; its horizontal semiaxis is
that intrusion. Feather only its curved perimeter over1.5rem (24px reference),
using an elliptical radial mask on the overlay, not a rectangular vertical fade.
At top/bottom the intrusion tends toward zero; at mid-height it is maximal. Keep
all text outside the overlap and at least1.5rem clear of its opaque boundary.
Overlay is inert decoration; media/background bounds stay inside the shell.
On mobile retain a readable stack and soft curved upper media transition rather
than squeezing this horizontal arrangement into320px. No placeholder is removed
or replaced with invented final media.

## Depth and cascade

Keep MediaFrame filter outside its masked clip: a box-shadow on the rectangular
photo or inside overflow:hidden cannot provide a shaped external shadow. Propose
two soft drop-shadow layers,0 0.2rem 0.35rem and0 0.8rem 1.1rem. Light uses the
existing petrol shadow color at restrained16%/12% opacity; dark uses black at
24%/38% on distinct moss/elevated mats, with a discreet ivory edge highlight at
8% opacity if necessary for contour separation. Highlights follow the mask,
not a cyan/glowing rectangular border. Keep edge treatment beneath image content.
All color/depth assignments remain semantic global tokens; component geometry
and filters remain local. Avoid a more-specific selector cancelling the shared
filter. Check active/inactive media opacity, all three repeated copies, clipping
at carousel viewport bounds and neighboring captions. Add only needed clearance,
not slide width/speed changes. Compare actual light character and dark depth
side-by-side; numbers do not establish shadow quality.

## Playback data flow and deterministic policy

Retain current geometry, looping, count policy, frame clock/cap and visibility
subscriptions. Introduce pure policy with explicit inputs: availability, manual
paused, mouse hovered, active touch IDs, active mouse drag, reduced motion,
document visible, intersection eligible. Output playing is their eligibility
conjunction with no manual/temporary blocker. Browser subscriptions/events remain
in hooks/UI; tests require no DOM, React runner, fabricated clock or global state.

- Only explicit Play/Pause updates manual pause. Remove focus-capture pause, wheel
  latch, pointer-down latch and goTo's unconditional setPaused(true).
- Mouse enter/leave controls hover; mouse drag remains temporarily suspended until
  drag completion/cancellation, including captured drag outside hover. Preserve
  capture threshold and native scrolling; release/cancel/lost capture clears drag.
- Track touch IDs on the carousel root so control/content contact is included;
  keep the pause until the last contact ends. Cleanup pointerup/pointercancel
  outside the viewport through scoped document listeners while contact exists;
  do not steal native touch scrolling through blanket preventDefault or capture.
  Lost tracking clears only the ended/lost ID, not surviving contacts; hidden
  document/unmount cleanup reconciles stale contacts without changing manual pause.
- Ending hover/contact resumes only when eligibility allows. Focus has no state
  transition; Play selected while still hovered/contacted waits until it ends.
- goTo keeps nearest-copy targeting, manual normalization and reduced-motion instant
  movement. Original offset synchronization is insufficient in the reproduced T8
   case. The jointly approved amendment above adds temporary exclusive
  native scroll ownership, actual-settlement/interruption handling and fractional
  offset/clock reconciliation without changing eligibility or manual intent.
  Existing smooth scrolling must settle before eligible32px/s writes resume;
  do not add a permanent pause or arbitrary resume timer.
- data-playing reflects effective playback; button name/icon reflects explicit
  manual preference (or reduced-motion restriction), not temporary hover. Counter
  announcements stay off during automatic advancement; manual-only polite updates
  must not turn a temporary pause into a permanent state. Controls stay outside
  moving track, focus stable; outer copies stay aria-hidden/inert and count remains3.

Existing hidden-document/offscreen≥50% policy, zero/single-item handling and reduced
motion take priority. No new wheel debounce, autoplay delay, animation dependency
or focus-pause variant. Pure contact/policy functions are justified by this actual
state separation and used in production, not a test-only duplicate renderer.

## Alternatives and technical grounding

Reject replacing masks, editing photo bytes, viewport bleed, removing continuous
lines, compressing header, drawer/modal conversion, full CSS migration and new
animation: they contradict or expand scope. Reject guessed box-shadow-only depth
and top object-position alone: masking and equal-aspect fit require separate care.
Keep48rem navigation transition;1rem main/language/menu/theme text and2.25rem brand.
Give SiteNavigation a main-only orientation class so LocaleSwitcher using .links
does not become an accidental vertical language list. Preserve2.75rem controls,
header padding, overlay logic and existing height observer; natural wrap/growth is
allowed when text enlarges. No known focus/brand/theme-name/favicon/query fix.

Installed Next16.3.5 image guide confirms fill positioning, contain/cover semantics,
sizes responsive selection and preload. Installed not-found guide confirms global
document bypasses the root and must keep its own styles/fonts/providers. No new
framework API decision is proposed. Context7 resolution failed with Invalid API
key; installed guides and source ground this plan, not claimed live library docs.

## Tests and validation

Use existing package runner through pnpm test (Node native erasable .ts imports,
ESM explicit runtime .ts extensions/type-only imports; no TSX import/new runner).
TDD for playback: behavioral tests first, show attributable failing contact/resume
and pause-priority cases, then minimal policy/hooks integration and green. Cover
multiple touches, duplicate/end/cancel/lost IDs, pause during contact, Play during
hover, focus no-op, pointer/wheel/goTo no latch, reduced motion, visibility and
unavailable zero/single autoplay. A pure policy pass alone does not prove event
wiring; real browser regression is mandatory. Keep existing geometry/messages/
projects/404 tests intact. No source-string assertions as UI acceptance evidence.

For the approved T8 amendment, add only relevant deterministic behavior regressions
with the existing pnpm test runner: native ownership suppresses every RAF write
(including advance0), current settlement/no-op releases correctly, superseding
navigation rejects stale completion, and contact/drag, visibility, resize,
reduced-motion and teardown interruptions leave no stale ownership. Exercise the
production-used coordination boundary with explicit offsets, operation identities
and frame deltas, without a new DOM/React runner. Verify fractional reconciliation,
no catch-up, and unchanged manual-pause/reduced-motion priority.
Extend the already-planned live T8 browser checks in dev/prod: trusted End/Home,
arrows and indicators during eligible focused autoplay must reach their native
smooth target (including equivalent loop copies), then resume eligible32px/s
movement without snapback/catch-up. Check superseding navigation and the listed
interruptions, plus explicit Pause/reduced-motion controls. Pure tests cannot prove
native settlement. Unsupported reliable detection returns to planning, not a pass.

After implementation run all AGENTS checks:

```text
pnpm exec next typegen
pnpm lint
pnpm exec tsc --noEmit
pnpm test
pnpm build
git diff --check
```

Additionally run LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test in dev
and the3111 equivalent in production. No-origin integration skips are not passing
404 coverage. Do not fix pre-existing unrelated failures or delete incremental
outputs automatically. Scope new/untracked documents into whitespace review too.

### Browser matrix and evidence

Use Chrome DevTools MCP owned pages; native top-level CDP where script disabling
or real contact lifecycle needs it. Never iframe a missing-route probe. Native
script execution disabled BEFORE direct visit/reload; ordinary DOM/runtime
inspection is not app hydration. Both modes require HTTP and visible result.

1. Fresh matched Home baseline/result: en/es × light/dark ×320/390/768/1024/1440
   × normal/150% text (16/24px root), same viewport height/scroll/resting state.
   Measure portrait visible width at normal size, head/hair at both sizes, ratio,
   overflow, About anchors/center reference/tolerance/clearance, lower curved blend,
   nav sizes/layout, surface separation, frame and footer. Repeat resulting matrix
   in development/production; attribute baseline mode and avoid false comparisons.
2. Shared presentation on About/Projects across that same locale/theme/width/text
   matrix in both modes, without judging their individual compositions as redesigns.
   Check direct/client navigation, back/forward and equivalent locale routes.
3. Four missing paths: /en/audit-missing, /es/audit-missing and their /deeper
   variants; dev/prod × native JS-off/on × both themes × five widths × both text
   sizes. Preserve genuine404/no redirect, lang, visible exact explanation/native
   Home link, one semantic main, keyboard/focus and same-locale recovery200.
   Check direct visits and reloads, not historical screenshots. With JS on use
   actual hydrated theme selector; with JS off record controlled data-theme input.
4. Keyboard Tab/Enter, mobile menu/Escape and all preferences; identify existing
   BODY-focus concern separately. Carousel: mouse hover/leave; wheel while hovered;
   drag/release outside; touch/swipe/multiple contacts/release/cancel/lost tracking;
   focus during autoplay and resume while focused; manual Pause/Play priority;
   reduced motion, hidden/offscreen transitions, empty/single logic plus actual
   available-items behavior. Controls and focus must not move with the track.
5. Theme bootstrap/persistence/system changes and locale navigation in development
   and production. Verify early theme and console/hydration behavior without
   changing the compatibility provider. Compute AA actual text pairs4.5:1/large3:1
   and inspect focus/control contrast (target3:1 against adjacent surfaces).

Use bounded short batches, preferably<120 seconds, checkpoint each valid cell and
persist substantive results in validation.md. Assert requested theme/text controls
really applied, document/body overflow0 and positive visible essential bounds.
Invalid harness cells/timeouts do not pass. Keep screenshot source identity,
comparison dimensions, baseline/result measurements, inspected captures, command
exits and limitations durable; raw /tmp/opencode captures alone may disappear.
Retain at least four meaningful before/after reference pairs plus portrait-width
evidence at every normal-size width and source hash guards. Head containment needs
visual comparison of top AND side hair against source; box bounds alone cannot
prove mask safety. Do not claim every screenshot manually reviewed if it was not.
Emulated contacts are not proof of physical devices or other browsers.

Final owner before/after visual review is required for completion, not another
per-task approval gate or authorization for scope growth. Reviewer independently
validates requirements/diff/constitution and returns the SDD verdict; task counts
or palette approval never substitute for final acceptance.

## Traceability

| Requirements | Solution and proof |
| --- | --- |
| RF-1 | All three regions/copy/selection unchanged; Home matrix and final diff. |
| RF-2, RF-3 | Natural ratio/safe fit/wider wrappers; five matched normal-size measurements and full-head checks at both text sizes. |
| RF-4, RF-5 | Light invariants, six dark roles and layered depth; computed contrast and matched visual review. |
| RF-6 | Main-only mobile orientation, rem scale and wrapping; menu/keyboard/locales/width matrix. |
| RF-7 | 96rem/64rem retained,2px continuous curves and spacing; shared-page frame measurements/screenshots. |
| RF-8 | Shared CSS/components used by both document shells; valid/error matrix, no own-page redesign. |
| RF-9 | Providers/routing unchanged; initial/system/persisted theme and locale-route regressions. |
| RF-10 | Spec002 architecture retained; explicit-origin tests plus dev/prod native script-independent404/recovery. |
| RF-11 | Same masks, external filters/clearance; active/inactive repeated-copy and two-theme comparisons. |
| RF-12 | Uniform original mask, measured mid-height45–55% axis and frame anchors; source hashes and responsive/readability evidence. |
| RF-13 | Lower elliptical intrusion/feather; curved edge screenshot/profile and bounded readable text. |
| RF-14 | Manual/temporary state partition; TDD transitions plus real event/keyboard/motion/visibility proof. |
| RNF-1 | Full five-width/two-text-size matrices, overflow and containment checks. |
| RNF-2 | Measured text contrast, semantic/native controls, stable focus and Tab/Enter during motion. |
| RNF-3 | Existing motion/reduced-motion/manual controls retained, no new animation; eligibility tests/browser checks. |
| RNF-4 | Supplied forms/fonts, restrained curves/depth; direction/final owner review. |
| RNF-5 | Asset hashes/source diff/content invariants; no dependency or route changes. |
| RNF-6 | Full AGENTS checks, HTTP and native browser404 regressions; durable attributed evidence. |

## Risks and remaining gates

The T8 technical amendment above is APPROVED jointly with tasks.md.
Its bounded implementation and T8 resumption are authorized; the original plan,
approved T2 amendment and completed T1–T7 are not invalidated. Reliable native
settlement and interruption handling require the bounded tests/browser evidence
above; inability to establish them returns to planning without changing requirements.

Joint owner approval of this plan/tasks is recorded above, including proposed
geometry, center metric/tolerance and original token values. Joint owner approval
of the bounded T2 amendment with tasks.md is also recorded; T2 resumption is authorized.
No product clarification blocker is known; the partial T2 contrast gate remains open.
Actual mask/portrait fit, smooth manual navigation under resumed motion, final
shadow quality and contrast require verification, not assumed success. If geometry
conflicts with approved head/shape/anchor limits, STOP with specific evidence.
Preflight lockfile/process/output ownership and planner-unavailable git checks remain
operational concerns for coordinator, not authorized repair work. MEMORY's spec003
draft/clarification descriptions are stale after the approval record; coordinator
alone updates memory. Historical documents/known unrelated findings remain deferred.
