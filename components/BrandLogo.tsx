import Link from "next/link";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={`group relative inline-flex flex-col items-start overflow-hidden rounded-2xl border border-amber-200/10 bg-white/[0.035] px-3 py-2 leading-none shadow-lg shadow-slate-950/20 ring-1 ring-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-amber-200/30 hover:bg-amber-200/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${
        compact ? "sm:px-4" : "px-5 py-4"
      } ${className}`}
    >
      <span className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full bg-amber-300/20 blur-2xl transition duration-300 group-hover:bg-teal-300/20" />
      <span className={`relative bg-gradient-to-b from-amber-100 via-amber-300 to-yellow-700 bg-clip-text font-black tracking-[0.12em] text-transparent drop-shadow-[0_0_18px_rgba(251,191,36,0.34)] [font-family:Georgia,serif] ${compact ? "text-3xl sm:text-4xl" : "text-5xl sm:text-6xl"}`}>
        BDM
      </span>
      <span className="relative mt-1 h-px w-full bg-gradient-to-r from-transparent via-amber-300/70 to-teal-300/60" />
      <span className={`relative mt-1.5 font-black uppercase text-amber-100/90 drop-shadow-[0_0_10px_rgba(45,212,191,0.18)] ${compact ? "text-[7px] tracking-[0.28em] sm:text-[9px]" : "text-[11px] tracking-[0.34em] sm:text-xs"}`}>
        Best Digital Market
      </span>
    </Link>
  );
}
