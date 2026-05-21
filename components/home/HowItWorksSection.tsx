import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Enquire",
    description:
      "Share your vision, date, and dreams. We'll listen closely and respond with warmth within 24 hours.",
  },
  {
    number: "02",
    title: "Plan Together",
    description:
      "We craft a bespoke plan — mood boards, vendors, timelines — with your input at every beautiful step.",
  },
  {
    number: "03",
    title: "Celebrate",
    description:
      "Relax and be present. We handle every detail so your celebration unfolds flawlessly.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            title="How It Works"
            subtitle="A seamless journey from first hello to final toast"
          />
        </RevealOnScroll>

        <div className="relative mt-8 grid gap-12 md:grid-cols-3 md:gap-8">
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-blush md:block"
            aria-hidden
          />
          {STEPS.map((step) => (
            <RevealOnScroll key={step.number}>
              <article className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent-gold bg-background font-display text-xl text-accent-gold">
                  {step.number}
                </div>
                <h3 className="mt-8 font-display text-2xl text-foreground">{step.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
