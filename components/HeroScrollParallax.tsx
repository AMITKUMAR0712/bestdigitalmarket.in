"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type HeroScrollParallaxProps = {
  children: ReactNode;
  className?: string;
};

export function HeroScrollParallax({ children, className }: HeroScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <motion.div ref={ref} className={className} style={prefersReducedMotion ? undefined : { y, opacity }}>
      {children}
    </motion.div>
  );
}
