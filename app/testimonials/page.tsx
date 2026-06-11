import type { Metadata } from "next";
import { FiStar } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Client Reviews for Website Design, SEO & Digital Marketing",
  description:
    "Read client testimonials for SEO-friendly website development, custom software, CRM systems, local SEO, Google Ads, Meta Ads and lead generation projects.",
  keywords: [
    "website design reviews Noida",
    "SEO agency reviews India",
    "digital marketing client testimonials",
    "Best Digital Market reviews",
  ],
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      <PageHero
        eyebrow="Testimonials"
        title="What founders and growing brands say about our SEO and technology work."
        description="Clients trust us for professional website development, software delivery, CRM systems, local SEO strategy, measurable reporting and consistent lead generation improvements."
      />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={`${testimonial.name}-${testimonial.company}`} delay={(index % 4) * 0.04}>
              <figure className="premium-card magnetic-glow h-full rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-slate-950/25">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-1 text-amber-300">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <FiStar key={starIndex} fill="currentColor" />
                    ))}
                  </div>
                  <span className="rounded-full border border-teal-300/15 bg-teal-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-teal-200">
                    Verified
                  </span>
                </div>
                <blockquote className="mt-5 leading-7 text-slate-300">&ldquo;{testimonial.review}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-fuchsia-300 text-xs font-black text-slate-950">
                    {testimonial.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-teal-300">{testimonial.company}</p>
                  </div>
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
