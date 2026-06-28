"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function useMotionPreset() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return {
    prefersReducedMotion,
    isMobile,
    duration: prefersReducedMotion ? 0.01 : isMobile ? 0.58 : 0.78,
    stagger: prefersReducedMotion ? 0 : isMobile ? 0.07 : 0.1,
  };
}
