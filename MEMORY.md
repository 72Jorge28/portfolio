# MEMORY.md — Portfolio

Operational context; permanent rules and commands live in `AGENTS.md`.

## Current state and decisions

- Spec005 revision2 + static video poster amendment are CLOSED. Owner explicitly
  accepted final preview with “Lo apruebo” in response to closing this SDD and
  deferring redesign. R1–R10/A1–A5 complete; final reviewer `VEREDICTO: APROBADO`
  covers RF-1–12/RNF-1–6 and completion criteria. Older pending states below are
  historical, superseded by this closure. No commit/push/publication authorized.
  Final buildv1ReJ_mKnhx437kbFY4df,108 source hashes match manifest
  b77f6a5e298f6daf47a966d4f10e1783c2f774ba70c7ba744d659840163fd24d.
  Six checks/58 explicit-origin tests per mode pass; closure only rechecked hashes
  and documentation (`git diff --check` exit0), not new application runs. See
  spec005/{spec,tasks,validation,owner-preview}.md and amendment-a5/MAIN-REPORT.md.
  Broader redesign is future separate work; inherited header exceptions, two R7
  lint warnings and physical/other-browser/screen-reader verification remain.
- Spec004 About is implemented and closed: T1–T10 complete, owner accepted final
  visuals and independent reviewer returned `VEREDICTO: APROBADO` for all RF/RNF.
  See `specs/004-about-page/{spec,plan,tasks,validation}.md` for requirements/evidence.
- About uses the full-head Home portrait and approved ES/EN biography. Contacts are
  centrally configured; GitHub/LinkedIn appear in About and the existing footer.
  WhatsApp/email remain static in About until configured; do not infer CV contacts.
  All organic icon backgrounds tilt -15deg, symbols remain upright. Footer active
  targets are at least44px; extreme-text wrapping is local to About.
- Final build `GJay8FUi94mC1DZtZsdoR`: six checks pass,42/42 explicit-origin tests
  per mode without skips. Source manifest:30f6c92e09173e9c8d7b626ae512ace59c9236c3e05cde53d3f5f8896f479c8b.
  Browser matrix160:152 fully passing,8 pre-existing shared-header exceptions at
  320/native24/150% (347px also on Projects/without main). Final tilt:80 MCP+16
  native24 supplements; independent visual/keyboard rereview passed. Do not call
  the whole matrix overflow-free or repair unrelated shared chrome automatically.
- Owner authorized publication with “Esta bien, ya podemos subir entonces” and
  reconfirmed “continuemos”. Reviewed About + pending favicon/About-asset changes
  published to `72Jorge28/portfolio`, origin/main, commit
  `c5ee587370113b4688c9c7f2e9178cbf8466a5fa` (31 files). HEAD and remote main match;
  all93 approved source hashes preserved. Excluded29 local agent/config/backup files.
  Unreviewed project-image folders were absent at delivery; none were added. Vercel
  Owner subsequently confirmed that this version is deployed on Vercel; no separate
  agent production-browser verification is claimed.
- Spec005 revision1 history (superseded by approved revision2 below):
  Owner approved plan/tasks (“El video de prueba no tiene nada privado. Apruebo el
  plan”); privacy confirmation is owner-attributed, not an agent inspection claim.
  Ordered implementation authorized. T1 inspected baseline/PNG640x360 and MP4
  1920x1080,5.681s,H.264 with non-silent mono MP3 audio; metadata, decoding and sampled
  frames checked, source bytes preserved. Owner explicitly authorized continuing
  unchanged with audio-content review based on his confirmation, not agent hearing;
  plan/tasks record this sample-specific disposition. T1/T2 complete: samples renamed
  byte-identically, central media model/projection/localization/tests added. Owner
  authorized narrow plan adjustment `allowImportingTsExtensions:true` in tsconfig,
  retaining noEmit/strictness; TS5097 resolved. Six checks pass;37 tests pass,2 origin
  integrations initially skipped pending T6. T3–T5 complete: independent cyclic
  galleries, both responsive compositions/reset, native top-layer image/video
  viewer with dark blurred backdrop and focus/scroll restoration. Explicit native
  Play/Pause and technical non-silent audio→RMS0 on close/error/route exit verified;
  no human listening claimed. T6–T8 complete: six checks and53/53 explicit-origin
  tests per mode pass without skips. Final build u5iQwbBJ_Jvjlh_nz7zAe;102-file
  manifest3d939d286518ad739dcd624b979db2ffd10f791efbb20688a4339af3b2a2e5f8.
  Final160-condition/640-state matrix includes320 viewers. Corrections keep focused
  arrows visible, reserve long-title space, prevent landscape media collapse and
  remove opaque viewer panel so dark blurred page remains visible around media.
  Native playback/volume/seek, audio stop, fixtures and preservation verified;
  eight inherited header exceptions remain separate. Independent review found no
  technical defects; two documentation attribution corrections completed. Formal
  verdict CAMBIOS NECESARIOS remains only for final owner acceptance; T9/T10 unchecked.
  Reviewer independently rebuilt z2-vLlzLel8IKP2pnwnyY from identical102 sources,
  six checks+53/53 per mode passed. Evidence: spec005/validation.md. No publication.
