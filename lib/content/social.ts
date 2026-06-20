import {
  InstagramIcon,
  PinterestIcon,
  TikTokIcon,
  XIcon,
} from "@/components/ui/SocialIcons";

export const SOCIAL_LINKS = [
  { href: "https://tiktok.com", label: "TikTok", icon: TikTokIcon },
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://pinterest.com", label: "Pinterest", icon: PinterestIcon },
  { href: "https://x.com", label: "X", icon: XIcon },
] as const;
