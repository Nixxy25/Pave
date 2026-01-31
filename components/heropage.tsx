import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";

export function HeroPage() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-[80vh] md:min-h-[90vh]">
      <span className="poppins-regular bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-4xl py-4 relative z-20">
        Create sales pages & Accept crypto payments instantly.
      </span>
      <p className="poppins-light max-w-xl md:max-w-2xl mx-auto text-sm md:text-base text-neutral-700 dark:text-neutral-400 text-center mt-4">
        Pave makes it easier for sellers to launch and grow their business with seamless payment integration.
      </p>
      
      <div className="relative mt-8 md:mt-16 z-20 px-2">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button className="poppins-light rounded-full bg-black text-sm sm:text-base hover:bg-neutral-800 text-white px-6 sm:px-8 py-3 h-auto whitespace-nowrap w-full sm:w-auto">
            Explore use case
          </Button>
          <div className="flex items-center bg-white dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm pl-4 sm:pl-6 pr-2 py-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="poppins-light bg-transparent outline-none text-neutral-900 dark:text-white placeholder:text-neutral-500 text-sm sm:text-base max-w-8xl sm:w-48"
            />
            <Button className="poppins-light rounded-full text-white px-4 sm:px-6 py-2 h-auto hover:bg-[#ff7419] text-sm sm:text-base whitespace-nowrap" style={{ backgroundColor: '#fe6500' }}>
              Demo
            </Button>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}
