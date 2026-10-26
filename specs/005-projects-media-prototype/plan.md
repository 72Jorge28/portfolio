# Plan 005 — Interactive Projects media prototype

Estado: implementado — approved revision-2 plan and static-video-preview amendment; closed.
R1–R10 and A1–A5 are complete. Separate final owner acceptance and independent
`VEREDICTO: APROBADO` are recorded in `validation.md` (2026-10-26).
The original planning descriptions and earlier evidence remain retained history.

## Approval basis and retained history

The owner approved the complete revision-2 `spec.md` with **“La apruebo”** on
2026-10-16 after QA clarification without blockers (coordinator-supplied record;
no exact time supplied). The owner separately approved this revised plan and tasks
jointly with **“Las apruebo”** on 2026-10-16, answering the coordinator's joint
approval question (coordinator-supplied record; no exact time supplied). Ordered
implementation of the baseline R1–R10 was authorized; R1–R9 completed that baseline,
and R10 subsequently passed after A1–A5. This historical approval did not authorize the amendment.
Independent review and final owner visual/behavior acceptance remain separate.
No staging, commit, push, deployment or publication is authorized.

Revision-1 approvals remain historical: spec **“La apruebo”** and joint plan/tasks
**“El video de prueba no tiene nada privado. Apruebo el plan”**, 2026-10-15.
T1–T8 were completed; do not erase that work or repeat asset/configuration setup.
T9 remained formally `CAMBIOS NECESARIOS` pending final owner acceptance after
technical/documentary checks; T10 never passed. The owner rejected revision-1
visuals. Their unfinished acceptance scope is superseded by R9/R10, not completed.

Retain the two narrow owner authorizations (**“Lo autorizo”**): this specific
MP4's audio-content review relies on owner confirmation, not agent listening;
`allowImportingTsExtensions: true` remains alongside `noEmit: true` and strictness.
No new flags, privacy cycle, asset rename, transcription, transcoding or dependency
work is planned. A newly suspected sensitive-content concern still requires a stop
and owner decision. No human hearing or general waiver for future media is claimed.

`validation.md` retains revision-1 and subsequent revision-2 evidence. Revision-1's final 102-source
manifest is `3d939d286518ad739dcd624b979db2ffd10f791efbb20688a4339af3b2a2e5f8`;
reviewer build `z2-vLlzLel8IKP2pnwnyY`, six checks and 53/53 explicit-origin tests
per mode are historical, not revision-2 compliance. New evidence must identify its
revision/source/build rather than relabeling old artifacts. Preserve failed-harness
records and documentary attribution corrections, including T8's absent native24
resize JSON and the separate reviewer supplement.

## Retained baseline design (implemented through R9)

The following baseline design and its original full-matrix strategy are retained
for traceability, not instructions to redo R1–R9. Descriptions of the rejected
selected-only layout and dark viewer below refer to the pre-revision-2 baseline,
not current source. The static-preview amendment section below governs new work,
including its narrower affected-file scope and bounded validation.

### Original inspected context and bounded scope

- The server Projects page calls `getProjects`; server `ProjectList` passes
  serialized localized labels and real project copy into independent client
  `ProjectGallery` instances keyed by slug. Preserve this boundary and the shared
  provider; do not introduce a client translation dependency.
- The current gallery renders only the selected item. Its `expanded` composition
  grows a 100%-wide preview when columns collapse. This is precisely what must be
  replaced, not retained behind a renamed state.
- Current arrows are inside the gallery above media and aligned right. Copy is a
  single children group. Reorganize feature-local slots/grid regions to align the
  actual heading with media and put arrows below the entire block.
- `gallery-state.ts` already normalizes/wraps indices and derives initial/nonzero
  composition. Preserve these rules; replace the misleading `expanded` layout
  contract with `shifted` and extend only the bounded strip projection needed.
- `media.ts` centrally defines PNG640×360 and MP41920×1080 sample descriptors;
  catalog entries explicitly reuse the pair, keep `images: []`, and have no live
  URLs. Existing union, translation projection, safe URL logic and tests stay.
