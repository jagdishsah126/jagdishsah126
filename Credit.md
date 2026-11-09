# Credit.md — Research Record

**Project:** Personal portfolio rebuild (working name: Portfolio v2)
**Date:** 2026-11-07
**Status:** Research only when written. **Shipped 2026-11-09** — see §13 for the post-ship renewal.

---

## 1. Purpose and research scope

**Question asked:** find the source code of `saai.pro`, understand how it is built, and find similar open-source work — plus evaluate `Rokhbin/banna` and the user's own repositories — then prepare a full plan and roadmap.

**Baseline reviewed:** no `AgentDoc/Requirement.md`, `Design.md`, or `Task.md` exists; the project folder `/home/jagdish/Desktop/Projects/Personal-Apps/Portfolio` is empty. Research therefore ran against the explicit request in chat, not against approved documents. This is a limitation, not an approval.

**Platforms searched:** GitHub (repos, raw files, contents API), the live sites `saai.pro` and `jagdishsah.com.np`, Chrome Web Store, general web search.

**Hard limits respected:** no clones, no installs, no archives, no paid services, no writes to any external service, no contact with any repository owner.

---

## 2. Search log

| Date | Platform | Query / target | Useful result |
| --- | --- | --- | --- |
| 2026-11-07 | Live site | `https://saai.pro/` + `style.css` + `app.js` + `swarm-init.js` + `swarm/swarm.js` | Full client-side source inspected |
| 2026-11-07 | GitHub API | `users/sahi-hub/repos` | No portfolio repo published |
| 2026-11-07 | Web search | `"saai.pro" Sahir Veerancheri portfolio github` | Owner identity, Instagram origin of the design |
| 2026-11-07 | Web search | `"swarm rebuild" chrome extension ... califa` | Upstream engine + original author |
| 2026-11-07 | GitHub API | `repos/DhvanilPatel/swarm-cursors`, `repos/califa/swarm-site` | No license on either |
| 2026-11-07 | GitHub API | `repos/Rokhbin/banna` + raw `banna.js`, `README.md` | MIT, 23 KB, single file |
| 2026-11-07 | GitHub API | `users/jagdishsah126/repos` (16), `DayaSah` (9), `jagdishsah` (16), `jagdish-sah` (5) | User's full repo landscape |
| 2026-11-07 | Live site | `https://jagdishsah.com.np` | Existing Next.js portfolio already live |
| 2026-11-07 | Web search | open-source self-building page / cursor-build alternatives | banna is the only permissive one found |
| 2026-11-07 | Web search | MIT portfolio templates, dark bento, glassmorphism | Several MIT templates recorded |

**Not searched:** GitLab, Codeberg, npm registry, Awwwards/FWA galleries, Dribbble. A search cannot prove absence.

---

## 3. Best matches and existing solutions

| Candidate | What it is | Match category |
| --- | --- | --- |
| `saai.pro` | The reference portfolio: static HTML/CSS/JS, Noir & Crimson op-art, bento grid, glass cards, HUD, cursor-swarm intro | **Reference only — proprietary** |
| `Rokhbin/banna` | MIT single-file library; cursors draw/type the page on load and scroll | **Potentially usable directly** |
| `DhvanilPatel/swarm-cursors` | Chrome extension + heavier engine that snapshots a live DOM | **Explicitly no-reuse** |
| `califa/swarm-site` | Original "website that builds itself" (70★) | **Explicitly no-reuse (no license)** |
| `jagdishsah126/jagdishsah126` | User's own GitHub profile hub, MIT | **Available — content source** |
| `jagdishsah.com.np` | User's live Next.js portfolio, MIT, 8-planet orbital canvas | **Available — content + baseline** |
| `diyoriko/portfolio-template` | Vanilla HTML/CSS/JS, MIT, GitHub Pages ready | **Reference / fallback** |
| `tim-hub/techtim-astro-bento-portfolio` | Astro + React + Tailwind + shadcn, MIT (code) | **Reference / fallback** |
| `meggnotec/grid` | Astro 6 + Tailwind 4 bento, MIT | **Reference / fallback** |
| `songshun1021/glass-portfolio` | Next.js + Tailwind liquid-glass, MIT, static export | **Reference / fallback** |
| `devportfoliotemplates/devportfoliotemplates` | Next.js + Tailwind, MIT | **Reference / fallback** |
| `DZELhub/dzel-bento-portfolio` | Pure HTML/CSS bento, no JS | **No license found** |

