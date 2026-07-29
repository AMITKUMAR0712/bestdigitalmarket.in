"use client";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Reveal } from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";
import { companyTrust, trustBadges, trustHighlights } from "@/lib/data";

type TrustBarProps = {
  compact?: boolean;
  showBadges?: boolean;
};

export function TrustBar({ compact = false, showBadges = true }: TrustBarProps) {
  return (
    <section className={compact ? "relative px-4 py-4 sm:px-6" : "app-section relative py-4 sm:py-8"}>
      <div className="app-container">
        <RevealGroup className={`grid gap-3 sm:gap-4 ${compact ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 lg:grid-cols-4"}`}>
          {trustHighlights.map((item, index) => (
            <RevealItem key={item.label} hoverLift>
              <div
                className={`trust-stat-card trust-stat-card-v2 motion-card ${compact ? "is-compact" : ""}`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <span className="trust-stat-glow" aria-hidden="true" />
                <p className="trust-stat-value">
                  <AnimatedCounter value={item.count} suffix={item.suffix} duration={1400 + index * 180} />
                </p>
                <p className="trust-stat-label">{item.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {showBadges && (
          <RevealGroup className="mt-4 flex flex-wrap items-center justify-center gap-2" stagger={0.05}>
            {trustBadges.map((badge) => (
              <RevealItem key={badge}>
                <span className="trust-badge-pill">✓ {badge}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        )}

        {!compact && (
          <Reveal>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[12px] leading-5 text-charcoal-light sm:text-[13px]">
              Trusted by {companyTrust.happyClients} clients across {companyTrust.citiesServed} cities · {companyTrust.onTimeDelivery}{" "}
              on-time delivery
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
