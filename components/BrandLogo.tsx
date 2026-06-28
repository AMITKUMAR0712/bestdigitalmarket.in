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
      className={`group inline-flex items-baseline leading-none transition hover:opacity-90 ${className}`}
    >
      <span className={`font-extrabold tracking-[-0.02em] text-charcoal ${compact ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"}`}>
        BDM
      </span>
      <span className={`font-extrabold tracking-[-0.02em] text-terracotta ${compact ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"}`}>
        Global
      </span>
    </Link>
  );
}
