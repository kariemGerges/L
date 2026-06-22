import Image from "next/image";
import { BRAND_NAME, LOGO_PATH } from "@/lib/constants";

const SIZES = {
  md: { className: "h-20 w-20", width: 80, height: 80 },
  lg: { className: "h-28 w-28 md:h-32 md:w-32", width: 128, height: 128 },
  hero: { className: "h-48 w-48 md:h-60 md:w-60 lg:h-72 lg:w-72", width: 288, height: 288 },
} as const;

const LOGO_SIZES = {
  md: "(max-width: 768px) 80px, 80px",
  lg: "(max-width: 768px) 112px, 128px",
  hero: "(max-width: 768px) 192px, (max-width: 1024px) 240px, 288px",
} as const;

type LogoSize = keyof typeof SIZES;

interface LogoProps {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
  circular?: boolean;
}

export function Logo({
  size = "lg",
  className = "",
  priority = false,
  circular = false,
}: LogoProps) {
  const { className: sizeClass, width, height } = SIZES[size];

  const image = (
    <Image
      src={LOGO_PATH}
      alt={BRAND_NAME}
      width={width}
      height={height}
      priority={priority}
      sizes={LOGO_SIZES[size]}
      className={
        circular
          ? `h-full w-full object-cover ${className}`
          : `shrink-0 object-contain ${sizeClass} ${className}`
      }
    />
  );

  if (circular) {
    return (
      <div className={`shrink-0 overflow-hidden rounded-full ${sizeClass}`}>{image}</div>
    );
  }

  return image;
}