- Home `ProjectPreview` uses `MediaFrame shape="project"`: its mask is the actual
  supplied `/shapes/media-frame-02.svg`, viewBox1200×760, applied by alpha mask
  at 100%×100%, with semantic-token drop shadows. This inspected asymmetric path,
  not a rounded rectangle or the hero portrait mask, is the contour reference.
  Home's media wrapper uses aspect1200/760. The supplied demo PNG was also visually
  inspected read-only; it is a blue shield/padlock illustration, not project proof.
- Home's carousel triplication, wheel/drag handling, autoplay32px/s and state APIs
  are unrelated. Do not reuse or modify them. Reuse only the existing presentational
  `MediaFrame` for inline image/static-video frames, without editing shared files.
- The native modal already supplies top-layer semantics, lock/cleanup and native
  video teardown. Its enclosing border, dark72% surround, title toolbar and opaque
  notice must go; preserve and reverify the working lifecycle, not rewrite it.

No terminal is available to this planner: fresh Git status/diff, source hashes and
`git diff --check` were not executed, and a clean tree is not claimed. Before code
work, inspect the actual dirty tree and establish a new non-destructive baseline.
Protected published HEAD is reported as
`c5ee587370113b4688c9c7f2e9178cbf8466a5fa`; all pending005 work, supplied assets,
19 current local agent/config/backup files and unrelated owner changes must be
preserved (29 was the historical count). The latest reported owner preview is
`http://127.0.0.1:3131`; it may be stale. Do not restart/stop it during planning.
Reverify PID/CWD/port ownership before later management; historical PIDs and URLs
are not current ownership proof.

### Areas affected after approval

| Area | Revision-2 responsibility |
| --- | --- |
| `src/lib/projects/gallery-state.ts` | Keep cyclic selection; derive shifted composition and bounded ordered strip placement from explicit inputs. |
| `src/components/projects/project-gallery.tsx` | Stable keyed media strip, independently selected index vs activated viewer item, bottom full-block controls and announcements. |
| `src/components/projects/project-list.tsx` | Feature-local heading/copy slots as necessary; retain real content, server translation and project identity. |
| `src/components/projects/project-list.module.css` | Stable sizing basis, offset/clipping, heading/media alignment, reserved layout envelope, bottom controls, Home-shaped previews. |
| `src/components/projects/project-media-viewer.tsx` and `.module.css` | Transparent content-sized modal, neutral gray blurred backdrop, full aspect-fit media, anchored X and unobtrusive sample caption; retain cleanup. |
| `src/i18n/messages/{en,es}.json` | Only necessary matching localized names/captions; reuse existing close/viewer/sample keys where sufficient. |
| `tests/project-gallery-state.test.mjs`, `tests/project-media.test.mjs` | Meaningful TDD strip/selection/reset/fixture regressions; keep source-byte and data protections. |
| `specs/005-projects-media-prototype/validation.md`, `tasks.md` | Append attributable revision-2 evidence and task outcomes after authorization. |

Data/types/catalog/query and existing `tests/projects.test.mjs` are retained sources
of truth, not a redesign target. Temporary fixtures may exercise them and must be
restored. Do not edit Home/shared MediaFrame/carousel, About, global tokens/themes,
header/footer/frame, navigation, metadata, icons, routing, providers, compiler
configuration, dependencies/lock/workspace files, original media or generated
artifacts. No new route, media service, fixture route or framework is needed.

## Strip design: translate, never enlarge

### Stable coordinate system and item boxes

Use a project-wide stable sizing container (the existing list container or the
whole article), independent of selection and initial/shifted column layout.
Derive one responsive item-width clamp from that container and text/viewport
settings, **not** the initial half-column, selected item, newly expanded gallery
region, or a container whose width changes with composition. Store/use this same
item width in both states. Nonshrinking track cells retain that width and a stable
1200/760 inline frame ratio; image/video contents fit the frame without rotation
or distortion. The organic mask may crop the inline photo; full viewer media may
not be masked/cropped. Larger viewing area changes exposure, not item dimensions.

