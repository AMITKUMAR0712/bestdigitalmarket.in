"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMotionPreset } from "@/hooks/useMotionPreset";
import { easeOutExpo, getRevealVariants } from "@/lib/motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35, margin: "0px 0px -10% 0px" });
  const { prefersReducedMotion, isMobile, duration, stagger } = useMotionPreset();
  const itemVariants = getRevealVariants({ direction: "up", reducedMotion: prefersReducedMotion, mobile: isMobile });

  return (
    <motion.div
      ref={ref}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : stagger,
            delayChildren: prefersReducedMotion ? 0 : 0.02,
          },
        },
      }}
    >
      <motion.p
        className="section-eyebrow mb-2.5 sm:text-[11px]"
        variants={itemVariants}
        transition={{ duration, ease: easeOutExpo }}
      >
        <span className="pro-badge-dot" />
        {eyebrow}
      </motion.p>
      <motion.h2
        className="text-balance text-xl font-bold tracking-tight text-charcoal sm:text-2xl lg:text-[1.75rem]"
        variants={itemVariants}
        transition={{ duration, ease: easeOutExpo }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mt-3 text-pretty text-[13px] leading-6 text-charcoal-light sm:text-sm sm:leading-relaxed"
        variants={itemVariants}
        transition={{ duration, ease: easeOutExpo }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
