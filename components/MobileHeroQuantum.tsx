"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import type { Mesh, MeshBasicMaterial, Points, PointsMaterial } from "three";
import { heroScrollState } from "@/lib/hero-scroll-state";

const ACCENT = "#ff5722";
/** Keep low for fast mobile load + smooth 60fps feel */
const PARTICLE_COUNT = 700;

type Orientation = { beta: number; gamma: number };

function QuantumCore({
  reduceMotion,
  orientation,
  active,
}: {
  reduceMotion: boolean;
  orientation: MutableRefObject<Orientation>;
  active: boolean;
}) {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<MeshBasicMaterial>(null);
  const particlesRef = useRef<Points>(null);
  const particleMatRef = useRef<PointsMaterial>(null);
  const { camera, invalidate } = useThree();
  const target = useRef({ x: 0, y: 0 });
  const spinBoost = useRef(0);

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 16;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!active) return;

    const mesh = meshRef.current;
    const particles = particlesRef.current;
    const particleMat = particleMatRef.current;
    if (!mesh || !particles) return;

    const p = heroScrollState.progress;
    const ease = p * p * (3 - 2 * p);
    spinBoost.current = 1 + ease * 3.2;
    const cappedDelta = Math.min(delta, 0.05);

    if (!reduceMotion) {
      mesh.rotation.x += cappedDelta * 0.32 * spinBoost.current;
      mesh.rotation.y += cappedDelta * 0.4 * spinBoost.current;
      particles.rotation.y += cappedDelta * (0.07 + ease * 0.4);
    }

    mesh.scale.setScalar(1 + ease * 2.1);
    particles.scale.setScalar(1 + ease * 2.6);

    if (particleMat) {
      particleMat.size = 0.05 + ease * 0.05;
      particleMat.opacity = Math.max(0, 0.8 - ease * 0.7);
    }
    if (materialRef.current) {
      materialRef.current.opacity = Math.max(0.2, 1 - ease * 0.5);
    }

    const tiltMul = Math.max(0, 1 - ease * 1.2);
    const { beta, gamma } = orientation.current;
    target.current.x +=
      (Math.sin((gamma / 90) * (Math.PI / 2)) * 3.6 * tiltMul - target.current.x) * 0.07;
    target.current.y +=
      (Math.sin(((beta - 90) / 90) * (Math.PI / 2)) * 2.8 * tiltMul - target.current.y) * 0.07;

    camera.position.x = target.current.x;
    camera.position.y = target.current.y + ease * 0.65;
    camera.position.z = 5 - ease * 3.2;
    camera.lookAt(0, ease * 0.3, 0);
    invalidate();
  });

  useEffect(() => {
    const mesh = meshRef.current;
    const material = materialRef.current;
    const particles = particlesRef.current;
    const particleMat = particleMatRef.current;
    if (!mesh || !material || !particles || !particleMat) return;

    let shaking = false;

    const triggerGlitch = () => {
      if (shaking || reduceMotion || heroScrollState.progress > 0.35) return;
      shaking = true;
      gsap.to(mesh.scale, { x: 1.18, y: 1.18, z: 1.18, duration: 0.08, yoyo: true, repeat: 1 });
      gsap.to(particleMat, { size: 0.08, duration: 0.08, yoyo: true, repeat: 1 });
      gsap.to(particles.rotation, {
        x: Math.random() * 1.2,
        y: Math.random() * 1.2,
        duration: 0.35,
      });
      gsap.to(mesh.position, {
        x: Math.random() * 0.2 - 0.1,
        y: Math.random() * 0.2 - 0.1,
        duration: 0.08,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          shaking = false;
        },
      });
    };

    const onMotion = (event: DeviceMotionEvent) => {
      const a = event.accelerationIncludingGravity;
      if (!a) return;
      const threshold = 15;
      if (
        Math.abs(a.x ?? 0) > threshold ||
        Math.abs(a.y ?? 0) > threshold ||
        Math.abs(a.z ?? 0) > threshold
      ) {
        triggerGlitch();
      }
    };

    window.addEventListener("devicemotion", onMotion, { passive: true });
    return () => window.removeEventListener("devicemotion", onMotion);
  }, [reduceMotion]);

  return (
    <>
      <ambientLight intensity={0.9} />
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.35, 0]} />
        <meshBasicMaterial ref={materialRef} color={ACCENT} transparent opacity={1} />
      </mesh>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={particleMatRef}
          color={ACCENT}
          size={0.05}
          sizeAttenuation
          transparent
          opacity={0.8}
          depthWrite={false}
        />
      </points>
    </>
  );
}

