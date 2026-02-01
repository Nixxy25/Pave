"use client";

import { useRef } from "react";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { HeroPage } from "@/components/heropage";
import { Navbar } from "@/components/navbar";
import { UseCase } from "@/components/usecase";
import { StatsSection } from "@/components/stats-section";

export default function Home() {
  const useCaseRef = useRef<HTMLDivElement>(null);

  const scrollToUseCase = () => {
    useCaseRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans dark:bg-black">
      <Navbar onExploreClick={scrollToUseCase} />
      <HeroPage onExploreClick={scrollToUseCase} />
      <div ref={useCaseRef}>
        <UseCase />
      </div>
      <Features />
      {/* <StatsSection /> */}
      <Footer />
    </div>
  );
}
