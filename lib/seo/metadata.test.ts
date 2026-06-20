import { describe, expect, it } from "vitest";
import { PAGE_SEO } from "@/lib/seo/config";
import { getPageMetadata } from "@/lib/metadata";

describe("SEO metadata", () => {
  it("generates canonical URLs for every page", () => {
    for (const key of Object.keys(PAGE_SEO) as (keyof typeof PAGE_SEO)[]) {
      const metadata = getPageMetadata(key);
      expect(metadata.alternates?.canonical).toBeTruthy();
      expect(metadata.description).toBeTruthy();
      expect(metadata.openGraph?.title).toBeTruthy();
      expect(metadata.twitter?.title).toBeTruthy();
    }
  });

  it("keeps descriptions within recommended SEO length", () => {
    for (const page of Object.values(PAGE_SEO)) {
      expect(page.description.length).toBeLessThanOrEqual(160);
      expect(page.description.length).toBeGreaterThan(50);
    }
  });

  it("uses noindex for 404 metadata", async () => {
    const { notFoundMetadata } = await import("@/lib/metadata");
    expect(notFoundMetadata.robots).toEqual(
      expect.objectContaining({ index: false, follow: true }),
    );
  });
});
