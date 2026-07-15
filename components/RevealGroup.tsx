"use client";

import type { ReactNode } from "react";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  trigger?: "scroll" | "mount";
  amount?: number;
  stagger?: number;
  delayChildren?: number;
};

export function RevealGroup({ children, className }: RevealGroupProps) {
  return <div className={className}>{children}</div>;
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  hoverLift?: boolean;
};

export function RevealItem({ children, className, hoverLift = false }: RevealItemProps) {
  return (
    <div className={`${className ?? ""}${hoverLift ? " transition hover:-translate-y-1.5" : ""}`.trim()}>
      {children}
    </div>
  );
}
