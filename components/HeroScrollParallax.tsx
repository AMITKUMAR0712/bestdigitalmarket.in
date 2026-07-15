"use client";

import type { ReactNode } from "react";

type HeroScrollParallaxProps = {
  children: ReactNode;
  className?: string;
};

/** No scroll opacity/parallax — keeps hero text stable and GPU light. */
export function HeroScrollParallax({ children, className }: HeroScrollParallaxProps) {
  return <div className={className}>{children}</div>;
}
