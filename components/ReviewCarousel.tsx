"use client";

import { useEffect, useRef, useState } from "react";
import { FiStar } from "react-icons/fi";

type Review = {
  name: string;
  company: string;
  rating: number;
  review: string;
};

type ReviewCarouselProps = {
  reviews: Review[];
};

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const firstCard = track.querySelector<HTMLElement>(".review-card");
      const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 276;
      const maxScroll = track.scrollWidth - track.clientWidth - 8;

      if (track.scrollLeft >= maxScroll) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      track.scrollBy({ left: cardWidth, behavior: "smooth" });
    }, 2600);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      ref={trackRef}
      className="review-track mt-5 flex gap-4 overflow-x-auto pb-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {reviews.map((testimonial, index) => (
        <figure
          key={`${testimonial.name}-${testimonial.company}`}
          className="review-card min-w-[235px] max-w-[235px] rounded-[1.4rem] border border-white/10 bg-slate-950/60 p-4 shadow-xl shadow-slate-950/25 backdrop-blur-xl transition hover:-translate-y-1 hover:border-teal-300/35 sm:min-w-[260px] sm:max-w-[260px]"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <figcaption className="flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-500 text-sm font-black text-white">
              {testimonial.name.split(" ").map((part) => part[0]).join("")}
              <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] font-black text-[#4285f4]">G</span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-black text-white">{testimonial.name}</p>
              <p className="text-xs font-semibold text-slate-400">{index + 1} month ago</p>
            </div>
            <span className="ml-auto rounded-full bg-sky-400 px-1.5 py-0.5 text-[9px] font-black text-white">✓</span>
          </figcaption>
          <div className="mt-4 flex gap-0.5 text-amber-300">
            {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
              <FiStar key={starIndex} className="text-sm" fill="currentColor" />
            ))}
          </div>
          <blockquote className="mt-3 line-clamp-4 text-sm leading-6 text-slate-300">{testimonial.review}</blockquote>
          <p className="mt-2 text-sm font-bold text-sky-300">Read more</p>
        </figure>
      ))}
    </div>
  );
}
