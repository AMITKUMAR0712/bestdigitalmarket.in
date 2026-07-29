/** Investment bands — replace PLACEHOLDER figures with your real starting prices */

export const pricingBands = [
  {
    id: "website",
    title: "Business website",
    fromLabel: "From ₹25,000",
    fromValuePlaceholder: "₹[WEB_START]",
    detail: "Brochure / business sites with SEO foundations",
    href: "/contact?need=Website+Development",
  },
  {
    id: "software",
    title: "Software / CRM MVP",
    fromLabel: "From ₹1,50,000",
    fromValuePlaceholder: "₹[SW_START]",
    detail: "Custom tools, CRM pipelines and admin portals",
    href: "/contact?need=Custom+Software",
  },
  {
    id: "seo",
    title: "SEO monthly",
    fromLabel: "From ₹8,000/mo",
    fromValuePlaceholder: "₹[SEO_START]/mo",
    detail: "Local SEO, technical fixes and content rhythm",
    href: "/contact?need=SEO+Services",
  },
  {
    id: "ads",
    title: "Ads management",
    fromLabel: "From ₹15,000/mo",
    fromValuePlaceholder: "₹[ADS_START]/mo + ad spend",
    detail: "Google / Meta lead campaigns with tracking",
    href: "/contact?need=Google+Ads",
  },
] as const;

export const servicePaths = [
  {
    id: "website",
    title: "Website & conversion",
    description: "SEO-friendly business sites, landing pages and enquiry flows.",
    href: "/services#websites",
    cta: "/contact?need=Website+Development",
  },
  {
    id: "software",
    title: "Software, CRM & AI",
    description: "Custom software, CRM, mobile apps and agentic AI pilots.",
    href: "/services#software",
    cta: "/contact?need=Custom+Software",
  },
  {
    id: "leads",
    title: "SEO & paid leads",
    description: "Local SEO, Google Business Profile, Google Ads and Meta Ads.",
    href: "/services#leads",
    cta: "/contact?need=Lead+Generation",
  },
] as const;

export const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Not sure yet",
] as const;

export const needOptions = [
  "Website Development",
  "Custom Software / CRM",
  "AI / Chatbot",
  "SEO / Google Leads",
  "Google / Meta Ads",
  "Not sure — need consultation",
] as const;
