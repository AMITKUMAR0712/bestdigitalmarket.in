export type PageHeroCategory =
  | "about"
  | "services"
  | "portfolio"
  | "case-studies"
  | "process"
  | "contact"
  | "default";

export const pageHeroImages: Record<PageHeroCategory, { src: string; alt: string }> = {
  about: {
    src: "/hero/about.jpg",
    alt: "Team collaboration representing TradeOrbit Global about us",
  },
  services: {
    src: "/hero/services.jpg",
    alt: "Digital services and analytics dashboard background",
  },
  portfolio: {
    src: "/hero/portfolio.jpg",
    alt: "Creative workspace representing portfolio projects",
  },
  "case-studies": {
    src: "/hero/case-studies.jpg",
    alt: "Business growth analytics for case studies",
  },
  process: {
    src: "/hero/process.jpg",
    alt: "Team planning session representing our process",
  },
  contact: {
    src: "/hero/contact.jpg",
    alt: "Communication and contact support background",
  },
  default: {
    src: "/hero/services.jpg",
    alt: "TradeOrbit Global digital services background",
  },
};
