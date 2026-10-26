# Tasks 005 — Interactive Projects media prototype

Estado: completadas — revision 2 and static-video-preview amendment; closed (2026-10-26).
R1–R10 and A1–A5 are complete. Historical revision-1 T9/T10 remain superseded,
not completed. Final acceptance and independent approval: `validation.md`.

## Gates and historical work

The complete revision-2 spec was approved with **“La apruebo”**, 2026-10-16,
following nonblocking QA clarification (coordinator-supplied record; no exact time).
That approved requirements only. The owner separately approved this revised plan
and tasks jointly with **“Las apruebo”** on 2026-10-16, answering the coordinator's
joint approval question (coordinator-supplied record; no exact time supplied).
Ordered baseline implementation of R1–R10 was authorized; R1–R9 completed that
baseline. That approval did not authorize the A tasks. Original R10 subsequently
passed after A1–A5 and separate final owner acceptance. No staging, commit,
push, deployment or publication is authorized.

The owner explicitly approved the latest static-video-preview spec amendment with
**“La apruebo”** (coordinator-supplied record; no approval date/time supplied).
The A1–A5 plan/tasks below subsequently received separate explicit joint approval
with **“Lo apruebo”** before implementation (coordinator-supplied record; no date/time
supplied). Positive functional feedback was not final R10 acceptance; the separate
final question/answer and formal approved verdict are recorded in `validation.md`.

Revision-1 spec and joint plan/tasks approvals on2026-10-15 remain historical.
Completed work is not unchecked, undone or represented as never performed:

- [x] **T1. Baseline and local media inspection.** Historical completion; retain original hashes and sample-specific owner-attributed audio disposition, not agent listening. Evidence: `validation.md`, T1 baseline and authorized resolution.
- [x] **T2. Media configuration/localization and byte-identical sample renames.** Historical completion, retained. Existing `allowImportingTsExtensions: true`, `noEmit: true` and strictness remain; no new setup/flags. Evidence: T2 resolution.
- [x] **T3. Independent manual selection.** Historical completion; cyclic/index rules retained, single-selected-preview rendering superseded by R1/R2. Evidence: T3.
- [x] **T4. Original responsive compositions.** Historical completion, old growth layout rejected/superseded by R2/R3; not proof of revision-2 compliance. Evidence: T4 and T7 corrections.
- [x] **T5. Original viewer/video lifecycle.** Historical completion; cleanup retained, dark surround/toolbar presentation superseded by R4. Evidence: T5 and T8 correction.
- [x] **T6. Revision-1 six checks/integration contracts.** Historical completion, not new-source evidence. Evidence: T6 and final T8 reruns.
- [x] **T7. Revision-1 layout matrix/corrections.** Historical completion, not new-design acceptance. Evidence: T7 and final T8 matrix.
- [x] **T8. Revision-1 interaction/fixtures/preservation.** Historical completion with documented limits and attribution corrections. Evidence: T8 and separate reviewer supplement; failed native24 harness is not a passed run.
- [ ] **T9. Revision-1 formal independent approval.** Superseded, not completed: technical/documentary review found no remaining technical blocker, but formal `CAMBIOS NECESARIOS` and owner gate remained. Replacement: R9, not another revision-1 review.
- [ ] **T10. Revision-1 owner acceptance.** Superseded, not completed: owner rejected visuals. Replacement: R10 after revised implementation/review.

Historical102-source manifest:
`3d939d286518ad739dcd624b979db2ffd10f791efbb20688a4339af3b2a2e5f8`, reviewer
build `z2-vLlzLel8IKP2pnwnyY`. Previous six passes/53 tests per mode do not certify
revision2. Leave `validation.md` history intact and append new attributed evidence.

## Retained completed revision-2 tasks

