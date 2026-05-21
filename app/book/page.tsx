import { BookingForm } from "@/components/book/BookingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Event",
  description: "Start planning your bespoke celebration with Elara Laurent.",
};

export default function BookPage() {
  return (
    <section className="bg-background pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="font-display text-lg italic text-accent-gold">Begin your journey</p>
        <h1 className="mt-4 font-display text-5xl font-light text-foreground md:text-6xl">
          Book Your Event
        </h1>
        <p className="mt-6 text-muted">
          Tell us about your celebration. We&apos;ll respond within 24 hours with next steps.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl px-6 lg:px-8">
        <BookingForm />
      </div>
    </section>
  );
}
