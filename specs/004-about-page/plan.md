# Plan 004 — Complete About page

Estado: aprobado

Approval record (2026-10-15): after the coordinator presented this plan and the
10 tasks with document links, the owner explicitly approved both with “Lo apruebo”.
That approval authorized implementation in task order under coordinator assignment;
it did not itself constitute final visual acceptance or authorize publication.

Closure record (2026-10-15): implementation and T1–T10 are complete. The owner
accepted the final visuals with “Esta bien, ya podemos subir entonces”, then
instructed “continuemos”; the final independent review returned
**VEREDICTO: APROBADO** for RF-1–10, RNF-1–6 and all completion criteria.
See `spec.md` and the current disposition in `validation.md` for the reviewed
source/build identity and retained limitations. No blocking gate remains. This
record preserves the approved plan and historical evidence; it adds no new
application checks or implementation. Publication is a separate authorized handoff,
not an action performed by this documentary closure.

## Basis and boundaries

Implement the approved `spec.md`, including Appendix A. The coordinator reports
the owner's explicit full-spec approval, “Las apruebo”; the separate plan/tasks
approval recorded above now authorizes implementation in task order.

Reuse the installed stack, server rendering, translations, identity, portrait and
semantic tokens. No new dependency, route, service, client state, icon framework,
global style migration or metadata/routing change is needed.

Preserve all unrelated local work, including agent configurations/backups. The
separate asset feature is uncommitted and its latest visual acceptance is pending:
build `n_woIBZNm7rDUKcBn93e1` and historical 35/35 tests are context, not evidence
for this implementation. Do not modify Home About Preview CSS/images, Hero,
favicon PNG/ICO sources, carousel, header, frame or theme bootstrap. Do not reopen
closed Specs 002/003, stage, commit, push or publish anything.

Planning inspection was read-only outside this spec directory. No terminal is
available to this planner, so working-tree status and `git diff --check` could not
be executed. Before implementation, coordinator/implementer must capture status
and diff, distinguish pre-existing changes and preserve their exact baseline.

## Files and responsibilities

| File | Responsibility / intended change |
| --- | --- |
| `src/lib/site.ts` | Keep public identity and contacts authoritative; set approved GitHub/LinkedIn URLs, retain missing email and add optional missing WhatsApp. Preserve SITE_URL behavior. |
| `src/lib/contacts.ts` (new) | Small pure contact projection: typed channel order, About active/unavailable entries and existing-footer eligible active entries; build correct link destinations from explicit input. No translated prose, browser globals or service calls. |
| `src/app/[locale]/about/page.tsx` | Keep existing metadata function; replace placeholders with server-composed introduction, portrait, exploration, approach and contacts. |
| `src/components/about/about-contacts.tsx` (new) | Render all four labelled entries, active anchors versus genuinely static unavailable content, using the pure projection and About translations. |
| `src/components/about/contact-symbol.tsx` (new) | Four local static SVG symbols with recognizable GitHub, LinkedIn, WhatsApp and envelope geometry; decorative to accessibility because adjacent text supplies names. No generic icon registry. |
| `src/components/about/about.module.css` (new) | Feature-local editorial layout, portrait safe area, filled organic symbol silhouettes, wrapping and focus-safe spacing. Use Tailwind for straightforward utilities; CSS Module for the bespoke composition/masks. |
| `src/i18n/messages/{en,es}.json` | Replace only About placeholders with Appendix A's approved headings, paragraphs, labels, unavailable explanation and portrait alt text; interpolate shared identity where appropriate. |
| `src/components/layout/site-footer.tsx` | Consume the shared contact projection if needed to avoid duplicate href construction; preserve existing markup/classes, text-link pattern, email support and absent-contact filtering. |
| `tests/site-contacts.test.mjs` (new) | Meaningful deterministic tests for central configuration, destination construction, removal and distinct About/footer policies. |
| `tests/messages.test.mjs` | Reuse locale-key parity/nonempty checks; extend only if a meaningful message-contract regression needs coverage, not to snapshot the biography. |
| `specs/004-about-page/validation.md` (implementation/review evidence) | Record fresh checks, source/build identity, browser matrix, requirement outcomes, limitations and separate owner visual acceptance. |

Read-only reuse: `src/components/home/portrait.ts` identifies
`/images/me/portrait.png` (1122 × 1402, top-centred), not
`/images/about/portrait.png`; `MediaFrame` supplies existing mask geometry. Existing
`page-content.module.css` is shared and must not be changed to style About.
No shared layout, global CSS or supplied asset edit is planned.

## Contact model and data flow

1. `site.contact` retains existing optional HTTPS GitHub/LinkedIn values and raw
   email contract. Extend it with an optional public HTTPS WhatsApp conversation
   URL; use a `wa.me` conversation destination when later supplied by the owner.
   No initial phone/email, placeholder value, CV extraction or environment secret.
