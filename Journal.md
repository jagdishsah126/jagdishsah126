# Journal

## 2026-11-08 — Device entry + per-tab three-site rotation

Imported `main`, `main-legacy` and `Cursor-swarm` and wired the root domain to
route visitors: desktop stays on `jagdishsah.com.np`, mobile starts on
`legacy.jagdishsah.com.np`, and every later refresh in the same tab rotates
`swarm -> main -> legacy`. A new tab starts again.

Crawlers are excluded from the rotation and always receive `200` + `main`, so
mobile-first indexing keeps the canonical root. `legacy` and `swarm` are now
`noindex, follow` with self-canonicals, removing the duplicate-content problem
that existed before.

| Date | Step | File | Purpose | Added | Removed |
|---|---|---|---|---|---|
| 2026-11-08 | main | `next.config.mjs` | Drop `output: "export"` so middleware can run; pages still prerender | 3 | 1 |
| 2026-11-08 | main | `src/app/layout.tsx` | Mount the guard in `<head>` before paint | 4 | 0 |
| 2026-11-08 | main | `src/components/system/RotationGuard.tsx` | New: per-tab rotation counter and cross-subdomain handoff | 71 | 0 |
| 2026-11-08 | main | `src/middleware.ts` | New: desktop/mobile entry, crawler bypass, `?r` loop guard | 38 | 0 |
| 2026-11-08 | main-legacy | `src/app/layout.tsx` | Mount guard; `noindex, follow` + self-canonical | 14 | 0 |
| 2026-11-08 | main-legacy | `src/components/system/RotationGuard.tsx` | New: same rotation guard | 71 | 0 |
| 2026-11-08 | Cursor-swarm | `src/app/layout.tsx` | Mount guard first in `<head>`; `noindex, follow` | 5 | 1 |
| 2026-11-08 | Cursor-swarm | `src/components/system/RotationGuard.tsx` | New: same rotation guard | 71 | 0 |

Verified: all three builds pass; live matrix returns desktop `200`, mobile
`302 -> legacy/?r=0`, mobile with `?r` `200`, Googlebot-mobile `200`; canonical
and robots tags correct on each host; rotation state machine passes a
desktop/mobile/new-tab/deep-link/crawler simulation.

## 2026-11-08 — SEO pass on the canonical root

Wrote `SEO.md` with the steps that need an account, a dashboard or content only
Jagdish can produce, then did everything that could be done in code.

Image optimisation was unlocked by the earlier removal of `output: "export"`:
`next/image` now emits responsive srcset and Vercel serves WebP (hero portrait
45K -> 20K at 640w). The PNG icons were photographic, so lossless re-encoding
recovered little and palette quantisation was used instead.

| Date | Step | File | Purpose | Added | Removed |
|---|---|---|---|---|---|
| 2026-11-08 | seo | `next.config.mjs` | Enable image optimisation; add nosniff, referrer, permissions, HSTS headers | 22 | 4 |
| 2026-11-08 | seo | `src/app/layout.tsx` | Person gains `image` + `hasOccupation`; `sameAs` gains LinkedIn and Instagram | 22 | 0 |
| 2026-11-08 | seo | `src/app/not-found.tsx` | Restate robots so the 404 stops contradicting the layout's `index, follow` | 4 | 0 |
| 2026-11-08 | seo | `scripts/generate-sitemap.mjs` | `lastmod` from each route's commit date, omitted without git history | 30 | 6 |
| 2026-11-08 | seo | `public/sitemap.xml` | Regenerated with 7 `lastmod` entries | 7 | 0 |
| 2026-11-08 | seo | `public/icon-512.png` | Quantised 341K -> 153K | n/a | n/a |
| 2026-11-08 | seo | `public/icon.png` | Quantised 55K -> 25K | n/a | n/a |
| 2026-11-08 | seo | `public/apple-icon.png` | Quantised 49K -> 22K | n/a | n/a |

Verified live: security headers present, rotation unchanged (desktop 200, mobile
302, Googlebot 200), sitemap carries 7 `lastmod`, schema shows `hasOccupation`,
`ImageObject` and both social profiles, 404 emits `noindex`, image optimiser
returns WebP.
