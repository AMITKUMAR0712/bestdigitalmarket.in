import { ParticleCanvas } from "@/components/ParticleCanvas";

export function WarmHeroBackground() {
  return (
    <div aria-hidden="true" className="particle-hero pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream to-cream-200" />
      <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-terracotta/14 blur-3xl" />
      <div className="absolute -right-16 top-24 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-terracotta/8 blur-3xl" />
      <ParticleCanvas />
      <div className="particle-hero-vignette absolute inset-0" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Cpath d=%22M30 50h20v20H30zM70 30h20v20H70zM70 70h20v20H70z%22 fill=%22none%22 stroke=%22%231c1917%22 stroke-width=%221.5%22/%3E%3C/svg%3E')] [background-size:120px_120px]" />
    </div>
  );
}
