"use client";

import type { IconType } from "react-icons";
import { useState } from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  FiBarChart2,
  FiCpu,
  FiSearch,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "react-icons/si";
import { SectionHeader } from "@/components/SectionHeader";

type TechItem = {
  name: string;
  icon: IconType;
  color: string;
};

const techStack: TechItem[] = [
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#60a5fa" },
  { name: "JavaScript", icon: SiJavascript, color: "#fde047" },
  { name: "Node.js", icon: SiNodedotjs, color: "#86efac" },
  { name: "Express", icon: SiExpress, color: "#e5e7eb" },
  { name: "MongoDB", icon: SiMongodb, color: "#22c55e" },
  { name: "Python", icon: SiPython, color: "#facc15" },
  { name: "PHP", icon: SiPhp, color: "#a5b4fc" },
  { name: "Laravel", icon: SiLaravel, color: "#fb7185" },
  { name: "MySQL", icon: SiMysql, color: "#38bdf8" },
  { name: "Firebase", icon: SiFirebase, color: "#fbbf24" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#67e8f9" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Docker", icon: SiDocker, color: "#60a5fa" },
  { name: "Git", icon: SiGit, color: "#fb7185" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Figma", icon: SiFigma, color: "#f472b6" },
  { name: "WordPress", icon: SiWordpress, color: "#93c5fd" },
  { name: "Shopify", icon: SiShopify, color: "#86efac" },
  { name: "SEO", icon: FiSearch, color: "#5eead4" },
  { name: "Google Ads", icon: FaGoogle, color: "#facc15" },
  { name: "Meta Ads", icon: FaFacebookF, color: "#60a5fa" },
  { name: "Instagram Ads", icon: FaInstagram, color: "#fb7185" },
  { name: "WhatsApp Leads", icon: FaWhatsapp, color: "#4ade80" },
  { name: "Lead Generation", icon: FiTarget, color: "#67e8f9" },
  { name: "Analytics", icon: FiBarChart2, color: "#a78bfa" },
  { name: "Automation", icon: FiZap, color: "#fbbf24" },
  { name: "AI Systems", icon: FiCpu, color: "#c084fc" },
];

type TechIconCloudProps = {
  compact?: boolean;
};

const stackCategories = ["Web Apps", "Software", "Cloud & DevOps", "Digital Marketing", "AI & Automation"];

export function TechIconCloud({ compact = false }: TechIconCloudProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleStack = compact && !showAll ? techStack.slice(0, 24) : techStack;

  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="absolute inset-x-6 top-20 h-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technology Stack"
          title="Modern tools, frameworks and platforms we work with."
          description="A professional technology ecosystem for website development, full-stack software, CRM, mobile apps, cloud hosting, DevOps, testing, UI/UX and digital growth."
        />
        <div className="tech-icon-cloud luxury-border mt-8 rounded-[2rem] border border-white/10 p-3 shadow-2xl shadow-slate-950/30 sm:mt-10 sm:p-5">
          <div className="pointer-events-none absolute -left-16 top-16 h-44 w-44 rounded-full border border-teal-300/15" />
          <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full border border-fuchsia-300/15" />
          <div className="relative mb-5 flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-4 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-teal-300">AI Capability Matrix</p>
              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">Tech, cloud, marketing and automation ecosystem</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {stackCategories.map((category) => (
                <span key={category} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-[11px] font-bold text-slate-300">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="relative grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
            {visibleStack.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="tech-icon-card group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/58 p-3 text-center shadow-lg shadow-slate-950/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-teal-300/45 hover:bg-teal-300/10"
                  style={{ animationDelay: `${(index % 12) * 120}ms` }}
                  title={tech.name}
                >
                  <span className="tech-icon-halo absolute inset-x-3 top-2 h-8 rounded-full opacity-0 transition group-hover:opacity-100" style={{ backgroundColor: tech.color }} />
                  <div className="relative mx-auto grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] shadow-inner shadow-white/5 transition group-hover:scale-110 sm:h-12 sm:w-12">
                    <Icon className="text-2xl transition sm:text-3xl" style={{ color: tech.color }} />
                  </div>
                  <p className="relative mt-2 truncate text-[10px] font-bold text-slate-400 group-hover:text-teal-100 sm:text-xs">{tech.name}</p>
                </div>
              );
            })}
          </div>
          {compact && !showAll && (
            <div className="relative mt-6 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="cta-glow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-200 via-cyan-200 to-fuchsia-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:scale-105"
              >
                View All Technologies
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
