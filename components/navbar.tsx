"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onExploreClick?: () => void;
}

export function Navbar({ onExploreClick }: NavbarProps) {
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

          <Button 
            variant="ghost"
            onClick={onExploreClick}
            className="poppins-light text-base cursor-pointer max-sm:text-sm hover:text-neutral-600 text-black flex items-center gap-1 transition-colors"
          >
            Explore use case
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
