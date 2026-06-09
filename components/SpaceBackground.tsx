export function SpaceBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="simple-bg absolute inset-0" />
      <div className="simple-grid absolute inset-0" />
      <div className="ai-neural-grid absolute inset-0" />
      <div className="soft-orb left-[8%] top-[12%] h-72 w-72 bg-teal-300/18" />
      <div className="soft-orb right-[6%] top-[18%] h-80 w-80 bg-fuchsia-500/16 animation-delay-2" />
      <div className="soft-orb bottom-[8%] left-[42%] h-64 w-64 bg-cyan-400/12 animation-delay-4" />
    </div>
  );
}
