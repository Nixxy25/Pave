"use client";

import { MotionConfig } from "motion/react";
import { Cta } from "@/components/cta";
import { ScrollProgress } from "@/components/scroll-progress";
import { FlowSection } from "@/components/flow-section";
import { Ribbons } from "@/components/ribbons";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { HeroPage } from "@/components/heropage";
import { HowItWorks } from "@/components/how-it-works";
import { LogoStrip } from "@/components/logo-strip";
import { Navbar } from "@/components/navbar";
import { UseCase } from "@/components/usecase";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col overflow-x-clip bg-paper font-sans text-ink">
        <ScrollProgress />
        <Navbar />
        <main>
          <HeroPage />
          <LogoStrip />
          <FlowSection />
          <Features />
          <HowItWorks />
          <UseCase />
          <Ribbons />
          <Faq />
          <Cta />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
