import Link from "next/link";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FooterSandCanvas } from "@/components/FooterSandCanvas";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const footerServices = ["Website Development", "Custom Software", "Full-Stack Apps", "Mobile Apps", "CRM Solutions", "DevOps & Hosting"];

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
    <footer className="relative isolate overflow-hidden border-t border-white/10 px-5 pb-24 pt-10 sm:px-8 sm:pb-8 lg:px-12">
      <FooterSandCanvas />
      <div className="absolute inset-x-0 top-0 z-0 h-32 bg-teal-300/10 blur-3xl" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.75fr_0.8fr_1fr]">
        <div className="holo-panel luxury-border rounded-[1.7rem] border border-white/10 p-5">
          <h2 className="text-2xl font-black">
            Digital<span className="text-teal-300"> Future</span><span className="ml-1 text-xs font-black text-fuchsia-300">AI</span>
          </h2>
          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            Best Digital Market by Digital Future provides end-to-end technology services for businesses: SEO-friendly website development, software, CRM, mobile apps, hosting, deployment, digital marketing and ongoing improvement.
          </p>
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 block rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_25%_20%,rgba(45,212,191,0.25),transparent_38%),linear-gradient(135deg,rgba(45,212,191,0.14),rgba(217,70,239,0.12))] p-4 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-teal-300/40"
          >
            <span className="block font-black text-white">Open Google Maps</span>
            <span className="mt-2 block">{siteConfig.address}</span>
            <span className="mt-3 inline-flex rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs font-bold text-teal-200 transition group-hover:bg-teal-300/20">
              Get Directions
            </span>
          </a>
        </div>
        <FooterColumn title="Quick Links" items={quickLinks} />
        <div>
          <h3 className="font-bold text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-slate-400">
            {footerServices.map((item) => (
              <li key={item}>
                <Link href="/services" className="transition hover:text-teal-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">Contact Details</h3>
          <div className="mt-4 space-y-2.5 text-slate-400">
            <p>Call: +91 {siteConfig.callNumber}</p>
            <p>WhatsApp: +91 {siteConfig.whatsappNumber}</p>
            <p>Email: {siteConfig.email}</p>
            <p>{siteConfig.address}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
              <a key={social.label} href={social.href} target={social.href === "#" ? undefined : "_blank"} rel={social.href === "#" ? undefined : "noreferrer"} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-teal-300/50 hover:bg-teal-300/10 hover:text-teal-200">
                <Icon />
                {social.label}
              </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>Copyright © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <span>
            Developed by <span className="font-bold text-teal-300">Amit</span>
          </span>
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-teal-300">
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
      <h3 className="font-bold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-slate-400">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="transition hover:text-teal-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
