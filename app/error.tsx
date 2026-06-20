"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BRAND_NAME } from "@/lib/constants";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-display text-lg italic text-accent-gold">Something went wrong</p>
      <h1 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl">
        We couldn&apos;t load this page
      </h1>
      <p className="mt-6 max-w-md text-muted">
        {process.env.NODE_ENV === "development"
          ? error.message
          : "Please try again or return to the homepage."}
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button type="button" variant="primary" onClick={reset}>
          Try again
        </Button>
        <Button href="/" variant="outline">
          Back to {BRAND_NAME}
        </Button>
      </div>
      {process.env.NODE_ENV === "development" && error.digest && (
        <p className="mt-8 text-xs text-muted">
          Error digest:{" "}
          <code className="font-mono">{error.digest}</code>
        </p>
      )}
      <Link href="/contact" className="mt-6 text-sm text-accent-gold hover:underline">
        Contact support
      </Link>
    </section>
  );
}
