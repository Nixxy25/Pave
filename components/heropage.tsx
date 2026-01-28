import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";

export function HeroPage() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 pb-32">
      <h2 className="poppins-light bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-4 relative z-20">
        Create sales pages in under 2 minutes <br /> and accept crypto payments instantly.
      </h2>
      <p className="poppins-light max-w-5xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        The fastest way to sell online and receive crypto. Pave makes it easier for sellers to launch and grow their business with seamless payment integration.
      </p>
      
      <div className="relative mt-16 w-full max-w-2xl z-20">
        <div className="flex items-center gap-3">
          <Button className="poppins-light rounded-full bg-black text-base hover:bg-neutral-800 text-white px-8 py-3 h-auto whitespace-nowrap">
            Explore use case
          </Button>
          <div className="flex-1 flex items-center bg-white dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm pl-6 pr-2 py-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="poppins-light flex-1 bg-transparent outline-none text-neutral-900 dark:text-white placeholder:text-neutral-500 text-sm md:text-base"
            />
            <Button className="poppins-light rounded-full text-white px-6 py-2 h-auto hover:bg-[#ff7419]" style={{ backgroundColor: '#fe6500' }}>
              Start free trial
            </Button>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}
