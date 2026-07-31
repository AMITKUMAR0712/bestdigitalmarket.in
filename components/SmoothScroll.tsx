"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __smoothScroll?: Lenis;
  }
}

const HERO_LERP = 0.055;
const PAGE_LERP = 0.09;
const HERO_WHEEL = 0.72;
const PAGE_WHEEL = 0.95;
/** Mobile: keep Lenis responsive — slow hero lerp was causing card-spread lag */
const MOBILE_LERP = 0.14;
const MOBILE_TOUCH = 1.35;

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const isMobile = window.matchMedia("(max-width: 749px)").matches;

    const lenis = new Lenis({
      autoRaf: false,
      lerp: isMobile ? MOBILE_LERP : PAGE_LERP,
      smoothWheel: true,
      wheelMultiplier: PAGE_WHEEL,
      touchMultiplier: isMobile ? MOBILE_TOUCH : 1.12,
      // Slight touch smoothing on mobile so ScrollTrigger tracks without laggy double-ease
      syncTouch: isMobile,
      syncTouchLerp: isMobile ? 0.16 : 0.075,
    });

    window.__smoothScroll = lenis;

    let heroMode = false;
    const syncHeroFeel = () => {
      // Desktop only — mobile stays snappy for hero card spread
      if (isMobile) return;

      const hero = document.getElementById("home");
      const inHero = Boolean(
        hero &&
          (() => {
            const r = hero.getBoundingClientRect();
            return r.top < window.innerHeight * 0.55 && r.bottom > window.innerHeight * 0.2;
          })(),
      );

      if (inHero === heroMode) return;
      heroMode = inHero;
      lenis.options.lerp = inHero ? HERO_LERP : PAGE_LERP;
      lenis.options.wheelMultiplier = inHero ? HERO_WHEEL : PAGE_WHEEL;
    };

    lenis.on("scroll", () => {
      ScrollTrigger.update();
      syncHeroFeel();
    });

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
      syncHeroFeel();
    };
    window.addEventListener("resize", onResize);
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      syncHeroFeel();
    });

    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      if (window.__smoothScroll === lenis) window.__smoothScroll = undefined;
    };
  }, []);

  useEffect(() => {
    window.__smoothScroll?.resize();
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}

/** Smooth-scroll to an element id (uses Lenis when available). */
export function scrollToId(id: string, offset = -88) {
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = window.__smoothScroll;
  if (lenis) {
    lenis.scrollTo(el, { offset, duration: 1.25, lerp: 0.07 });
    return;
  }

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
