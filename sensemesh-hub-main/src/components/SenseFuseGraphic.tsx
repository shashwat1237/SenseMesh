import { AudioLines, Eye, Hand, MessageSquare, Vibrate, Cpu } from "lucide-react";

export const SenseFuseGraphic = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Central core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Outer glow rings */}
          <div className="absolute inset-0 -m-8 rounded-full bg-primary/5 animate-pulse-soft" />
          <div className="absolute inset-0 -m-4 rounded-full bg-primary/10 animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
          
          {/* Core circle */}
          <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center shadow-glow">
            <div className="h-16 w-16 rounded-full bg-card flex items-center justify-center shadow-soft">
              <Cpu className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting icons */}
      {/* Audio - Top */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 top-4 animate-float"
        style={{ animationDelay: "0s" }}
      >
        <div className="h-12 w-12 rounded-xl bg-deaf-bg flex items-center justify-center shadow-card">
          <AudioLines className="h-6 w-6 text-deaf-accent" />
        </div>
        {/* Connection line */}
        <div className="absolute left-1/2 top-full w-px h-16 bg-gradient-to-b from-deaf-accent/40 to-transparent" />
      </div>

      {/* Eye - Right */}
      <div 
        className="absolute right-4 top-1/2 -translate-y-1/2 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="h-12 w-12 rounded-xl bg-blind-bg flex items-center justify-center shadow-card">
          <Eye className="h-6 w-6 text-blind-accent" />
        </div>
        {/* Connection line */}
        <div className="absolute right-full top-1/2 h-px w-16 bg-gradient-to-l from-blind-accent/40 to-transparent" />
      </div>

      {/* Hand - Bottom */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 bottom-4 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="h-12 w-12 rounded-xl bg-mute-bg flex items-center justify-center shadow-card">
          <Hand className="h-6 w-6 text-mute-accent" />
        </div>
        {/* Connection line */}
        <div className="absolute left-1/2 bottom-full w-px h-16 bg-gradient-to-t from-mute-accent/40 to-transparent" />
      </div>

      {/* Message - Left */}
      <div 
        className="absolute left-4 top-1/2 -translate-y-1/2 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="h-12 w-12 rounded-xl bg-elder-bg flex items-center justify-center shadow-card">
          <MessageSquare className="h-6 w-6 text-elder-accent" />
        </div>
        {/* Connection line */}
        <div className="absolute left-full top-1/2 h-px w-16 bg-gradient-to-r from-elder-accent/40 to-transparent" />
      </div>

      {/* Diagonal icons */}
      {/* Top-right */}
      <div 
        className="absolute right-12 top-12 animate-float"
        style={{ animationDelay: "0.75s" }}
      >
        <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shadow-card opacity-70">
          <Vibrate className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      {/* Bottom-left */}
      <div 
        className="absolute left-12 bottom-12 animate-float"
        style={{ animationDelay: "1.25s" }}
      >
        <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shadow-card opacity-70">
          <svg className="h-5 w-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
          </svg>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute h-full w-full rounded-full border border-dashed border-border animate-rotate-slow" />
        <div className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] rounded-full border border-dashed border-border animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>
    </div>
  );
};
