import { ProjectPlanet } from "../types";

export const SITE_URL = "https://jagdishsah.com.np";
export const PERSON_ID = SITE_URL + "/#person";

/**
 * Shared Open Graph / Twitter image. One 1200x630 card for every route:
 * social scrapers cache per-URL, so a stable card avoids stale previews.
 */
export const OG_IMAGE = {
  url: "/og-card.jpg",
  width: 1200,
  height: 630,
  alt: "Jagdish Sah — Computer Engineering Student and NEPSE Market Analyst",
};

export type Crumb = { name: string; path: string };

/** BreadcrumbList so sub-pages show a hierarchy in search results. */
export function breadcrumb(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: SITE_URL + item.path,
    })),
  };
}

/** ProfilePage ties a sub-page back to the Person node declared in the layout. */
export function profilePage(name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": SITE_URL + path + "#page",
    url: SITE_URL + path,
    name,
    description,
    isPartOf: { "@id": SITE_URL + "/#website" },
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
    inLanguage: "en",
  };
}

/** ItemList gives search engines an explicit list of the projects on /projects/. */
export function projectItemList(projects: ProjectPlanet[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Jagdish Sah",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.name,
        description: project.tagline,
        applicationCategory: project.category,
        operatingSystem: "Web / Linux",
        author: { "@id": PERSON_ID },
        ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
        ...(project.liveUrl ? { url: project.liveUrl } : {}),
      },
    })),
  };
}
