"use client";

import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

const metricFrames = [
  {
    metrics: [
      { label: "Live Leads", value: "148", trend: "+18%" },
      { label: "Avg. CPC", value: "₹21", trend: "-12%" },
      { label: "ROAS", value: "5.8x", trend: "+34%" },
    ],
    summary: { visits: "2.4k", calls: "38", forms: "17" },
  },
  {
    metrics: [
      { label: "Live Leads", value: "152", trend: "+21%" },
      { label: "Avg. CPC", value: "₹19", trend: "-15%" },
      { label: "ROAS", value: "6.1x", trend: "+39%" },
    ],
    summary: { visits: "2.6k", calls: "41", forms: "19" },
  },
  {
    metrics: [
      { label: "Live Leads", value: "157", trend: "+24%" },
      { label: "Avg. CPC", value: "₹22", trend: "-9%" },
      { label: "ROAS", value: "5.9x", trend: "+36%" },
    ],
    summary: { visits: "2.8k", calls: "44", forms: "21" },
  },
  {
    metrics: [
      { label: "Live Leads", value: "161", trend: "+27%" },
      { label: "Avg. CPC", value: "₹18", trend: "-18%" },
      { label: "ROAS", value: "6.4x", trend: "+42%" },
    ],
    summary: { visits: "3.1k", calls: "47", forms: "24" },
  },
];

function GlobeMesh() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.18;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.55, 64, 64]} />
        <meshStandardMaterial color="#111827" emissive="#14b8a6" emissiveIntensity={0.24} metalness={0.42} roughness={0.34} wireframe />
      </mesh>
      <mesh scale={1.08}>
        <sphereGeometry args={[1.55, 64, 64]} />
        <meshBasicMaterial color="#5eead4" transparent opacity={0.065} />
      </mesh>
    </Float>
  );
}

export function SpaceGlobe() {
  const [frameIndex, setFrameIndex] = useState(0);
  const frame = metricFrames[frameIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % metricFrames.length);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="space-globe-card luxury-border relative mx-auto h-[235px] w-full max-w-[560px] overflow-hidden rounded-[1.6rem] border border-white/10 shadow-2xl shadow-teal-500/15 sm:h-[340px] sm:rounded-[2rem] lg:h-[360px] lg:max-w-none xl:h-[430px]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_35%,rgba(45,212,191,0.28),transparent_38%),radial-gradient(circle_at_70%_70%,rgba(217,70,239,0.24),transparent_35%),linear-gradient(145deg,rgba(3,7,18,0.98),rgba(13,8,32,0.96))]" />
      <div className="css-globe-orb absolute left-1/2 top-[40%] z-[1] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 sm:h-[270px] sm:w-[270px] lg:h-[300px] lg:w-[300px] xl:h-[340px] xl:w-[340px]" />
      <div className="absolute left-4 top-4 z-10 rounded-full border border-teal-300/25 bg-teal-300/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-teal-100 backdrop-blur-xl sm:left-8 sm:top-8 sm:px-4 sm:text-xs">
        Growth Orbit
      </div>
      <div className="absolute right-4 top-4 z-10 hidden w-44 rounded-2xl border border-white/10 bg-slate-950/55 p-3 text-xs text-slate-200 shadow-2xl shadow-teal-950/30 backdrop-blur-xl sm:block">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-bold text-teal-200">Live Signals</span>
          <span className="live-dot rounded-full bg-emerald-300 px-2 py-0.5 text-[10px] font-black text-slate-950">ON</span>
        </div>
        <div className="space-y-2">
          {frame.metrics.map((metric) => (
            <div key={`${metric.label}-${frameIndex}`} className="live-metric-row flex items-center justify-between rounded-xl bg-white/[0.05] px-3 py-2">
              <span className="text-slate-400">{metric.label}</span>
              <span className="font-black text-white">{metric.value}</span>
              <span className="text-[10px] font-bold text-emerald-300">{metric.trend}</span>
            </div>
          ))}
        </div>
      </div>
      <Canvas
        className="!absolute !inset-x-0 !top-0 !z-[2] !h-[72%] !bg-transparent"
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => gl.setClearColor("#000000", 0)}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={1.1} />
        <pointLight position={[4, 3, 4]} intensity={4} color="#5eead4" />
        <pointLight position={[-4, -2, 3]} intensity={2.5} color="#e879f9" />
        <Stars radius={80} depth={40} count={1800} factor={3} saturation={0} fade speed={0.45} />
        <GlobeMesh />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-3 bottom-3 z-20 rounded-2xl border border-teal-300/25 bg-slate-950/90 p-2.5 text-[10px] text-slate-200 shadow-2xl shadow-teal-950/40 backdrop-blur-2xl sm:inset-x-8 sm:bottom-8 sm:p-4 sm:text-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-teal-300">Live Growth System:</span> SEO + Ads + CRO + Automation
          </div>
          <div className="grid grid-cols-3 gap-1 text-center sm:gap-2">
            <span key={`visits-${frameIndex}`} className="live-metric-row rounded-xl border border-white/10 bg-white/[0.05] px-2 py-1">{frame.summary.visits} Visits</span>
            <span key={`calls-${frameIndex}`} className="live-metric-row rounded-xl border border-white/10 bg-white/[0.05] px-2 py-1">{frame.summary.calls} Calls</span>
            <span key={`forms-${frameIndex}`} className="live-metric-row rounded-xl border border-white/10 bg-white/[0.05] px-2 py-1">{frame.summary.forms} Forms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
