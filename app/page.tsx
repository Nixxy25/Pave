import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { HeroPage } from "@/components/heropage";
import { Navbar } from "@/components/navbar";
import { UseCase } from "@/components/usecase";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <HeroPage />
      <UseCase />
      <Features />
      <Footer />
    </div>
  );
}