function scheduleIdle(cb: () => void) {
  if (typeof window === "undefined") return () => undefined;

  const ric = (
    window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    }
  ).requestIdleCallback;

  if (typeof ric === "function") {
    const id = ric(cb, { timeout: 900 });
    return () => {
      (
        window as Window & {
          cancelIdleCallback?: (handle: number) => void;
        }
      ).cancelIdleCallback?.(id);
    };
  }

  const id = window.setTimeout(cb, 180);
  return () => window.clearTimeout(id);
}

export function MobileHeroQuantum() {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [needsPermission, setNeedsPermission] = useState(false);
  const orientation = useRef<Orientation>({ beta: 0, gamma: 0 });
  const tiltAttached = useRef(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 750px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setEnabled(mobile.matches);
      setReduceMotion(motion.matches);
      if (!mobile.matches) {
        heroScrollState.progress = 0;
        setReady(false);
      }
    };
    sync();

    mobile.addEventListener("change", sync);
    motion.addEventListener("change", sync);
    return () => {
      mobile.removeEventListener("change", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  // Let text/CTAs paint first, then mount WebGL
  useEffect(() => {
    if (!enabled || reduceMotion) {
      setReady(false);
      return;
    }
    return scheduleIdle(() => setReady(true));
  }, [enabled, reduceMotion]);

  // Pause render loop when hero off-screen or tab hidden
  useEffect(() => {
    if (!enabled || !ready) return;
    const node = wrapRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio > 0.08),
      { threshold: [0, 0.08, 0.2] },
    );
    io.observe(node);

    const onVis = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [enabled, ready]);

  useEffect(() => {
    if (!enabled) return;

    const onOrientation = (event: DeviceOrientationEvent) => {
      orientation.current.beta = event.beta ?? 0;
      orientation.current.gamma = event.gamma ?? 0;
    };

    const DOE = DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<"granted" | "denied" | "prompt">;
    };

    if (typeof DOE.requestPermission === "function") {
      setNeedsPermission(true);
      return;
    }

    window.addEventListener("deviceorientation", onOrientation, { passive: true });
    return () => window.removeEventListener("deviceorientation", onOrientation);
  }, [enabled]);

  const requestTilt = async () => {
    try {
      const DOE = DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<"granted" | "denied" | "prompt">;
      };
      if (typeof DOE.requestPermission !== "function") return;
      const state = await DOE.requestPermission();
      if (state === "granted" && !tiltAttached.current) {
        const onOrientation = (event: DeviceOrientationEvent) => {
          orientation.current.beta = event.beta ?? 0;
          orientation.current.gamma = event.gamma ?? 0;
        };
        window.addEventListener("deviceorientation", onOrientation, { passive: true });
        tiltAttached.current = true;
        setNeedsPermission(false);
      }
    } catch {
      setNeedsPermission(false);
    }
  };

  if (!enabled) return null;

  const active = ready && visible && !reduceMotion;

  return (
    <div ref={wrapRef} className="hero-quantum" aria-hidden="true">
      {ready && !reduceMotion ? (
        <Canvas
          className="hero-quantum-canvas"
          camera={{ position: [0, 0, 5], fov: 70, near: 0.2, far: 40 }}
          dpr={1}
          frameloop={active ? "always" : "never"}
          gl={{
            alpha: true,
            antialias: false,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor("#000000", 0);
            gl.setPixelRatio(1);
          }}
          performance={{ min: 0.35 }}
        >
          <QuantumCore reduceMotion={reduceMotion} orientation={orientation} active={active} />
        </Canvas>
      ) : null}

      {needsPermission ? (
        <button type="button" className="hero-quantum-permission" onClick={requestTilt}>
          Enable motion — tilt phone
        </button>
      ) : null}
    </div>
  );
}
