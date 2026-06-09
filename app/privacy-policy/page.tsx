import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}, including how contact form and enquiry information is handled.`,
};

const privacyItems = [
  {
    title: "Information We Collect",
    text: "We may collect your name, phone number, email address, business name, service interest, and message when you contact us through forms, calls, WhatsApp, or email.",
  },
  {
    title: "How We Use Information",
    text: "We use your information to respond to enquiries, understand your business requirements, provide consultation, prepare proposals, and improve our services.",
  },
  {
    title: "Lead and Communication Data",
    text: "Your enquiry details may be processed through contact tools such as EmailJS, email services, phone calls, or WhatsApp to help us communicate with you.",
  },
  {
    title: "Data Sharing",
    text: "We do not sell your personal information. Information may be shared only when required to deliver services, comply with law, or operate essential business tools.",
  },
  {
    title: "Cookies and Analytics",
    text: "The website may use analytics, pixels, or similar tools in future to understand traffic, campaign performance, and user experience. These tools help improve website and marketing performance.",
  },
  {
    title: "Your Choices",
    text: `You can request correction or deletion of your enquiry information by contacting us at ${siteConfig.email}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description={`This policy explains how ${siteConfig.name} handles enquiry and communication information submitted through this website.`}
      />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-5">
          {privacyItems.map((item) => (
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
