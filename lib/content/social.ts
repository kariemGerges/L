import {
  InstagramIcon,
  PinterestIcon,
  TikTokIcon,
  XIcon,
} from "@/components/ui/SocialIcons";

export const SOCIAL_LINKS = [
  { href: "https://www.tiktok.com/@lume.events1?_r=1&_t=ZP-97gUT6XZ6Io", label: "TikTok", icon: TikTokIcon },
  { href: "https://www.instagram.com/lume.events1?utm_source=qr", label: "Instagram", icon: InstagramIcon },
  { href: "https://pin.it/43PBmlLdo", label: "Pinterest", icon: PinterestIcon },
  { href: "https://x.com/LumEvents1", label: "X", icon: XIcon },
] as const;
