"use client";

import { useEffect, useState } from "react";

type Phrase = {
  line1: string;
  line2: string;
};

/** First phrase stays as brand headline; rest cycle services professionally. */
const PHRASES: Phrase[] = [
  {
    line1: "Websites, Software & AI,",
    line2: "Built to grow your business",
  },
  { line1: "We provide", line2: "Custom Website Development" },
  { line1: "We provide", line2: "Custom Software Solutions" },
  { line1: "We provide", line2: "AI & Machine Learning" },
  { line1: "We provide", line2: "Agentic AI Systems" },
  { line1: "We provide", line2: "Custom LLM Models" },
  { line1: "We provide", line2: "SEO & Local SEO" },
  { line1: "We provide", line2: "Google Ads Campaigns" },
  { line1: "We provide", line2: "CRM & Sales Systems" },
  { line1: "We provide", line2: "Mobile App Development" },
  { line1: "We provide", line2: "DevOps & Cloud Hosting" },
  { line1: "We provide", line2: "Digital Marketing Growth" },
];

export function MobileHeroTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [phase, setPhase] = useState<"line1" | "line2" | "hold" | "delete2" | "delete1">("line1");

  const phrase = PHRASES[phraseIndex] ?? PHRASES[0];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLine1(phrase.line1);
      setLine2(phrase.line2);
      setPhase("hold");
      const t = window.setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        setLine1("");
        setLine2("");
        setPhase("line1");
      }, 2200);
      return () => window.clearTimeout(t);
    }

    if (phase === "line1") {
      if (line1.length < phrase.line1.length) {
        const t = window.setTimeout(() => setLine1(phrase.line1.slice(0, line1.length + 1)), 30);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(() => setPhase("line2"), 160);
      return () => window.clearTimeout(t);
    }

    if (phase === "line2") {
      if (line2.length < phrase.line2.length) {
        const t = window.setTimeout(
          () => setLine2(phrase.line2.slice(0, line2.length + 1)),
          phraseIndex === 0 ? 26 : 32,
        );
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(() => setPhase("hold"), phraseIndex === 0 ? 2000 : 1500);
      return () => window.clearTimeout(t);
    }

    if (phase === "hold") {
      const t = window.setTimeout(() => setPhase("delete2"), 60);
      return () => window.clearTimeout(t);
    }

    if (phase === "delete2") {
      if (line2.length > 0) {
        const t = window.setTimeout(() => setLine2((s) => s.slice(0, -1)), 14);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(() => setPhase("delete1"), 50);
      return () => window.clearTimeout(t);
    }

    if (phase === "delete1") {
      if (line1.length > 0) {
        const t = window.setTimeout(() => setLine1((s) => s.slice(0, -1)), 12);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        setPhase("line1");
      }, 180);
      return () => window.clearTimeout(t);
    }

    return undefined;
  }, [line1, line2, phase, phrase, phraseIndex]);

  return (
    <span className="hero-mobile-type">
      <span className="hero-mobile-type-line1">
        {line1}
        {phase === "line1" ? <span className="hero-mobile-type-cursor" aria-hidden="true" /> : null}
      </span>
      <span className="hero-mobile-type-line2">
        {line2}
        {phase === "line2" || phase === "hold" ? (
          <span className="hero-mobile-type-cursor" aria-hidden="true" />
        ) : null}
      </span>
    </span>
  );
}
