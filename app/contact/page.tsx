import type { Metadata } from "next";
import { FiMail, FiMapPin, FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import { ContactFormSection } from "@/components/ContactFormSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { callLink, siteConfig, whatsappLink } from "@/lib/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact TradeOrbit Global | Website Design & SEO Company Noida",
  description:
    "Contact TradeOrbit Global for SEO-friendly website design, digital marketing, local SEO, Google Ads, software, CRM and lead generation in Noida, Greater Noida, Delhi NCR and India.",
  path: "/contact",
  absoluteTitle: true,
  keywords: [
    "contact website design company Noida",
    "contact SEO company Greater Noida",
    "digital marketing consultation Noida",
    "TradeOrbit Global contact",
  ],
});

export default function ContactPage() {
  const cards = [
    { icon: FiPhoneCall, label: "Call", value: `+91 ${siteConfig.callNumber}`, href: callLink },
    { icon: FiMessageCircle, label: "WhatsApp", value: `+91 ${siteConfig.whatsappNumber}`, href: whatsappLink },
    { icon: FiMail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: FiMapPin, label: "Address", value: siteConfig.address, href: siteConfig.mapUrl },
  ];

  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <PageHero
        category="contact"
        eyebrow="Contact"
        title="Tell us what you need — we’ll reply with a clear next step."
        description="Free consultation for websites, software, AI, SEO and ads across Noida, Greater Noida, Delhi NCR and India."
      />
      <section className="px-5 pb-10 pt-4 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <ContactFormSection />
          </Reveal>
          <div className="space-y-3">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.href + card.label} delay={index * 0.04}>
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                    className="premium-card magnetic-glow flex min-h-14 items-center gap-4 rounded-2xl border border-[var(--border-warm)] p-4 hover:border-terracotta/30"
                  >
                    <Icon className="shrink-0 text-xl text-terracotta" />
                    <span>
                      <span className="block text-sm text-charcoal-light">{card.label}</span>
                      <span className="font-bold text-charcoal">{card.value}</span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
            <p className="rounded-2xl border border-terracotta/15 bg-terracotta/5 p-4 text-sm text-charcoal-light">
              <strong className="text-charcoal">Also:</strong> {siteConfig.emailSecondary}
            </p>
            <div className="rounded-2xl border border-terracotta/15 bg-terracotta/5 p-4 text-sm text-charcoal-light">
              <strong className="text-charcoal">Service area:</strong> All India · focus Noida, Greater Noida, Delhi NCR,
              Mumbai, Pune, Chandigarh.
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
