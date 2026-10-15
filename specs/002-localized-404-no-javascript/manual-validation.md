# Manual validation — Spec 002 diagnostic handoff

Status: remaining bounded diagnostic compatibility review active. USER-authorized
cache isolation and additional build passed; USER reports fixture dev/prod four-path
JS-off/on checks passing. Independent saved production HTML inspection completed;
independent existing-dev3106 compatibility review is in progress. Feature OPEN;
T6 pending; T7/T8 blocked pending compatibility and separate exact-correction joint
approval. Specification unchanged; no application fix implemented.

## Current superseding evidence and review authority (2026-10-08)

This summary replaces ALL older opening STOP/current-proposal wording below. The
retained cache proposal and manual itinerary are HISTORICAL, not new instructions
to repeat moves/builds/server starts or ask the user to repeat completed steps.

The USER explicitly approved and executed the single cache move plus ONE additional
build. In the recognized fixture's `manual-results-run-E7DNNM`, the actual preserved
file is `next-cache-before-isolation.tsbuildinfo` (not the historical proposed name).
Its before/after SHA256 matches
`a8695897aa25a4b24ea30e600278c1eb52a024cf4e1e95ad4e8fafa52c6264ac`.
`userbuild-after-cache-isolation.log` records exit 0 through all stages and dynamic
`/_not-found`/Home/About/Projects. Thus the stale cached diagnostic build blocker
was resolved by isolation; the underlying invalidation cause remains unknown.
Two earlier USER builds failed types; two historical AGENT commands aborted before
compilation. The conditional third agent command was never released/executed.
No slot is reusable and no new build is authorized by these results.

| Evidence / attribution | Reported observation | Limit |
| --- | --- | --- |
| USER production3107 captures; independent reviewer parsing saved `prod-{en,es}.{headers,html}` | Contrary Accept-Language still yields HTTP404/no Location, correct ordinary HTML lang/exact copy/native localized recovery/noindex/shell; content outside scripts/templates | Independent saved-HTML inspection, not independent browser execution |
| USER Chrome production, Disable JavaScript confirmed checked | All four en/es simple/nested missing URLs display correct language; Tab/Enter recovery reaches localized Home document200 | USER-supplied native no-script observations |
| USER production JS-on | Four error/recovery paths pass; menu links reach all valid pages; locale change preserves missing path and translates content; theme changes do not blank content | Fixture checks, not actual portfolio/full presentation proof |
| USER menu extra `_rsc`404 | `RSC=1`, `Next-Router-Prefetch=1`, valid links work | Prefetch of missing route, not an observed functional regression; no suppression/edit warranted |
| USER stopped production and started dev3106, Ready; four curl responses | Four scoped missing paths return404 | USER-supplied development HTTP evidence |
| USER Chrome development JS-off/on | Four correct visible-language/Tab/Enter/Home200 checks pass without scripts; menu/locale/theme/error/recovery pass with scripts | USER-supplied browser observations, not independent execution |

The USER subsequently requested automatic continuation if checks pass, including
explaining any detected problem and its solution. That releases remaining bounded
diagnostic review without further manual-step guidance. Coordinator's reviewer is
actively reviewing HTTP/saved HTML/negotiation compatibility and browser behavior
on existing fixture development3106 only, with read-only probes. No new build/server,
source/fixture/dependency edits, historical monitor work/budget reset, or production
implementation is authorized. This planner does not duplicate that runtime review;
its pending findings must not be treated as completed evidence.

The original blank404 problem is narrowed to matched `notFound()` interruption
versus routing-unmatched fallback; vanilla synchronous reproduction establishes
rootParams is unnecessary, not a unique internal Next cause. The resolved fixture
cache blocker is a separate problem. Candidate fixture success is not an applied
solution to the actual portfolio defect or complete RF/RNF validation.

Provisional correction scope only: `experimental.globalNotFound`, a full global
localized404 document reusing current fonts/styles/providers/shell, removal only of
locale `[...rest]/page.tsx` after approval, and a public deprecated `requestLocale`
bridge preserving explicit validation. No ordinary not-found/root-layout change is
authorized. Compatibility review must support a concrete exact plan/tasks proposal,
then separate joint human approval before T6 completion or T7/T8. Experimental/
deprecated APIs and dynamic rendering remain compatibility considerations; T9/T10
must validate the actual application, including full RNF presentation coverage.

