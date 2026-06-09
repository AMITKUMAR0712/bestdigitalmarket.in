import { SiteNav } from "@/components/SiteNav";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12">
      <div className="space-grid absolute inset-0 opacity-20" />
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="absolute right-10 top-28 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
      <SiteNav />
      <div className="relative z-10 mx-auto max-w-5xl pt-8 text-center sm:pt-10">
        <p className="mx-auto mb-5 inline-flex rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-teal-200 backdrop-blur-xl">{eyebrow}</p>
        <h1 className="gradient-title text-balance text-4xl font-black leading-tight tracking-tight sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-300">{description}</p>
      </div>
    </section>
  );
}
