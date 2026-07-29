import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiExternalLink, FiMapPin, FiPhoneCall, FiStar, FiZap } from "react-icons/fi";
import { ContactForm } from "@/components/ContactForm";
import { EndToEndSteps } from "@/components/EndToEndSteps";
import { HeroServicesOrbit } from "@/components/HeroServicesOrbit";
import { Reveal } from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { companyTrust, serviceCategories, testimonials } from "@/lib/data";
import { portfolioProjects } from "@/lib/portfolio";
import { callLink, siteConfig } from "@/lib/site";

const TechIconCloud = dynamic(() => import("@/components/TechIconCloud").then((module) => module.TechIconCloud), {
  loading: () => <div className="app-section min-h-[12rem]" aria-hidden />,
});

const TeamCarousel = dynamic(() => import("@/components/TeamCarousel").then((module) => module.TeamCarousel), {
  loading: () => <div className="min-h-[16rem]" aria-hidden />,
});

export const metadata: Metadata = {
  title: "Best AI Software Company in Noida & Greater Noida | Agentic AI & Custom Software",
  description:
    "TradeOrbit Global — best AI software company in Noida and Greater Noida for agentic AI, AI/ML, LLM models, custom software, SEO websites, CRM and digital marketing across India.",
  keywords: [
    "best AI software company in Noida",
    "best AI software company in Greater Noida",
    "agentic AI company in Noida",
    "agentic AI company in Greater Noida",
    "custom software company in Noida",
    "custom software company in Greater Noida",
    "AI ML company in Noida",
    "LLM model development company Noida",
    "best web design company in Noida",
    "digital marketing agency in Noida",
    "TradeOrbit Global",
  ],
  alternates: {
    canonical: "/",
  },
};

function EndToEndSection() {
  return (
    <section className="app-section relative">
      <div className="app-container">
        <SectionHeader
          eyebrow="End-to-End Services"
          title="One team from strategy to launch and growth."
          description="From the first consultation to daily support — we handle website design, software development, SEO, paid ads, CRM, hosting, deployment and ongoing optimization so you never need multiple vendors."
        />
        <EndToEndSteps />
        <Reveal>
          <div className="mt-8 text-center">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-5 py-2.5 text-[13px] font-semibold text-terracotta transition hover:bg-terracotta/10"
            >
              See Our Full Process <FiArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <HeroSection />
      <TrustBar />
      <EndToEndSection />
      <TechIconCloud compact />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

function HeroSection() {
  return <HeroServicesOrbit />;
}

function ServicesSection() {
  const homeServices = serviceCategories.filter((category) =>
    ["Websites & CRO", "Software & Full-Stack Development", "AI, ML & Agentic Systems", "Mobile Apps & Business Systems"].includes(category.title)
  );

  return (
    <section id="services" className="app-section relative">
      <div className="app-container">
        <SectionHeader eyebrow="Why Choose Us" title="Everything you need for digital growth." description="One professional team for website design, software development, digital marketing, automation, CRM, testing, hosting, deployment and ongoing support." />
        <RevealGroup className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-2">
          {homeServices.map((category) => {
            const Icon = category.icon;
            return (
              <RevealItem key={category.title} hoverLift>
                <article className="premium-card magnetic-glow motion-card group h-full rounded-2xl border border-[var(--border-warm)] p-4 sm:p-5">
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
              </RevealItem>
            );
          })}
        </RevealGroup>
        <Reveal>
          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-terracotta-600">
              Explore All Services <FiArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const featuredProjects = portfolioProjects.filter((project) => project.featured).slice(0, 6);
  const projectTrustPoints = [
    `${companyTrust.projectsDelivered} projects delivered`,
    `${companyTrust.happyClients} happy clients`,
    `${companyTrust.onTimeDelivery} on-time delivery`,
    "Live production websites",
  ];

  return (
    <section id="projects" className="app-section relative">
      <div className="app-container">
        <SectionHeader
          eyebrow="Trusted Projects"
          title="Real client work you can preview — built for growth and credibility."
          description="Browse live websites and digital products delivered for e-commerce, hotels, education, real estate, SaaS and service brands across India. Every project reflects clean design, SEO structure and reliable engineering."
        />

        <RevealGroup className="project-trust-row mt-6 flex flex-wrap justify-center gap-2 sm:gap-3" stagger={0.04}>
          {projectTrustPoints.map((point) => (
            <RevealItem key={point}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-terracotta/15 bg-white/80 px-3 py-1.5 text-[12px] font-semibold text-charcoal sm:text-[13px]">
                <FiCheckCircle className="shrink-0 text-terracotta" />
                {point}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 sm:gap-5">
          {featuredProjects.map((project) => (
            <RevealItem key={project.id} hoverLift>
              <article className="home-project-card premium-card motion-card group overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-white">
                <div className="home-project-media relative aspect-[16/10] overflow-hidden bg-cream-200">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.client} project by TradeOrbit Global`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                  <div className="home-project-media-overlay" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-terracotta shadow-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-charcoal sm:text-lg">{project.title}</h3>
                  <p className="mt-1 text-xs font-medium text-charcoal-light">{project.client}</p>
                  <p className="mt-2.5 line-clamp-2 text-[13px] leading-6 text-charcoal-light">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta transition hover:gap-2.5"
                  >
                    Visit live project <FiExternalLink className="text-xs" />
                  </a>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-bold text-white transition hover:bg-terracotta-600">
              View Full Portfolio <FiArrowRight />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-6 py-3 text-sm font-bold text-terracotta transition hover:bg-terracotta/10">
              View Case Studies <FiArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="app-section relative overflow-hidden">
      <div className="app-container">
        <SectionHeader
          eyebrow="Our Team"
          title="The professionals behind every successful delivery."
          description="Meet the specialists who design, develop, market and launch your digital products — a hands-on team focused on quality, clarity and long-term results."
        />
      </div>
      <Reveal>
        <div className="mt-8 sm:mt-10">
          <TeamCarousel />
        </div>
      </Reveal>
    </section>
  );
}

function TestimonialsSection() {
  const googleReviews = testimonials;

  return (
    <section className="app-section relative">
      <div className="app-container">
        <Reveal>
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
              </div>
            </div>
            <Link href="/testimonials" className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-5 py-2.5 text-sm font-bold text-terracotta transition hover:bg-terracotta/10">
              View All Reviews <FiArrowRight />
            </Link>
          </div>
          <ReviewCarousel reviews={googleReviews} />
          </div>
        </Reveal>
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
