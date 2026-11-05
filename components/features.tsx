"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bell, Check, Globe2, Lock, Plug, ShieldCheck, Zap } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/animated-beam-demo";
import { AnimatedListDemo } from "@/components/ui/animated-list-demo";

function Card({
  className = "",
  icon: Icon,
  title,
  body,
  children,
  delay = 0,
  tall = false,
}: {
  className?: string;
  icon: React.ElementType;
  title: string;
  body: string;
  children: React.ReactNode;
  delay?: number;
  tall?: boolean;
}) {
  return (
    <Reveal
      delay={delay}
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white card-shadow transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      <Spotlight className="flex h-full flex-col">
      <div className={`relative ${tall ? "h-80" : "h-64"} overflow-hidden border-b border-black/5 bg-gradient-to-b from-neutral-50 to-white`}>
        {children}
      </div>
      <div className="p-7">
        <span className="mb-4 grid size-10 place-items-center rounded-xl bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
          <Icon className="size-5" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight text-ink">{title}</h3>
        <p className="mt-2 text-neutral-500">{body}</p>
      </div>
      </Spotlight>
    </Reveal>
  );
}

/* ---- Global payments: pulsing route between three cities ---- */
function GlobalVisual() {
  const nodes = [
    { x: 14, y: 62, label: "New York" },
    { x: 50, y: 24, label: "London" },
    { x: 86, y: 58, label: "Nairobi" },
  ];
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(#00000018_1px,transparent_1px)] [background-size:18px_18px]" />
      <svg viewBox="0 0 760 256" preserveAspectRatio="none" className="absolute inset-0 size-full" fill="none">
        {[
          "M106 159 Q 243 20 380 61",
          "M380 61 Q 560 10 654 148",
          "M106 159 Q 380 290 654 148",
        ].map((d, i) => (
          <g key={d}>
            <path d={d} stroke="#00000018" strokeWidth="1.5" strokeDasharray="4 6" />
            <motion.path
              d={d}
              stroke="#fe6500"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{ pathLength: [0, 0.35, 0], pathOffset: [0, 0.65, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.9, ease: "easeInOut" }}
            />
          </g>
        ))}
      </svg>
      {nodes.map((n, i) => (
        <div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span className="absolute inset-0 m-auto size-4 animate-pulse-ring rounded-full bg-brand/60" style={{ animationDelay: `${i * 0.6}s` }} />
          <span className="relative block size-4 rounded-full border-[3px] border-white bg-brand shadow-md" />
          <span className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full bg-white px-2.5 py-1 text-xs font-medium whitespace-nowrap text-ink shadow ring-1 ring-black/5">
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---- Checkout: button cycles idle → processing → paid ---- */
function CheckoutVisual() {
  const [state, setState] = useState<"idle" | "processing" | "paid">("idle");
  useEffect(() => {
    const seq: Array<["idle" | "processing" | "paid", number]> = [
      ["idle", 1600],
      ["processing", 1400],
      ["paid", 2200],
    ];
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      setState(seq[i][0]);
      t = setTimeout(() => {
        i = (i + 1) % seq.length;
        tick();
      }, seq[i][1]);
    };
    tick();
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="absolute inset-0 grid place-items-center p-6">
      <div className="w-full max-w-[260px] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <span>Order #1042</span>
          <span>Pave Checkout</span>
        </div>
        <p className="mt-1 text-3xl font-semibold tracking-tight text-ink">$100.00</p>
        <div className="mt-3 flex gap-2 text-xs">
          <span className="rounded-full bg-brand-soft px-2.5 py-1 font-medium text-brand">USDC</span>
          <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-neutral-500">USDT</span>
          <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-neutral-500">KES</span>
        </div>
        <motion.button
          layout
          animate={{ backgroundColor: state === "paid" ? "#10b981" : "#0b0b0c" }}
          className="mt-4 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl text-sm font-medium text-white"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={state}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              {state === "idle" && "Pay $100.00"}
              {state === "processing" && (
                <>
                  <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Processing
                </>
              )}
              {state === "paid" && (
                <>
                  <Check className="size-4" /> Payment confirmed
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}

const securityPoints = [
  "End-to-end encryption on every transaction",
  "Real-time fraud and anomaly monitoring",
  "Scoped API keys with fine-grained permissions",
  "Signed webhooks you can verify",
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to get paid,"
          accent="beautifully."
          description="Set up your store, share a checkout link, and collect payments from customers anywhere, settled the way you prefer."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-6">
          <Card
            className="md:col-span-4"
            icon={Globe2}
            title="Pay in anything, get paid in anything"
            body="Customers pay in USDC or their local currency. You choose to receive USDC or your own local currency."
          >
            <GlobalVisual />
          </Card>

          <Card
            className="md:col-span-2"
            icon={Zap}
            title="Checkout links"
            body="Create a link to send to customers, or embed checkout right in your store."
            delay={0.08}
          >
            <CheckoutVisual />
          </Card>

          <Card
            className="md:col-span-3"
            tall
            icon={Plug}
            title="Integrations"
            body="Embed checkout in your store and connect the stablecoins and commerce tools you already use."
          >
            <AnimatedBeamMultipleOutputDemo className="absolute inset-0 h-full w-full border-none p-4" />
          </Card>

          <Card
            className="md:col-span-3"
            tall
            icon={Bell}
            title="Real-time notifications"
            body="Know the moment a customer pays and when your money settles."
            delay={0.08}
          >
            <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-90 border-none [mask-image:linear-gradient(to_bottom,#000_55%,transparent_100%)]" />
          </Card>

          {/* security: wide, dark */}
          <Reveal className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white md:col-span-6 md:p-12">
            <div aria-hidden className="grid-fade-dark absolute inset-0" />
            <div aria-hidden className="absolute -right-20 -bottom-32 size-96 rounded-full bg-brand/30 blur-[100px]" />
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="mb-4 grid size-10 place-items-center rounded-xl bg-white/10 text-brand">
                  <ShieldCheck className="size-5" />
                </span>
                <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Secure by <span className="font-serif font-normal text-brand italic">design.</span>
                </h3>
                <p className="mt-3 max-w-md text-white/60">
                  Security isn&apos;t a layer we add later. It&apos;s built into how every payment is created, routed, and settled.
                </p>
              </div>
              <ul className="grid gap-3">
                {securityPoints.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.5 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand/20 text-brand">
                      <Lock className="size-3.5" />
                    </span>
                    <span className="text-sm text-white/80 md:text-base">{p}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
