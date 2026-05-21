import { Award, HeartHandshake, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND_NAME } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the planner behind your perfect celebration.",
};

const VALUES = [
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description:
      "Every ribbon, every place card, every moment is considered — because the smallest touches create the biggest memories.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Touch",
    description:
      "Your story guides our design. We listen deeply and translate your vision into a celebration that feels unmistakably yours.",
  },
  {
    icon: Award,
    title: "Stress-Free Planning",
    description:
      "From vendor coordination to day-of management, we handle the logistics so you can be fully present for your moment.",
  },
] as const;

const STATS = [
  { value: "150+", label: "Events Planned" },
  { value: "8", label: "Years Experience" },
  { value: "5-Star", label: "Reviews" },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="bg-blush/30 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-display text-lg italic text-accent-gold">Meet your planner</p>
          <h1 className="mt-4 font-display text-5xl font-light text-foreground md:text-6xl">
            {BRAND_NAME}
          </h1>
          <p className="mt-6 font-display text-xl italic text-muted">
            Turning visions into unforgettable celebrations
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <RevealOnScroll>
            <div>
              <h2 className="font-display text-4xl text-foreground">My Story</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  I founded {BRAND_NAME} with a simple belief: every celebration deserves to feel
                  as meaningful as the moment it honours. With a background in design and a
                  lifelong love of bringing people together, I&apos;ve spent eight years crafting
                  events that blend editorial elegance with genuine warmth.
                </p>
                <p>
                  From intimate engagement dinners to grand wedding weekends, I approach each
                  project as a collaboration — listening first, designing second, and executing
                  with meticulous care. My clients trust me not only for beautiful aesthetics, but
                  for the calm, capable presence I bring to every step of the journey.
                </p>
                <p>
                  When I&apos;m not sketching floor plans or sourcing the perfect linen, you&apos;ll
                  find me exploring florists, collecting vintage tableware, and dreaming up the
                  next unforgettable gathering.
                </p>
              </div>
              <Button href="/book" variant="primary" className="mt-10">
                Work With Me
              </Button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/planner/700/900"
                alt={`${BRAND_NAME}, event planner`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading title="Our Values" subtitle="The principles behind every celebration" />
          </RevealOnScroll>
          <div className="grid gap-10 md:grid-cols-3">
            {VALUES.map((value) => (
              <RevealOnScroll key={value.title}>
                <article className="text-center md:text-left">
                  <value.icon className="mx-auto h-8 w-8 text-accent-gold md:mx-0" strokeWidth={1.25} />
                  <h3 className="mt-6 font-display text-2xl text-foreground">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{value.description}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-blush/50 bg-cream py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-around gap-10 px-6 sm:flex-row lg:px-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl text-accent-gold">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
