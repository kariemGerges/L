import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND_NAME } from "@/lib/constants";

const TESTIMONIALS = [
  {
    name: "Sophie & James",
    event: "Wedding",
    quote: `${BRAND_NAME} transformed our wedding into something beyond our wildest dreams. Every detail felt personal, intentional, and utterly magical.`,
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
  {
    name: "Amara T.",
    event: "Baby Shower",
    quote:
      "Every corner felt thoughtfully styled — soft, beautiful, and full of joy. Our family could not stop taking photos.",
  },
  {
    name: "Robert & Elena",
    event: "25th Anniversary",
    quote:
      "They brought our love story to life through every floral detail and table setting. It was elegant without feeling stiff.",
  },
  {
    name: "Nadia K.",
    event: "Corporate Gala",
    quote:
      "Flawless execution from start to finish. The venue looked breathtaking, and our team felt genuinely cared for throughout.",
  },
] as const;

const MARQUEE_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

type Testimonial = (typeof TESTIMONIALS)[number];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="relative flex h-[23rem] w-[19rem] shrink-0 flex-col bg-cream p-8 sm:h-[24rem] sm:w-[20rem] md:h-[25rem] md:w-[24rem] md:p-10">
      <span className="font-display text-6xl leading-none text-accent-gold" aria-hidden>
        &ldquo;
      </span>
      <p className="mt-4 min-h-0 flex-1 text-sm leading-relaxed text-foreground md:text-base">
        {testimonial.quote}
      </p>
      <footer className="mt-6 shrink-0 border-t border-blush/60 pt-6 md:mt-8">
        <cite className="not-italic">
          <p className="font-display text-lg text-foreground">{testimonial.name}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-muted">{testimonial.event}</p>
        </cite>
      </footer>
    </blockquote>
  );
}

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            title="Kind Words"
            subtitle="Stories from celebrations we've had the honour to craft"
          />
        </RevealOnScroll>
      </div>

      <RevealOnScroll className="relative mt-12 md:mt-16">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-12 md:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12 md:w-24"
          aria-hidden
        />

        <div className="testimonials-marquee overflow-hidden">
          <div className="testimonials-marquee-track flex w-max items-stretch gap-5 px-6 md:gap-8 lg:px-8">
            {MARQUEE_TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
