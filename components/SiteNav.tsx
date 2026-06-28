"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiHome, FiLayers, FiMenu, FiPhoneCall, FiX } from "react-icons/fi";
import { BrandLogo } from "@/components/BrandLogo";
import { TopHeader } from "@/components/TopHeader";
import { callLink } from "@/lib/site";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateSpacer = () => {
      if (headerRef.current) {
        setSpacerHeight(headerRef.current.offsetHeight);
      }
    };

    updateSpacer();
    window.addEventListener("resize", updateSpacer);

    const observer = new ResizeObserver(updateSpacer);
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateSpacer);
      observer.disconnect();
    };
  }, [isScrolled, isOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`nav-soho fixed inset-x-0 top-0 z-[90] transition-all duration-300 ease-out ${
          isScrolled ? "nav-scrolled nav-compact" : ""
        } ${isOpen ? "nav-menu-open" : ""}`}
      >
        <div className="nav-top-bar transition-all duration-300 ease-out">
          <TopHeader />
        </div>

        <div className="nav-main-row relative mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 border-b border-[var(--border-warm)] bg-[var(--card-white)]/95 px-3 backdrop-blur-xl sm:h-16 sm:gap-3 sm:px-6 lg:px-8">
          <BrandLogo compact />

          <nav
            className="absolute left-1/2 hidden max-w-[52vw] -translate-x-1/2 items-center xl:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link-item rounded-lg px-2.5 py-2 text-[12px] font-medium transition-all duration-200 2xl:px-3 2xl:text-[13px] ${
                    active ? "nav-link-active bg-terracotta/10 text-terracotta" : "text-charcoal-muted hover:bg-cream-100 hover:text-terracotta"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full border border-[var(--border-warm)] bg-[var(--card-white)] px-3 py-2 text-[11px] font-semibold text-charcoal transition hover:border-terracotta/35 md:inline-flex lg:text-xs xl:text-[13px]"
            >
              Book Consultation
            </Link>
            <a
              href={callLink}
              className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-3 py-2 text-[11px] font-semibold text-white shadow-soft transition hover:bg-terracotta-600 sm:px-4 lg:text-xs xl:text-[13px]"
            >
              <FiPhoneCall className="text-sm" />
              <span className="hidden min-[420px]:inline">Call Now</span>
              <span className="min-[420px]:hidden">Call</span>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-warm)] bg-[var(--card-white)] text-charcoal transition hover:border-terracotta/30 xl:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </div>
      </header>

      <div aria-hidden="true" className="site-header-spacer" style={{ height: spacerHeight }} />

      <div
        className={`mobile-nav-sheet fixed inset-0 z-[85] xl:hidden ${isOpen ? "mobile-nav-sheet-open" : "pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className={`mobile-nav-backdrop absolute inset-0 bg-charcoal/35 backdrop-blur-[2px] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          tabIndex={isOpen ? 0 : -1}
        />
        <div
          className={`mobile-nav-panel absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col border-l border-[var(--border-warm)] bg-[var(--card-white)] shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: spacerHeight }}
        >
          <div className="border-b border-[var(--border-warm)] px-4 py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-terracotta">Menu</p>
            <p className="mt-1 text-[13px] font-medium text-charcoal">Website, SEO, software &amp; marketing</p>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-3">
            <div className="grid gap-1">
              {links.map((link, index) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`mobile-nav-link rounded-xl px-4 py-3 text-[14px] font-semibold transition ${
                      active ? "bg-terracotta/10 text-terracotta" : "text-charcoal hover:bg-cream-100"
                    }`}
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="border-t border-[var(--border-warm)] p-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-terracotta py-3 text-[14px] font-semibold text-white transition hover:bg-terracotta-600"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();

  const tabs = [
    { label: "Home", href: "/", icon: FiHome },
    { label: "Services", href: "/services", icon: FiLayers },
    { label: "Portfolio", href: "/portfolio", icon: FiMenu },
    { label: "Contact", href: "/contact", icon: FiPhoneCall },
  ];

  return (
    <nav
      className="mobile-tab-bar fixed inset-x-0 bottom-0 z-[70] border-t border-[var(--border-warm)] bg-[var(--card-white)]/95 backdrop-blur-lg xl:hidden"
      aria-label="Mobile app navigation"
    >
      <div className="mx-auto grid max-w-lg grid-cols-4 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-[10px] font-semibold transition ${
                active ? "text-terracotta" : "text-charcoal-light"
              }`}
            >
              <Icon className={`text-[18px] ${active ? "text-terracotta" : "text-charcoal-muted"}`} />
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
