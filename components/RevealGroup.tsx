"use client";

import { motion, useInView } from "framer-motion";
import { createContext, useContext, useRef, type ReactNode } from "react";
import { useMotionPreset } from "@/hooks/useMotionPreset";
import { easeOutExpo, getRevealVariants, type RevealDirection } from "@/lib/motion";

type RevealGroupContextValue = {
  shouldAnimate: boolean;
};

const RevealGroupContext = createContext<RevealGroupContextValue>({ shouldAnimate: false });

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  trigger?: "scroll" | "mount";
  amount?: number;
  stagger?: number;
  delayChildren?: number;
};

export function RevealGroup({
  children,
  className,
  trigger = "scroll",
  amount = 0.12,
  stagger,
  delayChildren = 0.04,
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount, margin: "0px 0px -6% 0px" });
  const { prefersReducedMotion, stagger: defaultStagger } = useMotionPreset();
  const shouldAnimate = trigger === "mount" ? true : isInView;

  return (
    <RevealGroupContext.Provider value={{ shouldAnimate }}>
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: prefersReducedMotion ? 0 : (stagger ?? defaultStagger),
              delayChildren: prefersReducedMotion ? 0 : delayChildren,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </RevealGroupContext.Provider>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  hoverLift?: boolean;
};

export function RevealItem({ children, className, direction = "up", hoverLift = false }: RevealItemProps) {
  const { shouldAnimate } = useContext(RevealGroupContext);
  const { prefersReducedMotion, isMobile, duration } = useMotionPreset();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={getRevealVariants({ direction, reducedMotion: prefersReducedMotion, mobile: isMobile })}
      transition={{
        duration,
        ease: easeOutExpo,
      }}
      whileHover={
        hoverLift && !prefersReducedMotion
          ? {
              y: -6,
              transition: { duration: 0.28, ease: easeOutExpo },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
