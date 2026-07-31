export type TeamMember = {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  internship?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    id: "amit-kumar-talan",
    name: "Amit",
    role: "Full Stack Solutions Architect",
    description:
      "Leads end-to-end product architecture across websites, CRM platforms and custom software — from technical planning and scalable builds to secure deployment and growth systems.",
    image: "/team/amit-kumar-talan.jpg",
  },
  {
    id: "manshi-talan",
    name: "Manshi Talan",
    role: "Head of Department (HOD)",
    description:
      "Owns delivery quality, team coordination and client communication so every project moves on time with clear scope, polished execution and dependable post-launch support.",
    image: "/team/manshi-talan.jpeg",
  },
  {
    id: "samarth-sharma",
    name: "Samarth Sharma",
    role: "Senior Full Stack Developer",
    description:
      "Builds high-performance web applications with clean architecture, strong API design and production-ready frontends that stay fast, secure and easy to scale.",
    image: "/team/samarth-sharma.jpg",
  },
  {
    id: "saurabh-singh",
    name: "Saurabh Singh",
    role: "Full Stack Application Developer",
    description:
      "Develops reliable business applications, dashboards and admin systems with practical UX, stable backends and smooth feature delivery for real-world workflows.",
    image: "/team/saurabh-singh.jpg",
  },
  {
    id: "vikram-kumar-modi",
    name: "Vikram Kumar Modi",
    role: "Flutter Developer",
    description:
      "Builds cross-platform mobile apps with Flutter — clean UI, smooth performance and reliable Android & iOS delivery for real business products.",
    image: "/team/vikram-kumar-modi.jpg",
  },
  {
    id: "sagar-talan",
    name: "Sagar Talan",
    role: "LLM Engineer",
    description:
      "Designs and integrates large language model solutions — chat assistants, automation flows and AI features that make products smarter and reduce manual work.",
    image: "/team/sagar-talan.jpg",
  },
  {
    id: "mastan",
    name: "Mastan",
    role: "AI & Machine Learning Engineer",
    description:
      "Builds machine learning models and intelligent features for prediction, automation and data-driven products that support real business decision-making.",
    image: "/team/mastan.jpg",
  },
  {
    id: "manohar-singh",
    name: "Manohar Singh",
    role: "MARN Stack Developer",
    description:
      "Develops modern web applications with MongoDB, Apollo, React and Node.js — building scalable APIs, clean UIs and reliable full-stack product features.",
    image: "/team/manohar-singh.jpg",
  },
  {
    id: "vyom-sagar",
    name: "Vyom Sagar",
    role: "MERN Stack Developer",
    description:
      "Builds responsive web apps with MongoDB, Express, React and Node.js — focused on clean code, fast interfaces and smooth feature delivery for growing businesses.",
    image: "/team/vyom-sagar.jpg",
  },
  {
    id: "divyam-sharma",
    name: "Divyam Sharma",
    role: "Digital Marketing Analyst",
    description:
      "Plans SEO, paid campaigns and performance reporting so websites attract the right traffic, convert enquiries and deliver measurable marketing ROI.",
    image: "/team/divyam-sharma.jpg",
  },
  {
    id: "sumit",
    name: "Sumit",
    role: "Video Editor",
    description:
      "Creates polished marketing and product videos — Reels, ads and explainers that help brands communicate clearly and convert more viewers into leads.",
    image: "/team/avatars/sumit.svg",
    internship: true,
  },
  {
    id: "arun",
    name: "Arun",
    role: "SEO Developer",
    description:
      "Improves technical SEO, page structure and on-page signals so websites load fast, get indexed cleanly and rank for high-intent search keywords.",
    image: "/team/avatars/arun.svg",
  },
];
