import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { processSteps } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "SEO Website Design & Digital Marketing Process",
  description:
    "Discover our process for keyword research, SEO-friendly website planning, software development, local SEO, campaign launch, testing, deployment and growth optimization.",
  path: "/process",
  keywords: [
    "SEO website design process",
    "digital marketing process Noida",
    "keyword research and mapping",
    "technical SEO audit process",
    "lead generation funnel process",
  ],
});

export default function ProcessPage() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <PageHero
        category="process"
        eyebrow="Our Process"
        title="A clear end-to-end process from research to launch and growth."
        description="We connect SEO keyword mapping, website strategy, software planning, digital marketing, testing, deployment and optimization into one measurable execution process — so you always know what's happening."
      />
      <TrustBar compact showBadges={false} />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-5">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} delay={index * 0.05}>
                <div className="premium-card grid gap-5 rounded-[2rem] border border-[var(--border-warm)] p-6 md:grid-cols-[120px_1fr]">
                  <div className="flex items-center gap-4 md:flex-col md:items-start">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-lg font-black text-white">
                      {item.step}
                    </span>
                    <Icon className="text-4xl text-terracotta" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-charcoal">{item.title}</h2>
                    <p className="mt-3 text-lg leading-8 text-charcoal-light">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
