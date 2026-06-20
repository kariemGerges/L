import type { Metadata } from "next";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  LOGO_PATH,
  SITE_DESCRIPTION,
} from "@/lib/constants";
import { getSiteUrl } from "@/lib/env";
import { DEFAULT_OG_IMAGE, PAGE_SEO, SITE_KEYWORDS, type PageSeoKey } from "@/lib/seo/config";

function absoluteUrl(path: string): string {
  const siteUrl = getSiteUrl();
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

function buildOpenGraphImage(imagePath: string, alt: string) {
  return [
    {
      url: imagePath,
      width: 1200,
      height: 630,
      alt,
      type: imagePath.endsWith(".jpeg") || imagePath.endsWith(".jpg") || imagePath.endsWith(".JPG")
        ? "image/jpeg"
        : "image/png",
    },
  ];
}

const DEFAULT_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

/** Enterprise-grade metadata for a registered page route. */
export function getPageMetadata(pageKey: PageSeoKey): Metadata {
  const page = PAGE_SEO[pageKey];
  const canonical = absoluteUrl(page.path);
  const ogTitle =
    pageKey === "home"
      ? `${BRAND_NAME} | ${BRAND_TAGLINE}`
      : `${page.title} | ${BRAND_NAME}`;

  return {
    title: pageKey === "home" ? { absolute: ogTitle } : page.title,
    description: page.description,
    keywords: [...page.keywords],
    alternates: {
      canonical,
    },
    robots: DEFAULT_ROBOTS,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: BRAND_NAME,
      title: ogTitle,
      description: page.description,
      images: buildOpenGraphImage(page.ogImage, page.ogImageAlt),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: page.description,
      images: [page.ogImage],
    },
  };
}

/** @deprecated Use getPageMetadata(pageKey) instead. */
export function createPageMetadata(
  title: string,
  description: string = SITE_DESCRIPTION,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${BRAND_NAME}`,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: BRAND_NAME,
  title: {
    default: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: getSiteUrl(),
  },
  robots: DEFAULT_ROBOTS,
  icons: {
    icon: LOGO_PATH,
    apple: LOGO_PATH,
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getSiteUrl(),
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: buildOpenGraphImage(
      DEFAULT_OG_IMAGE,
      `${BRAND_NAME} — elegant event decoration and planning`,
    ),
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export const notFoundMetadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};
