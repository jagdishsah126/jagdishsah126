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
          recorded in AgentDoc/Credit.md — the only place they live.
          Blocking, not deferred, so the page never flashes in before the build
          starts. Layers are capped low and the pace is slow on purpose.
        */}
        <script
          src="/vendor/banna.js"
          data-once="session"
          data-speed="0.85"
          data-agents="6"
          data-max-layers="48"
          data-max-wait="3"
          data-credit="false"
        />
        {/*
          Failsafe: the effect hides each element with .sb-wait until a cursor
          places it. If the build stalls (throttled tab, slow device), reveal
          anything still hidden after 7s rather than leaving the page half empty.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "setTimeout(function(){document.querySelectorAll('.sb-wait').forEach(function(el){el.classList.remove('sb-wait')})},7000)",
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
