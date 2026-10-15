# AGENTS.md — Portfolio

Jorge Ramos's personal portfolio showcases his completed work to prospective
employers and supports his search for a job. It is an English/Spanish multi-page
site with Home, About, and Projects, ready to grow with project case studies.

## Rules

Before changing code, read `docs/constitution.md`.

For work using SDD, also read the active specification in `specs/NNN-*/`.
If the active specification is missing or ambiguous, clarify it before proceeding.

Small changes explicitly handled through the `/feature` flow do not require a full
SDD specification, but must still respect this file, the constitution, and the
authorized scope.

## Stack and structure

Current resolved versions are listed below. `package.json` defines requirements
and `pnpm-lock.yaml` defines resolved dependencies; update this snapshot when an
approved dependency change affects it.

| Technology                          | Version / requirement                 |
| ----------------------------------- | ------------------------------------- |
| Node.js                             | `>=24.12.0`; `.nvmrc` selects Node 24 |
| pnpm                                | 12.4.1                                |
| Next.js / eslint-config-next        | 16.3.5; App Router                    |
| React / React DOM                   | 19.2.8                                |
| TypeScript                          | 5.9.3; strict mode                    |
| Tailwind CSS / @tailwindcss/postcss | 4.3.3                                 |
| next-intl                           | 4.14.7                                |
| next-themes                         | 0.4.6                                 |
| ESLint                              | 9.39.5                                |

Sources of truth and responsibility boundaries:

| Path                                            | Responsibility                                                                             |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `src/app/[locale]/`                             | Localized pages and the root layout; HTML language and shared providers live here          |
| `src/proxy.ts`                                  | Locale negotiation and request routing through next-intl                                   |
| `src/lib/site.ts`                               | Language-independent identity, derived full name/initials, contacts, and optional site URL |
| `src/lib/metadata.ts`                           | Shared localized metadata and absolute URL strategy                                        |
| `src/i18n/routing.ts`                           | Supported locales, default locale, and locale prefixes                                     |
| `src/i18n/navigation.ts`                        | Shared locale-aware links and pathname helpers                                             |
| `src/i18n/request.ts` / `types.d.ts`            | Request messages, locale validation, and typed message contract                            |
| `src/i18n/messages/{en,es}.json`                | Translatable interface and project content; includes shared `Identity.role`                |
| `src/components/navigation/navigation-items.ts` | Internal navigation definitions used by header and footer                                  |
| `src/lib/projects/{types,catalog,queries}.ts`   | Domain contracts, language-independent project records, and translated content resolution  |
| `src/components/`                               | Feature components near their domain; generic reusable UI in `ui/`                         |
| `src/app/globals.css`                           | Tailwind import, semantic tokens, typography, and truly global rules                       |
| `src/fonts/` / `public/shapes/`                 | Local font loaders/licenses and supplied decorative masks                                  |
| `tests/*.test.mjs`                              | Node tests for translations, project records, and carousel geometry                        |
| `pnpm-workspace.yaml`                           | Dependency build-script restrictions, even though this is a single application             |
| `MEMORY.md`                                     | Confirmed decisions, actionable follow-ups, and verification status                        |

## Commands

Run from the repository root with the required Node version and pnpm.

| Purpose                            | Command                          |
| ---------------------------------- | -------------------------------- |
| Select Node with nvm, if available | `nvm install && nvm use`         |
| Install locked dependencies        | `pnpm install --frozen-lockfile` |
| Run development server             | `pnpm dev`                       |
| Generate framework types           | `pnpm exec next typegen`         |
| Lint                               | `pnpm lint`                      |
| Check TypeScript                   | `pnpm exec tsc --noEmit`         |
| Run tests                          | `pnpm test`                      |
| Build for production               | `pnpm build`                     |
| Run the production build           | `pnpm start`                     |
| Check patch whitespace             | `git diff --check`               |

On a fresh checkout, generate types before standalone TypeScript checking.
`next dev` and `next build` also generate them. `pnpm start` requires a successful
production build. There is no configured formatter or additional test framework.

## Conventions

### Code and architecture

- Write identifiers, filenames, comments, and technical documentation in English.
  Use camelCase for values/functions, PascalCase for components/types, and
  kebab-case for component filenames. Match nearby code: two-space indentation,
  double quotes, and semicolons; avoid unrelated formatting changes.
- Use strict TypeScript. Prefer inference for obvious types and explicit,
  domain-specific contracts at boundaries. Do not use `any` as an escape hatch
  or suppress type errors without a documented technical reason.
- Prefer Server Components. Use a small client boundary only for browser APIs,
  state, events, interactive UI, or a library that requires it. See the locale
  layout and `src/components/projects/selected-projects.tsx` for server composition
  around client interaction; do not mark an entire page tree as client for convenience.
