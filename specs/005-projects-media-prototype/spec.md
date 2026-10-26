# Spec 005 — Interactive Projects media prototype

Estado: implementada — revision 2 including the static-video-preview amendment; closed.

Administrative closure (2026-10-26): the owner answered **“Lo apruebo”** to
**“¿Apruebas esta versión para cerrar la SDD, dejando el rediseño para después?”**
after presentation of the updated actual preview. This is separate final R10
visual/behavior acceptance, not the earlier identically worded planning approval.
The coordinator supplied the independent final **VEREDICTO: APROBADO** for
RF-1–12, RNF-1–6 and completion criteria. R1–R10 and A1–A5 are complete;
revision-1 T9/T10 remain superseded, not completed. See `validation.md`'s final
closure record for attribution, source identity and retained limitations.
No commit, push, deployment or publication is authorized.

Revision 2 — requirements change approved on 2026-10-16.
The owner rejected the final prototype's composition and enlargement treatment
and clarified the intended behavior. Following QA clarification with no blocking
questions, the owner explicitly approved this complete revision with **“La apruebo”**
on 2026-10-16 (coordinator-supplied record; no exact time is supplied). This approves
revision-2 requirements; it did not itself authorize implementation. The owner
subsequently approved the revised plan/tasks jointly with **“Las apruebo”** on
2026-10-16, answering the coordinator's joint approval question (coordinator-supplied
record; no exact time supplied). This separate approval authorizes ordered R1–R10
implementation, not final owner acceptance, which was then a future gate in R10.
No publication is authorized.

Approved revision-2 amendment (draft prepared 2026-10-24): replace the inline video's plain
green/text-only placeholder with a static representative frame from the supplied
recording. The owner requested this within the still-open SDD flow; the amendment
received explicit requirements approval with **“La apruebo”** (coordinator-supplied
record; no approval date or exact time supplied). Revision-2 approvals above
remain historical and do not approve this addition's implementation. R1–R9
were complete against the prior requirements; R10 final human visual/behavior
acceptance was then pending. The owner's positive functional feedback was not final
acceptance. The amended plan/tasks subsequently received separate joint approval
with **“Lo apruebo”** before A1–A5 implementation (coordinator-supplied record;
no approval date or exact time supplied). No broader design refinement, closure
or publication was authorized by that amendment approval; separate final closure
acceptance is recorded above.

Historical revision-1 approval record (2026-10-15): the owner explicitly approved
the full original specification with **“La apruebo”**, including its proposed
defaults. That approved the original requirements and interaction direction, not
final visual acceptance or publication.
Separate joint plan/tasks approval was recorded on 2026-10-15 with the owner's
response **“El video de prueba no tiene nada privado. Apruebo el plan”**, following
the coordinator's joint approval request. That authorized the original ten ordered
tasks, not this revision's implementation. The owner explicitly confirmed that the
test video contains no private information; this is an owner assertion, not a
completed agent inspection.
The subsequent sample-specific authorization to retain the video's original audio
with audio-content review attributed to the owner, not agent listening, remains
valid. The previously authorized narrow compiler compatibility adjustment also
remains valid; neither decision is reopened by this visual change. No exact
approval time is supplied. Existing technical review and validation are historical
evidence against revision 1, not acceptance of revision 2. Final owner acceptance
was not obtained for revision 1; that implementation did not satisfy the revised design.

## Context and objective

Create an interactive sketch of the Projects page so the owner can evaluate its
composition, independent project galleries and enlarged-media experience before
supplying real project imagery. A static mockup is insufficient. This prototype
does not claim that its sample image or recording documents any listed project.

The owner confirmed vertically stacked projects, each with its own manually
operated gallery. On desktop, the initial large left-hand title is vertically
centered against a right-hand media strip showing the first image and a glimpse
of the next item. Arrows sit below, centered across the whole title-and-media
block. Advancing raises and reduces the title and shifts the strip left beneath
it, revealing more of the next item without increasing any item's display size.
Returning to the first item restores the entire initial composition. Only direct
media activation opens enlargement, surrounded by a translucent gray blurred
view of the page, with a simple X at the opened media's upper-right corner.
Inline media contours must match those of Home's project carousel. Video playback
is permitted exclusively in the enlarged viewer, following an explicit Play action.
The existing Home carousel must remain unchanged.

The owner now requests visible video content instead of the plain green inline
placeholder. This amendment adds a static representative frame while preserving
the current composition, constant-size strip, organic contours and enlarged-only
manual playback. Broader design refinement is deferred, not included here.

