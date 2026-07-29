"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { teamMembers } from "@/lib/team";

function getCardClass(offset: number, total: number) {
  if (offset === 0) return "center";
  if (offset === 1) return "right-1";
  if (offset === 2) return "right-2";
  if (offset === total - 1) return "left-1";
  if (offset === total - 2) return "left-2";
  return "hidden";
}

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const total = teamMembers.length;
  const active = teamMembers[currentIndex];

  const updateCarousel = useCallback(
    (newIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(((newIndex % total) + total) % total);
      window.setTimeout(() => setIsAnimating(false), 550);
    },
    [isAnimating, total],
  );

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [currentIndex, paused, updateCarousel]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
      if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, updateCarousel]);

  const handleTouchStart = (e: TouchEvent) => {
    setPaused(true);
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      updateCarousel(diff > 0 ? currentIndex + 1 : currentIndex - 1);
    }
    window.setTimeout(() => setPaused(false), 2800);
  };

  return (
    <div
      className="team-3d"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <p className="team-3d-title" aria-hidden="true">
        Our Team
      </p>

      <div className="team-3d-stage">
        <button
          type="button"
          className="team-3d-arrow left"
          aria-label="Previous team member"
          onClick={() => updateCarousel(currentIndex - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          className="team-3d-arrow right"
          aria-label="Next team member"
          onClick={() => updateCarousel(currentIndex + 1)}
        >
          <FiChevronRight />
        </button>

        <div className="team-3d-track" aria-label="Team members carousel">
          {teamMembers.map((member, index) => {
            const offset = (index - currentIndex + total) % total;
            const position = getCardClass(offset, total);

            return (
              <button
                key={member.id}
                type="button"
                className={`team-3d-card ${position}`}
                onClick={() => updateCarousel(index)}
                aria-label={`${member.name}, ${member.role}`}
                aria-current={offset === 0 ? "true" : undefined}
              >
                <Image
                  src={member.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 200px, 280px"
                  className="object-cover object-top"
                  unoptimized={member.image.endsWith(".svg")}
                  priority={offset === 0}
                />
                {member.internship ? <span className="team-3d-intern">Internship</span> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="team-3d-info" key={active.id}>
        <h3 className="team-3d-name">{active.name}</h3>
        <p className="team-3d-role">{active.role}</p>
        <p className="team-3d-bio">{active.description}</p>
      </div>

      <div className="team-3d-dots" role="tablist" aria-label="Team members">
        {teamMembers.map((member, index) => (
          <button
            key={member.id}
            type="button"
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Show ${member.name}`}
            className={`team-3d-dot ${index === currentIndex ? "is-active" : ""}`}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div>
    </div>
  );
}
