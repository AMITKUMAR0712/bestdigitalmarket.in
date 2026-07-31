import Image from "next/image";
import { pageHeroImages, type PageHeroCategory } from "@/lib/page-hero-images";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  category?: PageHeroCategory;
};

export function PageHero({ eyebrow, title, description, category = "default" }: PageHeroProps) {
  const image = pageHeroImages[category];

  return (
    <section className="page-hero app-section relative overflow-hidden pb-10 pt-6 sm:pb-12 sm:pt-8">
      <div className="page-hero-media absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={70}
          sizes="100vw"
          className="page-hero-image object-cover object-center"
        />
        <div className="page-hero-overlay absolute inset-0" aria-hidden="true" />
      </div>

      <div className="app-container relative z-10 pt-2 text-center sm:pt-4">
        <p className="page-hero-badge mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full border border-terracotta/25 bg-[var(--card-white)]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-terracotta shadow-soft backdrop-blur-sm sm:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
          {eyebrow}
        </p>
        <h1 className="gradient-title mx-auto max-w-3xl text-balance text-[clamp(1.5rem,4.8vw,2.5rem)] font-bold leading-tight tracking-tight text-charcoal">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-[13px] leading-6 text-charcoal-light sm:text-sm sm:leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