- Spec005 owner preview intentionally running on http://127.0.0.1:3000/es/projects
  (also /en/projects), started by implementer: CLI257917/Next257934/pnpm257817,
  repo CWD, log /tmp/opencode/spec005-owner-preview/dev.log. Reverify ownership
  before stopping; don't infer PIDs persist. Ask owner to test arrows/full reset,
  image enlargement, video explicit Play and all closure paths before spec closure.
- Owner rejected Spec005 prototype and clarified requirements (2026-10-16).
  Owner approved revision2 requirements (“La apruebo”,2026-10-16):
  title left vertically centered on strip, arrows below centered across whole block;
  constant-size organic Home-shaped media translate left with next-item peek, not
  enlarge on arrows; compact raised title and full initial reset remain. Viewer uses
  gray translucent blurred glass-like backdrop, page visible behind, simple X at
  media's upper-right corner; native video controls unchanged.
  Owner jointly approved revised plan/tasks (“Las apruebo”,2026-10-16).
  R1–R4 complete: pure projection, stable Home-masked cells, initial heading/media
  alignment and whole-block bottom controls (both0px delta nominally), glass viewer
  gray28%/blur12px with44px X anchored to the actual media corner. Media stays
  559.359x354.25px across states at1440; arrows/focus remain stable without scrolling.
  R4 build qozzm3JCprJi5MEqtAzZF; six checks pass,44 tests pass/2 origin integrations
  skipped pending R6. R5 remains blocked (2026-10-21), no new native lifecycle cases:
  pnpm12 `verifyDepsBeforeRun` defaults to install, triggering dependency recovery
  before start; downloads failed DNS/timeouts. Next package/bin now absent; the exact
  original node_modules mismatch is unknown. Node24.21.0/pnpm12.4.1 match requirements;
  lock/config versions and95 source hashes preserved. Read-only diagnosis recorded.
  Owner authorized the proposed frozen install with contextual “continuemos”. On
  2026-10-22 `pnpm install --frozen-lockfile` exited0; Next16.3.5/bin, React19.2.8
  and TS5.9.3 are available, lock/config/source/media unchanged. It finished22ms
  without reported downloads; don't attribute any earlier restoration to this run.
  R5 now complete without app-code changes:128 native lifecycle cases,80 audio-active
  exits,64 paused reopenings and4 native keyboard/control suites passed in dev/prod.
  RMS active→0 on X/Escape/backdrop/error/route exit; no human hearing claimed.
  Served build qozzm3JCprJi5MEqtAzZF/95 source hashes preserved; owned resources
  closed. R6–R8 now complete: fresh six checks and56/56 explicit-origin tests per
  mode without skips; final R8 build p4JBtnt3Vx1Ej5xfhOPdC. No final app/config changes,
  all fixtures restored. R7 matrix160/640 states/320 viewers, media-dimension delta0;
  R8 added data fixtures, repeated cycles, resize, native controls/audio and no-JS404
  preservation. Source107 manifest d0dd23b7491a24ec9a754f991683a125e6f9f4aa05566585277aaa7eb1f69450
   retained for R6–R8; current protected local files19, not historical29.
   R9 complete: independent review found an introduced React heading-key warning,
   fixed in correction cycle1 with only `key={project.slug}` on the passed H2.
   Six fresh checks and56/56 explicit-origin tests per mode pass; independent
   recheck found no remaining technical/documentation blockers. Corrected build
   `9GewD2EQsmxotE98L_iMX`; source107 manifest
   `458a5794fa8621d60d48951575cbacc51e922f6ea6be5119bb155f27aff4a5b8`.
   Formal CAMBIOS NECESARIOS concerned R10 owner acceptance; spec not closed.
   Owner now requests an inline static frame from the actual video instead of the
   green placeholder, explicitly through this open SDD. Planner amended spec.md;
   amendment explicitly approved by owner with “La apruebo”. Planner updated
   plan/tasks: A1 still/contracts → A2 rendering/failure isolation → A3 checks →
   A4 bounded browser verification → A5 independent review → pending original R10.
   Owner jointly approved plan/tasks with “Lo apruebo”; ordered implementation authorized.
   A1 complete: actual video frame at2s,1920x1080 PNG configured centrally as optional
   video poster; original samples unchanged. Poster SHA256
   `95229f54968dfe293009ee28afd693c7eca28b772d968ca5659b314487869380`.
   Contract TDD red→green,46 pass/2 HTTP skips; six checks pass, build/type checks
   isolated to protect running preview's .next. A2 complete: masked real static frame,
   localized cues and per-item/source poster-failure isolation;12 focused browser
   conditions and six checks pass (46 tests/2 HTTP skips). Preview3131 intentionally
   retains previous UI/build until handoff. A3 complete: six checks and58/58 explicit
   dev/prod tests per mode, zero skips. Isolated buildDBMR67Pqq8HA7YydRu4uS;
   source108 manifest682887addfa73f8e511105c7e8d26816de5e9b130c83f54dc930a44b9c8649f5.
   A4 complete: cue clipping at320/native24/150 corrected with three local CSS rules;
   final40+16 browser conditions, six checks and58/58 dev/prod integrations pass.
   Audio/reopen/resize/poster-error/fixture evidence retained with explicit attribution.
   Final buildv1ReJ_mKnhx437kbFY4df; source108 manifest
   b77f6a5e298f6daf47a966d4f10e1783c2f774ba70c7ba744d659840163fd24d.
   Original media/local configs/root .next preserved. Preview3131 disappeared after
   restarts, not restarted; root build still old UI. A5 independent review complete:
   24 fresh conditions,24 native Play/close checks and4 blocked-poster loads pass;
   no technical/documentation blockers. Formal CAMBIOS NECESARIOS solely R10 human
   acceptance; durable report/captures in amendment-a5/. Updated owner preview now
   intentionally active http://127.0.0.1:3131/es/projects (also /en/projects), own
   PID72405/CWD /tmp/opencode/spec005-a4/prod, final buildv1ReJ_mKnhx437kbFY4df.
   Both HTTP200,108 source hashes and three loaded posters verified; no inline
   players. Log /tmp/opencode/spec005-amendment-owner-preview/server.log;
   details owner-preview.md. Reverify ownership/liveness before reuse or stopping.
   General redesign deferred in coordinator's
   recommendation; functional praise is not final R10 acceptance.
   Evidence: revision2-r9-correction1/. R10 owner preview intentionally running at
   http://127.0.0.1:3131/es/projects (also /en/projects), verified corrected build,
   both HTTP200 and107/107 source hashes. Own Next80833/pnpm80733, repo CWD;
   logs /tmp/opencode/spec005-rev2-owner-preview/. Reverify ownership before stopping;
   PIDs/origin can become stale. No publication authorized.
  R5–R10 cover lifecycle, checks/matrix,
  projection/render, heading/bottom controls, glass viewer/X, lifecycle, checks/matrix,
  independent review and owner acceptance. T1–T8 remain revision1 history; old T9/T10
  superseded, not completed. Old implementation/evidence is not revision2 compliance.
  Interactive sample-only prototype:
  stacked independent galleries for the three existing projects, initial left title/
   right media; nonfirst items compact title above shifted constant-size media; returning to first
  in either direction restores the entire initial composition. Future catalog-driven
  projects/media and optional live links; none of the latter verified initially.
