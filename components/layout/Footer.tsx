import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SOCIAL_LINKS } from "@/lib/content/social";
import { BRAND_NAME, BRAND_TAGLINE, CONTACT_EMAIL, FOOTER_MOTTO, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-[#080808] px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <Logo size="lg" />
          <p className="mt-5 font-display text-lg italic text-accent-gold/90">{BRAND_TAGLINE}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/45">
            Crafting unforgettable celebrations with warmth, elegance, and meticulous attention to
            every detail.
          </p>
        </div>
      </div>

      <div className="border-t border-blush/50 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-foreground">
                Explore
              </p>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-200 hover:text-accent-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/book"
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent-gold"
                  >
                    Book an Event
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-foreground">
                Connect
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-4 block text-sm text-muted transition-colors hover:text-accent-gold"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-3 text-sm text-muted">DM us on social media</p>
              <div className="mt-4 flex gap-4">
                {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`DM ${BRAND_NAME} on ${label}`}
                    className="flex h-10 w-10 items-center justify-center border border-blush text-muted transition-all duration-200 hover:border-accent-gold hover:text-accent-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-blush/40 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs text-muted">
                &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
              </p>
              <p className="font-display text-sm italic text-accent-gold">{FOOTER_MOTTO}</p>
            </div>
            <p className="mt-6 text-center text-xs text-muted">
              Built and designed by{" "}
              <a
                href="https://kariemgerges.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 transition-colors duration-200 hover:text-accent-gold"
              >
                Kariem Gerges
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
