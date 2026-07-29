"use client";

import { useMemo, useState } from "react";
import { companyTrust } from "@/lib/data";
import { siteConfig } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  business: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  business: "",
  service: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]{8,16}$/;

function buildWhatsappLeadLink(form: FormState) {
  const message = [
    "Hi, I filled the website form.",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email}`,
    `Business: ${form.business}`,
    `Service: ${form.service}`,
    `Message: ${form.message}`,
  ].join("\n");

  return `https://wa.me/91${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [whatsappLeadLink, setWhatsappLeadLink] = useState("");

  const serviceGroups = useMemo(
    () => [
      {
        label: "Websites & Apps",
        options: ["Website Development", "Mobile App Development", "UI / UX Design", "E-commerce Website"],
      },
      {
        label: "Software & CRM",
        options: ["Custom Software", "CRM Solutions", "Business Automation", "Admin Dashboard / Portal"],
      },
      {
        label: "AI & Smart Systems",
        options: ["AI / ML Solutions", "Agentic AI", "LLM Models / Chatbots", "AI Automation"],
      },
      {
        label: "SEO & Google Visibility",
        options: ["SEO Services", "Local SEO", "Google Business Profile", "Technical SEO Audit"],
      },
      {
        label: "Ads & Digital Marketing",
        options: ["Google Ads", "Meta / Instagram Ads", "Lead Generation", "Full Digital Marketing"],
      },
      {
        label: "Hosting & Support",
        options: ["DevOps & Hosting", "Website Maintenance", "Not sure — need consultation"],
      },
    ],
    [],
  );

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!phonePattern.test(form.phone.trim())) return "Please enter a valid phone number.";
    if (!emailPattern.test(form.email.trim())) return "Please enter a valid email address.";
    if (!form.business.trim()) return "Please enter your business name.";
    if (!form.service) return "Please select a service.";
    if (form.message.trim().length < 10) return "Please share a short message about your requirement.";
    return "";
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");
    setWhatsappLeadLink("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Something went wrong while sending your message.");
      }

      const leadLink = buildWhatsappLeadLink(form);
      setWhatsappLeadLink(leadLink);
      window.open(leadLink, "_blank", "noopener,noreferrer");
      setForm(initialState);
      setStatus("success");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong while sending your message. Please try WhatsApp or call us directly.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--border-warm)] bg-cream-50 px-3.5 py-3 text-[14px] text-charcoal outline-none transition placeholder:text-charcoal-light/60 hover:border-terracotta/30 focus:border-terracotta/50 focus:bg-white focus:ring-4 focus:ring-terracotta/10";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[var(--border-warm)] bg-white p-4 shadow-card sm:p-5">
      <div className="mb-4 rounded-2xl border border-terracotta/15 bg-terracotta/5 p-3.5 sm:p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta">End-to-End Consultation</p>
        <h3 className="mt-1.5 text-lg font-bold text-charcoal sm:text-xl">Get a free expert consultation</h3>
        <p className="mt-2 text-[13px] leading-5 text-charcoal-light">Tell us what you want to build. Trusted by {companyTrust.happyClients} clients · {companyTrust.yearsExperience} years experience · free honest consultation.</p>
        <p className="mt-2 text-[11px] font-medium text-terracotta/90">✓ {companyTrust.onTimeDelivery} on-time delivery · ✓ {companyTrust.googleRating}★ Google rating · ✓ Direct founder support</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className={inputClass} value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Name" aria-label="Name" />
        <input className={inputClass} value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="Phone Number" aria-label="Phone Number" />
        <input className={inputClass} value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="Email" aria-label="Email" />
        <input className={inputClass} value={form.business} onChange={(event) => updateField("business", event.target.value)} placeholder="Business Name" aria-label="Business Name" />
        <select className={`${inputClass} sm:col-span-2`} value={form.service} onChange={(event) => updateField("service", event.target.value)} aria-label="Service Interested In">
          <option value="" className="bg-white">
            What do you need help with?
          </option>
          {serviceGroups.map((group) => (
            <optgroup key={group.label} label={group.label} className="bg-white font-semibold text-charcoal">
              {group.options.map((service) => (
                <option key={service} value={service} className="bg-white font-normal">
                  {service}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <textarea
          className={`${inputClass} min-h-36 resize-none sm:col-span-2`}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us about your goals, budget or current challenge."
          aria-label="Message"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="cta-glow mt-4 w-full rounded-full bg-terracotta px-6 py-3.5 font-bold text-white transition hover:bg-terracotta-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Request Free Consultation"}
      </button>
      {status === "success" && (
        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <p>Thank you. Your message has been sent successfully. Our team will contact you as soon as possible. For urgent support, please call +91 {siteConfig.callNumber}.</p>
          {whatsappLeadLink && (
            <a href={whatsappLeadLink} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-full bg-[#25D366] px-4 py-2 font-bold text-white">
              Open WhatsApp Message
            </a>
          )}
        </div>
      )}
      {status === "error" && error && (
        <p className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>
      )}
    </form>
  );
}
