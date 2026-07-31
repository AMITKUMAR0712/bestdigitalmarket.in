import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCloud,
  FiCode,
  FiCpu,
  FiLayers,
  FiMapPin,
  FiPhoneCall,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TeamCarousel } from "@/components/TeamCarousel";
import { TrustBar } from "@/components/TrustBar";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { aboutPoints, companyTrust, stats, whyChooseUs } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import { callLink, siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About TradeOrbit Global | Web Design & SEO Expert in Greater Noida",
  description:
    "Meet Amit Kumar Talan and TradeOrbit Global, a Greater Noida based team for SEO-friendly website design, digital marketing, software, CRM and IT solutions.",
  path: "/about",
  absoluteTitle: true,
  keywords: [
    "web design expert Greater Noida",
    "SEO expert Greater Noida",
    "digital marketing consultant Noida",
    "TradeOrbit Global founder",
    "Amit Kumar Talan",
  ],
});

const founderSkills = [
  "Digital Marketing",
  "Full-Stack Development",
  "MERN / MARN",
  "Python",
  "DevOps & Hosting",
  "AI Software",
  "CRM Systems",
  "QA & Deployment",
];

const journey = [
  {
    year: String(2022),
    title: "Founded in Greater Noida",
    text: "TradeOrbit Global started as a hands-on delivery studio for websites, software and digital growth.",
  },
  {
    year: "Build",
    title: "End-to-end product systems",
    text: "Expanded into custom software, CRM, mobile apps, hosting and DevOps so clients need fewer vendors.",
  },
  {
    year: "Grow",
    title: "SEO, ads & conversion",
    text: "Added performance marketing, local SEO and enquiry systems tied to real business outcomes.",
  },
  {
    year: "Now",
    title: "AI + software company",
    text: "Agentic AI, LLM chatbots and automation layered on the same reliable delivery process.",
  },
];

const supportPillars = [
  {
    title: "Digital growth",
    icon: FiTrendingUp,
    text: "SEO, paid ads, social and lead systems planned around measurable enquiries.",
  },
  {
    title: "Full-stack products",
    icon: FiCode,
    text: "Websites, portals, dashboards and custom software with clean architecture.",
  },
  {
    title: "AI & automation",
    icon: FiCpu,
    text: "Chatbots, LLM features, CRM workflows and tools that cut manual follow-up.",
  },
  {
    title: "Launch & support",
    icon: FiCloud,
    text: "Hosting, DevOps, QA, performance checks and post-launch maintenance.",
  },
];

const values = [
  { icon: FiShield, title: "Trust first", text: "Clear scope, honest timelines, NDA-ready delivery." },
  { icon: FiTarget, title: "Outcome focused", text: "Design and tech that support leads, not just looks." },
  { icon: FiUsers, title: "Direct access", text: "Founder-led communication when decisions matter." },
  { icon: FiLayers, title: "One accountable team", text: "Strategy → build → launch → growth under one roof." },
];