---

## 4. Evidence inspected

### 4.1 `saai.pro` — verified

- **Host:** `server: Vercel`, `x-vercel-cache: HIT`, `cache-control: public, max-age=0, must-revalidate`.
- **Files served:** `index.html`, `style.css` (1,461 lines), `app.js` (14,767 bytes), `swarm-init.js`, `swarm/swarm.js` (150,053 bytes), `favicon.svg`, `sahi-cutout.png`, `robots.txt`, `sitemap.xml`.
- **Stack:** no framework, no bundler, no `node_modules`. Plain HTML + hand-written CSS + vanilla JS. Google Fonts CDN (Bebas Neue, Caveat, Plus Jakarta Sans, JetBrains Mono).
- **Design system** declared in the CSS header: red `#ef4444`, near-black `#050505`, glass `backdrop-filter: blur(16px)`, mono micro-labels, hairline grid, oversized Bebas wordmark.
- **`app.js` contains:** `initAuroraCanvas` (2D canvas, `requestAnimationFrame`, paused by `IntersectionObserver`), `initLayerTabs`, `initProjectFilters`, `initCopyEmail` (clipboard + toast), `initScrollObserver`, `initMotionReveals` — all vanilla, no dependencies.
- **`swarm-init.js`** boots a vendored engine as `./swarm/swarm.js`, supports `?swarm=off|once|1`, waits for `document.fonts.ready`, refuses to boot in a hidden tab, and honours `prefers-reduced-motion`.
- **SEO present:** canonical, OG/Twitter cards, `schema.org/Person` JSON-LD, `robots.txt` with sitemap.
- **Provenance:** owner Sahir Veerancheri (`github.com/sahi-hub`); the design was posted as an "Agentic Build" reel on Instagram (large engagement). His public GitHub has **no portfolio repository**.

### 4.2 `Rokhbin/banna` — verified

- **License:** MIT (`LICENSE`, 1,098 bytes), per API metadata `spdx_id: MIT`.
- **Size:** `banna.js` = 23,260 bytes, zero dependencies, no build step.
- **Mechanism (read from source):** classifies elements into `box` / `text` / `fade`, hides them with a class (never rewrites DOM), draws boxes with a crosshair + size badge, reveals text with a `clip-path` "typing" wipe and a caret, and uses `IntersectionObserver` to build on scroll.
- **Accessibility built in:** respects `prefers-reduced-motion`, Esc skips, focus reveals, `?nobanna` opt-out, failsafe timeout so the page always appears.
- **Options:** `data-speed`, `data-agents`, `data-max-wait`, `data-max-layers`, `data-once="session"`, `data-auto`, `data-bar`, `data-credit`, `data-colors`, `data-exclude`, custom labels.
- **API:** `Banna.start / skip / stop`, `banna:done` event.
- **Documented trade-off (project claim):** delays first paint, can hurt LCP; author recommends measuring and `data-once="session"` on conversion pages.
- **Credit:** "Written from scratch"; the *idea* credits Joel Califa's Swarm.

### 4.3 `DhvanilPatel/swarm-cursors` — verified

- **No LICENSE file.** README states: *"The original Swarm site is published without a license and this project adapts parts of it, so please don't reuse this code without checking with Joel Califa as well."*
- `saai.pro`'s vendored copy is byte-identical to upstream except for a header that explicitly records this and says **"Do NOT ship this file anywhere else without written permission from Joel Califa."**

### 4.4 `califa/swarm-site` — verified

- 70 stars, default branch `main`, root = `index.html` + `assets/`, **license: none**.
- Therefore all rights reserved by default. The *idea* (cursors building a page) is not protectable; the *implementation and motion design* are.

