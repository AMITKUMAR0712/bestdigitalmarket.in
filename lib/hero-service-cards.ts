export type HeroServiceCard = {
  id: string;
  label: string;
  copy: string;
  image: string;
  rot: number;
  depth: number;
};

/** Floating hero cards — one per core TradeOrbit service */
export const heroServiceCards: HeroServiceCard[] = [
  {
    id: "website",
    label: "Website Development",
    copy: "SEO-ready sites that convert.",
    image: "/herosection/web%20dev.jpg",
    rot: -9,
    depth: 14,
  },
  {
    id: "software",
    label: "Custom Software",
    copy: "Built around your workflow.",
    image: "/herosection/customsoftware.jpg",
    rot: -5,
    depth: 10,
  },
  {
    id: "aiml",
    label: "AI / ML",
    copy: "Smart models for real growth.",
    image: "/herosection/AIML.jpeg",
    rot: -2,
    depth: 8,
  },
  {
    id: "agentic",
    label: "Agentic AI",
    copy: "Autonomous agents that ship.",
    image: "/herosection/agenticai.jpg",
    rot: 3,
    depth: 12,
  },
  {
    id: "llm",
    label: "LLM Models",
    copy: "Custom language systems.",
    image: "/herosection/LLM.jpeg",
    rot: 0,
    depth: 6,
  },
  {
    id: "seo",
    label: "SEO & Local SEO",
    copy: "Rank where buyers search.",
    image: "/herosection/SEO.jpeg",
    rot: 4,
    depth: 11,
  },
  {
    id: "ads",
    label: "Google Ads",
    copy: "High-intent paid traffic.",
    image: "/herosection/ad.jpeg",
    rot: 7,
    depth: 9,
  },
  {
    id: "crm",
    label: "CRM Solutions",
    copy: "Leads to loyal clients.",
    image: "/herosection/CRM.jpg",
    rot: -4,
    depth: 13,
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    copy: "iOS & Android products.",
    image: "/herosection/mobile%20app.jpg",
    rot: 5,
    depth: 10,
  },
  {
    id: "devops",
    label: "DevOps & Hosting",
    copy: "Fast, secure deployments.",
    image: "/herosection/devops-concept.jpeg",
    rot: -6,
    depth: 12,
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    copy: "Full-funnel growth.",
    image: "/herosection/digitalmarketing.jpg",
    rot: 2,
    depth: 8,
  },
];
