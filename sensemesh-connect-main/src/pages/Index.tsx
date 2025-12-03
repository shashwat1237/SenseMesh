import { Header } from "@/components/Header";
import { SignToSpeechPanel } from "@/components/SignToSpeechPanel";
import { SpeechToSignPanel } from "@/components/SpeechToSignPanel";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24 pb-32 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/50 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              <span className="text-sm font-medium text-muted-foreground">
                Simultaneous Two-Way Translation
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Breaking Communication
              <span className="text-gradient"> Barriers</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-time, emotionally intelligent translation between sign language and speech
            </p>
          </div>

          {/* Split Screen Panels */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <SignToSpeechPanel />
            <SpeechToSignPanel />
          </div>

          {/* Connection Indicator */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-primary/30" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/30">
              <div className="flex -space-x-1">
                <div className="w-3 h-3 rounded-full bg-primary border-2 border-card" />
                <div className="w-3 h-3 rounded-full bg-coral border-2 border-card" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">Connected</span>
            </div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-coral/30" />
          </div>
        </div>
      </main>

      {/* Footer Action */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent">
        <div className="container mx-auto max-w-7xl flex justify-center">
          <Button variant="soft" size="xl" className="group">
            <Clock className="w-5 h-5 text-primary" />
            <span>View Conversation Timeline</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
