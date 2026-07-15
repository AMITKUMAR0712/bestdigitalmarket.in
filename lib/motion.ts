export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export const motionDuration = {
  fast: 0.45,
  base: 0.72,
  slow: 0.9,
} as const;

export const motionStagger = {
  tight: 0.06,
  base: 0.1,
  relaxed: 0.14,
} as const;

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

type MotionPresetOptions = {
  direction?: RevealDirection;
  reducedMotion?: boolean | null;
  mobile?: boolean;
};

export function getRevealOffset(direction: RevealDirection, mobile: boolean) {
  void direction;
  void mobile;
  return { x: 0, y: 0 };
}

/** Instant show — no blur / fade / slide-on-scroll for faster perceived load. */
export function getRevealVariants(_options: MotionPresetOptions = {}) {
  return {
    hidden: { opacity: 1, scale: 1, filter: "none", x: 0, y: 0 },
    visible: { opacity: 1, scale: 1, filter: "none", x: 0, y: 0 },
  };
}
