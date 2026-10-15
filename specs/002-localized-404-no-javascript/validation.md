# T9 validation — completed by implementer

Date: 2026-10-09 (local UTC−04:00). Final evidence and corrected counts appear in
the closing section. Earlier STOP/progress sections are historical, not current
instructions or final claims. T9's records remain attributed to the implementer;
the independent T10 verdict and specification closure are recorded at the end.

## Authority and preserved state

Read AGENTS.md, constitution, MEMORY, approved spec, current approved plan/tasks,
T7 integration tests and relevant application/theme sources. T8's checkbox was
independently read as complete. Only this evidence document was added to the
repository; no application, tests, dependencies, other documents or task checkbox
were changed. Existing unrelated working-tree changes were preserved.

The production build survived: BUILD_ID `j0MzpvRIXSJQ28CyFhkQt`, dated October 8
18:14, generated types and app manifests present. No source/test file had an mtime
newer than BUILD_ID; config/package also predated it. This is supporting continuity
evidence, not a complete historical source-hash attestation. The manifests contain
the three localized page routes and `_not-found`, not the removed catch-all.

T8 implementer session `ses_ee2717790ffeZK1navTcDfJ3RP`, as reported by coordinator
and recorded in MEMORY, passed typegen, lint, tsc, tests, build and whitespace,
15 tests without skips against each actual-app mode, and four-path native
JS-off/on direct/reload/keyboard recovery. Dynamic valid routes/404 were reported.
Those results are inherited, attributed reports, NOT fresh command execution.
The old `/tmp/opencode/t8-realapp-20261008-1815` captures are unavailable. No build
or completed static check was replayed under the coordinator's explicit instruction.

## New execution and methods

Node v24.21.0, pnpm 12.4.1, Chrome 154.0.8037.97. Reserved ports were free.
Started only owned `pnpm dev --port 3110 --hostname 127.0.0.1`; ready successfully.
`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test`: **15 passed, zero skips**.
Production was not started before the stopping condition below.

Temporary script: `/tmp/opencode/t9-20261009-1310/matrix.mjs`. Native CDP used an
owned headless Chrome profile/port9223, with `Emulation.setScriptExecutionDisabled`
set BEFORE document visits/reloads. Runtime evaluation inspected ordinary DOM,
computed styles and geometry; it was not application hydration. Script-free theme
input explicitly sets `data-theme`; text sizing sets the root to 16/24px. With
scripts enabled, the corrected harness uses the actual enabled theme selector.
Tab/Enter use native Input events. Document Network responses and visible DOM are
checked together. Reduced-motion media is set while measuring presentation.

Chrome DevTools MCP independently opened an owned Spanish nested missing-page tab,
inspected its accessibility snapshot and a 320px dark/150% full-page screenshot.
The error heading/message/native recovery remained readable. Corrected native
JS-off dark/320px/150% screenshot was also visually inspected. Original about:blank
was left untouched; the owned MCP tab was closed afterward.

## Requirement evidence and limits

| Requirement | Fresh result / remaining gap |
| --- | --- |
| RF-1 | Development: 16 document observations (four paths × JS-off/on × direct/reload) returned404 at the requested path. HTTP contracts separately establish no Location. Production only has attributed T8 results. |
| RF-2/3 | Development: all 16 ordinary-DOM observations had exact catalog h1/message and en/es HTML lang, under contrary language/cookie/forged metadata. Two locale-query override probes also passed. |
| RF-4/5, RNF-2 | Development: native named anchors, one main/main-content, noindex; eight Tab/Enter recoveries reached corresponding Home document200. Focus-visible and nonzero outline were inspected. Full per-theme/per-width focus and production presentation remain unverified. |
| RF-6 | Development: all six valid routes tested with both script settings (12 observations), localized lang/nonempty h1/main and document200. Fresh client navigation/back-forward/menu regression coverage remains incomplete. |
| RNF-1 | Five development query/negotiation controls passed: locale overrides ignored, unprefixed Spanish redirect, unsupported-prefix English redirect, locale-cookie precedence. Relevant source hashes and BUILD_ID matched before/after this run. This is not a fresh original-runtime policy comparison. Theme bootstrap/persistence/system/locale-switch regression coverage remains incomplete. |
| RNF-3 | Corrected v2 run completed all **80 development JS-off** presentation cells: four paths × light/dark × five widths × 16/24px root font. Theme attribute and computed color-scheme asserted, visible h1/p/a bounds positive and within viewport, document/body horizontal overflow absent. Full JS-on and production presentation were not completed. |

