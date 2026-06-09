"use client";

import dynamic from "next/dynamic";

const SpaceGlobe = dynamic(() => import("@/components/SpaceGlobe").then((module) => module.SpaceGlobe), {
  ssr: false,
  loading: () => <div className="mx-auto h-[235px] w-full max-w-[560px] rounded-[1.6rem] border border-white/10 bg-white/[0.04] sm:h-[340px] sm:rounded-[2rem] lg:h-[360px] lg:max-w-none xl:h-[430px]" />,
});

export function GlobeLoader() {
  return <SpaceGlobe />;
}
