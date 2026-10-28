# UI Components and Assets

Use this guide before adding a new UI component or asset. Prefer the components and assets already listed here, and extend them with props when possible.

## Styling and design tokens

- Global styles and design tokens live in [`app/globals.css`](app/globals.css).
- Use existing `--color-*`, `--font-*`, `--button-*`, and `--input-field-*` variables rather than adding one-off colors or dimensions.
- Component styles also live in `globals.css`. Their classes use prefixes to avoid collisions: `editorial-header-`, `ui-card-`, `home-page-`, `cards-preview-`, and `search-page-`.
- Add new component styles to `globals.css` and use a component-specific prefix. There are currently no `.module.css` files.
- `app/layout.js` loads the global stylesheet and the shared Cardo, Hind, and Geist Mono fonts.

## Reusable components

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
| `RoleCard` | Author, editor, or reviewer service card. Supports `role`, `title`, `description`, `actionLabel`, `href`, and `onClick`. |
| `ResearchRoleCard` | Solid or soft promotional card. Supports `role`, `tone="solid"` or `"soft"`, `title`, `description`, `actionLabel`, `href`, and `onClick`. |
| `TestimonialCard` | Quote with author and rating. Supports `quote`, `authorName`, `authorHandle`, `authorImage`, and `authorImageAlt`. |
| `FormCard` | Form section with heading and content. Supports `title`, `description`, children, and section props. |
| `CollaborationCard` | Address/contact card with direction action. Supports `title`, `address`, `actionLabel`, `href`, and `onClick`. |
| `FAQCard` | Expandable question and answer. Supports `question`, children, and `defaultOpen` (defaults to `true`). |

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

`InputField` supports `text` (default), `select`, `date`, `phone`, and `textarea` variants. It accepts standard input props plus `options` or `children` for a select, and `countryOptions`, `countryValue`, `defaultCountryValue`, and `onCountryChange` for a phone field. `SearchField` accepts standard search-input props and renders a submit button, so place it inside a form.

`InputFieldExample` in `components/InputFieldExample.js` is a standalone usage sample. It is intentionally not rendered by the home page; use individual fields in the page or form that needs them.

## Existing routes

- `/` renders the editorial header and an empty main content area.
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
| Mobile menu | `mobile-close.svg`. |

### `public/cards/`

- Journal artwork: `journal-cover-desktop.png`, `journal-cover-mobile.png`, and `journal-cover-mask.svg`.
- Journal details: `journal-clock-desktop.svg`, `journal-clock-mobile.svg`, `journal-index-desktop.svg`, `journal-index-mobile.svg`, `journal-arrow-desktop.svg`, and `journal-arrow-mobile.svg`.
- Author role: `role-author-card.svg`, `role-author-card-arrow.svg`, `role-author-solid.svg`, `role-author-solid-arrow.svg`, `role-author-soft.svg`, and `role-author-soft-arrow.svg`.
- Editor role: the matching six `role-editor-*` assets.
- Reviewer role: the matching six `role-reviewer-*` assets.
- Testimonial: `testimonial-avatar.png` and `testimonial-rating.svg`.
- Collaboration/contact: `contact-location.svg` and `contact-arrow.svg`.
- FAQ: `faq-toggle.svg`.

### `public/icons/`

The four `submit-manuscript-arrow-*.svg` assets (`default`, `blue`, `disabled`, and `outline`) are used by `SubmitManuscriptButton` for its state-specific arrows.

The remaining root-level SVGs (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, and `window.svg`) are starter assets; reuse them only if their visuals match the requested design.

## Before adding a component or asset

1. Search this guide and `components/ui/` for an existing component that fits.
2. Extend the existing component with a prop or variant when the structure is the same.
3. Reuse the matching asset from `public/` instead of recreating an icon or logo.
4. Put new styles and reusable design values in `app/globals.css`, using the component’s prefix and existing tokens.
5. Add the new component or asset to this guide so the next developer can find it.