The prior About specification is closed and remains protected. The owner reports
the previous site is deployed on Vercel. Neither that publication authorization
nor approval of this prototype authorizes publishing new Projects work.

### Retained revision-1 defaults

The earlier approval included the following bounded defaults, retained except for
the explicitly revised strip and viewer presentation:

- Reuse the same supplied image-first, video-second sample sequence for all three
  projects, with explicit sample labels.
- On narrow screens, use a readable vertical title-before-media composition;
  subsequent items retain a smaller title above the media rather than forcing
  desktop columns into a narrow viewport.
- Close enlargement using a visible close action, Escape or a click/tap on the
  backdrop; preserve the gallery selection and restore focus on close.
- Use the honest empty, single-item and failed-media behavior defined below.

Exact spacing and sizes remain subject to later design and owner visual
acceptance within the alignment, constant-item-size, contour and viewer rules
below. The title moves upward after advancing; no bottom-title state is requested.

## Users

- The owner evaluating an interactive prototype before providing project materials.
- English- and Spanish-speaking visitors using mobile, tablet or desktop, either
  theme, keyboard navigation, enlarged text or assistive technology.
- The owner maintaining the project list, ordered media and verified destinations.

## User stories

- HU-1. As a visitor, I want to browse media within each stacked project without
  replacing the other projects or losing their selections.
- HU-2. As a visitor, I want the title to release space for a shifting media strip,
  without enlarging its items during arrow navigation, and
  return to its original presentation when I return to the first item.
- HU-3. As a visitor, I want to enlarge an image or deliberately play a video
  without background distraction or unexpected sound.
- HU-4. As the owner, I want a clearly labelled working sketch and consistent
  configuration for later projects, media and optional live links.

## Definitions

- **Initial composition:** The first media item is selected. At ordinary desktop
  text settings and widths of 1024 and 1440 CSS pixels, the large project title is
  to the left, with the heading's vertical midpoint aligned with the media strip's
  vertical midpoint, not with the combined height of notices and controls. The
  strip is to the right, showing the first image and, when there are multiple
  items, a partial next-item preview. Where applicable, the Previous/Next pair is
  below and horizontally centered against the entire
  project block, including both title and media, not just the right-hand region.
  Narrow or enlarged-text layouts may reflow vertically without clipping or loss
  of reading order; controls remain centered below the project's content.
- **Shifted-strip composition:** Any item after the first is selected. The title
  is smaller and higher, above the strip. On the first Next activation, the first
  media item shifts left into the space beneath the compact title and remains
  visible while the second becomes more visible. The strip may span the space
  released by the title, but individual items do not grow to fill it. Subsequent
  navigation follows the configured sequence with the same title state and
  constant-size translation rule. A further next-item glimpse is optional where
  space permits. Narrow layouts preserve readable title-before-media flow and
  distinct title-size states without forcing desktop columns.
- **Constant inline item size:** At an unchanged viewport and text setting, each
  item's displayed width and height remain unchanged through arrow navigation,
  including the transition from initial to shifted-strip composition and back.
  A larger visible portion caused by translation or a wider strip viewing area
  is not item enlargement. Viewport or text-setting changes may adapt sizes;
  selected-item scaling, zooming or growth on arrow activation is prohibited.
- **Selected position:** The current item in the configured sequence, exposed in
  the gallery's position announcement and advanced by Previous/Next. Selection
  does not mean that all other media must disappear; neighboring previews remain
  part of the strip. Activating a visible preview opens that item without changing
  the gallery's selected position.
- **Sample materials:** The owner's supplied blue cybersecurity shield/padlock
  illustration and supplied MP4 screen recording. These are test data, not
  verified project screenshots, achievements or evidence of technologies used.
- **Static video preview:** A still frame from the corresponding video showing
  recognizable recorded content, not a plain-color/text-only placeholder or an
  unrelated image. It remains a video enlargement trigger, not an inline player.
  No particular timestamp is required by this amendment.
- **Enlarged viewer:** A single selected image or video presented over the page,
  with the entire underlying viewport, including shared chrome, visible through
  a translucent gray blurred surround, like a glass display. The media and its
  controls remain clear. This is not an opaque black panel or a bordered
  full-viewport content enclosure with a separate title/close toolbar.
- **Configured live destination:** An owner-verified public project URL; absent
  destinations do not imply an unavailable button or invented address.

