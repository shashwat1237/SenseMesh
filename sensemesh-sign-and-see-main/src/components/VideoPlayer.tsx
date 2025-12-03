import { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { SignOverlayWindow } from "./SignOverlayWindow";

interface VideoPlayerProps {
  onWordChange: (word: string, isFingerSpelling: boolean, upcoming: string[]) => void;
}

const subtitleData = [
  { text: "Welcome to this introduction on", words: ["Welcome", "to", "this", "introduction", "on"], fingerSpelling: false },
  { text: "effective communication skills.", words: ["effective", "communication", "skills"], fingerSpelling: false },
  { text: "Today we will explore the algorithm", words: ["Today", "we", "will", "explore", "the", "algorithm"], fingerSpelling: true, fingerWord: "algorithm" },
  { text: "behind successful interactions.", words: ["behind", "successful", "interactions"], fingerSpelling: false },
];

export function VideoPlayer({ onWordChange }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState([25]);
  const [overlayEnabled, setOverlayEnabled] = useState(true);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [gestureType, setGestureType] = useState<"question" | "excited" | "positive" | null>(null);

  const currentSubtitle = subtitleData[currentSubtitleIndex];
  const currentWord = currentSubtitle.words[currentWordIndex];
  const isFingerSpelling = currentSubtitle.fingerSpelling && currentWord === currentSubtitle.fingerWord;

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= currentSubtitle.words.length) {
          setCurrentSubtitleIndex((subIdx) => (subIdx + 1) % subtitleData.length);
          return 0;
        }
        return nextIndex;
      });

      // Random gesture effects
      if (Math.random() > 0.85) {
        const gestures: ("question" | "excited" | "positive")[] = ["question", "excited", "positive"];
        setGestureType(gestures[Math.floor(Math.random() * gestures.length)]);
        setTimeout(() => setGestureType(null), 1500);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [isPlaying, currentSubtitle.words.length]);

  useEffect(() => {
    const upcoming = currentSubtitle.words.slice(currentWordIndex + 1, currentWordIndex + 4);
    onWordChange(currentWord, isFingerSpelling, upcoming);
  }, [currentWord, isFingerSpelling, onWordChange, currentSubtitle.words, currentWordIndex]);

  return (
    <div className="w-full animate-fade-in">
      {/* Video Container */}
      <div className="relative aspect-video bg-sign-overlay rounded-2xl overflow-hidden soft-shadow">
        {/* Simulated Video Content */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-muted/5 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <Play className="w-8 h-8 text-primary ml-1" />
            </div>
            <p className="text-muted-foreground/70 text-sm">Communication Skills Workshop</p>
          </div>
        </div>

        {/* Sign Overlay Window */}
        {overlayEnabled && (
          <div className="absolute bottom-20 right-4 animate-slide-in-right">
            <SignOverlayWindow
              currentWord={currentWord}
              isFingerSpelling={isFingerSpelling}
              gestureType={gestureType}
            />
          </div>
        )}

        {/* Captions */}
        <div className="absolute bottom-4 left-4 right-40 bg-sign-overlay/90 backdrop-blur-sm rounded-xl px-4 py-3">
          <p className="text-primary-foreground text-sm leading-relaxed">
            {currentSubtitle.words.map((word, index) => (
              <span
                key={index}
                className={`transition-all duration-200 ${
                  index === currentWordIndex
                    ? "text-primary font-semibold animate-caption-highlight"
                    : index < currentWordIndex
                    ? "text-muted-foreground"
                    : "text-primary-foreground/80"
                }`}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 space-y-4">
        {/* Progress Bar */}
        <Slider
          value={progress}
          onValueChange={setProgress}
          max={100}
          step={1}
          className="w-full"
        />

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors glow-primary"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-primary-foreground" />
              ) : (
                <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
              )}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Volume2 className="w-5 h-5 text-muted-foreground" />
              )}
            </button>

            <span className="text-sm text-muted-foreground">2:35 / 12:48</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Overlay Toggle */}
            <div className="flex items-center gap-2">
              <Switch
                id="overlay-toggle"
                checked={overlayEnabled}
                onCheckedChange={setOverlayEnabled}
              />
              <Label htmlFor="overlay-toggle" className="text-sm text-muted-foreground cursor-pointer">
                Sign Overlay
              </Label>
            </div>

            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
              <Maximize className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
