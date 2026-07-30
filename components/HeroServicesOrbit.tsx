"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { heroServiceCards } from "@/lib/hero-service-cards";
import { companyTrust } from "@/lib/data";
import { heroScrollState } from "@/lib/hero-scroll-state";
import { heroScrollStory } from "@/lib/hero-scroll-story";
import { callLink, whatsappLink } from "@/lib/site";

const MobileHeroQuantum = dynamic(
  () => import("@/components/MobileHeroQuantum").then((m) => m.MobileHeroQuantum),
  { ssr: false, loading: () => null },
);

const MobileHeroTypewriter = dynamic(
  () => import("@/components/MobileHeroTypewriter").then((m) => m.MobileHeroTypewriter),
  { ssr: false, loading: () => (
    <span className="hero-mobile-type">
      <span className="hero-mobile-type-line1">Websites, Software &amp; AI,</span>
      <span className="hero-mobile-type-line2">Built to grow your business</span>
    </span>
  ) },
);

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
  const [showOrbitCards, setShowOrbitCards] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 750px)");
    const sync = () => setShowOrbitCards(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobileHero = window.matchMedia("(max-width: 750px)").matches;
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

      if (isMobileHero) {
        gsap.set([navBits, words, letters, subline].flat().filter(Boolean), {
          clearProps: "all",
          opacity: 1,
          y: 0,
          x: 0,
        });
        gsap.set(words, { y: "0%" });

        if (reduceMotion) return;

        const mobileHeading = root.querySelector<HTMLElement>(".hero-mobile-type");
        const mobileBits = [navBits, mobileHeading, subline].flat().filter(Boolean);
        gsap.fromTo(
          mobileBits,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: "power3.out", delay: 0.15 },
        );

        const badge = root.querySelector<HTMLElement>(".hero-orbit-badge");
        const headingWrap = root.querySelector<HTMLElement>(".hero-orbit-heading");
        const heading = root.querySelector<HTMLElement>(".hero-mobile-type");
        const shakeHint = root.querySelector<HTMLElement>(".hero-shake-hint");
        const bg = root.querySelector<HTMLElement>(".hero-orbit-bg");
        const story = root.querySelector<HTMLElement>(".hero-scroll-story");
        const storyCards = gsap.utils.toArray<HTMLElement>(".hero-scroll-story-card", root);
        const warm = root.querySelector<HTMLElement>(".hero-orbit-warm");
        const hideOnStory = [badge, headingWrap, heading, shakeHint, subline].filter(Boolean);

        gsap.set(story, { opacity: 0, visibility: "hidden", pointerEvents: "none" });
        gsap.set(storyCards, { opacity: 0, y: 28, scale: 0.96, visibility: "hidden" });
        gsap.set(warm, { opacity: 0 });

        const buildScroll = (quantum: HTMLElement | null) => {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "+=240%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                heroScrollState.progress = self.progress;
                root.style.setProperty("--hero-scroll", String(self.progress));
                root.classList.toggle("hero-orbit--story", self.progress > 0.12);
              },
              onRefresh: (self) => {
                heroScrollState.progress = self.progress;
                root.classList.toggle("hero-orbit--story", self.progress > 0.12);
              },
            },
          });

          // Hide typewriter/CTAs fully BEFORE story shows (no overlap)
          scrollTl
            .to(
              hideOnStory,
              { opacity: 0, y: -28, filter: "blur(8px)", ease: "none", duration: 0.16 },
              0,
            )
            .set(hideOnStory, { visibility: "hidden", pointerEvents: "none" }, 0.16)
            .to(warm, { opacity: 1, ease: "none", duration: 0.28 }, 0.08)
            .to(bg, { opacity: 0.22, ease: "none", duration: 0.28 }, 0.08)
            .set(story, { visibility: "visible" }, 0.18)
            .to(story, { opacity: 1, ease: "none", duration: 0.12 }, 0.18);

          if (quantum) {
            scrollTl.to(
              quantum,
              { scale: 1.45, opacity: 0.1, filter: "blur(4px)", ease: "none", duration: 0.85 },
              0,
            );
          }

          const last = storyCards.length - 1;
          let cursor = 0.22;

          storyCards.forEach((card, i) => {
            const isFirst = i === 0;
            const isLast = i === last;
            const fadeIn = 0.07;
            const hold = isFirst ? 0.26 : isLast ? 0.42 : 0.14;
            const fadeOut = isLast ? 0 : 0.07;
            const start = cursor;

            scrollTl
              .set(card, { visibility: "visible" }, start)
              .fromTo(
                card,
                { opacity: 0, y: 28, scale: 0.96 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  ease: "none",
                  duration: fadeIn,
                  immediateRender: false,
                },
                start,
              );

            if (!isLast) {
              scrollTl
                .to(
                  card,
                  { opacity: 0, y: -22, scale: 1.02, ease: "none", duration: fadeOut },
                  start + fadeIn + hold,
                )
                .set(card, { visibility: "hidden" }, start + fadeIn + hold + fadeOut);
              cursor = start + fadeIn + hold + fadeOut + 0.02;
            } else {
              scrollTl.to(
                card,
                { opacity: 1, y: 0, scale: 1, ease: "none", duration: Math.max(hold, 0.4) },
                start + fadeIn,
              );
            }
          });
        };

        const existingQuantum = root.querySelector<HTMLElement>(".hero-quantum");
        if (existingQuantum) {
          buildScroll(existingQuantum);
        } else {
          let tries = 0;
          const wait = window.setInterval(() => {
            const q = root.querySelector<HTMLElement>(".hero-quantum");
            tries += 1;
            if (q || tries > 40) {
              window.clearInterval(wait);
              buildScroll(q);
            }
          }, 50);
          cleanups.push(() => window.clearInterval(wait));
        }

        return;
      }

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

      cards.forEach((card, i) => {
        const rot = parseFloat(card.dataset.restRot || "0");
        gsap.to(card, {
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

      const parallax = () => {
        tx += (mx - tx) * 0.05;
        ty += (my - ty) * 0.05;
        cards.forEach((card) => {
          const d = parseFloat(card.dataset.depth || "8");
          card.style.translate = `${tx * d}px ${ty * d * 0.5}px`;
        });
        raf = requestAnimationFrame(parallax);
      };

      root.addEventListener("mousemove", onMove);
      root.addEventListener("mouseleave", onLeave);
      raf = requestAnimationFrame(parallax);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        root.removeEventListener("mousemove", onMove);
        root.removeEventListener("mouseleave", onLeave);
      });

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

      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom+=20% top",
        scrub: 0.9,
        onUpdate: (self) => {
          const p = self.progress;
          const ease = p * p * (3 - 2 * p); // smoothstep — stronger mid/late spread
          if (bigResults) gsap.set(bigResults, { scale: 1 + 0.22 * ease, opacity: 1 - 0.45 * ease });
          if (smallTeam) gsap.set(smallTeam, { y: -70 * ease, opacity: Math.max(0, 1 - ease * 1.5) });
          cards.forEach((card, i) => {
            const m = SCROLL_MOVES[i] ?? SCROLL_MOVES[SCROLL_MOVES.length - 1];
            const rest = parseFloat(card.dataset.restRot || "0");
            gsap.set(card, {
              x: m.x * ease,
              y: m.y * ease,
              rotation: rest + m.rot * ease,
              scale: 1 - 0.12 * ease,
              opacity: Math.max(0.15, 1 - 0.55 * ease),
            });
          });
          if (subline) gsap.set(subline, { opacity: Math.max(0, 1 - ease * 2.2) });
        },
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
      heroScrollState.progress = 0;
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
      <div className="hero-orbit-warm" aria-hidden="true" />
      <div className="hero-orbit-grain" aria-hidden="true" />
      <MobileHeroQuantum />
      <p className="hero-shake-hint">Shake your phone</p>

      <div className="hero-orbit-inner">
        <div className="hero-orbit-reveal hero-orbit-badge mx-auto mb-4 sm:mb-5">
          <span className="hero-orbit-badge-border" aria-hidden="true" />
          <span className="hero-orbit-badge-dot" aria-hidden="true" />
          <span className="hero-orbit-badge-label">Trusted IT &amp; AI Software Company · All Over India</span>
        </div>

        <h1 className="hero-orbit-heading">
          <span className="hero-orbit-heading-desktop">
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
          </span>
          <span className="hero-orbit-heading-mobile">
            <MobileHeroTypewriter />
          </span>
        </h1>

        <div className="hero-scroll-story" aria-hidden="true">
          {heroScrollStory.map((item) => (
            <div key={item.title} className="hero-scroll-story-card">
              <p className="hero-scroll-story-kicker">{item.kicker}</p>
              <p className="hero-scroll-story-title">{item.title}</p>
              <p className="hero-scroll-story-copy">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="hero-orbit-cards" aria-label="Our services">
          {showOrbitCards
            ? heroServiceCards.map((card, index) => (
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
                      priority={index < 3}
                    />
                  </div>
                  <div className="hero-orbit-card-shade" aria-hidden="true" />
                  <div className="hero-orbit-card-content">
                    <h3 className="hero-orbit-card-title">{card.label}</h3>
                    <p className="hero-orbit-card-copy">{card.copy}</p>
                  </div>
                </Link>
              ))
            : null}
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
