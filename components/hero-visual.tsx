"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDownLeft, ArrowUpRight, Check, Globe2, Zap } from "lucide-react";

type Tx = { id: number; name: string; note: string; amount: string; incoming: boolean };

const pool: Omit<Tx, "id">[] = [
  { name: "Acme Store", note: "Checkout · USDC", amount: "+$250.00", incoming: true },
  { name: "Accra payout", note: "Settled · GHS", amount: "-$1,800.00", incoming: false },
  { name: "Northwind Ltd", note: "Invoice · USDT", amount: "+$4,200.00", incoming: true },
  { name: "Nairobi vendor", note: "Settled · KES", amount: "-$620.00", incoming: false },
  { name: "Atlas Studio", note: "Payment link · USDC", amount: "+$95.00", incoming: true },
  { name: "London supplier", note: "Settled · GBP", amount: "-$3,150.00", incoming: false },
];

const sparkline = "M0 70 C 30 66, 45 48, 75 52 S 120 28, 150 34 S 200 14, 230 20 S 280 4, 320 8";

function CountUp({ to }: { to: number }) {
  const mv = useMotionValue(0);
  const [text, setText] = useState("0.00");
  useMotionValueEvent(mv, "change", (v) =>
    setText(v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
  );
  useEffect(() => {
    const controls = animate(mv, to, { duration: 2.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [mv, to]);
  return <>{text}</>;
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [txs, setTxs] = useState<Tx[]>(() => pool.slice(0, 3).map((t, i) => ({ ...t, id: i })));
  const counter = useRef(3);

  // live feed
  useEffect(() => {
    const t = setInterval(() => {
      const n = counter.current++;
      setTxs((prev) => [{ ...pool[n % pool.length], id: n }, ...prev].slice(0, 3));
    }, 2800);
    return () => clearInterval(t);
  }, []);

  // mouse tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 80, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1400 }}
      className="relative mt-16 w-full max-w-4xl md:mt-24"
    >
      {/* floating chips */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.7 }}
        className="absolute top-10 -left-2 z-20 hidden md:block lg:-left-10"
      >
        <div className="animate-float flex items-center gap-3 rounded-2xl border border-black/5 bg-white/90 p-3 pr-5 shadow-xl backdrop-blur">
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
            <Check className="size-5" />
          </span>
          <div className="text-left">
            <p className="text-sm font-medium text-ink">Checkout paid</p>
            <p className="text-xs text-neutral-500">+250.00 USDC · just now</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.3, duration: 0.7 }}
        className="absolute right-0 bottom-24 z-20 hidden md:block lg:-right-10"
      >
        <div className="animate-float-slow flex items-center gap-3 rounded-2xl border border-black/5 bg-white/90 p-3 pr-5 shadow-xl backdrop-blur">
          <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand">
            <Globe2 className="size-5" />
          </span>
          <div className="text-left">
            <p className="text-sm font-medium text-ink">Settled to your account</p>
            <p className="text-xs text-neutral-500">Customer paid USDC · you got KSh</p>
          </div>
        </div>
      </motion.div>

      {/* dashboard */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white text-left shadow-[0_40px_100px_-30px_rgba(254,101,0,0.35),0_30px_60px_-30px_rgba(0,0,0,0.25)]"
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-black/5 bg-neutral-50 px-5 py-3.5">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <div className="mx-auto hidden rounded-full bg-white px-4 py-1 text-xs text-neutral-400 ring-1 ring-black/5 sm:block">
            app.pavee.co/dashboard
          </div>
        </div>

        <div className="grid gap-px bg-black/5 md:grid-cols-5">
          {/* balance */}
          <div className="bg-white p-6 md:col-span-3 md:p-8">
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-500">Total balance</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                Live
              </span>
            </div>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-ink tabular-nums md:text-6xl">
              $<CountUp to={48291.5} />
            </p>
            <p className="mt-1 text-sm font-medium text-emerald-600">▲ 12.4% this month</p>

            <svg viewBox="0 0 320 90" className="mt-6 h-24 w-full overflow-visible" fill="none" aria-hidden>
              <defs>
                <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fe6500" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#fe6500" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d={`${sparkline} L320 90 L0 90 Z`}
                fill="url(#spark-fill)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
              />
              <motion.path
                d={sparkline}
                stroke="#fe6500"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 1.8, ease: "easeInOut" }}
              />
              <motion.circle
                cx="320"
                cy="8"
                r="4.5"
                fill="#fe6500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3, type: "spring" }}
              />
            </svg>

            <div className="mt-5 flex gap-3">
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-ink py-3 text-sm font-medium text-white">
                <ArrowUpRight className="size-4" /> Send
              </button>
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-100 py-3 text-sm font-medium text-ink">
                <ArrowDownLeft className="size-4" /> Receive
              </button>
              <button className="hidden flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-100 py-3 text-sm font-medium text-ink sm:inline-flex">
                <Zap className="size-4" /> Checkout
              </button>
            </div>
          </div>

          {/* activity */}
          <div className="bg-neutral-50/70 p-6 md:col-span-2 md:p-8">
            <p className="text-sm text-neutral-500">Recent activity</p>
            <ul className="mt-4 flex flex-col gap-3">
              <AnimatePresence initial={false} mode="popLayout">
                {txs.map((t) => (
                  <motion.li
                    key={t.id}
                    layout
                    initial={{ opacity: 0, y: -24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-black/5"
                  >
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-xl ${
                        t.incoming ? "bg-emerald-50 text-emerald-600" : "bg-brand-soft text-brand"
                      }`}
                    >
                      {t.incoming ? <ArrowDownLeft className="size-4" /> : <ArrowUpRight className="size-4" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-ink">{t.name}</p>
                      <p className="truncate text-xs text-neutral-400">{t.note}</p>
                    </div>
                    <span
                      className={`text-sm font-medium tabular-nums ${
                        t.incoming ? "text-emerald-600" : "text-ink"
                      }`}
                    >
                      {t.amount}
                    </span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
