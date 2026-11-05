"use client";

import { motion, type HTMLMotionProps } from "motion/react";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
}

export function Reveal({ children, delay = 0, y = 24, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase ${
            dark
              ? "border-white/10 bg-white/5 text-white/70"
              : "border-black/10 bg-white text-neutral-600"
          }`}
        >
          <span className="size-1.5 rounded-full bg-brand" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-5 text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}{" "}
          <span className="font-serif font-normal text-brand italic">{accent}</span>
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-base text-pretty md:text-lg ${
              dark ? "text-white/60" : "text-neutral-500"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
