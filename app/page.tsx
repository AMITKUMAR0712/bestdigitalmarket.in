import { FiArrowRight, FiAward, FiBarChart2, FiCheck, FiMapPin, FiMousePointer, FiPhoneCall, FiStar, FiZap } from "react-icons/fi";
import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ContactForm } from "@/components/ContactForm";
import { GlobeLoader } from "@/components/GlobeLoader";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { aboutPoints, brands, caseStudies, faqs, processSteps, serviceCategories, stats, testimonials, whyChooseUs } from "@/lib/data";
import { callLink, siteConfig, whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden bg-transparent text-white">
      <HeroSection />
      <TrustedBrands />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <CaseStudies />
      <ProcessSection />
      <TestimonialsSection />
      <FaqTeaser />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden px-4 pb-8 pt-20 sm:px-6 sm:pb-12 sm:pt-28 lg:px-10 lg:pb-6 lg:pt-24">
      <div className="space-grid absolute inset-0 opacity-35" />
      <div className="aurora-orb left-[8%] top-28 h-80 w-80 bg-teal-300/30" />
      <div className="aurora-orb right-[6%] top-16 h-96 w-96 bg-fuchsia-500/30" />
      <div className="aurora-orb bottom-10 left-[42%] h-72 w-72 bg-amber-500/15" />
      <div className="absolute inset-x-4 top-24 h-40 rounded-full bg-cyan-300/10 blur-3xl sm:hidden" />
      <SiteNav />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 pt-2 sm:gap-8 sm:pt-4 lg:min-h-[calc(100svh-96px)] lg:grid-cols-[0.98fr_1.02fr] lg:gap-8 lg:pt-0 xl:gap-10">
        <Reveal>
          <div className="hero-mobile-shell mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0 lg:mx-0 lg:text-left">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-teal-100 shadow-lg shadow-teal-950/20 sm:text-xs lg:mx-0 xl:mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
              End-to-End Technology Partner
            </div>
            <h1 className="gradient-title mx-auto max-w-3xl text-balance text-[clamp(2.25rem,10vw,3.95rem)] font-black leading-[0.94] tracking-tight lg:mx-0">
              Build, Launch & Grow With Complete IT Solutions
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-6 text-slate-300 sm:text-lg sm:leading-7 lg:mx-0 xl:mt-4">
              We deliver websites, custom software, full-stack apps, mobile apps, CRM, DevOps, hosting, testing and digital marketing from planning to launch.
            </p>
            <div className="mt-4 grid gap-2 rounded-[1.7rem] border border-cyan-300/15 bg-cyan-300/[0.06] p-2 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:grid-cols-3 sm:p-3 xl:mt-5">
              {["Websites & Apps", "Software & CRM", "DevOps & Marketing"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/45 px-3 py-2.5 text-xs font-bold text-cyan-100 sm:text-sm">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-3 grid max-w-2xl gap-2 sm:mt-4 sm:grid-cols-3 xl:mt-5">
              {[
                { icon: FiMousePointer, label: "Responsive UI/UX" },
                { icon: FiBarChart2, label: "Scalable Full Stack" },
                { icon: FiAward, label: "Launch Support" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="float-chip flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-xs font-semibold text-slate-200 shadow-lg shadow-cyan-950/20 backdrop-blur-xl sm:block sm:text-sm">
                    <Icon className="text-teal-300 sm:mx-auto sm:mb-2 lg:mx-0" />
                    {item.label}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:justify-center lg:justify-start xl:mt-6">
              <a href="https://ramhari-enterprises-com.vercel.app/" target="_blank" rel="noreferrer" className="cta-glow group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-200 via-cyan-200 to-fuchsia-300 px-6 py-3.5 text-sm font-black text-slate-950 transition hover:scale-105 sm:min-h-0 sm:rounded-full sm:px-7 sm:py-4 sm:text-base">
                Start Your Project <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.08] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-950/20 backdrop-blur-xl transition hover:scale-105 hover:border-emerald-300/60 hover:bg-emerald-300/10 sm:min-h-0 sm:rounded-full sm:px-7 sm:py-4 sm:text-base">
                WhatsApp Consultation
              </a>
            </div>
            <p className="mt-3 text-xs font-medium text-slate-400 sm:text-sm">
              Trusted for fleet, hotel, government, CRM, ecommerce and service business projects.
            </p>
            <div className="cosmic-dock mt-4 grid max-w-2xl grid-cols-2 gap-2 rounded-[1.7rem] border border-white/10 p-2.5 backdrop-blur-2xl sm:grid-cols-4 sm:rounded-[2rem] xl:mt-5">
              {["Websites", "Software", "Mobile Apps", "DevOps"].map((item) => (
                <Link key={item} href="/services" className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-center text-sm font-bold text-slate-200 transition hover:border-teal-300/40 hover:text-teal-300">
                  {item}
                </Link>
              ))}
            </div>
            <div className="mt-5 hidden grid-cols-2 gap-2 xl:grid xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="premium-card magnetic-glow rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-xl shadow-teal-950/20 backdrop-blur-xl">
                  <p className="text-2xl font-black text-teal-100 sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <GlobeLoader />
        </Reveal>
      </div>
    </section>
  );
}

function TrustedBrands() {
  return (
    <section className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute inset-x-0 top-1/2 h-48 -translate-y-1/2 bg-teal-300/5 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Trusted Projects" title="Trusted by 30+ brands, startups and service businesses." description="From fleet platforms and hotel websites to CRM, government-style portals and growth systems, we build digital products that are ready to scale." />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 lg:mt-12 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <Reveal key={brand} delay={(index % 5) * 0.04}>
              <div className="brand-glow group rounded-3xl border border-white/10 p-5 text-center font-bold text-slate-200 shadow-lg shadow-slate-950/30 backdrop-blur-xl transition hover:-translate-y-1 hover:scale-[1.02] hover:border-teal-300/45 hover:text-white hover:shadow-teal-500/15">
                {brand}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeader align="left" eyebrow="About Us" title="Digital growth experts building ROI-focused campaigns." description="We combine strategy, creative, media buying, SEO and analytics to help ambitious businesses convert attention into qualified leads." />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.05}>
              <div className="premium-card h-full rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-xl shadow-slate-950/30 backdrop-blur-xl transition hover:-translate-y-1">
                <div className="mb-5 inline-flex rounded-2xl bg-teal-300/10 p-3 text-teal-300 shadow-lg shadow-teal-500/10">
                  <FiCheck className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold">{point}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">Built into every growth plan, so your marketing stays measurable, clear and aligned with revenue.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute inset-x-0 top-24 h-96 bg-fuchsia-500/14 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader eyebrow="Services" title="Complete digital, software and IT services for serious growth." description="From websites and full-stack apps to DevOps, testing, CRM, deployment and marketing, we deliver end-to-end solutions for your business." />
        <div className="mt-8 grid gap-5 sm:mt-10 lg:mt-12 lg:grid-cols-2">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={index * 0.05}>
                <article className="premium-card magnetic-glow group h-full rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl hover:border-teal-300/40">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-gradient-to-br from-teal-300/20 to-fuchsia-400/20 p-4 text-teal-300 shadow-lg shadow-teal-500/10 transition group-hover:scale-110">
                      <Icon className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">{category.title}</h3>
                      <p className="mt-3 leading-7 text-slate-400">{category.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.services.map((service) => (
                      <span key={service} className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-2 text-sm text-slate-300 transition group-hover:border-teal-300/20 group-hover:text-teal-100">
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
          <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-6 py-3 font-bold text-teal-100 transition hover:scale-105 hover:border-teal-300/50">
            Explore All Services <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="space-grid absolute inset-0 opacity-10" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Why Choose Us" title="Strategy, execution and reporting under one expert team." description="We prioritize business outcomes over vanity metrics and keep every campaign accountable to growth." />
        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="premium-card h-full rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-slate-950/25 transition hover:-translate-y-1 hover:border-fuchsia-300/40 hover:bg-fuchsia-400/10">
                  <div className="inline-flex rounded-2xl bg-fuchsia-400/10 p-3 text-teal-300">
                    <Icon className="text-3xl" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute inset-x-8 top-28 h-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Projects & Case Studies" title="Real projects across fleet, hotel, government, CRM and software." description="A growing portfolio of websites, custom software, mobile app flows, dashboards, hosting, testing and marketing systems." />
        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4">
          {caseStudies.map((study, index) => (
            <Reveal key={study.industry} delay={index * 0.06}>
              <article className="premium-card group relative min-h-72 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-teal-300/12 via-white/[0.04] to-fuchsia-500/15 p-6 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-2">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-300/25 blur-2xl transition group-hover:scale-150" />
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-300 via-fuchsia-400 to-amber-300" />
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{study.industry}</p>
                <h3 className="mt-8 text-3xl font-black text-teal-200 sm:text-4xl">{study.result}</h3>
                <p className="mt-6 leading-7 text-slate-300">{study.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-6 py-3 font-bold text-teal-100 transition hover:scale-105 hover:border-teal-300/50">
            View Case Studies <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Process" title="A clear system from analysis to scalable growth." description="Our process keeps strategy, launch, optimization and scaling connected to business outcomes." />
        <div className="mt-8 grid gap-5 sm:mt-10 lg:mt-12 lg:grid-cols-5">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} delay={index * 0.05}>
                <div className="premium-card group h-full rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-slate-950/25 transition hover:-translate-y-1">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-300 to-fuchsia-300 text-sm font-black text-slate-950 shadow-lg shadow-teal-500/20">{item.step}</span>
                  <Icon className="mt-5 text-3xl text-fuchsia-300 transition group-hover:text-teal-300" />
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Testimonials" title="Trusted by founders, marketers and local business owners." description="Clients choose us for clear strategy, premium execution and measurable digital growth." />
        <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <Reveal key={`${testimonial.name}-${testimonial.company}`} delay={(index % 4) * 0.04}>
              <figure className="premium-card h-full rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-slate-950/25 transition hover:-translate-y-1">
                <div className="flex gap-1 text-amber-300">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <FiStar key={starIndex} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-5 leading-7 text-slate-300">“{testimonial.review}”</blockquote>
                <figcaption className="mt-6">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-teal-300">{testimonial.company}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/testimonials" className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-6 py-3 font-bold text-teal-100 transition hover:scale-105 hover:border-teal-300/50">
            Read More Reviews <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaqTeaser() {
  return (
    <section id="faq" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="FAQ" title="Have questions before scaling?" description="We moved detailed answers to a dedicated FAQ page so the homepage stays focused and fast." />
        <div className="mt-8 space-y-4 sm:mt-10 lg:mt-12">
          {faqs.slice(0, 3).map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-lg shadow-slate-950/20 transition open:border-teal-300/35 open:bg-teal-300/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-white">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-300/10 text-teal-300 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-6 py-3 font-bold text-teal-100 transition hover:scale-105 hover:border-teal-300/50">
            View All FAQs <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute inset-x-0 bottom-0 h-96 bg-teal-500/14 blur-3xl" />
      <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-fuchsia-500/14 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div>
            <SectionHeader align="left" eyebrow="Contact" title="Ready to build a predictable lead generation engine?" description="Share your goals and our team will suggest the right mix of SEO, ads, website improvements and automation for your business." />
            <div className="holo-panel mt-8 rounded-[2rem] border border-teal-300/15 p-5 shadow-xl shadow-teal-950/30 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-teal-300 p-3 text-slate-950">
                  <FiZap className="text-xl" />
                </div>
                <div>
                  <h3 className="font-black text-white">Free Growth Audit Included</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">We review your website, ads, SEO, social presence and lead journey before suggesting the best next step.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <a href={callLink} className="premium-card flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:border-teal-300/40">
                <FiPhoneCall className="text-2xl text-teal-300" />
                <span>
                  <span className="block text-sm text-slate-400">Call for consultation</span>
                  <span className="font-bold">+91 {siteConfig.callNumber}</span>
                </span>
              </a>
              <div className="premium-card flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <FiMapPin className="text-2xl text-fuchsia-300" />
                <span>
                  <span className="block text-sm text-slate-400">Serving</span>
                  <span className="font-bold">{siteConfig.areas.join(", ")}</span>
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
