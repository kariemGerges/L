import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinterestIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 17c-2.5 0-4-1.5-4-3.5 0-1.2.8-2 2-2 .8 0 1.2.5 1.4 1 .1-.8.5-1.5 1.5-1.5 1.3 0 2.1 1.2 2.1 2.7 0 2.2-1.3 4-3.2 4-.6 0-1.2-.3-1.4-.7l-.4 1.5c-.1.5-.4 1-1 1" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4.5a6.5 6.5 0 0 0 6.5 6.5" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}