Baseline joint approval is recorded; R1–R9 below remain completed with their
original criteria/evidence. Do not repeat or reset them for the amendment. Execute
new approved work one coordinator-assigned task at a time; report and stop after
each. Aim for20–30 minutes of focused implementation; browser/review work uses
checkpointed batches and may take longer elapsed time. Preserve the dirty tree,
all owner assets/19 currently reported local configs and the latest owner preview3131
(potentially stale;29 configs was the historical count).
Inspect real Git/server/source ownership before application work; no blind restart.
No subagent edits to MEMORY/AGENTS or unrelated files.

- [x] **R1. TDD the bounded shifted-strip projection and retained cycles.** RF-3–4, RF-9, RF-11; RNF-4, RNF-6.
  - Extend existing pure state tests red→green for initial/shifted selection and ordered predecessor/current/optional-next placement using explicit stable geometry. Retain modulo normalization/independence; no global state, Home APIs or layout-driven scaling. Cover zero/one/two/three/many, both directions, repeated cycles and return-to-zero offsets. Reuse supplied assets under distinct fixture IDs, not a new production sample.
  - Hecho cuando: `pnpm test` proves invariant item dimensions, first-item retention/larger next exposure, truthful ordering/counts and complete initial projection on every zero in both directions, with independent gallery instances. Tests check meaningful geometry/state constraints rather than CSS strings or copied-formula snapshots; existing byte/data/URL/translation tests remain green.

- [x] **R2. Render stable constant-size organic media strips.** RF-1–5, RF-9, RF-11–12; RNF-1–4, RNF-6.
  - Replace selected-only preview with stable keyed cells and bounded placement from R1. Size cells from the unchanged whole-project/list container, never changing half/full gallery width; use Home's existing project `MediaFrame`/supplied mask for images and static video previews without editing Home/shared files. Keep visible neighbor opening separate from selected index; no inline player or inaccessible offscreen tab stops.
  - Hecho cuando: narrow/wide browser probes show first+next glimpse initially, first visibly left below raised-title area and more of second after Next, with each displayed cell bbox unchanged (≤1px rounding only) through both-direction repeated reset at fixed viewport/text.3+ fixtures retain ordered neighbors and independent projects; opening a neighbor shows that ID without changing count/offset. Partial targets/focus remain usable, fixtures restored and no document overflow/rotation/scaling introduced.

- [x] **R3. Align heading and bottom full-project controls without scroll correction.** RF-1–4, RF-11–12; RNF-1–4, RNF-6.
  - Adjust feature-local copy/heading slots and grid so the initial h2 midpoint aligns with media, then rises/reduces above the shifted strip. Place stable arrows below, centered across title+media together. Reserve long-title/copy space for both states, including vertical mobile/enlarged-text reflow; preserve honest copy, labels, polite counts and stable controls. Keep no-timer/no-scroll-listener behavior and reduced motion.
  - Hecho cuando: nominal1024/1440 heading/media and whole-block arrow midpoint measurements agree within1px rounding, and complete reset restores title/strip/peek. Actual Enter navigation near viewport edges, fractional mobile widths and long EN/ES enlarged-text fixtures retains visible unobscured arrow focus and selection announcements without remounting or `scrollTo`/`scrollIntoView`. App actions remain44px with visible focus; initial/compact distinction remains after reflow.

- [x] **R4. Replace viewer presentation with glass surround and media-corner X.** RF-2, RF-5–8, RF-11–12; RNF-1–3, RNF-5–6.
  - Keep native modal lifecycle but remove enclosing border, opaque toolbar and notice bars. Use local neutral-gray translucent blurred backdrop with actual page recognizable behind clear aspect-fit media. Anchor simple visual X/44px localized Close action to the rendered media rectangle, not viewport/letterbox/toolbar; preserve accessible project identity and unobtrusive adjacent localized sample caption. Image/video share this treatment; full asset remains unmasked/noncropped.
  - Hecho cuando: fresh narrow/wide en/es light/dark image/video captures and geometry show visible underlying page/chrome, clear full-aspect media/native controls, no giant opaque panel/bars, and X at actual media upper-right with reachable target/focus after resizing. Sample explanation remains honest/legible without covering or displacing media into collapse; failure closure stays usable. No shared palette or native-control redesign occurs.