Desktop nominal geometry must leave room for a partial second item initially,
not consume the entire right region with the first. For example, relative to
whole-project width C, a left inset near0.38C, item width near0.46C and gap near0.02C
leaves a genuine second peek. These are starting layout proportions to tune within
the spec, not fixed product requirements. At narrow/text-enlarged settings use a
larger fraction of C for the same item in both states, leaving a visible next peek
and sufficient hit/focus area. Do not solve mobile by making the active item100%
of a newly sized local viewport. Reflow title before media instead.

The track spans a full-project clipped stage; its initial viewing region begins
to the right of the title. Initial track translation positions item0 there.
Shifted translation exposes the left-hand stage beneath the raised title, leaves
a visible portion of the predecessor on the left, and exposes more of the selected
item on the right than its initial peek. For first Next this predecessor is the
original first image. With three+ items, use ordered predecessor/selected/optional
successor positions, advancing through the configured sequence, not replacing the
stage with a single selected-media box. No third supplied asset is invented.

Keep placement deterministic: pure projection accepts normalized index/count and
explicit stable geometry (stage width, cell width, gap and initial/shifted insets)
and returns relative placement/visible logical IDs. Geometry is local to this
project, never date/time/global scroll. CSS owns responsive sizes; if measurements
are needed for projection, observe only the stable parent and resize, not scrolling
or every frame. Selection must not feed back into item width. Clip track overflow
locally without clipping the arrow row, captions, focus rings or document.

Prefer one stable keyed element per configured media ID, with bounded cyclic
neighbor placement, rather than Home-style triplication. Nonvisible items must not
leave invisible tab stops; any optional visual repeat is decorative/inert, not a
duplicate stateful trigger. Visible partial neighbors must retain a usable44px
target and visible focus. Activate the actual clicked/keyboard-focused item's ID,
not necessarily the selected index. Opening/closing any neighbor does not advance
the strip or announcement. Keep arrow controls and surviving media triggers mounted
across state changes so focus restoration targets a connected original trigger.

### Heading, copy and full-block controls

At1024/1440 normal desktop settings center the h2's own vertical midpoint against
the media frame/stage, not against notices, description, status or controls.
Separate the heading alignment slot from supplementary truthful copy as necessary;
do not add invented content. After advancing, raise and reduce the h2 above the
leftward strip. Stable semantic reading order remains heading/copy, media, controls.

Use one bottom arrow row spanning both title and media columns with its pair's
midpoint aligned to the entire project block's midpoint, including on reflow.
Position/status and sample explanations must not shift the pair sideways. Reserve
enough heading/copy/stage envelope for both states, including long titles and
wrapped EN/ES copy. Adapt the existing T7 title-space approach rather than assuming
its old top-arrow arrangement still solves focus visibility. Keep arrow row vertical
position stable across selection where practical; no focused control may leave
the visible unobscured region because the new layout changes height. Constant media
height alone does not prove this: test title movement, text growth and sticky-header
occlusion through actual Enter activations. No navigation `scrollTo`,
`scrollIntoView`, auto-scroll, sticky titles, scroll listeners or forced focusing.
The existing modal's intentional close restoration is a separate allowed behavior.

Index0 always derives the complete initial state: original large title/placement,
strip translation/clipping and first+next glimpse. Nonzero derives shifted state;
no `everAdvanced` flag, persisted enlarged state or reset of another project. Keep
modulo cycling, polite localized position counts and manual-only operation. Both
Next-wrap and Previous-return must reset fully, repeatedly with2 and3+ items.
Zero/one media and empty lists retain honest existing behavior; no arrows for one.
Reduced motion removes transitions, not peeks, selection or title-size distinction.

## Glass-like viewer and native playback

Retain the native top-layer modal and its existing opening/cleanup path. Replace
the bordered near-viewport enclosure with a transparent, borderless content-sized
surface; put the full-viewport neutral-gray translucent color and backdrop blur
only on `::backdrop`. Tune local opacity/blur so the actual page, including chrome,
remains recognizable in both themes. No black opaque slab, opaque toolbar/notice,
global palette migration, filter on selected media or giant invisible content
panel intercepting all backdrop clicks. Surround and controls need visual review,
not a check of CSS property presence alone.

