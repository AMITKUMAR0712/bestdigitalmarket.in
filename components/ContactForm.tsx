"use client";

import { useMemo, useState } from "react";
import { serviceCategories } from "@/lib/data";
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

  const services = useMemo(
    () => Array.from(new Set(serviceCategories.flatMap((category) => category.services))),
    []
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
    "w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 hover:border-teal-300/30 hover:bg-white/[0.06] focus:border-teal-300/70 focus:bg-white/[0.08] focus:ring-4 focus:ring-teal-300/10";

  return (
    <form onSubmit={handleSubmit} className="holo-panel luxury-border rounded-[2rem] border border-white/10 p-5 shadow-2xl shadow-teal-950/40 backdrop-blur-2xl sm:p-8">
      <div className="mb-6 rounded-3xl border border-teal-300/15 bg-teal-300/10 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-300">Start Growth Plan</p>
        <h3 className="mt-2 text-2xl font-black text-white">Get your free strategy call</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">Fill the form and our team will contact you with a practical lead generation roadmap.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClass} value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Name" aria-label="Name" />
        <input className={inputClass} value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="Phone Number" aria-label="Phone Number" />
        <input className={inputClass} value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="Email" aria-label="Email" />
        <input className={inputClass} value={form.business} onChange={(event) => updateField("business", event.target.value)} placeholder="Business Name" aria-label="Business Name" />
        <select className={`${inputClass} sm:col-span-2`} value={form.service} onChange={(event) => updateField("service", event.target.value)} aria-label="Service Interested In">
          <option value="" className="bg-slate-950">
            Service Interested In
          </option>
          {services.map((service) => (
            <option key={service} value={service} className="bg-slate-950">
              {service}
            </option>
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
        className="cta-glow mt-5 w-full rounded-2xl bg-gradient-to-r from-teal-200 via-cyan-200 to-fuchsia-300 px-6 py-4 font-black text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Get Free Consultation"}
      </button>
      {status === "success" && (
        <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
          <p>Thank you. Your message has been sent successfully. Our team will contact you as soon as possible. For urgent support, please call +91 {siteConfig.callNumber}.</p>
          {whatsappLeadLink && (
            <a href={whatsappLeadLink} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-full bg-emerald-300 px-4 py-2 font-bold text-emerald-950">
              Open WhatsApp Message
            </a>
          )}
        </div>
      )}
      {status === "error" && error && (
        <p className="mt-4 rounded-2xl border border-rose-300/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">{error}</p>
      )}
    </form>
  );
}
