import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 mt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image 
              src="/pave.png" 
              alt="PAVE" 
              width={140} 
              height={140}
              className="object-contain"
            />
          </div>

           <Button className="poppins-light rounded-full text-base bg-black hover:bg-neutral-800 text-white px-6 py-2 h-auto">
             Explore use case
          </Button>
        </div>
      </div>
    </nav>
  );
}
