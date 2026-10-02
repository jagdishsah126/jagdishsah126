import type { Metadata } from "next";
import "./globals.css";
import Starfield from "../components/cosmic/Starfield";
import AuroraGlow from "../components/cosmic/AuroraGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://jagdishsah.com.np"),
  title: "Jagdish Sah — Computer Engineering Student, Creative Builder & NEPSE Analyst | Bishnupur, Siraha, Nepal",
  description:
    "Official personal hub of Jagdish Sah from Bishnupur, Siraha, Nepal. Computer Engineering student at TU IOE WRC Pokhara, creator of autonomous data pipelines, active NEPSE market analyst, and builder of modern digital experiences.",
  keywords: [
    "Jagdish Sah",
    "Jagdish",
    "Bishnupur",
    "Siraha",
    "Mirchaiya",
    "Nepse Analyst",
    "TU IOE WRC",
    "IOE Pokhara",
    "Computer Engineering Nepal",
    "Stock Market Trader Nepal",
    "Python Developer Nepal",
    "Autonomous Data Pipelines",
    "Canteen PWA",
  ],
  authors: [{ name: "Jagdish Sah", url: "https://jagdishsah.com.np" }],
  creator: "Jagdish Sah",
  publisher: "Jagdish Sah",
  alternates: {
    canonical: "https://jagdishsah.com.np",
  },
  openGraph: {
    title: "Jagdish Sah — Computer Engineering Student & NEPSE Analyst | Bishnupur, Siraha, Nepal",
    description:
      "Explore the digital universe of Jagdish Sah: autonomous data pipelines, 8 planetary projects, NEPSE market analysis, and professional CV.",
    url: "https://jagdishsah.com.np",
    siteName: "Jagdish Universe",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ProfilePicFormal.jpg",
        width: 1125,
        height: 1395,
        alt: "Jagdish Sah Formal Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdish Sah — Computer Engineering Student & NEPSE Analyst | Bishnupur, Siraha",
    description: "Personal hub of Jagdish Sah from Bishnupur, Siraha, Nepal. Projects, NEPSE research, and official CV.",
    images: ["/ProfilePicFormal.jpg"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://jagdishsah.com.np/#person",
      "name": "Jagdish Sah",
      "alternateName": ["Jagdish", "DayaSah", "jagdishsah126"],
      "gender": "Male",
      "nationality": "Nepalese",
      "birthPlace": {
        "@type": "Place",
        "name": "Bishnupur, Siraha, Nepal",
      },
      "homeLocation": {
        "@type": "Place",
        "name": "Bishnupur, Siraha, Nepal",
      },
      "workLocation": {
        "@type": "Place",
        "name": "Pokhara, Nepal",
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Sagarmatha Higher Secondary School",
          "location": "Mirchaiya, Siraha, Nepal",
        },
        {
          "@type": "EducationalOrganization",
          "name": "Prasadi Academy",
          "location": "Lalitpur, Nepal",
        },
        {
          "@type": "EducationalOrganization",
          "name": "Institute of Engineering (IOE), Western Regional Campus (WRC), Tribhuvan University",
          "location": "Pokhara, Nepal",
        },
      ],
      "jobTitle": "Computer Engineering Student & NEPSE Market Analyst",
      "knowsAbout": [
        "Computer Engineering",
        "Python",
        "Nepal Stock Exchange (NEPSE)",
        "Financial Market Analysis",
        "Autonomous Data Pipelines",
        "Full-Stack Web Development",
        "Agentic AI Development",
      ],
      "url": "https://jagdishsah.com.np",
      "sameAs": [
        "https://github.com/jagdishsah126",
        "https://github.com/DayaSah",
        "https://github.com/Jagdishsah",
        "https://github.com/Jagdish-sah",
        "https://github.com/YourZara",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://jagdishsah.com.np/#website",
      "url": "https://jagdishsah.com.np",
      "name": "Jagdish Sah — Personal Universe",
      "description": "Personal Hub, Interactive Projects, and Official CV of Jagdish Sah",
      "publisher": {
        "@id": "https://jagdishsah.com.np/#person",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fira+Code:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-space-void text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
        <Starfield />
        <AuroraGlow />
        <main className="relative z-10 flex flex-col min-h-screen pb-28">{children}</main>
      </body>
    </html>
  );
}
