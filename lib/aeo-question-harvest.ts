/** 60 AEO question harvest — exclusive of the detailed 25 answer-block set ownership rules elsewhere */

export type HarvestMark = "voice search likely" | "featured snippet likely" | "neither";

export type HarvestItem = {
  q: string;
  mark: HarvestMark;
};

export const aeoQuestionHarvest: Record<
  "pricing" | "timeline" | "process" | "comparison" | "trust_risk" | "technical" | "local",
  HarvestItem[]
> = {
  pricing: [
    { q: "How much does a business website cost in Noida?", mark: "featured snippet likely" },
    { q: "What is the price of SEO services for a small business in India?", mark: "featured snippet likely" },
    { q: "How much do Google Ads cost for lead generation in Noida?", mark: "featured snippet likely" },
    { q: "What is the cost of custom software development in India for SMEs?", mark: "featured snippet likely" },
    { q: "How much does digital marketing monthly retainer cost in Delhi NCR?", mark: "featured snippet likely" },
    { q: "What is the cost of CRM software development in India?", mark: "featured snippet likely" },
    { q: "How much does mobile app development cost in Noida?", mark: "neither" },
    { q: "What is LLM chatbot development cost for a small business?", mark: "neither" },
    { q: "Do website companies in Greater Noida charge maintenance fees?", mark: "voice search likely" },
  ],
  timeline: [
    { q: "How long does it take to build a business website?", mark: "featured snippet likely" },
    { q: "How long does SEO take to show results in India?", mark: "featured snippet likely" },
    { q: "How long does custom CRM development take?", mark: "featured snippet likely" },
    { q: "How soon can Google Ads generate leads?", mark: "voice search likely" },
    { q: "How long to launch an ecommerce website in India?", mark: "neither" },
    { q: "How long does a mobile app MVP take?", mark: "neither" },
    { q: "How long does local SEO take for Google Maps ranking?", mark: "featured snippet likely" },
    { q: "How fast can you redesign my existing website?", mark: "voice search likely" },
  ],
  process: [
    { q: "What is the process to hire a website development company in Greater Noida?", mark: "featured snippet likely" },
    { q: "How do you start an AI software project for a small business?", mark: "featured snippet likely" },
    { q: "What happens after I submit a website or software enquiry?", mark: "neither" },
    { q: "What documents do I need before starting website development?", mark: "neither" },
    { q: "How do digital marketing agencies onboard a new client?", mark: "neither" },
    { q: "What is the step by step SEO process for local businesses?", mark: "featured snippet likely" },
    { q: "How do you migrate my website without downtime?", mark: "neither" },
    { q: "How do you train my team on a new CRM?", mark: "voice search likely" },
  ],
  comparison: [
    { q: "Custom software vs ready-made CRM which is better for SMEs in India?", mark: "featured snippet likely" },
    { q: "Next.js or WordPress which is better for a business website in India?", mark: "featured snippet likely" },
    { q: "Is agentic AI different from a chatbot?", mark: "featured snippet likely" },
    { q: "Should I choose local SEO or Google Ads first for my Noida business?", mark: "featured snippet likely" },
    { q: "In-house marketing team vs agency which is cheaper?", mark: "neither" },
    { q: "Meta Ads vs Google Ads for local service business?", mark: "featured snippet likely" },
    { q: "Hire freelancers or a software company for MVP?", mark: "voice search likely" },
    { q: "Static website or web application for my business?", mark: "neither" },
  ],
  trust_risk: [
    { q: "How do I know a digital marketing agency in Greater Noida is trustworthy?", mark: "featured snippet likely" },
    { q: "Will my website data and source code stay with me?", mark: "voice search likely" },
    { q: "What are the risks of cheap SEO packages in India?", mark: "featured snippet likely" },
    { q: "Can an AI chatbot replace my sales team?", mark: "featured snippet likely" },
    { q: "What if the agency locks my Google Ads account?", mark: "voice search likely" },
    { q: "Is my business data safe if I use AI tools?", mark: "neither" },
    { q: "Do I need an NDA before sharing business processes?", mark: "neither" },
    { q: "What happens if website project delays?", mark: "neither" },
  ],
  technical: [
    { q: "What technical SEO checks should my SME website pass?", mark: "featured snippet likely" },
    { q: "Do I need a mobile app or is a mobile website enough?", mark: "featured snippet likely" },
    { q: "What hosting do I need for a Next.js business website?", mark: "featured snippet likely" },
    { q: "Why is my website not ranking on Google?", mark: "voice search likely" },
    { q: "What is Core Web Vitals and why does it matter?", mark: "featured snippet likely" },
    { q: "Do I need schema markup for my local business website?", mark: "neither" },
    { q: "Can you connect WhatsApp API to my website forms?", mark: "voice search likely" },
    { q: "What tech stack do you use for custom software?", mark: "neither" },
    { q: "How do you set up conversion tracking for calls and forms?", mark: "neither" },
  ],
  local: [
    { q: "Who is the best website development company in Greater Noida for SMEs?", mark: "featured snippet likely" },
    { q: "Do you provide SEO and Google Ads services in Noida and Greater Noida?", mark: "featured snippet likely" },
    { q: "How can I get more Google leads for my local business in Noida?", mark: "featured snippet likely" },
    { q: "Is there a good AI software company near Greater Noida?", mark: "voice search likely" },
    { q: "Website designer in Sector MU Greater Noida contact number?", mark: "voice search likely" },
    { q: "Digital marketing agency for shops in Noida Extension?", mark: "neither" },
    { q: "CRM software company for traders in Delhi NCR?", mark: "neither" },
    { q: "Google Business Profile optimization service in Noida?", mark: "featured snippet likely" },
    { q: "IT support and website hosting company in Greater Noida?", mark: "voice search likely" },
    { q: "Custom software company in Noida for manufacturers?", mark: "neither" },
  ],
};
