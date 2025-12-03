import { useState, useEffect } from "react";
import { Hand, MessageCircleQuestion, Sparkles, ThumbsUp } from "lucide-react";

interface SignOverlayWindowProps {
  currentWord: string;
  isFingerSpelling: boolean;
  gestureType?: "question" | "excited" | "positive" | null;
}

const fingerSpellingLetters = ["A", "L", "G", "O", "R", "I", "T", "H", "M"];

export function SignOverlayWindow({ currentWord, isFingerSpelling, gestureType }: SignOverlayWindowProps) {
  const [currentLetter, setCurrentLetter] = useState(0);

  useEffect(() => {
    if (isFingerSpelling) {
      const interval = setInterval(() => {
        setCurrentLetter((prev) => (prev + 1) % fingerSpellingLetters.length);
      }, 400);
      return () => clearInterval(interval);
    }
    setCurrentLetter(0);
  }, [isFingerSpelling]);

  const GestureIcon = () => {
    if (!gestureType) return null;
    
    const icons = {
      question: MessageCircleQuestion,
      excited: Sparkles,
      positive: ThumbsUp,
    };
    
    const Icon = icons[gestureType];
    
    return (
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent/90 text-accent-foreground px-2 py-1 rounded-lg animate-fade-in flex items-center gap-1">
        <Icon className="w-4 h-4" />
      </div>
    );
  };

  return (
    <div className="relative">
      <GestureIcon />
      <div className="sign-overlay-window w-32 h-24 flex flex-col items-center justify-center overflow-hidden">
        {isFingerSpelling ? (
          <div className="flex flex-col items-center gap-1 animate-scale-in">
            <Hand className="w-10 h-10 text-primary animate-sign-pulse" />
            <div className="flex gap-0.5">
              {fingerSpellingLetters.map((letter, index) => (
                <span
                  key={index}
                  className={`text-xs font-mono transition-all duration-200 ${
                    index === currentLetter
                      ? "text-primary font-bold scale-125"
                      : index < currentLetter
                      ? "text-muted-foreground"
                      : "text-muted-foreground/50"
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 animate-scale-in">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Hand className="w-7 h-7 text-primary animate-sign-pulse" />
            </div>
            <span className="text-xs text-primary font-medium">{currentWord}</span>
          </div>
        )}
      </div>
    </div>
  );
}
