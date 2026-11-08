# SEO — Your Steps

Everything in this file needs **you**: an account, a dashboard, a decision, or
content only you can write. Technical work that can be done in code has already
been done — see "Already handled" at the bottom.

Do them in order. Steps 1–3 are the foundation: without them nothing else is
measurable, and you will be guessing.

---

## Step 1 — Google Search Console (do this first)

**Why:** This is the only place Google tells you what it indexed, what it
refused to index, which queries you appear for, and whether anything is broken.
Without it you cannot measure any SEO change. It is free.

**How:**

1. Go to <https://search.google.com/search-console> and sign in with the Google
   account you want to own this site.
2. Click **Add property** → choose **Domain** (not URL prefix). Enter
   `jagdishsah.com.np`.
3. Google shows a **TXT record**. Add it in Vercel → your domain → **DNS
   Records** → add a `TXT` record with host `@` and the value Google gave you.
4. Back in Search Console, click **Verify**. DNS can take a few minutes.
5. Open **Sitemaps** in the left menu, enter `sitemap.xml`, click **Submit**.
6. Open **Pages** (under Indexing) and check: all 7 routes should be
   *Indexed*. If any say *Excluded*, click it and read the reason.
7. Open **Settings → Crawl stats** once a week for the first month.

**Expect:** `legacy.` and `swarm.` to show as *Excluded by 'noindex' tag*.
That is correct — they are alternate designs of the same content.

---

## Step 2 — Bing Webmaster Tools

**Why:** Bing powers Bing search and also DuckDuckGo. It takes five minutes and
you can import everything from Search Console, so there is no reason to skip it.

**How:**

1. Go to <https://www.bing.com/webmasters> and sign in.
2. Choose **Import from Google Search Console** and authorise it. This copies
   the site, verification and sitemap in one step.
3. Confirm `sitemap.xml` appears under **Sitemaps**.

---

## Step 3 — Fix the dead `www` host

**Why:** `https://www.jagdishsah.com.np/` currently returns **no response at
all**. The DNS record exists but no Vercel project claims it, so anyone who
types `www.` — or any old link that uses it — hits a dead end. Google treats
that as a broken host, not as your site.

**How (Vercel dashboard):**

1. Open the Vercel project that serves `jagdishsah.com.np`.
2. **Settings → Domains**.
3. Add `www.jagdishsah.com.np`.
4. When Vercel asks how it should behave, choose **Redirect to
   jagdishsah.com.np** (308 permanent). Do **not** choose "serve the same
   content" — that would create a duplicate host.
5. Wait for the certificate to show **Valid**, then test in a browser:
   `https://www.jagdishsah.com.np/` should land on `https://jagdishsah.com.np/`.

---

## Step 4 — Decide on analytics

**Why:** Search Console shows queries, but not what visitors actually do. You
need one of these to know whether a change helped. Pick **one**, not three.

**Options:**

| Option | Cost | Notes |
|---|---|---|
| **Plausible** | paid, ~$9/mo | Cookieless, no consent banner needed, simplest dashboard |
| **Umami** | free if self-hosted | Cookieless, needs a server or Vercel Postgres |
| **GA4** | free | Most detail, but heavy script and needs a cookie consent banner |

**How (GA4, the free route):**

1. <https://analytics.google.com> → **Admin** → **Create property**.
2. Copy the **Measurement ID** (`G-XXXXXXX`).
3. Send it to me and I will wire it in with `next/script` using
   `strategy="afterInteractive"` so it does not hurt page speed.
4. If you pick Plausible or Umami, send me the domain/script URL instead.

---

## Step 5 — Measure Core Web Vitals, then hand me the numbers

**Why:** Page speed is a real ranking input and I have not measured your site.
I will not guess at fixes. Your homepage runs a 2-second "hyperspace warp"
overlay, a canvas starfield and an audio call — any of those could be the
problem, and only real data says which.

**How:**

1. Open <https://pagespeed.web.dev/>.
2. Enter `https://jagdishsah.com.np/`, run it, then switch to the **Mobile** tab
   and run again.
3. Copy the four numbers: **LCP**, **INP** (or TBT if INP is missing), **CLS**,
   **FCP**.
