import Link from "next/link";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { BrandLogo } from "@/components/BrandLogo";
import { companyTrust, trustBadges } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
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
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: FiLinkedin },
  { label: "GitHub", href: siteConfig.social.github, icon: FiGithub },
  { label: "Instagram", href: siteConfig.social.instagram, icon: FiInstagram },
  { label: "Facebook", href: siteConfig.social.facebook, icon: FiFacebook },
];

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[var(--border-warm)] bg-cream-200/50 px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-8 sm:px-6 xl:px-8 xl:pb-10">
      <div className="absolute inset-x-0 top-0 h-32 bg-terracotta/5 blur-3xl" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.75fr_0.8fr_1fr]">
        <div className="rounded-[1.7rem] border border-[var(--border-warm)] bg-white p-5 shadow-soft">
          <BrandLogo />
          <p className="mt-3 max-w-sm text-[13px] leading-6 text-charcoal-light sm:text-sm sm:leading-relaxed">
            A trusted IT company with {companyTrust.yearsExperience} years experience, {companyTrust.happyClients} happy clients and {companyTrust.projectsDelivered} projects delivered — websites, software, CRM, SEO, ads, hosting and full support.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {trustBadges.slice(0, 4).map((badge) => (
              <span key={badge} className="rounded-full border border-terracotta/15 bg-terracotta/5 px-2.5 py-1 text-[10px] font-semibold text-terracotta">
                ✓ {badge}
              </span>
            ))}
          </div>
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 block rounded-[1.5rem] border border-[var(--border-warm)] bg-cream-50 p-4 text-sm text-charcoal-light transition hover:-translate-y-0.5 hover:border-terracotta/30"
          >
            <span className="block font-black text-charcoal">Open Google Maps</span>
            <span className="mt-2 block">{siteConfig.address}</span>
            <span className="mt-3 inline-flex rounded-full border border-terracotta/20 bg-terracotta/5 px-3 py-1 text-xs font-bold text-terracotta transition group-hover:bg-terracotta/10">
              Get Directions
            </span>
          </a>
        </div>
        <FooterColumn title="Quick Links" items={quickLinks} />
        <div>
          <h3 className="text-sm font-bold text-charcoal sm:text-base">Our Services</h3>
          <ul className="mt-3 space-y-2 text-[13px] text-charcoal-light">
            {footerServices.map((item) => (
              <li key={item}>
                <Link href="/services" className="transition hover:text-terracotta">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-charcoal sm:text-base">Contact Us</h3>
          <div className="mt-3 space-y-2 text-[13px] text-charcoal-light">
            <p>Call: +91 {siteConfig.callNumber}</p>
            <p>WhatsApp: +91 {siteConfig.whatsappNumber}</p>
            <p>Email: {siteConfig.email}</p>
            <p>Email: {siteConfig.emailSecondary}</p>
            <p>{siteConfig.address}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href === "#" ? undefined : "_blank"}
                  rel={social.href === "#" ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-warm)] bg-white px-3 py-2 text-sm text-charcoal-light transition hover:border-terracotta/30 hover:text-terracotta"
                >
                  <Icon />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t border-[var(--border-warm)] pt-5 text-sm text-charcoal-light md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span>
            Developed by <span className="font-bold text-terracotta">Amit Kumar Talan</span>
          </span>
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-terracotta">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-charcoal sm:text-base">{title}</h3>
      <ul className="mt-3 space-y-2 text-[13px] text-charcoal-light">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="transition hover:text-terracotta">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
