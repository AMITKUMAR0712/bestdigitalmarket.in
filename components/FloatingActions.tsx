"use client";

import { FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import { callLink, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href="#contact"
        className="fab-assistant fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom))] left-3 z-50 flex max-w-[11rem] items-center gap-2.5 rounded-2xl border border-[var(--border-warm)] bg-white py-2 pl-2 pr-3 shadow-card transition hover:scale-[1.02] sm:bottom-6 sm:left-6 lg:bottom-6"
        aria-label="Get free consultation"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
          <FiPhoneCall className="text-lg" />
        </span>
        <span>
          <span className="block text-[11px] font-bold leading-tight text-charcoal">Free Consultation</span>
          <span className="block text-[10px] leading-tight text-charcoal-light">Strategy • Services • Quote</span>
        </span>
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fab-whatsapp fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom))] right-3 z-50 flex items-center gap-2.5 rounded-2xl border border-[var(--border-warm)] bg-white py-2 pl-2 pr-3 shadow-card transition hover:scale-[1.02] sm:bottom-6 sm:right-6 lg:bottom-6"
        aria-label="Chat on WhatsApp"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
          <FiMessageCircle className="text-lg" />
        </span>
        <span className="hidden min-[380px]:block">
          <span className="block text-[11px] font-bold leading-tight text-charcoal">WhatsApp</span>
          <span className="block text-[10px] leading-tight text-charcoal-light">Instant reply</span>
        </span>
      </a>
    </>
  );
}
