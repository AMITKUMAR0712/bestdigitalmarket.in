import { Reveal } from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";
import { companyTrust, trustBadges, trustHighlights } from "@/lib/data";

type TrustBarProps = {
  compact?: boolean;
  showBadges?: boolean;
};

export function TrustBar({ compact = false, showBadges = true }: TrustBarProps) {
  return (
    <section className={compact ? "relative px-4 py-4 sm:px-6" : "app-section relative py-6 sm:py-8"}>
      <div className="app-container">
        <RevealGroup className={`grid gap-3 ${compact ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 lg:grid-cols-4"}`}>
          {trustHighlights.map((item) => (
            <RevealItem key={item.label} hoverLift>
              <div
                className="trust-stat-card motion-card rounded-2xl border border-[var(--border-warm)] bg-[var(--card-white)] px-3 py-3 text-center shadow-soft sm:px-4 sm:py-4"
              >
                <p className={`font-bold text-terracotta ${compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"}`}>{item.value}</p>
                <p className="mt-1 text-[11px] font-medium text-charcoal-light sm:text-[12px]">{item.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {showBadges && (
          <RevealGroup className="mt-4 flex flex-wrap items-center justify-center gap-2" stagger={0.05}>
            {trustBadges.map((badge) => (
              <RevealItem key={badge}>
                <span className="inline-block rounded-full border border-terracotta/15 bg-terracotta/5 px-3 py-1.5 text-[10px] font-semibold text-terracotta sm:text-[11px]">
                  ✓ {badge}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        )}

        {!compact && (
          <Reveal>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[12px] leading-5 text-charcoal-light sm:text-[13px]">
              Trusted by {companyTrust.happyClients} clients across {companyTrust.citiesServed} cities · {companyTrust.onTimeDelivery} on-time delivery · {companyTrust.reviewCount} verified Google reviews
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
