import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { ContactFormSection } from "@/components/ContactFormSection";
import { PageHero } from "@/components/PageHero";
import { PricingBands } from "@/components/PricingBands";
import { Reveal } from "@/components/Reveal";
import { ServicePaths } from "@/components/ServicePaths";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { TechIconCloud } from "@/components/TechIconCloud";
import { serviceCategories } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Website, Software, AI & Digital Marketing Services",
  description:
    "Explore website development, custom software, CRM, AI, SEO, Google Ads and digital marketing services for Noida, Greater Noida and India. Clear paths and starting investment ranges.",
  path: "/services",
  keywords: [
    "SEO friendly website development in Noida",
    "website development company in Greater Noida",
    "web design and SEO company in Greater Noida",
    "digital marketing services Noida",
    "local SEO services Greater Noida",
    "custom software development company India",
  ],
});

function categoryAnchor(title: string) {
  if (title === "Websites & CRO") return "websites";
  if (title === "Software & Full-Stack Development") return "software";
  if (title === "SEO Growth Engine") return "leads";
  return undefined;
}

export default function ServicesPage() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <PageHero
        category="services"
        eyebrow="Services"
        title="Pick a path. Get a clear quote. Start with what matters."
        description="Website, software/AI, or leads — choose a starting path, see investment ranges, then talk to us. Full service catalogue below."
      />
      <TrustBar compact showBadges={false} />
      <ServicePaths />
      <PricingBands />

      <section className="app-section relative">
        <div className="app-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-2xl border border-[var(--border-warm)] bg-white p-5 shadow-soft">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-terracotta">Ready to enquire?</p>
              <h2 className="mt-2 text-xl font-bold text-charcoal">Get a free consultation</h2>
              <p className="mt-2 text-sm leading-6 text-charcoal-light">
                Tell us what you need and a rough budget. We’ll reply on call or WhatsApp with the next step.
              </p>
              <Link
                href="/contact#enquiry-form"
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-terracotta px-5 py-2.5 text-sm font-bold text-white transition hover:bg-terracotta-600"
              >
                Open full contact page <FiArrowRight />
              </Link>
            </div>
          </Reveal>
          <ContactFormSection compact />
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto mb-8 max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-terracotta">Full catalogue</p>
          <h2 className="mt-2 text-2xl font-bold text-charcoal">All service categories</h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const anchor = categoryAnchor(category.title);
            return (
              <Reveal key={category.title} delay={(index % 2) * 0.05}>
                <article
                  id={anchor}
                  className="premium-card magnetic-glow group h-full scroll-mt-28 rounded-[2rem] border border-[var(--border-warm)] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-terracotta/10 p-4 text-terracotta transition group-hover:scale-110">
                      <Icon className="text-3xl" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-charcoal">{category.title}</h2>
                      <p className="mt-3 leading-7 text-charcoal-light">{category.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {category.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 rounded-2xl border border-[var(--border-warm)] bg-cream-50 px-4 py-3 text-sm text-charcoal-light"
                      >
                        <FiArrowRight className="shrink-0 text-terracotta" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/contact?need=${encodeURIComponent(category.services[0] || "Not sure — need consultation")}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-terracotta"
                  >
                    Get quote for this area <FiArrowRight />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <TechIconCloud compact />
      <SiteFooter />
    </main>
  );
}
