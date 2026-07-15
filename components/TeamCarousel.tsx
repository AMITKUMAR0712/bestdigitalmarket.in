"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { teamMembers } from "@/lib/team";

export function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const slide = track.querySelector<HTMLElement>(".team-slide");
      const step = slide ? slide.offsetWidth + 20 : 260;
      const maxScroll = track.scrollWidth - track.clientWidth - 4;

      if (track.scrollLeft >= maxScroll) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      track.scrollBy({ left: step, behavior: "smooth" });
    }, 1800);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="team-carousel" aria-label="Our team members">
      <div className="team-carousel-fade team-carousel-fade-left" aria-hidden />
      <div className="team-carousel-fade team-carousel-fade-right" aria-hidden />
      <div
        ref={trackRef}
        className="team-carousel-track"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          window.setTimeout(() => setIsPaused(false), 2800);
        }}
      >
        {teamMembers.map((member) => (
          <article key={member.id} className="team-slide">
            <div className="team-avatar-wrap">
              <div className="team-avatar-ring" aria-hidden />
              <div className="team-avatar-inner">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}${member.internship ? " — Internship" : ""}`}
                  width={128}
                  height={128}
                  className="team-avatar-image"
                  sizes="112px"
                  unoptimized={member.image.endsWith(".svg")}
                />
              </div>
              {member.internship ? <span className="team-intern-badge">Internship</span> : null}
            </div>
            <p className="team-member-line">
              <span className="team-member-name">{member.name}</span>
              <span className="team-member-sep" aria-hidden>
                ·
              </span>
              <span className="team-member-role">{member.role}</span>
            </p>
            <p className="team-member-bio">{member.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
