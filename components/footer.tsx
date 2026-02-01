import React from "react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black/90 text-white/70 mt-16">
      <div className="flex flex-col min-h-[60vh] px-24 max-lg:px-8 py-4">

        <div className="flex-1 flex items-center justify-center">
          <div className="poppins-regular  text-8xl sm:text-8xl md:text-9xl lg:text-[12rem] text-white tracking-tight leading-none">
            PAVE
          </div>
        </div>

        <div className="flex flex-col gap-4 pb-4">
          <div className="flex flex-col gap-4 pb-4">
            <h3 className="poppins-regular text-white text-lg tracking-widest">
              COMMUNITY
            </h3>
            <div className="flex items-center gap-6">
              <a
                href="https://x.com/paveng_"
                target="_blank"
                rel="noopener noreferrer"
                className="poppins-light text-xl flex items-center gap-2 hover:text-white transition-colors"
              >
                Twitter
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="poppins-light text-xl flex items-center gap-2 hover:text-white transition-colors"
              >
                Discord
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                // href="mailto:hello@pave.com"
                className="poppins-light text-xl hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center border-t border-white/10 pt-4">
            <p className="poppins-light text-sm">
              Copyright © 2026 Pave All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
