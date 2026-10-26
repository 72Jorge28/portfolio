# Spec 005 — Validation evidence

## Current disposition — implemented and closed (2026-10-26)

**VEREDICTO: APROBADO** — final independent reviewer disposition supplied by
the coordinator after separate final owner acceptance. RF-1–12, RNF-1–6 and all
completion criteria are approved. R1–R10 and A1–A5 are complete. Earlier pending
gates, failed attempts and verdicts below remain chronological history, not the
current disposition; revision-1 T9/T10 remain superseded, not falsely completed.
See the final administrative closure record at the end of this document.
No staging, commit, push, deployment or publication is authorized.

## T1 — Baseline and local media inspection (2026-10-15)

**Initial disposition (superseded by the resolution below): blocked.** Baseline and technical inspection
are recorded below. The supplied MP4 has non-silent audio, but no available tool
provides audible content to this agent for local listening. Audio content has not
been inspected. Do not proceed to renaming or application integration until the
coordinator resolves this coverage limitation under the approved plan. No new
privacy concern is asserted from the sampled visual material; this is not a
complete privacy review or distribution clearance.

### Approval and scope

- Read `AGENTS.md`, `docs/constitution.md`, `MEMORY.md`, and this specification's
  `spec.md`, `plan.md`, and `tasks.md`. Spec and joint plan/tasks approval are
  recorded; T1 exists, was pending and has no preceding task dependencies.
- Owner confirmation, separately attributed: **“El video de prueba no tiene nada
  privado. Apruebo el plan”**. This confirmation is not missing and has not been
  re-requested. It is not evidence that the agent listened to the recording.
- Traceability: preparatory checks for RF-2/RF-8 and RNF-5/RNF-6 only; no claim
  that application requirements or final compatibility validation are satisfied.
- No asset rename, integration, application/configuration/dependency change,
  install, external upload, staging, commit, push or deployment was performed.
  Existing placement in `public/` predates this task; no first-exposure claim or
  authorization for new publication is inferred.

### Actual working-tree and server baseline

- HEAD: `c5ee587370113b4688c9c7f2e9178cbf8466a5fa` (read locally; remote/deployed
  identity was not reverified).
- `git status --short`: tracked modification to `MEMORY.md`; untracked `.agents/`,
  `.opencode-v1-backup/`, `.opencode/`, `public/images/pruebas/`, and
  `specs/005-projects-media-prototype/`. The tree was not clean.
- Inspected the tracked diff: only `MEMORY.md`, 27 insertions/5 deletions, reflecting
  existing delivery and Spec005 coordination records. Staged diff was empty.
- `git ls-files --others --exclude-standard` identified 29 pre-existing local
  skill/agent/command/backup files, two supplied media files and the three approved
  Spec005 documents. All are owner/coordinator baseline, not T1 additions.
- `public/images/projects/gelys-event/` and `living-gallery/` exist and are empty;
  preserved without populating, removing or reorganizing them.
- SHA-256 manifest of all 150 tracked/nonignored untracked files at task start is
  local-only at `/tmp/opencode/spec005-t1/baseline.json`. It supports preservation
  comparisons without reproducing local configuration contents here.
- `ss -ltnp` and process inspection identified existing port 3000 as Next's server,
  PID 21680, child of Next CLI 21662 and `pnpm dev` 21562. `/proc/<pid>/cwd` for
  all three resolves to this repository. Preserved: no requests, restarts or stops
  were needed. Other listeners were not treated as owned resources. No test
  server/browser resource was started by T1.

### Original source facts for later tasks

| Original path | Bytes | Actual dimensions | SHA-256 |
| --- | ---: | --- | --- |
| `public/images/pruebas/analista-ciberseguridad-800x450.width-640.format-png.png` | 310566 | 640 × 360 | `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3` |
| `public/images/pruebas/Recording from 2026-10-15 15-59-16.276165.mp4` | 7722052 | 1920 × 1080 | `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd` |

- PNG: actual PNG codec, RGB24, 16:9; dimensions were measured, not inferred from
  the filename. Opened locally and visually inspected as the supplied sample.
- MP4: ISO BMFF/MP4-family container; duration 5.681333 seconds; H.264 Constrained
  Baseline (`avc1`), `yuvj420p`, 16:9, average frame rate `84750/4261`
  (approximately 19.89 fps). Video stream duration 5.681333 seconds.
- Audio: one MP3 stream, mono, 44100 Hz, duration 5.590204 seconds. Full audio
  decoding for level measurement produced 246528 samples; mean -16.5 dBFS,
  maximum 0.0 dBFS. This establishes non-silent audio, not its meaning or privacy.
- Source bytes were read only. Extracted inspection images are derived temporary
  evidence, not source transcoding or replacement; no source media was altered.

### Method, results and limits

- Existing `/usr/bin/ffprobe` and `/usr/bin/ffmpeg`, version
  `8.0.1-3ubuntu2`, were used without installation. Selected `ffprobe` fields
  established codec, geometry, duration and audio facts; metadata tags were not
  copied into documentation.
- Used `ffmpeg` with `fps=2,scale=960:-1,tile=4x3` to create a local contact sheet
  spanning the recording at half-second sampling intervals. Visually reviewed all
  11 populated cells; the final grid cell is padding, not a recording frame.
  The sheet remains only at `/tmp/opencode/spec005-t1/contact-sheet.png`, outside
  the repository. No frames, transcripts or private scene details are included here.
- Sampling is not an exhaustive frame-by-frame review; intervening frames and
  detail reduced by scaling are not covered. Sampled visuals did not trigger an
  additional sensitive-content concern. Owner confirmation remains separately
  attributed above, not converted into an agent guarantee.
- `ffmpeg` decoded the recording for frame extraction and decoded the entire
  audio stream with `volumedetect`; these operations completed successfully.
  The available tool interface cannot convey audio to the agent for listening.
  Level measurement cannot replace that required content inspection. No speech
  recognition, transcript, external service or dependency was introduced.
- Browser MIME delivery, actual playback and native audio/control behavior were
  not tested. Codec metadata and successful local decoding are not browser
  compatibility proof. The audio-inspection blocker was reached before starting
  a temporary loopback browser harness. Actual native playback remains required
  during the later approved viewer checks, after T1's gate is resolved.
- No automated tests were created or modified: this task changes documentation
  only and performs read-only inspection, with no new application behavior for
  a meaningful red/green cycle. No application lint/typecheck/test/build was run;
  historical About builds and test counts are not reused as fresh evidence.
- Required documentation validation: reference/command/scope consistency review
  and `git diff --check`; final preservation comparison recorded below.
- Final comparison against the initial manifest: all 150 baseline files retain
  their original SHA-256 hashes, with none missing. The only new nonignored file
  is this `validation.md`. Protected documents, task checkboxes, original media,
  application files and local configurations remain unchanged. Reference/scope
  review and `git diff --check` passed. The new untracked document was also checked
  for trailing whitespace and conflict markers separately.

### Initial blocked handoff (historical)

T1 is incomplete solely because required audio listening is unavailable in this
agent interface. Request coordinator disposition/available local inspection
capability rather than a duplicate general owner privacy confirmation. No task
checkbox was changed; T2 and subsequent work were not started. Application-level
visual/responsive checks are not applicable to this documentation-only attempt.

## T1 — Authorized resolution and completion (2026-10-15)

**Current disposition: T1 complete; local prototype integration is permitted under
the approved plan. No publication is authorized.** The only previously reported
blocker was unavailable agent audio listening. The approved, sample-specific plan
adjustment resolves that limitation without claiming additional inspection.

### Owner decision and remaining limits

- Read the updated approved `plan.md` and `tasks.md`. The coordinator's recorded
  question was **“¿autorizas continuar con el vídeo tal cual, dejando documentado
  que la revisión del audio se basa en tu confirmación y no en una escucha por mi
  parte?”**. The owner's exact answer was **“Lo autorizo”**. No exact response time
  is supplied. This decision supplements the separately recorded owner assertion
  **“El video de prueba no tiene nada privado. Apruebo el plan”**.
- Audio-content review for this supplied MP4 relies on that owner confirmation
  and explicit authorization, not agent listening. The agent did not hear the
  recording. Existing actual metadata, local decoding and sampled visual findings
  remain as recorded above; they do not establish exhaustive content inspection.
- This exception applies only to the current original MP4 identified by the
  SHA-256 in the source table above. It is not a general waiver for future media,
  a claim of full agent privacy review or public distribution clearance. Any newly
  suspected sensitive material still requires stopping for an owner decision.
- Actual browser playability, MIME delivery, native controls and playback/audio
  lifecycle remain unverified here and required by T5/T8. Successful decoding and
  codec metadata are not browser compatibility proof. The source must remain
  unchanged, including its audio; no muting, transcoding or replacement is allowed.

### Fresh integrity and documentation checks

- HEAD remains `c5ee587370113b4688c9c7f2e9178cbf8466a5fa`; staged diff remains empty.
  The working tree is still not clean. Compared with the original 150-file
  baseline, only `MEMORY.md`, `plan.md` and `tasks.md` had changed before resuming:
  the existing coordinator blocker record and planner's authorized adjustment.
  The only additional nonignored file was T1's existing `validation.md`.
- Recomputed both source hashes and byte sizes: both match the original table
  exactly. Application files, local agent/config/backup files and other original
  baseline files remain byte-identical. No new media concern or other blocker was
  reported by the preceding inspection; no additional content review is claimed.
- Saved a resume-time local manifest at
  `/tmp/opencode/spec005-t1/resume-baseline.json`. Only this validation document
  and T1's checkbox are changed by the resumed implementation. No protected
  document, asset, application code or server resource is modified.
- Documentation reference/scope consistency, `git diff --check`, and separate
  whitespace/conflict-marker checks for these untracked documents pass. No tests
  were created or modified and no application build was run: documentation-only
  completion adds no behavior requiring TDD or application UI checks.

T1's remaining criteria are satisfied with the explicitly authorized limits above;
only T1 is marked complete. T2 and later tasks have not been started. No new
technical design decision, dependency, external upload or publication action was
introduced by this resolution.

## T2 — Partial implementation; configuration boundary blocker (2026-10-15)

**Disposition: blocked, not complete. T2 remains unchecked; T3 was not started.**
The data tests are green, but mandatory typecheck and production build fail with
TS5097 on the new runtime import in `src/lib/projects/catalog.ts`. Resolving that
failure requires coordinator disposition because this assignment restricts edits
to project source/messages/tests/sample assets and task/validation evidence, not
`tsconfig.json`. No compiler configuration, package or dependency was changed.

### Baseline and bounded changes

- Read the required base and approved Spec005 documents, T1 evidence, project
  contracts/catalog/query, Home preview/list consumers, messages and test runner.
  T1 is complete and the spec/plan/tasks approvals and sample-specific audio
  disposition are recorded. No duplicate privacy gate or agent listening claimed.
- Actual HEAD remains `c5ee587370113b4688c9c7f2e9178cbf8466a5fa`; staged diff is empty.
  Existing MEMORY/agent/config/backup/spec files were protected. Saved a local
  pre-edit hash manifest at `/tmp/opencode/spec005-t2/baseline.json`.
- Added optional discriminated media contracts, typed alternative keys, central
  `SAMPLE_MEDIA_PAIR`, pure `resolveProjectMedia` / `resolveProjectLiveUrl`, explicit
  pair references on all three catalog entries and server-side alternative
  resolution. Matching `Projects.media` messages provide sample descriptions,
  navigation/open/close/viewer/position/error/empty labels for later tasks. No
  client component, gallery state, styling, page, provider or route was modified.
- Catalog identity/content keys/order/featured flags/tones, empty technologies and
  Home `images` remain unchanged. No real live URL or project claim was added.
  Existing translated values are unchanged; only `Projects.media` was added.
- Renamed exactly the two supplied files within `public/images/pruebas/` to
  `demo-image.png` and `demo-video.mp4`; central references use those names. Source
  sizes and SHA-256 match T1 exactly: image 310566 bytes,
  `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`;
  video 7722052 bytes,
  `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.
  No transcoding, muting, cropping or other asset/folder modification occurred.
  Originals were untracked, so Git reports the renamed assets as untracked too.

### TDD and required validations

- Node v24.21.0; pnpm 12.4.1. First `pnpm test` red run: 33 tests, 30 pass,
  1 expected failure, 2 integration skips. Catalog regression expected explicit
  image/video sample media but received `undefined`, not an import/runner failure.
- Added pure adapter tests against callable minimal implementations before filling
  in behavior. Targeted native-runner red run: 3 tests, 1 pass and 2 expected
  assertion failures (single/mixed projection returned `[]`; valid HTTPS returned
  `undefined`). Logs: `/tmp/opencode/spec005-t2/{red,adapter-red}.log`.
- Green `pnpm test`: **39 tests, 37 pass, 0 fail, 2 skipped**. Coverage includes
  source hashes/dimensions, explicit image-first sample flags, both localized
  resolvers, absent/empty/single/mixed sequences, synthetic add/reorder, JSON
  serializability/nonmutation, Home boundary and safe/unsafe URL cases. Existing
  message parity passes. Fixtures exist only in tests; none modifies the catalog.
- `pnpm exec next typegen`: pass.
- `pnpm lint`: pass.
- `pnpm exec tsc --noEmit`: **fail**, reproducible TS5097 at catalog.ts(4,35).
- `pnpm build`: **fail**, same TS5097 after successful application compilation;
  no successful new production build or build identity is claimed.
- `git diff --check`: pass (also repeated after this evidence append).
- Diagnostic only, no file change: `pnpm exec tsc --noEmit
  --allowImportingTsExtensions` passes. This isolates the cause to the compiler
  option required for the explicit `.ts` runtime import. Normal compiler settings
  were not relaxed and failed mandatory checks are not represented as passing.
- Default runs deliberately omit the explicit-origin 404/icon integration checks;
  those two skips are not integration proof. Dev/production explicit-origin runs
  and full browser matrices remain later tasks, not completed here.

### Limited browser preservation evidence and handoff

- Verified existing port3000 belongs to Next PID21680, parent CLI21662 and
  pnpm21562; CWD is this repository. Preserved that user server without stopping
  or restarting it. No validation server was started.
- Chrome DevTools MCP on the current dev source: before/after English Home article
  text and media-source projections match exactly. All nine carousel-copy articles
  retain their original project names/categories and “Preview forthcoming”; no
  sample image/video source is mounted. Local comparison files:
  `/tmp/opencode/spec005-t2-home-{before,after}.json`.
- Direct en/es Projects visits retain h1, all three ordered h2s and original
  localized pending-detail copy; zero inline images/videos, as expected before T3.
  This is a narrow render-preservation check, not gallery visual, console, full
  responsive, playback or production acceptance. The owned isolated tab was closed;
  existing tabs/server were preserved.
- Hash comparison before evidence append: only the six intended existing source/
  message/test files changed, the two old sample names are absent with identical
  bytes at their new names, and new media/test files were added. All other baseline
  files, including protected documents and Home/UI/assets, retain their hashes.
- No pre-existing validation failure was identified. TS5097 is introduced by this
  task's required cross-module runtime import and must be resolved before T2 can
  complete. Coordinator must authorize the narrow compiler-option scope adjustment
  or reconcile the approved import/configuration constraints; this implementer
  does not change the plan or improvise another module architecture.
- Traceability: partial data/localization work for RF-1, RF-2, RF-9–12 and RNF-5/6;
  no claim of completed UI requirements. No staging, commit, push, deployment,
  publication, dependency install or subsequent task work occurred.

## T2 — Authorized compiler compatibility resolution and completion (2026-10-15)

**Current disposition: T2 complete; the preceding blocked attempt is historical.**
Only T2 is completed here; T3 and later tasks have not been started. No publication
is authorized, and the later explicit-origin/browser/playback gates remain pending.

### Authorization and minimal resolution

- Reread AGENTS, constitution, MEMORY, approved spec, updated plan/tasks, preceding
  validation evidence and current T2 source/tests. Spec and joint plan/tasks remain
  approved; T1 remains complete and T2 was unchecked at resumption.
- The updated approved plan/tasks record the coordinator's question:
  **“¿Autorizas añadir allowImportingTsExtensions a tsconfig.json y reflejar ese
  ajuste mínimo en el plan? No cambia diseño ni dependencias.”** The owner answered
  **“Lo autorizo”**. This is the narrow T2 compiler-option authorization, separate
  from T1's earlier audio disposition; no exact response time is supplied.
- Added only `compilerOptions.allowImportingTsExtensions: true`. Parsed comparison
  with HEAD confirms every other option is identical, including `noEmit: true` and
  `strict: true`. No diagnostic suppression, emitted JS, runtime compiler, loader,
  dependency/script change, import workaround or relaxed type check was introduced.
  Native Node 24 runtime imports retain explicit `.ts` extensions.
- No additional behavior/test changes were necessary for this compatibility-only
  step. The genuine failing assertions and subsequent green data tests from the
  preceding TDD cycles remain recorded above, not relabelled as a successful first
  typecheck/build attempt. Normal typecheck/build now verify the previously blocked
  configuration path, without a command-line compiler-option override.
- Context7 documentation lookup was attempted but unavailable due to its API-key
  configuration error. No credential was supplied or changed. The installed
  TypeScript option contract, earlier isolated diagnostic and successful normal
  validations support this explicitly approved compatibility adjustment.

### Fresh six-check results

Executed on Node **v24.21.0**, pnpm **12.4.1**, with the final T2 application and
compiler configuration:

| Command | Result |
| --- | --- |
| `pnpm exec next typegen` | Pass |
| `pnpm lint` | Pass |
| `pnpm exec tsc --noEmit` | Pass, no diagnostic override |
| `pnpm test` | Pass: 39 tests, 37 pass, 0 fail, 2 skipped |
| `pnpm build` | Pass, build `E43fdX6Url5ZB3lswCl4J` |
| `git diff --check` | Pass; repeated after evidence/checkbox updates |

Logs: `/tmp/opencode/spec005-t2/resolved-{typegen,lint,typecheck,tests,build,diff-check}.log`.
The default-run skips are the explicit-origin localized404 and site-icon integration
contracts, not passing integration evidence. Both-mode explicit-origin runs remain
T6; no production server/browser check is claimed here. Message parity and all T2
media/configuration cases pass. No new regression or pre-existing validation failure
was found in these checks.

### Integrity, unchanged scope and downstream contract

- Fresh hashes/sizes match T1 at the renamed paths exactly:
  `public/images/pruebas/demo-image.png`, 310566 bytes,
  SHA-256 `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`;
  `public/images/pruebas/demo-video.mp4`, 7722052 bytes,
  SHA-256 `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.
  No further rename/source modification or asset-folder change was made.
- Saved `/tmp/opencode/spec005-t2/resume-baseline.json` before this resumption's
  edit. Comparison before the evidence append found exactly one changed baseline
  file: `tsconfig.json`. Previous T2 code/tests/messages/assets and all other source,
  Home/About/shared UI, local agent/config/backup and protected files are unchanged.
  Existing coordinator/planner MEMORY/plan/tasks updates are part of that resume
  baseline, not an implementation preservation failure. This completion changes
  only the config option, this appended evidence and T2's checkbox; the staged diff
  remains empty. No generated artifact was hand-edited.
- The preceding MCP Home comparison (nine unchanged placeholder articles, no
  samples) and en/es Projects content/order checks are still applicable: this
  resumption changes no source, messages or rendering behavior. They were not
  unnecessarily repeated or broadened into a claim of full visual/playback QA.
  No server/tab was started, stopped or otherwise managed during this resumption.
- T3's available contracts: `Project.media?: readonly ProjectMedia[]`, where each
  item has `id`, discriminant `kind` (`image`/`video`), `src`, positive inspected
  `width`/`height`, `isSample` and localized `alt`. `ProjectEntry.media` uses
  `ProjectMediaDescriptor` with typed `alternativeKey` instead of `alt`.
  `media.ts` exports `SAMPLE_MEDIA_PAIR`, `resolveProjectMedia(media, translate)`
  and `resolveProjectLiveUrl(liveUrl)`. The three catalog entries explicitly share
  the image-first/video-second pair; absent/empty media never receives a fallback.
  `getProjects` resolves serializable alternatives and the safe optional live URL.
  Home `images` stays empty; no live destination is configured.
- Matching typed message keys under `Projects.media`: `sampleLabel`,
  `sampleExplanation`, `empty`, `unavailable`, `galleryLabel`, `previous`, `next`,
  `position`, `openImage`, `openVideo`, `videoPreview`, `viewerLabel`, `close`, and
  `alternatives.sampleImage` / `alternatives.sampleVideo`. Identity-dependent labels
  use `{title}`; position also uses `{current}` and `{total}`. Later client work must
  receive server-resolved serializable labels because the locale provider retains
  `messages={null}`; this step does not add a client translator or UI.
- Traceability: T2's data/localization/configuration portion of RF-1, RF-2, RF-9–12
  and RNF-5/RNF-6 is satisfied. Gallery rendering, selection, styling and modal/video
  lifecycle remain separate future tasks. T1's owner-attributed audio review limit
  and later real-browser playback requirement remain unchanged.

All T2 completion criteria and applicable checks now pass. Only T2's checkbox is
updated. No MEMORY/AGENTS/spec/plan edit, staging, commit, push, publication,
dependency install or subsequent task implementation was performed.

## T3 — Independent manual gallery selection (2026-10-15)

**Disposition: T3 complete only.** Traceability: selection/rendering portions of
RF-1–4, RF-9, RF-11, RF-12 and RNF-2/4/6. The two visual compositions are exposed
as state, not styled as the completed T4 presentation. Enlargement/player lifecycle
is T5: this intermediate version intentionally has no pretend opening action or
inline player. No final-spec visual acceptance or publication is claimed.

### Scope, contracts and TDD

- Read AGENTS, constitution, MEMORY, approved spec/plan/tasks, preceding validation,
  current project model/projection/messages/list and read-only Home consumers.
  Approvals and T1/T2 completion were confirmed; T3 was pending. Protected the
  existing dirty tree, including prior T2 changes and local agent/config/backups.
- `gallery-state.ts` exports `normalizeGalleryIndex(index, count)` and
  `transitionGalleryIndex(index, count, "previous" | "next")`, returning null for
  zero media and a modulo-normalized index otherwise. `getGalleryComposition`
  returns `initial` exactly at normalized zero, `expanded` at every later item.
  Inputs are explicit; no sticky advancement flag, global state or persistence.
- Added four native Node tests. Red `pnpm test`: 43 total, 38 pass, three expected
  assertion failures, two integration skips. The failures were actual missing
  cycling, normalization and independent updates against callable minimal stubs,
  not import/runner failures. Green and final runs: 43 total, **41 pass, zero fail,
  two skips**. Tests cover zero/one/two/many, both directions, four full cycles,
  every nonzero composition, out-of-range indices and independent selections.
- Server `ProjectList` keeps stable slug keys, original h2/copy/status/links and
  localized empty-list handling. It passes resolved serializable labels and
  positions into a client `ProjectGallery`; no client translator/provider change.
  Gallery props are optional readonly `media`, `labels`, server `children` and
  optional `className`. Labels: gallery, previous, next, positions[], sampleLabel,
  sampleExplanation, empty, unavailable, videoPreview.
- Each client instance owns its index and failures keyed by media ID/source.
  Stable article `data-composition`, copy wrapper `data-project-copy`, preview
  `data-media-preview` / `data-media-id`, heading, status and arrows provide T4's
  local composition hooks without duplicated trees. Example: `[0,0,0]` → first
  Next `[1,0,0]` → second Previous `[1,1,0]` → first Next `[0,1,0]`.
- Native images retain inspected dimensions and honest alternatives. Static video
  text mounts neither video nor audio. Zero/one omit arrows. Status is atomic,
  polite and project-specific. Straightforward local utilities reserve 44px arrow
  targets and visible focus; no CSS Module/global styling was changed.
- A browser regression fixture found a broken SSR image could finish failing
  before hydration attached onError. Reproduced on reload: complete=true,
  naturalWidth=0, empty preview text; dispatching error after hydration produced
  the correct unavailable text. Added an image callback-ref check for that already
  failed state, retaining onError for later failures. Fresh direct en/es fixture
  visits now show the explanation immediately and navigation remains focused.
  Evidence: `initial-error-red.json`, `fixtures-{en,es}-green.json`.
- Read installed Next `use-client.md` before composing the client boundary.
  Context7 lookup for callback refs was attempted but unavailable because of its
  API-key configuration; no credential or dependency was changed. Native images
  are explicitly planned; their narrow lint-rule exception is documented inline,
  rather than introducing Next Image API behavior.

### Final mandatory validations and source identity

Node v24.21.0 / pnpm 12.4.1. All six commands pass on restored final source:
`pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`,
`pnpm build`, `git diff --check`. Production build: **6MG2SqDjPQnYpXyKlW641**.
Logs: `/tmp/opencode/spec005-t3/final-{typegen,lint,typecheck,tests,build,diff-check}.log`.
The two skipped explicit-origin 404/icon contracts are not integration proof;
both-mode explicit-origin checks remain T6. No new failing validation remains.

Final source SHA-256:

| File | SHA-256 |
| --- | --- |
| project-list.tsx | `1b4adfa48c4cfbbe4a26cd529906eca0fa42211e9f8fe4f5e58beb84c1741e67` |
| project-gallery.tsx | `97f07ca6dc2051ddc747880d3282bb042513e62b2b4d368d0afcb9164fc15fb0` |
| gallery-state.ts | `14f09f666fcdbdd5bcfe8d8546a5f1bb5177542077817950c55a93815d506bb4` |
| project-gallery-state.test.mjs | `bafafcfcaf131bb03094d42517410a86323f1da20ead5a022e33766b806e9201` |

### Chrome DevTools MCP checks and limits

- Existing dev `http://localhost:3000`: Next PID21680, parent CLI21662/pnpm21562,
  CWD verified as this repository. Preserved without stop/restart. No production
  server was started; browser checks here are dev only, not T6–T8 completion.
  Used and closed only isolated owned tab/context `spec005-t3`.
- Eight conditions: en/es × light/dark × 390/1440, height900, normal text. Each
  final-source row checks six arrow activations on two projects: 48 transitions,
  both-direction wrapping/reset, unchanged third project, identity-stable heading/
  preview/arrows, focused activated button, correct project-specific position and
  zero media players. All pass. Final rows also use reduced motion; earlier rows
  exercise default motion. Actual data-theme and viewport were measured, not
  inferred. New content had no overflow at these widths; arrow boxes were50×44px.
- Earlier eight passive rows retained selections after a synthetic mouseenter,
  page scrolling and1.2s observation, with zero video/audio elements. Source adds
  no timers, hover/scroll handlers or global arrow handling. This finite check is
  not a claim of exhaustive elapsed-time or pointer-device coverage.
- Actual MCP click and native Enter on English Next, and click/native Space on
  Spanish Previous, restore zero with focus retained. Keyboard focus outline was
  visible (measured3px). Accessibility snapshots expose distinct gallery regions,
  image alternatives, video type/sample explanation and polite status updates.
  Real screen-reader speech is not verified. Locale-link client navigation keeps
  Projects and resets selection; reload also resets. No persistence was added.
- Temporary local ProjectList fixtures, never a route or catalog change: empty
  list in en/es, zero-media project, one valid image, and three mixed items with
  an actual missing-image404. Zero/one show no arrows; broken item shows localized
  unavailable copy on initial hydration and revisits. Both directions reach the
  static video and valid third image without inherited failure, focus loss or
  inline player. Fixtures were removed and original final list hash restored
  before final six checks and eight final browser rows.
- No new application console error/warning in final rows. Chrome repeats the
  known shared theme-select missing-id/name issue (already in MEMORY; unchanged
  source). Intentional fixture404 is test evidence, not a production defect. No
  unrelated issue was repaired. The known extreme-text header overflow is outside
  these rows; no all-site/full-matrix overflow-free claim is made.
- Evidence under `/tmp/opencode/spec005-t3/`: final eight JSON rows, passive rows,
  bilingual fixtures/empty-list results, keyboard/locale/reload results, accessible
  snapshot and an intermediate desktop screenshot. T4 visual transformation,
  T5 opening/playback, production, other widths/text settings, full contrasts,
  real native playback/audio and independent/final owner review remain later gates.

Baseline hash comparison before evidence/checkbox edits found only intended list
source changed plus tool-generated ignored `tsconfig.tsbuildinfo`; three intended
new implementation/test files were added. No generated file was hand-edited.
Other baseline files, including MEMORY/spec/plan/AGENTS/constitution, prior T2
data/messages/config/tests, Home/About/shared source and original sample hashes
remain unchanged. PNG/MP4 hashes still exactly match T1. Only T3's checkbox and
this evidence are additionally updated. No install, staging, commit, push,
publication or subsequent-task implementation occurred. T3 has no blocker.

