"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { callLink, whatsappLink } from "@/lib/site";

/** Mobile sticky conversion bar — sits above the bottom tab nav */
export function StickyConversionBar() {
  return (
    <div className="sticky-conversion-bar fixed inset-x-0 z-[72] xl:hidden">
      <div className="mx-auto flex max-w-lg gap-2 px-3">
        <a
          href={callLink}
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-terracotta px-3 text-[12px] font-bold text-white shadow-soft"
        >
          <FiPhoneCall className="text-sm" />
          Call
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25d366] px-3 text-[12px] font-bold text-white shadow-soft"
        >
          <FaWhatsapp className="text-sm" />
          WhatsApp
        </a>
        <Link
          href="/contact#enquiry-form"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-[var(--border-warm)] bg-white px-3 text-[12px] font-bold text-charcoal shadow-soft"
        >
          Quote
        </Link>
      </div>
    </div>
  );
}
