import type { Metadata, Viewport } from "next";
import "./globals.css";
import CosmicCanvas from "@/components/CosmicCanvas";

const siteUrl = "https://swarm.jagdishsah.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jagdish Sah — Computer Engineer & NEPSE Analyst",
  description:
    "Jagdish Sah builds data-driven web systems and reads markets through their own transaction records. BCT at IOE WRC Pokhara, NEPSE analyst, builder of autonomous pipelines.",
  keywords: [
    "Jagdish Sah",
    "portfolio",
    "computer engineering",
    "NEPSE",
    "Next.js",
    "data pipeline",
    "Nepal",
  ],
  authors: [{ name: "Jagdish Sah", url: siteUrl }],
  creator: "Jagdish Sah",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Jagdish Sah",
    title: "Jagdish Sah — Computer Engineer & NEPSE Analyst",
    description:
      "Data-driven web systems, autonomous pipelines, and market intelligence from Pokhara, Nepal.",
    url: siteUrl,
    images: [{ url: "/media/hero-portrait.webp", width: 760, height: 942, alt: "Jagdish Sah" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdish Sah — Computer Engineer & NEPSE Analyst",
    description: "Data-driven web systems, autonomous pipelines, and market intelligence.",
    images: ["/media/hero-portrait.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#04060d",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jagdish Sah",
  url: siteUrl,
  jobTitle: "Computer Engineering Student & NEPSE Analyst",
  description:
    "Computer engineering student at IOE WRC Pokhara building data-driven web systems and market intelligence tools.",
  sameAs: [
    "https://github.com/jagdishsah126",
    "https://www.linkedin.com/in/jagdish-sah6347482ba/",
    "https://www.instagram.com/jagdish___sah/",
  ],
  address: { "@type": "PostalAddress", addressLocality: "Pokhara", addressCountry: "NP" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/media/avatar-256.webp" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/*
          Cursor build effect, vendored locally. Licence and attribution are
          recorded in Credit.md — the only place they live.
          Blocking, not deferred, so the page never flashes in before the build
          starts. The layer cap covers the whole document, not just the hero, so
          each section is built by the crew as it scrolls into view.
        */}
        <script
          src="/vendor/banna.js"
          data-once="session"
          data-speed="0.85"
          data-agents="6"
          data-max-layers="400"
          data-max-wait="2.5"
          data-credit="false"
        />
        {/*
          Stuck-element guard. The effect hides every element with .sb-wait until
          a cursor places it, and only places what is on screen — so the page is
          built as you scroll. If a build stalls (throttled tab, slow device) the
          section you are looking at must not stay blank. This reveals only what
          is currently in view and has been hidden for 2s; everything below the
          fold keeps its turn.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  var seen = new WeakMap();
  var started = Date.now();
  var timer = setInterval(function () {
    var waiting = document.querySelectorAll(".sb-wait");
    if (!waiting.length || Date.now() - started > 120000) {
      clearInterval(timer);
      return;
    }
    var now = Date.now();
    for (var i = 0; i < waiting.length; i++) {
      var el = waiting[i];
      var r = el.getBoundingClientRect();
      var onScreen = r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
      if (!onScreen) {
        seen.delete(el);
        continue;
      }
      var since = seen.get(el) || now;
      seen.set(el, since);
      if (now - since > 2000) {
        el.classList.remove("sb-wait");
        seen.delete(el);
      }
    }
  }, 500);
})();
`.trim(),
          }}
        />
      </head>
      <body>
        <CosmicCanvas />
        {children}
      </body>
    </html>
  );
}
