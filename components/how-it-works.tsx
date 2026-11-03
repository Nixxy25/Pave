"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Banknote, Link2, Store, Wallet } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const steps = [
  { icon: Store, name: "Create your store", body: "Sign up and set up your store in minutes, and choose whether to receive USDC or your local currency." },
  { icon: Link2, name: "Share or embed checkout", body: "Send a checkout link to your customer, or embed the checkout directly on your website or store." },
  { icon: Wallet, name: "Customer pays", body: "Your customer pays in USDC or their own local currency, whichever suits them." },
  { icon: Banknote, name: "You get paid", body: "Receive the money in USDC or your local currency, and track every payment in real time." },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="how-it-works" className="scroll-mt-24 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="How it works"
          title="Start getting paid in"
          accent="four steps."
          description="From setting up your store to money in your account, with no heavy lifting required."
        />

        <div ref={ref} className="relative mt-20">
          <div aria-hidden className="absolute top-0 bottom-0 left-6 w-px bg-black/10 md:left-1/2" />
          <motion.div
            aria-hidden
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute top-0 bottom-0 left-6 w-px bg-brand md:left-1/2"
          />

          <ol className="flex flex-col gap-14 md:gap-20">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.name} className="relative grid items-center md:grid-cols-2">
                  <span className="absolute top-1/2 left-6 z-10 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-[#fafaf7] bg-brand text-sm font-semibold text-white shadow-lg md:left-1/2">
                    {i + 1}
                  </span>
                  <Reveal
                    y={30}
                    className={`ml-16 md:ml-0 ${left ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                  >
                    <div className="group rounded-3xl bg-white p-6 card-shadow transition-transform duration-300 hover:-translate-y-1">
                      <span
                        className={`mb-4 grid size-11 place-items-center rounded-xl bg-brand-soft text-brand ${
                          left ? "md:ml-auto" : ""
                        }`}
                      >
                        <s.icon className="size-5" />
                      </span>
                      <h3 className="text-2xl font-semibold tracking-tight text-ink">{s.name}</h3>
                      <p className="mt-2 text-neutral-500">{s.body}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
