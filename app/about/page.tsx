import type { Metadata } from "next";
import Image from "next/image";
import { FiCheckCircle, FiCloud, FiCode, FiCpu, FiLayers, FiTrendingUp } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { aboutPoints, companyTrust, stats, whyChooseUs } from "@/lib/data";
import { TrustBar } from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "About TradeOrbit Global | Web Design & SEO Expert in Greater Noida",
  description:
    "Meet Amit Kumar Talan and TradeOrbit Global, a Greater Noida based team for SEO-friendly website design, digital marketing, software, CRM and IT solutions.",
  keywords: [
    "web design expert Greater Noida",
    "SEO expert Greater Noida",
    "digital marketing consultant Noida",
    "TradeOrbit Global founder",
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
  { value: companyTrust.yearsExperience, label: "Years Experience" },
  { value: companyTrust.happyClients, label: "Happy Clients" },
  { value: companyTrust.clientRetention, label: "Client Retention" },
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
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <PageHero
        category="about"
        eyebrow="About Us"
        title="One team for complete digital growth — from strategy to launch."
        description="A Greater Noida based technology and digital growth team delivering end-to-end services: SEO-friendly website development, custom software, digital marketing, hosting, testing and IT support."
      />
      <TrustBar compact showBadges={false} />
      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="premium-card overflow-hidden rounded-[2.2rem] border border-[var(--border-warm)] p-3">
              <div className="relative min-h-[430px] overflow-hidden rounded-[1.8rem] bg-cream-200 sm:min-h-[560px] lg:min-h-[620px]">
                <Image
                  src="/amit-kumar-talan-founder.png"
                  alt="Amit Kumar Talan, founder of TradeOrbit Global"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 grid grid-cols-3 gap-2 sm:left-5 sm:top-5">
                  {founderHighlights.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/20 bg-white/90 px-3 py-2 text-center backdrop-blur-xl">
                      <p className="text-lg font-black text-terracotta">{item.value}</p>
                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-charcoal-light">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/20 bg-white/90 p-5 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-terracotta">Founder</p>
                  <h2 className="mt-2 text-2xl font-black text-charcoal">Amit Kumar Talan</h2>
                  <p className="mt-2 text-sm font-semibold text-terracotta">TradeOrbit Global</p>
                  <p className="mt-3 text-sm leading-6 text-charcoal-light">
                    Building practical digital products for businesses that need trust, speed and reliable technical execution.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="premium-card rounded-[2rem] border border-[var(--border-warm)] p-7">
              <SectionHeader
                align="left"
                eyebrow="Founder Profile"
                title="Hands-on knowledge across marketing, software and complete technology delivery."
                description={`Amit Kumar Talan brings ${companyTrust.yearsExperience} years of practical experience across digital marketing, website design, full-stack development, AI software, DevOps, testing, hosting and deployment. TradeOrbit Global is a trusted IT company built for businesses that need one dependable team from planning to launch.`}
              />
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {founderSkills.map((skill) => (
                  <div key={skill} className="rounded-2xl border border-[var(--border-warm)] bg-cream-50 px-4 py-3 text-sm font-bold text-charcoal">
                    {skill}
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-3xl border border-terracotta/15 bg-terracotta/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-terracotta p-3 text-white">
                    <FiLayers className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-charcoal">End-to-End Technology Delivery</h3>
                    <p className="mt-3 leading-7 text-charcoal-light">
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
            description="Instead of managing separate vendors for website design, software development, marketing, hosting and deployment, TradeOrbit Global brings the complete execution system together."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {supportPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.05}>
                  <div className="premium-card h-full rounded-[1.85rem] border border-[var(--border-warm)] p-6">
                    <div className="mb-5 inline-flex rounded-2xl bg-terracotta/10 p-3 text-terracotta">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-black text-charcoal">{pillar.title}</h3>
                    <p className="mt-3 leading-7 text-charcoal-light">{pillar.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {aboutPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.05}>
              <div className="premium-card h-full rounded-[1.75rem] border border-[var(--border-warm)] p-6">
                <FiCheckCircle className="mb-4 text-3xl text-terracotta" />
                <h2 className="text-xl font-bold text-charcoal">{point}</h2>
                <p className="mt-3 leading-7 text-charcoal-light">A practical, measurable part of every solution we build for clients.</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="premium-card rounded-3xl border border-[var(--border-warm)] p-6 text-center">
              <p className="text-4xl font-black text-terracotta">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-2 text-charcoal-light">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="premium-card rounded-[1.75rem] border border-[var(--border-warm)] p-6">
                <Icon className="text-3xl text-terracotta" />
                <h3 className="mt-5 text-xl font-bold text-charcoal">{item.title}</h3>
                <p className="mt-3 leading-7 text-charcoal-light">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
