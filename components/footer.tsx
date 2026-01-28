import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-200">
      <div className=" mx-auto px-10 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/pave.png"
              alt="Pave"
              width={80}
              height={80}
            //   className="w-8 h-8"
            />
          </div>

          {/* Copyright */}
          <p className="poppins-light max-sm:text-sm text-neutral-500">
            © 2026 Pave Inc. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="poppins-light  text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="poppins-light  text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="poppins-light  text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
