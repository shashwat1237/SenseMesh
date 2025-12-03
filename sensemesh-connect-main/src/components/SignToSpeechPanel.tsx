import { Camera, Hand, Smile, Sparkles } from "lucide-react";

export function SignToSpeechPanel() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col animate-slide-in-left">
      {/* Panel Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center">
          <Hand className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground">
            Sign → Speech Translation
          </h2>
          <p className="text-sm text-muted-foreground">Mute/Deaf User Input</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
          <span className="text-xs font-medium text-primary">Live</span>
        </div>
      </div>

      {/* Camera Feed Placeholder */}
      <div className="relative flex-1 min-h-[280px] rounded-xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden mb-4">
        {/* Camera Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Camera className="w-12 h-12 text-muted-foreground/30 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground/50">Camera Feed</p>
          </div>
        </div>

        {/* Hand Tracking Overlay */}
        <svg
          className="absolute inset-0 w-full h-full animate-tracking"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified hand skeleton */}
          <g className="opacity-80">
            {/* Palm */}
            <circle cx="200" cy="180" r="8" className="fill-gold" />
            {/* Wrist */}
            <line x1="200" y1="180" x2="200" y2="220" className="stroke-gold stroke-2" />
            {/* Thumb */}
            <line x1="200" y1="180" x2="160" y2="150" className="stroke-gold stroke-2" />
            <circle cx="160" cy="150" r="4" className="fill-gold" />
            <line x1="160" y1="150" x2="145" y2="130" className="stroke-gold stroke-2" />
            <circle cx="145" cy="130" r="3" className="fill-gold" />
            {/* Index */}
            <line x1="200" y1="180" x2="180" y2="120" className="stroke-gold stroke-2" />
            <circle cx="180" cy="120" r="4" className="fill-gold" />
            <line x1="180" y1="120" x2="175" y2="90" className="stroke-gold stroke-2" />
            <circle cx="175" cy="90" r="3" className="fill-gold" />
            {/* Middle */}
            <line x1="200" y1="180" x2="200" y2="110" className="stroke-gold stroke-2" />
            <circle cx="200" cy="110" r="4" className="fill-gold" />
            <line x1="200" y1="110" x2="200" y2="80" className="stroke-gold stroke-2" />
            <circle cx="200" cy="80" r="3" className="fill-gold" />
            {/* Ring */}
            <line x1="200" y1="180" x2="220" y2="115" className="stroke-gold stroke-2" />
            <circle cx="220" cy="115" r="4" className="fill-gold" />
            <line x1="220" y1="115" x2="225" y2="88" className="stroke-gold stroke-2" />
            <circle cx="225" cy="88" r="3" className="fill-gold" />
            {/* Pinky */}
            <line x1="200" y1="180" x2="240" y2="130" className="stroke-gold stroke-2" />
            <circle cx="240" cy="130" r="4" className="fill-gold" />
            <line x1="240" y1="130" x2="250" y2="110" className="stroke-gold stroke-2" />
            <circle cx="250" cy="110" r="3" className="fill-gold" />
          </g>
        </svg>

        {/* Status Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm border border-border/50">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
          <span className="text-xs font-medium text-foreground">Gesture Recognition Active</span>
        </div>
      </div>

      {/* Output Text Bubble */}
      <div className="relative mb-4">
        <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-bl-md p-4">
          <p className="text-foreground font-medium leading-relaxed">
            "I am feeling a little tired today. Is that okay?"
          </p>
        </div>
        <div className="absolute -bottom-2 left-4 w-4 h-4 bg-primary/10 border-l border-b border-primary/20 transform rotate-45" />
      </div>

      {/* Feature Callouts */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50">
          <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">20+ Signs</p>
            <p className="text-[10px] text-muted-foreground">Recognition Active</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50">
          <div className="w-8 h-8 rounded-lg bg-coral/20 flex items-center justify-center">
            <Smile className="w-4 h-4 text-coral" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">Micro-Expression</p>
            <p className="text-[10px] text-muted-foreground">Emotion Detection</p>
          </div>
        </div>
      </div>
    </div>
  );
}
