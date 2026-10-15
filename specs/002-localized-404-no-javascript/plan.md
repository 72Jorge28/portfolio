# Plan 002 — Localized 404 without JavaScript

Status: COMPLETED — exact production correction jointly approved with tasks.md on 2026-10-08; T1–T10 complete. Specification fulfilled and feature closed following independent T10 review, VEREDICTO: APROBADO (2026-10-09), as relayed by coordinator. Requirements unchanged.

Closure evidence: [validation.md — Independent T10 review and closure](validation.md#independent-t10-review-and-closure--2026-10-09). The approval/execution records below are retained history; their pending/open wording does not override this closure or authorize further runtime work.

## Current exact production proposal and approval gate (2026-10-08)

This section supersedes ALL older current-authority/proposal/runtime instructions
below. History is retained, not permission to replay experiments or reset budgets.
The user's explicit “Lo apruebo” jointly approves this exact production plan and
tasks.md, including the experimental/deprecated APIs, possible dynamic valid-route
rendering and explicit shell composition duplication. This approval supersedes the
previous proposed/not-authorized status, without changing the exact scope below.
Coordinator may delegate T7 → T8 → T9 → T10 sequentially, one task at a time, without
another human approval between tasks. Operational preflights and STOP gates remain.
This planner handoff records approval only; it authorizes no historical fixture replay.

**Evidence basis:** coordinator-supplied independent reviewer report
`ses_ee28a8380ffeMo4Z75k0dQIPBv` finds the candidate plausible with no new observed
failures. Existing dev3106 supplied four genuine404/no-Location ordinary localized
HTML documents with native anchors/noindex; six neutral valid routes returned200.
Supported prefixes beat contrary cookie/Accept-Language/forged client metadata;
alternating locales stayed correct and `locale`/`requestedLocale` query parameters
did not override them. Unprefixed/unsupported behavior matches canonical routing
sources, not an independently observed original-runtime comparison. Independent
saved production inspection covers simple en/es only; nested production and all
four dev/prod JS-off/on visible-language/Tab/Enter/Home200/menu/locale/theme checks
are USER observations. Build exit0/dynamic classification is saved fixture evidence.
No independent browser was identified (exposed about:blank left untouched). None
of this closes actual-application RF/RNF, especially RNF-3.

**Exact approved diff (T8), plus one behavioral test (T7):**

| File | Exact responsibility/change |
| --- | --- |
| `next.config.ts` | Add only `experimental.globalNotFound: true`; preserve next-intl plugin. Do NOT copy fixture `turbopack.root`, `distDir` or any other flag. |
| `src/app/global-not-found.tsx` | Add the tested async, no-props complete html/body document: validated `getLocale()`, explicit-locale Navigation/NotFound translations, existing font variables/global CSS/shell and page-content CSS Modules, suppressHydrationWarning, ThemeProvider, NextIntlClientProvider with explicit locale and messages={null}, skip link, frame, SiteHeader, one main-content main/tabIndex=-1, exact h1/message and native `/<locale>` recovery anchor, SiteFooter. |
| `src/app/[locale]/[...rest]/page.tsx` | Delete ONLY this verified five-line route whose sole behavior is calling notFound(). Scoped missing paths then exercise the routing-unmatched global document rather than matched interruption. |
| `src/i18n/request.ts` | Use exactly the tested params.locale explicit guard and public params.requestLocale implicit bridge. Present invalid explicit locale still calls notFound(); valid explicit locale wins without awaiting implicit metadata. Only absent explicit override awaits requestLocale; supported implicit value selects its existing loader, absent/invalid implicit value uses routing.defaultLocale. Remove rootParams import ONLY here. Keep catalogs/loaders/routing unchanged. |
| `tests/localized-404.test.mjs` | Add Node integration HTTP contract tests using existing node:test/assert and fetch with manual redirects; explicit test-only LOCALIZED_404_TEST_ORIGIN, no server lifecycle or new dependency. Native browser regression below supplies structural/visible coverage. |

**Flow and preserved boundaries:** unchanged proxy selects the supported prefix;
public request config supplies the same locale to global getLocale and implicit
header/footer queries. Explicit translation APIs load canonical catalogs on the
server. HTML lang, error content and recovery need no hydration. Keep
`src/app/[locale]/layout.tsx`, its generated params behavior, ordinary
`src/app/[locale]/not-found.tsx`, fonts/licenses, CSS, providers, navigation,
proxy/routing, site data and page metadata helpers unchanged. Retained ordinary
not-found remains available for matched explicit notFound() calls; this correction
does NOT claim to fix every future matched interruption.
The recovery anchor is the tested, deliberate exception to shared localized Link:
its validated locale gives an absolute localized href, guaranteeing native recovery.
All header/footer/internal navigation continues to use the existing localized Link.

**Metadata decision:** retain the tested static metadata export with metadataBase
from canonical site.url and the same site.name default/title template as the locale
root. No layout metadata is inherited by the global document. Do not call
createPageMetadata: its home/about/projects contract and canonical URLs describe
valid pages, not this unknown path. No new metadata copy/domain/canonical/alternates
or invented localized SEO contract; existing localized page metadata stays untouched.
Installed not-found.md explicitly supports metadata/generateMetadata and automatic
404 noindex. Choose the tested static shape, not an untested locale-dependent
generateMetadata variant; verify automatic noindex in the real application.

**Tradeoffs jointly accepted:** experimental globalNotFound and public
but deprecated requestLocale; valid routes may become request-time dynamic (fixture
build did). The global document bypasses root inheritance, so small explicit shell
composition duplication is intentional; maintain its parity when shell changes.
Reuse sources/components, not copied identity/messages/font assets; no shared-shell
extraction, conventional-root migration, private header/import, catch/retry, soft200,
redirect workaround, dependency upgrade, weakened check or cache cleanup is proposed.

**Regression/validation after approval only:** Node >=24.12.0 with existing pnpm.
tests/localized-404.test.mjs validates an explicit loopback HTTP origin (no credentials,
path/query/fragment), checks all four scoped documents for404/no Location/HTML content
type and all six valid routes for200; unreachable/malformed origins fail, absent origin
explicitly skips integration coverage. Use contrary Accept-Language/cookie and
alternating requests. Do not pretend raw substring hits establish visible content.
Exact missing cases: `/en/audit-missing`, `/es/audit-missing`,
`/en/audit-missing/deeper`, `/es/audit-missing/deeper`. Valid controls:
`/en`, `/es`, `/en/about`, `/es/about`, `/en/projects`, `/es/projects`.
Native top-level browser script disabling BEFORE direct navigation/reload must check
ordinary DOM outside scripts/templates: exact catalog h1/message/lang, one main/id,
visible native anchor/name/href, noindex, Tab/Enter/focus and localized Home200.
The historical confirmed actual-app blank404/native no-script baseline in MEMORY
is acceptable red evidence; T7 pins that attribution without requiring another red
build/replay. HTTP-only tests may already pass on that baseline; do not label them red.
T8 repeats the same browser procedure and HTTP contracts green on the real app.

Coordinator preflights working tree, output/process ownership and free reserved
actual-app ports3110(dev)/3111(prod), leaving fixture3106 and all unrelated processes
untouched. If busy or an active build would be overwritten, STOP and report; no kill,
alternate fixture, output relocation or cleanup. After approval only, use sequential
`pnpm dev --port 3110 --hostname 127.0.0.1` and, after successful `pnpm build`,
`pnpm start --port 3111 --hostname 127.0.0.1`; stop only newly owned task servers.
Run `LOCALIZED_404_TEST_ORIGIN=http://127.0.0.1:3110 pnpm test`, then the same with3111.
T9 runs `pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`,
`pnpm build`, `git diff --check`; no installs or fresh fixture builds.

| Traceability | Actual-app proof required in T8/T9, independently reviewed in T10 |
| --- | --- |
| RF-1 | dev/prod × en/es × simple/nested × native JS-off/on direct/reload:404/no redirect, ordinary HTML and visible result together. |
| RF-2, RF-3 | Exact approved copy/lang; contrary preferences, ignored locale query overrides, alternating requests and proxy precedence without cross-request leakage. |
| RF-4, RF-5; RNF-2 | Semantic heading, native named visible anchor to /en or /es, visible keyboard focus and Tab/Enter recovery to same-locale Home200; essentials independent of motion/scripts. |
| RF-6 | Real Home/About/Projects in both locales:200/localized content, JS-off content and JS-on client navigation/back-forward/menu/locale switch/recovery without new regression. |
| RNF-1 | Exact final diff, unchanged valid-page sources/negotiation/dependencies; real unprefixed/unsupported controls, rendering classification, theme bootstrap/hydration/persistence/system/locale navigation. Missing-path locale switching preserves path; existing query/fragment policy remains unchanged. |
| RNF-3 | Actual app in BOTH modes, four missing paths, native JS-off/on, light/dark × 320/390/768/1024/1440px × normal/150% text: readable content/link/focus, no error-caused horizontal overflow; controlled theme input when scripts are disabled, reduced motion for affected interactions. |

The independent candidate review above and the explicit joint human approval fulfill
T6's current criterion; planner records T6 complete on coordinator instruction.
This is not actual-application completion evidence. Coordinator delegates
T7 → T8 → T9 → T10 one task at a time, without renewed human approval between tasks.
Unknown decisions/new failures needing broader scope STOP for planning. Preserve
historical task completions; only T6's checkbox changes in this approval record. Reviewer must
return actual requirement evidence and final verdict, not fixture/task-count approval.
Planner read installed Next16.3.5 not-found/CLI docs and next-intl public request
types; Context7 resolution again returned Invalid API key for both libraries.
This approval-record edit ran no shell/runtime; current Git inventory/scope and git diff --check
must be arranged by coordinator/reviewer. MEMORY/spec/manual handoff unchanged.

## Historical superseding endpoint and bounded review authority — superseded

This section supersedes ALL older opening STOP/proposal/current-authority wording
below. Retained sections are HISTORICAL records, not instructions to repeat their
cache moves, builds, monitor work or server starts.

- The USER explicitly authorized and executed isolation of only the Next TypeScript
  cache plus ONE additional build. The original survives as
  `../.portfolio-404-probe-20261008/manual-results-run-E7DNNM/next-cache-before-isolation.tsbuildinfo`,
  with matching before/after SHA256
  `a8695897aa25a4b24ea30e600278c1eb52a024cf4e1e95ad4e8fafa52c6264ac`.
  `build-after-cache-isolation.log` records exit 0 and all build stages passing;
  `/_not-found` and Home/About/Projects are dynamic. The confirmed stale diagnostic
  build blocker was resolved by this isolation; its invalidation cause remains unknown.
- USER production on 3107 returned en/es HTTP404 without Location under contrary
  Accept-Language. Independent reviewer parsed saved `prod-{en,es}.{headers,html}`:
  ordinary HTML outside scripts/templates contains correct lang, exact copy, native
  localized anchor, noindex and shell. This is independent saved-HTML inspection,
  not independent browser execution. USER confirmed Chrome Disable JavaScript was
  checked and all four simple/nested en/es paths showed correct visible language,
  with Tab/Enter recovery to localized Home200. USER also reported all four JS-on
  error/recovery checks, working menu links to all pages, locale switching preserving
  the missing path and translating content, and theme changes without blanking.
- The extra missing-route `_rsc` 404 when opening the menu carried `RSC=1` and
  `Next-Router-Prefetch=1`; valid links worked. It is an observed prefetch, not an
  observed functional menu regression, and warrants no suppression/navigation edit.
- USER stopped production, started development 3106 (Ready), captured four HTTP404
  responses, and reported the same four JS-off language/Tab/Enter/Home200 checks
  and JS-on menu/locale/theme/error/recovery checks passing. These remain USER-supplied
  observations; no full RF/RNF matrix or actual-application production proof is claimed.

The user's subsequent request to continue automatically authorizes the remaining
bounded diagnostic review, not renewed manual-step guidance or implementation.
Coordinator has delegated independent HTTP/saved-HTML/negotiation compatibility
review and browser checks on the existing fixture dev server 3106 only. Use read-only
probes and observed saved evidence; no new build/server, fixture/source/dependency
edits, old monitor-budget revival or duplicate reviewer runtime checks by planner.
Pending review findings must not be presented as completed results.

The original blank document defect is narrowed to the matched `notFound()`
interruption contrast, not a unique internal Next cause. Vanilla synchronous controls
show rootParams is unnecessary for that reproduction. This is distinct from the
fixture's resolved stale-cache build blocker; neither establishes a product fix.

Provisional correction scope, NOT an approved exact production proposal: enable
`experimental.globalNotFound` in `next.config.ts`; add a full global document reusing
current fonts/styles/providers and localized 404 shell; remove only the locale
`[...rest]/page.tsx` after approval; use the public deprecated `requestLocale` bridge
in the request module while preserving explicit-locale validation. Do not change the
ordinary not-found boundary or locale root layout without separately justified exact
proposal. Experimental/deprecated API and dynamic-rendering compatibility remain
review concerns. Compatible evidence must precede a concrete plan/tasks proposal and
separate joint human approval before T6 completion or T7/T8 execution.

Specification unchanged; historical checkboxes preserved. Application sources and
dependencies were not changed by these spec investigations; prior unrelated work
exists, so this is not a clean-working-tree claim. Planner edits only the three
handoff documents and performs no runtime checks. Current Git scope/whitespace
verification remains with coordinator/reviewer; MEMORY is coordinator-owned.

## Historical pinned cache diagnosis and one-file comparison proposal — superseded (2026-10-08)

The cache-isolation proposal below was subsequently approved and consumed by the
USER; its proposed filenames and STOP endpoint are historical, not the actual result
names or current review authority. The current endpoint above governs.

This section overrides ALL older execution authority and endpoint wording below.
The coordinator reports the USER applied the previously approved exact declaration
restoration in the fixture; standalone `tsc --noEmit` passed, but the ONE authorized
renewed plain build compiled then repeated TS2322. That slot is consumed. An absolute
project standalone check with `--incremental false` also exited 0 and includes the
augmentation. Application code is unchanged; fixture restoration is an authorized
past source edit, not pending work or proof that fixture sources never changed.

Independent reviewer, using public TypeScript 5.9.3 APIs and guarded zero-write hosts,
reproduced stale TS2322 in the cache-backed builder with the same Next CLI options;
its underlying raw program had zero semantic diagnostics and getLocale typed en/es,
as did a fresh program. All 655 reviewed file hashes matched cache entries, and file
metadata/cache hash stayed unchanged during that review. These are historical supplied
findings, not current preservation proof. Next 16.3.5's default TypeScript CLI uses
fixture `.probe-next/cache/.tsbuildinfo`, distinct from standalone tsconfig.tsbuildinfo.
The assembly omission is fixed; stale cached semantic diagnostics are reproduced.
No unique invalidation cause or original blank404 cause/correction is established.

[manual-validation.md](manual-validation.md)'s opening section defines the complete
PROPOSED USER-only next action, public-source references and STOP gates. NEW explicit
approval must cover ONLY quarantine of `.probe-next/cache/.tsbuildinfo` into an absent
exclusive filename in existing recognized `manual-results-run-E7DNNM`, then ONE plain
installed Next build of the unchanged candidate with all checks enabled. Verify exact
physical fixture CWD, independent ownership/regular-file identity, no fixture Next
process using the cache, source/graph/resource readiness and current hash before any
move. Unknown files/drift/ownership STOP. No overwrite, deletion or results recreation;
verify before/after quarantine hash and preserve the original and all existing logs.
New build may create a new cache; record it separately with distinct no-overwrite
`build-after-cache-isolation.log` / `.exit` evidence. Never touch standalone typecache.

Compare once then STOP, even on success; no server/request/browser release here.
Failure preserves evidence without auto-restore over generated cache, retry, source
changes, cast/type suppression, broad clearing, dependency changes, monitor work or
historical replay. Future restoration/comparison/runtime needs separate approval.
Plain build writes normal owned outputs and retains the disclosed non-sandboxed
shared-graph/resource risks. Original cache preservation makes isolation reversible,
not automatically restored. Agents execute NONE; planner changes only the three SDD
handoff documents, no commands. Coordinator/reviewer must check current Git scope and
whitespace. T6 pending/T7–T8 blocked; all checkboxes/spec and application unchanged.

## Historical first manual-build endpoint and restoration proposal (2026-10-08)

The declaration restoration and renewed user build proposed in this historical
section were subsequently approved and executed by the USER. Its absence/current
wording is historical, not permission to copy, typecheck or build again.

This section supersedes current/unexecuted handoff wording below, not historical
evidence. The user's first actual manual build at the retained neutral sibling
compiled with Turbopack, then failed type checking at `site-header.tsx:37`:
`string` cannot satisfy LocaleSwitcher's `"en" | "es"` prop (TS2322). Read evidence:
`../.portfolio-404-probe-20261008/manual-results-run-E7DNNM/build.log` and
`build-pipeline.exit` (1). One USER build is consumed separately from the TWO
historical AGENT monitor aborts; the third agent slot remains unreleased/unexecuted.
This is one actual compilation, not a completed production build or runtime verdict.
Do not start production/development or automatically retry.

Source comparison confirms the neutral fixture omitted all `src/**/*.d.ts`,
specifically original `src/i18n/types.d.ts` next-intl AppConfig augmentation.
Installed getLocale/use-intl types explain the resulting default `string`, while
both routing modules and the unchanged switcher retain strict en/es. The fixture
tsconfig already includes declarations through `**/*.ts`. This source-level
assembly omission is distinct from the original no-script404 runtime defect.

PROPOSED, NOT approved or executed: restore ONLY that original declaration
byte-for-byte into the absent fixture `src/i18n/types.d.ts`; its relative imports
bind to fixture routing/neutral messages, not original personal content. No cast,
widened prop, locale API/header/request-config change, suppression, generated-file
hand edit, installation, public-route or architecture variant is proposed.
[manual-validation.md](manual-validation.md) records exact source/destination,
absence/no-symlink/ownership gates, no-overwrite copy and content verification.
Explicit NEW human confirmation must precede helper copy or any renewed runtime:
one installed `tsc --noEmit` first, then ONLY on success and refreshed safety/resource
gates at most ONE renewed USER manual build, preserving the first log/status.
Incremental typecheck may write owned fixture-local tsbuildinfo; it is not read-only.
Any failed check/build STOPs with evidence; no automatic further repair or retry.

The user recognizes the experiment per coordinator; reads do not establish current
ownership/preservation of every `.probe-next` artifact. Existing output persists
and must be inventoried, not deleted; historical hash/ownership gaps stay explicit.
This proposal grants no agent execution or production authority and no blanket
approval for future attempts. T6 remains pending; T7/T8 blocked. Spec and completed
tasks unchanged. Context7's recorded failure remains; installed public types ground
this diagnosis. Planner ran no shell/copy/tests/typecheck/build/server/probes;
current Git scope and `git diff --check` remain for coordinator/reviewer.

## Historical endpoint and manual handoff — superseded (2026-10-08)

This section supersedes every execution/conditional-slot/current-endpoint instruction
below. The coordinator reports that the neutral Node readiness diagnostic failed on
unsupported io_uring, mapping and TCGETS2 handling in the custom monitor. Reviewer
confirmed STOP: no third Next build was released or executed. This is an operational
readiness failure, not an Option A compilation, locale or rendering verdict.

The reported `/tmp/opencode/t6-readiness-20261008-0950/EVIDENCE.md` is now unavailable:
the planner's read found its containing directory missing after the reported server
restart. Exact events/lines, exits, latest elapsed totals and cleanup/preservation
cannot be freshly checked or reconstructed from that missing report. The two earlier
build aborts remain historical summaries, not freshly verified raw evidence.

The neutral sibling source/configuration survives at
`/home/jorge/Projects/web/career-launch/.portfolio-404-probe-20261008` and was read,
not run. Reads confirm experimental.globalNotFound, the career-launch Turbopack root,
`.probe-next`, a complete global document, and the corrected explicit-locale guard
with the public deprecated requestLocale bridge. Reads do not establish current
ownership, source hashes, dependency-link identity, capacity, output or port readiness.

The requested fallback is [Manual validation and diagnostic handoff](manual-validation.md).
It proposes user-executed checks of actual Next compilation, responses and native
no-script rendering, WITHOUT another custom-monitor development cycle. It does not
grant agents a retry, a new budget, helper/fixture/application changes, alternative
configuration or production implementation. The user must elect to run the proposed
manual commands and accept the explicitly disclosed non-sandboxed shared-graph risk;
missing ownership/graph evidence remains a STOP, not permission to recreate work.

Spec and checkboxes remain unchanged. T6's compatible-proof/exact-production joint
approval criterion still applies; T7/T8 remain blocked. This documentation-only
revision ran no shell, helper, build, server, HTTP or browser validation. Context7
resolution again failed with Invalid API key; installed Next docs and next-intl public
types were read instead. Coordinator/reviewer must inspect the current working tree
and run `git diff --check`; historical whitespace results do not verify this edit.

## Historical approved T6 revision — readiness gate failed, no build release (2026-10-08)

This section supersedes ALL execution authority, attempt counts, readiness claims and
"current/latest" wording in the historical records below. Those records preserve
decisions/evidence, not permission to resume. No helper, fixture, application or
environment change, test, probe or build outside the bounded substeps below is authorized.
The user's latest explicit “Lo apruebo”, with the conditional request for a user-led
diagnostic plan if this revision remains inconclusive, records ONE joint approval
of this revised plan/tasks. It covers
owned-helper readiness work, the bounded neutral Node diagnostic, independent
readiness review, the exact /dev/null exception and monitoring-only residual risk,
THEN at most ONE additional build command conditional on accepted readiness and
sufficient original time/resources. No additional human approval is required between
these defined T6 substeps. The third command is conditionally authorized, not yet
released or executed. Reviewer remains read-only; coordinator controls sequencing
and must verify all preflight/review gates before delegating the conditional build.
Failed readiness or insufficient budget STOPs without a Next CLI launch. Approval
does not waive unknown scope/architecture decisions or the separate exact-production
proposal/approval gate before T7/T8.

### Actual endpoint and unchanged candidate

Read evidence: `/tmp/opencode/t6-option-a-corrected-20261008-0927/EVIDENCE.md`,
`monitor.py`, `test-monitor.py`, `build-monitor.json` and saved `build.strace`;
retain the earlier 0913 and 0900 evidence/manifests referenced below.

- Same one Option A configuration; TWO authorized build commands consumed. Second
  command stopped after 0.463326541s (child exit143, wrapper exit99). CLI/config
  evaluation ran; no application compiler invocation/completion, optimized-build
  announcement, prerender manifest or native compiled candidate tree was observed.
  Three local initialization files were generated, inventoried and removed only
  within proven-new output/cache trees: do not claim zero framework outputs.
- Complete descriptor parsing succeeded, but an exact eventfd regex rejected
  `eventfd-count=0x1` at trace line3474. Cleanup classification also rejected
  `openat(..., "/dev/null", O_RDWR) = 3</dev/null<char 1:3>>` at line4298.
  All4583 lines were fed through cleanup. These are owned-helper coverage and
  protection-policy blockers, NOT a negative Next/intl API or rendering verdict.
  No outside regular-file mutation was observed; the /dev/null writable open was
  nevertheless outside the previously approved allowlist. Do not retroactively
  label the old monitor pass or either abort unnecessary under its old contract.
- No dev/start, HTTP or native JS-off/on candidate proof. Preservation reports
  show unchanged repository/existing outputs/packages/listeners during their saved
  interval, not prevention or absence of transient mutations. Feature remains OPEN.
- Approximately20/45 focused minutes consumed; approximately25 remain BEFORE this
  planning/review and any later work. Reconcile actual charged time, including
  planning, readiness, review, tests, build, matrix and cleanup; never reset to45.
  Minutes remaining confer no command authority. If insufficient for full proof
  and cleanup, STOP rather than launch an attempt that cannot be evaluated.

Keep the same globalNotFound document, explicit shell/theme, dynamic locale root,
proxy/negotiation, absent replica catch-all and public but deprecated requestLocale
bridge. The canonical explicit-locale validation correction is already staged and
its eight mocked contracts passed; that is not runtime locale proof. Preserve it
without another fixture correction/configuration. No private header/import,
root-getter catch/retry, extra flag, dependency, root redesign, Option B, application
edit or production proposal is introduced. Exact production edits still require
compatible evidence and separate joint approval before T7/T8.

### Replacement strategy: bounded filesystem mutation audit, not descriptor-format guessing

Replace the helper's all-write regex allowlist with separate structural decoding,
typed descriptor provenance and filesystem-policy evaluation. Numeric annotation
fields are data, not object identity: decimal/hex eventfd counters must not decide
whether an object is a filesystem target. Retain raw complete events and explicit
classifications/reasons; never split paths/annotations at internal commas.

1. **Path/inode mutation layer.** Audit write-capable open/openat/openat2/creat flags
   and pathname mutation operations (rename, unlink, mkdir/rmdir, links/symlinks,
   chmod/chown, truncate and timestamp changes, including relevant *at forms).
   Resolve each actual argument by its syscall contract, not "all quoted arguments"
   or suffix heuristics: a symlink target string is not its created pathname;
   rename has two directory bases. Track successful chdir/fchdir and inherited or
   shared CWD across process/thread creation. Relative-path uncertainty STOPs.
   All genuine outside-owned mutation attempts abort, even when they return an
   error, except the unchanged exact ancestor mkdir/-1 EEXIST identity check.
2. **Descriptor layer.** Inventory inherited descriptors before child launch:
   read-only object type/identity and access mode, declared owned logs and stdio.
   Reconcile successful open/dup/close, descriptor reuse and fork/clone inheritance
   (including shared descriptor tables) with full annotations/read-only fd metadata
   when available. Audit fd-backed mutation, including vector/positioned writes,
   truncate, ownership/mode changes and writable file-backed mappings/transfers
   where used by the installed runner. A write-open-only audit is insufficient:
   inherited descriptors can mutate files without another open. Do not accept fd1/2,
   a successful open, an absolute path label or an unresolved bare fd as permission.
3. **Non-filesystem layer.** Separate proven pipes/sockets and eventfd/signalfd/
   timerfd objects from pathname files. Decode angle/brace annotations structurally
   with escaped strings and numeric fields accepting decimal and hexadecimal forms;
   bind type to explicit full annotation or observed creation/fd metadata, not
   volatile counters or a broad substring. Legitimate signaling/IPC events do not
   require owned filesystem paths. Unknown anonymous inodes are NOT automatically
   harmless: memfd/file-backed objects and other writable types need filesystem
   policy or STOP. An ambiguous descriptor capable of filesystem writes still
   STOPs; an unfamiliar payload/counter in an otherwise proven IPC object alone
   does not become an invented outside-file mutation. No blanket anon-inode/socket
   label exemption. Malformed/truncated type evidence cannot prove IPC.
4. **Exact character sink decision, approved for this bounded revision.** Permit only literal
   `/dev/null` ordinary writable open and byte writes after read-only lstat/stat/
   realpath verification establishes that exact non-symlink character node, rdev
   major1/minor3, stable device/inode/mode/ownership before/event/after. Returned fd
   must identify the same character sink; annotate `</dev/null<char 1:3>>` correctly.
   No prefix-based /dev allowance, alias/symlink, regular file named null, different
   device, create/truncate flags, chmod/chown/unlink/rename, or generic device writes.
   Failed/missing identity evidence STOPs. This is an explicit protection-contract
    exception covered by the latest joint approval, not a parser fix silently waiving outside writes.

Keep one auditable table of the selected runner's filesystem mutation operations,
descriptor lifecycle and non-file signaling events, with fixture expectations.
Use existing strace/read-only OS metadata and the retained diagnostic harness;
no new dependency/runner. Trace selection must cover this bounded table rather than
silently ignoring writev, fchown, mmap or transfer operations not in the old filter.
Reviewer checks coverage against actual launch/cleanup traces and installed runner
use; this is a bounded audit, not a formal guarantee over every Linux syscall.
Unsupported mutation mechanisms, missing identity/lifecycle evidence, trace gaps,
unassembled events or monitoring loss STOP before build or abort a live attempt.
Do not turn readiness into an impossible universal-parser/Rust-attribution gate.

Monitoring sees syscalls AFTER execution and cannot prevent the first outside write.
Hashes prove observed preservation only. The latest approval accepts that disclosed risk;
it cannot claim the graph is guaranteed immutable by enforcement. No broad external
permission changes are allowed. Existing OS write isolation may be considered ONLY
if read-only preflight establishes an already available supported tool/mechanism;
planner has not established availability. That would require documented CLI/support
and a separately approved concrete setup, with Context7 where applicable; no invented
bubblewrap/Landlock syntax, install or automatic alternative. If the bounded audit
cannot distinguish filesystem writes reliably and no separately approved available
isolation resolves it, STOP with a blocker: no rebuild or application changes.

### Readiness gate — independent acceptance, no Next build

Under the recorded single joint approval of this revision, implementer may revise independently
owned helper/tests/logging, preserving original helpers/traces. No fixture source
changes. Verify the retained sibling realpath/uid, exact independent source inventory
and final corrected hashes from the0927 evidence (NOT the superseded original
request hash), sole dependency link and current installed graph. Recheck saved
cleanup inventory of initialization outputs; unknown files/hash drift/ownership
STOP without deletion/recreation. Refresh repo/.next/package/ancestor/listener
inventories, declared CWD/distDir/HOME/XDG/TMP/cache/log paths and resource limits.

Required acceptance evidence, BEFORE coordinator may release the conditional build slot:

- Red/green saved-input tests plus complete replay of BOTH actual build traces
  (0913 and0927) and saved CLI boot/cleanup traces, without discarding tail events.
  Every event has a recorded class; no unresolved filesystem target/lifecycle or
  incomplete pending event. Replay expectations distinguish previously prohibited
   events from the now-approved typed IPC/exact-device policy. Saved trace may lack new
  lifecycle events; report that limit and validate the new trace selection separately.
- Table-driven structural cases cover decimal/nonzero hexadecimal fields, nested
  angle/brace annotations, escaped/spaced/comma paths, fd reuse/inheritance/shared
  tables, relative paths/CWD/directory fds, failed calls and interrupted/resumed
  assembly. Include supported eventfd/signalfd/timerfd/pipe/socket representations
  AND unknown anon-inodes, file-backed objects and regular-file lookalikes.
- Negative saved-input cases must reject outside regular-file opens/writes (including
  inherited fd1/2), mutations/vector writes/mappings, identity drift, forged /dev/null
  labels or aliases, non-null devices and all non-exact EEXIST cases. No deliberate
  outside-write probe. A green eventfd case or `next --version` alone is insufficient.
- One short neutral Node startup/shutdown diagnostic, included in this recorded
  joint approval, may exercise owned logs/files, inherited stdio, child/thread
  descriptor lifecycle, IPC/signals and exact null sink. No Next dev/build/start,
  application HTTP/browser probe or new candidate. Use installed Node and the owned
   diagnostic harness, capped at five focused minutes, charged to the original45.
  Preserve its complete trace through cleanup and verify graph/output preservation.
- Independent reviewer inspects the helper/parser separation, bounded syscall/type
  table, whole-trace expected classifications, negative tests and diagnostic evidence.
  Reviewer is read-only; coordinator verifies the accepted readiness report and
  controls delegation of the conditional build under this same joint approval.
  Readiness acceptance is NOT feature approval. Any unresolved type/coverage/policy
  failure returns to planning without a build; no iterative live-build parser tuning.

### Only conditional renewed slot and unchanged candidate proof

The recorded single joint approval covers **at most ONE further build command**,
maximum THREE Option A commands total, with the first TWO permanently consumed.
Approval includes preparation/review, the exact /dev/null decision,
monitoring-only residual risk, same fixed candidate and remaining original budget.
Independently accepted readiness and sufficient reconciled
time/resources are mandatory operational gates, not another human approval round.
Coordinator releases the one conditional slot only when those gates pass; otherwise
STOP without a Next CLI launch. No automatic fourth attempt or budget reset.

One failed candidate compilation/runtime/HTTP/native criterion is a negative result
and STOP; operational monitor/resource/trace failure is inconclusive and STOP, not
an API verdict or a dev fallback. On successful build only, use the unchanged full
four-path en/es single/nested dev/prod direct/reload native JS-off/on matrix, exact
copy/lang/genuine404/no redirect/noindex/native recovery, post-proxy unmatched and
actual build/prerender classification, contrary/forged metadata and alternating
locales, and valid en/es Home/About/Projects/shell/theme/navigation/negotiation
controls. Do not truncate proof to fit time. Full presentation proof remains T9.

Return corrected helper diffs/tests/trace tables, readiness review, actual counts/
charged time, ownership/graph/output/listener preservation, resources and owned
cleanup; include HTTP/native proof only if actually obtained under renewed authority.
T6 remains unchecked until compatible proof supports exact separately approved
production edits. T7/T8 blocked; no RF/RNF completion or production diff proven here.
Coordinator alone reconciles MEMORY. Planner edited only plan/tasks, ran no shell,
helpers, tests, probes or build; current scope and `git diff --check` remain for
coordinator/reviewer, not covered by the evidence's historical whitespace check.

### Approved fallback deliverable — user-led diagnosis after the outcome

If this revision ends inconclusive (including failed readiness or insufficient
budget), STOP runtime and prepare an actionable diagnostic plan the user can follow.
This approval covers documenting that fallback AFTER the actual outcome, not running
new experiments, retrying a build, resetting the clock or modifying the application.
Do not invent the failure's origin or write a speculative runbook before the result.

The handoff must identify:

- The exact last completed stage, command/exit status if launched, trace event/line,
  descriptor/path and policy reason, actual command/time totals and owned cleanup.
- Facts established versus missing: helper/readiness failure, resource/trace blocker,
  compilation/runtime failure or missing locale/HTTP/native proof. Two consumed
  monitor aborts are not evidence of candidate/API failure; unavailable evidence
  must be labeled unavailable, not reconstructed automatically.
- Ordered user checks with exact existing artifact paths or bounded read-only
  commands, working directory/tool prerequisites, expected observations, what each
  result confirms or rules out, and explicit STOP/decision points. Check the saved
  full traces/readiness report, descriptor provenance and exact device identity,
  source/graph/output preservation and capacity/quota facts as relevant to the
  observed blocker. Inspect build/route/response/browser artifacts only if obtained.
- The smallest missing observation needed to distinguish monitor/policy, environment,
  framework route-selection/rendering and locale-context origins, with uncertainty
  retained where the evidence cannot distinguish them. Any proposed future runtime
  action must be separately labeled NOT authorized and require a new scope/budget
  decision; this handoff grants no automatic probes, retries or alternative candidate.
- A compact result template for the user to return: check, exact observation/evidence,
  inference supported, unresolved origin and next decision. Exclude secrets and
  private environment dumps. T6 remains pending, T7/T8 blocked and the spec OPEN.

## Historical latest T6 amendment — APPROVED THEN, authority now exhausted (2026-10-08)

This amendment takes precedence over every older approval/resumption, fixture-absence,
build-count and locale-validation instruction below. The earlier approved experiment
has now consumed its sole build command attempt. Following reviewer acceptance,
the user's explicit “Lo apruebo” jointly approves this latest plan/tasks amendment:
ONLY the owned diagnostic helper/logging and canonical fixture request-validation
corrections below, plus ONE additional production build command for the same Option A
configuration in the existing proven-owned fixture after all gates pass. This lifts
the approval STOP only for that conditional continuation, not for blanket retries,
new variants/flags/dependencies or application changes. Specification, application,
MEMORY, AGENTS, dependencies and architecture remain unchanged. Approval is not
execution, compatibility proof, T6 completion or feature closure; exact production
edits still require a separate evidence-supported proposal and joint approval.

### Actual endpoint and approved renewed slot

Evidence: `/tmp/opencode/t6-option-a-resume-20261008-0913/EVIDENCE.md`,
`build.strace`, `build-monitor.json`, `actual-write-events.txt`, `preflight.json`,
`replica-manifest.json`, `candidate-hashes.json`, `candidate-final-hashes.json`
and `preservation-result.json` in that same owned evidence directory.

- One neutral Option A configuration was staged; one production build command was
  attempted and terminated after 0.10585s, BEFORE CLI output, compilation,
  prerendering or framework output creation. Actual compilation count is zero.
  No dev/start, HTTP or native CDP candidate validation occurred.
- The complete event at `build.strace:109` is a write to
  `19<{eventfd-count=0, eventfd-id=544, eventfd-semaphore=0}>`. The helper's
  `args.split(',', 1)[0]` truncated it at an annotation comma, and eventfd was
  not classified. This is non-filesystem signaling IPC, not an observed outside
  file write. The unknown-descriptor mandatory abort was nevertheless correct.
  It establishes a helper coverage failure, NOT an Option A rendering failure.
- The ten historical synthetic cases omitted eventfd; their pass is not a valid
  corrected-helper pass. Saved tracing continued through termination, but live
  classification stopped at the failure; no complete cleanup classification claim.
- Approval allows ONLY **one additional production build command retry: maximum two
  Option A command attempts total, including the consumed aborted attempt**.
  Same single configuration and approved semantic intent, not an alternate experiment.
  Original **45 focused minutes TOTAL** includes approximately six audit minutes
  plus five continuation minutes: approximately eleven spent, thirty-four remaining.
  Reconcile actual time and charge all correction/preflight/tests/build/matrix/cleanup
  against the remainder; no clock reset or automatic retries. Remaining time is not
  itself authority to retry. Budget expiry or any failed gate returns evidence and STOP.

### Resume only the proven owned sibling

The exact sibling `/home/jorge/Projects/web/career-launch/.portfolio-404-probe-20261008`
now legitimately exists: the prior approved run created and retained it. Do NOT apply
the older generic must-be-absent rule to this owned continuation. Before changing it,
verify exact realpath/ownership, independent source inventory and every saved source
hash against the replica/candidate manifests above (initial and final hashes agreed),
plus the sole node_modules link and unchanged installed graph identity. Confirm the
recorded absence of `.probe-next` framework outputs. Unknown files, ownership/hash
drift, unexpected links or outputs STOP; never overwrite/recreate/delete unknown work.
Preserve original manifests and helper/trace evidence; record new before/after hashes
and a diff for ONLY the explicitly authorized helper and request-config correction.

Retain the exact career-launch root, sibling CWD/project/distDir and owned HOME/XDG/
TMP/cache/log/evidence destinations, direct installed CLI, no lockless pnpm/install,
and no source/output links into the repository. Refresh Git/source/existing `.next`/
package/link/ancestor/listener inventories before/after; do not probe or disturb
existing ports 3000/3001. Recheck dedicated 3106/3107 availability, not assumed free.
Keep quota uncertainty, 320MiB aggregate owned-tree cap, 512MiB/10,000-inode headroom,
one live output, sequential prod/dev and owned-process cleanup. Monitoring is NOT
an OS write sandbox; unchanged hashes establish observed preservation only.

### Exact owned-helper correction and prelaunch acceptance

Under this recorded approval only, correct the retained diagnostic `monitor.py`/`test-monitor.py`
and associated owned logging, not framework/library code. Parse complete syscall
arguments structurally rather than splitting inside quoted paths or fd annotations:
respect escaping, spaces, commas and nested angle/brace descriptors, plus existing
unfinished/resumed assembly and actual syscall results. Logs must preserve the whole
descriptor/path safely, not turn an annotation fragment into a classification.

Recognize the complete eventfd annotation as its explicit non-file IPC type.
Pipe, stdout/stderr and socket writes may be accepted ONLY when their complete
resolved descriptor proves a declared legitimate non-file IPC type or owned log;
an fd number (including 1/2), unknown/malformed annotation or socket label alone
must not exempt file paths or mutations. Unknown descriptors remain fail-closed.
Retain proper per-process CWD and directory-fd resolution for filesystem events,
including relative paths and changes of working directory. Actual outside-owned
file-write attempts still abort immediately, regardless of return error, except
the previously approved exact career-launch mkdir/-1 EEXIST identity check.

Before launch, verify the corrected helper using saved ACTUAL trace replay, including
the eventfd line and termination tail, and deterministic saved-input unit cases:
annotation commas/duplicates, nested angle/brace content, escaped/spaced/comma file
paths, known non-file IPC versus real file descriptors, unknown/malformed descriptors,
outside file-write descriptors/mutations, CWD/directory-fd resolution and exact
EEXIST acceptance/rejection. Preserve expected classifications and results; failure
STOPS with no runtime. No deliberate outside-write probes. Existing saved-input
helper invocation is diagnostic-only, not a new application runner or T7 regression.
Require healthy live tracing AND classification from launch through owned cleanup;
incomplete events, gaps, unknown paths/results/fds or monitor loss still abort.
No private Rust attribution gate is reintroduced once declared destinations and
observable checks pass; unavailable native origin remains a documented limitation.

### Exact fixture request-config correction, not a second candidate

In the retained fixture's `src/i18n/request.ts` ONLY, remove the unintended default
for an explicitly requested unsupported locale. A present explicit `requestedLocale`
must retain precedence: validate it against routing.locales and invoke canonical
`notFound()` if invalid; valid explicit values retain the same catalog selection
without consulting implicit metadata. Only absent explicit override uses the public,
deprecated `requestLocale` bridge; absent/invalid IMPLICIT metadata may use the
existing documented default outside the scoped contract. Missing/wrong metadata
for scoped en/es requests is still failed proof, not default-language success.
Verify explicit valid, explicit invalid and absent-explicit/implicit-valid/invalid/
absent cases with saved diagnostic observations; do not claim tests already passed.
Retain loaders, validation interrupt semantics and neutral unprefixed/unsupported
route controls, without inventing negotiation behavior. Global document and implicit
shell queries retain this same bridge. Do not call/catch/retry `rootParams.locale()`.
No public API/library/production modification, alternative locale header, extra
render flag, new config variant, dependency or architecture change is authorized.

### Conditional renewed build and unchanged proof/STOP gate

Under the recorded joint approval, ONLY after ownership/hash verification, helper tests and fixture contract
checks pass may implementer spend the single renewed build slot. If compilation/
build or monitoring fails, STOP immediately: no dev fallback experiment, blind retry
or attribution prerequisite. If build succeeds and resources/time permit, run the
unchanged full scoped four-path dev/prod direct/reload native JS-off/on matrix and
valid en/es Home/About/Projects controls described in the historical protocol below:
HTTP404/no redirect, ordinary useful HTML, exact copy/lang/noindex/native recovery,
unmatched post-proxy classification, preferences/forged metadata/alternation,
valid-route rendering/shell/theme/navigation and unchanged negotiation. Do not
truncate the matrix to claim compatibility if the remaining budget is insufficient.
Full application five-width/theme/text/focus proof remains T9.

Return actual counts/time, correction diffs/hashes, trace/helper tests, declared
destinations, preserved graph/outputs/ports, resource/cleanup and any HTTP/native
evidence, then STOP. RF-1–6 and RNF-1/2 diagnostic compatibility remain unproven;
RNF-3 full proof deferred. T6 stays unchecked unless compatible proof subsequently
supports exact production edits and their SEPARATE joint approval; T7/T8 stay blocked.
Planner changed only plan/tasks; no helper/fixture edit, shell/Git command, runtime,
test or build performed. Coordinator/reviewer must check current scope/diff and
`git diff --check`; historical checks do not validate this approval-record edit.

## Historical approval record — consumed, not current execution authority

The “latest/current” wording in the retained record below describes the earlier
monitor/environment approval, not the newly approved one-corrected-retry amendment.
Its one-build/six-minute accounting is historical; current authority and accounting
are exclusively in the latest approved amendment above.

Specification: `spec.md`, unchanged and approved. Earlier approvals covered the deletion-only diagnostic, then preparation and joint approval of isolated Option A with its sibling/shared-dependency environment and exact EEXIST amendment. That approved attempt stopped before fixture staging because the plan required unavailable native callsite attribution; it did not test the candidate. The user's latest explicit “Lo apruebo”, after the current plan/tasks summary, records renewed joint approval of ONLY this monitor/environment gate correction and acceptance of its monitoring-only residual risk. It authorizes resuming ONLY the same isolated T6 Option A experiment, with setup and runtime conditional on the static-context/environment gates below. Prior approval was not a silent waiver. Candidate, environment paths, protection scope and one-configuration/one-build/45-minute TOTAL budget remain unchanged, including approximately six audit minutes already spent; no budget reset, extra attempt or new scope. This current protocol supersedes earlier T6 instructions, retained as history below. No application edits are authorized; exact production edits require a separate evidence-supported proposal and joint approval before T7/T8. Approval is not execution, T6 completion or feature closure. The formal feature verdict remains `VEREDICTO: CAMBIOS NECESARIOS`.

## Historical approved T6 protocol — Option A; superseded by latest approved amendment

The approvals, absence rules, one-build cap and imperative wording in this historical
protocol record earlier authority only. The latest approved amendment above governs
the existing-owned-fixture continuation and maximum two command attempts; it does
not reset time, permit historical replay or relax any other protection/proof gate.

### Scope, hypothesis and static gates

Evaluate one isolated experimental `src/app/global-not-found.tsx` document while
preserving the dynamic `[locale]` root and valid public routes. The hypothesis is
that a routing-unmatched full document can obtain the proxy-selected locale and
emit useful native404 HTML with explicitly composed shell/theme. Neither locale
availability nor compatibility is established by documentation alone.

Installed Next16.3.5 `not-found.md:47–74,125–133,183–187` specifies exactly
`experimental.globalNotFound: true`, a full html/body document, no component props,
layout bypass, metadata exports and automatic404 noindex. The async header example
at 139–159 is ordinary not-found, NOT assurance for global-not-found. Installed
`headers.md:6,34,45–49` defines async read-only request headers and dynamic rendering.
The loader (`dist/build/webpack/loaders/next-app-loader/index.js:376–387`) replaces
the fallback layout; `dist/server/app-render/app-render.js:268–297` composes a
separate global document. These sources are context, not private imports or proof
of the actual native build's per-request behavior.

Before staging, trace current native global-fallback compilation/prerender and
request forwarding read-only. Determine whether it can use request-time headers,
or is necessarily a static artifact without request context. Record exact sources
and limitations. If the trace establishes static-only context, no supported locale
bridge, or remains insufficient for a plausible request-time candidate, STOP:
no fixed-English baseline, extra flag, force-dynamic workaround, renderer patch,
catch-all interruption retry or Option B substitution. A plausible trace authorizes
only testing the hypothesis under the recorded joint approval; runtime must prove it.

### Locale bridge and explicitly composed shell

- Keep the current proxy matcher, routing settings and plugin integration. Installed
  next-intl `middleware/middleware.js:26–53` resolves locale and overwrites the
  forwarded request header on next/rewrite; `resolveLocale.js:42–64` gives supported
  prefix precedence over cookie/Accept-Language/default. Header presence on the
  global fallback is UNPROVEN. It is request metadata, not a root parameter.
- `X-NEXT-INTL-LOCALE` and its internal constant/reader are implementation details,
  not a stable public header contract. Do not import private modules or hardcode
  that header as the solution. Use the public `getRequestConfig` parameter
  `requestLocale` for the diagnostic bridge, if reachable in this fallback context.
  Installed `dist/types/server/react-server/getRequestConfig.d.ts:8–31` documents
  explicit overrides, undefined/invalid values, and **deprecates requestLocale in
  favor of next/root-params**. This supported-but-deprecated dependency is an
  explicit experimental risk, not a recommendation for broad migration.
- Current `getLocale()` reads request config, which uses `rootParams.locale()`;
  it therefore cannot be called unchanged in the global document. In the isolated
  replica ONLY, retain explicit `requestedLocale` precedence and message loaders,
  but use validated public `requestLocale` for implicit resolution. Do not call an
  unavailable root getter then catch its failure. This narrow diagnostic request
  module change also affects implicit shell queries on valid routes: record their
  build/prerender classification and runtime behavior. Any incompatible rendering
  or navigation change prevents a compatible-candidate claim; it is not waived by
  the fixture being temporary. Canonical request config remains untouched.
- Accept only `routing.locales`; use `routing.defaultLocale` solely for absent or
  invalid metadata outside the scoped contract, without changing negotiation.
  For scoped en/es paths, absent/wrong metadata is a failed proof, even if a default
  makes English appear correct. Test es, alternating requests, contrary preferences
  and forged client locale-header values; verify proxy override and no cross-request
  leakage. Do not trust client-supplied metadata or invent a URL/path header.
- With the resolved locale, obtain catalog messages/translations through public
  explicit-locale APIs. Header/footer use implicit `getLocale/getTranslations`, so
  the diagnostic request config must resolve the same locale as the document.
  `NextIntlClientProvider` alone does not set server locale context. Keep its current
  `locale` and `messages={null}` composition; do not rely on implicit root inheritance.
- The global document explicitly reuses the locale layout's CSS/font variables,
  ThemeProvider (including its early scriptProps compatibility), skip link, frame,
  SiteHeader, main, SiteFooter and error-content styles. Use one main/id and semantic
  h1/message/native anchor with exact RF-2 copy and `/en` or `/es` href. No shell-wide
  extraction/redesign or duplicated identity/catalog/navigation sources. Layout and
  valid-page implementations stay unchanged. Theme scripts may exist; error text,
  html lang and recovery must not require their execution. Existing JS-dependent
  menu/theme controls are not newly guaranteed operable without JavaScript.

### Exact diagnostic changes and approved replacement environment

All following paths are INSIDE the new owned fixture, not production edits:

| Area | Bounded diagnostic difference from current sources |
| --- | --- |
| `next.config.ts` | Keep next-intl plugin; add only experimental.globalNotFound and diagnostic root/distDir. |
| `src/app/global-not-found.tsx` | New complete localized document and explicit current shell/theme composition. Metadata may reuse verified copy; assert native noindex, no invented domain. |
| `src/app/[locale]/[...rest]/page.tsx` | Absent in replica: otherwise missing URLs still match/interruption-test rather than exercise routing-unmatched global fallback. |
| `src/i18n/request.ts` | Replica-only implicit requestLocale bridge described above; retain validation/catalog loaders/explicit overrides. |
| Fixture-only identity/valid-page content | Neutral placeholders, no contacts/env/personal claims/media; retain Home/About/Projects routes and locale-root structure. Declare each neutralization in manifest; a neutral replica is not final application proof. |

Reuse independent snapshots of relevant source modules, CSS and existing local fonts
with licenses/provenance retained; no full repository/dependency copy and no source
imports/symlinks pointing into the repository. The copied modules reference copied
sources of truth, not alternative hand-built shell logic. Copy only catalog namespaces
needed for shell/error and neutral route controls, retaining exact NotFound values;
record the neutralization manifest. No new remote fonts/media or fetch/downloads.

Approved fixture:
`/home/jorge/Projects/web/career-launch/.portfolio-404-probe-20261008`.
If it exists or its ownership is uncertain, STOP; do not overwrite/reuse/delete it.
Link ONLY its node_modules to the installed repository graph, read-only by contract.
Verify every real package target and matching installed versions before runtime.
Top-level `turbopack.root` is exactly
`/home/jorge/Projects/web/career-launch`, only if it contains fixture and all real
dependency targets. Installed `turbopack.md:97–124` supports this linked-dependency
common ancestor. Never broaden to `/`, suppress watching or change production root.
Watching/resolution scope is not a write sandbox; report that residual risk.

CWD/project, distinct distDir, generated types/AGENTS/CLAUDE, logs and all tool caches
must remain owned. Allocate owned HOME/XDG cache/config/TMP paths; verify startup
destinations without dumping inherited env/secrets. No auto-install, pnpm execution
inside a lockless fixture, framework patches, permission changes, generated-file
hand edits or writes into repo/node_modules/existing outputs. Use installed Next CLI
for dev/build/start, equivalent to AGENTS commands, with dedicated verified-free
ports; never restart/probe unrelated servers as readiness controls.

Refresh read-only Git inventory, package/source/output hashes, realpaths and server
inventory before/after the actual diagnostic interval. Preflight disk/inodes/quota;
unknown quota stays unknown, not capacity proof. Keep 320MiB newly owned-tree cap,
512MiB and 10,000-inode minimum headroom, one live build output and sequential
dev/prod. Abort immediately on resource exhaustion/monitor loss. Delete only newly
owned disposable output after snapshotting, never historical/user work or packages.

**Exact monitor/environment gate correction — renewed joint approval recorded:**
allow only mkdir resolving to the ALREADY EXISTING exact real directory
`/home/jorge/Projects/web/career-launch` returning `-1 EEXIST`, with unchanged
lstat/realpath/device/inode/mode/ownership before/event/after. This is not permission
to create/change that directory or to exempt any descendant/other ancestor/error.
The historical /tmp/opencode exception does not transfer.

Before launch verify declared root/project/CWD/distDir/cache parameters and their
realpaths, generated-write configuration and shared-graph/source/output isolation
using available installed source. Undeclared or unresolved configured destinations
still STOP. The generated-agent writer has real project-local side effects that
must remain owned, not an EEXIST exemption. No requirement remains to identify the
internal Rust callsite or predict every native directory attempt before launch:
the installed binary lacks that source. Record unavailable native origin as an
audit limitation, not a prelaunch blocker once declared destinations and observable
checks pass. This does not establish that native writes are safe or confined.

Require live strace monitoring from process launch through owned-process cleanup,
with realpath/CWD/descriptor-aware syscall paths AND actual results. Classify the
one exact ancestor mkdir only after observing `-1 EEXIST` and unchanged directory
identity/state before the event, immediately after it and at cleanup. Missing
state, incomplete/partial paths or results, unresolved descriptors, trace gaps or
monitor loss fail closed. Verify the owned classifier with saved inputs, never
deliberate outside-write probes. All other outside-owned write attempts, including
unknown writes, successful mkdir, write-open, rename/chmod/unlink, abort immediately;
no broad failed-write or external-write allowance. Packages/repository/existing
outputs remain strictly read-only; current newly owned fixture is the only runtime
source/output tree, with declared owned cache/log/evidence paths as above.

Live monitoring detects an attempt AFTER it happens; it cannot prevent an OS write
or rule out mutation before abort, including a race between observations. The exact
EEXIST result is non-mutating, not permission for actual ancestor mutation. Hashes
and identity checks establish observed preservation only, not absence of transient
mutations. The latest renewed joint approval accepts this unchanged monitoring-only
residual risk, not OS enforcement. No sandbox, new tool/dependency,
restriction flag or framework workaround is introduced; requiring preventive OS
isolation instead would need a separately approved available-tool proposal.

### One candidate, hard budget, evidence and approval gates

Under the latest recorded joint approval, coordinator may resume delegation of ONLY
the same diagnostic T6 to implementer, conditional on all static/environment gates.
Budget: **one configuration, one production build attempt, 45 focused minutes total**
including audit/setup/failures; zero runtime if static/environment gates fail.
Include the prior Option A audit (approximately six focused minutes; zero candidate
configurations/builds/launches) in this same total; this correction does not reset
the clock or authorize an extra attempt. Reconcile actual elapsed work in evidence.
No historical baseline rebuild, alternative locale mechanism, repeated failed build,
fixed-language control or automatic Option B round. Record actual counts/time.

Use the four scoped URLs `/en/audit-missing`, `/es/audit-missing` and their `/deeper`
counterparts in BOTH dev/prod: direct and reload × native JS-off/on. Disable scripts
before navigation, require HTTP404/no Location, ordinary visible original HTML
excluding scripts/templates, exact heading/message/lang and native localized recovery
to Home200. Assert noindex. Reject streaming200, redirected, hidden/Flight-only,
hydrated-only or default-language success. Save native build route/tree/prerender
manifests proving unmatched selection AFTER proxy and distinguish static artifacts
from request-time responses. Readiness/monitor must pass before HTTP/CDP evidence.

Check en/es Home/About/Projects200 and localized content with JS-off/on; with scripts
on check shell/theme bootstrap, client navigation, locale switching and recovery.
Check existing unprefixed/unsupported-locale behavior without redefining it. Alternate
en/es requests and test conflicting preference/metadata as above. Any missing-shell,
wrong-language, blank404, soft404, redirect, regression or operational blocker STOPS
the candidate. Full five-width/theme/text/focus matrix stays T9, not fulfilled here.

Implementer returns owned EVIDENCE.md with sources/snapshots/hashes, neutralization
diff, graph identity, static feasibility limits, HTTP/native/raw observations, build
classifications, budgets, monitor/resources and owned-process cleanup; then STOPs.
Negative/inconclusive result keeps T6 unchecked and returns to planning. A positive
fixture is not application closure or permission for production edits. Planner must
then propose exact application files/edits and rendering implications, regression
filename/origin/invocation and retained responsibilities; show that separate revision
for joint human approval before T7/T8. Do not automatically copy the fixture bridge
or experimental flag into production. No spec relaxation is authorized.

### Previous prelaunch STOP and current pending checks

Evidence: `/tmp/opencode/t6-option-a-audit-20261008-0900/EVIDENCE.md`.
The approved attempt stopped before staging solely at the overly restrictive
native-origin prelaunch gate: JS options reach the installed binary, but its Rust
initialization source/callsite is unavailable. This is a planning/operational
blocker, NOT an observed API, locale or candidate failure. Zero candidate
configurations, builds, launches, HTTP/CDP probes or application tests occurred.
The request-context trace supplies a plausible dynamic branch and public
requestLocale/forwarded-request path, not proof of native compilation, production
locale availability or useful404. Those checks remain mandatory at runtime.

The report observed the sibling absent, graph targets within the exact ancestor,
strace installed, quota unknown and existing listeners on 3000/3001. These are
dated observations, not current readiness. Under the recorded renewed approval refresh fixture
absence/ownership, realpaths, graph hashes, resources, monitor/classifier readiness
and dedicated available ports before staging/launch. If the exact sibling now
exists or ownership is uncertain, STOP: do not recreate, reuse, overwrite or delete
it or any older owned sibling. Do not assume listeners or environment unchanged.

Context7 resolution in the audit returned Invalid API key for Next.js and next-intl;
no library ID/query-docs or external documentation was obtained. Available installed
docs/types/source remain the grounding, with the recorded native/runtime limits;
the supplementary outage alone is not a blocker. This planner revision reads rules,
spec/plan/tasks and the report, changes only plan/tasks, and executes no runtime,
helpers, tests, environment creation or probes. Coordinator must verify current
working-tree scope and `git diff --check`; earlier checks do not validate this edit.
T6 stays unchecked and T7/T8 blocked; spec remains approved, OPEN and unfulfilled.

## Historical protocols below — not current execution instructions

## Objective and approval gates

Use the established **minimum distinguishing factor** between useful server-generated
HTTP404 HTML and the current empty `__next_error__` document; then implement and
validate only the minimum evidence-supported, architecture-compatible correction.
Investigation is a prerequisite, not the feature's endpoint.

1. **Joint human approval is recorded** for ONLY this T6 diagnostic bridge and
   `tasks.md` by the user's “La apruebo”, including renewed acceptance of the exact
   EEXIST exception for T6. Previous T5 approval and unused budget authorize no extra work. Refresh T4's
   preservation/resource checks without repeating setup or completed controls.
   T6 starts with the route-selection audit below; runtime is conditional on a
   plausible architecture-compatible deletion-only path, not on approval alone.
2. T6 returns the differential evidence to planner. No exact production correction
   is established today. Planner must record exact files, edits, responsibilities,
   locale/data flow and regression invocation in a concrete plan/tasks revision,
   show it, and obtain joint human approval **before T7/T8 production edits**.
   Compatibility with this plan does not waive this gate while edits are undefined.
3. If evidence requires a root redesign, independent response path, global fallback,
   routing/negotiation change or other expansion beyond RNF-1, ask for that explicit
   decision first; this plan grants no blanket redesign authority.
4. T9/T10 validate the real application against every RF/RNF. Only independent
   approval of the specification's completion criteria permits feature closure.
   Negative/inconclusive diagnostics return to planning or a reported blocker;
   they never fulfill the specification or authorize another unplanned round.

## Historical evidence retained, not replayed

**Availability amendment (2026-10-08):** the T6 resumption inventory found the
previous temporary graph and T1–T5 evidence/artifacts absent. References below are
historical records, not currently available raw evidence. Preserve historical task
completions and approved summaries, but do not claim fresh verification of their
hashes, bytes, screenshots or builds. Loss cause is unknown; no reconstruction or
replay is authorized. T4's old sharing arrangement cannot presently be reused.

T1/T2/T3 were individually jointly approved and independently reviewed for their
investigative scope. Their completed status remains valid, not feature approval:

| Task and retained evidence | Established result and limits |
| --- | --- |
| T1: `/tmp/opencode/t1-404-20261007-impl/EVIDENCE.md` | Four fixtures/builds; moving the boundary, awaiting params or translations all retained blank404 in dev/prod, both locales and path depths. Native CDP confirmed failure without scripts. Shell/fonts/themes are unnecessary to reproduce it. |
| T2: `/tmp/opencode/t2-404-20261007-impl/EVIDENCE.md` | Five configurations, three builds. Next-only B fails: intl is not necessary for this reproduction. D (`use(params)`) and E (async document child) still perform asynchronous locale work; neither is a no-suspension control. Provider-removal C broke client prerequisites and is rejected. |
| T3: `/tmp/opencode/t3-404-20261007-1816/EVIDENCE.md` | Quota exceeded while copying dependencies. Zero new runtime screens/builds; F–I were not generated/executed. No new causal finding. Owned incomplete dependency copies were removed; app/output/servers preserved. |

The old terminal investigation restriction governed those approvals; the user's
explicit return to planning superseded it for this revision; the subsequent joint
approval authorizes T4/T5 sequentially, not an undefined production correction.
The linked evidence retains the historical scopes, limits and endpoints.
Do not repeat rejected T1/T2 changes as proposed fixes or describe T3 as runtime evidence.

T4 completed under that approval: `/tmp/opencode/t4-404-20261007-impl/EVIDENCE.md`.
The shared graph, temporary Turbopack root and separate output resolved setup; they
are not an established cause of blank404 and are held fixed, not retested as fixes.
T5's unsuccessful attempt is retained at
`/tmp/opencode/t4-404-20261007-impl/t5/EVIDENCE.md`, with exact P0 sources in
`snapshots/P0/` and production route classifications in `logs/P0-build-server.log`.
One configuration and one successful production build were used; P1–P7 were never
executed and are now superseded, not permission for another matrix.

P0 produced blank genuine404 in production despite synchronous root/fallback and
no render-time locale awaits. It still contained `[locale]`, en/es static params
and a matched SSR `[...rest]` throwing `notFound()`: **not a vanilla minimal root**.
Prerendered Home200 and dynamic catch-all404 exercise different paths; Home is a
readiness control, not a matched proof of request-time fallback rendering. Genuine
routing-unmatched versus matched top-level interruption was untested at P0's endpoint;
the later V0/V1 evidence below establishes that diagnostic contrast.
Boundary execution does not prove transmitted fallback HTML or boundary commitment.
No universal framework failure, root impossibility or production redesign follows.

P0 dev was legitimately aborted under the old hard attempt rule at
`mkdir("/tmp/opencode", 0777) = -1 EEXIST`; no successful ancestor mutation was
observed. Connection-refused HTTP/browser records are invalid and excluded, not
dev blank404 evidence. The new narrow exception below has explicit human approval;
it does not retroactively invalidate that abort. No unchanged P0 replay/rebuild.

Reuse T2 B's source hashes, version records, raw responses, native browser evidence
and successful build log, plus T3's retained B artifact identity. Verify them against
the actual installed graph before comparisons. T3 explicitly lacks an older complete
artifact hash proving historical byte equality: preserve that limitation. No routine
B replay/rebuild; unexplained identity drift returns to planning.

## Resource-efficient diagnostic environment — T4

- Read Git status/diff without discarding unfamiliar work; inventory existing servers
  and outputs. Keep neutral sources/evidence in one new owned `/tmp/opencode` tree.
  No copied `.env`, personal shell content, credentials or full environment dumps.
- **Selected sharing:** symlink each new fixture's `node_modules` to the retained
  `/tmp/opencode/t2-404-20261007-impl/B/node_modules` graph, after verifying its real
  targets remain within `/tmp/opencode` and match installed Next16.3.5/React19.2.8
  packages. Never link fixture source, configuration, output or working directory
  to the portfolio. The shared graph is read-only by contract; no package manager,
  dependency installs, package patches, permissions changes or caches written there.
- Set the temporary config's **top-level `turbopack.root` to `/tmp/opencode`**,
  the common ancestor of fixture and real dependency targets. Installed
  `turbopack.md:97–124` requires such a root for linked external dependencies;
  a narrow fixture-only root cannot resolve this graph. This broadens resolution/
  watching to that temporary ancestor, not `/` or the portfolio. It is not a write
  sandbox: only imported fixture/package files should participate; monitor resource
  use. Do not copy this diagnostic root setting into production configuration.
- Keep project directory/CWD at the fixture and `distDir` within that fixture,
  separately named per variant. Framework-generated types, agent files, tsconfig
  updates and caches must land in new owned fixture paths, never installed packages
  or portfolio paths. Audit real output paths and before/after package hashes;
   abort on a write attempt outside owned paths rather than permitting a mutation,
    subject only to the approved exact EEXIST directory check below.
- Use the installed Next CLI directly for temporary dev/build/start, equivalent
  to AGENTS commands, with dedicated free ports and explicit fixture directory.
  No lockless pnpm automatic installation. No rebuilding/restarting existing servers.
- Preflight filesystem space **and inode/user quota headroom** using available
  read-only quota information; `df` alone is not quota proof. Measure retained B
  output to estimate one build plus dev/browser/log headroom. State unavailable
  quota visibility explicitly; a small owned create/write/remove check demonstrates
  only present writability, not build capacity. If uncertain, allow one monitored
  small-control attempt, not simultaneous staging or unbounded output accumulation.
- Default: small independent source snapshots, sequential servers and at most one
  live build output. Record hashes/results before removing only newly owned disposable
  output. An allowed lower-footprint alternative is one owned fixture, stopped between
  variants, source snapshots and distinct in-fixture output names. It still uses the
  same shared graph. Never copy full dependencies again, use hardlinks to writable
  packages, delete historical evidence or perform broad/user-directory cleanup.
- If the retained graph is absent, links escape the approved ancestor, safe output
  separation fails or quota is exhausted, report the exact blocker and return to
  planning. Do not silently link the repository graph under an overly broad root.

## Development monitor amendment — historical T5 approval; exact renewal approved for T6

Retain strict realpath/CWD/descriptor-aware monitoring and immutable repository,
existing outputs and shared packages. Only the **exact already-existing directory
`/tmp/opencode`**, including a syscall resolving to that identical real directory,
may be classified as an existence check when `mkdir` returns **-1 EEXIST**.
Do not exempt its descendants, other ancestors, other errors or successful calls.
Record prelaunch lstat/realpath/device/inode/mode/ownership and verify directory
identity/state after the event and at cleanup; retain the syscall and result.
Missing/changing state, a successful mkdir, write-open, rename, chmod, unlink or any
unknown outside-owned write attempt still aborts immediately. No ancestor ownership
claim, blanket failed-write allowance, broad deletion or package permission change.
Directory contents may change only through declared newly owned descendants.

Before runtime, revise only the owned diagnostic helper to distinguish this exact
non-mutating result from mutation, with fail-closed handling of incomplete traces.
Use saved trace input/state checks to verify the classifier, not outside-write probes.
Check readiness and monitor health before HTTP/CDP; an aborted/unready server yields
no render evidence. Keep T4's 320MiB/512MiB/10,000-inode thresholds, quota uncertainty,
graph hashes, output isolation and owned-process cleanup.

Source audit: `dist/server/lib/app-info-log.js:125–128` invokes generated-agent
handling with project dir; `generate-agent-files.js:90–113` writes only project-local
AGENTS/CLAUDE files. These are **real side effects**, not covered by the EEXIST
exception, and must remain owned. These sources do not themselves identify the
origin of the native ancestor mkdir; retain that attribution limit and verify the
actual dev initialization/cache call chain read-only before launch. No undocumented
suppressor or framework patch is proposed. If destinations cannot be verified,
stop with that blocker. Residual risk: live observation is not an OS write sandbox;
identity checks do not prove absence of every transient mutation. The narrow
protection-contract amendment had explicit human acceptance for the completed T5
   execution only. The user's joint approval now renews ONLY this exact exception for
   the bounded T6 diagnostic; all identity, monitoring and abort gates remain mandatory.

## Vanilla positive control and top-level matched contrast — completed T5 protocol, not new work

The following protocol records the prior approved scope. Its V0/V1 endpoint is
fulfilled as summarized below; imperative wording is historical, not authorization
to repeat it. V2's continuation gate failed and remains closed.

Use T4's safe shared graph and independent source/output arrangement. Hold versions,
Turbopack root/distDir strategy and **identical synchronous root document and root
fallback markup** across controls. Root has html/body with fixed `lang=en`; fallback
has RF-2 English h1/message and native `href=/` recovery to fixed-English synchronous
Home200 at `/`. This deliberately is not the product's localized home. No locale
segment, static params, intl, proxy, shell/providers, fonts, theme, loading/Suspense,
cache-components or render-time await/use/getter initially. No route handler or
independent HTML path. Fixed-language controls are **not bilingual solutions**.

Installed `not-found.md:133` documents root fallback for unmatched URLs;
`not-found.md:13` and `not-found()` docs distinguish render-path interruption and
streamed200. Test this documented baseline, not global-not-found.

| Control | Exact configuration / requests | Evidence question and stopping gate |
| --- | --- | --- |
| V0 | Only `src/app/layout.tsx`, `not-found.tsx`, `page.tsx` with the fixed sync content above. No other routes. Request absent `/audit-throw`, `/en/audit-missing`, `/es/audit-missing` and their nested missing counterparts; all genuinely routing-unmatched. | Establish useful original HTTP404/native no-script DOM in production first, then dev. If either mode is blank, 200, redirect or unavailable, stop unresolved; V1/V2 are not authorized continuations. |
| V1 | V0 plus only literal top-level `src/app/audit-throw/page.tsx`, a synchronous component immediately calling `notFound()`; no segment config. Root/fallback/Home stay byte-identical. `/audit-throw` now matches; en/es missing URLs still do not. | Compare the same `/audit-throw` URL absent versus explicitly matched and interrupting. Save build route/prerender classification: this may be prerendered, not an SSR catch-all analogue. If useful404 becomes blank404 in both modes, stop at this positive/negative contrast. Build failure is not document evidence. |
| V2 | Only if V1 passes useful404 in both modes: add `dynamic = 'force-dynamic'` to that literal page; same sync interruption and all markup unchanged. No awaited connection/locale operation. | Contrast default/prerender eligibility with explicit request-time rendering; retain actual build classification. A production-only change is mode-specific, not a dev/prod-reproduced contrast. If both pass, matched top-level request-time interruption alone is insufficient here: stop and return to planning. |

V2's flag is supported by installed `build/segment-config/app/app-segment-config.js:85`
and discussed in installed `use-search-params.md:264`; it is a diagnostic rendering
policy, not a recommended app fix. No dynamic catch-all, locale child or static
params may be reintroduced in this revision. A later small contrast requires a
new specified/approved plan, not leftover budget.

Build **V0 first**, verify its positive production response, then verify V0 dev under
the approved monitor. Build V1 only after that gate, and V2 only after V1's positive
gate. At most **three new configurations, three production build attempts and 30
focused minutes**, failed attempts included. These new caps are jointly approved, not
reuse of P0's remaining eight/four allowance; preserve its earlier one-config/one-build
accounting. One live output, sequential servers; no unchanged P0 build/dev retry.
Snapshot/hash each configuration before replacing only owned neutral sources;
preserve all old evidence. Reverse the distinguishing single change in dev if
practical within budget; no extra production build slot.

A V0 pass establishes only that this vanilla unmatched fallback works under the
tested versions/environment. V0/V1 difference implicates routing-match/interruption
path here; V1/V2 difference implicates configured render mode, with prerender/runtime
and framework boundary handling still to be separated internally. Neither proves
a specific boundary defect or authorizes removing the app catch-all, adding a
production root, global fallback or changing negotiation.

T5's acceptance criterion was positive useful native server-generated HTTP404 and a minimum matched
passing/failing contrast reproducible in dev/prod within these limits, with exact
classification, evidence and preservation. V0/V1 now fulfill that criterion;
T5 is complete, not pending. Even this completed contrast is not feature fulfillment:
no compatible bilingual correction is selected here. T6 is approved but pending
the audit and evidence gates below; T7/T8 remain blocked until exact
production edits are separately specified and jointly approved.

Record app-only render-entry, prerequisite-resolution, boundary-entry and return
events in owned logs, correlated to sequential requests. Observe response headers/
first bytes separately. No private hooks, renderer patches or swallowed interrupts.
An `await` can resolve immediately; an async component returns a promise even without
an await; sync `use` may suspend. Logs establish operation/order, **not** React's
internal suspension or server boundary commitment. Classify actual suspension timing
as unproven unless observable evidence distinguishes it; fallback execution logs do
not prove fallback HTML was sent. Source references explain server recovery versus
client boundary state without proving a universal regression or root impossibility.

For each screen pair actual HTTP status/Location and original HTML structure excluding
scripts/templates with native top-level Chrome script disabling **before navigation**.
Check fixed-English heading/message/lang/anchor and native recovery to `/` Home200;
record Spanish and localized-recovery mismatches explicitly. Check dev/prod direct/
reload × JS-off/on for unmatched en/es simple/nested and `/audit-throw`, plus Home200.
Save source/route manifests proving unmatched versus matched selection, status/raw
HTML/native DOM together and recovery through the actual native anchor. Reject 200
even if visible, redirected content, Flight strings, hidden template-only HTML and
hydrated-only success. Unavailable native controls/production checks block closure.

Deliver `EVIDENCE.md`: exact snapshots/hashes, graph/config identity, matched factor
table, HTTP/raw/native observations, event-order limits, build logs, budgets,
resource measurements and owned-process cleanup/preservation. No candidate claim
without positive useful404 and matched evidence.

## Completed T5 evidence and limits

Evidence: `/tmp/opencode/t5-vanilla-20261007-2136/EVIDENCE.md`.
V0 genuinely unmatched URLs produced useful original HTTP404 and native no-script
heading/message/recovery in dev and production. V1 added only the literal
`/audit-throw` page: that matched interruption produced blank original HTTP404
in both modes; its four still-unmatched en/es paths remained positive. Identical
root/fallback/Home bytes and source snapshots ground this minimum contrast.
T5's diagnostic objective is complete, independently accepted, not a product pass.
V0/V1 production pages were static/prerendered, including the V1 negative artifact:
this is server-generated HTML evidence, not request-time production SSR proof.
V2 was not generated or run because V1 failed its useful404 continuation gate.
Fixed English, `lang=en` and `/` recovery do not fulfill the bilingual contract.
No compatible correction or necessary architecture change has been established.
Two configurations/two production builds, preservation and owned cleanup are
recorded. Optional dev reversal was unavailable at port preflight; no reversal
result is claimed. Historical B identity is retained; no negative baseline rebuild.

## Minimum localized bridge — approved T6 diagnostic, then planner proposal

**Current source concern, before runtime.** Removing the catch-all would change
missing URLs from matched interruption to routing-unmatched only if no other page
route or proxy rewrite matches them. That does not imply the router will render
`[locale]/not-found.tsx` inside `[locale]/layout.tsx`.

Installed `not-found.md:55–58,129–133` warns about top-level dynamic roots and
documents unmatched handling by `app/not-found`, not arbitrary nested fallbacks.
`layout.md:140–146` supports the current dynamic locale root; it does not promise
that an unmatched request selects it. Read-only source trace:

- `dist/server/base-server.js:1763–1778`: the app 404 path selects the separate
  `/_not-found` entry with `params: {}`, not the requested locale page tree.
- `dist/build/webpack/loaders/next-app-loader/index.js:121–129,282–295,335–354`:
  the automatic not-found tree uses its root fallback; absent a conventional root
  layout it can insert the built-in layout. It does not select `[locale]` merely
  because the incoming URL has `/en` or `/es`.
- `dist/client/components/builtin/layout.js:14–19`: that built-in document has
  html/body but no locale language, providers or portfolio shell.

These sources make deletion-only compatibility doubtful, not proven impossible.
The loader trace is the webpack implementation, not proof of the executing native
Turbopack tree. Existing next-intl proxy, plugin and request/root-param behavior
must also be traced; do not confuse framework locale metadata with this app's
dynamic root parameter. No current source evidence promises localized unmatched UI.

Under the **recorded joint approval**, coordinator delegates only T6's bounded diagnostic
part to implementer. Before staging a runtime candidate, complete a read-only audit
of actual installed routing/tree selection and existing proxy/plugin configuration.
Record which fallback/layout are selected, whether `locale` exists as a root param,
and how it reaches copy, html language and the native localized recovery link.
If native unmatched cannot retain that flow and shell without another change,
**STOP** and present the exact evidence and scope question to the human. Do not
prototype an alternative architecture first. Inconclusive audit is a blocker, not
permission to infer success from V0. A human decision is needed before a conventional
root counterpart, negotiation/data-flow change or any other expanded prototype.

Only if the audit supplies a plausible unchanged localized flow, run **one** new
neutral replica of the current app's relevant architecture/configuration with
**only** `src/app/[locale]/[...rest]/page.tsx` absent. Preserve dynamic locale root,
static params, existing translated fallback/copy, next-intl plugin/proxy/request
configuration, shell/providers and valid routes. No minimal English substitute,
hardcoded locale, fallback relocation, extra await, intl/provider removal or
force-dynamic change. If the safe shared graph lacks any current prerequisite,
stop; do not install or copy dependencies. Do not edit the portfolio.

Reuse original T2 B failure evidence with the same verified source/package/artifact
identity as historical negative context, without replay/rebuild. B is not claimed
byte-identical to the app replica: the replica's manifest records all differences
from B and its sole difference from current app sources. V0/V1, P0, T1/T2 variants
and V2 are not repeated. A positive app-compatible replica, not vanilla evidence,
is needed before proposing a production deletion.

| T6 replica probe, if audit gate passes | Required observations in dev and production |
| --- | --- |
| `/en/audit-missing`, `/es/audit-missing`, `/en/audit-missing/deeper`, `/es/audit-missing/deeper` | Contrary Accept-Language; real document404, no redirect; raw original visible structure excluding scripts/templates; exact RF-2 localized h1/message/anchor, html lang and `/en` or `/es` recovery. Pair each with native JS-off/on direct and reload, script disabling before navigation; actual native anchor recovery to same-locale Home200. |
| `/en`, `/es`, `/en/about`, `/es/about`, `/en/projects`, `/es/projects` | Direct HTTP200 and localized content, JS-off/on; readiness alone does not prove fallback. With scripts on verify existing shell, client navigation, locale switching and missing-page recovery, without redefining query/fragment policy. |
| Representative unprefixed and unsupported-locale URL | Compare existing recorded/configured negotiation behavior; do not introduce a new policy or count its allowed redirects as scoped404 success. |

Save route/build/prerender manifests and generated `_not-found` tree evidence to
prove missing URLs really are unmatched **after proxy handling** and identify the
actual shell selected. Separate static original HTML from request-generated HTML.
Any blank/soft200/redirect/wrong-language/wrong-recovery/missing-shell result stops
the candidate. No alternative variant, rebuild retry or architecture conclusion
follows automatically. Full theme/width/focus matrix remains T9, not fulfilled here.

Bounds: at most **one new configuration, one production build attempt and 30 focused
minutes** for the implementer's audit/proof, including failures. Zero runtime if
the audit blocks. One live output, sequential dev/prod, dedicated free ports; reuse
T4's read-only graph, `/tmp/opencode` diagnostic root and independent owned outputs.
Refresh source/artifact/graph and portfolio/output preservation checks; retain
quota uncertainty, 320MiB owned-tree cap, 512MiB/10,000-inode minimum headroom,
strict realpath-aware monitor and owned cleanup. Exact ancestor mkdir/-1 EEXIST
may be accepted under this revision's approved renewal only if unchanged directory
identity/state is recorded; all other outside-owned attempts abort. No copies,
installs, framework/package patches or writes to existing configuration/outputs.
Budget expiry returns evidence to planning; it does not authorize another round.

Implementer returns evidence and STOPs without marking T6 complete. Coordinator
then delegates planner's concrete proposal phase separately. On a compatible pass,
planner specifies exact production edits (deletion only if actually supported),
locale/render/recovery flow, retained responsibilities, minimality rationale and
exact regression filename/origin/invocation; obtain **separate joint human approval**
before T7/T8. Planner records T6 complete only when that gate is fulfilled. On a
blocked/negative proof, T6 stays unchecked; report the evidence and human scope
decision needed. Never silently select global-not-found, Route Handler HTML,
an independent renderer, a conventional root redesign or dependency upgrades.

## Evidence-to-implementation gate — T6–T8

### T6 static endpoint and superseding STOP (2026-10-08)

Corrected report: `/tmp/opencode/t6-native-audit-20261008/EVIDENCE.md`, with
`audit-details.txt` and saved preservation manifests. Reviewer accepted this as
adequate evidence for the approved pre-runtime STOP, not as feature approval or
runtime proof. This endpoint supersedes instructions to stage the deletion-only
replica above: its gate failed; unused runtime budget grants no continuation.

- The retained native Turbopack `/_not-found` tree selects built-in layout/error
  UI, not `[locale]` or its shell. The separate matched catch-all tree does include
  the locale layout. This is actual compiled-tree evidence, not merely the earlier
  webpack-loader analogy; it is still a historical artifact, not a new build of
  a catch-all-deleted candidate.
- The saved `_not-found.html` SHA256 is
  `be35ee63b9044b297601750f8d53eb00fb4e60f86fe79a531c89e0ee7f978817`.
  Its parsed ordinary content lacks `lang`, approved localized copy, recovery
  anchors and portfolio shell. This is static markup inspection, not visibility
  or new HTTP evidence. The earlier `8fd43d72...` read has a different identity;
  it is not the saved artifact hash. The change's timing/cause/actor is unknown.
- Current `src/i18n/request.ts` chooses explicit `locale` or `rootParams.locale()`;
  it does not consume next-intl's `requestLocale`. Middleware locale metadata is
  a potential independent source, not a root parameter and not an unchanged
  fallback composition path. Deletion alone supplies no plausible locale-to-
  language/copy/recovery/shell bridge under the approved gate.
- Zero replicas, builds, runtime requests, browser probes or new tests were run.
  The exact EEXIST exception was not exercised. Initial inventory found no servers;
  later saved inventory found 3000/3001 listeners. Startup/ownership/origin are
  unknown; neither observation authorizes stopping, restarting or probing them.
- Missing retained graph independently blocks the approved runtime environment.
  Preservation comparisons cover only the saved late interval, not the entire
  audit or unobserved external activity. Do not broaden that claim.

T6 remains unchecked because no compatible bilingual proof/exact approved correction
exists. T7/T8 remain blocked. The spec stays approved, unchanged, OPEN and unfulfilled.
This does not prove a unique defect, impossibility of dynamic roots, or necessity
of any particular migration. No app, spec, MEMORY or dependency edit is selected.

### Historical human decision proposal — then unapproved; superseded by current approved Option A protocol

The minimum useful next step is a **single scoped native-404 document-composition
candidate**, not another unchanged deletion-only diagnosis. Choose its scope before
planner specifies an executable revision. Both choices retain RF-1's real404:
no visible200, redirect, hydration-only error or swallowed interrupt is acceptable.

| Option | Proposed additional scope and responsibilities | Limits / unresolved proof |
| --- | --- | --- |
| **A — Recommended: isolated native global404 composition** | Authorize evaluation of documented experimental `globalNotFound` in temporary config and a full `app/global-not-found` document, plus catch-all absence in that isolated candidate only. Keep valid routes and `[locale]` root unchanged. Candidate document resolves the supported URL locale from existing proxy request metadata, loads existing catalogs with explicit locale, emits html language, RF-2 content and native `/en` or `/es` anchor, and explicitly composes required existing styles/fonts/theme/shell from shared sources. Potential production areas, only after proof/approval: `next.config.ts`, `src/app/global-not-found.tsx`, catch-all deletion and narrowly needed shared composition/request-locale handling. | Explicit experimental-flag and alternate document-composition approval required under RNF-1. Bypasses normal layout; shell/theme are not inherited. Async headers/translation behavior, proxy header delivery, genuine404 in both modes and unchanged negotiation remain unproven. No public-route or policy changes, unrelated extraction, duplicate catalog/identity data, or dependency changes. |
| **B — Broader fallback, only by explicit choice: conventional root composition** | Authorize an isolated conventional `app/layout` plus root `app/not-found` counterpart; move only document/shared-shell responsibility as necessary, keep localized pages/public routes, and supply validated request metadata as a fallback when the selected tree has no locale root param. Potential areas: both root/locale layouts, root fallback, `src/i18n/request.ts` and narrowly shared shell. | Larger change to root ownership, generated root-param contracts, prerendering and provider composition. Header-based request locale can make valid pages dynamic. No supported evidence yet that this fixes the failure; not automatically authorized if A fails. |

Installed Next16.3.5 `not-found.md:47–74,125–133` expressly documents A for
top-level dynamic roots, full html/body, layout bypass and its experimental flag.
`headers.md:6,34,45–49` documents async read-only request headers and request-time
rendering; the `not-found.md:139–159` header example is for ordinary not-found,
not proof that localized global-not-found works here. Installed next-intl
`server/react-server/getConfig.js` exposes `requestLocale`; `RequestLocale.js`
reads middleware locale metadata. The current app does not use that alternate
source. Any adoption must validate supported locales and preserve explicit prefix
precedence over contrary Accept-Language; no private next-intl imports are proposed.

Returning error JSX from the matched child page without throwing is **not** a
compatible third option: the reviewed App Router conventions expose no page-component
response-status setter, and ordinary rendering does not establish HTTP404.
`notFound()` is the documented render interruption; `not-found.md:13` and
`functions/not-found.md:193` explain why streamed200 also fails RF-1. A Route
Handler response is a different architecture, not a drop-in page fix or selected
alternative. Do not turn this documentation assessment into an exhaustive API or
runtime impossibility claim.

**Separate environment decision required before either runtime proof.** Proposed
replacement, not authorization: one new owned sibling fixture at
`/home/jorge/Projects/web/career-launch/.portfolio-404-probe-20261008`, linking only
`node_modules` read-only to the repository's installed graph. Its temporary
`turbopack.root` would be exactly
`/home/jorge/Projects/web/career-launch`, the bounded common ancestor **only if**
all real package targets are verified inside it. Inspect the real pnpm graph first;
escaping targets STOP rather than silently broadening the root. No `/` watch root,
no repository fixture/source/output links, full package copies, installs, env/secrets
or production config mutation. Sources are neutral independent snapshots; CLI/CWD,
distDir, generated types/AGENTS/CLAUDE and caches stay in the owned sibling. Do not
suppress generated instructions. Recheck quota/headroom and write destinations;
read-only packages/repository/existing outputs and unrelated processes stay protected.
The old `/tmp/opencode` EEXIST exemption does not cover this new ancestor: any new
monitor exception needs its own exact documented decision. This sibling structure,
filesystem/watch boundary and dependency-sharing change require explicit approval;
the missing graph must not be silently replaced under the old T6 approval.

After the human chooses composition and environment scope, planner must deliver a
jointly approvable bounded revision: one candidate/one build attempt, sequential
dev/prod, the existing T6 positive bilingual/404/recovery and valid-route matrix,
resource/monitor/STOP gates and no automatic B retry. Runtime waits for that joint
approval. A passing isolated candidate then supports exact production edits and
the T7 regression filename/origin/invocation for **separate** joint approval before
T7/T8. No proof means report its specific blocker, not another endless matrix.
RNF-1 already provides an explicit architectural-decision gate; these proposals
do not change requirements. Any proposed relaxation of RF/RNF must instead return
to spec change/approval first.

T6 requires the approved diagnostic bridge above plus evidence supporting a compatible
bilingual correction; diagnostic T5 completion alone does not unblock it. T6 converts those supported
observations into a **concrete correction proposal**, not a
speculative fix. Tentative context only: `src/app/[locale]/layout.tsx`,
`not-found.tsx`, `[...rest]/page.tsx`, and `src/i18n/request.ts`. None is selected
for editing yet. Message catalogs/navigation/theme sources remain authoritative.
No independent HTML rendering path, global-not-found, provider removal, boundary
relocation, extra awaits, framework patch or dependency/version change is preselected.

Planner must specify the minimum exact edits, how locale reaches document/error
copy/recovery target on the server, why the matched result predicts compatibility,
and how existing shell/providers/navigation remain intact. Any necessary expansion
is an explicit human decision. Require the approval in this plan's second gate.

T7 adds a real red behavioral regression before T8. Use the existing
`tests/*.test.mjs` / `pnpm test` runner, not a new framework or TSX unit simulation:
an explicit test-only server-origin input enables Node `fetch` document tests with
manual redirects for statuses, locale/copy/native anchors and valid routes. Normal
`pnpm test` without an origin must clearly report that integration coverage was not
run; it must not fabricate success. T6 records the exact test filename and origin
variable; invocation is that variable plus `pnpm test` against the prepared dev and
production servers. Use native browser DOM inspection to parse/confirm useful HTML
rather than trusting substring hits in scripts/templates. If no dependable DOM
parser is installed for Node, keep structural/visibility assertions in the native
browser harness and make Node tests assert genuine HTTP/content contracts only.

Red evidence must fail on current app behavior for the intended reason, not a dead
server, rejected fixture or import error. Reuse historical red evidence for orientation
but run the new regression once against uncorrected application behavior. Only test
pure locale/path logic if the chosen correction introduces such logic; explicit
inputs, `.ts` import extensions and native type stripping follow AGENTS. No source
text/implementation-shape tests. After minimal T8 correction, repeat the identical
tests and native no-script check green before final validation.

## Full application validation and independent review — T9/T10

Run the AGENTS commands with required Node/pnpm after the correction:

```bash
pnpm exec next typegen
pnpm lint
pnpm exec tsc --noEmit
pnpm test
pnpm build
git diff --check
```

Use `pnpm dev` and `pnpm start` for application verification; coordinate owned
servers/output without disturbing existing processes or overwriting their active
build. If necessary use an independent source/output verification fixture with the
same safe shared graph; do not copy dependencies or run package installation.

| Requirements | Required application proof |
| --- | --- |
| RF-1 | dev/prod × en/es × single/nested missing paths × JS-off/on direct document HTTP404, no redirect; pair network status with original HTML and visible DOM. |
| RF-2, RF-3 | Exact approved localized heading/message and html lang, including contrary browser/Accept-Language preference; no script/template-only substitutes; direct visits and reloads without prior Home visit. |
| RF-4, RF-5; RNF-2 | Native visible anchor, exact accessible name and `/en` or `/es` target; Tab/Enter recovery with visible focus and scripts off/on reaches same-locale Home/200. Semantic heading, readable motion-independent essentials; reduced motion if affected. |
| RF-6 | Both locales' Home/About/Projects direct HTTP200 and localized content, JS-off content, client navigation, locale switch, back/forward and relevant missing-page recovery without new regressions. |
| RNF-1 | Final diff preserves architecture, routes, locales, negotiation, dependencies and unrelated user work; compare unprefixed/unsupported-locale behavior without defining a new policy. |
| RNF-3 | Both themes × 320/390/768/1024/1440px × normal/150% text sizing: readable heading/message/link, usable focus, no error-content horizontal overflow. Native JS-off/on; controlled theme input when scripts cannot initialize persisted preference. |

Reviewer independently verifies each RF/RNF and completion criterion in the real
corrected application, read-only, not merely task counts or fixture results.
Planner records T10's checkbox completion on coordinator instruction after the
independent approving verdict and completion evidence. Coordinator manages and
verifies completion without editing `tasks.md`; reviewer remains read-only. Report
`VEREDICTO: APROBADO` or `VEREDICTO: CAMBIOS NECESARIOS`; unavailable checks and
unrelated pre-existing failures stay explicit. An unmet criterion keeps the feature
open and returns concrete failures to correction/planning per SDD.

## Documentation grounding and planning checks

Read installed Next16.3.5 docs under `node_modules/next/dist/docs/01-app/03-api-reference/`:

- `05-config/01-next-config-js/turbopack.md:45–49,97–124`: supported top-level root,
  external linked resolution and expanded watch boundary.
- `05-config/01-next-config-js/distDir.md:8–20`: output stays inside project directory.
- `06-cli/next.md:43–71,79–122`: installed dev/build/start, ports and dev output.
- `03-file-conventions/layout.md:24–26,60–89,140–146`: conventional/dynamic roots,
  html/body and promised params, await/use distinction.
- `03-file-conventions/not-found.md:13,43,129–159` and
  `04-functions/not-found.md:11–15,167–193`: hierarchy, no boundary props,
  render-path interruption and streaming200 rejection.
- `04-functions/next-root-params.md:14–50`: generated async getter; Server Components
  only, not Route Handler locale resolution.

Read-only installed source: `dist/server/app-render/app-render.js:1322–1331,
2380–2455`, `create-component-tree.js:306–332`,
`dist/client/components/http-access-fallback/error-boundary.js:63–114`, and
`dist/server/lib/generate-agent-files.js:90–113`. These explain empty recovery,
boundary composition/state and project-local generated agent files; they are not
private APIs to modify/import. Before execution, implementer checks all generated
write destinations; sharing dependencies is not permission to mutate them.

Context7 was attempted again for this bridge revision and returned `Invalid API key`;
no external docs retrieved. Installed version-specific docs/source ground the proposal;
the supplementary outage alone is not a blocker. Read-only source references above
do not establish native mkdir attribution or authorize suppressing initialization.
Planner read local SDD/role, AGENTS, constitution, MEMORY, current spec/plan/tasks,
successful T5 evidence, affected app/configuration and installed docs/source above.
Historical working-tree inventory/preservation is evidence, not a current Git status
check. Only plan/tasks were edited; no shell, Git command, quota probe, fixture/helper
change, runtime, test or build was executed. Coordinator must arrange read-only
working-tree/scope and `git diff --check` verification. The subsequent documentary
approval record changes only plan/tasks approval wording, not the diagnostic matrix,
gates, scope or task checkboxes; no probes or execution were performed to record it.
Coordinator alone may reconcile stale MEMORY wording: T1–T5 historically complete,
minimum contrast accepted, feature OPEN, T6 diagnostic jointly approved but pending,
T7/T8 blocked pending exact-correction joint approval, V2 not run.

2026-10-08 documentary continuation: planner read the corrected T6 report/details,
current requirements and app flow, installed not-found/headers/Turbopack docs and
next-intl request-locale implementation. Context7 was attempted and again returned
`Invalid API key`. Only plan/tasks changed; no runtime, fixtures, graph recreation,
shell/Git command, build or test ran. Current working-tree and `git diff --check`
verification must be arranged by coordinator; the report's earlier check is not
a check of this edit. Coordinator memory handoff: static STOP accepted, original
artifacts unavailable, T6 pending, T7/T8 blocked, choices above need explicit approval.