This refresh changes only manual-validation.md/plan.md/tasks.md. Application sources
and dependencies were not changed by these investigations; prior work exists, so no
clean-working-tree claim is made. No spec/MEMORY/fixture edits or planner runtime
checks. Current Git scope/whitespace verification remains for coordinator/reviewer.

## Historical pinned cache diagnosis and comparison proposal — superseded

The proposal below was subsequently approved and consumed by the USER. Its STOP
endpoint and proposed filenames record the earlier handoff, not current authority
or actual result names. All remaining itinerary sections retain historical wording.

The coordinator reports that the USER already restored the exact original
`src/i18n/types.d.ts` in the recognized fixture under the previous approval.
The subsequent installed `tsc --noEmit` exited 0. The ONE approved renewed plain
Next build compiled, then repeated the same `site-header.tsx:37` TS2322. That renewed
slot is consumed. The user also obtained exit 0 with `tsc --noEmit --incremental false`
and the absolute fixture project path; the augmentation is included. Do NOT repeat
the historical declaration copy below or change sources to suppress the diagnostic.
Application code is unchanged; fixture source restoration was an authorized USER edit,
so there is no claim that fixture sources never changed.

Accounting: TWO historical agent build commands aborted before compilation; their
conditional third agent command was never released/executed. TWO USER manual builds
have now compiled and failed TypeScript. Neither is a successful complete build;
no candidate server, HTTP or native browser proof follows.

### Proven cached-diagnostic discrepancy, not another locale hypothesis

Independent reviewer used public TypeScript 5.9.3 APIs with guarded zero-write hosts,
without emission, and the same effective Next CLI options. The cache-backed builder
returned stale TS2322; that SAME builder's underlying raw program returned zero
semantic diagnostics and typed `getLocale()` as `"en" | "es"`. A fresh program also
returned zero. The reviewed Next cache matched all 655 current file hashes.
Reviewer reported unchanged file metadata and cache SHA-256
`a8695897aa25a4b24ea30e600278c1eb52a024cf4e1e95ad4e8fafa52c6264ac`
through that historical review interval. These are supplied reviewer findings, not
fresh identity/timestamp/preservation checks by this planner.

Next 16.3.5 defaults to TypeScript CLI checking (`experimental.useTypeScriptCli: true`).
For this fixture its incremental checker uses precisely
`.probe-next/cache/.tsbuildinfo`, separate from ordinary standalone
`tsconfig.tsbuildinfo`. Passing standalone tsc does not invalidate that Next cache.
Classification is now: original fixture assembly omission FIXED by authorized user
restoration; stale Next-cached semantic diagnostic REPRODUCED in this fixture.
The unique invalidation cause is not established, nor is the original blank404 cause
or its correction. Do not reopen source-type hypotheses or interpret this as 404 proof.

Installed source references (inspection only, never private imports):

- `node_modules/next/dist/server/config-shared.js:257` sets the CLI default;
  `dist/lib/typescript/runTypeCheckCli.js:19–43` passes the project, non-emitting
  checking options and `--tsBuildInfoFile <cacheDir>/.tsbuildinfo` to installed tsc.
- `node_modules/typescript/lib/typescript.js:133981–134019`:
  `readBuilderProgram` restores matching-version build info; public
  `createIncrementalProgram` obtains that old builder.
- `typescript.js:131156–131173,131954–131973`: builder diagnostics reuse the
  per-file semantic diagnostic map; this explains the builder/raw-program distinction.
- `node_modules/next/dist/lib/typescript/runTypeCheck.js:86–121`:
  incremental options point to cacheDir's `.tsbuildinfo`; pre-emit diagnostics are
  collected on the builder. This API-path source is context, not a claim that the
  reviewed default CLI build invoked this particular module.

### PROPOSED ONLY — preserve and isolate exactly ONE Next TypeScript cache file

Request NEW explicit human authorization for this bounded USER action: quarantine
ONLY `.probe-next/cache/.tsbuildinfo`, preserving its bytes, then at most ONE additional
plain installed Next build of the same candidate with all checks enabled. Neither
cache movement nor build is authorized yet; agents execute NONE. Old approvals,
remaining budgets and this document do not confer retry or runtime permission.

After approval, the user must first refresh the existing read-only safety/resource
gates and confirm:

