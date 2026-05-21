import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blush/30 via-background to-accent-gold/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-blush/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-1/4 h-72 w-72 rounded-full bg-accent-gold/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="animate-fade-up font-display text-lg italic text-accent-gold md:text-xl">
          Celebrations, reimagined
        </p>
        <h1 className="animate-fade-up mt-6 font-display text-5xl font-light leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl [animation-delay:100ms]">
          Every Moment,
          <br />
          <span className="italic">Beautifully Planned</span>
        </h1>
        <p className="animate-fade-up mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg [animation-delay:200ms]">
          Bespoke event experiences for life&apos;s most meaningful celebrations
        </p>
        <div className="animate-fade-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:300ms]">
          <Button href="/book" variant="primary">
            Book Your Event
          </Button>
          <Button href="/events" variant="outline">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
