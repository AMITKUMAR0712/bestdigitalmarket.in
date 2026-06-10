type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-balance text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">{title}</h2>
      <p className="mt-4 text-pretty text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
    </div>
  );
}