export default function AboutPage() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <PageHero
        category="about"
        eyebrow="About Us"
        title="Built in Greater Noida. Delivering for businesses across India."
        description="TradeOrbit Global is a founder-led AI software, website and digital marketing company — one team from strategy to launch, hosting and growth."
      />
      <TrustBar compact showBadges={false} />

      {/* Identity strip */}
      <section className="app-section relative pt-4 sm:pt-6">
        <div className="app-container">
          <Reveal>
            <div className="about-identity relative overflow-hidden rounded-[1.5rem] border border-[var(--border-warm)] bg-white/90 px-5 py-5 sm:px-7 sm:py-6">
              <div className="about-identity-glow" aria-hidden="true" />
              <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta">Official identity</p>
                  <h2 className="mt-2 text-xl font-bold text-charcoal sm:text-2xl">
                    TradeOrbit Global — who we are (and are not)
                  </h2>
                  <p className="mt-3 text-[13px] leading-6 text-charcoal-light sm:text-sm sm:leading-7">
                    {siteConfig.disambiguation} Website:{" "}
                    <a href={siteConfig.url} className="font-semibold text-terracotta hover:underline">
                      {siteConfig.url.replace("https://", "")}
                    </a>
                    . Premises: Best Digital Market, Greater Noida.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-terracotta/20 bg-terracotta/5 px-3.5 py-1.5 text-[12px] font-semibold text-terracotta transition hover:bg-terracotta/10"
                  >
                    Facebook
                  </a>
                  {siteConfig.social.youtube ? (
                    <a
                      href={siteConfig.social.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-terracotta/20 bg-terracotta/5 px-3.5 py-1.5 text-[12px] font-semibold text-terracotta transition hover:bg-terracotta/10"
                    >
                      YouTube
                    </a>
                  ) : null}
                  <a
                    href={siteConfig.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-warm)] bg-cream-50 px-3.5 py-1.5 text-[12px] font-semibold text-charcoal-light transition hover:border-terracotta/30"
                  >
                    <FiMapPin className="text-terracotta" /> Map
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder feature */}
      <section className="app-section relative">
        <div className="app-container">
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
            <Reveal>
              <article className="about-founder-frame relative h-full overflow-hidden rounded-[1.75rem] border border-[var(--border-warm)] bg-charcoal shadow-premium">
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:absolute lg:inset-0 lg:aspect-auto">
                  <Image
                    src="/team/amit-kumar-talan.jpg"
                    alt="Amit Kumar Talan, founder of TradeOrbit Global"
                    fill
                    quality={70}
                    className="object-cover object-[center_18%]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-terracotta">Founder</p>
                  <h2 className="mt-1.5 text-2xl font-bold text-white sm:text-3xl">Amit Kumar Talan</h2>
                  <p className="mt-1 text-sm font-medium text-white/75">TradeOrbit Global · Greater Noida</p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      { value: companyTrust.yearsExperience, label: "Years" },
                      { value: companyTrust.happyClients, label: "Clients" },
                      { value: companyTrust.projectsDelivered, label: "Projects" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-white/15 bg-white/10 px-2 py-2.5 text-center backdrop-blur-md"
                      >
                        <p className="text-base font-bold text-white sm:text-lg">{item.value}</p>
                        <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/65">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex h-full flex-col rounded-[1.75rem] border border-[var(--border-warm)] bg-white/90 p-6 sm:p-8">
                <SectionHeader
                  align="left"
                  eyebrow="Founder story"
                  title="Hands-on leadership across software, AI and digital growth."
                  description={`Amit leads delivery with ${companyTrust.yearsExperience} years of practical experience across websites, full-stack software, digital marketing, DevOps and AI systems — so clients get one accountable owner from plan to production.`}
                />
                <div className="mt-6 flex flex-wrap gap-2">
                  {founderSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--border-warm)] bg-cream-50 px-3 py-1.5 text-[12px] font-semibold text-charcoal"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-terracotta/15 bg-terracotta/5 p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-terracotta p-2.5 text-white">
                      <FiLayers className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-charcoal sm:text-lg">End-to-end ownership</h3>
                      <p className="mt-1.5 text-[13px] leading-6 text-charcoal-light">
                        Strategy, design, development, marketing, hosting and support stay connected — so your product
                        launches cleanly and keeps generating enquiries.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a
                    href={callLink}
                    className="inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-bold text-white transition hover:bg-terracotta-600"
                  >
                    <FiPhoneCall /> Talk to founder
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-terracotta/25 bg-terracotta/5 px-5 py-2.5 text-sm font-bold text-terracotta transition hover:bg-terracotta/10"
                  >
                    Get a free quote <FiArrowRight />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="app-section relative">
        <div className="app-container">
          <SectionHeader
            eyebrow="Our journey"
            title="From local studio to full AI + software delivery."
            description="A clear path from founding year to the systems we ship today."
          />
          <RevealGroup className="about-timeline mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" stagger={0.06}>
            {journey.map((item, index) => (
              <RevealItem key={item.title}>
                <div className="about-timeline-card relative h-full rounded-2xl border border-[var(--border-warm)] bg-white/90 p-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-terracotta">
                    {String(index + 1).padStart(2, "0")} · {item.year}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-charcoal sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-charcoal-light">{item.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Pillars + values */}
      <section className="app-section relative">
        <div className="app-container">
          <SectionHeader
            eyebrow="How we work"
            title="One team for strategy, software, launch and growth."
            description="Instead of juggling separate vendors, TradeOrbit Global owns the full execution chain."
          />
          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" stagger={0.05}>
            {supportPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <RevealItem key={pillar.title} hoverLift>
                  <div className="h-full rounded-2xl border border-[var(--border-warm)] bg-white/90 p-5">
                    <div className="mb-4 inline-flex rounded-xl bg-terracotta/10 p-2.5 text-terracotta">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="text-base font-bold text-charcoal sm:text-lg">{pillar.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-charcoal-light">{pillar.text}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <RevealGroup className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.04}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <RevealItem key={value.title}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-terracotta/15 bg-terracotta/[0.04] p-4">
                    <Icon className="mt-0.5 shrink-0 text-lg text-terracotta" />
                    <div>
                      <h3 className="text-sm font-bold text-charcoal">{value.title}</h3>
                      <p className="mt-1 text-[12px] leading-5 text-charcoal-light">{value.text}</p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Stats */}
      <section className="app-section relative py-6 sm:py-8">
        <div className="app-container">
          <Reveal>
            <div className="about-stats-band grid grid-cols-2 gap-3 rounded-[1.5rem] border border-[var(--border-warm)] bg-charcoal p-4 sm:grid-cols-4 sm:gap-4 sm:p-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-white sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-white/65 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why + proof points */}
      <section className="app-section relative">
        <div className="app-container">
          <SectionHeader
            eyebrow="Why clients stay"
            title="Practical reasons businesses choose TradeOrbit Global."
            description="Clear communication, measurable delivery and long-term support — not just a one-time launch."
          />
          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title} hoverLift>
                  <div className="h-full rounded-2xl border border-[var(--border-warm)] bg-white/90 p-5">
                    <Icon className="text-2xl text-terracotta" />
                    <h3 className="mt-4 text-base font-bold text-charcoal sm:text-lg">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-charcoal-light">{item.text}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <RevealGroup className="mt-6 flex flex-wrap justify-center gap-2" stagger={0.03}>
            {aboutPoints.map((point) => (
              <RevealItem key={point}>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-warm)] bg-white/90 px-3.5 py-2 text-[12px] font-semibold text-charcoal">
                  <FiCheckCircle className="text-terracotta" />
                  {point}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Team */}
      <section className="app-section relative">
        <div className="app-container">
          <SectionHeader
            eyebrow="Our team"
            title="The professionals behind every successful delivery."
            description="Specialists across product, engineering, AI and marketing — focused on quality, clarity and long-term results."
          />
          <Reveal>
            <div className="mt-6 sm:mt-8">
              <TeamCarousel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="app-section relative pb-10 sm:pb-14">
        <div className="app-container">
          <Reveal>
            <div className="about-cta relative overflow-hidden rounded-[1.75rem] border border-[var(--border-warm)] bg-white px-6 py-8 text-center sm:px-10 sm:py-10">
              <div className="about-cta-glow" aria-hidden="true" />
              <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta">Next step</p>
              <h2 className="relative mx-auto mt-2 max-w-2xl text-2xl font-bold text-charcoal sm:text-3xl">
                Ready to build with a team that owns the full journey?
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-[13px] leading-6 text-charcoal-light sm:text-sm">
                Share your requirement — we&apos;ll reply with a clear scope, timeline and next step.
              </p>
              <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-bold text-white transition hover:bg-terracotta-600"
                >
                  Get free quote <FiArrowRight />
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-terracotta/25 bg-terracotta/5 px-6 py-3 text-sm font-bold text-terracotta transition hover:bg-terracotta/10"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
