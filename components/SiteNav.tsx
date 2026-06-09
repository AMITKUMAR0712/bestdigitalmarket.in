import Link from "next/link";
import { callLink } from "@/lib/site";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  return (
    <div className="fixed inset-x-0 top-3 z-[80] px-3 sm:top-5 sm:px-6 lg:px-10">
      <nav className="nav-float luxury-border holo-panel mx-auto flex max-w-7xl items-center justify-between rounded-[1.7rem] border border-white/10 px-3 py-2.5 backdrop-blur-2xl sm:px-4 sm:py-3">
        <Link href="/" className="reveal-line text-base font-black tracking-tight sm:text-lg">
          Digital<span className="text-teal-300"> Future</span>
        </Link>
        <div className="hidden items-center gap-1 text-xs text-slate-300 lg:flex xl:gap-4 xl:text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-2.5 py-2 transition hover:bg-white/10 hover:text-teal-200 xl:px-3">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href="/" className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-xs font-bold text-white backdrop-blur-xl lg:hidden">
            Home
          </Link>
          <a href={callLink} className="call-now-pulse rounded-full bg-gradient-to-r from-teal-200 via-cyan-200 to-fuchsia-300 px-4 py-2 text-xs font-black text-slate-950 shadow-lg shadow-teal-500/20 transition hover:scale-105 sm:px-5 sm:text-sm">
            Call Now
          </a>
        </div>
      </nav>
    </div>
  );
}
