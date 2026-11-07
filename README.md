# Jagdish Sah — Portfolio

Personal site for Jagdish Sah: computer engineering student at IOE WRC Pokhara,
NEPSE analyst, and builder of data-driven systems.

One page, five sections, no backend. The first load is rebuilt in front of the
visitor by a small crew of cursors.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, static) |
| UI | React 18 + TypeScript, no CSS framework |
| Styling | One global stylesheet (`src/app/globals.css`) |
| Backdrop | Custom canvas starfield with a pre-painted nebula |
| Type | Space Grotesk + JetBrains Mono, loaded from Google Fonts |

Build output is a single static route — no server logic, no database, no API
calls at runtime.

## Getting started

```bash
npm install     # dependencies are already present in this checkout
npm run dev     # http://localhost:3000
```

Other scripts:

```bash
npm run typecheck   # tsc --noEmit
npm run build       # production build
npm start           # serve the production build on :3000
```

> Do not run `npm run build` while `npm run dev` is running. Both write to
> `.next/`, and a build landing under a live server leaves it serving a stale
> asset manifest — the page then loads with no stylesheet.

## Sections

| Section | What it holds |
| --- | --- |
| Hero | Name, role, portrait, three capability cards, headline stats |
| About | Origin story, motto, three working principles |
| Systems | Flagship pipeline with a four-layer anatomy explorer, plus two product cards |
| Matrix | All eight projects, filterable by category |
| Contact | Email with copy-to-clipboard, social links |

## Project structure

```
src/
  app/
    layout.tsx      metadata, JSON-LD, fonts, build effect
    page.tsx        section composition and footer
    globals.css     the entire design system
  components/
    CosmicCanvas.tsx   starfield backdrop
    NavDock.tsx        floating navigation
    Hero.tsx           hero block
    About.tsx          profile block
    Flagships.tsx      flagship systems
    Matrix.tsx         filterable project grid
    Contact.tsx        contact card
    Reveal.tsx         scroll-in wrapper
  data/
    portfolio.ts    all copy, projects, stats, filters
public/
  media/            portrait and avatar
  vendor/           third-party script
```

## Editing content

Almost everything visible is data, not markup. `src/data/portfolio.ts` holds the
profile block, stats, principles, all eight projects and the filter groups.
Add a project by appending to `PROJECTS`; it appears in the Matrix grid and, if
it carries a category already in `FILTERS`, under that filter too.

Colour, spacing and type live as custom properties at the top of
`src/app/globals.css`:

```css
--gold: #d8b45a;      /* primary metal */
--silver: #c9d4e3;    /* secondary metal */
--blue-bright: #6ec6ff; /* electric accent */
--bg: #04060d;        /* deep space navy */
```

## The page-build effect

On first load a crew of cursors draws the page, then hands it over. It runs once
per browser session, and it steps aside under these conditions:

| Situation | Behaviour |
| --- | --- |
| `?nobanna` in the URL | skipped entirely |
| OS "reduce motion" enabled | skipped entirely |
| Already seen this session | skipped entirely |
| Build stalls or a tab is throttled | everything is revealed after 7s |

Tuning lives on the script tag in `src/app/layout.tsx`: `data-speed` (1 is the
library default, this site runs slower), `data-agents` (number of cursors),
`data-max-layers` (how many elements animate) and `data-max-wait` (seconds per
element before it is shown anyway).

## Accessibility and fallbacks

- Scroll reveals never hide content permanently: print styles and
  `prefers-reduced-motion` both force everything visible.
- The starfield pauses when the tab is hidden and paints one static frame for
  reduced-motion visitors.
- Navigation is a plain anchor list, the project filters are real buttons with
  `aria-pressed`, and the copy action announces its result to screen readers.

## Deployment

The output is static, so any host works. On Vercel, import the repository and
accept the defaults; `npm run build` is detected from `package.json`. The site
is also happy behind any Node host running `npm start`.

Content assumes the canonical domain `swarm.jagdishsah.com.np`; update `siteUrl`
in `src/app/layout.tsx` if that changes, since metadata and JSON-LD both read it.
