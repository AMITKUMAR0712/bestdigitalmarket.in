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

/** Shared smooth feel — tuned for laptop + mobile */
function applyDeviceOptions(lenis: Lenis, isMobile: boolean) {
  lenis.options.lerp = isMobile ? 0.1 : 0.075;
  lenis.options.wheelMultiplier = isMobile ? 0.9 : 1;
  lenis.options.touchMultiplier = isMobile ? 1.4 : 1.2;
  lenis.options.syncTouch = isMobile;
  lenis.options.syncTouchLerp = isMobile ? 0.12 : 0.1;
}

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const mobileMq = window.matchMedia("(max-width: 749px)");

    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      lerp: mobileMq.matches ? 0.1 : 0.075,
      wheelMultiplier: mobileMq.matches ? 0.9 : 1,
      touchMultiplier: mobileMq.matches ? 1.4 : 1.2,
      syncTouch: mobileMq.matches,
      syncTouchLerp: mobileMq.matches ? 0.12 : 0.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    window.__smoothScroll = lenis;
    document.documentElement.classList.add("lenis", "lenis-smooth");

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const onMobileChange = () => {
      applyDeviceOptions(lenis, mobileMq.matches);
      lenis.resize();
      ScrollTrigger.refresh();
    };
    mobileMq.addEventListener("change", onMobileChange);

    const onResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);
    requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    return () => {
      mobileMq.removeEventListener("change", onMobileChange);
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(onTick);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
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
    lenis.scrollTo(el, { offset, duration: 1.2, lerp: 0.08 });
    return;
  }

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