1. Physical CWD is exactly
   `/home/jorge/Projects/web/career-launch/.portfolio-404-probe-20261008`;
   this is the recognized owned fixture, with unchanged approved candidate/config,
   restored declaration, installed graph and declared HOME/XDG/TMP destinations.
   Review existing output and known logs; unknown files, links, ownership or drift STOP.
2. No fixture-owned Next process is using this cache (including build/dev/start).
   Do not kill or disturb unrelated processes; uncertain cache use STOPs.
3. Reuse the existing recognized, independently owned, non-symlink results directory
   `manual-results-run-E7DNNM`; no mkdir or recreation. Preserve every existing log.
   Cache source and its parent chain must be owned real fixture paths, source a
   regular non-symlink file. Record current source hash and metadata BEFORE moving.
   If it differs from retained review evidence, STOP for reconciliation, not overwrite.
4. Proposed exclusive destination inside those results is
   `next-tsbuildinfo-before-cache-isolation.preserved`. It MUST NOT exist, even as a
   dangling symlink. Move the single source with no-overwrite semantics; verify the
   move actually occurred, original path is absent and preserved-file hash equals
   the recorded before hash. Any race, failed check or unexpected file STOPs.
   Do not edit or delete the preserved file. This is reversible isolation, not deletion.
5. Only after verified quarantine, run ONE plain
   `node ./node_modules/next/dist/bin/next build .` in the same fixture/environment.
   Reserve distinct, absent no-overwrite evidence filenames
   `build-after-cache-isolation.log` and `build-after-cache-isolation.exit` in E7DNNM;
   capture the full output and actual command/pipeline status, noting logging failures.
   Keep TypeScript and other build checks enabled, without extra rendering flags.
   Next may generate a NEW `.probe-next/cache/.tsbuildinfo` and normal owned outputs;
   record their inventory/hashes and recheck the quarantined original's hash afterward.

No broad output/cache clearing, `rm`, dependency changes, standalone typecache change,
source edits, casts, widened types, skip checks, monitor changes/replays, or new candidate.
Do NOT modify ordinary `tsconfig.tsbuildinfo`. Plain Next remains non-sandboxed:
shared dependencies are read-only by contract, not OS-enforced, and generated output
writes/resource use remain risks subject to the existing ownership/capacity gates.

### Compare once, then STOP

- If the old TS2322 disappears, the one-file isolation contrast supports the cached
  diagnostic explanation. Report the next stage and whether the full build passed;
  it does not establish a unique invalidation bug or successful bilingual404 rendering.
- If the same error remains, or any new stage/check fails, preserve the complete first
  error/log/status and both available cache artifacts, then STOP. No automated retry,
  source correction, dev fallback or automatic restore.
- Even on success, return evidence and STOP: this proposal authorizes no Next start/dev,
  requests or browser matrix. Sections 4–6 below remain a historical itinerary, NOT
  released by this proposal. Future runtime/comparison needs its own explicit approval.

Do not restore the preserved original over a newly generated cache on failure or
success. Reversibility means the original survives; any future restoration/comparison
requires separate approval and must preserve the generated file without overwriting.
Return before/after hashes/inventories, exclusive quarantine path, command/log/status,
first failing stage or successful route table, and limits. T6 remains pending, T7/T8
blocked, spec OPEN. This revision only edits SDD documents; no commands, cache moves,
fixture edits, builds, servers, requests or browser checks executed by the planner.
Current Git/diff/whitespace checking remains for coordinator/reviewer.

## Historical first result and restoration proposal — approval consumed, DO NOT execute

The user executed ONE plain manual build. Evidence survives in the fixture at
`/home/jorge/Projects/web/career-launch/.portfolio-404-probe-20261008/manual-results-run-E7DNNM/`:
`build.log` reports successful Turbopack compilation (1896ms), then
`src/components/layout/site-header.tsx(37,27): error TS2322: Type 'string' is not
assignable to type '"en" | "es"'`. `build-pipeline.exit` contains `1`.
This is the first actual candidate compilation, NOT a successful complete build.
No production start, HTTP or browser proof follows from it. STOP here; do not run
sections 4–6 or substitute development for the failed production build.

Accounting is distinct: TWO historical agent build commands aborted before
compilation; the conditional third agent command was never released/executed;
ONE user manual build reached compilation and failed type checking. The consumed
manual slot does not authorize a retry or release that historical agent slot.
Existing `.probe-next` output now requires inventory; do not delete it. Its full
contents, ownership and historical preservation are not established by these reads.
The coordinator reports user recognition of the experiment; that does not restore
missing historical hashes or establish ownership of every present output.

