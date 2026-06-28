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
  const distance = mobile ? 28 : 52;

  switch (direction) {
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    case "none":
      return {};
    default:
      return { y: distance };
  }
}

export function getRevealVariants({
  direction = "up",
  reducedMotion = false,
  mobile = false,
}: MotionPresetOptions = {}) {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  const offset = getRevealOffset(direction, mobile);

  return {
    hidden: {
      opacity: 0,
      scale: mobile ? 0.98 : 0.94,
      filter: mobile ? "blur(0px)" : "blur(12px)",
      ...offset,
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
    },
  };
}
