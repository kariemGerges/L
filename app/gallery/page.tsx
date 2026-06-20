import { GalleryGrid } from "@/app/gallery/GalleryGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("gallery");

export default function GalleryPage() {
  return (
    <>
      <PageJsonLd pageKey="gallery" />
      <section className="bg-blush/30 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-display text-lg italic text-accent-gold">Portfolio</p>
          <h1 className="mt-4 font-display text-5xl font-light text-foreground md:text-6xl">
            Past Celebrations
          </h1>
          <p className="mt-6 text-muted">
            A glimpse into the moments we&apos;ve had the privilege to bring to life.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