## Functional requirements

- **RF-1:** WHEN a visitor opens Projects directly or through existing navigation,
  THE SYSTEM SHALL display Expenses & Savings, Gely’s Event Styling and Living
  Gallery in their current order as vertically stacked projects, each with its
  own gallery and existing truthful localized content. THE SYSTEM SHALL NOT
  replace the project list with a single gallery that switches between projects.
- **RF-2:** WHEN the prototype initially displays each project, THE SYSTEM SHALL
  select its first sample item and show its initial composition, including the
  vertically centered left-hand heading, first image with a partial next-item
  preview, and navigation pair below and centered across the whole project block
  under the desktop conditions defined above. THE SYSTEM SHALL
  present the supplied sample image first and supplied sample video second for
  each of the three projects, clearly identifying both as demonstration material
  rather than actual project media, including in enlargement. THE SYSTEM SHALL
  keep sample explanations legible and unobtrusive outside or adjacent to the
  media, not covering it or forming a large opaque viewer notice bar.
- **RF-3:** WHEN a visitor activates a project's Previous or Next control,
  THE SYSTEM SHALL select the preceding or following item in that project's
  ordered gallery, wrapping from last to first and first to last. THE SYSTEM SHALL
  retain all other projects' current selections and compositions, keep focus on
  the activated control and expose the selected position and total for that
  project. THE SYSTEM SHALL advance only following manual activation, never
  automatically or because of scrolling, hover or elapsed time. THE SYSTEM SHALL
  keep the navigation pair below and centered across the entire project block in
  both compositions and SHALL NOT enlarge media when an arrow is activated.
- **RF-4:** WHEN a project's selected item changes to any item after the first,
  THE SYSTEM SHALL show its shifted-strip composition by raising and reducing the
  title and translating the media strip, retaining each item's inline display
  dimensions. On the first Next activation, THE SYSTEM SHALL move the first item
  left beneath the compact title, retaining a visible portion of it and exposing
  more of the second item than the initial glimpse; a further next-item glimpse
  MAY appear when space permits. WHEN navigation in either
  direction selects the first item again, THE SYSTEM SHALL restore its entire
  initial composition, including the original title size and placement and the
  original strip position and first-image/next-item preview. This rule SHALL depend
  on the current selection, not on whether the visitor has advanced before; it
  SHALL NOT reset other projects.
- **RF-5:** WHEN a visitor activates a displayed image or video preview by click,
  tap or keyboard, THE SYSTEM SHALL open only that activated item in the enlarged
  viewer, retaining its project identity and sample designation. THE SYSTEM SHALL
  fit the full image or video within the available viewer area without distortion
  or cropping, keeping viewer controls reachable within the viewport. THE SYSTEM
  SHALL reserve enlargement for direct media activation, not arrow navigation.
  THE SYSTEM SHALL display a simple visual X at the upper-right corner of the
  opened media, not at the viewport corner or in a separate toolbar, with a
  localized accessible close name and a target of at least 44 × 44 CSS pixels.
  Project identity SHALL remain available in the localized accessible modal name;
  no separate visible title bar, app-authored fullscreen action or labelled close
  bar is required or authorized by this revision. Sample designation SHALL follow
  RF-2.
- **RF-6:** WHILE the enlarged viewer is open, THE SYSTEM SHALL surround the clear
  media with a translucent gray blurred view of all underlying page content across
  the viewport, leaving the page visibly recognizable through the surround in both
  themes rather than replacing it with an opaque black surface. THE SYSTEM SHALL
  NOT enclose the experience in a bordered full-viewport panel or opaque title or
  notice bars. THE SYSTEM SHALL prevent background interaction
  and page scrolling, expose a labelled modal interaction and keep keyboard focus
  within it. THE SYSTEM SHALL display at most one enlarged viewer at a time and
  SHALL NOT blur or gray its selected media or controls with the backdrop.
- **RF-7:** WHEN the visitor activates Close, presses Escape or clicks/taps the
  backdrop outside the viewer content, THE SYSTEM SHALL close the viewer, remove
  background blocking and restore focus to the originating media trigger. THE
  SYSTEM SHALL preserve each project's selection and composition and the page's
  prior scroll position. Interaction with the media or its controls SHALL NOT be
  treated as an outside click.