### Confirmed source-level fixture assembly omission

Read-only comparison confirms the fixture has ZERO `.d.ts` files under `src`,
including no `src/i18n/types.d.ts`. The original declaration supplies next-intl
`AppConfig.Locale: Locale` and `AppConfig.Messages: typeof messages`, importing
`./routing` and `./messages/en.json` relatively. Both original and fixture routing
define `Locale` as `"en" | "es"`. The copied header awaits `getLocale()` and passes
it unchanged to `LocaleSwitcher`, whose prop correctly requires that union.
Installed next-intl `getLocale.d.ts` returns `Promise<use-intl Locale>`; installed
use-intl `core/AppConfig.d.ts` selects the configured locale or falls back to
`string` without augmentation. This accounts for the precise TS2322 diagnostic.
The fixture's `tsconfig.json` already includes `**/*.ts`, which includes `.d.ts`;
no include/config/generated-file hand edit is needed.

The fixture request module already selects its local catalogs and retains the
approved explicit-locale guard/requestLocale bridge; neither is changed here.
The copied declaration's relative imports would resolve to fixture routing and
the neutral fixture English catalog (including `Identity.role: Diagnostic control`),
NOT original personal messages. This is a standalone typed-fixture assembly defect,
not evidence of the original blank404 runtime cause, global fallback incompatibility
or a broken locale API. A successful repaired typecheck/build remains unverified.

### Historical restoration proposal — subsequently approved and applied by USER

Request explicit approval for ONLY restoring the original declaration to the
recognized, independently owned fixture, then one installed non-emitting typecheck
and, ONLY if it passes and safety/resource gates pass, at most ONE renewed user
manual build of the same candidate. Approval must precede any helper copy or new
build; this document itself grants none. No blanket retries, alternative candidate,
architecture experiment, locale API/header change or production edit is proposed.

Exact proposed diff: add fixture `src/i18n/types.d.ts` byte-for-byte from original
`/home/jorge/Projects/web/career-launch/portfolio/src/i18n/types.d.ts` to
`/home/jorge/Projects/web/career-launch/.portfolio-404-probe-20261008/src/i18n/types.d.ts`.
The source exists; the destination was absent at this read, not guaranteed absent
later. Recheck independent owned parent directories and absent destination; any
existing file, symlink (including dangling), uncertain ownership or drift means STOP.
No `as` cast, widened LocaleSwitcher contract, typecheck suppression, dependency
installation, public-route change or hand editing of generated files is permitted.

Only AFTER that explicit approval and refreshed section 1 safety checks, the USER
may choose the following Linux commands from the exact fixture directory:

```bash
cd /home/jorge/Projects/web/career-launch/.portfolio-404-probe-20261008
test ! -e src/i18n/types.d.ts && test ! -L src/i18n/types.d.ts &&
  cp -n /home/jorge/Projects/web/career-launch/portfolio/src/i18n/types.d.ts src/i18n/types.d.ts &&
  cmp /home/jorge/Projects/web/career-launch/portfolio/src/i18n/types.d.ts src/i18n/types.d.ts &&
  cat src/i18n/types.d.ts
```

`cp -n` is no-overwrite, not proof of copying: `cmp` and `cat` verify the exact
restoration. STOP on a failed precondition or verification, rather than overwrite.
Record the before/after inventory and this sole source addition; retain original
manual logs and all existing outputs. The planner does not execute these commands.

Before consuming the proposed renewed build, use AGENTS.md's installed TypeScript
`--noEmit` check through the existing CLI, without lockless pnpm or auto-install:

```bash
node ./node_modules/typescript/bin/tsc --noEmit
```

The installed CLI entry was read. Reverify its fixture dependency target first.
Use the owned HOME/cache destinations from section 2; record output/status separately
from the first build. `noEmit` avoids application JS emission, but existing
`incremental: true` can write fixture-local `tsconfig.tsbuildinfo`; verify that path
is owned and not a link to other work before running. Do not claim this is read-only,
change tsconfig, or hand-edit framework types. Any failure STOPs without a new build;
return the first diagnostic, not another automatic source correction.