## Diagnostic errors and stopping condition

The first script completed all development contracts above, but its 160 presentation
measurements applied `light/dark` classes instead of the application's `data-theme`.
The inspected dark-labelled screenshot was actually light. Its theme-matrix claim is
invalid and excluded. Other document/keyboard/valid-route/negotiation assertions
are independent of that mistake; no Runtime exceptions were observed.

After correcting the attribute, v2 completed 80 JS-off presentation cells, then
failed an assertion on the first JS-on theme: asynchronous hydration reset the
diagnostic root attribute. ThemeProvider and ThemeSwitcher source inspection
identified the competing effect. This is a harness control race, not established
application failure. The v2 JSON preserves the failure and completed cells.

V3 used the hydrated theme selector and emitted correctly themed screenshots, but
the shell command exceeded **120 seconds before completion**. No final v3 result
JSON was produced. Its partial screenshots are not a completed matrix. Per the
coordinator's first-runtime-blocker STOP instruction, no longer-timeout retry,
production execution or further regression probes were attempted. The operational
timeout does not establish an application defect, but prevents reliable full T9
verification. T9 must remain open.

Raw material remains under `/tmp/opencode/t9-20261009-1310` (dev-tests.log,
dev-matrix.json, dev-matrix-v2.json, screenshots, script, identity and server logs).
Temporary storage may disappear; this document preserves substantive results and
limits, not a guarantee that raw captures will survive another restart.

## Cleanup and follow-up

Closed the owned MCP tab and headless browser through Browser.close; gracefully
terminated only the newly owned development process group after checking PID/PGID.
Final listener check found none on3000/3001/3106/3110/3111/9223. No output deletion,
cache cleanup, foreign process termination or application fix occurred.

`git diff --check` passed; `git diff --no-index --check /dev/null` against this
new evidence document also passed (untracked files are not covered by ordinary diff).
Known unrelated MEMORY findings (favicon404, mobile-menu focus loss, query/fragment
policy) were not fixed. Favicon404 appeared in the dev log and is already recorded
in MEMORY; it is outside this missing-page recovery task. No new related application
regression was established; missing validation is nevertheless blocking.

At this initial STOP, coordinator needed to resolve the runtime-validation condition before resuming
the remaining JS-on/production matrix and navigation/theme regressions. Preserve
the 80 correctly controlled development JS-off cells and fresh contract results;
do not treat invalid or timed-out presentation runs as complete. T10 was not begun.

## Authorized bounded continuation — 2026-10-09

Coordinator resolved the scheduling STOP: only temporary harness changes, short
bounded batches, per-cell atomic persistence, no replay of the 80 valid JS-off
presentation cells or completed contracts, no application changes or build replay.
Preflight confirmed identical BUILD_ID/config/global-document/request/test hashes,
free3110/3111/9223 and no existing Next processes. A new owned dev3110 and headless
Chrome9223 were started. Continuation raw evidence is under
`/tmp/opencode/t9-batches-20261009-1325`; each ten-cell batch writes after every cell
via temporary file plus atomic rename, followed by a final pass/failure record.

Development continuation completed:

| Batch suffix (JSON) | Valid presentation cells |
| --- | ---: |
| dev-on-en-simple-light-presentation | 10 |
| dev-on-en-simple-dark-presentation | 10 |
| dev-on-es-simple-light-presentation | 10 |
| dev-on-es-simple-dark-presentation | 10 |
| dev-on-en-nested-light-presentation | 10 |
| dev-on-en-nested-dark-presentation | 10 |
| dev-on-es-nested-light-presentation | 10 |
| dev-on-es-nested-dark-presentation | 10 |

