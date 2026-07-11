"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroCodePanel } from "@/components/HeroCodePanel";
import { HeroVideoSlider } from "@/components/HeroVideoSlider";
import { ParticleCanvas } from "@/components/ParticleCanvas";

export function WarmHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const codeY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const codeOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <div ref={containerRef} className="particle-hero absolute inset-0 z-0 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-cream" />

      <motion.div
        className="absolute inset-0 z-[1]"
        style={prefersReducedMotion ? undefined : { scale: videoScale, opacity: videoOpacity }}
      >
        <HeroVideoSlider />
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-24 h-80 w-80 rounded-full bg-terracotta/8 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-terracotta/6 blur-3xl" />

      <motion.div
        aria-hidden="true"
        className="hero-code-wrap pointer-events-none absolute left-[3%] top-[12%] z-[3] hidden w-[280px] lg:block xl:left-[6%] xl:w-[320px]"
        style={prefersReducedMotion ? undefined : { y: codeY, opacity: codeOpacity }}
      >
        <HeroCodePanel />
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none">
        <ParticleCanvas />
      </div>
      <div aria-hidden="true" className="particle-hero-vignette pointer-events-none absolute inset-0 z-[5]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5] opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Cpath d=%22M30 50h20v20H30zM70 30h20v20H70zM70 70h20v20H70z%22 fill=%22none%22 stroke=%22%231c1917%22 stroke-width=%221.5%22/%3E%3C/svg%3E')] [background-size:120px_120px]"
      />
    </div>
  );
}
