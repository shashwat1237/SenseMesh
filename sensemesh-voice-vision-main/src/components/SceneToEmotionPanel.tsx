import { Camera, Volume2, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const SceneToEmotionPanel = () => {
  const [volume, setVolume] = useState([75]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleListenAgain = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-foreground mb-3">
          Scene-to-Emotion AI
        </h2>
        <p className="text-xl text-muted-foreground">
          Contextual Audio Awareness
        </p>
      </div>

      <Card className="p-10 bg-card shadow-medium border-border">
        <div className="flex flex-col items-center gap-8">
          {/* Input Indicator */}
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="p-4 rounded-full bg-muted">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Audio Output Card */}
          <div 
            className="w-full bg-secondary/20 border-2 border-secondary rounded-2xl p-8 shadow-glow-peach transition-all duration-300"
            style={{ minHeight: "180px" }}
          >
            <div className="flex items-start gap-4 mb-6">
              <Volume2 className="h-8 w-8 text-secondary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-2xl leading-relaxed text-foreground font-medium">
                  "A friendly person is standing 2 meters ahead, smiling. Area is safe."
                </p>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-4 flex-1 w-full">
                <Volume2 className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                  aria-label="Volume control"
                />
                <span className="text-sm text-muted-foreground min-w-[3ch]">
                  {volume[0]}%
                </span>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={handleListenAgain}
                className="gap-2 min-w-[160px]"
                disabled={isPlaying}
              >
                <RefreshCw className={`h-5 w-5 ${isPlaying ? 'animate-spin' : ''}`} />
                Listen Again
              </Button>
            </div>
          </div>

          {/* Text Simplifier Callout */}
          <div className="w-full bg-muted/50 rounded-xl p-6 border border-border">
            <p className="text-lg text-center text-foreground">
              <span className="font-semibold">Text Simplifier:</span> Tap to hear a{" "}
              <span className="text-primary font-semibold">Detailed</span> or{" "}
              <span className="text-accent font-semibold">Summary</span> reading of any text.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default SceneToEmotionPanel;
