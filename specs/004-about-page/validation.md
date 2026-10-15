# Spec 004 — Validation evidence

## Current disposition — Final independent approval

Date: 2026-10-15. Administrative T9 review record and subsequent single-task T10
closure handoff based on the coordinator's final evidence; no application change,
new test run, build or browser inspection.

**VEREDICTO: APROBADO**

The independent reviewer now confirms RF-1–10, RNF-1–6 and all specification
completion criteria satisfied, with no blocking noncompliance or code/runtime
issue. This final verdict supersedes the earlier owner-gate-only
`CAMBIOS NECESARIOS` disposition below; earlier dated task records describe their
then-current state and are retained as history, not current pending gates.

### Owner acceptance and separate publication instruction

The coordinator reports that the owner accepted the final About visuals, including
the portrait, filled recognizable contact frames, bilingual hierarchy in both
themes and preserved footer presentation, then explicitly authorized publication:
**“Esta bien, ya podemos subir entonces”** (2026-10-15). This is final visual
acceptance, separate from the earlier spec/plan approvals. The publication
instruction is recorded, not executed by this documentation task, and does not
invent acceptance of unrelated work or expand the reviewed publication bundle.

### Final review evidence and boundaries

- The final reviewer reconfirmed the reviewed 93-file source identity:
  `30f6c92e09173e9c8d7b626ae512ace59c9236c3e05cde53d3f5f8896f479c8b`,
  with production build `GJay8FUi94mC1DZtZsdoR`.
- The six successful final amendment checks and explicit-origin dev/production
  suites (42/42 each, zero skips) remain the supporting results recorded below.
  They were not rerun for this closure update. The final reviewer separately
  reported a fresh passing `git diff --check`.
- The requirement-by-requirement methods/results below remain the technical
  traceability record, supplemented by the final amendment's affected-UI evidence.
  RF-4, RF-5, RF-9 and RNF-3 no longer await owner acceptance. The final independent
  review confirms all completion criteria, including that explicit owner gate.
- The eight pre-existing shared-header exceptions at320/native24/150% remain
  documented, nonblocking and outside the protected-header scope; the full matrix
  is not relabelled overflow-free. Physical devices, other browsers and screen
  readers remain unverified. No unrelated warning or limitation is silently fixed.
- Newly noticed unreviewed `public/images/projects/gelys-event/` and
  `public/images/projects/living-gallery/` directories are outside Spec004 and the
  approved reviewed asset bundle. They are preserved untouched, not included or
  accepted by this record. No staging, commit, push or publication was performed.

T9 and T10 are complete. The subsequent T10-only assignment updates only T10's
checkbox and this current disposition, confirming the explicit owner acceptance
recorded above and handing closure to the coordinator. T1–T9 remain unchanged.
There are no pending blocking gates within Spec004; historical pending statements
below retain their then-current meaning. Spec status and MEMORY updates remain
with the designated planner/coordinator. No technical decision, test change or new
visual check is needed for this administrative task; documentation consistency and
`git diff --check` are the applicable validation. Unreviewed project images and
excluded local configurations remain untouched, with no staging, commit or push.

## T6 — Project checks and explicit-origin regressions

Date: 2026-10-15. Scope: T6 only (RF-1, RF-6–10; RNF-4–6).
Result: all six project checks and both actual-server test runs passed.
This is not final requirement approval, browser coverage or owner visual acceptance.
T7–T10 remain pending; the separate Home asset feature is not accepted or closed.

### Preconditions and baseline

- Read AGENTS.md, constitution, MEMORY.md, approved spec/plan/tasks and the source
  diff, About components, contact configuration/projections, footer and relevant tests.
  Spec and plan/tasks approval records agree; T1–T5 were already checked and T6
  was pending. AGENTS.md supplies all required validation commands.
- Runtime: Node v24.21.0, pnpm 12.4.1; installed Next.js 16.3.5.
- Git HEAD: `c7522763e57d35ed3b577ffa5392fba43535dbf1`. The checkout was already
  dirty. No clean-tree claim is made. Captured initial status and binary tracked
  diff under `/tmp/opencode/sdd004-t6/` before running checks.
- Inherited tracked changes: MEMORY.md; About page; localized layout; global 404;
  Home About Preview TSX/CSS; footer TSX/CSS; both message catalogs; metadata;
  site configuration. Inherited untracked paths: agent configurations/backups,
  favicon and About image assets, Spec004 documents, About components, contacts
  module and contact/icon tests. None was overwritten or cleaned up.
- The footer CSS `min-width: 44px` addition was already present at T6 entry; it
  is not a T6 change. Likewise, icon metadata, Home imagery/feathering and the
  About/contact implementation predate this task. Attribution is to the entry
  baseline, not an inferred commit or author.
- Coordinator-reported T1–T5 checks (default tests 30 passed/2 integration skips)
  and T5 build `bePoOYXdPhwvzHKEX2YBA` are prior evidence, not fresh T6 runs.
  MEMORY's asset-feature build `n_woIBZNm7rDUKcBn93e1` and historical 35/35
  results are also not current evidence. No historical browser evidence is reused.

### Source and production identity

Application manifest covers 93 files: all entry-baseline `src/`, `public/`,
`tests/` files and present package/lock/workspace/Next/TypeScript/PostCSS/ESLint
configuration files. Each value is the file's SHA-256; the manifest digest is
SHA-256 of its path-sorted compact JSON (`sort_keys=True`, separators `,` and `:`).

```text
Application manifest SHA256:
bb16ee9682e6eb53e277fbfd35da76d86953897f15692a5fd0fd2d506a3aa759
Fresh production BUILD_ID: fWl3ycgKx4S_iIfjlo-Jd
.next/BUILD_ID SHA256:
a6a1f6761ab706870c10a029ddfcd5c5f06b8db6e7d58759e4d33b5798168962
.next/build-manifest.json SHA256:
09185bafc8038df5717e9e7bd5355e8a11fbea83e05c89389dec0d17cffa2c5f
.next/server/app-paths-manifest.json SHA256:
d37286a0987c09cf89b0515a2c532d64a96451fc5d521914993f3a4a94623644
```

The three build identity files were rehashed successfully after production tests
and after shutdown. A post-run manifest of all 171 `.next/server/` and
`.next/static/` files has SHA-256
`e2af801adbc289a7d80ee61a3ebd1b1be5978bfc28d5d83473d034dc67ea2daf`
(same compact sorted JSON method). This last manifest is a handoff integrity
reference, not a pre/post comparison. Build output was generated normally, not
hand-edited or deleted. No application source changed during T6.

### Exact commands and fresh outcomes

Commands ran from the repository root; all exited 0.