All 80 new JS-on cells use the actual hydrated theme selector, assert data-theme
AND computed color-scheme, exact root font16/24px, readable positive element bounds,
no horizontal document/body overflow and native Tab focus with visible3px outline.
Separate `dev-off-*-focus-only` batches added the previously missing focus checks
for all 80 JS-off combinations, without replaying their completed presentation
validation. Native focus is checked by focusing semantic main then pressing Tab;
the earlier eight complete Tab/Enter recovery procedures remain valid evidence.
Reduced-motion media was active. A saved Spanish dark nested JS-on320px/150%
focused-link screenshot was visually inspected and readable, without clipping.

Development regression batches: theme (7 checks), navigation en/es (8 each), and
missing-page locale/menu navigation for all four paths (3 each): **35 passed**.
Stored dark first bootstrap mutation/reload persistence, hydration, missing-route
locale navigation preserving dark, system light→dark/reload and real light selector
passed. Valid Home→About→Projects links preserved a window marker (client navigation),
back/forward worked, valid locale switching worked, mobile menu valid navigation
closed correctly and Escape restored trigger focus under reduced motion. All four
missing paths switched to the other locale and back without losing depth; mobile
menu recovery reached localized Projects. No Runtime exceptions or console errors
were observed in these completed batches.

Additional harness-only failures were retained, not hidden: the first new batch
preserved one valid cell then saw a transient computed root font16px instead of the
requested24px. A bounded immediate/next-evaluation diagnostic verified the requested
inline/computed values, with no application errors. Measurement now waits for the
exact font/viewport condition before retaining the unchanged strict assertions;
the existing valid cell was skipped on resume. A parallel dark/light pair shared
same-origin theme storage, changing the other tab's theme. The failing zero-cell
attempt is retained in priorAttempts; all subsequent batches run sequentially, and
the same dark batch passed. Neither diagnostic failure establishes an app defect.
Initial invalid class-based results and unfinished v3 still remain excluded.

Production and final cleanup/checks remain pending at this progress checkpoint.

## Final completed evidence — 13:52 UTC−04:00

### Final reconciliation of old results

The final aggregator checked actual recorded font and viewport against each intended
cell, rather than trusting old labels. This revealed that **53 of the old80 JS-off
cells had computed root font different from the requested16/24px**. The earlier
"80 valid" presentation claim is therefore superseded: only27 were correctly sized
and retained. The old records are preserved and the53 mislabelled cells excluded.
This is inadequate diagnostic evidence, not an application layout failure.

After completing production, stopped only the owned production server and restarted
owned dev3110 sequentially. `font-gap` batches measured ONLY the53 missing cells,
using the exact computed-font/viewport conditions and unchanged strict geometry,
theme and focus assertions. They did not repeat the27 valid cells, completed dev
contracts or new240 presentation cells. All corrected batches passed:

| Development JS-off gap batch | Corrected cells |
| --- | ---: |
| en simple light / dark | 7 / 8 |
| en nested light / dark | 6 / 5 |
| es simple light / dark | 6 / 7 |
| es nested light / dark | 7 / 7 |

The bounded font diagnostic showed controlled values working without app errors;
the original unchecked timing/labels were not reliable proof. No unique deeper
browser timing cause is claimed. Final aggregation also initially matched an
auxiliary gap-array file and later omitted contract files because of its filename
filter; correcting the report selection produced the counts below. These were
summary-harness errors only, not test failures or discarded completed results.

### Full matrix and commands

**320 unique presentation combinations completed**:

| Mode / scripts | Cells | Provenance |
| --- | ---: | --- |
| development / off | 80 | 27 retained correct v2 cells +53 corrected font-gap cells |
| development / on | 80 | Eight completed ten-cell presentation batches |
| production / off | 80 | Eight completed ten-cell presentation batches |
| production / on | 80 | Eight completed ten-cell presentation batches |