Fit the media by its real intrinsic aspect ratio inside available dynamic viewport
width/height after allowing safe padding, X hit area and a modest localized sample
caption. The media wrapper must match the **rendered visible media rectangle**, not
the letterboxed outer stage. Anchor a simple visual X immediately at that rectangle's
upper-right corner; no separate toolbar or viewport-corner placement. Its button
retains at least44×44 CSS pixels, localized accessible Close name and visible focus,
without a visually huge labelled Close button or covering essential image/native
controls. Keep sufficient edge clearance and remeasure after resize/orientation.
An error state retains a bounded content/close anchor and accessible failure notice.

Keep project identity in the existing localized accessible dialog name; a separate
large visible heading is unnecessary. Keep sample designation/explanation legible
in a quiet adjacent caption associated with the modal, not a bar pushing media
down or overlaid on its information. Preserve full media without crop, distortion,
organic mask or app-authored fullscreen/zoom/previous/next controls. Inline image
and static video preview use the Home contour; enlarged media does not.

Preserve background inertness, explicit scroll lock, Tab/Shift-Tab containment,
initial Close focus, one viewer maximum and true outside primary press/release
recognition. Recalculate outside-content detection for the new content surface;
media controls, caption interaction and gestures ending outside must not dismiss.
Close/Escape/backdrop restores the originating trigger, prior page scroll and all
gallery states; unmount releases prior styles without scrolling/focusing a new
route or detached trigger. Do not remount the gallery on dialog closure.

Video remains a static inline preview with no inline player. Enlarge into the same
glass treatment with native controls only, initially paused; only manual native
Play starts playback. No custom player or key simulation inside app code. Preserve
pause/remove-source/unmount cleanup on close, cancel, error and route exit, and
paused reopening. Native language, target sizes and keyboard behavior belong to the
browser; only app-authored controls promise localized names and44px targets.
Real native playback/keyboard/audio-stop verification remains mandatory; technical
RMS cessation is not agent listening to or approval of audio content.

## Tests and validation

### Logic and browser regressions

Use existing `pnpm test` and red → minimal implementation → green for changed pure
behavior. Keep erasable `.ts` modules, explicit runtime extensions and type-only
imports; no aliases/TSX compilation assumed by Node tests. Preserve data/translation/
URL/hash tests. Extend state tests from `expanded` to shifted composition, zero/one/
two/three/many items, normalization, repeated both-direction loops and independent
instances. Test projection invariants: unchanged geometry produces unchanged item
dimensions at every index; first Next retains predecessor visibility and increases
selected exposure; sequence ordering/counts are truthful; every zero restores
initial offsets. Avoid tests merely snapshotting CSS strings or duplicating the
implementation formula without independent observable constraints.

Browser evidence must check actual transformed item bounding boxes, clipped visible
portions and trigger actions; pure math cannot prove CSS or event wiring. For each
item compare un-clipped displayed width/height before/after navigation at identical
viewport/font/text settings (CSS-pixel rounding tolerance at most1px, no systematic
growth). Measure the viewport intersection separately; a growing visible portion
is expected and must not be misreported as item scaling. Check initial heading and
whole-block arrow midpoints (within1px rounding at nominal desktop), first retained
left neighbor, larger next exposure, optional next peek only from configuration,
and exact original geometry after repeated cyclic resets in both directions.

Use temporary3+ mixed-media fixtures with distinct IDs reusing approved assets,
plus add/reorder projects, zero/one/empty/failure and optional-link fixtures. Restore
all fixtures and final two-sample catalog; do not invent a third production asset.
Verify neighbor activation opens that ID without changing selected count/offset,
independent projects, stable arrow focus/announcement and no automatic scrolling.

### Commands and source/origin identity

On final application sources run all six AGENTS checks:

