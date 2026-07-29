import type { Metadata } from "next";
import { FiStar } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { companyTrust, testimonials } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Client Reviews for Website Design, SEO & Digital Marketing",
  description:
    "Read client testimonials for SEO-friendly website development, custom software, CRM systems, local SEO, Google Ads, Meta Ads and lead generation projects.",
  path: "/testimonials",
  keywords: [
    "website design reviews Noida",
    "SEO agency reviews India",
    "digital marketing client testimonials",
    "TradeOrbit Global reviews",
  ],
});

export default function TestimonialsPage() {
  return (
    <main className="relative z-10 overflow-hidden bg-cream text-charcoal">
      <PageHero
        eyebrow="Testimonials"
        title="What founders and growing brands say about our work."
        description={`Clients trust us with ${companyTrust.projectsDelivered} projects delivered, ${companyTrust.googleRating} Google rating and ${companyTrust.yearsExperience} years of reliable IT and digital marketing support.`}
      />
      <TrustBar compact showBadges={false} />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={`${testimonial.name}-${testimonial.company}`} delay={(index % 4) * 0.04}>
              <figure className="premium-card magnetic-glow h-full rounded-[1.8rem] border border-[var(--border-warm)] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <FiStar key={starIndex} fill="currentColor" />
                    ))}
                  </div>
                  <span className="rounded-full border border-terracotta/15 bg-terracotta/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-terracotta">
                    Verified
                  </span>
                </div>
                <blockquote className="mt-5 leading-7 text-charcoal-light">&ldquo;{testimonial.review}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--border-warm)] pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-terracotta/10 text-xs font-black text-terracotta">
                    {testimonial.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-terracotta">{testimonial.company}</p>
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
