import { Award, HeartHandshake, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND_NAME, ABOUT_IMAGE_PATH } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Lumé Events grew from a passion for decorating into a business dedicated to creating beautiful, memorable celebrations.",
};

const VALUES = [
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description:
      "Every ribbon, every place card, every moment is considered — because the smallest touches create the biggest memories.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Touch",
    description:
      "Your story guides our design. We listen deeply and translate your vision into a celebration that feels unmistakably yours.",
  },
  {
    icon: Award,
    title: "Beautiful Setups",
    description:
      "From birthdays to bridal showers, we transform ordinary spaces into elegant, unforgettable experiences.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="bg-blush/30 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-display text-lg italic text-accent-gold">About us</p>
          <h1 className="mt-4 font-display text-5xl font-light text-foreground md:text-6xl">
            Welcome to {BRAND_NAME}
          </h1>
          <p className="mt-6 font-display text-xl italic text-muted">
            Creating moments that shine
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <RevealOnScroll>
            <div>
              <h2 className="font-display text-4xl text-foreground">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  The idea for {BRAND_NAME} started long before. For a long time, I found myself
                  thinking about creating an event decoration business. I spent time researching,
                  learning, planning, and making lists of the products, supplies, and ideas I would
                  need to bring my vision to life.
                </p>
                <p>
                  I have always enjoyed decorating and creating beautiful setups for friends and
                  family. Over time, I realized how much I loved transforming ordinary spaces into
                  something special and memorable.
                </p>
                <p>
                  When it came time to plan my own birthday celebration, I put all of my ideas
                  together and created a decoration setup that reflected my style and creativity.
                  After sharing photos and videos on social media, I received so many positive
                  comments and messages from friends and others who loved the design. Their
                  encouragement gave me the confidence to take the next step. That experience made me
                  realize it was time to turn my passion into a business.
                </p>
                <p>
                  Today, {BRAND_NAME} was created with the goal of helping people celebrate
                  life&apos;s most meaningful moments. Whether it&apos;s a birthday, engagement,
                  bridal shower, baby shower, or special gathering, we believe every event deserves
                  beauty, creativity, and a personal touch.
                </p>
                <p>
                  The name &ldquo;Lumé&rdquo; represents light, glow, and the joy that comes from
                  celebrating special occasions. Our mission is to create elegant and
                  unforgettable experiences that bring people together and leave lasting memories.
                </p>
                <p>
                  Thank you for being part of our journey. We look forward to helping you create
                  moments that shine.
                </p>
              </div>
              <Button href="/book" variant="primary" className="mt-10">
                Book Your Event
              </Button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="relative aspect-[3/4] overflow-hidden lg:sticky lg:top-32">
              <Image
                src={ABOUT_IMAGE_PATH}
                alt={`Elegant event tablescape styled by ${BRAND_NAME}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading title="Our Values" subtitle="The principles behind every celebration" />
          </RevealOnScroll>
          <div className="grid gap-10 md:grid-cols-3">
            {VALUES.map((value) => (
              <RevealOnScroll key={value.title}>
                <article className="text-center md:text-left">
                  <value.icon className="mx-auto h-8 w-8 text-accent-gold md:mx-0" strokeWidth={1.25} />
                  <h3 className="mt-6 font-display text-2xl text-foreground">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{value.description}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
