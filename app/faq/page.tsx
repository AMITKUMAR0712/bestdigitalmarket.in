import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "SEO, Website Design & Digital Marketing FAQs for Noida Businesses",
  description:
    "Answers about SEO-friendly website development, local SEO, Google Business Profile, AEO/GEO, Google Ads, Meta Ads, software and lead generation for Noida, Greater Noida and India.",
  keywords: [
    "SEO FAQ Noida",
    "website development FAQ Greater Noida",
    "local SEO questions India",
    "AEO GEO SEO services India",
    "Google Business Profile optimization Noida",
  ],
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="FAQ"
        title="Everything you need to know before starting your SEO or web project."
        description="Clear answers about SEO-friendly website development, local SEO, Google Business Profile optimization, custom software, CRM, mobile apps, Google Ads, Meta Ads and lead generation for businesses in Noida NCR and across India."
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