| Command | Result |
| --- | --- |
| `pnpm exec next typegen` | Route types generated successfully. |
| `pnpm lint` | Passed, no diagnostics. |
| `pnpm exec tsc --noEmit` | Passed, no diagnostics. |
| `pnpm test` | 32 tests: 30 passed, 0 failed, 2 skipped (explicit-origin contracts intentionally unset). |
| `pnpm build` | Successful optimized production build, TypeScript and 8/8 static generation steps; new BUILD_ID above. |
| `git diff --check` | Passed; repeated after evidence/checkbox edits. |
| `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3000 SITE_ICONS_TEST_ORIGIN=http://127.0.0.1:3000 pnpm test` | Development: 42 tests, 42 passed, 0 failed, 0 skipped, 0 cancelled. |
| `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 SITE_ICONS_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test` | Production: 42 tests, 42 passed, 0 failed, 0 skipped, 0 cancelled. |

The explicit runs include 32 top-level tests plus 10 localized-404 subtests;
the seven contact-domain tests pass in all three runs. Counts are actual runner
summaries, not extrapolated from historical totals.

### Origin verification and resource ownership

- Historical instructions mentioned an existing development server on 3001.
  Actual inspection found no listener on 3001; the existing server listened on
  3000. PID 21662 (`next dev`) and child 21680 (`next-server`) both had CWD
  `/home/jorge/Projects/web/career-launch/portfolio`. Reused that actual server
  at `http://127.0.0.1:3000`; did not restart or terminate it.
- Before dev tests, HTTP health assertions checked en/es About200, current
  localized title/background/exploration/approach/contact headings and availability
  explanation against the message catalogs, both approved public destinations,
  and development HTML markers. This verifies current served content rather than
  assuming a stale HMR instance reflects disk.
- Verified 127.0.0.1:3111 free using a temporary TCP bind before starting
  `pnpm start --hostname 127.0.0.1 --port 3111` against the fresh build.
  Owned launcher PID 62593 → shell 62696 → server 62697; listener, parent chain
  and repository CWD were checked. Server reported ready; en/es About200 health
  assertions verified the same current content/destinations and no devtools marker.
- Only the owned production chain was terminated, after all six checks and both
  test runs. A first cleanup guard aborted before sending any signal because it
  searched raw NUL-separated argv for the space-separated string `pnpm start`.
  Inspection confirmed argv `[pnpm, start, ...]`; joining argv for that guard
  resolved this validation-harness issue without application changes. CWD/parent/
  command guards were rerun before SIGTERM. Final process/listener inspection
  confirmed all three owned PIDs gone and port3111 closed, with original dev
  PIDs21662/21680 still running on3000. No browser resources were opened.

### What the automated evidence establishes

- Both origins executed the localized-404 HTTP contract: four missing en/es
  paths returned genuine404 without redirects; Home/About/Projects in both
  locales returned HTML200 despite contrary locale headers/cookies.
- Both executed the icon contract across Home/About/Projects/global404 in en/es:
  complete six head links, correct statuses, six image responses200 with image
  content types and byte equality against supplied local assets.
- Domain tests cover approved public destinations, initial absence of private
  channels, four ordered About entries, synthetic email/WhatsApp activation,
  update/removal propagation, and footer eligibility/email preservation with
  WhatsApp omitted. Translation parity/nonempty checks and existing carousel,
  project and identity tests also pass. No fixtures were installed in public config.
- No tests were created or modified in T6; no behavior change required a new
  red→green cycle. No private CV contacts were accessed or published.

### Preservation, limitations and handoff

File-level SHA-256 comparison with the entry manifest found no changed/deleted
baseline file before documentation edits. Final comparison allows only this new
validation report and the T6 checkbox change. Home, Hero, SVG/font/photo/favicon
bytes, all prior feature and agent/backup work, MEMORY.md, dependency files and
approved spec/plan remain unchanged from T6 entry. The scope review is against
that dirty baseline, not against a fabricated clean tree.

No application validation failed; no pre-existing failing check was observed.
Known unrelated focus/query-fragment concerns in MEMORY remain deferred and
were not repaired or newly verified. This task used HTTP health checks, not visual
browser inspection. Native no-JS404 recovery, keyboard/focus, responsive/text/theme
matrix, contrast, logo recognition, final requirement review and owner acceptance
remain T7–T10 responsibilities. HTTP status/head tests are not proof of those
browser behaviors. No T6 blocker remains.

Logs/manifests: `/tmp/opencode/sdd004-t6/` (`status-before.txt`,
`diff-before.patch`, `baseline-files.json`, `application-files.json`,
`typegen.log`, `lint.log`, `tsc.log`, `test-default.log`, `dev-health.log`,
`test-dev.log`, `build.log`, `build-identity.sha256`, `prod-server.log`,
`prod-health.log`, `test-prod.log`, `diff-check.log`, `production-files.json`).
Temporary files are supporting local evidence and may not persist; the outcomes
and identities above are recorded here. No staging, commit, push, dependency
repair, cache deletion, generated-file hand edit or MEMORY update occurred.

## T7 — Responsive composition, text growth and contrast

Date: 2026-10-15. Scope: T7 only (RF-1–5, RF-7, RF-9, RF-10; RNF-1–5).
**160/160 distinct conditions executed; 152 pass the recorded geometry/contrast
checks, 8 retain an existing shared-header overflow. T7 is complete with that
explicit, nonblocking out-of-scope finding.**
No missing native-font rows remain. This is not independent review, final owner
acceptance, T8 interaction coverage or acceptance of the separate Home feature.

### Preconditions, baseline and native-font mechanism

Read AGENTS, constitution, MEMORY, approved spec/plan/tasks, T6 evidence and the
About/contact/portrait/frame/shared-content/token sources. T1–T6 were completed;
approval records and dependencies agree. Initial dirty status and tracked binary
diff are preserved in `/tmp/opencode/spec004-t7/{status.txt,baseline.patch}`.
All 93 T6 application-manifest hashes initially matched. No user work was reset.

The first attempt stopped after MCP rejected `chrome://settings/fonts` with
`Navigating to chrome: URLs is not allowed.` That direct settings navigation remains
unavailable and was not bypassed. On coordinator continuation, installed platform
capabilities were investigated: the existing `/opt/google/chrome/chrome` supports an
owned isolated profile, configured before startup. No historical method or absent
`/tmp/opencode/feature-progressive-curve/` artifacts were reused as evidence.

- **Native16:** Chrome DevTools MCP, owned isolated context `spec004-t7`, page8,
  permitted HTTP About pages. No existing browser/profile preference changed.
- **Native24:** installed Chrome155.0.8059.39, own temporary profile
  `/tmp/opencode/spec004-t7/profile24`, with pre-start `Default/Preferences`:
  `{"webkit":{"webprefs":{"default_font_size":24,"default_fixed_font_size":24}}}`.
  Launched headless with `--user-data-dir` pointing only to that new profile,
  `--remote-debugging-address=127.0.0.1 --remote-debugging-port=9257`, no extensions,
  no first-run and disabled background networking. Existing user/MCP browser
  processes and profiles were not modified. Native Node WebSocket/CDP provides the
  supplemental backend; no package, service dependency or tool was installed.
