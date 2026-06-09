import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Digital Marketing FAQs | SEO, Ads, Websites & Lead Generation",
  description: "Answers to common questions about digital marketing, SEO, Google Ads, Meta Ads, website development and lead generation in Noida NCR and India.",
};

export default function FaqPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="FAQ"
        title="Everything you need to know before starting digital marketing."
        description="Clear answers about SEO, Google Ads, Meta Ads, website development and lead generation for businesses in Noida NCR and across India."
      />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 5) * 0.03}>
              <details className="group rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-lg shadow-slate-950/20 transition open:border-teal-300/35 open:bg-teal-300/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-white">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-300/10 text-teal-300 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