- Owner supplied sample PNG+MP4 under `public/images/pruebas/`, authorized convenient
  renaming (completed demo-image.png/demo-video.mp4). Video plays only enlarged, with
  native controls and explicit Play; inline preview never plays. Approved defaults:
  same sample pair per project, mobile vertical flow, modal Close/Escape/backdrop
  with focus/scroll restoration. Native control language/size belongs to browser;
  app controls must be localized and44px. Source video playback already verified;
  audio-content privacy is owner-confirmed under explicit authorization, not agent
  hearing. Home unchanged; no Projects publication authorized.
- Latest dev origin was `http://localhost:3000/es/about`; preserve user servers.
- Repeated localhost `/socket.io`404 requests came from another open page, confirmed
  by the owner; not a portfolio defect and no correction is needed.
- English/Spanish Home, About and Projects with shared navigation, footer and themes.
- Spec002 and Spec003 are implemented and closed. The subsequent asset feature is complete.
- Spec003: owner explicitly accepted final visuals; independent `VEREDICTO: APROBADO`
  confirmed RF-1–15/RNF-1–6. T10 checked and spec closure recorded on 2026-10-14.
- Home/shared refinements include the supplied full-head portrait, shared identity,
  readable Hero details, preserved light palette, forest/brass dark depth, organic
  frame/shadows, responsive About contours and integrated mobile feathered transition.
