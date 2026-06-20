import type { MetadataRoute } from "next";
import { GALLERY_ITEMS } from "@/lib/content/gallery";
import { getSiteUrl } from "@/lib/env";
import { PAGE_SEO, type PageSeoKey } from "@/lib/seo/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return (Object.keys(PAGE_SEO) as PageSeoKey[]).map((key) => {
    const page = PAGE_SEO[key];
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${siteUrl}${page.path === "/" ? "" : page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    };

    if (key === "gallery") {
      entry.images = GALLERY_ITEMS.map((item) => `${siteUrl}${item.src}`);
    }

    return entry;
  });
}
