"use client";

import type { IconType } from "react-icons";
import { useMemo, useState } from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiHuggingface,
  SiJavascript,
  SiLangchain,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiOpenai,
  SiPhp,
  SiPytorch,
  SiPython,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiWordpress,
  SiZapier,
} from "react-icons/si";
import {
  FiBarChart2,
  FiCpu,
  FiMessageCircle,
  FiSearch,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import { Reveal } from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";
import { SectionHeader } from "@/components/SectionHeader";

type StackCategory = "Web Apps" | "Software" | "Cloud & DevOps" | "Digital Marketing" | "AI & Automation";

type TechItem = {
  name: string;
  icon: IconType;
  color: string;
  category: StackCategory;
  featured?: boolean;
};

const stackCategories: StackCategory[] = [
  "Web Apps",
  "Software",
  "Cloud & DevOps",
  "Digital Marketing",
  "AI & Automation",
];

const techStack: TechItem[] = [
  { name: "React", icon: SiReact, color: "#61dafb", category: "Web Apps", featured: true },
  { name: "Next.js", icon: SiNextdotjs, color: "#1c1917", category: "Web Apps", featured: true },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", category: "Web Apps", featured: true },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", category: "Web Apps", featured: true },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Web Apps", featured: true },
  { name: "Express", icon: SiExpress, color: "#44403c", category: "Web Apps", featured: true },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248", category: "Software", featured: true },
  { name: "Python", icon: SiPython, color: "#3776ab", category: "Software", featured: true },
  { name: "PHP", icon: SiPhp, color: "#777bb4", category: "Software", featured: true },
  { name: "Laravel", icon: SiLaravel, color: "#ff2d20", category: "Software", featured: true },
  { name: "MySQL", icon: SiMysql, color: "#00758f", category: "Software", featured: true },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28", category: "Cloud & DevOps", featured: true },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4", category: "Web Apps", featured: true },
  { name: "Vercel", icon: SiVercel, color: "#1c1917", category: "Cloud & DevOps", featured: true },
  { name: "Docker", icon: SiDocker, color: "#2496ed", category: "Cloud & DevOps", featured: true },
  { name: "Git", icon: SiGit, color: "#f05032", category: "Cloud & DevOps", featured: true },
  { name: "GitHub", icon: SiGithub, color: "#1c1917", category: "Cloud & DevOps", featured: true },
  { name: "Figma", icon: SiFigma, color: "#f24e1e", category: "Web Apps", featured: true },
  { name: "WordPress", icon: SiWordpress, color: "#21759b", category: "Software", featured: true },
  { name: "Shopify", icon: SiShopify, color: "#96bf48", category: "Software", featured: true },
  { name: "SEO", icon: FiSearch, color: "#9b5540", category: "Digital Marketing", featured: true },
  { name: "Google Ads", icon: FaGoogle, color: "#4285f4", category: "Digital Marketing", featured: true },
  { name: "Meta Ads", icon: FaFacebookF, color: "#1877f2", category: "Digital Marketing", featured: true },
  { name: "Instagram", icon: FaInstagram, color: "#e4405f", category: "Digital Marketing", featured: true },
  { name: "WhatsApp Leads", icon: FaWhatsapp, color: "#25d366", category: "Digital Marketing" },
  { name: "Lead Generation", icon: FiTarget, color: "#9b5540", category: "Digital Marketing" },
  { name: "Analytics", icon: FiBarChart2, color: "#78716c", category: "Digital Marketing" },
  { name: "OpenAI", icon: SiOpenai, color: "#10a37f", category: "AI & Automation", featured: true },
  { name: "ChatGPT", icon: SiOpenai, color: "#0d9373", category: "AI & Automation", featured: true },
  { name: "Gemini", icon: SiGooglegemini, color: "#8e75b2", category: "AI & Automation", featured: true },
  { name: "Claude", icon: FiMessageCircle, color: "#d97706", category: "AI & Automation", featured: true },
  { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#1c1917", category: "AI & Automation", featured: true },
  { name: "LangChain", icon: SiLangchain, color: "#1c3c3c", category: "AI & Automation", featured: true },
  { name: "Hugging Face", icon: SiHuggingface, color: "#ffd21e", category: "AI & Automation", featured: true },
  { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00", category: "AI & Automation", featured: true },
  { name: "PyTorch", icon: SiPytorch, color: "#ee4c2c", category: "AI & Automation" },
  { name: "Ollama", icon: SiOllama, color: "#1c1917", category: "AI & Automation" },
  { name: "n8n", icon: SiN8N, color: "#ea4b71", category: "AI & Automation" },
  { name: "Zapier", icon: SiZapier, color: "#ff4a00", category: "AI & Automation" },
  { name: "Agentic AI", icon: FiCpu, color: "#7c3aed", category: "AI & Automation", featured: true },
  { name: "LLM Models", icon: FiCpu, color: "#6366f1", category: "AI & Automation", featured: true },
  { name: "AI Chatbots", icon: FiMessageCircle, color: "#0ea5e9", category: "AI & Automation" },
  { name: "Automation", icon: FiZap, color: "#d97706", category: "AI & Automation" },
];

type TechIconCloudProps = {
  compact?: boolean;
};

/** Default preview size on all devices; View All reveals the full list. */
const PREVIEW_LIMIT = 12;

export function TechIconCloud({ compact = false }: TechIconCloudProps) {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<StackCategory | "All">("All");

  const filteredStack = useMemo(
    () =>
      activeCategory === "All"
        ? techStack
        : techStack.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const visibleStack = useMemo(
    () => (showAll ? filteredStack : filteredStack.slice(0, PREVIEW_LIMIT)),
    [filteredStack, showAll],
  );

  const hasMore = filteredStack.length > PREVIEW_LIMIT;

  return (
    <section className="app-section relative">
      <div className="app-container">
        {!compact && (
          <SectionHeader
            eyebrow="Technology Stack"
            title="Modern tools, frameworks and platforms we work with."
            description="A professional technology ecosystem for website development, full-stack software, CRM, mobile apps, cloud hosting, DevOps, testing, UI/UX and digital growth."
          />
        )}

        <Reveal>
          <div className={`tech-icon-cloud ${compact ? "mt-0" : "mt-8 sm:mt-10"} rounded-[2rem] border border-[var(--border-warm)] p-3 shadow-card sm:p-5`}>
            <div className="relative mb-5 flex flex-col gap-4 rounded-[1.5rem] border border-[var(--border-warm)] bg-white/90 p-4 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-terracotta">Full Stack Ecosystem</p>
                <h3 className="mt-2 text-base font-bold text-charcoal sm:text-lg">Tech, cloud, marketing and automation</h3>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Technology categories">
                {stackCategories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => {
                        setActiveCategory((current) => (current === category ? "All" : category));
                        setShowAll(false);
                      }}
                      className={`rounded-full border px-3 py-2 text-[11px] font-bold transition ${
                        isActive
                          ? "border-terracotta bg-terracotta/10 text-terracotta shadow-soft"
                          : "border-[var(--border-warm)] bg-cream-50 text-charcoal-light hover:border-terracotta/30 hover:text-charcoal"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <RevealGroup className="relative grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12" stagger={0.04}>
              {visibleStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <RevealItem key={tech.name}>
                    <div
                      className="tech-icon-card motion-card group relative overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-white p-2.5 text-center shadow-soft transition hover:-translate-y-1 hover:border-terracotta/30 sm:p-3"
                      title={tech.name}
                    >
                    <div className="relative mx-auto grid h-9 w-9 place-items-center rounded-2xl border border-[var(--border-warm)] bg-cream-50 transition group-hover:scale-110 sm:h-12 sm:w-12">
                      <Icon className="text-xl transition sm:text-3xl" style={{ color: tech.color }} />
                    </div>
                    <p className="relative mt-2 truncate text-[10px] font-bold text-charcoal-light group-hover:text-terracotta sm:text-xs">{tech.name}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            {hasMore && (
              <div className="relative mt-5 text-center sm:mt-6">
                <button
                  type="button"
                  onClick={() => setShowAll((current) => !current)}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-bold text-white transition hover:bg-terracotta-600"
                >
                  {showAll ? "Show Less" : "View All Technologies"}
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
