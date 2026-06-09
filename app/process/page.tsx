import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Digital Marketing Process | Strategy to Scale",
  description: "Discover our process for business analysis, strategy planning, campaign launch, optimization and growth scaling.",
};

export default function ProcessPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="Process"
        title="A clear growth system from business analysis to scalable campaigns."
        description="We keep digital marketing simple, measurable and conversion focused with a process that connects strategy, launch, optimization and scale."
      />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-5">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} delay={index * 0.05}>
                <div className="premium-card grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-slate-950/25 md:grid-cols-[120px_1fr]">
                  <div className="flex items-center gap-4 md:flex-col md:items-start">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-300 to-fuchsia-300 text-lg font-black text-slate-950">
                      {item.step}
                    </span>
                    <Icon className="text-4xl text-teal-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black">{item.title}</h2>
                    <p className="mt-3 text-lg leading-8 text-slate-300">{item.text}</p>
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