- **RF-8:** WHILE video is shown within a project's inline gallery, THE SYSTEM
  SHALL show a static video preview from that video's actual content, including
  the supplied recording reused by all three prototype projects, rather than only
  a plain green surface and text. THE SYSTEM SHALL preserve the existing organic
  contour, constant inline item dimensions and strip composition, and retain
  legible localized video identification and enlargement cues. THE SYSTEM SHALL
  keep the preview still, offer the existing enlargement action and SHALL NOT
  start playback or audio or instantiate an inline video player. WHEN video is enlarged,
  THE SYSTEM SHALL use the same gray translucent blurred surround and media-corner
  X as for images and offer browser-native video controls in a nonplaying state,
  using the browser-provided control semantics,
  keyboard behavior, language and sizes in the video's usual control region,
  without a separate custom playback toolbar, and start playback only when the
  visitor chooses Play. WHEN the viewer closes or the visitor leaves Projects, THE SYSTEM
  SHALL stop playback and audio; reopening SHALL NOT resume playback automatically.
- **RF-9:** WHEN the owner adds or reorders a project or its image/video sequence
  through the project configuration, THE SYSTEM SHALL apply the same per-project
  gallery rules without requiring a separate project-specific design or duplicate
  page copy. THE SYSTEM SHALL allow ordered mixtures of images and videos and
  retain a single authoritative project identity and translated content.
- **RF-10:** WHEN a project has a configured live destination, THE SYSTEM SHALL
  display a meaningful localized link to that destination. WHILE no destination is
  configured, THE SYSTEM SHALL omit that action entirely, without empty links,
  placeholder addresses, fragment-only links or disabled pretend buttons. Initially
  none of the three projects has a verified live destination.
- **RF-11:** IF a project has no media, THEN THE SYSTEM SHALL retain its title and
  content with a localized honest no-media explanation and no gallery or enlarge
  actions. IF it has exactly one item, THEN THE SYSTEM SHALL retain the initial
  composition, permit enlargement of available media and omit navigation arrows.
  IF an item fails to load or its video cannot play, THEN THE SYSTEM SHALL show
  a localized unavailable explanation rather than substitute invented project
  imagery, retain applicable navigation to other items and keep viewer closure
  available.
- **RF-12:** WHEN Projects is viewed in English or Spanish, THE SYSTEM SHALL
  provide sample explanations, media alternatives, gallery positions, app-authored
  action names, viewer identity and failure states in that language, preserving the
  same project identities and interaction rules. WHEN the visitor switches language, THE SYSTEM
  SHALL retain Projects as the equivalent logical destination using existing
  navigation behavior.

## Non-functional requirements

- **RNF-1 — Responsive readability:** Verify both languages and themes at 320,
  390, 768, 1024 and 1440 CSS-pixel widths, normal/150% text and browser-default
  16/24-pixel text settings. New Projects content and the viewer must not introduce
  horizontal document overflow, clipped or overlapping essential text, unreachable
  controls or obscured focus. Wrapping and increased height are acceptable; text
  enlargement must not be defeated. The viewer must fit the available viewport
  height, including after resizing or orientation changes.
- **RNF-2 — Accessibility:** Preserve meaningful heading and reading order. New
  app-authored actions, including gallery navigation, media opening, viewer closure
  and live links, must be keyboard-operable, visibly focused, meaningfully labelled
  in the active English or Spanish language and at least 44 × 44 CSS pixels.
  Browser-native video controls retain browser-provided semantics, keyboard behavior,
  language and sizes; the app does not guarantee their localization to its active
  language or 44 × 44 CSS-pixel targets. Verify native Play/Pause, volume and progress
  controls and their keyboard operation as available in the tested browser, stating
  unavailable coverage; this does not require a custom video player.
  Gallery names must distinguish
  projects, and manual selection changes must be announced without moving focus.
  Normal text must meet 4.5:1 contrast, large text 3:1, and meaningful control/focus
  graphics 3:1 against adjacent colors. Image alternatives must describe the sample
  honestly; video previews must identify their type and enlargement action. No
  essential explanation may rely only on color, hover or motion.
- **RNF-3 — Visual identity:** Preserve the site's existing typography, light and
  dark palettes, content alignment and organic, softly asymmetric Art Nouveau
  identity. Inline image and video previews must have the same organic contour
  silhouette as the current Home project-carousel media, not a rectangular image
  inside a loosely rounded card. Compare both at equivalent proportions during
  visual review; using Home as a contour reference does not authorize changing it
  or copying its continuous motion. Make the upward title transformation and
  constant-size strip translation the defining interaction. Owner review must
  confirm initial heading/media midpoint alignment, arrows centered below the
  whole project, visible neighboring media, unchanged item dimensions on navigation,
  matching contours and unobscured glass-like enlargement in both themes. Organic
  inline framing does not authorize cropping or distorting the full enlarged media.
