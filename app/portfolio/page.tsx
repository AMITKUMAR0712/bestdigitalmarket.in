import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { PortfolioExplorer } from "@/components/PortfolioExplorer";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { portfolioProjects } from "@/lib/portfolio";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio | Website, Software & Digital Marketing Projects",
  description:
    "Explore our portfolio of website development, custom software, mobile apps, CRM, SEO and digital marketing projects for businesses across Noida, Greater Noida and India.",
  keywords: [
    "website development portfolio Noida",
    "software development portfolio India",
    "digital marketing projects",
    "web design portfolio Greater Noida",
    "TradeOrbit Global portfolio",
  ],
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  const featured = portfolioProjects.filter((project) => project.featured).slice(0, 6);

  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <PageHero
        category="portfolio"
        eyebrow="Our Work Portfolio"
        title="Our selected portfolio projects"
        description="Explore website, software, mobile app and digital solution projects developed for businesses, startups, institutions and growing brands across India."
      />
      <TrustBar compact showBadges={false} />

      <section className="app-section relative pt-0">
        <div className="app-container">
          <PortfolioExplorer />
        </div>
      </section>

      <section className="app-section relative border-t border-[var(--border-warm)] bg-white/60">
        <div className="app-container">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-terracotta">Detailed Proof</p>
              <h2 className="mt-2 text-xl font-bold text-charcoal sm:text-2xl">Featured Case Studies</h2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta transition hover:gap-3">
              View all case studies <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <article key={project.id} className="portfolio-card premium-card overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-[var(--card-white)]">
                <div className="relative h-44 overflow-hidden bg-cream-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={360}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <span className="inline-flex rounded-full bg-terracotta/10 px-2.5 py-1 text-[10px] font-semibold text-terracotta">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-charcoal">{project.title}</h3>
                  <p className="mt-1 text-xs font-medium text-charcoal-light">{project.client}</p>
                  <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-charcoal-light">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-terracotta transition hover:gap-2"
                  >
                    Visit Project →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <article key={study.industry} className="rounded-2xl border border-[var(--border-warm)] bg-cream-50 p-4">
                <p className="text-xs uppercase tracking-wide text-charcoal-light">{study.industry}</p>
                <h3 className="mt-2 text-base font-bold text-terracotta">{study.result}</h3>
                <p className="mt-2 text-[13px] leading-6 text-charcoal-light">{study.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
