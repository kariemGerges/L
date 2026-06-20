export type GalleryCategory =
  | "All"
  | "Birthdays"
  | "Engagements"
  | "Weddings"
  | "Special Events";

export const GALLERY_FILTERS: GalleryCategory[] = [
  "All",
  "Birthdays",
  "Engagements",
  "Weddings",
  "Special Events",
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/1.JPG",
    category: "Special Events" as const,
    alt: "Baby shower floor seating and table styling",
  },
  {
    id: 2,
    src: "/2.JPG",
    category: "Birthdays" as const,
    alt: "Birthday celebration decoration",
  },
  {
    id: 3,
    src: "/3.JPG",
    category: "Engagements" as const,
    alt: "Engagement party setup",
  },
  {
    id: 4,
    src: "/4.JPG",
    category: "Special Events" as const,
    alt: "Special event decoration",
  },
  {
    id: 5,
    src: "/5.JPG",
    category: "Weddings" as const,
    alt: "Wedding welcome mirror display",
  },
  {
    id: 6,
    src: "/6.JPG",
    category: "Birthdays" as const,
    alt: "Birthday event styling",
  },
  {
    id: 7,
    src: "/7.jpeg",
    category: "Engagements" as const,
    alt: "Engagement celebration decor",
  },
  {
    id: 8,
    src: "/8.JPG",
    category: "Weddings" as const,
    alt: "Wedding reception styling",
  },
  {
    id: 9,
    src: "/9.jpeg",
    category: "Special Events" as const,
    alt: "Elegant banquet table decoration",
  },
] as const;
