import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fira_Code, Caveat } from "next/font/google";
import "./globals.css";
import Starfield from "../components/cosmic/Starfield";
import AuroraGlow from "../components/cosmic/AuroraGlow";
import GlassDock from "../components/navigation/GlassDock";
import SiteFooter from "../components/navigation/SiteFooter";
import RotationGuard from "../components/system/RotationGuard";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const SITE_URL = "https://jagdishsah.com.np";
const OG_IMAGE = {
  url: "/og-card.jpg",
  width: 1200,
  height: 630,
  alt: "Jagdish Sah — Computer Engineering Student and NEPSE Market Analyst",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jagdish Sah — CSE Student & NEPSE Analyst, Nepal",
  description:
    "Computer Engineering student at IOE WRC Pokhara and NEPSE market analyst from Siraha, Nepal. Projects, market research and official CV.",
  authors: [{ name: "Jagdish Sah", url: SITE_URL }],
  creator: "Jagdish Sah",
  publisher: "Jagdish Sah",
  alternates: {
    canonical: SITE_URL + "/",
  },
  openGraph: {
    title: "Jagdish Sah — CSE Student & NEPSE Analyst, Nepal",
    description:
      "Projects, NEPSE market research and CV of Jagdish Sah, Computer Engineering student at IOE WRC Pokhara.",
    url: SITE_URL + "/",
    siteName: "Jagdish Universe",
    locale: "en_US",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdish Sah — CSE Student & NEPSE Analyst, Nepal",
    description:
      "Projects, NEPSE market research and CV of Jagdish Sah, Computer Engineering student at IOE WRC Pokhara.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": SITE_URL + "/#person",
      name: "Jagdish Sah",
      alternateName: ["Jagdish"],
      gender: "Male",
      nationality: "Nepalese",
      birthPlace: {
        "@type": "Place",
        name: "Bishnupur, Siraha, Nepal",
      },
      homeLocation: {
        "@type": "Place",
        name: "Bishnupur, Siraha, Nepal",
      },
      workLocation: {
        "@type": "Place",
        name: "Pokhara, Nepal",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Sagarmatha Higher Secondary School",
          location: "Mirchaiya, Siraha, Nepal",
        },
        {
          "@type": "EducationalOrganization",
          name: "Prasadi Academy",
          location: "Lalitpur, Nepal",
        },
        {
          "@type": "EducationalOrganization",
          name: "Institute of Engineering (IOE), Western Regional Campus (WRC), Tribhuvan University",
          location: "Pokhara, Nepal",
        },
      ],
      jobTitle: "Computer Engineering Student & NEPSE Market Analyst",
      knowsAbout: [
        "Computer Engineering",
        "Python",
        "Nepal Stock Exchange (NEPSE)",
        "Financial Market Analysis",
        "Autonomous Data Pipelines",
        "Full-Stack Web Development",
        "Agentic AI Development",
      ],
      url: SITE_URL,
      sameAs: [
        "https://github.com/jagdishsah126",
        "https://github.com/DayaSah",
        "https://github.com/Jagdishsah",
        "https://github.com/Jagdish-sah",
      ],
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL + "/",
      name: "Jagdish Sah — Personal Universe",
      description: "Personal Hub, Interactive Projects, and Official CV of Jagdish Sah",
      publisher: {
        "@id": SITE_URL + "/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${fira.variable} ${caveat.variable}`}
    >
      <head>
        <RotationGuard />
      </head>
      <body className="antialiased min-h-screen bg-space-void text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
        <Starfield />
        <AuroraGlow />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="relative z-10 flex flex-col min-h-screen pb-28">
          {children}
          <SiteFooter />
        </main>
        <GlassDock />
      </body>
    </html>
  );
}
