import { Header } from "@/components/ZeroBarriers/Header";
import { HeroSection } from "@/components/ZeroBarriers/HeroSection";
import { DeafUserPanel } from "@/components/ZeroBarriers/DeafUserPanel";
import { HearingUserPanel } from "@/components/ZeroBarriers/HearingUserPanel";
import { HowItWorks } from "@/components/ZeroBarriers/HowItWorks";
import { Footer } from "@/components/ZeroBarriers/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Main Interactive Area */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <DeafUserPanel />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <HearingUserPanel />
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
