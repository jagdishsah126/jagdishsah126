#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from a single route list.
 *
 * Zero dependencies on purpose: runs with plain `node`, so it works in CI and on
 * a machine with no node_modules. Run through `npm run sitemap`.
 *
 * When you add a route under src/app/, add it here too.
 */
import { writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const SITE = "https://jagdishsah.com.np";

const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/projects/", priority: "0.9", changefreq: "monthly" },
  { path: "/nepse/", priority: "0.9", changefreq: "weekly" },
  { path: "/cv/", priority: "0.9", changefreq: "monthly" },
  { path: "/about/", priority: "0.8", changefreq: "monthly" },
  { path: "/topics/", priority: "0.8", changefreq: "weekly", file: "src/app/topics/page.tsx" },
  { path: "/spaces/", priority: "0.7", changefreq: "monthly" },
  { path: "/contact/", priority: "0.6", changefreq: "yearly" },
  // Topic pages all render from the data file, so that is where their lastmod comes from.
  ...["nepse-tools", "nepse-view", "nepse-strategy", "life", "career"].map((slug) => ({
    path: `/topics/${slug}/`,
    priority: "0.7",
    changefreq: "weekly",
    file: "src/data/topics.ts",
  })),
];

// <lastmod> comes from the commit date of the file that renders each route, not
// from `new Date()`. A build timestamp changes on every deploy even when nothing
// did, and Google learns to ignore a lastmod that is not consistently accurate.
// A commit date only moves when the page actually changed.
//
// Builds without git history (or without git at all) simply omit the tag rather
// than invent a date.
function lastmodFor(route) {
  const file =
    route.file ??
    (route.path === "/" ? "src/app/page.tsx" : `src/app${route.path}page.tsx`);
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    return null;
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => {
  const lastmod = lastmodFor(r);
  return `  <url>
    <loc>${SITE}${r.path}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`;
}).join("\n")}
</urlset>
`;

const here = dirname(fileURLToPath(import.meta.url));
const target = join(here, "..", "public", "sitemap.xml");
writeFileSync(target, xml, "utf8");
console.log(`sitemap: ${ROUTES.length} routes -> public/sitemap.xml`);
