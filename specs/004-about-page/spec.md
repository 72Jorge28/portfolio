# Spec 004 — Complete About page

Estado: implementada

Approval record (2026-10-15): following the coordinator's full-specification
summary, the owner explicitly approved this specification with “Las apruebo”,
including Appendix A, the visual hierarchy and the shared-footer scope.
The separate plan/tasks approval was subsequently given on 2026-10-15 with
“Lo apruebo”, after the coordinator presented the plan and 10 tasks with document
links. Those approvals authorized implementation in task order under coordinator
assignment; they did not themselves authorize publication or constitute final
visual acceptance.

Closure record (2026-10-15): T1–T10 are complete. The owner explicitly accepted
the final About visuals and preserved footer presentation with “Esta bien, ya
podemos subir entonces”, then instructed “continuemos”. The final independent
review returned **VEREDICTO: APROBADO**, confirming RF-1–10, RNF-1–6 and all
completion criteria, with no pending blocking gates. See `validation.md`,
“Current disposition — Final independent approval”, for the authoritative evidence
and limitations: reviewed build `GJay8FUi94mC1DZtZsdoR`, 93-file source manifest
`30f6c92e09173e9c8d7b626ae512ace59c9236c3e05cde53d3f5f8896f479c8b`.
The coordinator reports no subsequent application changes. This is documentary
closure, not a new test run, build or browser inspection. The separate publication
instruction is recorded only; publication belongs to a separately authorized agent.

The owner's clarification, “Probemos primero en los dos lados”, selects GitHub
and LinkedIn publication on both About and the existing shared footer as the scope
of this specification. That earlier clarification alone did not approve the full
specification; the subsequent approval above does. Final visual acceptance was a
separate requirement and is now satisfied as recorded in the closure record. This
documentary closure performs no staging, commit, push or publication and does not
accept unrelated work.

## Context and objective

The About page currently contains placeholder text. Replace it with a complete,
personal introduction that helps prospective employers understand Jorge Luis Ramos
Suárez's background, enthusiasm for technology, interests and approach to work.
Present exploration and learning honestly, without implying mastery or inventing
professional achievements.

The page must feel part of the existing organic, Art Nouveau-influenced portfolio.
Reuse the Home introduction's portrait and provide recognizable platform symbols
inside small, filled organic frames. Public contact destinations must remain
centrally configurable so that changing them later does not require editing page
copy or each place where the contact appears.

## Users

- Prospective employers and visitors learning about the owner in English or Spanish.
- Visitors on mobile, tablet and desktop, in light or dark themes, including people
  using enlarged text, keyboard navigation or assistive technology.
- The owner maintaining public contacts and reviewing the final visual result.

## User stories

- HU-1. As a visitor, I want an honest personal biography so that I can understand
  the owner's background, current work and learning interests.
- HU-2. As a visitor, I want recognizable, clearly labelled contact channels so
  that I can distinguish available destinations from channels not yet available.
- HU-3. As the owner, I want to update contact destinations centrally so that the
  portfolio remains consistent when those destinations change.
- HU-4. As a visitor, I want readable, accessible content within the portfolio's
  organic visual identity regardless of language, theme or screen size.

## Definitions

- **Home portrait:** The supplied photograph used in Home's opening introduction,
  not a photograph extracted from a CV or the separate About Preview photograph.
- **Organic contact frame:** A small, non-geometric, softly curved silhouette
  related to Home's image shapes, with a filled interior in the existing Art Nouveau
  palette and a recognizable platform symbol inside it. An empty outline, plain
  rectangular badge or abstract replacement for a platform symbol is insufficient.
- **Configured channel:** A channel with an owner-confirmed public destination in
  the central site configuration. A channel without a destination is unconfigured.
- **Candidate copy:** The complete bilingual text in Appendix A, originally offered
  for explicit approval and approved with this specification as recorded above.

## Functional requirements

- **RF-1:** WHEN a visitor opens About directly or through existing navigation,
  THE SYSTEM SHALL show a complete personal introduction instead of the current
  placeholders, including the owner's confirmed public identity and the factual
  content represented in Appendix A.
