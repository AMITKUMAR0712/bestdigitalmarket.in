"use client";

import { useEffect, useRef } from "react";

type ParticleOptions = {
  particleColor: string;
  velocity: number;
  density: number;
  linkDistance: number;
  interactive: boolean;
};

class Particle {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  color: string;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, color: string, velocity: number) {
    this.canvas = canvas;
    this.context = context;
    this.color = color;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * velocity,
      y: (Math.random() - 0.5) * velocity,
    };
  }

  update() {
    if (this.x > this.canvas.width + 20 || this.x < -20) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y > this.canvas.height + 20 || this.y < -20) {
      this.velocity.y = -this.velocity.y;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.globalAlpha = 0.85;
    this.context.arc(this.x, this.y, 2, 0, Math.PI * 2);
    this.context.fill();
  }
}

function getVelocity(speed: "slow" | "medium" | "fast") {
  if (speed === "fast") return 1.35;
  if (speed === "slow") return 0.33;
  return 0.66;
}

function getDensity(base: number, width: number, height: number) {
  const area = width * height;
  if (width < 640) return Math.max(base * 1.8, 18000);
  if (width < 1024) return Math.max(base * 1.35, 14000);
  return base;
}

export function ParticleCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef<Particle | null>(null);
  const optionsRef = useRef<ParticleOptions>({
    particleColor: "#9b5540",
    velocity: getVelocity("fast"),
    density: 10000,
    linkDistance: 120,
    interactive: true,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const options = optionsRef.current;
    options.interactive = !reducedMotion && !isCoarsePointer;

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    const resize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      const density = getDensity(options.density, width, height);
      const count = Math.floor((width * height) / density);
      particlesRef.current = Array.from({ length: count }, () => new Particle(canvas, context, options.particleColor, options.velocity));

      if (options.interactive) {
        const pointer = new Particle(canvas, context, options.particleColor, 0);
        pointer.velocity = { x: 0, y: 0 };
        pointerRef.current = pointer;
        particlesRef.current.push(pointer);
      } else {
        pointerRef.current = null;
      }
    };

    const drawLinks = (particles: Particle[]) => {
      for (let index = 0; index < particles.length; index += 1) {
        for (let inner = particles.length - 1; inner > index; inner -= 1) {
          const distance = Math.hypot(particles[index].x - particles[inner].x, particles[index].y - particles[inner].y);
          if (distance > options.linkDistance) continue;

          context.beginPath();
          context.strokeStyle = options.particleColor;
          context.globalAlpha = ((options.linkDistance - distance) / options.linkDistance) * 0.48;
          context.lineWidth = 0.85;
          context.moveTo(particles[index].x, particles[index].y);
          context.lineTo(particles[inner].x, particles[inner].y);
          context.stroke();
        }
      }
    };

    const update = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawLinks(particles);
      animationRef.current = window.requestAnimationFrame(update);
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
      }, 200);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const pointer = pointerRef.current;
      if (!pointer) return;

      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    resize();
    if (!reducedMotion) {
      animationRef.current = window.requestAnimationFrame(update);
    }

    window.addEventListener("resize", handleResize);
    if (options.interactive) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    return () => {
      window.cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div ref={containerRef} className="particle-hero-canvas-wrap absolute inset-0">
      <canvas ref={canvasRef} id="particle-canvas" className="particle-canvas h-full w-full" aria-hidden="true" />
    </div>
  );
}
