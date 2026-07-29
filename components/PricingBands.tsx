import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";
import { SectionHeader } from "@/components/SectionHeader";
import { pricingBands } from "@/lib/pricing";

export function PricingBands() {
  return (
    <section id="pricing" className="app-section relative scroll-mt-24">
      <div className="app-container">
        <SectionHeader
          eyebrow="Investment ranges"
          title="Clear starting points — final quote after a short call."
          description="Most Greater Noida and Noida projects begin in these ranges. Scope, pages, integrations and timeline change the final number. No surprise invoices before a written estimate."
        />
        <RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
          {pricingBands.map((band) => (
            <RevealItem key={band.id} hoverLift>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--border-warm)] bg-white p-4 shadow-soft sm:p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-terracotta">{band.title}</p>
                <p className="mt-3 text-xl font-bold text-charcoal">{band.fromLabel}</p>
                <p className="mt-2 flex-1 text-[13px] leading-5 text-charcoal-light">{band.detail}</p>
                <Link
                  href={band.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-terracotta transition hover:gap-2.5"
                >
                  Get my exact quote <FiArrowRight />
                </Link>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal>
          <p className="mt-5 text-center text-[12px] text-charcoal-muted">
            Ad spend, third-party licenses and domain/hosting renewals are separate unless listed in your proposal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
