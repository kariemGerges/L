import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-cream hover:bg-muted border border-foreground",
  outline:
    "bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-cream",
  ghost:
    "bg-transparent text-foreground border border-transparent hover:border-blush hover:bg-blush/30",
};

const baseStyles =
  "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-200 ease-out rounded-none";

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