- [x] **R5. Reverify and correct only affected modal/strip lifecycle wiring.** RF-3–8, RF-11–12; RNF-1–2, RNF-4–6.
  - Probe actual pointer/keyboard neighbor opening, stable origins, native focus containment, scroll lock and true backdrop press/release against R4's smaller transparent surface. Exercise Close/Escape/backdrop, controls/drag-not-outside, errors and route unmount. Verify modal-only manual native Play/Pause, available keyboard/volume/progress, audio teardown and paused reopen; preserve existing cleanup rather than redesigning the player.
  - Hecho cuando: both compositions retain all project selections/offsets, prior scroll and exact originating trigger after every close; route exit restores styles without pulling the new route back. One modal blocks background, no inline player/audio exists, native Play is required, real playback/audio stops on exit/error and reopen stays paused. Record actual click vs Space/key methods, native browser limits and technical RMS evidence separately from owner audio-content confirmation, without agent listening claims.

- [x] **R6. Run final-source checks and both explicit-origin contracts.** RF-1–12; RNF-5–6.
  - Run all six AGENTS checks: typegen, lint, typecheck, `pnpm test`, build, `git diff --check` as spelled out in `plan.md`. Run tests with BOTH `LOCALIZED_404_TEST_ORIGIN` and `SITE_ICONS_TEST_ORIGIN` against verified dev and new production build. Compare focused diff/protected files/source-media hashes and confirm restored fixtures and retained compiler options; record actual sources/build/origin/process ownership.
  - Hecho cuando: six outcomes and both actual explicit-origin results/counts/skips are appended under revision2 with no new related failure or skipped required integration contract. Historical53/53 or default-run skips are not fresh proof. No unknown/user-preview process is stopped, config flag added, dependency installed, cache deleted or original sample byte changed; unavailable checks are explicit blockers.

- [x] **R7. Validate revised layout in native16/native24 matrix batches.** RF-1–6, RF-11–12; RNF-1–4, RNF-6.
  - Run the plan's160-condition dev/prod ×en/es ×themes ×five widths ×normal/150% ×genuine default16/24 matrix on identified final sources. For every row inspect both strip states across projects and image/video viewer, logging actual height/settings, unchanged item bboxes vs changed visible portions, heading/control alignment, peeks/reset, full-fit media, gray recognizable background and X anchoring/targets. Compare actual Home silhouette at equivalent proportions and measure contrast.
  - Hecho cuando: each required condition/state has attributable current evidence or explicit unresolved blocker; no new Projects/viewer clipping/overflow/unreachable focus remains. Long-title/native24/150% and viewport-edge Enter checks demonstrate bottom arrows remain visible without forced scrolling. The inherited320/native24/150% header347px extent is isolated, not fixed or called overflow-free. Record real artifacts/anomalies and checkpoint batches without inflating counts.

- [x] **R8. Validate fixtures, interaction/preservation and resize supplements.** RF-1–12; RNF-1–6.
  - In both modes/locales/themes verify direct/client/reload/locale navigation, independent repeated two-/three+-item cycles/reset, actual arrows/announcements, visible-neighbor activation and all modal paths. Check reduced motion, resize/orientation in both compositions/open media, native manual/keyboard playback and audio stop. Exercise empty/add/reorder/zero/one/mixed/failed/link fixtures then restore. Recheck Home/carousel/placeholders, About/chrome/assets, icons/metadata and localized404 native recovery proportionately.
  - Hecho cuando: fresh revision-2 actions, state/focus/scroll/audio results, restored final pair/catalog, protected hashes and actual artifact/source identities are documented; no extra production asset/link or Home change remains. Distinguish failed/unavailable harness coverage from passing independent supplements and actual clicked vs keyboard native operations; retain owner-attributed privacy limits/inherited defects. Fixes receive relevant R6/R7 reruns; no stale source or fabricated JSON claims.

