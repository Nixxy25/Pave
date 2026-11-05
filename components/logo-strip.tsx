"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const items: { label: string; src?: string; glyph?: string }[] = [
  { label: "USDT", src: "/usdt.svg" },
  { label: "Stellar", src: "/stellar.svg" },
  { label: "Shopify", src: "/shopify.svg" },
  { label: "USDC", glyph: "$" },
  { label: "Ethereum", glyph: "Ξ" },
  { label: "KES", glyph: "KSh" },
  { label: "GHS", glyph: "₵" },
  { label: "GBP", glyph: "£" },
  { label: "EUR", glyph: "€" },
  { label: "USD", glyph: "$" },
];

export function LogoStrip() {
  return (
    <section aria-label="Supported currencies and networks" className="py-12">
      <p className="mb-8 text-center text-sm text-neutral-400">
        Stablecoins, networks and currencies, working together
      </p>
      <div className="[mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
        <Marquee className="[--duration:35s] [--gap:3rem]" repeat={3}>
          {items.map((i) => (
            <div key={i.label} className="flex items-center gap-3 text-neutral-400 transition-colors hover:text-ink">
              {i.src ? (
                <Image src={i.src} alt="" width={28} height={28} className="size-7 opacity-60 grayscale" />
              ) : (
                <span className="grid size-7 place-items-center rounded-full border border-current text-[11px] font-semibold">
                  {i.glyph}
                </span>
              )}
              <span className="text-lg font-medium tracking-tight">{i.label}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
