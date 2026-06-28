"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useMotionPreset } from "@/hooks/useMotionPreset";
import { easeOutExpo, getRevealVariants, type RevealDirection } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: RevealDirection;
  amount?: number;
  trigger?: "scroll" | "mount";
};

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  amount = 0.18,
  trigger = "scroll",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount, margin: "0px 0px -8% 0px" });
  const { prefersReducedMotion, isMobile, duration } = useMotionPreset();
  const shouldAnimate = trigger === "mount" ? true : isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={getRevealVariants({ direction, reducedMotion: prefersReducedMotion, mobile: isMobile })}
      transition={{
        duration,
        delay,
        ease: easeOutExpo,
      }}
    >
      {children}
    </motion.div>
  );
}