Every row covers one of four missing paths, light/dark, width320/390/768/1024/1440,
normal16px or150%24px root text. **320 corresponding native Tab/focus combinations**
passed; original27 presentation cells use the separate completed JS-off focus rows.
Final aggregation asserted unique cell IDs, expected counts, retained fonts/viewport
and absence of overflow. Production batches are named
`prod-{off,on}-{en,es}-{simple,nested}-{light,dark}-presentation.json` (10 each).
Remaining dev batches and focus-only names are recorded above. Atomic incremental
results are preserved per batch; longest completed browser batch was **1.491 seconds**.
Commands were bounded to45/60 seconds, not another monolithic/longer-timeout retry.

Fresh `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test` (initial T9) and
`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test` (continuation) each passed
**15 tests, zero skips**. No tests or production dependencies were created/modified.
Temporary CDP scripts are diagnostics, not added project tests. TDD does not apply
to this validation/documentation-only task; T7/T8's red/green attribution is unchanged.

Six AGENTS checks: typegen/lint/tsc/test/build passed in T8 and are explicitly reused
by coordinator instruction, not represented as freshly executed by T9. T9 freshly
ran both explicit-origin test commands and final whitespace checks. No build replay
was necessary: BUILD_ID and approved config/global document/request/test SHA256
matched at each preflight and final cleanup; no source/test file was newer than
the surviving build. Those checks support continuity but do not retrospectively
recover the missing T8 raw evidence. Fresh prerender-manifest inspection lists only
`/_global-error` among prerendered routes: no static localized valid-page or404
entry. This is consistent with T8's reported dynamic-rendering accepted tradeoff,
not a new build classification claim.

### Final requirement results

| Requirement | Completed actual-application evidence |
| --- | --- |
| RF-1 | Dev16 +prod16 native document observations: four paths × scripts off/on × direct/reload; status404 at requested URL. Explicit-origin HTTP tests prove no Location. Production native response headers also checked no Location. No soft200 or recovery redirect substituted. |
| RF-2/3 | Exact en/es h1/message/recovery copy and HTML lang in ordinary main DOM, under contrary preferences/cookies/forged metadata; alternating requests and ignored locale query overrides. Dev query-off continuation added8 negotiation checks; previously completed dev on evidence retained. Production negotiation has8 checks per script mode. |
| RF-4/5 | Native visible absolute /en or /es recovery anchors; eight full Tab/Enter Home document200 recoveries per mode across four paths and both script settings. Production native AX tree verifies nonignored localized heading/link accessible names. Dev MCP snapshot supplies corresponding semantic/accessibility evidence. |
| RF-6 | Six actual localized valid routes in both script settings per mode (12 document200 observations each), nonempty localized main/h1, successful recovery. Fresh client links, history back/forward, valid locale switch and mobile-menu navigation passed in each mode. |
| RNF-1 | No app/source/test/dependency changes in T9; approved four-file correction preserved, unrelated tree changes untouched. Supported prefixes beat contrary metadata and locale queries; unprefixed, unsupported-prefix, cookie and default-language negotiation controls match canonical routing sources. No original-runtime comparison or new negotiation policy claimed. Theme bootstrap/hydration/persistence/system/locale navigation passed in both modes. |
| RNF-2 | One semantic main/main-content with exact h1/native named anchor/noindex; full keyboard Home recovery,320 focused theme/width/text/script combinations and visible3px solid focus outlines. Essentials remained visible under reduced motion and native no-script visits. Reduced-motion menu navigation/Escape passed. |
| RNF-3 | All320 unique corrected/retained presentation cells: exact theme and font conditions, positive visible heading/message/link geometry, bounds inside viewport, no horizontal document/body overflow. Representative actual screenshots inspected as described below. |

Production fresh contracts: **60 checks** (32 missing-page/direct/reload/AX/keyboard,
12 valid-route documents,16 negotiation). Development continuation added8 missing
negotiation checks with scripts off, without repeating completed base contracts.
Fresh regression batches: **70 checks**,35 per mode, no Runtime exceptions or console
errors. Theme tests include first observed stored-dark bootstrap mutation before
hydration, reload/localized navigation persistence, system light→dark/reload and
actual light selection without blanking. Missing locale switches preserve all four
path depths in both directions. Existing query/fragment dropping policy was not
changed: pathname-only LocaleSwitcher remains unchanged; that known behavior is not
represented as fixed. Normal-motion direct contracts and reduced-motion presentation/
menu checks together establish motion-independent essentials.

