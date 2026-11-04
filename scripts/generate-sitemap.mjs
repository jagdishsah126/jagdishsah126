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
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const SITE = "https://jagdishsah.com.np";

const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/projects/", priority: "0.9", changefreq: "monthly" },
  { path: "/nepse/", priority: "0.9", changefreq: "weekly" },
  { path: "/cv/", priority: "0.9", changefreq: "monthly" },
  { path: "/about/", priority: "0.8", changefreq: "monthly" },
  { path: "/spaces/", priority: "0.7", changefreq: "monthly" },
  { path: "/contact/", priority: "0.6", changefreq: "yearly" },
];

// No <lastmod> on purpose. A date stamped by the build would change on every
// build and leave the working tree dirty without the content changing, and a
// lastmod that is not consistently accurate is one Google learns to ignore.
// If you want it back, derive it from the commit date, not from `new Date()`.

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
).join("\n")}
</urlset>
`;

const here = dirname(fileURLToPath(import.meta.url));
const target = join(here, "..", "public", "sitemap.xml");
writeFileSync(target, xml, "utf8");
console.log(`sitemap: ${ROUTES.length} routes -> public/sitemap.xml`);
