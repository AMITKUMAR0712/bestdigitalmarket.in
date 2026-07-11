"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { heroVideos } from "@/lib/hero-videos";

const AUTO_ADVANCE_MS = 6500;
const SWIPE_THRESHOLD = 45;
const TOTAL_SLIDES = heroVideos.length;

export function HeroVideoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const pointerStartX = useRef<number | null>(null);

  const useVideo = isDesktop && !prefersReducedMotion;

  const goNext = useCallback(() => setActiveIndex((index) => (index + 1) % TOTAL_SLIDES), []);
  const goPrev = useCallback(() => setActiveIndex((index) => (index - 1 + TOTAL_SLIDES) % TOTAL_SLIDES), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const update = () => setIsDesktop(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!useVideo) return;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex, useVideo]);

  useEffect(() => {
    if (useVideo || prefersReducedMotion) return;

    const timer = window.setInterval(goNext, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [useVideo, prefersReducedMotion, goNext]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  return (
    <div className="hero-swiper-wrap absolute inset-0 z-[1]">
      <div
        className="hero-swiper-stage relative h-full w-full overflow-hidden"
        style={{ touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStartX.current = null;
        }}
      >
        {heroVideos.map((video, index) => {
          const isActive = index === activeIndex;
          const isNext = index === (activeIndex + 1) % TOTAL_SLIDES;
          const shouldLoadVideo = useVideo && (isActive || isNext);

          return (
            <div
              key={video.src}
              className={`hero-swiper-slide-layer absolute inset-0 ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <Image
                src={video.poster}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="hero-swiper-image object-cover object-center"
              />
              {shouldLoadVideo ? (
                <video
                  ref={(element) => {
                    videoRefs.current[index] = element;
                  }}
                  className="hero-swiper-video absolute inset-0 h-full w-full object-cover object-center"
                  muted
                  playsInline
                  preload="auto"
                  poster={video.poster}
                  autoPlay={isActive}
                  onEnded={isActive ? goNext : undefined}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : null}
              <span className="hero-swiper-label">{video.label}</span>
            </div>
          );
        })}
      </div>

      <div className="hero-swiper-pagination">
        {heroVideos.map((video, index) => (
          <button
            key={`${video.src}-dot`}
            type="button"
            aria-label={`Show ${video.label}`}
            onClick={() => setActiveIndex(index)}
            className={`hero-swiper-bullet ${index === activeIndex ? "hero-swiper-bullet-active" : ""}`}
          />
        ))}
      </div>

      <div className="hero-swiper-overlay absolute inset-0" />
      <div className="hero-swiper-shine absolute inset-0" />
    </div>
  );
}
