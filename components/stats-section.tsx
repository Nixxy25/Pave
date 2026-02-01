"use client";

import React from "react";
import Image from "next/image";

export function StatsSection() {
  return (
    <section className="w-full pb-8 md:pb-12 bg-white">
      <div className="w-full px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="relative bg-black rounded-3xl p-8 md:p-12 min-h-[400px] md:min-h-[450px] overflow-hidden">
            <div className="absolute top-6 right-8 md:top-8 md:right-12">
              <span className="poppins-regular text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                13+
              </span>
            </div>

            <div className="absolute bottom-24 left-8 md:left-12 opacity-90">
              <Image
                src="/shopify.svg"
                alt="Shopify"
                width={256}
                height={256}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
              />
            </div>

            {/* Text content */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-right max-w-xs">
              <p className="poppins-regular text-white text-lg md:text-xl lg:text-2xl leading-snug">
                Merchants integrated<br />and supported on Pave
              </p>
            </div>

            {/* Button */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <button className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-white poppins-light text-sm hover:bg-white/10 transition-colors">
                our merchants
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            </div>
          </div>

   
          <div className="relative bg-white rounded-3xl p-8 md:p-12 min-h-[400px] md:min-h-[450px] overflow-hidden border border-neutral-200">
            <div className="absolute top-12 left-8 md:left-12 opacity-80">
              <Image
                src="/globe.svg"
                alt="Globe"
                width={256}
                height={256}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
              />
            </div>

            <div className="absolute bottom-24 right-8 md:bottom-28 md:right-12">
              <span className="poppins-regular text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black">
                80%
              </span>
            </div>
            
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-right max-w-xs">
              <p className="poppins-regular text-neutral-600 text-lg md:text-xl leading-snug">
                Clients come back for<br />a new projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
