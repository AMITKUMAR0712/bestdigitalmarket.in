"use client";

import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number;
  trigger?: "scroll" | "mount";
};

export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
