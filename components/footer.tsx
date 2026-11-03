import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const product = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#developers", label: "Developers" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-6 pt-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Image src="/pave.png" alt="Pave" width={946} height={344} className="h-9 w-auto" />
            <p className="mt-5 max-w-xs text-sm text-white/50">
              Global payment infrastructure for modern commerce.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-widest text-white uppercase">Product</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {product.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">{l.label}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://app.pavee.co/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  Live demo <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-widest text-white uppercase">Community</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="https://x.com/paveng_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  Twitter / X <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="mt-16 -mb-[0.18em] bg-gradient-to-b from-white/25 to-transparent bg-clip-text text-center text-[28vw] leading-none font-semibold tracking-tighter text-transparent select-none md:text-[20rem]"
        >
          PAVE
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center text-sm text-white/40">
        Copyright © 2026 Pave. All rights reserved.
      </div>
    </footer>
  );
}
