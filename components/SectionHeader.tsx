type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="section-eyebrow mb-2.5 sm:text-[11px]">
        <span className="pro-badge-dot" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-xl font-bold tracking-tight text-charcoal sm:text-2xl lg:text-[1.75rem]">{title}</h2>
      <p className="mt-3 text-pretty text-[13px] leading-6 text-charcoal-light sm:text-sm sm:leading-relaxed">{description}</p>
    </div>
  );
}