- `pnpm exec next typegen`
- `pnpm lint`
- `pnpm exec tsc --noEmit`
- `pnpm test`
- `pnpm build`
- `git diff --check`

Additionally run `pnpm test` with **both** `LOCALIZED_404_TEST_ORIGIN` and
`SITE_ICONS_TEST_ORIGIN` set to the verified actual origin, once against dev and
once against the new production build. Use AGENTS `pnpm dev`/`pnpm start`, verify
PID/CWD/port and served source/build identity. Record actual counts/skips; historical
53/53 is not a target or fresh proof, and default-run integration skips do not pass
these contracts. Do not stop the owner preview blindly, install tools/dependencies,
delete caches, repair locks or hand-edit generated files. Unavailable checks are
explicit blockers/limitations, not invented successes.

### Fresh visual and interaction batches

Use Chrome DevTools MCP. Required matrix: dev/prod ×en/es ×light/dark ×widths
320/390/768/1024/1440 ×normal/150% text ×actual browser-default16/24px =160
conditions. Record actual height, verified viewport/theme/font/text and served
source/build. Browser default24 is not root-font substitution. Within every row
check initial and shifted strip (all three projects' constant item boxes and
independence), plus open image and video fit, gray transparency/recognizable page,
clear media/native controls and media-corner X geometry/reachability. Partition
R7 into resumable native16/native24 batches; label conditions vs states honestly.

Record geometry and representative captures/anomalies, measured text/graphics/focus
contrast,44px app targets, fractional-width mobile clipping and text wrapping.
Compare inline contours against Home's actual1200/760 mask at equivalent proportions
in both themes; keep source photo orientation upright. Test arrow Enter when
controls are near viewport edges and under the sticky header, including long-title
fixtures, rather than proving only `activeElement` identity. No corrective scroll.
Record inherited320/native24/150% shared-header347px extent separately (historically
eight conditions); prove Projects/viewer adds no overflow, never claim the entire
site is overflow-free or repair shared chrome here.

Supplement in both modes/locales/themes: real keyboard Tab/Enter and pointer actions,
polite counts, full reset both ways, neighbor opening, all closure paths, scroll/
focus/selection restoration, containment, reduced motion and resize/orientation.
Use genuine native Play/Pause, available volume/progress and keyboard operation;
record which action was clicked vs Space/key input, not a programmatic `play()`
substitute. Confirm no inline playback, actual audio cessation on close/error/route
exit and no resume on reopen. Do not require every playback gesture in all160 rows.
Record technical audio method separately from owner audio-content confirmation.

Preservation: inspect focused diff/hashes for unchanged protected files and sample
bytes; proportionate actual Home carousel/placeholder checks, About/shared shell,
favicon/head metadata and native localized404 recovery complement explicit-origin
contracts. No sample contamination of Home `images`. Direct visits/client navigation,
locale switching and reload must still work. Document expected fixture404s, native
browser/physical-device/screen-reader limits and unrelated defects without fixing
or concealing them. Append only artifacts that actually exist, with their method,
source, result and attribution; preserve failed runs. Revalidate affected rows and
commands after fixes, do not reuse old source evidence as current compliance.

## Traceability and gates

| Requirements | Solution and evidence |
| --- | --- |
| RF-1, RF-9–11 | Retained server list/catalog/media projection; add/reorder/empty/single/failure/link fixtures and regression tests. |
| RF-2, RF-12 | Retained explicit sample pair/bilingual labels; honest inline/adjacent viewer caption, modal identity and route checks. |
| RF-3–4 | Stable-coordinate strip projection, independent cyclic index, raised title and bottom full-block controls; TDD, real bbox/visibility/reset/focus evidence. |
| RF-5–7 | Activated-ID native modal, aspect-fit wrapper/X, gray blurred recognizable page, retained lock/cleanup; actual images, neighbors, keyboard, all-close and resize checks. |
| RF-8 | Static masked preview, modal-only native paused video and teardown; manual playback/native keyboard/audio-stop checks. |
| RNF-1–2 |160-condition/state matrix, semantic reading order, focus/announcements,44px app targets and measured contrast; native-control limits explicit. |
| RNF-3–4 | Existing Home project mask/fonts/tokens, constant-size translation, no automatic scrolling/motion; shape comparison, reduced-motion and owner visual gate. |
| RNF-5–6 | Retained sample-specific privacy disposition/byte hashes, truthful copy/no URLs, focused diff and preservation checks; no new routes/dependencies/publication. |

