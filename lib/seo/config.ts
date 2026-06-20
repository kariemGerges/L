import {
  ABOUT_IMAGE_PATH,
  BRAND_NAME,
  BRAND_TAGLINE,
  LOGO_PATH,
} from "@/lib/constants";

export type PageSeoKey =
  | "home"
  | "about"
  | "events"
  | "gallery"
  | "contact"
  | "book";

export interface PageSeoEntry {
  path: string;
  title: string;
  description: string;
  keywords: readonly string[];
  ogImage: string;
  ogImageAlt: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}

/** Default Open Graph / Twitter share image (1200×630 recommended; use best available asset). */
export const DEFAULT_OG_IMAGE = ABOUT_IMAGE_PATH;

export const SITE_KEYWORDS = [
  "event planning",
  "event decoration",
  "wedding decor",
  "birthday party styling",
  "engagement party",
  "bridal shower",
  "baby shower decor",
  "bespoke celebrations",
  "Lumé Events",
] as const;

export const PAGE_SEO: Record<PageSeoKey, PageSeoEntry> = {
  home: {
    path: "/",
    title: BRAND_TAGLINE,
    description:
      "Lumé Events creates bespoke weddings, birthdays, engagements, and special celebrations with elegant decor, personal styling, and unforgettable details.",
    keywords: [
      ...SITE_KEYWORDS,
      "celebration planner",
      "party decoration",
      "creating moments that shine",
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: `${BRAND_NAME} — elegant event decoration and planning`,
    changeFrequency: "weekly",
    priority: 1,
  },
  about: {
    path: "/about",
    title: "About Us",
    description:
      "Discover the story behind Lumé Events — from a passion for decorating to a full-service event styling business creating beautiful, memorable celebrations.",
    keywords: [
      ...SITE_KEYWORDS,
      "about Lumé Events",
      "event stylist",
      "our story",
    ],
    ogImage: ABOUT_IMAGE_PATH,
    ogImageAlt: "Elegant birthday event decoration by Lumé Events",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  events: {
    path: "/events",
    title: "Event Services",
    description:
      "Explore Lumé Events services for weddings, engagement parties, birthdays, baby showers, and custom celebrations — full styling from concept to setup.",
    keywords: [
      ...SITE_KEYWORDS,
      "wedding planning",
      "birthday parties",
      "engagement parties",
      "special events",
    ],
    ogImage: "/5.JPG",
    ogImageAlt: "Wedding welcome display styled by Lumé Events",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  gallery: {
    path: "/gallery",
    title: "Gallery",
    description:
      "Browse Lumé Events portfolio of past celebrations — weddings, birthdays, engagements, bridal showers, and bespoke party decor and table styling.",
    keywords: [
      ...SITE_KEYWORDS,
      "event portfolio",
      "party decor gallery",
      "celebration photos",
    ],
    ogImage: "/1.JPG",
    ogImageAlt: "Baby shower table styling by Lumé Events",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  contact: {
    path: "/contact",
    title: "Contact",
    description:
      "Reach Lumé Events by email or DM on social media. Book your celebration online — we respond within 24 hours.",
    keywords: [
      ...SITE_KEYWORDS,
      "contact event planner",
      "book consultation",
      "get a quote",
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: `Contact ${BRAND_NAME}`,
    changeFrequency: "monthly",
    priority: 0.75,
  },
  book: {
    path: "/book",
    title: "Book Your Event",
    description:
      "Book your celebration with Lumé Events. Share your vision, date, and guest count — we'll respond within 24 hours to begin planning your event.",
    keywords: [
      ...SITE_KEYWORDS,
      "book event planner",
      "event enquiry",
      "request a quote",
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: `Book an event with ${BRAND_NAME}`,
    changeFrequency: "monthly",
    priority: 0.95,
  },
};

export const MANIFEST = {
  name: BRAND_NAME,
  short_name: BRAND_NAME,
  description:
    "Bespoke event planning and decoration for weddings, birthdays, and special celebrations.",
  start_url: "/",
  display: "standalone" as const,
  background_color: "#faf7f2",
  theme_color: "#1a1209",
  icons: [
    { src: LOGO_PATH, sizes: "512x512", type: "image/jpeg", purpose: "any" as const },
  ],
};
