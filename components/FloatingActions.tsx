"use client";

import { FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import { callLink, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-4 sm:bottom-6 sm:right-6">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-fab group flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/30 transition hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <FiMessageCircle className="text-2xl transition group-hover:rotate-12" />
        </a>
        <a
          href={callLink}
          className="call-fab group flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300 text-slate-950 shadow-2xl shadow-cyan-500/30 transition hover:scale-105"
          aria-label="Call now"
        >
          <FiPhoneCall className="text-2xl transition group-hover:rotate-12" />
        </a>
      </div>
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-3 sm:hidden">
        <a href="#contact" className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-bold text-slate-950 shadow-xl">
          Contact Us
        </a>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-2xl bg-gradient-to-r from-emerald-300 to-cyan-300 px-4 py-3 text-center text-sm font-bold text-slate-950 shadow-xl">
          WhatsApp
        </a>
      </div>
    </>
  );
}
