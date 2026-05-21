export const BRAND_NAME = "Elara Laurent";
export const BRAND_TAGLINE = "Bespoke Celebrations";
export const CONTACT_EMAIL = "hello@elaralaurent.com";
export const CONTACT_PHONE = "+1 (555) 234-8901";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const EVENT_TYPES = [
  "Birthday",
  "Engagement",
  "Wedding",
  "Anniversary",
  "Baby Shower",
  "Corporate",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under $1k",
  "$1k–$3k",
  "$3k–$7k",
  "$7k–$15k",
  "$15k+",
] as const;

export const HEAR_ABOUT_OPTIONS = [
  "Instagram",
  "Pinterest",
  "Friend or Family",
  "Google Search",
  "Wedding Fair",
  "Other",
] as const;
