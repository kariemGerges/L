import { Cake, Gem, Heart, Sparkles } from "lucide-react";

export const EVENT_CATEGORIES = [
  {
    id: "birthdays",
    icon: Cake,
    title: "Birthday Parties",
    description:
      "From intimate dinner parties to lavish milestone celebrations, we design birthdays that reflect the guest of honour's personality — thoughtful details, curated menus, and atmospheres that spark joy.",
    image: "/3.JPG",
  },
  {
    id: "engagements",
    icon: Gem,
    title: "Engagement Parties",
    description:
      "Celebrate your love story with an engagement party that sets the tone for your journey ahead. Romantic florals, candlelit tables, and bespoke touches that feel effortlessly elegant.",
    image: "/2.JPG",
  },
  {
    id: "weddings",
    icon: Heart,
    title: "Weddings",
    description:
      "Full-service wedding planning from concept to celebration day. Venue selection, vendor curation, timeline management, and design direction — so you can savour every moment.",
    image: "/5.JPG",
  },
  {
    id: "special",
    icon: Sparkles,
    title: "Special & Custom Events",
    description:
      "Baby showers, anniversaries, corporate retreats, and celebrations that defy categorisation. If you can dream it, we can design and deliver it with grace.",
    image: "/4.JPG",
  },
] as const;
