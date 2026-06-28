import type { Metadata } from "next";
import { FiArrowRight, FiBarChart2, FiGlobe, FiLayers, FiMapPin, FiPhoneCall, FiSearch, FiStar, FiZap } from "react-icons/fi";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { HeroTypewriter } from "@/components/HeroTypewriter";
import { Reveal } from "@/components/Reveal";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { ScrollToContactButton } from "@/components/ScrollToContactButton";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TechIconCloud } from "@/components/TechIconCloud";
import { WarmHeroBackground } from "@/components/WarmHeroBackground";
import { TrustBar } from "@/components/TrustBar";
import { caseStudies, companyTrust, serviceCategories, testimonials, trustHighlights } from "@/lib/data";
import { callLink, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Web Design Company in Noida | SEO & Digital Marketing Agency",
  description:
    "TradeOrbit Global builds SEO-friendly websites, custom software, CRM and lead generation systems for Noida, Greater Noida, Delhi NCR, Mumbai, Pune, Chandigarh and India.",
  keywords: [
    "best web design company in Noida",
    "best web design company in Greater Noida",
    "digital marketing agency in Noida",
    "SEO friendly website development",
    "web design and SEO company in Noida",
    "TradeOrbit Global",
  ],
  alternates: {
    canonical: "/",
  },
};

const endToEndSteps = [
  { step: "01", title: "Strategy & Planning", text: "Keyword research, competitor analysis, business goals mapping and project roadmap.", icon: FiSearch },
  { step: "02", title: "Design & Development", text: "SEO-friendly websites, custom software, CRM, mobile apps with modern UI/UX.", icon: FiLayers },
  { step: "03", title: "SEO & Marketing", text: "Local SEO, Google Ads, Meta Ads, content strategy and lead generation funnels.", icon: FiBarChart2 },
  { step: "04", title: "Launch & Support", text: "Hosting, deployment, testing, CRM support, reporting and ongoing optimization.", icon: FiZap },
];

