import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { caseStudies } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "SEO Website, Software & Digital Marketing Case Studies",
  description:
    "Explore SEO-friendly website development, CRM software, hotel SEO, fleet platform, mobile app, DevOps, testing and digital marketing project case studies for Indian businesses.",
  path: "/case-studies",
  keywords: [
    "website development case studies India",
    "SEO case studies Noida",
    "digital marketing case studies India",
    "CRM software project India",
    "lead generation case studies",
  ],
});

export default function CaseStudiesPage() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <PageHero
        category="case-studies"
        eyebrow="Projects & Case Studies"
        title="SEO websites, software and marketing projects built for real businesses."
        description="Explore fleet, hotel, government-style portal, CRM software, mobile app, DevOps, testing, local SEO and digital marketing projects delivered with practical business outcomes."
      />
      <TrustBar compact showBadges={false} />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.industry} delay={(index % 2) * 0.06}>
              <article className="premium-card magnetic-glow group min-h-80 rounded-[2rem] border border-[var(--border-warm)] p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-charcoal-light">{study.industry}</p>
                <h2 className="mt-8 text-3xl font-black text-terracotta sm:text-5xl">{study.result}</h2>
                <p className="mt-6 text-lg leading-8 text-charcoal-light">{study.detail}</p>
                <div className="mt-8 h-2 rounded-full bg-cream-200">
                  <div className="h-full w-4/5 rounded-full bg-terracotta" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
