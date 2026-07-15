import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";
import { callLink, siteConfig } from "@/lib/site";

const topServices = [
  { label: "Website Development", href: "/services" },
  { label: "Custom Software", href: "/services" },
  { label: "AI Models", href: "/services" },
  { label: "Agentic AI", href: "/services" },
  { label: "Software Development", href: "/services" },
  { label: "Mobile Apps", href: "/services" },
  { label: "SEO", href: "/services" },
  { label: "Digital Marketing", href: "/services" },
];

export function TopHeader() {
  return (
    <div className="top-header-bar border-b border-white/10 bg-[#050510] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs">
          <a href={callLink} className="inline-flex items-center gap-1.5 whitespace-nowrap transition hover:text-white/80">
            <FiPhone className="shrink-0 text-[12px]" aria-hidden="true" />
            <span>+91-{siteConfig.callNumber}</span>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex min-w-0 items-center gap-1.5 transition hover:text-white/80">
            <FiMail className="shrink-0 text-[12px]" aria-hidden="true" />
            <span className="truncate">{siteConfig.email}</span>
          </a>
        </div>

        <nav
          className="hidden max-w-[58%] items-center gap-0 overflow-x-auto text-[11px] md:flex lg:max-w-none lg:text-xs [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Top services"
        >
          {topServices.map((service, index) => (
            <span key={service.label} className="inline-flex shrink-0 items-center">
              {index > 0 && <span className="mx-2 text-white/35" aria-hidden="true">|</span>}
              <Link href={service.href} className="whitespace-nowrap transition hover:text-white/80">
                {service.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