Only on typecheck success under the NEW approval may the user consume ONE renewed
section 3 build, retaining new log/status filenames rather than overwriting
`manual-results-run-E7DNNM/build.log` or `build-pipeline.exit`. Recheck resource/output
ownership, graph and safety gates; unknown work must not be cleaned to make room.
Nonzero build status STOPs again, with no prod/dev start. Success alone permits the
conditional manual HTTP/browser itinerary only within the approved user scope;
it does not complete T6, unblock T7/T8 or authorize production changes.

Context7's recorded attempt failed with Invalid API key; installed type declarations
are the authority for this diagnosis. This revision used file reads only, with no
shell, copy, typecheck, build, server, tests, HTTP or browser execution. Current Git
inventory/diff/whitespace verification remains for coordinator/reviewer; no claim of
current preservation or successful repair is made.

## Purpose and what we actually know

Find the first real Next.js failure stage, or obtain the missing bilingual native
404 observation for the existing Option A candidate. Do not spend another round
developing the syscall classifier.

Historical investigations distinguish unmatched routing from a matched `notFound()`
interruption; they do not identify a unique internal framework cause. Two Option A
build commands aborted in monitoring before candidate compilation. The coordinator
reports that the latest neutral Node preflight also failed in monitor coverage
(io_uring/mapping/TCGETS2); reviewer confirmed STOP. The conditional third agent
build was **not released or executed**. None of this proves the candidate fails.

The reported `/tmp/opencode/t6-readiness-20261008-0950/EVIDENCE.md` directory is now
missing after the reported server restart. Exact trace lines, exits, latest time
totals and preservation/cleanup are unavailable, not freshly verified. Do not
reconstruct them or rerun historical controls to fill the gap.

Source reads confirm the surviving fixture described below. They do **not** prove
ownership, unchanged hashes, symlink targets, free ports or successful compilation.

## Safety and decision before running anything

These are commands for **you to choose to execute**, not renewed agent permission.
They intentionally use plain installed Next, without strace or the custom classifier.
That changes the diagnostic execution method, not the candidate source/configuration.

- Run only in the verified neutral sibling, never in `portfolio` for build/dev/start.
- Sharing installed dependencies is **not an OS write sandbox**. Turbopack's common
  root is resolution/watching scope, not write prevention. HOME/cache redirection
  below reduces incidental writes but does not guarantee confinement. If that risk
  is unacceptable, STOP and request a concrete separately approved isolation setup.
- Repository sources, installed packages, existing `.next` outputs and unrelated
  servers must remain untouched. Do not install/copy dependencies, change permissions,
  remove `.next`, kill existing servers or edit fixture/config/generated files.
- Verify ownership against retained manifests if available. If manifests are missing,
  confirm the retained fixture is your recognized experiment and review its inventory
  explicitly; record that historical hash preservation could not be verified. Unknown
  work, unexpected source links/outputs or uncertain ownership means STOP, not rebuild.
- Use one candidate, one proposed manual build, sequential production then development.
  No automatic retry, bundler switch, extra rendering flags, upgrade or alternate case.
- Retain the earlier resource caution: at least 512 MiB and 10,000 inodes available;
  no more than 320 MiB aggregate owned fixture output/cache/results. Unknown quota
  remains unknown. STOP on resource failure; do not delete unknown work to make room.
- Do not publish environment dumps, credentials, Authorization headers, private cookies
  or browser-profile data. Review logs/HTML/screenshots and redact secrets before sharing.

## 1. Read-only preflight

Use Bash on the existing Linux host. Needed existing tools: Node >=24.12.0, pnpm
12.4.1, curl, ss, ordinary filesystem commands and Chrome. Missing tools or mismatched
versions: report and STOP; do not auto-install. Run these checks before changing HOME.

```bash
cd /home/jorge/Projects/web/career-launch/portfolio
pwd -P
git status --short
node --version
pnpm --version
cat package.json
```

Keep the Git inventory locally for before/after comparison. Confirm package versions
against `pnpm-lock.yaml` and the installed packages, not just fixture version ranges.

```bash
cd /home/jorge/Projects/web/career-launch/.portfolio-404-probe-20261008
pwd -P
stat -c '%U %G %a %n' . next.config.ts src node_modules
readlink -f node_modules
readlink -f node_modules/next
readlink -f node_modules/next-intl
readlink -f node_modules/react
readlink -f node_modules/react-dom
find src -type l -print
ls -la
cat next.config.ts
cat node_modules/next/package.json
cat node_modules/next-intl/package.json
cat node_modules/react/package.json
cat node_modules/react-dom/package.json
df -h .
df -i .
ss -ltnp
```