- Each row inserts/removes an unstyled same-origin iframe, fixed width1024px:
  its root computes **16px + `(min-width:48rem)` true**, or **24px + query false**.
  The actual page query is checked against `width >= 48 × nativeDefaultFont`.
  Thus root24/native16 and root24/native24 are distinct verified conditions, not
  duplicate CSS-root-only tests. The native24 profile uses threshold1152px,
  not768px. No browser settings/security restriction was circumvented.
- Separate text growth is a temporary browser-only root `100%`/`150%` setting:
  native16 → roots16/24; native24 → roots24/36. Body biography computes16/24/36px,
  opener18/27/40.5px, availability14/21/31.5px. Growth is not overridden by app
  changes. Actual viewport width/height900, DPR approximately1, locale/theme/root,
  native iframe result and page query are stored per row. Native24 has a normal
  15px scrollbar; MCP widths can have fractional scrollbar quantization. Screenshot
  raster width can therefore be less than `innerWidth`; the recorded CSS viewport,
  not PNG width, defines the matrix condition. These are desktop viewport emulations,
  not claims of physical mobile/touch-device testing.

### Matrix and scoped red → correction → green

Both actual origins were used: dev `http://127.0.0.1:3000`, production
`http://127.0.0.1:3111`. For EACH mode:

| Native default | Roots for 100%/150% | Locales/themes/widths | Executed | Fully passing | Existing header exceptions |
| --- | --- | --- | ---: | ---: | ---: |
|16px (MCP)|16/24px|en/es × light/dark ×320/390/768/1024/1440|40|40|0|
|24px (owned Chrome/CDP)|24/36px|en/es × light/dark ×320/390/768/1024/1440|40|36|4|

Totals: **80 MCP rows +80 native24 supplemental rows =160 unique conditions**;
**152 passing +8 existing-header exceptions; 0 missing/skipped conditions**.
Initial-source160 rows, first-fix40 rows, screenshots/sheets and16 header-isolation
supplements are NOT added to this count. Final-source rows replace initial rows.

The initial browser probe showed About overflow at320/native24/150%, both modes,
locales/themes: e.g. Spanish document width362px and contact right edge362.36px;
biography text ranges also exceeded the viewport. Root cause: grid automatic
min-content sizing plus non-wrapping contact flex rows, not the portrait asset.
The probe was established and failed before the correction (`before/` artifacts).

Minimal T7 correction, confined to About:

- Add `styles.page` alongside the existing shared content class, with local
  `overflow-wrap:anywhere` and `min-width:0` on immediate grid children.
- Allow About contact flex rows to wrap. At extreme text sizes the label moves
  below its symbol rather than widening the document. Font sizes, image inset5%,
  assets, glyph paths, palette, shared styles and wording are unchanged.

After correction and a fresh build, repeat ALL160 rows. About text ranges now stay
inside the viewport throughout; all contact outlines have room inside the visible
document, with no masked/clipping ancestor. No source-string-only geometry pass is
used: recorded DOM text ranges, widths, target/image rectangles, resolved paints
and actual screenshots support the findings. No artificial repository test was
added for CSS; the temporary browser geometry probe supplies the red/green case.

### Visual, content and contrast findings

- One h1, three appropriate h2 headings, approved bilingual paragraphs and visible
  unavailable explanations render in order. Biography remains bounded by the
  existing65ch rule and common rails; paragraphs/labels grow and wrap naturally.
  The correction adds no copy, claims, contacts or changes to language switching.
- Actual screenshot review: all eight `portraits-{dev,prod}-{16,24}-{100,150}.png`
  sheets (20 final-source cells each) and full-page examples. Full face plus top
  and both sides of hair remain visible; the image stays upright and undistorted.
  This is visual inspection of the photographed hair/frame, not an inference from
  the image bounding box. Sheet crops deliberately include extra vertical context;
  crop-edge text is not evidence of clipping in the underlying page. Initial tight
  crops were superseded rather than misreported as portrait clipping.
- Eight `contacts-{dev,prod}-{16,24}-{100,150}.png` sheets show en/es ×both themes
  at390px, with representative full-page320/390/1440 views. All four recognizable
  upright symbols retain filled organic silhouettes; the shape, not the logo,
  rotates for WhatsApp/email. Labels and availability remain readable when stacked.
  No visually generic placeholder icon, empty frame or footer social badge was added.
- Both About links have visible unmasked outlines (3px with4px offset; MCP can
  quantize rendered CSS pixels), no clipping/mask ancestor and geometric outline
  clearance. A native keyboard-modality setup precedes measurements; a preliminary
  headless probe reporting `outline:none` from programmatic focus alone was a harness
  modality limitation, not suppressed as a pass. Final probes show solid outlines.
  `focus-prod-es-light-16-150-390.png` was visually inspected. This does not claim
  the complete interaction/navigation exercise assigned to T8.
  Also inspected `focus-prod-es-dark-24-150-320.png`: the wrapped215px-wide link
  and complete solid outline fit below the sticky header. Its separate recorded
  viewport is320/root36; an initial supplemental capture without a device override
  was rejected and replaced, not counted as a matrix row.
- Contrast uses resolved browser paints rasterized through Canvas to RGBA, actual
  opaque ancestor backgrounds, WCAG relative luminance and ratios; not token names
  or CSS-string presence. Symbols use their actual filled pseudo-element paint.
  All rows meet normal4.5:1, large3:1, symbols/focus3:1:

| Pair | Light | Dark |
| --- | ---: | ---: |
| Biography/availability vs page |6.2246:1 (`66,90,89` / `241,235,221`)|11.9091:1 (`223,222,204` / `24,35,30`)|
| Heading/static label vs page |7.3873:1|13.6114:1|
| Active label/footer link/focus vs page |7.3873:1|8.2456:1|
| Symbol vs filled silhouette |7.3873:1|8.2456:1|

Useful final-source owner-review captures in `/tmp/opencode/spec004-t7/`:
`prod-es-light-16-100-390.png`, `prod-es-dark-16-100-1440.png`, and opposite themes
`prod-es-dark-16-100-390.png`, `prod-es-light-16-100-1440.png`. All four were read
and visually inspected. They are presentation evidence, NOT owner acceptance.

### Remaining shared-header issue — not repaired or silently exempted

Eight rows (dev/prod ×en/es ×light/dark,320/native24/150%, root36) still have document
width347px. The About correction has removed its own overflow, but the shared menu
trigger extends to347.33px and its final icon strokes are outside the320px viewport.
`header-diagnostic.json` isolates only menu/trigger/icon descendants as horizontal
offenders. In all16 About/Projects diagnostic combinations, hiding only `main`
temporarily leaves the document width347px unchanged. Projects reproduces the same
header overflow. All such browser-only mutations are removed by subsequent visits.
`header-prod-es-light-about.png` visibly confirms the truncated menu icon.

