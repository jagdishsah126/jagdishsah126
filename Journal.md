# Journal

## 2026-11-07 — Web-Finder research

| Date | Step | File | Purpose | Added | Removed |
| --- | --- | --- | --- | --- | --- |
| 2026-11-07 | Web-Finder | `AgentDoc/Credit.md` | Research record: saai.pro stack, banna, swarm engine licences, user repos, templates, roadmap | ~+238 | ~-0 |
| 2026-11-07 | Full-ToDo | `AgentDoc/Roadmap.md` | Pre-approval execution plan and roadmap for Portfolio v2 | ~+322 | ~-0 |
| 2026-11-07 | Journal | `Journal.md` | Session log | ~+7 | ~-0 |

## 2026-11-07 — Build: cosmic metallic portfolio

| Date | Step | File | Purpose | Added | Removed |
| --- | --- | --- | --- | --- | --- |
| 2026-11-07 | Build | `package.json` | Pin next 15.5.27 / react 18.3.1; no download, node_modules reused from the existing site | ~+23 | ~-0 |
| 2026-11-07 | Build | `tsconfig.json` | TS config with `@/*` path alias | ~+21 | ~-0 |
| 2026-11-07 | Build | `next.config.ts` | Strict mode, no `X-Powered-By` | ~+8 | ~-0 |
| 2026-11-07 | Build | `.gitignore` | Exclude `.next`, `node_modules`, env files | ~+31 | ~-0 |
| 2026-11-07 | Build | `src/app/layout.tsx` | Metadata, JSON-LD, fonts, banna script plus 6s reveal failsafe | ~+111 | ~-0 |
| 2026-11-07 | Build | `src/app/page.tsx` | Section composition and footer | ~+34 | ~-0 |
| 2026-11-07 | Build | `src/app/globals.css` | Full design system, responsive rules, print and reduced-motion fallbacks | ~+1369 | ~-0 |
| 2026-11-07 | Build | `src/data/portfolio.ts` | Profile, stats, principles, 8 projects, filters | ~+220 | ~-0 |
| 2026-11-07 | Build | `src/components/CosmicCanvas.tsx` | Cached nebula backdrop plus drifting starfield, visibility-aware | ~+160 | ~-0 |
| 2026-11-07 | Build | `src/components/NavDock.tsx` | Floating pill navigation with intersection-based active state | ~+63 | ~-0 |
| 2026-11-07 | Build | `src/components/Hero.tsx` | Wordmark, metallic name, portrait, HUD cards | ~+132 | ~-0 |
| 2026-11-07 | Build | `src/components/About.tsx` | Origin story, motto, three principles | ~+59 | ~-0 |
| 2026-11-07 | Build | `src/components/Flagships.tsx` | Lead system plus layer explorer tabs and two cards | ~+163 | ~-0 |
| 2026-11-07 | Build | `src/components/Matrix.tsx` | Filterable bento grid of all eight systems | ~+84 | ~-0 |
| 2026-11-07 | Build | `src/components/Contact.tsx` | Email copy with clipboard fallback and toast | ~+111 | ~-0 |
| 2026-11-07 | Build | `src/components/Reveal.tsx` | IntersectionObserver fade-in wrapper | ~+55 | ~-0 |
| 2026-11-07 | Build | `public/media/*` | Hero portrait, 256 avatar, GitHub avatar | n/a | n/a |
| 2026-11-07 | Build | `public/vendor/banna.js`, `banna.LICENSE.txt` | MIT cursor build effect, vendored with licence | n/a | n/a |
| 2026-11-07 | QA fix | `src/app/globals.css` | Portrait halo replaces a frame that only showed through the fade mask; CTAs stack full width; role pill never wraps; mobile order puts the name before the portrait | ~+22 | ~-9 |
| 2026-11-07 | QA fix | `src/components/Hero.tsx` | Drop the dead portrait frame element | ~+0 | ~-1 |
| 2026-11-07 | QA fix | `src/data/portfolio.ts` | Trim role label so it fits one line | ~+1 | ~-1 |
| 2026-11-07 | QA fix | `src/app/layout.tsx` | Cap banna layers and wait, add reveal failsafe | ~+17 | ~-3 |
| 2026-11-07 | Polish | `src/app/layout.tsx` | Slow the build to `data-speed="0.85"`, drop the UI credit pill, failsafe to 7s | ~+13 | ~-15 |
| 2026-11-07 | Docs | `README.md` | Stack, scripts, structure, content editing, effect tuning, deploy notes | ~+131 | ~-0 |
| 2026-11-07 | Docs | `AgentDoc/Credit.md` | Section 10.1 records attribution as shipped and the single-file policy | ~+18 | ~-0 |

## 2026-11-07 — Publish to GitHub

Branch `Cursor-swarm` on `jagdishsah126/jagdishsah126`, 21 commits, AgentDoc kept local.

| Date | Step | File | Purpose | Added | Removed |
| --- | --- | --- | --- | --- | --- |
| 2026-11-07 | Publish | `.gitignore` | Ignore `/AgentDoc` so planning documents stay local | ~+3 | ~-0 |
| 2026-11-07 | Publish | `src/app/layout.tsx` | Canonical, OG and JSON-LD URLs point at `swarm.jagdishsah.com.np` | ~+1 | ~-1 |
| 2026-11-07 | Publish | `src/data/portfolio.ts` | Footer domain matches the live subdomain | ~+1 | ~-1 |
| 2026-11-07 | Publish | `README.md` | Live domain updated; dead AgentDoc link removed | ~+2 | ~-7 |
| 2026-11-07 | Publish | `Journal.md` | This record | ~+10 | ~-0 |