## T4 — Responsive two-composition presentation (2026-10-15)

### Scope and implementation

- Confirmed approved spec/plan/tasks and completed T1–T3 before editing. Baseline
  manifest: `/tmp/opencode/spec005-t4/baseline.json`. Existing local agent/backups,
  coordinator MEMORY changes and all preceding implementation work were retained.
- Feature-local CSS grid derives layout from T3's existing `data-composition`.
  Initial desktop uses large left title/copy and actual right media. Every nonzero
  selection uses compact title/copy above full-width media. The existing heading,
  preview wrapper, status and arrows stay mounted; only styles/content change.
- Reused semantic palette, Cormorant Garamond/Manrope and existing main rail.
  Restored display of the authoritative existing category, without modifying any
  catalog/message content. Quiet asymmetric padding/frame surrounds the uncropped
  full PNG; its inspected 640×360 dimensions reserve the correct ratio. Static
  video preview uses its actual 16:9 ratio and localized type/description, never a
  fabricated capture or inline player. No live destination/action was added.
- Narrow toolbar stacks status before controls; arrows wrap further when required
  by native text growth. Controls are at least44px, with external3px focus outlines;
  no mask/clipping ancestor obscures them. No transitions are introduced, so both
  normal and reduced motion use the same instantaneous layout states.
- Minimal planned Projects-page composition hook imports the feature CSS Module
  and sets its content grid to `minmax(0, 1fr)`. This prevents the unchanged intro
  heading's intrinsic width from widening the new list at extreme text settings;
  no shared stylesheet or intro typography was repaired. No new framework API.
- T5 remains untouched: previews do not yet open a viewer. Existing translated
  enlargement wording is preparation, not evidence of a functioning modal/player.

### Final mandatory checks

Node **v24.21.0**, pnpm **12.4.1**. After restoring temporary fixtures, all six
commands passed: `pnpm exec next typegen`, `pnpm lint`,
`pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`, `git diff --check`.
Tests: **43 total,41 passed,2 skipped,0 failed**. Skips are the existing explicit-
origin404/icon integrations; default-run skips are not integration proof. Both
origin modes remain T6. Final build: **96ujmd7jctUps9oEY3KV-**.
Logs: `/tmp/opencode/spec005-t4/final-{typegen,lint,typecheck,tests,build,diff-check}.log`.
No production browser run is claimed. No application tests were added/changed:
this task changes presentation, not the tested transition/domain logic. Real
browser geometry, focus and visual evidence were used instead of CSS/source tests.

### Fresh initial browser batch, not final acceptance

- Chrome DevTools MCP against preserved dev `http://localhost:3000`, Next PID21680,
  parent CLI21662, repository CWD and listening port verified. Owned isolated tab4
  context `spec005-t4`; no user page/server was stopped. No new app server needed.
- **24 final MCP conditions**, height1000: en/es × light/dark × normal text at
  390/768/1024/1440, plus150% text at320/1440 with native-default16. The768 and150%
  rows also enable reduced motion. Root font sizes16/24px were measured.
- **8 supplementary native-default24 conditions**, height1000: en/es × light/dark
  ×320/1440 at150% text. Separate owned Chrome PID156816, loopback CDP9258, profile
  `/tmp/opencode/spec005-t4/profile24/`. Actual browser preferences set both default
  font sizes24; unstyled root and `medium` both measured24px, then percentage text
  growth produced36px. This is not root-size substitution for a native default.
  MCP disallows chrome-settings navigation; this local CDP supplement covers that
  limitation without modifying the user's browser/profile or installing tools.
- Across32 conditions: **128 first-project transitions** (Next, Next, Previous,
  Previous) verify both-direction full geometry/type reset, stable heading/preview/
  arrows and focus on the activated arrow. Another64 second-project activations
  verify independent state. Other two projects remain initial during each first-
  project cycle. Targets range44×44 through99×99px. No video/audio DOM or live link.
  Snapshot exposes one h1, project h2s and project-labelled regions/status/actions.
  Actual MCP Enter then Space also expanded/reset with visible3px focus retained.
- Geometry examples (same across locales/themes): at1440, initial title x104.5,
  font68.48px, media x656.25/width664.25; expanded font42.24px, media x104.5/width1216
  (**83% wider**). At1024, font59.08→37.54px and media493.05→902.59px. Both-direction
  return restores the exact measured original positions, sizes and media region.
  At390, title48→32px, media335px in both vertical states. Native24/150% at320:
  title108→72px, media215px, contained99px controls wrap vertically. At1440 with
  native24/150%, composition reflows vertically and media remains1281px wide.
- No introduced gallery overflow, hidden text or clipped focus in these rows.
  Extreme320/native24/150% retains document width347px: the inherited shared header
  still overflows. The unchanged Projects intro h1 also exceeds its215px rail
  (intrinsic width274.06px). Browser isolation shows347px with galleries removed
  and still347px with main removed. Final new gallery/copy/media remain215px wide,
  end at x260, and contribute no extra extent; intro/shared issues are not repaired.
  Do not describe this condition or the full site as overflow-free.
- Temporary local server-list fixtures (no catalog/route changes): zero media,
  one image, and an initially broken image followed by static video. en/light390,
  es/dark1440, es/light320 at150% show truthful localized empty/unavailable copy,
  zero/single omit arrows, failed-media navigation remains focused and reaches the
  video preview without playback or overflow. Original list hash restored before
  final checks; final visit confirms all three real sample pairs and two arrows.
- Measured contrast light/dark respectively: normal foreground7.39/13.61,
  muted6.21/11.91, video copy5.57/7.62, control borders3.20/5.58 and focus7.39/13.61.
  Hover surface border3.05/4.09, icons/focus7.04/9.98. Required4.5 text and3 control
  thresholds pass. Values are rendered semantic-color measurements, not guesses.
- Human-reviewed captures: `es390light-initial.png`, `es1440dark-initial.png`,
  `es1440dark-expanded.png` (full page); inherited extreme screenshot separately.
  All evidence under `/tmp/opencode/spec005-t4/`, including32 condition JSON files,
  `probe.js`, `native24.mjs`, fixtures, keyboard/snapshot and intro diagnostics.
  Intermediate evidence is kept separately, not represented as final source.
- No application console errors. Known shared theme-select id/name issue remains.
  A dev preload warning for unchanged `page-content` CSS was observed after normal
  navigation; stylesheet/layout render correctly, but its provenance is not proven
  pre-existing and no preload/routing workaround was attempted. Probe Canvas2D
  readback warning is harness-only; fixture image404 is intentional. Production
  resource-hint behavior remains unverified, not silently treated as passing.
- Full dev/prod160-condition matrix, native playback/modal/focus lifecycle,
  independent QA and owner visual acceptance remain T5–T10; this is only T4's batch.

### Preservation and disposition

Baseline hashes differ only for `project-gallery.tsx`, `project-list.tsx`,
`project-list.module.css` and the minimal Projects-page hook, before this evidence
and T4 checkbox. No other task/code was changed. MEMORY/spec/plan/AGENTS/constitution,
all prior data/messages/tests/configuration, Home/About/shared source, fonts,
SVG/photo/favicon files and supplied demo bytes remain equal to baseline.
PNG SHA-256: `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`.
MP4 SHA-256: `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.
No dependency/install, compiler option change, global redesign, staging, commit,
push or publication. T4 meets its initial-check gate; no blocking related failure.
Owned MCP tab4 and native24 Chrome156816 were closed after ownership verification;
the original dev server21680/localhost:3000 remains running and unchanged.

## T5 — Selected-media modal and exclusive playback (2026-10-15)

**Disposition: T5 complete only.** Covers RF-5–8, RF-11/12 and the task-scoped
parts of RNF-1/2/4–6. T6 integrations, T7's full matrix, T8's broader interaction/
preservation suite, independent review and owner acceptance remain pending.

### Implementation, decisions and red/green evidence

- Confirmed approved spec/plan/tasks and completed T1–T4; read current contracts,
  gallery/list/styles/messages and preceding validation. Baseline manifest:
  `/tmp/opencode/spec005-t5/baseline.json`. Preserved the dirty working tree.
- Added the planned small client native `dialog` and local CSS Module. Only the
  selected media is mounted. Reused existing server-resolved en/es messages,
  authoritative project title, semantic colors/fonts and sample explanation.
  Stable, labelled native media-opening buttons support click, Enter and Space;
  the existing preview wrapper, heading and gallery navigation stay mounted.
- Top-layer native modality supplies background inertness and native focus
  navigation, including video shadow controls. A second opening is rejected while
  any native modal is active. Close receives initial focus. The full-viewport
  backdrop is black at72% with9px backdrop blur; media and controls are not filtered.
- Bounded flex header/sample region and dynamic viewport stage use `object-fit:
  contain`, without crop/distortion, animations or new viewer tools. App Close is
  at least44px; browser video control semantics/language/size remain browser-owned.
- Explicit fixed-body/root-overflow lock compensates actual released scrollbar
  space (including existing stable gutters). Cleanup restores individual prior
  inline values/priorities, including independently configured overflow axes.
  Normal exits restore the connected originating trigger with preventScroll and
  captured page position; unmount releases resources/styles without explicitly
  scrolling or focusing the new route. No routing API or shared shell change.
- Outside dismissal requires primary pointer press AND release geometrically
  outside the dialog. Media/control bubbles and content-to-backdrop drags do not
  close it. Close, native cancel/close and unmount share lifecycle cleanup.
- Inline video remains static text: no inline player. Enlarged video has native
  controls, no autoplay and starts paused. Every exit/error pauses, clears src and
  reloads/releases the old player before removal; reopening never resumes it.
  Failures are reported by media ID/source, not across projects. A playback error
  moves focus from the removed native player to Close and leaves localized feedback.
- Browser red before implementation: no enlargement button/dialog. No artificial
  Node DOM/source tests or new test dependencies were added. Existing pure/domain
  tests are unchanged; meaningful DOM/media regressions use actual Chrome instead.
- Two real browser regressions were reproduced before minimal fixes:
  (1) Strict Mode setup/cleanup/setup queued `close` while the dialog was already
  reopened, immediately unmounting it; ignore a stale close event on an open
  dialog. (2) distinct overflow-axis priorities were lost by shorthand-only
  restoration; snapshot/restore the individual axes. Red/green JSON is retained.
  A playing-error probe also exposed focus on BODY after player removal; fresh
  green error checks now retain Close focus. No known new related failure remains.
- Read installed Next `use-client.md`; no new rendering/routing/Image API was
  introduced. Context7 React lookup failed with the existing API-key configuration
  error; no credential/install/workaround was introduced. Native browser evidence
  and installed guidance were used, not a fabricated documentation result.

### Final six checks and source identity

Node **v24.21.0**, pnpm **12.4.1**. All six pass on the restored final source:
`pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`,
`pnpm build`, `git diff --check`. Tests: **43 total,41 pass,0 fail,2 skips**.
The skipped explicit-origin404/icon contracts remain T6, not passing integration
evidence. Final production build: **HH9Y_ZqQimk2OwlpiH-op**. No production server
or production browser validation is claimed. Logs: `spec005-t5/final-*.log` under
`/tmp/opencode/`; final five-source hashes: `final-source.sha256` in that directory.

### Fresh bounded browser verification

- Chrome DevTools MCP, isolated owned tab5/context `spec005-t5`, against actual dev
  `http://localhost:3000`. Existing Next PID21680/CLI21662/pnpm21562 and repository
  CWD verified; server preserved. Eight final MCP conditions: en/es × light/dark ×
  390/1440, height900, normal text, reduced motion. Each checks selected image and
  video:16 measurements of modality, viewport fit, reachable Close, initial focus,
  paused video and no additional player. Actual MCP Enter/Space open the focused
  trigger; snapshot exposes localized labelled modal, identity/sample and native
  controls. This is not the160-condition T7 matrix or a screen-reader speech test.
- Supplemented native coordinate/wheel/keyboard interaction using an owned local
  Chrome process163664, CDP127.0.0.1:9259, isolated profile under the evidence
  directory, no dependency installation. `browser-check.mjs` exercises the same
  eight conditions × image/video × Close/Escape/backdrop: **48 passing cases**.
  Each verifies a single modal, blocked underlying focus/second opening, real
  wheel lock, outside drag immunity, Tab/Shift-Tab never reaching a background
  page action, original trigger/scroll200px/styles restored and other galleries
  unchanged. Native video shadow focus reports VIDEO, not a light-DOM button.
  Chromium can Tab into browser chrome (document BODY/hasFocus=false sentinel)
  and back; this is not treated as focus reaching inert page controls. No custom
  trap that would skip native controls was added.
- `lifecycle-check.mjs`: native coordinate Play actually decodes the original
  H.264/MP3 recording, time advances, readyState4 and no media error. Native Space
  pauses and resumes. For each of three close methods, eight Web Audio analyser
  samples prove non-silent output during playback, followed by output RMS0,
  paused/disconnected/src-cleared old player and zero mounted players. Reopening
  is paused at time0. This is a technical audio-output check, NOT agent listening,
  acoustic/device-output assurance or audio-content/privacy review; T1's separate
  owner-attributed authorization remains unchanged.
- A real Next client history exit from Projects back to About while playing also
  has eight non-silent samples followed by RMS0, disconnected/released player,
  restored body styles, new-route scroll0 and no focus restoration to the detached
  trigger. A forced actual missing-resource error while playing likewise stops
  output and retains Close focus. No global navigation API or route was added.
- Real network-blocked image/video requests in BOTH locales show honest localized
  feedback, one modal, available Close and no surviving video player; closure and
  subsequent gallery navigation work. Blocks/cache emulation are harness-only;
  no delivered catalog/media fixture remains. Selection/failure state is local.
- Open paused video resize:320×900,900×390,390×900,1440×900. Same player/selection,
  time0/paused state, full contain fit and Close in viewport throughout. Independent
  priority-bearing inline overflow/padding rules restore exactly. Temporary local
  refresh-only attribute verified real Fast Refresh setup/cleanup with open video:
  one paused modal, focus inside, then no player/scroll-lock leak after Escape.
  Attribute removed and six checks rerun on final source afterwards.
- Fresh rendered contrast light/dark: viewer text7.39/13.61, Close text7.04/9.98,
  Close border3.05/4.09, focus against dialog7.39/13.61. Close height44px and width
  approximately111px; media action exceeds44px. Media filter is none. Native
  volume/progress keyboard coverage is not claimed here; broader T8 remains due.
- Reviewed actual captures: `es390dark-image-modal.png`,
  `es1440light-video-modal.png`, and initial/expanded full-page captures. Backdrop
  darkens/blurs viewport edges/chrome while media/header/controls remain clear.
  All JSON, captures and local harnesses are under `/tmp/opencode/spec005-t5/`.
- Final normal-source console: no application errors. Existing shared select
  missing-id/name issue remains; shared page-content CSS preload warning also
  occurred before T5 edits and in T4. Neither was repaired. Intentional blocked/
  missing-resource failures belong only to error probes. The inherited extreme-
  text header/intro overflow is not reclassified as fixed or newly tested here.

### Preservation and handoff

Before evidence/checkbox edits, baseline comparison changes exactly gallery,
server list and local list CSS; only viewer TSX/CSS are new repository files.
MEMORY/AGENTS/constitution/spec/plan, prior domain/messages/tests/configuration,
Home/About/shared chrome/globals, fonts/icons and local agent/config/backups retain
baseline hashes. Source PNG remains310566 bytes, SHA-256
`52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`;
MP4 remains7722052 bytes, SHA-256
`bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.
No source transcode/mute/alteration, install, dependency/configuration change,
staging, commit, push, publication or later-task implementation. Only T5 is marked
complete. Owned tab/Chrome resources are closed after ownership verification;
the existing dev server remains preserved. Full both-mode checks, native-control
supplements, matrix, independent QA and owner acceptance remain later gates.

## T6 — Final static/domain and actual-server integration checks (2026-10-15)

**Disposition: T6 complete only.** Traceability: static/domain and HTTP integration
portions of RF-1–4, RF-9–12 and RNF-5/6. T7/T8 browser validation, independent
review and explicit final owner acceptance remain pending. This does not close
the specification, accept the prototype visually or authorize publication.

### Preconditions, unchanged source and preservation

- Read AGENTS, constitution, MEMORY, approved spec/plan/tasks, preceding validation,
  actual tracked diff, current gallery/viewer/domain code and integration tests.
  Approvals are recorded, T1–T5 are complete and T6 was pending. AGENTS supplies
  all six required commands. No requirement/configuration ambiguity was found.
- Actual HEAD remains `c5ee587370113b4688c9c7f2e9178cbf8466a5fa`; staged diff is
  empty. The existing dirty tree is prior owner/coordinator/task work, not a clean
  checkout. Saved all **158** tracked/nonignored file hashes before validation at
  `/tmp/opencode/spec005-t6/baseline.json`; none changed before evidence edits.
- Current application/public/test/config manifest has **102 files**, stored as
  sorted `SHA256  path` lines in `source.sha256` in that directory. Manifest hash:
  **`4ce88010d69e1fc6636f2c90afa77ead293cec8cdbe2783f2cc585b581d5e98b`**.
  All five T5 final gallery/list/viewer source hashes still match. No temporary
  refresh attribute, fixture route, synthetic project/media/link or catalog edit
  was introduced by T6; the final three explicit image/video sample pairs remain.
- Compared with T1, the eight modified original source/message files, existing
  project test and approved compiler addition match the prior tasks' scope.
  Original MEMORY/plan/tasks coordination differences predate T6. All **70** other
  original `src/` and `public/` files match T1, including Home/About/shared chrome,
  globals, fonts, SVG/photo assets and favicon assets. All **29** original local
  agent/config/backup files match T1. No folder was populated/reorganized.
- Parsed en/es catalogs equal HEAD after removing only `Projects.media`; existing
  translations are preserved. Parsed tsconfig equals HEAD after removing only
  `allowImportingTsExtensions: true`; `noEmit` and `strict` remain true. No other
  compiler option, dependency, lockfile or build-script permission changed.
- Byte-preserving renames still match the original T1 sources exactly, locally
  and when fetched from both real origins:

| Current source | Bytes | SHA-256 |
| --- | ---: | --- |
| `public/images/pruebas/demo-image.png` | 310566 | `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3` |
| `public/images/pruebas/demo-video.mp4` | 7722052 | `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd` |

T1's sample-specific owner-attributed audio-content authorization remains the
privacy disposition. T6 makes no new listening/content-review claim; T5's native
playback/audio-output measurements remain technical evidence, not human hearing.

### Fresh mandatory outcomes

Node **v24.21.0**, pnpm **12.4.1**, unchanged final T5 application source:

| Command | Result |
| --- | --- |
| `pnpm exec next typegen` | Pass |
| `pnpm lint` | Pass |
| `pnpm exec tsc --noEmit` | Pass, no diagnostic override |
| `pnpm test` | Pass: 43 total, 41 pass, 0 fail, 2 skipped |
| `pnpm build` | Pass: **`2D56QDfMukWPlhbYq1O6x`** |
| `git diff --check` | Pass; repeated after evidence/checkbox edits |

The default run's two skips are explicitly not integration proof. Fresh additional
runs used BOTH variables together, with the exact verified loopback origins:

```bash
LOCALIZED_404_TEST_ORIGIN=http://localhost:3000 SITE_ICONS_TEST_ORIGIN=http://localhost:3000 pnpm test
LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 SITE_ICONS_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test
```

**Each mode: 53 tests, 53 pass, 0 fail, 0 skipped, 0 cancelled, 0 todo.** The
increase from43 is the10 executed nested HTTP subtests, not ten newly authored
tests. Both integration parents actually execute. Localized404 checks alternate
en/es despite contrary locale cookie/header: four missing/nested documents return
genuine404, six Home/About/Projects documents return200, all HTML without redirects.
Icon checks verify six actual head links across en/es Home/About/Projects/global404,
then fetch all six assets with image MIME/200 and compare supplied bytes.
These are HTTP contracts, **not native browser no-script recovery/focus proof**;
that broader preservation coverage remains T8.

Logs under `/tmp/opencode/spec005-t6/`: `typegen.log`, `lint.log`, `typecheck.log`,
`tests-default.log`, `build.log`, `diff-check.log`, `tests-dev.log` and
`tests-production.log`. No tests were created/modified, and no red/green change
was necessary: T6 validates existing behavior without implementing new logic.
No failing mandatory validation or new related regression was found.

### Verified origin/build/static-resource identity and cleanup

- Development: **`http://localhost:3000`**, existing Next PID**21680**, CLI21662,
  pnpm21562. Production: **`http://127.0.0.1:3111`**, owned Next PID**171673**,
  shell171672, pnpm171573. `/proc` CWD for both servers and pnpm processes resolves
  to `/home/jorge/Projects/web/career-launch/portfolio`; listener ownership verified
  with `ss`. Port3111 was free before starting the owned server using
  `pnpm start --hostname 127.0.0.1 --port 3111`, after the new successful build.
- Real en/es Projects HTML on both origins returns200, with three current
  `project-list-module__1lRKNq__project` initial articles, three640×360 sample
  images, serialized1920×1080 video descriptors and no inline video/audio element.
  Actual linked stylesheets return200 and contain current composition selectors,
  viewer `::backdrop`,9px blur and `object-fit: contain`. Both media requests return
  correct PNG/MP4 MIME and original bytes. Production HTML carries the exact fresh
  BUILD_ID above. This is source/resource health evidence, not visual validation.
- Linked feature CSS identity (SHA-256 of actual HTTP response bytes):

| Mode | Stylesheet | SHA-256 |
| --- | --- | --- |
| Dev | `/_next/static/chunks/src_components_1ka33_4._.css` | `32504a5157dc8ef27e4acc81afb99c22b555889f1f761f73915595ef42f2d6a7` |
| Production | `/_next/static/chunks/2j1z0_iwu7sxf.css` | `8414cc27f85de1b6c55c481c750dcf2bb46ec7ac124e9a5ce7e5607ae34f18d8` |

- Full response/resource hashes and checks: `http-identity.json`, saved localized
  Projects HTML, `integrity.json`, and `production-server.log` in the evidence
  directory. T7/T8 can reference this unchanged source/build identity, but must
  reverify any server they use; a closed port is not a live validation origin.
- After both suites, reverified owned production PID/CWD/parent and sent SIGTERM
  only to171673; its launch command exited143 as expected for cleanup. Port3111
  is released. Existing dev21680/port3000 is preserved, not restarted/stopped.
  No browser/tab/profile was created. No unknown process was managed.

Only this evidence and T6's checkbox change. No application/test/config/assets,
MEMORY, AGENTS, constitution, spec or plan edit; no generated hand-edit, install,
lock repair, cache clearing, Git configuration/staging/commit/push or publication.
Existing shared theme-select id/name and CSS preload warnings were not repaired
or reclassified; no browser console/visual claim is made by this static/HTTP task.
No pre-existing failing validation was encountered. The inherited extreme-text
overflow and later native/browser coverage remain explicitly outside T6. No T6
blocker or new technical design decision remains; T7–T10 stay unchecked.

## T7 — Full layout measurements; focused-control blocker (2026-10-15)

**Disposition: T7 incomplete. Its checkbox remains unchecked; T8 was not started.**
The 160-condition measurement batch is fresh, but is **not a passing matrix**:
reviewing the post-activation button geometry uncovered focus moving outside the
viewport during the title/media transformation. Actual native Enter reproduces
this, independently of the synthetic measurement harness. This belongs to the new
Projects prototype, not the inherited shared-header exception. No application
fix, scroll workaround, requirement/plan change or subsequent-task work was made.

### Baseline, tools and attributable conditions

- Read AGENTS, constitution, MEMORY, approved spec/plan/tasks, all preceding
  validation, current list/gallery/viewer CSS and source and the T6 manifest.
  Approvals and T1–T6 completion are confirmed; T7 existed and was pending.
- All **102** files in T6's application/public/test/config manifest still match:
  manifest SHA-256 `4ce88010d69e1fc6636f2c90afa77ead293cec8cdbe2783f2cc585b581d5e98b`.
  Production build remains **`2D56QDfMukWPlhbYq1O6x`**. A fresh task-start full
  working-file manifest is `/tmp/opencode/spec005-t7/baseline.json`. No source,
  asset, message, test, compiler option or dependency was changed by T7.
- Reverified existing dev Next PID21680, repository CWD, port3000; preserved it.
  Started only an owned production server with `pnpm start --hostname 127.0.0.1
  --port 3111`, Next PID172939, repository CWD and listening port verified.
  Origins: `http://localhost:3000` and `http://127.0.0.1:3111`.
- **80 native-default16 rows:** Chrome DevTools MCP, owned isolated page6/context
  `spec005-t7`. Used viewport emulation, not window resize (a preliminary window
  resize requested320 but actually produced500; its `trial.json` is excluded).
- **80 native-default24 rows:** owned Chrome PID173019, loopback CDP9260, isolated
  profile `/tmp/opencode/spec005-t7/profile24/`, browser preference
  `webkit.webprefs.default_font_size:24` configured **before startup**, also
  `default_fixed_font_size:24`. No user-profile preference, blocked internal URL,
  browser security setting, dependency or install was changed.
- Every row contains an unstyled same-origin iframe root/body font measurement and
  native20rem/40rem media-query results. Native16 yields16px unstyled text, native24
  yields24px. Page text growth then uses100%/150%, giving root/body16/24px or24/36px
  respectively. The native24 rows are not CSS root-size substitution. Root/body,
  h1/h2 sizes, theme, actual inner/client/visual viewport sizes are recorded.
- Complete cross-product: dev/prod × en/es × light/dark ×
  320/390/768/1024/1440 ×100/150% ×native16/24 = **160 rows**. All use actual
  innerHeight/clientHeight900; actual innerWidths match the requested widths.
  Client width is separately recorded (the existing scrollbar gutter generally
  reserves15px), rather than treating inner and client dimensions as identical.

### Measurements obtained, and limits of their interpretation

- Per-condition JSON files contain **640 measured states**: index0 initial,
  index1 expanded, open image and open paused video. Second project remains
  independently expanded and third initial during first-project checks. Each row
  includes four transitions (Next/Next/Previous/Previous), both-direction full
  title/media geometry reset, stable heading/trigger nodes and activated-arrow
  focus identity. Other project identities/selections remain unchanged.
- Initial ordinary desktop1024: title59.08px left at x53.20, media x462.75,
  width493.05px; expanded title37.54px above width902.59px media. At1440:
  title68.48px at x104.5, media x656.25/width664.25; expanded42.24px title and
  width1216px media at x104.5. Released media-width ratio is **1.831** at both
  widths. Both arrows restore initial title size/x/width and media x/width.
- No new gallery descendant horizontal-overflow measurement failed. All **320**
  modal measurements have one labelled top-layer dialog, Close initially focused,
  Close≥44×44 and within900px viewport height, contained image/video box, no
  horizontal dialog overflow, `object-fit:contain`, original source dimensions
  640×360 or1920×1080, clear media (`filter:none`, opacity1), backdrop72% black
  with9px blur. Video has native controls and opens paused at time0 without error;
  inline galleries contain no video/audio. This is layout/initial-state evidence,
  not new playback, hearing or native-control keyboard coverage.
- Close preserves the selected IDs/compositions, original trigger focus and prior
  page position in each measured modal. The media's element box fills the flexible
  stage; **it is not the aspect ratio of the painted asset**. The JSON separately
  records intrinsic dimensions and the contain-fit picture calculation. The
  reviewed390px capture shows the full16:9 image/video picture with surrounding
  letterbox space; the native video control strip occupies its own lower area.
- Eight320/native24/150% rows retain document scrollWidth347px. This matches the
  documented inherited header/intro condition, not new gallery/viewer overflow.
  It was not repaired or described as a full-site pass. The earlier isolation
  evidence remains historical; no new header-removal fixture was introduced.
- The initial harness's `pass:true` checks geometry, modal fit, focus **identity**
  and reset; it omitted arrow **viewport visibility after activation**. Do not
  equate that Boolean with RNF-1/RNF-2 compliance. The postprocessed
  `matrix.csv`/`summary.json` explicitly expose the missing check: **56 rows** have
  at least one arrow outside the viewport, across **136 of640 transitions**.
  These are28 native16 and28 native24 rows; some coexist with inherited overflow.
  Remaining rows are not asserted fully approved: contrast and supplements below
  were not finished before the blocker was escalated.

### Reproduced blocker and stopping boundary

