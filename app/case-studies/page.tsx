import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Website, Software & Digital Marketing Case Studies",
  description: "Explore website development, CRM software, fleet platform, hotel website, mobile app, DevOps, testing and digital marketing project case studies.",
};

export default function CaseStudiesPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="Projects & Case Studies"
        title="Website, software and marketing projects built for real businesses."
        description="Explore fleet, hotel, government-style portal, CRM software, mobile app, DevOps, testing and digital marketing projects delivered with practical business outcomes."
      />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.industry} delay={(index % 2) * 0.06}>
              <article className="premium-card magnetic-glow group min-h-80 rounded-[2rem] border border-white/10 bg-gradient-to-br from-teal-300/12 via-white/[0.04] to-fuchsia-500/15 p-6 shadow-2xl shadow-slate-950/30 sm:p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{study.industry}</p>
                <h2 className="mt-8 text-3xl font-black text-teal-200 sm:text-5xl">{study.result}</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">{study.detail}</p>
                <div className="mt-8 h-2 rounded-full bg-slate-900">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-teal-300 via-fuchsia-400 to-amber-300" />
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