const quickServices = [
  { label: "Website Design", desc: "SEO-friendly, fast-loading", href: "/services" },
  { label: "Local SEO", desc: "Rank in Noida & NCR", href: "/services" },
  { label: "Google Ads", desc: "Instant lead generation", href: "/services" },
  { label: "Custom Software", desc: "CRM & automation", href: "/services" },
];

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <HeroSection />
      <TrustBar />
      <EndToEndSection />
      <QuickSearchSection />
      <TechIconCloud compact />
      <ServicesSection />
      <LocalSeoSection />
      <CaseStudies />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100dvh-4rem)] overflow-x-hidden pb-6 pt-6 sm:min-h-[calc(100dvh-4.5rem)] sm:pb-8 sm:pt-8 lg:pb-10">
      <WarmHeroBackground />

      <div className="app-container relative z-20 pt-2 text-center sm:pt-4">
        <Reveal>
          <div className="pro-badge mx-auto mb-3 sm:text-[11px]">
            <span className="pro-badge-dot" />
            Trusted IT &amp; Digital Company · Noida &amp; All India
          </div>
          <h1 className="gradient-title hero-headline mx-auto max-w-4xl text-[clamp(1.45rem,4.6vw,2.75rem)] font-bold leading-[1.14] tracking-tight">
            <span className="hero-headline-line">We Build</span>
            <span className="hero-typewriter-slot">
              <HeroTypewriter />
            </span>
            <span className="hero-headline-line">That Grow Your Business</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-[13px] leading-6 text-charcoal-light sm:text-sm sm:leading-relaxed">
            {siteConfig.domainName} is a trusted IT company with {companyTrust.yearsExperience} years of experience, serving {companyTrust.happyClients} clients across India. We design fast SEO-friendly websites, develop custom software &amp; CRM, run Google Ads &amp; SEO, and manage hosting to launch — all from one reliable team.
          </p>
          <div className="hero-stat-row mx-auto mt-4">
            {trustHighlights.slice(0, 3).map((item) => (
              <span key={item.label} className="hero-stat-pill">
                <strong>{item.value}</strong> {item.label}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-5 flex max-w-sm flex-col gap-2.5 sm:max-w-none sm:mt-6 sm:flex-row sm:justify-center">
            <ScrollToContactButton />
            <Link href="/services" className="btn-pro-secondary sm:text-sm">
              View All Services
            </Link>
          </div>
          <p className="mx-auto mt-4 max-w-lg text-[12px] leading-5 text-charcoal-light sm:text-[13px]">
            Delivered for hotels, fleet, government portals, CRM systems, ecommerce &amp; service businesses — with direct support from planning to launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function EndToEndSection() {
  return (
    <section className="app-section relative">
      <div className="app-container">
        <SectionHeader
          eyebrow="End-to-End Services"
          title="One team from strategy to launch and growth."
          description="From the first consultation to daily support — we handle website design, software development, SEO, paid ads, CRM, hosting, deployment and ongoing optimization so you never need multiple vendors."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {endToEndSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} delay={index * 0.05}>
                <article className="premium-card h-full rounded-2xl border border-[var(--border-warm)] p-4 sm:p-5">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-xs font-bold text-white">{item.step}</span>
                    <Icon className="text-lg text-terracotta" />
                  </div>
                  <h3 className="text-[15px] font-bold text-charcoal sm:text-base">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-charcoal-light">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link href="/process" className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-5 py-2.5 text-[13px] font-semibold text-terracotta transition hover:bg-terracotta/10">
            See Our Full Process <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function QuickSearchSection() {
  return (
    <section className="app-section relative">
      <div className="app-container">
        <SectionHeader
          eyebrow="Quick Search"
          title="Find the right service with one click."
          description="Choose what matters most for your business. We provide complete solutions for every digital need."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickServices.map((service, index) => (
            <Reveal key={service.label} delay={index * 0.04}>
              <Link href={service.href} className="premium-card group block rounded-2xl border border-[var(--border-warm)] p-4 sm:p-5 transition hover:border-terracotta/30">
                <h3 className="text-[15px] font-bold text-charcoal group-hover:text-terracotta sm:text-base">{service.label}</h3>
                <p className="mt-1.5 text-[13px] text-charcoal-light">{service.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-terracotta">
                  Learn more <FiArrowRight className="text-xs transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalSeoSection() {
  const cityClusters = [
    {
      title: "Noida & Greater Noida",
      text: "SEO-friendly website design, local SEO, Google Business Profile optimization, web design and SEO services for service businesses, startups, hotels, clinics, real estate and local brands.",
    },
    {
      title: "Delhi NCR & Uttar Pradesh",
      text: "Technical SEO, lead generation landing pages, custom software, CRM systems, Google Ads and performance marketing built for competitive NCR searches.",
    },
    {
      title: "Mumbai, Pune & Chandigarh",
      text: "Remote-first website development, digital marketing, AEO/GEO SEO readiness and conversion-focused campaigns for growing businesses across major Indian markets.",
    },
  ];

  const keywordPillars = [
    "Best web design company",
    "SEO friendly website development",
    "Local SEO services",
    "AEO / GEO search optimization",
    "Google Ads lead generation",
    "Custom software & CRM",
  ];

  return (
    <section className="app-section relative">
      <div className="app-container">
        <SectionHeader
          eyebrow="Service Areas"
          title="Built for high-intent searches across Noida, Greater Noida and India."
          description="TradeOrbit Global combines web design, on-page SEO, technical SEO, local search optimization and lead generation so your website is structured to rank, load fast and convert enquiries."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {cityClusters.map((cluster) => (
            <article key={cluster.title} className="premium-card rounded-2xl border border-[var(--border-warm)] p-4 sm:p-5">
              <div className="mb-2.5 inline-flex rounded-full bg-terracotta/10 p-2 text-terracotta">
                <FiGlobe className="text-base" />
              </div>
              <h3 className="text-base font-bold text-charcoal sm:text-lg">{cluster.title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-charcoal-light">{cluster.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {keywordPillars.map((pillar) => (
            <span key={pillar} className="rounded-full border border-terracotta/20 bg-terracotta/5 px-3 py-1.5 text-[12px] font-semibold text-terracotta sm:text-[13px]">
              {pillar}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const homeServices = serviceCategories.filter((category) =>
    ["Websites & CRO", "Software & Full-Stack Development", "Mobile Apps & Business Systems", "DevOps, Testing & Deployment"].includes(category.title)
  );

  return (
    <section id="services" className="app-section relative">
      <div className="app-container">
        <SectionHeader eyebrow="Why Choose Us" title="Everything you need for digital growth." description="One professional team for website design, software development, digital marketing, automation, CRM, testing, hosting, deployment and ongoing support." />
        <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-2">
          {homeServices.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={index * 0.05}>
                <article className="premium-card magnetic-glow group h-full rounded-2xl border border-[var(--border-warm)] p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-terracotta/10 p-3 text-terracotta">
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-charcoal sm:text-lg">{category.title}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-charcoal-light">{category.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {category.services.slice(0, 7).map((service) => (
                      <span key={service} className="rounded-full border border-[var(--border-warm)] bg-cream-50 px-2.5 py-1.5 text-[12px] text-charcoal-light transition group-hover:border-terracotta/20 group-hover:text-terracotta sm:text-[13px]">
                        {service}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-terracotta-600">
            Explore All Services <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="app-section relative">
      <div className="app-container">
        <SectionHeader eyebrow="Our Projects" title="Real projects across fleet, hotel, government, CRM and software." description="A growing portfolio of modern websites, custom software, mobile app flows, dashboards, hosting, testing and smart marketing systems." />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {caseStudies.slice(0, 3).map((study, index) => (
            <Reveal key={study.industry} delay={index * 0.06}>
              <article className="premium-card group relative min-h-44 overflow-hidden rounded-2xl border border-[var(--border-warm)] p-4 transition hover:-translate-y-0.5 sm:p-5">
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-terracotta" />
                <p className="text-[10px] uppercase tracking-[0.18em] text-charcoal-light">{study.industry}</p>
                <h3 className="mt-3 text-lg font-bold text-terracotta sm:text-xl">{study.result}</h3>
                <p className="mt-2 line-clamp-3 text-[13px] leading-5 text-charcoal-light">{study.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-6 py-3 font-bold text-terracotta transition hover:bg-terracotta/10">
            View Case Studies <FiArrowRight />
          </Link>
          <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 font-bold text-white transition hover:bg-terracotta-600">
            View Portfolio <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const googleReviews = testimonials;

  return (
    <section className="app-section relative">
      <div className="app-container">
        <div className="rounded-2xl border border-[var(--border-warm)] bg-white p-4 shadow-card sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-bold text-charcoal sm:text-lg">
                <span className="text-[#4285f4]">G</span><span className="text-[#ea4335]">o</span><span className="text-[#fbbc05]">o</span><span className="text-[#4285f4]">g</span><span className="text-[#34a853]">l</span><span className="text-[#ea4335]">e</span> Reviews
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xl font-bold text-charcoal">{companyTrust.googleRating}</span>
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FiStar key={starIndex} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-charcoal-light">({companyTrust.reviewCount} verified reviews)</span>
              </div>
            </div>
            <Link href="/testimonials" className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-5 py-2.5 text-sm font-bold text-terracotta transition hover:bg-terracotta/10">
              View All Reviews <FiArrowRight />
            </Link>
          </div>
          <ReviewCarousel reviews={googleReviews} />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="app-section relative scroll-mt-24 sm:scroll-mt-28">
      <div className="app-container grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
        <Reveal>
          <div>
            <SectionHeader align="left" eyebrow="Contact" title="Ready to start your digital growth journey?" description="Share your requirement and our team will suggest the right technology solution across website development, software, mobile apps, CRM, hosting, digital marketing and ongoing support." />
            <div className="mt-6 rounded-[1.6rem] border border-terracotta/15 bg-terracotta/5 p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-terracotta p-2.5 text-white">
                  <FiZap className="text-xl" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal sm:text-base">Free Requirement Review Included</h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-charcoal-light">We review your goals, current website, technical needs, launch requirements and lead journey before suggesting the best next step.</p>
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href={callLink} className="premium-card flex items-center gap-4 rounded-[1.5rem] border border-[var(--border-warm)] p-4 transition hover:-translate-y-0.5 hover:border-terracotta/30">
                <FiPhoneCall className="text-2xl text-terracotta" />
                <span>
                  <span className="block text-sm text-charcoal-light">Call for consultation</span>
                  <span className="font-bold text-charcoal">+91 {siteConfig.callNumber}</span>
                </span>
              </a>
              <div className="premium-card flex items-center gap-4 rounded-[1.5rem] border border-[var(--border-warm)] p-4">
                <FiMapPin className="text-2xl text-terracotta" />
                <span>
                  <span className="block text-sm text-charcoal-light">Serving</span>
                  <span className="font-bold text-charcoal">{siteConfig.areas.join(", ")}</span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
