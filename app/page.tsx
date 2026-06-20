import { CTABanner } from "@/components/home/CTABanner";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("home");

export default function HomePage() {
  return (
    <>
      <PageJsonLd pageKey="home" />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