Evidence of pre-existing/out-of-scope origin: shared header/menu/global styles are
byte-identical to the T6/entry baseline; both before and final sources already show
the same header presentation at this extreme condition, and the issue reproduces
without About content/on Projects. T7 changes only About-local wrapping. The plan
explicitly protects header geometry. No unauthorized shared-chrome repair is made.
The full matrix is not called overflow-free. Following the coordinator-requested
independent focused QA assessment, reported by the coordinator on2026-10-15, this
finding is **nonblocking for T7** under the approved specification: RNF-1 prohibits
introducing horizontal overflow; it does not require repairing every prior issue,
while RNF-5 protects the shared header. The unchanged347px result on About,
Projects and with main hidden establishes the existing shared-chrome origin.
All160 conditions still allow reliable verification of About. This disposition
does not waive or change a requirement, authorize a header repair or relabel the
eight affected rows as passing. **T7 is completed with152 fully passing conditions
and8 documented pre-existing header exceptions.** No other geometry/contrast
failure remains in the recorded checks; the native-font tooling blocker is resolved.

This is a focused QA nonblocking assessment only, not a final spec review verdict
or owner visual acceptance. The reviewer's introductory “CAMBIOS NECESARIOS” was
not a final specification verdict and is not recorded as one. T8–T10 remain pending.

### Fresh final-source checks and identity

After the local correction all six AGENTS commands exited0:

| Command | Fresh T7 result |
| --- | --- |
|`pnpm exec next typegen`|Passed|
|`pnpm lint`|Passed|
|`pnpm exec tsc --noEmit`|Passed|
|`pnpm test`|32 tests:30 pass,0 fail,2 explicit-origin skips|
|`pnpm build`|Passed; new build `Wu1WdhNIsY4hGqUpVa2mH`|
|`git diff --check`|Passed; repeated after documentation|
|Both origin variables set to dev3000, `pnpm test`|42/42 pass,0 fail,0 skips|
|Both origin variables set to prod3111, `pnpm test`|42/42 pass,0 fail,0 skips|

Both explicit runs set `LOCALIZED_404_TEST_ORIGIN` AND `SITE_ICONS_TEST_ORIGIN`.
No repository test file changed. Logs are `typegen.log`, `lint.log`, `tsc.log`,
`test-default.log`, `build.log`, `test-dev.log`, `test-prod.log` under the T7 directory.
These are fresh T7 runs; T6 build/checks above are not relabelled as final evidence.

Final93-file application manifest SHA256:
`b7c52fe5bc984d594996e4c572c2d3d3db48b5963566b1f03bde343c621aeb4e`.
Only `src/app/[locale]/about/page.tsx` and
`src/components/about/about.module.css` differ from the T6 manifest; all91 other
application/config/test/asset files match, including Home feather/photos, Hero,
carousel, header/frame, fonts, supplied SVG/favicon bytes and contact/copy sources.
No MEMORY/AGENTS/spec/plan, dependencies or generated artifact was hand-edited.
Only the T7 checkbox is updated at the documentation disposition below. Existing
git changes remain preserved; no clean-tree claim is made.

Production build fingerprint:

```text
BUILD_ID: Wu1WdhNIsY4hGqUpVa2mH
.next/BUILD_ID SHA256: 7cb626939565cd86c6dfb0b6c7620ce5ba11911df678061722bf35bd84eb1d6c
.next/build-manifest.json SHA256: 50315e6980ac27e41d8c4511be5fc4df88fb6284349c1d914924a2f83adda7ab
.next/server/app-paths-manifest.json SHA256: d37286a0987c09cf89b0515a2c532d64a96451fc5d521914993f3a4a94623644
```

`served-identity.json` records actual en/es HTTP200 responses in both modes with
the new About page class and served CSS containing the new local wrapping rule.
Production CSS response hashes match the corresponding fresh `.next/static/`
files. Disk BUILD_ID is explicitly labelled as disk identity, not extracted from
development HTML. Final browser matrix uses this source/build, not the initial
T6 production instance. No source changes occurred after the fresh checks/build.

Console samples across both modes/locales/themes/text settings retain the known
shared theme-select id/name issue. One early post-build dev sample also recorded
an HMR WebSocket handshake failure; later15 samples did not reproduce it. This is
reported as a transient development-tooling observation, not proven pre-existing
and not repaired by changing shared app code. No related About runtime exception
was observed. Automated checks all pass; physical devices, other browsers and
screen readers remain untested. T8–T10 were not started.

### Artifacts and resource ownership

`matrix.json` is the final160-row index with actual conditions, checks, pass/exception
status and per-row `.json`/`.png` references. `before/` retains initial-source red
evidence; `after-first-fix/` is an intermediate batch, not extra final coverage.
Its machine-generated blocking labels predate the focused QA disposition above;
the measured row outcomes are unchanged, while this report records the finding's
nonblocking status for task completion.
`probe.js`, `native24.mjs`, `aggregate.py`, `sheets.py` and header diagnostics are
temporary validation harnesses, not new project tools or dependencies. Temporary
artifacts may not persist; this report preserves key results and fingerprints.

Preserved existing dev PIDs21662/21680 and port3000. Verified3111 free before starting
owned production; initial server64173 was CWD/command checked before shutdown for
the fresh build. Final production server67726 was verified in repository CWD;
owned Chrome64179 uses only the temporary profile and9257. Only owned production,
Chrome and isolated MCP page8 are eligible for cleanup; user pages/profiles and
the original blank MCP page are preserved. Final cleanup results are recorded below.

Final cleanup: production67726 was rechecked for repository CWD, command and parent
before SIGTERM. Chrome64179 command/profile/port guards passed before CDP
`Browser.close`, which completed. MCP page8 was closed; original page1 remains.
Final process/listener inspection shows21662/21680 still serving dev3000, both
owned server/browser PIDs gone and3111/9257 closed. No user process was stopped.

Final source-manifest recheck: all93 current hashes still match the final manifest.
Post-matrix171-file production server/static manifest SHA256:
`5682fb3a5b93c70c9a728d290ad9c9f758024c8e0058db6db1e431ec75f56692`
(`production-files-final.json`, compact sorted JSON digest). `git diff --check`
passes after documentation edits. No staging, commit, push or publication occurred.

Documentation disposition (2026-10-15): recorded the coordinator-reported focused
QA assessment and checked T7 only. No application or test changes, new browser run
or full-matrix rerun were needed for this prose/checkbox update. `git diff --check`
passed. The known header limitation remains explicit; no later task was started.

## T8 — Interaction, navigation and preservation

Date: 2026-10-15. Scope: T8 only (RF-1, RF-6–10; RNF-1, RNF-2, RNF-4–6).
Result: assigned interaction checks completed without application corrections.
T9 independent review and T10 owner acceptance remain pending. This is not an
all-green claim for T7's matrix or acceptance of the separate Home asset feature.

