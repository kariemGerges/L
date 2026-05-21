"use client";

interface MenuToggleProps {
  open: boolean;
  onClick: () => void;
}

export function MenuToggle({ open, onClick }: MenuToggleProps) {
  if (open) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-foreground/20 bg-background/80 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold lg:hidden"
      aria-label="Open menu"
      aria-expanded={false}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 rounded-full bg-accent-gold transition-transform duration-300 group-hover:scale-125" />
        <span className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-foreground" />
      </span>
      <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground">
        Menu
      </span>
    </button>
  );
}