- Navigation is a full bounded opaque sticky bar with continuous lower border;
  completed outside taps/clicks dismiss the mobile menu without consuming actions/pans.
- Shared outer widths and comparable content rails align within 1 CSS px; intentional
  columns, organic media anchors, intrinsic controls and carousel copies remain distinct.
- Frame/header/skip-link stacking is 6/5/10. Preserve full-height decoration without
  obscuring content/focus; the approved paint-order exception changes no frame geometry.
- Carousel hover/contact pauses are temporary; manual Pause/reduced motion take priority.
  Keyboard focus does not automatically pause. Native smooth navigation owns scroll
  writes until settlement/interruption, then eligible autoplay resumes at 32px/s.
- Both final automatic correction cycles were used: wheel interruption no longer leaves
  stale ownership; native-only 1px reconciliation prevents paused loop jitter while
  autoplay retains exact normalization. Neither defect is an exempt preexisting issue.
- Final evidence: `specs/003-visual-refinement/validation.md`; build
  `4IjoVtQeIgFfofyMU0ipg`, six AGENTS checks passed, 34/34 explicit-origin tests per mode.
  Independent paused-frame checks are static across dev/prod en/es; source/chunk guards
  match. Closure prose did not trigger another application build.
- Verification covers Chrome emulation, both locales/themes, normal/150% text, widths
  320/390/768/1024/1440 and documented supplements, focus/menu/theme/native404 behavior.
  Physical devices, other browsers and screen readers remain unverified.
- Keep CSS Module compositions stable; broad styling/dependency migrations remain
  unauthorized. Projects/case-study media, private contact destinations and site
  origin remain pending; Home About Preview uses both supplied images.
- Website delivery was committed/pushed with explicit authorization to origin/main:
  `c7522763e57d35ed3b577ffa5392fba43535dbf1`; local agent configs/backups stayed excluded.
  User confirms Vercel automatically deploys that branch. Later changes need fresh push approval.
- Asset feature (explicit feature flow, no new spec): six supplied favicon.io icons via
  shared `siteIcons` in localized layout/global404, byte-identical public/favicon.ico
  for the root request; no manifest/PWA. About Preview uses supplied portrait and aerial
  image with localized alt text, existing curves and upright mobile photography.
- Asset feature was validated at build `AiBh287LXJo8k1OXhhRSJ`. Owner rejected the
  subsequent widened lower-About feather because it obscured the photo as a separate
  band. Current adjustment attaches background/mask to `.direction::before`, fading
  inside the text's final padding; image extends underneath. Owner then clarified that
  boundary must remain visibly curved and intrude modestly. Latest About-CSS-only update
  restores down/right elliptical curvature with8–12px feather and bounded intrusion
  (37.5px at390 mobile,48px at1440 desktop); image stays16:10 and text fully opaque.
- Owner likes the curved boundary but requested smoother opacity falloff. Current
  About-CSS-only adjustment widens the90→10% transition (mobilecenter5→9px, endpoints
  10→17; desktopcenter8→14, endpoints14→23) with nine opacity levels, preserving the
  same outer intrusion37.5/48px and opaque glyph background, no extra photo occlusion.
