import { useState, useEffect, useRef } from "react";
import { Camera } from "lucide-react";

const mockTranscripts = [
  "Hello, how are you today?",
  "I wanted to discuss the meeting schedule.",
  "Can we meet tomorrow at 10 AM?",
  "Thank you for understanding.",
];

export const DeafUserPanel = () => {
  const [isActive, setIsActive] = useState(false);
  const [transcripts, setTranscripts] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const transcriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      if (currentIndex < mockTranscripts.length) {
        setTranscripts(prev => [...prev, mockTranscripts[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isActive, currentIndex]);

  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [transcripts]);

  const handleToggle = () => {
    if (isActive) {
      setIsActive(false);
      setTranscripts([]);
      setCurrentIndex(0);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div 
      className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-secondary" />
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Deaf / Mute User
        </h3>
      </div>

      {/* Webcam Placeholder */}
      <div className="aspect-video bg-muted/50 rounded-xl mb-5 flex items-center justify-center border border-border/30">
        {isActive ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center animate-soft-pulse">
              <Camera className="w-7 h-7 text-secondary" />
            </div>
            <span className="text-xs text-muted-foreground">Camera Active</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Camera className="w-8 h-8 text-muted-foreground/50" />
            <span className="text-xs text-muted-foreground/70">Webcam Preview</span>
          </div>
        )}
      </div>

      {/* Start Button */}
      <button
        onClick={handleToggle}
        className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 mb-5 ${
          isActive
            ? "bg-secondary/20 text-secondary border border-secondary/30"
            : "bg-secondary/10 text-secondary hover:bg-secondary/20 border border-transparent"
        }`}
      >
        {isActive ? "Stop Recognition" : "Start Sign Recognition"}
      </button>

      {/* Transcript Area */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Recognized Text</span>
          {isActive && (
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary processing-dot" />
              <div className="w-1.5 h-1.5 rounded-full bg-secondary processing-dot" />
              <div className="w-1.5 h-1.5 rounded-full bg-secondary processing-dot" />
            </div>
          )}
        </div>
        <div 
          ref={transcriptRef}
          className="h-32 bg-muted/30 rounded-xl p-4 overflow-y-auto border border-border/30"
        >
          {transcripts.length === 0 ? (
            <p className="text-sm text-muted-foreground/50 italic">
              Transcript will appear here...
            </p>
          ) : (
            <div className="space-y-2">
              {transcripts.map((text, index) => (
                <p 
                  key={index} 
                  className="text-sm text-foreground animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {text}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
