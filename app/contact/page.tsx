import type { Metadata } from "next";
import { FiMail, FiMapPin, FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { callLink, siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Website Development & Software Company in Noida",
  description: "Contact Digital Future for website development, full-stack development, custom software, mobile apps, CRM, DevOps, hosting, SEO, Google Ads, Meta Ads and lead generation.",
};

export default function ContactPage() {
  const cards = [
    { icon: FiPhoneCall, label: "Call", value: `+91 ${siteConfig.callNumber}`, href: callLink },
    { icon: FiMessageCircle, label: "WhatsApp", value: `+91 ${siteConfig.whatsappNumber}`, href: whatsappLink },
    { icon: FiMail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: FiMapPin, label: "Address", value: siteConfig.address, href: siteConfig.mapUrl },
  ];

  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="Contact"
        title="Let’s plan your complete digital and technology system."
        description="Tell us what you want to build. We help with websites, software, apps, CRM, hosting, deployment, marketing and ongoing support across India."
      />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.label} delay={index * 0.05}>
                  <a href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel={card.href.startsWith("http") ? "noreferrer" : undefined} className="premium-card magnetic-glow flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-5 hover:border-teal-300/40">
                    <Icon className="text-2xl text-teal-300" />
                    <span>
                      <span className="block text-sm text-slate-400">{card.label}</span>
                      <span className="font-bold">{card.value}</span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
            <div className="holo-panel rounded-[2rem] border border-teal-300/15 p-5 text-slate-300">
              <strong className="text-white">Service Area:</strong> All over India. Priority local focus: Noida, Greater Noida and Delhi NCR.
            </div>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
