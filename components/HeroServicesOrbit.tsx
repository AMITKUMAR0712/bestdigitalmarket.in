"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FiArrowUpRight, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { heroServiceCards } from "@/lib/hero-service-cards";
import { companyTrust } from "@/lib/data";
import { callLink, whatsappLink } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const SMALL_WORDS = ["Websites,", "Software", "&", "AI,"] as const;
const BIG_LINE = "Built To Grow Your Business.";
const SCROLL_MOVES = [
  { x: -520, y: -90, rot: -38 },
  { x: -420, y: 30, rot: -30 },
  { x: -320, y: 110, rot: -22 },
  { x: -200, y: 180, rot: -14 },
  { x: -90, y: 230, rot: -6 },
  { x: 40, y: 250, rot: 4 },
  { x: 160, y: 210, rot: 12 },
  { x: 280, y: 150, rot: 20 },
  { x: 390, y: 80, rot: 28 },
  { x: 480, y: 10, rot: 34 },
  { x: 560, y: -70, rot: 40 },
];

type HeroServicesOrbitProps = {
  className?: string;
};

export function HeroServicesOrbit({ className = "" }: HeroServicesOrbitProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".hero-orbit-card", root);
      const letters = gsap.utils.toArray<HTMLElement>(".hero-orbit-letter", root);
      const words = gsap.utils.toArray<HTMLElement>(".hero-orbit-word > span", root);
      const navBits = gsap.utils.toArray<HTMLElement>(".hero-orbit-reveal", root);
      const subline = root.querySelector<HTMLElement>(".hero-orbit-subline");
      const smallTeam = root.querySelector<HTMLElement>(".hero-orbit-small");
      const bigResults = root.querySelector<HTMLElement>(".hero-orbit-big");

      if (reduceMotion) {
        gsap.set([navBits, words, letters, cards, subline], {
          clearProps: "all",
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotation: 0,
        });
        cards.forEach((card) => {
          const rot = parseFloat(card.dataset.rot || "0");
          gsap.set(card, { rotation: rot, opacity: 1, y: 0, scale: 1 });
        });
        return;
      }

      gsap.set(navBits, { opacity: 0, y: -16 });
      gsap.set(words, { y: "105%" });
      gsap.set(letters, { y: 80, opacity: 0 });
      gsap.set(subline, { opacity: 0, y: 20 });

      cards.forEach((card) => {
        const rot = parseFloat(card.dataset.rot || "0");
        card.dataset.restRot = String(rot);
        gsap.set(card, { y: -720, rotation: rot + 25, opacity: 0, scale: 0.7 });
      });

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .to(navBits, { opacity: 1, y: 0, duration: 0.75, stagger: 0.06 }, 0.1)
        .to(words, { y: "0%", duration: 0.9, stagger: 0.08 }, 0.28)
        .to(
          letters,
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.028,
            ease: "back.out(1.5)",
          },
          0.5,
        )
        .to(
          cards,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: (_i, el) => parseFloat((el as HTMLElement).dataset.restRot || "0"),
            duration: 1.05,
            stagger: { each: 0.06, from: "center" },
            ease: "back.out(1.35)",
          },
          0.72,
        )
        .to(subline, { opacity: 1, y: 0, duration: 0.75 }, 1.45);

      const floatTweens = cards.map((card, i) => {
        const rot = parseFloat(card.dataset.restRot || "0");
        return gsap.to(card, {
          y: `+=${8 + (i % 3) * 5}`,
          rotation: rot + (i % 2 === 0 ? 1.5 : -1.5),
          duration: 3 + (i % 4) * 0.5,
          delay: 1.7 + i * 0.08,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      let mx = 0;
      let my = 0;
      let tx = 0;
      let ty = 0;

      const onMove = (e: MouseEvent) => {
        const r = root.getBoundingClientRect();
        mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      };
      const onLeave = () => {
        mx = 0;
        my = 0;
      };

      const isMobileHero = window.matchMedia("(max-width: 749px)").matches;

      const parallax = () => {
        if (isMobileHero) return;
        tx += (mx - tx) * 0.05;
        ty += (my - ty) * 0.05;
        cards.forEach((card) => {
          const d = parseFloat(card.dataset.depth || "8");
          card.style.translate = `${tx * d}px ${ty * d * 0.5}px`;
        });
        raf = requestAnimationFrame(parallax);
      };

      if (!isMobileHero) {
        root.addEventListener("mousemove", onMove);
        root.addEventListener("mouseleave", onLeave);
        raf = requestAnimationFrame(parallax);
        cleanups.push(() => {
          cancelAnimationFrame(raf);
          root.removeEventListener("mousemove", onMove);
          root.removeEventListener("mouseleave", onLeave);
        });
      }

      let stopCycle: (() => void) | null = null;
      let startCycle: (() => void) | null = null;

      if (isMobileHero) {
        let activeIndex = 0;
        let cycleTimer: ReturnType<typeof setInterval> | null = null;
        let startDelay: gsap.core.Tween | null = null;

        const clearActive = () => {
          cards.forEach((card) => card.classList.remove("is-active"));
        };

        const activate = (index: number) => {
          cards.forEach((card, i) => {
            card.classList.toggle("is-active", i === index);
          });
        };

        stopCycle = () => {
          if (cycleTimer) {
            clearInterval(cycleTimer);
            cycleTimer = null;
          }
          startDelay?.kill();
          startDelay = null;
          clearActive();
        };

        startCycle = () => {
          if (cycleTimer) return;
          activate(activeIndex);
          cycleTimer = setInterval(() => {
            activeIndex = (activeIndex + 1) % cards.length;
            activate(activeIndex);
          }, 1450);
        };

        startDelay = gsap.delayedCall(2.15, () => {
          const io = new IntersectionObserver(
            ([entry]) => {
              if (entry?.isIntersecting) startCycle?.();
              else stopCycle?.();
            },
            { threshold: 0.25 },
          );
          io.observe(root);
          cleanups.push(() => {
            io.disconnect();
            stopCycle?.();
          });
        });
        cleanups.push(() => {
          startDelay?.kill();
          stopCycle?.();
        });
      } else {
        cards.forEach((card) => {
          const restRot = parseFloat(card.dataset.restRot || "0");
          const onCardMove = (e: MouseEvent) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            gsap.to(card, {
              rotateX: -py * 14,
              rotateY: px * 14,
              scale: 1.1,
              zIndex: 30,
              duration: 0.35,
              ease: "power2.out",
              transformPerspective: 700,
              overwrite: "auto",
            });
          };
          const onCardLeave = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              rotation: restRot,
              zIndex: Number(card.dataset.z || 1),
              duration: 0.75,
              ease: "elastic.out(1, 0.6)",
              overwrite: "auto",
            });
          };
          card.addEventListener("mousemove", onCardMove);
          card.addEventListener("mouseleave", onCardLeave);
          cleanups.push(() => {
            card.removeEventListener("mousemove", onCardMove);
            card.removeEventListener("mouseleave", onCardLeave);
          });
        });
      }

      // Mobile: short runway + instant scrub so a light swipe spreads cards immediately
      const scrollEnd = isMobileHero
        ? () => `+=${Math.round(Math.min(window.innerHeight * 0.42, 360))}`
        : () => `+=${Math.round(window.innerHeight * 1.35)}`;
      const moveScale = isMobileHero ? 0.62 : 1.12;
      let floatsPaused = false;

      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: scrollEnd,
        scrub: isMobileHero ? true : 0.35,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          const ease = isMobileHero
            ? Math.min(1, Math.pow(p, 0.52)) // front-loaded — tiny scroll still spreads
            : p < 0.5
              ? 2 * p * p
              : 1 - Math.pow(-2 * p + 2, 2) / 2;

          if (p > 0.015) {
            if (!floatsPaused) {
              floatTweens.forEach((t) => t.pause());
              floatsPaused = true;
            }
            stopCycle?.();
          } else if (floatsPaused) {
            floatTweens.forEach((t) => t.resume());
            floatsPaused = false;
            if (isMobileHero) startCycle?.();
          }

          if (bigResults) {
            gsap.set(bigResults, {
              scale: 1 + (isMobileHero ? 0.18 : 0.28) * ease,
              opacity: 1 - (isMobileHero ? 0.4 : 0.5) * ease,
              force3D: true,
            });
          }
          if (smallTeam) {
            gsap.set(smallTeam, {
              y: (isMobileHero ? -48 : -90) * ease,
              opacity: Math.max(0, 1 - ease * 1.55),
              force3D: true,
            });
          }
          cards.forEach((card, i) => {
            const m = SCROLL_MOVES[i] ?? SCROLL_MOVES[SCROLL_MOVES.length - 1];
            const rest = parseFloat(card.dataset.restRot || "0");
            gsap.set(card, {
              x: m.x * ease * moveScale,
              y: m.y * ease * moveScale,
              rotation: rest + m.rot * ease,
              scale: 1 - (isMobileHero ? 0.1 : 0.14) * ease,
              opacity: Math.max(isMobileHero ? 0.2 : 0.12, 1 - 0.62 * ease),
              force3D: true,
            });
          });
          if (subline) gsap.set(subline, { opacity: Math.max(0, 1 - ease * 2.4) });
        },
        onRefresh: () => {
          window.__smoothScroll?.resize();
        },
      });

      // After intro settles, remeasure so Lenis + ScrollTrigger stay locked
      gsap.delayedCall(2.4, () => {
        ScrollTrigger.refresh();
        window.__smoothScroll?.resize();
      });

      const bigWrap = root.querySelector(".hero-orbit-big-wrap");
      if (bigWrap) {
        const onEnter = () => {
          gsap.to(letters, { y: -8, duration: 0.45, stagger: 0.02, ease: "back.out(1.5)" });
        };
        const onExit = () => {
          gsap.to(letters, { y: 0, duration: 0.55, stagger: 0.02, ease: "elastic.out(1, 0.6)" });
        };
        bigWrap.addEventListener("mouseenter", onEnter);
        bigWrap.addEventListener("mouseleave", onExit);
        cleanups.push(() => {
          bigWrap.removeEventListener("mouseenter", onEnter);
          bigWrap.removeEventListener("mouseleave", onExit);
        });
      }
    }, root);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="home"
      className={`hero-section hero-orbit relative overflow-x-hidden ${className}`.trim()}
    >
      <div className="hero-orbit-bg" aria-hidden="true" />
      <div className="hero-orbit-grain" aria-hidden="true" />

      <div className="hero-orbit-inner">
        <div className="hero-orbit-reveal hero-orbit-badge mx-auto mb-4 sm:mb-5">
          <span className="hero-orbit-badge-border" aria-hidden="true" />
          <span className="hero-orbit-badge-dot" aria-hidden="true" />
          <span className="hero-orbit-badge-label">Trusted IT &amp; AI Software Company · All Over India</span>
        </div>

        <h1 className="hero-orbit-heading">
          <span className="hero-orbit-small">
            {SMALL_WORDS.map((word, index) => (
              <span key={word}>
                {index > 0 ? "\u00A0" : null}
                <span className="hero-orbit-word">
                  <span>{word}</span>
                </span>
              </span>
            ))}
          </span>
          <span className="hero-orbit-big-wrap">
            <span className="hero-orbit-big">
              {BIG_LINE.split("").map((char, i) => (
                <span key={`${char}-${i}`} className="hero-orbit-letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </span>
        </h1>

        <div className="hero-orbit-cards" aria-label="Our services">
          {heroServiceCards.map((card, index) => (
            <Link
              key={card.id}
              href="/services"
              className={`hero-orbit-card hero-orbit-card-${index + 1}`}
              data-rot={card.rot}
              data-depth={card.depth}
              data-z={index + 1}
              style={{ zIndex: index + 1 }}
              aria-label={`${card.label} — open services`}
            >
              <div className="hero-orbit-card-media">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(max-width: 750px) 140px, 220px"
                  className="hero-orbit-card-img object-cover object-center"
                  priority={index < 4}
                />
              </div>
              <div className="hero-orbit-card-shade" aria-hidden="true" />
              <div className="hero-orbit-card-content">
                <h3 className="hero-orbit-card-title">{card.label}</h3>
                <p className="hero-orbit-card-copy">{card.copy}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="hero-orbit-subline">
          <div className="hero-orbit-cta-row">
            <a href={callLink} className="hero-orbit-cta hero-orbit-cta-primary">
              <FiPhoneCall />
              Call now
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="hero-orbit-cta hero-orbit-cta-wa">
              <FaWhatsapp />
              WhatsApp
            </a>
            <Link href="/contact#enquiry-form" className="hero-orbit-cta hero-orbit-cta-secondary">
              Get free quote
            </Link>
          </div>
          <Link href="/services" className="hero-orbit-pill">
            <span className="hero-orbit-pill-border" aria-hidden="true" />
            <span className="hero-orbit-pill-label">View all services</span>
            <span className="hero-orbit-pill-ar" aria-hidden="true">
              <FiArrowUpRight />
            </span>
          </Link>
          <p className="hero-orbit-subline-text">
            {companyTrust.teamExperts} experts · {companyTrust.projectsDelivered} projects · Free consultation
          </p>
        </div>
      </div>
    </section>
  );
}