- [x] **R9. Obtain independent revision-2 RF/RNF review.** RF-1–12; RNF-1–6; applicable completion criteria.
  - Coordinator assigns reviewer to inspect focused final diff, meaningful tests and actual attributable dev/prod browser evidence/interaction, mapping every revised RF/RNF and criterion. Review constant bbox vs visible-area measurements, Home contour, full-block controls, glass surround/X, lifecycle and preservation, not just task count or old technical passes.
  - Hecho cuando: independent requirement-by-requirement technical disposition and formal verdict are recorded with no outstanding technical noncompliance before owner handoff. Use `VEREDICTO: APROBADO` only when applicable gates permit it; otherwise retain `CAMBIOS NECESARIOS`, identifying any sole pending owner gate distinctly. Final owner acceptance remains R10, never fabricated by reviewer. Follow SDD correction limits and preserve previous review history.

## Completed static-video-preview tasks — separately approved

Dependency order: **A1 → A2 → A3 → A4 → A5 → original R10**. These five focused
addition tasks do not reopen R1–R9. Their preserved evidence supports unaffected
requirements; fresh evidence must prove the addition. No general redesign, media
service, dependency/configuration/Next API change or source-video alteration is
included. `plan.md`'s amendment section controls affected files and bounded checks.

- [x] **A1. Derive and centrally configure the actual video still with contract tests.** RF-2, RF-8–9, RF-12; RNF-5–6.
  - After joint approval, inspect Git/diff and establish protected/source-media/local-config hashes. Verify local `/usr/bin/ffmpeg` and `/usr/bin/ffprobe` executability/version (paths are present; not freshly executed by planner). Stop if unavailable; no installs/network/recovery. Extract one recognizable static PNG offline from the supplied MP4 using an explicit recorded timestamp into `public/images/pruebas/demo-video-poster.png`, without changing original bytes. Add optional video-only `poster: {src,width,height}` to the shared contract and configure it once in `SAMPLE_MEDIA_PAIR`; reuse the existing serializable localization projection. Use meaningful `pnpm test` red→green assertions for configured/absent posters, mixed/reordered/additional-project projection, serialization/nonmutation, dimensions/file existence and original hashes. No project-specific UI branches.
  - Hecho cuando: one actual recording-derived still has documented source/output hashes, dimensions, timestamp and successful extraction command/version; central poster data reaches both localized projections without changing video src/dimensions, sample identity, catalog order or Home images. Contract tests pass and the original PNG/MP4 hashes match retained evidence, including7722052-byte original MP4. No new privacy concern is unresolved, source recording altered or agent listening claimed.

- [x] **A2. Render the masked static preview and isolate poster failures.** RF-2–5, RF-8–9, RF-11–12; RNF-1–4, RNF-6.
  - Render the data-driven native still inside the unchanged Home-shaped cell; keep current dimensions/strip/title/arrows and the existing enlargement trigger. Add only necessary preview-local crop/cue styles and matching localized keys if existing labels are insufficient. Retain visible video identity, enlargement/sample cues and focus contrast without an opaque text-only surface or inline Play affordance. Keep missing/failed poster state keyed separately by item/poster source, including already-failed hydration and changed sources; it must not poison original-video playback or other projects. Leave viewer/native playback/teardown implementation unchanged.
  - Hecho cuando: focused browser red→green evidence shows actual still content in initial neighboring peek and selected state with unchanged boxes/offsets through load/error/reset, legible EN/ES cues,44px focused triggers and zero inline video/audio elements. Missing/blocked poster displays localized unavailability yet opens the original video paused; manual native Play still works. Preview errors and actual playback errors remain independent; no general layout/shared/viewer redesign occurs.

- [x] **A3. Validate final sources, integrity and explicit-origin integration.** RF-2, RF-8–9, RF-11–12; RNF-5–6; preserved RF regressions.
  - Restore temporary fixtures and run `pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`, `git diff --check`. Run `pnpm test` with BOTH `LOCALIZED_404_TEST_ORIGIN` and `SITE_ICONS_TEST_ORIGIN` against verified dev and new production origins. Verify PID/CWD/port, served source/build and poster/source responses; preserve unknown/user processes and preview3131. Review focused diff and hashes of source media, Home/About/shared sources, configs/locks and19 reported local files. Append attributable amendment evidence, without editing old entries.
  - Hecho cuando: all six command results, actual both-mode integration counts/skips, source/build/origin identities and protected-byte comparisons are recorded with no new related failure or skipped required integration. Expected default-run skips are distinguished from explicit-origin passes; unavailable checks are blockers, not fabricated successes. No dependency/config/generated-file hand edit or original-media change occurred. A later source fix triggers affected reruns before A5.

