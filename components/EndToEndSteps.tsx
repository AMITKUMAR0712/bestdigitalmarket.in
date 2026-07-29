"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiBarChart2, FiLayers, FiSearch, FiZap } from "react-icons/fi";

const STEPS = [
  {
    step: "01",
    title: "Strategy & Planning",
    text: "Keyword research, competitor analysis, business goals mapping and project roadmap.",
    icon: FiSearch,
  },
  {
    step: "02",
    title: "Design & Development",
    text: "SEO-friendly websites, custom software, CRM, mobile apps with modern UI/UX.",
    icon: FiLayers,
  },
  {
    step: "03",
    title: "SEO & Marketing",
    text: "Local SEO, Google Ads, Meta Ads, content strategy and lead generation funnels.",
    icon: FiBarChart2,
  },
  {
    step: "04",
    title: "Launch & Support",
    text: "Hosting, deployment, testing, CRM support, reporting and ongoing optimization.",
    icon: FiZap,
  },
] as const;

type Phase = "idle" | "typing" | "arrow" | "done";

export function EndToEndSteps() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [arrowOn, setArrowOn] = useState(-1);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setActiveIndex(STEPS.length - 1);
      setTyped(STEPS[STEPS.length - 1].text);
      setPhase("done");
      setArrowOn(STEPS.length - 2);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || phase !== "idle") return;
    setActiveIndex(0);
    setTyped("");
    setPhase("typing");
  }, [started, phase]);

  useEffect(() => {
    if (phase !== "typing" || activeIndex < 0) return;

    const full = STEPS[activeIndex].text;
    if (typed.length >= full.length) {
      const timeout = setTimeout(() => {
        if (activeIndex >= STEPS.length - 1) {
          setPhase("done");
          return;
        }
        setPhase("arrow");
        setArrowOn(activeIndex);
      }, 220);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setTyped(full.slice(0, typed.length + 1));
    }, 10);
    return () => clearTimeout(timeout);
  }, [phase, typed, activeIndex]);

  useEffect(() => {
    if (phase !== "arrow") return;

    const timeout = setTimeout(() => {
      const next = activeIndex + 1;
      setActiveIndex(next);
      setTyped("");
      setPhase("typing");
    }, 380);
    return () => clearTimeout(timeout);
  }, [phase, activeIndex]);

  useEffect(() => {
    if (phase !== "done") return;
    const timeout = setTimeout(() => {
      setActiveIndex(-1);
      setTyped("");
      setArrowOn(-1);
      setPhase("idle");
      setStarted(true);
    }, 2800);
    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <div ref={rootRef} className="e2e-steps mt-10">
      <div className="e2e-steps-grid">
        {STEPS.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIndex;
          const isDone = index < activeIndex || phase === "done";
          const showText = isActive ? typed : isDone ? item.text : "";
          const showCursor = isActive && phase === "typing";

          return (
            <div key={item.step} className="e2e-step-wrap">
              <article
                className={`e2e-step-card ${isActive ? "is-active" : ""} ${isDone ? "is-done" : ""} ${index <= activeIndex || phase === "done" ? "is-visible" : ""}`}
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="e2e-step-num">{item.step}</span>
                  <Icon className="text-lg text-terracotta" />
                </div>
                <h3 className="text-[15px] font-bold text-charcoal sm:text-base">{item.title}</h3>
                <p className="e2e-step-text mt-1.5 min-h-[3.75rem] text-[13px] leading-5 text-charcoal-light">
                  {showText}
                  {showCursor ? <span className="e2e-cursor" aria-hidden="true" /> : null}
                </p>
              </article>

              {index < STEPS.length - 1 ? (
                <div
                  className={`e2e-arrow ${arrowOn >= index || (phase === "done" && index < STEPS.length - 1) ? "is-on" : ""}`}
                  aria-hidden="true"
                >
                  <span className="e2e-arrow-line" />
                  <FiArrowRight className="e2e-arrow-icon" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
