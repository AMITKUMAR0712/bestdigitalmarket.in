"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BrandLogo } from "@/components/BrandLogo";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-3 z-[80] px-3 sm:top-5 sm:px-6 lg:px-10">
      <nav className="nav-float luxury-border holo-panel mx-auto flex max-w-7xl items-center justify-between rounded-[1.7rem] border border-white/10 bg-slate-950/35 px-3 py-2.5 backdrop-blur-xl sm:px-4 sm:py-3">
        <BrandLogo compact className="reveal-line" />
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
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="ai-toggle relative grid h-10 w-10 place-items-center rounded-full border border-teal-300/25 bg-slate-950/60 text-teal-100 shadow-lg shadow-teal-950/30 backdrop-blur-xl transition hover:scale-105 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
          <a href={callLink} className="call-now-pulse rounded-full bg-gradient-to-r from-teal-200 via-cyan-200 to-fuchsia-300 px-4 py-2 text-xs font-black text-slate-950 shadow-lg shadow-teal-500/20 transition hover:scale-105 sm:px-5 sm:text-sm">
            Call Now
          </a>
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-ai-menu mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/88 p-3 shadow-2xl shadow-teal-950/35 backdrop-blur-2xl lg:hidden">
          <div className="mb-3 rounded-2xl border border-teal-300/15 bg-teal-300/10 px-4 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-teal-300">AI Navigation</p>
            <p className="mt-1 text-sm font-bold text-white">Explore services, projects and contact options.</p>
          </div>
          <div className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
