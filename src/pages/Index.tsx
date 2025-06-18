
import { Hero } from "@/components/Hero";
import { ProjectOverview } from "@/components/ProjectOverview";
import { ResearchPhase } from "@/components/ResearchPhase";
import { BenchmarkPhase } from "@/components/BenchmarkPhase";
import { WireframePhase } from "@/components/WireframePhase";
import { UsabilityTesting } from "@/components/UsabilityTesting";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <Hero />
      <ProjectOverview />
      <ResearchPhase />
      <BenchmarkPhase />
      <WireframePhase />
      <UsabilityTesting />
      <Footer />
    </div>
  );
};

export default Index;
