# UI Components and Assets

Use this guide before adding a new UI component or asset. Prefer the components and assets already listed here, and extend them with props when possible.

## Styling and design tokens

- Global styles and design tokens live in [`app/globals.css`](app/globals.css).
- Use existing `--color-*`, `--font-*`, `--button-*`, and `--input-field-*` variables rather than adding one-off colors or dimensions.
- Component styles also live in `globals.css`. Their classes use prefixes to avoid collisions: `editorial-header-`, `ui-card-`, `home-page-`, `cards-preview-`, `search-page-`, `journal-finder-`, and `submit-manuscript-`.
- The homepage also uses `open-knowledge-` for the research role section and `knowledge-commons-` for the research integrity benefits section.
- Add new component styles to `globals.css` and use a component-specific prefix.
- `app/layout.js` loads the global stylesheet and the shared Cardo, Hind, and Geist Mono fonts.

## Reusable components

### Find a Journal page

- The `/search` route renders `components/ui/JournalFinderPage.jsx` with the shared `Header`, `EditorialFooter`, `Button`, and `Card` components.
- The page also reuses `InputField` for the hero search field and keeps query, subject/alphabet filters, sorting, and result state in the existing page. Extend it when connecting live journal data rather than adding a duplicate search page.
- Its responsive styles are in `app/globals.css` under the `journal-finder-` prefix. Results reuse `/cards/journal-cover-desktop.png` and the Figma-specific SVG icons/mask under `public/journal-finder/`.

### Submit Manuscript page

- The `/submit-manuscript` route renders `components/ui/SubmitManuscriptPage.jsx` and reuses `Header`, `EditorialFooter`, `Card`, `Button`, and `InputField`.
- Its responsive styles are in `app/globals.css` under the `submit-manuscript-` prefix. Use `InputField` for form controls and extend this page when submission handling or backend validation is connected.

### Buttons

Import `Button` from `components/ui/Button.jsx` for standard actions and links:

```jsx
import Button from "@/components/ui/Button";

<Button variant="primary" size="md" href="/journals">
  Browse journals
</Button>
```

Supported `variant` values: `primary`, `secondary`, `text`, `danger`, `outline`, `ghost`, `manuscript-primary`, `manuscript-blue`, `manuscript-outline`, and `manuscript-disabled`.

Supported `size` values: `xs`, `sm`, `md`, `lg`, `card`, and `manuscript`. Other props include `shape="pill"`, `startIcon`, `endIcon`, `icon`, `iconOnly`, `fullWidth`, `loading`, `disabled`, `href`, and the usual button/link props. `href` renders a Next.js link; without `href`, it renders a button.

For the manuscript button’s four visual states, use the named `SubmitManuscriptButton` export:

```jsx
import { SubmitManuscriptButton } from "@/components/ui/Button";

<SubmitManuscriptButton state="outline" href="/submit-manuscript" />
```

Its `state` values are `default`, `blue`, `outline`, and `disabled`.

### Editorial header

Import `Header` (or its alias `EditorialHeader`) from `components/ui/Header.jsx`:

```jsx
import Header from "@/components/ui/Header";

<Header />
<Header variant="Variant2" searchQuery="robotics" />
```

The default variant shows navigation. The Search link opens the inline search row. `variant="Variant2"` opens the search row immediately and submits to the search page.

Useful props:

- `items`: navigation entries shaped like `{ label, href }`, with an optional `menu: [{ label, href }]` for dropdowns.
- `loginHref`, `submitHref`, `searchHref`, and `logoHref`: destination URLs.
- `searchQuery`: initial query value for the search row.
- `labels`: button labels, for example `{ login: "Log in", submit: "Submit Manuscript" }`.
- `className`: an extra class for the header root.

`ReseaproJournalsEditorialHeaderVariant2` is also exported as a convenience wrapper for Variant2.

Use `activeHref` to highlight the current navigation destination, for example `<Header activeHref="/about" />`.

### Cards

Card components are named exports from `components/ui/Card.jsx`. Import the needed card instead of building another wrapper with the same layout:

```jsx
import { JournalCard, RoleCard } from "@/components/ui/Card";

<JournalCard title="Journal of Example Research" issn="1234-5678" href="/journals/example" />
<RoleCard role="reviewer" href="/services/reviewers" />
```

Available exports:

