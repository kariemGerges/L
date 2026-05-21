"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryCategory = "All" | "Birthdays" | "Engagements" | "Weddings" | "Special Events";

const FILTERS: GalleryCategory[] = [
  "All",
  "Birthdays",
  "Engagements",
  "Weddings",
  "Special Events",
];

const GALLERY_ITEMS = [
  { id: 1, category: "Weddings" as const, seed: "wed1", span: "md:row-span-2" },
  { id: 2, category: "Birthdays" as const, seed: "bday1", span: "" },
  { id: 3, category: "Engagements" as const, seed: "eng1", span: "" },
  { id: 4, category: "Special Events" as const, seed: "spec1", span: "md:col-span-2" },
  { id: 5, category: "Weddings" as const, seed: "wed2", span: "" },
  { id: 6, category: "Birthdays" as const, seed: "bday2", span: "" },
  { id: 7, category: "Engagements" as const, seed: "eng2", span: "md:row-span-2" },
  { id: 8, category: "Weddings" as const, seed: "wed3", span: "" },
  { id: 9, category: "Special Events" as const, seed: "spec2", span: "" },
  { id: 10, category: "Birthdays" as const, seed: "bday3", span: "" },
  { id: 11, category: "Engagements" as const, seed: "eng3", span: "" },
  { id: 12, category: "Weddings" as const, seed: "wed4", span: "md:col-span-2" },
] as const;

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("All");

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-200 ${
              activeFilter === filter
                ? "bg-foreground text-cream"
                : "border border-blush text-muted hover:border-accent-gold hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {filtered.map((item) => (
          <article
            key={item.id}
            className={`group relative aspect-[4/5] overflow-hidden ${item.span}`}
          >
            <Image
              src={`https://picsum.photos/seed/${item.seed}/600/800`}
              alt={`${item.category} event`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/70 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-display text-xl italic text-white">{item.category}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
