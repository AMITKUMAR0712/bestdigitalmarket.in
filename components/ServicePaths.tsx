import Link from "next/link";
import { FiArrowRight, FiCpu, FiGlobe, FiTrendingUp } from "react-icons/fi";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";
import { SectionHeader } from "@/components/SectionHeader";
import { servicePaths } from "@/lib/pricing";

const icons = {
  website: FiGlobe,
  software: FiCpu,
  leads: FiTrendingUp,
} as const;

export function ServicePaths() {
  return (
    <section id="paths" className="app-section relative scroll-mt-24">
      <div className="app-container">
        <SectionHeader
          eyebrow="Start here"
          title="Three clear paths — pick what you need first."
          description="Most SME owners don’t need every service on day one. Choose a path, see a starting range, then talk to us."
        />
        <RevealGroup className="mt-8 grid gap-4 md:grid-cols-3" stagger={0.06}>
          {servicePaths.map((path) => {
            const Icon = icons[path.id as keyof typeof icons] ?? FiGlobe;
            return (
              <RevealItem key={path.id} hoverLift>
                <article className="flex h-full flex-col rounded-2xl border border-[var(--border-warm)] bg-white p-5 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-terracotta/10 text-terracotta">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-charcoal">{path.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-6 text-charcoal-light">{path.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Link
                      href={path.cta}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-terracotta-600"
                    >
                      Get quote
                    </Link>
                    <Link
                      href={path.href}
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--border-warm)] px-4 py-2.5 text-[13px] font-semibold text-charcoal transition hover:border-terracotta/30 hover:text-terracotta"
                    >
                      Details <FiArrowRight />
                    </Link>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