2. Pure functions in `contacts.ts` accept the contact configuration explicitly,
   rather than reading `site`, time, environment or global state. Preserve stable
   order: GitHub, LinkedIn, WhatsApp, email for About. Each entry has a channel and
   either an actionable href or unavailable state. No unnecessary dependency injection.
3. GitHub/LinkedIn hrefs are the configured HTTPS URLs. Email builds one `mailto:`
   prefix around the configured address; WhatsApp preserves its HTTPS conversation
   destination rather than incorrectly adding `mailto:` or a second URL prefix.
   Missing values never produce an empty href, `#`, synthetic phone number or action.
   Keep types/builders narrow; do not invent a broad contact-validation framework.
4. About always renders all four entries. Available entries use native anchors;
   unavailable entries use plain list content, no anchor/button/role/tabindex,
   pointer styling or hover affordance, with the localized visible explanation.
5. The footer projection includes only configured GitHub, LinkedIn and existing
   email. It never includes WhatsApp or unavailable entries. Configuring email
   later preserves the existing footer email activation; this is not a new footer
   channel. Configuring WhatsApp activates About only. Removal makes About static
   and removes the footer occurrence, where eligible.
6. Both consumers derive from the same configuration. Initial GitHub/LinkedIn
   appear in the footer on every page that already uses it, including existing
   missing-page composition where applicable; no new footer placement is added.
   Use native same-tab links as in the existing footer, with no forced new window.

## Composition and visual decisions

Use the existing palette rather than introduce a new token system: light ivory
`#f1ebdd`, sage `#8f9b82`, petrol `#354f52`; dark forest `#18231e`, moss surface
`#2b3b30` and aged brass frame `#b49a65`. Consume semantic tokens, not these hex
values duplicated in About styles. Actual foreground/fill pairings must be measured.
Keep existing display/body fonts and shared content rails; body passages stay
around 65ch and left aligned. No uppercase eyebrows, arbitrary numbering, skill
cards, decorative code or new ornaments.

```text
Narrow:                     Wide:
About heading + enthusiasm  About heading + introduction | organic portrait
organic portrait            background paragraph        | upright safe area
background paragraph        exploration / approach in readable passages
exploration                 contact heading
approach                    four small labelled contact symbols (wrap naturally)
contacts (wrap)
```

Maintain one logical DOM reading order and one h1; use h2 headings for exploration,
approach and contacts. Grid may position the portrait beside the opening without
reordering text or contact focus. The portrait and modest asymmetry carry the
identity; the four contact frames are quiet echoes, not a competing row of badges.
Review against the brief before styling: reject generic identical-card composition,
oversized social buttons, outline-only frames and abstract substitute logos.

Reuse `portrait` and `MediaFrame shape="hero"` without changing their shared source.
Provide About-local aspect ratio, reserved space, top-centred contain rendering and
an inset safe area. Account for MediaFrame's existing mask rotation/counter-rotation;
do not add Home's outer tilt to the photograph. Verify full face and hair, not just
image bounds. Use the existing Image pattern with sizes reflecting the actual About
columns; do not duplicate or transform the original PNG.

For contact frames, reuse supplied silhouette geometry through local CSS masks on
a filled decorative layer; leave SVG logos upright and undistorted above that layer.
Avoid applying the portrait component's rotation/aspect assumptions to logos. Keep
small visual symbols within native anchor hit areas of at least 44 × 44 CSS px.
Mask only decoration, never the link's focus outline. Give visible labels and
availability text room to wrap; static unavailable entries need no disabled-control
semantics. Keep shapes out of assistive output. Use no entrance/scroll animation;
any small interaction transition must respect reduced motion.

## Alternatives deliberately not chosen

- No downloaded icon package, social embed or runtime CDN: four local SVG symbols
  suffice. Record any externally sourced logo geometry/provenance appropriately;
  if obtaining it requires an unapproved dependency or licensing decision, stop.
- No shared social-button design system or new portrait abstraction: reuse existing
  primitives and isolate the new About responsibility.
- No footer redesign or About placeholder policy in shared chrome. Existing footer
  text links already provide the approved presentation and missing-contact omission.
- No metadata refresh, route rewrite or locale-switch repair: existing helpers and
  equivalent About route already exist; unrelated query/fragment issues stay deferred.

## Tests and validation

### Deterministic behavior tests

Use `pnpm test` and the existing Node test setup. Start new contact behavior tests
red, implement the minimal pure functions/configuration, then confirm green.
Import erasable `.ts` modules with explicit `.ts` runtime extensions and type-only
imports; no aliases in Node-executed imports, TSX runner or added test dependency.

