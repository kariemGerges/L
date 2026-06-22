import { Cake, Gem, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    icon: Cake,
    title: "Birthdays",
    description:
      "Milestone celebrations and intimate gatherings styled with personality and polish.",
    href: "/events#birthdays",
  },
  {
    icon: Gem,
    title: "Engagements",
    description:
      "Romantic soirées and engagement parties that capture your love story beautifully.",
    href: "/events#engagements",
  },
  {
    icon: Heart,
    title: "Weddings",
    description:
      "Full-service wedding planning from vision to vows — seamless, stunning, stress-free.",
    href: "/events#weddings",
  },
  {
    icon: Sparkles,
    title: "Special Events",
    description:
      "Baby showers, anniversaries, corporate galas, and one-of-a-kind celebrations.",
    href: "/events#special",
  },
] as const;

export function ServicesSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            title="What We Create"
            subtitle="Thoughtfully designed experiences for every chapter of your story"
          />
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <RevealOnScroll key={service.title} className={`delay-[${index * 100}ms]`}>
              <Link
                href={service.href}
                className="group flex h-full flex-col border border-transparent bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold hover:shadow-lg"
              >
                <service.icon
                  className="h-8 w-8 text-accent-gold transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.25}
                />
                <h3 className="mt-6 font-display text-2xl text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="mt-6 text-xs uppercase tracking-widest text-accent-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
