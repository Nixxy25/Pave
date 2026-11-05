"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { EmailForm } from "@/components/email-form";

export function Cta() {
  return (
    <section className="px-5 pb-24 md:pb-32">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-brand px-6 py-20 text-center md:px-12 md:py-28">
        <div aria-hidden className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
        <Image
          src="/pave2.png"
          alt=""
          aria-hidden
          width={424}
          height={542}
          className="pointer-events-none absolute -right-10 -bottom-16 w-56 rotate-12 opacity-15 brightness-0 invert md:w-72"
        />
        <div className="relative flex flex-col items-center">
          <h2 className="max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-white md:text-6xl">
            Ready to get paid{" "}
            <span className="font-serif font-normal italic">from anywhere?</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/80">
            Create your store, share a checkout link, and start getting paid in USDC or your local currency.
          </p>
          <div className="mt-9 flex w-full justify-center">
            <EmailForm dark />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
