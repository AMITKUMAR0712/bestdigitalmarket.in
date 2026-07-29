export const siteConfig = {
  name: "TradeOrbit Global",
  /** Canonical public brand — use on every surface */
  legalName: "TradeOrbit Global",
  /** Premises / former trade name — never lead with this alone */
  alternateNames: ["Best Digital Market"] as const,
  url: "https://www.bestdigitalmarket.in",
  domainName: "TradeOrbit Global",
  title: "Best AI Software & Web Design Company in Noida | TradeOrbit Global",
  description:
    "TradeOrbit Global (Best Digital Market) is a trusted AI software, agentic AI, LLM, custom software, CRM, SEO-friendly website design and digital marketing company in Noida and Greater Noida — serving Delhi NCR and all India.",
  /** First-mention / schema-friendly one-liner */
  entityTagline:
    "TradeOrbit Global (Best Digital Market) — AI software, websites & digital marketing, Greater Noida, India",
  /** Disambiguation vs unrelated “TradeOrbit” crypto / scam-lookalike entities */
  disambiguation:
    "TradeOrbit Global is an IT, AI software and digital marketing company based in Greater Noida, India. We are not affiliated with any cryptocurrency exchange, trading platform, or other businesses that use the name “TradeOrbit” alone.",
  callNumber: "9992196879",
  whatsappNumber: "9350031246",
  email: "tradeorbitgloball@gmail.com",
  emailSecondary: "amit.tech1970@gmail.com",
  /** Display NAP — brand first, premises second */
  address:
    "TradeOrbit Global, Best Digital Market, C Block, Block C, Sector MU 1, Greater Noida, Mathurapur, Uttar Pradesh 201310",
  streetAddress: "Best Digital Market, C Block, Block C, Sector MU 1",
  addressLocality: "Greater Noida",
  addressRegion: "Uttar Pradesh",
  postalCode: "201310",
  addressCountry: "IN",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Best%20Digital%20Market%2C%20C%20Block%2C%20Block%20C%2C%20Sector%20MU%201%2C%20Greater%20Noida%2C%20Mathurapur%2C%20Uttar%20Pradesh%20201310",
  areas: ["All India", "Noida", "Greater Noida", "Delhi NCR", "Mumbai", "Pune", "Chandigarh", "Faridabad", "Gurugram", "Ghaziabad"],
  social: {
    linkedin: "https://www.linkedin.com/company/109670847",
    github: "https://github.com/amittech",
    instagram: "https://www.instagram.com/samarth_sharma__5166",
    /** Official Facebook — TradeOrbit Global | Greater Noida */
    facebook: "https://www.facebook.com/profile.php?id=61592573703117",
    /** Official YouTube — TradeOrbit Global */
    youtube: "https://www.youtube.com/channel/UCF6jnQhxCVclchIkl_OHBew",
  },
  keywords: [
    "best AI software company in Noida",
    "best AI software company in Greater Noida",
    "agentic AI company in Noida",
    "agentic AI company in Greater Noida",
    "custom software company in Noida",
    "custom software company in Greater Noida",
    "best custom software company in Noida",
    "best custom software company in Greater Noida",
    "AI ML company in Noida",
    "AI ML company in Greater Noida",
    "machine learning company in Noida",
    "machine learning company in Greater Noida",
    "LLM model development company Noida",
    "LLM model development company Greater Noida",
    "large language model company India",
    "AI model development company Noida",
    "agentic AI development company India",
    "AI software development company Noida",
    "AI software development company Greater Noida",
    "best web design company in Noida",
    "best web design company in Greater Noida",
    "SEO friendly website development in Noida",
    "website development company in Greater Noida",
    "web design and SEO company in Noida",
    "web design and SEO company in Greater Noida",
    "affordable website design company in Noida",
    "business website developer in Greater Noida",
    "Next.js website development company India",
    "custom website development services India",
    "digital marketing agency in Noida",
    "digital marketing company in Greater Noida",
    "SEO company in Noida",
    "local SEO services in Greater Noida",
    "Google Business Profile optimization Noida",
    "technical SEO audit services India",
    "AEO GEO SEO services India",
    "LLM SEO services India",
    "Google Ads agency in Noida",
    "Meta Ads lead generation agency India",
    "lead generation agency Delhi NCR",
    "performance marketing agency India",
    "digital marketing agency in Mumbai",
    "SEO agency in Mumbai",
    "website development agency in Mumbai",
    "digital marketing agency in Pune",
    "website development company in Pune",
    "SEO services in Pune",
    "digital marketing agency in Chandigarh",
    "SEO company in Chandigarh",
    "website design company in Chandigarh",
    "software development company in Noida",
    "custom software development company India",
    "CRM development services India",
    "mobile app development company India",
    "business automation services India",
    "AI chatbot development company Noida",
    "generative AI company Greater Noida",
  ],
};

/** sameAs cluster for Organization / LocalBusiness — empty URLs omitted */
export function getOrganizationSameAs(): string[] {
  const { social, url } = siteConfig;
  return [url, social.linkedin, social.facebook, social.instagram, social.github, social.youtube].filter(
    (href) => Boolean(href) && href !== "#",
  );
}

export const whatsappLink = `https://wa.me/91${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hi, I want a free digital marketing consultation."
)}`;

export const callLink = `tel:+91${siteConfig.callNumber}`;