Chrome DevTools MCP inspected production English semantic snapshot and light1440px
full-page screenshot. Owned tab closed; initial about:blank untouched. Additionally
inspected saved production Spanish nested dark320px/150% JS-off focused-link and
English simple light1440px JS-on focused-link screenshots. Together with the earlier
dev JS-off/JS-on inspections, representative native screenshots cover both modes,
both script settings, light desktop and dark mobile/text growth. No clipping,
horizontal overflow or unreadable essential content was seen. This is not a claim
that all320 screenshots were manually reviewed or that a screen reader was tested.

### Final scope, cleanup, limitations

Stopped only owned dev/prod process groups after PID/PGID checks; closed only the
owned headless browser with Browser.close and owned MCP pages. Final inventory:
no listeners3000/3001/3106/3110/3111/9223, no remaining owned batch/browser/server
process. No cache/output deletion, generated-file editing, foreign process kill,
MEMORY update, application fix or later task execution.

Final document/source scope review and whitespace validation passed. Only this
evidence document and T9's own checkbox are task changes. Existing unrelated
MEMORY findings (favicon404, mobile-current-link focus loss, brand accessible label,
theme form-field identification and query/fragment behavior) remain out of scope;
favicon404 is the observed pre-existing server-log failure, already in MEMORY.
No new related application regression or unresolved T9 runtime block remains.

Raw captures/JSON are volatile under the two owned temporary directories; this
document preserves their meaningful results, invalid attempts, commands and limits.
T8 static-check/build evidence is attributed historical evidence, not fresh raw
proof. T10 must independently review RF/RNF and these limits; completing T9 does
not approve the feature or begin that review.

## Independent T10 review and closure — 2026-10-09

**VEREDICTO: APROBADO.** Coordinator relayed independent reviewer session
`ses_ede19b716ffeofQlfdarkDixoQ`: RF-1–6, RNF-1–3 and all completion criteria
fulfilled, with no blocking gap or new related regression. Planner records closure
and T10 completion from that verdict; this documentation edit runs no validation.

- Fresh production HTTP/native browser checks covered all four missing paths,
  scripts disabled/enabled before direct visits and reloads: genuine404, no Location,
  exact ordinary-HTML copy/lang and native recovery anchors. Eight Tab/Enter
  recoveries reached localized Home200; all six valid localized routes returned200
  with localized content in both script settings.
- Reviewer audited T9's **320 unique presentation cells** and ran **20 independent
  presentation probes** across five widths, both themes,150% text and scripts off/on:
  no horizontal overflow and visible3px recovery focus. Chrome DevTools MCP visual
  and capture review supplied representative visual evidence, not manual inspection
  of all320 captures. Development evidence is reviewed saved T9 evidence, not new
  development runtime execution.
- Fresh production explicit-origin tests passed **15 tests, zero skips**; reviewer
  whitespace checks passed. Typegen/lint/tsc/build remain attributed to T8: its old
  temporary raw files are unavailable. Current BUILD_ID and hashes match T9 and
  support continuity, without reconstructing lost historical evidence or claiming
  fresh static/build execution.
- Final source scope matches the approved five-file correction/test scope. The
  experimental global document, public deprecated requestLocale bridge, dynamic
  rendering and explicit shell duplication were expressly approved, not retroactive
  decisions. Unrelated uncommitted work remains preserved. Resource404/prefetch
  responses are expected; baseline favicon404, mobile focus and query/fragment
  behavior remain outside scope and unfixed.
- Screen readers, physical devices and other browsers were not tested; those are
  disclosed limits, not unmet requirements. Reviewer closed only newly owned browser
  pages, leaving existing processes/tabs untouched. Closure authorizes no cleanup,
  runtime launch, historical replay or additional implementation.

Spec status is implemented; plan/tasks are completed and T10 is checked. Requirement
text and historical investigation records are unchanged. MEMORY maintenance remains
the coordinator's responsibility.
