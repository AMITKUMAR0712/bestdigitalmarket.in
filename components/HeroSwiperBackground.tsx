"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { heroSliderImages } from "@/lib/hero-slider-images";

const INTERVAL_MS = 14000;

export function HeroSwiperBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    heroSliderImages.forEach((image) => {
      const preload = new window.Image();
      preload.src = image.src;
    });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSliderImages.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <div className="hero-swiper-wrap absolute inset-0 z-[1]">
      <div className="hero-swiper-stage relative h-full w-full overflow-hidden">
        {heroSliderImages.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={image.src}
              className={`hero-swiper-slide-layer absolute inset-0 ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <Image
                src={image.src}
                alt=""
                fill
                priority={index < 3}
                sizes="100vw"
                className="hero-swiper-image object-cover object-center"
              />
              <span className="hero-swiper-label">{image.label}</span>
            </div>
          );
        })}
      </div>

      <div className="hero-swiper-pagination" aria-hidden="true">
        {heroSliderImages.map((image, index) => (
          <span
            key={`${image.src}-dot`}
            className={`hero-swiper-bullet ${index === activeIndex ? "hero-swiper-bullet-active" : ""}`}
          />
        ))}
      </div>

      <div className="hero-swiper-overlay absolute inset-0" />
      <div className="hero-swiper-shine absolute inset-0" />
    </div>
  );
}
