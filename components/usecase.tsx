"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Code2, Globe2, Link2, Store, Wallet, type LucideIcon } from "lucide-react";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/magicui/terminal";
import { SectionHeading } from "@/components/reveal";
import usecasesData from "@/data/usecases.json";

const icons: Record<string, LucideIcon> = {
  globe: Globe2,
  store: Store,
  link: Link2,
  wallet: Wallet,
};

const tabs = [
  { id: "company", label: "For merchants" },
  { id: "developer", label: "For developers" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function UseCase() {
  const [tab, setTab] = useState<TabId>("company");

  return (
    <section id="developers" className="scroll-mt-4 px-3 py-4 md:px-5">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-5 py-20 md:rounded-[3rem] md:px-12 md:py-28">
        <div aria-hidden className="grid-fade-dark absolute inset-0" />
        <div aria-hidden className="absolute -top-40 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />

        <div className="relative">
          <SectionHeading
            dark
            eyebrow="Use cases"
            title="Built for merchants and"
            accent="builders."
            description="Sell to customers anywhere with a simple checkout link, or build payments into your own product with the API."
          />

          <div className="mt-10 flex justify-center">
            <div role="tablist" className="relative flex rounded-full border border-white/10 bg-white/5 p-1">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    tab === t.id ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {tab === t.id && (
                    <motion.span
                      layoutId="usecase-tab"
                      className="absolute inset-0 rounded-full bg-brand"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <AnimatePresence mode="wait">
              {tab === "developer" ? (
                <motion.div
                  key="developer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-5"
                >
                  <div className="lg:col-span-2">
                    <span className="mb-4 grid size-11 place-items-center rounded-xl bg-white/10 text-brand">
                      <Code2 className="size-5" />
                    </span>
                    <h3 className="text-3xl font-semibold tracking-tight text-white">
                      {usecasesData.developer.title}
                    </h3>
                    <p className="mt-3 text-white/60">{usecasesData.developer.description}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <Terminal className="max-w-none">
                      <TypingAnimation>&gt; npm install @pave/sdk</TypingAnimation>
                      <AnimatedSpan className="text-green-500" delay={800}>✔ Installing Pave SDK</AnimatedSpan>
                      <AnimatedSpan className="text-green-500" delay={1200}>✔ Setting up API client</AnimatedSpan>
                      <AnimatedSpan className="text-green-500" delay={1600}>✔ Configuring webhooks</AnimatedSpan>
                      <TypingAnimation delay={2000}>&gt; curl -X POST https://api.pave.com/v1/payments \</TypingAnimation>
                      <TypingAnimation delay={2400} className="pl-4">-H &quot;Authorization: Bearer YOUR_API_KEY&quot; \</TypingAnimation>
                      <TypingAnimation delay={2800} className="pl-4">-d &#123;&quot;amount&quot;: 100, &quot;currency&quot;: &quot;USDC&quot;&#125;</TypingAnimation>
                      <AnimatedSpan className="text-green-500" delay={3500}>✔ Payment initiated successfully</AnimatedSpan>
                      <AnimatedSpan className="text-blue-400" delay={3900}>
                        <span>ℹ Transaction ID: tx_abc123xyz</span>
                      </AnimatedSpan>
                      <AnimatedSpan className="text-green-500" delay={4300}>✔ Webhook event sent to your endpoint</AnimatedSpan>
                    </Terminal>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="company"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2"
                >
                  {usecasesData.company.map((item, i) => {
                    const Icon = icons[item.icon] ?? Globe2;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-brand/40 hover:bg-white/[0.06]"
                      >
                        <span className="mb-5 grid size-11 place-items-center rounded-xl bg-brand/15 text-brand transition-transform group-hover:scale-110">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