### Preconditions and unchanged source/build

Read AGENTS, constitution, MEMORY, approved spec/plan/tasks, this evidence and
About/contact/footer/navigation sources. Approval records agree; T1–T7 checked,
T8 pending. Captured dirty status, binary diff and hashes of all existing files
outside Git/dependencies/framework output before acting, including local agent
configurations/backups. All 93 application hashes match final T7 on entry and exit:
`b7c52fe5bc984d594996e4c572c2d3d3db48b5963566b1f03bde343c621aeb4e`.
No application, asset, configuration or test source changed; no fixtures installed.
Only this report and T8's checkbox differ from the captured repository baseline.

Production reused final T7 build **`Wu1WdhNIsY4hGqUpVa2mH`**, not the T6 build.
All 171 server/static file hashes match T7's final production manifest, and the
three build fingerprint hashes above remain identical. Browser visits are fresh
T8 observations on this verified build, not recovered T7 browser results.

Existing dev21662/21680, repository CWD and port3000 were verified and preserved;
no3001 listener existed. Port3111 was free before starting the owned
`pnpm start --hostname 127.0.0.1 --port 3111` chain (server75277, parent75276).
Both actual servers returned the current bilingual content. Initial HTTP/native
checks used `http://127.0.0.1:3000`; hydrated client-navigation checks used
**`http://localhost:3000`**, the same verified development listener. Production
checks used **`http://127.0.0.1:3111`** throughout.

### Chrome MCP keyboard, names and contacts

Owned isolated MCP context `spec004-t8`, page9; existing page1 preserved.
Eight conditions: dev/prod ×en/es ×light/dark, native16/root16, height900;
light at390px, dark at1440px. This is representative T8 interaction coverage,
not a repeat of the160-row T7 layout matrix.

- Native Tab moves About GitHub→LinkedIn→footer Home/Inicio, skipping both static
  entries. Shift-Tab reverses across that boundary and returns to GitHub. Enter
  produces trusted native anchor clicks for both About and footer contacts.
  A temporary capturing listener records the real href/target and prevents external
  navigation: no third-party page, login, message, app availability or delivery was
  tested or claimed. A separate no-JS check below verifies actual browser requests.
- Actual destinations in both consumers/locales/themes:
  `https://github.com/72Jorge28` and
  `https://www.linkedin.com/in/jorge-ramos-79b709234/`.
  Both anchors have empty target (native same-tab), no forced new window.
- Accessible/visible names are GitHub and LinkedIn, without redundant decorative
  symbol names. Spanish snapshot exposes the useful localized portrait alternative,
  one h1/three h2s and static WhatsApp/Correo electrónico with “Aún no disponible.”;
  English renders WhatsApp/Email with “Not available yet.”. Static entries have no
  anchor/button/role/tabindex and computed cursor `auto`; unavailable meaning is
  visible without color/hover. Neither channel occurs in the footer.
- About targets measure139.36×76 and149.27×76px. Footer targets measure44.94×44
  and53.61×44px. Native keyboard modality yields solid3px focus with4px offset,
  unmasked/unobscured in both themes. Footer LinkedIn is at y823.53–868.34, below
  header90.59/106.59 and inside900px viewport; hit-testing confirms no covering
  element. Reviewed fresh About dark390 and footer light390 screenshots.
- Additional native24/root36/reduced-motion390 checks in all eight mode/locale/
  theme combinations show wrapped LinkedIn285×255.59px, full outline inside390px,
  top626.02–626.25/bottom881.61–881.84, below header202.59. Reviewed the final
  production Spanish dark screenshot; the large-text outline is fully visible.
  These supplements do not relabel the known320px shared-header exceptions.

### Direct/client navigation and shared-page preservation

In both modes/locales/themes: direct About200, reload, Home “Read more”/
“Conocer más”→About, Projects footer About→About and language switching en↔es
retain the equivalent `/en/about`/`/es/about` route, localized h1 and HTML language.
For actual client navigation, an in-memory sentinel survives both Home→About and
Projects→About on localhost dev and127.0.0.1 production (all eight conditions),
distinguishing client transitions from full-document loads. Home/About/Projects
each expose only the two approved contacts in the existing footer text-link pattern.

Initial dev127.0.0.1 visits navigated successfully but lost the sentinel. Investigation
found no React hydration properties even after an explicit wait and HMR WebSocket
`ERR_INVALID_HTTP_RESPONSE` errors. Changing only browser origin to localhost
restored React properties and client transitions, without a source/server change.
The127.0.0.1 HMR observation also appears in T7 evidence; no precise server-internal
cause is established. It is retained as a development-origin/tooling limitation,
not hidden as a client-navigation pass on that origin or repaired by restarting
the user server. Production had no corresponding runtime error.

Fresh Home checks in all eight conditions retain shared header/frame, localized
Hero identity, carousel controls, About Preview portraits and the existing feather
mask. The aerial image is intentionally lazy: initial above-fold probes report it
unloaded; after scrolling to its section and awaiting decode it loads in all eight
conditions. Reviewed the production desktop Spanish dark feather/footer capture.
The source-byte guard, rather than a screenshot alone, establishes unchanged Home
CSS/feather, Hero, carousel, chrome, fonts, photographs, shape and favicon sources.
This does not accept the separate pending Home visuals or repeat Spec003's full
carousel behavioral review. No query/fragment, mobile-menu-focus or theme change.

### Reduced motion and native no-JS regression

Supplement: installed Chrome155, own new profile
`/tmp/opencode/spec004-t8/profile24`, pre-start native default/fixed font24, CDP9258.
Unstyled1024px iframe computes24px and `(min-width:48rem)` false; page root150%
computes36px. This is genuine native24, not a CSS-root-only substitute. No existing
profile/settings changed. Both modes/locales/themes at390×900 were exercised.

- With scripts enabled, `prefers-reduced-motion:reduce` matches; biography,
  labels, unavailable explanations and native contact focus remain usable, without
  waiting for entrance/scroll animation. No About runtime exception was recorded.
- Scripts are disabled with CDP **before** each fresh About/missing-page visit.
  All loading waits run in the external Node harness, never a paused in-page timer.
  Browser DOM inspection still works through CDP; application scripts do not run.
  About supplies complete biography, all four entries, four configured native
  links across About/footer and genuine static unavailable content. Tab/Shift-Tab
  skip unavailable channels. Enter on each About contact produces its exact HTTPS
  navigation request; Fetch interception aborts it before third-party networking.
  No JS click-handler or account is needed; no external page availability asserted.
- Each `/{en,es}/t8-native-missing` visit returns real HTTP404. Four native Tabs
  traverse skip link, brand and locale choices to the main localized Home recovery
  link. Enter returns `/{locale}` with HTTP200 and matching HTML language, while
  scripts remain disabled. Eight recoveries pass, no redirect fiction.
