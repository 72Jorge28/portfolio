# MEMORY.md — Portfolio

Operational context; permanent rules and commands live in `AGENTS.md`.

## Current state and decisions

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
  reconfirmed “continuemos”. Publish reviewed About + pending favicon/About-asset
  changes only; exclude local agent configurations/backups and unreviewed new
  `public/images/projects/` resources. Commit/push pending, not yet confirmed.
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

- About Preview has substantive copy but its Read more destination remains placeholder
  content. Finish About/Projects, case studies/media and verified contacts before launch.
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