- Prefer composition and clear responsibilities. Split for meaningful reuse or
  responsibility boundaries, not line count. Create abstractions only for a current
  problem, and keep domain data separate from presentation; follow the project
  catalog/query/component separation.
- Reuse the sources of truth above instead of duplicating identity, navigation,
  locales, project records, constants, or metadata logic.
- Avoid unnecessary JavaScript, duplicated fetching, oversized dependencies,
  layout shifts, and continuous scroll work. Prefer platform/framework capabilities
  without sacrificing maintainability for theoretical micro-optimizations.

### Content, localization, and metadata

- Support `en` and `es`. Put translatable interface text in both message catalogs;
  avoid locale-specific conditionals scattered through components.
- Keep names, contacts, and other non-translatable identity data in `site.ts`.
  Translate the professional role through `Identity.role`; follow Home Hero and Footer.
- Use the shared localized `Link` for internal navigation. Preserve the equivalent
  logical route when switching locales; consult the pending review in `MEMORY.md`
  before changing query-string or fragment behavior.
- Use shared localized metadata, with room for canonical URLs, language alternates,
  Open Graph, and future project-specific metadata. Use the installed metadata APIs.

### Styling, visuals, and accessibility

- Tailwind CSS is the primary, general styling tool. Use external CSS, including
  CSS Modules, for custom masks, complex animations, and bespoke compositions that
  would be difficult or less clear in Tailwind. Keep existing styles stable unless
  their migration is authorized; do not remove the Tailwind/PostCSS integration.
- Consume semantic CSS tokens from `globals.css` in both themes, including when
  using Tailwind. Keep palette decisions centralized and feature styling local.
- Maintain an elegant, organic, professional, handcrafted, soft, slightly
  asymmetric identity. Subtle Art Nouveau/natural forms are appropriate; avoid
  excessive ornament, neon, cyberpunk effects, or decorative code.
- Build mobile-first unless justified otherwise. Prioritize readable vertical flow
  and touch-friendly controls; richer desktop composition must remain usable on mobile.
- Use semantic HTML, meaningful headings, visible focus, keyboard-operable controls,
  and appropriate contrast. Avoid ARIA that duplicates native semantics.
- Use Next.js image capabilities when beneficial, reserve correct image space, and
  supply localized useful alt text. Keep decorative imagery out of assistive output.
- Give motion a purpose, prefer CSS for simple effects, and respect
  `prefers-reduced-motion`. Content and navigation must remain understandable without motion.

## Domain rules and known pitfalls

- Before changing Next.js APIs, routing, rendering, caching, metadata, or configuration,
  read the relevant installed guide in `node_modules/next/dist/docs/`. Preserve the
  complete framework-managed instruction block at the end of this file.
- Tests import erasable `.ts` modules directly using Node's native type stripping.
  The package uses ESM. Node does not apply `tsconfig.json` aliases or compile TSX;
  do not assume app bundler behavior in tests. Use explicit type-only imports and
  explicit file extensions for runtime imports executed by Node.
- English messages define the next-intl TypeScript contract through `types.d.ts`.
  Maintain matching, non-empty Spanish messages rather than silently mixing locales.
- Request locale resolution uses `next/root-params`; its types are generated by
  Next.js. The root layout is inside `[locale]`, not a separate `src/app/layout.tsx`.
  Consult installed documentation before altering this arrangement.
- The carousel repeats slide content three times; outer copies are `aria-hidden`
  and inert. Do not supply document IDs or stateful controls without reviewing that
  architecture. Preserve manual navigation and reduced-motion behavior; see
  `src/components/ui/carousel.tsx` and `docs/selected-work.md`.
- Theme bootstrap has a version-specific `scriptProps` compatibility adaptation.
  Consult `src/components/theme/theme-provider.tsx` and `docs/theme-compatibility.md`
  before simplifying it or upgrading React/next-themes. Preserve the early theme application.
- Project details, images, contacts, and some page copy remain pending. Use only
  verified information; do not invent technologies, project results, URLs, or contact data.
  Do not publish empty case-study routes or links before their content exists.
- `SITE_URL` is optional and must be an HTTP(S) origin without credentials, a path,
  query, or fragment. Absolute metadata URLs are omitted until it is configured;
  never invent a production domain.
- Dependency build scripts are restricted in `pnpm-workspace.yaml`. Do not enable
  them or upgrade dependencies as an automatic workaround for a failure.
- `MEMORY.md` records documentation drift and unverified navigation/focus concerns.
  Historical browser checks in `docs/` are not proof that current behavior is correct.
  Preserve font licenses and supplied asset provenance when changing media.

## Workflow

1. **Always plan before acting.** Start every task with a visible execution plan
   proportional to the work. This does not replace or modify an approved SDD
   `plan.md`; during SDD, implementation must remain within that approved plan.
2. Read `MEMORY.md`, inspect the working tree, and identify affected files and sources
   of truth before editing. Treat unfamiliar changes as potential user work.