No blocking product question remains. Risks to verify are sizing feedback from
responsive containers, focus-visible arrow placement with long text, clipped
neighbor targets, corner-X alignment with actual letterboxed media, transparent
caption contrast and native video focus/outside-click behavior. They are technical
validation obligations, not permission to weaken requirements. If they require
new architecture, dependencies or scope, stop and return to coordinator.

Baseline joint plan/tasks approval is recorded. R1–R9 completed that work; R9's
independent technical pass retained `CAMBIOS NECESARIOS` solely for owner R10.
Neither that review nor positive functional feedback completed R10. The amendment
below subsequently received separate joint approval; final R10 acceptance and
independent approval are now recorded in `validation.md`, without changing this design.

## Static-video-preview amendment — approved and implemented

### Approval, inspected current state and scope

The owner explicitly approved the latest spec amendment with **“La apruebo”**
(coordinator-supplied record; no approval date/time supplied). This section plans
only that approved requirement change. No broader design recommendation is included;
any later redesign needs a separate specification. The owner subsequently jointly
approved this amendment's plan/tasks with **“Lo apruebo”** before implementation
(coordinator-supplied record; no approval date/time supplied). A1–A5 are complete.
The inspection and prospective instructions below retain their planning-time context.

Current source inspection confirms:

- `MediaSource` in `types.ts` discriminates image/video but has no poster field.
  `resolveProjectMedia` spreads descriptors before resolving localized `alt`, so
  serializable poster data can follow that existing projection without a new fetch.
- `SAMPLE_MEDIA_PAIR` centrally describes the original PNG and MP4; all three
  catalog entries reference it, with Home `images` empty and no live destinations.
- `ProjectGallery` already has stable Home-masked cells and an overlay enlargement
  button. Video content is currently a text-only `.videoPreview` span. Keep sizing,
  geometry, selection, focus targets, title/control layout and projection unchanged.
- Existing failures are keyed by item ID/source and receive viewer playback errors.
  Poster loading must have separate failure state so it cannot disable playback.
- `ProjectMediaViewer` already mounts the actual MP4 only in the modal with native
  controls, no autoplay, and pause/source-removal cleanup. Leave that code and its
  CSS unchanged; verify the new data/rendering does not alter its behavior.

Retained evidence baseline: corrected build `9GewD2EQsmxotE98L_iMX`,107-source
manifest `458a5794fa8621d60d48951575cbacc51e922f6ea6be5119bb155f27aff4a5b8`,
R9 independent recheck in `validation.md`. These identify historical evidence,
not freshly verified disk/server identity. No terminal is exposed to this planner:
Git status/diff/hash checks and `git diff --check` could not run. Read-only file
inspection is not a clean-tree claim. Preserve all unfamiliar work and19 reported
local configs; establish fresh hashes/dirty-tree ownership before implementation.
Do not assume the owner preview3131 serves future amended sources.

### Local frame extraction and data flow

Read-only tool discovery found `/usr/bin/ffmpeg` and `/usr/bin/ffprobe` present.
T1 evidence records successful use of version8.0.1-3ubuntu2; that is historical,
not a fresh executable/version check. After joint approval, first verify local
executability/version and source hash. If unavailable or decoding fails, stop and
report to coordinator; no download, dependency installation, network service or
build/configuration workaround is authorized. No tool was executed, asset extracted
or server operated during this planning phase.

