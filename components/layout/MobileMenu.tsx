"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { BRAND_NAME, CONTACT_EMAIL, NAV_LINKS } from "@/lib/constants";

const MARQUEE = "Every moment, beautifully planned — ";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={`menu-reveal fixed inset-0 z-[60] flex flex-col lg:hidden ${open ? "is-open" : ""}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal={open}
      aria-label="Navigation menu"
    >
      <div className="absolute inset-0 bg-foreground" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #faf7f2 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="menu-ui pointer-events-none absolute left-5 top-5 h-10 w-10 border-l border-t border-accent-gold/60" />
      <div className="menu-ui pointer-events-none absolute right-5 top-5 h-10 w-10 border-r border-t border-accent-gold/60" />
      <div className="menu-ui pointer-events-none absolute bottom-5 left-5 h-10 w-10 border-b border-l border-accent-gold/60" />
      <div className="menu-ui pointer-events-none absolute bottom-5 right-5 h-10 w-10 border-b border-r border-accent-gold/60" />

      <div className="menu-ui relative flex items-center justify-between px-6 pt-8">
        <Link
          href="/"
          onClick={onClose}
          className="font-display text-xl italic text-cream/90 transition-opacity hover:text-accent-gold"
          tabIndex={open ? 0 : -1}
        >
          {BRAND_NAME}
        </Link>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          className="group flex items-center gap-3 text-cream/80 transition-colors hover:text-accent-gold"
          aria-label="Close menu"
        >
          <span className="font-display text-lg italic">Close</span>
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute h-px w-5 rotate-45 bg-current transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute h-px w-5 -rotate-45 bg-current transition-transform duration-300 group-hover:scale-110" />
          </span>
        </button>
      </div>

      <nav className="relative flex flex-1 flex-col justify-center px-6">
        <ul>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="menu-item border-b border-cream/10 last:border-b-0">
                <Link
                  href={link.href}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  className="group flex items-center justify-between py-5"
                >
                  <span
                    className={`font-display text-[2.75rem] font-light leading-none transition-all duration-300 md:text-5xl ${
                      isActive
                        ? "italic text-accent-gold"
                        : "text-cream group-hover:translate-x-2 group-hover:text-accent-gold"
                    }`}
                  >
                    {link.label}
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                      isActive
                        ? "text-accent-gold opacity-100"
                        : "text-cream/30 opacity-0 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-gold group-hover:opacity-100"
                    }`}
                    strokeWidth={1.25}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="menu-ui relative space-y-8 px-6 pb-10">
        <Link
          href="/book"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          className="group flex items-center justify-between border border-accent-gold/50 bg-accent-gold/10 px-6 py-5 transition-colors duration-300 hover:border-accent-gold hover:bg-accent-gold/20"
        >
          <span className="font-display text-2xl italic text-cream">Book Your Event</span>
          <ArrowUpRight
            className="h-6 w-6 text-accent-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            strokeWidth={1.25}
          />
        </Link>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          className="block text-center text-[10px] uppercase tracking-[0.3em] text-cream/40 transition-colors hover:text-accent-gold"
        >
          {CONTACT_EMAIL}
        </a>

        <div className="overflow-hidden border-t border-cream/10 pt-6">
          <div className="menu-marquee-track flex w-max whitespace-nowrap">
            <span className="px-4 font-display text-sm italic text-cream/25">
              {MARQUEE.repeat(4)}
            </span>
            <span className="px-4 font-display text-sm italic text-cream/25" aria-hidden>
              {MARQUEE.repeat(4)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
