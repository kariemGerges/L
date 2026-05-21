import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
} from "@/components/ui/SocialIcons";
import { BRAND_NAME, BRAND_TAGLINE, CONTACT_EMAIL, NAV_LINKS } from "@/lib/constants";

const SOCIAL_LINKS = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://pinterest.com", label: "Pinterest", icon: PinterestIcon },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-blush/50 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl italic text-foreground">{BRAND_NAME}</p>
            <p className="mt-2 text-sm text-muted">{BRAND_TAGLINE}</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              Crafting unforgettable celebrations with warmth, elegance, and meticulous
              attention to every detail.
            </p>
          </div>

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
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-blush text-muted transition-all duration-200 hover:border-accent-gold hover:text-accent-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-blush/40 pt-8 md:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="font-display text-sm italic text-accent-gold">
            Every moment, beautifully planned.
          </p>
        </div>
      </div>
    </footer>
  );
}
