import { ContactForm } from "@/app/contact/ContactForm";
import { Mail, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
} from "@/components/ui/SocialIcons";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to start planning your celebration.",
};

const SOCIAL = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://pinterest.com", label: "Pinterest", icon: PinterestIcon },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="bg-blush/30 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-display text-lg italic text-accent-gold">Say hello</p>
          <h1 className="mt-4 font-display text-5xl font-light text-foreground md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-muted">
            We&apos;d love to hear about your celebration. Reach out and let&apos;s start the
            conversation.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <h2 className="font-display text-3xl text-foreground">Send a message</h2>
            <p className="mt-4 text-sm text-muted">
              Fill out the form and we&apos;ll get back to you within one business day.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl text-foreground">Contact details</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-gold" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 block text-foreground transition-colors hover:text-accent-gold"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-gold" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">Phone</p>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\D/g, "")}`}
                    className="mt-1 block text-foreground transition-colors hover:text-accent-gold"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </li>
            </ul>

            <p className="mt-10 text-xs uppercase tracking-widest text-muted">Follow along</p>
            <div className="mt-4 flex gap-4">
              {SOCIAL.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-blush text-muted transition-all duration-200 hover:border-accent-gold hover:text-accent-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest text-muted">Visit us</p>
              <div className="mt-4 flex aspect-video items-center justify-center border border-dashed border-blush bg-cream p-8 text-center text-sm text-muted">
                <p>
                  Google Maps embed placeholder.
                  <br />
                  Replace with your studio location embed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
