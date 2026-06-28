import { FiArrowRight } from "react-icons/fi";

const journeySteps = [
  "Strategy",
  "Design",
  "Development",
  "SEO",
  "Marketing",
  "Launch",
  "Support",
];

export function ServiceMottoStrip() {
  return (
    <div className="border-b border-warm-border bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-2 px-4 py-2.5 text-center text-[11px] font-semibold text-warm-muted sm:gap-x-3 sm:text-xs">
        <span className="text-terracotta">One team. Complete delivery.</span>
        {journeySteps.map((step, index) => (
          <span key={step} className="inline-flex items-center gap-2">
            {index > 0 && <FiArrowRight className="hidden text-terracotta/60 sm:inline" />}
            <span className="text-charcoal-soft">{step}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
