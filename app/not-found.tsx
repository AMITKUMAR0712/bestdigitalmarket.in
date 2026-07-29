import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found. Explore TradeOrbit Global services, portfolio and contact options.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <section className="app-section relative py-16 sm:py-24">
        <div className="app-container text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta">404</p>
          <h1 className="mt-3 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-charcoal">
            This page is missing — your next project doesn&apos;t have to be.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-charcoal-light sm:text-base">
            The URL may have moved or never existed. Jump back to a key page below, or talk to us about websites,
            software, AI and digital marketing.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-bold text-white transition hover:bg-terracotta-600"
            >
              Go Home
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-terracotta/25 bg-white px-5 py-2.5 text-sm font-bold text-terracotta transition hover:bg-terracotta/5"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border-warm)] bg-cream-50 px-5 py-2.5 text-sm font-bold text-charcoal transition hover:border-terracotta/30"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border-warm)] bg-cream-50 px-5 py-2.5 text-sm font-bold text-charcoal transition hover:border-terracotta/30"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