4. Send them to me with which device was worse.

**Targets:** LCP under 2.5 s, INP under 200 ms, CLS under 0.1.

---

## Step 6 — Decide on the `/writing` section (the real lever)

**Why:** This is the honest answer to "make SEO 10/10". Your site has **267
words** of indexable text on the homepage and no articles. Meta tags are
already correct; more of them will not move you. Rankings for anything beyond
your own name come from pages that answer a question someone searched for. You
are a NEPSE analyst and a computer-engineering student — you have material
nobody else has.

**How:**

1. Decide: yes or no. If no, stop here and accept branded-search-only traffic.
2. If yes, pick your first **five** topics. Suggestions:
   - How you read a NEPSE floorsheet (what the columns actually mean)
   - Volume Spread Analysis on NEPSE, with one worked example
   - What smart-money tracking looks like on a thin market
   - Building an autonomous scraper that survives NEPSE's HTML changes
   - What IOE WRC actually teaches in BCT third semester
3. Send me the list. I will build the `/writing` route, the article schema, and
   the sitemap integration. You write the words; I do the plumbing.
4. Commit to a cadence you can actually keep. **One post every two weeks beats
   five posts in one week and then silence.** Google rewards consistency.

---

## Step 7 — Per-page social cards

**Why:** All 7 routes currently share one `og-card.jpg`. When someone shares
`/cv` or `/nepse` on LinkedIn or WhatsApp, the preview is generic. Unique cards
raise click-through, which indirectly helps.

**How:**

1. Make seven images at **1200 × 630**, one per route: home, about, cv, nepse,
   projects, contact, spaces.
2. Keep the same layout, change the headline text per page.
3. Put them in `public/og/` as `home.jpg`, `about.jpg`, and so on.
4. Tell me when they exist and I will wire each page's metadata to its own card.

---

## Step 8 — Off-site authority

**Why:** Links from other sites are still one of the strongest signals. A
portfolio with no inbound links ranks for its own name and nothing else. This
is slow work with no shortcut.

**How:**

1. Make your identity identical everywhere — same name spelling, same photo,
   same one-line bio, and a link back to `jagdishsah.com.np`:
   GitHub profile README, LinkedIn, Instagram, X, dev.to, Hashnode.
2. Add the site link to your GitHub repo descriptions and READMEs.
3. Answer real questions in NEPSE and Nepali developer communities, and link
   only when your own post genuinely answers it. Spam links get ignored.
4. Ask your college department and any club you are in to link to you from
   their site.
5. Do **not** buy links or use link exchanges. That is a penalty risk, not a
   shortcut.

---

## Step 9 — Validate the structured data

**Why:** Rich results (person card, breadcrumbs, project list) only appear if
Google can parse the JSON-LD. One typo silently disables all of it.

**How:**

1. Open <https://search.google.com/test/rich-results>.
2. Test `https://jagdishsah.com.np/` and each sub-page.
3. Every item should show as valid with no errors. Warnings are usually fine.
4. If anything errors, send me the screenshot.

---

## Step 10 — Review monthly

**Why:** SEO is not a one-time fix. Without a monthly look you will not notice
a page silently dropping out of the index.

**How, once a month:**

1. Search Console → **Pages**: is anything newly excluded?
2. Search Console → **Performance**: which queries grew, which died?
3. Search Console → **Core Web Vitals**: any URL moved to "Poor"?
4. Publish or update at least one page.

---

## Already handled (no action from you)

These were done in code and verified live:

- Canonical tags on all 7 routes, `metadataBase`, unique titles/descriptions.
- `robots.txt`, `sitemap.xml`, `http → https` 308.
- `Person`, `WebSite`, `ProfilePage`, `BreadcrumbList`, `ItemList`,
  `SoftwareApplication` structured data.
- `legacy.` and `swarm.` set to `noindex, follow` with self-canonicals, so they
  no longer compete with the canonical root.
- Crawler bypass on the rotation redirect, so mobile-first indexing keeps the
  root.
- `next/image` optimization enabled, oversized icon compressed, security
  headers, `noindex` on the 404 page, `lastmod` in the sitemap from git history.
- `Person` extended with `image`, `hasOccupation` and the real social profiles.
