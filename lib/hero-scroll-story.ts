import { companyTrust } from "@/lib/data";

/** Confidence beats shown while the mobile hero is pinned on scroll. */
export const heroScrollStory = [
  {
    kicker: "Proven delivery",
    title: `${companyTrust.projectsDelivered} projects delivered`,
    copy: "Websites, software & AI systems shipped for growing Indian businesses.",
  },
  {
    kicker: "One partner",
    title: "Web · AI · SEO · Ads · CRM",
    copy: "Full-stack build + growth — so you are not juggling five vendors.",
  },
  {
    kicker: "Trusted team",
    title: `${companyTrust.teamExperts} experts · ${companyTrust.happyClients} happy clients`,
    copy: "Founder-led support, clear timelines, and NDA-protected work.",
  },
  {
    kicker: "Start risk-free",
    title: "Free consultation today",
    copy: "Get a clear plan for your project — no pressure, just next steps.",
  },
] as const;
