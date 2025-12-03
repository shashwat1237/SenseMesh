import { Mic, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const VoiceNavigationPanel = () => {
  const [isListening, setIsListening] = useState(false);
  const commands = [
    "Command: Scroll down 20%",
    "Command: Tap second button on the right",
    "Command: Describe this image"
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-foreground mb-3">
          Adaptive UI Engine
        </h2>
        <p className="text-xl text-muted-foreground">
          Voice & Simplification
        </p>
      </div>

      <Card className="p-10 bg-card shadow-medium border-border">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Adaptive UI Demo */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Simplified Navigation
            </h3>
            <div className="space-y-8">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full h-20 text-xl font-medium"
              >
                Navigate Home
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full h-20 text-xl font-medium"
              >
                Read Messages
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full h-20 text-xl font-medium"
              >
                Settings
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center pt-4">
              Oversized controls with generous spacing
            </p>
          </div>

          {/* Voice Command Section */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <button
              onClick={() => setIsListening(!isListening)}
              className={`relative p-12 rounded-full transition-all duration-300 ${
                isListening 
                  ? 'bg-voice-input shadow-glow-teal animate-pulse' 
                  : 'bg-voice-input/20 hover:bg-voice-input/30'
              }`}
              aria-label="Voice command"
            >
              <Mic className="h-16 w-16 text-primary-foreground" />
            </button>

            <h3 className="text-xl font-semibold text-foreground">
              Voice-Based Navigation
            </h3>

            {/* Command Output */}
            <div className="w-full space-y-3 mt-6">
              {commands.map((command, index) => (
                <div
                  key={index}
                  className="bg-muted/50 rounded-xl p-4 border border-border text-center animate-in fade-in slide-in-from-bottom-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-base text-foreground">{command}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Empathy Coach */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-insight-glow/20 border-2 border-insight-glow rounded-2xl p-6 shadow-glow-gold">
            <div className="flex items-start gap-4">
              <Lightbulb className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  AI Empathy Coach Insight
                </h4>
                <p className="text-base text-foreground/80">
                  Speaker's tone is too fast. Suggest:{" "}
                  <span className="font-semibold">Slow down</span> for better clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default VoiceNavigationPanel;
