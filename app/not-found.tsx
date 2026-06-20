import { Button } from "@/components/ui/Button";
import { BRAND_NAME } from "@/lib/constants";
import { notFoundMetadata } from "@/lib/metadata";

export const metadata = notFoundMetadata;

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-display text-6xl font-light text-accent-gold">404</p>
      <h1 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 max-w-md text-muted">
        The celebration you&apos;re looking for may have moved or no longer exists.
      </p>
      <div className="mt-10">
        <Button href="/" variant="primary">
          Return to {BRAND_NAME}
        </Button>
      </div>
    </section>
  );
}
