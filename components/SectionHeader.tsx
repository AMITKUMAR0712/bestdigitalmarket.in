type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-pretty text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}