- **RF-2:** THE SYSTEM SHALL describe the owner as a Computer Engineering graduate
  of Universidad de Oriente, working at Desoft with Odoo since April 2026 and also
  currently working in web development with Next.js. THE SYSTEM SHALL distinguish
  exploration of mobile development, augmented reality and IoT, and personal projects
  created for learning, from claims of mastery or a published project catalogue.
- **RF-3:** THE SYSTEM SHALL convey enthusiasm for technology, interest in
  camera-based perception and computer vision, ongoing exploration of those fields
  and cybersecurity, and an organized, investigative approach to problem-solving.
  THE SYSTEM SHALL describe programming principles, modularity and clean
  architecture as practices the owner strives to apply to reduce errors and help
  software grow, not guarantees of error-free software or expert credentials.
- **RF-4:** WHEN About displays the owner photograph, THE SYSTEM SHALL reuse the
  Home portrait, upright and undistorted, with the complete face and top and sides
  of the hair visible and unobscured by framing, text or ornament.
- **RF-5:** WHEN About is displayed, THE SYSTEM SHALL show GitHub, LinkedIn,
  WhatsApp and email symbols, each inside an organic contact frame and accompanied
  by a visible localized label. THE SYSTEM SHALL retain recognizable GitHub,
  LinkedIn and WhatsApp logos and a recognizable email envelope symbol, rather
  than substituting initials or abstract ornament.
- **RF-6:** WHEN GitHub or LinkedIn is activated, THE SYSTEM SHALL navigate to its
  configured public destination. For initial publication those destinations SHALL
  be `https://github.com/72Jorge28` and
  `https://www.linkedin.com/in/jorge-ramos-79b709234/`, respectively.
- **RF-7:** WHILE WhatsApp or email is unconfigured, THE SYSTEM SHALL keep its About
  symbol and label visible with localized explanatory text indicating that the
  channel is not yet available. THE SYSTEM SHALL expose no action, link, button,
  keyboard tab stop or clickable styling for that channel; fake destinations,
  empty links and disabled-looking pretend actions SHALL NOT be used.
- **RF-8:** WHEN the owner supplies and configures a public email or WhatsApp
  destination later, THE SYSTEM SHALL make the corresponding About entry an
  actionable email-composition or WhatsApp-conversation link and remove its
  unavailable explanation. WHEN a destination changes or is removed from the
  central site configuration, THE SYSTEM SHALL reflect the new destination or
  unconfigured state without separate changes to each published occurrence.
- **RF-9:** WHEN the confirmed GitHub and LinkedIn destinations are configured,
  THE SYSTEM SHALL display their actionable links on both About and pages using
  the existing shared footer. THE SYSTEM SHALL retain the footer's existing text-link
  appearance and contact presentation pattern without redesign, and SHALL NOT
  introduce WhatsApp or unconfigured channel placeholders or inactive icons into
  the footer. About's organic contact frames SHALL NOT be applied to the footer.
- **RF-10:** WHEN About is viewed in English or Spanish, THE SYSTEM SHALL provide
  the biography, headings, contact labels, availability explanations and useful
  portrait alternative text in that language, preserving the same facts and contact
  destinations. WHEN the visitor switches language, THE SYSTEM SHALL retain About
  as the equivalent logical destination using the existing navigation behavior.

## Proposed visual hierarchy — approved direction

This approved direction is not an exact layout or final visual acceptance:

- An editorial opening balances the organic portrait with the introduction in a
  gently asymmetric desktop composition; narrow layouts use a readable vertical flow.
- Short biography, interests and working-approach passages follow a clear reading
  order rather than one uninterrupted wall of text or a grid of identical cards.
- The four contact symbols form a quiet, identifiable contact area. Their filled
  organic silhouettes are the small-scale echo of Home's imagery, not a competing
  decorative feature or a row of oversized social buttons.
- Retain existing typography, light ivory/sage/petrol relationships and dark
  forest/moss/aged-brass relationships. Exact geometry and spacing remain later
  design decisions within the approved direction, not new palette or font choices.

