"use client";

import { useEffect, useState } from "react";

type CodeToken = { text: string; cls?: string };
type CodeLine = CodeToken[];

const CODE_LINES: CodeLine[] = [
  [
    { text: "import", cls: "tok-kw" },
    { text: " { " },
    { text: "growthEngine", cls: "tok-fn" },
    { text: " } " },
    { text: "from", cls: "tok-kw" },
    { text: ' "@tradeorbit/core";', cls: "tok-str" },
  ],
  [],
  [
    { text: "export", cls: "tok-kw" },
    { text: " " },
    { text: "async function", cls: "tok-kw" },
    { text: " " },
    { text: "scaleBusiness", cls: "tok-fn" },
    { text: "() {" },
  ],
  [
    { text: "  await", cls: "tok-kw" },
    { text: " seo." },
    { text: "optimize", cls: "tok-fn" },
    { text: "();" },
  ],
  [
    { text: "  await", cls: "tok-kw" },
    { text: " ads." },
    { text: "run", cls: "tok-fn" },
    { text: "({ roas: " },
    { text: '"5.8x"', cls: "tok-str" },
    { text: " });" },
  ],
  [
    { text: "  return", cls: "tok-kw" },
    { text: " " },
    { text: '"Leads +240%";', cls: "tok-str" },
  ],
  [{ text: "}" }],
];

const FULL_LINES = CODE_LINES.map((line) => line.map((token) => token.text).join(""));
const TOTAL_CHARS = FULL_LINES.reduce((sum, line) => sum + line.length + 1, 0);

function revealState(charsTyped: number) {
  let remaining = charsTyped;
  const counts: number[] = [];
  let activeLine = FULL_LINES.length - 1;
  let found = false;

  for (let index = 0; index < FULL_LINES.length; index += 1) {
    const lineLength = FULL_LINES[index].length;
    counts.push(Math.max(0, Math.min(lineLength, remaining)));
    if (!found && remaining <= lineLength) {
      activeLine = index;
      found = true;
    }
    remaining = Math.max(0, remaining - lineLength - 1);
  }

  return { counts, activeLine };
}

export function HeroCodePanel() {
  const [charsTyped, setCharsTyped] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setCharsTyped(TOTAL_CHARS);
      return;
    }

    let count = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      count += 1;
      setCharsTyped(count);

      if (count >= TOTAL_CHARS) {
        timer = setTimeout(() => {
          count = 0;
          setCharsTyped(0);
          timer = setTimeout(tick, 26);
        }, 2600);
        return;
      }

      timer = setTimeout(tick, 26);
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  const { counts, activeLine } = revealState(charsTyped);

  return (
    <div className="hero-code-panel luxury-border">
      <div className="hero-code-chrome">
        <span className="hero-code-dot hero-code-dot-red" />
        <span className="hero-code-dot hero-code-dot-yellow" />
        <span className="hero-code-dot hero-code-dot-green" />
        <span className="hero-code-filename">growth-engine.ts</span>
      </div>
      <pre className="hero-code-body">
        {CODE_LINES.map((line, lineIndex) => {
          const budget = counts[lineIndex];
          let consumed = 0;

          return (
            <div key={lineIndex} className="hero-code-line">
              {line.map((token, tokenIndex) => {
                const start = consumed;
                consumed += token.text.length;
                const visible = token.text.slice(0, Math.max(0, Math.min(token.text.length, budget - start)));
                if (!visible) return null;

                return (
                  <span key={tokenIndex} className={token.cls}>
                    {visible}
                  </span>
                );
              })}
              {lineIndex === activeLine ? <span className="hero-code-cursor">▌</span> : null}
            </div>
          );
        })}
      </pre>
      <div className="hero-code-status">
        <span className="hero-code-status-dot" />
        Build passed · Deployed to production
      </div>
    </div>
  );
}
