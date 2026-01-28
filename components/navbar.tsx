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
              width={100} 
              height={100}
              className="object-contain max-sm:w-20 max-sm:h-20"
            />
          </div>

           <div className="poppins-light cursor-pointer max-sm:text-sm  hover:bg-neutral-800 text-black">
             Explore use case 
          </div>
        </div>
      </div>
    </nav>
  );
}