- **RNF-4 — Motion:** With reduced motion enabled, retain all selection, layout,
  enlargement and playback rules without animated title movement or media
  transitions. No essential action or information may depend on animation. No
  automatic gallery advancement, automatic video playback, scroll-driven title
  transformation or forced scroll-to-project behavior is authorized.
- **RNF-5 — Truthfulness and privacy:** Do not invent project descriptions,
  technologies, results, screenshots, URLs or personal details. Keep sample status
  explicit. Inspect the supplied recording for private or sensitive material
  before making it publicly accessible; if any is suspected, stop and obtain an
  owner decision without copying the sensitive content into documentation. Asset
  presence and owner supply do not establish a completed privacy review or public
  distribution clearance. No external media service or upload is required.
- **RNF-6 — Preservation and bounded scope:** Leave Home, its carousel content,
  imagery and behavior, About, shared header/footer, site frame, palettes, icons,
  navigation, themes and localized missing-page behavior unchanged. In particular,
  sample galleries must not populate Home's project previews. Preserve supplied
  source media without transcoding or destructive alteration. No new public route,
  dependency or service is authorized by this specification.

## Edge cases

- Navigating one project's gallery must leave the other two unchanged, including
  when wrapping. Test both directions returning to the first item; for more than
  two configured items every later item uses the shifted-strip composition.
  Reset includes title size and placement, strip offset and initial next-item
  glimpse, not merely the selected index.
- The supplied two-item sequence must already demonstrate first-image/next-video
  preview and leftward translation without item growth. A further glimpse is
  optional, may follow the configured cyclic sequence and must not imply a third
  supplied asset or new project evidence. Added-item fixtures must exercise later
  selections without turning the strip into a single enlarged replacement image.
- Closing enlargement while a later item is selected must retain its compact
  title and shifted-strip position. Closing on the first must retain the initial
  composition. Opening any visible media preview must not change the underlying
  gallery selection or strip position. Reopening video requires a new explicit
  Play action.
- Resizing either composition or an open viewer must preserve the selected item
  and keep the full enlarged media and controls usable; it must not start video.
- The static video frame must appear both in the initial neighboring glimpse and
  when the video becomes selected, without changing item dimensions or strip
  placement. Loading it must not start playback or audio. If that preview is
  unavailable, show RF-11's localized failure explanation, retain gallery
  navigation and allow opening the corresponding video; preview failure alone
  must not mark the video unplayable. An actual playback failure still follows
  RF-11. Keep localized video/enlargement cues legible in both themes without
  replacing the frame with a text-only surface or implying inline Play.
- Empty project lists retain a localized honest empty state. Empty, single-item,
  mixed-media and failed-media galleries follow RF-11 without fake project facts.
- Longer titles, Spanish labels and enlarged text may reflow vertically, including
  on desktop; the distinction between initial and compact title sizes remains.
  Heading centering is assessed against media, not category/description/sample
  copy or the arrow row. Retain existing truthful copy without adding descriptions
  to fill space. On narrow reflowed layouts, preserve nonoverlapping media and a
  next-item glimpse where navigation applies, without document overflow.
- Bottom-centered arrows must retain visible keyboard focus when the title and
  strip change state, without forced page scrolling. A small visual X must retain
  its 44 × 44 CSS-pixel target, contrast and focus indicator, stay anchored to the
  actual enlarged media after resizing, and not hide essential media or native
  video controls. Sample explanations must remain legible without an opaque bar
  or text covering the media. Media/control gestures or drags ending outside are
  not true backdrop activation.
- The existing shared-header overflow at 320px with native24/150% text is a
  documented pre-existing exception, not permission for new Projects/viewer
  overflow and not authorization to repair shared chrome. Evidence must distinguish
  inherited issues from regressions rather than claim the full site is overflow-free.

## Out of scope

- Real project-media integration or presenting these samples as final evidence.
- Writing case studies, adding project detail routes or inventing project facts.
- Changes to Home's carousel or inserting playback into its repeated content.
- Viewer-internal previous/next navigation, zoom/pan tools, downloads, editing,
  custom video controls, autoplay, swipe-specific gestures or a gesture framework.