## Non-functional requirements

- **RNF-1 — Responsive readability:** About must remain usable in both languages
  and themes at 320, 390, 768, 1024 and 1440 CSS-pixel widths, with normal and 150%
  text and browser-default 16/24-pixel text settings. No essential text, portrait
  head, contact symbol, label or focus indicator may be clipped, overlapped or
  obscured; no horizontal document overflow may be introduced. Natural wrapping
  and increased page height are acceptable. Text enlargement must not be defeated.
- **RNF-2 — Accessible interaction:** Use meaningful heading hierarchy and reading
  order. Active contacts must be keyboard-operable, have meaningful localized
  accessible names, visible unobscured focus and targets at least 44 × 44 CSS pixels,
  even when their visual symbols are smaller. Decorative frames must not add
  redundant assistive output. Text must meet WCAG AA contrast (4.5:1 normal,
  3:1 large); meaningful symbols and focus indicators must have at least 3:1
  contrast against adjacent colors. Unavailable channels must be understandable
  without relying on color or a hover tooltip.
- **RNF-3 — Visual coherence:** Preserve the site's fonts, bounded page width and
  common responsive content alignment. Organic frames must have visible filled
  interiors and readable, undistorted symbols in both themes. Avoid excessive
  botanical ornament, neon, glow, cyberpunk effects and decorative code. Final
  composition and logo recognizability require human visual review, not merely
  the presence of curved shapes or passing automated checks.
- **RNF-4 — Truthfulness and privacy:** Publish only the confirmed facts and public
  destinations in this specification. Do not extract or publish additional CV
  contacts, personal details, dates, achievements, project claims or credentials.
  No phone number or email address is supplied for initial publication; neither
  may be inferred. Public destinations must be centrally configurable, not copied
  into translated biography text.
- **RNF-5 — Preservation:** Keep Home's copy, imagery, contours and feathered
  transitions, the carousel, shared header, site frame, theme behavior, other page
  compositions and localized missing-page behavior unchanged, apart from the
  explicitly confirmed shared-contact effect. Preserve supplied photographs and
  shape sources. About completion does not reopen or accept the separate pending
  Home asset-feature visuals.
- **RNF-6 — Motion and independence:** Essential content and configured contact
  navigation must not depend on animation. Respect reduced-motion preferences if
  motion is used. No third-party social embed, chat or account session is required
  to display the biography and contact entries.

## Edge cases

- Initially GitHub and LinkedIn are configured; WhatsApp and email remain visible
  but noninteractive on About. GitHub and LinkedIn also appear as actionable links
  in the existing shared footer; no unavailable WhatsApp or email entry is added
  there. Keyboard navigation skips both unavailable About entries.
- If a previously configured About channel is removed, its entry remains visible
  in the unavailable state; the footer retains its existing omission of absent
  contacts rather than acquiring About's placeholder policy.
- A later email or WhatsApp configuration activates only the corresponding action;
  it does not authorize automatically publishing additional CV contact data or
  adding a new footer channel.
- Longer Spanish labels, enlarged text and narrow layouts may wrap and increase
  height, but must not shrink targets, hide availability text or distort the portrait.
- Rotating an organic frame must not rotate or distort its portrait or logo content.
- With no mail handler or WhatsApp application installed, the configured link still
  expresses the correct destination; this work does not guarantee third-party
  availability, message delivery or installed applications.

## Out of scope

- Contact forms, chat backends, social embeds, authentication and PWA features.
- Publishing a CV, adding a CV download or using the CV photograph.
- Detailed project case studies, proficiency meters, mastery claims, achievement
  statistics or additional biographical facts not confirmed for this page.
- New public routes, languages, global palette/font changes or a shared-chrome
  redesign; adding WhatsApp or new unconfigured contact entries or inactive icons
  to the footer without a separate approved decision.
- Repairs to unrelated navigation/focus or locale query/fragment behavior, and
  broad documentation, dependency or styling migrations.
- Closing, committing or publishing the prior asset feature. No commit or push is
  authorized by this specification.

## Completion criteria