1. Dev Spanish/dark,1440×900, native16,100% text: visit Projects; center and focus
   first project's Next; press **actual MCP Enter**. The composition expands and
   focus remains on Next, but its box becomes **y955.34–999.34**, entirely below
   the viewport. Recorded scrollY396; it is not hidden by the shared header.
   Evidence: `arrow-before.json`, `arrow-native-after.json`,
   `es1440-dark-arrow-offscreen.png`.
2. Production Spanish/dark,390×900, genuine native24/150%: center/focus Next and
   dispatch native CDP Enter. Before: y468–567, scrollY2058, root36px. After:
   **y1473.78–1572.78**, scrollY1770, same focused button, expanded composition.
   Evidence: `focus-red.mjs`, `native24-arrow-red.json`,
   `prod-es390-native24-150-arrow-offscreen.png`.
3. Cause: the stable navigation row follows the preview. Releasing media width
   grows the preview vertically (and large static-video copy can grow further),
   displacing the already-focused control. Keeping the DOM node and focus identity
   does not keep its focus indicator visible. Returning to a shorter layout can
   likewise leave the focused row above the viewport.

A runtime-only diagnostic tested sticky navigation without editing application
files; it was removed by navigation. `sticky-hypothesis.png` is **diagnostic only**,
not final-source evidence or a validated fix. No sticky rule was delivered.
An automatic scroll correction would conflict with the approved no-forced-page-
repositioning direction; no such change was improvised. Coordinator must route a
bounded compliant layout correction or resolve that constraint before completion.
This is not evidence that every CSS alternative is impossible, nor permission to
change requirements, architecture, shared chrome or navigation behavior silently.

### Visual review, outstanding checks and handoff

- Actually opened/read the final-source captures `es1440-dark-initial.png`,
  `es1440-dark-expanded.png`, `es1440-dark-arrow-offscreen.png`,
  `es390-light-image-viewer.png` and `es390-light-video-viewer.png`. The actual
  shield sample is visible, the title/media change releases the expected width,
  and the narrow viewer Close/sample copy are clear. Full-page captures taken
  while scrolled include sticky-header capture placement; use the viewport
  screenshot and JSON, not the full-page composite, to assess the focus defect.
  Captures have actual CSS widths1440/390; tool display scaling is not viewport size.
- All raw rows, `probe.js`, native24 harness/log/profile, matrix summary/CSV,
  reproductions and captures are local under `/tmp/opencode/spec005-t7/`.
  They are not new published assets. No sensitive source details are transcribed.
- **Not completed:** fresh measured contrast, orientation/resize-open supplement,
  long-title fixture, reduced-motion supplement, full-chrome pixel comparison and
  systematic console review. No claim that T4/T5's historical coverage substitutes
  for those final T7 checks. Empty/one/many/error fixtures and broader interaction/
  preservation remain T8; none was started. Native playback/audio review is not
  reblocked: T1's owner-attributed disposition and T5 technical evidence are unchanged.
- No application tests were created/modified and no meaningful application change
  requiring a new Node TDD cycle was made. The native browser reproduction is red;
  **no green correction is claimed**. Six AGENTS checks and explicit-origin53/53
  results remain T6 evidence on the byte-identical application, not fresh T7 runs.
  Documentation consistency and `git diff --check` were checked for this append.
- Only this validation document changes in the repository. No task checkbox,
  MEMORY, AGENTS, constitution, spec, plan, media bytes, Home/About/shared chrome,
  local agent/config/backup, source/test/config file or generated artifact was
  edited. No stage/commit/push/install/publication. Owned validation resources are
  closed after PID/CWD verification; existing dev21680/3000 is preserved.

Traceability: partial T7 evidence for RF-1/2/4–6/12 and RNF-1/2/3/6; **RNF-1/2
have the focused-control blocker**, RNF-4 and the outstanding supplements are not
newly validated, and RF-11 fixtures remain T8. Final review and owner acceptance
are still pending. T7 cannot be marked complete from these measurements.

## T7 — Authorized local navigation correction and new supplemental blockers

**Disposition: still incomplete; T7 stays unchecked and T8 was not started.**
The coordinator explicitly authorized continuing the same task with a bounded
gallery markup/CSS placement correction, without corrective scrolling, new
interaction, shared-chrome edits or requirement/architecture changes. The original
preview-growth displacement is fixed for the actual three projects. Fresh matrix
and command results below belong to the corrected source, not the preceding T6
build. Supplements expose two further failures; the matrix alone does not close T7.

### Minimal root correction and red → green browser evidence

- Changed only `src/components/projects/project-gallery.tsx`: moved the existing
  position announcement and Previous/Next block before the sample notice/preview.
  Stable article, heading, status, arrows and media trigger remain mounted in a
  consistent logical order. Existing localized labels, handlers, independent index
  state and all other rendering rules are unchanged. No CSS change was necessary
  for this first correction; no scroll handler, `scrollIntoView`, `window.scrollTo`,
  focus workaround, sticky title/control, fixed media height or clipping was added
  to application code. Harness scrolling only arranges the initial test position.
- Cause addressed: navigation no longer follows the block whose height grows when
  media takes the released width. The heading is still large-left/media-right at
  ordinary1024/1440 desktop; nonzero heading remains smaller above full-width media.
  This is the coordinator-authorized exact-placement decision, not a new interaction
  or a redesign of the approved gallery architecture.
- Original red is preserved in the preceding section and local artifacts. Fresh
  actual MCP Enter at dev/es/dark1440×900/native16/100% puts Next at
  **y549.36–593.36**, focus retained, same heading, header bottom106.40. Previously
  it was y955.34–999.34. Four real Enter activations cover Next/Next/Previous/Previous:
  initial resets put the focused button at **y363.20–407.20**. Evidence:
  `final/mcp-{before,after}-{0,1,2,3}.json` and `es1440-dark-arrow-visible.png`.
- Native-default24/150% CDP supplement: **16 conditions ×3 projects ×4 real Enter
  activations =192 passing transitions**, across both modes/locales/themes and
  320/1440 widths. Stable native buttons retain focus, full outline clearance above
  the shared header/below the viewport, both-direction reset and independent other
  selections. These are real input events, not only `.click()`/focus-identity probes.
  The full matrix also exercises all three projects, not only the first.

### Fresh source, mandatory commands and server identity

Final application manifest: **102 files**, SHA-256
**`71d1d103bf3121cfec7bdc94ab3ef0a04e001d858bc27f4318d1e5cf38ec0c27`**,
at `/tmp/opencode/spec005-t7/final/source.sha256`. Exactly one T6 manifest entry
differs: `project-gallery.tsx`, SHA-256
`a92871bb071559ab34b640d6e1cd2ba48e24d60dbb892b76dcdc74cc90987112`.
All other101 entries, including original sample bytes, are unchanged.

Fresh sequential checks on that source (Node24/pnpm12, same installed toolchain):

| Command | Result |
| --- | --- |
| `pnpm exec next typegen` | Pass |
| `pnpm lint` | Pass |
| `pnpm exec tsc --noEmit` | Pass |
| `pnpm test` | 43 total,41 pass,0 fail,2 explicit-origin skips |
| `pnpm build` | Pass; **`JSG-g0LGdFFCtnyT3upWn`** |
| `git diff --check` | Pass; repeated after evidence append |

Also reran `pnpm test` with **both** `LOCALIZED_404_TEST_ORIGIN` and
`SITE_ICONS_TEST_ORIGIN`, first `http://localhost:3000`, then
`http://127.0.0.1:3111`: **53/53 pass per origin, zero skips/failures**.
No new Node test was added: the change is DOM placement, and the meaningful red/green
regression is the actual browser geometry/input probe, not a CSS/source-string test.

During the checks, dev was existing Next21680 on3000, production was owned
Next181568 on3111, native24 Chrome178904 on CDP9260 with the isolated T7 profile.
The production process used the new successful build and `pnpm start --hostname
127.0.0.1 --port 3111`; the native profile retained the pre-start default24 prefs,
verified again through each unstyled iframe/rem probe. MCP used owned isolated
page7/context `spec005-t7-final`. No user browser preference/server was stopped.
At the later handoff recheck, all three old PIDs and listening ports were already
absent, and MCP listed only original page1 (`about:blank`). No replacement process
was killed, no user dev restart was attempted, and no claim is made that the absent
dev server is currently live. These are recorded completed runs, not a live-preview
handoff. Logs and `integrity.json` retain their original attribution.

### Repeated complete matrix and contrast

- **160 fresh final-source rows**, same approved cross-product and actual900px
  viewport height; native16 MCP80/native24 owned-CDP80. Each again measures initial,
  expanded, open image and open paused video: **640 states /320 modal states**.
  Unstyled iframe root/body and rem query basis, percentage enlargement, actual
  inner/client/visual viewport, theme, heading/body font sizes and image/video
  dimensions remain per-row evidence. Assertions verify requested widths, roots
  16/24/36 and themes instead of assuming emulation settings took effect.
- The final probe adds a viewport/header-clearance assertion to the earlier
  focus-identity check. **1920 transition checks** (four directions/reset actions
  for each of three projects in every row) pass: focused button remains at least
  its7px outline clearance below header and within viewport, unchanged other
  selections, full index0 title/media-width restoration. All new gallery overflow
  checks and all320 normal-height viewer fit/Close checks pass. Source remains
  sample-only, inline video/audio count0, enlarged video starts paused/time0.
- The eight320/native24/150% conditions still have the inherited347px document
  extent. New gallery/viewer content adds none; these are **not whole-site
  overflow-free rows**. `matrix.csv` records this separately from new-content pass.
  These shared exceptions are not the two new supplemental blockers below.
- Corrected source geometry: at1440, initial title x104.40/media x656.15,
  media664.25px wide; expanded media x104.40/width1216px. At1024 initial media
  x462.61/width493.39, expanded x52.80/width903.20. Width ratios remain **1.831**.
  Differences of fractions of a pixel versus the earlier batch are measured browser
  quantization, not a source/palette/type change. Both-direction reset is compared
  within each condition rather than comparing rounded historical coordinates.
- **Eight fresh contrast conditions**: both modes/locales/themes. Light/dark:
  foreground7.39/13.61, muted6.21/11.91, static video copy5.57/7.62,
  arrow border3.20/5.58, hover border3.05/4.09, hover/Close text7.04/9.98,
  focus against background7.39/13.61 and surface7.04/9.98. Viewer text and Close
  border/focus meet the corresponding thresholds. Normal text≥4.5 and meaningful
  border/focus≥3 pass; large text also exceeds3. App targets are≥44×44 in the
  measured rows. Declared3px focus outlines measured2.4px in the MCP quantization
  condition, with4px offset; no unmeasured exact rendered3px promise is made.
  Browser-owned video controls are neither claimed44px nor app-localized.
- **16 reduced-motion supplement conditions**: both modes/locales/themes,
  390/1440,150% narrow/100% wide. Actual reduced-motion query is true; the same
  four states and all three project/reset checks pass. No application animation
  or transition was introduced. This supplements, not substitutes for, normal
  motion rows.

### Supplemental failures that still block T7

**1. Longer-title transformation can obscure focus.** Runtime-only synthetic
layout fixtures used an explicitly test-labelled long h2 in en/es, both modes and
themes,320/1440 at native16/150%. Sixteen conditions: eight wide pass; **eight
narrow fail focused-control visibility**, despite text itself wrapping without
clipping or new horizontal overflow. The preview-growth root is fixed, but the
separate title-height shrink/growth preceding the toolbar can still move that row.

Actual settled-font MCP Enter reproduction on production/es/light320×900:
root24px before and after; before Next y484.40–550.40, scrollY1164.80; after
Next **y89.60–155.60**, scrollY1169.60, still focused, header bottom135.20.
Part of the focused control is covered by the sticky header. Evidence:
`long-title-native-{before,after}.json` and `long-title-native-focus-obscured.png`.
The final settled-font reproduction replaced an intermediate measurement made
during font reflow; only the settled24px pair above is used for the finding.
This is a new gallery accessibility failure, not the inherited320/default24 header
width exception. A further layout correction is needed; no automatic scroll or
heading duplication was added to conceal it. Native24 long-title fixtures were
not run after these failures were established. Fixtures changed browser DOM only,
were restored/navigated away, and never changed source/catalog/messages/routes.

**2. Short enlarged-text landscape viewer collapses the selected-media stage.**
Native-default24/150% resize supplement: both modes/locales/themes ×image/video =
**16 open viewers**, each resized through320×900 →900×390 →390×900 →1440×900.
Same media element and project selections persist, Close stays reachable and
video remains paused/time0. **48 tall sizes pass; all16 landscape sizes fail:**
the selected media/stage height becomes **0px** at900×390. Dialog scrollHeight324
exceeds clientHeight316. Screenshots visually confirm that the picture/native
player disappears; it is not merely a contain-fit bounding-box interpretation.

Cause is in the unchanged viewer CSS: nonshrinking toolbar and sample notice,
gaps and padding consume the short viewport budget, leaving zero for the flexible
stage (`min-height:0`). The tested input recording still decodes normally at tall
sizes; this is not a codec/privacy/audio problem. Evidence:
`resize-native24.json`, `native-supplements.mjs`, and
`es900-native24-150-{image,video}-landscape.png`.
The narrow continuation explicitly bounded source edits to gallery TSX/list CSS;
the viewer layout belongs to `project-media-viewer.module.css`. It was **not**
silently overridden from the list stylesheet to evade that boundary. Coordinator
must authorize/reroute that focused viewer-layout correction, alongside the
remaining long-title focus fix, before T7 can pass. No requirement/architecture
change is asserted necessary; these are concrete implementation failures, not
requests for the owner to choose pixel placement.

### Captures, preservation and remaining gate

Human-reviewed corrected-source captures under `/tmp/opencode/spec005-t7/final/`:
`es1440-dark-initial.png`, `es1440-dark-expanded.png`,
`es1440-dark-arrow-visible.png`, `es390-light-image-viewer.png`,
`es390-light-video-viewer.png`, long-title anomaly and both landscape failures.
They show the actual sample image/recording, informational sample labels, title
states, focus and browser-native control strip rather than inferred DOM artwork.
The390px image/video picture is uncropped16:9 with letterbox space; playback was
not started. A horizontal scrollbar appears in the1440 focus capture following
full-page capture, while the regular matrix records no corresponding new gallery
extent; that capture anomaly has not been separately re-investigated and is not
used as proof of full-site overflow freedom. No final full-chrome pixel-comparison
or systematic console pass is claimed. Normal-height backdrop style/clear-media
measurements remain recorded; short-landscape failures supersede any blanket fit
claim. Existing theme-select/preload warnings remain unrelated historical findings,
not fresh console acceptance.

Final preservation comparison changes only gallery TSX and this validation document
against the T7 start manifest. T7 checkbox stays unchecked. Protected MEMORY,
AGENTS, constitution, spec/plan/tasks, all prior data/messages/tests/config, local
agent/config/backups and other101 application/public/test/config files are intact.
PNG/MP4 retain the exact T1 hashes; no media alteration/muting/transcoding, install,
dependency/config change, cache removal, stage/commit/push/publication or T8 work.
All validation artifacts/harnesses remain local, outside delivered application.

Traceability: original actual-project focus correction supports RF-3/4 and RNF-1/2;
final-source matrix supports task-scoped RF-1/2/4–6/12 and RNF-1–4/6 only within
its tested900px conditions. **Long-title RNF-1/2 and landscape RF-5/RNF-1 remain
red**. RF-11 broader fixtures and all T8 behavior/preservation work remain pending.
No passing build, matrix count or owner privacy attestation waives these failures.

## T7 — Final bounded corrections and completion

**Disposition: T7 complete only.** The coordinator authorized the existing feature
gallery/list/viewer CSS responsibilities for both supplemental RNF failures. No
requirement, architecture, dependency or plan change was needed. This section
supersedes the preceding T7 blockers, preserving their actual red evidence. T8,
independent review and owner visual acceptance remain separate pending gates.

### Root corrections, without corrective scrolling

- `project-gallery.tsx` retains navigation before the growing preview. Its narrow
  copy grid now reserves the initial title's height using the same authoritative
  `labels.viewer.title` in an **aria-hidden, visibility-hidden non-heading span**.
  The real h2 remains visible, fully wrapped and readable in both sizes; there is
  still one accessible heading per project. `project-list.module.css` overlays the
  reserve and actual heading in one grid cell and disables the reserve at the
  existing desktop container breakpoint. This prevents long-title height changes
  preceding the controls from moving their focus out of view. It deliberately
  retains vertical space, not a duplicate accessible heading or clipped text.
- `project-media-viewer.module.css` bounds decorative outer spacing/padding/gaps
  by the viewport rather than growing all whitespace with enlarged text. The
  selected-media stage reserves `min(30dvh, 18rem)` instead of permitting zero
  height. Body, heading, notice and Close typography still enlarge normally;
  the99px Close at native24/150% is not shrunk. The original notice remains present
  with contained native scrolling. No custom player, cropped media, fixed tiny
  thumbnail, hidden explanation, new sticky title or shared stylesheet was added.
- No app `scrollIntoView`, corrective `window.scrollTo`, forced focus relocation,
  global scroll handler, node rekey/remount or new interaction was introduced.
  Existing modal focus/scroll restoration is unchanged. Harness scrolling only
  arranges test starting positions; native scroll anchoring is not app scrolling.

### Fresh red → green proof and final matrix

Evidence lives under **`/tmp/opencode/spec005-t7/complete/`**. The earlier `final/`
and root-level captures belong to superseded attempts and must not be substituted
for this final source.

- Settled native16/150%, production/es/light320×900, same synthetic long title as
  the red reproduction: actual MCP Enter now retains Next at **y484.40–550.40**,
  above header bottom135.20, instead of y89.60–155.60 under that header. Four native
  Enter activations cover both-direction expansion/reset; reset focus remains
  y552.40–618.40. `long-enter-{before,after}-{0..3}.json` and
  `long-title-native-focus-visible.png` contain the actual geometry.
- **32 long-title conditions pass:** dev/prod ×en/es ×light/dark ×320/1440 ×
  native16/24,150% text. Runtime fixtures update the real heading and its reserve
  together, as real project-title props do; changing only one DOM projection would
  not represent that contract. Text wraps fully; four-state/three-project probes
  retain visible focus and independent selections. Fixtures never changed catalog,
  translations, routes or source and were removed by subsequent real-page visits.
- **16 native24/150% open viewers ×4 resizes =64 passing sizes**, both modes,
  locales and themes, image/video:320×900 →900×390 →390×900 →1440×900. Same selected
  element/project, full contain fit, focus within viewer, reachable Close and paused
  video/time0 persist. At the formerly failing900×390 size, stage/media height is
  now **124.39px, not0**; full16:9 picture is approximately221×124px, centered in
  the available stage without distortion/cropping. Dialog scrollHeight/clientHeight
  are both372, Close remains99px high. Native controls occupy their browser-owned
  lower strip; their size/language are not claimed to be app-controlled.
- **Eight real keyboard notice-scroll checks pass** in that short native24/150%
  viewport (both modes/locales/themes): Tab reaches the native scrollable notice,
  PageDown moves its scrollTop0→34/max34, with Close and nonzero media remaining
  available. This is measured Chrome behavior, not an invented cross-browser or
  screen-reader guarantee. `notice-keyboard.json`/`scroll-region.mjs` retain it.
- Repeated the **entire160-condition final-source matrix**, not only affected rows:
  80 MCP native16 +80 owned-CDP genuine-default24, dev/prod, en/es, light/dark,
  320/390/768/1024/1440,100/150%, actual900px height. Every row records actual
  inner/client/visual dimensions, unstyled same-origin iframe default font/rem
  query basis, root/body/title growth, both compositions and both open viewers:
  **640 states,320 modal states**. Assertions verify requested width/theme and
  actual16/24/36px roots. Native24 still uses isolated pre-start browser preferences,
  not a root-size substitute or a change to user settings.
- **1920 three-project transition checks pass**, including both arrows returning
  to zero, complete title/media-region reset, stable native controls, independent
  selections and at least7px outline clearance from header/viewport edges. Another
  **192 actual native Enter transitions** on all three projects at native24/150%,
  320/1440, both modes/locales/themes, pass on the final source.
- Ordinary desktop initial title remains left of right media; compact title remains
  above expanded media. Media-width ratio remains approximately1.831 at1024/1440;
  no aspect ratio, source dimensions or title hierarchy was replaced to force fit.
- **16 reduced-motion conditions** (both modes/locales/themes,390/1440 with enlarged
  narrow text) and **eight fresh contrast conditions** pass. Light/dark ratios:
  body7.39/13.61, muted6.21/11.91, video copy5.57/7.62, arrow border3.20/5.58,
  hover/Close border3.05/4.09, hover/Close text7.04/9.98, focus against background
  7.39/13.61 and surface7.04/9.98. App targets remain≥44×44. Native video controls
  retain browser semantics/geometry and are excluded from app44px promises.

### Backdrop, captures, console and inherited exceptions

- Opened/read actual final captures: `es1440-dark-{initial,expanded}.png`,
  `es1440-dark-focused-arrow.png`, `es390-light-{image,video}-viewer.png`,
  `es900-native24-150-{image,video}-landscape.png`, long-title focus and
  `es900-native24-notice-keyboard-scroll.png`. They show actual assets and native
  controls, not only DOM boxes. Source PNG640×360/video1920×1080 remain full16:9.
  No playback or new audio-content listening claim is made by this layout task.
- Final before/after1440 dark viewport captures and `backdrop-pixels.json` confirm
  full-viewport darkening, including header/frame: sampled header RGB30/40/35→
  8/11/10; frame119/107/74→14/15/12. Actual backdrop style remains72% black/9px blur,
  and human review confirms edge/chrome softening. Selected image `filter:none`;
  screenshot picture mean RGB13.34/58.33/113.38 versus source resized mean
  10.54/54.20/112.92 rules out applying the backdrop's0.28 factor to the selected
  image. Small resampling differences are not asserted pixel identity.
- Eight fresh MCP console checks, both modes/locales/themes after four-state
  gallery/viewer probes: **no error/warn**, only the known shared form-field
  id/name issue. No related application console error was found or suppressed.
- The **eight inherited320/native24/150%347px header exceptions remain**. Matrix
  CSV separates them from new gallery/viewer results; this is not a claim that the
  whole site is overflow-free. No shared header repair was made.
- Investigated the earlier full-page-capture scrollbar anomaly: root scrollWidth
  1426/client1425 at1440 persists **with main hidden**, while the rightmost main
  descendant ends at1320.40. `capture-quantization-isolation.json` records restoration
  afterwards. This shared/capture-context fractional extent is not introduced by
  new gallery content and was not silently repaired or called zero overflow.

### Final commands, identity and preservation

Node **v24.21.0**, pnpm **12.4.1**. Fresh final-source outcomes:

| Command | Result |
| --- | --- |
| `pnpm exec next typegen` | Pass |
| `pnpm lint` | Pass |
| `pnpm exec tsc --noEmit` | Pass |
| `pnpm test` | 43 total,41 pass,0 fail,2 explicit-origin skips |
| `pnpm build` | Pass: **`KXTe9DVlvsQvxghxs0Lt9`** |
| `git diff --check` | Pass; repeated after evidence/checkbox updates |

Fresh runs with **both** origin variables set together, localhost3000 then
127.0.0.1:3111: **53/53 each, zero failures/skips**. No Node tests were added or
modified for these presentation corrections; meaningful browser red→green probes
are retained instead of artificial CSS/source assertions. Logs are in `complete/`.

Final102-file manifest SHA-256:
**`cf9fa92710fa41710c61d987e9c6d2e0f92cbc2777c9ac843d91c8e223eeb08c`**.
Only gallery TSX, list CSS and viewer CSS differ from T6; the other99 entries match.
Actual served en/es production HTML carries the final build ID and current linked
CSS responses are hashed in `http-identity.json`. `matrix.csv`, `summary.json`,
raw rows and harnesses identify the final evidence, not superseded builds.

At this resumption no server occupied3000/3111 and the old21680 process was absent.
Started an **owned** dev server on127.0.0.1:3000 (Next223112), production3111
(Next226196) and isolated native24 Chrome/CDP9260 (223221), with repository CWD
verified for all. MCP owned page2/context `spec005-t7-complete`. No existing user
server was killed/restarted. Only these verified owned resources are closed at
handoff; original page1 is preserved. A live preview is not promised after cleanup.

All source media retain their exact original T1 bytes/hashes. Home/About/shared
chrome/frame/tokens/fonts/icons, domain/messages/tests/compiler/dependency config,
protected documents and29 local agent/config/backup files remain unchanged.
Only the three authorized implementation files, this evidence and **T7's checkbox**
are updated by the whole T7 assignment. No MEMORY edit, generated hand-edit,
install/cache deletion, stage/commit/push/publication or T8 implementation occurred.

T7's RF-1/2/4–6/11/12 and RNF-1–4/6 task-scoped visual gates are satisfied with the
explicit inherited exceptions/platform limits above. RF-11's broader rendered
failure/empty/many fixtures and full interaction/preservation remain T8, not claimed
complete here. The two newly found visual blockers are resolved on the identified
final source; final independent review/owner acceptance remain pending. Stop after T7.

## T8 — Interaction, rendered fixtures and preservation

**Disposition: T8 complete only.** Spec/plan/tasks approvals and T1–T7 checkboxes
were verified before work. T9 independent review and T10 owner acceptance are not
performed or implied. Evidence and local harnesses: `/tmp/opencode/spec005-t8/`.
No publication, commit, push, dependency change or new route was authorized.

### Actual RF-6 failure, bounded correction and red → green

The coordinator's concern about the opaque viewer was reproduced, not dismissed
because `::backdrop` existed. `backdrop-red.png` shows the actual near-full-height
opaque dialog hiding the page around the picture. Computed dialog background and
bounds were recorded in `backdrop-root.json`. Temporarily changing only that
background to transparent exposed the actual darkened/blurred underlying title
and image (`backdrop-hypothesis.png`), identifying the occluding layer.

Only `project-media-viewer.module.css` changes permanently in T8:

- The dialog background is transparent; existing toolbar, sample notice and error
  text retain the existing opaque semantic background for readable foreground text.
- The existing 72% black/9px-blur native backdrop, media fit, layout, dimensions,
  selected-only rendering, dialog lifecycle and true outside-press/release handling
  are unchanged. There is no global palette, shell or interaction redesign.
- An intermediate screenshot exposed the external Close outline against the newly
  visible darkened background: approximately1.19:1 in a light-theme exterior region.
  Its existing3px outline now has **-4px inset offset**, placing it wholly on the
  button surface without resizing anything. Final measured light/dark focus ratios
  are **7.04/9.98:1**, not inferred from a transparent dialog background.

`backdrop-green-light.png` is intermediate evidence. Final proof is the eight
`final-{dev,prod}-{en,es}-{light,dark}-{1440,390}-{before,after}.png` capture pairs,
their `-mcp.json` geometry, `final-backdrop-pixels.json`, and `final-focus-*.png`.
All eight final after-captures were actually opened/read. Visible mobile surrounding
space now shows blurred underlying page content, not an opaque ivory/forest panel.
Desktop captures preserve the large clear full picture and darkened exposed chrome.
Only the narrow identity/notice surfaces are opaque; these are not represented as
proof of a visible underlying page beneath those surfaces.

Pixel checks independently confirm whole-viewport exposed header/frame darkening:
light header RGB241/234/220 →65/62/57 desktop or67/65/61 mobile; dark mobile header
30/40/35 →9/12/10. Four mobile underlying-title regions have horizontal edge energy
only **0.045–0.046 of the unblurred,0.28-darkening-normalized baseline**, confirming
actual smoothing rather than darkening alone. Selected-image blue-channel means
are approximately113.42 versus112.92 for the resized original on desktop, not
31.62 as backdrop multiplication would imply. The selected picture is visibly
clear; source resampling is not claimed pixel-identical. These comparisons use
the inspected sample image, not reproduced private video frames in documentation.

### Final-source actual interaction actions

Final build **`u5iQwbBJ_Jvjlh_nz7zAe`**; both actual loopback origins below.
`interactions.json` / `final-interactions.log` contain **16 passing conditions**:
dev/prod ×en/es ×light/dark ×390/1440, actual900px viewport height, native16 text.
Each condition includes:

- Direct Projects load, real footer client navigation About→Projects (same-document
  sentinel retained), reload (sentinel removed), and real header locale links in
  both directions retaining the logical Projects route. Mobile menu is opened via
  its real button before using the locale link. Final actual project identities,
  order and localized controls are checked after the round trip.
- **24 native Enter gallery transitions per condition,384 total**: all three
  projects, repeated Next/Next/Previous/Previous cycles. Complete first-item title
  size/region reset, compact later title/expanded region, stable original control,
  visible3px focus, unchanged scroll and unchanged other-project selections pass.
  Exactly one project-specific polite status text changes per activation; this is
  actual mutation/semantic exposure, not a claim of screen-reader listening.
