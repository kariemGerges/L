import { ArrowUpRight, CalendarHeart, Clock, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { SOCIAL_LINKS } from "@/lib/content/social";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/constants";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("contact");

const PRIMARY_SOCIAL = SOCIAL_LINKS[0];

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    label: "Email us",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    description: "Share your vision, questions, or event details — we read every message.",
    cta: "Send email",
  },
  {
    icon: MessageCircle,
    label: "DM us",
    value: "On social media",
    href: PRIMARY_SOCIAL.href,
    description:
      "Send us a direct message on TikTok, Instagram, Pinterest, or X — we'd love to hear from you.",
    cta: "Message us",
    external: true,
  },
  {
    icon: CalendarHeart,
    label: "Book online",
    value: "Start your enquiry",
    href: "/book",
    description: "Tell us about your celebration through our guided booking experience.",
    cta: "Book now",
  },
] as const;

const RESPONSE_POINTS = [
  {
    icon: Clock,
    title: "Within 24 hours",
    description: "We respond to every email and DM within one business day.",
  },
  {
    icon: MessageCircle,
    title: "DM us anytime",
    description: "Reach out on TikTok, Instagram, Pinterest, or X — we're always listening.",
  },
  {
    icon: Mail,
    title: "Clear next steps",
    description: "You'll receive a thoughtful reply with guidance on moving forward.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageJsonLd pageKey="contact" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#080808] pt-32 pb-24 md:pt-40 md:pb-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.14)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-display text-lg italic text-accent-gold">Say hello</p>
          <h1 className="mt-4 font-display text-5xl font-light text-cream md:text-6xl">
            Let&apos;s Start the Conversation
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/55 md:text-lg">
            Email us, DM us on social media, or book online — {BRAND_NAME} is here to help
            bring your celebration to life.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="relative z-10 -mt-12 px-6 pb-20 md:-mt-16 md:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 md:gap-6">
          {CONTACT_CHANNELS.map((channel, index) => (
            <RevealOnScroll key={channel.label}>
              <a
                href={channel.href}
                target={"external" in channel && channel.external ? "_blank" : undefined}
                rel={
                  "external" in channel && channel.external ? "noopener noreferrer" : undefined
                }
                className="group flex h-full flex-col border border-blush/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold hover:shadow-md md:p-10"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <channel.icon
                  className="h-7 w-7 text-accent-gold transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.25}
                />
                <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.35em] text-muted">
                  {channel.label}
                </p>
                <p className="mt-2 font-display text-2xl text-foreground transition-colors group-hover:text-accent-gold">
                  {channel.value}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {channel.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent-gold">
                  {channel.cta}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section className="border-y border-blush/50 bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealOnScroll>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-lg italic text-accent-gold">What to expect</p>
              <h2 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl">
                We&apos;re Here for You
              </h2>
            </div>
          </RevealOnScroll>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {RESPONSE_POINTS.map((point) => (
              <RevealOnScroll key={point.title}>
                <article className="text-center md:text-left">
                  <point.icon className="mx-auto h-7 w-7 text-accent-gold md:mx-0" strokeWidth={1.25} />
                  <h3 className="mt-5 font-display text-2xl text-foreground">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{point.description}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Social + image */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <RevealOnScroll>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted">
                Social media
              </p>
              <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
                DM Us Anytime
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                The quickest way to say hello is a direct message on TikTok, Instagram, Pinterest,
                or X. Share your ideas, ask questions, or send inspiration — we&apos;re happy
                to chat before you book.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`DM ${BRAND_NAME} on ${label}`}
                    className="group flex items-center gap-3 border border-blush px-5 py-3 transition-all duration-200 hover:border-accent-gold hover:bg-accent-gold/5"
                  >
                    <Icon className="h-4 w-4 text-muted transition-colors group-hover:text-accent-gold" />
                    <span className="text-xs uppercase tracking-widest text-foreground">
                      DM on {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/4.JPG"
                alt="Baby shower celebration styled by Lumé Events"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <p className="absolute bottom-8 left-8 right-8 font-display text-2xl italic text-white">
                Creating moments that shine
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blush/30 py-20 md:py-28">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="font-display text-lg italic text-accent-gold">Ready to begin?</p>
            <h2 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl">
              Plan Your Celebration
            </h2>
            <p className="mt-6 text-muted">
              Book online, email us, or send a DM — we&apos;ll be in touch within 24 hours.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/book" variant="primary">
                Book Your Event
              </Button>
              <Button href={PRIMARY_SOCIAL.href} variant="outline">
                DM on {PRIMARY_SOCIAL.label}
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
