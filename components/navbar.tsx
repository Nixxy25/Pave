import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-full mx-auto px-4 mt-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image 
              src="/pave.png" 
              alt="PAVE" 
              width={80} 
              height={80}
              className="object-contain max-sm:w-20 max-sm:h-20"
            />
          </div>

           <span className="poppins-light max-sm:text-sm rounded-full bg-white hover:bg-neutral-800 text-black  h-auto">
             Explore use case
          </span>
        </div>
      </div>
    </nav>
  );
}
