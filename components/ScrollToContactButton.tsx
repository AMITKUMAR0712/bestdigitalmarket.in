"use client";

import { FiArrowRight } from "react-icons/fi";

type ScrollToContactButtonProps = {
  className?: string;
};

export function ScrollToContactButton({ className = "" }: ScrollToContactButtonProps) {
  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`cta-glow group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-terracotta-600 sm:min-h-0 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm ${className}`.trim()}
    >
      <span className="relative z-[1]">Get Free Consultation</span>
      <FiArrowRight className="relative z-[1] text-sm transition group-hover:translate-x-0.5" />
    </button>
  );
}