Expected: exact sibling realpath; recognized owner; independent source files (no source
links); sole dependency link resolves to the existing portfolio graph; all real package
targets lie inside `/home/jorge/Projects/web/career-launch`. Installed Next 16.3.5,
next-intl 4.14.7, React/React DOM 19.2.8; no new package graph or install.

Config must retain `experimental.globalNotFound: true`, Turbopack root exactly
`/home/jorge/Projects/web/career-launch`, and `distDir: ".probe-next"`. The fixture
contains a full `src/app/global-not-found.tsx`, dynamic `[locale]` layout, neutral
Home/About/Projects, original negotiation proxy, and **no** `[locale]/[...rest]` page.
Request config rejects invalid explicit locales and otherwise uses the public,
deprecated `requestLocale` bridge. Inspect those files if anything differs; do not
correct them as part of this itinerary.

Existing `.probe-next` or other unfamiliar outputs require review before continuing;
do not delete them. Check quota with your host's available quota reporting, if any;
report unavailable quota information rather than inventing capacity proof. Use ports
3107 (production) and 3106 (development) only if currently free. If occupied, choose
other free ports yourself and substitute them throughout; leave their owners alone.

## 2. Keep evidence outside temporary storage

After accepting the safety decision and passing preflight, create one unique results
directory in the owned fixture. This survives `/tmp/opencode` loss, but is not a backup.

```bash
RESULTS=$(mktemp -d "$PWD/manual-results-run-XXXXXX")
printf '%s\n' "$RESULTS"
```

Write down the printed absolute path. In each new terminal, `cd` to the exact fixture
and set `RESULTS` to that printed path (not a new run directory). Save preflight facts,
versions, start/end times and limitations in `notes.md` there. Do not dump all variables.

For terminals launching Next only, use the existing owned destinations:

```bash
export HOME="$PWD/home"
export XDG_CACHE_HOME="$PWD/cache"
export XDG_CONFIG_HOME="$PWD/config"
export TMPDIR="$PWD/tmp"
export NEXT_TELEMETRY_DISABLED=1
set -o pipefail
```

Check those directories are real, owned fixture-local directories, not links to other
work. Next may generate local types/configuration/instruction files and `.probe-next`;
record them, do not hand-edit them. Leave inherited secrets out of shared evidence.

## 3. Original one-build recipe — consumed; renewed use requires approval above

From the fixture terminal configured above:

```bash
node ./node_modules/next/dist/bin/next --version
node ./node_modules/next/dist/bin/next build . 2>&1 | tee "$RESULTS/build.log"
printf '%s\n' "$?" > "$RESULTS/build-pipeline.exit"
cat "$RESULTS/build-pipeline.exit"
```

The recorded status is the pipefail pipeline status, including possible logging
failure, not an invented monitor/child status. Expect Next 16.3.5 and a successful
build with its final route table. Keep the **first actual error and complete stack**,
not only the final summary. Identify whether failure occurred in CLI/config loading,
module/CSS/font compilation, TypeScript, collecting page data or prerendering.

**Nonzero status or incomplete build: STOP and return `build.log`, status and versions.**
Do not start production or try dev as a replacement, add force-dynamic, catch root
getter errors, change the locale bridge, change bundlers, install or retry. This alone
may supply the missing information needed for the next approved plan.

On success, retain the route table and review these artifacts if generated:
`.probe-next/server/app-paths-manifest.json` and `.probe-next/prerender-manifest.json`.
Record the not-found entry's actual path and classification; do not assume its name
or presence. Static/prerendered output is not request-time SSR proof. Missing entries
are information, not permission to edit manifests. Preserve relevant excerpts/results
before dev; do not share whole compiled bundles or claim source traces prove selection.

## 4. Production HTTP evidence

In a dedicated fixture terminal with the same destinations/results path:

```bash
node ./node_modules/next/dist/bin/next start . --hostname 127.0.0.1 --port 3107 2>&1 | tee "$RESULTS/prod-server.log"
```

Wait for readiness; keep it running. In another fixture terminal, set `RESULTS` to
the recorded absolute path and capture these document requests:

