import Header from "@/components/Header";
import SceneToEmotionPanel from "@/components/SceneToEmotionPanel";
import VoiceNavigationPanel from "@/components/VoiceNavigationPanel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-24">
        <SceneToEmotionPanel />
        <VoiceNavigationPanel />
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border py-6">
        <div className="max-w-5xl mx-auto px-6 flex justify-center">
          <Button 
            size="lg" 
            className="gap-2 text-lg px-8 py-6 rounded-full shadow-medium hover:shadow-glow-teal transition-all"
          >
            Next: Explore Collaborative Dual-Device Mode
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