Use the existing local extractor once, offline, to decode a recognizable still
from the supplied MP4 into `public/images/pruebas/demo-video-poster.png`. Select
and record an explicit timestamp after inspection, not an implicit current-time
sample. No specific timestamp is a product requirement. Save one static raster
frame at its intrinsic aspect ratio; record actual dimensions, output hash, source
hash, timestamp and exact successful extraction command/version. The output is a
derived preview, not a replacement recording or invented project asset. Review
its visible content under the retained sample-specific privacy disposition; stop
on any newly suspected sensitive material. Do not claim agent audio listening.

The original MP4 must remain7722052 bytes with SHA-256
`bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`,
including original audio. Preserve the original PNG hash as well. No runtime,
request-time or build-hook extraction and no new extraction infrastructure.

Extend the video branch of the shared descriptor/resolved media contract with
optional `poster: {src, width, height}` metadata; images do not need it. Configure
the generated poster once on the sample video in `media.ts`. Keep video intrinsic
dimensions/source distinct from poster dimensions. Preserve existing descriptors
without posters: report localized preview unavailability, retain video opening,
and never fall back to an unrelated image or inline player. This narrow contract
extension is part of the plan submitted for approval, not already authorized code.

Flow: supplied MP4 → one locally derived still → central video descriptor → existing
server localization/projection → gallery still image → existing activated-item
modal using **original video src**, not poster src. All projects reuse this through
configuration; no slug/project-specific branch or catalog duplication.

### Rendering and independent failures

Render the configured poster using the gallery's existing native-image pattern
inside the unchanged `MediaFrame shape="project"` and1200/760 cell. Reserve space
from the current frame, apply upright proportional cover cropping inline, and
retain unmodified full contain-fit media in the viewer. Loading, loaded and failed
states must not shift dimensions, strip offsets or trigger placement. No `<video>`
or `<audio>` element, canvas extraction or playback API belongs inline.

Keep localized video identification visible as a small feature-local cue with a
semantic-token contrast surface, leaving recorded content recognizable; do not
replace the frame with an opaque text panel or imply an inline Play action. Retain
the existing localized enlargement button/name, sample captions and honest alt
description, avoiding duplicated assistive announcements. Prefer existing messages;
only add matching EN/ES keys if necessary. Keep cues legible in a neighboring peek
as well as when selected; focus and44px visible trigger area remain intact.

Track poster errors separately by media ID and poster source; check already-failed
hydrated images as well as later `onError`, following the existing image pattern.
Missing/failed posters show localized unavailable feedback while preserving the
video cue, navigation and original-video opening. Actual playback errors retain
their existing distinct behavior. A changed poster source must not inherit a
failure for the old source or poison another project instance.

Affected files are bounded to the new derived PNG, `src/lib/projects/{types,media}.ts`,
`project-gallery.tsx`, necessary preview-only rules in `project-list.module.css`,
`tests/project-media.test.mjs`, and matching message keys only if needed. Query/list/
catalog sources should need no edits; verify pass-through instead. Evidence/task
updates follow implementation authorization. Do not change viewer, strip math,
Home/shared files, configuration/lock/dependencies or Next.js APIs. No new framework
API is planned, so no framework migration/documentation lookup is needed here;
if one becomes necessary, stop for scope approval and consult installed Next guides
and Context7 before proposing that change.

### Focused tests and fresh verification

1. Use `pnpm test` with meaningful red→green contract assertions for poster metadata
   projection/serialization/nonmutation in both languages, mixed/reordered/new
   project fixtures, optional absence, valid dimensions/local file existence and
   unchanged original sample hashes. Confirm all three records reuse the sample
   poster and Home stays empty. Browser checks verify loading/failure/event wiring;
   do not add source-string, CSS mirror or formula-snapshot tests.
2. On final restored application sources run exactly the six AGENTS checks listed
   above. Also run `pnpm test` with BOTH `LOCALIZED_404_TEST_ORIGIN` and
   `SITE_ICONS_TEST_ORIGIN` set to the verified actual dev origin, then production
   origin serving the new build. Record actual counts/skips, hashes/build and
   PID/CWD/ports. Required integration skips are not passes. Use existing authorized
   commands/tools; no installs/recovery, server collision or blind process stopping.
