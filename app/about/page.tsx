import type { Metadata } from "next";
import Image from "next/image";
import { FiCheckCircle, FiCloud, FiCode, FiCpu, FiLayers, FiTrendingUp } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { aboutPoints, stats, whyChooseUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Best Digital Market | Web Design & SEO Expert in Greater Noida",
  description:
    "Meet Amit Kumar Talan and Best Digital Market by Digital Future, a Greater Noida based team for SEO-friendly website design, digital marketing, software, CRM and IT solutions.",
  keywords: [
    "web design expert Greater Noida",
    "SEO expert Greater Noida",
    "digital marketing consultant Noida",
    "Best Digital Market founder",
    "Amit Kumar Talan",
  ],
  alternates: {
    canonical: "/about",
  },
};

const founderSkills = [
  "Digital Marketing",
  "Full-Stack Development",
  "MERN Stack",
  "MARN Stack",
  "Python",
  "DevOps",
  "Testing",
  "Hosting & Deployment",
  "AI Software",
  "CS & IT Solutions",
];

const founderHighlights = [
  { value: "5+", label: "Years Experience" },
  { value: "360°", label: "Technology Delivery" },
  { value: "Full", label: "Project Ownership" },
];

const supportPillars = [
  {
    title: "Digital Growth & Brand Visibility",
    icon: FiTrendingUp,
    text: "Strategy, SEO, paid ads, social media and lead-generation systems planned around real business outcomes.",
  },
  {
    title: "Full-Stack Product Development",
    icon: FiCode,
    text: "Websites, portals, dashboards, MERN/MARN stack, Python and custom software built with clean, scalable architecture.",
  },
  {
    title: "AI, Automation & Business Systems",
    icon: FiCpu,
    text: "Automation workflows, CRM systems, admin panels and smart business tools that reduce manual work and improve follow-up.",
  },
  {
    title: "Deployment, Testing & Support",
    icon: FiCloud,
    text: "Hosting, deployment, DevOps setup, QA testing, bug fixing, performance checks and maintenance after launch.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="About Us"
        title="Led by Amit Kumar Talan for SEO-first websites, software and digital growth."
        description="A Greater Noida based technology and digital growth team delivering SEO-friendly website development, custom software, digital marketing, hosting, testing and IT support from strategy to launch."
      />
      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="premium-card luxury-border overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-3 shadow-2xl shadow-slate-950/30">
              <div className="relative min-h-[430px] overflow-hidden rounded-[1.8rem] bg-slate-950 sm:min-h-[560px] lg:min-h-[620px]">
                <Image
                  src="/amit-kumar-talan-founder.png"
                  alt="Amit Kumar Talan, founder of Ramhari Enterprises"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/12 to-transparent" />
                <div className="absolute left-4 top-4 grid grid-cols-3 gap-2 sm:left-5 sm:top-5">
                  {founderHighlights.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/65 px-3 py-2 text-center backdrop-blur-xl">
                      <p className="text-lg font-black text-teal-200">{item.value}</p>
                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/10 bg-slate-950/76 p-5 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-teal-300">Founder</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Amit Kumar Talan</h2>
                  <p className="mt-2 text-sm font-semibold text-fuchsia-200">Ramhari Enterprises Company</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Building practical digital products for businesses that need trust, speed and reliable technical execution.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="premium-card rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-slate-950/30">
              <SectionHeader
                align="left"
                eyebrow="Founder Profile"
                title="Hands-on knowledge across marketing, software and complete technology delivery."
                description="Amit Kumar Talan brings 5+ years of practical experience across digital marketing, website design, full-stack development, AI software, DevOps, testing, hosting and deployment. Ramhari Enterprises is built for businesses that need one dependable team from planning to launch."
              />
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {founderSkills.map((skill) => (
                  <div key={skill} className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm font-bold text-slate-200">
                    {skill}
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-3xl border border-teal-300/15 bg-gradient-to-br from-teal-300/12 via-white/[0.04] to-fuchsia-400/10 p-5 shadow-xl shadow-teal-950/20">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-teal-300 p-3 text-slate-950">
                    <FiLayers className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">End-to-End Technology Delivery</h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      We support the full digital journey: strategy, website design, software development, digital marketing, automation, CRM, DevOps, testing, hosting, deployment and ongoing improvement. The goal is to give every client a professional system that looks credible, works smoothly and helps generate enquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-14 max-w-7xl">
          <SectionHeader
            eyebrow="Complete Support"
            title="One team for strategy, software, launch and growth."
            description="Instead of managing separate vendors for website design, software development, marketing, hosting and deployment, Ramhari Enterprises brings the complete execution system together."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {supportPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.05}>
                  <div className="premium-card h-full rounded-[1.85rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-slate-950/25">
                    <div className="mb-5 inline-flex rounded-2xl bg-teal-300/10 p-3 text-teal-300">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-black text-white">{pillar.title}</h3>
                    <p className="mt-3 leading-7 text-slate-400">{pillar.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {aboutPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.05}>
              <div className="premium-card h-full rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
                <FiCheckCircle className="mb-4 text-3xl text-teal-300" />
                <h2 className="text-xl font-bold">{point}</h2>
                <p className="mt-3 leading-7 text-slate-400">A practical, measurable part of every solution we build for clients.</p>
              </div>
            </Reveal>
          ))}
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