- No-JS rows retain the requested light/dark media preference and profile24, but
  do not claim next-themes initialization/persistence when its bootstrap is disabled,
  nor root36 growth on the new no-script document. Essential content/navigation,
  not a new theme-bootstrap requirement, is what those rows establish.

The first temporary harness attempts were discarded: style/layout and focus were
sampled before settling text growth, and the first404 assertion wrongly assumed
Home was the first Tab rather than following the existing skip/header sequence.
Final harness waits for fresh load plus settled growth before focus, checks the
entire focused rect within the viewport, and follows native Tab order. Only the
final eight passing rows/screenshots count; no application fix or weakened check.

### Fresh automated checks, limitations and handoff

| Command | T8 result |
| --- | --- |
|`LOCALIZED_404_TEST_ORIGIN=http://localhost:3000 SITE_ICONS_TEST_ORIGIN=http://localhost:3000 pnpm test`|42 tests,42 pass,0 fail,0 skipped|
|`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 SITE_ICONS_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test`|42 tests,42 pass,0 fail,0 skipped|
|`git diff --check`|Passed before and after documentation|

Both fresh suites actually execute404/status and six icon-head/response/byte
contracts, contact update/removal/email/WhatsApp synthetic cases, locale parity
and existing domain/carousel tests. No repository tests added/modified; this task
changes validation prose only, so no artificial red→green test or new build is
needed. The six final-source T7 commands remain valid for byte-identical application
source/build; they are not described as newly executed T8 commands.

Known pre-existing findings remain: T7's eight320/native24/root36 shared-header
overflow conditions (152 fully passing/160 executed, not all green); shared theme
select missing id/name issue in MCP console; deferred mobile-menu-focus and
query/fragment behavior. HMR origin limitation is separated above. None is caused
by T8, which edits no application file. No new About-related runtime exception or
blocking interaction defect was observed. Physical devices, other browsers,
screen readers, external accounts/apps/message delivery remain unverified.

Temporary supporting artifacts: `/tmp/opencode/spec004-t8/` contains baseline
status/diff/hashes, `native.mjs`, final `native-results.json`/`native.log`, eight
native24 focus screenshots, MCP About/footer focus screenshots, Spanish a11y
snapshot, Home screenshots, server/browser logs and two42/42 test logs. MCP
interaction/navigation outcomes are recorded above; temporary files may disappear.
No MEMORY/spec/plan/AGENTS edit, install, dependency repair, generated-file hand
edit, staging, commit, push, publication or later-task work occurred.

Final cleanup: rechecked production75277 repository CWD, command and parent75276
before SIGTERM; verified Chrome76329's owned profile/9258 arguments before CDP
`Browser.close`. Closed only owned MCP page9; original blank page1 remains.
Final listener inspection confirms3111/9258 closed, no3001 listener, original
dev21662/21680 still on3000. Final baseline comparison finds exactly the two
authorized document changes; application/build identity is unchanged.
`git diff --check` passes. T8 is checked; T9/T10 remain unchecked.

## T9 — Independent requirement review; owner gate pending

Date: 2026-10-15. Scope: administrative recording of the completed independent
review, as handed off by the coordinator; no correction cycle or implementation.
Approved spec/plan/tasks, AGENTS, constitution, MEMORY and prior validation evidence
were read. T1–T8 are checked; T9 and T10 remain unchecked.

**VEREDICTO: CAMBIOS NECESARIOS**

The independent reviewer verified all RF-1–10 and RNF-1–6 technical requirements
and found no technical blocking defect or required code correction. The verdict
is exclusively due to the missing explicit owner acceptance required by the spec's
completion criteria and T10. This is a pending owner gate, not a bug, requirement
change or reason for automatic code changes. Technical verification does not imply
full specification approval or closure. T9's `Hecho cuando` requires an `APROBADO`
verdict, so its checkbox remains unchecked pending owner acceptance and the
reviewer's final verdict; T10 also remains unchecked.

### Requirement-by-requirement results

Methods/results below are the independent reviewer's reported findings, not new
application/browser checks performed by this administrative documentation task.

| Requirement | Method and result |
| --- | --- |
| RF-1 | Appendix A compared with rendered en/es biography and navigation evidence: complete introduction and confirmed identity verified. |
| RF-2 | Copy/fact audit: education, Desoft/Odoo since April2026, current Next.js work and exploratory learning accurately distinguished; verified. |
| RF-3 | Bilingual copy audit: technology enthusiasm, perception/computer vision, cybersecurity and aspirational working practices verified without mastery claims. |
| RF-4 | Source reuse and fresh visual inspection: original Home portrait, upright and undistorted, full head/hair visible; technically verified, owner acceptance pending. |
| RF-5 | Fresh both-theme visuals and DOM: four recognizable upright symbols in filled organic frames with localized labels; technically verified, owner acceptance pending. |
| RF-6 | Active About/footer href inspection and tests: exact approved GitHub/LinkedIn destinations verified. |
| RF-7 | DOM/native Tab inspection: WhatsApp/email retain visible localized explanations without interactive elements or tab stops; verified. |
| RF-8 | Seven pure contact-domain tests: synthetic activation, correct mailto/HTTPS destinations, central updates/removal and applicable consumer propagation verified; future configuration is not claimed as current publication. |
| RF-9 | Fresh footer inspection plus projection tests: configured GitHub/LinkedIn in preserved text-link presentation, no WhatsApp/inactive entries; technically verified, owner acceptance pending. |
| RF-10 | Rendered en/es, message parity and navigation evidence: translated facts/labels/alt text and equivalent About locale route verified. |
| RNF-1 | Fresh representative browser checks plus audit of all160 T7 records: technical coverage verified,152 fully green and8 unchanged shared-header exceptions, not an overflow-free matrix. |
| RNF-2 | Fresh DOM/keyboard/focus, computed contrast and target measurements: headings, names, static explanations, visible focus and ≥44px targets verified. |
| RNF-3 | Fresh both-theme visual inspection and source audit: fonts, rails, filled frames and recognizable undistorted symbols technically verified; final owner composition acceptance pending. |
| RNF-4 | Appendix A, public configuration and scoped diff audit: confirmed facts/destinations only, no inferred email/phone or private CV data; verified. |
| RNF-5 | Scoped diff and baseline/hash audit: protected pre-004 asset-feature work and unrelated chrome/assets/configurations preserved; verified without accepting the separate Home feature. |
| RNF-6 | Server/native-link architecture and dependency audit, plus audited T8 reduced-motion/no-JS evidence: essential content/navigation independent of animation/embeds/accounts; verified. |

### Fresh reviewer checks and evidence boundaries

| Check | Independent reviewer result |
| --- | --- |
| `pnpm lint` | Passed. |
| `pnpm exec tsc --noEmit` | Passed. |
| `git diff --check` | Passed. |
| `LOCALIZED_404_TEST_ORIGIN=http://localhost:3000 SITE_ICONS_TEST_ORIGIN=http://localhost:3000 pnpm test` | Development:42/42 passed,0 skipped. |
| `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 SITE_ICONS_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test` | Production:42/42 passed,0 skipped. |