- Current feature build `n_woIBZNm7rDUKcBn93e1`: six checks pass; 35/35 tests per mode
  with both LOCALIZED_404_TEST_ORIGIN and SITE_ICONS_TEST_ORIGIN. Browser en/es, both
  themes, five widths and normal/150% text; native404 JSoff recovery verified. Original
  Hero/SVG/font/asset bytes preserved. Follow-up112 browser checks pass (80 main,20
  default24,8 focus,4 nativeJSoff404). Dev was tested on existing3001 and preserved;
  owned production3111/resources closed. Asset feature remains preserved by Spec004;
  owner now authorized uploading the reviewed pending website changes. Historical
  captures/logs: /tmp/opencode/feature-progressive-curve/ may no longer exist.
- Owned validation servers/browser resources are closed; user pages were preserved.

## Lessons and constraints for future work

- Spec/plan approval is not final visual acceptance. Historical screenshots or green
  logic tests alone do not prove current event wiring, compositing or native scrolling.
- Browser rows need verified viewport/theme/font/default-font query conditions. A 24px
  browser default changes rem media-query breakpoints; setting root style alone differs.
- Test native pixel quantization: logically equivalent loop copies can visibly jitter.
- Disable scripts before native404 visits; wait from an external harness, not suspended
  in-page timers. Check actual HTTP404 and native Tab/Enter Home200 recovery.
- Batch/checkpoint long checks; record source/build identity and distinguish fresh versus
  recovered evidence. Temporary captures under `/tmp/opencode/` may disappear.
- Recheck PID/CWD/port ownership before stopping anything. Earlier permissions applied
  only to identified portfolio servers, not future unrelated/recycled processes.
- Root/installed lock contents differed without demonstrated corruption. No install,
  lock repair, cache/output deletion or build-script permission change is authorized.

## Pending user follow-ups — not included in closed Spec003

### Navigation and accessibility

- Confirmed: activating the current-page mobile menu link can close it with focus on
  BODY; subsequent Tab may jump to carousel. Escape and new outside-dismissal cases
  were verified separately. Desktop-to-mobile resizing can also lose focused links.
  Decide intended behavior before correcting these existing cases.
- Locale switching drops query/fragment (`locale-switcher.tsx` uses pathname only).
  Decide whether `/es/projects?view=grid#main-content` should retain both in English.
- Mobile header menu needs JavaScript; footer links provide a no-script fallback.
  Decide whether this is sufficient beyond the validated native404 Home recovery.
- Existing brand accessible-label/visible-JR mismatch and theme select name/id warning
  remain candidates for scoped accessibility work; recheck current sources first.
- Light inactive carousel labels have insufficient contrast (~3.53:1); title/label
  overlap at 320px/browser-default24 is documented. Neither was corrected by Spec003.
- Missing favicon resolved by the asset feature; root and six head icon links return200.
  A contextual dev LCP warning for lazy-loaded About appeared on immediate scroll;
  no image load failures. Keep below-fold lazy loading unless measurements justify change.

### Content and documentation

- About and its Read more destination are complete under Spec004. Projects/media and
  further verified contact destinations remain pending.
- Short mobile Hero identity placement may merit product review; an earlier below-fold
  observation predates current typography. Do not treat old coordinates as current proof.
- README/visual-system documentation and historical browser reports have drifted after
  visual revisions. Reconcile descriptions against current code, especially curves,
  composition widths, integrated feather and sticky navigation; do not restore old
  80rem/84rem limits merely because documentation mentions them.
- Recheck previously suspected unused tokens (`--ornament`, `--media-mat`, `--media-line`,
  `--shadow-media`) before removal; old consumer audits predate shadow changes.
- Remaining docs may need Node/ESM, shared identity/translated role and simplified
  `SectionCurve` updates. Documentation/style cleanup was deferred, not authorized now.

## Localized404 implementation notes

- Spec002 evidence: `specs/002-localized-404-no-javascript/validation.md`.
- Missing localized paths use a full global-not-found document with genuine404/native
  Home recovery with scripts on/off in dev/prod. Shared-layout changes must preserve
  that document's fonts/providers/shell as well as the normal localized root.
- Accepted tradeoffs: experimental globalNotFound, public deprecated requestLocale
  bridge, dynamic rendering and explicit duplicated shell composition. Ordinary
  localized not-found remains; this is not a promise to fix every future matched
  `notFound()` interruption. No unique internal framework cause was established.
- Regenerate stale framework validators using normal runtime/typegen commands, never
  hand-edit output. Restore temporary fixture declarations before interpreting failures.
