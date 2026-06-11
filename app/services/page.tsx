import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
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
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="Services"
        title="Website development, software and digital marketing services for growing businesses."
        description="From SEO-friendly web design, UI/UX and full-stack development to CRM, mobile apps, DevOps, technical SEO, AEO/GEO readiness, Google Ads and paid marketing, we provide complete growth solutions under one team."
      />
      <TechIconCloud />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={(index % 2) * 0.05}>
                <article className="premium-card magnetic-glow group h-full rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl hover:border-teal-300/40">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-gradient-to-br from-teal-300/20 to-fuchsia-400/20 p-4 text-teal-300 transition group-hover:scale-110">
                      <Icon className="text-3xl" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black">{category.title}</h2>
                      <p className="mt-3 leading-7 text-slate-400">{category.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {category.services.map((service) => (
                      <div key={service} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-slate-300">
                        <FiArrowRight className="text-teal-300" />
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