- Enlarging or scaling inline media on arrow navigation; opaque black enlargement
  panels, full-viewport enclosing borders, separate viewer title/close toolbars
  and app-authored fullscreen controls. Browser-native video controls remain in scope.
- New biographical/contact content, global visual redesign, unrelated focus or
  locale query/fragment repairs, dependency upgrades or documentation cleanup.
- Broader Projects design refinement beyond the static video preview and its
  necessary legible localized cues; the current composition remains unchanged.
- Cropping, transcoding or redacting the supplied source media without separate
  authorization. The proposed static frame may be derived from the supplied video
  without altering or replacing its original bytes, including audio; this is not
  authorization to modify the recording. Convenient asset renaming is authorized in principle but its
  concrete naming and references belong to later technical planning.
- Commit, push, deployment or publication. Future real materials or production
  publication require a separately approved scope/authorization.

## Completion criteria

- Explicit approval of this complete revision-2 specification is recorded before
  revising planning/tasks; revised plan and tasks then receive separate joint
  approval before implementation. Historical approvals do not satisfy these gates.
- The static-video-preview amendment receives explicit owner requirements approval
  before its planning/tasks update, followed by separate joint approval of those
  updates before implementation; prior revision-2 approvals do not cover it.
- All RF/RNF are checked with the project's required validations and fresh browser
  evidence for the specified locale/theme/width/text conditions, both gallery
  compositions, independent navigation, viewer focus/closure and exclusive enlarged
  video playback. Temporary additional-project or media fixtures are restored.
- Fresh visual and geometry evidence distinguishes strip translation from item
  enlargement at fixed viewport/text settings, verifies initial heading/media
  centering, bottom-centered arrows, both-direction complete reset, Home-matching
  inline contours, gray translucent blurred surroundings and media-corner X.
  Revision-1 technical passes remain historical and do not prove this revision.
- Fresh evidence verifies the inline still against the supplied recording in
  initial and shifted compositions, with readable English/Spanish video and
  enlargement cues in both themes, unchanged geometry, no inline playback/audio,
  independent preview-failure behavior and unchanged manual native viewer playback.
  Prior R1–R9 evidence remains valid for unaffected behavior, not proof of this addition.
- Independent review verifies requirements and preservation, with check results,
  unavailable coverage and pre-existing unrelated issues stated explicitly.
- The owner separately accepts the final interactive prototype's visuals and
  behavior. Spec approval, successful tests and independent QA do not replace this
  visual gate or authorize publication.
- No blocking requirement questions or media privacy concerns remain for the
  accepted prototype; final project evidence remains explicitly outside its scope.

## Open questions and approval decisions

- Revision 2 completed QA clarification with no blockers and received explicit
  owner full-spec approval (**“La apruebo”**, 2026-10-16). No blocking product question is identified;
  exact spacing and sizing remain subject to the defined behavior and final visual
   acceptance. Separate joint revised plan/tasks approval is now recorded with
   **“Las apruebo”** (2026-10-16), authorizing ordered R1–R10 implementation, not
   final owner acceptance or publication.
- Baseline revision-2 plan/tasks were approved after requirements approval. Original T1–T8
  remain historically completed; original T9/T10 remain superseded, not completed.
  R1–R9 completed the approved revision-2 baseline. A1–A5 subsequently validated
  the amendment; original R10 is now complete by separate final acceptance and
  independent approval, not by reusing baseline completions as amendment proof.
- The owner explicitly approved the static-video-preview amendment with
  **“La apruebo”** (coordinator-supplied record; no approval date or time supplied).
  Separate joint approval of its revised plan/tasks followed with **“Lo apruebo”**
  before implementation, as recorded in the A1–A5 validation history.
  It requires a recognizable actual frame, not a specific timestamp;
  frame selection remains subject to final visual acceptance. No blocking product
  clarification is identified. Broader redesign remains outside this amendment;
  no requirements, planning or implementation approval for broader redesign is inferred.
- The sample image and MP4 are available. The owner explicitly confirmed that the
  test video contains no private information and authorized continuing with its
  original audio based on his confirmation, not agent listening. Prior metadata,
  decoding, sampled visual and browser playback evidence retains its documented
  limits; no new privacy cycle or agent listening claim is introduced. Any newly
  suspected sensitive material requires an owner decision under RNF-5; no
  publication is authorized.
- Real project images/videos and live destinations are not supplied or verified;
  they are unnecessary for the explicitly labelled prototype. Their later inclusion
  does not bypass the requirements-change and publication approval gates.
