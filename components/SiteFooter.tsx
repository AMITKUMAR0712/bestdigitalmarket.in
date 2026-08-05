import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiMapPin } from "react-icons/fi";
import { BrandLogo } from "@/components/BrandLogo";
import { companyTrust, trustBadges } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const footerServices = [
  "Website Development",
  "Custom Software",
  "AI / ML",
  "Agentic AI",
  "LLM Models",
  "SEO & Local SEO",
  "Google Ads",
  "CRM Solutions",
  "Mobile Apps",
  "DevOps & Hosting",
  "Digital Marketing",
];

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy-policy" },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: FiLinkedin },
  { label: "GitHub", href: siteConfig.social.github, icon: FiGithub },
  { label: "Instagram", href: siteConfig.social.instagram, icon: FiInstagram },
  { label: "Facebook", href: siteConfig.social.facebook, icon: FiFacebook },
  { label: "YouTube", href: siteConfig.social.youtube, icon: FaYoutube },
];

export function SiteFooter() {
  return (
    <footer className="site-footer relative isolate overflow-hidden border-t border-[var(--border-warm)] bg-cream-200/50 px-4 pb-[calc(5.75rem+env(safe-area-inset-bottom))] pt-5 sm:px-6 sm:pb-6 sm:pt-6 xl:px-8 xl:pb-5 xl:pt-5">
      <div className="absolute inset-x-0 top-0 h-20 bg-terracotta/5 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-4 sm:gap-5 lg:grid-cols-[1.2fr_0.7fr_0.95fr_0.95fr] lg:gap-5 xl:gap-6">
        {/* Brand */}
        <div className="min-w-0">
          <BrandLogo compact />
          <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-terracotta">
            Website of {siteConfig.legalName}
          </p>
          <p className="mt-1.5 max-w-md text-[12px] leading-snug text-charcoal-light sm:text-[13px] sm:leading-5">
            {companyTrust.yearsExperience} yrs · {companyTrust.happyClients} clients · {companyTrust.projectsDelivered}{" "}
            projects — websites, software, CRM, SEO & ads in Greater Noida.
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {trustBadges.slice(0, 3).map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-terracotta/15 bg-terracotta/5 px-2 py-0.5 text-[9px] font-semibold text-terracotta"
              >
                {badge}
              </span>
            ))}
          </div>
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2.5 inline-flex max-w-full items-start gap-1.5 text-[12px] leading-snug text-charcoal-light transition hover:text-terracotta"
          >
            <FiMapPin className="mt-0.5 shrink-0 text-terracotta" aria-hidden="true" />
            <span className="line-clamp-2">{siteConfig.address}</span>
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-charcoal">Quick Links</h3>
          <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[12px] text-charcoal-light sm:grid-cols-1 lg:grid-cols-1">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-terracotta">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services — 2-col dense */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-charcoal">Services</h3>
          <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[12px] text-charcoal-light">
            {footerServices.map((item) => (
              <li key={item}>
                <Link href="/services" className="transition hover:text-terracotta">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-charcoal">Contact</h3>
          <div className="mt-2 space-y-1 text-[12px] leading-snug text-charcoal-light">
            <p>
              Call:{" "}
              <a href={`tel:+91${siteConfig.callNumber}`} className="transition hover:text-terracotta">
                +91 {siteConfig.callNumber}
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a href={`https://wa.me/91${siteConfig.whatsappNumber}`} className="transition hover:text-terracotta">
                +91 {siteConfig.whatsappNumber}
              </a>
            </p>
            <p className="break-words">
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-terracotta">
                {siteConfig.email}
              </a>
            </p>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href === "#" ? undefined : "_blank"}
                  rel={social.href === "#" ? undefined : "noreferrer"}
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-warm)] bg-white text-charcoal-light transition hover:border-terracotta/30 hover:text-terracotta"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Brand note + legal — one compact bar */}
      <div className="relative z-10 mx-auto mt-4 max-w-7xl border-t border-[var(--border-warm)] pt-3 sm:mt-5 sm:pt-3.5">
        <p className="line-clamp-2 text-[10px] leading-snug text-charcoal-muted sm:line-clamp-none sm:text-[11px] sm:leading-4">
          <span className="font-semibold text-charcoal">Brand note: </span>
          {siteConfig.disambiguation}
        </p>
        <div className="mt-2.5 flex flex-col gap-1.5 text-[11px] text-charcoal-light sm:mt-3 sm:flex-row sm:items-center sm:justify-between sm:text-[12px]">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              Developed by <span className="font-semibold text-terracotta">Amit Kumar Talan</span>
            </span>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-terracotta">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
