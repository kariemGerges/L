import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    name: "Sophie & James",
    event: "Wedding",
    quote:
      "Lumé Events transformed our wedding into something beyond our wildest dreams. Every detail felt personal, intentional, and utterly magical.",
  },
  {
    name: "Michelle R.",
    event: "40th Birthday",
    quote:
      "From the first consultation to the final dance, the experience was seamless. Our guests are still talking about how stunning everything was.",
  },
  {
    name: "David & Priya",
    event: "Engagement Party",
    quote:
      "Warm, professional, and impossibly creative. She understood our vision instantly and delivered a celebration that felt uniquely us.",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            title="Kind Words"
            subtitle="Stories from celebrations we've had the honour to craft"
          />
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <RevealOnScroll key={testimonial.name}>
              <blockquote className="relative flex h-full flex-col bg-cream p-8 md:p-10">
                <span
                  className="font-display text-6xl leading-none text-accent-gold"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground md:text-base">
                  {testimonial.quote}
                </p>
                <footer className="mt-8 border-t border-blush/60 pt-6">
                  <cite className="not-italic">
                    <p className="font-display text-lg text-foreground">{testimonial.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                      {testimonial.event}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