- Hover, wheel scrolling and an elapsed-time observation do not change selection;
  there is no inline audio/video element. Source inspection likewise finds no
  gallery timer, autoplay, scroll-driven selection or corrective scroll handler.
- Image and video each open by actual input and close by Close, Escape and a true
  outside press/release: **96 modal cases**. Inputs include native Enter, pointer
  clicks and emulated touch taps; additional reduced-motion Space openings pass.
  Only the selected item and one labelled native modal are present; initial focus
  is Close, with app Close/arrow targets≥44×44. Sample/project identity remains
  localized and visible. Opposite-gallery video selection remains unchanged.
- Underlying header focus is rejected; attempts to open another gallery while
  modal leave only one viewer. Wheel input cannot move the fixed background.
  Every closure restores the exact prior x/y, original trigger focus, both sets of
  selections/compositions and root/body inline styles, including pre-existing
  `!important` overflow and padding values. Players are removed.
- Both drag directions (content→outside and outside→content) do not dismiss;
  media/control interaction is not an outside activation.
- **1056 actual Tab/Shift-Tab inputs** cover both modal kinds, including native video
  shadow controls.816 observations are inside the modal;240 are Chrome's BODY
  document/browser-chrome focus sentinel, followed by native traversal back into
  the modal. No underlying page control receives focus. This browser-owned sentinel
  is reported rather than falsely claiming every Tab remained on an app element;
  no custom trap or interception of native video keyboard behavior was introduced.
- Reduced motion retains manual selection/open/close and produces no animation
  in Projects. Sixteen same-image open-viewer resize sequences cover320×900 →
  900×390 →390×900 →1440×900: **64 passing sizes**, same element/selection and reachable
  Close. No automatic playback or gallery navigation occurs.

The final MCP supplement independently uses actual Enter/Escape for both selected
media kinds in **eight mode/locale/theme conditions**, exact390 or1440×900 emulation.
`final-*-video.json` records one native-controls player, paused/time0. No playback
is inferred from these paused-viewer snapshots.

### Native video controls and technical audio cessation

`audio-native-lifecycle.json` / `final-audio.log`: **eight passing conditions**,
dev/prod ×en/es ×light/dark,1440×900. Actual browser-native controls are targeted
using their read-only UA-shadow geometry and real mouse/key inputs, not fabricated
ARIA controls, synthetic media events, `video.play()` or property-written volume/
seek actions. Native control language remains the browser's Spanish, including
on English pages; sizes/language are not app guarantees.

- **48 explicit native Play clicks**: per condition three close-method sessions,
  one native-keyboard/range session, one playing-error session and one route-exit
  session. Each player is initially paused/time0. Every Play session has actual
  advancing time and nonzero analyser samples, not just `paused=false`.
- In the24 close-method sessions, native Space pauses and another Space resumes.
  The eight range sessions additionally pause with native Space before seeking.
  `play`, `playing`, `pause`, `volumechange`, `seeking` and `seeked` observations are
  trusted browser events, with actual resulting time/volume values recorded.
- Native volume hover needs its browser animation to settle;700ms is allowed by
  the final harness. Pointer input sets volume≈0.62969; native slider Right raises
  it to≈0.63969 and Left returns it. Native mute click and Space unmute both work.
  Native timeline click seeks≈1.40748s; focused native Right/Left move it to≈1.46429s
  and back. This short clip/browser moves approximately1% per slider arrow, not a
  claimed five-second jump. Generic arrows with focus only on the video host did
  not adjust these ranges; actual focused native range controls were tested instead.
- Web Audio analyser connected to the actual element/destination produces RMS
  above0.001 in every playback session (observed peak≈0.618; quiet samples can be0).
  After Close/Escape/outside, actual playing-resource failure, and Next history
  route exit, the retained old player is paused, detached, source removed, with
  **RMS0 and zero remaining players**. Counts:24 playing closures,8 playing errors,
  8 playing route exits. Error teardown keeps localized feedback and focus on Close.
- Route testing enters Projects via the existing About footer framework link, then
  uses browser history while the background is inert. It adds no route UI or
  bypassing background link. About's history positions672px(en)/698px(es) are not
  overwritten with Projects' origin; original inline locks are removed.
- Reopening after each prior close starts a fresh paused/time0 player; after each
  route exit a new client entry/open also remains paused/time0. No auto-resume.

This verifies a technical nonzero→zero audio signal, **not human listening or audio
content interpretation**. The owner's existing sample-specific no-private-content
attestation and explicit audio-inspection exception remain the privacy disposition;
they were not treated as agent listening or extended to future assets. No new
privacy concern was observed. Physical-device audio output, other browsers and
screen readers remain untested; no cross-browser native-control guarantee is made.

### Rendered temporary configuration and failure fixtures

Fixtures used the existing dev Projects route and real server catalog/query/message
pipeline, never a public fixture route or permanent condition per project.
`fixture-empty.json`: **four empty-list conditions**, en/es ×light/dark at390px,
actual localized existing empty copy and no gallery/control/player.

`fixtures-mixed.json`: **eight dev conditions**, en/es ×light/dark ×390/1440:

- Reordered Living Gallery first with zero media and truthful no-media copy/no
  triggers/arrows; Expenses & Savings with one image; Gely’s with one video.
  Single-item galleries retain initial composition and omit arrows; **16 real
  single-item openings/Escape closures** pass, with paused native video.
- Added a fourth centrally configured, explicitly synthetic localized project;
  unique English/Spanish title, gallery/action/position names are resolved through
  the server translator. No JSX branch, new page copy store or real project claim.
- Its five ordered items are valid video, nonexistent image, valid image,
  nonexistent video and a PNG source deliberately configured as unsupported video.
  **80 manual transitions**, both-direction five-item cycles, expose the correct
  position/total, every nonzero expanded state, first reset and unchanged other
  projects. Actual missing file URLs return errors; Chrome emits media error4 for
  unusable video sources. This is real resource/format failure, not a claim that
  Chrome cannot play the supplied H.264/MP3 sample or that other browsers were run.
- **48 enlarged failure cases** retain localized unavailable text, usable Close,
  Escape return to original trigger and navigation past failures; failed players
  are unmounted. Missing images exercise actual client resource loading. No invented
  fallback, manually invoked error callback or fake dispatch establishes success.
- Temporary valid HTTPS and HTTP links appear with actual localized labels and
  ≥44px targets; javascript/fragment destinations are omitted by central projection.
  Links were inspected only: no external page request, messaging, login or claim of
  destination availability/owner verification. No fake configured link survives.

`fixture-props-update.json` additionally proves a real server-props change: a
selected fifth item in the synthetic project survives catalog reordering as the
same article/arrow; shortening its sequence to three normalizes selection4→1,
shows **media2 of3**, and loads the valid video paused without carrying a different
ID/source's failure. These fixtures are dev-only rendered configuration checks,
not a claimed production fixture suite. Both modes' final catalog behavior and
real error lifecycle were separately exercised above.

Catalog and both message files were restored **byte-for-byte** to T8's saved
originals before any final build/check. The three original projects again have
the original image/video pair, unchanged copy/order/empty Home `images`, and no
live destinations. The later final-source interaction/layout runs use those
restored records, not synthetic records or a fixture build.

### Fresh T6/T7 reruns, preservation and known exceptions

The viewer paint/focus correction prompted fresh six-command checks and a fresh
build. An intermediate build `UhAej4uPwDH4i7Jn-7T12` predates the focus inset and
is **not final acceptance evidence**. All final interaction/audio/preservation
scripts were rerun fully after the final build, not just their unfinished rows.

The complete T7 layout matrix was also repeated on final sources, not only the
representative viewer captures: **160 passing feature conditions,640 states,
320 open viewers,1920 three-project transition checks**. Files `final-layout-16.json`
and `final-layout-24.json` identify dev/prod ×en/es ×light/dark ×320/390/768/1024/1440
×100/150% text. Each row proves native default16/24 in an unstyled iframe and actual
root16/24/36px as applicable, exact requested viewport width and actual900px height.
Native24 uses a separate owned pre-start Chrome profile, not root-font substitution.
These matrix transition probes are DOM activation checks; the384 native Enter
transitions above separately prove real keyboard wiring. No native count is inflated
by calling a programmatic click a physical/native key action.

The T8 native24 resize run did **not** complete: `final-resize24.log` ends with
the harness font assertion `'24px' !== '36px'`, and T8's `final-resize24.json`
does not exist. Thus T8 did not establish the claimed16 sessions/64 sizes or
completed native24 orientation coverage. The failure log is retained; the later
independent reviewer supplement below is separate evidence, not a recovered T8 run.
The prior T7 long-title reserve and notice-keyboard scroll correction are unchanged;
this task does not claim a fresh32-title fixture
suite. Eight fresh contrast rows measure toolbar/notice text7.39/13.61, Close and
inset focus7.04/9.98, and Close border3.05/4.09 in light/dark.

The **eight inherited320/native24/150% shared-header extents remain347px** (305px
client width with reserved scrollbar). New gallery/viewer checks pass independently;
this is **not a statement that the entire website is overflow-free**. The earlier
capture-context fractional shared extent remains documented in T7, not repaired.

`preservation.json` / `final-preservation.log`: **eight Home/About conditions**,
both modes/locales/themes. Home retains9 carousel articles,6 inert outer copies,
original project placeholders, no sample assets or inline players, working native
manual next/previous and explicit Pause (stable measured scroll). This is a
proportionate preservation check, not a rerun of all Spec003 carousel edge cases.
About's supplied portrait loads with localized alternative, approved contact icons/
destinations remain, both pages retain their shell/footer and six head icon links.
The102-file comparison verifies unchanged Home/About/carousel/chrome/tokens/fonts/
icons/metadata/routing code and assets, rather than inferring preservation from a
screenshot alone. Both explicit-origin53-test runs execute current favicon/head and
localized404 HTTP contracts. `native-js-off-404.json` additionally records **four
real JS-disabled native recoveries**, dev/prod ×en/es: missing documentHTTP404,
native Tab→main Home link→Enter, HomeHTTP200, browser Back to localized404. Script
execution is disabled before visiting; harness waits are external, not page timers.

Eight final MCP console checks after image/video interactions find **no application
errors**. The known shared theme-select missing id/name issue appears in all eight;
the existing shared page-content CSS preload warning appears in the two English
dev desktop conditions. Both were documented before T8 and are outside the viewer
paint/lifecycle scope. They are reported, not suppressed or repaired. Deliberately
missing/unsupported fixture resources naturally produce expected load errors and
are not confused with console acceptance on the restored final catalog.

### Commands, identity, protected files and handoff

Node **v24.21.0**, pnpm **12.4.1**. Fresh final-source outcomes:

| Command | Result |
| --- | --- |
| `pnpm exec next typegen` | Pass |
| `pnpm lint` | Pass |
| `pnpm exec tsc --noEmit` | Pass |
| `pnpm test` | 43 total,41 pass,0 fail,2 explicit-origin skips |
| `pnpm build` | Pass: `u5iQwbBJ_Jvjlh_nz7zAe` |
| `git diff --check` | Pass; repeated after evidence/checkbox updates |

Both required origin variables are set together for each fresh actual run:
`LOCALIZED_404_TEST_ORIGIN` and `SITE_ICONS_TEST_ORIGIN` →
**`http://127.0.0.1:3000`**, then **`http://127.0.0.1:3111`**:
**53/53 pass per mode, zero skips/failures**. `final-*.log` and
`final-integrity.json` record outcomes/served identity. Production en/es HTML
contains the final build ID; actual linked CSS responses are hashed.

Final102-file manifest SHA-256:
**`3d939d286518ad739dcd624b979db2ffd10f791efbb20688a4339af3b2a2e5f8`**.
Only the viewer CSS differs from final T7's102-file manifest; the other101 match.
PNG/MP4 retain T1 hashes **52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3** /
**bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd**.
AGENTS, MEMORY, constitution, approved spec/plan and29 local agent/config/backup
files match the prior protected hashes. Fixtures and protected Home/About/shared
files are unchanged. No Node tests were created/modified in T8; real browser visual
red→green and native-input/resource-error probes cover the CSS and interaction work
without artificial source/CSS snapshots or a new test dependency.

At start no listener occupied3000/3111; no prior owner process was assumed safe to
stop. This task started owned dev Next **231375**, intermediate prod235216 (closed
before final build), final prod Next **241765**, Chrome/CDP9261 **231784** and
native24/CDP9262 **240030**. Listener PID, command and repository CWD were verified.
MCP page3/context `spec005-t8` is owned; original page1 is preserved. Only identified
owned resources are closed at handoff; no user server is stopped and no live
preview is promised after cleanup.

T8 covers task-scoped RF-1–12/RNF-1–6 with the explicit inherited/platform limits
above. Only viewer CSS, this evidence and T8's checkbox are delivered by this
assignment. Final independent review and owner visual acceptance remain pending;
no T9/T10 execution, MEMORY edit, package/lock/config change, generated hand-edit,
install/cache deletion, stage/commit/push or publication occurred. Stop after T8.

## T9 partial independent review — documentary correction cycle 1

Review record: 2026-10-15; no exact time or timezone for the review as a whole is
supplied. The coordinator reports independent technical **PASS for RF-1–12 and
applicable RNF-1–6**, with no code bug reported, subject to the separate final owner
gate (including RNF-3). This is not final approval: the review required correction
of T8's unsupported resize evidence
attribution above and an explicit partial-review record here. These documentary
corrections await reviewer recheck; T9 and T10 remain unchecked.

| Requirements | Independent review method/result reported by coordinator |
| --- | --- |
| RF-1–4, RF-9–12 | Current source/diff and meaningful domain/state tests, catalog/localization/fixture evidence, real gallery/navigation and composition/reset checks: technical PASS. |
| RF-5–7 | Current viewer source and independent image/video interaction, fit, modal/closure/focus checks plus the native24 resize supplement below: technical PASS. |
| RF-8 | Reviewer clicked the native Play control (not keyboard Play) and used Escape to close; playback lifecycle, current source and existing T8 interaction/audio-stop evidence reviewed: technical PASS. Native keyboard playback coverage belongs to T8's recorded Space pause/resume checks, not reviewer Play input; no agent audio-content listening claimed. |
| RNF-1–2 | Existing final-source T7/T8 layout/contrast/target evidence reviewed, independent narrow/wide visual/keyboard checks and native24 supplement: technical PASS with inherited shared-header/platform limits retained. |
| RNF-3–4 | Source/palette/type preservation, independent composition/viewer visuals and motion behavior reviewed: technical PASS; owner visual acceptance remains T10. |
| RNF-5–6 | Truthful samples, owner-attributed sample-specific audio disposition, focused source/asset hashes and preservation/integration evidence reviewed: technical PASS; no publication authorization. |

The independent review used build **`z2-vLlzLel8IKP2pnwnyY`**, not T8's earlier
build. The same102-file source manifest remains
**`3d939d286518ad739dcd624b979db2ffd10f791efbb20688a4339af3b2a2e5f8`**.
The coordinator reports all six AGENTS commands freshly passing: typegen, lint,
typecheck, default tests (**43 total,41 pass,2 explicit-origin skips**), build and
diff whitespace check. Additional fresh tests with both `LOCALIZED_404_TEST_ORIGIN`
and `SITE_ICONS_TEST_ORIGIN` set together passed **53/53 per mode, zero skips**,
at dev `http://127.0.0.1:3000` and prod `http://127.0.0.1:3111`.
These are attributed reviewer results, not commands rerun for this prose correction.

Reviewer Chrome DevTools MCP checks covered **16 conditions**: dev/prod ×en/es
×light/dark ×390/1440px, height900px. Reviewer used Enter for gallery navigation
and media opening, clicked the native Play control (not keyboard Play), and used
Escape to close. T8's existing native Space pause/resume evidence above supplies
keyboard playback coverage; it is not attributed to this reviewer session. At nominal
desktop settings title size changed68.48→42.24px and media width664.25→1216px.
This independent review did **not** repeat the entire160-condition matrix; it
reviewed existing final-source evidence and added targeted checks.

Separate new reviewer artifact:
`/tmp/opencode/spec005-review/independent-resize24.json`, produced by
`/tmp/opencode/spec005-review/independent-resize.mjs` (existing artifact modification
time2026-10-15 23:33 in the filesystem display, not an asserted exact review time).
Its16 sessions cover both modes/locales/themes and image/video at genuine native
default24px, verified using an unstyled iframe, with root36px at150% text. Each
session resizes320×900→900×390→390×900→1440×900: **64 passing sizes** retain the
same selected element, nonzero media/stage, `object-fit: contain`, viewport-bounded
media and reachable Close, modal focus, and paused video/time0. The script uses
fresh document-load waits, CDP mouse/key actions and geometry/media assertions.
The documentary correction independently read this existing JSON and script and
verified all16/64 records and conditions; it did not run the browser harness or
generate replacement historical evidence. This closes the technical coverage gap
with **new independent review evidence**, not a claim that T8's failed run passed.

Completion gates: prior spec/plan/tasks approvals remain recorded; technical
requirements, tests, restored fixtures and preservation were reviewed as passing
with the stated inherited/platform limits and owner-attributed privacy disposition.
Independent-review approval remains pending documentary recheck. Separate final
owner visual/behavior acceptance remains pending T10; no further owner approval
is requested by this correction. Both review origins are now closed; no live
preview is promised. No code, tests, assets, task checkboxes or protected documents
are changed by this correction, and no new server/build/browser session is started.

**VEREDICTO: CAMBIOS NECESARIOS** — partial T9 review; documentary corrections
submitted for independent recheck; formal `APROBADO` also requires the pending
final owner acceptance under the reviewer's instructions.

## T10 preparation only — Working local owner preview (2026-10-15)

No owner acceptance or closure is recorded here. T9 and T10 remain unchecked.
The coordinator reports both documentary correction cycles complete and no
remaining technical/documentary blocker; formal approval still awaits the owner's
separate final T10 response. This preview does not change the review verdict.

- Fresh listener/process inspection found no existing portfolio dev server and
  port3000 free. Started `pnpm dev --hostname 127.0.0.1 --port 3000` from
  `/home/jorge/Projects/web/career-launch/portfolio`, intentionally left running for
  the explicitly requested owner review, not a temporary QA server to close now.
  Verified repository CWD for pnpm PID257817, CLI257917 and listening Next257934;
  listener is loopback-only127.0.0.1:3000. No user server was stopped or replaced.
- Available preview URLs, freshly fetched successfully:
  `http://127.0.0.1:3000/es/projects` and
  `http://127.0.0.1:3000/en/projects`. Both return HTTP200 HTML with the three
  current ordered project titles, three initial compositions, three sample images
  and sample labels/explanations matching their current message catalogs.
- Actual sample image/video GETs return HTTP200, correct `image/png`/`video/mp4`
  MIME types,310566/7722052 bytes and byte-identical T1 hashes. Video range request
  returns HTTP206, `bytes 0-1023/7722052`,1024 bytes. No repeat native playback,
  visual matrix or acceptance claim is made; existing final-source evidence above
  remains applicable. No UI behavior or application source was changed.
- All102 source-manifest entries still match before and after server startup:
  manifest SHA-256 `3d939d286518ad739dcd624b979db2ffd10f791efbb20688a4339af3b2a2e5f8`.
  Existing production build ID is `z2-vLlzLel8IKP2pnwnyY`; this preview serves dev,
  not that production build. No build/six-check rerun is warranted for this
  evidence-only preparation. `git diff --check` passes; no tests were added/changed.
- Log: `/tmp/opencode/spec005-owner-preview/dev.log`; HTTP and integrity results:
  `http-checks.json` and `source-check.log` in the same directory. Background shell
  handle: `sh_142ce3fab00115Buqqr2j5wwPZ`. Later shutdown must first reverify current
  PID/CWD/port ownership, then send SIGTERM to the identified owned Next CLI257917
  (never blindly kill a recycled PID or all Node processes).

Traceability is presentation preparation for RF-2–8/RF-12 and RNF-1–6 only, not
new implementation or final validation. Only this evidence document was edited;
Home/About, assets, tests, tasks, MEMORY and other protected documents are untouched.
No dependency, installation, Git staging/commit/push or publication occurred.

## Revision 2 — R1 bounded strip projection (2026-10-16)

**Disposition: R1 complete only.** This is fresh pure-logic evidence, not revised
UI compliance. R2 and later tasks have not been started. Revision-1 evidence above
is retained verbatim; no matrix, playback or owner acceptance is relabelled.

### Approval, baseline and scope

- Read AGENTS, constitution, MEMORY, current spec/plan/tasks, validation history,
  state/tests, project contracts/catalog/media/query and read-only Home preview.
  Revision-2 full-spec approval **“La apruebo”** and subsequent joint plan/tasks
  approval **“Las apruebo”**, both 2026-10-16, are recorded by the coordinator.
  R1 was unchecked, first in the new dependency chain; T1–T8 are historical and
  T9/T10 superseded, not completed. Required validation commands exist in AGENTS.
- HEAD remains `c5ee587370113b4688c9c7f2e9178cbf8466a5fa`; staged diff is empty.
  The dirty tree, coordinator documents and prior implementation were preserved.
  Before editing, saved 157 tracked/nonignored file hashes to
  `/tmp/opencode/spec005-rev2-r1/baseline.json`, SHA-256
  `15c07f552dca36e0cddd8bccf010560926ec4eefe19c52d16b44e3f24a4e7f76`.
- Actual port3000 listener was Next265230, CLI265211 (`next dev`); both repository
  CWDs were verified. Historical CLI257917 was not assumed current. No server was
  started, restarted or stopped, and no browser resource was created.
- Only `gallery-state.ts`, its test, this append and R1's checkbox are changed by
  this task. No components, styles, messages, catalog, media descriptors, compiler
  options, protected documents, dependencies or shared/Home APIs were changed.

### Typed contract and R2 handoff

- Added `projectGalleryStrip(items: readonly { readonly id: string }[], index:
  number, geometry: GalleryStripGeometry): GalleryStripProjection`.
  Count comes from the supplied ordered items, with existing modulo normalization.
  IDs must be unique within that sequence. All geometry values are CSS pixels:
  `stageWidth`, `cellWidth`, `gap`, `initialInset`, `shiftedInset`; caller supplies
  valid finite sizes (positive stage/cell widths and nonnegative gap).
- Geometry must come from the unchanged **whole-project/list parent** and current
  viewport/text settings, never its changing half/full gallery region. Insets give
  the selected cell's left edge. CSS responsive sizing/measurement and DOM wiring
  remain R2; the pure function does not choose viewport breakpoints or measure DOM.
- Output includes `composition: "initial" | "shifted"`, normalized nullable
  `selectedIndex`, truthful `count`, `canNavigate`, logical track `offset`, ordered
  `cells` and `visibleIds`. Each cell has configured `id`/`index`, `selected`, `x`,
  full `width`/`height` and separately clipped `visibleWidth`. Full height always
  uses Home's1200/760 frame ratio, not the intrinsic source-media ratio.
- Initial places first/current and next (when configured). Nonzero places the
  predecessor/current and, for3+, successor, with no duplicate two-item trigger.
  At most three cells are projected regardless of sequence length; offstage cells
  have zero exposure and are omitted from `visibleIds`. R2 must use that visibility
  for offscreen interaction and retain stable keyed triggers; no DOM was added here.
- Offset describes translation from the selected logical index's unwrapped pitch
  position; bounded cyclic neighbor `x` coordinates are provided directly. Every
  zero derives the full initial projection, without an advancement-history flag.
  Zero has no cells/selection/navigation; one remains initial without navigation.
  Existing `getGalleryComposition` retains its historical `expanded` result only
  for unchanged revision-1 UI compatibility. New consumers use projection's
  `shifted`; no premature renderer migration is included.
- No clock, randomness, globals, timers, scroll work, mutation, Home triplication,
  framework or new package. Synthetic distinct IDs reuse only the approved pair.

### TDD and actual validations

- Node v24.21.0, pnpm12.4.1. Baseline `pnpm test`:43 total,41 pass,0 fail,2 skips.
- Added three tests to `tests/project-gallery-state.test.mjs`. Red `pnpm test`:
  46 total,41 pass,3 fail,2 skips, specifically
  `TypeError: galleryState.projectGalleryStrip is not a function` in the three new
  behavior tests; existing tests still passed. Implemented the bounded projection.
  First green:46 total,44 pass,0 fail,2 skips.
- Tests cover zero/one/two/three/seven/100 items, both directions over repeated
  complete cycles, normalized negative/out-of-range indices, independent inputs,
  frozen input nonmutation, reorder and explicit resize inputs. Assertions check
  actual ordered IDs/counts, one selected cell, bounded unique cells, fixed full
  dimensions at every index and deep equality with initial on every return to zero.
  Desktop exposure:140px next peek becomes460px, while300px of first remains;
  narrow:50px becomes230px, with46px of predecessor retained. These distinguish
  changing exposure from item scaling and exercise usable partial widths.
- Adding these concrete examples exposed an arithmetic error in the new test's
  desktop expected peek (160 instead of140). Failure retained in
  `extra-assertion-failure.log`; `clipping-diagnostic.json` shows next starting at
  x860 in a1000px stage. Corrected only that expected value/comment; no algorithm
  or requirement change. This is a task-local test mistake, not a pre-existing bug.

| Command | Final result |
| --- | --- |
| `pnpm exec next typegen` | Pass |
| `pnpm lint` | Pass |
| `pnpm exec tsc --noEmit` | Pass |
| `pnpm test` |46 total,44 pass,0 fail,2 skipped |
| `pnpm build` | Pass; build `GDHIvlbwhM-edWvvmuO_o` |
| `git diff --check` | Pass; repeated after evidence/checkbox edits |

Logs: `/tmp/opencode/spec005-rev2-r1/{baseline-tests,red,green,final-typegen,final-lint,final-typecheck,final-tests,final-build,final-diff-check}.log`.
Two default-run skips are the localized404/icon explicit-origin contracts, not
passing integration evidence. Fresh dev/prod explicit-origin runs remain R6.
No pre-existing mandatory validation failure was encountered. No browser/visual,
responsive matrix, native playback or console checks apply to this internal-only
change; the current renderer still has the known revision-1 design and must not
be described as satisfying revised visuals. Real bounding boxes/visible targets,
focus and integration remain R2 onward.

### Source identity and preservation

- Final source/test SHA-256:
  - `src/lib/projects/gallery-state.ts`:
    `ee18ff81918b369ab9491966bd61aeeeacc1bd4271f06f6fdc41c5e051186dc9`.
  - `tests/project-gallery-state.test.mjs`:
    `728d278e547d858c962b212188d5842a92c156a3c33084a0f3ba1a316fb2c188`.
- Local `source.sha256` lists101 selected application/public/test/config files,
  SHA-256 `d56e67a587fecd78bcc66e2ce40ed9092708fc86cccc6ffd801713c5b42ea998`.
  This new manifest selection is not the historical102-file manifest.
- Baseline comparison before this append found exactly the state module and test
  changed; all other155 baseline files matched, including all29 local agent/config/
  backup files, Home/About/shared sources, existing UI, catalog/translations,
  tsconfig and approved spec/plan/MEMORY/AGENTS/constitution. No fixture remains in
  production and no third media asset was introduced.
