import { FiArrowRight, FiAward, FiBarChart2, FiMapPin, FiMousePointer, FiPhoneCall, FiStar, FiZap } from "react-icons/fi";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { caseStudies, serviceCategories, testimonials } from "@/lib/data";
import { callLink, siteConfig, whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden bg-transparent text-white">
      <HeroSection />
      <ServicesSection />
      <CaseStudies />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-28 lg:px-10 lg:pb-6 lg:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(45,212,191,0.16),transparent_28rem),radial-gradient(circle_at_88%_18%,rgba(217,70,239,0.18),transparent_30rem)]" />
      <div className="space-grid absolute inset-0 opacity-20" />
      <SiteNav />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-5 pt-2 sm:gap-7 sm:pt-4 lg:min-h-[calc(100svh-88px)] lg:grid-cols-[1.04fr_0.96fr] lg:gap-7 lg:pt-0 xl:gap-10">
        <Reveal>
          <div className="hero-mobile-shell mx-auto max-w-2xl rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-4 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0 lg:mx-0 lg:text-left">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-teal-100 shadow-lg shadow-teal-950/20 sm:text-xs lg:mx-0 xl:mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
              AI-Powered IT Solutions
            </div>
            <h1 className="gradient-title mx-auto max-w-3xl text-balance text-[clamp(2.15rem,9.4vw,3.85rem)] font-black leading-[0.94] tracking-tight lg:mx-0">
              Professional Websites & Software That Win Customers
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 lg:mx-0 xl:mt-4">
              Premium websites, software, CRM, mobile apps and smart growth systems built to look professional, load fast and convert visitors into enquiries.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 rounded-[1.6rem] border border-cyan-300/15 bg-cyan-300/[0.06] p-2 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl xl:mt-5">
              {["AI UI", "Software", "Growth"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/45 px-2 py-2.5 text-[11px] font-bold text-cyan-100 sm:px-3 sm:text-sm">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-3 grid max-w-2xl gap-2 sm:mt-4 sm:grid-cols-3 xl:mt-5">
              {[
                { icon: FiMousePointer, label: "AI-Style UI/UX" },
                { icon: FiBarChart2, label: "Smart Full Stack" },
                { icon: FiAward, label: "Modern Launch" },
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
            <div className="cosmic-dock mt-4 grid max-w-2xl grid-cols-4 gap-1.5 rounded-[1.7rem] border border-white/10 p-2 backdrop-blur-2xl sm:gap-2 sm:rounded-[2rem] xl:mt-5">
              {["AI", "Web", "Apps", "CRM"].map((item) => (
                <Link key={item} href="/services" className="rounded-2xl border border-white/10 bg-slate-950/45 px-2 py-2.5 text-center text-xs font-bold text-slate-200 transition hover:border-teal-300/40 hover:text-teal-300 sm:px-4 sm:py-3 sm:text-sm">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <HeroPreview />
        </Reveal>
      </div>
    </section>
  );
}

function HeroPreview() {
  const rows = [
    { label: "Website Design", value: "Premium UI", tone: "text-teal-200" },
    { label: "Software & CRM", value: "Smart Build", tone: "text-fuchsia-200" },
    { label: "Launch System", value: "Hosting + SEO", tone: "text-amber-200" },
  ];
  const metrics = [
    { value: "55+", label: "Websites Built" },
    { value: "18+", label: "Software Projects" },
    { value: "12+", label: "Apps & CRM" },
    { value: "30+", label: "Brands Served" },
  ];

  return (
    <div className="hero-preview-card luxury-border relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[2rem] border border-white/10 p-2.5 shadow-2xl shadow-teal-950/30 backdrop-blur-2xl sm:p-3 lg:max-w-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(94,234,212,0.22),transparent_28%),radial-gradient(circle_at_84%_22%,rgba(217,70,239,0.2),transparent_32%),linear-gradient(145deg,rgba(2,6,23,0.96),rgba(15,23,42,0.78))]" />
      <div className="relative rounded-[1.55rem] border border-white/10 bg-slate-950/70 p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-teal-300 sm:text-[10px]">Live Delivery Board</p>
            <h2 className="mt-1.5 text-lg font-black text-white sm:text-xl">Projects Built With Quality</h2>
          </div>
          <span className="rounded-full bg-emerald-300 px-3 py-1 text-[10px] font-black text-slate-950">READY</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-2.5 shadow-lg shadow-slate-950/20">
              <p className="text-lg font-black text-white sm:text-xl">{metric.value}</p>
              <p className="mt-0.5 text-[10px] font-semibold leading-4 text-slate-400">{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-2">
          {rows.map((row) => (
            <div key={row.label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 shadow-lg shadow-slate-950/20">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-300 sm:text-sm">{row.label}</span>
                <span className={`text-xs font-black sm:text-sm ${row.tone}`}>{row.value}</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-white/10">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-fuchsia-300" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5 text-center sm:gap-2">
          {["Fast Load", "App-Like UI", "Smart Leads"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 px-2 py-2.5 text-[10px] font-bold text-slate-200 sm:text-xs">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const homeServices = serviceCategories.filter((category) =>
    ["Websites & CRO", "Software & Full-Stack Development", "Mobile Apps & Business Systems", "DevOps, Testing & Deployment"].includes(category.title)
  );

  return (
    <section id="services" className="relative px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="absolute inset-x-0 top-24 h-96 bg-fuchsia-500/14 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader eyebrow="End-to-End Technology Services" title="Modern software, IT and digital systems for serious growth." description="One professional team for website design, software development, digital marketing, automation, CRM, testing, hosting, deployment and ongoing support." />
        <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-2">
          {homeServices.map((category, index) => {
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
                    {category.services.slice(0, 7).map((service) => (
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

function CaseStudies() {
  return (
    <section id="case-studies" className="relative px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="absolute inset-x-8 top-28 h-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Technology Projects" title="Real projects across fleet, hotel, government, CRM and software." description="A growing portfolio of modern websites, custom software, mobile app flows, dashboards, hosting, testing and smart marketing systems." />
        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">
          {caseStudies.slice(0, 6).map((study, index) => (
            <Reveal key={study.industry} delay={index * 0.06}>
              <article className="premium-card group relative min-h-64 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-teal-300/12 via-white/[0.04] to-fuchsia-500/15 p-6 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-2">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-300/25 blur-2xl transition group-hover:scale-150" />
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-300 via-fuchsia-400 to-amber-300" />
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{study.industry}</p>
                <h3 className="mt-6 text-3xl font-black text-teal-200">{study.result}</h3>
                <p className="mt-5 leading-7 text-slate-300">{study.detail}</p>
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

function TestimonialsSection() {
  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Client Trust" title="Trusted by founders, marketers and local business owners." description="Clients choose us for modern UI, clear strategy, premium execution and measurable digital growth." />
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

function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="absolute inset-x-0 bottom-0 h-96 bg-teal-500/14 blur-3xl" />
      <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-fuchsia-500/14 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div>
            <SectionHeader align="left" eyebrow="Contact" title="Ready to build something modern and reliable?" description="Share your requirement and our team will suggest the right technology solution across website development, software, mobile apps, CRM, hosting, digital marketing and ongoing support." />
            <div className="holo-panel mt-8 rounded-[2rem] border border-teal-300/15 p-5 shadow-xl shadow-teal-950/30 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-teal-300 p-3 text-slate-950">
                  <FiZap className="text-xl" />
                </div>
                <div>
                  <h3 className="font-black text-white">Free Requirement Review Included</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">We review your goals, current website, technical needs, launch requirements and lead journey before suggesting the best next step.</p>
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
