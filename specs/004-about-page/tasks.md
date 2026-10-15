# Tasks 004 — Complete About page

Estado: aprobado

Approval record (2026-10-15): after the coordinator presented plan.md and these
10 tasks with document links, the owner explicitly approved both with “Lo apruebo”.
That approval authorized implementation in task order; it did not itself constitute
final owner visual acceptance or authorize publication.

Closure record (2026-10-15): all ten tasks below are complete, including T9's final
independent **VEREDICTO: APROBADO** and T10's explicit owner visual acceptance,
“Esta bien, ya podemos subir entonces”, followed by “continuemos”. RF-1–10,
RNF-1–6 and all completion criteria are confirmed satisfied in `validation.md`'s
current disposition. No pending T10 work or blocking gate remains. Checkboxes and
historical evidence are preserved; no additional implementation task, test run,
build or browser inspection is introduced by this closure. The owner's separate
publication instruction is recorded only; a separately authorized agent handles
publication, without this task staging, committing or pushing anything.

Prerequisite: spec.md is approved (“Las apruebo”, 2026-10-15). Tasks are authorized
for implementation under coordinator assignment and ordered by dependency, approximately
20–30 minutes of focused work each (validation may need multiple evidence batches).
Coordinator assigns one implementer per implementation task, sequentially; each
implementer completes only its assigned task and stops. Reviewer and owner gates
remain separate. Do not stage, commit, push, edit MEMORY or close Specs 002/003.

- [x] **T1. Test and implement central contact configuration/projections.** RF-6–9; RNF-4, RNF-5, RNF-6.
  - Inspect working-tree status/diff and protect all pre-existing asset/agent/backup changes; report inability to establish the baseline before editing. Add red tests in `tests/site-contacts.test.mjs`, then minimal typed pure functions in `src/lib/contacts.ts` and verified config/optional WhatsApp extension in `src/lib/site.ts`.
  - Hecho cuando: `pnpm test` demonstrates red→green for the new behavior: exact approved GitHub/LinkedIn, initial absent email/WhatsApp, four About entries, correct synthetic mailto/HTTPS conversation links, update/removal behavior, footer eligibility excluding WhatsApp and preserving existing email. Node imports use explicit `.ts` extensions; no private data, environment-dependent contact logic or unrelated edits are introduced.

- [x] **T2. Install approved bilingual About content.** RF-1–3, RF-10; RNF-4, RNF-5.
  - Replace only About message placeholders in `src/i18n/messages/{en,es}.json` with all Appendix A paragraphs/headings, contact labels, unavailable copy and portrait alt text; use shared identity interpolation where appropriate.
  - Hecho cuando: both catalogs match the approved facts/wording without mastery or project claims; `pnpm test` passes message parity/nonempty checks and no other page copy or contact URL is duplicated in translated prose.

- [x] **T3. Compose the About biography and safe portrait.** RF-1–4, RF-10; RNF-1–5, RNF-6.
  - Read relevant installed framework guides before rendering/Image changes. Update `src/app/[locale]/about/page.tsx` and add `src/components/about/about.module.css`; retain metadata/navigation. Reuse read-only Home portrait configuration and `MediaFrame`, reserved image aspect and safe area. Apply the planned editorial hierarchy and shared rails, not shared stylesheet changes.
  - Hecho cuando: direct en/es About visits show all approved passages in semantic reading order, one h1 and appropriate h2s; `/images/me/portrait.png` stays upright, undistorted and full-head visible at narrow/wide widths in both themes; Home/shared asset sources remain unchanged. Record an initial browser inspection before proceeding.

- [x] **T4. Render recognizable organic contacts with real active/static states.** RF-5–8, RF-10; RNF-1–4, RNF-6.
  - Add feature-local `about-contacts.tsx` and `contact-symbol.tsx`, integrate them into About, and extend local styles. Use four static recognizable SVG symbols with documented provenance as applicable, filled organic decorative layers, visible labels and static unavailable explanations. No icon dependency or generic framework.
  - Hecho cuando: GitHub/LinkedIn use correct native links; WhatsApp/email initially have no href, button, role, tabindex or clickable styling; synthetic future states are covered by domain tests and any necessary local rendering check with fixtures restored. Active targets are ≥44 × 44px and focus remains outside clipping; en/es and both themes show upright readable symbols, fill and labels. Browser keyboard inspection and `pnpm test` results are recorded.

