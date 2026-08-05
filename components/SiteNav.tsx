"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FiBriefcase,
  FiChevronDown,
  FiGrid,
  FiHelpCircle,
  FiHome,
  FiInfo,
  FiLayers,
  FiMail,
  FiMenu,
  FiMessageCircle,
  FiPackage,
  FiPhoneCall,
  FiSettings,
  FiX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BrandLogo } from "@/components/BrandLogo";
import { TopHeader } from "@/components/TopHeader";
import { callLink, whatsappLink } from "@/lib/site";
import { productsMenu, servicesMenu, type NavMenuColumn } from "@/lib/nav-menu";

const links: {
  label: string;
  href: string;
  icon: typeof FiHome;
  menu?: NavMenuColumn[];
  menuOnly?: boolean;
}[] = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "About", href: "/about", icon: FiInfo },
  { label: "Services", href: "/services", icon: FiLayers, menu: servicesMenu },
  { label: "Products", href: "/products", icon: FiPackage, menu: productsMenu },
  { label: "Portfolio", href: "/portfolio", icon: FiGrid },
  { label: "Case Studies", href: "/case-studies", icon: FiBriefcase },
  { label: "Process", href: "/process", icon: FiSettings },
  { label: "FAQ", href: "/faq", icon: FiHelpCircle },
  { label: "Contact", href: "/contact", icon: FiMail },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openMenuNow(label: string) {
    clearCloseTimer();
    setOpenMenu(label);
  }

  function scheduleMenuClose() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 150);
  }

  useEffect(() => {
    setIsOpen(false);
    setOpenMenu(null);
    setExpandedMobile(null);
  }, [pathname]);

  useEffect(() => () => clearCloseTimer(), []);

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
            className="absolute left-1/2 hidden max-w-[62vw] -translate-x-1/2 items-center lg:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => {
              const active = pathname === link.href;
              const isMenuOpen = openMenu === link.label;
              const linkClassName = `nav-link-item flex shrink-0 items-center gap-1 whitespace-nowrap rounded-lg px-1.5 py-2 text-[10.5px] font-medium transition-all duration-200 lg:text-[11px] xl:px-2 xl:text-[11.5px] 2xl:px-2.5 2xl:text-[13px] ${
                active ? "nav-link-active bg-terracotta/10 text-terracotta" : "text-charcoal-muted hover:bg-cream-100 hover:text-terracotta"
              }`;

              if (!link.menu) {
                return (
                  <Link key={link.label} href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                );
              }

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => openMenuNow(link.label)}
                  onMouseLeave={scheduleMenuClose}
                >
                  {link.menuOnly ? (
                    <button
                      type="button"
                      className={linkClassName}
                      aria-expanded={isMenuOpen}
                      onClick={() => setOpenMenu(isMenuOpen ? null : link.label)}
                    >
                      {link.label}
                      <FiChevronDown className={`text-[13px] transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={linkClassName}
                      aria-expanded={isMenuOpen}
                      onFocus={() => openMenuNow(link.label)}
                    >
                      {link.label}
                      <FiChevronDown className={`text-[13px] transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`} />
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {(() => {
            const activeColumns = links.find((link) => link.label === openMenu)?.menu;
            if (!activeColumns) return null;
            return (
              <div
                className="nav-mega-panel absolute inset-x-0 top-full z-[95] hidden lg:block"
                onMouseEnter={() => openMenuNow(openMenu as string)}
                onMouseLeave={scheduleMenuClose}
              >
                <div className="mx-auto max-w-5xl px-6 pt-3 lg:px-8">
                  <div className="nav-mega-panel-card grid grid-cols-3 gap-8 rounded-[1.75rem] border border-[var(--border-warm)] bg-[var(--card-white)] p-8 shadow-2xl">
                    {activeColumns.map((column) => (
                      <div key={column.heading}>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-terracotta">{column.heading}</p>
                        <div className="mt-4 flex flex-col gap-4">
                          {column.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="group -mx-2 block rounded-xl px-2 py-1.5 transition hover:bg-cream-100"
                              onClick={() => setOpenMenu(null)}
                            >
                              <p className="text-sm font-bold text-charcoal transition group-hover:text-terracotta">{item.title}</p>
                              <p className="mt-0.5 text-xs leading-5 text-charcoal-light">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[var(--border-warm)] bg-[var(--card-white)] px-3 py-2 text-[11px] font-semibold text-charcoal transition hover:border-terracotta/35 sm:px-4 lg:text-xs xl:text-[13px]"
            >
              Book Consultation
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-warm)] bg-[var(--card-white)] text-charcoal transition hover:border-terracotta/30 lg:hidden"
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
        className={`mobile-nav-sheet fixed inset-0 z-[85] lg:hidden ${isOpen ? "mobile-nav-sheet-open" : "pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className={`mobile-nav-backdrop absolute inset-0 bg-charcoal/40 backdrop-blur-[3px] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          tabIndex={isOpen ? 0 : -1}
        />
        <div
          className={`mobile-nav-panel absolute inset-y-0 right-0 flex w-[min(100%,21.5rem)] flex-col overflow-hidden shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: spacerHeight }}
        >
          <div className="mobile-nav-panel-glow" aria-hidden="true" />

          <div className="relative border-b border-[var(--border-warm)]/80 px-4 pb-4 pt-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta">Explore</p>
                <p className="mt-1.5 text-[15px] font-bold leading-snug text-charcoal">TradeOrbit Global</p>
                <p className="mt-1 text-[12px] leading-relaxed text-charcoal-light">
                  Websites, software, AI &amp; growth marketing
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--border-warm)] bg-white/80 text-charcoal transition hover:border-terracotta/40 hover:text-terracotta"
                aria-label="Close menu"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href={callLink}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-terracotta px-3 py-2.5 text-[12px] font-bold text-white shadow-soft transition hover:bg-terracotta-600"
              >
                <FiPhoneCall className="text-sm" />
                Call Now
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#25d366]/35 bg-[#25d366]/10 px-3 py-2.5 text-[12px] font-bold text-[#128c7e] transition hover:bg-[#25d366]/18"
              >
                <FaWhatsapp className="text-sm" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative flex-1 overflow-y-auto px-3 py-3">
            <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-charcoal-muted">Pages</p>
            <div className="grid gap-1.5">
              {links.map((link, index) => {
                const Icon = link.icon;
                const active = pathname === link.href;
                const isExpanded = expandedMobile === link.label;

                if (!link.menu) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`mobile-nav-link group flex items-center gap-3 rounded-2xl px-3 py-3 text-[14px] font-semibold transition ${
                        active
                          ? "bg-terracotta text-white shadow-soft"
                          : "bg-white/55 text-charcoal hover:bg-white hover:text-terracotta"
                      }`}
                      style={{ animationDelay: `${index * 35}ms` }}
                    >
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-xl transition ${
                          active
                            ? "bg-white/20 text-white"
                            : "bg-cream-100 text-terracotta group-hover:bg-terracotta/10"
                        }`}
                      >
                        <Icon className="text-[16px]" />
                      </span>
                      <span className="flex-1">{link.label}</span>
                      <span
                        className={`text-[16px] transition ${
                          active ? "text-white/80" : "text-charcoal-muted opacity-0 group-hover:opacity-100"
                        }`}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  );
                }

                return (
                  <div
                    key={link.label}
                    className="mobile-nav-link overflow-hidden rounded-2xl bg-white/55"
                    style={{ animationDelay: `${index * 35}ms` }}
                  >
                    <div
                      className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-[14px] font-semibold transition ${
                        active ? "bg-terracotta text-white shadow-soft" : "text-charcoal"
                      }`}
                    >
                      <Link href={link.href} onClick={() => setIsOpen(false)} className="flex flex-1 items-center gap-3">
                        <span
                          className={`grid h-9 w-9 place-items-center rounded-xl transition ${
                            active ? "bg-white/20 text-white" : "bg-cream-100 text-terracotta"
                          }`}
                        >
                          <Icon className="text-[16px]" />
                        </span>
                        <span className="flex-1">{link.label}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setExpandedMobile(isExpanded ? null : link.label)}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${link.label} menu`}
                        aria-expanded={isExpanded}
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg transition ${
                          active ? "text-white" : "text-charcoal-muted hover:bg-cream-100 hover:text-terracotta"
                        }`}
                      >
                        <FiChevronDown className={`text-base transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="grid gap-3 border-t border-[var(--border-warm)]/60 bg-cream-50/70 px-3 py-3">
                        {link.menu.map((column) => (
                          <div key={column.heading}>
                            <p className="px-1 text-[10px] font-bold uppercase tracking-[0.14em] text-terracotta">{column.heading}</p>
                            <div className="mt-1.5 grid gap-1">
                              {column.items.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className="rounded-xl px-2.5 py-2 text-[13px] font-medium text-charcoal-light transition hover:bg-white hover:text-terracotta"
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative border-t border-[var(--border-warm)]/80 bg-white/40 p-4 backdrop-blur-sm">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-charcoal py-3.5 text-[14px] font-bold text-cream-50 transition hover:bg-terracotta"
            >
              <FiMessageCircle className="text-base" />
              Book Free Consultation
            </Link>
            <p className="mt-3 text-center text-[11px] text-charcoal-light">All India · Noida · Greater Noida</p>
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
      className="mobile-tab-bar fixed inset-x-0 bottom-0 z-[70] border-t border-[var(--border-warm)] bg-[var(--card-white)]/95 backdrop-blur-lg lg:hidden"
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
