# i2c Landing Page (Technical Assignment)

Single-page marketing layout with a validated registration form. Built from the provided design assets and requirements.

## Stack

| Layer | Choice |
| --- | --- |
| UI | React 18 |
| Language | TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Linting | ESLint |

## Requirements

- Node.js 18 or newer
- npm (comes with Node)

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the URL printed in the terminal (typically [http://localhost:5173](http://localhost:5173)).

## Production build

```bash
npm run build
```

Output is written to the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Project layout

```text
src/
  components/     Page sections (header, hero, features, trusted brands, form, footer)
  constants/      Shared UI class names
  data/           Static copy and lists used by sections
  hooks/          Registration form state and submission
  lib/            Form validation and storage key
  types/          Shared TypeScript types
  assets/         Images, SVGs, and design asset map
```

## Behaviour notes

- Registration validates name, company, and email on blur and submit.
- After a successful submit, the form is replaced by a thank-you message using the saved name.
- Data is stored in `localStorage`; returning visitors in the same browser see the thank-you state again.
- The trusted-brands strip auto-advances; prev/next controls appear from the `md` breakpoint up.
