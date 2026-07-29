import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { faqs } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "SEO, Website Design & Digital Marketing FAQs for Noida Businesses",
  description:
    "Answers about SEO-friendly website development, local SEO, Google Business Profile, AEO/GEO, Google Ads, Meta Ads, software and lead generation for Noida, Greater Noida and India.",
  path: "/faq",
  keywords: [
    "SEO FAQ Noida",
    "website development FAQ Greater Noida",
    "local SEO questions India",
    "AEO GEO SEO services India",
    "Google Business Profile optimization Noida",
  ],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteConfig.url}/faq#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Everything you need to know before starting your digital project."
        description="Clear answers about SEO-friendly website development, local SEO, Google Business Profile optimization, custom software, CRM, mobile apps, Google Ads, Meta Ads and lead generation for businesses in Noida NCR and across India."
      />
      <TrustBar compact showBadges={false} />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 5) * 0.03}>
              <details className="group rounded-3xl border border-[var(--border-warm)] bg-white p-5 shadow-soft transition open:border-terracotta/30 open:bg-terracotta/5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-charcoal">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-charcoal-light">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
