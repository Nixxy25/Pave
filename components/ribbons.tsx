"use client";

import { Marquee } from "@/components/ui/marquee";

const words = ["Pay in USDC", "Pay in Pounds", "Pay in Cedis", "Pay in Shillings", "Get paid", "Get paid your way"];

function Row({ dark, reverse }: { dark?: boolean; reverse?: boolean }) {
  return (
    <div className={`${dark ? "bg-ink text-white" : "bg-brand text-white"} py-4 shadow-2xl ${dark ? "-rotate-2" : "rotate-1"} -mx-4`}>
      <Marquee reverse={reverse} repeat={4} className="[--duration:30s] [--gap:2rem] p-0">
        {words.map((w) => (
          <span key={w} className="flex items-center gap-8 text-4xl font-semibold tracking-tight whitespace-nowrap md:text-6xl">
            {w}
            <span className="font-serif text-3xl font-normal italic text-amber-300 md:text-5xl">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export function Ribbons() {
  return (
    <div aria-hidden className="relative my-16 overflow-hidden py-10 md:my-24 md:py-16">
      <Row dark reverse />
      <div className="-mt-6 md:-mt-8">
        <Row />
      </div>
    </div>
  );
}
