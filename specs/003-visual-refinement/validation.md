# Spec 003 — T1 preflight and baseline evidence

## Final acceptance and closure — 2026-10-14

The owner explicitly accepted the final visual result: **“Si, acepto los resultados
visuales”**. The coordinator relayed final independent reviewer session
`ses_ec363ecb6ffey73dGERRgtmeVV`: **VEREDICTO: APROBADO**, confirming RF-1–15,
RNF-1–6 and all completion criteria. This final acceptance satisfies RNF-4/T10 for
the complete approved result, including Home/About/shared presentation and common
widths/interior alignment, not merely the earlier carousel partial acceptance.
T10 is now checked, all other completed checkboxes are preserved, and Spec003 is
implemented/closed. Earlier pending-gate statements retain their historical context.

Current reviewed build: **`4IjoVtQeIgFfofyMU0ipg`**. The final reviewer confirmed
current source hashes and served chunks match this build. The correction-cycle-2
source/build table and `/tmp/opencode/spec003-correction2/` receipts below identify
the final correction evidence; V3-5 and preceding task sections retain their
version-attributed presentation, alignment, preservation and comparison evidence.
The final review's current identity checks are distinct from reused passing command
receipts: all six AGENTS checks exited0 after the final source change, and explicit
origin tests passed **34/34 per mode with no skips**, as previously recorded below.
These checks were not rerun for this documentation-only closure, nor was a new
runtime/browser/build started. No historical evidence is relabelled as freshly run.

Known pre-existing inactive-light label contrast approximately3.53:1, current-route
menu closure leaving BODY focused, and320px/default-root24 caption/label overlap
remain unaddressed; closure does not claim their resolution. Physical devices,
other browsers/engines and screen-reader output remain unverified. Deferred README/
visual-system drift and style cleanup remain outside scope. No new requirements,
tasks, dependencies, application or MEMORY edits are introduced by this closure.
Document references and status/checkbox consistency were reviewed. A shell/Git
execution tool is unavailable in this planner session: working-tree inventory and
`git diff --check` were not run here, so no fresh Git whitespace pass is claimed.

## Final-review correction cycle 2/2 — paused native seam jitter, 2026-10-14

Only the coordinator-delegated paused-carousel correction was implemented. Approved
spec/plan/tasks and the reviewer reproduction were checked. This is implementer
evidence for RF-14 and RNF-3/RNF-6, with RNF-2/RNF-5 preservation checks; it is NOT
independent approval or RNF-4 owner acceptance. Historical V3-5 remains historical;
T10 stays unchecked. No third automatic correction cycle is started.

### Cause, minimal correction and meaningful TDD

The reviewer reproduced Pause → viewport focus → Home at `/es`,1024×768,
default/root16,DPR1. Fractional copy boundaries combined with native integer scroll
offsets caused exact normalization to write another equivalent copy, whose rounding
triggered another `scrollend` normalization:1747↔3495. This is a spec003 defect,
not an exempt pre-spec finding; older V3 logs do not establish pre-spec provenance.
The prior classification below is superseded explicitly.

`normalizeLoopOffset` now accepts optional tolerance0. Native reconciliation alone
passes1, retaining settled offsets in `[start−1,start+length+1)` without another
write. Distant copies still wrap, retaining fractional phase. Autoplay uses the
unchanged exact default normalization. No styling, asset, header/menu, identity,
playback policy or ownership architecture was changed. Native smooth operation IDs,
settlement tolerance, nearest-copy selection and cycle1 wheel interruption remain.

Two tests in `tests/carousel-geometry.test.mjs` exercise the production-used helper:
quantized fractional seams settle without recursive copy writes, and distant copies
still wrap with their fractional phase. `pnpm test` RED exit1:22 passes, one expected
failure (`3494.546875` versus settled1747), one no-origin integration-suite skip.
GREEN exit0:23 passes, one explicit no-origin skip. That skip is not HTTP proof;
the explicit-origin suites below run all34 tests without skips.

### Final source/build/runtime attribution and checks

E=`/tmp/opencode/spec003-correction2/`. The recovered earlier attempt contained only
`/tmp/opencode/spec003-cycle2/before-hashes.json`; its entire inventory matched before
this correction (`recovery.json`). It contained no implementation or passing receipt.
`final-protected.json` confirms that only the following three source/test files differ
from that snapshot, before this intentional validation-record edit:

| File | Final SHA256 |
| --- | --- |
| `src/components/ui/carousel-geometry.ts` | `dc5aefef4d69a28a9566662143f25b432c292e05994850a165c0ff4b2ac557c5` |
| `src/components/ui/use-carousel-track.ts` | `fa1bbef0df0db4b926520260a2497ce282a5d5c829e727f71e5e4f1a42df8314` |
| `tests/carousel-geometry.test.mjs` | `94c74d6bfbbdc48c9b13f0faec3b5c9cd58925480c3e98e9976ea8c50e1c5a0c` |

All six AGENTS checks ran after the final production-source edit and exited0:
`pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`,
`pnpm build`, `git diff --check`. Each has its named `.log/.exit` in E. Default
tests report23 passes/one explicit integration skip. Fresh explicit-origin commands
`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test` and the3111 equivalent
both report34/34, zero failures/skips (`dev-tests.*`, `prod-tests.*`).

Build **`4IjoVtQeIgFfofyMU0ipg`**, BUILD_ID SHA256
`80aa8b85eef4e6bf4c7f569181a7899873990672a881431534cf0214c44541cd`,
remains unchanged through the final production restart/default24 matrix.
`final-source.sha256` rechecked all three files and BUILD_ID successfully.
`dev-served-source.json` checks the actually loaded development chunk's source map:
both geometry and track sources exactly match the final hashes. Unused old dev-cache
maps are not served-source evidence and were not deleted. `prod-served-source.json`
records200 Home and ten fetched production chunks matching built files; carousel
chunk `2myzdmsw3vs6w.js` SHA256
`f725cbd7a505b181228e1f92515476149a2df3c829956f76032efa243b9ce5d7`
contains the tolerance function and preserved native-scrollend guard.

### Fresh browser reproduction, real pixels and preservation

Each mode has20 root16 paused cells: en/es × light/dark ×320/390/768/1024/1440
(heights568/844/1024/768/900), with actual viewport/root/DPR1/fonts/theme/focus,
manual Pause, logical first item and six inert hidden clones asserted. Every cell
has100 stationary native frame samples. Four additional repeats PER mode reproduce
the exact `/es`1024×768 sequence: period1747.546875, offset1747 stationary, no
1747↔3495 alternation. Final-source `*-browser.json` retains actual timed traces.

Each mode also has20 actual browser-default24 cells in `*-enlarged.json`, with
`*-enlarged.exit`0. These use a dedicated Chrome profile configured before startup,
not a CSS root override. Root24, viewport/DPR1/theme, Pause, first item and stationary
100-frame End→Home traces pass; actual48rem query threshold1152 is asserted.

For the original `/es`1024 case,100 actual viewport screenshots PER mode were
captured as `*-viewport-stable-0.png` through99. Externally cropped visible carousel
ROI `(54,221,955,716)` includes rendered cards, labels, captions and focus outline;
it was visually inspected, including the production crop again at finalization.
`*-real-pixels.json` reports1249 colors,99 comparisons, maximum and total changed
pixels **0** in BOTH modes. `*-real-roi.png` retains the inspected nonempty region.
Initial `prod-stable-*.png` clipped captures contained empty background and are
INVALID, excluded entirely; `prod-pixels.json` is not accepted pixel proof.

Native Home/End/arrows, superseding/no-op navigation, fractional nearest targets,
actual smooth settlement, focused eligible autoplay (~32.269px/s measured), four
wheel races at85/100ms after End per mode, paused wheel/resize/offscreen return,
hover leave, touch release/cancel, hidden-tab no-catch-up return, manual Pause
priority and reduced-motion End all pass. `*-supplements.json` has17 records per
mode, including six fractional nearest-End targets and four nested localized404
native Home recoveries (en/es, scripts on/off). No Runtime exceptions were recorded.
This is bounded correction regression evidence, not a new full280-cell V3 audit.

Chrome DevTools MCP also checked owned production1024 and development390 dark pages,
stationary Pause/Home and screenshots (`mcp-prod.*`, `mcp-dev.*`). Only pre-existing
favicon404/CSS preload diagnostics were seen; no new hydration/related console error.
Physical touch devices, other engines and assistive output remain unverified.

### Interrupted/invalid tooling, unrelated findings and cleanup

The initial combined production browser command exceeded120s after checkpointing36
records. Remaining guards/pixels completed in bounded batches (`prod-guards.exit`,
`prod-pixel-capture.exit`0); no nonexistent `prod-browser.exit` is claimed. Production
supplements initially hit CDP DOM serialization (`Object reference chain is too long`);
external readiness was changed to Boolean and remaining checks resumed, exit0 in
`prod-supplements-resumed.exit`. Neither attempt is an application failure or silently
counted passing proof. A scan including unused stale dev maps was overbroad; only
the actual served-map identity above establishes current development attribution.

Known inactive-light label contrast~3.53, current-route BODY focus and320/default24
caption/label overlap remain outside this correction, with prior baseline evidence;
no styles/navigation changes were made to hide them. All required related checks
pass; the paused jitter itself is NOT classified as unrelated/pre-spec.

Only identified owned servers/browsers were stopped. Last dev server269823/group269699
and final production272723/group272618 had exact CLI/CWD/listener ownership verified;
production's earlier owned group267043 was already stopped. Dedicated Chrome9250/
9251 used correction2 profile16/profile24, groups267206/270902, verified before
SIGTERM. `final-ownership.log` retains final receipts; owned MCP pages2/3 closed,
unrelated page1 about:blank preserved. No caches/locks, unknown processes, protected
documents or unrelated user work were removed/edited. Final documentation whitespace
and scope guards are checked after this record; no task checkbox is changed by this
correction. Independent latest-spec review and explicit whole-UI owner acceptance
remain pending at T10/RNF-4. Stop and return to coordinator.

## V3-5 completed — fresh combined final-source validation, 2026-10-14

ONLY V3-5 was executed. Current approved spec/plan/tasks, AGENTS, constitution,
MEMORY and the latest A2/V3-3/V3-4 records were read; preceding dependencies are
checked. No application edit, repository test change, dependency, route/API change
or new implementation responsibility was introduced. T10 and explicit owner
acceptance remain pending; this is implementer evidence, NOT an independent verdict.

### Final source, commands and attribution

E=`/tmp/opencode/spec003-v3-final/`. The entry/final SHA256 inventories contain71
src/public/test files and match exactly, including all photo/SVG/font/license bytes.
Existing unrelated dirty work is retained in `entry-status.txt` and `entry.diff`.
Forbidden documents match the entry hashes. Only this validation record and V3-5's
checkbox change in the repository. External browser harness adaptations live in E,
not a new repository runner/helper or production dependency.

Current menu SHA256 is
`1984bba3e7693bf5c40c4c2e8309d3e8ab284c0dbc53535f421ca8c50fe257bc`;
shell CSS is `19f3466a1565747309c847c0045446fc4486eebc3ffb494d019d51198f04b3aa`.
These match V3-4/V3-3's completed final sources, not the withdrawn candidate.
Fresh production build **`7Vedh9pscoBAOfKZ_lqXe`** followed owned dev shutdown.
Its BUILD_ID file SHA256 is
`c725d7082d8bc3da3e6b8d9fffd8edec35fddc6a14302f246739742f04a6e019`.
`compiled-sha256.txt` retains the resulting static output identities. Owned production
started from this build in the repository CWD; no other app server/output writer
was active. Final `.next/BUILD_ID` remains identical. Both runtimes demonstrably
execute the current outside-dismissal behavior and current CSS geometry below.

Node24.21.0/pnpm12.4.1; all six commands were FRESH, after V3-4's last source edit:

| Command | Result / E receipt |
| --- | --- |
| `pnpm exec next typegen` | exit0, `typegen.log/typegen.exit` |
| `pnpm lint` | exit0, `lint.log/lint.exit`, no diagnostics |
| `pnpm exec tsc --noEmit` | exit0, `tsc.log/tsc.exit`, no diagnostics |
| `pnpm test` | exit0, `tests.log/tests.exit`:21 passes, one explicit no-origin integration skip; NOT HTTP proof |
| `pnpm build` | exit0, `build.log/build.exit`, fresh build above |
| `git diff --check` | exit0, `whitespace.log/whitespace.exit`; repeated after final documentation/checkbox edits |
| `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test` | exit0, `dev-tests.log/dev-tests.exit`:32/32, zero skips |
| `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test` | exit0, `prod-tests.log/prod-tests.exit`:32/32, zero skips |

No artificial CSS/unit test was added for validation-only work. V3-4's64 RED→64
GREEN native cases per mode and drag RED→GREEN remain explicitly ATTRIBUTED earlier
TDD, with matching final menu source. They are not claimed as fresh V3-5 RED runs.
The final current native event/gesture regressions below are fresh GREEN evidence.

### Fresh unique conditions, all semantic roles and native recovery

Each mode has **280 primary conditions**, all valid and uniquely identified:
Home40, About/Projects80, simple/nested localized404 scripts-on/off160. Both locales,
themes,320/390/768/1024/1440, prescribed heights and actual browser DEFAULT/root16/24
are covered. Native dedicated Chrome Preferences set default text size, not merely
root CSS. Actual viewport/DPR1, loaded fonts, language/theme/scheme, HTTP status,
48rem/64rem query matches and scrollbars are asserted in each record. At default24,
768/1024 genuinely use the stacked/mobile composition. Scripts-off disabling occurs
BEFORE visits; its theme is explicitly controlled DOM diagnostic input, not hydration.

Separate supplements PER mode:56 width480 records,64 boundary/max records,56
full-frame presentations,40 Home preservation records,16 short-desktop records and
16 short-phone native-pan records. None inflates the280 primary count. Boundary
widths are1023/1024/1536/1552 at default16 and1535/1536/2304/2320 at default24,
including the native15px scrollbar around the96rem cap and both document roots.

ALL plan-table outer/full-row/reading/column groups are present:7488 closed-state
role measurements per mode, plus opened-menu measurements. Current primary/480
references exactly equal their matched A1 reference objects. Signed actual/reference
deltas are retained in each JSON, not replaced by a maximum-width/overflow assertion.
`summary.json`/`protected-geometry.json` aggregate them; baseline A1 files retain
responsible selectors and signed BEFORE deltas. Maximum absolute corrected-rail
error is **0.021875000000022737 CSSpx** in each mode, strictly≤1. The336 comparable
primary/480 conditions per mode have native document/body overflow0 and no Runtime
exception. Ordinary word/intrinsic-button ends are not falsely forced to page rails.

| Group | Final reference / preserved exception |
| --- | --- |
| Frame/Home/section/composition surfaces, footer available area, header/panel paint | `[L,R]`, actual used inline borders; bounded96rem, frame64rem retained |
| Header controls, open menu links/preferences, Hero stage, Selected heading/outer viewport/action, footer row/bottom | Common `[A,B]`, `C=min(76rem,W−2G)`, not the wider paint box |
| Hero name/role/degree | `[A,first-column end]` desktop; centered `[A,B]` stacked; extra4%/0.35rem absent |
| Upper About reading/heading/body/link | Stacked `[A,B]`; desktop start `L+0.517W+1.5rem`, end B; original mask/clearance take precedence |
| Lower About reading | Stacked `[A,B]`; desktop `[A,L+0.5W−1.5rem]`; joint PAINT still reaches L/R |
| Existing About/Projects/missing reading/list/heading/action groups | Inherited common main/rails;65ch paragraph ends, list hierarchy and intrinsic actions preserved |
| Protected media/control roles | Natural centered portrait/5% safe box; frame-anchored masks/16:10 media; intentional columns, prefixes/gaps and padded intrinsic hit areas; accepted carousel edge-space/stable controls and offscreen inert copies |

Examples from actual production Home:320/default24 uses L0/R305/W305/G30/C245/
A30/B275;1440/default16 uses L2/R1423/W1421/G72/C1216/A104.5/B1320.5. The latter
is NOT the viewport-based illustrative110px inset: the15px document scrollbar matters.
Opened menus retain the exact reference/clientWidth; no old15px scrollbar rail loss.

Fresh `*-recovery-*.json` supplies **160 native direct/reload/Tab+Enter recoveries
PER mode**, one for every primary missing-page condition: both depths/locales/themes/
five widths/default16/24/scripts-on/off. Every direct visit and reload returns genuine
404, localized explanation/language remain visible, native focused recovery is
hit-unobscured below the bar, and Enter reaches same-language Home with actual200.
All waits are external; no script-disabled in-page timer/prefetch/iframe proof.

### Whole lower composition, preservation and accessibility

Fresh80 Home preservation records/viewport tiles cover the entire occupied upper
and lower compositions, including enlarged/unequal-height tiles, not just a seam.
The original downward upper contour/upright placeholder is intact; matched layout
gap is unchanged from A1. Separate first-glyph-pixel sampling gives22.65625–37.09375px:
this is the already documented DIFFERENT thresholded metric, not a relabelled22–35px
historical bound or a new prescribed gap. Original mask sampling retains opaque bbox
0–615 ×0–699 and safe label-corner alpha255. Upper desktop source/profile retains
~50.025% midpoint reference and≥24/36px text clearance; frame anchors remain intact.

The48 actually stacked Home conditions have full-width opaque text/joint paint and
the preserved20% core/32% feather of actual16:10 media height. `about-pixels.py`
finds no abrupt pre-feather step at endpoints/quarters/center (adjacent channel step≤2).
`summary.py` independently samples40 positions through the ENTIRE elliptical blend
per stacked condition (1920 RGB/model samples), including both endpoints, quarters,
center and heights0–40%: maximum channel error2 against the actual semantic surface/
media blend; no detached band/deep fade under essential text or rectangular underlay.
Native whole-region inspection confirms one integrated surface, not a floating cap.
Desktop lower arc remains clean, not converted to the mobile treatment.

Actual used-pair minima from current rendered colors: Hero name/role and upper
About text7.387319:1; Hero degree6.224552:1; direction5.933946:1; About labels5.566560:1.
Labels remain in opaque safe areas, below the lower feather for secondary labels.
These are LOCAL fresh measurements, not a false global5.56:1 claim. Earlier global
dark minimum4.7149:1 remains attributed unchanged-palette/carousel-source proof.
Light/print palettes, dark six roles and inactive0.72/0.9 sources are byte-identical.

Compared with matching A1 primary/480 geometry, maximum change is **0px** for Hero
portrait/safe box, carousel outer/viewport, primary and secondary About media L/R/W/H.
Full-name/whole-word ranges, dominant heading,16/24px Developer/degree, JR/footer/alt
data follow-through pass. Five fresh native normal-size portrait crops were inspected:
complete top/side hair and undistorted supplied photograph are visible at every width.
The original5.93–6.91% widening remains T5-attributed comparison evidence through
unchanged sizing/source bytes, not a fabricated newly captured T1 baseline.

### Continuous bar/frame, focus and native menu actions

Per mode1008 fresh top/middle/bottom observations show bar top0, opaque semantic
background and full `[L,R]` paint/border.576 native bar raster rows across both modes
check418188 full-width opaque samples:0 deviants; the fully covered bottom-border
raster row has0 variation across each bounded width. Fractionally covered pixels
below the border are not incorrectly treated as missing/inhomogeneous bar paint.
Collapsed/open control/outline bounds, intrinsic JR/nav sizing and authored padding
remain intact. Short320×568/default24 native Tab reaches all six menu links/preferences;
Escape restores trigger, native panel/page pans increase offsets and do not dismiss.
Desktop1440×200/default16/24 preserves native keyboard reachability and print scroller
behavior; no font shrinking, body lock, hidden scrollbar or fixed-header substitution.

Fresh208 frame-present native records cover both roots/locales/themes plus boundary/
default24 cases. Entire frame viewport tiles, top/middle/bottom and frame-only hidden/
restored diagnostics check **718016 straight-stroke samples**,0 missing/color-deviant;
all top/bottom terminals contain71–129 painted pixels.32 matched A2 top-corner crops
have0 changes over one channel level. Essential glyph/frame intersections0; deliberate
carousel viewport clipping/inert copies are explicitly excluded, not page overflow.
Frame dimensions/coordinates/radii/2px/pointer-none remain unchanged; z6 above bar5,
below skip10 is the approved paint-order exception, not new decoration.

Production48 native focused skip/JR/footer paired views across both roots/locales/
themes/default16/24 have **0 changed pixels within the actual focus-outline extent**
when ONLY frame paint is hidden. Header/page actions also have current native bounds/
hit/focus checks in both modes. At actual page end, terminals remain document-relative
and clear of footer/media; reachable frame bottom stays below header bottom. No
impossible scroll past document end is claimed as an activated sticky clamp.

Fresh final menu regression: **128 mobile conditions/1920 checks PER mode**,
320/390/480/default16 plus320/390/480/768/1024/default24, both locales/themes and
Home/About/Projects/nested404.1024 completed header/background/content/JR mouse/touch
actions per mode close correctly, with exactly one trusted native outside click and
appropriate visible focus;896 inside/cancel/page-pan/panel-pan/Escape/toggle/native
select checks preserve behavior.92/128 page pans show positive page movement; the
remaining36 prove non-closure, NOT positive scrolling. Separate short-phone pans
prove actual page AND panel scrolling. Native compatibility drags remain open in
four locale/theme checks per mode, followed by working ordinary taps.48 guards per
mode include eight actual outside footer-link actions/focus, eight focus pairs,
desktop keyboard and native404 supplements. Existing current-route BODY focus is
not repaired or presented as outside-dismissal failure. Panel/toggle-only exclusion,
8px gesture guard and five-listener cleanup are source-inspected; extensive repeated
open/close sequences retain working actions, no swallowed default or stale target.
V3-4's measured six-cycle listener inventories are attributed matching-source proof.

Four fresh smoke contexts PER mode verify hover/release, focused manual Pause/End,
reduced-motion Home and native touch release/cancel. Additional smooth→wheel/focused
resume measurements unwrap equivalent loop copies correctly: observed rates
31.8074–32.4554px/s, no catch-up/permanent latch or explicit Pause override. Native
System selection follows dark/light system changes, persists through reload, and
client About/locale switching/history preserve the equivalent route. Accepted carousel
appearance/three-copy geometry/playback sources remain untouched.

### Readable owner evidence, inspection and limitations

260 real native A1 BEFORE/current AFTER Home/page/footer pairs and88 A2 BEFORE/current
bar/menu pairs are retained, plus100 separately labelled offline rail-guide views.
No rescaling or transient diagnostic CSS is published. Guide-free captures remain
authoritative. Four `owner-{en,es}-{light,dark}-390-16-lower-pair.png` show the ENTIRE
lower mobile composition; `owner-es-dark-390-16-bar-pair.png` and
`owner-es-dark-1440-16-upper-pair.png` are compact additional references. All four
locale/theme combinations at390/1440,320/default24 and newly stacked768/1024/default24
have native Home-region/page/footer views and full lower/upper viewport tiles.

| Representative E capture | SHA256 |
| --- | --- |
| `owner-es-dark-390-16-lower-pair.png` | `44107c7203ecc1c71d9b5be2a0ea74ef0048152d1b517d97d34c99734e40e27b` |
| `owner-en-light-390-16-lower-pair.png` | `d8ac495ca46081ef2caa5dc6e72b757e8ba28a2676f8148d8b5597bdb63e9c52` |
| `owner-es-dark-390-16-bar-pair.png` | `cba7b9f2ce01a7cbb7cc403ab9c42864567e3316a5e782149311cb448310a826` |
| `owner-es-dark-1440-16-upper-pair.png` | `d3c9157b266988fd245b4c68af82d83ecee5de098c321dc0cb122578741c7406` |

A1 BEFORE already includes V3-2 integration; these pairs honestly compare alignment/
bar changes and current whole composition, NOT a recreated pre-integration V2 result.
Original V3-1/V3-2 raw directories are unavailable; their durable attributed diagnosis/
96-cell results above remain, not surviving original images. No synthetic CSS revert
or reconstructed owner-image baseline is presented. Matching A1/A2 screenshots and
measured references survive and supply genuine comparisons with correct labels.

Chrome DevTools MCP used ONLY owned pages5/6, asserted390×844/root16 mobile and
1440×900 desktop. Inspected current Spanish dark and English light lower compositions,
full-haired Hero, all four mobile lower pairs, desktop upper/lower arc, native enlarged
menu focus, newly stacked1024 upper contour, rail views, current About/Projects and
global404 skip/frame view. Not every screenshot was manually inspected. MCP production
console has no errors/warnings; development has an unrelated unused preloaded CSS
warning, no new hydration error. Physical devices, other browsers and screen readers
remain unverified; Chrome default-font/contact emulation is explicitly identified.

### Invalid attempts, pre-existing findings and resource boundary

An initial paused first-item pose at dev/es/light1024/default16 alternated native
offset1747/3495 while logical item0 and manual Pause remained unchanged. It is NOT
accepted as stable geometry evidence. The unchanged rerun settled and supplied the
valid cell. The SAME oscillation survives in V3-3's prior
`invalid-pose-prod-en-dark-1024-16-home.json` with unchanged carousel sources. This is
an observation already present in V3, not proof of pre-spec provenance or an
exemption from RF-14. Final review correctly treated it as a spec003 paused-state
defect; the correction-cycle2 record above supersedes the earlier classification.
The historical bounded wheel/manual-priority smoke did not disprove this defect.

Other excluded external attempts: raw wheel subtraction mistook loop normalization
for negative speed (fixed by measured loop-length unwrapping); stale contact coordinates
after control scrolling were replaced by current hit-tested viewport coordinates;
pixel tooling initially mixed JSON schemas/unsupported color-mix parsing, and an
extra1px unused focus reserve was mistakenly counted as actual outline paint. Actual
outline comparison retains the authored3px+4px extent. Border sampling was corrected
to the fully covered border row rather than the fractional page/background row below.
Python CLI/indentation errors and an interrupted owner-image batch are tooling attempts,
not passing cells; final analysis exits0. Menu harnesses checkpoint12 conditions/batch;
all remaining batches were resumed and counted, not inferred from a first partial file.

No obligatory final validation fails. Existing320/default24 carousel caption/label
overlap and light inactive-label~3.53:1, current-route BODY focus, brand accessible-name/
theme-field diagnostics, favicon absence and root/installed-lock discrepancy remain
outside the approved repair scope, with prior baseline evidence above/MEMORY. They
are not described as global AA compliance or silently repaired. No new related
content/focus/contrast regression is known in the authorized V3 changes.

Owned dev groups194427 and225455 and production216739 were verified by exact CLI/
CWD before shutdown; only sequential runtimes were used. Development was reopened
after production shutdown solely to finish remaining bounded native-menu batches;
all application/source/build identities remained unchanged. Dedicated owned Chrome
profiles/PIDs194649/194651 on9237/9238 acknowledged Browser.close;3110/3111/9237/9238
no longer listen. Only MCP pages5/6 closed; user about:blank1 remains. No unknown
process kill, installation/cache/output deletion, generated hand edit, commit/push,
MEMORY/AGENTS/constitution/spec/plan change occurred. E is temporary, not a guaranteed
permanent archive; durable counts/results and limits are recorded here.

V3-5 covers RF-1–15 and RNF-1–6 as combined validation/preservation and owner-evidence
preparation; RNF-4's FINAL ACCEPTANCE is deliberately still gated by T10. Only V3-5's
checkbox is completed. STOP: no reviewer impersonation, owner acceptance or spec closure.

## V3-4 completed — native outside dismissal and focus, 2026-10-14

ONLY V3-4 was implemented. Full spec/plan/tasks, AGENTS, constitution, MEMORY,
current V3-1/A1/A2/V3-3 evidence and actual menu/header/navigation sources were read.
Requirements and joint alignment-extended planning approvals are recorded; all
preceding dependencies are checked. V3-5 and T10 remain pending, not executed here.

### Scope, source and native TDD

Evidence E=`/tmp/opencode/spec003-v3-4/`. Entry inventory contains71 src/public/test
files, including supplied assets/fonts and existing tests. Final comparison changes
ONLY `src/components/navigation/navigation-menu.tsx`; all70 other entries match.
CSS, header wrappers/observer, roots/routing, public identity, Hero/About, palettes,
carousel/playback and tests remain byte-identical. Existing unrelated dirty work is
retained in `entry.diff`; this task's application diff is against `menu-before.tsx`,
not HEAD's much larger historical diff.

| Menu source | SHA256 |
| --- | --- |
| Entry / RED | `15dae0ee107aa87dca888bcb76697b6acabb8c6c165071255d0b55c872f33f59` |
| Final / GREEN | `1984bba3e7693bf5c40c4c2e8309d3e8ab284c0dbc53535f421ca8c50fe257bc` |

Fresh RED, before application editing: `red-dev-{en,es}-{16,24}-baseline.json`
contains16 Home conditions (both locales/themes,320/390,default/root16/24), four
trusted actions each: uncovered header/page × mouse click/touch tap. **64/64 leave
aria-expanded=true instead of false**, with one trusted outside click per attempt.
The source contains no outside listener, confirming V3-1's causal diagnosis, not a
presumed header-wide ignored ref. V3-1's historical128 RED actions are not re-counted
as fresh tests. External `menu-regression.mjs` retains targets/path, input coordinates,
native pointer/touch sequence, focus, route and resulting menu state. No synthetic
dispatchEvent or DOM `.click()` supplies acceptance evidence.

The completed-click implementation first passed all64 original cases. A further
native mouse-drag probe then exposed Chrome's compatibility click: trusted down at
(50,450), ten moves to(150,490), up and click on outside MAIN at390×844. Menu closed
although this was a drag (`mouse-drag-diagnostic.json`, RED). This activates the
plan's explicit conditional gesture-discrimination authority. Final identical native
sequence keeps the menu open, and a subsequent ordinary header click closes it:
`{dev,prod}-drag-green.json`, four locale/theme cases per mode, all green.
Intermediate click-only results are retained separately in `click-only-green/`,
not used as final-source acceptance evidence.

Final original-header/page regression is **64/64 GREEN per mode**, on the same
native input/condition sequences as RED. Added passive observational logging does
not alter activation. Final broader regression is separate, not an inflated original
RED count. No repository unit test or artificial helper was added: actual document
event ordering/focus/gesture behavior is tested through the production component.
New external harnesses: `menu-regression.mjs`, `drag-regression.mjs`, `supplements.mjs`
and `guards.mjs`; they use existing native CDP tooling, not a new project runner or
dependency. The existing Node suite is unchanged.

### Bounded implementation decisions

The existing Client Component now owns an actual panel ref as well as the trigger.
An effect subscribes ONLY while open, with passive capture listeners. Completed
`click` checks composedPath against panel/toggle, NOT the header or sizing wrapper.
Native outside defaults/bubbling continue: no preventDefault, stopPropagation,
pointer capture, touch-action change, backdrop, body lock, trap or scroll listener.
Hidden desktop triggers are ignored; existing resize/open state is not redesigned.

The demonstrated drag case uses local primary-pointer start/movement/cancel state;
movement over8CSSpx marks a drag, allowing small contact jitter and retaining movement
if it returns to its starting point. Pointerup reconciles the endpoint; cancellation
marks a non-tap. Pointer contact alone never dismisses. A compatibility click clears
contact state; keyboard click detail0 remains operable. This is bounded event-local
tracking, not a gesture framework, timer, new pure-policy responsibility or dependency.
All five listeners are removed on close/unmount; effect-local contact state cannot
survive teardown. Existing toggle, panel-anchor closure and Escape callback remain.

At completed outside activation, native focused controls/links/MAIN keep their focus.
The trigger receives preventScroll focus ONLY if the active element is still in the
panel or is BODY, preventing this dismissal path from stranding it after hiding the
panel. Actual native outside buttons/links focus before click, and keep that focus.
Native full-document recovery may reset focus as part of navigation; this is not
hidden-panel or dismissal-induced focus loss. The separate inside current-route
anchor→BODY issue remains unmodified, not claimed repaired.

Context7 resolution was attempted and failed with Invalid API key; no successful
live documentation fetch is claimed. Installed Next `use-client.md` and existing
React useEffect/ref subscription-cleanup patterns were consulted. No new framework,
rendering, routing or provider API was introduced.

### Final native behavior and focus evidence

`green-{dev,prod}-{en,es}-{16,24}-extended.json`: **128 mobile conditions PER mode**,
en/es × light/dark × Home/About/Projects/nested global404, widths320/390/480 at
default/root16 plus320/390/480/768/1024 at default/root24. Browser profile Preferences
set actual default text size; root and48rem query are asserted, not root-only CSS
enlargement. The768/1024 default24 cases really are mobile. Heights are844, with768
using1024; separate baseline/short supplements retain320×568. Each record retains
locale/theme/scheme/fonts/native viewport/overflow and relevant state/input evidence.

Per mode,1920 final records pass:

-1024 completed outside actions: header space, background, uncovered noninteractive
 content and JR × mouse/touch. Exactly one trusted outside click is observed; menus
 close and do not leave hidden-panel focus. JR activation retains the intended locale
 and native/client Home destination. Global404 brand recovery uses a new document;
 normal browser focus reset is distinguished from closing a retained hidden panel.
-896 records:128 each for panel-internal background, touch cancellation, page pan,
 panel-region pan, Escape, toggle and native theme-select interaction. No cancel/pan
 generates a completed click or false closure.92/128 page pans per mode have a positive
 measured scrollY change; the remaining36 are non-closing pan probes, not positive
 scrolling claims. Short-screen supplements below prove actual panel/page scrolling.

`{dev,prod}-supplements-{16,24}.json`:84 additional records per mode. Native outside
diagnostic buttons receive mouse/touch actions exactly once with focus retained;
native Enter activates an externally focused button without returning focus to toggle.
The temporary browser-only button is removed, and no public control/fixture is added.
Native MAIN focus from a background action is preserved. Eight six-cycle inventories
per mode (48 cycles) show exactly five added passive capture listeners while open
and the original document inventory after every close, with no accumulation.
Native select popup/ArrowDown/Enter changes preserve the menu. Inside destination
and language links close normally and reach the correct equivalent localized route.

At320×568/default24, actual menu and uncovered page pans increase their respective
scroll offsets while keeping the menu open. At default16 the panel needs no scroll;
page pan remains available. Native Tab reaches all six menu links/preferences, and
Escape returns to the visible trigger. Existing panel overflow/rails/styles are not
changed to obtain a pass.

`{dev,prod}-guards-{16,24}.json`:48 records per mode, including eight native-resolution
open/dismissed focus pairs, eight actual outside FOOTER links retaining A focus and
correct About routes,16 nested404 direct/reload/native Tab+Enter Home recoveries
(scripts ON/OFF disabled BEFORE visits, genuine404 and same-language Home200), and
16 desktop keyboard probes at768/1024/1440 default16 or1440 default24. Desktop trigger
is hidden and existing horizontal controls remain reachable. `resize-open-guard.json`
additionally confirms open mobile→desktop does not focus a hidden trigger or change
existing open-state behavior; shrinking back restores working outside dismissal.

All retained final Runtime.exceptionThrown arrays are empty. `summary.json` contains
validated final counts; passing original/extended cells are distinct. No claim of
full V3-5 presentation/alignment revalidation or new carousel/contrast acceptance.

### Checks, visual inspection, invalid harness attempts and resources

Node24.21.0/pnpm12.4.1. Fresh final build `JZXuYdqfc-HwknhnxOsKk` was produced after
stopping own development server; no concurrent dev/build output writer.

| Command | Result / E receipt |
| --- | --- |
| `pnpm exec next typegen` | exit0, `typegen.log/typegen.exit` |
| `pnpm lint` | exit0, `lint.log/lint.exit`, no diagnostics |
| `pnpm exec tsc --noEmit` | exit0, `tsc.log/tsc.exit`, no diagnostics |
| `pnpm test` | exit0, `tests.log/tests.exit`:21 passes, one no-origin integration skip; NOT HTTP proof |
| `pnpm build` | exit0, `build.log/build.exit` |
| `git diff --check` | exit0, `whitespace.log/whitespace.exit`, repeated after evidence/checkbox editing |
| `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test` | exit0, `dev-tests.log/dev-tests.exit`:32/32, zero skips |
| `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test` | exit0, `prod-tests.log/prod-tests.exit`:32/32, zero skips |

Chrome DevTools MCP was used only on newly owned pages3/4, with asserted390×844
mobile and1440×900 desktop emulation. Development Spanish Home dismissal preserves
MAIN focus. Production English About JR activation closes the menu, reaches/en and
retains A href/en focus; desktop trigger remains hidden/overflow0. Inspected the MCP
open/dismissed views and native production Spanish dark/default24 visible trigger
outline. Production MCP console has no warning/error; development has one unrelated
unused preloaded CSS warning, no new hydration error. Not every capture was inspected.

| Retained representative capture | SHA256 |
| --- | --- |
| `prod-es-dark-24-dismissed.png` | `a15f9d27c6788dbcd87066684e3331448d88706e7c3d1d5b62e1e9884033b6d4` |
| `mcp-prod-en-about-open.png` | `911a55cfda15e95747e35e28d5a502c0bb4fdfd397972a6137fb0b73b355e872` |

Invalid EXTERNAL harness attempts were investigated, not patched in the app or
credited: Escape sent from BODY cannot reach the existing menu-root callback, so
test reset uses the native toggle; Enter activation needs a CDP character payload;
global404 brand navigation needs external readiness waits; content coordinates must
avoid actual footer links. At320×568/default24 Chrome's native touch adjustment can
retarget the13px uncovered strip to the panel: these are INSIDE events, not failed
outside dismissals (`invalid-touch-adjustment-{en,es}.json`). Extended taps use844px
height and verified actual noninteractive targets; short native scrolling/keyboard
proof remains separate. A default16 panel-pan point was actually outside an already
fully visible panel: corrected to the applicable page-pan check. Batches exceeding
120seconds retain complete cells only; final bounded resumption verifies all counts.
Intermediate/invalid attempts do not change requirements or acceptance thresholds.

Known current-route BODY focus, brand label, theme-field identification, missing
favicon, root/installed-lock discrepancy and enlarged320 carousel overlap remain
outside this task. No obligatory final check fails. Styles/data/assets/carousel are
unchanged and retain source-attributed preceding proof; no physical-phone, other
browser or screen-reader verification is claimed. E is temporary evidence, not a
guaranteed permanent image archive; substantive results are retained here.

Only owned dev process group166681 and production group187341 were stopped after
PID/CWD/command checks. Owned isolated Chrome profiles on9240/9241 acknowledged
Browser.close.3110/3111/9240/9241 no longer listen. Only MCP pages3/4 were closed;
user page1 about:blank remains. No unknown kill, install/cache/output deletion,
generated-file hand edit, commit/push or forbidden-document/MEMORY edit occurred.

V3-4 meets RF-6 and RNF-1–3/5–6 within its approved scope. Only its checkbox is
completed. STOP: V3-5, independent final review and owner acceptance/T10 remain open.

## V3-3 completed — recovered final-source bar and frame proof, 2026-10-14

ONLY V3-3 was resumed. Latest approved spec/plan/tasks, paint-order exception,
AGENTS, constitution and MEMORY were read; V3-A1/A2 dependencies are checked.
This supersedes the incomplete V3-3 checkpoint immediately below, not historical
withdrawn-candidate proof. V3-4/5 and T10 remain pending; no whole-Home acceptance.

### Recovery and bounded application change

E=`/tmp/opencode/spec003-v3-3-final/`; A=`/tmp/opencode/spec003-v3-alignment-after/`.
Recovery found the final implementation ALREADY applied on2026-10-13 at20:38.
No application change was made during this resumption. The89-file entry SHA256
inventory differs ONLY in the following three authorized application files and
validation.md; roots, globals, observer/events, identity, Hero/About/Selected/footer,
carousel/tests, fonts/assets, configuration/dependencies and unrelated work match.
The delta was reviewed against the three surviving entry-source copies, not HEAD's
large unrelated historical diff.

| Application file | Final SHA256 | V3-3 responsibility |
| --- | --- | --- |
|`src/components/layout/site-shell.module.css`|`19f3466a1565747309c847c0045446fc4486eebc3ffb494d019d51198f04b3aa`|Full-W opaque header/border; C/I from existing76rem/gutter using header inline-size containment; full-width native desktop scroll area; external0.5rem control-outline reserve. Frame pseudo z-index ONLY−1→6, above header5/below skip10.|
|`src/components/layout/site-header-frame.tsx`|`298f922422345d2df4dd5e6d0cb9f6c116d0512f4d5c54a0f5575444b180e591`|One minimal inner control-sizing div; existing outer header/ResizeObserver and lifecycle unchanged.|
|`src/components/navigation/navigation-menu.module.css`|`8790b1d71f7855064468bff00afcc347496cbe7e26c11f98817780c70f5b3c8d`|Mobile panel paints W; child groups retain C/I independently of native scrollbar; remove reciprocal panel escape, preserve desktop intrinsic/wrapping organization.|

The minimal wrapper addresses the measured15px lost right rail in BOTH mobile panel
and short desktop scroller. Scrollbars occupy the outer gutter rather than subtract
from the common content reference. No scrollbar hiding/body lock/layout JS/new scroll
listener/root/API/asset change. Frame absolute coordinates, isolation, transparent
interiors, pointer-events:none,2px strokes,0.75rem/1.5rem radii,64rem/96rem and tokens
are unchanged. Authored padding/height, JR2.25rem, nav1rem and native scroll remain.
Pure styling/conditional markup introduced no new production logic or unit tests;
the real native15px BEFORE failure and AFTER rail/focus/paint probes are the regression
proof, not artificial CSS-string tests.

### Attributable commands — recovered, not repeated

Node24.21.0/pnpm12.4.1 were confirmed again. All commands below ran AFTER the final
20:38 application edits. Surviving named logs AND matching `.exit` receipts are0;
no six-command replay was necessary because source hashes/timestamps reconcile.
Production build is `hpSKj42RdhtUVKhST7_OQ`, matching the still-running owned3111.

| Command | Result / surviving E receipt |
| --- | --- |
|`pnpm exec next typegen`|exit0, `typegen.log/typegen.exit`; generated types successfully.|
|`pnpm lint`|exit0, `lint.log/lint.exit`; no diagnostics.|
|`pnpm exec tsc --noEmit`|exit0, `tsc.log/tsc.exit`; no diagnostics.|
|`pnpm test`|exit0, `tests.log/tests.exit`;21 unit passes, one explicit no-origin integration skip, NOT HTTP coverage.|
|`pnpm build`|exit0, `build.log/build.exit`; compilation/TypeScript/routes successful.|
|`git diff --check`|exit0, `whitespace.log/whitespace.exit`; additionally rerun during recovery/final documentation review.|
|`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test`|exit0, `dev-tests.log/dev-tests.exit`;32/32,0 failures/skips.|
|`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test`|exit0, `prod-tests.log/prod-tests.exit`;32/32,0 failures/skips.|

### Final-source native presentation, widths and scroll access

Recovered main records are336 PER mode:280 primary (Home40, About/Projects80,
simple/nested404 JS-on/off160) plus56 width480 supplements. IDs retain mode/locale/
theme/width/default16-or24/page/scripts, actual viewport/DPR1/root/query48/query64,
fonts, HTTP status, reference L/R/W/G/C/I/A/B, measured roles and native overflow.
Browser Preferences explicitly store actual default sizes16/24, not root-only emulation.
The64rem/96rem supplements use1023/1024/1536/1552 at default16 and1535/1536/2304/2320
at default24; the width-max transition accounts for native15px scrollbar. These64
boundary records PER mode are supplements, not an inflated unique primary count.

Each mode has1008 top/middle/bottom bar observations and160 opened-menu observations.
All required header/control/menu rail deviations are≤0.021875000000022737CSSpx
(strictly≤1); surface/border align with actual inner frame edges, not hardcoded viewport
width. All336 records per mode have native document/body overflow0 and Runtime
exceptions0. Opening menus preserves EACH reference object and clientWidth exactly;
the former15px displacement is absent. Header remains opaque, straight full-width
and top0 at all scroll phases; no rounded floating panel or side strips.

Per mode,16 native pan supplements cover every Home/About/Projects/global404 ×
en/es/theme at320×568/default24: actual panel AND uncovered page scroll increase,
menu stays open during pan, rails/page width unchanged. Four native keyboard records
per mode check all six menu links/preferences including the final theme select,
3px+4px focus clearance, native panel scrolling, Escape/trigger restoration and
skip→main below the bar. Eight short-desktop records at EACH default16/24 per mode
check native Tab/hit-test/control reachability at1440×200 and print's relative header/
uncapped visible scroller. Production default16 short records were the only missing
short batch and were freshly completed during resumption; others were recovered.

Each mode's native records additionally retain eight genuine nested404 direct/reload
and same-language Home200 recoveries: en/es/themes × scripts ON/OFF before navigation,
native Tab/Enter and external waits. Header presentation includes both document roots;
no script-disabled hydration or in-page timeout is used as recovery proof.

### Full-height frame, independent outline pixels and bottom constraint

Recovered56 frame supplements PER mode cover seven presentations (Home/About/Projects,
simple/nested404 scripts-on/off), en/es/themes at1024/1440/default16. Together with
boundary records,208 actually frame-present records (104 per mode) have native viewport
tiles across the ENTIRE frame, top/middle/bottom, and paired frame-hidden diagnostics
with exact restoration. The final pixel analysis was completed against ALL retained
dev/prod tiles, not the withdrawn opaque candidate or only its61 corner pixels:

-720128 straight-stroke samples checked;0 missing/color-deviant samples.
-All captured top/bottom terminals contain71–129 painted pixels; no missing tip.
-0 essential glyph intersections with the2px sides/terminal intrusion. Intentional
 carousel clipping is evaluated inside its own viewport; inert copies are excluded.
-32 matched original A2 top-corner crops:0 changed pixels exceeding one channel level.
 Native pairs/geometry show one trace with unchanged shape, no duplicate/cutout.

The frame stays document-relative, not sticky. At reachable page-bottom positions,
the measured containing-frame bottom remains below the header bottom (boundary
minimum clearance740.234375px dev /661.375px prod); the native bottom constraint does
not activate an earlier negative header shift. Bottom terminals remain at document
end, visible and clear of footer text/actions. No artificial scroll past the actual
document end is presented as an observed clamp state. Portrait/safe labels are inset;
About's deliberate frame-edge media begins at the INSIDE stroke boundary, not beneath
the stroke. No essential photo/content was moved to make the stacking pass.

Fresh production supplements additionally capture native Tab-focused skip, JR and
footer controls in BOTH roots, en/es/themes/default16/24, using1440/2320 widths where
the frame really exists:16 records/48 paired focused views. Independent raster
comparison checks62450 focus-ring pixels;0 change when ONLY frame paint is hidden.
Thus decoration cannot paint over those visible outlines; this is not merely a
pointer-events:none/hit-test assertion. Skip remains above frame via existing z10.
Recovered dev/prod frame records also retain eight native header/skip focus probes
per JS-on presentation, unobscured bounds/hit tests and essential glyph clearance.
External summaries: `pixels.json`, `recovered-summary.json`, `focus-ring-pixels.json`.

### Inspected owner views, diagnostics and limits

The pixel pass prepares88 labelled native-resolution A2 BEFORE/V3-3 AFTER pairs:
en/es/themes,390/1440/default16 and320/default24, top/middle/bottom/open-menu where
applicable, both modes. These are source-attributed A2 comparisons, not fabricated
original-owner image bytes or final owner acceptance. Inspected the Spanish dark390
open pair, dark320/default24 final-control focus, light1552 global404/bottom terminals,
dark2320/default24 focused skip/full hair, and current MCP Spanish dark1440 middle/end.
Not every screenshot was manually inspected.

| Representative E capture | SHA256 |
| --- | --- |
|`pair-prod-es-dark-390-16-home-menu.png`|`ee844759e36f4680e722b8abb2d1334e2d808835e29f8cfae08597adca7c5d30`|
|`pair-prod-en-light-1440-16-home-middle.png`|`cfb21c47da6ca50bb1b11865e5d8ae899e5bf7d606cd965e814c89431c654a6a`|
|`prod-boundary-es-light-1552-16-404-bottom.png`|`466dc325111d78e6fc5617ff68a3913427b14b7c76d9d483265c21922cda3724`|
|`prod-native-es-dark-24-last-menu-focus.png`|`4882c9de0f172bdcaf357a316ce7810a35d2b0d11a2910d412b1e8cd3a7d18dd`|
|`prod-focus-frame-es-dark-24-home-skip.png`|`81f9f182744bb9b52c3af05cc7aece1c916402b879faf839574e64a856f8d9ab`|

Chrome DevTools MCP became available in this resumed tool catalog and was used on
ONLY new isolated page2; desktop1440×900 viewport was verified. Its attempted390px
resize/navigation actually returned1026×772, so it receives NO mobile matrix credit;
native CDP supplies the asserted mobile evidence. MCP console error2 is specifically
network request21 `/favicon.ico`404, already documented in MEMORY; no new hydration
error. Earlier development-overlay/full-page-clip diagnostics live in separate
`devtools-overlay-boundaries`/`invalid-fullpage-boundaries` folders, not passing tiles.

One recovered production manual-pose batch failed to settle; its diagnostic list
`invalid-pose-prod-en-dark-1024-16-home.json` is NOT a cell. The resumed valid batch
asserts native settled manual pose and exists separately. During final pixel aggregation
the broad `*-home.json` glob accidentally read that list, raising AttributeError;
confirmed its list type/name, added ONLY a temporary harness type guard and reran
successfully. No application/test or acceptance-threshold change. Pillow's future
getdata deprecation warning is external tooling, not an app failure.

Known unrelated current-route→BODY focus, brand label, theme-field identification,
root/installed-lock mismatch and enlarged320 carousel overlap remain unchanged.
Absent outside dismissal is still V3-4's attributed128 RED baseline, NOT fixed or
claimed conforming here. Reduced-motion/playback/palettes/contrast sources are
byte-identical and keep their attributed accepted proof; no carousel engine rerun
or new full-spec acceptance claim. No physical-device/other-browser/screen-reader proof.

### Scope, resources and completion boundary

Recovered owned production pnpm76801/CLI76901/server76902 had exact3111 command,
repository CWD and process group verified before its group's SIGTERM. Owned native
Chrome61085/61086 with E profile dirs/9237/9238 were closed via acknowledged Browser.close;
3110/3111/9237/9238 no longer listen. Earlier own dev was already stopped before the
build. ONLY new MCP page2 was closed; user's page1 about:blank remains. No unknown
process signalled, cache/output manually deleted, install, commit/push, MEMORY edit
or forbidden spec/plan/AGENTS/constitution edit occurred.

V3-3 meets its bounded done condition: RF-6/7/15, RF-8–10 preservation, RNF-1–3/5–6.
Only its checkbox is completed after final whitespace/source reconciliation. V3-4,
V3-5, independent latest-spec review and explicit owner acceptance/T10 remain open.

## V3-3 current implementation checkpoint — 2026-10-13

ONLY V3-3 is delegated; approvals and checked V3-A1/A2 dependencies were read.
Entry inventory/diff and source snapshots are under
`/tmp/opencode/spec003-v3-3-final/` (E). Node24.21.0/pnpm12.4.1; no conflicting
3000/3110/3111/9237/9238 listener existed before owned runtimes started.
Unknown user work, roots/APIs/events/observer/assets/palettes remain protected.

The existing narrow surface and mobile native scrollbar failure were reproduced:
320/default24 uses frame0–305, content30–275, old panel18–287 with15px scrollbar,
main/preferences end260 instead of275. Desktop1440×160/default24 also reproduced
the SAME15px lost right rail (select ends1338 instead of1353) in its capped native
header scroller. This demonstrates the need for the plan-authorized minimal shared
sizing wrapper; no control-clipping cause or JS dismissal repair is claimed.
The desktop BEFORE file was accidentally overwritten by a later diagnostic run;
these values are retained from the actual tool output, not a surviving before image.

Application delta so far: outer header paints100% W, inline-size query supplies C/I
from existing tokens; existing headerContent is the full-width desktop scroll area,
one inner headerControls wrapper retains C and external0.5rem focus reserve. Mobile
panel fills W; existing child groups use C/I independent of its scrollbar, which
now occupies the outer gutter. Native page/panel scrolling is retained, no body lock,
hidden scrollbar, new listener or height compression. Frame pseudos change ONLY
z-index−1→6 above header5/below skip10; absolute coordinates/radii/strokes unchanged.

Fresh dev primary280 plus56 width480 cells have been retained in E, each with
asserted locale/theme/viewport/default/root16/24/DPR1/query48/query64/status/font
readiness, top/middle/bottom bar bounds, open-menu rails/page-width stability and
Runtime exception checks. These are NOT final completion evidence yet: production,
full-height pixel/focus/clamp proof, boundary/short-screen/native recovery supplements
and project checks remain pending. No checkbox changed. V3-4/5/T10 not started.

## V3-A2 final-source results — common rails, 2026-10-13

Scope: ONLY approved V3-A2; RF-7/15 correction, RF-1–3/8/11–13 preservation,
RNF-1/2/4–6 within this task. No full RF-6/7/15 conformity or owner acceptance is
claimed: full bar/menu paint and the existing menu scrollbar reference are V3-3;
outside dismissal is V3-4; combined current-spec review/acceptance remains V3-5/T10.
This final-source result supersedes incomplete A2 checkpoints below.

### Recovered implementation and command attribution

The interrupted invocation had ALREADY installed these four minimal CSS changes.
Recovery did not reapply them or make any additional application edit:

| File | Bounded change | Final SHA256 |
| --- | --- | --- |
|`src/components/home/hero.module.css`|Remove desktop introduction4% and details0.35rem reading offsets ONLY.|`00c59e6b5a4e6ced3790587cdde8ea63cdf6bb811c740a0df42c3f5299d659a2`|
|`src/components/projects/selected-projects.module.css`|Remove heading outer4%/8%; prefix/gap/card/controls untouched.|`c0c345f8b8392143ff98397787b4fbae89847fbd18c41bd2ef919c86986a2380`|
|`src/components/home/about-preview.module.css`|Text-only `--content-inset=max(existing G,(100cqw−76rem)/2)` on FULL composition; extend future inline-size containment to desktop after identical protected-size proof.|`5d4be7c600c60eaf93d10821106b54e32db07440cdccd8c851ef9d4764e48d4a`|
|`src/components/layout/site-footer.module.css`|Available region100% W; move existing C expression to row/bottom, centered; no new paint/typography.|`d8ae3b8256f5a7c5496d8d2f9d6a6ccde4b151a5d1a1586844be8304dd78cb5d`|

A=`/tmp/opencode/spec003-v3-alignment-after/`; B=`/tmp/opencode/spec003-v3-alignment-baseline/`.
Entry89-file SHA256 map reconciles ONLY these four application files and validation.md;
all other protected/user files match. Same final CSS underlies recovered and resumed
checks. Final-source build `KhXM3D5yEY0MNZawbxNAJ` follows the CSS changes, not A1's build.

| Exact project validation | Result and attribution |
| --- | --- |
|`pnpm exec next typegen`|Recovered post-CSS typegen.log: types successfully generated; not rerun.|
|`pnpm lint`|Recovered post-CSS lint.log: completed ESLint without diagnostics; not rerun.|
|`pnpm exec tsc --noEmit`|Recovered post-CSS tsc.log: no diagnostics; not rerun. Fresh build also completed its TypeScript stage.|
|`pnpm test`|Recovered post-CSS tests.log:21 unit passes,0 failures; one explicit no-origin integration skip, NOT HTTP proof. No repository test added/modified for pure CSS.|
|`pnpm build`|Fresh normal final-source build, exit0 (build.log/build.exit), after verified owned dev shutdown.|
|`git diff --check`|Fresh exit0; untracked evidence/tasks also receive no-index whitespace check at finalization.|
|`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test`|Recovered dev-tests.log:32/32 passes,0 fail/skip, same final CSS.|
|`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test`|Fresh production exit0:32/32 passes,0 fail/skip (21 unit+11 HTTP), final build.|

Recovered first four/HTTP-dev outputs are surviving execution evidence, not fresh
reruns; separate exit receipts were not retained for those recovered commands. Do
not invent fresh exits or treat the no-origin skip as an integration pass. No socket
error occurred in resumed browser/application checks. No install/cache/output repair,
generated hand edit, dependency change or unrelated application fix was performed.

### Matched AFTER role table and exact tolerance

All280 primary conditions PER mode now exist (560 total), plus56 width480 PER mode
(112), and32 boundary/max presentations PER mode (64). Every primary/480 record has
the same ID schema as A1; actual default16/24 font preferences AND resulting root,
viewport/DPR1/locales/theme/font readiness/48rem/64rem/HTTP200-or404 are asserted.
The browser Preferences retain actual default sizes16 and24. Scripts-off disabling
precedes the direct missing visit; data-theme there is controlled diagnostic input.
Native document/body overflow0, Runtime exceptions0 in all672 primary/480 records.
Counts and per-role deviations are in rail-regression.json; boundary-regression.json
and page-start-regression.json separately cover supplements/current reading starts.

All672 primary/480 common reference objects L/R/W/G/C/I/A/B are EXACTLY equal to their
matched A1 objects. Therefore EACH per-condition numeric reference in A1's table
remains applicable, not a new hardcoded gutter projection. Same scrollbar
differences between short/long pages remain. The following AFTER relationships expand
against that table for every eligible ID; raw JSON retains full-precision signed
deltas and selectors, not just a maximum-width declaration:

| Eligible group | BEFORE discrepancy | AFTER actual/reference | Maximum absolute AFTER deviation |
| --- | --- | --- | ---: |
|Hero introduction/name|Extra4% first-column inset; boundary maximum33.03125px.|Desktop `[A,D]`; centered stack `[A,B]`.|≤0.01275px|
|Hero details/role/degree|Additional0.35rem; combined maximum41.43125px.|Same `[A,D]` or centered `[A,B]`;16/24px support.|≤0.01275px|
|Selected heading/title prefix start|Extra4%/8%; maximum145.906px.|Heading `[A,B]`, prefix start A, intentional internal number/gap retained.|≤0.01275px|
|About upper reading/heading/body/link start|RawG end instead of full I; maximum122px.|Stack `[A,B]`; desktop `[L+0.517W+1.5rem,B]`.|≤0.01275px|
|About lower reading|RawG start; maximum122px.|Stack `[A,B]`; desktop `[A,L+0.5W−1.5rem]`.|≤0.01275px|
|Footer available region|Independent C cap; maximum238px inset.|Available `[L,R]`/W; no required full-width painted footer.|0px|
|Footer row/bottom/start identity/end nav|Interior rails already conformed.|Continue `[A,B]`/C; original mobile/desktop flex and intrinsic wrapping.|≤0.01275px|
|Shared main/page reading/list groups, header controls, Hero stage/carousel outer/stable/action groups|Already conformed.|Unchanged common C/column/intrinsic references,65ch retained.|≤0.01275px|

Primary/480 maximum0.012500000000045475px; boundary/max maximum0.01274999999998272px.
Both are strictly below the approved≤1CSSpx; no rounding1.01→1 or extra raster
allowance is used. Existing About/Projects/missing heading/body/action START maxima
are0.006250000000022737px. Short words/intrinsic controls/65ch ends are not stretched.

Header surface remains `[A,B]`, NOT `[L,R]`, and opened mobile panel remains its
old reciprocal focus bounds: expected V3-3 pending paint, not A2 success. At320/24,
the native menu scrollbar also leaves main/preferences content END at B−15px in
both B and A.80 per-group primary/480 entries across modes explicitly retain this
unchanged failure in `pendingMenuScrollbar`; no tolerance waiver or new regression.
This corrects A1's blanket conforming-menu attribution. V3-3 must reconcile its
native overflow/control-end references along with full paint, without changing
intrinsic control widths. No header/menu/frame source changed in A2.

### Protected geometry, paint/readability and native regressions

All primary/480 and boundary/max protected portrait/safe-box/carousel/media layout
L/R/W/H match A1 within0.02px (not an allowance for corrected rail errors). Present/
future composition HEIGHTS match every primary/480 baseline too: desktop future
containment did not alter intrinsic/arc geometry. Outer bounds/frame/source/palette/
fonts and1:1.15 Hero columns/2rem gap remain unchanged. Portrait width/rotation/
natural contain/5% safe box are untouched; full hair remains wider than T1's matched
normal-size reference through unchanged T5 sizing, not a fresh widening claim.

40 supplemental Home preservation records PER mode inspect full name/one rectangle
per whole name word/dominant heading/role-degree16/24, media ratios and native upper/
lower viewport tiles (including multiple tiles where sections exceed the viewport).
160 focused upper-link/footer destinations are visible/hit-unobscured.20 Home native
owner tile sets PER mode and80 existing-page sets PER mode retain exact before/after
capture viewport/scroll/active/native-offset equality.72 Home owner/boundary/max mask
raster samples retain actual original opaque bbox0–615 ×0–699 and label-corner alpha255.
Upper desktop central reference~50.025%, canvas0.839W/10:7/frame-left, protected
clearance≥24/36px and secondary frame-right16:10 remain source/geometry-matched.

48 actual stacked cells' native lower endpoint/quarter/center samples have adjacent
joint RGB steps≤2 channel levels, no internal abrupt step. Computed pseudo masks
retain full-width opaque text/joint plus core20%/feather32% of16:10 media height.
Matched upper DOM layout gaps remain IDENTICAL to A1. A new thresholded native
first-glyph-pixel measurement reports22.65625–37.09375px; it is a DIFFERENT sampling
definition from historical22–35px, not silently relabelled as that old metric or a
new universal gap limit. At1024/default24 its36.09–37.09 values reflect first-ink
threshold/font glyphs; no mobile gap/mask/font/heading geometry was changed. Initial
first-pixel range assertion was invalid, replaced by exact matched-baseline geometry
preservation plus separately reported actual pixels; no application correction or
new approved exception resulted. Long native tiles show complete downward contour
and upright label/text, not only the transparent canvas or a single seam crop.

Fresh used-pair minima from actual computed foreground/semantic opaque background
compositing: Hero degree6.2245516050:1; About labels5.5665596218:1; direction5.9339462184:1;
other checked Hero/upper text≥7.3873191365:1. Labels are in original opaque safe areas,
secondary midpoint below32% feather; direction lies on opaque surface. No new changed
used-pair AA failure. Global dark4.7149:1 remains attributed unchanged-source earlier
proof, not a fresh global audit. Light inactive-label3.53 and320/24 card caption/label
overlap remain preexisting protected-carousel concerns, not A2 cleanup.

Eight trusted nested404→same-language Home200 recoveries PER mode cover en/es/themes,
scripts-on1440/16 and scripts-off320/24, visible native focus/Tab/Enter. Four enlarged
short-phone menu sequences PER mode reach all six controls then Escape restores trigger.
Guard helper's `panel` diagnostic again selected the toggle ICON: INVALID field, not
a panel pass. Matched primary open `.panel` box18–287 ×134.390625–555 corroborates
all control+7px outline bounds/hit tests; focused SELECT scrolls to bottom530.390625,
so all outlines remain inside. No fabricated icon bounds or clipping fix is credited.

Four fresh production carousel smoke contexts (390/16,en/light;1440/16,es/dark;
320/24,es/dark;768/24,en/light) pass trusted hover/leave resume, explicit Pause/native
End priority and reduced-motion Home. Existing source-hash-matched smooth/wheel32px/s
regressions remain attributed prior proof/unit tests, not freshly replayed engine
validation. First narrow smoke attempted an offscreen button click; corrected external
helper scrolls/hit-tests before trusted activation. Invalid attempt excluded; the
two already valid contexts were retained, only remaining contexts executed.

### Owner comparisons, inspections, limitations and finalization

260 production native BEFORE/AFTER pair images (offline labels, no image rescaling)
are listed in pixels-pairs.json:100 Home tiles and160 existing-page/footer tiles.
Pattern `A/pair-prod-owner-{locale}-{theme}-{width}-{default}-{Hero,Selected,upper,lower,footer}.png`
and `A/pair-prod-pages-{locale}-{theme}-{width}-{default}-{route}-{page,footer}.png`.
They cover all four locale/theme combinations at390/1440 normal plus320/768/1024
default24. B's ordinary owner tiles are the authoritative BEFORE, not unreliable
full-page carousel-pose images. Primary normal-motion/manual-Pause coordinates are
separate from reduced-motion owner views. BEFORE header/frame stays untouched in pairs.

Inspected current original portrait and five-width native Hero photo crops at both
text sizes (normal all five show full image/head; enlarged1024/1440 crop exceeds
viewport at its bottom, not the actual photograph/head). Inspected es/dark1440 Hero/
upper/lower pairs, en/light1440 Selected pair, enlarged1024 upper long-contour tiles,
mobile lower and footer/page views. MCP owned isolated page3 verified native390×844/
root16/dark Hero and production lower composition, plus desktop context. MCP production
console reports no warnings/errors. Its maximized-window resize error was handled by
explicit viewport emulation, not credited as a passing resize or native0-overflow proof.
Do not claim manual inspection of every capture, physical devices, other browsers,
screen readers, final owner acceptance or whole-spec completion.

Final cleanup: recovered owned dev38856/PGID38856 was verified by exact CLI/repository
CWD before its SIGTERM; fresh prod56381/PGID56381 likewise (intentional143, not a failed
check). Owned Chrome39084/39317 profiles/ports9235/9236 were reverified and each
acknowledged Browser.close normally. Only owned isolated MCP page3 closed; user
about:blank1 remains. Final3110/3111/9235/9236 listeners absent. No unknown/recycled
PID signalled, artifact/cache deleted or unrelated user work changed.

Evidence SHA256 inventory in A/evidence-sha256.json; representative durable identities:

| A/file | SHA256 |
| --- | --- |
|`pair-prod-owner-es-dark-1440-16-upper.png`|`93515768a10517d17cbfd44c63dd756881ca9ebadb8365c886f27d2d9117e104`|
|`pair-prod-owner-en-light-1440-16-Selected.png`|`a1b6bb9657d94fb9c81b3e7dca3a61afec772f3155771f4dca7665a23b0a52f3`|
|`pair-prod-owner-es-dark-390-16-lower.png`|`2d1f46f6192557964367508a35e8ba750665bfaaeab0c55d3b3705c5fda977b3`|
|`pair-prod-pages-en-light-390-16-about-footer.png`|`bb86a02ea2bf4e455a042bd6a2c02fc7586b127387c6e64e6c9cde9a4a29fc95`|
|`prod-en-light-1440-16-home.json`|`c6d7032cc269081bb4dbbc13db4bf4e51c1653a6e8e0a4bc57ec655885d70b0c`|

Final89-file source reconciliation permits ONLY the four recovered CSS files,
validation.md and A2's checkbox. AGENTS/MEMORY/constitution/spec/plan/data/tests/
assets/fonts/other user work remain entry-byte-identical. Whitespace checks include
the untracked evidence/tasks (no-index file-difference exit1 is not whitespace error).
No new related regression remains in A2's corrected scope; unchanged menu−15px and
narrow paint remain explicit downstream failures, not a whole-spec pass.
**V3-A2 completed; ONLY its checkbox is finalized. STOP.** V3-3/4/5/T10 remain pending,
with independent current-spec review and explicit final owner acceptance still absent.

## V3-A2 recovery checkpoint — 2026-10-13

Later recovery checkpoint: all280 dev primary cells and56 separate480 cells now
exist and pass corrected-rail regression (maximum0.012500000000045475px), with the
unchanged−15px menu scrollbar explicitly listed as pending V3-3, not a pass.
32 boundary/max visits,20 native Home tile sets and80 existing-page tile sets
completed; eight native404/Home200 recoveries and four short enlarged menu sequences
were collected.40 supplementary Home preservation cells verify exact name/whole-word
wrapping,16/24px support, unchanged primary/media dimensions/layout gap, used AA
pairs and focused upper/footer action visibility. Production remains pending.

Supplement harness corrections are excluded from app defects: an initial assertion
mistook16px DOM heading gap for visible glyph gap22–35px; corrected comparison uses
the matched baseline DOM gap (native paint inspection remains separate). The helper
also initially ignored its pseudo argument, yielding INVALID mask:none fields;
all40 preservation supplements were replaced with actual pseudo reads and passed.
No CSS was changed in response. MCP resize failed on a maximized window; explicit
emulate viewport instead verified390×844/root16/dark, inspected full-hair Hero/name/
role/degree, and retained native screenshot `A/mcp-mobile.png`. No guessed resize
condition or old MCP subpixel overflow is used as native matrix proof.

Only V3-A2 is delegated. Recovered interrupted execution from
`/tmp/opencode/spec003-v3-alignment-after/` (A); baseline remains
`/tmp/opencode/spec003-v3-alignment-baseline/` (B). A2 is NOT complete.
Entry SHA256 reconciliation identifies exactly four application deltas: Hero removes
desktop4%/0.35rem reading insets; Selected removes heading4%/8%; About derives text
inset from FULL composition via existing76rem/page-gutter and inline-size containers;
footer available region becomes W while row/bottom retain C. No reapplication or
other application edit occurred on recovery. All other entry-hashed files match.

Recovered post-CSS logs retain successful typegen/lint/tsc and standard tests
(21 pass, one explicitly no-origin HTTP skip), plus development explicit-origin
32/32/no skips. No production build/log or production matrix yet exists for A2.
182 development primary JSON records survive; their corrected comparable rails
have maximum0.012500000000045475px deviation, protected media/carousel dimensions
match baseline. Remaining primary/supplement/paint/owner/guard checks are pending.
Original full-page screenshots are contextual only, not stable carousel-pose proof.

Recovery verifier exposes an A1 attribution error: at320/default24 the opened menu
main-link/preferences END is B−15px, not B, due to native panel vertical scrollbar.
Matched B/A `dev-en-light-320-24-home.json` shows identical panel18–287/content30–275,
groups30–260 and delta[0,−15]. This supersedes A1's blanket conforming-menu wording,
not its raw measurements. Menu CSS/hash is unchanged; reciprocal panel bounds/native
overflow and full paint remain V3-3 scope. Do not count this as a corrected A2 rail,
round it into tolerance or introduce a menu redesign here. Required corrected A2
groups still use the exact≤1CSSpx test; no new menu regression was introduced.

Recovered owned dev PID38856/PGID38856 has exact3110 CLI and repository CWD;
next-server38973 listens on3110. Native Chrome39084/39317 use only A's dedicated
profiles and9235/9236 ports. No unknown process was killed, output/cache deleted,
dependency installed or protected document edited. Resources remain active while
bounded remaining checks resume. Spec/plan approvals and checked A1 dependency
were read; A2/V3-3/4/5/T10 remain unchecked and owner acceptance absent.

## V3-A1 final audit — BEFORE widths and comparable rails, 2026-10-13

Scope: ONLY approved V3-A1, a read-only application audit. This section supersedes
the progress counts below. It diagnoses RF-7/RF-15 and preserves/source-audits
RF-1–3/6/8/11–13, RNF-1/2/4–6; it does NOT certify the new requirements as met.
A2 and V3-3/4/5/T10 are separate pending tasks. No corrective CSS was installed.

### Source, conditions, retained evidence and counts

E=`/tmp/opencode/spec003-v3-alignment-baseline/`. All primary records have IDs
`{dev,prod}-{en,es}-{light,dark}-{width}-{default/root}-{presentation}`. Presentations
are `home`, `about`, `projects`, `missing`, `nested`, `missing-off`, `nested-off`.
The last two disable scripts BEFORE navigation; their data-theme is controlled by
native diagnostics, not credited as hydrated preference behavior. Each original JSON
contains responsible selectors, box/content edges, references, signed deltas, glyph/
line rectangles, fonts, viewport/client/scroll widths, DPR, actual48rem/64rem matches,
HTTP status, menu state, three header phases and runtime exceptions. Source is the
unchanged current V3-2 tree, identified by `entry-hashes.json`/`entry.diff`; production
was freshly built as `k8x34iEzbIEfcnNp7-1pO` (`pnpm build`, exit0). No install/lock
repair, cache deletion or hand-edit of generated artifacts occurred.

- **280 primary cells per mode**,560 total: all seven presentations × en/es × both
  themes ×320/390/768/1024/1440 × actual browser default AND root16/24. Heights are
  respectively568/844/1024/768/900. Assertions include exact viewport/DPR1/lang/theme/
  root/query/font readiness and genuine200/404. Not a root-only CSS font simulation.
- **56 additional480 cells per mode**,112 total, height900; not inflated into280.
  All336 corresponding dev/prod records have EXACTLY equal horizontal role/content/
  deviation data. There are14,976 primary/supplement role rows and320 opened-menu
  snapshots across both modes; hidden panels are not zero-width passing rows.
- **32 boundary/max presentations per mode**,64 total, separately labelled en/dark
  Home/global404:767/768,1023/1024,1536/1537 at default16;1151/1152,1535/1536,
  2304/2305 at default24;1552/1632 and2320/2400 additionally prove the actual96rem cap
  after allowing for native scrollbars. These are supplementary, not primary counts.
- **20 Home owner tile sets per mode**: en/es/themes at390/1440/default16 and
  320/768/1024/default24. **80 existing-page owner visits per mode** add About,
  Projects, simple and nested404 at those same conditions. These supporting revisits
  are not additional primary cells. Every ordinary viewport tile asserts unchanged
  viewport/scroll/active-item/native-offset before/after capture.
- Eight trusted native nested404 recoveries per mode: en/es/themes, scripts ON at
  1440/default16 and OFF at320/default24; actual404, main recovery focus/outline/hit
  unobscured below header, native Tab/Enter and same-language Home200. Four additional
  320/default24 menu sequences per mode reach all six links/preferences by native
  Tab, positive physical bounds/hit tests, then Escape restores the visible trigger.

All672 valid primary/480 documents have native document/body overflow0 and no Runtime
exception. This does not replace the role audit. Native scrollbars are15px when
present, zero otherwise; measure W from the actual frame content box, not innerWidth.
Differences in native available width between short/long documents are recorded below,
not misreported as extra authored offsets. Browser default24 changes rem queries;
at768/1024 it is genuinely stacked/no frame, at1440 it is side-by-side/no frame.

### Durable per-condition BEFORE reference table

This is a compact relational per-condition table, not a projection from declarations:
EVERY primary/480 ID resolves to exactly one row below by width/default/presentation/
locale. Each row applies to BOTH modes and BOTH themes, with both locales unless
specified. Expand its measured `[L,R]`, `[A,B]`, C and I into the semantic-role table
below; Home additionally uses the numeric Home table. The raw per-ID JSON retains
full precision and all intrinsic/ink/transform rectangles. Displayed decimals below
are abbreviated for reading only; classification used unrounded values with exactly
≤1CSSpx, never1.01→1. Conforming comparable-edge maximum is0.012500000000045475px.

`all` means all seven presentations; `errors` means missing/nested with scripts on/off.

| Width/default | Presentations/locales | clientWidth | L–R / W | C | I / A–B | Cells across both modes |
| --- | --- | ---: | --- | ---: | --- | ---: |
|320/16|all|305|0–305 /305|265|20 /20–285|56|
|320/24|all|305|0–305 /305|245|30 /30–275|56|
|390/16|Home, Projects|375|0–375 /375|335|20 /20–355|16|
|390/16|About, errors|390|0–390 /390|350|20 /20–370|40|
|390/24|all|375|0–375 /375|315|30 /30–345|56|
|480/16|Home|465|0–465 /465|417|24 /24–441|8|
|480/16|About, Projects, errors|480|0–480 /480|432|24 /24–456|48|
|480/24|all es; en Home/About/Projects|465|0–465 /465|405|30 /30–435|40|
|480/24|en errors|480|0–480 /480|420|30 /30–450|16|
|768/16|Home|753|0–753 /753|676.2|38.4 /38.4–714.6|8|
|768/16|About, Projects, errors|768|0–768 /768|691.2|38.4 /38.4–729.6|48|
|768/24|Home, Projects|753|0–753 /753|676.2|38.4 /38.4–714.6|16|
|768/24|About, errors|768|0–768 /768|691.2|38.4 /38.4–729.6|40|
|1024/16|Home, Projects|1009|2–1007 /1005|902.6|51.2 /53.2–955.8|16|
|1024/16|About, errors|1024|2–1022 /1020|917.6|51.2 /53.2–970.8|40|
|1024/24|all|1009|0–1009 /1009|906.6|51.2 /51.2–957.8|56|
|1440/16|Home, Projects|1425|2–1423 /1421|1216|102.5 /104.5–1320.5|16|
|1440/16|About, errors|1440|2–1438 /1436|1216|110 /112–1328|40|
|1440/24|Home, Projects|1425|0–1425 /1425|1281|72 /72–1353|16|
|1440/24|About, errors|1440|0–1440 /1440|1296|72 /72–1368|40|

G is measured20 at320/390 default16;30 at320/390/480 default24; otherwise5vw in
this table (24/38.4/51.2/72), with original clamp boundaries retained. C is the actual
common min(76rem,W−2G); I=(W−C)/2, A=L+I, B=R−I. Actual layouts use subpixel grid
rounding; ≤0.0125 differences above are conforming, not a second tolerance allowance.

### Every applicable semantic role: actual/reference/deviation and attribution

Paths below are the existing CSS Modules under `src/components/`, except globals.
These measured relationships apply to EACH eligible ID in the preceding table.
Layout areas and comparable columns are compared; a short word/button's visible
rightmost ink is never substituted for the group's right rail.

| Eligible role / responsible declaration | Actual BEFORE area | Intended reference / signed deviation | Classification and rationale |
| --- | --- | --- | --- |
|`layout/site-shell .frame`, actual transparent border|frame content `[L,R]`, W|`[L,R]`,0/0|Conforming outer bound, RF-7. Sole96rem owner; used border2px only when actual64rem query matches. Pseudo drawing is not a text rail.|
|Home `.main:has([data-home])`; `home/hero .hero`; `projects/selected-projects .section`; `layout/section-curve .curve`; About `.present/.future/.composition`|`[L,R]`|`[L,R]`,0/0|Conforming full surfaces, RF-7/12/13. Lower joining paint shares W; no inherited narrow row cap.|
|`layout/site-shell .header` width=min(76rem,100%−2G), opaque background/bottom rule|paint/layout `[A,B]`|`[L,R]`,+I/−I|Unexpected recessed outer paint, RF-6/7. Existing V3-3 diagnosis; NOT A2 permission to install the bar or frame stacking.|
|`.headerContent` reciprocal−0.5rem margins/+0.5rem padding|content `[A,B]`; external reserve `[A−0.5rem,B+0.5rem]`|content `[A,B]`,0/0|Conforming control rails, RF-15; separate focus space, not duplicated content inset. JR starts A, toggle/end preferences finish B; authored brand/font/heights intact.|
|`navigation/navigation-menu .panel`, mobile open|paint box `[A−0.5rem,B+0.5rem]`; content `[A,B]`|surface `[L,R]`: +(I−0.5rem)/−(I−0.5rem); content0/0|Unexpected narrow surface belongs to V3-3; main-link/preference groups already conform to C. Raw probe's `menu surface` content deltas±I are NOT paint endpoints.|
|Mobile main nav/preferences; `navigation/site-navigation .links a`|groups `[A,B]`; padded link boxes start A, label ink A+0.5rem; intrinsic ends vary|group `[A,B]`,0/0|Conforming rails; protected intrinsic0.5rem hit padding and unequal link ink, RF-15. Desktop is the existing horizontal column after JR/gap, ending B; not forced to start A.|
|`home/home-regions .inner`, Hero stage; Selected inner/carousel outer; Selected `.action`|`[A,B]`|`[A,B]`,≤0.0125|Conforming C. Preserve accepted viewport/card geometry; no widening or intrinsic action-button stretching required.|
|Hero `.introduction`/`.name` desktop4% start padding; `.details`0.35rem|numeric Home table below|desktop left-column A–D; extra start offset|Unexpected reading insets, RF-15.4% resolves against the actual first grid column, NOT4% of C. Details adds5.6/8.4px. Centered stack is conforming, not a reason to left-align its glyphs.|
|Hero role/degree, portrait/media/safe box|role/degree share details reference, font16/24px; portrait CSS width and transformed bbox separate|reading A–D; portrait center derives from second1.15 column or stack|Reading offset unexpected; portrait is a protected RF-2/3 compositional exception. Keep1:1.15 columns/2rem gap, natural width/rotation/mask/5% safe box/full hair. Do NOT align opaque portrait edges to text gutters.|
|Selected `.heading` desktop4%/8%; `.titleGroup` prefix/gap|numeric Home table; title group begins at heading's inset start, intrinsic end|heading `[A,B]`; additional start/end padding|Unexpected comparable-group inset, RF-15. Number prefix/gap is intentional internal organization, but does NOT exempt the entire title group's extra4% start.|
|`ui/carousel .viewport/.controls`, stable controls/action; repeated slides|viewport outer `[A,B]`, internal edge-space5%/20%; controls outer `[A,B]`, own0.25rem padding/centered buttons|outer C; intrinsic/centered control groups|Conforming eligible outer/stable rails; protected RF-11 copies/caption7%/placeholder12%/14ch/28ch measures. Outer copies aria-hidden/inert, intentionally offscreen; not document overflow or candidates for rail stretching.|
|About upper `.content/.heading/.introduction/.link`|stack `[L+G,R−G]`; desktop start U=L+0.517W+1.5rem, end R−G|stack `[A,B]`; desktop `[U,B]`|Conforming where I=G; unexpected right-end excess I−G when readable cap engages (primary1440/16:+30.5px). Prefix/gap/link intrinsic end retained. U protects maximum original contour plus clearance, not arbitrary column-left flattening.|
|About lower `.direction`|stack `[L+G,R−G]`; desktop `[L+G,L+W/2−1.5rem]`|stack `[A,B]`; desktop `[A,L+W/2−1.5rem]`|Conforming where I=G; unexpected start −(I−G) when cap engages (primary1440/16:−30.5px). Arc-side1.5rem clearance is protected RF-13, not removed.|
|About primary/secondary media/placeholder|primary frame-left original canvas, actual opaque bounds separately probed; secondary frame-right16:10; safe labels use local padding|specific RF-12/13 anchors/safe regions, not C|Protected original mask/central45–55% relationship and ≥1.5rem clearance; mobile rotated full canvas differs from occupied flow height. Lower common20% core/32% feather16:10 paint unchanged. Label corners native alpha255, upright.|
|`layout/site-footer .footer` independent width=min(76rem,100%−2G)|available region `[A,B]`, width C|available `[L,R]`, +I/−I|Unexpected outer-region cap, RF-7/15; this is available width, not a requirement for new full-width footer PAINT.|
|Footer `.row/.bottom`, identity/nav/copyright/optional contacts|row/bottom `[A,B]`, starts A/end group B desktop; stacked starts A; intrinsic ends/quiet wrapping vary|content `[A,B]`,0/0|Conforming interior organization, RF-15. No contacts are rendered by current verified data; no invented links/identity or footer typography change.|
|About/Projects/global404 `.main`; `layout/page-content .content` header/approach/list; inherited project articles|available reading/list groups `[A,B]`, heading/body/actions start A|common C/start A,≤0.0125|Conforming;65ch paragraph ends/intrinsic heading and recovery widths are deliberate, not independent outer caps. Existing list hierarchy/content remains. Both simple/nested actual missing visits use global404; ordinary localized not-found shares these styles by source inspection, not an invented live route.|

### Actual Home column/reading edges (each mode/locale/theme)

All entries below are measured content-area edges, not visible word lengths. D is
the end of the protected first Hero grid column, before its2rem gap. Stack entries
have D=B and centered text/media. Hero name matches introduction; role/degree match
details within0.0094px (CSS padding resolution versus element geometry). Selected
heading's title prefix starts at its content start; upper About heading/body share
its listed reading area, and its link starts there with intrinsic end. These values
plus the semantic-role table record all comparable Home groups without conflating
the three different desktop column references.

| Width/default | D | Hero intro/name | Hero details | Selected heading | About upper | About lower |
| --- | ---: | --- | --- | --- | --- | --- |
|320/16|285|20–285|20–285|20–285|20–285|20–285|
|390/16|355|20–355|20–355|20–355|20–355|20–355|
|480/16|441|24–441|24–441|24–441|24–441|24–441|
|768/16|338.009|50.39065–338.015625|55.990625–338.015625|65.45315–660.49995|413.296875–714.6|38.4–352.5|
|1024/16|458.122|69.390625–458.125|74.990625–458.125|89.296925–883.593775|545.578125–955.8|53.2–480.5|
|1440/16|655.188|126.5156–655.1875|132.115625–655.1875|153.125–1223.2344|760.65625–1351|74–688.5|
|320/24|275|30–275|30–275|30–275|30–275|30–275|
|390/24|345|30–345|30–345|30–345|30–345|30–345|
|480/24|435|30–435|30–435|30–435|30–435|30–435|
|768/24|714.6|38.40625–714.59375|38.40625–714.59375|38.40625–714.59375|38.4–714.6|38.4–714.6|
|1024/24|957.8|51.203125–957.796875|51.203125–957.796875|51.203125–957.796875|51.2–957.8|51.2–957.8|
|1440/24|645.484|94.9375–645.484375|103.3375–645.484375|123.2344–1250.531|772.71875–1353|72–676.5|

Primary unexpected maxima: Hero intro22.9375px; details31.3375px; Selected heading
start51.2344/end102.469px; About excess30.5px; header/footer outer inset110px.
Wider boundary/max supplements increase these to Hero intro33.03125/details41.43125,
Selected heading end145.906, About122 and outer inset238px. These are measured BEFORE
failures, not tolerated offsets. At1552/default16 actual frame L2.5/R1534.5/W1532,
C1216/I158/rails160.5–1376.5, G77.6 (About excess80.4). At2320/default24 frame
L2.5/R2302.5/W2300, C1824/I238/rails240.5–2064.5, G116 (About excess122).
At1632/2400 frame L42.5 and max width1536/2304 respectively, confirming bounded
centering beyond the cap; frame geometry is not a candidate for correction.

### Native paint, mask/ink/focus and readable owner baseline

All2016 primary/480 header phase records retain the baseline narrow bar at top/
middle/bottom.576 ordinary native Home/simple404 border profiles distinguish the
actual rule from surrounding background (minimum summed RGB difference31). Its
continuous painted interval agrees with the baseline narrow `[A,B]` within0.5px
raster coverage, NOT with full `[L,R]`. `bar-pixel-probes.json` stores physical spans,
RGB and signed endpoint deltas. Mobile open-panel physical bounds are separately
recorded; reciprocal focus padding is not called page paint or text alignment.
Full-height positive-z frame proof is deliberately reserved to approved V3-3.

Frame native supplements confirm used2px/pointer-events:none/z−1,12×24px terminals
at default16 and18×36px at24. Initial probe's `paint.framePseudo` field accidentally
read the frame rather than its pseudo (helper ignored its second argument); that
field is INVALID and not evidence. Dedicated `framePseudo` in owner/boundary/max
records uses actual `getComputedStyle(frame,'::before')`, independently of layout
rows, which were unaffected. No field is silently promoted to fresh proof.

Actual original About SVG rasterization in Chrome gives opaque bbox x0–615/y0–699
inside1000×700 transparent canvas. At390/default16 its rotated occupied bbox is
x0–375, y1457.796875–1787.796875; at1440/default16 unrotated canvas width1192.21875
has opaque maximum x736.40675 from frame L2, while right text starts760.65625.
That native sample leaves24.2495px clearance; canvas right is NOT opaque right.
All36 Home owner/boundary/max mask samples per mode retain label-corner alpha255,
original uniform mapping and upright localized labels. These are actual-source
Chrome raster probes, not synthetic replacement image alpha or fixture styles.
Portrait transformed bbox and computed untransformed CSS width are separate raw
fields; centered column/stack and5% safe box remain protected. Inspected native
Hero tiles show complete top/side hair and full name, Developer/degree16/24px and JR.

Authoritative owner views are ordinary native viewport PNGs:
`E/{mode}-owner-{locale}-{theme}-{width}-{default}-{Hero,Selected,upper,lower,footer}.png`
and `E/{mode}-pages-{locale}-{theme}-{width}-{default}-{route}-{page,footer}.png`.
Route names are about/projects/audit-missing/audit-missing-deeper. Separate `-rails.png`
supporting annotations on Home tiles mark actual L/R (amber) and A/B (blue); these
are OFFLINE guides, not application styles, original paint or new palette decisions.
Main/page raw line bounds distinguish glyph ink from available layout areas.
Original primary `*-menu.png` records normal-motion open menu; owner tile carousel
is explicitly the reduced-motion supplement, primary layout rows use manual Pause.

Inspected native dev/en/light390 and dev/es/dark1440 whole-page context, production
es/dark320/default24 Hero/Selected, es/dark390 lower, and shared-page main/footer
views. Original captureBeyondViewport Home images are contextual ONLY: carousel
pose/ink can change during such capture. Ordinary owner tiles are authoritative and
assert no capture-induced viewport/scroll/active/offset change. No claim that every
image was manually inspected, or of other-browser/physical-device/screen-reader proof.
MCP own page2 is qualitative (requested1440 resize yielded1026×772); production
console's resource error is verified `/favicon.ico`404, not a hydration error.

### Bounded conditional A2 corrective rationale — NOT implemented

1. Reuse unchanged `src/app/globals.css`76rem/page-gutter inputs and the sole shell
   `[L,R]` owner. The existing shell/Home inner C consumers already agree; no need
   to alter the carousel viewport, card geometry, fonts or page/root markup.
2. In `src/components/layout/site-footer.module.css`, make ONLY available footer
   region W, retaining row/bottom C and rails A/B via local sizing/insets. No new
   paint/content/contact or standalone footer typography redesign.
3. In `src/components/home/hero.module.css`, remove only demonstrated desktop4%
   reading start and0.35rem details offsets. Keep first column, gap, centered mobile
   hierarchy, full compound-name word wrapping/16–24px support, portrait/motion intact.
4. In `src/components/projects/selected-projects.module.css`, remove only heading
   outer4%/8% insets; preserve prefix/gap, centered action/controls, accepted cards,
   masks/shadows/three copies/caption and playback. Intrinsic controls remain intrinsic.
5. In `src/components/home/about-preview.module.css`, replace text-side RAW G with
   full-composition I only where cap produces a discrepancy: upper end/stacked
   symmetric insets and lower start/stacked insets. Keep desktop U and arc-side
   1.5rem clearance. Derive I from FULL width (existing inline-size containers;
   future desktop containment ONLY after measured identical protected sizing).
   Do not resolve percentages against a half-grid child or move anchored media.
   A change to original contour/gap/16:10/core20%/feather32%/clean desktop arc stops
   at coordinator, not a new silently accepted exception.
6. `home-regions`, shared `.main`/`page-content` and existing page/list/root sources
   currently need NO independent alignment correction. A common derived expression
   may prevent consumer drift only within the approved table; do not refactor merely
   to rewrite already equal expressions. Header control rails already conform.

V3-3, NOT A2, installs full `[L,R]` opaque bar/border and full mobile-panel paint
with independent common C groups/outline reserve, then the separately approved
smallest existing-pseudo stacking exception. Keep2px/64rem/96rem/radii/tokens/inert
interiors and prove full-height unobstruction at both roots/all scroll phases. A1's
narrow baseline does not validate that future exception. V3-4 handles outside completed
click/tap separately; no event listener was changed or new GREEN claimed here.

Existing enlarged320 card title/placeholder-label overlap was observed in native
Selected tiles; source bytes unchanged and card internals are outside A2 authority.
Keep it as a separate coordinator concern, not an excuse for reading-rail offsets
or an automatic card redesign. Known menu-current-link BODY focus, missing favicon,
root/installed lock discrepancy and final owner acceptance remain separately pending.
No new app logic: repository tests were neither created nor modified; artificial
CSS-string/TDD tests were not added. Normal baseline build passed; no fresh full
typegen/lint/test/explicit-origin32-suite claim is made for this measurement-only task.
Final source/whitespace/resource guards and A1 checkbox finalization follow below.

Final guard reconciliation: a counter initially included `dev-pages-cleanup.json`
as a page presentation; filtering by actual `tiles` schema confirms exactly80 page
owner visits/mode. No presentation was missing or counted from cleanup metadata.
The optional guard's recorded `panel` field used `[data-open="true"]`, which matched
the toggle ICON first (245–275 ×63.6875–70.6875), NOT the menu. That field is INVALID;
control rectangles/native Tab/outline/hit/Escape and recovery data remain valid.
Physical outline containment is corroborated against the correctly selected `.panel`
in the SAME mode/locale/theme/320×568/default24/Home primary open snapshot, whose
actual box is18–287 ×134.390625–555. Native focused control bboxes plus7px (3px outline
+4px offset) fit that measured panel; no guessed icon box or fake0-overflow pass.
This is explicit matched-record reconciliation, not a fresh panel remeasurement or
an application clipping fix. The diagnostic selector error does not alter the role
matrix (which used the unique module panel selector throughout).

### Final source guards, cleanup and task completion

Final inventory checks all90 entry files: ONLY this evidence document changed before
checkbox finalization. App/data/tests/assets/fonts/palettes/print0.72/0.9 opacity,
both roots/config/dependencies/AGENTS/MEMORY/constitution/spec/plan and protected
unknown user work remain byte-identical to entry. Current protected source identities:

| File | SHA256 |
| --- | --- |
|`src/app/globals.css`|840e62e184f681d5fe9877d02c613eb2f891b31097e61a9e1dd44065de34cc41|
|`src/components/layout/site-shell.module.css`|77d9c8f12ca497f9846f53a037241e71720cf54dac11f8936e60902069597803|
|`src/components/home/about-preview.module.css`|16b7cff4ae2bc69ecf63eca8e5c797498568215209c0a8e510da4330d70a2a69|
|`src/components/home/hero.module.css`|ec314de3e72a0533c22203de803d9338266b799193b7ef7de1594ce4adf2c0be|
|`public/images/me/portrait.png`|529f721fe3bb9f8fe02bbe0cad6bbedae4b88f01fc13271a83f72cf2bcd85e51|

Representative native evidence identities (full temporary inventory in
`E/evidence-sha256.json`; numerical role tables above remain durable if captures vanish):

| E/file | SHA256 |
| --- | --- |
|`prod-owner-en-light-1440-16-upper-rails.png`|db12f61d21c3a001cbcfef5696135b1001092e953d1230b898bad822febe6ff1|
|`prod-owner-es-dark-390-16-lower.png`|4c26a0fcc6cc74d8ba3f055f46b5260f0854890af4abbb035576422140bde500|
|`prod-pages-en-light-1440-16-audit-missing-deeper-page.png`|6a63710149edc60a9fdad706335e692e426d094c816ed96e5fced430b799eafd|
|`prod-es-dark-320-24-home.json`|ee8e6dbbd90096627c3c9d5389d3ca28384e5d37ed883f2ed422d3eb6eb27f2b|

Owned sequential dev/prod parent CWD, exact CLI and own process group verified
before each SIGTERM; exit143 is intentional cleanup, not failed application check.
Only own native profiles/ports9235/9236 were verified and acknowledged Browser.close
(normal exit). Only own MCP isolated page2 closed; original about:blank1 preserved.
Final3110/3111/9235/9236 listeners absent; no unknown/recycled PID was signalled,
artifact deleted, commit/push or unrelated repair performed. Ownership/cleanup files
and `final-counts-guards.json` retain exact attribution.

`pnpm build` exit0; browser primary/480/boundary/owner/native-focus/recovery checks
and source guards pass within this read-only audit. `git diff --check` exit0;
untracked validation/tasks no-index whitespace checks emit NO diagnostics (exit1 is
their expected file-difference status). References/source paths/checkbox dependencies
and documentation trailing whitespace checked. No full test/lint/typegen replay was
required solely for measurements/prose; current32-suite history is not a fresh run.

**V3-A1 completed.** Its measurable BEFORE table, full applicable role coverage,
source-attributed cause classification/protected exceptions, readable native baseline
and bounded conditional A2 rationale are present. No new app regression was introduced
or requirement waiver made; diagnostic mistakes are explicitly excluded/reconciled.
Only A1's checkbox is finalized. A2, V3-3/4/5 and T10 remain unchecked; final owner
acceptance/independent current-spec review are NOT supplied by this audit. STOP here.

## V3-A1 in progress — measured width/interior audit, 2026-10-13

Later checkpoint (supersedes first-checkpoint counts, not task completion): production
has280 valid primary layout rows and56 separately counted480 supplements. Matching
development non-Home rows remain valid; Home pose/capture supplementation is pending.
Fresh unchanged-source `pnpm build` exited0; production build/runtime are newly owned.
Production additionally has20 owner native-tile sets,24 actual48rem/64rem/96rem
boundary presentations (Home/global404), eight trusted native404→same-language
Home200 recoveries and four320/default24 menu-focus sequences (six controls each,
Escape restores trigger). Source masks were rasterized from the ACTUAL original SVG
inside Chrome, not a substitute fixture: opaque bbox0–615 ×0–699 in1000×700 canvas;
all owner/boundary upright label-corner alpha samples255. Separate reduced-motion
tile pose is explicitly labelled and source layout probe precedes that media change.

Further external capture limitation: checking active item0 alone did not establish
the pending native smooth operation had finished before scrolling it offscreen.
Those Home records were renamed `invalid-unsettled-*`; replacement rows wait for
the actual centered item0 and unchanged native offset before scrolling. Two early
attempts with an exact single-sample offset comparison were invalid; bounded external
condition polling was added, not a production settlement-policy change. Subsequent
replacement production rows are complete. Full-page captureBeyondViewport images
can still change carousel rendering/pose during capture (observed caption03 versus
pre-capture item0 and overlaid card ink); they are NOT authoritative carousel paint/
pose proof. Fresh ordinary viewport tiles retain identical viewport/scroll/active
item/offset before and after every shot and show item0 cleanly. Their reduced-motion
supplement is separate from the primary normal-motion/manual-Pause layout rows.

MCP resize requested1440 but measured1026×772, so that screenshot is qualitative
only, not an exact-width condition. Production MCP console resource error is traced
to request85 `/favicon.ico`404; document request65 `/es`200. No native Runtime
exceptions in valid layout rows. Existing favicon finding remains outside scope.
Native320/default24 Selected tile also shows existing card title/placeholder-label
overlap; carousel sources are protected and unchanged. This audit reports it without
redesigning card typography, treating it as an alignment exception, or claiming RF-11/
RNF-2 freshly conforming. Coordinator should retain this separate baseline concern.

ONLY V3-A1 delegated; latest RF-7/RF-15 requirements and separate joint planning
approvals read, V3-1/2 checked, A1 unchecked. No application/test/spec/plan/MEMORY/
AGENTS/constitution edit. No A2/3/4/5 work or new requirement-conformity claim.

Recovery: `/tmp/opencode` was empty at entry; the requested alignment evidence
directory did not exist and validation.md contained no previous A1 measurements.
Historical source-attributed records are retained, not credited as RF-15 proof.
Existing tracked/untracked user work was inventoried without modification.
Fresh evidence directory E=`/tmp/opencode/spec003-v3-alignment-baseline/` contains
`entry-hashes.json`, `entry-status.txt`, `entry.diff`, native probe/driver and logs.
Node24.21.0/pnpm12.4.1; app ports3110/3111, Chrome9235/9236 and Next locks absent
at entry. Root/installed lock SHA256 differs (known; no install/repair performed).
Owned dev3110 and two isolated native Chrome profiles were launched; their browser
default fonts are actually16/24px (Preferences), independently checked by root size
and48rem query at780px:16=true,24=false. DPR1/device metrics are asserted per cell.
Existing MCP about:blank1 is preserved; only own isolated page2 was opened.

First checkpoint:70 valid dev/en/default16 cells (seven presentations × two themes
× five widths), including opened mobile menus and top/middle/bottom header records.
Each JSON records actual viewport/clientWidth/scrollWidth, scrollbar, root/default,
queries, fonts/theme/lang, HTTP200/404 and every applicable semantic-role rectangle,
content area/reference/signed delta. Rows are BEFORE measurements, not passing
alignment claims. Native document overflow is0 in these valid cells; real scrollbar
presence changes W and inset even at the same viewport (recorded, not normalized).
At1440/default16 long Home uses L2/R1423/W1421/C1216/I102.5/rails104.5–1320.5;
short missing pages may use L2/R1438/W1436/I110/rails112–1328.

Two external harness failures excluded: malformed quoting in the loop-ready wait
produced a SyntaxError/timeout before any valid row; corrected only the selector
expression. First Home native Pause clicks were attempted below the viewport, so
the screenshot still showed Pause and manual suspension was not established.
Those ten Home records/captures were renamed `invalid-unpaused-*`, NOT credited;
replacement rows scroll the real button into view, use trusted input, assert manual
Pause and native Home logical item0 before measurement. Non-Home rows were retained.
No application fix or weaker alignment/overflow tolerance was used.

Inspected native dev/en/light390 Home full capture: complete head/side hair, full
name/role/degree, original downward upper curve/upright placeholders, integrated
lower composition and quiet footer visible. PNG width375 is scrollbar-excluded;
asserted viewport390 is distinct. Browser full-page display may be scaled by the
viewer; the saved capture is native DPR1. Audit remains incomplete; A1 checkbox
and every downstream checkbox stay unchecked until all proof is gathered.

## V3-3 BLOCKED — full bar occludes protected upper frame terminals, 2026-10-13

ONLY V3-3 delegated; latest spec and joint V3 plan/tasks approvals confirmed,
V3-1/2 checked and V3-3 unchecked. SDD loaded; systematic-debugging used for
the pixel-harness error and the newly observed terminal regression. No V3-4
event work, MEMORY/spec/plan/AGENTS/constitution edit or final acceptance.

Evidence directory: `/tmp/opencode/spec003-v3-3/` (E/). Entry dirty tree/source
hashes are retained in `entry.diff`/`entry-hashes.json`. Node24.21.0/pnpm12.4.1;
3110/3111/9234 and Next output locks absent at entry. Owned dev3110 and isolated
Chrome9234 were started; no install/cache deletion/unknown-process operation.

### Candidate and demonstrated blocking conflict

Candidate modified ONLY shell/menu CSS: outer header width100%, independent
inner control width `min(76rem, available minus gutters) + 1rem`, centered
reciprocal focus padding, panel inline0 with its own page gutters and no negative
inline margin. Authored block padding/height, events, observer and offsets unchanged.
`E/candidate-shell.css`/`candidate-menu.css` retain this NOT-approved-as-complete
candidate. Both application files were then restored BYTE-FOR-BYTE to task entry;
the candidate is NOT installed and no checkbox is completed.

The candidate passes full-width bar/control checks below but newly hides the
existing upper quarter-ellipse gold/brass terminals. Frame pseudos have z-index−1;
sticky header has z-index5. Extending its opaque paint across the full inner width
covers the portions of these inward-curving strokes that were previously visible
through the side gutters. This is a NEW related preservation regression, not the
pre-existing menu-focus problem or an invented clipping diagnosis.

Fresh native dev/en/dark1440/root16 comparison:
`E/frame-candidate.png`, `frame-background-off.png`, `frame-restored.png`.
ONE browser variable changed (header background transparent), then exactly restored.
Each14×26 upper-corner crop restores61 previously hidden terminal pixels;
candidate→restored difference bbox null at BOTH corners (`frame-pixels.json`).
`frame-diagnosis.json` retains exact frame/header/pseudo rectangles and stack values.
V3-1 matching reference `../spec003-v3-baseline/dev-en-dark-1440-16-bar-0.png`
visibly retains the terminals; candidate bar screenshot does not.

The approved table explicitly protects frame strokes/terminals, and the bar recipe
also prohibits clipped frame strokes. Retaining opaque full-inner-width header paint
therefore needs a decision about the protected decorative frame's paint order.
No frame stacking, terminal geometry, header compression, transparent bar workaround,
mask/redraw or duplicate ornament was implemented. Return this precise conflict to
coordinator for scope clarification/amendment; do not silently expand frame authority.

### Partial candidate verification — NOT final V3-3 proof

`E/dev-{en,es}-matrix.json`:336 unique development conditions (required five widths
plus480; both locales/themes/default AND root16/24; Home/About/Projects and simple/
nested404 scripts on/off).1008 top/middle/end probes have header y0 and exact inner
edge alignment0px.160 opened-menu conditions pass full panel bounds, six native Tab
control/outline checks and Escape restoration;96 native JS-off-before-visit404 cases
also reload and recover by Tab/Enter to same-language Home200. Overflow0 throughout.
Actual viewport, default-rem query, root, locale/theme and loaded-font readiness
asserted; scripts-off theme is controlled data-theme, not hydrated preference proof.

`E/pixel-results.json`:1,484,448 glyph-free native pixel samples across336 conditions
and all three phases verify opaque semantic background and continuous lower rule,
maximum channel difference1. The initial analyzer incorrectly assumed fractional
border coverage; measured native rows show Chromium snapping the1px border to the
final raster row. Only that external harness assumption was corrected; no app edit.
These passing samples do NOT excuse the independently visible terminal regression.

`E/dev-supplements.json`:80 checks including48 native page-focus/heading-anchor/
skip destinations, two320×568/root24 native menu pans (menu stays open and scrolls),
12 short-desktop native Tab controls, bounded1900px/96rem checks, print, persistence/
actual System changes and eight390-middle/1440-bottom owner captures. Dev explicit
origin `pnpm test`:32/32 pass,0 failures/skips (`dev-test.log`); repository tests not
changed, no artificial CSS/source-string test or new dependency. CSS-only candidate
used real native browser proof rather than artificial repository TDD.

Chrome DevTools MCP owned page5 inspected dark/mobile and desktop/end screenshots
(`mcp-dev-mobile.png`, `mcp-dev-desktop.png`). Requested390 resize measured500px,
so MCP mobile is qualitative only; exact native matrix supplies390 proof. Console
only reports the already documented unused page-content CSS preload warning;
that source is unchanged and unrelated to header paint. No app runtime exceptions
in retained native lists. No other-browser/physical-device/screen-reader claim.

STOP: no production build/matrix or full six-command validation is claimed. The
blocking preservation conflict prevents completion, and candidate was withdrawn.
V3-3–5/T10 remain unchecked; outside dismissal/current-route BODY-focus remain
unchanged. Final task-entry hash guards/whitespace and owned-resource cleanup are
recorded below after shutdown. Only this validation document is a persistent edit.

Cleanup/guards: owned dev442655 and isolated Chrome442748 CWD/command/start ticks
verified before pidfd SIGTERM (`E/cleanup.json`);3110/3111/9234 listeners absent.
MCP page5 closed; original about:blank page1 preserved. `E/final-guards.json`
confirms88 inventoried files unchanged, shell/menu byte-identical to task entry,
only validation.md changed. `git diff --check` exit0 (`E/whitespace.log`). No
task checkbox or protected user work changed. Temporary candidate/captures remain
evidence for coordinator, not a completed implementation or authorization to resume.

## V3-2 completed — integrated stacked lower About, 2026-10-12/13

Scope: ONLY V3-2; RF-13, RF-12 preservation, RNF-1/2/4–6. Latest requirements
and joint V3 planning approvals were read; V3-1 was checked and V3-2 pending.
SDD/systematic-debugging used the completed V3-1 causal isolation, not a guessed
blur fix. The existing dirty tree was inventoried and preserved. No markup,
header/menu/event, palette, asset, dependency, config, MEMORY or later-task edit.
T10/whole-Home owner acceptance remains absent; this is implementation evidence,
not owner acceptance or global V3 conformity.

### Source, runtime and corrective geometry

Evidence directory: `/tmp/opencode/spec003-v3-2/` (`E/` below); original matched
baseline: `/tmp/opencode/spec003-v3-baseline/` (`B/`). `E/entry-hashes.json` and
`entry.diff` identify the dirty source. Baseline About SHA256
`bc66468b203c3f5320841e0f6de123234543ef9d1ae0fcb9f23be2e8edb65c83`
matches V3-1. Final About SHA256:
`16b7cff4ae2bc69ecf63eca8e5c797498568215209c0a8e510da4330d70a2a69`.
The other88 inventoried source/public/test/document/config files matched before
this evidence/checkbox update (`E/source-guards.json`). All supplied PNG/SVG/fonts/
licenses, identity/copy, Hero, carousel/tests, upper About and desktop block survive.

Node24.21.0/pnpm12.4.1; no initial3110/3111/9234 listener or output lock. Owned
dev3110 PID430760 was started and stopped before the six checks/build. Owned
isolated native Chrome PID430853 uses ONLY `E/chrome-profile` and port9234.
Owned prod3111 PID437583 started AFTER fresh successful build
**9EO4wju3gCgAyg79Ipk1s**. `E/production-served-css.json` retains HTTP200 stylesheet
hashes and exact served/disk byte equality for this build. No simultaneous dev/build
writer, install, manual generated-artifact edit, cache deletion or unknown kill.

Only `about-preview.module.css` changes application paint. The stacked future
composition now owns one full-width media endpoint plane and ONE full-composition
surface pseudo. Its opaque mask tile covers the actual text AND grid gap; the second
tile continues that same surface through the full media canvas as the downward
horizontal ellipse. Media/placeholder content stays transparent above that paint,
upright, naturally spaced and16:10. The former independent media `::before`/4rem
cap is removed. There is no second transition box or inset-width piece.

The joint origin is composition bottom minus its actual16:10 media height. Natural
text wrapping therefore moves the opaque plane/joint without a fixed document y.
The local inline-size container gives media height62.5cqw; ellipse horizontal
radius50% of the FULL inner width. Minor permitted sizing choice: core20% and
outward extent32% of media height, retaining the original core/feather ratio
40/64=0.625 (gradient100%→160%). This produces core12.5cqw/extent20cqw, rather
than root-sized4rem. The1px opaque tile overlap avoids fractional raster joins;
the linear mask tile is SOLID under text, not a linear-fade replacement. Feathering
does not run through the entire section height or beneath essential paragraph text.

Example prod/es/dark geometry, identical in dev (CSSpx):

| Width/default/root | Text height | Gap | Whole lower height | Core / feather height |
| --- | --- | --- | --- | --- |
| 320/24/24 | 566.25 | 24 | 790.25 | 40 /64 |
| 390/16/16 | 204.78125 | 16 | 464.53125 | 48.75 /78 |
| 480/16/16 | 175.984375 | 16 | 491.984375 | 60 /96 |
| 768/24/24 | 220.75 | 24 | 724.75 | 96 /153.6 |
| 1024/24/24 | 191 | 25.6 | 856.59375 | 128 /204.8 |

Core/whole-height varies5.06%→14.94% in these naturally unequal-height sections;
core/media remains20%, feather/media32%. This is responsive joint geometry, not a
forced full-height fade or an independently fixed-height band. Neither gutters,
content dimensions, media ratio, text spacing nor text color changed.

### Attributable browser RED → GREEN and full-composition proof

Existing native V3-1 baseline bytes remain eligible because their source hash equals
the task-entry About source. `E/red/` copies the48 production condition records and
joint PNGs without overwriting B/. New external `profile-test.py` checks actual
glyph-free center pixels at the responsive core boundary, not CSS source strings:
baseline32 stacked conditions → **16 failures, exit1** (`E/red.log`); after the
change → **32/32 pass per mode, exit0**. The same test is used both times. CSS-only
work adds no artificial repository test or runner/dependency.

`E/{dev,prod}-{en,es}-baseline.json` retains48 valid Home conditions per mode,
**96 total:64 stacked +32 side-by-side**. Required320/390/768/1024/1440 plus480
supplement; en/es, light/dark, browser standard/fixed default AND root16/24, DPR1;
heights568/844/1024/768/900 as in V3-1. Viewport/root/locale/theme/scheme/loaded
fonts and actual48rem query are asserted before capture. Default24 genuinely stacks
768/1024; root-only enlargement was not substituted. Overflow0, content line/label
bounds valid, all layout rectangles match B/. The upper and side-by-side geometry
were measured preservation, not inferred from device labels.

Native viewport tiles cover the ENTIRE lower section and both bounded endpoints;
`comparisons.py` stitches96 whole-section images with no rescaling or uncovered
document rows. It excludes the sticky-header-covered rows using overlapping tiles,
not app overflow/cropping. Every condition retains raw tiles and actual scrolls.
`E/{mode}-paint-analysis.json` checks64 stacked full-width conditions collectively:

- 2,880 endpoint/quarter/center samples through the full curved blend agree with
  the elliptical alpha/composited semantic RGB model within1.621 channel levels
  (tolerance2 accounts for raster quantization). Expected and measured alpha/RGB
  profiles are retained. Endpoints start opaque; intermediate curve positions adapt
  with width/media height; all reach the media endpoint smoothly. No straight
  internal step, recessed width, detached strip or rectangular underlay is exposed.
- 39,904 actual glyph-free edge samples under text/gap equal the opaque semantic
  surface exactly: effective alpha1, no feather beneath essential paragraph text.
- Placeholder text stays entirely AFTER the feather; minimum clearance9.203125px.
  Its wrapping is visible/untruncated at320/root24. Actual ancestor opacities are1.
  Computed sRGB AA minima: paragraph5.904745:1, label5.563497:1; using actual
  quantized native media pixel background gives label5.566560:1. These are About
  results, NOT a freshly measured global contrast claim.
- 32 matched side-by-side lower crops across dev/prod have ZERO changed pixels;
  desktop clean arc, right anchor and original content ratio remain unchanged.

`E/prod-upper-guards.json` matches all eight B/390 upper records exactly; aligned
upper captures have ZERO changed pixels (`E/upper-pixels.json`). Actual painted
contour-to-heading GLYPH gaps23/34px preserve the22–35px reference. Range/em-box
gaps16.25/23.17–23.36px are separately retained and not mislabeled as glyph gaps.
Across all96 conditions upper rectangles/transform/mask and Hero dimensions match
B/. Upper side-by-side left anchor,~50.025% curve reference and24/36px required
clearance remain protected by unchanged geometry/source and aligned desktop pixels.

Whole-section owner pairs: `E/prod-{en,es}-{light,dark}-{390-16,1440-16,320-24,1024-24}-owner-pair.png`;
corresponding `-owner-closeup.png` files show the joint at native resolution.
**16 whole pairs +16 closeups**, BEFORE left/AFTER right. Paths/dimensions/tile
provenance and SHA256 are in `E/owner-comparisons.json`. Visually inspected native
views include all four390/root16 locale/theme pairs, es/light320/root24 whole pair,
en/dark1024/root24 pair, en/light480/root24, es/dark768/root24, es/dark1440/root16
and representative dev narrow/enlarged tiles. No claim of manually inspecting every
pixel of all96 images; full-matrix geometry/paint/readability checks cover all cells.
Original owner-image bytes are unavailable, so these are matched V3-1 comparisons,
not a purported pixel match to the owner's supplied image.

Chrome DevTools MCP inspected only owned pages3/4, then closed them; original
about:blank page1 remains. Dev dark/mobile request390 measured viewport500/section
484.800018; this MCP resize limitation is QUALITATIVE ONLY, not390px quantitative
proof. MCP prod/light desktop1440 measured section1421 due visible scrollbar and
was likewise qualitative; asserted native-CDP captures supply exact matrix bounds.
`mcp-dev-dark.png`/`mcp-prod-light-desktop.png` inspected. Production MCP console
has no warnings/errors. Dev had an unused page-content CSS preload warning; that
unmodified shared-page chunk is outside this local About paint scope, not a proven
new app defect or a repaired issue. All five retained Runtime.exceptionThrown lists
are empty. No physical-device/other-browser/screen-reader claim.

### Checks, preservation smoke, limitations and stop

Six exact AGENTS commands after the final CSS edit: typegen/lint/tsc/pnpm test/build/
whitespace all **exit0**, `E/check-exits.log` plus individual logs. No-origin tests:
21 unit passes +1 intentionally skipped HTTP parent, NOT HTTP proof. Fresh explicit
origin suites on owned3110/3111: **32/32 pass EACH,0 failures/0 skips**, including11
HTTP tests. No repository tests changed. `E/focus-smoke.json`:48 fresh production
native Tab-to-Read-more conditions with visible uncut outline below sticky header;
four native JS-OFF-before-visit nested en/es404 cases at320/default24 recover with
Tab/Enter to same-language Home200. These are bounded preservation probes, not a
new shared-header matrix. Menu toggle/Escape/inside preferences remain valid in
matrix/guard captures. Hero16/24 supporting sizes/full identity/photo geometry and
all accepted carousel sources/tests are protected; historical full playback/global
contrast evidence is attributed, not replayed or called fresh.

Two external-harness errors were corrected WITHOUT application edits: the first
readability assertion incorrectly required side-by-side text to end before media y;
the first paint analyzer treated `color(srgb ...)` as0–255 instead of0–1. Those
interrupted runs were invalid, not app regressions; complete corrected batches and
analyses above pass. No newly failing mandatory validation remains.

V3-1's narrow header paint and absent outside listener remain intentionally unchanged
and visible in full-page captures: V3-3/V3-4 are separate pending tasks. Existing
current-route menu→BODY focus/global light inactive-label issue remains out of scope;
no global accessibility/visual conformity or final owner approval is claimed.
Only V3-2 may be checked. V3-3–5/T10 remain pending; STOP after this task.

Cleanup at2026-10-13: owned prod437583 and isolated Chrome430853 CWD/command/start
ticks reverified before pidfd SIGTERM (`E/cleanup.json`); dev had already exited143,
production exited143.3110/3111/9234 have no remaining listener. MCP lists ONLY the
preserved original about:blank page1. Final source/checkbox scope and whitespace
checked; evidence inventory/hashes retained in `E/evidence.sha256`.

## V3-1 completed diagnosis — fresh owned baseline, 2026-10-12

Scope: ONLY V3-1; RF-6/RF-13 baseline, RF-12 preservation, RNF-1/4–6.
The blocked checkpoints below remain historical. User authorization “Te autorizo”
resolved the exact portfolio3111 stop gate; no authority over unknown resources
was inferred. Spec and joint V3 plan/tasks approvals and historical dependencies
were rechecked. No application, test, dependency, asset or MEMORY edit was made.

### Runtime/source attribution and evidence inventory

Fresh pre-stop inspection at22:56 local:3111 still PID322144, CWD this repository,
`next-server (v16.3.5)`, parent8138 user systemd, Warp scope, start11:10:50,
kernel start ticks9397261. `pidfd_open` plus identity/port checks immediately before
`pidfd_send_signal(SIGTERM)` targeted that exact authorized process, avoiding PID
reuse. Its uncertain loaded build was NOT used as baseline. No cache/lock deletion,
install, environment dump or blanket port kill occurred.

Node24.21.0/pnpm12.4.1. Git HEAD a648a4a8634f05ebd3fc218ca2a1a0ad94501858 plus
the existing dirty/untracked tree, NOT HEAD alone, identifies this source baseline.
Inventories/hashes are under `/tmp/opencode/spec003-v3-baseline/` (hereafter `E/`):
`resume.diff`, `resume.sha256`, `resume-protected.sha256`, `resume-tasks.md`.
These preserve existing user work. Owned dev3110 PID421690 was started, measured,
then stopped before `pnpm build`; build exit0, log `E/build.log`. Fresh production
BUILD_ID **Q7_94cDWpgS13mNwHRVSI**, owned3111 PID427548 started AFTER build.
No concurrent dev/build writer. `E/production-served-css.json` proves the three
served production stylesheet byte arrays equal this build's disk files (HTTP200):
SHA256 4c514695cef6ba64c158ed5882b953e778d9d50947fad406bb5ec458a5e21854,
121efa59b291778de966c5a7bdf5a71e7c82c42e567480b2284c33cd1e7db468,
221af4cbaf9e7666a5f880a41f35a79069a3fcea1e79a56490a11a631d9d6631.
Dev About/shell source-map sourcesContent equal current source bytes.

Key source SHA256 (unchanged throughout diagnosis):

| Source | SHA256 |
| --- | --- |
| About CSS | bc66468b203c3f5320841e0f6de123234543ef9d1ae0fcb9f23be2e8edb65c83 |
| Shell CSS | 77d9c8f12ca497f9846f53a037241e71720cf54dac11f8936e60902069597803 |
| Menu TSX | 15dae0ee107aa87dca888bcb76697b6acabb8c6c165071255d0b55c872f33f59 |
| Menu CSS | bde6b429cad98a0cd7c3434cf610bebd332ca15ca52f95951a0a2101fdc69d1e |
| Header frame TSX | 183ca65ddb83602628d3156324061e269a9a0f8806dfcfb1ba8077112399be0e |
| Primary About SVG | 5a534debab49d3043b91ae71a667d6c83cbee5110d78bfef7652a88378f0b0e7 |

External native-CDP harnesses `E/{cdp,baseline,diagnostic,menu-red,guards}.mjs`
and `E/pixels.py` are diagnostic tools, NOT new repository tests or dependencies.
Baseline JSON `E/{dev,prod}-{en,es}-baseline.json`:48 Home conditions per mode,
96 total; required five widths plus bounded480 supplement, both locales/themes,
browser standard/fixed default16/24 AND root16/24, DPR1. Heights320→568,
390/480→844,768→1024,1024→768,1440→900. Native viewport assertions, actual
theme chooser/data-theme, loaded displayFont/bodyFont, computed scheme and48rem
query recorded; overflow0 in all96. Default24 genuinely stacks768/1024, while
1440 remains side-by-side. No full-page screenshot/rescaling or historical matrix
replay. Native scrollbars hidden in this isolated test browser only.

Captures use IDs `{mode}-{locale}-{theme}-{width}-{root}` with `-hero`,
`-lower-tile-N`, `-joint`, `-bar-0/-bar-0.5/-bar-1`, `-menu` suffixes under E/.
JSON retains every tile's actual scroll and complete section/control rectangles.
Native viewport tiles cover the ENTIRE lower section including both horizontal
limits; tall320/24 and1024/24 use two overlapping tiles. Top/middle/end header y0
in all96 cells, including page bottom. This is baseline, not V3 conformance.
Owner's original image bytes are unavailable: qualitative comparison to the relayed
feedback, NOT claimed pixel matching to the owner's screenshot.

### Cause 1 — lower MOBILE geometry is independent, not an inset width or empty seam

Fresh es/dark measurements, identical dev/prod (CSSpx, document coordinates):

| Width/root | Full section x/width; y/height | Text height | Grid gap | Media y/height | Pseudo height |
| --- | --- | --- | --- | --- | --- |
| 320/24 | 0/320;3001.0625/790.25 | 566.25 | 24 | 3591.3125/200 | 96 |
| 390/16 | 0/390;2106.8125/464.53125 | 204.78125 | 16 | 2327.59375/243.75 | 64 |
| 480/16 | 0/480;2252.640625/491.984375 | 175.984375 | 16 | 2444.625/300 | 64 |
| 768/24 | 0/768;3432.90625/724.75 | 220.75 | 24 | 3677.65625/480 | 96 |
| 1024/24 | 0/1024;3871.4375/856.59375 | 191 | 25.6 | 4088.03125/640 | 96 |

Composition/text/media all share section width. `.future` paints opaque surface
under text AND grid gap; media paints a separate16:10 rectangle. Its negative-z
`::before` alone paints surface over the media top, with50%-width ellipse core,
vertical core40px/60px and fixed64px/96px outward feather. Natural wrapping moves
media y, but neither media height nor total section height sizes that vertical
profile. At root16 it occupies32% of320px media height versus21.33% at480px;
at root24 it occupies48% at320 versus15% at1024. This is the demonstrated
independent layer/sizing relationship behind the detached/mis-sized appearance,
not evidence that section width itself is recessed or that grid gap is transparent.

Eight390 conditions per mode isolate ONE variable each: pseudo off, future paint
off, media paint off, pseudo height doubled, media ratio changed, header paint off.
`E/{dev,prod}-isolations.json`, named before/isolation/restored PNGs and
`E/pixel-evidence.json` retain actual bounds and five-column native RGB profiles.
All96 layer-isolation restorations are byte-pixel identical (RGB difference bbox
null), rectangles identical and diagnostic style removed. No persisted CSS.

Example es/dark390/16 joint, glyph-free offsets through blend; surface S=(43,59,48),
media M=(59,77,62). At x0: dy−2/0/1=S, dy16=(45,61,50), dy32=(50,67,54),
dy48=(58,76,60), dy64=M. At center x195: dy0/16/32/40=S,
dy48=(48,65,53), dy63=(58,76,61), dy64=M. Quarters/right profiles retained.
Removing pseudo gives an immediate S→M straight step; removing future paint
reveals background(24,35,30) BEFORE joint but leaves pseudo's S over media;
removing media paint collapses blend toward S. Doubling pseudo BOX height to128
does NOT change its40px core or64px mask fade profile. Changing media ratio alone
changes243.75→195 height while pseudo remains64/core40. Thus simply enlarging
the band box cannot integrate its curve. Baseline top-row continuity is real;
V2 seam-only success is NOT whole-section integration. No new one-pixel top seam
or square desktop defect was inferred from this owner feedback.

Bounded rationale for V3-2, not implementation: retain content/16:10/upright label
and semantic endpoints; give text/gap plus preserved downward ellipse one local
composition-referenced paint plane, origin following actual media joint, core/fade
derived from available joint/media geometry. Keep full inner width and independent
readable content. No arbitrary blur/height-only fix, deep fade under text, SVG change,
straight replacement or upper/desktop redesign. Exact responsive sizing must be
verified by V3-2; this task does not claim a corrected appearance.

### Cause 2 — narrow sticky paint and reciprocal panel offsets

Opaque background/bottom border belong to the narrower `.header`, sharing main's
76rem/gutter rule. Inner frame vs bar x endpoints:390/16 [0,390] vs [20,370];
320/24 [0,320] vs [30,290];1024/24 [0,1024] vs [51.203125,972.796875];
1440/16 [2,1438] vs [112,1328]. These exceed1px by20/30/51.203125/110px
per side. Sticky y remains0 at top/middle/end: persistence itself is not the cause.
At es/dark390 middle scroll, row89 x1/18/372/388 shows underlying S, x22/368
opaque background(24,35,30). Border row90 x22/195/368=(72,85,72), while outer
samples remain S. Header paint-off reveals underlying section inside its narrow box.
The full-canvas baseline pictures visibly show the recessed surface/border.

320/24 header x30..290, h135.390625; inner wrapper x18..302 from−0.5rem margins.
Absolute panel's containing block is header; panel x18..302, y134.390625,
h420.609375, bottom555 on568px screen. Actual native Tab reaches Home/About/
Projects/EN/ES/select; focused select x30..166,y464.390625..530.390625 after
panel scroll30, outline3+offset4 safely inside. Baseline control clipping reported
by owner was NOT reproduced in these measured cells; initial icon screenshots
also caught the existing180ms toggle animation, not a permanent clipped icon.

One-variable full-width-only diagnostic (NOT proposed final CSS) moves header to
x0..320, unchanged height, but existing reciprocal offsets make panel x−12..332,
width344; the toggle focus ring reaches beyond the viewport. PNG and
`E/prod-width-probe.json` demonstrate why bar expansion must reconcile wrapper/
panel gutters instead of blindly inheriting them. Settled production before/restored
PNGs are pixel-identical. First dev width comparison was INVALID for exact pixels:
difference bbox(260,56,290,79), localized to the still-animating icon; bounds were
restored. A bounded repeat after the authored transition settled supplied valid
production restoration, not an application animation change.

V3-3 rationale: outer sticky header paints full inner frame, separate inner group
retains existing control width/gutters/padding/height; reconcile negative margins
and panel containing width with its own focus gutters/native short-screen scrolling.
Existing ResizeObserver stays. No demonstrated need for TSX wrapper/observer/global
changes: do not exercise those conditional permissions without further evidence.

### Cause 3 — absent outside behavior, trusted RED before any handler

Actual menu source has trigger ref/state, toggle click, menu-root Escape and panel
anchor closure ONLY; no document outside listener or panel ref. There is no existing
whole-header containment handler to blame. `E/{dev,prod}-menu-red.json` records16
mobile conditions per mode (en/es×light/dark×320/390×16/24), each with four trusted
completed RED cases: uncovered header and uncovered page × mouse click/touch tap.
**128 completed outside actions total leave aria-expanded=true; expected=false.**
Native CDP Input supplies contact/release; observational passive capture/bubble
logs retain isTrusted=true, target/composedPath, panel/toggle containment and phases.
Each RED has exactly one trusted click outside BOTH actual panel/toggle. No
synthetic `.click()`/dispatched pointer event is used as behavioral proof.

Example prod/es/dark390/16: header(195,24) hits headerContent DIV, pointerdown→
pointerup→click; touch adds touchstart/end before click. Page(2,814) hits uncovered
Hero/Selected Work section at its recorded scroll. Menu remains open. Native focus
varies (header can move panel-link focus to BODY; page can focus MAIN), retained
per action rather than assuming every outside action should focus toggle.
32 inside-panel taps remain open;32 vertical native pans actually increase page
scroll, emit pointercancel/touchmove/end and NO click;32 touchCancel contacts produce
NO completed click/closure.32 Escape probes close and focus BUTTON. Observer
listeners/globals removed after each cell. Separate native production preference
ArrowUp/Tab keeps menu open, toggle Enter closes (`E/inside-preference-toggle.json`).
No body lock/preventDefault/event consumption. Current-route→BODY defect not repaired.

This supplies V3-4's attributable RED boundary, NOT its GREEN or all-page/action/
focus lifecycle acceptance. Rationale remains approved completed document click
listener while open against actual panel/toggle refs; preserve outside action and
native focus, fallback only if closure would strand focus. No evidence here warrants
pointerdown dismissal or extra gesture policy; pan/cancel do not generate clicks.

### Preservation, limitations, validation and closure

All src/public/tests/docs/spec bytes match resume inventory before this evidence
update; protected AGENTS/MEMORY/package/lock/config hashes pass. PNG/SVG/fonts/
licenses and accepted carousel source/tests unchanged. Hero records full approved
name, unchanged role/degree,16/24px supporting sizes in all96; native photographs
at320/390/480/768/1024/1440 normal size were visually inspected with full top/side
hair intact. No new portrait acceptance. Upper guard8 production390 captures retain
original rotated contour/upright placeholder: personal width390,height342.890625,
DOM grid separation16/24, transform/mask recorded in `E/prod-upper-guards.json`.
DOM spacing is NOT relabelled as painted-contour-to-glyph22–35px; that historical
reference/source remains protected.1440/16 desktop lower inner bounds2..1438,
media x720,width718,h448.75; whole view retains clean arc/no square underlay.

Chrome DevTools MCP created/inspected ONLY its isolated page2, checked production
console and closed it; existing about:blank page1 preserved. MCP390 capture had
actual section375.200012px (scrollbar/subpixel tool conditions): qualitative ONLY,
INVALID for≤1px/full390 geometry. Native-CDP assertions/PNG samples above supply
quantitative proof. All native Runtime.exceptionThrown logs empty. MCP console
has one pre-existing favicon.ico404 (confirmed network URL); no source favicon
exists, no code edit in this task and unrelated to these three causes. Root/installed
lock discrepancy remains previously recorded/unrepaired; build passed, no install.

`pnpm build` exit0; baseline dev en/es, prod en/es, both isolation/menu batches,
upper/served-CSS/control supplement exit0. Pixel analysis exit0 after recording the
invalid first width comparison and settled repeat. Source/protected guards and
`git diff --check` pass. No lint/typegen/standalone tsc/unit or HTTP test replay:
documentation/diagnosis only; historical32/32 is NOT claimed freshly executed.
Build ran solely to establish a fresh attributable production baseline.

Evidence resides in temporary E/; `E/evidence.sha256` covers captures/JSON/scripts/
logs, not permanent repository assets. Critical retained reference SHA256:

| File relative to E/ | SHA256 |
| --- | --- |
| prod-es-dark-390-16-lower-tile-0.png | 123f9c6dbb80ed1b588d14f25633f87bfed280c4a4b78e3adb9e023cfafb00b8 |
| prod-es-dark-320-24-lower-tile-0.png | 948e43b504d22105e127d543ecb4b5e2fb44b740caa876e16d91f405b562b6e4 |
| prod-es-dark-320-24-lower-tile-1.png | 623cc8aa4697e29a69e27a25a26ab53a4b355539aa3471faee88c0384eb82a69 |
| prod-es-light-1440-16-lower-tile-0.png | a72139cea6124ef21c0d3eb317945da0a9f2ebf2e9cac578e9977d9ba81ccd28 |
| prod-width-restored.png | 4298c36f17acdcfb0dd40f759bd59e95a09177ea2cad1aa9766edcd2f6f905cc |
| prod-menu-red.json | e050f518eb19778f40e456290d7237d01caa3fb6d3f7ace9e188600e59cf0c6c |
| pixel-evidence.json | 0f51f4259daf819f075d7e8ecc49231ffbe0adf75e527004287010e1db3c0369 |

Owned production PID427548 parent427547 command `next start --port3111` identity/
CWD/port verified before pidfd SIGTERM; isolated Chrome421807 profile/port verified
before termination. At23:24 local3110/3111/9234 have no listener. Owned dev exited143
after graceful signal; production exited143 likewise. No user browser resource closed.
No runtime/output ownership blocker remains. Original owner-image bytes and exact
reported baseline clipping remain unavailable/unreproduced, not invented proof.
Three causes and bounded correction rationale established; ONLY V3-1 completes.
V3-2–5 and T10 remain pending. STOP: no corrective application changes performed.

## V3-1 blocked preflight — existing production runtime ownership

### Read-only ownership clarification — 2026-10-12 22:46–22:48 local

Explicitly delegated inventory ONLY; no runtime started/stopped or app checks run.
Fresh3111 listener still maps to PID322144, user jorge, repository CWD, Node24.21.0
executable, start2026-10-12 11:10:50; final reinspection records kernel start ticks
9397261. Parent8138 is user systemd. Cgroup is the Warp terminal scope
`app-gnome-dev.warp.Warp-28054.scope`: portfolio/terminal provenance is established,
but human versus earlier validation launch ownership remains UNKNOWN. No matching
PID/build attribution was found in the bounded temporary evidence-log search.
No3000/3110 listener or Next dev/build writer found; `.next/lock` and
`.next/dev/lock` are absent. No environment/secrets or terminal-history dump used.

Disk BUILD_ID remains Dy3RTCHQvabQ2MsAoAIeo, SHA256
4fac9eaba43c46090e6fe1aeb4e49fa2c8bc413b0901b911a80af45b4d38d9d4.
Its11:58 mtime follows the live process's11:10 start: it cannot identify the loaded
runtime. No HTTP/UI baseline or production source-conformity claim is made.

Installed Next16.3.5 `server/config.js:1245–1249` explicitly changes development
distDir from `.next` to `.next/dev`; setup-dev-bundler derives its lock/output from
that directory. Thus3110 dev compilation has a distinct output/lock namespace from
production `.next`; the occupied production port alone is NOT evidence of a dev
output collision. Dev is not completely filesystem-isolated: normal framework
TypeScript setup can update root next-env.d.ts/tsconfig; next-env already references
`.next/dev/types`. No manual generated-file edit or automatic cache repair is proposed.

Safe continuation OPTION for coordinator: explicitly authorize dev-only V3-1 on
free3110, leaving3111 untouched, with production-output guards and NO build/typegen/
production restart. This needs reconciliation of the plan's sequential-runtime
preflight, not a product decision. Alternatively obtain attribution/read-only source
proof for3111, or exact verified-process stop permission with fresh identity checks.
None of these options was executed. Only this evidence supplement changed;
V3-1/T10 remain unchecked. STOP after inventory.

Date:2026-10-12. ONLY V3-1 delegated. Loaded SDD and systematic-debugging;
read AGENTS, MEMORY, constitution, complete current003 spec/plan/tasks/validation,
About component/CSS, shared header/frame/shell/globals, menu events/CSS and relevant
navigation, document roots, identity/Hero sources. Latest requirements approval
“lo apruebo” and separate joint V3 planning approval “Lo apruebo” are recorded.
Historical dependencies are checked; V3-1–5 and T10 remain unchecked.

**STOP before runtime diagnosis.** Fresh `ss`/`ps`/`/proc` inventory finds an existing
production listener on127.0.0.1:3111, PID322144, `next-server (v16.3.5)`, started
2026-10-12 11:10:50 local time. Its CWD is this repository, but its parent is user
systemd PID8138, not a CLI launched by this task. Its original3111 command/resource
ownership is not established. No3000/3110/9234 listener or Next dev/build writer
was found. Free3110 alone does not authorize breaking the approved sequential
runtime/output preflight. No process was signalled and no server/build/typegen
writer, browser target or diagnostic instrumentation was started.

Current disk `.next/BUILD_ID` is **Dy3RTCHQvabQ2MsAoAIeo**, mtime2026-10-12 11:58,
not the recorded V2-5 build **W870wo5WESNBNXzpq2QyP**. This identifies disk output
ONLY: it does not establish the live server's loaded build, compiled-source identity
or a source regression. A confirmed source-attributed existing server could supply
read-only baseline under the plan, but that confirmation is absent here. Coordinator
must resolve existing runtime/output ownership and source attribution before
continuation; no old process-stop permission or automatic output repair is reused.

Node24.21.0/pnpm12.4.1 satisfy AGENTS. Extensive pre-existing tracked/untracked work
is preserved. Entry status/binary diff, full source/public/test/doc/spec SHA256
inventory and protected-file hashes are retained under
`/tmp/opencode/spec003-v3-baseline/`. Fresh local identities match the V2 final
tables: About CSS `bc66468b203c3f5320841e0f6de123234543ef9d1ae0fcb9f23be2e8edb65c83`,
shell CSS `77d9c8f12ca497f9846f53a037241e71720cf54dac11f8936e60902069597803`,
header frame `183ca65ddb83602628d3156324061e269a9a0f8806dfcfb1ba8077112399be0e`,
menu CSS `bde6b429cad98a0cd7c3434cf610bebd332ca15ca52f95951a0a2101fdc69d1e`,
globals `840e62e184f681d5fe9877d02c613eb2f891b31097e61a9e1dd44065de34cc41`.
Menu events hash `15dae0ee107aa87dca888bcb76697b6acabb8c6c165071255d0b55c872f33f59`.
Source inspection confirms no document outside listener exists; only toggle,
menu-root Escape and panel anchor closure are implemented. This is a source
observation, NOT trusted outside-click/touch RED or completed causal browser proof.

Root/installed lock hashes retain the documented discrepancy (`45e6a0e9…` versus
`9e2481d5…`); no corruption is inferred and no install/lock repair performed.
No app/test/asset/config/AGENTS/MEMORY/spec/plan/constitution edit. No tests created
or modified; no artificial TDD for preflight documentation. `git diff --check`
passed before this evidence edit; closure guards/whitespace are checked separately.
Six application commands/origin suites were NOT executed, and old32/32 passes are
not new V3-1 proof. Chrome DevTools/native-CDP capabilities were not exercised after
the ownership STOP; no unavailability is asserted. Zero valid V3 baseline cells,
zero paint isolations/restorations and zero trusted menu RED records are claimed.
Owner image-byte comparisons, full-section/bar/control bounds and bounded causal
correction rationale remain pending. V3-1's done condition is NOT met; its checkbox
stays unchecked. No V3-2 or later task started; T10/global acceptance remains open.

## V2-5 completed — combined final-source validation and owner evidence

Date:2026-10-12. ONLY V2-5 delegated. Latest spec and joint V2 plan/tasks approval
verified; V2-1–4 checked, V2-5/T10 pending at entry. SDD loaded; AGENTS, constitution,
MEMORY, approved documents, current validation and affected sources read. Existing
tracked/untracked work preserved. **No application, test, asset, dependency, config,
routing or MEMORY change** was needed. Only this evidence and V2-5's checkbox change.
No new production logic: TDD is not applicable to this validation/documentation task.
Temporary native browser harnesses are not new project tests or a new runner.

Evidence **E5**: `/tmp/opencode/spec003-v2-final/`. Entry binary diff, complete
source/public/test SHA256 inventory, protected-document/config hashes, bounded logs,
individual condition records, pixel results, owner-capture metadata and summary
persist there. Node24.21.0/pnpm12.4.1. Own sequential dev3110/prod3111, native Chrome
9233/E5 profile and isolated MCP page3; user page1 about:blank untouched. No install,
lock/cache/output deletion, generated-file edit or unknown-process termination.

### Commands, source identity and explicitly attributed reuse

All **six exact AGENTS commands newly executed, exit0**: `pnpm exec next typegen`,
`pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`, `git diff --check`.
E5/checks.txt and individual logs retain results. Default tests:21 unit passes,
11 HTTP skips, NOT HTTP proof. Newly executed explicit-origin commands:
`LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test` and3111 equivalent:
**32/32 EACH mode, zero skips/failures** (21 unit+11 HTTP). Plan's historical31
count predates the approved V2-3 identity regression; tests were not changed here.
Fresh production **BUILD_ID W870wo5WESNBNXzpq2QyP**; build follows stopped own dev.

Reuse is intentional, not relabelled execution. `reuse-source-proof.json` verifies
all71 source/public/test identities against E4's entry inventory plus its FOUR final
hashes; every source matches the final V2-4 implementation. Other tracked binary
diff sections match E4 entry, except the coordinator's already-present MEMORY status
update. E5 entry/final guards prove that update and all unknown work stayed untouched
within this task. Package/config/routing/provider/assets remain identical too.
Retained final E4 production build **sEY05fCjiOSToxkdbhI1g** is separately attributed;
it is NOT the newly executed E5 build. Same-source browser results remain valid as
authorized by the handoff; current combined Home evidence is nevertheless NEW after
the last navigation CSS/wrapper change, not old Hero/About screenshots.

| Unique presentation conditions, EACH mode | New E5 | Reused final E4 | Total |
| --- | ---: | ---: | ---: |
| Combined Home Hero/About |40|0|40|
| Shared About/Projects |0|80|80|
| Simple/nested en/es404, scripts ON, direct/reload/native recovery |80|0|80|
| Simple/nested en/es404, scripts OFF before direct/reload/native recovery |0|80|80|
| **Required matrix** |**120**|**160**|**280**|

Thus560 unique presentation conditions overall:240 NEW and320 source-identical
REUSED. Hero and About harnesses each measure the same40 Home conditions per mode;
they are combined, NOT counted as80 Home conditions. E4's overlapping Home/nested-on
cells and additional groups are preservation supplements, NOT added to280.

All matrix cells cover en/es×light/dark×320/390/768/1024/1440, respective heights
568/844/1024/768/900, actual browser default AND explicit root16/24. Viewport/root,
language, chooser/scheme, loaded local fonts and actual48rem composition asserted.
768/1024 stack at default24, not16;1440 remains side-by-side. New Home captures use
native hidden-scrollbar presentation MATCHED to V2 baseline, without CSS overflow
clipping; BOTH document/body scrollWidth−clientWidth remain0. Retained E4 standard
scrollbar matrix independently measures native overflow0. No MCP scaling exception
is silently credited as a valid cell.

New IDs: E5/{mode}-{locale}-matrix.json (Hero), {mode}-{locale}-baseline.json (About,
IDs retain `v2-after` solely as harness keys), {mode}-{locale}-on404.json (scripts ON).
Retained IDs/conditions: E4/{mode}-{locale}-matrix.json filtered to About/Projects,
and E4/{mode}-native404.json. Per-cell geometry/capture metadata and current summaries
survive raw screenshot loss through this record; temporary files remain volatile.

### Current combined geometry, paint, identity and contrast

- All80 new Home conditions show complete approved public identity, preserved JR,
  localized Developer role/degree and reading order, coherent existing alt/header/
  footer uses, unchanged copy/metadata. Every name word has ONE visible Range
  rectangle inside the viewport, no split/truncation. Heading44–122.88px, always
  more than twice supporting size; role AND degree exactly16/24px. Footer wraps
  naturally; no footer redesign or new personal claim. Hero/footer used text-pair
  minimum **6.224551605048391:1** (rounded6.225), not an asserted global minimum.
- Actual photo bounding dimensions match corresponding V2-2 references within0.01px
  under matched scrollbar conditions, computed ratio1122/1402 within0.001, contain
  fit unchanged. Supplied full-head source and four labelled20-condition head sheets
  were inspected, with additional native full-size references: top/side hair intact,
  no shrinking/distortion. T5's five mask-intersection spans208.746/263.886/295.532/
  399.399/448.125px remain ATTRIBUTED unchanged-fit evidence, not newly measured
  silhouette intersections or a fresh replay of portrait widening.
- **48 stacked conditions** have actual paint-to-heading ink gaps **22–35px**,
  strictly smaller than EVERY matched baseline **198–598px**. This execution's
  integer raster extrema differ by≤1px from the earlier22–36 summary; it is not
  a new gap target. Measurement samples the lowest actually painted original
  profile and first heading ink, not transparent canvas or a line-height gap.
- Full original clockwise90° contour reconstructed from native screenshot tiles
  below the persistent header and compared with the unchanged SVG's uniformly
  rotated raster: **0 missing/0 extra interior profile pixels**,1px antialiasing
  neighborhood. Upright placeholder line samples all inside opaque mask, minAlpha255.
  Decorative complete canvas remains independent of compact occupied flow height.
- Lower-mobile join samples at eight positions including BOTH outer endpoints:
  **join RGB discontinuity0**, largest adjacent native feather step **2 levels**,
  excluding measured upright placeholder glyph pixels. Rounded outward feather
  retained; no pre-feather internal line. `pixel-results.json` retains RGB profiles.
- **32 side-by-side conditions** preserve local About widths/heights/anchors; global
  y naturally follows the taller Hero. Both anchors0px; mid-height boundary reference
  **50.0237–50.0244%**. Actual full-path maximum-to-text clearance **24.4726–36.8848px**,
  meeting24/36 minima. Approximate51.7% reservation is not the exact path maximum.
  **1316 desktop arc paint samples**, across ends/middle/boundary, match the already
  corrected V2 baseline within3 RGB levels/1px sampling tolerance; no rectangular
  underlay reappears. Native lower-desktop views inspected in both themes.
- Used About text-pair minimum **5.566559621757743:1**, all ancestors opacity1/filter
  none; new link focus has visible3px outline and successful hit test in all80.
  Unchanged dark global/ancestor-composited carousel proof **4.7149:1** is explicitly
  REUSED from T2/T9 current-source evidence, including0.9 inactive opacity; not a
  newly performed global AA audit. Light0.72, six dark roles, all print colors,
  gold/brass frame2px/96rem/64rem, shadows/fonts/licenses/assets remain protected.
  Existing light inactive-label contrast≈3.53 is NOT falsely included as passing AA.

### Sticky, native recovery, themes and accepted playback

New160 scripts-ON404 conditions record direct/reload statuses[404,404], one main,
requested lang/localized explanation, matching native Home href, loaded fonts/theme,
overflow[0,0], header top0 at top/middle/end,3px focused recovery outline wholly below
header, and native Tab/Enter **same-language Home200**. Retained160 scripts-OFF
conditions disable BEFORE visits/reloads, use no in-page timer for waits, exercise
unhydrated shared height fallback and native recovery; no hydrated-only inference.

REUSED final E4 shared proof covers ALL roots/pages/conditions at start/middle/end,
header top0,90.59375–159.390625px bands, main-outline clearance≥8px and first page-focus
clearance≥15.140625px. Full-Home native Tab, real heading fragments and all stable
page controls stay unobscured; ordinary taller content is scrollable.320×568/default24
menu Tab scroll30px and native touch48px make every link/preference reachable; Escape
restores trigger, then native page touch225px. Short desktop wrap134px at768×200 leaves
66px page strip; all seven controls/outlines accessible. Shared wrapper keeps JR ring
unclipped without new events/observer/listener, modal/trap or height compression.
E4 per-mode4 interaction groups+8 anchor/System/touch groups+8 on404/AA supplements
are REUSED separately; production16 hit-test/two client-history groups also reused.

NEW E5 per mode:12 theme/locale/reduced-motion/native404 guard records,6 accepted
smooth→wheel interruption races (en/es,85/95/100ms),4 native playback groups (en/es,
390/1440). Persisted dark reload/System changes/equivalent client locale route pass.
Reduced motion preserves manual End/focus and prevents advancement. Wheel's trusted
interruption cancels current native ownership at its observed fractional offset;
eligible focused autoplay resumes **32.4459–32.4729px/s** observed, within29–35 smoke
tolerance, without stale ownership/catch-up. Native hover leave/contact cancellation
resume, Pause during contact/release remains stopped, and focused Play/End work.
No automatic focus pause or playback/event change. Existing multi-contact/visibility/
superseding/empty/single safeguards remain attributed source-identical tests/earlier
accepted browser proof, not newly replayed scenarios. All valid new browser batches
have0 Runtime exceptions; Node suites pass as above.

### Matched owner files, inspection and explicit limitations

**52 labelled native-resolution pairs** in E5/owner-pairs.json with origins/hashes;
20 current production owner-condition groups, including150% supplements. Review
mobile gap/feather FIRST; these are readable region pairs, not a tiny mixed collage:

- `owner-{en,es}-{light,dark}-{390-16,320-24,768-24}-{gap,feather}-pair.png`;
- `owner-{en,es}-{light,dark}-{390-16,1440-16,320-24}-hero-pair.png`;
- `owner-{en,es}-{light,dark}-{390,1440}-16-{nav-mid,nav-bottom}-pair.png`.

Before pixels are retained V2-1 screenshots for About/Hero and V2-3 native end-of-page
screenshots for bottom nav, never a reverted/simulated app. Gap crops stitch ONLY
existing raw screenshot tiles at recorded document offsets, with100% pixel coverage;
each tile/source offset is logged. Feather detail uses identical media-relative
native crop,−32px through4rem+64px below join. Mid-nav pairs align to About start−40px
in both versions (a genuinely scrolled middle Home region, NOT a claimed old50% scroll
capture); bottom pairs use native document end. E4's start/50%/end captures provide
the exact fractional-scroll preservation supplement. All final AFTER images are
NEW from the full final code, including persistent header, not reused old photos.

Separate large readable `owner-*-identity-after.png`, `upper/lower-after.png` and
raw matrix complete-profile captures show full introduction, upright placeholder,
entire contour, preserved desktop arc and footer/depth/frame. Actual newly stacked
768/1024/default24 references are available. An attempted1024/24 before-pixel stitch
had an uncovered interval and was EXCLUDED, not padded/invented; its fresh AFTER
references and all matched scalar/pixel matrix proof remain available. Before files
for the listed52 completed pairs survive and have logged provenance.

Inspected current mobile light/dark gap and feather pairs; upper390,768/24 gap;
Hero1440/320/24 identity, desktop lower dark/native light end, desktop mid/end and
mobile end nav; four head sheets/source and representative native photo details.
Not every screenshot was manually read. MCP additionally inspected dev Spanish
dark390 upper/light390 lower and production English dark1440 Hero/390 root-only24
identity. Resize-only MCP initially yielded500px, EXCLUDED until viewport emulation
asserted390. Actual-default enlargement is established by native CDP, not that
root-only MCP supplement. Dev has the pre-existing unchanged page-content CSS
preload warning; no Runtime/hydration exception. Last production MCP console has
no warnings/errors before intentional server stop.

Other excluded harness attempts: initial Hero comparison mixed classic versus hidden
scrollbar widths; matched native scrollbar UI restored comparability, with actual
document/body overflow checks retained. Pixel search initially missed the integer
row immediately BEFORE180px, corrected using the real painted extremum below the
header. Touch release moves native focus to UL; initial second Enter wrongly targeted
UL, not Play. Recorded release state proves this; explicitly refocusing the existing
button gives passing manual-priority/Play checks. No app correction/waived check.
Pillow emits external-analysis deprecation warnings, not app failures.

Pre-existing findings remain: current mobile link closure→BODY (E4 current-source
reproduction), light inactive label≈3.53 contrast, root/installed lock discrepancy,
brand/control identification and query/fragment concerns. Fresh MCP1440 scaling
also reproduces **1px overflow**, used frame border1.6px versus unchanged inset−2px,
matching E4's causal isolate/restore record. This MCP view is **NOT a passing matrix
cell**; native controlled matrices really measure0, no hidden-overflow assumption or
all-zoom claim. These unchanged out-of-scope findings were not repaired. No new
related application regression was detected; no physical device/other browser/
screen-reader conformance or whole-Home visual acceptance is claimed.

### Scope guards and cleanup

E5 entry/final source guards and binary diff comparison PASS. Hero CSS SHA256
`ec314de3e72a0533c22203de803d9338266b799193b7ef7de1594ce4adf2c0be`;
About CSS `bc66468b203c3f5320841e0f6de123234543ef9d1ae0fcb9f23be2e8edb65c83`;
PNG `529f721fe3bb9f8fe02bbe0cad6bbedae4b88f01fc13271a83f72cf2bcd85e51`;
primary SVG `5a534debab49d3043b91ae71a667d6c83cbee5110d78bfef7652a88378f0b0e7`.
Current four navigation hashes remain the FINAL E4 table below. Untracked identity
test is inventoried, SHA256 `bdbc3bffd3feb810d3b5fdf672a4e6ac840d8d1682b1b6872c4031bbce85929b`.
Accepted carousel and all remaining source/assets/data/config/user work are identical
to E5 entry. Protected docs remain unchanged except this evidence/current checkbox;
final whitespace includes untracked documents. No new implementation decision.

Owned dev CLI299914 stopped after CWD/exact3110 command verification; prod306980
after CWD/exact3111 parent verification. Later sequential own dev311147 ran ONLY
the additional four playback smoke groups and was similarly stopped. Owned native
Chrome9233 closed with Browser.close and exited; only MCP page3 closed, page1 retained.
No3110/3111/9233 listener remains. Exit143 for own production cleanup is intentional,
not a failing check. Native capture/analysis batches are bounded and checkpointed.

V2-5's combined technical proof/evidence criterion is met: **RF-1–14; RNF-1–6 scoped
validation and review preparation**. ONLY its checkbox is completed. **T10/spec remain
OPEN**: owner current whole-Home acceptance and independent current-spec verdict
are still required. Implementer stops; no T10 execution or MEMORY update.

## V2-4 completed — persistent shared header (final proof below)

Date:2026-10-12. Approved V2 spec/plan/tasks verified; V2-1/2/3 checked,
V2-4 pending. No recovered V2-4 source changes or evidence at entry. Read AGENTS,
MEMORY, constitution, spec/plan/tasks and shared source; SDD loaded. Only V2-4
is delegated. V2-5/T10 remain pending. Evidence directory E4:
`/tmp/opencode/spec003-v2-4/`, entry binary diff and source/public/tests SHA256
inventory preserve existing user work. Node24.21.0/pnpm12.4.1; no app listeners
at entry. Owned dev3110 and native Chrome9232 started normally; no install,
output/cache deletion, lock repair, unknown kill or generated-file edit.

Chrome DevTools MCP is available in this execution (unlike the prior handoff's
possible limitation); page1 about:blank preserved, own isolated page2 used.
Native CDP supplements actual browser-default font sizes and keyboard/script
control. No new application logic/test framework; CSS visual proof, not dummy
source assertions. MCP baseline.json records relative header leaving the viewport
on scroll before edits.

Application delta currently ONLY shell CSS, menu CSS and globals.css. In-flow
sticky top0/z5, opaque existing semantic background, original bounded width/
padding/logo unchanged; native viewport-capped mobile overlay and desktop header
scroll cap leaving2.75rem page strip. Shared rem fallback before hydration/off,
root scroll padding and outline target margins; print restores in-flow relative.
Native oversized carousel-focus probe demonstrated Chromium centers its456px
focus region at123.27px under135.39px header at320×568/default24. A separately
scoped page-focus margin moves its top to191.27px, clear of header; fragment main
retains root offset plus only outline margin. Tall focus regions need ordinary
page scrolling, not carousel resizing. No carousel source/event/style change.

Completed current-source dev English80 shared cells: themes×five widths×actual
default/root16/24×Home/About/Projects/nested404. Every cell checks viewport/root/
locale/theme/fonts/composition/overflow0, header top≈0 at top/middle/end, native
skip→main unobscured, next native focus clear, and six mobile panel controls by
Tab plus Escape→trigger. `dev-en-matrix.json`/individual JSON and log retain
actual geometry; zero Runtime exceptions. This80 count is scoped V2-4 proof,
NOT the280-cell V2-5 combined matrix. Remaining Spanish/prod/native scripts-off/
interactions/captures/six checks are not yet credited; checkbox stays unchecked.

Excluded harness failures: Enter without carriage-return text did not activate
the native button (fixed only external CDP helper); generic data-open selector
could select the decorative icon (replaced by actual aria-controls panel). The
oversized-focus obstruction was a real related failure and caused the bounded
global focus-margin correction above. Original failing logs were overwritten;
failure details/values remain here, not claimed as passing records.

### Final-source development checkpoint

The bounded desktop wrap probe at768×200/default16/root24 exposed a second real
related obstruction: centered tall nav started−17.5px in the capped header and
could not scroll to its first links. `align-items:safe center` on desktop keeps
normal centering but starts an overflowing child at its authored padding. Native
focus then sees JR24–110.39px/main24–90px/preferences33–99px inside134px header;
header scrollTop reaches105, leaving66px page strip. Evidence short-before.log/
short-after.log. This final CSS delta was followed by refreshed final-source
English80+Spanish80 cells (not counted twice):160 shared dev cells PASS, zero
exceptions. Final-source80 native scripts-off simple/nested404 cells PASS: direct
and reload responses404, no measured height/script hydration, shared native
fallback/skip/focus and Tab→Enter same-locale Home200, all widths/themes/root sizes.
Final-source explicit dev-origin suite32/32, zero skips/failures.

Four dev interaction groups (en/es×light/dark) PASS: native menu Projects link,
equivalent locale Projects, stored theme reload, expected pre-existing current-link
BODY focus, short desktop seven-control Tab visibility/native scroll, reduced-motion
sticky access and print relative restoration.24 viewport captures cover390/1440,
both locales/themes, top/middle/end. MCP inspected Spanish dark390 scrolled About:
visible JR/menu, readable downward contour/heading/link, no new overlay on text.
Owner captures are actual viewport PNGs, not a small collage or whole-page scaling.
Six mandatory commands/production remain pending at this checkpoint.

### Mandatory commands checkpoint

After the final meaningful CSS change and completed refreshed dev browser checks,
owned dev CLI270017 was verified by repository CWD/exact3110 command, then sent
SIGTERM;3110 listener disappeared. No unknown process was signalled. Six exact
AGENTS commands all exit0 (E4/checks.txt and separate command logs): typegen,
lint, tsc --noEmit, pnpm test, production build, git diff --check. Default test
suite21 unit passes/11 HTTP skips; actual dev-origin32 passes/no skips above,
not conflated with default runner. Production runtime started normally on3111
after that fresh build. Native Chrome9232 remains owned for bounded prod checks.

### Outline clearance supplement — supersedes the previous final-source label

First production build `jsUQZBqXFcu52jlGGEqHF` passed160 shared/80 native-off cells,
four interaction groups and32/32 origin tests. Visual review then checked the MAIN
outline specifically at scroll origin: its top matched header bottom exactly,
so the outward7px outline clearance was not fully visible. The earlier checks
credited target content geometry, not this outline. This does not pass V2-4 yet.
Bounded shared header sizing adds only0.5rem block-end margin for that outline;
scrolling cannot create room above main at document origin. It is NOT a second
header-height spacer, height/padding compression or main/composition edit. Print
resets that margin to0. Header height observation/fallback remain unchanged.
Native assertions now require main top≥header bottom+7; dev/prod and mandatory
checks must be refreshed after this last meaningful source delta. Previous build
and captures above are pre-clearance, not current final-source proof. Own first
production PID281964 closed after exact parent3111/CWD/listener ownership check;
new owned dev3110 started normally. All other sources remain protected.

### Post-clearance development checkpoint

Current sources pass refreshed160 shared cells and80 native-off404 cells with
strengthened main-outline clearance assertions, four interaction groups, eight
full-Home Tab/heading-anchor/System groups and real native touch scrolling of
panel then ordinary page after Escape (external CDP input, no scrollTop shortcut).
Eight JS-on simple/nested404 direct/reload/native recovery groups pass404/404→200
and actual header text AA pairs. Explicit dev-origin32/32, zero skips/failures.
Source remains ONLY the three approved CSS files. No application logic tests
added/modified. Menu MCP capture320×568/root24 shows all destinations/preferences
via native Tab/scroll, select outline fully visible; Escape restores trigger.
Preserved-console HMR connection-refused messages coincide with intentional own
server stop; CSS preload warning names unchanged page-content CSS, not a hydration
exception. No app Runtime exception is recorded by the valid native batches.

### Demonstrated minimal shared markup need — final refresh required

Build `OfpW_4raKoMqwnC2I_GE8` follows the main-outline clearance correction;
its six commands exit0. Before accepting it, actual MCP native Shift+Tab to JR
at1440 revealed the desktop header's overflow:auto clips the brand outline's
left edge. E4/prod-mcp-brand-focus.png demonstrates that new related obstruction;
it is not the old accessible-name finding and cannot be waived. The approved
V2 table explicitly permits minimal shared sizing/markup for demonstrated need.
One div in SiteHeaderFrame separates the native capped control scroller from the
sticky header. Local reciprocal margin/padding reserves0.5rem exterior focus
gutters while keeping existing control coordinates, header authored1/1.5rem
padding,1rem gap and width. Native scroll cap/safe centering move to that inner
container; observer remains byte-identical and measures the outer header. No
new JS, event, provider/root/route/API or separate shell responsibility is added.
Print resets header margin and inner scroll cap. Final diff also caught/reverted
an accidentally placed zero frame margin from the previous print patch; frame
geometry/strokes/terminals now remain unchanged.
Previous build/command/browser labels above are checkpoints, NOT final proof
for this wrapper. Fresh final-source checks follow; V2-4 stays unchecked.

### Final wrapper development proof

Final four-file source (three CSS plus one shared markup div, observer unchanged)
passes160 shared cells,80 native-off404 cells, four interaction groups, eight
anchor/full-page Tab/System groups/native panel+page touch and eight JS-on404/AA
groups; final dev-origin32/32/no skips. Brand outline now visibly complete in
MCP `dev-mcp-brand-focus-final.png`, with same JR/control coordinates and full
semantic ring. Source/public/tests entry hashes differ ONLY for those four files.
One combined external batch exceeded120s after completing Spanish80/native80;
only unfinished access was rerun separately and passed. No completed cells replayed
for that timeout; no timeout credit or app failure inferred.

MCP revealed an unrelated pre-existing subpixel frame overflow at its current
browser scaling:1px document overflow, used border1.6px versus unchanged pseudo
inset−2px. Controlled temporary isolation of existing frame pseudos removes that
1px; exact restoration restores it (mcp-frame-subpixel-diagnostic.json). The
earlier pre-wrapper production capture shows the same scrollbar; source frame
strokes/terminals/insets are unchanged from entry. Native default/root-controlled
matrix has overflow0 in every cell. No unrelated frame/zoom correction is made,
and no all-browser/all-zoom overflow claim is made.

### FINAL V2-4 source-attributed result — supersedes earlier checkpoints

Final build **sEY05fCjiOSToxkdbhI1g**, owned sequential dev3110/prod3111.
After the LAST meaningful four-file source change, all six exact AGENTS commands
exit0; E4/checks.txt and separate logs retain results. Default pnpm test21 unit
passes/11 HTTP skips, explicitly NOT HTTP proof. Final explicit-origin suites
**32/32 in EACH mode, zero skips/failures**. No test source was created/modified;
only native behavioral browser harnesses under E4 exercise this CSS/markup change.
No artificial CSS source test or new framework/dependency was introduced.

| Final-source proof | Development | Production |
| --- | ---: | ---: |
| Shared Home/About/Projects/nested404; en/es×themes×five widths×actual default/root16/24 |160 valid cells|160 valid cells|
| Native JS-off simple/nested404; same controlled matrix, direct+reload404 and native Tab/Enter Home200 |80 valid cells|80 valid cells|
| JS-on simple/nested404 direct+reload/native recovery and header AA supplements |8 groups|8 groups|
| Menu destinations/locale/theme persistence/current-route focus/short wrapped desktop/reduced motion/print |4 groups|4 groups|
| Full Home native Tab, real heading fragments, System theme and native touch panel/page |8 groups + touch|8 groups + touch|
| Fresh explicit-origin Node suite |32 passes|32 passes|

These counts are not summed into a fictitious combined matrix: JS-on supplements
partly overlap presentation cells. This is V2-4 scoped shared-header proof, NOT
V2-5's280-per-mode combined Home/identity/About/404 revalidation. Production also
passes16 shared-root pointer hit-test groups at top/middle/end and two actual
client About→Projects→native history back/forward groups. Development's existing
native menu/client/locale groups are credited separately, not as fresh history.

Actual measurements (summary.json): all shared top/middle/end header tops **0px**,
normal-matrix header heights90.59375–159.390625px; minimum main-to-header outline
clearance **8px**, first page-focus clearance **15.140625px**; header small-text
contrast minimum **6.22455:1**. Overflow0 for every controlled native cell; fonts,
viewport, theme chooser/color-scheme, language, root size and actual48rem match
asserted.320×568/default24 mobile panel native Tab scroll reaches30px; actual
native touch reaches48px, ordinary page touch after Escape reaches225px while
header stays0. Seven short desktop controls have full outlines within the native
scroller, unchanged2.25rem brand and1rem nav text;134px band leaves66px page strip
at768×200/default16/root24. Main/heading/native-focus targets remain clear without
doubling normal fragment offsets. Taller focus regions remain ordinarily scrollable;
their stable controls all pass native Tab visibility (80 page controls per mode).

JS-off documents have no observed inline header-height value: shared fallback is
actually used before hydration, with genuine requested-language404 content and
native recovery200. JS-on reloads retain chooser-derived theme; System preference,
equivalent locale route, Escape→trigger and mobile links remain functional. Known
current-route closure still lands on BODY, explicitly pre-existing/out of scope.
Reduced-motion retains persistent navigation/native access; print returns relative
header, zero added end margin and uncapped visible inner content. No continuous
scroll listener, measurement policy, modal/trap, body scroll lock or new motion.

Final owner-reference captures:48 actual viewport PNGs (24 per mode) with metadata,
en/es×light/dark at390×844 and1440×900/root16, top/middle/end. Paths follow
`E4/{mode}-{locale}-{theme}-{width}-16-scroll-{0|0.5|1}.png`; captures.sha256 retains
identities. These are current-source records, not the earlier pre-clearance builds.
MCP inspected the restored full JR focus ring, enlarged320×568 menu/select focus,
and production light1440 scrolled nav. Native final captures inspected include
prod-en-dark-390 top (full head/name/role/degree), prod-es-light-1440 bottom
(preserved rounded desktop About, footer/frame) and prod-es-dark-390 bottom
(persistent header, preserved lower feather/footer). Not every image was visually
inspected. Final production MCP console has **no errors/warnings**; valid native
batches have zero Runtime exceptions. No hydration failure or new related regression
is known. Existing subpixel frame scaling issue and stopped-server/preload diagnostics
above are attributed separately, not hidden or repaired.

Final application scope/hashes (E4/final-source.sha256):

| File | SHA256 |
| --- | --- |
| src/app/globals.css |840e62e184f681d5fe9877d02c613eb2f891b31097e61a9e1dd44065de34cc41|
| src/components/layout/site-header-frame.tsx |183ca65ddb83602628d3156324061e269a9a0f8806dfcfb1ba8077112399be0e|
| src/components/layout/site-shell.module.css |77d9c8f12ca497f9846f53a037241e71720cf54dac11f8936e60902069597803|
| src/components/navigation/navigation-menu.module.css |bde6b429cad98a0cd7c3434cf610bebd332ca15ca52f95951a0a2101fdc69d1e|

All source/public/test entry hashes outside those four files match; all pre-existing
tracked binary diff sections outside them are identical. Protected About/Hero/site,
fonts/SVG/PNG, carousel, translations, metadata, both roots/routing/provider/config,
AGENTS/MEMORY/constitution and unrelated user work are untouched. No new event logic
or header observer change.96rem/64rem frame and76rem header/control alignment remain.
The wrapper/outline gutter, safe centering,0.5rem origin clearance and conservative
responsive fallback are bounded technical choices within the approved sizing scope.

Owned final prod PID296316 verified against repository CWD/parent3111 command then
SIGTERM; native Chrome acknowledged Browser.close and exited. Earlier owned dev
was similarly stopped before final build. No3110/3111/9232 listener remains. Own
MCP page2 closed; user page1 about:blank preserved. No unknown process was killed.
Source hash/diff/whitespace guards pass; this evidence/tasks prose gets additional
untracked-document whitespace review. No physical touch-device, screen-reader,
other-browser or every-zoom conformance claim. Temporary captures may disappear;
durable metrics/counts/source/build/limits above survive restart.

V2-4 done condition met: RF-6,RF-8–10; scoped RNF-1–3,5–6. Only its checkbox is
completed. **V2-5 and T10 stay pending**; owner whole-Home acceptance and independent
current-spec review are not implied. Implementer stops after V2-4.

## V2-3 completed — shared public identity and readable Hero hierarchy

Date:2026-10-12. ONLY V2-3 executed under the latest approved requirements
“La apruebo” and separately approved V2 plan/tasks “Lo apruebo”. V2-1/2 checked,
V2-3 pending at entry. V2-4/5/T10 remain pending; no persistent-header work or
whole-Home/owner acceptance is implied. Read AGENTS, MEMORY, constitution, current
spec/plan/tasks, V2-2 validation, identity consumers and existing tests; loaded SDD.

### Scope, sources and TDD

Evidence **E3**: `/tmp/opencode/spec003-v2-3/`. Entry binary diff and source/public/
test/doc/spec SHA256 inventory protect pre-existing uncommitted work. Node24.21.0,
pnpm12.4.1; ports3110/3111/9232 free before owned startup. No installation, dependency,
lock repair/deletion, generated-file edit, route/API/config or protected-document edit.
The installed Next CSS guide was read; no framework API change or new library usage.

Only application changes: `src/lib/site.ts` sets the two existing name groups to
the exact approved public values; fullName and initials derivations remain unchanged,
yielding JR. `src/components/home/hero.module.css` uses normal word wrapping, removes
the surname indent, gives its existing span a block grouping, and adjusts only the
name clamps/line-height and role/degree typography. Supporting text is1rem with
role line-height1.6; degree retains1.7. Heading clamps are2.75rem/12vw/5.5rem stacked
and3.5rem/6.5vw/6.5rem side-by-side, line-height1.08. Natural wrapping/taller flow is
allowed; no nowrap, overflow hiding, portrait shrinking or altered reading order.
No Hero markup/client boundary or footer CSS edit was needed.

Meaningful native-ESM identity regression added: `tests/site-identity.test.mjs`,
checking both compound name groups, the shared full name and JR. TDD: `pnpm test`
RED exit1 with20 existing passes/one expected new failure/one no-origin skip;
failure specifically expected the approved given names but received the old value.
Minimal data correction → GREEN exit0 with21 unit passes/one no-origin skip.
No artificial CSS test or new runner. Existing carousel tests/code are unchanged.

Final SHA256: site.ts `a1144f2019c6012d4c64d4db57002f98ae1db7a2eab6d87698c38985b1844559`;
Hero CSS `ec314de3e72a0533c22203de803d9338266b799193b7ef7de1594ce4adf2c0be`;
new test `bdbc3bffd3feb810d3b5fdf672a4e6ac840d8d1682b1b6872c4031bbce85929b`.
Fresh production BUILD_ID **ILucXxhSxfFxxBwBVqPet**.

### Fresh affected presentation and preserved portrait

80 valid cells: BOTH dev/prod × en/es × light/dark ×320/390/768/1024/1440 ×16/24.
Heights568/844/1024/768/900; native top-level CDP, DPR1, hidden scrollbars matched to
V2-2. Page.setFontSizes sets the actual browser default as well as explicit root
16/24. Asserted viewport, locale, chooser/theme/scheme, loaded body/display fonts,
and actual48rem composition:768/1024 stack at default24, not at16;1440 stays wide.
IDs/captures/line rectangles and checkpoints: `{dev,prod}-{en,es}-matrix.json`,
`{mode}-{locale}-{theme}-{width}-{root}-{hero-top,identity,footer}.png` and sidecars.

All80 show the exact approved full name and unchanged localized developer role/
degree in order. Every individual name word has ONE DOM Range rectangle, wholly
inside the viewport, also for footer name words; no split/truncation or overflow.
Name computed44–122.88px and more than twice supporting size in every cell.
Role AND degree compute EXACTLY16px/root16 and24px/root24. Heading/detail rectangles
are vertically separated. Document/body overflow[0,0] in all80. Existing header
accessible name, portrait alt and footer follow the shared full name; brand remains
JR. Both catalogs/copy are byte-identical. Metadata description equals its existing
localized catalog value and no owner identity was added to metadata that had none.
Eight production SSR controls (Home/About/Projects/nested404 in en/es) retain coherent
public-name output/no stale old name; valid statuses200 and missing404.

Photo transformed bounding dimensions equal matched V2-2 dimensions within0.01px in
all80; untransformed computed width/height retain1122/1402 within0.001, contain fit,
unchanged safe inset/mask/rotation/image sizing/motion. The T5 photo-boundary spans
208.746/263.886/295.532/399.399/448.125px at the five normal widths remain ATTRIBUTED
preservation evidence, not newly measured mask intersections. Fresh four20-cell
head contact sheets were inspected against the supplied portrait: full top/side hair
is contained, proportions intact. Hero portrait styling/assets are byte-protected.
About upper/lower x/width/height match V2-2 EXACTLY in all80; source SHA256 remains
`bc66468b203c3f5320841e0f6de123234543ef9d1ae0fcb9f23be2e8edb65c83`.
Global Hero height may shift About's document y; no About styling/pixel claim is
reimplemented here. V2-2 seam/gap/desktop-pixel proof remains source-attributed.

Computed used Hero/footer text colors over the unchanged body surface, opacity1/
filter-none, meet AA; minimum6.224551605048391:1. This is scoped text-pair proof,
not a new global contrast audit. Normal/enlarged footer wraps naturally; no redesign.

### Checks, visual evidence, limitations and cleanup

Six exact AGENTS commands exit0 after final edits: next typegen, lint, tsc --noEmit,
pnpm test (21 unit passes/one explicit no-origin skip), pnpm build, git diff --check.
Explicit-origin pnpm test on3110 AND3111: **32/32 per mode, zero skips/failures**
(21 unit+11 HTTP; baseline31 increased by the meaningful identity test).
Twelve bounded native guard records per mode cover persisted dark reload, System
light/dark, equivalent client locale navigation, reduced-motion/manual End/focus,
and en/es nested404 with scripts on/off. Disabling precedes visit; genuine404,
localized explanation, native Tab/Enter same-language Home200 and3px focus pass.
Zero Runtime exceptions in all valid matrix/guard batches.

Chrome DevTools MCP additionally inspected production Spanish dark actual390×844,
root-only24 with classic scrollbar, overflow0 and supporting24px; this supplements,
not replaces, the actual-default24 matrix. Corrected emulation follows an initial
resize-only view that did NOT achieve390px and is excluded. No MCP console warnings/
errors after the production visit. Native-resolution identity320/root24, Spanish
dark390/root16, light1440/root16, footer320/root24 and desktop dark owner pair were
inspected, plus four labelled head sheets; not every full-page cell was manually read.

Twelve owner pairs `owner-{en,es}-{light,dark}-{390-16,1440-16,320-24}-hero-pair.png`
use surviving V2-2 top-Hero references LEFT and E3 fresh production RIGHT, same
locale/theme/viewport/default/root/scroll0, retaining actual natural vertical changes.
Separate native identity captures make narrow/enlarged supporting text readable.
Representative SHA256:
- es-dark390/16: `21208edf57d851764aa1474ad204f480eed6a872dff75712258ae76a601ccdd5`;
- en-light1440/16: `1732edfa8c906416f1265fd3c1d29186f4ea3b8708c4ebe3f9b54953266d8847`;
- es-dark1440/16: `567cdb7311cdb0aa74f0685314a9db26dec51b050416544485b82fd6eeb83ca3`.
summary.json retains80 counts, geometry/contrast and capture hashes. Temporary files
are volatile; the durable metrics above survive their loss. No owner acceptance,
physical-device, other-browser or assistive-technology claim.

Excluded harness-only failures: ratio assertion initially used a rotated axis-aligned
DOM bounding box instead of untransformed computed image dimensions; diagnosis showed
the preserved −1° transform. Classic-scrollbar widths also differed from the matched
hidden-scrollbar baseline; native Emulation.setScrollbarsHidden restored comparability.
Only harness corrections, no application fix or weakened word/overflow check. `python`
was unavailable; external report used available python3. No failed probe counts as a
valid cell. Known menu BODY-focus/light inactive-label/lock concerns remain deferred,
not claimed fixed; no new related failure detected.

Entry guards pass for every inventoried file except the two approved app files,
this evidence/current checkbox and the new identity test. Portrait/SVG/font/license,
HomeHero/footer/metadata/header, palettes, accepted carousel, About and unrelated
user work are untouched. Owned dev CLI200396 (repository cwd/exact3110 args verified)
stopped before production; owned prod203956 (cwd/parent exact3111 verified) stopped
after checks. Owned Chrome200594/9232/E3 profile closed via Browser.close; only MCP
page5 closed, user about:blank retained. No3110/3111/9232 listeners remain. Exit143
is intentional server cleanup, not validation failure. No unknown process signalled.

V2-3 satisfies RF-1 and RF-2/3 preservation; scoped RNF-1/2/4/5/6 evidence above.
Only its checkbox is completed. V2-4 is NOT started; final owner/independent review
and combined validation remain pending.

## V2-2 completed — compact occupied upper flow and continuous mobile feather join

Date:2026-10-12. ONLY V2-2 executed under the recorded current spec approval
“La apruebo” and joint V2 plan/tasks approval “Lo apruebo”. V2-1 was checked and
V2-2 pending at entry. All later V2 tasks/T10 remain pending. No identity, sticky
navigation, carousel implementation, component/API, asset or protected-document edit.
Owner whole-Home/About acceptance and independent current-spec review remain open.

### Source attribution, baseline and implementation

Read AGENTS/MEMORY/constitution/current spec/plan/tasks, latest V2-1 evidence and
About component/CSS/original SVG; loaded SDD/systematic-debugging. Entry status/binary
diff and89-file SHA256 inventory preserve existing uncommitted work. Node24.21.0,
pnpm12.4.1; ports3110/3111/9231 and Next locks/writers were free before owned startup.
No installation, lock reconciliation, output deletion, dependency/framework API,
route, copy, font, palette, shadow, portrait or navigation change.

Evidence directory **E2**: `/tmp/opencode/spec003-v2-2/`. Baseline **E1** remains
`/tmp/opencode/spec003-v2/`. Reused the actual80 V2-1 baseline cells, not earlier
T9-R1 screenshots: E2/before.css equals the baseline About source exactly,
SHA256 `48fe6712f455e6aded45ea7fbd6fa00fddc02829f0e9fdc6b44540cf4c65a902`.
All other inventoried sources/assets were unchanged before this correction.
Matching baseline/result IDs, viewport, fonts, theme, locale, default/root font and
region-local scroll are retained; there is no claimed new baseline recapture.

Only application file changed: `src/components/home/about-preview.module.css`.
Final SHA256 **bc66468b203c3f5320841e0f6de123234543ef9d1ae0fcb9f23be2e8edb65c83**.
Actual emitted dev source-map original equals these bytes (compiled-dev-source.json).
Fresh production build **kL74V5n1Kulw5sR_OByGQ**; served About-containing stylesheet
`/_next/static/chunks/1jjznx2x08yv0.css` SHA256
`878aa271cb56cec7027593b4d585424bd78d32ba0bfab0ede01cc76398281b5c`.
served-production.json records all three served stylesheet hashes and matching served
SVG/portrait bytes. Original SVG remains
`5a534debab49d3043b91ae71a667d6c83cbee5110d78bfef7652a88378f0b0e7`;
portrait remains `529f721fe3bb9f8fe02bbe0cad6bbedae4b88f01fc13271a83f72cf2bcd85e51`.

Upper correction directly addresses V2-1's demonstrated transparent reservation:
flow aspect-ratio700/615.470032 follows the COMPLETE original path's rotated painted
extent, not1000-unit empty canvas height. The original decorative canvas remains
1000B/700 byB before clockwise90° rotation; pseudo height100cqw and center5B/7
are independent of compact flow. Width/rotation/scale, content inset/size/upright
orientation and grid gap remain unchanged. No clipping/overflow-hiding, path edit,
shape shrinking or generic mask replacement. Transparent canvas may extend past
flow without painting over essential text. The upper change was probed separately
before the lower change; final-source batches supersede those intermediate probes.

Lower correction addresses the proved masked-surface/unmasked-media discontinuity:
existing negative-z surface pseudo still has4rem height, semantic surface paint,
horizontal rounded downward ellipse and unchanged media16:10/content/layer order.
Its opaque ellipse now has semiaxes50% width and2.5rem height; mask is opaque through
100%, feathering OUTWARD to160%, reaching the same4rem central end. At both join
endpoints the top is now opaque rather than already transparent. No blur, straight
fade substitution, new cover rectangle, recoloring or fade beneath direction text.
The ENTIRE existing min-width48rem block is byte-identical, including corrected
desktop paint extenders, opaque-left union/outward ellipse and1px overlap.

### Fresh80-cell affected matrix and visible gap proof

IDs: `{dev,prod}-v2-after-{en,es}-{light,dark}-{320,390,768,1024,1440}-{16,24}`,
40 per mode; heights568/844/1024/768/900, DPR1, normal motion, native top-level CDP.
Actual default font is set with Page.setFontSizes AND computed HTML root16/24.
Each row asserts viewport/lang/enabled chooser/theme/color-scheme/loaded body and
display fonts/overflow0/actual48rem match. There are48 stacked cells and32
side-by-side cells:768/1024 stack at actual default24, NOT at default16;1440 stays
side-by-side. Root-only enlargement does not determine the media query threshold.
Four final short batches exit0; all80 records have zero Runtime exceptions.
Each valid row is checkpointed immediately in `{dev,prod}-{en,es}-baseline.json`
(the retained helper filename means result rows, identified unambiguously by AFTER IDs).

Native-resolution upper/lower/gap/feather captures retain actual scroll/clamping in
sidecar JSON. Painted-extremum and heading-glyph thresholds match V2-1: departure
from semantic background≥2 and≥8 channel levels respectively, excluding number03.
Every one of48 actual stacked cells has a strictly smaller positive visible gap:

| Width/default-root | EN before→after px | ES before→after px | New occupied flow H px |
| --- | --- | --- | --- |
|320/16|198→23|199→23|281.344|
|320/24|209→34|210→34|281.344|
|390/16|237→22|237→22|342.891|
|390/24|248→33|247→33|342.891|
|768/24|456→34|456→34|675.250|
|1024/24|598→36|598→36|900.344|

Both themes and both modes agree for each locale/table cell. Reductions175–562px;
new visible separation22–36px, with unchanged grid spacing16–25.6px. Body follows
its unchanged heading margin/line-height; no text overlap or font reduction.

Complete-profile proof is NOT a3% crop: ordinary viewport tiles cover the entire
painted contour, including both corners/concavity/extremum. Each tile asserts stacked
mode after capture; native tiles are assembled without rescaling, retaining actual
scroll. Expected alpha raster uses the unchanged original SVG at the measured equal
axis scaleB/700 and clockwise90°. Every expected/actual occupied pixel lies within
the other's1px raster neighborhood; missing/extra INTERIOR pixels are0 in all48.
Occupied pixel count differs by at most0.148%, attributable to raster placement;
painted/expected bounding edges differ by at most1px. No profile vertex is clipped.
Every actual upright placeholder line, inverse-mapped/sampled at0.5CSSpx, retains
minimum alpha255. Safe content remains in the original opaque area, not the new flow
box's assumed percentage. Uniform canvas sizing/center/transform guards pass48/48.
Dev diagnostic badge is temporarily hidden ONLY for profile tiles and its original
style restored; ordinary matched captures retain it. Production has no such badge.

### Native lower join pixels, desktop preservation and accessibility

All48 stacked feather views retain vertical profiles at x0/1/2.5%/25%/50%/75%/
last-two-pixels, from before the top through the4rem transition. The first fully
covered join row equals semantic surface at ALL eight positions: maximum channel
delta **0**, in both themes/root sizes/modes. Baseline left-end discontinuity was
28 levels light and17–18 dark. There is now no exposed flat top edge. Maximum
adjacent gradient change outside recorded upright placeholder glyph bounds is
**2 channel levels**; center/quarters/endpoints transition continuously to elevated
paint with different rounded extents, not a straight fade. Direction text and grid
remain on opaque surface above this decorative paint. profiles and actual RGB rows
are retained in pixel-results.json; no essential text pixel is treated as a gradient.

All32 side-by-side rectangle sets equal matched V2-1 sets EXACTLY. Both upper and
lower region captures have **0 changed pixels** below the first40px preceding-neighbor
strip (which can contain moving carousel content); this gives64 exact regional image
comparisons, without excluding anything inside About. Upper/lower anchors0px;
central reference50.0244–50.025% and upper right-text clearance≥24/36px retained.
Full desktop lower mask/source/paint bounds and unequal-height relationship remain
unchanged. Media content ratio16:10 and right anchor pass80/80.

All80 About link checks pass native Tab focus, elementFromPoint hit test and visible
solid3px outline. Document/body overflow0 in all80. Actual computed used About text
pairs with ancestor opacity1/filter-none meet AA: minimum **5.566559621757743:1**.
Media label foreground also passes across both semantic endpoints and101 intermediate
blend colors, minimum5.566559621757742:1; this is conservative color-compositing
support, not a substituted screenshot measurement. No new palette/text combination.
This is About-local AA, NOT a new global dark inactive-carousel contrast claim.

### Checks, preservation smoke, inspection and limitations

Six exact AGENTS checks freshly exit0: `pnpm exec next typegen`, `pnpm lint`,
`pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`, `git diff --check`.
No-origin pnpm test:20 unit passes,1 intentionally skipped HTTP parent; NOT HTTP proof.
Explicit `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test` and3111 equivalent
each give **31/31 passes,0 failures,0 skips** (20 unit+11 HTTP). Actual logs/checks.log
are retained in E2. No tests added/modified; no artificial CSS unit/TDD assertions.
Visual regression is the causal baseline→minimal CSS→native matched result evidence.

Fresh bounded guards in BOTH modes,12 records each: en/es persisted dark reload,
System light→dark, equivalent client locale navigation, mobile reduced-motion End
with stable offset/focus/3px outline, and native nested404 scripts-off/on Tab/Enter
same-language Home200. Script disabling precedes visits; actual404/lang/explanation/
single main/native recovery are asserted, not inferred from hydration. Additional
en/es trusted smooth-End→wheel interruption/hover release/focused manual Pause/Play
smoke passes2/2 per mode at95ms; eligible measured speed32.45–32.46px/s, stable focus.
Sources/events/policy unchanged. This is bounded preservation, not full V2-5 replay.

Inspected four-locale/theme390/root16 before/after contact sheets inspection-gap.png
and inspection-feather.png; native es/light320/root24 upper, es/dark1440/root24 lower,
complete1024/root24 profile and MCP native upper/light/dark supplements. MCP owned
dev es/dark and prod en/light actual390×844/root-only24 have classic scrollbars
(375px content); these supplement, not replace, actual browser-default24 CDP cells.
One MCP resize-only attempt actually returned500px and is explicitly NOT a390 pass;
corrected emulate viewport/condition/capture files remain. Existing field-id issue
and favicon404 recur; production network inspection identifies `/favicon.ico` as
the404 resource. No related application exception/hydration error in valid batches.
Not every screenshot manually reviewed; no physical-device/other-browser/AT or owner
acceptance claim. Known BODY-focus/light inactive contrast/lock discrepancy remain
source-protected/deferred, not silently fixed or newly audited globally.

Excluded harness failures, never valid cells: initial127.0.0.1 dev UI visit lacked
hydration under dev-origin protection; browser matrices use localhost, while HTTP
tests retain explicitly required127 origin. No allowedDevOrigins/config workaround.
Initial full-page screenshot unexpectedly evaluated default16 media queries during
capture at newly stacked widths; those profile images were INVALID and replaced by
ordinary asserted viewport tiles. Dev badge contaminated initial contour analysis;
profile-only hide/restore makes final full-contour proof attributable. Initial gradient
reader included placeholder glyphs; final reader uses recorded glyph bounds. Initial
smoke helper still targeted9230; corrected owned9231 before valid runs. No app fix
was made in response to these diagnostic/harness failures. Pillow getdata deprecation
warnings are external-helper warnings, not failed application validations.

### Matched owner evidence and final boundaries

Native E2 pairs: `owner-{en,es}-{light,dark}-{390-16,320-24}-{gap,feather}-pair.png`,
16 total, before LEFT/after RIGHT. Their source views are E1/prod-v2-before and
E2/prod-v2-after; no synthetic rendering. Complete file identities/paths are retained
in owner-pairs.json and final evidence manifest. Representative390/root16 SHA256:

| Pair filename middle | SHA256 |
| --- | --- |
|en-light-390-16-gap|bc1310a56bc9a5da16ea689f7bf94121612a6cdb55b1c6c59e68c12fc98a16e2|
|en-dark-390-16-gap|ea8b2bbd743dc57c417821c9182c9f9a8167267b1fb44efd74afad53c47c876b|
|es-light-390-16-gap|0d9bec487de9b1c989a0f5f5df485d703b4b42d73a64eda73573d6bec0ece718|
|es-dark-390-16-gap|ee3e664138643bae3d67d3503f9aea0cabcb4147a51bd3de89db3e42778434d3|
|en-light-390-16-feather|3cd85abc47dfe8f449d7a5fdcce618d5de4fa8f24b5b460833317e3d885d2df7|
|en-dark-390-16-feather|206eb93a59eeed021b2d765c3d16e0ece84a00fe70f8ae15ced5c04fc222e8ef|
|es-light-390-16-feather|e4b156da2cb0a4cbe59b0d8c3575f7ef7c77eca6ddb287c95ff75e7de4670ef2|
|es-dark-390-16-feather|5f6fa45535cc8388bc09bb65cd99cefa797f76e3cfa47d644b074352eac4a00b|

pixel-results.json SHA256058e1a21e78989d11028008c607cb02b9e387fb3891e392a3c623bf68651ff4e.
Temporary evidence remains volatile; durable metrics/diagnosis above survive loss.
All89 entry files except authorized About CSS/evidence/current checkbox remain
unchanged, including supplied assets/fonts/licenses, carousel, Hero/full-haired fit,
site data/catalog/copy, core palettes/shadows, navigation/footer/routes/config and
protected documents/unrelated work. No new files in application/test directories.

Owned cleanup: identified dev CLI186873/server186894 stopped before fresh build;
prod195707/exact3111 parent stopped after production proof; second dev197884/server
197901 stopped after remaining bounded guards. Repository cwd/args/parent identity
checked before signals. Owned Chrome187005/exact9231/E2 profile closed via acknowledged
Browser.close. Only MCP pages3/4 closed; user page1 about:blank retained. No3000/3110/
3111/9231 listeners remain, no unknown process touched, no cache/lock/output deletion.
Final closure: source/diff/whitespace guards PASS; tracked git diff --check exit0,
untracked evidence no-index whitespace check has0 diagnostics (exit1 means difference).
Only V2-2's checkbox is marked; reversal reproduces entry tasks bytes exactly.
RF-12/13 delta and RNF-1/2/4–6 task criteria met; remaining visual acceptance is T10,
not permission to start V2-3 or close the spec. Implementer reports and STOPS.

## V2-1 completed — current comparison baseline and causal mobile diagnosis

Date:2026-10-12. ONLY V2-1 executed, under latest requirements approval “La apruebo”
and separate V2 plan/tasks approval “Lo apruebo”. Historical dependencies are checked;
V2-1 was unchecked at entry. This completion supersedes the pending checkpoint below,
not the earlier revisions' version attribution. No application declaration, identity,
asset, test or protected document was changed. V2-2–5/T10 remain pending; new RF-1/6/
12/13 are NOT implemented or accepted by this diagnostic task.

### Current source, runtime and controlled baseline

Read full AGENTS/MEMORY/constitution/current003 spec/plan/tasks/validation, About
component/CSS, original SVG, MediaFrame, Hero/portrait/site and header/observer/menu/
shell/global sources. Loaded SDD and systematic-debugging. Entry git status/binary
diff and91-file SHA256 manifest in `/tmp/opencode/spec003-v2/` (V2) protect the extensive
uncommitted tree. Node24.21.0/pnpm12.4.1; no Next writer, app listener or output-lock
holder at entry. Root/installed lock discrepancy remains unchanged; no installation.

Fresh dev3110 source-map originals equal local About/Hero/shell bytes exactly:

| Source | SHA256 |
| --- | --- |
| About CSS |48fe6712f455e6aded45ea7fbd6fa00fddc02829f0e9fdc6b44540cf4c65a902|
| About component |1046d593374845c15ada7083cc9740b71c4cda4a45940bc625007b20a46fe356|
| Hero CSS |7e3aea4e7ef4838aff88d48f577f33d101785162d795d89e56e92ae674347f01|
| Shell CSS |fb3620159c6cc0113f2dee09c7007484ed3388df0f65604e0bcbc9f681f2f5b5|
| Site identity |e0a92c932e1b397fac547ccda3a5b55ce7b79af45b02a4506a28f22fd0256be4|
| Original About SVG |5a534debab49d3043b91ae71a667d6c83cbee5110d78bfef7652a88378f0b0e7|

Previous application/assets/fonts/tests match T9-R1 entry; subsequent differences
are coordinator documentation only. Prior buildONVyhx3voVsfvxngT5vLF was inspected
but NOT credited as fresh V2 runtime. After stopping owned dev, `pnpm build` exited0
(8 pages; build.log/build-exit.log), producing fresh **qhEZsAYzhFpVHjlRYGFQd**.
Owned sequential prod3111 used it; four served PNG/SVG hashes equal local identities
and the prior asset table. No manual output/cache/lock deletion or generated-file edit.

**80 unique baseline Home conditions**,40 per mode, complete IDs
`{dev,prod}-v2-before-{en,es}-{light,dark}-{320,390,768,1024,1440}-{16,24}`.
Heights568/844/1024/768/900; native top-level CDP, DPR1, hidden scrollbars, JavaScript
on, normal motion. Each asserts actual viewport, default font via Page.setFontSizes
AND computed HTML root16/24, lang, actual enabled chooser/theme/computed color-scheme,
loaded body/display fonts and document/body overflow0. This is ONE current comparison
baseline with preservation references, not T9-R1's final acceptance replay or V2-5's
280-cell shared/404 matrix. Every actual stacked condition is included:24 per mode,
48 combined.320/390 stack at both sizes;768/1024 stack ONLY at actual default24;
1440 remains side-by-side. Thresholds768/1152 are verified query results, not inferred
from a root-only override. Remaining32 side-by-side references guard prior About work.
Forty dev/prod rectangle/path/line/color/paint pairs agree exactly. Four baseline
batches exit0; accepted native batches contain zero Runtime exceptions.

Each row retains Hero/header at scroll0, upper/lower region captures, and stacked
gap/feather views. Files: `<ID>-{hero,upper,lower,gap,feather}.{png,json}`; gap/feather
exist only for stacked rows. JSON records ACTUAL scroll (including end clamping),
viewport and conditions. Upper alignment requests region top40px; gap requests
geometric painted-bottom50px; feather requests media top40px. Later comparisons
must match these region-local conditions, not blindly reuse absolute document scroll.
Multiple ordinary viewport views cover tall original canvases; no single screenshot
is falsely called a full tall-section capture. Native-resolution PNGs remain baseline
members for future pairs; no simulated fix/before-after result is supplied here.

### Upper mobile — complete painted bounds, safe content and glyph gap

Attached original SVG path getBBox: `(0,0,615.470032,700)` inside source1000×700.
Clockwise90° maps `(x,y)` to `(700−y,x)`: COMPLETE painted bounds are700×615.470032,
not the full transparent700×1000 rotated canvas. For canvas widthB, uniform scale
isB/700, occupied height615.470032B/700. Current flow reserves1000B/700;38.453% is
transparent tail. Actual pseudo dimensions/transform agree within0.02px browser
quantization (1000:700 pre-rotation, matrix clockwise90°), with no overflow clipping.
Parent/content transforms remain none. Whole original concavity/extrema are retained.

| Stacked width/default-root | Reserved H | Painted H | Transparent tail | Grid gap | EN visible gap | ES visible gap |
| --- | --- | --- | --- | --- | --- | --- |
|320/16|457.141|281.358|175.783|16|198|199|
|320/24|457.141|281.358|175.783|24|209|210|
|390/16|557.141|342.905|214.236|16|237|237|
|390/24|557.141|342.905|214.236|24|248|247|
|768/24|1097.141|675.259|421.882|24|456|456|
|1024/24|1462.844|900.345|562.499|25.6|598|598|

Every EN/ES value is measured individually in BOTH themes and modes (eight cells
per table row), and agrees across them. These are native pixel blank-row distances
between the last visible contour pixel and first heading glyph pixel, approximately
1px raster precision, NOT DOM box gaps. Pixel reader tests the contour-extremum
neighborhood for ≥2-channel-level departure from semantic background and actual h2
glyph bounds for ≥8-level departure; number03 is excluded. Raw document-coordinate
paint/glyph bounds and each ID survive in gaps.json; transparent DOM bottom never
substitutes for visible paint. At en320/16 geometric paint bottom1469.686 versus
reserved bottom1645.469 and h2 box top1661.469; final pixel gap198 corroborates
tail+grid+glyph ascender spacing. At1024/default24 tail alone is562.499px.

Original opaque safe rectangle remains horizontal10–90% ofB and vertical0–35% of
the reserved canvas (source x0–350/y70–630 after inverse rotation). Every actual
localized wrapped line in48 stacked cells is sampled at0.5CSSpx inverse-mapped to
the source raster: minimum alpha255. Used line extents range11.543–88.457% horizontally
and14.137–25.987% vertically, inside that safe rectangle. Placeholder remains upright,
unmasked12/18px, unobscured; no new photograph. At320/root24 English line union is
x36.938–283.063/y66–118.797 locally. Large newly stacked1024/root24 line is
x366.422–657.578/y206.797–230.797. Compacting reservation must preserve these safe
bounds and explicitly reposition the FULL decorative canvas, not resize its height
against a new flow percentage or crop the transparent rectangle with overflow hidden.

**Bounded corrective rationale for V2-2, NOT implemented:** decouple the same full
uniformly scaled original decorative canvas from flow height; derive flow from
complete occupied profile plus legible separation instead of1000-unit transparent
height. Preserve its top/content safe area and set its center/height independently
of the compacted reservation. Reduce stacked grid separation only as appropriate;
gap reduction alone leaves the dominant tail defect. Each matched visible gap must
be strictly smaller; no arbitrary numerical target, scale distortion or shape crop.

### Lower mobile — responsible paint join demonstrated and restored

All48 stacked media-aligned profiles show an RGB step at media top at x0, while
the opaque center is continuous across that same row. Baseline layer chain:
`.future` paints semantic surface through text and grid gap; text/grid transparent;
`.directionMedia` paints an UNMASKED elevated rectangle,16:10. Its negative-z
surface ::before is4rem tall with radial ellipse50%×100% at50%0%, feather1.5rem.
At the rectangle's first row that radial mask is opaque centrally but transparent
at both lateral endpoints, and partially transparent nearby. Thus elevated paint
appears abruptly along straight lateral portions BEFORE the downward curved fade.
There is no border, line pseudo, box shadow/filter or gap-colored third surface.
The straight edge is the media rectangle's top, not the legitimate section bottom.

**16 controlled cases**, eight per mode:390×844×en/es×light/dark×actual default/root16/24.
For EACH, disable ONE layer at a time, remove the style, then capture restoration:
pseudo content off; future background off; media background off; pseudo mask off;
already-transparent text-background negative control. ALL80 full viewport restoration
comparisons are pixel-identical, no dev-badge exclusion or alignment override needed.
Controls never change source, geometry, tokens or copy. No diagnostic style survives.

Example es/dark390/default24 (identical dev/prod): media top viewport225.0625;
grid gap24px; pseudo H96/feather36, surface43/59/48, elevated59/77/62.

| Viewport coordinate / control | RGB at(0,224) | RGB at(0,226) | RGB at(10,226) | RGB at(195,226) |
| --- | --- | --- | --- | --- |
| Original |43,59,48|59,77,62|53,71,58|43,59,48|
| Only pseudo off |43,59,48|59,77,62|59,77,62|59,77,62|
| Only future bg off |24,35,30|59,77,62|53,71,58|43,59,48|
| Only media bg off |43,59,48|43,59,48|42,58,48|43,59,48|
| Only pseudo mask off |43,59,48|43,59,48|43,59,48|43,59,48|
| Transparent text negative control |43,59,48|59,77,62|53,71,58|43,59,48|

Light same condition: surface pixel(0,224)=235/230/216, elevated(0,226)=207/207/189;
near-edge(10,226)=215/214/197, center unchanged235/230/216. Mask-off makes all three
226 samples surface; pseudo-off makes all three elevated. Root16 cases demonstrate
the same relationship with64px pseudo/24px feather. Exact all-case coordinates,
fractional scroll and five controls in {dev,prod}-isolation.json/isolation-pixels.json;
48 entire vertical edge/quarter/center profiles in baseline-feather-profiles.json.
No claim to quantify perceived “stronger dark” severity from the owner's report.

The controls discriminate causes: removing future paint changes the preceding
surface, NOT the exposed elevated edge; removing only the radial pseudo makes the
seam full width; disabling only its mask removes the seam by painting opaque surface
across the rectangle top, but destroys the liked feather (diagnostic, NOT a fix).
Removing only media paint removes the elevated jump, with a small1-channel rounding
edge remaining in some partially masked samples; it is likewise NOT a complete fix.
Text-background negative control changes zero viewport pixels. These results establish
the masked-surface/unmasked-rectangle opacity discontinuity, not a blur deficiency.

**Bounded corrective rationale for V2-2, NOT implemented:** make semantic paint
continuous across the entire mobile media-top join, including both lateral ends,
before feathering the rounded downward profile. Its joining surface coverage must
be opaque across width at that boundary; blend then declines smoothly into elevated
paint with the existing rounded horizontal relationship. Adjust only this local
native mask/layer bounds/opaque-core relationship. Do not remove feather, add blur,
cover the symptom with an unrelated rectangle, recolor tokens or change content.
Precise CSS remains V2-2 work, with matched native pixel proof required; source
architecture/component change was NOT demonstrated necessary. Desktop rule stays
untouched: full-height right paint, opaque-left union outward ellipse with1px join
overlap; actual right content centered16:10/right anchor0 remains distinct from paint H.

### Hero/header references, six protected-source guards and visual limits

Baseline Hero still displays **Jorge Ramos** with JR brand, developer role and
existing degree. All80 rows retain actual text, heading/role/degree size and bounds,
portrait fit/header bounds. Role12.8/19.2px; degree12.8/19.2px stacked and14/21px
side-by-side. Name uses anywhere wrapping; heading390 is60/90px. Header position
relative,90.594/135.391px stacked, moves offscreen at About; not sticky yet. These
are approved future V2-3/V2-4 deltas, not implemented fixes or exempt defects.
Full confirmed public-name authority remains spec/site workflow, NOT MEMORY editing.

Six preservation guard groups PASS through entry/final hashes and source attribution:
(1) About original SVG/component and current desktop/R2 CSS; (2) Hero/portrait/photo/
MediaFrame geometry; (3) current five wheel-corrected carousel sources/tests, exact
hashes from correction-1 table; (4) palette/print/opacity0.72/0.9/shadows/providers;
(5) shell/frame/nav/menu/footer/both roots/routes; (6) identity/copy/catalog/fonts/
licenses/config/packages/locks/protected documents/unrelated work. This means SOURCE
preservation, not six newly run static commands or a fresh playback/accessibility audit.
All91 entry files except intentional evidence/tasks edits match; tracked binary diff
equals entry. No motion, wheel ownership, fonts, SVG/photo bytes or user source changed.

Inspected three four-cell production390/default16 contact sheets: inspection-gap.png,
inspection-feather.png, inspection-hero.png (both locales/themes). Also inspected
native es/light390/default24 gap, es/dark1440/default24 corrected desktop lower and
MCP dev es/dark390/root24 seam. Desktop shows its square-free arc; original top/side
hair remains inside the accepted Hero contour. MCP has classic scrollbar and actual
390 viewport,375 content width; root-only24 there is a visual supplement, NOT native
default24 matrix proof. Corrected prod MCP supplement uses mcp-prod-corrected-upper.png/
condition JSON; no console error/warning, only existing field-id/name issue.
Not every individual screenshot was manually inspected; no physical-device, other-
browser, screen-reader or owner acceptance claim. Historical31/31 tests/carousel
behavior remain attributed old unchanged sources, never called fresh V2-1 tests.

Eight future matched production baseline reference hashes (prefix
`prod-v2-before-`, suffix `.png`, all in V2) are retained:

| Filename middle | SHA256 |
| --- | --- |
|en-light-390-16-gap|073b264c5a1cd5c90fa0e27814ae07e21eab832bb008f33c4c5247f931415511|
|en-light-390-16-feather|45cefa335cfad80a87a86f1f0473975e6be42bedc53c97d6e8d45eed89b993f5|
|en-dark-390-16-gap|9773b32215ad725da517331582e142f28577fead81186c2027fb47ee1a51c361|
|en-dark-390-16-feather|968c7884a52b03002164d581475cb1562220698bb9ad6b15a50578b62889d554|
|es-light-390-16-gap|b9ce6ff8d361092198cba9bd04985707974a522e9f32ed8a598bd5cf5c8b67cc|
|es-light-390-16-feather|df23ff160adbe6cf6f21b4c1716c6fdd8c079be41d30686b228c9c48471c2faa|
|es-dark-390-16-gap|c3588ba6a597a078ebc8d789c4529732c95fe58231c677703413a7a55dfda431|
|es-dark-390-16-feather|2cb420e5f854b9c41f65d32e128faa71f1ee6a5bd5da00f567c724f1c6f352a5|

Raw geometry JSON hashes: dev-en08f5235951db76c79f9a4d480ab8b07b57987dbfa7b714288e6171adc27701e2;
dev-es b65cf78f6271ac639b170d65e3863048dd2f61ecb4bfda839e87d1bc18f5853a;
prod-en f378353b11eeccb69bdcffa2b40961735460697801ef545e241aabf185b4a2e3;
prod-es cce1fbdfd9ecac2729b79ba8d305fbc1c53be16c9f842b621bb465bea6c9bd5c.
Gap JSON c85cd8bd0e8a920a9f557605596e3ba4605612ef84e8f0a94a3c5b3d9a583c28;
isolation pixels b3ccb53291b7e7b8783bb9facbd9b6fdae3d67c41ad5b6a197488d005a1f6c75.
Full capture/helper/log manifest is retained in V2; /tmp remains volatile, not permanent
evidence storage. Durable values/cause above remain if images later disappear.

### Validation, excluded diagnostic failures and owned cleanup

No tests created/modified and no artificial TDD for read-only paint diagnosis.
Four native baseline batches, two isolation batches and final pixel/reconciliation
checks exit0:80 IDs/48 painted gaps/48 seam profiles/16 isolations/80 exact restorations.
`pnpm build` fresh exit0 solely to establish fresh owned production runtime. Typegen,
lint, standalone tsc, project/origin pnpm test and full shared/404/carousel matrices
were NOT rerun for this documentation-only-app task; required after actual changes,
not claimed via historical successes. References/approval/dependency/scope consistency
checked; final whitespace and sole-checkbox proof below.

Excluded harness mistakes: source-map comment terminator caused404/JSON parse error;
indexed map sections were initially omitted. Corrected reader then pins all3 originals.
MCP supplementary early initScript tried root.style before documentElement existed,
producing an explicitly diagnostic TypeError and leaving root16. That attempt is NOT
a root24 pass/application exception. Removed early mutation, navigated fresh, set root
after fonts/readiness and repeated only the supplement; fresh console has no errors.
All native matrix/isolation records are unaffected. Dev existing unused CSS preload
warnings/field-id issue recur; server log independently records favicon404. No new
related app regression, unresolved cause or unsafe ownership remains. Known mobile
BODY-focus/light inactive contrast/lock discrepancy remain deferred, not retested/fixed.
Requested mobile seam/spacing are IN scope for V2-2, not exempted as pre-existing.

Cleanup identity checked before signals: owned dev CLI175911/server175936 repository
cwd/exact3110 args, graceful SIGTERM to CLI before build; owned prod180295/parent180294/
pnpm180195 repository cwd/exact3111 args, graceful SIGTERM after proof (shell143 is
intentional cleanup). Owned Chrome176029 exact9231/V2 profile acknowledged Browser.close
and exited normally. Closed ONLY MCP page2; page1 about:blank retained. Final inventory
has no3000/3110/3111/9231 listeners or these owned PIDs; no unknown process was touched.
No install, commit/push, output deletion, code/config edit or MEMORY edit.

V2-1 done condition met: current attributed baseline, ALL actual stacked paint/glyph
gaps and original safe bounds, causal lower-line controls with exact restoration,
bounded CSS-only rationale and protected-source/owned-resource proof. Covers RF-1/6/
12/13 BASELINE and RNF-1/4–6 diagnostic prerequisites only. Mark ONLY V2-1, then STOP.

Final closure: `git diff --check` exit0; untracked validation/tasks no-index checks
emit zero whitespace diagnostics (exit1 means difference). All91 entry hashes match
except these two authorized documents; tracked binary diff remains byte-identical.
Reversing ONLY V2-1's checkbox reproduces entry tasks.md exactly. Captures/helpers/logs
retain final SHA256 manifest; no required V2-1 check outstanding. V2-2–5/T10 untouched.

## V2-1 diagnostic checkpoint — 2026-10-12 (not completion)

Only approved V2-1 is executing. Latest requirements “La apruebo” and separate
V2 plan/tasks “Lo apruebo”, historical checked dependencies and pending V2-1 were
read and confirmed. Application sources are read-only. Entry status/binary diff/
full source, asset, font and protected-document manifest are retained under
`/tmp/opencode/spec003-v2/` (V2 below). Node24.21.0/pnpm12.4.1; no existing Next
writer, app listener or output-lock holder at entry. Owned dev3110/native Chrome9231
and MCP page2 were started; page1 about:blank is preserved. No install/output deletion.

Fresh first batch:20 English development conditions in dev-en-baseline.json,
en×light/dark×five widths×actual browser default/root16/24, heights568/844/1024/768/900,
DPR1/hidden scrollbars. Viewport/lang/chooser/scheme/font faces/overflow0 and actual
48rem responsive evaluation asserted. Twelve are stacked, including768/1024/default24;
eight are side-by-side. Original SVG placeholder line alpha255 in every row.
Hero/header/upper/lower references and stacked gap/feather captures survive with
actual scroll metadata. Native batch exit0/no Runtime exceptions. This is baseline,
not implementation, final RF acceptance or completed diagnosis. Remaining locale,
paint/glyph pixels, layer isolation/restoration and source/resource closure pending.
Current About CSS matches prior final48fe6712…; all prior final application/assets/
fonts/tests match T9-R1 entry, only coordinator documentation changed subsequently.
Retained production BUILD_ID ONVyhx3voVsfvxngT5vLF is historical, not fresh V2 proof.
V2-1 remains unchecked; no later task has been started.

Second bounded checkpoint:40 dev Home baseline conditions now retained (24 stacked,
16 side-by-side); dev-es.log exit0/no exceptions. All24 actual stacked gaps are
measured in gaps.json from native screenshot contour pixels and heading glyph pixels,
not DOM canvas ends. Original path getBBox is615.470032×700 at0,0; clockwise90°
paint occupies700×615.470032 within700×1000 transparent canvas. Avoidable vertical
tail is38.453% of reservation. Gap ranges198–598px; complete per-condition values
will be retained in the completion table. All placeholder line-region alpha samples
remain255, upright/unmasked; SVG bytes unchanged.

Eight independent dev390 en/es×light/dark×default/root16/24 isolations collected:
pseudo content off, future background off, media background off, pseudo mask off,
and already-transparent text-background negative control. Each is removed before
the next control. All40 restorations are FULL viewport pixel-identical to baseline
(including dev badge). The internal line starts exactly at rectangular media top,
not at text bottom or the legitimate outer section bottom. The radial surface mask
has incomplete lateral opacity at that top, exposing the elevated rectangle abruptly.
Mask-off removes that join (diagnostic only; destroys feather), pseudo-off exposes
a full-width rectangular join, media-background-off removes elevated jump while
leaving a small alpha/compositing edge. No border/filter/shadow is involved. Exact
coordinates/profiles are in dev-isolation.json/isolation-pixels.json. Source-map
pin now verifies served About/Hero/shell originals equal local hashes exactly.
Two source-map reader attempts were excluded (comment terminator included in URL,
then indexed-map sections omitted); corrected external reader only, no app change.
MCP page2 independently inspected Spanish dark390/root24 seam (classic scrollbar,
not a matched native cell); existing field-id issue/favicon/preload warnings recur.
Production baseline/build and final guards/resource closure remain pending.

## T9-R1 completed — combined final amended About validation

Date: 2026-10-11. ONLY T9-R1 executed, after approved spec/plan/tasks and completed
R1/R2/R3 dependency checks. No application or test edit was needed. This section
supersedes the affected final-validation prerequisite, not historical evidence,
owner acceptance, independent review, T10 or whole-spec closure.

### Fresh checks and final source

Node24.21.0/pnpm12.4.1. All following commands were executed FRESH in this task;
none of these command passes is borrowed from R3. Logs are under
`/tmp/opencode/spec003-about-final/` (called FINAL below).

| Command | Result / log |
| --- | --- |
| `pnpm exec next typegen` | exit0; pnpm_exec_next_typegen.log |
| `pnpm lint` | exit0; pnpm_lint.log |
| `pnpm exec tsc --noEmit` | exit0; pnpm_exec_tsc_--noEmit.log |
| `pnpm test` | exit0;20 unit passes,1 expected no-origin HTTP-suite skip; pnpm_test.log |
| `pnpm build` | exit0;8 pages; pnpm_build.log |
| `git diff --check` | exit0, repeated after documentation; git_diff_--check.log |
| `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test` | exit0;31/31, no skips/failures; dev-tests.log |
| `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test` | exit0;31/31, no skips/failures; prod-tests.log |

Fresh production BUILD_ID `ONVyhx3voVsfvxngT5vLF`, used by owned prod3111 after
owned dev3110 stopped. About CSS remains R3 final SHA256
`48fe6712f455e6aded45ea7fbd6fa00fddc02829f0e9fdc6b44540cf4c65a902`.
Entry/final source manifests verify all application/test/asset/protected files;
only this document and T9-R1's checkbox change in this task. Current wheel-corrected
carousel hashes match the correction-1 current-source table below, including track
`a8e204fac572cf21e5c2384ce369d498d03ac5230bbdae6e470d9ed97279d1de` and tests
`3c9fd05b07895b1395b5b8018ed27cc90082f180cc86ef30824043d0e0685b81`.
Four fresh served production assets equal local PNG/SVG bytes (served-assets.json).
Fonts, masks, photo, palette/print/shadows, Hero, navigation/frame/footer, copy,
providers/routes/config/packages/locks and unrelated user work are unchanged.

### Exactly80 controlled final About cells

Valid IDs are the complete Cartesian product
`{dev,prod}-final-{en,es}-{light,dark}-{320,390,768,1024,1440}-{16,24}`:
40 per mode,80 unique combined cells, zero missing/invalid/skipped final cells.
Heights respectively568/844/1024/768/900; DPR1. Every cell asserts actual viewport,
root, chooser-derived theme AND computed color-scheme, document locale, loaded
body/display font faces, document/body overflow0 and responsive-query result.
Native Tab reaches the localized About link; hit test is unobscured and focus is
3px solid. All accepted native batches have zero Runtime exceptions.

**Important corrected text-size control:** Page.setFontSizes sets the browser's
default font to16/24 before navigation, alongside HTML's16/24px root. A root-only
CSS override does NOT change rem media-query evaluation. R3's old root-only rows
remain attributed supplementary evidence, NOT these final80 cells. Actual48rem
thresholds are768/1152px; no width/device-name assumption substitutes for matchMedia.

| Width | Root16 actual layout | Root24 actual layout |
| --- | --- | --- |
| 320,390 | stacked | stacked |
| 768,1024 | side-by-side | stacked |
| 1440 | side-by-side | side-by-side |

Thus each mode has16 side-by-side and24 stacked cells. The unchanged64rem frame
query also respects the browser default; frame absence at1440/default24 is expected,
not an application change.40 dev/prod geometry, line, computed-style and semantic
paint records agree exactly after normalizing ONLY the mask URL's3110/3111 origin.

**RF-12:** All24 stacked cells per mode retain the original clockwise90° contour,
upright localized placeholder and reserved7:10 canvas. Computed pre-rotation1000:700
dimensions give equal scales0.457141–1.462840 and transformed bounds equal the whole
reserved box (≤0.02px rounding). Every wrapped placeholder line is inside the
10%–90% horizontal/upper35% safe region; sampling the original SVG at0.5px line-box
increments yields minimum alpha255 in EVERY cell, including enlarged Spanish.
Following content starts at/below the reserved canvas bottom; no essential-content
crop or typography reduction. Source SVG remains unchanged. Side-by-side primary
is unrotated83.9%/10:7, left anchor0; captured opaque midpoint crossing49.8047–49.9652%
of inner width meets45–55%. Source geometric reference remains approximately50.025%.
Right-text clearance retains the1.5rem conservative reference (24/36px nominal,
subpixel rounding under0.02px); path maximum is inside that conservative reference.

**RF-13:** Each mode's16 desktop cells passes23136 exact opaque seam samples and
nine top/near-end/mid/bottom alpha profiles per cell; maximum radial-profile error
0.06085, below0.09 raster tolerance. No internal rectangular end or thin tile seam
appears at the formerly centered media ends or reported lower join. Right-half
decorative paint spans row height; content remains CENTERED16:10/right anchor0,
not stretched to row paint height. Text is over opaque semantic surface, and glyph
line unions retain≥1.5rem clearance. Natural text/media heights differ (1440/default24:
English256.75/450px, Spanish299.9375/450px); opposite inequality remains additionally
covered by attributed R3 root-only enlargement probes, not falsely counted as final
default24 desktop cells. Legitimate outer row top/bottom boundaries remain.

All24 stacked cells per mode retain the lower4rem downward horizontal radial feather,
isolation and z-index−1. Fresh media-aligned pixel profiles at five horizontal positions
show deeper center than sides, with unchanged semantic endpoints/layer declarations.
R3's16 full64/96px feather-crop comparisons per mode, zero changed pixels against R2,
are REUSED source-matching preservation evidence, not fresh comparisons in this task.
Additional newly stacked768/1024/default24 cells receive current profile/geometry checks.

**AA/readability:** Actual computed foreground/background pairs and complete ancestor
opacity/filter chains are recorded for upper placeholder, heading, introduction,
link, lower text and label. Ancestor opacity1/filter none; placeholder line-region
alpha255 and opaque lower surface make the recorded pairs the visible pairs. WCAG
sRGB linearization gives About minimum5.566560:1 (light media label), lower muted text
≥5.933946:1; all checked normal pairs≥4.5:1, with no large-text exception needed.
This is NOT global AA or a global minimum5.56 claim: source-matching T2/T9 dark inactive
carousel evidence remains approximately4.7149:1; pre-existing light inactive-label
contrast is still separately recorded and outside this revision. No new overlap,
focus obstruction or horizontal overflow is found; missing final media/content is
not presented as finished publication copy.

### Fresh bounded preservation smoke and reused proof

Per mode:12 theme/locale/native/reduced-motion records (guards.json), two wheel race
records (green-*-wheel.jsonl), and two mobile-contact records (contact.json). Both
locales retain persisted dark reload, System light→dark response and same-logical-route
client locale navigation. Four nested404 visits per mode cover en/es×scripts-off/on;
scripts disabled BEFORE visits, genuine404, one main, exact localized explanation,
native Tab/3px focus and Enter same-language Home200. External harness waits remain
outside the disabled page. This is bounded smoke, not a replay of historical560 cells.

Focused Pause/End/Play, hover/leave and superseding Home→End→trusted wheel interruption
pass in both locales/modes. Abort targets equal actual input offset3888; trusted wheel
settles3388, then focused eligible motion3392→3431 resumes at32.4378–32.4513px/s without
stale ownership/catch-up. Mobile390 trusted touch suspends, last release resumes, and
cancel after native keyboard manual Pause does not override Pause. Reduced-motion
mobile End reaches item2, holds offset and preserves focused3px outline/disabled
autoplay. No carousel implementation/policy/speed/test changed.

RF-1–11 preservation additionally reuses source-matching T5 portrait/full-hair and
five-width wider-photo measurements, T7 masks/shadows and prior shared frame/navigation/
footer/404 proof; these are attributed prior observations, NOT fresh whole-Home matrices
or owner acceptance. Fresh source/asset guards and targeted navigation/theme/carousel/
native404 results supplement them. RNF-1/2/3/5/6 are covered within this validation;
RNF-4's final owner/independent gate remains T10 despite technically conforming metrics.

### Owner references, actual paths and visual-inspection limits

Eight inspected before/after pairs in FINAL: prefix
`owner-{en,es}-{light,dark}-390-16-upper` or
`owner-{en,es}-{light,dark}-1440-16-lower`, suffix
`-before.png`, `-after.png`, or `-pair.png`. Individual members retain natural
390×844/1440×900 resolution; pair sheets do not replace them. The upper BEFORE files
are surviving ACTUAL development pre-R2 captures from `/tmp/opencode/spec003-r2/`;
lower BEFORE files are surviving actual pre-R3 captures from
`/tmp/opencode/spec003-r3-resume/`. Original names are
`dev-before-{locale}-{theme}-{width}-16-{region}.png`. They are copied, not newly
captured or simulated old production. Upper baseline CSS SHA256
`8e99f1250284a25d7d8c918c03a38c1cad47424d4756689f9d7d9b572e84d2ee`;
lower baseline `676be1b53404653ede8d60ce23fafc4e5583d7ebb244a0c1ea65cf09174119d0`.
AFTER members are fresh final prod captures, actual default/root16 and corresponding
region-top scroll40px, with JSON bounds/scroll. Upper baseline has link focus from
its earlier probe; no claim of identical focus state, pixel-identical unrelated page
content or identical composition height after its deliberate ratio change.

| Pair (prefix above) | BEFORE SHA256 | AFTER SHA256 |
| --- | --- | --- |
| en-light-390-16-upper | e851cc3fe92a09e4810e43b8305da95af4c20b9d07884e1ffcd130dc0502cea1 | 96e717b970d02a8d9273505e25e2cf0e9f7cae952ae466704c1e97b76bf43fbb |
| en-dark-390-16-upper | 048b413fe12a9745d280c552851c99878b6f2a909d3e4dc1c435ef855597e99f | a04bd6d4934e77dffcfb17138539482ead1b89ea4e7bdda53067cadda3cc241a |
| es-light-390-16-upper | 45aedd9a6d7744f1bae370a4a0f64582e39dc21dcb6f05d57a248e03b02cf47e | 30eff6b2faccb1ec933f45f2bfb67df64a6f8e8aabb0835f586c1cf3ed263f3c |
| es-dark-390-16-upper | a7c314c038379710ef10d8523e68057449da1322f4c512aec8643164f1b4578d | c6ba07d7f1fed032fa20b8c9564a28ed5a86394c959079b024c6329e843cb686 |
| en-light-1440-16-lower | cc1e8f0196a96fda4f90e6e684a60be0671eb994e015faaeb939482db3417f5c | 976d87655e8fe047232732c501b421620bd97f98ae72ef39a1d8b731f36cb443 |
| en-dark-1440-16-lower | 6913936d1a3576a6ba863a9c9f4d5a7980e75b8da0ca2d5f458d222d50b7a1af | 2d48bae62570a8d6823482c35547ec4f7a4c3a5c2ae9d30cbaa7d10ea5f43fa6 |
| es-light-1440-16-lower | 61c5b73a2a47c2baae54867924e024b86461540245704672672c024a44581313 | b602ebc63f3cd7c149696b326390b189c3e90e84b846dc8a5bdf4bcc66741092 |
| es-dark-1440-16-lower | f21ce61afe4167a747ce4ff42546a4b769f6ede5a8c50e5346ec720980ed0f12 | 338d3b0d00660449d3eaa5bd8c5b490ba5ab9c392ffd86d969b5885c63b43033 |

All eight pairs were inspected, plus current en/es×light/dark320/default24 upper
and1440/default24 lower supplements. These show original downward contour/upright
wrapped placeholder, square-free feather/readable text, no invented photo. Full
reserved contour can naturally exceed one viewport; scrolling is not clipping.
Chrome DevTools MCP live supplements inspected dev Spanish dark upper/lower and
prod English light lower. MCP mobile requested390 actually reports500px minimum:
that screenshot is explicitly a500px supplement, NOT a390 matrix cell. Native CDP
matrix viewport assertions are exact. MCP desktop is actual1440/root24 or16; its
classic scrollbar means it is not a falsely matched hidden-scrollbar reference.
Not every individual capture was manually reviewed; all80 receive geometry/paint/
line/focus assertions. No physical-device, other-browser or screen-reader claim.

### Durable raw identity, diagnostics and closure

FINAL raw SHA256: dev-final.json
`096bed14d25fe0f8194ff77d997d262fdda3a41276ed26c5407da7dd590d2fb6`;
prod-final.json `09e9f4732b0ba6a8a26b9a4a4274f56c47674d18e5974a38fd4388b263aac819`;
dev-pixels.json `2e552ca732cb5d6e4423ae177961cc1a609050e9799662379451fc2064f2d4dd`;
prod-pixels.json `87441c2a68f2d2f0291dcf97140e631449ee2b5db0ea761539a6c1aa80ebd68a`;
owner-pairs.json `20bbbbabd932d4f5b139d45f9a19773af23643d843f82661ba854f4c3e6d9dfd`.
Logs/helpers, every capture/condition JSON and manifests survive in FINAL at closure;
temporary future loss would not mean these images still exist. Earlier missing original
T1/T9 images remain missing; none was reconstructed or claimed inspected here.

One supplementary raw dev/prod style comparison initially failed solely on mask
URL origins3110 versus3111. Inspection of every differing property showed ONLY that
origin distinction; normalizing only those origins passes40 comparisons. No app fix,
invalid final cell, lowered geometry criterion or hidden application failure.
Development full matrix was initially collected before adding extra SVG/AA samples;
its final40 replaced those preliminary records rather than doubling the unique count.
Known theme id/name issue and development unused page-content preload warning recur
in MCP; no related console error/hydration issue. Favicon absence, light inactive
contrast, menu BODY-focus loss, placeholder destination copy, root/installed-lock
discrepancy and deferred audit concerns remain pre-existing, not correction scope.
No install/lock repair, cache deletion, generated-file hand edit or library/API change.

Owned resources only: dev CLI112697/server112714 verified by repository cwd/exact3110
arguments/listener before graceful SIGTERM; prod115091/parent115090 exact3111/cwd
verified before SIGTERM (shell143 intentional cleanup). Chrome111234 exact9230/FINAL
profile closed with acknowledged Browser.close. MCP ONLY pages6/7 closed; page1
about:blank preserved. No3000/3110/3111/9230 listener remains; no user/unknown process
signalled. Source/whitespace/diff closure verifies only validation.md plus this task's
single checkbox; no MEMORY/spec/plan/AGENTS/constitution edit or commit/push.

T9-R1's scoped done condition is met. Final owner About/Home acceptance and independent
amended-requirement verdict remain open: T10 stays unchecked. STOP after T9-R1.

## T6-R3 completed — final-source production and closure

This completion supersedes only R3's pending checkpoints below. Implemented ONLY
the approved lower-desktop correction (RF-13; RNF-1/2/4/5), with RNF-6 validation
and RF-12/mobile preservation guards. No T9-R1 implementation/checkbox, whole-spec
closure, independent verdict or owner final visual acceptance is supplied here.

**Final scope/source:** application delta is exclusively the lower part of the
existing48rem query in `src/components/home/about-preview.module.css`; final SHA256
`48fe6712f455e6aded45ea7fbd6fa00fddc02829f0e9fdc6b44540cf4c65a902`.
The outward mask/layer correction, diagnosed1px tile-join correction and preserved
geometry are described in the development checkpoint immediately below. A full
entry-manifest guard passes excluding only this CSS and intentional evidence edit.
All supplied SVG/PNG/font bytes, R2 upper-mobile/upper-tablet declarations, lower
mobile feather/isolation/z-index, semantic palette/print/opacity/shadow assignments,
Hero/portrait, accepted current wheel-corrected carousel/tests, navigation/frame,
copy/routes/providers/config/packages/locks and protected user work are unchanged.
Four fresh served production assets equal local hashes (`served-assets.json`).
No new application file, component/markup/API, dependency or artificial CSS test.

**Fresh commands after the LAST meaningful CSS change:** all six exit0 on
Node24.21.0/pnpm12.4.1: `pnpm exec next typegen`, `pnpm lint`,
`pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`, `git diff --check`.
Production BUILD_ID `hw8knmHftULmBB7wxCMqm`. Named command logs and `exits.log`
under `/tmp/opencode/spec003-r3-resume/` retain attribution. Default tests20 unit
passes and1 expected no-origin HTTP-suite skip, NOT HTTP proof. Explicit-origin
3110 and3111 suites each31/31, zero failures/skips. No test file changed.

**Final paint/preservation proof:** production24 desktop arc conditions plus16
mobile preservation conditions pass with actual locale/theme/scheme, loaded fonts,
viewport/heights, root16/24, native Tab/3px unobscured About-link focus and overflow0.
Valid IDs `prod-after-{en,es}-{light,dark}-{320,390,768,1024,1440}-{16,24}`;
development has corresponding IDs, as attributed below. These are R3 paint and
preservation probes, NOT a declaration that T9-R1's combined final affected review
is complete.40 dev/prod rectangle/line/semantic-endpoint pairs match exactly.

Each mode's24 desktop probes has35488 exact opaque-surface seam samples and nine
curved alpha profiles per cell: no thin vertical patch/seam at the join, no internal
horizontal rectangle end at the formerly shorter media's top/bottom, including
both natural height inequalities. Pixel/visual proof explicitly covers top/mid/
bottom/near-end profiles and the reported central lower join, not only DOM bounds.
The legitimate outer full-row top/bottom boundaries remain. Right-half decorative
paint extends to composition height; the actual media CONTENT remains centered,
undistorted16:10 with right anchor0, matching entry dimensions. Text is always over
opaque surface, unchanged line boxes/foreground and AA contrasts≥5.933946:1;
upright media labels over unchanged elevated paint≥5.566560:1. All actual glyph
line unions retain at least1.5rem clearance, no content/focus clipping or overlap.
Authored radial feather remains1.5rem; outward elliptical interpolation is not
represented as an exact constant Euclidean-distance stroke.

Upper original curve/canvas remains unrotated83.9%/10:7 on actual side-by-side
conditions, left anchor0/~50.025% reference/24–36px clearance. R2's original clockwise
downward7:10 canvas and upright mobile placeholder remain intact.40 visible-upper
crop guards per mode and16 lower-mobile visible-region guards per mode report zero
changed application pixels versus fresh R3 entry, excluding ONLY the declared
fixed dev-tool corner in both image members. More decisively,16 full4rem mobile
feather crops per mode compare zero changed pixels against surviving actual R2
media captures, identical local coordinates, NO phase alignment or application
override. Thus preservation includes the full64/96px mobile feather, not only an
available fragment of a tall-section viewport. Source bytes/styles/layers also match.

**Visual references inspected:** all four en/es×light/dark1440/root16 pairs and
the four pairs at EACH1440/root24,768/root24,1024/root24. Fresh dev bad-before and
source-matched final prod after, region-aligned by recorded actual rectangles/
scroll; no simulated baseline. They show a continuous rounded feather replacing
the inner rectangular ends, readable left text/right placeholder and no rectangle
beyond the arc on unequal-height rows. Individual before/after dev captures also
survive. No claim that every individual image was manually inspected.

| Inspected sheet under spec003-r3-resume | SHA256 |
| --- | --- |
| references-1440-16.png | fb41ca7c6de2b38c1e9e365b0cab8e92097c7b0e37dd337b244acf5938c3b4ee |
| references-1440-24.png | 7e729e4ed14f6296d60fc414fe5f313d7001f023073efa1b8b5d657823bba365 |
| references-768-24.png | 30128622417326f489d5774c62470ab3cfb3075d087696cdd3137ea3e3204b62 |
| references-1024-24.png | ee4222941a0c907b68d5b6b84331ce61044a8939912ef39737a5437714b19721 |

Live MCP additionally inspected final dev Spanish dark1440/root24, production
Spanish light1440/root16, upright downward upper mobile390/root24 and unchanged
lower mobile in that same light Spanish condition. Captures `mcp-*`/condition JSON
are retained. MCP classic scrollbars differ from native hidden-scrollbar pairs;
these are extra visual supplements, not falsely matched matrix cells. Production
console has ONLY pre-existing theme-field id/name issue, no error/warning; dev
also has the pre-existing unused page-content preload warning. Existing favicon,
light inactive-carousel contrast, mobile-menu BODY focus and other deferred issues
are not corrected or extrapolated into an all-site AA claim.

**Bounded regressions, both modes:** two wheel-during-smooth sequences per mode
preserve current-offset abort3888/trusted wheel-end3388/focused3392→3431 resume;
prod32.443–32.449px/s, dev32.446–32.451. Focused manual Pause/End/Play and hover/leave
are included. Per mode ten theme/locale/native404 checks plus two valid reduced-
motion End checks pass; development's separate corrected RM supplement supersedes
its unverified initial destination readers, as documented below. Scripts disabled
BEFORE four nested404 visits per mode (en/es×off/on); genuine404/lang/native Tab3px/
Enter same-language Home200 pass. Persisted dark reload, System light/dark and
client equivalent-locale navigation pass in both locales. No Runtime exceptions
in accepted native batches. This is scoped smoke with unchanged playback guards,
not another full carousel lifecycle/matrix or old560-cell replay.

**Raw evidence identities:** `dev-before.json`
`a7162e8b6c71a2e967e0cec4563ac688dcd7525e29a9c3926e84b74b7b94a5be`;
`dev-after-final.json` `1ea121193b38f8344e99ee7387991252c5fa82bd0d2c1e741a5329a8f8b3b3ab`;
`prod-after.json` `cdfcd5f02ce93f680039825f5029672d915ff5f8564be7f11d648e104ed8e6e0`.
Pixel JSON hashes: dev `0b4c9516f484b7770a0c13af96f732ead73d3d4201532388343c2c0d19d0ec2d`,
prod `12069354d344ecbc7f1a69c2089acc1764936e473973c08278d373a8085d8bbd`.
Full feather JSON: dev `7c611c222d229a4fc2c228ec7c12e2e6f859d043aa5422d805e682efedc7aca2`,
prod `17f358e51ebfb66256c354b1edefb091f0725054cfc4f8e03c0af15ef6f1fcf9`.
Named command logs, pixel/profile JSON, PNG/condition pairs, guards, helpers and
full source/capture manifests remain in that temporary directory. Temporary loss
would not erase these durable measurements or mean screenshots still survive.

**Closure:** owned dev CLI103199/server103216 verified by cwd/exact3110 arguments/
parent then gracefully stopped BEFORE final typegen/build. Final owned prod109208
cwd/parent109207 exact3111 CLI verified before its own SIGTERM (shell143 intentional
shutdown, not failed validation). Native Chrome103333 exact owned9230/profile
verified; Browser.close acknowledged and its shell completed normally, closing all
owned diagnostic targets, including the rejected harness attempt. Closed ONLY MCP
pages4/5; protected page1 about:blank retained. No unknown/user process signalled,
cache/output deleted, generated artifact hand-edited, install, commit/push or MEMORY
change. Final resource/source/whitespace and sole-checkbox checks follow below.

R3 meets its scoped done condition and has no known new related regression. ONLY
its checkbox may be marked. STOP; coordinator delegates T9-R1 independently and
retains T10/owner review/independent verdict as open gates.

Final closure check: no3000/3110/3111/9230 listener or owned app/native-browser PID.
All entry-manifest files except the three intended CSS/validation/tasks files pass
exit0. Reversing ONLY R3's checkbox reproduces entry tasks.md SHA256 exactly; every
CSS byte preceding the desktop-lower correction matches entry, including mobile/R2
and upper desktop. `git diff --check` exit0; both untracked task/evidence no-index
checks emit zero whitespace diagnostics (exit1 denotes file difference). Full
capture/raw/helper/log hashes retained in `final-evidence.sha256`. The final task
delta is exactly About CSS, validation evidence and ONLY R3 checkbox. No remaining
owned resource or mandatory R3 validation failure. T9-R1/T10 remain unchecked.

## T6-R3 continuation — development checkpoint, not completion

Continuation authorized by coordinator after the read-only planner assessment:
the outward-feather hypothesis is within the unchanged approved plan. Original
spec/plan/tasks hashes match the preceding attempt exactly; R1/R2 are checked and
R3 pending. Read AGENTS/MEMORY/constitution and current authority/evidence, loaded
SDD/systematic-debugging. Node24.21.0/pnpm12.4.1; no Next/output writer or listener
3000/3110/3111/9230 at entry. Owned sequential dev3110/native Chrome9230 and isolated
MCP page4; page1 about:blank untouched. No installation or cache/output deletion.

**Scoped implementation:** only lower declarations inside the existing48rem query
in about-preview.module.css. Parent surface and centered-media paint become
transparent; an inert composition ::before paints the right-half media semantic
role over composition height. The actual content box remains centered16:10,
with identical dimensions/lines/right anchor. An inert ::after is ONE surface paint
layer covering opaque left half union an ellipse at its right edge. Intrusion I
is the unchanged clamp; feather f remains1.5rem; core a=I−f>0. Radial alpha is1
through normalized ellipse radius1, then declines to0 at I/a. Thus the join is
opaque at ALL heights, including ends, without fading the text-side surface.
It is native mask/layer paint, not a blur, rectangular cover, overflow suppression,
content mask, new asset or altered palette. Isolation places both pseudos below
text. No upper or lower-mobile declaration changed.

Entry CSS SHA256 `676be1b53404653ede8d60ce23fafc4e5583d7ebb244a0c1ea65cf09174119d0`;
final application CSS `48fe6712f455e6aded45ea7fbd6fa00fddc02829f0e9fdc6b44540cf4c65a902`.
Raw evidence under `/tmp/opencode/spec003-r3-resume/`:
`before.css`, `entry.sha256`, `entry.diff`, `dev-before.json`, `dev-after-final.json`,
`dev-pixels.json`, `dev-mobile-pixels.json`, named PNGs and logs. Fresh40 pre-edit
cells preserve the actual bad lower baseline, not a simulated original. Final24
desktop probes plus16 retained query-unaffected mobile probes give40 controlled
conditions (en/es×light/dark×five widths×root16/24, heights568/844/1024/768/900).
All requested conditions/font faces, overflow0, positive bounds, unchanged geometry,
native About-link Tab/3px focus/hit-test pass. Actual48rem query is false320/390 and
true768/1024/1440 INCLUDING root24. No1152px threshold is inferred from root style.

**Paint correction and quantization:** first application rendering exposed a real
1-column dark tile seam at x719 in1440 dark, RGB35/49/41 instead of surface43/59/48,
across the entire height. This intermediate is NOT final acceptance; retained
`unjoined-diagnostic.png`/`dev-after-unjoined-diagnostic.json`. Overlap only the
opaque mask tile by1CSSpx to eliminate fractional mask-tile raster gaps. No gradient,
core/intrusion, geometry or blur strength changed. The final24 desktop probes verify
35488 join samples equal the exact opaque surface RGB, including both endpoint
neighborhoods. All nine sampled horizontal profiles per cell follow the outward
radial curve; maximum reconstructed-alpha error0.06119 under8-bit RGB sampling.
No internal square/vertical join or old centered-media horizontal boundary remains.
Legitimate full-row outer top/bottom boundaries remain; this is not a ban on those
edges. Outward feather at row ends is bounded by the decorative paint box; it does
not expose a separate rectangular underlay or imply zero fuzzy extent there.

Representative half-alpha intrusion profiles at top-near/mid/bottom-near:
en/dark1440/root16=42.5/74.5/41.5px; es/dark768/root24=41.5/54.5/40.5px.
The opaque core tends to the join at the ends; the outward feather is not a
Euclidean-distance stroke (native elliptical-radial percentage interpolation).
At es768/root24, composition/text479.875px versus centered media240px; samples
above/below the old media ends at x458,y389/633 now equal elevated59/77/62 rather
than exposed parent surface. Text-taller and media-taller cells both pass. Actual
media ratio1.6 and right anchor0 remain; upper reference~50.025% and24/36px clearance
are unchanged. All text/placeholder line rectangles are identical to entry.

Changed used pairs remain opaque and meet AA: minimum computed/canvas-resolved
lower-text contrast5.933946:1, label5.566560:1; dark8.728498/7.624958. Left copy is
outside the overlap with clearance≥1.5rem; labels start beyond I+1.5rem. Full raster
profiles use semantic endpoint colors, not source-string assertions.

**Preservation:**40 upper visible-region crop comparisons and16 lower-mobile visible
region comparisons have zero changed application pixels versus fresh entry. The
fixed dev-tool indicator's80×64px bottom-left corner is explicitly excluded in BOTH
members; it is not hidden through application CSS. Additionally16 fresh mobile
captures compare the ENTIRE4rem feather to surviving actual R2 dev-after media
captures, with equal local region coordinates and zero changed pixels (no phase
adjustment needed). R2 final SVG/fonts/content remain protected; all upper/mobile
styles and geometry match. Source guard excludes only intended CSS/evidence edit
and passes exit0. No project test created/modified; visual pixel red→green is the
applicable regression proof, not an artificial CSS unit test.

**Development checks so far:** explicit-origin pnpm test31/31, zero skips/failures.
Two focused native wheel-during-smooth guards (en/es,100ms host delay) retain
current-offset abort3888, trusted wheel-end3388 and eligible3392→3431 resume,
32.446–32.451px/s. Manual Pause/End/Play/hover/leave remain usable. Ten theme/locale/
native404 guard records pass, plus two fresh reduced-motion manual-End records:
logical item2, physical678px, stationary/disabled automatic control and3px focus.
Nested404 scripts-off/on in both locales disable BEFORE visits and recover by
native Tab/Enter404→same-language Home200. Not a replay of prior whole-app matrices.

Harness exclusions: initial pixel comparison included a changing DevTools badge;
the difference bbox was(1,509)-(75,568), unrelated to app paint. Matched exclusion
above corrected only the reader. Endpoint rounding initially sampled OUTSIDE the
row and read the legitimate forest boundary; corrected to pixel centers strictly
inside, keeping first/last endpoint neighborhoods. Initial reduced-motion smoke
did not verify destination; superseded, not accepted as manual-End proof. Supplement
initially expected text“3” on a textless indicator; it failed readiness, retained
`dev-reduced-invalid-label.log`. Actual data-item-index2 verification passes with
no app edit. Invalid attempts are not accepted matrix/check records.

Live MCP Spanish dark1440/root24 inspected final lower separation/opaque readable
copy; `mcp-dev-es-dark-1440-24.png`/`mcp-current.json`. Console has only existing
theme-field id/name issue and unused page-content preload warning, no related error.
No physical-device/cross-browser claim. Six final-source checks/build, production
proof and owned resource closure remain pending; R3 stays unchecked. T9-R1/T10
not started, final owner acceptance not claimed.

## T6-R3 incomplete diagnostic checkpoint — 2026-10-11

Executed only the delegated R3 investigation. Read AGENTS, MEMORY, constitution,
SDD/systematic-debugging and the full current003 spec/plan/tasks/validation.
Requirements approval “Los apruebo”, separate joint planning approval “Las apruebo”,
completed R1/R2 and pending R3 confirmed. No application file or checkbox changed;
R2 is preserved. This is NOT an implemented correction or final amended-RF proof.

Fresh Node24.21.0/pnpm12.4.1; no Next process or3000/3110/3111 listener at entry.
Started owned development3110 and isolated MCP page3, preserving page1 about:blank.
Current CSS matches R2 SHA256
`676be1b53404653ede8d60ce23fafc4e5583d7ebb244a0c1ea65cf09174119d0`.
Full entry source/asset/document guards and comparison with `before.css` pass before
this evidence edit. No installation, output deletion or generated-file hand edit.

Fresh MCP dark English1440/root16 inspection reproduces the narrow vertical join
at the lower arc's ends, matching R1's unmasked surface/centered-media diagnosis.
Capture: `/tmp/opencode/spec003-r3/mcp-before-dark-1440.png`. MCP screenshot pixels
use its own DPR; this is a visual supplement, not an accredited matched native-CDP
matrix or a new R1 pixel isolation. R1's retained controlled evidence remains the
causal baseline.

One rejected browser-only hypothesis: make the parent transparent, paint the media
role across composition bounds behind the unchanged16:10 content box, and give the
surface pseudo a full left plane plus original right ellipse. To remove the alpha
discontinuity where the clipped radial mask meets an opaque left plane, the left
mask used the same vertical alpha ramp as the ellipse at its center. This removes
that discontinuity but ALSO fades the surface under the left text near row ends.
It therefore is not a preservation-only correction under the delegated constraint
to retain the text-side surface. No source implementation was made.

The enlarged unequal-height probe has actual viewport768×937 (NOT the requested
768×1024 matrix cell), computed root24, dark chooser/scheme and48rem query TRUE.
Text/composition436.6875px high versus centered media235.3125px; media width376.5px.
The rejected left mask resolves to transparent0%, opaque25–75%, transparent100%,
exposing the elevated paint under part of the text. Actual query results again do
not support inferring a1152px transition merely from the changed root font.
Artifacts: `diagnostic-rejected.json`, `diagnostic-rejected-768-24.{json,png}`.
The diagnostic selector also shared the composition class with the upper region;
that browser-only collateral paint is NOT an acceptable application proposal or
upper-preservation proof. The style was removed, root override removed, and
`restored.json` confirms original surface/transparent composition/elevated media
and original radial mask. No diagnostic remains in application sources.

**Return to coordinator:** no compliant correction is established by this attempt.
R3 stays unchecked. Further work must establish a continuous feather at both ends
without fading the required text-side surface, exposing a clipped rectangular
pseudo perimeter, distorting16:10 content or touching mobile/R2. This checkpoint
does NOT prove that CSS-only correction is impossible, nor authorize a different
curve, arbitrary blur, crop, component/API change or background redesign. The
rejected diagnostic is not a completed fix or one of the historical carousel
automatic-correction cycles. T9-R1/T10 were not started.

No project tests added/changed and no artificial CSS test. `git diff --check` and
entry SHA256 guards pass; six application checks,31/31 origin suites, production,
AA/focus and full paired pixel/matrix acceptance were NOT run because no application
correction was implemented. Historical R2 results are not credited as R3 results.
Existing favicon/theme-field findings remain outside scope, not automatically fixed.

Cleanup: owned CLI101677 exact3110 arguments/repository cwd and server101698 cwd/
parent were verified before graceful SIGTERM to the CLI; server shell completed.
Closed only owned MCP page3; page1 about:blank retained. No native browser launched,
unknown/user process signalled, cache deleted or protected source changed. Temporary
artifacts above remain auxiliary; this document retains the substantive failed
hypothesis and actual conditions. Final inventory finds no3000/3110/3111 listener
or owned101677/101698 process. All entry hashes except this intentional document
edit pass exit0; CSS comparison exit0, tracked whitespace exit0, new-document
no-index difference exit1 with zero whitespace diagnostics. Capture/JSON hashes
are retained in `spec003-r3/evidence.sha256`. STOP with R3 incomplete.

## T6-R2 recovery checkpoint — 2026-10-11

### T6-R2 completed — recovered development proof and fresh production proof

This completion supersedes the pending checkpoint below. Implemented ONLY RF-12's
upper stacked-mobile amendment and RNF-1/2/4/5 guards. No R3 implementation or
whole-spec/owner acceptance is claimed. No component, markup, message, asset,
MediaFrame API, carousel, Hero or global token changed. No artificial CSS unit
tests were added: matched rendered comparisons are the applicable visual test.

**Source attribution.** Entry CSS hash/baseline file:
`8e99f1250284a25d7d8c918c03a38c1cad47424d4756689f9d7d9b572e84d2ee`.
Final CSS:
`676be1b53404653ede8d60ce23fafc4e5583d7ebb244a0c1ea65cf09174119d0`.
The only difference from `spec003-r2/before.css` is the28-line upper-mobile
query block. Source SVG SHA256 remains
`5a534debab49d3043b91ae71a667d6c83cbee5110d78bfef7652a88378f0b0e7`.
All75 other source/document/asset/test guards passed before completing the checkbox;
`final-guards.log` exit0. This includes current wheel-corrected carousel sources,
both catalogs, portrait, other masks, protected documents and fonts. Unrelated
uncommitted work is preserved. Production build ID: `Ih1sGR3V3b9hJszSUNxg7`.

**Controlled cells.** Retained40 dev-before and40 dev-after cells were recovered
without replaying implementation. Fresh40 prod-after cells pass. Valid IDs are
`{dev,prod}-after-{en,es}-{light,dark}-{320,390,768,1024,1440}-{16,24}`;
height mapping568/844/1024/768/900. Thus32 upper-mobile cells across both modes,
plus48 applicable upper-tablet/desktop preservation cells. Requested viewport,
computed root16/24, chooser theme, computed color-scheme, locale, loaded body/display
fonts, zero document/body horizontal overflow and link focus/hit-test pass in all80.
Both runtime exception event arrays are empty. `final-metrics.mjs` exit0 verifies
all40 dev/prod geometry pairs match exactly, including placeholder line rectangles.

Actual `matchMedia('(min-width:48rem)')` is false at320/390 and true at768/1024/1440
in these recorded Chrome controls, INCLUDING root24. The root override enlarges
text but does not change this browser's initial-font media-query reference. These
are actual query results, not an assumption that width labels define composition;
no universal1152px threshold or breakpoint change is claimed.

**Geometry and opaque safe area.** Final reservations are320×457.140625 and
390×557.140625 (before320×224 and390×273). The inert negative-z-index decorative
pseudo-element alone has the original mask and clockwise90° rotation. The upright
parent is transparent/unmasked/isolated, preserving text transform `none`. Source
1000×700 maps to700×1000 with scale B/700 and centered translation. Computed
pre-rotation dimensions are457.141×319.984 and557.141×389.984: the full transformed
canvas agrees with its reservation within0.02CSSpx (native layout quantization),
with no intentional crop, unequal-axis sizing, clipping or new overflow hiding.
This is the full original profile, including its concavity, not a substitute ellipse.

Safe rectangle: horizontal10–90%, vertical0–35% of final canvas. Source raster box
`x=0,y=70,w=350,h=560` is entirely opaque:196000 sampled pixels, minimum alpha255
(`safe-area-raster.json`, live MCP). Rendered safe boxes are `(32,0,256,160)` and
`(39,0,312,195)`. Every actual wrapped line in all32 mobile cells passes inverse-
mapped raster alpha255 and lies inside those boxes. At320/root24, English line
union x36.9375–283.0625/y66–118.796875; Spanish x75.921875–244.078125 with the same
vertical extent. At390/root24, English x49.421875–340.578125/y80–104; Spanish
x49.171875–340.828125/y80–104. Placeholder typography stays12/18px; no shrinking.
Following content starts after the reserved canvas and existing gap. Changed opaque
placeholder contrast from actual computed foreground/pseudo background, resolved
through browser canvas sRGB: light5.56656:1, dark7.62496:1 (all normal-text AA).
Transparent parent does not paint a rectangular mobile underlay.

**Preservation and pixels.** All24 side-by-side cases per mode retain primary and
content rectangles exactly versus baseline; primary left-anchor delta0px and width
83.9%, unrotated original10:7 mask. Original midpoint reference50.024536% remains;
right-text clearance24/36px within0.012px layout rounding remains unchanged.
All lower-mobile styles, isolation/z-index,4rem radial feather and layers are
unchanged.16 before/after lower-feather local crop comparisons per mode have
zero changed pixels. Logs: recovered `guard-pixels.log` and fresh
`prod-guard-pixels.log`; raw records `guard-pixels.json`, `prod-guard-pixels.json`.
Upper height changes lower document y; these comparisons use labelled browser-only
subpixel phase alignment (`diagnosticAlignmentMargin`, −0.140625 or0.859375px),
restored after each capture, not an application style change or equality claim
for unaligned document-coordinate screenshots.

**Visual/keyboard evidence.** Inspected all four en/es×light/dark paired390/root16
references (`reference-pairs.png`) and320/root24 supplements
(`reference-pairs-150.png`): the original sideways concave edge now faces the
following text; placeholders remain upright/wrapped/readable with the entire
contour retained. These pair sheets use attributed dev baseline and source-matched
fresh prod results; original dev-after pairs also survive. Live owned MCP page2
inspected Spanish light390/root16, dark390/root24 and dark1440/root24; captures
`mcp-recovery-es-{light-390-16,dark-390-24,dark-1440-24}.png`. MCP resize initially
reported500px rather than390; that attempt is NOT a valid390 cell. Native emulation
then confirmed actual390×844. MCP's classic scrollbar leaves375px inner content;
this is an additional real-scrollbar visual guard, not a matched geometry pair.
Native matrices use hidden scrollbars/DPR1 consistently with baseline.
Actual Tab from a temporary diagnostic heading focus reaches localized Read More,
solid3px focus and positive center hit-test (`mcp-keyboard.json`); diagnostic
tabindex removed. Matrix focus/hit-test checks cover both modes/all80 conditions.
No claim that every individual PNG was manually reviewed.

**Harness findings, not app failures.** First production batch used classic15px
scrollbars, making canvas widths305/375 rather than matched320/390. Retained as
`prod-after-classic-scrollbars.json`; excluded from matched counts and superseded
by the controlled batch. First prod feather guard stopped after four valid pixel
rows solely because computed mask URLs differ by3110/3111; diagnostic log
`prod-guard-origin-mismatch.log` shows the exact URL difference. Only the harness
normalizes that origin for style comparison; it resumed remaining rows without
discarding the four passes. App CSS never changed during recovery.

**Commands.** Fresh six commands after final CSS, all exit0:
`pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`,
`pnpm build`, `git diff --check`. Individual stdout and exits are in
`spec003-r2/check-exits.log` and command-named logs. Default suite:20 unit passes,
one expected no-origin HTTP suite skip; not HTTP proof. Explicit-origin dev3110
suite after CSS at12:21:59 is recovered `dev-tests.log`:31/31, zero skips/failures.
Fresh explicit-origin prod3111 `prod-tests.log`:31/31, zero skips/failures.
No test file changed. Protected-source guards pass; no newly introduced related
failure remains. Known existing favicon404 (live reqid21 `/favicon.ico`) and theme
select name/id issue remain outside this task. The diagnosed lower-desktop
rectangular underlay also remains deliberately pending R3, NOT visually accepted.

**Evidence identity.** Under `/tmp/opencode/spec003-r2/`, raw JSON SHA256:
dev-before `a8dbb3f6c62d850f792dbb769cbf357d4464ba1eec9702b2d7f74912b56652ed`;
dev-after `f38e3535e2de4bf54cb8c2835d7faae8b24295916ae31fe675614fdfb088dc4d`;
prod-after `25c1f6d564abd822fc79e9d0b9685eaba0ac9931a883742b4954bc1151b0265c`.
Pair-sheet hashes:
`c7f9ffb0044ce8e4bf339a16c0b74a2a2f08b0741345ea100bb132236c332718` and
`dafb67b87a39f89ea9f6aa52f83e03d4f41dfa659e45494a0362a213607f861b`.
All individual upper reference PNG hashes are in `capture-hashes.sha256`;
`final-evidence.sha256` includes geometry/condition/pixel JSON and inspected captures.
Temporary file loss would not invalidate the durable measurements above or imply
surviving screenshots. No physical-device/other-browser claim.

**Cleanup and scope.** Owned production server96407 on3111 was identity-checked
against repository cwd/parent `next start` and terminated normally (shell143 is
intentional shutdown, not validation failure). Owned native9229 acknowledged
Browser.close; owned MCP page2 closed, protected page1 about:blank retained. Fresh
inventory has no3000/3110/3111/9229 listener. No unknown process killed, caches
deleted, generated file hand-edited or dependencies installed. R2's done condition
is satisfied; only its checkbox is authorized to change. STOP; R3/T9-R1/T10 remain
pending for coordinator delegation and final owner/independent review.

Resumed only approved T6-R2 after the interrupted implementation session. R1 is
checked; R2/R3/T9-R1/T10 remain unchecked. The CSS delta is already present and
was NOT reapplied: only the28-line upper stacked-mobile media-query block differs
from `/tmp/opencode/spec003-r2/before.css`. Current CSS SHA256:
`676be1b53404653ede8d60ce23fafc4e5583d7ebb244a0c1ea65cf09174119d0`.
All other entries in `spec003-r2/entry.sha256` pass fresh verification (exit0,
`recovery-guards.log`); this includes protected app sources/assets/documents.

Recovered raw evidence: `dev-before.json` and `dev-after.json`,40 controlled
cells each; `dev-after-events.json` is empty. The prior dev explicit-origin test
log reports31 passed, zero skipped/failed. `guard-pixels.log` records24 identical
upper side-by-side rectangle/style guards and16 unchanged lower-mobile feather
pixel crops (zero changed pixels after labelled subpixel phase alignment).
These are recovered prior results, not fresh executions. Before/after PNG/JSON
pairs survive in the same directory, including normal/150% captures.

Fresh runtime inventory: no listener on3000/3110/3111/9229; no owned task runtime
is assumed alive. Node24.21.0/pnpm12.4.1 available. Remaining: final six commands,
production cells/test suite, live MCP inspection, geometry/contrast and final
source/cleanup proof. R2 is not yet complete. No R3 paint correction is attempted.

## T6-R1 authorized continuation — baseline and causal diagnosis (2026-10-11)

This supersedes ONLY the preceding R1 checkpoint's runtime blocker, not its zero
valid-cell attribution. The owner explicitly answered “Lo autorizo” to stopping ONLY
the identified portfolio3000 server for owned3110, relayed by coordinator. Re-read
updated AGENTS/MEMORY/constitution and checkpoint; previously fully read approved
spec/plan/tasks are byte-identical to their entry hashes. T6-R1 is pending with
historical T1–T9 dependencies complete; no R2/R3 implementation is included here.

### Safe runtime and source attribution

Fresh3000 listener still belonged to61489, parent61471 `next dev`, repository CWD,
pts/3, FD31 dev lock and FD36 dev trace. Sent graceful SIGTERM ONLY to61489;
listener closed but it retained the lock after2s. Reverified parent61471 CWD/command
and child relationship, then SIGTERM to that verified CLI. Both disappeared and
fuser found no dev-lock holder. No replacement PID, unknown process or port-wide
kill. No cache/output/lock deletion, install or manual generated-file edit.
Started exactly `pnpm dev --port 3110 --hostname 127.0.0.1`. First owned MCP page7
visit showed enabled actual chooser and loaded fonts; no failed-runtime retry or
application workaround. Node24.21.0/pnpm12.4.1 unchanged. Resume source inventory
and tracked diff: `/tmp/opencode/spec003-about-revision/resume.{sha256,diff}`.

All following proof is DEVELOPMENT3110, NOT production. Retained production
BUILD_ID `1nk2vyFX9s5bPR6Mzuo5G` is historical; no new build was required/executed.
Fresh served About CSS source-map content equals local bytes exactly:
`8e99f1250284a25d7d8c918c03a38c1cad47424d4756689f9d7d9b572e84d2ee`.
Shell source-map content also exactly matches `fb3620159c6cc0113f2dee09c7007484ed3388df0f65604e0bcbc9f681f2f5b5`.
Served CSS chunk hashes are components
`94b70df9caf797fd8fed390f685f085bae5cc2aa5b2159cb14f160d66d5da5f3`
and global `0f19729171d6f2e180f35c1cc6d33e0da98da3ade63cf5826fef9fe3fdbf8ef7`.
The globals source map contains transformed PostCSS content, NOT a byte-equal
original; no false original-source hash match is claimed. Actual semantic paints
below agree with the unchanged local declarations. Served PNG/all three SVG bytes
equal local/T7 asset hashes; served-assets.json and served-source-pin.json retained.
About component remains `1046d593374845c15ada7083cc9740b71c4cda4a45940bc625007b20a46fe356`.
Current five corrected-wheel carousel hashes still match the current-source table.

### Controlled references — 32 unique baseline cells, not final amendment proof

IDs `dev-before-{en,es}-{light,dark}-{width}-{16,24}`: all four locale/theme contexts
at320/390/1440, plus both dark locales at768/1024. This is32 bounded diagnostic
cells, not the later80 dev/prod T9-R1 matrix. Each asserts viewport heights
568/844/1024/768/900, computed root16/24px, requested actual enabled chooser and
computed color-scheme, locale, loaded document fonts and document/body overflow0.
Actual bodyFont/displayFont faces are loaded (unused fallback/DevTools faces are
not represented as successful loads). JavaScript on, normal motion, native DPR1.
Actual matchMedia48rem is false320/390 and true768/1024/1440 at BOTH root sizes;
changing the root to24px does not change the browser's initial-font media-query
reference. Never infer a stacked768/24 arrangement from a nominal rem calculation.

Current upper primary canvas remains uniform10:7 with original SVG mask/transform
none:320=305×213.5,390=375×262.5; desktop768=631.766×442.234,
1024=843.188×590.219,1440=1192.219×834.547. Inspected320/light/en/16 and390/dark/es/24
show original curve facing RIGHT, upright localized placeholder and following text,
not amended downward orientation. Lower390/dark/es/24 visibly retains its liked
horizontal downward feather. Its ::before uses96px height/36px feather, z-index−1,
media isolation:isolate; normal root64px/24px. No mobile declaration was altered.

Actual lower text/media heights (dark; light1440 agrees):

| Width/root | English text H / media H | Spanish text H / media H |
| --- | --- | --- |
| 768/16 | 218.844 /235.313 |247.641 /235.313 |
| 768/24 | 436.688 /235.313 |523.063 /235.313 |
| 1024/16 |171.188 /314.063 |199.984 /314.063 |
| 1024/24 |320.563 /314.063 |363.750 /314.063 |
| 1440/16 |142.391 /444.063 |142.391 /444.063 |
| 1440/24 |256.750 /444.063 |299.938 /444.063 |

Thus natural content supplies BOTH inequality directions, without height/copy probes.
Media16:10/right anchor0 remain unchanged. Baseline JSON records all absolute document
rectangles, pseudo styles, scroll and conditions. Final valid images use
`dev-before-*-{upper,lower}-viewport.png` plus corresponding viewport.json, capturing
the ordinary viewport after region-aligned scroll (requested region top40px; actual
scroll may clamp at document end). For large upper/mobile copy the first viewport
does not contain the entire section; no full-section screenshot claim. Pair later
captures by saved region alignment/actual scroll, not arbitrary absolute Home scroll.

Earlier clip/captureBeyondViewport PNGs WITHOUT `-viewport` misalign vertical content:
Spanish768/24 shows media top near80 instead of measured143.875 inside the section.
They are excluded from pixel/reference proof. Kept valid geometry, replaced ONLY
the capture method with ordinary viewport screenshots and recorded actual scroll;
baseline-viewport.log/isolation-viewport.log exit0. No CSS fix or relaxed assertion.
The initial clip files/logs remain explicitly diagnostic invalid captures, not pairs.

### Responsible paint/bounds cause — independent one-layer controls

Source and actual CSSOM agree: `.future` paints UNMASKED `--surface` over the whole
row; text `.direction` and `.composition` are transparent. `.directionMedia` paints
UNMASKED rectangular `--media-placeholder`,16:10, centered vertically.
Composition ::after paints only the narrow intrusion strip starting at50%, with
surface color and radial ellipse sized to COMPOSITION height. Mobile ::before is
content:none in desktop. These layers have no border, box-shadow, filter or opacity
dilution. The arc does NOT mask the parent surface or the media rectangle underneath.
There is no separate differently colored text-block background: the visible solid
text plane is the SAME `.future` surface paint as the offending underlay.

Dark endpoint colors are forest(24,35,30), surface(43,59,48), placeholder(59,77,62).
At1440/16, future/media height444.063, media x712.5; text142.391 is centered within
the taller media row. The rectangular surface ends flat at composition bottom;
ellipse reduces its intrusion to zero there but cannot reshape that parent edge.
Ates768/24, composition x0/W753/H523.063, text same H, media x376.5/W376.5/H235.313;
media top2788.922/bottom3024.234 versus composition2645.047–3168.109.
The centered media leaves143.875px above AND below. The arc523.063px high crosses
the media's earlier horizontal top/bottom, exposing both rectangle ends and solid
parent underlay beneath/beyond it. This is a paint-and-bounds relationship, not a
blur strength, border, generic shadow, mobile z-index or source-SVG problem.

Three independent controls: en/dark1440/16, es/dark768/24, en/dark1024/24. For EACH,
temporarily injected ONE declaration then removed it before the next: suppress
composition ::after; make `.future` background transparent; make media background
transparent; make text background transparent (negative control). No geometry,
mask, content, colors/tokens or persistent source edited. Baseline and restored
ordinary-viewport PNGs are pixel-identical in ALL THREE cases.

Selected actual viewport pixel results, retained in pixels.json:

| Probe/coordinate | Baseline RGB | Only arc off | Only future bg off | Only media bg off |
| --- | --- | --- | --- | --- |
| en1440/16 lower-left underlay (692,680) |43,59,48|43,59,48|24,35,30|43,59,48|
| en1440/16 arc midpoint (732,460) |43,59,48|59,77,62|43,59,48|43,59,48|
| en1440/16 media near bottom (732,680) |59,77,62|59,77,62|59,77,62|43,59,48|
| en1440/16 below both row/media (732,684) |24,35,30|24,35,30|24,35,30|24,35,30|
| es768/24 immediately below media (396,608) |43,59,48|43,59,48|41,57,47|43,59,48|
| es768/24 lower-left underlay (356,748) |43,59,48|43,59,48|24,35,30|43,59,48|
| en1024/24 below media (524,493) |43,59,48|43,59,48|24,35,30|43,59,48|

Ates768/24 pixel396/608 retains(41,57,47) after parent removal because the arc still
extends beyond actual media onto forest; do NOT call that remaining painted arc a
removed underlay or completed fix. Text-background negative control changes none
of the sampled pixels (it was already transparent). Removing media paint removes
the elevated rectangle but leaves the parent square. Removing only arc changes the
curved midpoint, not the underlay. This demonstrates separate origins rather than
guessing which green region came from which element. Inspected baseline/no-arc/
no-future1440 and baseline/no-future768 enlarged captures corroborate pixels.

### Minimal CSS-only corrective rationale — NOT implemented

R3 must address the demonstrated desktop underpaint AND mismatched paint bounds,
not increase blur or crop/cover the symptom: stop painting an unmasked whole-row
surface behind a separately shaped strip; express the text-side surface and curved
feather as one continuous bounded decorative paint contour, with no identical solid
surface outside that contour. Reconcile its ends with the actual centered16:10 media
paint extent so text-taller/media-taller rows do not leave a rectangular seam beneath
or beyond the arc. Preserve semantic endpoint colors, usable upright text, original
intrusion/soft curved relationship, right anchor and16:10 media box. This remains
possible within About-local desktop CSS/pseudos/native masks; no DOM/API/asset file
need was demonstrated. The exact declarations and acceptance are R3, not supplied
as an untested fix here. Simply setting future transparent is NOT a complete fix:
the isolated arc and rectangular media still show their independently wrong ends.
Keep lower-mobile ::before/isolation/z-index byte-identical and upper-desktop source
geometry unchanged. R2's mobile orientation is separate; do not rotate lower media.

### Checkpoint artifacts and limits

All files are under `/tmp/opencode/spec003-about-revision`: baseline.json (32 IDs),
isolation.json (three original geometry records), pixels.json, served-assets.json,
served-source-pin.json, CSS/maps, probe.mjs and named *-viewport.log/images/metadata.
No Runtime.exceptionThrown in accepted native batches. MCP page7 independently
inspected dark1440 viewport/root16, actual enabled dark chooser/computed scheme,
loaded bodyFont and lower rect x2/y238.203/W1421/H444.063; mcp-runtime.json and
mcp-dark-desktop.png retained. Owner's original Image1 bytes were unavailable here;
this is reproduction of the described central lower-edge defect, not pixel matching
to that image or owner acceptance. No production matrix, whole-app replay, contrast/
keyboard regression, physical-device/cross-browser or final amended-RF pass claimed.
Completion source guards, whitespace, capture hashes and resource closure follow.

### T6-R1 completion — guards, references and cleanup

Fresh source/asset/font/protected-file SHA256 guard against resume entry passes exit0
excluding only this intentional evidence edit; tracked binary diff compares equal
exit0. No app/CSS/DOM/SVG/PNG/font, globals palette/print/opacity/shadows, Hero,
frame/navigation/footer, routes/data/provider, tests, dependency/config/lock or
MEMORY change. Native accepted events files contain no Runtime exceptions. Existing
favicon404 is independently present in dev.log; final MCP Spanish390/24 console has
only the pre-existing unused page-content CSS-preload warning, no error/HMR failure.
MCP Spanish390×844/root24 additionally asserts dark chooser/scheme, loaded fonts,
stacked media-query false and375×262.5 upright/right-facing primary placeholder.
No assertion that starting About already fulfills amended RF-12/RF-13.

Eight root16 before references for future matched comparisons, under the directory
above; filenames begin `dev-before-` and end `-viewport.png`. All32 cells and other
supplements retain their exact viewport.json alignment metadata. These eight were
captured, not all manually inspected; inspected examples are explicitly named above.

| Filename middle | SHA256 |
| --- | --- |
| en-light-390-16-upper |d388e7c20df24f280eb6f2b72664442f049c78547e29fac5206638d629af5839 |
| en-dark-390-16-upper |7b15ac81d6d15b9768259554a01276f83b33b95f8117b177151c166ff1063142 |
| es-light-390-16-upper |85324ae1512a2bc33ee682a5bb704ba21500e03be3e7750a83c782cb5161cf09 |
| es-dark-390-16-upper |b5b74208797fb5533de8aae393df95b874752ba87e8bc4f8fa7cb51bff156c13 |
| en-light-1440-16-lower |80e6b40eeee06d6183e6fe1aef2fa9d9b93627f20eecdbf85cc2cfcfd7e63488 |
| en-dark-1440-16-lower |ba104cb68d7d9d44d55b8f3b59e06976fe7fecd2358d344e5844b638198e1bd0 |
| es-light-1440-16-lower |26cd5c6322f30ef5718ec7b82ae08477287f095c681c65513d92e19c1958a660 |
| es-dark-1440-16-lower |e3ecb96658f0effab7d8fb17b801ff9a867fc89c04889bdb6498f44662ca5e85 |

baseline.json SHA256 `0720878feef45b37fe35956b16519fcf99b45ebbf8b31e35253cc74bbb680d78`;
isolation.json `c22be0cbbce561840186f5ddc630003946d943045dee8a10c5de744c8a584ea1`;
pixels.json `45f35549d63fa1de4fcfb256e3a919a7af07d3565851bf979a8a3dad21aff1e4`.
MCP desktop/mobile capture hashes respectively
`8d5606b33cae92fe94e4411beb7eddffe696b0ef9888f800988ea18bd609c119` and
`0e4c9e844e8b469d728dec5cdd5714cc12c92bced1db72d176f92fe3474d76cf`.
Temporary images/logs remain volatile; conditions, causal pixels and identities are
durably recorded here rather than promising permanent /tmp availability.

Owned3110 server67492/parent CLI67475 had repository CWD, exact3110/127.0.0.1
arguments and FD29 dev-lock verified immediately before graceful SIGTERM to its
CLI. Shell completed normally; owned native Chrome67721/9228 acknowledged
Browser.close and shell completed normally. Closed ONLY MCP page7; page1 about:blank
retained. No own app/browser resource remains; final listener/lock check below.

Documentation-only validation: references/authority/ID consistency checked;
`git diff --check` passes; validation.md/tasks.md no-index whitespace checks emit no
diagnostics (difference exit1 is not whitespace failure). No project tests created
or modified, no artificial TDD. Six application commands and31/31 origin suites
are intentionally NOT rerun for R1 read-only-app evidence; required after actual CSS
changes/final T9-R1. Historical results are not credited as fresh R1 tests.

R1's done condition is satisfied: protected identity and controlled current baseline,
natural unequal-height references, one-layer causal paint/pixel proof with exact
restoration, and a bounded CSS-only corrective rationale. Covers RF-12/RF-13 baseline
and RNF-1/4–6 diagnostic prerequisites, NOT implemented amendment acceptance.
Only R1 checkbox may now be marked; R2/R3/T9-R1/T10 remain unchecked. STOP; coordinator
alone maintains MEMORY and delegates further work.

Final closure check: no3000/3110/3111/9228 listener or owned67475/67492/67721 process;
normal Next shutdown removed its dev lock (no manual deletion). Protected tracked
diff remains equal to resume input; all manifest files except the two authorized
documents pass SHA256 exit0. Replacing ONLY the new R1 checkbox with its unchecked
form reproduces the exact entry tasks.md hash. Whitespace checks exit0/no diagnostics
as above. No new related app regression introduced by this evidence-only task.

## T6-R1 About amendment — blocked runtime checkpoint (2026-10-11)

Executed ONLY the approved baseline/diagnosis task, not R2/R3. Read full AGENTS,
MEMORY, constitution, current spec/plan/tasks/validation, About component/CSS,
original SVG and global/shell paint sources; loaded SDD and systematic-debugging.
Requirements approval “Los apruebo”, separate joint planning approval “Las apruebo”,
historical completed T1–T9 and pending T6-R1 confirmed. No app edit or CSS isolation
occurred. T6-R1 remains unchecked: its demonstrated-cause done condition is NOT met.

### Preserved identity and output ownership

Node24.21.0/pnpm12.4.1 satisfy AGENTS. Entry inventory, binary tracked diff and full
src/public/tests/docs/specs plus protected-file SHA256 manifest are retained under
`/tmp/opencode/spec003-about-revision/{entry.status,entry.diff,entry.sha256}`.
The extensive uncommitted tree is protected. Fresh About CSS hash is
`8e99f1250284a25d7d8c918c03a38c1cad47424d4756689f9d7d9b572e84d2ee`;
component hash `1046d593374845c15ada7083cc9740b71c4cda4a45940bc625007b20a46fe356`.
PNG/all three SVG hashes match the T7 asset table exactly. All FIVE current playback
hashes match “Current source — supersedes historical playback hashes” above, not
the obsolete T8 table. No source/font/asset/content/config/package/lock repair.

Ports3110/3111 were free, but an existing user/unknown-owned development process
occupied3000 and shared dev output: server61489, repository CWD, parent61471 running
`next dev`, stdio pts/3, FD31 on `.next/dev/lock`, FD36 on `.next/dev/trace`.
Neither was signalled or restarted. No competing dev/build/typegen writer was started.
The retained `.next/BUILD_ID` is `1nk2vyFX9s5bPR6Mzuo5G`; this is the prior production
artifact, NOT the identity of the live development document or fresh R1 build proof.
The plan permits confirmed read-only existing-server baseline, so one isolated MCP
visit attempted to establish readiness before admitting any controlled cell.

### First observation and STOP — zero valid baseline cells

Owned MCP page6/context `spec003-about-r1` visited `http://127.0.0.1:3000/en`.
Fonts reported loaded, but the real theme selector remained disabled with value
`system`. Console messages3/5/10 report repeated native HMR handshake failures:
`ws://127.0.0.1:3000/_next/hmr?id=4Q1v0fy6C4LyPS_gMyyEj`,
`net::ERR_INVALID_HTTP_RESPONSE`. Message4 is an unattributed resource404; do NOT
assume its URL. Messages8/9 are unused CSS-preload warnings. No relationship between
disabled hydration/theme controls and HMR, or unique runtime cause, was established.
This resembles the historical T1 blocker but is a fresh observation, not proof of
the same cause or authority to reuse its old process-stop permission.

The uncontrolled lower rectangle was x2/y2209.125/W1007/H314.6875, with right1009
and bottom2523.8125. It is ONLY an initial observation: actual viewport, root, theme,
served-source identity and comparison scroll were not accredited. It cannot count
as a768/1024/1440 baseline, inequality proof, pixel diagnosis or RF pass. Screenshot
`/tmp/opencode/spec003-about-revision/blocked-first-visit.png`, SHA256
`ae78a4845d9b2d7bc1aa777f7f771dbc35a40ea8a02e88bb544524427410fa18`,
is an uncontrolled first-visit artifact, not an inspected matched About reference.
No historical capture was substituted; no upper-mobile or lower-desktop valid cell
was collected, no responsible paint layer identified and no correction proposed.
Source indicates centered unequal-height children and different surface/placeholder
paints, but that is a hypothesis basis ONLY, not demonstrated causality.

### Validation, closure and required coordinator action

This blocker precedes every app change and prevents reliable requested baseline
conditions; it is not a regression introduced by R1. Resolve runtime readiness and
output ownership before delegating continuation. A fresh safely owned3110 server
requires the existing output writer to be absent or explicitly resolved; free3110
alone is insufficient. Do not kill user processes, delete outputs, install or guess
a lower-edge blur/crop workaround. No R2/R3 or T9-R1 work was started.

No project tests created/modified and no TDD applicable to this evidence-only change.
Application typegen/lint/tsc/tests/build and explicit-origin suites were NOT rerun;
historical31/31 results are not fresh R1 validation. Documentation whitespace and
entry-source guard results are recorded in the closure supplement below.
Closed ONLY owned MCP page6, leaving protected page1 about:blank. Separately launched
owned native Chrome9228/profile `spec003-about-revision/chrome-profile` was closed
through acknowledged `Browser.close` before any app navigation/probe; its shell
completed normally. No owned app server exists and no unknown process was touched.
RF-12/RF-13 diagnostic evidence remains incomplete; RNF-1/4–6 are not declared met
by this checkpoint. Coordinator alone updates MEMORY.

Closure supplement: `git diff --check` exit0; untracked validation.md no-index
whitespace check emitted no diagnostics (exit1 denotes file difference). Full entry
manifest excluding only this intentionally edited evidence document passes exit0;
tracked binary diff and porcelain status each compare equal to entry (exit0).
Thus tasks.md/spec/plan/MEMORY/AGENTS/constitution and every app/test/asset/font file
remain byte-identical. Final listener inventory retains ONLY untouched server61489
on3000 among3000/3110/3111/9228; owned9228 is closed. The sole repository task delta
is this validation.md checkpoint. STOP with T6-R1 incomplete, no later-task work.

## Final-review correction cycle 1 — wheel interruption

Date: 2026-10-11. Scoped coordinator correction of the reviewer's RF-14/RNF-3/6
failure under the approved T8 ownership amendment, not a new task or requirement.
T1–T9 checkboxes remain historical implementation records; T10 remains unchecked.
Owner visual acceptance and independent re-review are NOT supplied here. Read all
authority/evidence, SDD and systematic-debugging before editing; preserve the
uncommitted tree. Node24.21.0/pnpm12.4.1; ports3110/3111/9227 were free, no existing
Next/output writer. User Chrome and MCP about:blank were left untouched.

### Root cause and attributable RED/GREEN

Reviewer evidence `/tmp/opencode/spec003-reviewer-wheel-dev.log` shows smooth
target3888.125 followed by only trusted scrollend3388: eligible playback remains
true, offset3388 is stationary for1.2s, manual Pause unchanged and focus retained.
Fresh native CDP reproduces that exact stopped state in BOTH locales and modes on
original sources/build `iKBGH6ZGq-Uv6m8JiGHHk`. Pause→End→Play→1100ms advance→hover→
End→trusted horizontal wheel−500→leave. Each mode has six traces (delays85/95/100ms
after the keyboard command); both100ms rows freeze3388→3388. The other four rows
resume only because an additional target scrollend arrives. This timing dependence
is part of the failure, not six failing rows. Observed request→wheel event intervals
are114–132ms due to native command/frame delivery, separately retained in traces;
do not mislabel the requested host delay as the actual browser event timestamp.
Original probe commands exit0 means successful diagnostic collection, NOT acceptance:
`node /tmp/opencode/spec003-correction1/wheel.mjs red` and its3111 ORIGIN equivalent.

Source trace: wheel cancels native navigation at a non-target offset; settle's
current-ID AND destination check correctly rejects it, but no wheel handler stops/
invalidates ownership. All future RAF writes are therefore null forever. Do not
remove the target check to accept unrelated/stale completions. Existing contact/
resize/visibility interruptions work because they explicitly stop the writer,
remove its listener and reconcile/invalidate identity before clearing ownership.

Extracted the formerly absent wheel decision as an initially inert, production-used
pure boundary, wired through the viewport's capture handler. This extraction alone
preserves old behavior. Two new behavioral tests then make `pnpm test` exit1:
18 existing passes,2 assertions false!==true,1 explicit no-origin integration skip.
No missing-function/bootstrap error or source-string test is credited as RED.
Tests require nonzero horizontal/vertical wheel takeover only during ownership,
reject no-op/unowned input, retain off-target/stale settlement rejection, reconcile
the actual wheel offset, resume fractional32px/s with a fresh frame/no catch-up,
and preserve manual Pause/reduced-motion priority.

Minimal GREEN: the decision now permits an owned nonzero wheel to call the EXISTING
interrupt boundary before native default scrolling. It aborts smooth only at its
CURRENT offset, removes the operation's listener, invalidates identity and resets
fractional position/clock. No preventDefault, wheel pause, focus latch, timer,
destination-check bypass, speed/engine change or instant full-motion replacement.
`settleCarouselScroll` and playback hook remain byte-identical. `pnpm test` exit0:
20 unit passes (16 playback +4 other),0 fail,1 explicit no-origin skip. Logs
red-tests.log/green-tests.log under `/tmp/opencode/spec003-correction1`.

### Fresh final-source validation checkpoint

All six AGENTS commands after the final source change exit0: `pnpm exec next
typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`,
`git diff --check`. Named logs/exits.txt under spec003-correction1. New BUILD_ID
`1nk2vyFX9s5bPR6Mzuo5G`; prior T8/T9 hashes/build/test attribution is historical,
NOT validation of this changed source. Explicit3110 `pnpm test` exit0:31 pass,
0 fail/skip (20 unit +11 HTTP checks). Required production checks pending below.

Fresh development original-sequence GREEN: six native rows across en/es and
85/95/100ms host delays. All resume39px over~1202ms,32.446–32.465px/s, playing=true,
manual Pause unchanged, UL focus retained. In the previously failing100ms rows,
instant stop is at actual3888 (not a manual destination replacement); trusted
wheel then settles3388 and eligible leave resumes3392→3431, no target snapback.
85/95ms stop3890→wheel3390 then3394→3433. Green commands exit0; raw requests,
trusted wheel/end timestamps, offsets/focus and speeds retained in JSONL/logs.

Development also has17 unique nearby guard records PER locale: eligible Home/End
reach native smooth targets with0 concurrent RAF writes;~32px/s focused resume;
superseding Home→End records current-position abort/own target and resumes; repeated
paused End is no-op; wheel after no-op stays eligible; explicit Pause survives
wheel/leave; Play resumes; native Tab/Enter pauses stable44px controls with3px
outline and identical bounds; reduced motion retains disabled control, instant
manual Home/End and stationarity after wheel; two trusted contacts remain paused
after one ends, last cancellation resumes, explicit Pause survives all releases.
Desktop1440×900/root16: en/light, es/dark; contacts390×844/root16. No physical-device
claim. English first batch retains12 valid rows then rejects a harness −0-vs0
assertion from modulo with hidden reduced-motion copies; raw native offset equality
corrects ONLY the stationary reader. Its five missing rows pass in tail exit0.
Spanish full batch exit0; valid batches report0 Runtime exceptions. Invalid attempt
is not credited as a full successful invocation or an application failure.

Two fresh dev nested native scripts-off404 checks pass404/no redirect, requested
language/exact heading/one main, native localized Tab3px→Enter Home200. Scripts
disabled BEFORE visits; host-clock readiness, no suspended page-created timer.
MCP owned page4 inspected focused work/controls; no console error, only existing
unused CSS preload warning. Production browser/origin checks, final identity/
resource closure and independent re-review remain pending at this checkpoint.

### Correction 1 completed — production, identity and resource closure

This completion section supersedes ONLY the preceding correction checkpoint's
pending production/cleanup status, not historical T8/T9 test attribution or the
reviewer's verdict. The coordinator's requested technical correction is implemented
and ready for independent re-review; no owner visual acceptance/SDD closure claim.
No checkbox in tasks.md was changed; T10 stays unchecked.

Production serves the fresh final-source build `1nk2vyFX9s5bPR6Mzuo5G` on3111.
All six final-source AGENTS commands above passed exit0, with no later source edit.
Fresh `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test` exit0:31 passes,
0 fail/cancel/skip, matching fresh development31. Default20 unit passes plus1
explicit no-origin skip remain distinct from passing HTTP coverage. Final
`git diff --check` exit0; untracked pure/test/evidence no-index whitespace checks
each difference exit1 with zero diagnostics. No validation failure is hidden.

Exact native original sequence in production: all six GREEN traces pass both
locales with85/95/100ms host delays,39px over~1202ms,32.443–32.451px/s, playing=true,
manual preference unchanged and viewport focus retained. At100ms, stop3888→native
wheel-end3388→eligible3392→3431 replaces the original freeze3388→3388. At85/95ms,
stop3890→wheel3390→3394→3433. Each instant abort equals the CURRENT native position,
not a full-motion destination substitution; the wheel retains its native500px
default movement. The ordinary destination/identity checks are unchanged.
Saved development traces independently pass the same explicit stop/end checks.

Additional superseding-navigation THEN wheel probes in BOTH modes/locales exit0:
two smooth requests, two current-offset aborts (first supersession, then wheel),
native wheel-end3388, focused eligible resume3392→3431,32.451–32.473px/s. No newer
operation stays owned or stale destination snapback appears. These four separate
rows use the same100ms host delay and trace assertions, not reused ordinary-wheel
rows. Commands: `SUPERSEDE=1 DELAYS=100 [ORIGIN=http://127.0.0.1:3111] node
/tmp/opencode/spec003-correction1/wheel.mjs green-supersede`; both exit0.

Production's17 nearby guards PER locale pass the same Home/End/own-target,
zero-competing-write, supersession/no-op, wheel eligibility, focused32px/s resume,
stable44px controls/3px Tab/Enter pause, manual priority, reduced-motion and390px
multiple-contact/cancellation checks described above. Each full final invocation
exit0,0 Runtime exceptions. The first Spanish invocation rejected its first Home
probe because autoplay had not yet moved beyond the already-settled1px tolerance,
so a smooth request should NOT exist; it saved0 rows. Corrected only the helper
to require actual>5px initial displacement before expecting smooth Home. No app
change, relaxed native-target tolerance or credited invalid cell. Final Spanish
invocation prod-es-guards-v2.log exit0. The English−0 reader correction is likewise
external and retained with its original failed log.

Fresh targeted browser totals:12 original-sequence GREEN rows +4 supersede-wheel
rows +68 nearby guards (17 ×2 locales ×2 modes), plus4 native scripts-off nested404
Tab/Enter recoveries. The latter preserve genuine404/no redirect, exact en/es title,
one main, native localized recovery/3px focus and Home200 with scripts disabled
before visits. No old visual matrix replay or all-RF fresh-browser claim; unchanged
styles/assets/routes retain their attributed prior evidence. Playback evidence now
belongs to these changed sources, not the earlier T9 hashes. No physical-device,
other-browser or screen-reader result is claimed.

MCP inspected current focused work in development and Spanish dark390×844 production;
controls/visible focus remain separate from moving slides, no styling change.
Production error/warn console empty; development only the existing unused CSS
preload warning. Captures under spec003-correction1:
`mcp-dev-focus.png` SHA25665c5d7110e61370f3f77247c1364c187145c5fc0b2d322221a6d619a238b4e6c;
`mcp-prod-mobile-focus.png` SHA256a44a159756b8782ff5155124bbdc3c44a5a56e0983f7d7781ff7da8d8f82fd22.
MCP captures are inspected focus/presentation supplements, not the trusted CDP
timing oracle. Native timing rows assert1440×900, normal motion, focus and eligibility.

| Current source — supersedes historical playback hashes | SHA256 |
| --- | --- |
| carousel.tsx | be2603a9e8b761a0599a9a64a14db3cbd74dbf9280848f0ed8ec21a046c86c10 |
| use-carousel-track.ts | a8e204fac572cf21e5c2384ce369d498d03ac5230bbdae6e470d9ed97279d1de |
| carousel-playback.ts | 6fab650072fbebf7caafeb5ae93f62fb4b9b1b60f8524a332193e24bc2407761 |
| carousel-playback.test.mjs | 3c9fd05b07895b1395b5b8018ed27cc90082f180cc86ef30824043d0e0685b81 |
| use-carousel-playback.ts — unchanged | 5a3b9f2cd4b397716b1768df6798ca0caafff629dd2f0cb99d8e378d6f032824 |

Full initial manifest differs ONLY in the three scoped application files, playback
test and this validation.md; every other src/public/test/doc/spec file matches.
Protected AGENTS/MEMORY/config/package/root lock also match. In particular spec,
plan/tasks/constitution, all CSS/colors/styles, routes/copy/data/dependencies,
PNG/SVG/font/license assets and unrelated work are untouched. No generated-file
hand edit, output/cache deletion, install, commit/push or optional audit fix.
Pre-existing light inactive contrast, mobile-menu BODY focus, placeholder overlaps,
favicon/preload findings remain deferred, not repaired by this correction.

Artifacts and command attribution: `/tmp/opencode/spec003-correction1/{red-tests,
green-tests,typegen,lint,tsc,tests,build,whitespace,dev-tests,prod-tests}.log`,
`exits.txt`, `{red,green}-{dev,prod}-wheel.{jsonl,log}`,
`green-supersede-{dev,prod}-wheel.jsonl`, `{dev,prod}-{en,es}-guards.jsonl`,
original failed/tail/v2 guard logs, native-404.jsonl, helper sources, entry manifest
and protected/source guards. Auxiliary /tmp files remain volatile; this section
retains substantive conditions, measured movement, source/build identity and exits.

Owned resources closed: original dev46586, old-build prod49440, final dev51315,
final prod54041 and development supplement55101 each had repository CWD, current
parent CLI3110/3111/PGID verified before their own SIGTERM (intentional shell143).
Native Chrome46680/profile9227 acknowledged Browser.close and exited normally.
Closed ONLY MCP owned page4; protected page1 about:blank remains. Final process/
listener/lock-holder inventory is checked after cleanup; no unknown/user process
was signalled. Correction is limited to RF-14/RNF-3/6, with RNF-2/5 preservation.
Independent reviewer follow-up and owner final visual acceptance remain gates.

## T9 recovery checkpoint — resumed after usage limit

Date: 2026-10-11. Read all authority and the complete existing evidence before
executing checks. T1–T8 checked; T9/T10 pending. The preceding T9 development
checkpoint is actual retained documentary evidence, not an assumed absent attempt:
280 unique development cells and42 interaction records, six exit0 commands and29
explicit-origin tests. All their temporary raw logs/captures have disappeared:
fresh /tmp/opencode inventory was empty. No prior server/browser/lock holder or
listener3000/3110/3111/9225 survived. No unknown process was signalled.

The retained build ID oCpOUes68RrQj17X_O-56 matched the preceding T9 record before
new checks. All five final T8 source hashes and four asset hashes match their
completion tables exactly. Node24.21.0/pnpm12.4.1. New entry inventory/diff/source
manifest: /tmp/opencode/spec003-t9-resume. No application/test/source edit.

Fresh recovery commands typegen/lint/tsc/tests/build/whitespace each exit0, recorded
in exits.txt and named logs. Default tests18 pass/1 explicit no-origin skip, not
HTTP404 coverage. Fresh build ID iKBGH6ZGq-Uv6m8JiGHHk. These six checks are newly
executed, distinct from both earlier T9 and T8 checks. Production matrices,
explicit-origin suite, reference reconciliation and resource closure remain pending;
T9 is not complete. Development coverage above is attributed documentary reuse,
not a fresh replay or surviving raw-capture claim. T10 is not started.

### Recovery production checkpoint

Fresh production explicit-origin pnpm test exit0:29 pass,0 failures/skips.
Owned sequential production3111 uses the new successful build above; native
Chrome9225 has its own profile. MCP owned page2, protected page1 about:blank.
Checkpointed production **200 unique valid presentation cells** now comprise
Home40, About/Projects80 and English simple/nested40480. Every cell asserts actual
locale/theme/computed scheme, viewport/heights568/844/1024/768/900, root16/24,
one main, positive heading/footer, header sizes and no overlapping controls,
document/body overflow[0,0],96rem max, applicable2px inert frame. Home verifies
natural1122/1402 computed dimensions/contain/top,9 copies/6 inert outer copies,
two external shadows/original masks, primary/secondary anchors0, uniform10/7 and
16/10, central reference~50.025%,≥24/36px upper clearance and inert lower ellipse.
English404 cells all additionally retain native reload404,3px Tab focus and native
Enter same-language Home200. Script disabling precedes visits and remains through
recovery; host-clock waits, no page timers. Enabled theme uses the real chooser;
disabled theme is explicitly controlled. Valid batches have0 Runtime exceptions.

Excluded helper failures, not application fixes: integer clientWidth/clientHeight
lost fractional ratio precision (239/298 vs actual238.5/298.016); switched the reader
to computed dimensions without relaxing tolerance. Guessed SVG maximum617 caused
false upper-clearance failure; a fresh20001-point original-path diagnostic measured
615.4697265625, yielding24.464px at768, matching T6. A parallel target changed shared
localStorage while Spanish Home expected dark; actual theme assertion rejected the
row. Only missing cells resumed sequentially, accepted rows retained. No failed
attempt is counted as a valid cell. Remaining Spanish40480, production interactions,
visual references, final guards/cleanup pending. T9 stays unchecked.

### Recovery production matrices and shared interactions completed

Spanish simple/nested404 adds80 valid cells; production total is now **280**:
Home40 + About/Projects80 + four missing paths160. Together with retained development
280 this covers all560 required presentation cells, not extra duplicated cells for
reload/focus. All160 production missing cells pass direct404, native reload404 and
native Tab/Enter Home200; scripts-off80 disable before navigation through recovery.
Production raw JSON/logs: home-*, shared-*,404-* under spec003-t9-resume. Every valid
production batch reports0 application Runtime exceptions. Development raw files are
absent; its280/42 records remain explicitly attributed durable checkpoint evidence.

Production adds60 unique interaction records (30 per locale): both Home AND the
separate global404 document have persisted light/dark bootstrap with opposite system
preference and actual theme mutation before first-paint; each responds to System
light/dark. Client Home→About→Projects retains marker913; back/forward and equivalent
locale Projects preserve route/theme. Enlarged320 menu opens natively, six Tab stops
have24px text/3px focus/visible bounds, Escape restores trigger. Current-page closing
still yields BODY, separately recorded as pre-existing. Reduced-motion Hero and
native manual End pass320/1440 ×16/24 ×both locales, retaining stationary playback,
disabled rotation control and logical item2/visible3px viewport focus.

English initial interaction invocation retained22 valid rows, then a diagnostic
selector `[class*=portrait_]` did not match emitted `hero-module__FBiGaq__portrait`;
MCP confirmed the actual generated class. Corrected only the external reader to
the data-shape parent and resumed eight missing rows; its diagnostic TypeError is
excluded, not an application exception or accepted cell. Spanish30 passes in one
exit0 invocation. No source/test/CSS or acceptance change. Source-matching T8
80 carousel conditions/174 lifecycle/contact/keyboard checks remain attributed
RF-14 evidence, not replayed or claimed fresh T9 interactions. Final visual/source
guard reconciliation and ownership closure still pending; T9 unchecked.

### T9 final-source visual, theme and source reconciliation

Fresh explicit-origin DEVELOPMENT tests exit0:29 pass/no skips. Fresh development
shared/theme/keyboard/motion records also60 (30 per locale), matching production's
expanded checks of BOTH Home and global404 bootstrap/persistence/System. This
supersedes the earlier42 development interactions for current shared-interaction
coverage;42 are not counted again. The280 development presentation cells and T8's
80 carousel conditions/174 native scoped checks remain reused documentary evidence.
No source changed between their final-source checkpoints and this recovery.

An additional80 production JS-on reload supplements verify the actual hydrated
chooser, persisted theme/computed scheme and requested16/24px BEFORE native Tab/
Enter recovery. The initial direct matrix already used the mounted chooser, but
its reload helper reset data-theme directly; this supplement closes that specific
reload proof gap, not80 new presentation cells or a claim of JS-off hydration.
All supplements pass,0 exceptions. Each missing path thus has both direct/reload
coverage in all required mode/script/theme/width/text conditions.

Fresh actual production color measurements in both locales agree, from computed
RGB/color(srgb float) foreground/background and every ancestor opacity; WCAG sRGB
luminance/compositing as in T2. Dark inactive three-tone label minimum4.7149216:1,
light unchanged minimum3.1532150:1. Non-print sampled text minima light5.5634970,
dark7.6249576. Actual focused-control/viewport foreground-border contrast against
work surface is light7.0514621/dark9.9761356, above3:1; computed native dark border
and viewport outline are ivory241/235/221, not an inferred accent token. Earlier
T2 transition/focus print measurements remain attributed unchanged-source evidence,
not newly sampled transitions. Light inactive-label failure is pre-existing and
explicitly retained, not a full-site AA claim or new related failure.

Fresh24 native final captures plus two MCP captures are retained for T10 under
/tmp/opencode/spec003-t9-resume/final-* and mcp-prod*. Inspected the source PNG,
four labelled head views (en/light320/16, es/dark390/24 and768/24, en/light1024/16),
light-English/dark-Spanish1440 upper/lower/work/footer views, and MCP dark1440/16
and Spanish390/24. Complete top/side hair and face, natural proportions, separate
text, original upper curve/frame anchors, curved lower feather, soft nonglowing
media depth and coherent unchanged footer are visible. Long surname wrapping at
768/24 remains baseline; not a new typography fix. No all-capture manual review,
physical-device, screen-reader or cross-browser result is claimed.

MCP1440 reports document/body overflow[1,0], the previously documented MCP-only
fractional/emulation discrepancy (T5); it is not accepted as a zero-overflow matrix
cell. Native forced-DPR1 final matrix and capture controls report[0,0] throughout.
MCP Spanish390 production console has no errors/warnings. Development About200
resource error correlates specifically to favicon404 (request73; document53=200),
not a hydration error. Existing preload/favicon/BODY-focus findings remain deferred.

Source guards: all entry manifest files match except this intentionally edited
validation.md. All font/loader/license bytes match git HEAD exactly; no font edit.
Fresh served PNG/all three SVG hashes equal T1/T5/T7 tables; PNG is1122×1402.
Final T8 five hashes, About CSS8e99f125..., shell CSSfb362015... and carousel CSS
a5f174ded... match completion identities. No app/test change or TDD cycle in T9.
No MEMORY/AGENTS/spec/plan/config/package/lock/content/source or user work edit.

Fresh root16 Hero frame/photo widths at320/390/768/1024/1440 are238.5/214.641,
301.5/271.359,337.656/303.891,456.328/410.688,512/460.797px, identical to T5.
Reused matched T1→T5 photo-boundary spans are195.255→208.746,
247.171→263.886,278.194→295.532,377.033→399.399,421.377→448.125px;
gains6.91/6.76/6.23/5.93/6.35%. These are attributed mask/photo-intersection
measurements excluding rim/shadow, not newly recomputed width or wrapper inference.
Current dimensions/fit/assets/source and fresh visual views preserve their validity.
Fresh About mid reference50.024–50.025%, requested anchors0 and clearance
24.464–24.882/36.464–36.882px agree with T6; mobile is stacked, not evaluated by
the desktop clearance metric. Lower original pixel-profile22–23px feather and
59.5/73.5/59.5px light quarter/mid/three-quarter intrusion remain T6 attribution.

Before/after references are the FOUR actual inspected matched T7 work pairs
(light/dark390 and1440, root16) with exact hashes/conditions in T7's reference table,
and T6's four inspected upper/lower pairs. Their raw before files are now absent;
do not invent images, replay old baselines or claim new comparisons. This recovery
reuses their durable measurements/inspection with preserved source invariants and
fresh final visual views. Final photo width comparisons likewise retain actual
T1 baseline and T5 result provenance. Final owner visual acceptance remains T10.

### T9 combined requirement proof and completion

| Requirement | Attributable final-source proof / result |
| --- | --- |
| RF-1 | Fresh production40/reused development40 Home cells retain3 regions,9 copies/3 projects; unchanged catalog/messages/destinations/source guard. Pass. |
| RF-2–3 | T5's80 inspected portrait conditions/full top and side hair, five matched photo-intersection gains above; identical current computed dimensions/assets/fit and fresh source/capture inspection. Pass; not shadow-only widening. |
| RF-4 | Original root light palette/print assignments match HEAD after removing only approved inactive/depth token additions; light0.72 retained, T7 matched references and fresh light views. Pass within preservation scope. |
| RF-5 | T2 actual six roles/changed-pair contrasts and T7 four inspected matched depth pairs; fresh final forest/moss/elevated/nonglowing views and dark minimum4.714922. Implementer comparison passes; owner quality acceptance belongs to T10. |
| RF-6 | All shared final cells assert16/24px nav and36/54px brand; T3 orientation/wrapping proof preserved; fresh native320/24 menu/six Tab/Escape in both modes/locales. Pass. |
| RF-7 | Preserved96rem/64rem,2px inert quarter-ellipse frame; fresh all-route measurements/views, T4 continuity/terminal references. Pass. |
| RF-8 | Home80/shared160/error320 total presentation coverage across both document shells, with separate About/Projects/error compositions/source unchanged. Pass. |
| RF-9 | Fresh60 interaction records per mode include both document-root bootstrap before first paint, persistence/opposite system, System changes, client routes/history/equivalent locale Projects;80 production hydrated reload supplements. Pass. |
| RF-10 | Retained development160 + fresh production160 native error cells, each direct/reload404 and same-locale native Tab/Enter Home200, JS disabled before80 visits per mode; explicit-origin29 tests per mode/no skips. Pass. |
| RF-11 | Original project mask/repeated copies unchanged; T7 matched four inspected depth pairs plus fresh two-theme work inspection/two computed external filters. Pass; no shape/glow change. |
| RF-12 | Current0px primary-left/secondary-right anchors, uniform original SVG/10:7, side-by-side~50.025% reference and≥24/36px clearance; T6 geometry/paint/hit-tests preserved, final views readable. Pass. |
| RF-13 | T6 actual curved feather pixel profile and untouched negative-z mobile paint fix; fresh lower ellipse/anchors/views, readable bounded text. Pass. |
| RF-14 | T8 final-source80 carousel conditions/174 native interactions and attributable red2→green18 unit tests; final five hashes unchanged. Covers hover/wheel/contacts/cancel/lost tracking/drag/focus/manual intent/visibility/native settlement/no-op/supersession/no catch-up. Reused, not freshly rerun. Pass. |
| RNF-1 | All560 exact requested presentation cells:2 modes × locales/themes/five widths/16–24px; native overflow0, containment, readability/paint checks and source-matching full-hair evidence. Existing placeholder overlap explicitly unchanged/out of scope. Pass for scoped changes. |
| RNF-2 | Actual changed dark pairs meet4.5:1, current sampled controls/focus exceed3:1; fresh menu/404 Tab/Enter, reused T8 stable focused playback/control/manual Pause proof and T6 unobscured link. Existing light inactive contrast/BODY-focus not hidden or fixed. Pass for changed behavior/pairs. |
| RNF-3 | Fresh reduced-motion Hero/manual End per mode/locales320/1440/16–24; reused T8 priority/explicit Pause/visibility/zero-single safeguards. No new animation. Pass. |
| RNF-4 | Font/license bytes match HEAD; source-matching curves/depth comparisons and fresh inspection retain professional organic direction without new ornament. Implementer check passes; final owner acceptance remains T10. |
| RNF-5 | Entry/source/asset/font/content/routes/providers/config/package/locks/user-work guards preserved; no application or test edit, dependency/install/cleanup/refactor. Pass. |
| RNF-6 | Newly executed six AGENTS exit0,29 explicit-origin tests per mode/no skips; native both-mode404 matrices and durable attributed evidence/limits. Pass. |

Final required presentation count reconciliation: exact production cross-product
IDs280/280 with no duplicate/missing row (Home40, About/Projects80, missing160).
Development280 are retained documentary results, not fresh recovery executions.
Additional fresh interactions120 (60 per mode); earlier development42 superseded,
not added. Reload80 supplements do not multiply matrix cells. Reused T8 scoped
matrix80/interactions174 are separately attributed, not full-application cells.
Default tests18 pass/1 explicit no-origin skip; both fresh origin suites29 pass,
0 fail/cancel/skip. No unavailable mandatory check or new related failure remains.

Fresh logs/raw captures/helper source and reconciliation:
/tmp/opencode/spec003-t9-resume/{exits.txt,reconciliation.json,*-tests.log,
home-*.json,shared-*.json,404-*.json,*-interactions-*.json,reload-theme.json,
contrasts.json,final-*.png,entry.sha256,entry.diff,guard.log}.
These auxiliary files remain volatile; substantive proof/counts/exits/attribution
are durable in this document. Inspected final contact-sheet identities:

| Capture | SHA256 |
| --- | --- |
| head-inspection.png | e017dbf84ad8d0afda7003feeca743aa5f77cdd165709179e32ace0eafa903bc |
| about-inspection.png | 1954ce44a503d79af00410913c0ed3d7df29ed0b092873d6b4996f984700a2cd |
| depth-footer-inspection.png | c04c2043f282ab5ee1568f394d0d7d5272132ef1dc25b1e9cc3c2f155869a9fd |
| mcp-prod-dark-1440.png | f57853d123f5c2dc286321b39382b26fd9ac60b8b9d0cb4a337b26ef6851e367 |
| mcp-prod-es-dark-390-24.png | c0d9b9ea0839666df0c1d99251727c8a5ce88f584eb5eef31471ad38341695c5 |

Production32223 and development39036 had fresh repository CWD/exact parent CLI/
process-group ownership verified before SIGTERM. Production shell143 is intentional
shutdown, not failed validation. Native Chrome32286/profile9225 acknowledged
Browser.close. Closed only owned MCP page2; page1 about:blank remains. Final listener/
PID/output-lock inventory and whitespace/source guard are checked before completion.
No unknown/user process, stale PID, cache/output/lock deletion, generated-file hand
edit, install, dependency change, commit/push or MEMORY edit occurred.

T9 is complete only as combined implementation/regression validation. Mark only
T9's checkbox and STOP. T10 remains unchecked: final owner visual acceptance and
independent reviewer requirement verdict are mandatory and are NOT supplied by this
implementer report, existing direction approval or successful task counts.

## T9 full-application regression — development checkpoint, not completion

Date: 2026-10-11. Executing only approved T9, after reading all active authority,
including joint T8 “Las apruebo”; T1–T8 checked, T9/T10 pending. No app/test/source
change. Node24.21.0/pnpm12.4.1. Entry inventory and binary diff retained under
/tmp/opencode/spec003-t9. No existing Next process, output-lock holder or listener
3000/3110/3111/9225 at entry; sequential owned dev3110 and native Chrome9225 started.
MCP isolated page6 belongs to this task; page1 about:blank is protected.

Fresh six AGENTS commands all exit0, logs typegen/lint/tsc/tests/build/whitespace.log;
default tests18 pass/1 explicit no-origin skip. Fresh explicit dev-origin suite29
pass/0 fail/skip, dev-tests.log. Fresh build ID oCpOUes68RrQj17X_O-56; production
has not yet been validated. Commands are not borrowed from T8.

Development now retains **280 unique valid presentation cells**: Home40,
About/Projects80, four simple/nested en/es missing paths × scripts-off/on × themes
× five widths ×16/24px =160. Each uses actual viewport heights568/844/1024/768/900,
root16/24px, locale, selected theme and computed scheme. Document/body overflow0,
positive headings/footer, header text16/24 and brand36/54, non-overlapping header
controls,96rem shell and2px inert curved-frame pseudos where applicable are asserted.
Home combines actual final portrait-mask/photo intersection, preserved9 media copies,
two external filters/print compositing, About anchors/central reference/clearance and
final paint-layer checks in the same cell. This is fresh integration coverage, not
recategorizing the earlier T5–T8 scoped matrices as full-application validation.

All160 missing-page cells additionally pass native reload404 and native Tab3px focus/
Enter same-locale Home200. Native disabling precedes direct visits and stays disabled
through reload/recovery. JS-off theme is controlled data-theme, not hydration. Enabled
cells use the actual mounted chooser. Host-clock readiness avoids the T1 page-timer
problem; direct responses match native navigation loaders. Every valid batch has0
Runtime exceptions. No HTTP-only or skipped test is credited as native proof.

Fresh42 development interaction records pass stored light/dark bootstrap with opposite
system preference (theme mutation before first paint), System light/dark transitions,
Home→About→Projects client navigation, back/forward, equivalent locale Projects,
native enlarged mobile Menu/six preferences Tabs/Escape, and reduced-motion Hero at
scroll0 followed by manual carousel End at320/1440 and both text sizes/locales.
Current-page mobile closure still yields BODY: pre-existing T1/MEMORY defect, not fixed.

Excluded harness attempts: DOM-valued readiness caused CDP object-reference serialization
failure; paired primitive/DOM experiment reproduced it, then only boolean coercion was
corrected. A pseudo-style reader ignored its second argument and falsely read pointer
auto; paired native getComputedStyle(shell,'::before') gives none/2px. Corrected only
the reader. Twelve valid narrow English cells were retained; eight missing resumed.
A combined Home invocation hit the120s host bound after17 valid Spanish cells; those
checkpointed cells were retained, three missing resumed with exit0. No invalid cell
counts, deadline increase, acceptance weakening or application workaround.

T8 final five source hashes match its completion table exactly. Other app/CSS/assets/
fonts/config/content/locks match the T8 entry manifest; only its five approved changes,
tasks/validation and coordinator-maintained MEMORY differ from that earlier snapshot.
Its80 carousel cells/174 interactions remain attributed current-source RF-14 evidence,
not new executions. Root/installed lock discrepancy and pre-existing light inactive
contrast/placeholder overlap/favicon/preload warnings remain; no install or repair.
Production matrices, final reference inspection/guards/resource closure remain pending.
T9 stays unchecked; T10 owner acceptance/independent verdict is not claimed.

## T8 approved amendment — resumption checkpoint, not completion

Date: 2026-10-11. Read complete approved spec/plan/tasks, AGENTS, constitution,
MEMORY and validation, current carousel sources/tests and retained T8 raw logs/native
trace. Joint “Las apruebo” approval and completed T1–T7 confirmed. Preserved partial
contact/policy implementation and unrelated tree. No MEMORY edits or T9 work.
Fresh entry: Node24.21.0/pnpm12.4.1, no Next process, no3000/3110/3111/9226 listener
or output-lock holder. New snapshot: /tmp/opencode/spec003-t8-resume/before.sha256.

### Amendment TDD and implementation

Six additional deterministic playback/ownership tests (14 playback tests total).
First modeled the original32px/s frame write in a pure typed coordination function;
`pnpm test` exited1 with two attributable assertion failures: initial delta0 wrote
2169.5 instead of null during native ownership; reconciled first frame added1.6px
instead of retaining1555.25. Twelve existing passes and one no-origin integration
skip. Then implemented ownership suppression and fresh-frame reconciliation;
added superseding/stale identity, offset mismatch, no-op, interruption, fractional
progress/cap and eligibility-priority regressions. Green:18 passes,0 failures,
one explicit no-origin integration skip (14 playback +4 other unit tests).
Logs red.log/green.log retain exact assertions; no missing-function error is credited
as behavioral red. Original contact red3→green12 evidence above remains attributed
to the prior source, not replayed as a new TDD cycle.

Production track now acquires an identified operation before native smooth scrollTo;
all frame writes, including delta0, and loop normalization defer while it owns scroll.
Operation-scoped scrollend reconciles actual target within1px native rounding,
removes its listener and safely normalizes an equivalent copy. Already-settled
targets do not request smooth motion or await a nonexistent event. Superseding input
aborts the previous native writer with an instant stop at its current offset before
replacement. Root pointer-down capture, hidden/offscreen callbacks, remeasurement,
reduced-motion effect cleanup and teardown likewise stop before invalidating identity.
Fresh-frame state prevents catch-up; eligibility/manual preference remain separate.
The160ms quiet-scroll fallback remains only for non-owned ordinary scrolling; it is
never native-smooth settlement proof. Unsupported scrollend is not silently timed
or replaced with full-motion instant navigation. Executing Chrome supports it.

### Fresh checks and controlled development progress

All six AGENTS commands after amendment source changes exited0: typegen, lint,
tsc, tests (18 pass/1 no-origin skip), build (8 pages) and whitespace. Explicit
dev3110 pnpm test:29 passes/0 skips (18 unit +11 HTTP checks; previous15 includes
4 unit tests and is not15 new tests). Context7 resolution returned Invalid API key;
existing React subscription APIs retained, no Next API/config/dependency change.

Owned dev107677 (parent CLI107660, group107559) on3110 and separate native Chrome
107794/profile spec003-t8-resume/port9226 remain running for pending checks.
MCP owned page5 in isolated spec003-t8-resume context; page1 about:blank preserved.
This is an open-resource checkpoint, not cleanup or T8 completion.

Twenty unique English dev carousel cells passed: both themes ×320/390/768/1024/1440
×root16/24, heights568/844/1024/768/900. Actual viewport/lang/root/chooser-derived
theme/color-scheme,9 copies, inert/hidden outer6,3px focused viewport outline and
document/body overflow[0,0] asserted. Trusted End reaches native smooth target;
capture-phase trusted scrollend offset is within1px. Diagnostic forwarding wrappers
observe native scrollTo/scrollLeft, without replacing browser movement: zero frame
setter writes between smooth request and target settlement in every cell, multiple
native scroll samples. Focus and eligibility remain true. Subsequent measured500ms
motion is31.93–33.95px/s (integer DOM sampling), not a navigation snapback/catch-up.
Trusted mouse hover suspends, wheel while hovered then leave resumes while focused.
Raw rows dev-en-1440.json and dev-en-320-390-768-1024.json; each saved after assertions.
No Runtime exceptions in those valid batches. Spanish/prod matrix, comprehensive
contacts/drag/manual controls/interruption/native404 and MCP screenshots pending.
T8 checkbox remains unchecked; pure/static/partial-browser green is not completion.

### Development browser completed checkpoint

All40 development carousel cells now pass (Spanish adds20 in dev-es-320-390-768-
1024-1440.json), not a replay of completed T5/T6/T7 visual matrices. Native End
settlement/error-free event wiring, focused eligibility, no concurrent frame writes,
hover/wheel leave and ~32px/s resumption hold across both locales/themes/text sizes.

Additional unique development checks:24 desktop +12 mobile in each locale; five
native lifecycle checks per locale; four native404/recoveries; one wheel-during-smooth
probe. These are scoped T8 interactions, not T9's complete shared/404 matrix.
English desktop credits16 valid initial rows, five tail rows and three final rows;
the initial incorrectly labelled Play-during-hover row is EXCLUDED. Spanish desktop
has24 rows from one successful final invocation. Mobile390/root16 each has12 rows.

Native Tab reaches explicit control with3px focus and full in-viewport bounds;
Enter pauses, focus changes do not restart it. Paused smooth End settles and repeated
End requests no new scrollTo (no-op); Play resumes. Trusted Home/End/arrows and all
three Enter indicators settle with stable focus, then move~32px/s. Repeated navigation
supersedes before completion without a stale release/snapback. Two actual touch
pointer IDs retain suspension after the first ends; last release and trusted cancel
resume. Pause during contact survives release; Play while hovered waits for leave,
then resumes with control focus retained. Native vertical touch scroll advances the
page and emits cancellation without suppressing native scrolling. Captured mouse
drag interrupts smooth, releases outside at1,1 with trusted lost capture and resumes.

Contact takeover, offscreen, actual viewport-width resize and reduced-motion changes
each record an instant stop at the CURRENT offset, never an instant full-motion
manual destination replacement. Reduced-motion control is disabled, offsets remain
still and native End selects logical2 instantly; normal motion restoration resumes.
Native tab activation gives genuine hidden/visible document state: hidden interrupts
and stops movement; return resumes. Actual client About navigation preserves marker777,
detaches the old viewport and records teardown's native abort; old offset remains
stable. Root touch on the explicit control temporarily suspends too. Native release
of an already-acquired touch capture emits trusted lostpointercapture for one ID;
the second remains paused until cancellation, then resumes. These are Chrome emulated
inputs, not physical-device or other-browser proof. All valid batches have0 Runtime
exceptions. The wheel-during-smooth probe also settles/resumes (2924→2934 over300ms).

Four direct404 safeguards: en320/light and es390/dark, root24, native scripts-off/on.
Disabling precedes navigation; off-theme is explicitly controlled, on-theme uses
the enabled chooser. Genuine404/no Location, exact catalog title/description, one
main, lang, visible localized native Home link, overflow[0,0], native Tab3px focus
and Enter same-locale document200 pass. External host-clock waits avoid suspended
page timers with scripts disabled. Explicit dev tests remain29 positive/no skips.

Inspected MCP English light1440/root16 work capture with focused viewport, stable
controls and successful End, SHA25664576183caebad4ad9193ec4ba03b821ce20182b1b2adeee0d326b3b9dacdaa6.
Console has only the retained unused-CSS-preload warning; no related error/hydration
exception. PNG/media/font bytes, all CSS and protected source identities match entry;
only five planned app/test files plus validation differ in the full SHA256 guard.
T5 safe box/full-hair evidence, T6~50.025% curve/0px anchors/24–36px clearance, T7
two semantic shadows and0.72/0.9 inactive values are retained unchanged, not remeasured
or replaced by T8-only control measurements. Production validation is pending.

Invalid temporary harness attempts are retained and not counted as passing rows:

- Touch release's compatibility focus restored UL after keyboard Pause, so the next
  Enter did not activate Play. Saved label was still Start automatic progression.
  Corrected only the helper to refocus/assert actual explicit control before Enter;
  excludes that mislabelled row and resumes only missing English checks.
- A30px desktop window resize left capped carousel width unchanged. Thus no geometry
  interruption should occur. Corrected helper to require clientWidth change
  (1440→1024 viewport) and an outstanding long smooth request, not assume it.
- Raw physical offset delta at a loop seam falsely appeared negative (3493→1751).
  Actual copy length~1747px preserves a positive~5px phase advance. Movement checks
  now use measured equivalent-copy phase, consistent with the approved geometry;
  speed/catch-up limits remain unchanged.
- A second touch's hasPointerCapture described its pending implicit capture, before
  gotpointercapture had fired. Releasing pending capture cannot yield a lost-current-
  capture event. Final helper requires actual trusted gotpointercapture on the first
  ID before native release and observes trusted loss while the second ID survives.
  No synthetic pointer events, app capture/touch-action change or timeout extension.

### Production matrix checkpoint

Owned dev107677 was stopped after fresh CWD, parent CLI3110, group and output-lock
verification (intentional shell143). No application source changed after the six
successful checks/build above. Production uses that build, BUILD_ID
ncV7vyHlMkyYiQ7qpYEUN, sequentially on3111 after fresh listener/lock inspection.
Explicit-origin production tests:29 pass/0 fail/skip, matching18 unit +11 HTTP checks.
Production40 unique carousel cells pass the same controls/native-settlement/zero
competing-writer/hover-wheel/focus/resume assertions, measured31.92–31.97px/s over
500ms. Native logs prod-en.log/prod-es.log and checkpointed20-row JSON per locale.
Development40 remain retained, not recounted as new production evidence.

Inspected MCP Spanish dark390×844/root24: effective playback continues with native
Tab focus on stable66px control and3px outline, full in-viewport bounds and overflow
[0,0]. Native Enter changes localized label to Iniciar avance automático and playing
false, retaining button focus. Capture mcp-prod-es-dark-390-24.png shows existing
enlarged two-row controls and native carousel cropping of offscreen slides; no CSS
or silhouette change. Existing enlarged placeholder title/label overlap remains
out-of-scope baseline, not fixed. Console has no errors, only an unused portrait
preload warning after viewport resize; portrait/preload code and bytes are unchanged.
Production comprehensive lifecycle/contact/drag/manual/native404 batches and owned
resource cleanup remain pending. T8 still unchecked; T9/T10 not started.

### T8 completion — production interactions, preservation and resource closure

This completion record supersedes the checkpoints' pending status, not their
attribution. Production successfully completed24 desktop +12 mobile checks in each
locale, five native lifecycle checks per locale, four native404/recoveries and one
wheel-during-smooth probe:87 unique scoped checks, matching development's87. Together
with40 carousel conditions per mode this is80 controlled matrix cells and174 scoped
interaction/lifecycle/native records, not T9's full-site regression matrix. Every
valid batch reports0 Runtime exceptions. Production comprehensive logs exit0;
English dev credited split batches remain as described above, not falsely reported
as a successful initial full invocation. No code changed during browser validation.

| Native End example, en/light1440/root16 | Development | Production |
| --- | --- | --- |
| Actual smooth requested target |1555.25px|1555.25px|
| Trusted native scrollend offset |1555px|1555px|
| Request→target settlement |495.2ms|496.1ms|
| Native scroll samples to settlement |27|27|
| Concurrent RAF setter writes |0|0|
| Eligible equivalent-copy movement after settlement (~501ms) |3889→3905px|3888→3904px|
| Measured resume speed |31.936px/s|31.943px/s|

The~2333px normalization is an equivalent-copy shift, not snapback to logical0.
The selected logical2, focused viewport and playing=true persist at settlement;
manual targets retain native smooth behavior while eligibility is true. Across
all80 cells, smooth reaches target BEFORE automatic writes resume. Pure regressions
also verify first-frame reconciliation/no catch-up and fractional32px/s progress
under the preserved0.05s cap. Superseding, no-op and each listed interruption have
real native boundary evidence above; stale IDs cannot settle a newer pure operation.
Explicit Pause remains stationary after contact/hover/focus changes; reduced motion
remains stationary with instant keyboard access. Zero/single availability is verified
by pure policy tests and preserved fallback/count source, not an invented live fixture;
the real page has3 items/9 copies/6 hidden inert outer copies in all matrix cells.

Production native404 retains the valid English JS-off row from the first invocation
and adds the other three after correcting only a helper serialization error: recovery
readiness returned an actual React-managed h1 object, causing CDP “Object reference
chain is too long”. Boolean !!h1 avoids serializing its React references. No app
change or relaxed readiness; the failed JS-on attempt was not saved or counted.
Final helper exit0, four unique production rows, genuine404→Home200 and scripts-off
native recovery. Wheel-during-smooth production probe resumes2925→2935 in300ms.

Final source guard differs from entry only for the approved five app/test files
and validation.md before checkbox update. All CSS, PNG/SVG/font bytes, T3 navigation,
T4 frame2px/96rem/64rem, T5 fit, T6 geometry, T7 shadow/palette/opacity sources,
data/messages/routes/config/packages/locks, AGENTS/constitution/spec/plan/MEMORY and
unrelated work match entry exactly. No install, dependency, generated-file hand edit,
cache/lock deletion, commit/push or cleanup of unrelated resources occurred.

| Final T8 source | SHA256 |
| --- | --- |
| carousel.tsx |3b7373979ca44390f2c741ba92b86f6605fbaeb0ea26179b86acc75ef027e0d6|
| use-carousel-track.ts |b326079a4fdb76c17fe13377450573ac7958ed53763165ad769a337bc2a79b10|
| use-carousel-playback.ts |5a3b9f2cd4b397716b1768df6798ca0caafff629dd2f0cb99d8e378d6f032824|
| carousel-playback.ts |ea5a514765b3caa8395bc82be3f1754499d5c0e01db420e6227b40ac872019d6|
| carousel-playback.test.mjs |0cb235aa3a86a3cc970d9d404a2981f5f67db033b9e3526b768968e0534eeeab|

Inspected production MCP mobile capture SHA256
256c94813826cd9376b938f7dc2912390ad9184270b45f4058b3fe57911ecddf;
desktop development capture identity above. These are scoped work/focus views,
not all-cell manual image inspection, repeated photo/shadow comparisons or final
owner visual acceptance. Native browser matrices separately assert actual widths.

Fresh native Browser.close acknowledged for owned Chrome107794/profile9226; it
exited normally. Production113955/CWD/parent sh CLI3111/group113854 verified before
its own SIGTERM; dev107677 similarly verified earlier. Both server shells'143 exits
are intentional shutdown, not failed checks. Closed only owned MCP page5; fresh MCP
inventory leaves page1 about:blank. Final listener/PID/lock-holder inspection finds
no3000/3110/3111/9226 listener and none of the owned servers/browser. No unknown or
recycled PID was signalled. Temporary evidence/harness files remain available.

All six required checks are fresh after final substantive code changes and passed;
explicit-origin dev/prod tests each29 pass/no skips. Final whitespace includes the
untracked pure module/test/validation (no-index new-file exit1, zero diagnostics).
Existing light inactive contrast, enlarged placeholder overlap, menu BODY-focus,
favicon and other deferred audit findings remain outside this task; no unrelated
failure was repaired. Context7 unavailable authentication is explicitly recorded,
not a passed docs lookup. Chrome reliable scrollend is demonstrated; unsupported
settlement/other browsers require planning rather than a timer fallback and are not
claimed verified. No physical-device or screen-reader result is claimed.

T8's scoped done condition is satisfied: RF-14 and RNF-2/3/5/6, no new related
regression or outstanding T8 proof gap known. Update ONLY T8's checkbox and STOP.
T9/T10 remain pending; final owner visual acceptance and independent SDD verdict
are not claimed by this implementation. Coordinator alone maintains MEMORY.

## T8 partial — manual smooth navigation conflict returned to coordinator

Date: 2026-10-11. Executed only approved T8 scope (RF-14; RNF-2/3/5/6).
Read full AGENTS/MEMORY/constitution, approved spec/plan/tasks, T1 baseline and
current T7 evidence. T1–T7 are checked; T8 remains unchecked. Node24.21.0 and
pnpm12.4.1; no pre-existing Next processes or3000/3110/3111 listeners at entry.
Root/installed lock discrepancy remains untouched. No install or dependency change.

### Actual TDD and partial implementation

First extracted the existing eligibility expression into the planned pure module
and used it in the production hook, without changing the expression's behavior.
The new typed input also describes the planned touch IDs and mouse-drag blockers.
`pnpm test` then exited1: three behavioral failures (`true !== false`) for contact
suspension, captured drag outside hover, and Play during contact. Seven tests passed
and the no-origin integration suite skipped. This is an attributable behavior red,
not a missing-module bootstrap failure. Log: `/tmp/opencode/spec003-t8/red.log`.

Additional immutable-contact transition tests were written before their API existed;
that intermediate run also failed with two missing-function errors. Those errors
are contract scaffolding, not claimed behavioral-red evidence. The original three
boolean failures remain the behavioral red. After implementing the eligibility
conjunction and contact transitions, `pnpm test` exited0:12 pass/0 fail/1 explicit
no-origin integration skip (eight new playback tests and four existing unit tests).
Logs: `red-contact-contract.log`, `green.log` in the same directory. Tests were not
weakened. Cases cover multiple/duplicate/unknown/ended IDs, last-contact release,
reset, manual preference, hover, reduced motion, visibility and zero/single availability.
Policy tests do not prove browser callbacks, keyboard operation or contact lifecycle.

Partial production wiring uses root touch contact handlers, contact-scoped document
up/cancel/lost-capture listeners, hidden-document reconciliation, and temporary mouse
drag state with document completion listeners. Focus/wheel/pointer/goTo manual-pause
latches were removed. Only the existing explicit control changes manual preference.
Labels/icon/counter policy, count/copies, thresholds,32px/s clock and0.05s frame cap
remain unchanged. Native scroll synchronization retains fractional rounding within
1px. No CSS, input suppression, touch capture, animation dependency or new delay added.
This wiring is NOT fully validated and must not be treated as ready for completion.

### Reproduced blocking behavior

Owned development3110, native top-level Chrome9226,1440×900, English Home, normal
motion. The viewport is centered onscreen and focused; native mouse moves to1,1
outside the carousel. `data-playing=true` is required before a trusted native CDP
`End` key. A diagnostic wrapper records the actual native `scrollTo` call without
replacing its implementation; host-clock samples run every50ms for20 samples.

| Condition | Native smooth target | Actual result after ~1s |
| --- | --- | --- |
| Eligible autoplay, focused viewport, End |1555.25px|2333→2366px; still first project, playing=true |
| Explicit Pause by native Enter, refocus viewport, End |1555.25px|Settles on Living Gallery; playing=false |

The paused control's final offset3888px is the equivalent middle-copy position:
loop normalization shifts the target by approximately2333px (one repeated copy). It is
not a failed target or a replacement instant navigation. Both native calls retain
`behavior:"smooth"`. The trace reproduces the eligible-motion failure twice; the
second invocation adds the paired explicit-pause control. Retained diagnostics:
`navigation-probe.mjs`, `.json`, `.log` under `/tmp/opencode/spec003-t8`.
Diagnostic exit0 means collection succeeded, NOT that manual navigation passed.

`advance` still writes `element.scrollLeft` every eligible frame. Removing goTo's
permanent pause exposes competing native smooth and frame writes. Synchronizing the
current native offset alone does not let smooth navigation reach the chosen item.
This is a NEW related regression in the partial T8 change, not a pre-existing failure.
The approved plan requires usable native smooth selection with eligible autoplay.
The handoff forbids silently adding navigation pause flags, arbitrary resume timers,
instant full-motion navigation or an alternative animation architecture. Therefore
STOP: coordinator must resolve permitted scroll ownership before continuation.
No claim that every possible implementation is impossible; the allowed minimal
offset-sync implementation fails the concrete acceptance scenario above.

### Checks, preservation and limits

- Typegen and lint exited0. Initial tsc exited2 (TS5097: runtime `.ts` extension in
  a bundler hook without allowImportingTsExtensions). Existing application imports
  are extensionless; changed only that hook import, retaining explicit `.ts` in Node
  tests. Re-run tsc exited0. No tsconfig or runner modification.
- Unit green as above; `git diff --check` passed. Build, explicit-origin integration,
  production, full contact/hover/drag/motion/visibility and responsive matrices were
  not run after this STOP. No skipped integration is claimed as404 proof.
- Chrome DevTools MCP owned page4 inspected the real Home carousel accessibility
  snapshot and focused viewport. Console had no errors, only the previously recorded
  unused CSS preload warning. No complete visual, mobile, Tab/Enter, screen-reader,
  physical-device or cross-browser acceptance is claimed.
- Context7 resolution failed with Invalid API key. Existing React19 APIs were retained;
  installed package/types inspected. No new Next API or rendering/routing changes.
- Entry SHA256 guard matches all existing sources except the three planned carousel
  application files. Protected AGENTS/MEMORY/constitution/spec/plan, all CSS, public
  assets/fonts, data/messages, providers/roots/config/packages/locks and prior user
  work are unchanged. Only the two planned module/test files were newly created.
- Closed owned MCP page4, preserving page1 about:blank. Native Browser.close completed.
  Owned dev server102666 was stopped only after verifying repository CWD and its
  parent102643 CLI3110 arguments. Final port inventory has no3000/3110/3111/9226 listener.

Repository delta: three carousel application files, planned pure module, planned
playback test, and this evidence section. No tasks checkbox changed; T8 is partial
and blocked, T9/T10 untouched. Coordinator alone updates MEMORY.

## T7 completed — external shaped-media depth and retained footer

Date: 2026-10-11. Executed only approved T7 (RF-1/4/5/8/11,
RNF-1/2/4/5). T1–T6 were already checked; original spec/plan/tasks approval and
T2 opacity amendment were read. Existing unrelated uncommitted work was preserved.
Node24.21.0/pnpm12.4.1; no existing app listeners on3000/3110/3111 and no native
debugging listener on9226 at preflight. The known root/installed lock discrepancy
remains; no install, dependency/config change or repair was attempted.

### Minimal implementation and comparison

Only two application files changed relative to T7 entry:

- globals.css keeps the existing shaped-shadow token as the near layer and adds
  `--shadow-shaped-media-depth`. Light petrol16%/12%, dark black24%/38%.
- media-frame.module.css applies both external drop-shadow layers on `.frame`:
  offsets/blur0 .2rem .35rem and0 .8rem1.1rem. The masked `.clip` and all Hero-only
  rotated ratio rules remain byte-for-byte unchanged. There is no Hero-specific
  filter override, new animation, rectangular box-shadow or content-covering edge.

No ivory highlight was needed: actual dark contours already separate from moss
without glow. Existing viewport32/40px block padding at root16 (48/60 at root24)
and caption1.25rem spacing suffice. No carousel, selected-projects or footer CSS
edit was justified. Footer retains quiet serif identity, semantic text/accent
colors, wrapping links and existing gutters/spacing; inspected light/dark desktop
and Spanish320/root24 show coherence and readable wrapping, not a new footer design.
Six dark roles, all light/print color values, inactive0.72/0.9, active/focus1,
transitions, slide proportions/count/gap/transforms/speed and playback are unchanged.

Fresh pre-edit development references include four English matched conditions:
390×844 and1440×900, each light/dark, root16, DPR1. Capture positions are Home top,
viewport scrolled to Selected Work start, and footer end; manual Pause stabilizes
the carousel. Both before/after work captures for all four conditions were visually
inspected: same organic silhouette, soft shaped petrol depth in light, more defined
soft dark contact/depth below and beside media, no neon/glow or rectangular border.
The pre-T7 reference includes completed T5/T6 geometry; it is not a recreated T1
baseline or an assertion that the owner has accepted the result.

`matched-summary.json` asserts exact before/after equality for Hero and footer
rectangles/text, carousel gap/padding, all9 copies' frame/clip/caption/label bounds,
mask/size, opacity and actual print colors/contrast. Reference frame-box dimensions
(not photo-visible or mask-opaque spans):390 has Hero308.029px, active project
301.5×190.9375px;1440 has Hero523.087px, active project729.625×462.09375px. Active
caption gap20px in each. Across resulting matrices every caption bounding box
starts below its media, minimum14.906px including existing rotated copies. Inspected
shadows have no abrupt top/bottom cut, and active captions/controls stay clear.
Intentional inline viewport cropping of offscreen slides/captions remains baseline
carousel behavior; this is not a claim that offscreen copies are all fully visible.

### Fresh validation results

All six commands returned exit0 after the final application delta:

| Command | Result / log under /tmp/opencode/spec003-t7 |
| --- | --- |
| pnpm exec next typegen | Pass; typegen.log |
| pnpm lint | Pass; lint.log |
| pnpm exec tsc --noEmit | Pass; tsc.log |
| pnpm test | 4 pass/1 explicit no-origin integration skip; tests.log |
| pnpm build | Pass/8 pages; build.log; BUILD_ID SduE7zZTXYIHVD9VCrJck |
| git diff --check | Pass; whitespace.log; repeated after evidence/checkbox |
| LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test | 15 pass/0 skips; dev-tests.log |
| LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test | 15 pass/0 skips; prod-tests.log |

No project tests were created/modified: this is a purely visual CSS change, verified
through actual browser comparisons rather than artificial source-string tests.
Temporary native-CDP probes are outside the repository. Development's initial
caption probe incorrectly demanded1.2rem separation between rotated bounding boxes;
inspection established unchanged20px CSS margin but smaller rotated box separation.
The corrected probe asserts positive non-overlap and retains actual measurements.
Two interaction harness failures are excluded: returning a DOM node through CDP
caused an object-reference serialization error; then a keyboard pause assertion ran
without asserting the enabled control/current manual preference. Final harness uses boolean
readiness, enabled control, normalized manual preference and native Enter text.
Final dev-regressions-v3.log/prod-regressions.log pass; no app fix was made for these.

Each mode completed40 unique Home conditions: en/es × light/dark ×320/390/768/
1024/1440, heights568/844/1024/768/900, root16/24. Actual viewport/root/theme/lang,
font/image readiness, all9 copies, identical per-item copy dimensions, original
mask URL/100% sizing, two filters and document/body overflow[0,0] are asserted.
Both modes add32 scoped regression records:16 About/Projects shared-shell cells
(both locales/themes,320/root24 and1440/root16), four keyboard/manual selections
covering all three tones, four reduced-motion/manual-End records, eight nested/simple
native JS-off404 reload/recovery records (both locales/themes,1440/root24).
JS disabling precedes404 visits/reloads; genuine404 and native Tab/Enter same-locale
Home recovery verified. JS-off theme is controlled data-theme, not hydration.
These are T7-scoped checks, not a replay or completion claim for T9's full matrix.

Actual computed label/print colors are converted through sRGB canvas, then every
ancestor opacity is multiplied and foreground/background composited over the
actual Selected Work surface before WCAG luminance calculation. All nine copies
and three tones participate; dark minimum4.695187:1 in both modes, above4.5:1.
This probe quantizes canvas channels to8-bit; it is not a replacement for T2's
higher-precision4.715 result or a claim of changed text-pair colors. Exact matched
before/after ratios/colors/opacity agree. Light minimum3.140777:1 across all tones
is identically present before/after; T2 already documents light inactive-label
contrast below AA. It is outside T7's unchanged light/print palette, not fixed or
reported as universal AA compliance. Shadows are behind opaque content, not a
foreground recoloring. Existing menu BODY-focus defect remains deferred.

Chrome DevTools MCP owned page3 inspected dark desktop work before/after, Spanish
320/root24 footer and full-haired portrait, and production Spanish1440 dark work.
Production MCP error/warning console is empty; all passing native batches report
zero Runtime exceptions. MCP window resizing alone yielded a500px minimum; that
intermediate screenshot is not320 evidence. Explicit viewport emulation then
asserted320×568. Native matrices assert all requested dimensions independently.
Additional inspected captures include production Spanish sage active media/focus,
light mobile Hero, and both desktop footer themes. Not every capture was manually
reviewed; no physical-device, assistive-technology or other-browser claim is made.

### Source guards and durable reference identity

All public/font files match the pre-edit SHA256 manifest; existing modified-source
guards match except the two intended CSS files. spec/plan, T6 geometry, providers,
photo/masks, fonts/licenses, data/copy, markup/API, configuration/package/locks,
AGENTS/constitution/MEMORY and unrelated work were not edited. Asset identities:

| Source | SHA256 |
| --- | --- |
| portrait.png | 529f721fe3bb9f8fe02bbe0cad6bbedae4b88f01fc13271a83f72cf2bcd85e51 |
| hero-frame-02.svg | 67edc1c3fb63fc900cc848f815ad6f9522cf3549d8fe4e0c3f575d4a5407a1b9 |
| media-frame-02.svg | 8b1f46d9a9b67de57e25270a2c8bb8081ca3adb758d981d2dbe868c521804aca |
| about-primary-divider.svg | 5a534debab49d3043b91ae71a667d6c83cbee5110d78bfef7652a88378f0b0e7 |

Four inspected work reference pairs under /tmp/opencode/spec003-t7 use filenames
`dev-{before,after}-en-{theme}-{width}-16-work.png`; exact hashes below. Temporary
images may vanish; the controlled comparisons, invariant measurements and inspection
are recorded above rather than claiming temporary files are permanent evidence.

| Theme/width | Before SHA256 | After SHA256 |
| --- | --- | --- |
| light390 | 2b5cf5baa12c646f315353b8a49a89847bef37164209c13b5a63afe9a0b87762 | 27b52b620deb4bf210e70ad2d13c682dc7a1f55ade0b54b358a2fd86af7f3fe6 |
| dark390 | a9d4545133c0e5302a90238e21165a75f77a1a579b294c5429af6c06587a3b2f | 210e4d86f0f8fb86d26625fc12a5e2b8edb0519866f9ee93fcb82d2a689be6df |
| light1440 | f08929bfbf53369cfc9f775d9f4449ce9a891ff0f675a771ad7f4df92bf691a1 | e73cd4ffaa8634fbcdcef5b69e1df0d80cbf6ab99d201048fc6b8df342a3793c |
| dark1440 | a9de4696918e199a2c1df6f582ad7a13535ddf29bf3aaccab7283fe77badda54 | 04c727481c923b54fb65ebf99ab8532effeefc8e4590e0957e282ed98114d27a |

Final owner visual acceptance remains required in T10. T7 does not approve unseen
final UI, fix existing unrelated issues or start T8 playback work.
Owned dev95927 and production99911 were stopped after verifying repository CWD and
their3110/3111 CLI ownership. Native9226 browser acknowledged Browser.close and
exited; MCP page3 alone was closed, preserving page1 about:blank. Production's
SIGTERM exit143 is intentional cleanup, not a failed validation. Only T7's checkbox
is updated below; no later task was begun.

## T6 completed — bounded About geometry and readable curved blend

Date: 2026-10-11. This final record supersedes the interrupted/pending T6 checkpoints
below. Approved RF-1/12/13 and RNF-1/2/4/5 are covered within T6 only; final owner
visual acceptance and independent review remain T10. No T7/T8 work was started.

### Scope and final checks

Preserved the existing T6 geometry on continuation. Only four necessary additional
CSS declarations were applied in about-preview.module.css: upper content positioned
at z-index1 so the transparent masked canvas cannot intercept its link; lower media
isolated with the mobile feather at z-index−1 so it cannot paint over placeholder
text. Native hit-test red→green and paired mobile pixel red→green are recorded below.
No project test was created/modified; visual CSS was checked in real browser probes,
not artificial source assertions. All temporary helpers remain outside the repo.

After the final source correction, all commands passed with exit0:

| Command | Final result / retained log under /tmp/opencode/spec003-t6 |
| --- | --- |
| pnpm exec next typegen | Pass; typegen-final-v2.log |
| pnpm lint | Pass; lint-final-v2.log |
| pnpm exec tsc --noEmit | Pass; tsc-final-v2.log |
| pnpm test | 4 pass/1 explicit no-origin integration skip; tests-final-v2.log |
| pnpm build | Pass/8 pages; build-final-v2.log; BUILD_ID -BhXeV7i6oy60MSZs2z8i |
| git diff --check | Pass; whitespace-final-v2.log, repeated for final evidence |
| LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test | 15 pass/no skips; dev-tests-final-v2.log |
| LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test | 15 pass/no skips; prod-tests-final.log |

Earlier command sets were rerun only after a demonstrated related source correction,
never counted as final-source checks. Completed T1–T5 verification was not replayed.

### Measured geometry and final presentation

Each mode accounts for40 unique About conditions: en/es × light/dark × widths
320/390/768/1024/1440, heights568/844/1024/768/900, root16/24px. Actual viewport,
root, chooser-derived theme/color-scheme, locale and document/body overflow[0,0]
were asserted. Four original English320 rows were retained after inspection; the
missing36 dev geometry cells and40 prod geometry cells have saved exit0 batch logs.
Final40 paint/readability probes per mode supplement, rather than multiply, those
same cells. They confirm unchanged primary/secondary/lower dimensions after both
stacking fixes, original-mask containment of all primary-label rectangle corners,
non-overlapping heading/number, preserved natural ratios and readable secondary text.

The stable T4 content-box edges are used, not viewport bounds: actual borders2px
at1024/1440; no borders at the other widths. Both requested media anchor gaps are
exactly0 in all80 geometry cells. Representative production dimensions agree in
both locales/themes and both text sizes; side-by-side metrics apply only from48rem:

| Width | Inner W | Primary canvas W×H | Mid-height reference | Upper clearance16/24px | Lower intrusion16/24px |
| --- | --- | --- | --- | --- | --- |
| 320 | 305 | 305×213.5 | Stacked; not judged | Vertical separation | Mobile upper curve |
| 390 | 375 | 375×262.5 | Stacked; not judged | Vertical separation | Mobile upper curve |
| 768 | 753 | 631.766×442.234 | 50.0252% | 24.464/36.464px | 48/72px |
| 1024 | 1005 | 843.188×590.219 | 50.0248% | 24.622/36.622px | 61.438/72px |
| 1440 | 1421 | 1192.219×834.547 | 50.0253% | 24.882/36.882px | 86.391/86.391px |

Mask reference uses sampled original SVG y350 rightmost crossing, approximately
x596.24/1000; maximum opaque x, not the83.9%-wide transparent canvas box, determines
upper clearance. Original1000×700 canvas is uniformly scaled, not stretched to
text height; tall768/24 text grows the section while the media centers vertically.
All side-by-side samples remain45–55% and≥1.5rem clear. Lower text rects end at
least1.5rem before the adjoining-image boundary; secondary labels begin beyond
intrusion+1.5rem. Secondary media retains16/10 and remains flush right.

Desktop surface overlay is an inert ellipse centered on composition height with
the approved clamp intrusion and1.5rem feather; mobile keeps a stacked64/96px-high
upper ellipse. Actual pixel profiles on final production1440/16 captures corroborate
a curved perimeter, not a straight fade: half-alpha intrusion at25/50/75% height is
59.5/73.5/59.5px light and61.5/74.5/60.5px dark; it reaches0 near2/98% height.
At mid-height,97%→3% alpha spans approximately22–23px (24px authored feather).
8-bit raster/color rounding explains theme differences; this is a sampled profile,
not a claim of exact alpha reconstruction. Pixel-profiles.json retains all seven
height samples per theme. Decoration and its feather remain bounded and inert.

### Actual readability, focus and visual inspections

Final dev/prod seven actual text/background endpoint pairs agree. Minimum ratios:
primary/secondary placeholder5.563497, secondary over surface7.051462, upper/link
7.387319, number6.185985, lower copy5.904745; all pass4.5:1. Foreground remains above
the mobile feather at opacity1. Both background endpoints pass, covering intermediate
surface/elevated blends; the pre-fix opaque-only evidence is explicitly superseded.
Final320/24 production screenshot equals the temporary below-text diagnostic byte
for byte (SHA2566d9156350276bd16ff76421df31b30e38368c47f99ec20aba72d52e1abfc8dbf).
This confirms the previously diluted first line is no longer covered.

Each mode retained40 upper-link focus/hit-test probes and four native Tab/Enter
About-link operations in en/es at320/24 and1440/16. Upper stacking correction is
verified by unobscured hit-tests and3px visible outlines; dimensions remain unchanged.
Four native404/recoveries per mode preserve genuine404, requested lang, one main,
native same-locale recovery and Home200, with scripts disabled before JS-off visits.
These interaction probes followed the upper fix; the subsequent lower-pseudo-only
fix changes no upper controls/routes. Final HTTP tests and both final40 paint matrices
also pass after it. This is proportional regression coverage, not T9's full matrix.

Chrome DevTools MCP inspected owned dev About and prod lower composition; final
production reload independently confirms both stacking rules and has no console
warnings/errors. Earlier favicon404 was explicitly attributed via request57;
development unused CSS preload warnings are pre-existing. Native valid batches
report no Runtime exceptions. Script/prefetch404 is not relabelled a hydration bug.

Manually inspected representative final upper/lower views spanning all five widths,
including English light320/24 secondary/390/16 stack/1024/16 primary, Spanish
dark768/24 centered primary and1440/24 lower composition, plus both-theme desktop
pixel-profile views. No claim that every screenshot was manually reviewed is made.

Four corrected, inspected before/after region pairs are comparison-final-* files:
en/light and es/dark, upper/lower,1440×900/root16. Before temporarily applies original
About CSS to the otherwise current T5 app, explicitly resetting T6-only properties;
after removes that diagnostic style. Region-aligned scroll positions are recorded
separately because changed section heights alter absolute document scroll. These are
controlled T6 comparisons, not historical T1 captures or matched absolute-scroll
full-Home baselines. Upper curve moves toward center; lower right inset disappears
and the straight blend becomes an ellipse. Final owner review remains outstanding.

Initial before-style capture attempts were invalid: injected regex escaping altered
CSS property text/part of generated class names, and omitted resets retained new
declarations. They are excluded from comparison proof. Corrected host-side single-pass
class replacement and explicit resets assert original static stack, zero upper
padding, absent new pseudo, mask:none and original gap before capturing; final batch
exit0. Only necessary references were recaptured, not passed presentation matrices.

### Durable provenance, source guards and cleanup

Raw /tmp/opencode files are volatile; substantive conditions/results are retained
above. Final paint JSON hashes: dev6391383d9f91e24aef9db0a349768d92586cc10a76b94b50a661203ccf4c3060;
proda5e7142bf593efcefd813db59919a6c72be3613cf3a1f31f7031f94f1726d8ee.
Corrected reference SHA256, before→after:

| Pair | Before | After |
| --- | --- | --- |
| en/light upper | e0e84e64b113353cb1f26d929304ab09784c56e42e4f33ae023a81094b7738b8 | 3d8dc28f00f2ca7740821714d82a68fcc54b1d519774450bf66c54ba7ea907ea |
| en/light lower | cdf7bf9d7907a5fe57155f1c9ed5cb5b1da72c90724914502306a2be5df2aebb | 5a2cfc28f779b7650579cb950de0a4b043d1fbda52806fea908aa4b7bd170dc2 |
| es/dark upper | e1dd4fc267e4744e6e60be97af13eb9898678c3da4f7d3cebbfa53178f7bc3df | a1a0459c1016c232fbce063adfc96b38bc31fd25b4c747a45826fba6d6d39dae |
| es/dark lower | 2aa4c5b8c4b9fde16f1d51e8fd701717097d6cb852b33e332552bc92b2fdf257 | 2636429913d88e9fd14cba7654cfe819d7a02d8ffd4c2be3114aae2eb32b0ebb |

Final86-file guard differs from the interrupted pre-T6 snapshot only for About CSS,
validation.md and a pre-existing MEMORY update: current MEMORY bytes exactly match
the saved beginning-of-this-continuation authority read, SHA256
3fd390db340d6f8ba9bc2347f604bb80a9a2d47f7f8275cd5a251085c9155b3b.
No MEMORY change is attributed to this implementer or an unknown agent. Other
source/protected files match, including T1–T5 styles, component/DOM, fonts, routes,
config/packages/locks and content. PNG and all SVG hashes remain exactly as in T5;
About SVG5a534debab49d3043b91ae71a667d6c83cbee5110d78bfef7652a88378f0b0e7.
Final About CSS8e99f1250284a25d7d8c918c03a38c1cad47424d4756689f9d7d9b572e84d2ee.

Owned dev servers79119/91193 and prod89443/92793/93788 had CWD/CLI/groups verified
before their own SIGTERM; shell143 is intentional cleanup. Both owned native Chrome
instances acknowledged Browser.close. Only MCP page2 was closed; page1 about:blank
survives. Final inventory/whitespace are checked before marking only T6. No lock/cache
deletion, generated-file hand edit, dependency/install, user-process signal or commit.
Known unrelated menu-focus/light-carousel-label contrast/audit concerns remain
untouched; no physical-device, other-browser or screen-reader result is claimed.
No new related regression or blocking proof gap remains for T6. Stop after T6.

## T6 recovery checkpoint — 2026-10-10 23:14–23:16 EDT

**T6 is applied in source but remains unchecked and unvalidated as a whole.**
This recovery call was explicitly limited to read-only inventory and this durable
checkpoint: no app edit, server, build, typegen, test or browser batch was run.
SDD and full AGENTS/constitution/MEMORY/approved003 spec/plan/tasks/validation were
read. T1–T5 are checked; T6 depends on completed T4–T5; T7–T10 remain pending.
Previous approved task evidence is retained, not replayed. No prior T6 conversation
or final report is available here; no execution is attributed to an unknown agent.

### Recovered source and protected identities

The existing about-preview.module.css already uses the full bounded width,
border-box natural10/7 primary canvas, original left-anchored SVG,83.9% desktop
canvas, upper text offset calc(51.7% + 1.5rem), independent gutters, and lower
right-anchored16/10 media. Its desktop inert elliptical overlay starts at50%,
uses clamp(3rem,6vw,6rem) intrusion and1.5rem perimeter feather; mobile has a
4rem-high elliptical upper transition. These are source facts, not rendered passes.
Current CSS SHA256:13d683c5bcf2a81b6b3161e7ce5975ee0b20ac3c0192e1c6320b1adda9828718.
The retained /tmp/opencode/spec003-t6/before.css matches original About CSS SHA256
8fc4cb1667040fd2f769d107bfffa012d2f316e1e7e5ff8c40b923b5f6043413.

Selective comparison to spec003-t6/before.sha256 confirms unchanged About component,
four T5 sources, T4 shell, T2 globals/carousel and four T3 navigation/theme sources.
About component SHA256:1046d593374845c15ada7083cc9740b71c4cda4a45940bc625007b20a46fe356.
Fresh PNG and all three SVG hashes match the T5/T1 asset identities above, including
About SVG5a534debab49d3043b91ae71a667d6c83cbee5110d78bfef7652a88378f0b0e7.
This is a lightweight selected guard, not a new full-inventory pass. The extensive
pre-existing uncommitted tree remains protected; nothing was reset or repaired.

### Actual retained evidence and limits

Regular top-level artifacts under /tmp/opencode/spec003-t6 are before.css,
before.sha256, cdp.mjs, matrix.mjs, dev.log, chrome.log, dev-en.json and eight PNGs.
dev-en.json contains exactly four rows: dev-en-{light,dark}-320-{16,24}, viewport
320×568, inner bounds0–305, asserted root/theme/lang, both media anchor gaps0,
document/body overflow0. The saved helper writes each row after its geometry
assertions and two captures. These are retained partial mobile observations, not
an accredited complete invocation: no final stdout/exit log survives, no manual
image inspection is claimed here, and the browser source identity is not pinned
by that JSON. Its SHA256 is
a59f7056ae4c8a6afb768f4b21d323d88743ea1e80690665495bfcf8c7620a7e.
Mobile mid59.6239%/horizontal clearance−187.7183 are diagnostic values, not desktop
failures: mobile stacks and is not subject to the side-by-side central-axis test.
No390/768/1024/1440, Spanish or production rows are retained in this T6 directory.
No T6 checks/test/build/exit log was found; their execution/result is **unknown**,
not inferred as pass or failure. dev.log shows ready177ms and English200 plus the
known favicon404; it does not establish full console, focus or UI acceptance.

Production BUILD_ID RHdtA69IKSYUKDYz0hSr8 has mtime20:49:16 EDT; About CSS is
21:23:43 EDT. That build predates the T6 delta and cannot validate it. Dev lock
metadata names PID61122/port3110, but fresh ps finds no such PID or Next process,
ss finds no3000/3110/3111/9225 listener, and fuser finds no output-lock holder.
No process was signalled or lock deleted; stale metadata is not process ownership.
Root/installed lock hashes still match the recorded discrepancy; no install is
authorized or needed for this recovery. Browser MCP inventory was unnecessary.

### Next safe validation batch — suggestion only, not executed

Coordinator should retain T1–T5 accreditation and this already-applied CSS. Recheck
live output/port ownership, then collect only missing or insufficiently accredited
T6 evidence in bounded checkpointed batches: remaining dev About cells and manual
mobile/desktop curve/readability references,45–55% mid-height reference,≤1px anchors,
≥1.5rem clearance, original uniform mask, lower48–96px normal-size intrusion/feather,
focus and actual used contrast/console. Inspect retained four mobile cells/captures
before deciding whether they need replacement; do not invent a prior batch failure.
Run still-unaccredited six AGENTS checks after the delta and explicit-origin15-test
dev/prod checks, with sequential owned servers and a fresh successful T6 build
before production UI validation. Cover en/es, both themes, all five widths and
16/24px text in both modes; preserve asset/source guards and proportional regressions.
Persist command exits and substantive geometry/visual findings before any restart.
Do not reimplement from source predictions, mark T6 complete, start T7/T8 or edit
MEMORY. Missing evidence is the present blocker, not a demonstrated new app defect.

## T6 authorized continuation — development progress, not completion

Following explicit continuation authorization, preserved the applied CSS without
reimplementation. Owned dev3110 and native Chrome9225 were started only after fresh
free-port/process inspection. MCP isolated page2 was created; blank page1 untouched.
Retained four original controlled English320 mobile rows/eight captures; recovered
helper assertions and JSON were inspected. Added16 English and20 Spanish cells,
checkpointed under /tmp/opencode/spec003-t6/{dev-en,dev-es}-v2.json with final exit0
logs dev-en-v2c.log/dev-es-v2.log. This gives40 development geometry cells, not yet
complete visual/focus/contrast validation. All accepted anchors0, overflow[0,0],
uniform10/7 primary and16/10 secondary ratios; side-by-side mid-reference50.024–
50.026%, clearance24.464–24.882px normal/36.464–36.882px enlarged. Mobile stacks.

Two interrupted external-harness attempts are not passes: first mobile390 dark
stack assertion failed, but the failed row was not saved and a fresh identical
probe passed without app changes; its cause is not established. A later repeatedly
sampled50001-point SVG Runtime.evaluate exceeded the helper's5s deadline. Changed
only the external helper to cache20001-point metrics and require fonts.ready plus
stable layout snapshots. No app acceptance threshold was weakened. Passed cells
were resumed, not replayed. Remaining settled visual probes, source pin, AA/focus,
six AGENTS commands, positive-origin dev/prod tests and production40 cells are
pending. T6 stays unchecked. No app edit or later-task work occurred.

### T6 development correction and verification checkpoint

Supplementary40 settled dev probes passed original-mask placeholder containment,
non-overlapping number/heading, actual six text-pair contrasts≥4.5, opacity1 and
lower label clearance beyond intrusion+1.5rem. Original PNG/SVG served bytes match
source hashes. A detached diagnostic SVG initially made isPointInFill return false
even for known interior point100/350; attaching it invisibly gives true there and
false at900/350. Corrected only that external probe; no source-shape change.

Native desktop Tab exposed a genuine T6-related interaction failure twice: the
transparent portion of the masked primary canvas intercepted the Read more link
hit-test despite geometrically clear text. Applied only position:relative/z-index:1
to .content in About CSS. Identical native probe changed unobscured:false→true,
and Tab/Enter reaches localized About. No geometry, asset or palette alteration.
Final40-cell dev focus sweep passes unobscured3px focus, viewport containment,
overflow0 and dimensions identical to pre-stacking40 verified cells. A sweep
attempt that refocused an already-focused link after text resizing left it offscreen;
the saved failed rect y1374 at320/24 identifies the harness setup, not an overlay.
Blur/refocus establishes a new focus event; no app workaround/threshold relaxation.

Development interactions now retain four native About-link operations (both locales,
320/24 and1440/16), four genuine404/native same-locale recoveries (scripts-off/on,
disabling before visits), and eight comparison captures (four before/after pairs).
Before captures temporarily apply only original About CSS to the otherwise current
T5 app; this is a controlled T6 comparison, not recreated T1 full-page baseline.
Final post-stacking explicit3110 tests pass15/15/no skips. Logs/records are retained
under spec003-t6, including dev-verify-v2.log, dev-interactions-v3.log,
dev-focus-sweep-v2.log and dev-tests-final.log. Owned dev79119 was verified by CWD,
CLI/PGID78991 and dev-lock holder, then stopped for checks/build (shell143 intentional).
Production/static validation still pending; T6 remains unchecked. T7 untouched.

### T6 production progress and mobile-layer correction — not final validation

After the upper stacking fix, all six AGENTS commands exited0; default tests4 pass/
1 no-origin skip. Build5g0U7R6ImBZXIyKGwrJ9j produced40 production geometry cells,
40 supplementary DOM-color/containment probes and40 unobscured upper-focus probes;
positive3111 tests15/15/no skips. Native production records cover four About links
and four404/recoveries. English320/24 Tab auto-scroll left the padding-box bottom
0.109px beyond viewport while all text was visible; a native ArrowDown brings the
whole3px outline in before Enter. An initial CDP ArrowDown without virtual-key40
did not scroll and is rejected, not an app failure. The corrected native batch
exited0. MCP production favicon404 is explicitly network request57; no JS exception.

Settled production mobile-media inspection found a real remaining T6 paint issue:
the mobile ::before feather overlays the first placeholder line at320/24. Paired
temporary diagnostic captures preserve the same geometry/curve while changing only
layer order. At fully painted glyph pixel157/84, original RGB160/168/161 becomes
53/79/82 when below text; nearby background230/226/211 gives1.880:1 vs6.767:1.
32 of45 fully painted first-line glyph pixels were diluted. Thus earlier computed
opaque-pair passes did not establish actual unobscured mobile-label AA.

Applied only isolation:isolate on .directionMedia and z-index:-1 on its ::before,
keeping curve, feather, ratio and all bounds unchanged. This implements the approved
readable placeholder, not a new layout strategy. Source fix needs final validation;
the preceding build/static and pixel records remain attributed pre-fix evidence,
not final green. Owned production89443 CWD/parent CLI/PGID89342 verified and stopped
(shell143 intentional). Final dev paint checks/build/prod paint checks follow;
geometry matrices are retained, not automatically replayed. T6 remains unchecked.

### Final-layer validation checkpoint — 2026-10-11

Final About CSS SHA2568e99f1250284a25d7d8c918c03a38c1cad47424d4756689f9d7d9b572e84d2ee.
Final40 dev paint/readability probes passed with isolated media/negative-z feather,
foreground above feather, AA at both gradient endpoint backgrounds and unchanged
primary/secondary/lower dimensions against the retained cells. Dev positive tests
again15/15/no skips after this fix. Owned dev91193 CWD/CLI/PGID91065/lock verified,
then stopped (shell143). Final six AGENTS commands all exit0, logs *-final-v2.log;
default tests4 pass/1 explicit no-origin skip. Final build ID-BhXeV7i6oy60MSZs2z8i.
Earlier checks were repeated only because the subsequently demonstrated paint
defect required a source change; they are not substitutes for these final checks.
Final production paint/pixel confirmation and final guards/cleanup remain pending.

## T5 implementation checkpoint — 2026-10-10

T5 was freshly confirmed pending, with T1–T4 checked and approved spec/plan/tasks
present. Existing uncommitted spec002/003 and portrait work is preserved. No T5
code had been applied on arrival. Node24.21.0/pnpm12.4.1 and free3110/3111 were
confirmed; no install, configuration or dependency change. Installed Next image
guide was read for fill/contain/sizes/preload. Original PNG visually inspected.

Applied only the four approved source files: natural1122/1402 ratio sourced from
portrait.ts through a Hero-scoped CSS custom property, approved90%/25rem and
98%/32rem widths, reciprocal rotated-mask/counter-child sizing, centered5% safe
box, contain/top fit, responsive sizes capped at22.5/28.8rem for the90% photo.
The existing rotation, scroll exit animation, shadow filter, source paths,
localized alt and placeholders remain. This is visual geometry, not new business
logic; no artificial source-string/unit test was added. Browser verification
and required commands remain pending at this checkpoint. T5 remains unchecked.

Pre-edit copies of the four files are under /tmp/opencode/spec003-t5/before;
temporary artifacts are not durable proof by themselves. Owned dev server3110
started only after confirming no existing app server/output conflict.

### T5 development evidence checkpoint

Native top-level CDP on an owned headless Chrome (port9225, forced device scale1)
passed40 Home cells: both locales/themes, five matched widths/heights and16/24px
root. Font loading, viewport, root, theme/color-scheme, scroll0, contain/top fit,
natural frame/photo ratio, shell containment and document/body overflow[0,0]
were asserted. Original T1 normal-motion comparison conditions were retained.
All40 portrait captures were inspected as two labelled20-cell head contact sheets
against the original PNG: top/side hair and face complete in every cell, no adjacent
text/frame concealment. Captures exclude only lower torso in the head sheets;
the saved portrait crops retain full frame. No inset adjustment was necessary.

Normal-size results identical across the four locale/theme contexts:

| Viewport | T1 photo-visible span | T5 dev photo-visible span | Increase |
| --- | --- | --- | --- |
| 320×568 | 195.255 | 208.746 | 6.91% |
| 390×844 | 247.171 | 263.886 | 6.76% |
| 768×1024 | 278.194 | 295.532 | 6.23% |
| 1024×768 | 377.033 | 399.399 | 5.93% |
| 1440×900 | 421.377 | 448.125 | 6.35% |

Measurement:20001 supplied SVG path-length samples transformed through the actual
rotated Hero dimensions and resting wrapper matrix; sampled polygon intersected
with actual photo rectangle using four half-plane clips before projection.
This excludes shadow/background rim, including the bottom strip outside the safe
box. Actual content/photo dimensions were used, not just nominal wrapper growth.
Sampling is approximate, not pixel-exact alpha. Raw40 rows retain local frame,
content/image dimensions, transformed image rectangle, mask/photo spans and bounds.

Chrome DevTools MCP was also used for direct Hero inspection and viewport control.
Its initial non-emulated resize clamped390 to500; that cell was rejected. Under
MCP emulation the1024 cell reported document overflow1/body0, unchanged when Hero
was hidden. The independent forced-scale1 browser gives[0,0] in all40 cells. No app
CSS was changed to suppress this harness discrepancy. MCP later lost page IDs on
reconnection; those failed calls are not passing evidence. Native CDP supplies the
complete controlled matrix. External harness initially omitted awaitPromise on an
async measurement; rejected before accepting any rows, corrected in harness only.

Fresh typegen/lint/tsc and no-origin tests passed (4 passes/1 explicit integration
skip). Explicit3110 tests then passed15/15, no skips. Production build and production
matrix are still pending at this checkpoint; T5 remains unchecked.

### T5 completion — production and final checks

Production repeated the same40 valid Home cells; every normal-size span matches
the development table above. All80 portrait captures were visually inspected via
labelled contact sheets (production Spanish additionally split into four rows),
against the supplied PNG, for complete top/side hair, face and unchanged proportions.
The four complete-Hero references inspected were production en/light320/1440 at16px
and es/dark320/1440 at24px. These show readable separated introduction/photo and
frame containment. A development en/light768/16px full-Hero reference was also
inspected, with no photo/text overlap. No claim of manual full-page inspection of
every Home capture, or resolution of unrelated About/Selected Work issues, is made.

| Width | Actual frame W×H,16px | Actual photo safe-box W×H,16px | Mask span | Photo span |
| --- | --- | --- | --- | --- |
| 320 | 238.500×298.016 | 214.641×268.203 | 208.746 | 208.746 |
| 390 | 301.500×376.734 | 271.359×339.062 | 263.886 | 263.886 |
| 768 | 337.656×421.906 | 303.891×379.703 | 295.532 | 295.532 |
| 1024 | 456.328×570.203 | 410.688×513.172 | 399.399 | 399.399 |
| 1440 | 512.000×639.766 | 460.797×575.781 | 448.125 | 448.125 |

Equal horizontal spans do not imply no rim: the rectangle clips the lower mask
extent, but the horizontal extrema remain inside the photo. Width is measured
after this intersection, not inferred from wrapper or shadow. At24px, frame/photo
ratio remains1122/1402 within0.0001 in all contexts, and overflow remains[0,0].

Additional production16 controlled motion records cover320/1440 × en/es × both
themes ×16/24px: resting, existing exit scroll phase, and reduced-motion. The
existing transform changes during scrolling, becomes none under reduced motion,
and overflow remains0. No motion code was modified. Four fresh native top-level
404 records cover both locales with JS disabled BEFORE visiting and JS enabled:
genuine404/no redirect, correct lang, Tab to native same-locale Home with3px focus,
Enter recovery200 and loaded supplied portrait. These are targeted T5 regressions,
not the full T9 error-page matrix. No Runtime.exceptionThrown in the matrix or
regression batches; native script/prefetch404 responses are expected, not hydration
errors. The full console/theme/navigation review remains T9.

Fresh required checks all passed (exit0): next typegen, lint, tsc --noEmit,
pnpm test (4 passes/1 explicit no-origin integration skip), production build,
git diff --check. Explicit-origin dev3110 and prod3111 pnpm test each passed15/15,
no skips. The no-origin skip is therefore not presented as404 evidence.

All four source changes were reviewed against copies made immediately before T5;
only approved ratio/fit/width/sizes changes are present.75 other files in the T4
source checkpoint match exactly, including T1–T4 styling, spec002, fonts, assets,
copy, carousel and original primary About geometry. Exclusions are the four T5
sources plus tasks/validation; tasks already differed from the pre-completion T4
checkpoint on arrival. Source guards retain:

- PNG:529f721fe3bb9f8fe02bbe0cad6bbedae4b88f01fc13271a83f72cf2bcd85e51.
- Hero SVG:67edc1c3fb63fc900cc848f815ad6f9522cf3549d8fe4e0c3f575d4a5407a1b9.
- About SVG:5a534debab49d3043b91ae71a667d6c83cbee5110d78bfef7652a88378f0b0e7.
- Project SVG:8b1f46d9a9b67de57e25270a2c8bb8081ca3adb758d981d2dbe868c521804aca.

Raw evidence is under /tmp/opencode/spec003-t5; durable measurements/attribution
are above. Matrix JSON SHA256:

- dev-en:2d6c927d7015528055a80c95831ffcd415688f74e53b27889e56b6635b454332.
- dev-es:3aed9acfb25ea012ad3b44007cb5b97dc008c0330de6b81fce2980e72f37cedf.
- prod-en:cf3d729fd090815b93dde486a8672fc854b2299553f71f07852f982995ba69d9.
- prod-es:1eac9e776878327fae2d536f1209facaf9d5e6d83413419d172c921fa8c2e273.

Inspected20-cell head-sheet hashes match between dev/prod:
en3412fdb804872ddbfb07ea3ba8ac26b36109d7b75fb74eec37605b6e8431b3f2;
esf51dce73f7326fb9a06eab5722432df312e1136d1d9100e88808875bf9987389.
These are image provenance, not proof if temporary files subsequently disappear.

Minor implementation decision: one numeric Hero-scoped --portrait-ratio derives
all reciprocal geometry from portrait.ts; no MediaFrame prop/API change. The
sizes upper bounds use90% of the approved25/32rem caps (22.5/28.8rem),81vw mobile
and47.2vw desktop (90% photo ×98% wrapper ×1.15/2.15 column). Existing gutters and
gap reduce actual image width, so these are conservative responsive source-selection
bounds, not a claim that every rendered image occupies that viewport fraction.

No new related app failure remains. Existing menu-focus/other audit concerns are
untouched; no unavailable physical-device/other-browser/screen-reader check is
claimed. Owned3110 stopped before build, owned3111 and9225 browser stopped after
checks. MCP pages lost on reconnection were not closed by guessing stale IDs;
unrelated/about:blank resources were left alone. RF-1–3 and RNF-1–5 are covered
within T5's scope. Only T5's checkbox is updated; no T6–T10 implementation and no
MEMORY edit. Final owner visual acceptance and independent verdict remain T10.

Date: 2026-10-10. Status: **T1 completed — preserved sources and matched baseline**.
Earlier STOP/progress sections below retain their historical attribution and
unchecked wording; the final completion section supersedes their current status.
No T2 or application implementation was started. This record is not
visual acceptance, a completed matrix, or a claim that RF/RNF are fulfilled.

## Authority and scope

Read the complete root AGENTS, MEMORY, constitution and approved003 spec/plan/tasks.
Specification approval and joint plan/tasks approval are recorded on October10;
T1 exists, is pending and has no earlier task dependency. The SDD skill was
available and loaded, following the implementer instruction. Also read002 spec,
current production plan/task authority and complete validation/closure record;
historical experiment permissions were not reused. Inspected existing Home,
Hero, About Preview, MediaFrame, shell and global style sources plus the protected
portrait/config/request diffs. AGENTS supplies documentation whitespace checks
and application validation commands. No code/behavior change calls for TDD here.

## Protected working tree

The starting tree is not clean. These tracked changes predate T1 and are protected:

```text
AGENTS.md
MEMORY.md
next.config.ts
package.json
src/app/[locale]/[...rest]/page.tsx (deleted)
src/app/[locale]/page.tsx
src/components/home/home-hero.tsx
src/components/home/portrait.ts
src/components/layout/section-curve.module.css
src/components/layout/section-curve.tsx
src/components/layout/site-footer.tsx
src/components/layout/site-header.tsx
src/i18n/messages/en.json
src/i18n/messages/es.json
src/i18n/navigation.ts
src/i18n/request.ts
src/lib/site.ts
```

Pre-existing untracked entries: `.agents/`, `.nvmrc`, `.opencode-v1-backup/`,
`.opencode/`, `docs/constitution.md`, `public/images/`, `specs/`,
`src/app/global-not-found.tsx`, `tests/localized-404.test.mjs`.
These include supplied portrait work, closed002 changes and unrelated work;
none was reset, rewritten, cleaned, installed, committed or pushed.

Before browser access, recorded `git diff --binary`, porcelain status and a
sorted SHA256 inventory of existing src/public/tests/docs/specs files under
`/tmp/opencode/spec003-t1/`. Temporary files are auxiliary, not durable baseline
proof. Starting diff SHA256:
`0571fe0fa8414ae66cd3036cc86716111d529ce4f79f1280e48cefda68b4b69c`.
Starting source-inventory SHA256:
`a93554eea69066e5e3b7a8df1ad9240fcd95e930e932e59a496b96f6b17fc84e`.

## Fresh source identity

`file` freshly identifies the PNG as1122×1402, RGB, non-interlaced. SHA256 was
computed from actual local bytes, not copied from the portrait-feature report:

| Asset | SHA256 |
| --- | --- |
| public/images/me/portrait.png | 529f721fe3bb9f8fe02bbe0cad6bbedae4b88f01fc13271a83f72cf2bcd85e51 |
| public/shapes/hero-frame-02.svg | 67edc1c3fb63fc900cc848f815ad6f9522cf3549d8fe4e0c3f575d4a5407a1b9 |
| public/shapes/media-frame-02.svg | 8b1f46d9a9b67de57e25270a2c8bb8081ca3adb758d981d2dbe868c521804aca |
| public/shapes/about-primary-divider.svg | 5a534debab49d3043b91ae71a667d6c83cbee5110d78bfef7652a88378f0b0e7 |

Additional preservation identities:

| Source | SHA256 |
| --- | --- |
| AGENTS.md | 5daf304a5b71452f838a6736e901f019795215713fe6af334eb8c3db50de6d10 |
| MEMORY.md | 61dec96f558c1ea4d06f5eabe63f47a5d519be1f69060caf9b2ccdea1bfa6130 |
| next.config.ts | ae3ec894f9e9b59a13cdb2da969ed9a1d7cbbee8091ecb9044f555a08ce19eda |
| src/app/global-not-found.tsx | 56d6d7f4fdf6e7b8d46dfdb9f324dc5187759f5dda9f59b2c7b70c091e3dcd01 |
| src/app/globals.css | 4a0f88a19bbfa4e87478e0a97ad7c870faeaae1ea1c60ced3260a9b06f386b41 |
| src/components/home/hero.module.css | d8ce05299aca82a4f9e93a46dd281b690a7715998c109fdd3f9aaaac9c172a54 |
| src/components/home/home-hero.tsx | 8e9e81f8a1c68eac421f3ab47c3fe1b08613712a3b4af32b847f87eee3f9f5cd |
| src/components/home/portrait.ts | 133ea46e929032d6c716e644c5d148222a3bb532a2b01f22328b6ad6552354de |
| src/components/ui/media-frame.module.css | 9cbb871733a873bc3aa9606271a7cc9e18bbcd3f67f4ec63cb59fe3b0a0f5c80 |
| src/components/home/about-preview.module.css | 8fc4cb1667040fd2f769d107bfffa012d2f316e1e7e5ff8c40b923b5f6043413 |
| src/components/layout/site-shell.module.css | 150f3f4ea4a91d735b498072491c4eada12e4cb10fc57adb9cf3ad533c3b00ba |

Source-only geometry remains84%/23rem and92%/30rem from48rem,760/1200 display
ratio, cover/center; shell96rem maximum,1px side borders from64rem. About uses
the80rem guttered composition and straight lower fade. These are source inputs,
**not measured visible-photo widths, mask spans or browser anchor positions**.

## Operational preflight

Node v24.21.0 and pnpm12.4.1 satisfy the required versions. Root lock SHA256 is
`45e6a0e918e21f38836cf696e98be8269d0c1dbc85d7bd36b90b98e070dcfd20`;
installed lock SHA256 is
`9e2481d54f51728dbbd2eaa5d0b7e0f2da7ed918776f752ac5fbe58c48b01d37`.
Their root importers differ: root records pnpm/config dependencies; installed
records the application graph. This is a pre-existing source discrepancy, not
proof of corruption. No install, upgrade or lock repair was attempted. Direct
package imports confirmed Next16.3.5/React19.2.8/ReactDOM19.2.8, then the inventory
command exited1 because next-intl does not export its package.json subpath.
That diagnostic command limitation is not an application dependency failure;
the remaining installed-version inventory was not completed or silently retried.

Port3000 belongs to existing `pnpm dev` PID22113 → Next CLI22213 → server22230.
All three CWDs resolve to this repository; stdio is `/dev/pts/2`. Server22230 has
FD31 open on this repository's `.next/dev/lock` and writes `.next/dev/trace`.
Ports3110/3111 were free, but the shared dev output is occupied. Treat3000 as
user-owned: it was neither stopped nor restarted. No task server/build/typegen
was launched; free ports alone do not permit a competing `.next` writer.

## First browser observation and STOP

Chrome DevTools MCP created only page4 in isolated context
`spec003-t1-baseline`, at `http://127.0.0.1:3000/en`. Existing page3
`about:blank` was left untouched. The document reported title Home/lang en and
the supplied portrait URL, cover/center and expected sizes. These observations
support source correspondence but do not establish complete runtime source
identity, current HMR health, successful hydration or a controlled baseline cell.

After document fonts were ready, the theme select was disabled with System
selected; a second ordinary-DOM read at document readyState complete still showed
it disabled. Root data-theme was dark, but **no actual hydrated theme selection
was possible**. Console messages3/5/10 recorded repeated failures:

```text
WebSocket connection to 'ws://127.0.0.1:3000/_next/hmr?id=7YWZIAYvVxTPHmbMorSIy'
failed: Error during WebSocket handshake: net::ERR_INVALID_HTTP_RESPONSE
```

Message4 was a resource404 without URL attribution in the retrieved console list;
it must not automatically be labelled favicon404. Messages8/9 warned about unused
CSS preloads. No cause for the disabled select or relationship to the HMR errors
was established. The first unresolved runtime condition triggers STOP; no cache
cleanup, classifier/debugging cycle, source fix, reload retry or alternative
server/context was attempted. Only the owned page4 was closed successfully.

## Evidence completeness and follow-up

| Required T1 evidence | Result |
| --- | --- |
| Approval/dependencies/protected-state and asset identities | Recorded above |
| Runtime source identity and safe controlled baseline | Incomplete; first visit blocked |
| Five normal-size photo-visible widths, excluding rim/shadow | Not measured |
| Home en/es × light/dark × five widths ×16/24px root | **0 valid cells of40** |
| About geometry, nav sizes, overflow, frame/footer measurements | Not measured |
| Four meaningful screenshot reference conditions | Not captured; no valid before/after pair |
| Baseline shared navigation/theme/404 regressions, native JS-off | Not executed |

Historical portrait and002 browser results in MEMORY/002 validation remain
attributed historical evidence, not fresh003 baseline. Existing reported defects
(mobile focus loss, brand label, theme identification, query/fragment loss,
favicon absence) remain out of scope and were not fixed or freshly reproduced.
The fresh runtime blocker occurred before any application edit; it is not a
T1-introduced regression. It prevents reliable verification despite unchanged
source files. Coordinator must resolve runtime readiness/ownership or obtain
specific user permission before another server uses shared output. Once resolved,
resume T1's missing evidence; do not start T2 or infer acceptance from source math.

Application tests/lint/typecheck/build were not run: this task changes only evidence
documentation, and build/typegen output must not compete with the existing server.
Final guards passed: `sha256sum --check` over every file in the starting inventory
exited0; binary tracked diff comparison exited0. Spec/plan/tasks/AGENTS/MEMORY
identities remained unchanged; T1 checkbox is untouched. `git diff --check`
exited0. `git diff --no-index --check /dev/null validation.md` emitted no whitespace
diagnostics (exit1 denotes the new-file difference, not a reported whitespace
error). Final listener inventory still showed only existing server22230 on3000
among3000/3110/3111. No owned server or browser page remains. The only repository
file created by T1 is this evidence document.

## Authorized continuation — fresh development baseline

User explicitly authorized stopping only the verified portfolio3000 server and
using an owned3110 server. On fresh inspection,3000 and3110 were already free;
PIDs22113/22213/22230 no longer existed, no Next dev/server process was present,
and `fuser .next/dev/lock` found no open owner (exit1). The old lock metadata still
named22230; it was not deleted or hand-edited. **No signal was sent to any old
process**, because absence is not permission to target a recycled PID.

The initial src/public/tests/docs/specs hash guard still passed. Coordinator had
updated MEMORY to record the STOP/permission; its new SHA256 is
`2e2cc5268dd199be8658a916bea3ad2aa6aca6ac61f93288020d4714d54fcf86`.
This authorized coordinator change is preserved, not attributed to T1.

Started exactly `pnpm dev --port 3110 --hostname 127.0.0.1`: ready203ms, Next16.3.5,
globalNotFound retained. Owned process chain: shell60351 / pnpm60352 / CLI60454 /
server60481, process group60351. No distDir/config/cache change, deletion, install
or production build occurred. Chrome MCP owned page5 uses isolated context
`spec003-t1-resume`; existing about:blank page3 remains untouched. The new document
hydrated with an enabled actual ThemeSwitcher. Dark/light changes use its change
event, not invented classes or a root data-theme substitution.

### Measurement conditions and runtime source pin

All40 Home cells have been retained: en/es × light/dark × five widths ×16/24px
computed root text, with requested theme AND computed color-scheme, exact viewport
width/height, scroll0/0 asserted before measurement. Heights are568/844/1024/768/900
for widths320/390/768/1024/1440 respectively. JavaScript is enabled; motion preference
is normal, browser visualViewport scale1 and emulated DPR≈1. Classic scrollbar
reduces inner document width; use the recorded actual frame dimensions, not
viewport width as the media anchor. Do not compare these captures to reduced-motion
or differently sized/positioned captures. Font loading and image decoding completed.

Fresh browser requests for the original PNG and all three SVGs returned200 with
SHA256 matching the source table above; original decoded dimensions1122×1402.
The dev runtime uses the actual repository graph and unchanged Hero CSS/cover fit.
All40 cells have three localized Home headings and document/body horizontal
overflow0. This is baseline measurement, not achievement of the new003 visual goals.

Photo-visible width is the projected supplied mask path extrema after actual clip
dimensions,90° mask rotation and resting wrapper matrix, sampled at20001 evenly
spaced SVG path-length points. The complete mask path lies inside the opaque RGB
photo's cover-filled rectangle in every cell, so their intersection equals the
mask span **for this baseline only**. The span excludes filter shadow and wrapper
box. Future inset/contain fit must intersect the actual photograph safe box; it
cannot reuse that equality or count a background rim. Sampling is a numerical
approximation, not pixel-exact raster alpha or proof of head containment.

| Viewport at16px | Photo local display W×H | Photo-visible/mask span | Visible x bounds | Visible y bounds |
| --- | --- | --- | --- | --- |
| 320×568 | 222.425×351.188 | 195.255 | 52.702–247.957 | 119.298–436.971 |
| 390×844 | 281.562×444.562 | 247.171 | 61.387–308.558 | 175.155–577.291 |
| 768×1024 | 316.900×500.362 | 278.194 | 400.103–678.297 | 328.788–781.399 |
| 1024×768 | 429.487×678.138 | 377.033 | 530.854–907.887 | 170.753–784.175 |
| 1440×900 | 480.000×757.888 | 421.377 | 788.581–1209.958 | 175.499–861.060 |

Each row was freshly measured in all four locale/theme contexts with the same
result; no theme or locale exception was substituted. Source aspect remains
760/1200 while natural photo is1122/1402; cover scales uniformly and crops rather
than stretches. Screenshot/source comparison shows the known clipped top hair;
no claim of full-head003 compliance is made.

Normal-size About primary mid-height crossing is41.592% (en768),43.220% (es768),
41.595% (1024 both) and41.602% (1440 both) of the actual inner frame. Primary
box left gap is near0; lower media right gap is38.4/51.2/72px at those widths.
The target45–55% centering and≤1px secondary anchor are future implementation
checks, not baseline passes. Mobile mid-height figures are not judged against
the side-by-side target. The lower desktop pseudo-element actually combines the
existing linear vertical boundary fade and radial overlay. English initial JSON
mistakenly read the ordinary background instead of pseudo background (`none`);
that auxiliary field is excluded and superseded by actual pseudo-style inspection,
Spanish rows and the unchanged source. No app defect or weakened criterion follows.

At16px, measured brand36px and main/language/menu/theme text12px; at24px, brand54px
and navigation18px. Existing main links are row-oriented even in mobile panel.
The shell keeps1536px max at normal root and2304px at24px,1px authored border
from64rem (browser computes0.8px), with current header/footer structure unchanged.
Four initial full-page reference captures were retained under the temporary evidence
directory: en/light320 and1440, es/dark390 and1440, all16px, requested heights above,
scroll0, menu closed. Before/after partners do not yet exist; these are references
for later tasks, not fabricated pairs. Durable cell tables and inspections follow.

### Durable Home cell measurements

Each table row represents **two individually measured, asserted cells**, light
and dark, with identical geometry. IDs are locale-theme-width-font; raw files
are `home-{locale}-{theme}-{width}-{font}.json` in the temporary evidence directory.
Thus20 rows below account for40 unique cells, not20 measurements doubled by inference.
Image box is the transformed DOM bounding rectangle, not photo-visible span.
About mid reference is applicable only to side-by-side composition; its mobile
values are retained diagnostically, not treated as a centering failure.

| Locale / width / root | Image box W×H | Photo-visible span | About mid % | Primary left / lower right gap | Header H | Doc/body overflow |
| --- | --- | --- | --- | --- | --- | --- |
| en320/16 | 228.507×355.003 | 195.255 | 55.713 | 0.013 /20 | 90.4 | 0/0 |
| en320/24 | 211.247×328.189 | 180.506 | 53.757 | 0.013 /30 | 135.2 | 0/0 |
| en390/16 | 289.266×449.396 | 247.171 | 56.446 | 0.013 /20 | 90.4 | 0/0 |
| en390/24 | 272.005×422.582 | 232.422 | 54.857 | 0.013 /30 | 135.2 | 0/0 |
| en768/16 | 325.571×505.792 | 278.194 | 41.592 | 0.013 /38.4 | 106.4 | 0/0 |
| en768/24 | 317.481×493.231 | 271.280 | 67.371 | 0.013 /38.4 | 222.8 | 0/0 |
| en1024/16 | 441.244×685.505 | 377.033 | 41.595 | 0.012 /51.2 | 106.4 | 0/0 |
| en1024/24 | 433.166×672.957 | 370.130 | 47.188 | 0.012 /51.2 | 159.2 | 0/0 |
| en1440/16 | 493.141×766.137 | 421.377 | 41.602 | 0.012 /72 | 106.4 | 0/0 |
| en1440/24 | 622.440×967.003 | 531.861 | 41.602 | 0.012 /72 | 159.2 | 0/0 |
| es320/16 | 228.507×355.003 | 195.255 | 55.713 | 0.013 /20 | 90.4 | 0/0 |
| es320/24 | 211.247×328.189 | 180.506 | 53.757 | 0.013 /30 | 135.2 | 0/0 |
| es390/16 | 289.266×449.396 | 247.171 | 56.446 | 0.013 /20 | 90.4 | 0/0 |
| es390/24 | 272.005×422.582 | 232.422 | 54.857 | 0.013 /30 | 135.2 | 0/0 |
| es768/16 | 325.571×505.792 | 278.194 | 43.220 | 0.013 /38.4 | 106.4 | 0/0 |
| es768/24 | 317.481×493.231 | 271.280 | 71.258 | 0.013 /38.4 | 222.8 | 0/0 |
| es1024/16 | 441.244×685.505 | 377.033 | 41.595 | 0.012 /51.2 | 106.4 | 0/0 |
| es1024/24 | 433.166×672.957 | 370.130 | 47.188 | 0.012 /51.2 | 159.2 | 0/0 |
| es1440/16 | 493.141×766.137 | 421.377 | 41.602 | 0.012 /72 | 106.4 | 0/0 |
| es1440/24 | 622.440×967.003 | 531.861 | 41.602 | 0.012 /72 | 159.2 | 0/0 |

### Screenshot provenance and inspection

All four captures below were manually inspected, along with the actual original
portrait. They show the known top-hair clipping at rest, without menu overlay;
face/side hair remain recognizable. Light shadow character and thin gold frame,
weak dark-media depth, existing carousel silhouettes, left organic primary area,
inset lower right image/straight fade and footer were observed. This is not full
head containment, contrast measurement, all40 screenshot inspection or visual
acceptance.150% geometry was measured, but no enlarged-text capture was manually
inspected before the stopping condition. DevTools badge is present and excluded
from design judgment; no application styling was changed to hide it.

Full-page screenshots exclude the scrollbar; **PNG dimensions are not viewport
dimensions**. Use the separately asserted CSS viewport/height table above for
future matched partners. All have root16px, scroll0 and closed menu.

| File under /tmp/opencode/spec003-t1 | PNG W×H | SHA256 |
| --- | --- | --- |
| before-en-light-320-16.png | 304×2471 | f62fcf75a346d6e1639690723b3601f7e1f31218555a01047ea88e40af8832cf |
| before-en-light-1440-16.png | 1424×3295 | c1169beeb14bf4808d73057b2f3351e765684761d1306596e414d6503888728a |
| before-es-dark-390-16.png | 375×2707 | 4ec923d63a614699878d83fbea8a8c8be70f7415344bcb97c0793b3a6438d4c7 |
| before-es-dark-1440-16.png | 1424×3295 | 5ab59d9f4eb8420404f9e2a501e17caeba52b422ab6816eca959cfbc4e714ab3 |

Raw screenshots/JSON remain volatile. This document durably retains substantive
dimensions, conditions, findings and identities; it cannot recreate missing image
bytes after temporary-storage loss. Preserve captures for later owner comparisons.

### Fresh shared presentation baseline

Chrome MCP measured80 unique About/Projects cells: each of `/en/about`, `/es/about`,
`/en/projects`, `/es/projects` has20 (both themes, five widths,16/24px root), with
the same heights and exact controls as Home. Each has one main, nonempty localized
positive-size h1 and document/body overflow0. Titles: About / Sobre mí / Projects /
Proyectos. Shared header heights are90.4,106.4,135.2,159.2 or222.8 depending on
width/font; About main height ranges286.4–735.2, Projects557.6–1089.6. Footer heights
range182.4–453.6 with responsive/text growth; these are recorded dimensions, not
an individual-page redesign. Baseline body colors are light rgb(241,235,221)/text
rgb(53,79,82), dark rgb(25,38,39)/text rgb(241,235,221), consistent across shared pages.

Direct dev logs independently report200 for all six localized valid routes. The
MCP console review of retained shared visits had no errors and one unused CSS
preload warning; no HMR failure or disabled chooser reappeared on3110. Dev log
favicon404 freshly reproduces MEMORY's known unrelated absence. No fix was made.
Client-navigation/history/locale-switch, menu/Escape, system/bootstrap/persistence,
carousel interaction and reduced-motion regressions were not completed before STOP;
static source policy and earlier reports must not be labelled fresh runtime proof.

### Native404 attempt and new stopping condition

Launched only an owned headless Chrome on verified-free9224, with profile
`/tmp/opencode/spec003-t1/native-profile`; main PID61562, parent shell61561.
Temporary Node diagnostic `native-baseline.mjs` uses native top-level CDP,
script execution disabled BEFORE `/en/audit-missing` navigation; no iframe,
hydration or forced script-free theme inference was used. Its first document
readiness procedure used an asynchronous in-page polling promise. The shell
command `node /tmp/opencode/spec003-t1/native-baseline.mjs` exceeded its60-second
limit with no output and **no saved valid native cell**. It was not retried or
given a longer timeout. No final result JSON exists; planned recovery/control
loops did not complete and cannot be counted as executed.

Minimal read-only phase1 observation after timeout found the owned target at
`/en/audit-missing`, readyState complete, lang en, font16px, one main, exact
`Page not found` / `This page is unavailable.` and native href `/en`. No data-theme
had been controlled. Server log records genuine GET404 in66ms. These observations
show the request reached the error document, **not a valid themed native matrix
cell, keyboard recovery or proof of404 regression**. The pending step and native
timer/script-disabled interaction are possible diagnostic factors; no root cause
was established, no application failure inferred and no helper/app fix attempted.

### Final preservation, cleanup and remaining work

Closed only MCP page5; existing about:blank page3 survives. Owned native Chrome
was closed through Browser.close (acknowledged and shell completed). Fresh server
CWD, PGID60351, CLI3110 arguments and FD29 `.next/dev/lock` were verified, then
SIGTERM sent only to owned server60481. Its pnpm shell finished143, consistent
with that signal; this is not a build/test failure. Final inventory shows no
listeners3000/3110/3111/9224 and no PIDs60351/60352/60454/60481/61561/61562. Normal
Next shutdown released its lock; no artifact/cache was deleted or hand-edited.

Final initial-source SHA256 check exited0; resume binary tracked diff comparison
exited0; coordinator-updated MEMORY guard passed. Assets, application, config,
packages, spec/plan/tasks and unrelated work are preserved. Only validation.md was
changed in the repository; no checkbox or later task was changed. The safe server
readiness gate was resolved, but T1 remains open because baseline shared behavior/
native recovery evidence and enlarged-text visual inspections are incomplete.
Do not repeat the120 valid presentation cells or asset preflight on continuation;
retain their exact controls and investigate/authorize only the remaining diagnostic
gap. T9 full dev/prod matrices and final visual acceptance remain later work.

Final `git diff --check` exited0. Untracked-document no-index check emitted no
whitespace diagnostics (difference exit1); explicit trailing-space/final-newline
inspection passed. Fresh JSON reconciliation asserted40 unique Home and80 unique
shared cells, actual locale/theme/viewport/font controls and zero overflow. Spec,
plan and tasks hashes match the original approved files; T1 is still unchecked.
No production/static/application test command was required for this evidence-only
change, and no such command result is claimed.

## Limited harness correction and native completion

Coordinator authorized investigation/correction only of the owned temporary
validation harness plus missing T1 checks;120 valid presentation cells are retained,
not replayed. Fresh lightweight PNG/global-document/global-CSS hashes matched.
Ports3000/3110/9223 were free with no Next process. Started owned dev3110 (ready188ms)
and owned headless Chrome9223 with a new independent continuation profile. No file
deletion, configuration change, install or unrelated process signal occurred.

### Demonstrated timeout cause, not application failure

The saved script awaited a page-created polling Promise/setTimeout with native
script execution disabled. Instrumented `wait-diagnostic.mjs` registered network
and lifecycle listeners BEFORE navigation, attached to a newly owned top-level
target, with per-command host deadlines. Paired curl GET returned404 HTML with no
Location. Native Network document404 arrived45ms after diagnostic start; its loader
matched Page.navigate. That loader reached DOMContentLoaded50ms, load55ms and paint89ms.
The old in-page wait still hit the host2s deadline; immediate debugger DOM read at
2048ms reported complete, correct URL/en/h1. Isolated debugger-created20ms timer
Promise also remained suspended with scripts disabled (host1s deadline), but the
same Promise returned `timer-fired` after enabling scripts. Thus the cause is
the harness's dependence on suspended page timers, not a hung404 document.
Old about:blank lifecycle events had a different loader and are excluded.
No Page.navigate errorText occurred. Blocked script/CSP event is separately
recorded and not substituted for a failed document or absent visible explanation.

Temporary readiness regression tests used the established Node native runner:
`node --test /tmp/opencode/spec003-t1/document-readiness.test.mjs` first exited1
(3 failures: page-timer dependency and acceptance without matching loader/readiness).
After correcting the temporary helper, it exited0 (3 passes/no skips). The helper
polls immediate DOM snapshots on a host clock and requires complete matching URL
AND matching native loader/response within the unchanged10s readiness deadline;
each CDP call has5s bound. Wrong loader, wrong path or loading state cannot pass.
This is harness TDD, not a new project test or source-string UI acceptance test.

### Fresh native404/recovery baseline

Corrected `native-completion.mjs` finished within a30s bounded command, exit0:
eight direct visits/recoveries, four scoped simple/nested paths × native JS-off/on.
Script disabling preceded navigation. Ordinary debugger DOM reads do not execute
application hydration; JS-off theme is explicit controlled data-theme input,
whereas JS-on uses the enabled actual chooser. All are150% (computed root24px),
one semantic main, exact catalog h1/message/recovery text, genuine404/no Location,
positive visible essential bounds inside viewport, document/body overflow0.
Tab reached native localized Home anchor with3px focus outline; Enter produced
a new same-locale Home document200 in all eight cases. No Runtime exceptions.

| Missing path | Native scripts | Controlled theme / viewport | Recovery |
| --- | --- | --- | --- |
| /en/audit-missing | off,on | light320×568 /24px | /en200, both |
| /es/audit-missing | off,on | dark390×844 /24px | /es200, both |
| /en/audit-missing/deeper | off,on | light1440×900 /24px | /en200, both |
| /es/audit-missing/deeper | off,on | dark1440×900 /24px | /es200, both |

Per-cell native request/loader IDs, lifecycle, copy, geometry and recovery are
checkpointed in `native-completion.json`. The original60s timeout/zero-cell record
is preserved, not retrospectively relabelled valid. These are scoped development
baseline checks, not the full T9 dev/prod404 presentation matrix or independent002
closure rerun. Existing120 presentation records and original portrait-width values
remain the matched baseline.

### Shared interaction baseline completed

Retained five successful English desktop checks in the initial interactions.json;
retained two successful English mobile checks in interactions-completion.json;
interactions-final.json adds eleven previously missing observations/checks. These
are18 substantive records, excluding final summary/failure rows. No successful
desktop/mobile check was silently relabelled from a failed invocation or replayed
as a new pass. They cover:

- Both locales: actual dark chooser, stored `theme=dark`, direct reload with first
  observed bootstrap data-theme dark and mounted chooser dark; no blank/hydration
  exception. System selection responds to emulated light→dark preference changes.
- Both locales: Home→About→Projects client links preserve window marker123;
  back/forward returns equivalent routes. Projects locale switching preserves
  `/projects`, translates document language and retains dark theme.
- Both locales at320×568: native Enter opens the existing overlay; Escape closes
  it and restores trigger focus. Actual menu destination Enter reaches localized
  About and closes the panel. Overlay remains absolute and baseline lettering12px;
  no drawer/height/menu behavior change was made.
- Current-page link: immediately after closure focus can still report A while its
  hidden bounds are0×0; after layout/host20ms it becomes BODY, in both locales.
  This freshly reproduces MEMORY's known focus concern, not a new correction.
- Home main→Tab reaches the carousel UL with localized accessible label and3px
  focus outline. Reduced motion leaves heading/photo available and effective
  data-playing false. This is a proportional baseline, not RF-14 transition proof.

Two additional temporary harness errors are retained explicitly:

1. Native CDP Enter without `text`/`unmodifiedText` dispatched keydown/keyup but no
   keypress/click on a correctly focused visible button. A new isolated diagnostic
   logged these events; supplying the native carriage-return text generated
   keypress/click and opened the menu. Only that temporary keyboard input was
   corrected; menu behavior was not repaired or replaced by a synthetic click.
2. The helper incorrectly demanded the historical BODY concern at an arbitrary
   immediate instant and failed on A. The approved task does not require a bug to
   reproduce at that instant. Replaced only that inappropriate historical expectation
   with the observational hidden-bounds/focus record above, retaining closed-menu,
   actual navigation and visible-focus assertions. No acceptance timeout/check was
   relaxed to conceal an application failure.

The completed interaction batches report zero Runtime exceptions. MCP console
review found only the previously observed unused CSS preload warning, no HMR or
hydration error. Existing favicon404 remains in dev logs. Query/fragment policy,
brand accessible label and unnamed theme-field concerns are unchanged, not fixed.

### Enlarged-text visual inspection completed

Captured and manually inspected five additional Home views at24px, in the same
locale/theme/viewport/height/scroll0/normal-motion conditions as retained cells:
en/light320 and1440, es/dark390 and1440, plus es/dark768. Actual chooser, root24px,
computed scheme and exact viewport were asserted before each capture; original
120 numerical cells were not repeated. These are five visual checks of existing
conditions, not five extra matrix cells. Original normal-size references remain.
Also inspected the native JS-off Spanish dark390/24px focused-recovery screenshot;
its error text and keyboard recovery are clearly visible.

| Capture under temporary evidence directory | PNG W×H | SHA256 |
| --- | --- | --- |
| before-en-light-320-24.png | 305×4015 | 198fed82ffedf9d710102ff9896d29b61fb439356f05840c77571f0881122f92 |
| before-es-dark-390-24.png | 375×3883 | 7e4ec2032b3f1e6623c3d818bb2cc8c0467d5adec4b8ca58582a0ff8872e14ea |
| before-en-light-1440-24.png | 1425×3828 | 3d3c6e2c92977710cce271f0ec538c66182e5c3487640b5ecfcca4deb66bf15d |
| before-es-dark-1440-24.png | 1425×3828 | 22390da11ae01d23e95cfb7ccfb7ab7f3c22ce24e32ea72a62b44628b6900f3e |
| before-es-dark-768-24.png | 753×3442 | 2deba1206622e39ffa4ace52c9979f6de3b09a4d38ffd941340bddd3ea3267fb |
| native-es-dark-390-24.png | 375×909 | 2ddab3679ce39cbc33e5c8be7b1d8bd22e859571cea743bd071fd49f60b3b3e4 |

The initial attachment rendering of dark desktop24px appeared to omit photo/title.
An additional immediate DOM inspection confirmed decoded visible image, opacity1
and positive bounds. A separately settled capture/read showed the content; both
saved desktop PNG files have the identical SHA256 above. No changed image bytes,
persistent app invisibility or unique rendering cause is established. The duplicate
settled file is not another baseline cell or independent reference. Readable saved
capture/source comparison, not the ambiguous attachment view, grounds the inspection.
PNG widths exclude scrollbars/round fractional pixel bounds; do not mistake them
for the asserted viewport widths or replace the original normal-size measurements.

Fresh visual baseline findings requiring coordinator awareness, without T1 fixes:

- Complete top hair remains clipped in the original mask at normal/enlarged text;
  expected pre-existing portrait baseline, to compare against the approved fit work.
- en/light320/24px: project placeholder title and its small forthcoming label overlap.
- es/dark768/24px: the upper About primary mask expands over the beginning of its
  heading/copy/link; retained mid-reference71.258% already reflects that geometry.
  Long surname also wraps awkwardly at this width. Main regions and footer remain
  present and horizontal overflow stays0; overflow alone did not prove readability.

These observations were made on unchanged, hash-pinned application sources before
003 implementation. They are baseline defects/risks, not regressions introduced by
this evidence task. Assess them against authorized later work and final RNF-1;
do not silently add carousel-copy/layout fixes to the shadow task. T1 is a baseline
task and does not claim that its starting UI already satisfies the new003 goals.

## T1 completion and final ownership/scope check

T1's done condition is fulfilled: approved identity/protected work, supplied photo
and masks, five normal-size photo-visible width baselines, all40 correctly controlled
Home cells and80 shared presentation cells, four normal-size references plus five
enlarged-text inspections, proportional shared interaction/native404 recovery
baseline and pre-existing defects/limitations are durably distinguished from old
reports. The120 valid presentation cells were retained without replay. No003 visual
code change, final contrast/shadow quality acceptance, full T9 matrix, physical
device/other-browser/screen-reader verification or owner final acceptance is claimed.

Closed only MCP page6 (original page3 about:blank remains) and the owned native9223
browser with acknowledged Browser.close. Owned continuation server63118 had this
repository CWD, PGID62990, CLI63091 port3110/host127.0.0.1 arguments and FD29 on
the dev lock verified before SIGTERM. Its shell completed143 due to that intentional
signal, not an application failure. Final listener/PID inventory confirms no
3000/3110/3111/9223/9224 listener and none of the owned server/browser parent PIDs.
No user process signal, cache removal or manual generated-file change occurred.

Before marking T1: full initial source guard exited0; binary tracked diff matched
the continuation snapshot (exit0), preserving current coordinator MEMORY and all
application/package/spec/plan/user work. `git diff --check` exited0; untracked evidence
no-index check emitted no whitespace diagnostics (new-file difference exit1).
Fresh reconciliation confirmed eight native404/Home200 observations, eighteen
unique substantive interaction records, and retained40/80 presentation records.
Only validation.md plus T1's checkbox are repository task changes. Temporary harness
tests were red3/green3 as attributed above; no project test file was changed and
no redundant lint/typegen/build/application-test run was required for evidence prose.

T1 completion is baseline readiness only. T2 and all later tasks remain untouched;
baseline visual defects and temporary-capture volatility are coordinator follow-ups,
not permission to extend the approved implementation scope. Stop after T1.

## T2 partial implementation — contrast gate returned to coordinator

Date: 2026-10-10. **T2 remains unchecked.** Read full AGENTS, constitution,
MEMORY, approved003 spec/plan/tasks and T1 evidence. Approval and completed T1
dependency confirmed. Only globals.css application changes were made: six dark
roles, ivory/sage muted text, sage-derived borders and elevated media mapping.
No T3–T10 work, provider, print pair, font, geometry, asset or dependency changes.
No artificial project test was added for this visual token change.

Node24.21.0/pnpm12.4.1. Fresh ports3000/3110/3111 were free and no Next process
was present before typegen/build. Sequential commands all exited0:
`pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`,
`pnpm build`, `git diff --check`. Tests:4 pass/1 explicit no-origin HTTP integration
skip, not passing404 coverage. Build compiled and generated8 pages successfully.
Logs: `/tmp/opencode/spec003-t2/checks.log` (volatile auxiliary evidence).

Started only owned `pnpm dev --port 3110 --hostname 127.0.0.1`, process group69018,
Next server69141. Chrome MCP owned isolated page7 loaded English Home,1026px
viewport/root16px, enabled hydrated chooser; actual change selected dark and stored
`theme=dark`. Computed background24/35/30, surface43/59/48, elevated59/77/62,
ivory241/235/221, accent175/190/161 and brass180/154/101 match approved roles.
Horizontal overflow0. Console: no errors/hydration errors; known unused CSS preload
warnings plus canvas readback-performance warnings from the diagnostic itself.
This limited visit is not complete bootstrap/system/locale/shell or visual-matrix proof.

Contrast used computed DOM colors, canvas sRGB resolution of color-mix, ancestor
opacity compositing and WCAG relative luminance: channels <=0.04045 divide by12.92,
otherwise ((channel+0.055)/1.055)^2.4; luminance weights0.2126/0.7152/0.0722;
ratio=(lighter+0.05)/(darker+0.05). Recorded English Home pairs:

| Actual combination | Ratio |
| --- | --- |
| Ivory / forest | 13.611 |
| Muted / forest | 11.909 |
| Ivory / moss | 9.976 |
| Muted / moss | 8.728 |
| Sage accent / forest (and inverse skip link) | 8.246 |
| Sage accent / moss | 6.043 |
| Ivory / elevated placeholder | 7.625 |
| Petrol / ivory print, opaque | 7.387 |
| Ivory / petrol print at72% over moss | 4.864 |
| Soft-print small label at72% over moss | **3.543 — below4.5** |

First unresolved acceptance issue: inactive sage carousel media has ancestor
opacity0.72, while its `Preview forthcoming` label is10px. Print foreground
24/36/37 and print background143/155/130 blend against new moss43/59/48 to
foreground29.32/42.44/40.08 and background115/128.12/107.04, ratio3.542569.
The carousel's unchanged opacity rule is in carousel.module.css; print tokens
are explicitly invariant under T2. At opacity1 the same print pair is5.447144.

Minimal read-only browser comparison temporarily overrode only --surface with
its exact pre-T2 declaration (`color-mix(in srgb, var(--petrol) 65%, black)`),
then removed the diagnostic style. Prior surface34/51/53 gives foreground
26.8/40.2/41.48 and background112.48/125.88/108.44, ratio3.532121. Thus failure
already existed and T2 slightly improves it; nevertheless the actual blended
pair changes with T2 and still misses T2's literal changed-used-pairs AA criterion.
The initial comparison mistakenly read the immediate parent's opacity1; it is
superseded by the corrected full ancestor-chain measurement above, not accepted
as proof. Raw final records: contrast-en-home-dark.json and
contrast-opacity-comparison.json under the temporary T2 directory.

Returned this boundary to coordinator rather than changing invariant print colors,
approved moss or carousel opacity, or silently excluding visible inactive labels
from AA. Need coordinator resolution of how this pre-existing opacity failure
relates to T2 acceptance and authorized later work. No fix or broader tests were
attempted after attribution. Both-shell/theme/locale/mobile/bootstrap checks,
explicit-origin integration and production browser checks remain unexecuted;
no completed T2 or full RF/RNF compliance is claimed.

Preservation check before this evidence addition: every inventoried source/public/
test/doc/spec file and protected AGENTS/MEMORY/config/package/lock matched starting
SHA256 except intended globals.css. Root/light declarations and all rules after
the dark block are byte-identical to the pre-T2 file; print tokens untouched.
The only intended repository changes for this partial task are globals.css and
this evidence section. tasks.md remains unchanged. No cleanup, install, commit,
user-process signal or generated-artifact hand edit occurred.

Cleanup verified: closed only MCP page7 (original blank page3 retained). Verified
server69141 CWD, CLI3110 arguments, PGID69018 and dev-lock ownership before SIGTERM.
Owned shell exited143 from intentional shutdown. Fresh listener/process inspection
shows no3000/3110/3111 listener or owned Next/pnpm process. Final source guard differs
only for globals.css and validation.md, as intended. Whitespace checks emitted no
diagnostics, including the untracked evidence document's no-index check.
Current globals.css SHA256:
`cb7e071bdd1870627a139a83baab3849e27d73d61f42fb65b3ae37acd1be0b9f`.
STOP after partial T2; checkbox remains pending.

## T2 amended resumption — completed palette and AA foundation

Date: 2026-10-10. **T2 completion evidence; supersedes the partial STOP above.**
Read current AGENTS/constitution/MEMORY and approved003 spec/plan/tasks. Loaded
SDD; T1 is checked and T2 was pending. Plan/tasks record the owner's joint
“La apruebo” for exactly this amendment. Initial inspection confirmed the six
dark roles were already applied, with no opacity token or carousel amendment yet.
Preserved that core; changed only the approved delta: global inactive-media
opacity0.72 light/0.9 dark, consumed by one carousel CSS declaration with0.72
fallback. Active/focus opacity1 and350ms transition remain untouched.

### Fresh application validation after the amendment

Node24.21.0/pnpm12.4.1; no active Next process or3000/3110/3111 listener before
checks. All following commands exited0 after the new application changes:

| Command | Fresh result |
| --- | --- |
| pnpm exec next typegen | Types generated |
| pnpm lint | Pass |
| pnpm exec tsc --noEmit | Pass |
| pnpm test | 4 pass,1 explicit no-origin integration skip |
| pnpm build | Compile/typecheck/page generation pass,8 pages generated |
| git diff --check | Pass |
| LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test | 15 pass,0 fail/skip |
| LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test | 15 pass,0 fail/skip |

No project test was created or modified: this is a visual CSS-token/declaration
change, not playback logic. Existing tests remain intact; native browser checks
below are separate from HTTP tests. Earlier partial-task check results are not
substituted for these fresh runs. Auxiliary logs/records are under
`/tmp/opencode/spec003-t2-resume/`; they are volatile, not the sole durable evidence.

### Actual browser coverage and controls

Chrome DevTools MCP used only newly owned isolated page2, retaining original blank
page1. Native top-level CDP used a separately owned headless Chrome9223/profile,
Node24 WebSocket and bounded host-clock polling. No iframe, page-created readiness
timer with scripts disabled, dependency install or application instrumentation.
Owned dev3110 and prod3111 were sequential and used the actual unchanged config.

Each mode retained134 substantive records (268 total), excluding invalid helper
attempts and screenshots. This is bounded T2 verification, not T9's full matrix:

| Batch, per mode | Records / checks |
| --- | --- |
| Home | 40: en/es × light/dark ×320/390/768/1024/1440 ×16/24px root |
| Opacity | 44: three actual item selections, active/inactive/focus and transition samples in en/es, plus light invariants |
| Visible inactive labels | 8: two real scroll intervals × two fractional offsets × both locales |
| Shared | 12: About/Projects/simple404 × en/es × both themes at1440/16px |
| Theme/native404 regressions | 16: stored/bootstrap, system, client-page, equivalent-locale and native recovery |
| Keyboard/reduced motion | 14: mobile menu/Tab/Escape, carousel/manual control focus, control colors and reduced-motion manual End |

Home viewport heights568/844/1024/768/900 respectively; root16/24px, requested
theme, computed scheme, language and viewport asserted, scroll0 before cell
measurement. Every retained Home/shared cell has document/body overflow0. Home
has all nine repeated media copies; no inactive or inert-copy contrast exclusion.
Actual mounted theme select change events set preferences; localStorage and root
theme were checked. Media transition sampling follows real item-button selection,
not forced inline opacity. Actual scroll offsets between successive items make
the small inactive labels fully visible for all three tones in both locales/modes,
with computed opacity0.9 and passing AA. Active and inactive copies share the same
computed colors/contours. Fonts and image loading were settled for visual captures.

The focus-rule diagnostic temporarily gave a middle-copy LI tabindex=-1 and
focused it, then blurred/removed that attribute. This exercises the existing
:focus-within opacity1 rule without adding a production control; current project
preview content has no native focusable descendant. It is not proof of a newly
implemented slide-control interaction. Native Tab separately verified real UL
and manual-control focus, visible3px sage outlines, positive control bounds and
mobile Enter/Escape restoring trigger focus. Existing focus-pause semantics are
unchanged; this does not implement or claim RF-14. Reduced motion stayed effective
(`data-playing=false`), and native End selected logical item2 in both locales/modes.

### Computed contrast, including complete ancestor compositing

The probe parses computed `rgb/rgba` and `color(srgb ...)` values directly without
rounding color-mix to8-bit integers; it recursively resolves ancestor backgrounds,
then composites foreground AND background at each ancestor opacity boundary.
It records all relevant opacity/filter/background-image ancestors. The existing
masked frame filter is a drop-shadow; inside the opaque print area it adds no
color filter or foreground dilution beyond the recorded group opacity. About's
surface-to-elevated decorative blend has the same ivory foreground; both endpoint
backgrounds exceed AA. WCAG relative-luminance conversion/formula is as specified
in the earlier evidence. Small labels10–11.2px (15px enlarged at narrow widths)
are normal text requiring4.5:1, never reclassified as large text.

Actual results agree in dev/prod and en/es. Table minima include both preview
title and small label, and all three repeated copies:

| Dark print tone | Inactive0.9 | Active1 | Focus1 |
| --- | --- | --- | --- |
| Ivory | 6.431323 | 7.387319 | 7.387319 |
| Sage/soft | **4.714922** | 5.471661 | 5.471661 |
| Petrol/strong | 6.431323 | 7.387319 | 7.387319 |

Thirty real transition sample records per mode include intermediate computed
opacity values such as0.903077,0.908760,0.917060,0.927363,0.972637,0.982940,
0.991240 and0.996922, as well as steady endpoints. All recorded dark title/label
pairs pass their applicable AA threshold; overall sampled/endpoint minimum is
4.714922. No claim of sampling every animation frame is made.

Worst actual inactive soft label: computed raw foreground
`color(srgb 0.0935294 0.139412 0.144706)`, print background143/155/130, moss43/59/48,
full ancestor opacity0.9. Composite foreground25.7649973/37.895054/38.010027 and
background133/145.4/121.8 yield4.714921575837317:1. The approved4.695186 projection
used rounded foreground24/36/37; precision, not a changed print color, explains
the difference. Earlier partial canvas-rounded numbers retain their attribution.

Other actually used dark combinations, including common header/footer/404 text:

| Pair | Ratio |
| --- | --- |
| Ivory / forest | 13.611404 |
| Muted / forest | 11.931660 |
| Ivory / moss | 9.976136 |
| Muted / moss | 8.745009 |
| Sage accent / forest, inverse skip link | 8.245632 |
| Sage accent / moss | 6.043428 |
| Ivory / elevated placeholder | 7.624958 |

Computed focus sage contrast is8.245632 against forest,6.043428 against moss,
4.619112 against elevated. Computed control-border sage mix is
`color(srgb 0.556 0.611373 0.518353)`; ratios5.569444/4.081984/3.119941 against
those three surfaces respectively, exceeding the3:1 non-text target. Actual native
theme selector foreground/background/border and keyboard outlines were recorded;
no focus styles or control mechanics were altered.

Both locale and complete global-not-found document resolve forest24/35/30,
moss43/59/48, elevated59/77/62, ivory241/235/221, accent175/190/161 and brass180/154/101.
In Home, actual Hero/body, Selected Work and About placeholder backgrounds visibly
use the three distinct levels. Error-page composition remains unchanged: it does
not acquire an invented surface panel, but its shared semantic roles resolve
identically. Production MCP Spanish404 independently confirmed these values,
lang es, actual enabled chooser, exact title and native href `/es` at1440×900.

### Theme bootstrap, localization and native recovery

In each mode and both locales, persisted dark with light system and persisted
light with dark system retained the requested theme after a direct document visit.
A diagnostic installed before document scripts observed the bootstrap data-theme
mutation before first-paint; first-paint and DOMContentLoaded records agree with
the stored theme, and the hydrated selector remained correct. System selection
responded to emulated light→dark changes. Home→About client links and actual locale
links retained dark storage/theme and the equivalent `/about` route in en/es.
All retained native batches report zero Runtime exceptions; no new hydration
or bootstrap error was detected.

Native simple404 direct visits in en/es × scripts-off/on × dev/prod:8 fresh
visits and keyboard recoveries. Disabling scripts precedes each JS-off navigation;
theme there is explicitly controlled by data-theme, not alleged hydration.
JS-on uses the actual enabled selector. Matching native loader/document response
confirmed404 with no Location, one main, exact localized heading/description,
visible native same-locale recovery link and overflow0 at320/390px. Native Tab
from main focused that anchor with3px visible outline; Enter produced the new
same-locale Home document200 in all8 cases. This is a proportional preservation
check; nested/reload/full theme-width-text404 matrices remain T9, not completed here.

Development MCP console has only the already observed unused CSS preload warning.
Production404 console resource errors correlate with actual missing document,
missing RSC request and known favicon404 (network reqids73/89/85 respectively).
Styles/scripts/fonts returned200; no hydration/JavaScript exception was found.

### Visual inspection, unchanged light behavior and limitations

Manually inspected English1440 light/dark Home MCP captures, controlled native
Spanish390 light/dark Home, and production Spanish dark1440 error viewport.
Forest/moss/elevated separation, ivory/sage text and restrained brass frame are
discernible; dark inactive media is subtly muted rather than equal to the active
state. Light palette/shadows remain recognizable. This is implementer foundation
review, not owner final acceptance or T7 final shadow quality. Existing portrait
top-hair crop,12px navigation and old About geometry remain intentionally unchanged.

| Valid inspected capture under temporary T2 directory | PNG size | SHA256 |
| --- | --- | --- |
| dev-en-dark-1440.png | 1425×3295 | 6993594af324e0342a42577635b2dfde0f7b5aadbefcb3d2ca0355d94dccdd5b |
| dev-en-light-1440.png | 1425×3295 | d1ac60ac82eafba267deaefc0124e52b1fe84dfe451c3746e09a7ba90328c279 |
| native-es-dark-390.png | 390×2705 | 5f5c46f0612a569374ffeebfd1ff0f670f805d2739a6d31e55f5cecad9d2e073 |
| native-es-light-390.png | 375×2707 | 7c86229312f130e6b2fcbc42f77b6c7802e1eb6956207f420617e24aa36ac361 |
| prod-es-dark-404-1440.png | 1440×900 | 400287c64982ea50217a221337d4f3475f4c745dbfa5cf0f6a97cc6b016ff508 |

PNG width can exclude a scrollbar; native mobile capture state separately asserted
viewport390×844/root16px/scroll0. These are T2 result captures, not claimed matched
T1 before/after pairs. Raw earlier T1 temporary assets are absent after environment
restart; durable T1 measurements remain. No claim of all-cell manual image inspection,
physical devices, other browsers, screen readers or full-feature visual acceptance.

Two helper/capture limitations are explicitly excluded from passing evidence:

- Initial Home helper compared raw custom-property string `0.72` to emitted `.72`
  and failed before saving any cell. Numeric equality fixes only that diagnostic;
  the valid40-cell runs above followed with no app changes or weakened AA threshold.
- MCP requested mobile resize390 but its window/capture restored a500px minimum;
  mobile files were485/500px wide, so they are not390px matrix proof. Its light full
  capture also omitted the photo despite decoded positive image bounds/opacity1;
  settled duplicate had identical bytes. A unique raster/capture cause is not
  established. Those captures are excluded. Separate fresh native metric override
  asserts390×844 and renders the portrait in both themes; all40-cell numerical
  runs likewise assert actual widths. No application image repair was made.

Unchanged light inactive labels remain below4.5:1: soft3.153215, ivory/petrol3.784700
at opacity0.72. These are freshly recorded pre-existing combinations, not changed
T2 text pairs: original root colors and print colors are byte-identical, and the
only new light token preserves the original0.72. Per approved scope/RF-4, do not
automatically fix them or change the light direction. Existing mobile BODY-focus,
brand-label, unnamed selector, favicon and baseline text overlaps remain outside
this task; neither overflow0 nor palette approval establishes full accessibility.

### Preservation, cleanup and T2 boundary

Source-level assertions pass: removing only the two new opacity-token lines makes
globals.css byte-identical to its partial-T2 resumption input; removing the root
opacity line also leaves original pre003 light/root declarations byte-identical
to git HEAD. Carousel CSS differs from its input only at the approved declaration.
Full starting SHA256 inventory matches except the two authorized app files before
this evidence addition. Photo and all supplied masks retain the exact T1 hashes.
Providers, both document roots, config, package/lock files, translations, fonts,
spec/plan and protected unrelated work were preserved. No generated output was
hand-edited, no install/cache cleanup/dependency/commit/push occurred.

Only owned MCP page2 was closed; blank page1 survives. Owned native9223 browser
acknowledged Browser.close. Dev server30360 (PGID30231) and production33596
(PGID33492) had this repository CWD and exact CLI/parent arguments verified before
their own SIGTERM; dev lock owner was30360. Their shells exited143 from intentional
shutdown, not validation failure. No old/user process was signalled.

Final app SHA256:
globals.css `fb519b61885ca222498d18076be90b0861a520eea1c10c5e3a7b1860efe665e1`;
carousel.module.css `a5f174ded3cbfbfcc129645feef048125d62b08f152c656a0dfd0df005a118d4`.
T2 now satisfies its scoped done condition: AA for every measured changed dark
used pair, distinct shared semantic levels, unchanged light/print colors and no
new related theme/bootstrap regression. RF-4/5/8/9 and RNF-2/4/5 are covered only
within this foundation task. T7 depth refinements, T9 complete regressions and
T10 final owner/reviewer acceptance remain pending. Mark only T2 and STOP.

Final fresh listener/PID inventory confirms3000/3110/3111/9223 are free and owned
Next processes are absent. Final SHA256 guard differs only for the two intended
app files and this evidence document before checkbox update. Whitespace checks
pass for tracked changes and the untracked evidence file (no-index difference
exit1 without whitespace diagnostics). T2's checkbox is the only tasks.md update.

## T3 — navigation typography and mobile groups completed

Date: 2026-10-10. Read AGENTS, constitution, MEMORY, approved spec/plan/tasks and
T1/T2 evidence; loaded SDD. T1/T2 checkboxes were complete, T3 pending. Preserved
the already-approved T2 palette/opacity implementation and unrelated working tree.
Fresh preflight found no Next process, listener3000/3110/3111/9223 or dev-lock owner.
Node24.21.0/pnpm12.4.1; no installation or lockfile reconciliation attempted.

### Bounded implementation

- site-navigation.tsx adds mainLinks only to the main destination list.
- site-navigation.module.css uses1rem for shared destination/language links,
  column for mainLinks below48rem and row from48rem. Language links stay row-oriented.
- navigation-menu.module.css uses1rem for the trigger. Desktop min-width:0 and
  panel flex-wrap permit necessary natural growth without changing organization.
- theme-switcher.module.css uses1rem for the native selector.

No site-shell CSS change was needed. Brand2.25rem, header1/1.5rem padding,
control2.75rem minima, link padding/spacing,48rem transition, absolute mobile
overlay, menu logic and ResizeObserver remain unchanged. No frame/media/portrait,
palette, carousel, route, provider, translation, dependency or later-task edit.
No project test was created/modified: this is presentation CSS, verified through
real DOM/layout and native keyboard input rather than source-string acceptance tests.

### Fresh commands

All commands exited0 after the four application-file changes:

| Command | Result |
| --- | --- |
| pnpm exec next typegen | Pass |
| pnpm lint | Pass |
| pnpm exec tsc --noEmit | Pass |
| pnpm test | 4 pass,1 explicit no-origin integration skip |
| pnpm build | Pass;8 pages generated |
| git diff --check | Pass |
| LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test | 15 pass,0 fail/skip |
| LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3111 pnpm test | 15 pass,0 fail/skip |

Logs and checkpointed auxiliary JSON/captures are under
/tmp/opencode/spec003-t3; temporary files are not permanent sole evidence.

### Controlled layout coverage

Sequential owned dev3110 and prod3111 each passed160 distinct header cells:
Home40 plus About/Projects/simple404120. Each route covers en/es × light/dark ×
320/390/768/1024/1440 ×16/24px root. Total320 cells, not T9's full-feature matrix.
Viewport heights568/844/1024/768/900 respectively. Native top-level CDP asserts
actual viewport, document language, computed root, actual chooser-derived theme
and computed color-scheme. Host-clock readiness requires the matching native
document loader/response and mounted chooser; font loading completed.

Every cell has document/body horizontal overflow0, no intersecting visible header
control rectangles, no control scroll-width clipping and positive visible targets
inside the horizontal viewport. Main/language/menu/theme computed text is16px or
24px, including the hidden desktop trigger; logo36px or54px. Target minima44px or
66px, header padding16/24px mobile and24/36px desktop. Closed mobile panel has
zero bounds before opening; open main list is column, language list row, preferences
separate. From actual matchMedia48rem, main list is row and panel static. At768/24px
preferences wrap beneath horizontal main destinations, not into a new mobile menu.

Actual header heights agree across both locales/themes/routes/modes:

| Width | Root16px | Root24px |
| --- | --- | --- |
| 320,390 | 90.59375 | 135.390625 |
| 768 | 106.59375 | 241 |
| 1024,1440 | 106.59375 | 159.390625 |

Normal baseline was approximately90.4/106.4px; padding/brand geometry is preserved,
not deliberately compressed. Enlarged768 naturally grows beyond T1's222.8px.
At320/24px language and theme controls wrap within their preferences group; theme
starts at y494.390625. At390/24px they share y410.390625. Native keyboard scrolling
keeps each focused target visible. The unchanged observer measures actual241px
at768/24px, independently confirmed through production MCP, with overflow0.

### Native interactions and error preservation

Each mode passed28 substantive records: in both locales at320/24px, native Enter
opens the overlay, six Tab steps reach three destinations, two language links and
the selector with3px solid visible focus and positive in-viewport bounds. Native
Home/ArrowDown changes the selector to light. Escape closes the panel and restores
trigger focus. Actual About/Projects link Enter performs client navigation; a
window marker survives. Locale switching retains the equivalent /projects route
and selected light theme. No Runtime exception was recorded in any valid batch.

In each mode, four simple404 native visits/recoveries cover en/es × scripts-off/on,
at320/390 and root24px. Script disabling precedes navigation. All responses are
genuine404 without Location; one main, requested language, native localized Home
href, header24px/logo54px and overflow0 are asserted. Native Tab reaches recovery
with3px outline, Enter reaches the same-locale Home. With scripts on theme comes
from the actual enabled chooser; off uses explicitly controlled data-theme, not
claimed hydration or interactive header controls. JS-off mobile menu unavailability
remains the known baseline limitation. Nested routes additionally pass HTTP tests;
the complete nested/reload/presentation matrix remains T9.

Four additional production observations use actual System selection with emulated
light/dark preference in en/es at320/16px. Resolved theme responds correctly and
observer equals measured90.59375px. Computed header foreground/background pairs
give light muted6.185985:1 and active/control7.387319:1; dark muted11.931660:1 and
active/control13.611404:1. Computed sRGB colors were converted with the WCAG formula
recorded in T2; color-mix floats are not rounded first. Text remains normal text
requiring4.5:1, including24px medium-weight links. T3 changes no color/opacity pair.
This preserves relevant RF-9 behavior, not a fresh complete bootstrap audit.

### Visual inspection, diagnostics and limitations

Chrome DevTools MCP used only new isolated page3, preserving blank page1. Inspected
MCP Spanish dark768/24px and light desktop captures; native Spanish dark320/24px
and768/24px; production English/Spanish light320/16px open-panel captures. Main
links are visibly vertical only on mobile, preferences separate, language choices
horizontal, desktop text legible with sensible enlarged-text wrapping. Existing
overlay still conceals Hero temporarily. No new drawer/trap/closing behavior.
DevTools badge is excluded from app-design judgment. Not every cell's screenshot
was manually inspected; no physical-device/other-browser/screen-reader claim.

Representative inspected native PNG identities:

| File | SHA256 |
| --- | --- |
| dev-es-dark-320-24.png | b1ef1be98547b2e2264ba2fd16ad2cce3df1e9b1f8cba5f2d0668d5f300f51a9 |
| dev-es-dark-768-24.png | 3036ca0c6ed362e6c13d5b3744647a0bf638a83fd1ee3c673b441454e8c6de4f |
| prod-en-light-320-16.png | db030a11bd4b7b2020d18613f7390451d30fc287a69132d0e381abbd764b0fe2 |
| prod-es-light-320-16.png | e95b32e51a4a6275fc3a53407e852bfe50ac34cb9ed8a258214bc3bf55fb2d76 |

Native viewport is separately asserted; PNG scrollbar-excluded width is not viewport
width. These are T3 header result views, not fabricated full-Home matched pairs.
MCP development console had only the known unused CSS preload warning; production
valid-page console had no warnings/errors. Known missing favicon remains unrelated.

Two temporary harness mistakes are excluded from passing counts. First, reading
closed bounds within the same click expression saw pre-commit React state. A fresh
diagnostic showed open/width265 immediately after closing, then closed/width0 on
the next command. Condition-based waits now assert committed closed/open state
within the unchanged10s deadline. Second, Enter after native selector ArrowDown
opened its platform popup; Escape dismissed that popup rather than the panel.
Paired diagnostic proves Home/ArrowDown already commits light without Enter, after
which Escape restores the trigger. Corrected only those harness assumptions; no
application fix, weaker geometry/focus criterion or hidden failed cell.

Current-page menu-link closure still yields BODY in both locales/modes after layout,
matching T1/MEMORY. It is explicitly outside T3, not repaired. Portrait cropping,
Home text overlaps at enlarged sizes, light inactive-label contrast and other T1/T2
audit concerns retain their baseline attribution; T3 does not claim their resolution.

### Preservation and completion boundary

Starting SHA256 inventory matches every source/public/test/doc/spec/protected config
file except the four authorized app files before this evidence addition. Photo and
all three mask hashes match T1; globals/carousel T2 sources remain unchanged. Final
diff is limited to four app files, this evidence section and only T3's checkbox.
No shell CSS change, generated-artifact hand edit, cache deletion, dependency change,
commit/push or MEMORY edit. Whitespace review includes this untracked document.

Closed only owned MCP page3 and native Chrome via acknowledged Browser.close.
Verified repository CWD, exact CLI and process group before SIGTERM to owned dev
server36253 (group36135) and prod38572 (group38469). Their shell exit143 is intentional
cleanup, not validation failure. No user process was signalled; final listener/
process inventory is clean for3000/3110/3111/9223 and owned servers.

T3's scoped done condition is met: RF-6, shared-header RF-8/9 preservation and
RNF-1/2/5 within this change. No new related regression or blocking proof gap found.
Final owner visual acceptance/full-feature review remain T10; T4 was not started.

## T4 completed — recovered implementation and validation

Date: 2026-10-10. **T4 completed following the coordinator's explicit finalization
authorization.** The initial recovery checkpoint left its checkbox pending; this
status supersedes that checkpoint and the preceding T3-era “T4 was not started”.
SDD loaded; approved spec/plan/tasks and completed T1–T3 dependencies read.
Read-only reconciliation found their identities unchanged before finalization.
No T5 work.

### Actual application delta and stable alignment reference

Only site-shell.module.css was changed for T4, before the interruptions. Its SHA256
is `fb3620159c6cc0113f2dee09c7007484ed3388df0f65604e0bcbc9f681f2f5b5`.
The existing64rem rule reserves transparent2px inline borders; two inert, absolute,
negative-z pseudos in an isolated frame draw single continuous side strokes with
mirrored quarter-ellipse ends. Their0.75rem horizontal/1.5rem vertical radii are
12/24px at root16 and18/36px at root24; stroke declaration stays2px in both.
There is no continuous full-width top/bottom border, new asset, markup or animation.
Max96rem, header/main rules,76rem text bound, globals and both document roots stay
unchanged. The frame content-box edges are the future media anchors: at DPR1,
left=frame.x+2, right=frame.right−2, W=frame.width−4 when active; otherwise its
bounded edges apply. T6 media alignment has not been implemented.

### Recovered executed validations — not new checkpoint runs

All six AGENTS commands completed with exit0 after the CSS delta: next typegen,
lint, tsc --noEmit, pnpm test, pnpm build and git diff --check. Surviving checks.log
and same-session tool results agree. Default tests:4 pass/1 explicit no-origin
integration skip. Explicit-origin pnpm test:15 pass/0 fail/skip in dev3110 before
the first restart (conversation result retained, raw log lost) and prod3111 after
resumption (surviving prod-tests.log). No project test was created or modified;
pure visual CSS was checked in the browser, not through artificial source tests.
Current production BUILD_ID is `K-cPCgYp9uggmeAXEzzmM`; this checkpoint did not build.

Each mode completed176 distinct presentation cells: Home40, About/Projects/simple
404120, and16 additional About cells at1536/1920. The main160 cells cover en/es ×
light/dark ×320/390/768/1024/1440 × root16/24, with respective heights568/844/1024/
768/900. Actual viewport, locale, root size, chooser-derived theme/color-scheme,
one main, positive heading bounds and document/body overflow0 were asserted.
Side strokes are absent at320/390/768 and present from1024 at both root sizes.
Native DPR1 gives2px stroke, mirrored12×24/18×36 radii, pointer-events:none and
continuous full-height pseudos. Light computed color remains
`color(srgb 0.73898 0.65898 0.510902)`; dark remains rgb(180,154,101).
At1920/root16 About has frame.x192, width1536, inner194–1726/W1532; at root24,
width1905 (scrollbar-adjusted), inner2–1903/W1901, max2304. No viewport bleed.

Each mode additionally completed22 focus/native records:16 nested404 visits and
recoveries (both locales/themes/scripts/root sizes at1440×900), plus six valid
Home/About/Projects skip-link→main→next native-focus checks. Script disabling
preceded JS-off navigation; its theme is explicitly controlled data-theme, not
hydration. Matching document loaders confirmed404/no Location and native Enter
recovered same-locale Home200. Focus was3px solid, positive, within viewport and
hit-test unobscured. All valid batches reported zero Runtime exceptions.

### Visual evidence, limits and resource state

Before editing, four matched English About references at1440×900 were captured
(both themes/root sizes): frame1440, border1px, max1536/2304, same frame colors.
The light16 reference and corresponding result were inspected: modestly stronger
lines and four curved tips replace straight ends without a heavy enclosing border.
All pre-restart raw baseline/dev files are now absent; these attributed measurements
and same-session inspections are retained, not reconstructed fresh screenshots.
Development's176 cells/22 focus records/15 HTTP passes were not replayed.

Inspected Chrome MCP About and production Spanish Projects; native short About,
native JS-off Spanish404 in both themes with focused recovery, and long Home
top/middle/bottom views. Magnified Home corner crops show mirrored quarter-ellipse
tips, smooth vertical joins and no doubled segment. Terminals remain in header/
footer breathing space, clear of media and focus. Existing About insets are untouched.
MCP development had no console errors/warnings; production's resource error was
attributed to favicon404 via network request14, while document/CSS/fonts/scripts200.
No new hydration error was found. No decorative-frame AA text claim is made.

Surviving production files in /tmp/opencode/spec003-t4 include all176 presentation
and22 focus JSON records, checks/HTTP logs and captures. Inspected capture SHA256:
prod-after-light-24.png `d2745a0cb51de605b862db404a2255d897d06beceba2fe4504c4a0f89749cc93`;
prod-after-dark-16.png `8282aad86f28d7b199fcc298c4d581a885fa75694b96cb700684173b0bf5e5ea`;
mcp-prod-projects.png `63f4190b679445fe6d00e81b3a425f47c3d12053d156e7a116e2436443bce1c8`.
These are1440×900 PNGs; numerical frame bounds separately account for scrollbars.
Not every cell screenshot was inspected; no physical-device/other-browser claim.

Two temporary diagnostics are excluded from passing evidence: repeated top-level
CDP const declarations caused a reproduced SyntaxError, fixed only by helper-local
IIFEs; captureBeyondViewport/scaled clips of long Home misleadingly omitted right/
bottom lines. Ordinary viewport captures at asserted top/middle/bottom scrolls,
then external ImageMagick crops, visibly resolved the latter without an app change.

The resumed full source/protected SHA256 guards passed before this prose addition;
photo and all three masks matched T1 hashes. No T2/T3, provider, content, font,
config/dependency/lock, MEMORY or unrelated work was changed. Portrait hair crop,
enlarged Home text overlaps, light inactive-label contrast and menu BODY-focus
remain attributed baseline issues, not T4 fixes or proof of full003 completion.

Owned dev server40569 and native browser were terminated by the first restart;
no recycled PID was signalled. Resumed production18456/PGID18355 had repository CWD
and exact3111 parent CLI verified before its own SIGTERM (shell143 intentional).
Owned native browser18518 acknowledged Browser.close and exited normally. Only
owned MCP page2 was closed; page1 about:blank remains. Latest read-only inventory
finds no3000/3110/3111/9223 listener or owned app/browser process.

RF-7/RF-8 and RNF-1/2/4/5 are covered within T4's shell scope. Recovered comparisons,
computed geometry and inspected curves/focus satisfy its scoped done condition;
no outstanding application-validation batch or new related regression is known.
Finalization reused the completed checks above without a new server/build/test/
browser run. Fresh source reconciliation matched every resumed snapshot file except
this intentionally added evidence section; all protected hashes matched. Whitespace
review passed, including this untracked document (no-index difference exit1 with
no whitespace diagnostics). Only T4's checkbox was updated in tasks.md. No additional
application edit occurred. Final owner visual acceptance/full-feature independent
review remain T10. Stop after T4.
