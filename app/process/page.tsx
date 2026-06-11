import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "SEO Website Design & Digital Marketing Process",
  description:
    "Discover our process for keyword research, SEO-friendly website planning, software development, local SEO, campaign launch, testing, deployment and growth optimization.",
  keywords: [
    "SEO website design process",
    "digital marketing process Noida",
    "keyword research and mapping",
    "technical SEO audit process",
    "lead generation funnel process",
  ],
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="Process"
        title="A clear process from keyword research to launch and growth."
        description="We connect SEO keyword mapping, website strategy, software planning, digital marketing, testing, deployment and optimization into one measurable execution process."
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