- PNG remains310566 bytes, SHA-256
  `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`;
  MP4 remains7722052 bytes, SHA-256
  `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.
  Both match T1; no additional media content review or agent hearing is claimed.
  Owner-attributed sample-specific privacy/audio disposition remains unchanged.

R1 covers the pure state/projection portions of RF-3–4/RF-9/RF-11 and RNF-4/RNF-6,
not their later UI obligations. No blocker or known new related regression remains.
Only R1 is marked complete. No R2 work, MEMORY/protected-document edit, generated
hand-edit, install, cache deletion, staging, commit, push or publication occurred.

## Revision 2 — R2 stable organic strip renderer (2026-10-16)

Implementer evidence for R2 only; not R3 heading/control alignment, R4 glass
presentation, R6 integrations, R7 full matrix, R8 complete lifecycle or owner
acceptance. The approved revision-2 spec/plan/tasks and completed R1 were read.
The dirty tree was hashed before edits; all prior005 work and local configurations
were retained. Evidence directory: `/tmp/opencode/spec005-r2/`.

### Implementation and behavior checks

- `project-gallery.tsx` consumes R1 `projectGalleryStrip` directly. The unchanged
  whole article supplies stage width; a hidden CSS sizing probe resolves cell
  width/insets/gap against that same whole-width stage in either composition.
  Native ResizeObserver watches the article/probe; no scroll listener, animation
  loop, scale/rotation transform, autoplay or inline video player was added.
- Every configured ID has one stable keyed wrapper/button. R1 bounds visible
  placement; unprojected cells are hidden/inert and nonvisible cells have no Tab
  stop. Visible targets occupy the clipped intersection, not the offstage cell's
  center. Their inset focus outline stays inside the stage. Viewer activation
  captures the actual item and exact original button, independently of index.
- CSS uses46% cells/38% initial inset/32% shifted inset/2cqi gap at the existing
  desktop breakpoint. Reflow uses whole width minus64px, an8px gap and56px shifted
  inset: initial peek56px and shifted predecessor48px. This reserves usable
  partial targets without resizing cells on selection. The existing title size
  rule now follows `shifted`; final heading slots/alignment and bottom controls
  remain deliberately unimplemented R3 work.
- Both images and static video use unchanged shared `MediaFrame shape="project"`:
  actual `/shapes/media-frame-02.svg`, alpha mask100%×100%,1200/760 ratio and
  existing semantic shadows. Read Home ProjectPreview/MediaFrame/CSS/SVG and
  compared actual Home carousel capture with both preview kinds. Inline source
  image is upright, may crop inside the mask; existing enlarged media remains
  unmasked/full aspect. Video alternative stays available to assistive technology;
  the visible static preview retains its localized video/enlarge label.

No new pure algorithm was needed beyond tested R1. Browser red evidence
`red-browser.json` recorded one cell where two were required before implementation.
The reusable browser behavior probe `probe.js` then checked the real DOM/geometry,
not CSS-string snapshots. Existing46 Node tests remain unchanged.

Final production build: `z3L7-nZzmi1pkWzGcbUb1`, origin
`http://127.0.0.1:3115`. Fresh Chrome MCP probes cover28 conditions: en/es ×both
actual `data-theme` values ×320/390/768/1024/1440 at16px, plus en/es ×both themes
×390/1440 at root24px (150% text). Root24 is explicitly **not** native browser
default24. Each condition runs eight selections over both arrows, complete resets,
stable-node checks and neighbor-video opening/closure. All28 retain exact nodes,
dimensions/count/offset on reset, other projects' initial states, paused neighbor
video, restored original trigger and zero inline video elements. No Projects-added
document overflow was measured. Files: `{en,es}-{light,dark}-{width}.json` and
`*-150text.json`. These are a bounded R2 production batch, not the160-condition
dev/prod/native-default matrix.

Representative CSS-pixel measurements, same cells before/after Next:

| Viewport | Whole width | Cell W×H (both states) | First x initial→shifted | Second x initial→shifted | Second exposure | First remaining |
| --- | --- | --- | --- | --- | --- | --- |
|390|335.20|271.20×171.75|0→−223.20|279.20→56|56→271.20|48.00|
|1440|1216|559.35×354.25|462.08→−194.55|1045.74→389.10|170.26→559.35|364.80|

Coordinates are stage-relative; box rounding remained below1px with no systematic
growth. Exposure, not full cell size, increases. Final screenshots:
`es1440darkinitial.png`, `es1440darkshifted.png`, `es390lightframed.png`,
`es390light-peek-focus.png`, `home-contour.png`. The wide shifted capture includes
the retained visible first image and full static video, with its focus outline.
These do not claim final heading alignment or revised viewer styling.

### Fixtures, actual input and limitations

- Temporary four-ID mixed-media catalog reused only the two approved sources;
  second project had zero media and third had one. Both directions ran repeated
  cycles at1440 and actual emulated390. Ordered predecessor/current/successor,
  exact resets and stable keyed nodes passed. Zero showed honest text/no actions;
  single retained initial/no arrows. `fixture-four-zero-one.json`,
  `fixture-actual390.json`; catalog restored byte-identically before final checks.
- Actual native Tab at index2 traversed only visible predecessor/current, then
  the single-media other project; no hidden/offstage trigger received focus
  (`fixture-tab-*.json`). Simulated viewer image failure for `fixture-third`
  affected only that ID, not same-source `demo-image`; offset/focus retained
  (`fixture-failure-id.json`). No failed ID leaked across the shared sample source.
- Native Tab/Enter opened the initial56px next-video peek at390; Escape restored
  that exact button, still index0, with no video left mounted. Focus screenshot
  shows an unobscured inset outline. `keyboard-peek-{before,open,close}.json`.
  Actual MCP pointer clicks also opened first-image and next-video sources without
  selecting the neighbor (`pointer-image.json`, `pointer-neighbor.json`).
- Eight actual Enter activations at390 under reduced motion covered both arrow
  directions repeatedly, constant cell bboxes and initial/shifted reset. ScrollY
  stayed16 for every activation (`arrow390-native-{next,prev}-*.json`). This is not
  R3's long-title/viewport-edge focus validation. No new related console warning
  or error appeared in the final production page.
- Harness corrections: initial window resize had a500px minimum, so early
  `fixture390.json` is **not390 evidence**; `fixture-actual390.json` uses verified
  viewport emulation. Initial theme-class toggling did not select this site's
  data-attribute theme; final28 JSON rows and wide captures were repeated with
  actual `data-theme`. One early150% batch reported growth during unsettled resize;
  diagnostic repeated cycles showed constant587.69×372.20 boxes. Repeated final
  batch waits for fonts/resize settlement and passes; no app workaround added.
  One stale/immediately-restored pointer attempt timed out, then fresh snapshot/
  hit-test and retry succeeded. One screenshot timed out and was recaptured.
- Existing owner dev3000 (PID265230, verified repository CWD) was preserved. After
  production build its page showed failed HMR handshake/stale hydration; do not
  interpret that origin as fresh R2 browser validation or restart it automatically.
  Fresh explicit-origin dev/prod integration contracts remain assigned to R6.
  Owned production3112/3114(fixture)/3115 processes were CWD/port/PID-verified,
  then closed, along with only the three owned browser tabs.
- Wide document quantization extent1426 vs1425 client pixels also exists with
  main removed (and1010 at1024); not added by the strip. No unrelated shared-shell
  correction was made. Native-default24, full contrast/lifecycle/audio checks,
  other browsers, physical devices and screen readers are not claimed here.

### Checks and preservation

All six final-source commands pass: `pnpm exec next typegen`, `pnpm lint`,
`pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`, `git diff --check`.
Actual Node count46:44 pass,0 fail,2 default explicit-origin integration skips;
these skips are not passing contracts. Logs: `{typegen,lint,typecheck,tests,build,
diff-check}.log`. Initial lint caught an introduced JSX self-closing typo; fixed
at its source, then all commands rerun. Preserved failure log:
`initial-lint-failure.log`. No pre-existing mandatory check failed.

Source manifest `source.sha256` contains100 selected app/public/test/config files,
SHA-256 `5cb056fc9b5070bfae90faeae7cd7aad6deab009be23ab0d2d61d7e489da0588`.
Only two application sources differ from the R2 baseline:

- Gallery: `ab075732bb29f0bcb41950831e24d89769ccd7f2f24800fa0eaffcf908b5d1df`.
- Local CSS: `5ee7aaeb1206786796a2e059a53466749a74f2796e49a2261791836462be5770`.