### 4.5 User's own repositories — verified

- `jagdishsah126`: 16 repos, most MIT. Featured: `nepse-floorsheet-archive`, `Canteen`, `Vedetta`, `Insta_Analyzer_V1`, `MD_File_Reader`, `merge-conflict-with-love`, `Linux_Data_Monitor`.
- `DayaSah`: 9 repos, **no licenses** — NEPSE data/journal work.
- `jagdishsah`: 16 repos, **no licenses** — early web work.
- `jagdish-sah`: 5 repos, **no licenses** — coursework + `Nepse-Diary-WebApp`.
- Live portfolio `jagdishsah.com.np`: Next.js, footer says MIT, has `/about`, `/projects`, `/nepse`, `/spaces`, `/cv`, `/contact`, plus an interactive 3D planetary orbital canvas.

---

## 5. Already available

| Need | Already have | Link |
| --- | --- | --- |
| Personal content, projects, credentials | GitHub profile hub + live portfolio | https://github.com/jagdishsah126/jagdishsah126 |
| Working site, routes, 3D canvas | Live Next.js portfolio | https://jagdishsah.com.np |
| Signature cursor-build effect, legally usable | banna (MIT) | https://github.com/Rokhbin/banna |
| Design direction reference | saai.pro | https://saai.pro |
| Component/layout references | several MIT templates | see §3 |

---

## 6. Still missing

- No `AgentDoc/Requirement.md`, `Design.md`, or `Task.md` — no approved scope, stack, or acceptance criteria.
- No decision on **replace vs. rebuild** the existing `jagdishsah.com.np`.
- No decision on **static vanilla vs. Next.js** — the reference site is static; the existing site is Next.js.
- No content inventory for the new sections (flagships, bento matrix, HUD cards).
- No artwork/portrait asset strategy — `saai.pro`'s cutout portrait is the owner's own photo and cannot be reused.
- No decision on the aura canvas: build from scratch or use a permissive pattern.

---

## 7. Potential reuse

- **Direct:** `banna.js` (MIT). Vendoring it locally, keeping the MIT notice, is permitted. Reference site does the equivalent with an unlicensed engine — this is the clean substitute.
- **After modification:** MIT templates in §3 as layout/component inspiration; standard practice is to take patterns, not the whole file.
- **Reference only:** `saai.pro` design language — colour system, typography pairing, section rhythm, bento composition, micro-label system. Studying it is fine; shipping a copy of its CSS, copy, or artwork is not.

---

## 8. Permission needed

| Candidate | Status |
| --- | --- |
| `DhvanilPatel/swarm-cursors` | **not requested** — MIT-less; README requires Joel Califa's permission |
| `califa/swarm-site` | **not requested** — no license |
| `DZELhub/dzel-bento-portfolio` | **not requested** — no license file found |
| `DayaSah/*`, `jagdishsah/*`, `jagdish-sah/*` | **not requested** — user's own; no license means others cannot reuse, but the owner can reuse their own code freely |

---

## 9. Explicit no-copy / no-reuse exclusions

- **`califa/swarm-site`** — no license, all rights reserved.
- **`DhvanilPatel/swarm-cursors`** — README explicitly asks not to reuse without checking with Joel Califa.
- **`saai.pro`** — no license on the site or its assets; copy, portrait, and CSS are the owner's copyright. The technique may be studied; the files must not be shipped.

---

## 10. License and dependency review

| Item | License | Obligation |
| --- | --- | --- |
| banna | MIT | keep copyright + permission notice |
| Bebas Neue, Caveat, Plus Jakarta Sans, JetBrains Mono | SIL OFL 1.1 | keep OFL notice if self-hosted; CDN link is fine |
| MIT templates | MIT | keep notice |
| saai.pro, califa, swarm-cursors | none | no reuse |
| User's own repos | mixed (MIT / none) | owner may reuse own work |

**Dependency weight:** banna adds 23 KB uncompressed, no network calls, no build step, no third-party runtime.

