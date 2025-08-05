import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import GetStartedSection from "@/components/GetStartedSection";
import FeatureCards from "@/components/FeatureCards";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="tabular-nums">
      <Header />
      <main className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
        <HeroSection />
        <StatsSection />
        <GetStartedSection />
        <FeatureCards />
        <AnnouncementsSection />
      </main>
      <Footer />
    </div>
  );
}