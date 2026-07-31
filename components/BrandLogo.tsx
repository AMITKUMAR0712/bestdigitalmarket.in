import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const LOGO_WIDTH = 900;
const LOGO_HEIGHT = 260;

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={`group inline-flex items-center leading-none transition hover:opacity-95 ${className}`}
    >
      <span className={`brand-logo-badge inline-flex items-center ${compact ? "rounded-xl px-2.5 py-1.5 sm:rounded-2xl sm:px-3 sm:py-2" : "rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3"}`}>
        <Image
          src="/tradeorbit-logo.png"
          alt={siteConfig.name}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          sizes="(max-width: 640px) 120px, 180px"
          quality={75}
          className={`brand-logo-image ${compact ? "h-7 w-auto sm:h-9" : "h-11 w-auto sm:h-14"}`}
        />
      </span>
    </Link>
  );
}
