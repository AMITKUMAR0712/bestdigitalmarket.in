import type { Metadata } from "next";
import { FiCheckCircle } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { aboutPoints, stats, whyChooseUs } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Digital Future | Noida Digital Marketing Agency",
  description: "Learn about Digital Future, a premium digital marketing agency serving all over India with strong focus on Noida and Delhi NCR.",
};

export default function AboutPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="About Us"
        title="A premium growth team for brands that want more leads, stronger visibility and better conversion."
        description={`Based at ${siteConfig.address}, we serve businesses all over India while giving focused coverage to Noida, Greater Noida and Delhi NCR markets.`}
      />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="premium-card rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-slate-950/30">
              <SectionHeader
                align="left"
                eyebrow="Our Advantage"
                title="Strategy, creative, media and analytics under one focused system."
                description="We do not run disconnected campaigns. We build digital growth engines where website experience, SEO, ads, social proof and follow-up work together."
              />
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.05}>
                <div className="premium-card h-full rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
                  <FiCheckCircle className="mb-4 text-3xl text-teal-300" />
                  <h2 className="text-xl font-bold">{point}</h2>
                  <p className="mt-3 leading-7 text-slate-400">A practical, measurable part of every growth plan we build for clients.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="premium-card rounded-3xl border border-white/10 bg-white/[0.055] p-6 text-center">
              <p className="text-4xl font-black text-teal-100">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-2 text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="premium-card rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
                <Icon className="text-3xl text-teal-300" />
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
