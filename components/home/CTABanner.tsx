import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CTABanner() {
  return (
    <section className="bg-blush/40 py-20 md:py-28">
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-display text-lg italic text-accent-gold">Let&apos;s begin</p>
          <h2 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl">
            Ready to start planning?
          </h2>
          <p className="mt-6 text-muted">
            Your celebration deserves to be extraordinary. Share your vision and let&apos;s create
            something unforgettable together.
          </p>
          <div className="mt-10">
            <Button href="/book" variant="primary">
              Book Your Consultation
            </Button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