3. Chrome DevTools MCP: fresh bounded matrix dev/prod ×en/es ×light/dark ×
   320/390/768/1024/1440 at normal/default16 text =40 conditions. Inspect the still
   against the recording, initial neighboring peek and selected/shifted view on
   all three projects, recognizable upright crop, localized cue/focus contrast,
   dimensions/offsets before and after load/navigation/full reset (≤1px rounding),
   independent galleries and no inline player/audio/network playback request.
   Measure text4.5:1 and control/focus3:1 where newly affected; verify44px triggers.
4. Add bounded native-default24/150% text probes at320/1440 in both modes/locales/
   themes (16 conditions), reduced-motion checks at390/1440, and320×900↔900×390
   resize/orientation probes for static crop and full modal media. Record actual
   browser defaults, not a root-font substitute. Preserve inherited shared-header
   overflow separately. Use approved asset reuse for mixed-order fixtures; optional
   portrait aspect fixtures are test-only crops derived from the supplied still,
   never production media/project claims, and must be restored/removed. Verify
   portrait and landscape inline fit plus unmasked/noncropped modal media.
5. In both modes/locales/themes, native pointer/keyboard video opening starts paused,
   manual Play advances time, available Play/Pause/volume/seek remain functional,
   focus/scroll/selection restore on X/Escape/backdrop, and close/error/route-exit
   audio teardown plus paused reopening remain intact. Record technical audio
   evidence separately from privacy disposition. Block only the poster to prove
   localized failure and successful original-video opening/playback; block actual
   video separately to confirm existing failure closure. Test cold/hydration failure,
   changed poster source and independent project state. No programmatic Play
   substitute for native user gestures.

Retain R1–R9 evidence for unaffected requirements with source comparisons and
explicit attribution. Do not rerun the entire old160-condition/640-state matrix
or128-case lifecycle suite by default. Broaden only if changed boundaries or a
regression justify it; record the reason and affected RF/RNF. Sample Home/About/
shared-shell preservation plus explicit-origin contracts and protected hashes
remain required, without unrelated redesign or repairs. Restore fixtures before
final checks; any later source fixes require affected checks/build/browser reruns.
Append actual evidence under a clearly labelled static-preview amendment section
during implementation/review, preserving all prior entries and review verdicts.

| Amendment traceability | Planned proof |
| --- | --- |
| RF-8; static-preview definition/edge case | Actual recording-derived file, central poster projection, both strip states, zero inline players/playback, manual modal Play. |
| RF-2, RF-9, RF-12; RNF-5 | Shared pair/no project branching, honest sample identity and matching localized video/open cues. |
| RF-11; preview-failure edge case | Missing/failed/changed poster isolated from playable MP4 and independent project state. |
| RF-3–7; RNF-1–4 | Fixed geometry/reset/neighbor triggers, native focus/contrast/text/resize probes; unchanged modal fit/cleanup and reduced motion. |
| RNF-5–6; completion criteria | Original-media/protected hashes, six checks and explicit origins, bounded fresh evidence, independent A5 review then separate R10 owner gate. |

### Ordered gates and risks

After separate explicit joint approval of this plan and tasks: A1 derive/configure/
test the poster → A2 render and isolate failures → A3 final-source checks/contracts
→ A4 bounded browser/interaction verification → A5 independent amendment review
→ original R10 final owner acceptance. R1–R9 stay completed; none is reset or
relabeled as proving the addition. Apply SDD correction limits without erasing
earlier review history. R10 must include the actual static frame as well as the
retained revision-2 design; functional praise is not that gate.

No blocking product decision remains; frame selection is subject to final owner
visual acceptance, not an invented timestamp requirement. Technical risks are
extractor executability (paths present only), recognizable crop in narrow peeks,
cue/focus contrast over real pixels, independent cold-load failures and stale
server/build identity. Unavailable coverage must be reported, not passed. Tool
failure, suspected private content, new dependencies/config/API needs or broader
design work require stopping for coordinator disposition. No commit, push,
deployment, publication or unknown-process management is authorized.
