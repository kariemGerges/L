"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { MenuToggle } from "@/components/layout/MenuToggle";
import { BRAND_NAME, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const useLightNav = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? "pointer-events-none bg-transparent"
            : scrolled
              ? "bg-white/95 shadow-sm backdrop-blur-sm"
              : "bg-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8 ${
            mobileOpen ? "[&_a]:pointer-events-auto" : ""
          }`}
        >
          <Link
            href="/"
            aria-label={`${BRAND_NAME} — Home`}
            className={`transition-opacity duration-200 hover:opacity-80 ${
              mobileOpen ? "pointer-events-auto" : ""
            }`}
            onClick={() => setMobileOpen(false)}
          >
            <BrandMark light={useLightNav} />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`text-sm uppercase tracking-widest transition-colors duration-200 hover:text-accent-gold ${
                    pathname === link.href
                      ? "text-accent-gold"
                      : useLightNav
                        ? "text-cream/85"
                        : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              href="/book"
              variant="primary"
              className={`!py-2.5 !px-5 !text-xs ${
                useLightNav
                  ? "!border-accent-gold !bg-accent-gold !text-foreground hover:!bg-accent-gold/90"
                  : ""
              }`}
            >
              Book Now
            </Button>
          </div>

          <div className={mobileOpen ? "pointer-events-auto" : ""}>
            <MenuToggle
              open={mobileOpen}
              onClick={() => setMobileOpen(true)}
              light={useLightNav}
            />
          </div>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
