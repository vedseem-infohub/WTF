import HeroSection from "@/components/HeroSection";
import BrandReveal from "@/components/BrandReveal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <BrandReveal />
    </main>
  );
}
