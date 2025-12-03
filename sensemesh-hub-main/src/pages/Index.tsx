import { Ear, EyeOff, MessageCircleOff, UserRound } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ModeCard } from "@/components/ModeCard";
import { SenseFuseGraphic } from "@/components/SenseFuseGraphic";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const handleModeSelect = (mode: string) => {
    toast({
      title: `${mode} Mode Selected`,
      description: "This mode will be available in the next update.",
    });
  };

  return (
    <div className="min-h-screen gradient-mesh">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <span className="font-display font-semibold text-lg text-foreground">SenseMesh</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Sense<span className="text-primary">Mesh</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-light">
              One Platform. Every Sense. Zero Barriers.
            </p>
          </section>

          {/* SenseFuse Engine Graphic */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="max-w-sm mx-auto">
              <SenseFuseGraphic />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6 max-w-md mx-auto">
              The <span className="font-medium text-foreground">SenseFuse Engine</span> unifies audio, visual, gesture, and text inputs into seamless communication
            </p>
          </section>

          {/* Mode Selection Grid */}
          <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-center font-display text-2xl font-semibold text-foreground mb-8">
              Select Your Mode
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <ModeCard
                variant="deaf"
                title="Deaf Mode"
                description="Real-time sign language recognition and audio-to-text transcription for seamless communication."
                icon={<Ear className="h-7 w-7" />}
                onClick={() => handleModeSelect("Deaf")}
              />
              <ModeCard
                variant="blind"
                title="Blind Mode"
                description="Advanced text-to-speech, scene description, and spatial audio navigation assistance."
                icon={<EyeOff className="h-7 w-7" />}
                onClick={() => handleModeSelect("Blind")}
              />
              <ModeCard
                variant="mute"
                title="Mute Mode"
                description="Text-to-speech synthesis and gesture-based quick responses for expressive communication."
                icon={<MessageCircleOff className="h-7 w-7" />}
                onClick={() => handleModeSelect("Mute")}
              />
              <ModeCard
                variant="elder"
                title="Elder Mode"
                description="Simplified interface with larger text, voice commands, and cognitive assistance features."
                icon={<UserRound className="h-7 w-7" />}
                onClick={() => handleModeSelect("Elder")}
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-sm text-muted-foreground">
              Accessibility-first design • Built with empathy
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
