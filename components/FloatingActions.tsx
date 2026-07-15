"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { whatsappLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href="#contact"
        className="fab-consult"
        aria-label="Get free consultation — strategy, services and quote"
        title="Free Consultation"
      >
        <span className="fab-consult-pulse" aria-hidden />
        <span className="fab-consult-icon">
          <FiPhoneCall />
        </span>
        <span className="fab-consult-label">
          <span className="fab-consult-title">Free</span>
          <span className="fab-consult-sub">Consult</span>
        </span>
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fab-whatsapp"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <span className="fab-whatsapp-pulse" aria-hidden />
        <span className="fab-whatsapp-pulse fab-whatsapp-pulse-delay" aria-hidden />
        <FaWhatsapp className="fab-whatsapp-icon" aria-hidden />
      </a>
    </>
  );
}