The reviewer did **not** repeat `next typegen` or `pnpm build`. Instead, all93
source-manifest files and171 production server/static files matched the final
manifests supporting the successful T7 checks/build:

```text
BUILD_ID: Wu1WdhNIsY4hGqUpVa2mH
Source manifest SHA256: b7c52fe5bc984d594996e4c572c2d3d3db48b5963566b1f03bde343c621aeb4e
Server/static manifest SHA256: 5682fb3a5b93c70c9a728d290ad9c9f758024c8e0058db6db1e431ec75f56692
```

Fresh independent Chrome DevTools MCP inspection covered en/es, both themes,
390/1440px in dev and production, plus320px with root150% text. Computed body
contrast was6.22:1 light/11.91:1 dark; meaningful icons/links were7.39:1/8.25:1.
Active targets met44px minimums and focus was visible. These checks did not repeat
the160-row/native24 profile matrix: the reviewer independently audited its records,
including152 fully passing rows and8 pre-existing320/native24/150% header cases.
T8 reduced-motion/no-JS evidence was audited, not repeated.

Actual final-production screenshots under `/tmp/opencode/spec004-review/` include
`es390light.png`, `es1440dark.png`, opposite-theme/en-es390/1440 captures and
`es390dark-focus.png`. These are reviewer evidence for presentation to the owner,
not owner acceptance; temporary artifacts may disappear.

### Completion criteria, limitations and disposition

| Spec completion criterion | Result |
| --- | --- |
| Explicit spec approval before planning | Verified approval record, including Appendix A, hierarchy and footer scope. |
| Separate plan/tasks approval and RF/RNF checks | Approval and technical evidence verified, with the documented pre-existing exceptions and evidence boundaries above. |
| Independent content/contact/preservation review | Completed with no technical blocking noncompliance; limitations reported. |
| Explicit final owner visual acceptance | **Pending T10** for portrait, filled recognizable frames, bilingual hierarchy/both themes and preserved footer; prevents full approval/closure. |

The unchanged347px shared-header overflow at320/native24/150% also reproduces on
Projects and with `main` hidden; it is pre-existing, nonblocking and outside this
task's protected-header scope. The existing theme-select id/name warning and
127.0.0.1 dev HMR origin limitation remain reported; localhost dev was verified.
Physical devices, other browsers and screen readers remain unverified. An optional
dev LCP warning for the lazy About portrait does not establish a performance
failure and requests no fix. No plan/constitution fault or unrequested change was
found; local agent configurations and the pre-004 asset-feature baseline remain
protected. No new technical decision, dependency or correction was introduced.

The reviewer closed owned production3111 and page10; the user's development page
`http://localhost:3000/es/about` remains available. This administrative task edits
only `validation.md`, creates/modifies no tests and leaves all task checkboxes,
application files, MEMORY, AGENTS, constitution, spec and plan unchanged. No new
browser run, application build, staging, commit or push is required or performed.
Next step belongs to the coordinator: present the final visuals for explicit owner
acceptance, then obtain the reviewer's final verdict. No automatic code correction
or specification closure is authorized by this record.

## T4 visual amendment — Consistent contact-background inclination

Date: 2026-10-15. Coordinator-assigned, bounded owner-requested adjustment while
T10 acceptance is pending: give all four decorative backgrounds the existing
email background's inclination. Scope: RF-5/RNF-3, with affected RNF-1/2/5
regression checks. This is a permitted exact-geometry decision within the approved
direction, not a new requirement, feature or technical-review correction cycle.
T4 remains checked; T9/T10 remain unchecked. Owner acceptance and independent
final rereview are still pending; this implementer does not issue a final verdict.

### Change and preservation

- Read AGENTS, constitution, MEMORY, approved spec/plan/tasks, all prior validation
  evidence, About CSS/contact rendering and SVG sources. Approvals agree; T1–T8
  were already completed. Coordinator explicitly assigned this T4 amendment rather
  than a new pending implementation task. Captured dirty status, binary tracked
  diff and hashes of all existing files excluding Git/dependencies/framework output
  under `/tmp/opencode/spec004-icon-tilt/` before editing.
- Move `rotate(-15deg)` to the shared `.contactSymbol::before`; remove WhatsApp's
  90-degree and email-only rotation rules. SVGs, wrappers, text and link hitboxes
  remain untransformed. Preserve both existing mask varieties and semantic paints.
- A genuine geometry issue appeared when applying the tilt to LinkedIn's square
  logo: its corners protruded slightly beyond the original silhouette. Increase
  **only LinkedIn's decorative pseudo-element** by 0.25rem per side (60→68px at
  root16). Wrapper, logo28px, layout and targets remain unchanged. This bounded
  mask-clearance adjustment is necessary for containment, not a new badge design.
  Fresh visual inspection and aspect-preserving raster probes confirm it: with
  the SVG mask's intrinsic ratio retained, the old60px tilted LinkedIn mask leaves
  21 opaque logo pixels outside; the68px mask leaves zero. Other three existing
  60px backgrounds also leave zero. Raster threshold is alpha>128; screenshots
  independently establish actual recognizability/appearance, not just transforms.
- No repository tests added/modified: this is decorative CSS, not changed contact
  logic. No artificial source-string unit test. Temporary browser/raster probes
  supplement real screenshots; the initial geometry observation→minimal clearance
  adjustment→fresh verification supplies the relevant visual regression cycle.
- Baseline hash comparison before this prose found exactly one changed file:
  `src/components/about/about.module.css`. All other application/assets/tests,
  Home feather/photos, Hero, favicon/shape/font bytes, metadata, shared chrome,
  local agent/backups and prior work remain intact. No MEMORY/spec/plan/tasks,
  AGENTS/constitution, configuration, dependency or generated file was hand-edited.

### Fresh checks and final identity

Node24.21.0, pnpm12.4.1. After the LinkedIn clearance adjustment, all six AGENTS
checks exited0; earlier intermediate builds/runs are not the final evidence.

| Command | Final amendment result |
| --- | --- |
| `pnpm exec next typegen` | Passed. |
| `pnpm lint` | Passed, no diagnostics. |
| `pnpm exec tsc --noEmit` | Passed, no diagnostics. |
| `LOCALIZED_404_TEST_ORIGIN=http://localhost:3000 SITE_ICONS_TEST_ORIGIN=http://localhost:3000 pnpm test` | 42/42 passed,0 failures,0 skips. This is the six-check `pnpm test` execution, with both contracts enabled. |
| `pnpm build` | Passed,8/8 static generation steps; experimental globalNotFound remains unchanged. |
| `git diff --check` | Passed; repeated after documentation. |
| `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 SITE_ICONS_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test` | 42/42 passed,0 failures,0 skips against the fresh final build. |

