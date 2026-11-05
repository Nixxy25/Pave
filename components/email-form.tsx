"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, ArrowRight, Check, Loader2, Mail } from "lucide-react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success";

export function EmailForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(0);

  const fail = (message: string) => {
    setError(message);
    setShake((n) => n + 1);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!email.trim()) return fail("Please enter your email address.");
    if (!emailRegex.test(email)) return fail("That email doesn't look right. Please check it.");

    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to send email");
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Error sending email:", err);
      setStatus("idle");
      fail("Something went wrong. Please try again in a moment.");
    }
  };

  return (
    <div className="w-full max-w-lg">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            role="status"
            className={`flex items-center gap-4 rounded-full p-2.5 pr-6 text-left ${
              dark ? "bg-white text-ink" : "bg-white card-shadow"
            }`}
          >
            <motion.span
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 14 }}
              className="grid size-12 shrink-0 place-items-center rounded-full bg-emerald-500 text-white"
            >
              <Check className="size-6" strokeWidth={3} />
            </motion.span>
            <div>
              <p className="font-semibold text-ink">You&apos;re on the list!</p>
              <p className="text-sm text-neutral-500">Thanks, we&apos;ll be in touch soon.</p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key={`form-${shake}`}
            onSubmit={submit}
            noValidate
            initial={false}
            animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
            transition={{ duration: 0.45 }}
            className={`group relative flex items-center rounded-full bg-white p-2 outline transition-all duration-300 focus-within:scale-[1.02] ${
              error
                ? "outline-2 outline-red-400"
                : dark
                  ? "outline-1 outline-white/40 focus-within:outline-2 focus-within:outline-white"
                  : "card-shadow outline-1 outline-black/10 focus-within:outline-2 focus-within:outline-brand/60 focus-within:shadow-[0_20px_50px_-15px_rgba(254,101,0,0.45)]"
            }`}
          >
            <Mail className="ml-4 size-5 shrink-0 text-neutral-400 transition-colors group-focus-within:text-brand" />
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              aria-label="Email address"
              aria-invalid={!!error}
              placeholder="you@business.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-base text-ink outline-none placeholder:text-neutral-400"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className={`group/btn relative inline-flex h-12 shrink-0 cursor-pointer items-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg active:scale-95 disabled:cursor-wait md:text-base ${
                dark ? "bg-ink hover:bg-neutral-800" : "bg-brand hover:shadow-brand/40"
              }`}
            >
              <span
                aria-hidden
                className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 transition-all duration-700 group-hover/btn:left-[150%]"
              />
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  Get early access
                  <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="mt-3 min-h-5 text-center text-sm">
        <AnimatePresence mode="wait" initial={false}>
          {error ? (
            <motion.p
              key="error"
              role="alert"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`inline-flex items-center gap-1.5 ${dark ? "text-white" : "text-red-500"}`}
            >
              <AlertCircle className="size-4" />
              {error}
            </motion.p>
          ) : status !== "success" ? (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={dark ? "text-white/80" : "text-neutral-400"}
            >
              We&apos;ll only email you about Pave.
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
