"use client";

import { useEffect, useRef } from "react";

type LiquidBackgroundApp = {
  loadImage: (url: string) => void;
  setRain?: (enabled: boolean) => void;
  destroy?: () => void;
  dispose?: () => void;
  liquidPlane?: {
    material?: {
      metalness?: number;
      roughness?: number;
    };
    uniforms?: {
      displacementScale?: {
        value: number;
      };
    };
  };
};

type LiquidBackgroundModule = {
  default: (canvas: HTMLCanvasElement) => LiquidBackgroundApp;
};

const liquidModuleUrl = "https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js";

function createTextFreeLiquidTexture() {
  const textureCanvas = document.createElement("canvas");
  const width = 720;
  const height = 405;
  const context = textureCanvas.getContext("2d");

  textureCanvas.width = width;
  textureCanvas.height = height;

  if (!context) {
    return textureCanvas.toDataURL("image/png");
  }

  const background = context.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, "#050714");
  background.addColorStop(0.38, "#071827");
  background.addColorStop(0.68, "#1a0d2c");
  background.addColorStop(1, "#050714");

  context.fillStyle = background;
  context.fillRect(0, 0, width, height);

  const tealGlow = context.createRadialGradient(width * 0.22, height * 0.2, 0, width * 0.22, height * 0.2, width * 0.34);
  tealGlow.addColorStop(0, "rgba(45, 212, 191, 0.42)");
  tealGlow.addColorStop(1, "rgba(45, 212, 191, 0)");
  context.fillStyle = tealGlow;
  context.fillRect(0, 0, width, height);

  const purpleGlow = context.createRadialGradient(width * 0.82, height * 0.18, 0, width * 0.82, height * 0.18, width * 0.38);
  purpleGlow.addColorStop(0, "rgba(217, 70, 239, 0.38)");
  purpleGlow.addColorStop(1, "rgba(217, 70, 239, 0)");
  context.fillStyle = purpleGlow;
  context.fillRect(0, 0, width, height);

  return textureCanvas.toDataURL("image/png");
}

export function LiquidHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let app: LiquidBackgroundApp | null = null;
    let cancelled = false;

    async function initLiquidBackground() {
      try {
        const liquidModule = (await import(/* webpackIgnore: true */ liquidModuleUrl)) as LiquidBackgroundModule;

        if (cancelled || !canvas) return;

        app = liquidModule.default(canvas);
        app.loadImage(createTextFreeLiquidTexture());

        if (app.liquidPlane?.material) {
          app.liquidPlane.material.metalness = 0.75;
          app.liquidPlane.material.roughness = 0.25;
        }

        if (app.liquidPlane?.uniforms?.displacementScale) {
          app.liquidPlane.uniforms.displacementScale.value = 3.2;
        }

        app.setRain?.(false);
      } catch {
        // Keep the layered CSS fallback visible if the CDN animation cannot load.
      }
    }

    initLiquidBackground();

    return () => {
      cancelled = true;
      app?.destroy?.();
      app?.dispose?.();
      app = null;
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,#1b2735_0%,#090a0f_62%,#050714_100%)]" />
      <div className="hero-liquid-fallback absolute inset-0 z-[1]" />
      <canvas
        ref={canvasRef}
        className="absolute left-1/2 top-1/2 z-[2] h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 scale-[1.66] transform-gpu opacity-95 mix-blend-screen saturate-150 will-change-transform sm:h-[78%] sm:w-[78%] sm:scale-[1.5] lg:h-[84%] lg:w-[84%] lg:scale-[1.34]"
      />
      <div className="hero-star-layer hero-stars-small z-[3]" />
      <div className="hero-star-layer hero-stars-medium z-[3]" />
      <div className="hero-star-layer hero-stars-large z-[3]" />
      <span className="hero-shooting-star left-[6%] top-[18%] z-[4] sm:left-[14%]" />
      <span className="hero-shooting-star left-[58%] top-[12%] z-[4] animation-delay-2" />
      <span className="hero-shooting-star left-[32%] top-[44%] z-[4] animation-delay-4" />
      <div className="absolute inset-0 z-[5] bg-[radial-gradient(circle_at_20%_14%,rgba(45,212,191,0.16),transparent_26rem),radial-gradient(circle_at_82%_12%,rgba(217,70,239,0.16),transparent_30rem),linear-gradient(90deg,rgba(5,7,20,0.76),rgba(5,7,20,0.36)_46%,rgba(5,7,20,0.58)),linear-gradient(180deg,rgba(5,7,20,0.02),rgba(5,7,20,0.68)_84%,rgba(5,7,20,0.96))]" />
      <div className="absolute inset-0 z-[6] bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[length:58px_58px] opacity-20 [mask-image:radial-gradient(circle_at_50%_24%,black,transparent_74%)]" />
    </div>
  );
}
