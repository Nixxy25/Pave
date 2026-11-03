"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

const faqs = [
  { q: "What is Pave?", a: "Pave lets you create a store, share or embed a checkout link, and get paid by customers anywhere. Customers pay in USDC or their local currency, and you receive USDC or your own local currency." },
  { q: "How does a customer pay me?", a: "You send them your checkout link, or they pay through the checkout embedded on your site. They choose to pay in USDC or their local currency." },
  { q: "How do I receive my money?", a: "You choose how you want to be paid: in USDC, or in your own local currency. Every payment is tracked in real time in your dashboard." },
  { q: "Can I embed checkout on my website?", a: "Yes. Embed Pave checkout on your website or store, or simply share the link with customers by message, email or social media." },
  { q: "Do I need to be a developer?", a: "No. You can create your store and checkout links without writing any code. Developers who want more control can use the API and SDK." },
  { q: "How do I know when a customer has paid?", a: "You get real-time notifications the moment a payment lands and when it settles, and developers can use signed webhooks to keep their systems in sync." },
  { q: "Is Pave secure?", a: "Security is built into every payment, with encryption, real-time monitoring, and scoped API keys to keep your account and your customers protected." },
  { q: "How can I try it?", a: "Open the live demo from the navigation bar, or drop your email above and we'll get in touch to get you started." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions," accent="answered." />
        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04} y={16}>
                <div
                  className={`overflow-hidden rounded-2xl bg-white transition-shadow ${
                    isOpen ? "card-shadow" : "ring-1 ring-black/5"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-ink md:text-lg">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen ? "bg-brand text-white" : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-neutral-500">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
