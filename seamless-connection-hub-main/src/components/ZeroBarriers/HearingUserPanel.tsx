import { useState, useEffect, useRef } from "react";
import { Mic } from "lucide-react";

const mockTranscripts = [
  "Good morning! I'm doing well.",
  "Yes, let's review the agenda.",
  "10 AM works perfectly for me.",
  "Looking forward to it!",
];

export const HearingUserPanel = () => {
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
      style={{ animationDelay: "0.2s" }}
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Hearing User
        </h3>
      </div>

      {/* Waveform Visualization */}
      <div className="aspect-video bg-muted/50 rounded-xl mb-5 flex items-center justify-center border border-border/30">
        {isActive ? (
          <div className="flex items-end gap-1 h-10">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 bg-primary/60 rounded-full waveform-bar"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  height: '8px'
                }}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-end gap-1 h-6 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-muted-foreground rounded-full"
                  style={{ height: `${8 + Math.random() * 12}px` }}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground/70">Audio Waveform</span>
          </div>
        )}
      </div>

      {/* Start Button */}
      <button
        onClick={handleToggle}
        className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 mb-5 flex items-center justify-center gap-2 ${
          isActive
            ? "bg-primary/20 text-primary border border-primary/30"
            : "bg-primary/10 text-primary hover:bg-primary/20 border border-transparent"
        }`}
      >
        <Mic className="w-4 h-4" />
        {isActive ? "Stop Speech" : "Start Speech"}
      </button>

      {/* Transcript Area */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Speech to Text</span>
          {isActive && (
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary processing-dot" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary processing-dot" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary processing-dot" />
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

      {/* Sign Output Placeholder */}
      <div className="mt-4 p-3 bg-accent/10 rounded-xl border border-accent/20">
        <span className="text-xs text-muted-foreground block mb-2">Sign Output</span>
        <div className="flex items-center justify-center h-12">
          {isActive ? (
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-lg bg-accent/30 animate-soft-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          ) : (
            <span className="text-xs text-muted-foreground/50">Sign animation preview</span>
          )}
        </div>
      </div>
    </div>
  );
};
