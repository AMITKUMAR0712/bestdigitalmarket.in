import type { Metadata } from "next";
import { FiStar } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Client Testimonials | Digital Marketing Reviews",
  description: "Read professional client testimonials for SEO, Google Ads, Meta Ads, websites and lead generation campaigns.",
};

export default function TestimonialsPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="Testimonials"
        title="What founders and growing brands say about our digital marketing work."
        description="Clients trust us for clear strategy, strong creatives, measurable reporting and consistent lead generation improvements."
      />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Reveal key={`${testimonial.name}-${testimonial.company}`} delay={(index % 4) * 0.04}>
              <figure className="premium-card h-full rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-slate-950/25 transition hover:-translate-y-1">
                <div className="flex gap-1 text-amber-300">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <FiStar key={starIndex} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-5 leading-7 text-slate-300">“{testimonial.review}”</blockquote>
                <figcaption className="mt-6">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-teal-300">{testimonial.company}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
