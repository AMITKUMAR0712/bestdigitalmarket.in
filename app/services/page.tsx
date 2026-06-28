import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { TechIconCloud } from "@/components/TechIconCloud";
import { serviceCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "SEO Friendly Website Development, Software & Digital Marketing Services",
  description:
    "Explore SEO-friendly web design, website development, local SEO, Google Ads, custom software, CRM, mobile apps and automation services for Noida, Greater Noida, Mumbai, Pune and Chandigarh.",
  keywords: [
    "SEO friendly website development in Noida",
    "website development company in Greater Noida",
    "web design and SEO company in Greater Noida",
    "digital marketing services Noida",
    "local SEO services Greater Noida",
    "custom software development company India",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <PageHero
        category="services"
        eyebrow="Services"
        title="Complete digital services from strategy to launch and growth."
        description="From SEO-friendly web design, UI/UX and full-stack development to CRM, mobile apps, DevOps, technical SEO, AEO/GEO readiness, Google Ads and paid marketing — we provide end-to-end growth solutions under one team."
      />
      <TechIconCloud       />
      <TrustBar compact showBadges={false} />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={(index % 2) * 0.05}>
                <article className="premium-card magnetic-glow group h-full rounded-[2rem] border border-[var(--border-warm)] p-6">
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
                      <div key={service} className="flex items-center gap-2 rounded-2xl border border-[var(--border-warm)] bg-cream-50 px-4 py-3 text-sm text-charcoal-light">
                        <FiArrowRight className="text-terracotta" />
                        {service}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