- [x] **A4. Verify bounded native preview, accessibility and modal regressions.** RF-2–8, RF-11–12; RNF-1–6.
  - Follow the amendment's40-condition dev/prod ×EN/ES ×light/dark ×320/390/768/1024/1440 default16/normal-text browser batch,16 native24/150%320/1440 supplements, reduced-motion and portrait/landscape resize/fixture probes. Inspect actual recognizable upright still/crop, partial and selected states on all projects, source correspondence, unchanged cell geometry/full reset, keyboard/focus/cue contrast and no inline playback/audio. In both modes/locales/themes check manual native modal Play/Pause/available volume/seek, focus/scroll/selection restoration, X/Escape/backdrop, playback-error/route-exit audio teardown and paused reopen. Test cold/hydration missing poster, changed source and failure isolation from playable MP4. Restore all test-only derived portrait/mixed fixtures; proportionately sample protected pages alongside hashes/contracts.
  - Hecho cuando: actual bounded conditions/actions/contrast/audio results and captures are attributable to final sources/build, cover the amended RF-8/preview-failure edge case and show no new related regression. Recorded limitations distinguish technical audio evidence from owner privacy confirmation, native controls from app targets, inherited header overflow from Projects regressions and retained R1–R9 evidence from fresh checks. Do not rerun the historical160/full lifecycle suite absent documented justification. Source fixes receive affected A3/A4 reruns; unavailable required coverage is explicit.

- [x] **A5. Obtain independent amendment review before owner handoff.** RF-2–9, RF-11–12; RNF-1–6; applicable completion criteria.
  - Reviewer independently inspects the focused diff/contracts/frame provenance and browser behavior/evidence, confirms original MP4 preservation and maps the amendment plus retained unaffected RF/RNF evidence. Review real static content, crop/cues/geometry/failure separation and native modal behavior, not CSS strings or task count. Preserve original R9's technical pass and formal verdict; apply SDD correction limits without resetting history.
  - Hecho cuando: independent requirement-level amendment disposition and formal verdict are recorded with no technical/documentary blocker before R10. If final owner acceptance alone is pending, identify it distinctly and retain `VEREDICTO: CAMBIOS NECESARIOS`; do not claim acceptance or `APROBADO` prematurely. Optional future design recommendations are separate and non-implemented.

## Original final acceptance gate — completed after A5

- [x] **R10. Obtain separate owner acceptance of revised visuals/behavior.** RF-2–8, RF-12; RNF-1–6; completion criteria.
  - Present the actual revised prototype including the recording-derived static frame, recognizable crop and localized video/open cues with no inline playback, as well as initial heading/media alignment and peeks, bottom whole-block arrows, constant-size leftward strip and both-direction reset, mobile/text growth, Home contours, glass image/video surround/corner X and explicit native Play. Coordinator records exact final response and reconciles closure/review/spec/memory only after A1–A5 evidence and outstanding gates pass. This is the original R10, not a replacement acceptance task.
  - Hecho cuando: separate explicit final owner acceptance and final independent approved disposition are recorded with all RF/RNF supported and no blocking requirement/privacy concern. Requirements approval, new plan approval and green tests alone do not complete this task or authorize staging/commit/push/publication.
  - Completion: owner answered **“Lo apruebo”** to **“¿Apruebas esta versión para cerrar la SDD, dejando el rediseño para después?”** after the updated actual preview; independent final **VEREDICTO: APROBADO** covers RF-1–12, RNF-1–6 and completion criteria. Coordinator-supplied records, documented in `validation.md`; no publication authorization.
