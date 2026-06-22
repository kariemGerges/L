"use client";

interface MenuToggleProps {
  open: boolean;
  onClick: () => void;
  light?: boolean;
}

export function MenuToggle({ open, onClick, light = false }: MenuToggleProps) {
  if (open) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex min-h-11 min-w-11 items-center justify-center gap-2 overflow-hidden rounded-full border px-4 py-3 transition-all duration-300 hover:border-accent-gold lg:hidden ${
        light
          ? "border-cream/25 bg-black/30"
          : "border-foreground/20 bg-background/95"
      }`}
      aria-label="Open menu"
      aria-expanded={false}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 rounded-full bg-accent-gold transition-transform duration-300 group-hover:scale-125" />
        <span
          className={`absolute inset-0 m-auto h-1 w-1 rounded-full ${
            light ? "bg-cream" : "bg-foreground"
          }`}
        />
      </span>
      <span
        className={`text-[10px] font-medium uppercase tracking-[0.25em] ${
          light ? "text-cream/85" : "text-foreground"
        }`}
      >
        Menu
      </span>
    </button>
  );
}
