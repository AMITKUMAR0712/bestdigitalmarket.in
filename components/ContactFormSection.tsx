"use client";

import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";

function FormFallback() {
  return (
    <div className="min-h-[22rem] animate-pulse rounded-2xl border border-[var(--border-warm)] bg-white p-5" aria-hidden />
  );
}

export function ContactFormSection({ compact = false }: { compact?: boolean }) {
  return (
    <Suspense fallback={<FormFallback />}>
      <ContactForm compact={compact} />
    </Suspense>
  );
}