- [x] **T5. Integrate shared-footer contacts without redesign.** RF-6, RF-8, RF-9, RF-10; RNF-1, RNF-2, RNF-4, RNF-5.
  - Use the shared projection in `src/components/layout/site-footer.tsx` as needed; preserve existing text-link markup/classes/styles, same-tab behavior and existing optional email support. Never include WhatsApp or unavailable entries.
  - Hecho cuando: Home/About/Projects in en/es show configured GitHub/LinkedIn in the existing footer pattern, with correct destinations and usable focus/wrapping; tests confirm missing-contact omission, configured-email behavior and no WhatsApp even when configured. No footer CSS redesign, extra placement or About frames are introduced.

- [x] **T6. Run project checks and explicit-origin dev/production regressions.** RF-1, RF-6–10; RNF-4–6.
  - Run `pnpm exec next typegen`, `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`, `git diff --check`. Run tests again against real dev and production with BOTH `LOCALIZED_404_TEST_ORIGIN` and `SITE_ICONS_TEST_ORIGIN` set to each verified server origin. Start `specs/004-about-page/validation.md` with source/build identity, outcomes and baseline comparison.
  - Hecho cuando: all six check outcomes plus both explicit-origin runs are recorded with counts/skips, icon/404 contracts actually executed, and related new failures resolved within scope. Pre-existing failures are evidenced and separated; no asset-feature acceptance, dependency repair, generated-file edits or clean-tree claim is inferred. Owned resources only are managed.

- [x] **T7. Validate responsive composition, text growth and contrast.** RF-1–5, RF-7, RF-9, RF-10; RNF-1–5.
  - Use Chrome DevTools MCP in dev AND production for en/es, both themes, 320/390/768/1024/1440px, normal/150% text, native default-font16/24px. Batch the matrix and record actual conditions, screenshots, overflow/rails, full-head geometry, frame fill/logo readability, wrapping and measured contrast in validation.md.
  - Hecho cuando: every required matrix row has fresh evidence or an explicitly unresolved blocker; text, face/hair, logos, labels and focus space are unobscured without horizontal overflow; measured contrast meets RNF-2. In-scope styling corrections are rechecked, and separate Home feather/assets remain preserved, not accepted or closed.

- [x] **T8. Validate interaction, navigation and preservation in the browser.** RF-1, RF-6–10; RNF-1, RNF-2, RNF-4–6.
  - In both modes/locales/themes check Tab/Shift-Tab/Enter, localized names, inactive entries skipped, focus visibility and ≥44px active targets; direct/client About navigation, Home Read more, reload and equivalent locale route; reduced motion/no-essential-JS behavior; shared footer, representative native no-JS404 recovery and unchanged Home/chrome/icons. Inspect links without sending messages or claiming third-party availability.
  - Hecho cuando: validation.md records actual destinations and keyboard/navigation outcomes, availability comprehension without hover/color, preserved out-of-scope behavior and remaining limitations; all fixture values are removed. Relevant checks are repeated after any in-scope corrections; unrelated known focus/query-fragment concerns remain reported rather than repaired.

- [x] **T9. Obtain independent requirement-by-requirement review.** RF-1–10; RNF-1–6.
  - Coordinator assigns an independent reviewer, not the implementing agent, to inspect final diff, pure tests, fresh dev/prod evidence and About/footer visuals through Chrome DevTools MCP. Record each RF/RNF and completion criterion with method/result in validation.md.
  - Hecho cuando: reviewer delivers `VEREDICTO: APROBADO` with no unresolved blocking noncompliance, or documents `VEREDICTO: CAMBIOS NECESARIOS` and leaves this task unchecked until scoped corrections and rereview pass. Missing evidence is not silently treated as success; optional suggestions are separate. Follow the skill's correction-cycle limits.

- [x] **T10. Obtain owner visual acceptance and hand off closure.** RF-4, RF-5, RF-9; RNF-1, RNF-3, RNF-5; spec completion criteria.
  - Present the final About portrait, filled recognizable organic symbols, bilingual hierarchy in both themes and preserved footer text-link presentation to the owner. Coordinator records the explicit response and handles memory/spec closure only after all requirements and checks are satisfied.
  - Hecho cuando: explicit owner acceptance of these final visuals is recorded separately from spec/plan approval and reviewer checks; remaining checks/blockers are resolved or transparently reported without declaring completion. This gate does not accept the prior asset feature or authorize staging, commit, push or publication.