### 10.1 Attribution as shipped

Owner decision: **all credit and attribution lives in this file only.** No
credit lines appear in the UI, the README, or page copy.

| Item | How it ships | Note |
| --- | --- | --- |
| banna (MIT) | `public/vendor/banna.js` + `public/vendor/banna.LICENSE.txt` | The licence file is the MIT notice, not a credit line; MIT requires it to accompany copies of the software, so it stays. |
| banna UI credit pill | disabled via `data-credit="false"` | MIT permits this. The effect's status bar no longer names the author. |
| Fonts | Google Fonts `<link>` at runtime (Space Grotesk, JetBrains Mono) | SIL OFL 1.1; served by Google, nothing self-hosted, no notice obligation on the page. |
| Portrait, avatar, GitHub avatar | `public/media/` | Owner's own assets. |
| `saai.pro`, `califa/swarm-site`, `DhvanilPatel/swarm-cursors` | not used | Rights reserved, no reuse — see section 9. |
| README | no attribution section | Points here instead. |

---

## 11. Final comparison and recommendation

### What `saai.pro` actually is

A hand-written static Vercel site: one HTML page, one 1,461-line CSS file, one 14 KB vanilla JS file, and a 150 KB vendored animation engine. No framework. Its distinctiveness is **art direction**, not technology: crimson-on-black op-art, oversized Bebas display type, mono micro-labels, hairline grids, glass cards, bento matrix, HUD panels, and a cursor-swarm intro.

That means it can be reproduced faithfully in either stack. The decision is operational, not visual.

### Options

**A — Static vanilla (closest to the reference)**
- HTML + CSS + vanilla JS + `banna.js`, deployed to Vercel or Cloudflare Pages.
- Pros: identical performance profile, zero build, easiest to reason about, cheapest, trivially portable.
- Cons: no reuse of the existing Next.js content/routes; multi-page content gets manual.

**B — Next.js App Router (reuse what you already run)**
- Existing `jagdishsah.com.np` stack; banna loaded client-side via a small client component; canvas effect in a `useEffect`.
- Pros: keeps `/about`, `/projects`, `/cv`, `/nepse`; content in typed data files; static export possible.
- Cons: heavier; banna must be guarded to run once and not fight hydration; bundle discipline needed.

**C — Hybrid**
- Next.js for content routes, one hand-built landing page with vanilla-feeling CSS modules.
- Pros: best of both. Cons: two mental models in one repo.

**Recommendation:** **B**, because the content, routes, and domain already exist and a rebuild should not throw that away; but keep the landing page's CSS hand-written and framework-light, and vendor banna locally. Choose **A** only if the goal is a single-page showcase that replaces the current site outright.

### Roadmap (planning only — not started)

**Phase 0 — Decisions (blocking)**
1. Replace `jagdishsah.com.np` or ship at a subdomain/new repo?
2. Static vanilla (A) or Next.js (B)?
3. Keep the 3D planetary canvas, or retire it for the new art direction?
4. Colour identity: crimson/noir like the reference, or your own accent (the current site is cyan/violet)?

**Phase 1 — Content inventory**
Freeze copy: hero claim, 3 flagship systems, 6–8 bento projects, credentials, contact. Reuse the GitHub hub's verified facts; no invented metrics.

**Phase 2 — Design system**
Tokens (bg/surface/border/text/accent), type scale (display + mono + script), spacing, card and HUD primitives, grid rules. Build a static component sheet before any page.

**Phase 3 — Landing page**
Hero (wordmark row, portrait frame, flanking HUD), section dividers, flagships, bento matrix with filters, contact card, footer. Hand-written CSS.

**Phase 4 — Signature effects**
Vendor `banna.js` with MIT notice; `data-once="session"`; honour reduced motion; skip on `?nobanna`. Add the ambient canvas as its own module with `IntersectionObserver` pause.

**Phase 5 — Remaining routes**
`/about`, `/projects`, `/projects/[slug]`, `/cv`, `/contact` — only if Phase 0 chose B.

