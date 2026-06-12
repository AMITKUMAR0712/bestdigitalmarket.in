"use client";

import { FiArrowRight } from "react-icons/fi";

export function ScrollToContactButton() {
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
      className="cta-glow group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-200 via-cyan-200 to-fuchsia-300 px-6 py-3.5 text-sm font-black text-slate-950 transition hover:scale-105 sm:min-h-0 sm:rounded-full sm:px-7 sm:py-4 sm:text-base"
    >
      Start Your Project <FiArrowRight className="transition group-hover:translate-x-1" />
    </button>
  );
}
