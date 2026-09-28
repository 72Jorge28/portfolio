# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio Project Instructions

## Project

This repository contains a personal portfolio built with Next.js.

The site is a multi-page application, not a single landing page.

Current main areas:

- Home
- About
- Projects

The architecture must remain ready for future pages and project case studies.

## Language

All source code must be written in English.

This includes:

- variable names
- function names
- component names
- type names
- filenames
- folder names
- comments
- technical documentation

User-facing content may be translated.

The site currently supports:

- English
- Spanish

Do not use Spanish identifiers in source code.

## Next.js

Use the App Router.

Before implementing or changing behavior that depends on Next.js APIs, conventions, configuration, routing, caching, rendering, metadata, or other framework-specific behavior, consult the documentation bundled with the installed Next.js version as required by the Next.js agent rules above.

Do not rely on potentially outdated Next.js knowledge when the local documentation is available.

Prefer Server Components by default.

Use Client Components only when required for:

- browser APIs
- client-side state
- event handlers
- interactive UI
- libraries that require the client

Keep client boundaries as small as practical.

Do not add `"use client"` to entire page trees merely for convenience.

## Architecture

Optimize for:

- maintainability
- modularity
- clear responsibilities
- scalability
- readability

Avoid premature abstraction.

Do not create abstractions, generic components, hooks, utilities, or directories unless they solve a concrete current problem or provide a clear architectural boundary.

Prefer composition over large configurable components.

Keep domain/content data separate from presentation when appropriate.

Avoid duplicating constants, configuration, navigation definitions, locale definitions, or project data.

## Components

Components should have a clear responsibility.

Split components when doing so improves:

- readability
- reuse
- testability
- responsibility boundaries

Do not split components merely to reduce line count.

Reusable generic UI belongs in shared UI components.

Feature-specific components should remain close to their feature/domain.

## TypeScript

Use strict, explicit TypeScript.

Prefer inference when the type is obvious.

Use explicit types where they improve contracts or readability.

Do not use `any` as an escape hatch.

Do not suppress TypeScript errors without a documented technical reason.

Prefer domain-specific types over loosely structured objects.

## Internationalization

Internationalization is a first-class architectural concern.

Supported locales:

- `en`
- `es`

Keep locale configuration centralized.

Do not scatter locale-specific conditionals throughout components.

User-facing text that belongs to the interface should be translatable unless there is a deliberate reason otherwise.

Locale switching should preserve the equivalent logical route whenever possible.

## Styling

The portfolio supports light and dark themes.

Use semantic design tokens rather than hardcoded theme colors throughout components.

Prefer CSS custom properties for design tokens.

Examples of semantic concepts:

- background
- surface
- foreground
- muted foreground
- border
- accent
- accent foreground

Components should consume semantic tokens rather than knowing the raw palette whenever practical.

Keep global styles focused on truly global concerns.

Avoid large amounts of unrelated component styling in global styles.

## Visual Direction

The portfolio's visual identity should be:

- elegant
- organic
- professional
- handcrafted
- soft
- slightly asymmetric

It may take subtle inspiration from Art Nouveau and natural forms.

Possible motifs include:

- leaves
- branches
- vines
- flowing curves
- organic shapes

Avoid turning this into excessive ornamentation.

Avoid generic developer-portfolio aesthetics such as:

- excessive neon
- cyberpunk styling
- unnecessary glowing effects
- decorative code everywhere
- futuristic visuals without purpose

Visual experimentation must not compromise usability, accessibility, readability, or performance.

## Responsive Design

Build mobile-first unless a component has a strong reason not to.

Do not assume desktop interactions translate directly to mobile.

Desktop/tablet may use richer compositions and interactions.

Mobile should prioritize:

- readability
- simple navigation
- natural vertical flow
- touch-friendly targets
- performance

Test layouts across meaningful viewport sizes, not only one desktop and one mobile width.

## Motion

Motion should have a purpose.

Prefer CSS for simple transitions and animations.

Do not introduce an animation library unless the interaction genuinely benefits from it.

Respect `prefers-reduced-motion`.

Animations must not be required to understand or navigate the site.

Avoid unnecessary scroll listeners and expensive continuous JavaScript work.

## Accessibility

Use semantic HTML whenever possible.

Maintain:

- keyboard navigation
- visible focus states
- appropriate contrast
- meaningful heading hierarchy
- accessible interactive controls
- useful alternative text for meaningful images

Do not add redundant ARIA where native semantics already provide the correct behavior.

## Images

Use the appropriate Next.js image capabilities when beneficial.

Provide correct dimensions/sizing behavior to avoid layout shifts.

Do not optimize decorative imagery at the expense of unnecessary complexity.

Meaningful images require useful alternative text.

Purely decorative imagery should not create noise for assistive technologies.

## SEO and Metadata

Use the metadata APIs supported by the installed Next.js version.

Each important page should be capable of defining localized metadata.

Keep the architecture ready for:

- canonical URLs
- language alternates
- Open Graph metadata
- project-specific metadata

Do not invent production URLs or domains.

## Performance

Do not sacrifice maintainability for theoretical micro-optimizations.

However, avoid obvious performance problems such as:

- unnecessary Client Components
- unnecessary JavaScript
- oversized dependencies for simple behavior
- avoidable layout shifts
- unoptimized large media
- expensive scroll handlers
- duplicated data fetching

Prefer platform and framework capabilities before adding dependencies.

## Dependencies

Use `pnpm`.

Before adding a dependency:

1. Check whether the project or platform already provides the required capability.
2. Verify compatibility with the installed stack.
3. Prefer actively maintained and stable packages.
4. Avoid adding large dependencies for trivial functionality.

Do not blindly upgrade existing dependencies.

Explain newly added production dependencies in the final report.

## Quality

Do not hide errors merely to make validation pass.

After meaningful changes, run the relevant available checks.

At minimum, when configured:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
