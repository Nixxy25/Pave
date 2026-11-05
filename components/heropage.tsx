"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { EmailForm } from "@/components/email-form";
import { HeroVisual } from "@/components/hero-visual";

const headline = ["Global", "payments,"];
const headline2 = ["built", "for", "modern", "commerce."];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const word = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroPage() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44">
      {/* background */}
      <div aria-hidden className="grid-fade absolute inset-0 -z-10" />
      <div aria-hidden className="animate-drift absolute left-1/2 top-[-10%] -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
      <div aria-hidden className="animate-drift-slow absolute right-[-10%] top-[30%] -z-10 h-[420px] w-[420px] rounded-full bg-amber-300/40 blur-[110px]" />
      <div aria-hidden className="animate-drift absolute left-[-8%] top-[40%] -z-10 h-[380px] w-[380px] rounded-full bg-pink-300/30 blur-[110px]" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-center">
        <motion.a
          href="https://x.com/paveng_"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 py-1.5 pr-3 pl-1.5 text-sm text-neutral-600 shadow-sm backdrop-blur transition-colors hover:border-brand/40"
        >
          <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-0.5 text-xs font-medium text-white">
            <Sparkles className="size-3" /> New
          </span>
          Get paid in USDC or local currency
          <ArrowUpRight className="size-3.5 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-5xl text-5xl leading-[1.02] font-semibold tracking-tight text-balance text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {headline.map((w) => (
            <motion.span key={w} variants={word} className="mr-[0.22em] inline-block">
              {w}
            </motion.span>
          ))}
          <br className="hidden sm:block" />
          {headline2.map((w, i) => (
            <motion.span
              key={w}
              variants={word}
              className={`mr-[0.22em] inline-block ${
                i >= 2 ? "font-serif font-normal text-brand italic" : ""
              }`}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-7 max-w-xl text-base text-pretty text-neutral-500 md:text-xl"
        >
          Create your store, share or embed a checkout link, and get paid. Customers pay in
          USDC or their local currency, and you receive USDC or your own local currency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-9 flex w-full flex-col items-center gap-4"
        >
          <EmailForm />
          <a
            href="#features"
            className="text-sm text-neutral-500 underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            or explore what Pave can do ↓
          </a>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