```bash
curl --max-time 30 -H 'Accept-Language: es' -D "$RESULTS/prod-en.headers" -o "$RESULTS/prod-en.html" http://127.0.0.1:3107/en/audit-missing
curl --max-time 30 -H 'Accept-Language: en' -D "$RESULTS/prod-es.headers" -o "$RESULTS/prod-es.html" http://127.0.0.1:3107/es/audit-missing
curl --max-time 30 -H 'Accept-Language: es' -D "$RESULTS/prod-en-nested.headers" -o "$RESULTS/prod-en-nested.html" http://127.0.0.1:3107/en/audit-missing/deeper
curl --max-time 30 -H 'Accept-Language: en' -D "$RESULTS/prod-es-nested.headers" -o "$RESULTS/prod-es-nested.html" http://127.0.0.1:3107/es/audit-missing/deeper
```

Do not add `-L` (redirect following) or `-f` (discard useful error evidence). Record
timeouts/refused connections as unavailable observations, not blank404 rendering.
Expected: 404, no `Location`, useful ordinary HTML and noindex. URL language must win
over contrary Accept-Language. Repeat the first English request after Spanish with
different output filenames to detect obvious cross-request locale reuse.

Check original HTML contains real `<html lang>`, semantic heading, message and native
`<a href>` in the document's visible body/main. Text found only in script/Flight JSON,
templates, head metadata or hidden containers is **not** a pass. A string search alone
cannot prove visibility; perform the browser check next.

| URL prefix | HTML lang | Heading | Message | Recovery name / href |
| --- | --- | --- | --- | --- |
| `/en/` | `en` | Page not found | This page is unavailable. | Return home / `/en` |
| `/es/` | `es` | Página no encontrada | Esta página no está disponible. | Volver al inicio / `/es` |

Also inspect direct `/en`, `/es`, `/en/about`, `/es/about`, `/en/projects`, `/es/projects`:
all must return 200 and the correct neutral localized content. Capture headers/HTML
using the same curl recipe with distinct names. Fixture placeholders are not verified
portfolio content. If any contract fails, save the first contrasting observation and
server error, then STOP; do not complete a large matrix merely to accumulate failures.

## 5. Native browser proof — scripts disabled BEFORE navigation

Use a clean Chrome context without extensions or unrelated authenticated sessions.
Open DevTools, enable Network's Preserve log and Disable cache. Through the command
menu choose **Disable JavaScript** (or Settings → Debugger → Disable JavaScript).
Keep DevTools open; disable scripts **before** opening the missing URL. Do not use
an iframe sandbox, a post-hydration toggle or blocked script URLs as substitutes.

For each of the four production missing URLs, directly open then reload:

1. Network's **Document** response must be 404 without a redirect; record it together
   with what is visible, not an asset request or client-router fetch.
2. Record visible exact heading/message/link and Elements' `<html lang>` and native
   anchor destination. Save a screenshot at a desktop width and 390px, named by mode,
   locale, path depth and JS setting. Inspect hidden/empty body if blank.
3. Tab to the recovery link, verify visible focus and press Enter. It must reach
   localized Home with document 200 and useful content, without enabling scripts.
4. Re-enable scripts, directly revisit/reload and record the same essentials. Check
   recovery and existing shell/theme/client navigation/locale switching. Distinguish
   a native HTML success from a hydrated-only success or a regression.

Record missing styles/assets or browser errors alongside the response. Stop at a
failure and return the contrasting raw HTML/screenshot/server log; do not guess its
cause from the screenshot alone. This small diagnostic check is **not** T9's complete
five-width, theme, 150% text, focus and regression validation of the actual application.

## 6. Development only after production passes

Stop **only your foreground production process** with Ctrl+C in its own terminal.
Check its port is released; do not kill unrelated PIDs. Save production observations.
Then, in a fixture terminal with the same destinations/results path:

```bash
node ./node_modules/next/dist/bin/next dev . --hostname 127.0.0.1 --port 3106 2>&1 | tee "$RESULTS/dev-server.log"
```

Repeat sections 4–5 at port 3106, naming artifacts `dev-*` rather than overwriting
`prod-*`. Dev uses its development output under the configured distDir; keep execution
sequential regardless. Stop on first failure. On completion, Ctrl+C only this server,
check its port and compare repository `git status --short` with preflight. Record
unexpected changes; do not revert them. Keep evidence and outputs for inspection,
with no automatic cleanup/deletion. Check output/cache/results size during the run.

