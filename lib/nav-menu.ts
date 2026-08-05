export type NavMenuItem = {
  title: string;
  description: string;
  href: string;
};

export type NavMenuColumn = {
  heading: string;
  items: NavMenuItem[];
};

export const servicesMenu: NavMenuColumn[] = [
  {
    heading: "Growth & Visibility",
    items: [
      { title: "SEO Growth Engine", description: "Search-first systems for qualified organic traffic", href: "/services#leads" },
      { title: "Paid Acquisition", description: "Google & Meta Ads for faster, high-intent leads", href: "/services#paid-acquisition" },
      { title: "Revenue Automation", description: "Lifecycle campaigns that nurture leads to close", href: "/services#revenue-automation" },
    ],
  },
  {
    heading: "Brand, Web & Ops",
    items: [
      { title: "Social & Creative", description: "Brand storytelling and platform-native creatives", href: "/services#social-creative" },
      { title: "Websites & CRO", description: "SEO-friendly websites, landing pages and funnels", href: "/services#websites" },
      { title: "DevOps, Testing & Deployment", description: "Hosting, cloud deployment, testing and maintenance", href: "/services#devops" },
    ],
  },
  {
    heading: "Build & Engineer",
    items: [
      { title: "Software & Full-Stack Development", description: "Custom web apps, dashboards and business software", href: "/services#software" },
      { title: "AI, ML & Agentic Systems", description: "LLM solutions, chatbots and agentic AI workflows", href: "/services#ai-ml" },
      { title: "Mobile Apps & Business Systems", description: "Mobile apps, CRM, ERP and internal business tools", href: "/services#mobile-apps" },
    ],
  },
];

export const productsMenu: NavMenuColumn[] = [
  {
    heading: "Business Software",
    items: [
      { title: "CRM Software", description: "Lead tracking and sales follow-up", href: "/products/crm-software" },
      { title: "ERP Software", description: "Operations and department workflow", href: "/products/erp-software" },
      { title: "HRMS Software", description: "Attendance, leave and HR workflow", href: "/products/hrms-software" },
      { title: "Billing Software", description: "Invoice, payment and billing control", href: "/products/billing-software" },
    ],
  },
  {
    heading: "Education Products",
    items: [
      { title: "Coaching Management Software", description: "Students, batches, fees and attendance", href: "/products/coaching-management-software" },
      { title: "School Management Software", description: "Academic and admin workflow solution", href: "/products/school-management-software" },
      { title: "Online Exam System", description: "Assessment, testing and result reports", href: "/products/online-exam-system" },
    ],
  },
  {
    heading: "Custom Systems",
    items: [
      { title: "Custom Software", description: "Business-specific modules and reports", href: "/products/custom-software" },
      { title: "Property Portal", description: "Listings, search, leads and agent flow", href: "/products/property-portal" },
      { title: "Real Estate CRM", description: "Property lead and site visit tracking", href: "/products/real-estate-crm" },
    ],
  },
];
