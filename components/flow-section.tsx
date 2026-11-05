"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Link2, Store } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const scenarios = [
  { pays: "GH₵1,240", payCur: "Cedi", payFlag: "GHS", gets: "100.00 USDC", getCur: "USDC" },
  { pays: "100.00 USDC", payCur: "USDC", payFlag: "USDC", gets: "KSh 12,900", getCur: "Shilling" },
  { pays: "£80.00", payCur: "Pound", payFlag: "GBP", gets: "100.00 USDC", getCur: "USDC" },
  { pays: "€92.00", payCur: "Euro", payFlag: "EUR", gets: "GH₵1,240", getCur: "Cedi" },
];

function Dots({ vertical = false }: { vertical?: boolean }) {
  return (
    <div className={`relative ${vertical ? "h-14 w-px" : "h-px flex-1"} bg-black/10`}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute size-2.5 rounded-full bg-brand shadow-[0_0_12px_3px_rgba(254,101,0,0.6)]"
          style={vertical ? { left: -5 } : { top: -5 }}
          animate={vertical ? { top: ["0%", "100%"], opacity: [0, 1, 1, 0] } : { left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function Amount({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.p
        key={k}
        initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
        transition={{ duration: 0.35 }}
        className="text-3xl font-semibold tracking-tight tabular-nums text-ink md:text-4xl"
      >
        {children}
      </motion.p>
    </AnimatePresence>
  );
}

export function FlowSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % scenarios.length), 3400);
    return () => clearInterval(t);
  }, []);
  const s = scenarios[i];

  return (
    <section className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="One link, any currency"
          title="They pay their way."
          accent="You get paid yours."
          description="Share one checkout link. Your customer pays in USDC or their local currency, and you receive USDC or your own local currency."
        />

        <Reveal y={40} className="relative mt-16">
          <div aria-hidden className="absolute inset-x-10 -top-6 -bottom-6 -z-10 rounded-[3rem] bg-gradient-to-r from-brand/20 via-amber-300/20 to-pink-300/20 blur-3xl" />
          <div className="rounded-[2rem] bg-white p-6 card-shadow md:p-10">
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-0">
              {/* customer */}
              <div className="w-full rounded-3xl bg-neutral-50 p-6 ring-1 ring-black/5 md:w-64">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Link2 className="size-4 text-brand" /> Customer pays
                </div>
                <div className="mt-3">
                  <Amount k={s.pays}>{s.pays}</Amount>
                </div>
                <span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-ink ring-1 ring-black/10">
                  {s.payFlag} · {s.payCur}
                </span>
              </div>

              <div className="hidden flex-1 md:flex"><Dots /></div>
              <div className="md:hidden"><Dots vertical /></div>

              {/* hub */}
              <div className="relative grid size-28 shrink-0 place-items-center">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand/40" />
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand/40 [animation-delay:1.2s]" />
                <div className="relative grid size-24 place-items-center rounded-full bg-white shadow-xl ring-1 ring-black/10">
                  <Image src="/pave2.png" alt="Pave" width={424} height={542} className="h-12 w-auto" />
                </div>
              </div>

              <div className="hidden flex-1 md:flex"><Dots /></div>
              <div className="md:hidden"><Dots vertical /></div>

              {/* merchant */}
              <div className="w-full rounded-3xl bg-ink p-6 text-white md:w-64">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Store className="size-4 text-brand" /> You receive
                </div>
                <div className="mt-3 [&_p]:text-white">
                  <Amount k={s.gets}>{s.gets}</Amount>
                </div>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                  <Check className="size-3" /> Settled · {s.getCur}
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {scenarios.map((_, n) => (
                <button
                  key={n}
                  aria-label={`Example ${n + 1}`}
                  onClick={() => setI(n)}
                  className={`h-1.5 cursor-pointer rounded-full transition-all ${n === i ? "w-8 bg-brand" : "w-1.5 bg-black/15"}`}
                />
              ))}
            </div>
            <p className="mt-4 flex items-center justify-center gap-1 text-center text-xs text-neutral-400">
              Illustrative example <ArrowRight className="size-3" /> amounts are for demonstration only
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