`preservation.json` confirms163 baseline files unchanged; only these two sources
and tool-generated ignored tsbuildinfo changed before documentation. Catalog,
all tests/R1, Home/About/shared components/styles, metadata/favicon, translations,
all29 local configurations, compiler/dependency files and protected documents
retain their exact baseline bytes. PNG/MP4 still respectively
`52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3` /
`bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.
No asset editing, extra production sample, privacy/listening claim, install,
shared API change, staging, commit, push or publication occurred.

R2 covers its rendering portions of RF-1–5/RF-9/RF-11–12 and RNF-1–4/RNF-6.
Only R2 is marked complete; later obligations and owner gates remain pending.

## Revision 2 — R3 heading and whole-project bottom controls (2026-10-16)

Implementer evidence for R3 only. Approved revision-2 documents, constitution,
AGENTS, MEMORY, R1 projection and R2 renderer/evidence were read. R1/R2 were
complete; R3 was pending. Evidence directory: `/tmp/opencode/spec005-r3/`.
No R4 viewer presentation, R6 integration run, R7 full matrix or final acceptance
is claimed. The owner preview on3000 was preserved.

### Red → local layout → green

- Before changes, fresh MCP production probe `red-browser.json` at1440 measured
  heading midpoint457.875 versus actual media978.094 (delta520.219px). Arrows
  appeared at644.969 above media bottom1155.219, centered1272.5 versus project712.5.
  The cause was separate copy/gallery rows and controls inside the gallery's top
  region, not a strip-projection or observer defect.
- Server `ProjectList` now supplies the single h2 as a heading slot, keeping real
  category/status/description/technology/link content unchanged. Local grid slots
  align the h2 with the actual frame row, independently of supplemental copy and
  notices. Nonzero selection places the smaller heading above the leftward strip.
  Narrow/enlarged-text layouts retain heading-before-media reflow.
- Invisible, aria-hidden large/compact title reservations preserve both row
  envelopes, including wrapped long titles. Copy and sample explanations follow
  below the media. The stable Previous/Next pair is the final full-width row,
  centered across the entire article in either state, not across a gallery half.
  No fixed title height, truncation, sticky title, app focus call, timer, scroll
  listener or corrective scrolling was added. All R2 media geometry/observer,
  visible-neighbor targets, native viewer and Home MediaFrame APIs are untouched.
- Genuine native24 long-title probes found a second, specific red case: English
  Gely's position announcement wrapped differently for proportional digits1/2,
  moving the bottom row50.391px at390/150%. Preserved evidence:
  `pre-status-fix/native24-en-390-150.json` (100% also differs). All possible count
  texts now share an aria-hidden reserved grid envelope, with only the selected
  text exposed to the live region. Final reruns restore exact article/stage/arrow
  boxes for all projects. Accessibility snapshot confirms one h2 per project,
  retained labelled gallery regions, one current announcement and no exposed
  reservation text (`final-accessibility.txt`).

No pure behavior/state change or artificial CSS-string Node test was introduced.
Reusable actual-browser probes `probe.js`, `focus-setup.js`, `focus-read.js` and
`native24.mjs` live outside the repository; existing Node tests are unchanged.

### Final-source geometry and actual input

Final build **`4LhTfi_MbtZmoCybKnhS8`**, fresh owned production origin
`http://127.0.0.1:3118`. Final MCP batch:20 conditions, en/es ×light/dark
×320/390/768/1024/1440, height1000, native default16. Files:
`{en,es}-{light,dark}-{width}.json`. Each checks every project through eight
selections over both directions: stable nodes, exact reset, unchanged article,
strip, control and cell dimensions; centered bottom arrows; independent instances.
All pass. Emulated viewport width, actual root size/theme and client widths are
recorded. At390 the whole article is335px (fractional sizing is also exercised at
1024's902.59375px); no gallery-added document overflow was measured.

Representative first-project CSS-pixel measurements (both locales/themes have
zero nominal desktop heading and arrow-center deltas, all three projects):

| Width | Whole width | Initial h2/media midpoint | Cell W×H, unchanged | Title font initial→shifted | Title document y initial→shifted | Bottom arrow y, both states |
| --- | --- | --- | --- | --- | --- | --- |
|390|335|mobile reflow, not desktop alignment|271×171.625|48→32|293.172→293.172|823.156|
|1024|902.594|546.5 /546.5|415.188×262.938|59.078→37.539|484.469→347.875|911.547|
|1440|1216|635.656 /635.656|559.359×354.25|68.48→42.24|563.75→385.969|1046.359|

The mobile smaller heading has a higher midpoint within the reserved title row;
desktop h2 moves into its separate upper row. At1440 frame-strip box remains
`(104.5,450.531,1216,370.25)` and offsets reset462.078→−194.570→462.078.
First Next keeps first media visibly left; second exposure grows, not its bbox.
Arrows are44×44px at default16 and the pair center is712.5, exactly the block
center (both states). Sample/position copy cannot shift the pair sideways.

- Final MCP native Enter:64 activations, en/es ×390/1440 ×top/bottom viewport-edge
  setup ×both arrows ×four activations. `final-native-*.json` records actual
  activated control identity, viewport y/bottom, sticky-header bottom, hit test,
  visible focus outline, announcement and scrollY before/after. Every activation
  retains connected focused arrows, unobscured hit targets, unchanged scroll and
  zero `scrollTo`/`scrollIntoView` calls. Harness scrolling is setup only, not app
  navigation. At default16 bottom-edge arrows stay y944–988; top-edge placements
  remain12px below the header. Reduced motion was enabled for this batch.
- Native24 supplement: owned isolated Chrome profile with actual default/fixed
  font24 preferences, verified root24 **before** any inline text scaling. Eight
  conditions:en/es ×320/390 ×100/150%, height1000;150% resolves36px root, not a
  root-only substitute for default24. Temporary DOM-only long titles reuse real
  project identity plus explicit EN/ES layout-fixture qualifiers. No source
  catalog/messages were edited. Each probes all projects/eight state selections,
  plus48 native CDP Enter activations across all three projects, both arrows and
  both viewport edges:384 actual inputs total, all visible/hit-tested/focused,
  scroll-stable and no app scroll calls. Final `native24-*.json` and
  `native24-final-results.log` pass exact layout/reset checks; title heights may
  grow naturally past a viewport without clipping or overlapping the media.
- Additional12 MCP long-title conditions:en/es ×390/1024/1440 ×100/150% at genuine
  default16 (`long-*.json`). Nominal1440 titles wrap to three lines;1024 titles to
  four. Normal desktop heading deltas0px; at1440/150%≤0.008px. At1024/150% the
  authorized vertical reflow applies, so desktop midpoint alignment is not claimed.
  All preserve exact stage/article/control boxes and full reset. These40 bounded
  conditions (20+8+12) do not replace R7's160-condition dev/prod matrix.
- Native Tab from first image reaches the56px visible next-video target; Enter
  opens that neighbor paused without selecting it (index0/offset0), Escape returns
  the exact original trigger, leaves no video mounted and preserves offset/count.
  Files:`neighbor-{before,open,close}.json`. Inset3px focus outline remains visible.
  Existing R4-pending viewer appearance was not redesigned or reaccepted here.
- Final captures viewed: `es1440-dark-initial.png`,
  `es1440-dark-shifted.png`, `es390-light-shifted.png`. Mobile capture shows compact
  heading, retained first sliver/full second item, truthful sample copy and bottom
  centered focused arrows. Final MCP console has no warnings/errors. No actual
  screen-reader, physical-device or cross-browser coverage is claimed.

### Checks, preservation and remaining limits

All six final-source AGENTS checks pass: typegen, lint, TypeScript, `pnpm test`,
production build and `git diff --check`; logs retain those names. Tests:46 total,
44 pass,0 fail,2 default explicit-origin integration skips. Those skips are not
passed contracts; the approved R6 dev/prod explicit-origin work remains pending.
Build reports existing experimental `globalNotFound`, no new build warning/error.

Known inherited320/native24/150% header extent347px is reproduced separately from
Projects: main/project right edge260, client305, document347. Other native24
supplement rows add no document overflow. This shared-header issue was not fixed
or called a wholly overflow-free page. The old owner dev3000/HMR limitation is
unchanged; this task's browser evidence is production-only, not fresh dev proof.

`preservation-before-docs.json` compares166 baseline files: only these three app
sources plus tool-generated ignored tsbuildinfo differ; no baseline file is missing.
All29 local agent/config/backup files, supplied media, R1 tests/projection, catalog,
messages, viewer, Home/About/shared files, fonts/SVG/icons, compiler/dependencies,
MEMORY/AGENTS/constitution/spec/plan remain byte-identical to the task baseline.
The100-file selected app/public/test/config manifest `source.sha256` hashes to
`7411b8e8d79cd347db26397de7295142190b27881d3e56d4996e04db44c1729f`.
Final source hashes:

- List:`048c4d26b8593f96b43497e71253b26ea2448cf383ebb2f063b13d6f533b72ec`.
- Gallery:`983e2475ba904624dc88b6f8cac9d377821e1efbf7d955e0f47b27ab65ece986`.
- CSS:`a62d42133db36a672de6e41d2e34b27c91dcc3a1e9bf58bfe0c240d73ab4ddb6`.
- Original PNG/MP4 remain respectively
  `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3` /
  `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.

Only R3 is marked complete, covering RF-1–4/RF-11–12 and RNF-1–4/RNF-6 within
its local heading/control responsibility. R4 onward and owner acceptance remain
pending. No new dependency, source fixture, scroll workaround, stage/commit/push,
publication, media edit or human-listening claim occurred.

Cleanup: owned production3116(red),3117(intermediate),3118(final) servers were
PID/CWD/port-verified and closed; `owned-servers.json` records ownership. The owned
native24 browser and two MCP tabs were closed. Owner dev3000/PID265230 remains
listening and was not restarted. Final preservation comparison changes only the
three named app files, this evidence, the R3 checkbox and generated ignored
tsbuildinfo; `preservation-final.json` records the result.

## Revision 2 — R4 glass viewer presentation (2026-10-16)

Implementer scope: R4 only, after completed R1–R3. Native modal setup/cleanup,
origin restoration, video release and gallery selection remain unchanged. Only
`project-media-viewer.tsx` and its CSS Module change application code. Evidence:
`/tmp/opencode/spec005-r4/`. This is bounded production-browser evidence, not
R5 lifecycle certification, R6 explicit-origin contracts or R7's full matrix.

### Implementation and source identity

- Removed the enclosing border, title/Close toolbar and opaque sample notice.
  The sole surround is local neutral `rgb(128 128 128 / 28%)` with12px backdrop
  blur, including the underlying header/frame; selected media has no filter/mask.
- Media uses its configured intrinsic ratio, bounded by both dynamic viewport
  dimensions,16px edge clearance and70rem maximum width. A caption ResizeObserver
  reserves its actual height, without scroll listeners or animation. Caption width
  is independent of media height, avoiding sizing feedback. At extreme text sizes
  its30dvh region scrolls rather than collapsing the selected media.
- The transparent44×44 X is immediately above the media's upper-right corner:
  button right equals media right; button bottom equals media top. Its localized
  accessible name is unchanged. Initial focus and inset3px focus outline remain.
- Kept localized project identity in the accessible dialog name and honest sample
  text in an adjacent associated caption. A2px glyph-only palette-colored contrast
  halo avoids any opaque/translucent caption bar or image overlay. An intermediate
  translucent caption scrim was visually rejected and is absent from final code.
- Outside activation checks the actual stage/caption/close bounds, not the larger
  transparent dialog bounding box. Primary press/release tracking is retained.
- Final build:`qozzm3JCprJi5MEqtAzZF`. All12 script/style URLs in served Projects
  HTML match disk build bytes (`served-build-chunks.json`). The102-file source
  manifest `source.sha256` hashes to
  `852c7e6f9cd3579ed01667c79e67953944355344e5b5276441fcbab4ab927a7d`.
  Viewer TSX:`b78a9a1aefe09a854526fbf72dde172fe4542f52db43f92ed9ddcc10ed3168d7`;
  CSS:`f356e4298729b00c6d29ca567823d5e6bafdda99004848bd3b04f4f792e6c621`.

### Fresh visual, geometry and bounded interaction checks

- Chrome DevTools MCP:20 conditions (en/es ×light/dark ×320/390/768/1024/1440,
  height900, default16/normal text), each with image and video:40 measured states.
  Actual viewport, data-theme, root size, native media dimensions, accessible
  labels, focus, bounds and styles are recorded in `{locale}-{theme}-{width}-{kind}.json`.
  No media filter/mask, no inline videos, every video initially paused with native
  controls. Captures cover both media/locales/themes at390 and1440.
- Owned separate Chrome with genuine default24 preferences, then150% text
  (verified36px root):16 conditions (en/es ×light/dark ×320×900,390×900,900×390,
  1440×900),32 media states. `native24-*.json`, landscape PNGs and
  `native24-results.log` pass. These are supplements, not an expanded R7 claim.
- Across those72 states, media/close/caption stay inside the viewport, X remains
  44×44 and maximum intended-corner error is0.000008px. Maximum intrinsic ratio
  error0.000112 is subpixel CSS sizing, not cropping. Additional live resize
  sequences check open images and videos, including landscape, and maintain
  anchoring. `basic-pointer-resize-error.json` and `video-resize-*.json` record it.
- Inspected final captures including `es1440-dark-image-glass.png`,
  `es390-light-image-glass.png`, `es1440-light-video-glass.png` and native24
  landscape. Full source image is visible, unmasked and undistorted; video native
  controls stay at its bottom. Final eight narrow/wide video captures wait for
  decoding: all readyState4, paused true, currentTime0 (`*-video-capture-state.json`).
- Actual before/after compositor captures and pixels, not CSS alone, show page
  color through the gray veil. Example header pixel720,30: light241/234/220 becomes
  209/204/194; dark30/40/35 becomes57/64/60. Surround still carries page/frame
  contours and underlying blue media. `pixel-contrast-final.json` samples actual
  hidden-control backgrounds: minimum X/focus contrast5.40:1 at390/1440 in both
  themes/media. Caption fill versus its actual palette halo is7.39:1 minimum;
  this is a fill/halo calculation, not a claim that the busy page alone meets text
  contrast. Without that halo, mobile sample text crosses blue underlying media.
- Trusted native pointer inputs: caption and media clicks remain open; media press
  ending outside does not dismiss; true backdrop click and X close restore the
  exact trigger/scroll. Escape closes all measured opens. A browser-only missing
  image source produces the localized failure notice, reachable X and Escape
  closure. The intentional fixture404 is expected and does not edit source assets.
- Native video Play and Pause were actual trusted CDP mouse press/releases on
  the native control region, not `play()` or simulated app controls:
  paused/time0 → playing/time0.540737 → paused/time0.554425; close leaves the saved
  element disconnected, paused and without source (`native-play-click.json`).
  No listening/audio-content approval or new technical RMS measurement is claimed;
  comprehensive playback/keyboard/audio lifecycle evidence remains R5.
- MCP final console has no warnings/errors. `video-accessibility.txt` preserves
  the localized dialog/Close names. No physical-device/other-browser/screen-reader
  verification is claimed.

### Validation, failed harnesses and preservation

All six final-source AGENTS checks pass: typegen, lint, TypeScript, tests, build,
whitespace (`*.log`). Tests46 total:44 pass,0 fail,2 default integration skips.
Explicit-origin contracts remain R6, not silently passed. No new production test
file was added for this presentation change; browser geometry/pointer probes are
temporary evidence, not CSS-string unit tests. Existing tests remain unmodified.
Build reports the existing experimental globalNotFound setting, no new warning.

Retained invalid early harness evidence: `failed-settings/` used a500px minimum
window and the wrong class-based theme check, so it does not certify narrow/light
conditions. Corrected runs use emulated actual viewport and `data-theme`.
Native24 raw Enter without its text event produced no native click; diagnostic
events show keydown/keyup but no click. Supplying the real Enter text fixes the
harness, not application code. Initial wait-only attempts and an intermediate
DOM-return serialization failure are retained in `native24-failed-*.log` and
`native24-geometry-pass-play-harness-failed.log`. A later screenshot-only navigation
race is recorded in `capture-retry-diagnostic.json`; final captures wait for font/
layout settlement and verify native video state. These failures are not passes.

Baseline comparison (`preservation-before-docs.json`) changes only the two viewer
sources and tool-generated ignored tsbuildinfo. Source PNG/MP4 remain byte-identical,
with SHA256 `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`
and `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.
R1–R3/gallery/strip, tests, catalog/messages, Home/About/shared chrome/tokens/fonts/
SVG/icons, configuration/dependencies and MEMORY/AGENTS/constitution/spec/plan
remain unchanged from the task baseline. No fix to inherited shared-header overflow
or name/id concerns is included; this task does not certify their resolution.

Only R4 is marked complete (RF-2/RF-5–8/RF-11–12 and RNF-1–3/RNF-5–6 within viewer
presentation). R5 onward remains pending. No dependency, media edit, route, stage,
commit, push or publication was performed. Owned3111 production process and owned
native24 browser are closed after checking PID/CWD; the owner's3000 preview is
preserved. Final task/doc-only changes receive a fresh whitespace/preservation check.

## Revision 2 — R5 lifecycle verification (2026-10-19, in progress)

Fresh restart-resilient evidence directory: `/tmp/opencode/spec005-r5/`;
`checkpoint.json` tracks completed and pending batches. No missing prior R5
artifacts are treated as recovered evidence. R1–R4 remain completed historical
work; R5 alone is assigned and unchecked. Spec and joint plan/tasks approvals
and completed dependencies were checked before execution.

Baseline Git status, process tree, listeners and feature-source hashes are saved
as `git-status-before.txt`, `processes-before.txt`, `listeners-before.txt` and
`source-sha256.txt`. No application listener existed at baseline; stale preview
PIDs are not reused. Existing dirty files and local agent/backups are preserved.
Gallery SHA256: `983e2475ba904624dc88b6f8cac9d377821e1efbf7d955e0f47b27ab65ece986`;
viewer SHA256: `b78a9a1aefe09a854526fbf72dde172fe4542f52db43f92ed9ddcc10ed3168d7`;
viewer CSS SHA256: `f356e4298729b00c6d29ca567823d5e6bafdda99004848bd3b04f4f792e6c621`.
Disk build ID is `qozzm3JCprJi5MEqtAzZF`, not yet fresh served-build proof.
Scope is affected lifecycle/interaction only, not R1–R4 geometry, R6 integration
contracts or R7's matrix. Native playback/audio and remaining lifecycle checks
remain pending; owner audio-content confirmation is retained without agent hearing.

### R5 restart checkpoint — 2026-10-21

The earlier `/tmp/opencode/spec005-r5/` directory is now missing. Its listed
baseline files/checkpoint and any unreported browser outcomes are **not recovered
evidence**; the preceding section is historical in-progress context, not a pass.
Fresh directory with that name was created today. Fresh hashes match the three
gallery/viewer hashes above; disk build remains `qozzm3JCprJi5MEqtAzZF`.
No application listener exists at this restart baseline (`ss -ltnp`); stale PIDs
are not used. Chrome DevTools MCP responds with one blank page. Existing dirty
sources/docs/assets/config/backups are preserved. New baseline files include
`git-status-before.txt`, `listeners-before.txt`, `processes-before.txt` and
`source.sha256` (all src/tests/public files). No new browser result is claimed yet.
R5 remains unchecked; R1–R4 are not repeated, R6–R10 are not started.

#### R5 bounded batch outcome — blocked before application testing

- Attempted the approved production command `pnpm start --hostname 127.0.0.1
  --port 3111`, logging to `prod.log`. Instead of starting Next, pnpm automatically
  entered dependency installation: the log reports hard linking packages,
  `resolved 380, reused 374, downloaded 2, added 374`, plus incomplete Next/SWC/
  libvips downloads and registry timeout/DNS failures. No explicit install command
  was requested or run by the agent. This unexpected automatic side effect is
  disclosed, not represented as a successful server start or an authorized repair.
- Fresh inspection finds no `node_modules/.bin/next` or `node_modules/next` link.
  The dependency tree is incomplete at inspection; its exact pre-command contents
  were not captured, so not every node_modules change can be attributed. The
  install trigger's precise configuration cause was not established. No workaround,
  dependency repair/install retry, configuration change or cache removal was made.
- Owned launch shell PID23642 and pnpm PID23643 were identified from the process
  tree. Before stopping, PID23643's CWD was verified as this repository and its
  exact cmdline as `pnpm start --hostname 127.0.0.1 --port 3111`. Only that PID
  received TERM; the owned launch completed with143. Post-check finds it absent
  and no application listener. No unknown process or OpenCode server was stopped.
- Chrome DevTools MCP was available, but its direct visit to
  `http://127.0.0.1:3111/es/projects` returned `net::ERR_CONNECTION_REFUSED`.
  Thus **zero fresh application lifecycle/native-control/audio cases passed**.
  There is no served-build proof. Disk build ID alone is not browser evidence.
  No dev server or isolated Chrome was launched after this blocker; no console,
  screenshot, Space/Play/volume/progress or RMS result is claimed.
- `sha256sum -c source.sha256` passes for every captured src/tests/public file;
  Git status before/after is identical (this spec folder is already untracked),
  with no new tracked lock/config delta. `git diff --check` passes. This batch
  changes only this validation document in repository sources; no test or app
  code change, task checkbox change, MEMORY/AGENTS edit or publication occurred.
  R4's six checks remain historical; no fresh application checks are claimed.
- Temporary evidence: baseline/preservation/process/listener files and `prod.log`
  under `/tmp/opencode/spec005-r5/`. Production log SHA256:
  `96c0ac7973656a10a0028ae440d6375c1ff1414f6ca83704961449b87d59e933`.
  This compact on-repository record remains valid if those temporary files vanish.

**R5 remains pending/blocked.** Coordinator must resolve or obtain authorization
for the incomplete dependency/runtime environment before another server attempt.
All R5 application criteria (both modes/locales/themes, selected/neighbor origins,
close paths, style/focus/scroll restoration, containment, native controls and
active-audio close/error/route teardown) remain unverified on this restart. No
application defect or new privacy concern was established. Retained owner audio
confirmation is unchanged; no human hearing claim. R6 and later remain untouched.

#### R5 environment diagnosis only — 2026-10-21

Systematic-debugging phases1–3: read the complete62-line launch log and checkpoint,
inspect command/config/lock/install boundaries, then test competing explanations
by read-only inspection. No pnpm invocation, server start, repair, network probe,
process signal or application test was performed in this diagnostic batch.

- `type -a` resolves pnpm directly to the Node24.21.0 installation's `bin/pnpm`
  symlink, targeting `lib/node_modules/pnpm/pnpm`, a native ELF executable, not a
  Corepack shim. Its installed package.json and CHANGELOG identify12.4.1, matching
  project `packageManager: pnpm@12.4.1` and the prior CLI output. Node currently
  reports24.21.0, satisfying project `>=24.12.0`. No runtime version change observed.
- Context7 resolve-first query of official pnpm documentation
  (`https://pnpm.io/settings/build`, `https://pnpm.io/lockfile`) identifies
  `verifyDepsBeforeRun`, default `install`: run/exec check dependency state and can
  install before scripts. The installed12.4.1 native binary contains that option,
  `ERR_PNPM_VERIFY_DEPS_BEFORE_RUN` and the internal install-request flag/help text;
  its bundled changelog also describes this check. No readable implementation of
  that Rust control flow was found, so this is not a line-level source trace.
- No project/ancestor .npmrc or ancestor workspace override was found; checked
  user .npmrc, pnpm rc/config.yaml and /etc/npmrc are absent. No allowlisted
  verify-deps/manage-package-manager/auto-install-peers environment override was
  present. Project workspace contains only the retained four `allowBuilds: false`
  restrictions. No secrets or complete environment/config dumps were recorded.
- **High-confidence mechanism:** pnpm's pre-run dependency verification initiated
  application installation. This matches native CLI identity, documented default,
  absent observed override, and log ordering: lockfile accepted/resolution skipped,
  then application Next/SWC/libvips downloads, without reaching `next start`.
  This is not evidence of Corepack/package-manager self-install. `autoInstallPeers:
  true` is a separate lockfile setting, not the demonstrated script-install trigger.
  **Still unknown:** the precise stale/missing-state predicate that triggered it;
  no pre-launch node_modules inventory exists. Current missing links cannot prove
  which files were missing before the interrupted installation.
- Lockfile has two YAML documents: environment package-manager lock12.4.1, then
  application lock with Next16.3.5, React/DOM19.2.8, next-intl4.14.7,
  next-themes0.4.6, TypeScript5.9.3 and Tailwind4.3.3. Current partial store package
  manifests confirm React/DOM19.2.8, TypeScript5.9.3, next-intl4.14.7 and
  @next/env16.3.5; these do not establish a complete install. No Next package/bin
  exists anywhere in local node_modules. Root `.bin/next`, `node_modules/next`,
  `.modules.yaml` and virtual-store `lock.yaml` are absent. The remaining workspace
  state JSON is dated October16 and records isolated linking. No standalone build
  directory exists. Thus no complete alternate local Next entry was identified;
  invoking an absolute Node path would not supply the missing framework package.
- Existing disk build remains `qozzm3JCprJi5MEqtAzZF`, not a runnable standalone
  deployment or fresh served proof. Registry DNS/timeouts in the existing log
  explain why downloads did not complete; current network availability was not
  tested. No concurrent successful repair is evidenced. No application listeners
  are present in the fresh listener inspection; no new process was started/killed.
- All95 captured src/tests/public hashes still pass, including source media;
  `git diff --check` passes. Package/lock/workspace have no tracked diff. Current
  SHA256s: package.json `caac429b4705874726b572cf6d736a9acb8f8b046a71b1f6e5f4ea9c20000127`,
  lock `45e6a0e918e21f38836cf696e98be8269d0c1dbc85d7bd36b90b98e070dcfd20`,
  workspace `cb4b426b95815dc59b3faed39f1471961993c9a2c945138860ef0eee7657d235`.
  These are fresh config identities, not reconstructed pre-attempt hashes. Existing
  dirty work/local configs/backups were not edited. Only this evidence document is
  updated by the diagnostic; no application damage is detected by captured hashes.

**Proposed minimum recovery, NOT executed:** request owner approval for
`pnpm install --frozen-lockfile` at repository root with existing pnpm12.4.1 and
Node24.21.0, once registry connectivity is available. Preserve lockfile, dependency
versions, allowBuilds restrictions and all sources; stop/report any frozen-lockfile
or policy failure rather than regenerating locks, enabling scripts, upgrading or
deleting caches/output. No persistent pnpm configuration change is presently
justified. If install prevention for later read-only/preflight commands is desired,
the documented `verifyDepsBeforeRun: error` mode can be considered separately;
it does not restore missing packages and has not been applied. R5 remains unchecked,
zero fresh native cases; R6 and subsequent tasks remain untouched. Stop for owner
authorization before any recovery or further R5 testing.

#### R5 authorized environment recovery checkpoint — 2026-10-22

- Coordinator-supplied authorization: the owner answered **“continuemos”** directly
  to the request to run `pnpm install --frozen-lockfile` to restore dependencies
  without updates or build-script permission changes. This contextual approval
  authorizes only that recovery, not publication or additional scope.
- Before installation, actual Node **v24.21.0** and pnpm **12.4.1** matched the
  required toolchain. Git status/diff and a fresh7,458-file hash baseline were
  captured, including existing local agent/config/backup trees and their contents.
  All95 prior src/tests/public hashes passed; package/lock/workspace hashes matched
  the diagnosis above. Existing `allowImportingTsExtensions: true` was preserved.
- Ran exactly `pnpm install --frozen-lockfile` at repository root: **exit0**.
  The log reports lockfile policy acceptance, resolution skipped and completion in
  22ms with pnpm12.4.1. No DNS/registry error or blocked-script warning was reported.
  No retry, alternate registry, configuration edit, permission change, dependency
  update or cache/output deletion was performed. This output does not establish
  that packages were downloaded in this invocation or attribute any intervening
  dependency restoration since the previous diagnosis.
- Post-command local package manifests report Next **16.3.5**, React/React DOM
  **19.2.8** and TypeScript **5.9.3**, matching the lockfile. Both the local Next
  launcher and framework entry are available. Direct
  `./node_modules/.bin/next --version` returns **Next.js v16.3.5**, exit0,
  without invoking pnpm run/exec or starting a server. Minimal package/binary
  readiness passes; full dependency/runtime/application validation is not claimed.
- Before this evidence append, all7,458 baseline file hashes were unchanged, with
  none missing; Git status and tracked diff were identical. Package, lockfile,
  workspace, compiler configuration, source/media and existing local agent/backup
  files remain byte-identical. This batch changes only this validation document.
- Logs and baseline: `/tmp/opencode/spec005-r5/recovery-2026-10-22/`, including
  `install.log`, `install.exit-status`, `readiness.log`, `next-version.log`,
  `baseline.json`, `preservation.json` and `prior-source-check.log`. Documentation
  whitespace/consistency and final preservation checks are recorded for this batch.
- Environment recovery checkpoint is ready for coordinator handoff. **R5 remains
  unchecked**, with zero new native lifecycle/audio/browser cases; R6 was not
  started. No tests were created/modified, and no tests, typegen, lint, typecheck,
  build, browser checks or servers were run. The disk R4 build remains historical,
  not served-build proof. No MEMORY/AGENTS/spec/plan/task edit, staging, commit,
  push, deployment or publication occurred. Traceability is preparatory R5
  verification for RF-3–8/RF-11–12 and RNF-1–2/RNF-4–6, not requirement completion.

#### R5 live lifecycle checkpoint — 2026-10-22

Approved revision2/task dependencies rechecked; R5 alone remains assigned. Fresh
baseline: `/tmp/opencode/spec005-r5/live-2026-10-22/` (Git status,95 source/media
hashes, listeners). No application listener existed. Owned production launch uses
`pnpm start --hostname 127.0.0.1 --port 3111`; pnpm50813/Next50913, repository CWD
to be rechecked before cleanup. Next16.3.5 reports Ready; MCP isolated page2 loads
English Projects. Disk R4 build `qozzm3JCprJi5MEqtAzZF` is now running, pending
served identity capture; its earlier checks are still historical, not fresh R6.
No install/recovery/configuration change occurred. MCP window resize failed because
the window is maximized; viewport emulation succeeded at1440×900/light instead.
No lifecycle case is counted yet; no code/test/task change. Owner audio-content
confirmation remains the basis for privacy, not agent hearing. Further batches
will record actual native actions and results separately; R6–R10 are untouched.

R5 production batch1: **64/64 lifecycle cases pass**, eight conditions
(en/es ×light/dark ×390/1440,900px high), each initial/shifted ×image/video
×native pointer/Enter opening. Every case checks own media kind, one modal,
initial Close focus, paused video, unchanged three-project composition/offset/status,
native forward/reverse Tab traversal, blocked background focus, caption interaction,
inside→outside press/drag retention, wheel-resistant fixed-body lock, closure and
exact connected origin/scroll/style-value+priority restoration. X/image-pointer,
Escape/keyboard and true backdrop/video-pointer closure are covered. No inline
audio/video remains. Native Tab can temporarily focus BODY/browser chrome, but
never a background control; this is native-dialog behavior, not an app focus trap.
Artifact: `prod-lifecycle.json`, saved after each case in the live directory.

Separate MCP opening of the initial visible video neighbor used native Play click:
paused=false,time0.383129,RMS0.5462507303108773 (Web Audio analyser connected to
the media output). Subsequent Escape was after the short clip; it proves removal/
restoration, **not active-playback audio cessation**. MCP JSON artifacts preserve
that distinction. MCP fetch confirms served HTML contains R4 build ID. Active
audio exit/error/route and full native controls remain pending.

Preserved failed harness: `failed-harness-missing-enter-text.json`. The first
pointer case passed; the subsequent Enter timed out because CDP keyDown omitted
the Enter text/keypress. Minimal reproduction failed without CR text and opened
with it; harness corrected, production batch rerun completely. No app defect or
code change. An earlier native-AX probe queried before controls were ready and
found no Play; a later AX capture contains the controls. These failed probes are
not counted as passing cases. Isolated supplemental Chrome uses only its own
temporary profile/loopback9335; no user browser/profile changes or new tools.

R5 batch2: development repeats the same **64/64 lifecycle cases**, eight
locale/theme/width conditions (`dev-lifecycle.json`), including Strict Mode's
setup/cleanup. Combined lifecycle total128/128, not R7 matrix coverage.

Active-audio batches: **20/20 production +20/20 development cases pass**
(`prod-audio.json`, `dev-audio.json`). Each mode has en/es ×light1440/dark390;
each condition separately exercises X, Escape, true backdrop, actual failed-media
load and same-document route Back while the5.681s video is actively playing.
Every case uses a genuine native Play pointer click (no `play()`), observes
paused=false and nonzero Web Audio RMS before exit, then RMS exactly0, paused
retained node, removed src/player and no connected audio/video. Sixteen reopenings
per mode stay paused,time0,RMS0. Failure uses a deliberately nonexistent temporary
video URL in the browser only, producing a real error; no catalog/source fixture.
Route Back returns to About in the same document, releases exact prior style
values/priorities and never calls the detached origin's focus. Scroll-call logs
are preserved for checking new-route behavior. No agent listening is claimed.

Native controls batch is unfinished: Play click succeeded, then the harness
searched for Spanish “pausa” while the actual native AX label is “pausar”. The
playing AX diagnostic confirms this mismatch; no application failure or correction.
`prod-controls-error.json` preserves the failed probe; it is not a completed
Play/Pause/Space/volume/seek case. Remaining: correct the harness label, complete
native controls, MCP development supplements, identity/preservation/cleanup.

R5 batch3: **20/20 additional active-audio cases per mode in shifted composition**
(`{prod,dev}-audio-shifted.json`), same five exits/conditions as above. All non-route
closures additionally compare all project selections/offsets, exact focus and
scroll after active playback/error. Combined active-audio total **80/80**, with
64 paused,time0,RMS0 reopenings;40 initial and40 shifted. Route evidence has zero
viewer-origin focus calls and zero scrollTo calls; restored About scroll positions
672/1351(en),698/1402(es) differ from the old Projects position, with prior inline
style values/priorities restored. Both documents are same-document client routes.

Native control suites: **4/4 pass** (dev/prod ×en/light1440 and es/dark390).
`{prod,dev}-controls.json` records native pointer Play, native pointer Pause,
Space resume and Space pause (real key input on video), keyboard ArrowDown volume
1→0.99, and ArrowRight seek on the actual native timeline: slider value increases
and a real `seeking` event fires while paused. Native controls remain inside the
modal; actual Tab AX sequence includes video, Play, volume, mute, fullscreen,
options, timeline and Close, never background controls. No custom player or JS
`play()` substitutes. Slider focus was prepared via CDP on the UA control; arrow
inputs, not script assignments, changed its value. Native labels are Spanish in
this browser regardless of app locale, as permitted.

Preserved additional failed harness probes: a guessed >0.1s aggregate seek change
after three rapid keys failed (actual deltas~0.05–0.06s). This is not an approved
requirement nor an app defect; native seek updates are asynchronous. The corrected
measurement waits and records the actual native slider change plus seeking event,
not an invented step size. Earlier single-key suites are retained separately and
not added to the4 final suites. No failed harness is represented as an app pass.

MCP dev supplement: es/dark390×844, shifted image neighbor opened via real Enter,
localized Close focused, full unmasked image and adjacent caption against visible
gray blurred page inspected in `mcp-dev-es-dark390-image.png`; Escape restores exact
origin/all three project states (`mcp-dev-shifted-{before,restored}.json`). Console
has only a Next development unused-preload warning, no related error. One stale
snapshot UID click was rejected without action; fresh snapshots are used afterward.
No app changes were necessary. Final identity/preservation/cleanup remains pending.

R5 final supplements: **4/4 cases pass** (`supplement.json`), dev/prod ×390/1440.
Second/third-project origins restore exactly while another project remains shifted;
image-body clicks and outside-press→inside-release retain the viewer, true outside
press/release closes it. Distinct root/body overflow values with mixed `important`
priorities, plus pre-existing position/top/left/width/padding, restore byte-for-value
and priority. A failed supplemental selector assumed sibling articles, but each
article is inside its own list item; corrected after reading ProjectList. Another
probe captured offsets immediately after changing body sizing, before ResizeObserver
settled; settling the test setup restores exact offsets. Both failed harness records
are preserved separately; no gallery/viewer change was made.

MCP additionally clicked actual native Play then Pause in dev es/dark390
(time0.141857 playing→paused0.378936), then Space resumed (0.587662) and Space
paused (0.785296); method-specific JSON is saved. Production en/light1440 image
click stays open; inspected screenshot and measurements retain gray28%/blur12px,
full16:9 unmasked media,44×44 X, corner deltas0/~0px. MCP production console has
no warning/error. These supplements are not inflated into the128/80 counts.

Fresh identity checks: **16/16** mode/locale/theme/390-or1440 conditions report
the expected actual viewport, `data-theme`, language and zero inline players
(`condition-identity.json`). Chrome156 on Linux; no physical device, other browser,
screen-reader or human audio listening coverage. These are bounded R5 lifecycle
conditions, not R7's160-condition text/default-font matrix or R8 fixture coverage.

Source/served identity (`served-identity.json`): production3111 HTTP200 includes
`qozzm3JCprJi5MEqtAzZF`;12 served asset hashes recorded. Development3112 HTTP200,
18 served asset hashes recorded. Both serve the exact PNG/MP4 bytes matching local
source hashes. The three gallery/viewer/CSS hashes still match the documented R4
identities above. No new production build is claimed; this is fresh native evidence
on the served R4 build and unchanged current development sources. R4's six checks
(44 tests passing,2 origin integrations skipped) remain historical, not fresh R6.

Preservation: all95 live-baseline src/tests/public hashes pass. Comparison to the
existing7,458-file recovery manifest finds no missing files and only MEMORY
(already dirty at entry, coordinator-owned) and this validation document changed.
No app/test/media/config/package/lock/global/shared/local-agent/backup change; no
source fixture, install, dependency/config repair, stage/commit/push or publication.
This documentation-only task requires `git diff --check`, which passes; no fresh
typegen/lint/typecheck/pnpm-test/build or explicit-origin suites are claimed.

Pre-existing notices on unchanged sources: dev server logs report React's missing
child-key warning for ProjectGallery children passed from ProjectList (already
present on the first dev request, before any media-error probe), contextual About
portrait LCP warnings during Back-history setup, and an unused CSS preload warning
in MCP. No code changes in R5 could have introduced these; they do not prevent
native lifecycle verification and are reported, not repaired. Intentional browser-
only failed-video URLs produce expected404s. No new lifecycle regression found.
Final owned-resource cleanup and checkbox update follow after ownership checks.

**R5 completed (2026-10-22), no application code correction required.** Final
fresh results:128/128 lifecycle cases,80/80 active-audio exits (64 paused/silent
reopenings),4/4 native-control suites,4/4 mixed-priority/other-project/backdrop
supplements and16/16 condition identities. Audio RMS before exit ranges
0.03354569746652121–0.12355091823436717 across the80 cases; every after-exit sample
is exactly0. Privacy/audio-content acceptance remains explicitly owner-attributed.
Live95-file source manifest SHA256:
`ec3233f081c506f1377542fec618532c74421abacdbf2291357b4780607a4aa6`.
No missing/historical native cases were reused as fresh proof.

Cleanup verified actual CWD/cmdline before signalling only owned production
Next50913 and dev CLI56628 (pnpm50813/56524, dev Next56649); production wrapper
exited143 following intentional TERM, dev exited normally. Owned isolated Chrome
52121 was closed with CDP Browser.close; only owned MCP page2 was closed, preserving
the pre-existing blank page1. Fresh listeners/process inspection confirms3111,
3112 and9335 closed and those owned processes absent. No application server existed
at entry; unknown/tool processes and listeners remain untouched. Final Git status
is identical to entry (spec directory already untracked);95 source/media hashes
and `git diff --check` pass. Evidence/checkpoint files remain under the live directory.
Only repository changes by this R5 run are this appended evidence and R5's checkbox
in tasks.md. MEMORY/AGENTS/constitution/spec/plan and all unrelated tasks remain
untouched. R6–R10 are still pending; no subsequent task was started.

## Revision 2 — R6 fresh final-source checks (2026-10-22)

R6 only; approved revision-2 spec/plan/tasks and completed R1–R5 were read with
AGENTS, constitution, MEMORY and the latest R5 evidence. Administrative approval-time
prose saying all tasks are unchecked is historical; the individual checkboxes and
dated evidence establish the current dependency state. No application, test,
configuration, dependency or asset changes were needed. TDD is not applicable to
this validation/documentation-only task. R7/R8 browser work is not started.

### Durable checkpoint and exact fresh results

Evidence is stored alongside this document in [`revision2-r6/`](revision2-r6/),
not solely in temporary directories. Logs contain actual command output;
`results.json` records exit codes, counts and identity. All six commands exited0:

| Command | Result | Log |
| --- | --- | --- |
| `pnpm exec next typegen` | Pass | `typegen.log` |
| `pnpm lint` | Pass | `lint.log` |
| `pnpm exec tsc --noEmit` | Pass | `typecheck.log` (empty successful output) |
| `pnpm test` | 46 total,44 pass,0 fail,2 skipped | `test-default.log` |
| `pnpm build` | Pass; new build `WofW6fRTdJAvg014bS9mX` | `build.log` |
| `git diff --check` | Pass (empty successful output) | `diff-check.log` |

Runtime: Node24.21.0, pnpm12.4.1, Next16.3.5, React19.2.8, TypeScript5.9.3.
The default skips are exactly the two opt-in HTTP integration contracts, not
passing integration evidence. Fresh explicit-origin commands, each exited0:

```bash
LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 SITE_ICONS_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test
LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3112 SITE_ICONS_TEST_ORIGIN=http://127.0.0.1:3112 pnpm test
```

Production: **56/56 pass,0 fail,0 skipped** (`test-prod.log`). Development:
**56/56 pass,0 fail,0 skipped** (`test-dev.log`). Each total includes ten nested
localized404 HTTP cases. Both variables point to the same verified origin in
each run; neither integration contract was skipped. These are HTTP contracts,
not native no-JavaScript keyboard recovery or visual/browser matrix evidence.

### Fresh source, build and actual HTTP identity

HEAD remains `c5ee587370113b4688c9c7f2e9178cbf8466a5fa`; dirty source and
coordinator MEMORY changes predate R6 (`entry-status.txt`). No application listener
existed at entry, including3000/3111/3112 (`listeners-entry.txt`); historical owner
preview PIDs were not trusted or stopped. Started only:

- Production: `pnpm start --hostname 127.0.0.1 --port 3111`, pnpm68221,
  Next68321; repository CWD, origin `http://127.0.0.1:3111`.
- Development: `pnpm dev --hostname 127.0.0.1 --port 3112`, pnpm68382,
  CLI68483, Next68510; repository CWD, origin `http://127.0.0.1:3112`.

`process-ownership.json` records actual listener PIDs, command lines, CWD and
parent chains. `prod-server.log`/`dev-server.log` retain readiness/request output.
`served-identity.json` records actual en/es Projects HTTP200 responses, three
initial project blocks and six media cells each, HTML hashes and all referenced
static asset fingerprints:12 production/18 development. Every served asset's
SHA256 equals its decoded on-disk `.next/static/` or `.next/dev/static/` file.
Production HTML contains the **new** BUILD_ID `WofW6fRTdJAvg014bS9mX`, not R4's
`qozzm3JCprJi5MEqtAzZF`. Development is identified by current-source/served-chunk
hashes, not assigned a production build ID. Compiled JS/CSS contains current
`data-strip-offset`, `data-media-preview`, Home `media-frame-02.svg`, backdrop
filter and `blur(12px)` markers. This establishes current compiled strip/viewer
identity, not geometry, compositing, responsive behavior or R7 compliance.
Both origins also serve the exact local PNG/MP4 bytes with HTTP200.

### Preservation and bounded limitations

`source-before.sha256` and `source-after.sha256` are byte-identical full manifests
of **107 files**: every file under src/tests/public (including all new untracked
005 implementation/tests/assets), plus12 root files including AGENTS, README,
CLAUDE and all root package/lock/workspace/Next/ESLint/PostCSS/TypeScript/Git/Node
configuration. This is95 application/test/asset files +12 root files, not a
selection omitting new files to reproduce a historical count. Manifest SHA256:
`d0dd23b7491a24ec9a754f991683a125e6f9f4aa05566585277aaa7eb1f69450`.
All95 entries of R5's actual source manifest also match. Excluded from this
application manifest: generated next-env/tsbuildinfo/.next, dependencies, Git
internals, separate documentation/MEMORY and local-agent populations.

`documentation-before.sha256` separately guards all pre-existing docs/spec files,
MEMORY and generated next-env (no manual generated-file edits). Only this
validation append and the R6 checkbox are permitted documentation differences.
`head-protected.sha256` independently verifies105 tracked files byte-identical
to HEAD, excluding the already approved005 implementation/message/compiler
changes and pre-existing coordinator MEMORY. Thus Home, About, shared chrome,
fonts, SVGs, favicon, contacts, routing and metadata remain unchanged.

The current local-agent/config/backup population is **19 files**, enumerated in
`local-protected-{before,after}.sha256`, all unchanged. The directories `.agents`
and `.opencode/commands` are already empty at R6 entry; the historical29-file
population is not asserted to exist now or silently reconstructed. No local file
was removed by R6; this discrepancy is reported for coordinator awareness.

Catalog inspection and passing authoritative-data tests confirm exactly three
ordered projects, the original image-first/video-second pair for each, no live
destinations, `images: []` (Home receives no samples), and no remaining production
fixtures. Empty/single/mixed configuration tests pass without source mutation.
Compiler options remain `strict: true`, `noEmit: true` and the previously authorized
`allowImportingTsExtensions: true`; its single-line HEAD diff is unchanged.
Original T1 sample hashes remain:

- PNG640×360: `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`.
- MP41920×1080: `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.

No install/automatic recovery, flag/config edit, cache deletion, generated-file
hand edit, fixture, dependency update, stage/commit/push or publication occurred.
Audio-content/privacy disposition remains owner-attributed; no listening or new
media review is claimed. No tests were created/modified. No browser/visual checks
were needed for this validation-only task; R5 remains separate historical native
evidence and R7/R8 remain pending. No new related validation failure was found.
R5's React child-key/LCP/preload warnings are pre-existing reported context, not
repaired or claimed reverified by this HTTP-only run; current server logs show no
such warning during these requests. The inherited shared-header exception is
also outside R6; no overflow-free site claim is made.

One supplemental preservation harness failed because newline `git ls-files`
quotes a non-ASCII About filename. Diagnostic comparison confirmed the exact
quoted-vs-actual path; using NUL-delimited `git ls-files -z` fixed only the harness,
and all105 protected comparisons passed. No asset/application defect or changed
test expectation; no failed harness is counted as a passing command.

All required checks and integrations now pass on the unchanged identified final
sources. Owned-server cleanup and final preservation/whitespace recheck follow
before marking R6; no later task is authorized by this checkpoint.

**R6 completed.** Cleanup reverified current `/proc` CWD/command lines before
signalling only owned production Next68321 and dev CLI68483. Production wrapper
exited143 after intentional TERM; development exited normally. Final inspection
confirms3111/3112 closed and pnpm68221/68382, CLI68483 and Next68321/68510 absent
(`cleanup.json`, `listeners-final.txt`). Unknown/tool processes were untouched;
no browser resource was created. All107 source/config files and19 currently
present local files remain unchanged, as do MEMORY/AGENTS/constitution/spec/plan,
all unrelated existing documentation and generated next-env. Source populations
were re-enumerated to detect additions as well as changed hashes. Only the R6
checkbox changed in tasks; final `git diff --check` passes after documentation.
Repository additions are durable R6 evidence only. RF-1–12/RNF-5–6 receive these
bounded automated/preservation checks, not a claim of full visual acceptance.
R7–R10 remain unchecked and unstarted; no publication or further task follows.

## Revision 2 — R7 native layout matrix (2026-10-22)

**Actor/method:** R7 implementer, not independent reviewer or owner. Approved
revision2/spec/plan and checked R1–R6 were read, together with AGENTS, constitution,
MEMORY, current gallery/list/projection/viewer/Home MediaFrame/mask and R6 evidence.
Existing dirty work was preserved. No application, unit test, original media,
shared source, dependency or compiler change was needed. No R8 fixture suite,
commit, publication or owner-acceptance claim follows from this validation.

### Attributable sources and execution

Durable evidence: [`revision2-r7/README.md`](revision2-r7/README.md), with actual
per-condition JSON, scripts, representative captures and diagnostic records.
Full raw checkpoints/captures: `/tmp/opencode/spec005-r7/`. Both locations were
written incrementally; durable matrix records were subsequently compacted without
removing individual condition/state geometry.

Entry had no app listener; no historical preview PID was trusted. Started owned
`pnpm start --hostname 127.0.0.1 --port 3111` and
`pnpm dev --hostname 127.0.0.1 --port 3112`, repository CWD, production Next72108
and dev CLI72288/Next72313. `server-ownership.txt` records live ownership.
Fresh `served-identity.json` verifies en/es HTTP200, current production BUILD_ID
**WofW6fRTdJAvg014bS9mX**, and every served static asset against its local bytes:
12 production and18 development. Dev is identified by current sources/chunks, not
assigned the production build ID. All107 R6 source/config hashes still match;
manifest SHA256 remains
`d0dd23b7491a24ec9a754f991683a125e6f9f4aa05566585277aaa7eb1f69450`.

The six AGENTS checks and default44-pass/2-skip test run remain **R6 results on
these identical sources**, not newly run R7 checks. Both R6 explicit-origin runs
remain56/56, zero skipped, with BOTH integration variables; R7 does not relabel
them fresh. This validation-only task freshly checks browser behavior, source/
served identity, protected bytes and `git diff --check`.

Chrome DevTools MCP was used for actual pointer/keyboard opening, composition,
image/video glass captures and representative five-width/normal/150% review.
`mcp-five-widths-text.jpg` contains the actual MCP captures; four separate MCP
WebP copies show ES1440 dark initial/shifted and ES390 light image/video. Native
Chrome156 CDP supplements use the already installed executable, two **owned
isolated** profiles and genuine browser-default preferences16/24. No personal
profile, blocked chrome:// page, OS setting or installed tool was changed.
Every matrix row verifies viewport/height, theme, root text size, an unstyled
iframe default and rem-query thresholds. Default24 is not a root24 substitution:
normal/150% roots are24/36px, while its rem queries still resolve against24.
MCP's own unstyled/rem proof confirms default16 even when root text is24px.

### Matrix result and geometry

**160 unique conditions:** dev/prod ×en/es ×light/dark ×320/390/768/1024/1440
×normal/150% ×native default16/24, actual height900. Each row records initial and
shifted strips across all three projects, plus open image and video: **640
page-level states**, including320 viewers and960 project-level strip states.
Supplementary attempts/captures are not counted as extra unique conditions.
All160 geometry checks pass;152 conditions have no inherited document exception,
and eight retain the separately isolated shared-header exception below.

`matrix-{16,24}.json` and `checkpoint.json` establish:

- Full, unclipped item width/height delta is **0px** across both states; clipped
  intersection widths change separately. First image remains left, second gains
  exposure; minimum visible trigger width is48px and app targets remain≥44px.
- Initial actual heading/media midpoints agree at nominal1024/1440/default16/
  normal text: maximum delta **0px**. Arrow-pair vs whole-project midpoint maximum
  delta **0.015625px**, within1px. Controls stay below the content in both states.
- Four reset observations per row (two cycles in each direction) restore title
  height/relative position, strip-relative position and original offset exactly:
  maximum measured reset delta **0px**. Arrow DOM identity remains stable and
  arrow-transition spies observe no app `scrollTo`/`scrollIntoView` call.
- Every viewer shows full intrinsic16:9 media, `contain`, no mask/filter, borderless
  transparent content and neutral128-gray28%/blur12px backdrop; media remains
  nonzero and within viewport. Maximum measured aspect-ratio deviation is0.000023.
  X is44×44 and its right/bottom edges match actual media right/top within1px,
  not viewport or letterbox. Caption and X remain reachable. At the most enlarged
  narrow setting the caption has its bounded scrolling region, not collapsed media.
  Native video controls remain browser-owned and initially paused.

The implementer actually read all eight native contact sheets (five widths/two
text settings for both defaults and four states), MCP five-width/text sheet,
standalone narrow image/video, dark glass and wide initial/shifted captures, and
actual Home/Projects render comparisons. This checks recognizably blurred page
behind a gray surround, not a giant gray/black panel, while full media remains
clear. Native video language/targets are not misrepresented as app-localized44px.

### Focus, orientation, motion, contour and contrast supplements

- **1,280 Enter activations pass**,640 per native-font profile: both modes,
  locales/themes/five widths,150% text, long EN/ES titles, arrows launched near
  bottom and below sticky header, both directions/four repeated activations.
  Actual viewport rectangles remain below header and above viewport bottom with
  visible focus, exact active control, unchanged scroll and zero transition scroll
  calls. Long-title fixtures modify DOM heading/reservation slots only; navigation
  restores them, no source/catalog fixture was created. Setup scrolling is logged
  separately from prohibited gallery scroll correction.
- **128 resize geometry checks pass**,64 per profile: both modes/locales/themes,
  image/video,320×900→900×390→390×900→1440×900. Full source stays nonzero/aspect-fit,
  X remains on media corner with44px target, caption stays reachable and underlying
  gallery state remains present. These are bounded R7 fit checks, not completion
  of R8's lifecycle/configuration fixture suite.
- **16 settled reduced-motion supplements pass**,both modes/locales/themes and
  defaults. Native media query is enabled, waiting does not advance any gallery;
  Enter changes only the chosen gallery. Detailed settled probes have no running
  animations. Earlier immediate animation-state lists are retained separately,
  not silently called zero or counted as a full playback/interaction suite.
- Actual Home and Projects frames were captured in both themes. Cloned actual
  frame nodes with identical solid fill/no shadow at600×380 produce **byte-equal
  RGB raster silhouettes** in both themes (`contour-comparison.json`); original
  page renders were also visually inspected. No Home/shared/mask change occurred.
- Computed RGBA plus screenshot sampling gives body/large title/arrow-focus
  contrast **7.39:1 light/13.61:1 dark**, muted description **6.22/11.91:1**.
  Caption fill vs actual2px glyph halo is **7.39/13.61:1**, keeping text legible
  over varied underlying imagery without an opaque notice bar. Ten representative
  native24/150% viewer captures sample actual blurred adjacent X background;
  minima **5.53:1 light/9.26:1 dark**, above3:1. These sampled measurements are
  not claimed to exhaust every possible background pixel. Visible media focus
  and arrow outlines were also inspected in the MCP sheet.

### Inherited issues, failed harnesses and boundaries

Exactly **eight current**320/default24/150% rows have document extent347px.
Hiding main leaves the identical347px extent in each row (`inherited` records).
No new Projects/viewer overflow was found; this is **not** a claim that the whole
site is overflow-free, and shared header source was not repaired.

The pre-existing React child-key warning from ProjectGallery/ProjectList appears
in development (already recorded by R5); no new browser error appears in the
matrix. It predates R7, whose sources are unchanged, and is outside this layout
validation. No unrelated warning/focus/header issue was fixed.

Failed attempts are retained in `failed-harnesses.json`: CDP could not serialize
FontFaceSet or an assigned DOM-node array; scalar/void results corrected only the
harness. Initial focus supplements performed two setup Tabs **after** launch
positioning, natively scrolling to another project before Enter:448/640 default16
and640/640 default24 attempts failed with the original arrow already offscreen.
Moving keyboard-modality setup before explicit launch positioning yielded the
separate1280/1280 pass run. Failed attempts are not counted as passing coverage.
Several first MCP screenshot calls after viewport/style changes timed out;
separate later calls produced the actual inspected captures. No failed screenshot
call is called a capture or a product defect; native per-row evidence is separate.

Final preservation/owned-resource cleanup and task disposition are recorded below.
No agent listening, new audio/privacy review, public distribution, independent
approval or owner visual acceptance is asserted. R8–R10 remain separate tasks.

**R7 completed.** Final guards (`revision2-r7/preservation.json`) verify all107
source/config,105 tracked protected and19 currently present local files unchanged;
MEMORY, AGENTS, constitution, approved spec/plan and original PNG/MP4 hashes match.
The historical29-file local population was not reconstructed. No application/test
change or fresh production build was necessary. Final `git diff --check` passes.
Only the R7 checkbox changes in tasks; validation append and durable R7 evidence
are the other task additions. Owned-server/browser cleanup reverified exact CWD/
commands/profiles, then closed production72108, dev CLI72288, isolated Chrome
72499/72717 and MCP page3. Ports3111/3112/9337/9338 and those PIDs are absent
(`cleanup.json`, `listeners-final.txt`); MCP page1/OpenCode and unknown resources
were preserved. Production wrapper143 is intentional TERM, not a build/test failure.
No unresolved new R7 defect was found. RF-1–6, RF-11–12/RNF-1–4, RNF-6 receive
this bounded visual/geometry evidence; R8's remaining fixtures/lifecycle checks,
independent R9 and separate owner R10 remain unchecked and unstarted.

## Revision 2 — R8 fixtures, interaction and preservation (2026-10-22)

**Actor:** R8 implementer, not independent reviewer or owner. Approved revision2
spec/plan/tasks, AGENTS/constitution/MEMORY, current gallery/data/viewer and actual
R5/R6/R7 records were read. R1–R7 were checked; only R8 was assigned. No application
fix was needed. Durable actions, scripts, captures, failed attempts and attribution:
[`revision2-r8/README.md`](revision2-r8/README.md). Records were checkpointed during
each batch. No R9/R10 work, final acceptance or publication is claimed.

### Sources, fixtures and fresh final checks

All107 application/test/asset/root-config bytes match R6/R7, manifest SHA256
`d0dd23b7491a24ec9a754f991683a125e6f9f4aa05566585277aaa7eb1f69450`.
Original catalog was backed up outside public; only that catalog was temporarily
changed. A four-project reordered fixture reused existing localized content keys:
five distinct-ID mixed sample items, zero media, one image and a fourth synthetic
record with failed image/video and unsupported PNG-as-video. No JSX branch, new
route, translated claim, actual asset or public fixture file was introduced.
One synthetic local HTTP destination exercised the real meaningful localized44px
link and native Enter navigation; javascript/ftp/fragment destinations were omitted.
Existing authoritative URL tests additionally retain other unsafe/absent cases.
An empty-list fixture showed the localized explanation without media/actions.

Both fixtures ran in dev/prod ×en/es ×light/dark (eight cases each). Mixed build
`MF1Bu8cmF2S4hJNeMC_ot` and empty build `uMI7ZK4ks93tCPZk7bNCE` are identified
in their actual JSON. Fixture source copies are durable `.fixture.txt` documents,
not final catalog configuration. Every temporary change was restored to the exact
entry bytes before final checks. A later distinct-neighbor supplement required
another fixture build; therefore the earlier restored-source `_2-C6p-U5l9RXxNEBcTlY`
checks are archived separately and **all six checks/integrations were rerun** after
the final restoration, rather than retaining a fixture production build.

Final production build: **`p4JBtnt3Vx1Ej5xfhOPdC`**. Owned production3111/dev3112
are bound to127.0.0.1 with repository CWD. `served-identity.json` verifies en/es200,
production BUILD_ID and each served static asset against its decoded disk path;
dev is identified by current-source/chunk hashes, not a production BUILD_ID.
Both origins return exact PNG310566-byte and MP47722052-byte originals, correct
image/png/video/mp4, and MP4 Range206 bytes0–1023/7722052. Original SHA256:
PNG `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`;
MP4 `bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`.

Fresh final outcomes (actual logs in revision2-r8):

| Validation | Result |
| --- | --- |
| `pnpm exec next typegen` | exit0 |
| `pnpm lint` | exit0; two pre-existing R7 evidence-script warnings, zero R8 warnings/errors |
| `pnpm exec tsc --noEmit` | exit0 |
| `pnpm test` | exit0;44 passed/2 origin-dependent skips,46 total |
| `pnpm build` | exit0; final build above |
| `git diff --check` | exit0 |
| BOTH origin variables, production3111 | exit0;56/56, zero skipped |
| BOTH origin variables, development3112 | exit0;56/56, zero skipped |

The two actual commands set **both** `LOCALIZED_404_TEST_ORIGIN` and
`SITE_ICONS_TEST_ORIGIN` to `http://127.0.0.1:3111` or `:3112`, respectively.
Default-run skips are not represented as passing required integrations. Node24.21.0,
pnpm12.4.1/locked Next16.3.5 remain. No install, dependency recovery, flag, cache
deletion, generated-file edit, staging/commit/push or publication occurred.

### Fresh interaction and configuration evidence

Final-source browser scripts were rerun after the last restored build:

- **Eight interaction cases**, both modes/locales/themes: direct Projects,
  actual footer client navigation with a same-document marker, reload and language
  switch preserve the Projects logical route. **192 Enter activations** cover two
  full two-item cycles per project per direction. Other galleries retain selection/
  offset; every zero restores heading size/relative placement, cell x positions and
  original offset. Full displayed cell dimensions stay constant, arrow DOM/focus
  remains stable and transition spies see no scroll correction. Polite localized
  status text retains project identity/position. These are DOM/AX checks, not a
  claim of screen-reader speech verification.
- **24 final-pair neighbor openings** use actual click, touch and Enter. Only the
  activated video opens, paused/time0, one modal and no inline player. Selection/
  offset remains unchanged; Escape returns to the exact connected originating
  button. MCP separately clicked Next, opened the retained first-image neighbor
  from the shifted strip, inspected full glass media and restored its exact origin.
- **160 five-item fixture activations**,20 per case, verify two full cycles in
  each direction, true counts/order, unchanged dimensions for displayed items,
  full reset, stable keyed elements, hidden-item inertness and no hidden Tab stops.
  **24 further click/tap/Enter openings** activate the distinct third-image
  predecessor while the fourth-video remains selected; the actual image/source
  opens, not the selected video, and the exact origin/position/offset survives.
  Visible partial targets remain≥44px. Fourth record/order/content come solely
  from data; zero/single omit arrows, single enlargement works. **24 genuine media
  failures** retain localized unavailable/Close, navigation and origin restoration.
- Reduced motion in all eight interaction cases preserves idle/manual selection
  with no settled running animation or automatic player. The shared existing
  reduced-motion rule uses0.01ms transitions; an immediate pre-settlement snapshot
  is retained as a failed harness assertion, not claimed to be zero animations.
  R7's more detailed motion/geometry evidence remains separately attributed.
- **128 resize observations**,32 sequences covering both modes/locales/themes,
  initial/shifted compositions and image/video. Actual browser-default24 is proved
  with unstyled iframe24/rem query and150% root36, not root substitution. Across
 320×900→900×390→390×900→1440×900 selected identity/status stays unchanged;
  nonzero full16:9 media fits, no viewer mask/crop, Close44 stays at actual media
  corner, bounded caption stays reachable, video stays paused/time0. These fresh
  R8 rows supplement, not inflate, the separate R7 matrix.

### Native controls, teardown and conserved lifecycle

**40 fresh audio-active exits** on final sources: eight mode/locale/theme cases
×X/Escape/true backdrop/native error/client-history route exit. Every closure has
an immediately preceding native Play click, `paused:false`, `ended:false`, time
0.162540–0.182857 of5.681333 seconds and positive analyser RMS (minimum0.0335457).
Thus zero afterwards cannot be attributed to the short video having already ended.
Every exit pauses/releases/removes the player/source and yields RMS exactly0.
All32 tested same-route reopenings remain paused/time0; route exits preserve the
new route and release body lock without restoring a detached trigger.

**Eight fresh native control suites** actually click native Play/Pause, use Space
for manual resume/pause, decrease native volume with ArrowDown and advance native
progress with ArrowRight. Progress also receives actual pointer seeking and a drag
ending outside; a media-origin drag ending outside likewise does not dismiss.
True outside press/release does dismiss. These methods are logged distinctly,
not programmatic `play()` or keyboard input mislabeled as a clicked native action.
Tab passes through native controls/modal Close and browser-boundary BODY; no
background control becomes a Tab stop and direct origin focus remains blocked.
This native browser boundary is recorded rather than claiming that browser chrome
is controlled by an app focus trap. Native control language/target sizes remain
browser-owned. MCP's fresh final production390 EN capture shows native paused0
video, full aspect media, simple corner X and recognizable gray blurred page;
fresh final dev/prod MCP console reads returned no messages.

R5's128 lifecycle cases,80 audio-active exits,64 paused reopenings and four native
control suites remain **conserved R5 evidence**, not fresh R8 counts. Copies under
`conserved-r5/` include exact scroll/origin/style-priority preservation, route
cleanup, gestures and native limitations. All95 original R5 source hashes were
freshly compared and still match (`source-current.log`); original R5 build identity
is preserved. This supplements fresh R8 fixture/error/native actions without
blindly replaying every previously verified case. R7's160-condition/640-state
matrix,1280 edge Enter probes, Home contours and contrast also remain **R7** on
identical application bytes; no application fix required affected-row reruns.

WebAudio media-element analyser RMS is a technical output/cessation measurement,
not human hearing. The retained sample-specific owner confirmation/authorization
is the audio-content/privacy basis; no new privacy review, listening, transcription
or distribution clearance is invented.

### Preservation, failed harnesses and limits

Fresh eight-case Home/About/shared-shell probes verify Home's nine carousel
copies/outer-six inert, static honest placeholders without sample images/players,
continuous motion, manual pause and native ArrowRight. About's original portrait
loads within its hero mask, fonts load, four symbols remain upright above -15°
organic backgrounds and footer links retain44px targets/verified contacts. Metadata,
root favicon and both explicit-icon integration contracts pass. Four additional
JS-disabled native404 runs (dev/prod ×en/es) return genuine HTTP404, then actual
Tab→Enter on the main Home link returns localized Home200. Tests/hash guards
complement these proportionate browser checks; a whole new shared-site audit is
not claimed.

`preservation.json` guards107 current sources/config,105 HEAD-protected files,
19 currently present local configs (not the historical29), protected documents,
and populations as well as hashes. Home/About/shared chrome/carousel, navigation,
providers/fonts/palette/icons/metadata/routes are unchanged. Catalog is the original
three projects/image-first-video-second pairs, no destinations, `images: []`;
`strict`, `noEmit` and existing `allowImportingTsExtensions` are untouched.

Failed attempts remain separate: DOM-node CDP serialization, immediate transition
sampling, display:none0px comparison, native BODY-boundary expectation, wrong
About-mask expectation, and local dependency enumeration. These were diagnosed
and corrected only in the harness, not counted as product passes. A combined
120-second shell run completed interaction/resize/native and page preservation
but timed out before native404 completion; the complete preservation/404 script
then ran independently and passed. Initial MCP screenshot timeout and maximized
window resize failure are explicit; separate screenshot/viewport-emulation calls
succeeded and the inspected artifacts actually exist. No nonexistent JSON is cited.

The known eight320/native24/150% shared-header347px exceptions remain R7-isolated,
not fixed or described as site-wide overflow-free. The pre-existing React child-key
warning recurs in dev server logs (already in R5/R7); two R7 evidence-script lint
warnings are also pre-existing. No related application failure was introduced.
No physical devices, other browsers or screen-reader speech were validated.
Final protected-source/owned-resource checks and R8 disposition follow below.

**R8 completed.** Final guards again confirm unchanged107 source/config bytes,
105 HEAD-protected files and19 actual local configs; approved documents/MEMORY/
AGENTS/constitution match entry, original samples and catalog are restored. The
final whitespace check passes. Ownership was reverified immediately before TERM
of final production Next166098, dev CLI135529 and isolated Chrome135780; exact
CWD/commands and absent ports3111/3112/9338 are recorded in `cleanup.json`.
MCP page4 was closed; original page1 and unknown/tool processes were preserved.
Intentional production wrapper143 is cleanup, not a failed validation.
Only durable R8 evidence, this validation append and the R8 checkbox remain as
task changes; no application/unit-test/configuration change remains. RF-1–12 and
RNF-1–6 receive the bounded fresh/conserved evidence above. No new related defect
or unresolved verification blocker was found. R9/R10 remain unchecked and unstarted;
the coordinator owns subsequent independent review and separate owner acceptance.

## Revision 2 — independent R9 findings and automatic correction cycle 1 (2026-10-24)

The coordinator supplied the independent R9 disposition: all other applicable
RF-1–12/RNF checks passed, but the React child-key console.error is a technical
noncompliance. Final owner acceptance remains a separate pending R10 gate.
`revision2-r9-correction1/conserved-review-checkpoint.json` preserves the reviewer's
actual checkpoint: old build `p4JBtnt3Vx1Ej5xfhOPdC`,107-source manifest
`d0dd23b7491a24ec9a754f991683a125e6f9f4aa05566585277aaa7eb1f69450`, fresh56/56
explicit-origin tests in each mode,16 native24 conditions and audit limits.

| R9 finding | Classification and current disposition |
| --- | --- |
| React console.error: unique key; ProjectGallery received h2 from ProjectList | Introduced within Spec005, **not an exempt pre-existing unrelated defect**. Implementer correction below passes fresh checks; independent recheck remains pending. |
| Final owner visual/behavior acceptance | R10 pending; neither requirements approval nor technical checks replace it. No publication authorization. |

**Historical classification correction:** R5/R7/R8 descriptions calling this key
warning “pre-existing” meant it existed before those individual tasks. They must
not be read as outside Spec005: protected HEADc5ee587 contains no ProjectGallery.
Earlier log observations and reviewer history are preserved, not erased. The two
R7 evidence-script lint warnings and inherited eight shared-header exceptions
remain separate, unrelated issues; this correction does not repair them.

### Implementer corrective pass — exact root cause, red → green and scope

`ProjectList` supplied an unkeyed h2 via its heading prop; `ProjectGallery` rendered
that element alongside two static aria-hidden heading-space spans. The outer li's
key belongs to a different sibling boundary. There is only one semantic h2 per
project, no duplicated heading or application-authored dynamic heading array.
Native fiber diagnostic confirms received `heading.type:h2/key:null`; React's
error stack names its owner and the receiving render boundary. The sole application
change adds `key={project.slug}` to that h2. Its existing domain identity is stable
through selection/title-size changes; it is not a DOM id, changing route key,
wrapper, cloning/remount architecture or console suppression. Gallery, viewer,
CSS, labels, Home/About and configuration files are untouched.

Before patching, MCP reproduced console.error with stack project-list.tsx14:85.
Real Chromium/CDP absence-of-console-errors regression then ran on two fresh owned
dev servers, EN first and ES first. Each red execution recorded16 UI conditions
and failed exit1 with **8 key errors vs expected0**. Locale order exposed diagnostic
deduplication: later locale visits in the same server lifetime did not re-emit it.
`red.json`, `red-es.json`, their failure logs and server logs retain actual evidence
under `revision2-r9-correction1/`; subsequent locale silence was not called a pass.

After the key fix,64 fresh native conditions pass: dev/prod ×en/es ×light/dark
×390/1440 ×100/150% text ×genuine browser-default16/24. Each default is measured in
an unstyled iframe; roots16/24 and24/36 are recorded. Both green runs report
**0 console errors/warnings/exceptions**. Each checks single stable h2 nodes,
mounted buttons/arrow focus/no scroll change, actual Enter Next/reset, unchanged
cell boxes/independent projects, actual retained-image neighbor pointer opening,
44px upper-right media-corner X and Escape/exact-origin restoration.

`comparison.json` records16 fresh native16 red/green comparisons and16 corresponding
native24 comparisons against conserved independent R9 geometry: heading/cell sizes,
x positions, relative heading/media y and enlarged-image dimensions all differ by
**0px**. The native16 desktop ES dark neighbor screenshot is byte-identical red/
green. Fresh captures show unchanged full clear image/glass surround/corner X;
MCP reads on direct EN/ES visits in both modes show no errors/warnings. Its existing
shared theme form-field id/name issue remains visible, not suppressed. This is
bounded correction evidence, not a new160-condition/full-native-playback audit.

| Fresh validation on corrected application sources | Result |
| --- | --- |
| `pnpm exec next typegen` | exit0 |
| `pnpm lint` | exit0; two existing R7 script warnings only, also rerun after final evidence scripts |
| `pnpm exec tsc --noEmit` | exit0 |
| `pnpm test` | exit0;44 pass/2 explicit-origin skips,46 total |
| `pnpm build` | exit0; `9GewD2EQsmxotE98L_iMX` |
| `git diff --check` | exit0 |
| BOTH origin variables, dev `http://127.0.0.1:3122` |56/56 pass,0 skips |
| BOTH origin variables, prod `http://127.0.0.1:3121` |56/56 pass,0 skips |

Both origin commands set LOCALIZED_404_TEST_ORIGIN and SITE_ICONS_TEST_ORIGIN to
that row's actual loopback origin. Default skips are not claimed as integration
passes. Node24.21.0/pnpm12.4.1 remain; no dependency recovery/install occurred.

New107-source manifest is
`458a5794fa8621d60d48951575cbacc51e922f6ea6be5119bb155f27aff4a5b8`.
`source-final.sha256`/`identity.json` prove exactly one application source differs
from the prior107: project-list.tsx. Served EN/ES pages, production build identity,
decoded static chunk paths/bytes and both original media responses match disk.
All105 HEAD-protected files,19 current local files and six protected documents
(including coordinator's intentionally changed MEMORY) match entry. No sample,
dependency/lock/compiler config, generated artifact, task checkbox or other source
was edited. R5/R7/R8 full matrix, fixtures and audio/native lifecycle remain conserved
and attributed, not relabelled as fresh on this new manifest. Their unaffected
gallery/viewer/style sources match exactly; the focused new geometry/interaction
checks above verify preservation at the changed heading boundary.

Evidence/scripts/commands and limits: `revision2-r9-correction1/README.md`.
The correction addresses RF-1/3–5/7/12 and RNF-1–3/6 at that boundary, with existing
unit/integration regressions preserved. No new artificial Node snapshot test was
added; the actual native console assertion supplies red→green. Owned resources
are reverified/closed in `cleanup.json`; unknown/user/tool processes are preserved.
No new related failure is known. Shared inherited header overflow, R7 lint warnings
and theme form issue remain outside this exact correction. No new human audio
listening/privacy, other-browser/device or screen-reader claims are made.

**Implementer correction completed; independent recheck required.** This entry does
not issue a new independent verdict, close R9, claim owner acceptance or begin R10.
R9/R10 remain unchecked. No staging, commit, push, deployment or publication occurred.

## Revision 2 — R9 independent recheck recorded (2026-10-24)

Actor: implementer, administrative record of the **independent reviewer's final
recheck supplied by the coordinator**, not a new implementer review. Exact response:

> VEREDICTO:CAMBIOSNECESARIOS. La incidencia React está resuelta y verificada independientemente. No quedan bloqueos técnicos o documentales conocidos; únicamente falta aceptación humana R10.

**Technical disposition: PASS for RF-1–12, all applicable technical portions of
RNF-1–6 and applicable technical completion criteria**, combining the preceding
requirement review with this independent confirmation of the sole technical fix.
Source preservation passes; no known technical or documentary noncompliance
remains. RNF-3's owner visual confirmation and the separate final owner acceptance
criterion remain pending in R10. This is not `VEREDICTO: APROBADO` or spec closure.

The corrected application is identified by build `9GewD2EQsmxotE98L_iMX` and the
107-source manifest
`458a5794fa8621d60d48951575cbacc51e922f6ea6be5119bb155f27aff4a5b8`.
Existing durable correction evidence is retained in `revision2-r9-correction1/`
(see its `README.md`, `identity.json`, `source-final.sha256` and `comparison.json`).
Its six passing checks and56/56 explicit-origin tests per mode with0 skips are
**implementer correction results already recorded above**, not invented fresh
reviewer reruns; no additional recheck run counts or artifacts were supplied.
The minimal h2 `key={project.slug}` correction resolves a defect introduced within
Spec005, not an exempt unrelated pre-existing warning. Earlier observations and
their explicit classification correction remain intact. Inherited header
exceptions, R7 script warnings and the shared theme form issue remain separate.

**R9 complete as the independent-review task under its current Hecho cuando.**
Formal disposition remains `VEREDICTO: CAMBIOS NECESARIOS` solely for owner R10;
R10 remains unchecked and was not started here. No owner acceptance of the revised
design has been received. Documentation-only reference/consistency review,
`git diff --check` and separate untracked-document whitespace/conflict-marker
checks pass; no tests/code/styles/assets/configuration or protected
documents were changed, and no application checks or browser runs were repeated.
The coordinator reports the latest reviewer's owned server closed (wrapper143,
cleanup); no active preview is promised and no other port ownership is inferred.
No server was started or managed, and no staging, commit, push or publication
occurred. Full closure awaits the separate owner gate and final approved disposition.
## Revision 2 — R10 owner-preview preparation only (2026-10-24)

Preview preparer, not owner acceptance or independent approval. No application
listener existed at entry; historical preview URLs/PIDs were not reused. Started
an owned production preview with Node24.21.0/pnpm12.4.1 using the existing build:
`pnpm start --hostname 127.0.0.1 --port 3131`. Listener Next80833, parent shell80832,
pnpm80733; all have CWD `/home/jorge/Projects/web/career-launch/portfolio`.
It is intentionally left running for the owner, loopback only:

- Spanish: http://127.0.0.1:3131/es/projects
- English: http://127.0.0.1:3131/en/projects

Both actual responses are HTTP200 and contain build `9GewD2EQsmxotE98L_iMX`;
all12 referenced static assets match disk bytes. All107 source-manifest entries
match the corrected-source manifest SHA256
`458a5794fa8621d60d48951575cbacc51e922f6ea6be5119bb155f27aff4a5b8`.
Process ownership, HTTP/asset identity and entry state are recorded under
`/tmp/opencode/spec005-rev2-owner-preview/`; server output is `server.log`,
identity evidence is `identity.json`. These are local operational logs, not
durable repository artifacts or a promise that the process survives host shutdown.

No rebuild, install, dependency/config/source change, browser matrix, new tests
or repeated six-check/integration run was performed. No unknown/user process was
stopped; no publication occurred. This note alone does not accept visuals.
R10 remains unchecked and formal CAMBIOS NECESARIOS remains solely for human
acceptance. Owner review should check initial centered left title, unchanged-size
media shifting left under the smaller raised title, full-block centered bottom
arrows, independent galleries/full reset in both directions, recognizable page
through glass surroundings, X at actual media corner, and manual native Play with
audio stopping on closure/route exit, including mobile/text growth/both themes.

## Static-video-preview amendment — A1 extraction/contracts (2026-10-24)

Actor: A1 implementer only. Coordinator supplied requirements approval **“La apruebo”**
and subsequent joint plan/tasks approval **“Lo apruebo”** in this assignment. Protected
documents' pending-approval prose predates that instruction and is left for the
coordinator; no spec/plan/MEMORY edit or final acceptance is inferred. R1–R9 remain
completed; A1 was pending with no unfinished A-task dependency.

Evidence: [`amendment-a1/README.md`](amendment-a1/README.md), actual logs/manifests
and `provenance.json`. Fresh executable checks: `/usr/bin/ffmpeg` and
`/usr/bin/ffprobe`, both8.0.1-3ubuntu2. Successful offline command (exit0):

```bash
/usr/bin/ffmpeg -nostdin -n -ss 00:00:02.000 -i public/images/pruebas/demo-video.mp4 -map 0:v:0 -frames:v 1 -an -update 1 public/images/pruebas/demo-video-poster.png
```

Output: PNG1920×1080,1107607 bytes, SHA256
`95229f54968dfe293009ee28afd693c7eca28b772d968ca5659b314487869380`.
Explicit seek timestamp2.000s; no scaling/cropping/manual rotation. Actual output
opened directly with the image tool: recognizable upright recording-derived still,
not blank; no newly suspected sensitive material. Original PNG remains310566 bytes,
SHA256 `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`;
original MP4 remains7722052 bytes, SHA256
`bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`,
including its unchanged audio. Privacy/audio acceptance stays owner-attributed under
the retained explicit sample exception; no agent listening or publication clearance.

Minimal code: optional video-only `poster: {src,width,height}` in shared MediaSource,
configured once in SAMPLE_MEDIA_PAIR. Existing localized serializable projection
passes it through unchanged; no query/catalog/project branch or rendering edit.
Red `pnpm test`: exit1,44 pass/2 fail/2 skips, both new tests failing on undefined
central poster. Green: exit0,46 pass/0 fail/2 HTTP-origin skips,48 total. New tests
check actual PNG dimensions/signature/hash, central reuse/Home images, configured/
absent posters, mixed/reordered/fourth-project bilingual projections, serialization,
nonmutation and independent poster/video dimensions; original byte tests still pass.

All six applicable checks pass: typegen, lint, tsc, tests, build, whitespace.
Lint retains exactly two unrelated R7 evidence-script warnings. Default HTTP skips
are not integration passes. To protect active owner preview3131/PID80833 and its old
build `9GewD2EQsmxotE98L_iMX`, typegen/tsc/build used an isolated identical-source
copy, producing `pkZo3wRDGeyurZxtfJEfU`, not a build served by3131. All96 final
src/tests/public hashes match that copy. An initial isolated pnpm guard failure
was traced to its copied absolute workspace-state path; logs retain the blocked
attempts. Verified21853 dependency files matched, then process-local guard mode
`false` allowed isolated checks without installing/repairing anything. Original
test/lint used guard mode `error`; no persistent configuration was changed.

Preservation comparison guards380 entry files and19 actually present local configs,
not historical29. Only three source/test files change, plus the new poster and A1
evidence/task updates. All1923 owner-preview `.next` files/population remain unchanged;
no server/browser was started, requested, stopped or rebuilt. Protected documents,
Home/About/shared sources, UI/gallery/viewer/CSS/messages, projection/catalog,
original media, dependency/lock/compiler configuration and unrelated tasks remain
unchanged. No installs, generated-file hand edits, stage/commit/push or publication.

**A1 complete:** RF-2, RF-8–9, RF-12/RNF-5–6 receive bounded extraction/data/test
evidence only. Direct frame inspection is not rendered-preview or final owner visual
acceptance. No new related failure remains; A2 rendering/error state, A3 explicit-
origin final checks, A4 native verification, A5 review and original R10 remain pending.

## Static-video-preview amendment — A2 rendering and isolated poster failures

2026-10-24, A2 implementer. Coordinator supplies spec approval “La apruebo” and
joint plan/tasks approval “Lo apruebo”; A1 is complete. Detailed scoped evidence,
actual artifacts, methods, failed harness attempts and limitations:
`amendment-a2/README.md`, `browser-probe.mjs`, `browser-results.json`.

Native poster rendering replaces the ignored-data/text-only video path inside
the unchanged mask/cell. Instance-local ID/source poster errors are separate from
actual media/playback errors, with pre-hydration failure detection and changed-source
recovery. Existing trigger, viewer/native playback, geometry/title/arrows/reset
and sample copy are preserved. Two matching short EN/ES labels are forwarded through
the existing list label object; only preview/cue/focus local styles are added.

RED→GREEN MCP evidence at the same1536×786 viewport shows missing→loaded1920px
poster with identical cell boxes/offset and no inline player. Final focused native
CDP12-condition dev probes (EN/ES ×themes ×320/390/1440) assert unchanged dimensions,
both-direction reset, independent projects,44px targets, no inline players or MP4
request. Final captures/MCP keyboard focus show readable compact peek/full selected
cues; measured token contrast7.39:1 light/13.61:1 dark also supports the new focus
ring. The first overwrapped/overwide cue probes and failed harness runs are retained,
not represented as final compliance evidence.

Missing/actual404 posters affect only that project; changed source recovers in the
same gallery. A cold poster is proven failed before hydration by holding15 JS
requests, then hydration yields the localized fallback. With that poster blocked,
Enter opens the original MP4 paused at0; an actual pointer click on native Play
advances time. Escape pauses/removes source/unmounts the video and restores focus.
Blocking MP4 independently gives the retained localized viewer failure with no
player and reachable Close. No programmatic Play or native Space claim. Audio
content remains owner-attested, not agent listening; A2 does not claim fresh RMS
coverage. A4 owns broader native-control/audio regressions.

All six applicable AGENTS checks pass (logs under amendment-a2): typegen, lint,
tsc,46 tests passed/2 default HTTP-origin skips, build and whitespace. Only the two
pre-existing R7 lint warnings remain. Typegen/tsc/build run in a private identical
96-source copy, build `Gb_0R4KrrS0kiV3Gu-xRJ`, preserving active owner .next. A3's
new served production build and both explicit-origin contract runs are not claimed.

Only five application files changed relative to A2 entry. Original PNG/7722052-byte
MP4/A1 poster,19 local files,1923 owner .next files, Home/About/shared sources,
viewer/math/catalog/query/config/lock/compiler settings remain unchanged. Owner
preview3131/PID80833/repository CWD still serves9GewD2EQsmxotE98L_iMX: **stale UI**,
not the amended source. Only A2-owned isolated resources are used for validation;
no owner/unknown process management, install, publication or generated-file edit.

**A2 complete:** RF-2–5, RF-8–9, RF-11–12; RNF-1–4/RNF-6, bounded to its rendering
and failure-isolation criteria. No new related known failure. A3–A5 and R10 remain
pending; no full matrix/production/native24/physical-device/screen-reader approval
is inferred. A2 does not start A3.

## Static-video-preview amendment — A3 final-source checks and integrity

2026-10-24, A3 implementer. Coordinator-supplied requirements approval “La apruebo”
and joint plan/tasks approval “Lo apruebo” are retained; old pending-approval prose
is not rewritten. A1/A2 were complete. This is validation only, with no application,
test, dependency, configuration, lock or generated-file hand edit. Full methods,
commands, actual counts, identity and limitations: `amendment-a3/README.md` and
adjacent logs/JSON/manifests. No subsequent A4/A5/R10 work is performed.

All six AGENTS checks exit0: `pnpm exec next typegen`, `pnpm lint`,
`pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`, `git diff --check`.
Default tests:48 total,46 pass,2 expected HTTP-origin skips,0 fail. Explicit tests
with BOTH variables set to the same verified origin in each mode:

```bash
LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3143 SITE_ICONS_TEST_ORIGIN=http://127.0.0.1:3143 pnpm test
LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3144 SITE_ICONS_TEST_ORIGIN=http://127.0.0.1:3144 pnpm test
```

Both actual results: **58 tests,58 pass,0 fail,0 skipped**, including ten404
subtests. Default skips are not integration passes. The two pre-existing R7
evidence-script lint warnings remain; no new related application failure occurred.

Node24.21.0/pnpm12.4.1/Next16.3.5. Original lint/test commands use process-local
dependency guarderror. Typegen/tsc/build and dev/prod servers use private copied
sources/dependencies at `/tmp/opencode/spec005-a3/{dev,prod}`, separate .next,
and the prior approved process-local guardfalse isolation procedure. Each copied
node_modules matched21853 original dependency file hashes before execution.
No install/recovery/config repair/global setting or dependency change occurred.
Initial Python/copy-verifier/dev-output-path harness failures are documented,
not represented as application failures or hidden passing attempts.

New production build **DBMR67Pqq8HA7YydRu4uS**, served on3144/PID102113;
dev3143/PID101953, CLI101936. Actual CWDs match the private copies. HTTP identity
checks verify both EN/ES documents200, mode build IDs, three1920×1080 poster img
elements/no inline video or audio, and every referenced static chunk's HTTP bytes
against that mode's disk output. This is SSR/HTTP evidence, not fresh native
visual, playback, focus, no-JS or audio coverage.

Final source manifest has **108 paths**, not the old107: historical107 population
plus derived poster.99 historical paths are unchanged; exactly8 changed in A1/A2
(gallery, list CSS/list label forwarding, EN/ES messages, media/types, contract
tests). All108 current hashes match both served copies; narrower src/tests/public
population is96. `amendment-a3/source-final.sha256` SHA256:
`682887addfa73f8e511105c7e8d26816de5e9b130c83f54dc930a44b9c8649f5`.
The historical manifest is not claimed to match amended sources.

Both origins serve200 with exact source MIME/bytes/hash: original PNG image/png,
640×360,310566 bytes, `52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3`;
original MP4 video/mp4,7722052 bytes,
`bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd`;
poster image/png,1920×1080,1107607 bytes,
`95229f54968dfe293009ee28afd693c7eca28b772d968ca5659b314487869380`.
PNG dimensions come from HTTP signature/IHDR bytes. Original media including
audio is preserved; extraction/audio/privacy attribution remains A1/owner's,
not new agent listening or publication clearance.

Entry440 files and96 application files are guarded, including actual19 local
configs/backups. Home/About/shared sources, viewer/math, root config/lock/compiler
settings and original assets are unchanged from entry and unaffected historical
sources. No fixture contamination remains; shared sample pair/Home-empty-media
contracts pass. All1923 owner-preview .next files and population are unchanged.
Owner3131 remains PID80833/repository CWD, old build9GewD2EQsmxotE98L_iMX;
EN/ES HTTP200 still show no poster string: **stale UI**, not the new build.
No owner/unknown server was stopped or rebuilt. Only A3-owned dev/prod processes
were terminated after PID/CWD reinspection;3143/3144 closed,3131 preserved
(`cleanup.json`). No browser resource was created; private copies remain offline.

**A3 complete:** RF-2,RF-8–9,RF-11–12/RNF-5–6 and bounded preserved regression
contracts have fresh final-source check/integrity evidence. No A3 blocker or new
related known regression remains. A4's bounded native matrix/interaction/audio,
A5 independent review and R10 owner acceptance remain pending. No stage, commit,
push, deployment or publication occurred.

## Static-video-preview amendment — A4 bounded browser verification

2026-10-24–26, A4 implementer. Coordinator confirms approved requirements and joint
plan/tasks (“La apruebo” / “Lo apruebo”); A1–A3 were complete. Only A4 is executed.
Full chronological checkpoints, scripts, failed harness attempts, actual captures,
source/build attribution and limitations: `amendment-a4/README.md` and adjacent
JSON/logs. Two environment restarts removed temporary runtime resources; durable
passing batches were inspected/recovered rather than automatically repeated.

The initially passing40 normal/default16 and16 native24/150% rows exposed a real
cue defect on actual image inspection: at320/native24/150%, the compact cue was
123.28px high inside a95.63px cell and clipped above the strip. It was not the
inherited header defect. Native browser regression RED exit1 (`cue-red.*`) became
GREEN exit0 (`cue-green.*`) with only compact preview-local CSS: bottom8px,
zero vertical padding, line-height1. The27px enlarged font, bilingual text,
44px trigger, strip/cell dimensions, viewer and shared files stay unchanged.
No redesign or new requirement/architecture is introduced.

Final corrected-source matrix: **40/40 normal/default16 +16/16 native24/150%**,
both modes/locales/themes and approved widths. This affected rerun is justified
by the actual cue fix; it is not another historical160-condition suite. Native24
uses isolated browser preferences, verifies`medium=24px`, then150% root36px.
All three projects retain invariant cell dimensions, independent selections,
both-direction full reset, loaded upright cover-fit stills, visible keyboard
focus and44px targets. Initial and shifted cue bounds are now fully inside the
strip; no inline video/audio or MP4 request occurs. `matrix-*-final.json` records
all56 conditions with no runtime exception. Initial56 rows remain historical,
not112 final conditions or proof that the original clipping was acceptable.

Measured168 rendered cue-color pairs: **7.387:1 light /13.611:1 dark**. Same semantic
foreground/background pair separates the3px focus outline from its8px inset halo,
not directly from busy video pixels (`contrast-final.json`). Actual source poster
and selected/peek/cue captures were opened and inspected. Final320/default16,
native24 green,768/1024 and1440 captures show upright recognizable recorded content,
readable bilingual cues and organic Home-shaped cropping; the initial peek exposes
only a natural slice, not the complete recording scene. Actual Home/Projects mask
comparison verifies the same supplied contour at1200/760 proportion. Portrait
fixture/modal and glass landscape/portrait captures were visually inspected too.

Preserved A4 batches, **not claimed as fresh final-build playback**:

- 8 mode/locale/theme native suites,40 audio-active X/Escape/backdrop/error/route
 exits,32 paused reopenings and8 native-control suites on A3-identical sources/
 buildDBMR67Pqq8HA7YydRu4uS. Pointer Play/Pause, Space resume/pause, native volume
 ArrowDown, progress ArrowRight and pointer seek are separately recorded. Each
 immediately pre-exit sample is non-ended,>1s before clip end, RMS0.23498–0.40391;
 after exit all have RMS0, paused/source-null/disconnected/no players. Same-document
 route exits preserve the AudioContext for observation, release styles and do not
 pull the new route back. Other exits restore exact trigger, opening scroll and
 gallery state. No programmatic Play or agent listening is claimed.
- 16 reduced-motion conditions,64 initial/shifted image/video orientation states
 and8 cold-poster pre-hydration failures followed by localized fallback and actual
 native-pointer MP4 Play passed on recovery buildqtePysdA42w4bIQr_7HrF, same A3
 sources.15 dev/9 prod JS requests were held in each cold case. Fit is full-aspect,
 contain/unmasked;44px X fits and its bottom meets the actual media's top.
- 8 mixed/portrait fixture rows/16 width probes/96 both-direction navigation actions
 passed on fixture buildyN-mb4H166sSlSQYQp-b1. Video-first data uses a temporary
540×960 crop of the supplied still as poster/image plus original landscape sample;
 video still opens paused at original1920×1080 and portrait opens full contain-fit.
 Fixtures were confined to private runtime copies, then restored/removed exactly.
- 16 native Home/About visits cover both modes/locales/themes at390/1440 with
 shell/icons and no sample contamination. Protected sources remain byte-identical.

These proofs remain applicable to unaffected behavior: all gallery JS, media/data,
viewer lifecycle/CSS, strip math/mask/motion and shared-page sources are unchanged;
only compact cue CSS differs. Final56 rows reverify the affected cue/crop/focus
conditions. A2's named missing-poster, changed-source failure/recovery and project
isolation probes are explicitly audited/reused; all96 A2 application hashes match
except cue CSS. They are not relabeled fresh A4 runs. Eight fresh A4 cold failures
and40 playback-error/exit cases complement that unchanged-code evidence.

After the fix, all six AGENTS commands exit0: typegen, lint, typecheck, default
tests46 pass/2 expected HTTP-origin skips, build and whitespace. Explicit tests
with BOTH `LOCALIZED_404_TEST_ORIGIN` and `SITE_ICONS_TEST_ORIGIN` set to3143/dev,
then3144/prod: **58/58 per mode,0 failed,0 skipped**. See `*-final.log`.
Final build **v1ReJ_mKnhx437kbFY4df**; final108-source manifest SHA256
**b77f6a5e298f6daf47a966d4f10e1783c2f774ba70c7ba744d659840163fd24d**.
It differs from A3's682887… manifest solely at the compact-cue CSS. Final HTTP
identity verifies source108/PID/CWD/build, both EN/ES200, static chunks against disk
and poster response95229f54…9380. Old recovery IDs are not newly served final IDs.

Chrome DevTools MCP was used when available for actual DOM/accessible snapshots
and final console inspection; only an unused-CSS-preload warning, no related error.
Its screenshot calls timed out with no claimed output. Installed native Chrome/CDP
produced the actual captures that were opened for visual review. Isolated profiles
never changed owner preferences. Two inherited R7 lint warnings and eight inherited
320/native24/150% header347px extent exceptions remain, not repaired or described
as whole-page overflow-free. Physical devices, other engines and screen readers
are unverified. Audio/privacy remains owner-attested, not human listening by agent.

All original PNG/7722052-byte MP4/poster bytes, Home/About/shared sources,19 local
files, configs/locks and all1923 root`.next` files/population are preserved. No
install, dependency/config change, generated-file hand edit or publication. The
old owner3131 process disappeared during restart; it was not restarted. Root build
9GewD2EQsmxotE98L_iMX remains old UI, not an amended owner handoff. Only verified
A4-owned runtime processes/profiles are closed; final restoration/preservation
records are adjacent. No unknown/user process is terminated.

**A4 complete:** RF-2–8,RF-11–12/RNF-1–6 receive the bounded mapped evidence above.
No remaining known related regression. Independent A5 and original R10 owner
acceptance remain unchecked; this is neither final independent approval nor owner
acceptance. No subsequent task, stage, commit, push, deployment or publication.

## Static-video-preview amendment — A5 independent review recorded (2026-10-26)

Actor: implementer, **administrative record of the supplied independent reviewer
report**, not a new implementation or review execution. A1–A4 are complete;
requirements approval “La apruebo” and separate joint plan/tasks approval
“Lo apruebo” remain recorded above. Protected pending-approval headings predate
that authorization and are not rewritten here. Exact reviewer verdict:

> VEREDICTO: CAMBIOS NECESARIOS

**A5 complete as the independent-review task only.** No technical or documentary
blocker remains. The sole impediment to full approval is separate human R10
acceptance of the revised prototype, including the actual video still: RNF-3's
owner aesthetic confirmation and spec completion criteria remain pending.
R10 stays unchecked; no spec closure, `APROBADO`, broader redesign or publication.

Durable [full reviewer report](amendment-a5/MAIN-REPORT.md),
[evidence index and attribution](amendment-a5/README.md) and
[identity/preservation summary](amendment-a5/identity-preservation.json) preserve
the requirement-level disposition and selected actual MCP/CDP captures. They were
supplied under `/tmp/opencode/spec005-a5/MAIN-REPORT.md` and adjacent artifacts;
full raw JSON/scripts remain temporary, not invented durable references.

### Requirement mapping and evidence attribution

| Requirements | Independent disposition and method |
| --- | --- |
| RF-1, RF-10 | Sustained unaffected catalog/list/live-link contracts; retained R8/R9 fixtures/preservation, not new poster proof. |
| RF-2–4 | Technical pass: actual still/neighbor cues, manual Enter, independent selection/focus, constant bboxes and full reset in fresh probes; nominal alignment retained from R7/R9. |
| RF-5–7 | Pass: selected/neighbor opening without index change, modal identity/glass capture and 24 Escape restorations; full containment/lock, X/backdrop/scroll and resize audited from A4. |
| RF-8 | Pass: recording-derived still, no inline player/MP4 request, 24 native Play/audio-active-to-zero exits; native controls/seek/reopen audited from A4. |
| RF-9 | Pass through inspected central contract/projection/tests and restored A4 mixed/reordered/additional-project fixtures; not newly executed tests. |
| RF-11 | Pass: four fresh blocked-poster fallbacks still permit native MP4 Play; missing/changed-source/isolation and prehydration/playback-error evidence audited from A2/A4; empty/single retained R8. |
| RF-12 | Pass: fresh EN/ES names/cues/fallback; equivalent routes/locale navigation and contracts supported by retained R8/R9 and audited A4. |
| RNF-1–2 | Technical pass: 24 independent conditions plus audited final A4 40+16 matrix, 44px targets and contrast7.387/13.611; fresh focus/Enter and MCP accessibility. Inherited header347px extent remains separate; no screen-reader claim. |
| RNF-3 | Technical identity/contour/crop/glass inspection passes; **human aesthetic confirmation remains pending R10**. |
| RNF-4 | Pass: unchanged motion/JS, no automatic advance/inline playback; 16 reduced-motion A4 probes audited, not repeated historical matrix. |
| RNF-5–6 | Pass with retained owner-attributed privacy/audio limits: actual-frame provenance and original-media/protected hashes, restored fixtures, bounded diff, no new route/dependency/service or publication. |

### Fresh reviewer checks versus audited checks

Reviewer freshly matched **108/108** repository source hashes and both isolated
copies to manifest `b77f6a5e298f6daf47a966d4f10e1783c2f774ba70c7ba744d659840163fd24d`;
reused build **v1ReJ_mKnhx437kbFY4df**, not rebuilt. Dev3153/prod3154 served
EN/ES200 with18/12 matching chunks and matching original PNG/MP4/poster bytes.
Original7722052-byte MP4,19 local files and1923 root `.next` files are unchanged.

Fresh native Chrome/CDP: **24/24 conditions**:16 dev/prod ×EN/ES ×light/dark
×390/1440/default16, plus8 at320/genuine native24/150% (root36px). All cover both
compositions/three galleries, no inline players/MP4 requests, native manual Play,
Escape/focus/state restoration and active technical audio RMS>0→0 teardown.
Four additional mode/locale blocked-poster checks retain localized fallback and
playable original MP4. No programmatic Play substitute or human listening claim.
MCP supplied DOM/accessibility/console and an actual final EN/dev capture saved
and opened; representative CDP images and original poster were also inspected
by the reviewer. A failed stale-page MCP call produced no attributed capture.

Reviewer `git diff --check` passed. Six commands and **58/58 explicit-origin
tests per mode, zero skips**, are audited **A4 logs**, not fresh reviewer or
administrative executions. Default46 pass/2 expected skips are not integration
proof. A4 native/supplement/fixture coverage retains its recorded earlier-build
attribution; only cue CSS changed and its affected coverage was rerun in56 final
rows. The full report preserves these distinctions and prior R9's disposition.

### Limits, administrative checks and handoff

Inherited320/native24/150% shared-header overflow, two unrelated R7 lint warnings
and shared theme-form concerns remain outside this task; no new related failure
is reported. Unused CSS preload warning is recorded, not a related console error.
Physical devices, other engines and real screen-reader output remain unverified.
Privacy/audio content remains owner-confirmed under the sample-specific exception,
not an agent hearing claim or publication clearance.

Reviewer reports owned3153/3154 servers, Chrome9373/9374 and owned MCP page closed;
3131 remains absent, not restarted. Root build **9GewD2EQsmxotE98L_iMX** remains
old UI, not an amended owner handoff. Temporary reviewed runtime/build copies are
not a promised active preview. This administrative task starts/stops no resources
and performs no cleanup, tests, build or new browser execution. Only this append,
selected ordinary A5 evidence and A5's checkbox change; R10 is not started.
Documentation references/consistency and `git diff --check` pass; protected
documents, code/config/tests/media and prior evidence remain untouched. No staging,
commit, push, redesign or publication. Final acceptance and spec approval remain
the coordinator's separate owner-gated follow-up.

## Final R10 acceptance and administrative closure (2026-10-26)

Actor: planner, administrative reconciliation of **coordinator-supplied owner and
independent reviewer records**, not a new technical review or test execution.

### Separate owner acceptance and formal final disposition

After the updated actual owner preview of revision 2 **including the actual
recording-derived static video poster**, the coordinator asked exactly:

> ¿Apruebas esta versión para cerrar la SDD, dejando el rediseño para después?

The owner's exact response was:

> Lo apruebo

This is final R10 visual/behavior acceptance of the presented version, including
RNF-3's owner confirmation. It is distinct from the earlier identical response
approving the amendment's plan/tasks and from prior positive functional feedback.
No exact response time is supplied. The owner deferred broader redesign; that
future work requires a separate specification and is not begun by this closure.

The coordinator subsequently supplied the independent reviewer's final result:

> VEREDICTO: APROBADO

The final reviewer approved **the whole Spec005: RF-1–12, RNF-1–6 and completion
criteria**, not merely A5's task completion. The prior A5 report
[`amendment-a5/MAIN-REPORT.md`](amendment-a5/MAIN-REPORT.md) remains unchanged as
the attributed historical technical review: its sole outstanding gate was R10,
now met. No technical/documentary blocker or new requirement is introduced.
The requirement-by-requirement A5 mapping above and retained R1–R9/A1–A4 evidence
remain applicable with their original methods/build attribution; the final
reviewer disposition and separate owner acceptance resolve the remaining gate.

### Identity and checks: fresh versus retained

- The coordinator reports the final reviewer freshly verified **108/108 source
  hashes** matching `amendment-a4/source-final.json` and manifest
  `amendment-a4/source-final.sha256`, SHA256
  **b77f6a5e298f6daf47a966d4f10e1783c2f774ba70c7ba744d659840163fd24d**.
  Reviewed build: **v1ReJ_mKnhx437kbFY4df**, reused, not rebuilt for closure.
  This is reviewer-supplied hash verification, not a new planner computation.
- Reread AGENTS, constitution, MEMORY, spec/plan/tasks, this validation record,
  `owner-preview.md` and the A5 full report. Reviewed documentation references,
  gate consistency, task states and scope. Reconciled stale approval headings
  against the already recorded separate amendment joint approval **“Lo apruebo”**
  before A1 implementation; no approval is retroactively invented.
- The six AGENTS checks and **58/58 tests per dev/prod mode with both explicit
  integration origins and zero skips** are retained final A4 results, audited by
  A5, **not fresh closure executions**. Default46 pass/2 skips are not substituted
  for those integration results. Prior native/browser evidence is likewise
  retained, not rerun or relabeled as fresh.
- No shell/terminal tool is exposed to this planner. Therefore fresh Git
  status/diff inspection, `git diff --check`, separate whitespace scans and an
  independent planner hash computation could not be executed here. The final
  reviewer source verification above and A5's passing whitespace check retain
  their supplied attribution; neither is claimed as a check of these new prose
  edits. Coordinator should run `git diff --check` and review the closure-only
  document diff. No clean-tree claim is made.
- Closure edits only `spec.md`, `plan.md`, `tasks.md`, `validation.md` and
  `owner-preview.md` in this spec directory. No application, tests, configuration,
  assets, AGENTS or MEMORY edit; coordinator alone reconciles MEMORY. No install,
  build, browser run, new tests, staging, commit, push, deploy or server management.

### Final task state and retained limitations

**Original R10 is DONE; R1–R9 and A1–A5 stay DONE. Spec005 is implemented and
closed.** Revision-1 T1–T8 retain historical completion; T9/T10 retain unchecked
superseded status, not new pending work for the closed revision. Requirements,
technical design and completion criteria have not changed during this closure.

- Broader design refinement is deferred to a **separate future spec**. Real
  project materials and owner-verified live URLs remain future work; the samples
  are still expressly demonstration material, not actual project evidence.
- Physical devices, other browsers/engines and real screen-reader output remain
  unverified. Native controls retain browser-provided language, sizing and behavior.
- Eight inherited shared-header exceptions at320/native24/150% retain347px extent;
  two unrelated R7 evidence-script lint warnings and documented shared theme-form
  concerns remain outside scope. No whole-site overflow-free claim or repair.
- Technical audio RMS evidence is not human listening. Sample-specific privacy/
  audio-content confirmation remains owner-attributed, not a general waiver or
  distribution clearance.
- `owner-preview.md` records the intentionally left preview3131, PID72405/CWD
  `/tmp/opencode/spec005-a4/prod`; availability/PID ownership was **not rechecked
  at closure**. No new liveness promise; reverify before reuse or management.
  Root `.next` was the older UI at handoff, not the reviewed amended build.
- Final acceptance closes this SDD only. **No staging, commit, push, deployment
  or publication permission** is inferred, and no such action was performed.