**Phase 6 — Quality gates**
Lighthouse ≥ 95 on static routes; CLS < 0.05 with banna active; keyboard-only pass; `prefers-reduced-motion` pass; OG image and JSON-LD; sitemap; 404.

**Phase 7 — Deploy**
Vercel (matches reference) with the existing domain, or Cloudflare Pages. Preview branch before production.

**Phase 8 — Post-launch**
Record a 20–30 s demo clip for social; add `/uses` or writing only if it earns its place.

### Decisions needed before `Full-ToDo.md` can be written

A repository, stack, and architecture must be chosen by you, not by me. Answer Phase 0 questions 1–2 and the plan can be finalized.

---

## 12. Unverified items and limitations

- `saai.pro` analytics, form handling, and build tooling were not inspected (no analytics script seen, but not exhaustively proven).
- `banna` was inspected as source, not executed in a browser here.
- Template repos were judged from README + file listing; their runtime behaviour was not tested.
- Performance claims about banna (LCP impact) are the author's, not measured here.
- No accessibility audit was run on `saai.pro` or `jagdishsah.com.np`.
- GitHub API rate limits may have truncated history; repo lists were captured at one point in time.

---

## 13. Post-ship renewal — 2026-11-09

Scope changed after this research was written: the build is no longer a
standalone replacement for `jagdishsah.com.np`. It ships as an alternate
design on a branch of the same repository, carries `noindex, follow`, and
takes part in the per-tab rotation between `swarm`, `main` and `legacy`.
Search ranking is therefore not a goal for this host; `robots.txt` still
allows crawling so the `noindex` tag is actually read.

### 13.1 What ships, and what changed since §10.1

| Item | Shipped as | Change since §10.1 |
| --- | --- | --- |
| banna (MIT) | `public/vendor/banna.js` + `public/vendor/banna.LICENSE.txt` | `data-once="session"` removed: the per-origin session flag suppressed the effect on refresh and whenever the rotation returned to this host. Every load rebuilds. `data-speed="0.85"`, `data-agents="6"`, `data-max-layers="400"`, `data-max-wait="2.5"`, `data-credit="false"`, progress bar still enabled |
| Stuck-element guard | inline script in `src/app/layout.tsx` | Replaces the old 7 s global reveal. Only elements currently on screen and hidden for more than 2 s are revealed; content below the fold keeps its turn |
| Hero portrait | `public/media/github-avatar.webp`, 21 KB | Re-encoded from the 252 KB PNG with `ffmpeg`; the PNG is deleted. `fetchPriority="high"`, `decoding="async"`, dimensions unchanged |
| Social card | `public/media/og-swarm.jpg`, 1200 × 630 | Generated by `scripts/generate-og-swarm.py` (own code, no third-party assets) |
| Fonts | Google Fonts `<link>` (Space Grotesk, JetBrains Mono) | Unchanged. SIL OFL 1.1, served by Google, no notice obligation on the page |
| Runtime packages | `@vercel/analytics`, `@vercel/speed-insights` | Added after this research. First-party Vercel packages; no code was copied from the reference sites |
| Third-party code | banna only | No `saai.pro`, `califa/swarm-site` or `DhvanilPatel/swarm-cursors` code ships — §9 still holds |

### 13.2 Known gaps

- Fonts are still a third-party render-blocking request; self-hosting through
  `next/font` was planned in the roadmap and not done.
- The effect's LCP delta was never measured against the §6.4 budget. Vercel
  Speed Insights is now wired up, so field data will answer it.
- No skip link, and the favicon is WebP-only (older Safari/iOS ignore it).
- Scroll-back replay is not implemented: a section builds once per page load.

### 13.3 Corrected statements from §11

- §11 recommended option **B (Next.js App Router)** — followed.
- §11's Phase 4 says `data-once="session"`; superseded by §13.1.
- §11 assumes a decision between replacing the live site and a subdomain:
  the answer was the shared repository plus a rotated subdomain, recorded
  in commit `7d53b06`.