Both origin suites actually execute localized404 and supplied icon response/byte
contracts, contact projections and existing domain/translation/carousel tests.
No external GitHub/LinkedIn page, login, app availability or message delivery is
asserted. `served-identity.json` records en/es About200 and the served rotated CSS
in both modes. Production CSS SHA256
`395bc1f7920e677751abaf6edb4d03e39d4ee689b9a87c711a84f9ae849d0940`
matches `.next/static/chunks/0qctcwpvgqyqp.css` byte-for-byte. Development's CSS
belongs to its separate dev output, not the production static directory.

```text
Final BUILD_ID: GJay8FUi94mC1DZtZsdoR
93-file application manifest SHA256:
30f6c92e09173e9c8d7b626ae512ace59c9236c3e05cde53d3f5f8896f479c8b
.next/BUILD_ID SHA256:
f9c4470bbbff6e0d15624a7f933cf09b95bdf473fec2ab0e53807623be107cc2
.next/build-manifest.json SHA256:
814f2bff6d68de4d31f77a76a25354e869c86f584f9253b43cb33a003221f313
.next/server/app-paths-manifest.json SHA256:
d37286a0987c09cf89b0515a2c532d64a96451fc5d521914993f3a4a94623644
```

Against T7's93-file manifest `b7c52fe5…`, only About CSS differs;92 other hashes
match. The previous build `Wu1WdhNIsY4hGqUpVa2mH` and T6/T7/T8/reviewer evidence
remain historical evidence for their stated sources. They are not relabelled as
this amendment's final checks. This section supersedes their contact-orientation
presentation only, with fresh affected-style evidence below, not a new full review.

### Fresh affected-UI browser evidence

- Chrome DevTools MCP isolated context `spec004-icon-tilt`, owned page11:
  **80 conditions**, dev/prod ×en/es ×light/dark ×320/390/768/1024/1440 ×100/150%
  text, native16/root16 or24. Actual viewport widths were verified using viewport
  emulation, not inferred from requested resize dimensions. Actual `data-theme`,
  root size and resolved body paints are recorded. All80 pass the affected checks;
  none introduces document overflow. Initial resize/class-based samples were
  rejected because actual minimum window width/theme did not match the labels;
  final `mcp-*.json` files replace them with verified conditions.
- All four computed pseudo transforms resolve to
  `matrix(0.965926, -0.258819, 0.258819, 0.965926, 0, 0)` (−15deg); logo, wrapper
  and hitbox transforms are `none`. Masks remain hero for GitHub/WhatsApp, media
  for LinkedIn/email; no clipping ancestors. All active targets remain≥44×44px.
  All four entries/labels and genuine static WhatsApp/email content remain visible.
- **16 additional native24/root36 conditions**: dev/prod ×en/es ×light/dark
  ×320/390,150% text. Own installed Chrome155 profile
  `/tmp/opencode/spec004-icon-tilt/profile24`, default/fixed24 configured before
  startup, CDP9260. Unstyled1024px iframe computes24px and48rem query false,
  confirming genuine native24 rather than CSS-root-only substitution. No existing
  profile or user preference changed; no dependency installed. All16 pass affected
  symbol/target/outline checks. Eight320px rows retain documented347px shared-header
  overflow; eight390px rows do not overflow. **96 fresh conditions total:88 without
  document overflow,8 existing header exceptions**, not an all-green page matrix.
  This is a proportional affected-style repeat, not a repeat of all160 T7 rows.
- Eight additional MCP native-keyboard samples (dev/prod ×en/es ×both themes,390):
  Tab GitHub→LinkedIn gives a solid visible outline; next Tab enters footer,
  skipping both unavailable entries. Native24 samples likewise show complete
  LinkedIn focus clearance. No whole-link rotation or masked outline introduced.
- Resolved foreground/fill pairs remain light `241,235,221`/`53,79,82` and dark
  `24,35,30`/`175,190,161`: fresh relative-luminance ratios7.3873:1/8.2456:1.
  All colors and text styles are unchanged; rotation does not introduce animation.
- Actually inspected final screenshots: Spanish390 both themes, Spanish1440
  light full page, English dev390 light/prod1440 dark, and native24/root36 Spanish
  dark320 focus. Four filled horizontal-tilted silhouettes, upright recognizable
  logos fully inside, readable labels/availability and no new contact clipping.
  Final full-page screenshots start at scroll0; earlier scroll-position captures
  with a sticky header mid-image were superseded, not treated as a layout defect.

Owner-review captures (production, native16/root16) under
`/tmp/opencode/spec004-icon-tilt/`:

- `es390dark-contacts.png`, `es390dark-full.png`;
- `es1440light-contacts.png`, `es1440light-full.png`;
- opposite themes: `es390light-contacts.png`, `es390light-full.png`,
  `es1440dark-contacts.png`, `es1440dark-full.png`.

These are implementer evidence, **not owner acceptance**. Logs, hashes, final
`mcp-*.json`, `focus-*.json`, `native-results.json`/native screenshots,
`raster-containment.json` and `served-identity.json` accompany the captures.
Earlier non-aspect-preserving raster experiments are superseded by
`raster-containment.json`, which preserves mask intrinsic proportions.

### Limitations, existing findings and handoff

The known347px header overflow remains at320/native24/150%, unchanged from T7's
About/Projects/hidden-main isolation and unchanged header hashes; it is not a
new contact-background defect and remains outside scope. Console samples in all
four mode/locale combinations show the existing theme-select id/name issue;
development also shows the previously recorded lazy portrait LCP warning. No new
About runtime error appeared. No header, select or image-loading repair was made.
Physical devices, other browsers and screen readers remain untested. T8's complete
navigation/no-JS/reduced-motion exercise is historical, not repeated here; the
amendment adds only static decorative CSS and fresh affected focus/layout checks.

Verified existing dev21662/21680 repository CWD and3000 listener before reuse;
preserve that server and owner pages. Port3111 was free before starting owned
production; intermediate85413 was CWD/parent checked before stopping for the final
build. Final production87194 is owned; own native24 Chrome was closed through CDP
after all16 samples. Only owned production and page11 are eligible for cleanup.
No staging, commit, push, publication or later-task implementation is authorized.
Final cleanup and baseline confirmation follow below.

Final cleanup: rechecked production87194 repository CWD, command and parent87193
(`next start …3111`) before SIGTERM. Ports3111/9260 are closed; original dev
21662/21680 remains on3000. Closed only owned MCP page11; original blank page1
remains. Final all-file baseline comparison finds exactly About CSS and this
validation document changed; all93 final application hashes still match.
`git diff --check` passes after the evidence update. T4/T9/T10 checkboxes remain
untouched. Coordinator handoff: present these new visuals for explicit acceptance
and obtain the reviewer's final independent verdict; do not auto-close either gate.
