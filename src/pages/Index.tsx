import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AIConversationSection from "@/components/AIConversationSection";
import SolutionsSection from "@/components/SolutionsSection";
import BraceletsGallery from "@/components/BraceletsGallery";
import WhyMigrateSection from "@/components/WhyMigrateSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <AIConversationSection />
        <SolutionsSection />
        <BraceletsGallery />
        <WhyMigrateSection />
        <FinalCTASection />
      </main>
    </div>
  );
};

export default Index;
