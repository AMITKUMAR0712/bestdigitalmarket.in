import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions for using ${siteConfig.name} services and website.`,
  alternates: {
    canonical: "/terms",
  },
};

const terms = [
  {
    title: "Use of Website",
    text: "The information on this website is provided for general business and marketing guidance. You agree not to misuse, copy, disrupt, or attempt unauthorized access to any part of the website.",
  },
  {
    title: "Service Enquiries",
    text: "Submitting a form, calling, or messaging us does not create a binding service agreement. Project scope, pricing, timelines, deliverables, and responsibilities are confirmed separately in writing.",
  },
  {
    title: "Marketing Results",
    text: "Digital marketing performance can vary based on industry, budget, competition, website quality, offer strength, market conditions, and follow-up process. We do not guarantee specific rankings, sales, or revenue outcomes.",
  },
  {
    title: "Client Responsibilities",
    text: "Clients are responsible for providing accurate business information, approvals, access, creative inputs, and timely feedback needed to execute campaigns or website work.",
  },
  {
    title: "Intellectual Property",
    text: "Website content, visuals, layouts, and materials remain protected unless explicitly transferred under a written agreement. Client-owned assets remain the property of the client.",
  },
  {
    title: "Contact",
    text: `For questions about these terms, contact us at ${siteConfig.email}.`,
  },
];

export default function TermsPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="Terms"
        title="Terms and Conditions"
        description={`Please review the basic terms for using the ${siteConfig.name} website and enquiring about our digital marketing services.`}
      />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-5">
          {terms.map((item) => (
            <article key={item.title} className="premium-card rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
              <h2 className="text-xl font-black text-white">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