| Component | Use and main props |
| --- | --- |
| `Card` | Base container. `variant="outlined"` (default) or `variant="shadow"`; supports `as`, `className`, children, and other element props. |
| `JournalCard` | Journal cover, ISSN, review time, indexing, and action. Supports `title`, `issn`, `averageReviewTime`, `indexedIn`, `coverImage`, `desktopCoverImage`, `mobileCoverImage`, `coverAlt`, `href`, and `onClick`. |
| `RoleCard` | Author, editor, or reviewer service card. Supports `role`, `title`, `mobileTitle`, `description`, `actionLabel`, `href`, `onClick`, `iconSrc`, and `actionIconSrc`. |
| `ResearchRoleCard` | Solid or soft promotional card. Supports `role`, `tone="solid"` or `"soft"`, `title`, `titleAs` (`h2` or `h3`), `description`, `actionLabel`, `actionIconSrc`, `href`, and `onClick`. |
| `TestimonialCard` | Quote with author and rating. Supports `quote`, `authorName`, `authorHandle`, `authorImage`, and `authorImageAlt`. |
| `FormCard` | Form section with heading and content. Supports `eyebrow`, `title`, `description`, children, and section props. |
| `CollaborationCard` | Address/contact card with direction action. Supports `title`, `address`, `actionLabel`, `href`, `onClick`, and optional `iconSrc`, `iconMobileSrc`, and `arrowIconSrc`. |
| `AccordionItem` | Reusable animated accordion row for questions or other section content. Supports `title` (or `question`), children, `defaultOpen`, controlled `open`/`onOpenChange`, and `className`. |
| `FAQCard` | FAQ-friendly wrapper around `AccordionItem`. Supports `question`, children, and `defaultOpen` (defaults to `true`). |

Use `AccordionItem` in any section that needs an expanding row:

```jsx
import { AccordionItem } from "@/components/ui/Card";

<AccordionItem title="How does peer review work?">
  <p>Experts review the manuscript and provide feedback to support research quality.</p>
</AccordionItem>
```

The homepage-only `OpenKnowledgeInvitation` section includes subject-area links and composes the reusable `Card` and `ResearchRoleCard` components. The `PublishingProcessPreview` section reuses the shared `Card` and `Button` components while the separate `PublishingProcessPage` remains the full process detail route. `WhyReseaproKnowledgeCommons` composes the reusable `Card` and `Button` components. Keep these sections' content and responsive styles in their existing files and the matching `open-knowledge-`, `publishing-preview-`, and `knowledge-commons-` styles in `app/globals.css`.

The homepage uses the Figma subject-area SVGs and the two process-preview photographs from `public/home-feature-assets/`; additional stages reuse the existing `public/publishing-process/` imagery.

### About Us page

- Route: `/about` (`app/about/page.js`).
- `components/ui/AboutUsPage.jsx` composes the shared `Header`, `Button`, `Card`, `RoleCard`, and `EditorialFooter` components.
- The six benefit cards use the shared `Card` base with About page styling; the three audience cards use the shared `RoleCard`.
- The mobile layout follows the 390px iPhone 13/14 Figma frame and switches the benefit heading, process label, and first role title at the mobile breakpoint.
- About page styles stay in `app/globals.css` under the `about-page-` prefix and use global design tokens.

### Why Choose Us page

- Route: `/why-choose-us` (`app/why-choose-us/page.js`).
- `components/ui/WhyChooseUsPage.jsx` composes the shared `Header`, `Button`, `AccordionItem`, and `EditorialFooter` components. The homepage's `WhyReseaproKnowledgeCommons` section remains separate.
- Page styles use the `why-choose-us-` prefix in `app/globals.css`; feature photos and the row divider are in `public/why-choose-us/`.

### Terms and Conditions page

- Route: `/terms-and-conditions` (`app/terms-and-conditions/page.js`).
- `components/ui/TermsAndConditionsPage.jsx` composes the shared `Header` and `EditorialFooter`; its table of contents links to the 18 legal sections in the page.
- Page styles use the `terms-page-` prefix in `app/globals.css` and global design tokens.
- The Figma contents markers and section divider are stored in `public/terms/`.

### Contact Us page