Cover initial exact public URLs and absent private channels; all four About entries;
configured email → `mailto:` and WhatsApp → HTTPS conversation; missing/removal
states; updating one input updates both applicable projections; footer omission
of inactive channels and WhatsApp even when configured; preservation of footer's
existing email behavior. Use synthetic test-only destinations, never actual private
contacts, and do not publish fixture configuration. Assert correct protocols and
no double prefixes/empty actions. Existing translation tests check key parity and
nonempty values. Do not replace browser checks with source-string/TSX snapshots.

### Project commands and environments

With required Node/pnpm, run the six AGENTS checks:

```sh
pnpm exec next typegen
pnpm lint
pnpm exec tsc --noEmit
pnpm test
pnpm build
git diff --check
```

Also run `pnpm test` against actual development (`pnpm dev`) and built production
(`pnpm start`) servers, in each case setting BOTH `LOCALIZED_404_TEST_ORIGIN` and
`SITE_ICONS_TEST_ORIGIN` to that verified loopback server origin. Do not claim full
coverage from a default test run that skips these contracts. Record actual origins,
counts, skips and production build identity; 35 historical tests are not a target
count. Capture baseline failures before changing code when possible. Do not repair
unrelated failures, dependencies, lockfiles or generated artifacts to make checks pass.
Verify server PID/CWD/port ownership before starting/stopping resources; preserve
user-owned servers/pages and close only owned validation resources.

The implementer must read relevant installed guides under
`node_modules/next/dist/docs/` before changing rendering/Image usage or any Next API;
retain the existing metadata/routing contracts. For library API questions use
Context7 current docs as instructed. A previously reported invalid API key is not
permission to invent API behavior: report an actual access failure and consult
the installed version's guides; stop if the needed information remains unavailable.
This plan specifies no new library API and required no external documentation query.

### Fresh browser evidence

Use Chrome DevTools MCP for implementer checks, then an independent reviewer pass.
In BOTH dev and production, cover en/es × light/dark × widths
320/390/768/1024/1440 × normal/150% text at browser-default 16 and genuine
browser-default 24 px. Record actual settings; changing root CSS alone is not the
native default-font check. Check full-page overflow, wrapping, content rails,
head/hair clearance, upright aspect, filled silhouettes, logo recognition and
availability explanations. Batch/checkpoint evidence rather than infer untested rows.

Check direct About visits, existing navigation and Home Read more, reloads, en↔es
equivalent route, shared-footer contacts on Home/About/Projects, and representative
localized missing-page/native no-JS recovery regressions. Preserve favicon responses
and unchanged Home feather/imagery as baseline, without accepting that separate feature.
Check keyboard Tab/Shift-Tab/Enter, meaningful localized accessible names, inactive
entries absent from Tab order, visible unmasked focus and ≥44px active targets.
Measure text contrast (4.5:1 normal, 3:1 large) and meaningful icons/focus (3:1).
Check reduced motion and essential content/contact behavior without animation/JS.
Inspect destination semantics without sending messages, logging into third parties
or claiming delivery/application availability. Verify future synthetic active states
through pure tests plus a temporary local rendering check where needed; restore
fixtures before final checks and never leave them in public configuration.

### Traceability and closure

| Requirements | Primary implementation | Evidence |
| --- | --- | --- |
| RF-1–3 | About page + approved bilingual messages | Copy/fact review and rendered en/es |
| RF-4 | Shared portrait/MediaFrame, About safe-area styles | Image source/aspect and head/hair visual inspection |
| RF-5 | Contact symbols + filled local masks + labels | Both-theme recognition, fill and accessibility review |
| RF-6–8 | site config + pure projections + About contacts | Domain tests, href inspection, active/static keyboard behavior |
| RF-9 | Shared config + unchanged footer pattern | Projection tests and shared-footer browser checks |
| RF-10 | Message catalogs + existing navigation | Parity test and en↔es direct/client navigation |
| RNF-1–3 | Feature-local layout/semantics/tokens | Full width/text/theme matrix, measured contrast and targets, owner visuals |
| RNF-4 | Confirmed config/copy only | Privacy/fact audit; no real private fixtures |
| RNF-5 | Restricted edit set and preserved baseline | Final scoped diff, fresh Home/chrome/404/icons regressions |
| RNF-6 | Server/native links, no embeds/essential motion | Reduced-motion/no-JS checks, dependency/network inspection |

Independent reviewer evaluates every RF/RNF and completion criterion against fresh
evidence and the final diff, with `VEREDICTO: APROBADO` or
`VEREDICTO: CAMBIOS NECESARIOS`. Missing checks and pre-existing failures remain
explicit, not green-by-assumption. Only the owner can accept final portrait,
recognizable filled contact frames, readable hierarchy in both themes and the
preserved footer presentation. All task checks, plan approval and reviewer approval
are insufficient substitutes. Coordinator records memory/closure after these gates;
no publication authorization is implied.
