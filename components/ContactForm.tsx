"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { companyTrust } from "@/lib/data";
import { budgetOptions, needOptions } from "@/lib/pricing";
import { callLink, siteConfig, whatsappLink } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: "",
  budget: "",
  message: "",
};

const phonePattern = /^[0-9+\-\s()]{8,16}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildWhatsappLeadLink(form: FormState) {
  const message = [
    "Hi, I filled the website form.",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    form.city ? `City: ${form.city}` : null,
    `Need: ${form.service}`,
    `Budget: ${form.budget}`,
    form.message ? `Message: ${form.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/91${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact = false }: ContactFormProps) {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [whatsappLeadLink, setWhatsappLeadLink] = useState("");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const need = searchParams.get("need");
    if (!need) return;
    const match = needOptions.find((option) => option.toLowerCase() === need.toLowerCase())
      || needOptions.find((option) => need.toLowerCase().includes(option.toLowerCase().split(" ")[0]));
    if (match) {
      setForm((current) => ({ ...current, service: match }));
    }
  }, [searchParams]);

  const needList = useMemo(() => [...needOptions], []);
  const budgetList = useMemo(() => [...budgetOptions], []);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!phonePattern.test(form.phone.trim())) return "Please enter a valid phone / WhatsApp number.";
    if (!form.service) return "Please select what you need.";
    if (!form.budget) return "Please select a rough budget.";
    if (form.email.trim() && !emailPattern.test(form.email.trim())) return "Please enter a valid email or leave it blank.";
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

    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email || "not-provided@tradeorbit.local",
      business: form.city || "Not shared",
      service: form.service,
      budget: form.budget,
      message:
        form.message.trim() ||
        `Need: ${form.service}. Rough budget: ${form.budget}.${form.city ? ` City: ${form.city}.` : ""}`,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Something went wrong while sending your message.");
      }

      setWhatsappLeadLink(buildWhatsappLeadLink(form));
      setForm(initialState);
      setStatus("success");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please use WhatsApp or call us directly.",
      );
      setStatus("error");
    }
  }

  const inputClass =
    "w-full min-h-11 rounded-xl border border-[var(--border-warm)] bg-cream-50 px-3.5 py-3 text-[14px] text-charcoal outline-none transition placeholder:text-charcoal-light/60 hover:border-terracotta/30 focus:border-terracotta/50 focus:bg-white focus:ring-4 focus:ring-terracotta/10";

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit}
      className="scroll-mt-28 rounded-2xl border border-[var(--border-warm)] bg-white p-4 shadow-card sm:p-5"
    >
      <div className="mb-4 rounded-2xl border border-terracotta/15 bg-terracotta/5 p-3.5 sm:p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta">Free consultation</p>
        <h3 className="mt-1.5 text-lg font-bold text-charcoal sm:text-xl">Get a clear next step in one call</h3>
        <p className="mt-2 text-[13px] leading-5 text-charcoal-light">
          Trusted by {companyTrust.happyClients} clients · {companyTrust.yearsExperience} experience · reply on call /
          WhatsApp within a few hours.
        </p>
      </div>

      <div className="grid gap-3">
        <input
          className={inputClass}
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          autoComplete="name"
        />
        <input
          className={inputClass}
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="Phone (WhatsApp number)"
          aria-label="Phone WhatsApp number"
          autoComplete="tel"
          inputMode="tel"
        />
        <select
          className={inputClass}
          value={form.service}
          onChange={(event) => updateField("service", event.target.value)}
          aria-label="What do you need?"
        >
          <option value="">What do you need?</option>
          {needList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className={inputClass}
          value={form.budget}
          onChange={(event) => updateField("budget", event.target.value)}
          aria-label="Rough budget"
        >
          <option value="">Rough budget</option>
          {budgetList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {(showMore || !compact) && (
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              className={inputClass}
              value={form.city}
              onChange={(event) => updateField("city", event.target.value)}
              placeholder="City / area (optional)"
              aria-label="City or area"
            />
            <input
              className={inputClass}
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="Email (optional)"
              aria-label="Email optional"
              autoComplete="email"
            />
            <textarea
              className={`${inputClass} min-h-24 resize-none sm:col-span-2`}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Anything else? (optional)"
              aria-label="Additional message optional"
            />
          </div>
        )}

        {compact && (
          <button
            type="button"
            onClick={() => setShowMore((current) => !current)}
            className="text-left text-[12px] font-semibold text-terracotta"
          >
            {showMore ? "Hide extra details" : "Add more details (optional)"}
          </button>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="cta-glow mt-4 w-full min-h-12 rounded-full bg-terracotta px-6 py-3.5 font-bold text-white transition hover:bg-terracotta-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Get free consultation"}
      </button>
      <p className="mt-2 text-center text-[11px] text-charcoal-muted">No spam · Direct founder support · Free honest consultation</p>

      {status === "success" && (
        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <p>Thanks — your enquiry is in. We’ll contact you on call or WhatsApp soon.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a href={callLink} className="inline-flex rounded-full bg-terracotta px-4 py-2 font-bold text-white">
              Call now
            </a>
            {whatsappLeadLink && (
              <a
                href={whatsappLeadLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[#25D366] px-4 py-2 font-bold text-white"
              >
                Continue on WhatsApp
              </a>
            )}
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-emerald-300 px-4 py-2 font-bold text-emerald-800">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
      {status === "error" && error && (
        <p className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>
      )}
    </form>
  );
}