- Route: `/contact` (`app/contact/page.js`).
- `components/ui/ContactUsPage.jsx` composes the shared `Header`, `Card`, `FormCard`, `CollaborationCard`, `InputField`, `Button`, and `EditorialFooter` components for desktop and mobile.
- Contact page styles use the `contact-page-` prefix in `app/globals.css` and the existing global design tokens.
- Figma assets are stored in `public/contact/`: the conversation photo, office map image, and desktop/mobile email, phone, address, and map-address SVGs.

The `TrustedByResearchers` homepage section composes `TestimonialCard` from this library. It is implemented in `components/ui/TrustedByResearchers.jsx`; pass `ratingIcons`, `ratingImage`, `rating`, avatar dimensions, and `dividerImage` to match testimonial variants without duplicating the card markup.

The home page footer uses `EditorialFooter` from `components/ui/EditorialFooter.jsx`. It composes the shared `Button` for the newsletter call to action, uses responsive global `.editorial-footer-*` styles, and includes the Figma content for information links, author/reviewer/editor resources, contact details, social links, office address, and legal links.

All card components accept `className` where applicable. The role values are `author`, `editor`, and `reviewer`; plural forms are also normalized.

### Input and search fields

`InputField` is exported from `components/InputField.js`; `SearchField` is exported from `components/SearchField.js`. Both use the shared global field styles and tokens.

```jsx
import InputField from "@/components/InputField";
import SearchField from "@/components/SearchField";

<InputField name="email" type="email" placeholder="Email address" />
<InputField variant="select" name="topic" options={topics} />
<InputField variant="date" name="date" />
<InputField variant="phone" name="phone" />
<InputField variant="textarea" name="message" />

<form role="search" action="/search" method="get">
  <SearchField name="q" placeholder="Search journals" aria-label="Search journals" />
</form>
```

`InputField` supports `text` (default), `select`, `date`, `phone`, `textarea`, and `file` variants. It accepts standard input props plus `options` or `children` for a select, and `countryOptions`, `countryValue`, `defaultCountryValue`, and `onCountryChange` for a phone field. The file variant accepts `fileName` to display a selected file and uses the shared upload icon. `SearchField` accepts standard search-input props and renders a submit button, so place it inside a form.

`InputFieldExample` in `components/InputFieldExample.js` is a standalone usage sample. It is intentionally not rendered by the home page; use individual fields in the page or form that needs them.

## Existing routes

- `/` renders the editorial header, journal hero, open knowledge role cards, Why Reseapro knowledge commons benefits, testimonials, and the editorial footer.
- `/about` renders the About Us page with the shared header, benefit and role cards, mission and vision, publishing stages, and editorial footer.
- `/contact` renders the Contact Us page with an enquiry form, contact methods, office map, and editorial footer.
- `/publishing-process` renders the responsive publishing workflow, five detailed process steps, and editorial footer.
- `/search` renders the header in Variant2 and accepts a `q` query parameter. A journal catalogue is not connected yet.
- `/cards-preview` is a gallery of the reusable card families. Refer to this page before creating another card design.

## Asset catalog

Use these assets from their existing paths. In JSX, public assets are referenced from the site root, for example `src="/cards/role-author-card.svg"`.

### `public/header/`

| Asset group | Files and purpose |
| --- | --- |
| Brand | `logo-mark.svg`, `logo-word-top.svg`, `logo-word-bottom.svg`; mobile versions use the `mobile-` prefix. |
| Header actions | `login-user.svg`, `arrow-up-right.svg`; mobile versions are `mobile-user.svg` and `mobile-arrow.svg`. |
| Navigation | `chevron-down.svg` and `mobile-chevron.svg` are used for dropdowns. `search.svg` and `mobile-search.svg` are also available in the folder; the current header draws its Search icon inline so it can inherit the hover text color. |
| Search variant | `variant2-search.svg`, `variant2-advance-search.svg`, `search-close.svg`. |

### `public/testimonials/`

| Asset group | Purpose |
| --- | --- |
| `author-one.png`, `author-two.png` | Figma testimonial portraits. |
| `rating-one-star-*.svg`, `rating-two-star-*.svg`, `rating-three.svg` | Exact Figma star ratings for the three testimonial cards. |
| `divider-primary.svg`, `divider-secondary.svg` | Testimonial card dividers. |
| `pagination-dots.svg` | Figma testimonial pagination indicator. |

### `public/why-choose-us/`

