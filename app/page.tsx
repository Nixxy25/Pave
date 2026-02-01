import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { HeroPage } from "@/components/heropage";
import { Navbar } from "@/components/navbar";
import { UseCase } from "@/components/usecase";
import { StatsSection } from "@/components/stats-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white poppins-regular">
      <Navbar />
      <HeroPage />
      <UseCase />
      <Features />
      <StatsSection />
      <Footer />
    </div>
  );
}
