interface BrandMarkProps {
  light?: boolean;
  className?: string;
}

export function BrandMark({ light = false, className = "" }: BrandMarkProps) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span
        className={`font-display text-2xl italic tracking-wide md:text-3xl ${
          light ? "text-cream" : "text-foreground"
        }`}
      >
        Lumé
      </span>
      <span
        className={`mt-1 text-[10px] font-medium uppercase tracking-[0.4em] ${
          light ? "text-cream/55" : "text-muted"
        }`}
      >
        Events
      </span>
    </span>
  );
}
