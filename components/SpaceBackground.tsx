export function SpaceBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="deep-space absolute inset-0" />
      <div className="premium-noise absolute inset-0 opacity-[0.045]" />
      <div className="star-field star-field-small absolute inset-0" />
      <div className="star-field star-field-large absolute inset-0" />
      <div className="cosmic-scan absolute inset-0" />
      <div className="constellation-web absolute inset-x-0 top-0 h-[520px]" />
      <div className="rotating-star-ring left-[8%] top-[24%] h-40 w-40" />
      <div className="rotating-star-ring right-[10%] top-[22%] h-56 w-56 reverse-spin" />
      <div className="rotating-star-ring bottom-[14%] left-[48%] h-48 w-48 slow-spin" />
      <div className="shooting-star left-[14%] top-[18%]" />
      <div className="shooting-star left-[66%] top-[12%]" />
      <div className="shooting-star left-[42%] top-[68%]" />
      <div className="space-orbit left-[8%] top-[16%] h-80 w-80" />
      <div className="space-orbit right-[4%] top-[8%] h-96 w-96 animation-delay-2" />
      <div className="space-orbit bottom-[4%] left-[36%] h-72 w-72 animation-delay-4" />
      <div className="planet-core right-[12%] top-[36%]" />
    </div>
  );
}
