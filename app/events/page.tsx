import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { EVENT_CATEGORIES } from "@/lib/content/events";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("events");

export default function EventsPage() {
  return (
    <>
      <PageJsonLd pageKey="events" />
      <section className="bg-blush/30 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-display text-lg italic text-accent-gold">Our services</p>
          <h1 className="mt-4 font-display text-5xl font-light text-foreground md:text-6xl">
            Celebrations We Craft
          </h1>
          <p className="mt-6 text-muted">
            Every event is a blank canvas. We bring vision, expertise, and warmth to create
            experiences your guests will remember forever.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6 lg:px-8">
          {EVENT_CATEGORIES.map((category, index) => (
            <RevealOnScroll key={category.id}>
              <article
                id={category.id}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <category.icon
                    className="h-8 w-8 text-accent-gold"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <h2 className="mt-6 font-display text-4xl text-foreground">{category.title}</h2>
                  <p className="mt-6 leading-relaxed text-muted">{category.description}</p>
                  <Link
                    href="/book"
                    className="mt-8 inline-block text-sm uppercase tracking-widest text-accent-gold transition-colors hover:text-foreground"
                  >
                    Start planning →
                  </Link>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="border-t border-blush/50 bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            title="Not sure where to begin?"
            subtitle="Book a complimentary consultation and we'll help shape your perfect celebration."
          />
          <Button href="/book" variant="primary" className="mt-4">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
