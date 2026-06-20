"use client";

import { Cake, Gem, Heart, LayoutGrid, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type GalleryCategory = "All" | "Birthdays" | "Engagements" | "Weddings" | "Special Events";

const FILTERS: {
  label: GalleryCategory;
  icon: typeof LayoutGrid;
}[] = [
  { label: "All", icon: LayoutGrid },
  { label: "Birthdays", icon: Cake },
  { label: "Engagements", icon: Gem },
  { label: "Weddings", icon: Heart },
  { label: "Special Events", icon: Sparkles },
];

const GALLERY_ITEMS = [
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

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("All");

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted">
              Curated collection
            </p>
            <p className="mt-1 font-display text-2xl italic text-foreground md:text-3xl">
              Filter by celebration
            </p>
            <div className="mx-auto mt-4 h-px w-12 bg-accent-gold/70" aria-hidden />
          </div>

          <div
            className="flex w-full flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Filter gallery by event type"
          >
            {FILTERS.map(({ label, icon: Icon }) => {
              const isActive = activeFilter === label;
              return (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(label)}
                  className={`group flex items-center gap-2 border px-4 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "border-accent-gold bg-accent-gold/10 text-foreground shadow-[0_0_0_1px_rgba(201,168,76,0.15)]"
                      : "border-blush/60 bg-transparent text-muted hover:border-accent-gold/50 hover:text-foreground"
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 transition-colors duration-300 ${
                      isActive ? "text-accent-gold" : "text-muted group-hover:text-accent-gold"
                    }`}
                    strokeWidth={1.5}
                  />
                  {label}
                </button>
              );
            })}
          </div>

          <p className="font-display text-sm italic text-muted">
            Showing{" "}
            <span className="text-accent-gold">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "celebration" : "celebrations"}
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {filtered.map((item) => (
          <article key={item.id} className="group relative aspect-square overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
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