| Asset | Purpose |
| --- | --- |
| `peer-review.svg` | Peer review benefit card icon. |
| `open-access.svg` | Open access benefit card icon. |
| `doi-assignment.svg` | DOI assignment benefit card icon. |
| `research-visibility.svg` | Research visibility benefit card icon. |
| `ethical-publishing.svg` | Ethical publishing benefit card icon. |
| `hero-integrity.png`, `research-commitment.png`, `research-approach.png` | Hero, commitment, and approach section photos. |
| `peer-review-research.png`, `open-access-research.png`, `doi-assignment-research.png`, `research-visibility-photo.png`, `ethical-publishing-photo.png` | Figma photos for the five research integrity benefit sections. |
| `section-divider.svg` | Figma divider between the benefit sections. |
| Mobile menu | `mobile-close.svg`. |

### `public/cards/`

- Journal artwork: `journal-cover-desktop.png`, `journal-cover-mobile.png`, and `journal-cover-mask.svg`.
- Journal details: `journal-clock-desktop.svg`, `journal-clock-mobile.svg`, `journal-index-desktop.svg`, `journal-index-mobile.svg`, `journal-arrow-desktop.svg`, and `journal-arrow-mobile.svg`.
- Author role: `role-author-card.svg`, `role-author-card-arrow.svg`, `role-author-solid.svg`, `role-author-solid-arrow.svg`, `role-author-soft.svg`, and `role-author-soft-arrow.svg`.
- Editor role: the matching six `role-editor-*` assets.
- Reviewer role: the matching six `role-reviewer-*` assets.

### `public/hero/`

- `wave-artwork.png` and `wave-mask.png` provide the journal hero's layered Figma background.
- `open-access.svg` is the publishing badge icon; `upload.svg` is used by the `InputField` file variant.
- Testimonial: `testimonial-avatar.png` and `testimonial-rating.svg`.
- Collaboration/contact: `contact-location.svg` and `contact-arrow.svg`.
- FAQ: `faq-toggle.svg`.

### `public/footer/`

- `footer-logo-mark.svg`, `footer-logo-word-top.svg`, and `footer-logo-word-bottom.svg` compose the white footer logo.
- `footer-linkedin.svg`, `footer-facebook.svg`, `footer-instagram.svg`, and `footer-x.svg` are the Figma social icons.
- `footer-subscribe-arrow.svg` is the newsletter button arrow.
- `footer-divider-top.png` and `footer-divider-bottom.svg` are the two Figma separators.

### `public/about/`

- `hero.png`, `community-research.png`, `mission-vision.png`, and `community-library.png` are the four Figma photos used on the About Us page.
- `check.svg` is used by the trust checklist.
- `benefit-*.svg`, `mission.svg`, `vision.svg`, and `role-*.svg` provide the section icons.

### `public/publishing-process/`

- `hero-manuscript.png` and `mobile-hero.png` are the desktop and mobile hero images.
- `choose-journal.png` and `mobile-choose-journal.png` are the desktop and mobile image for step 1. The other steps use `prepare-manuscript.png`, `submit-manuscript.png`, `peer-review.png`, and `publication.png` at both sizes.
- `choose.svg`, `prepare.svg`, `submit.svg`, `peer-review.svg`, and `publication-icon.svg` are the five workflow stage icons; `check.svg` is used for the detail checklists.
- `components/ui/PublishingProcessPage.jsx` composes the shared `Header`, `Card`, `Button`, and `EditorialFooter`; all styles use the `publishing-process-` prefix in `app/globals.css`.

### `public/icons/`

The four `submit-manuscript-arrow-*.svg` assets (`default`, `blue`, `disabled`, and `outline`) are used by `SubmitManuscriptButton` for its state-specific arrows.

`submit-manuscript-arrow-outline.svg` is also reused by the Publishing Process outlined actions. The remaining root-level SVGs (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, and `window.svg`) are starter assets; reuse them only if their visuals match the requested design.

## Before adding a component or asset

1. Search this guide and `components/ui/` for an existing component that fits.
2. Extend the existing component with a prop or variant when the structure is the same.
3. Reuse the matching asset from `public/` instead of recreating an icon or logo.
4. Put new styles and reusable design values in `app/globals.css`, using the component’s prefix and existing tokens.
5. Add the new component or asset to this guide so the next developer can find it.
