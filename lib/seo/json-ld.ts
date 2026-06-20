import {
  BRAND_NAME,
  CONTACT_EMAIL,
  LOGO_PATH,
  SITE_DESCRIPTION,
} from "@/lib/constants";
import { getSiteUrl } from "@/lib/env";
import { EVENT_CATEGORIES } from "@/lib/content/events";
import { GALLERY_ITEMS } from "@/lib/content/gallery";
import { PAGE_SEO, type PageSeoKey } from "@/lib/seo/config";

function absoluteUrl(path: string): string {
  const siteUrl = getSiteUrl();
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    "@id": `${getSiteUrl()}/#organization`,
    name: BRAND_NAME,
    description: SITE_DESCRIPTION,
    url: getSiteUrl(),
    logo: absoluteUrl(LOGO_PATH),
    image: absoluteUrl(LOGO_PATH),
    email: CONTACT_EMAIL,
    sameAs: [
      "https://tiktok.com",
      "https://instagram.com",
      "https://pinterest.com",
      "https://x.com",
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: BRAND_NAME,
    description: SITE_DESCRIPTION,
    url: getSiteUrl(),
    publisher: { "@id": `${getSiteUrl()}/#organization` },
    inLanguage: "en-US",
  };
}

export function buildBreadcrumbSchema(pageKey: PageSeoKey) {
  const page = PAGE_SEO[pageKey];
  const siteUrl = getSiteUrl();

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ];

  if (pageKey !== "home") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: page.title,
      item: absoluteUrl(page.path),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function buildWebPageSchema(pageKey: PageSeoKey) {
  const page = PAGE_SEO[pageKey];

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${getSiteUrl()}/#website` },
    about: { "@id": `${getSiteUrl()}/#organization` },
    inLanguage: "en-US",
  };
}

export function buildServiceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${BRAND_NAME} Event Services`,
    itemListElement: EVENT_CATEGORIES.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: category.title,
        description: category.description,
        provider: { "@id": `${getSiteUrl()}/#organization` },
        url: `${absoluteUrl("/events")}#${category.id}`,
      },
    })),
  };
}

export function buildImageGallerySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${BRAND_NAME} Celebration Portfolio`,
    description: PAGE_SEO.gallery.description,
    url: absoluteUrl("/gallery"),
    image: GALLERY_ITEMS.map((item) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(item.src),
      name: item.alt,
      description: `${item.category} — ${item.alt}`,
    })),
  };
}

export function buildPageSchemas(pageKey: PageSeoKey) {
  const schemas: Record<string, unknown>[] = [
    buildWebPageSchema(pageKey),
    buildBreadcrumbSchema(pageKey),
  ];

  if (pageKey === "events") {
    schemas.push(buildServiceCatalogSchema());
  }

  if (pageKey === "gallery") {
    schemas.push(buildImageGallerySchema());
  }

  return schemas;
}

export function buildRootSchemas() {
  return [buildOrganizationSchema(), buildWebSiteSchema()];
}
