"use client";

import { HeroVideoSlider } from "@/components/HeroVideoSlider";

/** Lightweight hero background — video only (no particle canvas / scroll parallax). */
export function WarmHeroBackground() {
  return (
    <div className="particle-hero absolute inset-0 z-0 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-cream" />
      <div className="absolute inset-0 z-[1]">
        <HeroVideoSlider />
      </div>
      <div aria-hidden="true" className="particle-hero-vignette pointer-events-none absolute inset-0 z-[5]" />
    </div>
  );
}