- The owner explicitly approves this specification, including the bilingual copy,
  proposed visual hierarchy and resolved shared-footer scope, before planning.
- After separate approval of the subsequent plan and tasks, all RF/RNF are verified
  with appropriate project checks and fresh browser evidence covering the stated
  locale/theme/width/text conditions, keyboard access and contact states.
- Independent review confirms truthful content, correct public destinations,
  genuine unavailable states, central contact updates and preserved out-of-scope
  presentation. Unavailable checks and pre-existing unrelated failures are reported.
- The owner explicitly accepts the final About visuals, including the portrait,
  organic filled frames, recognizable logos and readable hierarchy in both themes.
  Final visual acceptance also covers GitHub and LinkedIn in the preserved shared
  footer presentation selected by the clarification.
  Specification approval, automated checks and historical screenshots do not imply
  final visual acceptance. No blocking questions remain at closure.

## Open questions and approval decisions

- No critical clarification questions remain. GitHub and LinkedIn publication on
  both About and the existing shared footer is the owner-selected scope recorded
  in RF-9, not an unresolved question.
- **Approved:** Appendix A in both languages, including the enthusiasm opener,
  and the proposed visual hierarchy are covered by “Las apruebo” as recorded above.
  Plan/tasks were separately approved with “Lo apruebo” on 2026-10-15 as recorded
  above; final visual acceptance and independent approval are now recorded in the
  closure record. No blocking questions remain.
- No email address or WhatsApp destination is needed to implement the explicitly
  unconfigured initial states. Later public values require owner confirmation.

## Appendix A — Complete candidate copy approved with this specification

The following text may be divided into the proposed readable sections without
omitting facts or changing their meaning. Section headings and availability copy
are included in the approval; no additional claims may be introduced while arranging them.

### Spanish

**Sobre mí**

Me apasiona la tecnología: disfruto descubrir cómo funciona, explorar sus
posibilidades y aprender a crear soluciones con ella.

Soy graduado en Ingeniería Informática por la Universidad de Oriente. Desde abril
de 2026 trabajo en Desoft, una empresa de desarrollo de software, programando con
Odoo. Actualmente también trabajo en desarrollo web con Next.js.

**Lo que exploro**

He probado distintas áreas, como el desarrollo móvil, la realidad aumentada y el
IoT, y he creado proyectos propios como parte de mi aprendizaje. Me interesan
especialmente las tecnologías que permiten interpretar el mundo mediante cámaras,
como la percepción y la visión por computador. Actualmente sigo explorando estos
campos y la ciberseguridad.

**Mi forma de trabajar**

Me gusta investigar, comprender los problemas y buscar soluciones de forma
organizada. Procuro aplicar principios de programación, modularidad y arquitectura
limpia para reducir errores y facilitar el crecimiento del software. Me importa
hacer las cosas bien y seguir aprendiendo durante el proceso.

**Dónde encontrarme**

- GitHub
- LinkedIn
- WhatsApp — Aún no disponible.
- Correo electrónico — Aún no disponible.

Portrait alternative: “Retrato de Jorge Luis Ramos Suárez”.

### English

**About me**

I'm passionate about technology: I enjoy discovering how it works, exploring its
possibilities and learning to create solutions with it.

I'm a Computer Engineering graduate of Universidad de Oriente. Since April 2026,
I've worked at Desoft, a software development company, programming with Odoo.
I also currently work in web development with Next.js.

**What I'm exploring**

I've tried different areas, including mobile development, augmented reality and
IoT, and I've created personal projects as part of my learning. I'm especially
interested in technologies that interpret the world through cameras, such as
perception and computer vision. I continue to explore these fields and cybersecurity.

**How I work**

I enjoy researching, understanding problems and looking for solutions in an
organized way. I strive to apply programming principles, modularity and clean
architecture to reduce errors and help software grow. I care about doing things
well and continuing to learn along the way.

**Where to find me**

- GitHub
- LinkedIn
- WhatsApp — Not available yet.
- Email — Not available yet.

Portrait alternative: “Portrait of Jorge Luis Ramos Suárez”.