3. Ask the questions needed to clarify requirements and build the intended product.
   Resolve ambiguity about content, behavior, design, or scope before making the
   affected decision. During SDD, follow the clarification rules defined by the
   `sdd` skill, including its question rounds and approval gates.
4. Keep changes focused on the agreed task. Avoid unrelated refactors, migrations,
   dependency updates, or cleanup. During SDD, report additional memory-worthy findings
   to the coordinator instead of editing `MEMORY.md` directly.
5. Implement with the existing patterns and verify using the rules below. During SDD,
   only the coordinator updates `MEMORY.md`; outside SDD, update it using the policy
   below when this guide requires it. Mark issues resolved only after verification.
6. Finish with a simple explanation in the user's language: what changed, what the
   new behavior does, what was checked, and what remains pending or blocked. Explain
   any added production dependency and its purpose; avoid unnecessary jargon.

### Project memory

- `MEMORY.md` carries useful project context between sessions; this file owns
  permanent working rules. Keep memory organized around current state, decisions
  and their rationale, lessons/mistakes to avoid, next steps, and implementation
  and verification notes.
- Keep `MEMORY.md` current with useful project state, important decisions and their
  rationale, lessons, verification results, and remaining work. Distinguish
  confirmed issues from unverified concerns.
- During an SDD flow, only the `coordinator` updates `MEMORY.md`, at the end of each
  relevant phase. `planner`, `implementer`, and `reviewer` must report memory-worthy
  findings to the coordinator instead of editing the file themselves.
- Outside SDD, the acting agent may update `MEMORY.md` when required by this guide.
- Keep the main memory around 50 lines or fewer, excluding implementation notes
  and user-requested follow-ups. Keep those sections concise too. Summarize or
  remove stale and redundant information without losing actionable pending work;
  memory is not an exhaustive session log or a copy of this guide.
- When a decision becomes a permanent rule, propose moving it into `AGENTS.md`
  rather than retaining duplicate instructions in memory.

## Boundaries

These are the current working rules; revisit them with the user as the project evolves.

### 🟢 Always — act within the authorized task

- Plan, read memory, reuse shared configuration, and ask about genuine uncertainties.
- Use pnpm, follow the conventions above, and preserve both languages, themes,
  accessibility, and the multi-page architecture.
- Make necessary focused edits and create implementation files within the authorized
  structure and responsibility. A new component or test for the agreed feature does
  not require a separate approval just because it is a new file.
- Run relevant verification, report failures honestly, and keep memory current.

### 🟡 Ask first — decisions that expand or change the agreement

- Add or upgrade dependencies outside an explicitly authorized dependency change.
  First check existing/platform capabilities, compatibility, maintenance, and size.
- Change data contracts, public routes, supported locales, build-script permissions,
  or introduce tools/services beyond the authorized task.
- Create a file that introduces a new structure or responsibility outside the
  authorized work; ordinary implementation files inside that work are covered above.
- Perform broad styling/architecture migrations or delete resources whose use is unclear.

### 🔴 Never — prohibited shortcuts and unauthorized actions

- Overwrite, discard, or remove user changes without clarification and authorization.
- Invent personal information, project claims, contact details, or production URLs.
- Store sensitive information in `MEMORY.md`, including credentials, keys, tokens,
  or personal data.
- Hide failures, weaken checks, or suppress errors merely to make validation pass.
- Commit secrets or edit generated artifacts by hand, including `next-env.d.ts`
  and framework output. Let the corresponding tools regenerate them.
- Commit, push, change Git configuration, or perform destructive Git operations
  without explicit authorization.
- Remove or hand-edit the framework-managed block below, or treat `MEMORY.md`
  as an unused file to delete.

## Verification

For meaningful application, configuration, or dependency changes, run:

```bash
pnpm exec next typegen
pnpm lint
pnpm exec tsc --noEmit
pnpm test
pnpm build
git diff --check
```

- For documentation-only changes, check references, commands, consistency, and
  `git diff --check`; a full application build is not required solely for prose edits.
- Add or adjust tests when they meaningfully verify changed behavior or a regression.
  Avoid tests that only mirror the implementation.
- For UI changes, check both locales, light/dark themes, representative widths such
  as 320, 390, 768, 1024, and 1440px, text growth, overflow, and keyboard/focus behavior.
  Check reduced motion when the change affects animation or interaction.
- For routing/navigation changes, check direct visits, client navigation, locale
  switching, redirects, and localized 404s. For theme changes, check initial hydration,
  persistence, system preference, and locale navigation in development as well.
- Static checks do not replace browser verification. State which checks ran and
  their results; record unavailable checks and blockers without claiming full validation.
- Review the final diff for scope and accidental changes. Once relevant checks pass,
  repeat or broaden them only when new changes or unresolved concerns justify it.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
