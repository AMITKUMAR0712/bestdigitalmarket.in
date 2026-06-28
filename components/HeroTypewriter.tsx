"use client";

import { useEffect, useMemo, useState } from "react";

const PHRASES = [
  "SEO-Friendly Websites",
  "Custom Software & CRM",
  "Digital Marketing",
  "Google & Meta Ads",
  "Local SEO Solutions",
  "Mobile App Development",
  "Lead Generation Systems",
  "Full-Stack Development",
];

type HeroTypewriterProps = {
  phrases?: string[];
};

export function HeroTypewriter({ phrases = PHRASES }: HeroTypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const longestPhrase = useMemo(
    () => phrases.reduce((longest, phrase) => (phrase.length > longest.length ? phrase : longest), phrases[0] ?? ""),
    [phrases],
  );

  useEffect(() => {
    const current = phrases[phraseIndex] ?? "";
    const typingSpeed = isDeleting ? 22 : 42;
    const pauseAtEnd = 1400;
    const pauseAfterDelete = 180;

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseAtEnd);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      }, pauseAfterDelete);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayed((previous) => {
        if (isDeleting) {
          return current.slice(0, previous.length - 1);
        }

        return current.slice(0, previous.length + 1);
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex, phrases]);

  return (
    <span className="typewriter-wrap accent">
      <span className="typewriter-stack">
        <span className="typewriter-ghost" aria-hidden="true">
          {longestPhrase}
          <span className="typewriter-cursor typewriter-cursor-ghost">|</span>
        </span>
        <span className="typewriter-visible" aria-live="polite">
          <span className="typewriter-text">{displayed}</span>
          <span className="typewriter-cursor" aria-hidden="true">
            |
          </span>
        </span>
      </span>
    </span>
  );
}
