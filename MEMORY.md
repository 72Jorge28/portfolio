# MEMORY.md — Portfolio

Operational context; permanent rules and commands live in `AGENTS.md`.

## Current state and decisions

- English/Spanish Home, About and Projects with shared navigation, footer and themes.
- Spec002 and Spec003 are implemented and closed. No active implementation remains.
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
  unauthorized. Final About/Projects content/media, contacts and site origin are pending.
- Supplied photo/SVG/font bytes and provenance were preserved; no dependency change,
  commit or push was authorized. Unrelated user changes remain uncommitted.
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
- `/favicon.ico` remains missing; approve final branding before adding an icon.

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
