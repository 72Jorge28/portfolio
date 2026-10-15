# Spec 002 — Localized 404 without JavaScript

Status: implemented

## Context and objective

Direct visits to missing English and Spanish pages currently return HTTP 404 but
show a blank document when JavaScript is disabled. The project records this defect
in both development and production; the localized error content works with
JavaScript enabled.

Visitors must be able to understand that a page is unavailable and return to the
appropriate localized home page without JavaScript. The correction must preserve
the genuine HTTP 404 response, the requested language, and existing valid routes.
It must remain compatible with the current application architecture, without
speculative fixes or unnecessary architectural changes.

## Users

- Portfolio visitors opening an unavailable English or Spanish URL, including
  visitors whose browser does not execute JavaScript.
- Visitors using keyboard navigation or assistive technology to recover from an
  unavailable page.

## User stories

- HU-1. As a visitor opening an unavailable page, I want a visible explanation in
  the URL's language so that I understand what happened even without JavaScript.
- HU-2. As a visitor on an unavailable page, I want a working link to home in the
  same language so that I can continue exploring the portfolio.

## Definitions

- **Scoped missing URL:** A URL beginning with the supported locale prefix `/en/`
  or `/es/` whose remaining path does not identify an existing page. This includes
  single-segment and nested missing paths.
- **Direct visit:** A document request made by opening a URL or reloading it,
  rather than relying on prior client navigation.
- **Without JavaScript:** Browser script execution is disabled before the direct
  visit. Error content and recovery cannot depend on scripts executing later.
- **Genuine 404:** The direct document response has HTTP status 404. A successful
  response displaying an error (soft 404), or a redirect used in place of that
  response, does not satisfy this definition.
- **Localized home:** `/en` for English and `/es` for Spanish.

Unprefixed URLs and unsupported locale prefixes belong to the existing locale
negotiation behavior, not to the scoped missing-URL contract. This specification
does not introduce or redefine that policy.

## Functional requirements

- **RF-1:** WHEN a visitor directly requests a scoped missing URL, THE SYSTEM
  SHALL return a genuine HTTP 404 document response, both with JavaScript enabled
  and with JavaScript disabled, without replacing it with a redirect.
- **RF-2:** WHEN a visitor directly requests a scoped missing URL, THE SYSTEM
  SHALL display a visible page heading and explanatory message in the URL's locale
  using the existing copy below, both with JavaScript enabled and disabled.

  | Locale | Heading | Message | Recovery link text |
  | --- | --- | --- | --- |
  | `en` | Page not found | This page is unavailable. | Return home |
  | `es` | Página no encontrada | Esta página no está disponible. | Volver al inicio |

- **RF-3:** WHEN a visitor directly requests a scoped missing URL, THE SYSTEM
  SHALL declare the document's HTML language as `en` for `/en/` URLs and `es` for
  `/es/` URLs, both with JavaScript enabled and disabled.
- **RF-4:** WHEN a scoped missing page is displayed, THE SYSTEM SHALL expose a
  visible native hyperlink with the corresponding recovery text from RF-2 and a
  destination of localized home, operable without JavaScript.
- **RF-5:** WHEN a visitor follows the recovery hyperlink, THE SYSTEM SHALL open
  the existing home page in the same locale, both with JavaScript enabled and
  disabled.
- **RF-6:** WHEN a visitor opens an existing Home, About, or Projects route in
  either supported locale, THE SYSTEM SHALL preserve its successful response,
  localized content, and existing navigation behavior rather than treating it as
  a missing page.

## Non-functional requirements

- **RNF-1 — Compatibility and scope:** The correction must be compatible with the
  current application architecture. Unnecessary architectural changes, changes to
  public routes or supported locales, and changes to locale negotiation policy
  are not authorized by this specification. Any necessary architectural change
  beyond this constraint requires an explicit decision before implementation.
- **RNF-2 — Accessibility:** The error title must be a semantic heading. The
  recovery hyperlink must have the localized accessible name from RF-2, be
  keyboard-operable, and show visible focus. Essential content must remain
  readable without motion or script execution.
- **RNF-3 — Presentation:** The heading, message, and recovery link must remain
  readable and usable in both supported themes and at viewport widths of 320,
  390, 768, 1024, and 1440 pixels, including 150% text sizing, without horizontal
  overflow caused by the error content.

## Edge cases

- Single-segment missing paths in both locales, including `/en/audit-missing` and
  `/es/audit-missing`, must satisfy the full scoped contract.
- Nested missing paths, including `/en/audit-missing/deeper` and
  `/es/audit-missing/deeper`, must satisfy the same contract; the recovery link
  must resolve to localized home rather than a relative missing destination.
- An explicit supported locale prefix must determine the error language even
  when browser language preferences favor the other supported locale.
- Reloading a missing URL with JavaScript disabled must not require a previous
  successful visit or client navigation to expose the error content.
- Enabling JavaScript must not remove the translated error content or change the
  direct response into a soft 404.
- Unprefixed or unsupported-locale requests must retain existing negotiation
  behavior. Existing negotiation redirects are not prohibited by RF-1, which
  applies only to scoped missing URLs.

## Out of scope

- New error-page copy, visual redesign, or additional recovery destinations.
- Defining a new policy for unprefixed URLs, unsupported locales, or non-page
  requests such as missing assets and service endpoints.
- Fixing unrelated mobile navigation, locale-switch query/fragment behavior,
  theme controls, branding, content, or documentation issues.
- New dependencies, dependency upgrades, or broad application restructuring.
- Prescribing a cause or implementation before technical investigation.

## Completion criteria

- All RF and RNF are validated, with evidence covering both supported locales,
  single-segment and nested missing paths, and direct visits with scripts enabled
  and disabled in development and production.
- Validation establishes both the HTTP response and the visible browser result;
  success after scripts run alone is insufficient.
- Existing localized Home, About, and Projects routes and relevant navigation
  behavior have no new known regressions.
- Applicable project checks and browser validation defined by the project guide
  pass; unavailable checks or unrelated pre-existing failures are explicitly
  reported rather than presented as successful validation.
- No blocking questions remain, and the implementation stays within the approved
  specification and subsequently approved plan and tasks.

## Open questions

- No blocking product questions identified. The technical cause and compatible
  correction remain to be investigated during planning after explicit approval
  of this specification.