## Interpret results without inventing a cause

| Observation | Supported inference / next decision |
| --- | --- |
| Plain build fails before compiling | Actual setup/config/resource error now observable; not a 404 rendering verdict. Return first error and config/versions. |
| Build fails compiling/types | Candidate assembly or API/type compatibility needs diagnosis from exact stack/import. Do not equate it with the original blank404 cause. |
| Prerender fails accessing locale/headers/root context | Request-context compatibility is implicated at that stage; return route classification and stack. It does not justify a private header or forced rendering flag. |
| Build passes, HTTP 200/redirect for missing URL | Candidate fails genuine404 contract, regardless of visible copy. |
| HTTP404 but Spanish uses English, or locale changes between repetitions | Locale forwarding/resolution/cache context needs narrowing; default fallback is not proof of Spanish support. |
| HTTP404, script-only text/empty native document, hydrated UI works | Server fallback still fails; return raw HTML and paired JS-off/on evidence. Monitor coverage is no longer the immediate explanation. |
| Useful ordinary HTML but blank browser | Inspect hidden DOM, styles/assets and browser errors; HTML text alone did not prove visible rendering. |
| Dev passes but production fails, or vice versa | Build/prerender/request lifecycle differs; report both exact classifications and responses. Do not claim universal framework failure. |
| Both modes satisfy essential bilingual404/native recovery and valid controls | Candidate is plausible in this fixture, not a unique original-cause proof or production fix. Return evidence for a separately approved concrete correction and remaining compatibility checks. |

If useful evidence requires a different candidate, dependency change, architecture
decision or another build, STOP and ask for the next concrete scope. Do not resurrect
discarded boundary/await/provider/vanilla experiments or solve monitor coverage here.
Unprefixed/unsupported locale policy, forged metadata and full presentation checks
remain compatibility obligations before any T6/T9 closure; this initial evidence packet
does not waive them or silently redefine existing negotiation.

## Smallest information to return

If build fails, only return prerequisites/versions, build log with first complete
error/stack, pipeline status, failure stage, artifact directory and safety limitations.
There is no need to attempt HTTP/browser checks after a failed build.

If build passes, add relevant route/prerender excerpts, four raw missing-document
headers/HTML per completed mode, the repeated English request, valid-route summary,
JS-off/on screenshots and native recovery observations. State which rows were not run.
Do not send a full browser HAR containing private cookies or a whole environment dump.

```text
Run directory / date / start-end time:
Ownership/graph confirmation and missing historical manifests:
Node / pnpm / Next / next-intl / React versions:
Safety risk accepted / resource-quota limits / ports used:
Build pipeline status / first failing stage / first error + stack:
Actual not-found artifact / static vs dynamic evidence:
Mode | URL | status | Location | lang | visible heading/message | href | JS off/on | recovery200 | evidence file
Valid Home/About/Projects results and navigation concerns:
Checks not run / browser or server errors:
Owned servers stopped / unexpected source-output changes:
What this establishes / what remains unknown / next decision requested:
```

T6 stays pending and T7/T8 blocked until compatible evidence supports exact production
edits and those edits receive separate joint approval. No manual result alone closes
the approved specification.

## Documentation grounding and validation limits

Installed Next 16.3.5 docs consulted: `dist/docs/01-app/03-api-reference/06-cli/next.md`
(directory/build/start/dev/port/hostname and static-vs-dynamic route output),
`03-file-conventions/not-found.md` (experimental global document, layout bypass,
full html/body, no props, automatic noindex), and `05-config/01-next-config-js/turbopack.md`
(common root for linked dependencies). Paths are relative to `node_modules/next`.
The async ordinary not-found example does not guarantee global request-context support.
Public next-intl `dist/types/server/react-server/getRequestConfig.d.ts` documents the
explicit override and deprecated requestLocale; the surviving fixture files were read.

Context7 resolution returned Invalid API key; no external docs were obtained. These
CLI commands correspond to AGENTS.md's Next dev/build/start via the already installed
CLI, avoiding pnpm auto-install in a lockless fixture. This planner ran no commands,
builds, servers, tests, requests or browser checks; current whitespace/diff verification
is pending coordinator/reviewer access. Application checks remain required for a future
approved production correction, not demonstrated by this documentation handoff.
