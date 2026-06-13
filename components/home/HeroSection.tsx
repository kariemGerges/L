import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12)_0%,transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-gold/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-1/4 h-80 w-80 rounded-full bg-accent-gold/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="animate-fade-up flex justify-center">
          <Logo size="hero" priority circular />
        </div>
        <p className="animate-fade-up mt-8 text-xs uppercase tracking-[0.35em] text-accent-gold/80 [animation-delay:100ms]">
          Creating moments that shine
        </p>
        <p className="animate-fade-up mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream/60 md:text-lg [animation-delay:200ms]">
          Bespoke event experiences for life&apos;s most meaningful celebrations
        </p>
        <div className="animate-fade-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:300ms]">
          <Button
            href="/book"
            variant="primary"
            className="!border-accent-gold !bg-accent-gold !text-foreground hover:!bg-accent-gold/90"
          >
            Book Your Event
          </Button>
          <Button
            href="/events"
            variant="outline"
            className="!border-cream/25 !text-cream hover:!border-cream hover:!bg-cream hover:!text-foreground"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
