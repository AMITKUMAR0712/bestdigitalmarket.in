"use client";

import Image from "next/image";
import { teamMembers } from "@/lib/team";

export function TeamCarousel() {
  const loop = [...teamMembers, ...teamMembers];

  return (
    <div className="team-carousel" aria-label="Our team members">
      <div className="team-carousel-fade team-carousel-fade-left" aria-hidden />
      <div className="team-carousel-fade team-carousel-fade-right" aria-hidden />
      <div className="team-carousel-track">
        {loop.map((member, index) => (
          <article
            key={`${member.id}-${index}`}
            className="team-slide"
            aria-hidden={index >= teamMembers.length}
          >
            <div className="team-avatar-wrap">
              <div className="team-avatar-ring" aria-hidden>
                <span className="team-avatar-spin" />
              </div>
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
