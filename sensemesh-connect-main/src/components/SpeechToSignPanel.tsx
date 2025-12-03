import { Brain, MessageSquare, Sparkles, User } from "lucide-react";

export function SpeechToSignPanel() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col animate-slide-in-right">
      {/* Panel Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-coral" />
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground">
            Speech → Sign Translation
          </h2>
          <p className="text-sm text-muted-foreground">Hearing User Output</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-2 h-2 bg-coral rounded-full animate-pulse-soft" />
          <span className="text-xs font-medium text-coral">Active</span>
        </div>
      </div>

      {/* Emotion Indicator */}
      <div className="flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full bg-coral-light border border-coral/30 self-center">
        <div className="w-2 h-2 bg-coral rounded-full animate-pulse-soft" />
        <span className="text-sm font-medium text-coral">
          Tone: Concern
        </span>
        <span className="text-xs text-coral/70">
          (Slow, Soft Gestures)
        </span>
      </div>

      {/* Avatar Display */}
      <div className="relative flex-1 min-h-[280px] rounded-xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden mb-4 flex items-center justify-center">
        {/* Simplified Avatar */}
        <div className="relative animate-float">
          {/* Avatar Body */}
          <svg
            width="180"
            height="220"
            viewBox="0 0 180 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Head */}
            <ellipse cx="90" cy="50" rx="35" ry="40" className="fill-primary/20 stroke-primary stroke-2" />
            {/* Eyes */}
            <circle cx="78" cy="45" r="4" className="fill-foreground/60" />
            <circle cx="102" cy="45" r="4" className="fill-foreground/60" />
            {/* Gentle smile */}
            <path d="M 78 60 Q 90 68 102 60" className="stroke-foreground/40 stroke-2" fill="none" strokeLinecap="round" />
            {/* Neck */}
            <rect x="82" y="88" width="16" height="20" className="fill-primary/15" />
            {/* Body */}
            <ellipse cx="90" cy="150" rx="50" ry="55" className="fill-primary/10 stroke-primary/50 stroke-2" />
            {/* Left Arm (signing position) */}
            <path d="M 40 130 Q 20 110 35 80" className="stroke-primary stroke-[3]" fill="none" strokeLinecap="round" />
            {/* Left Hand */}
            <circle cx="35" cy="80" r="12" className="fill-primary/20 stroke-primary stroke-2" />
            {/* Right Arm */}
            <path d="M 140 130 Q 160 150 150 180" className="stroke-primary stroke-[3]" fill="none" strokeLinecap="round" />
            {/* Right Hand */}
            <circle cx="150" cy="180" r="10" className="fill-primary/20 stroke-primary stroke-2" />
          </svg>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-xl" />
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm border border-border/50">
          <User className="w-3 h-3 text-primary" />
          <span className="text-xs font-medium text-foreground">Avatar Signing</span>
        </div>
      </div>

      {/* Caption Output */}
      <div className="relative mb-4">
        <div className="bg-coral/10 border border-coral/20 rounded-2xl rounded-br-md p-4">
          <p className="text-foreground font-medium leading-relaxed">
            "I understand. Take a break if you need to."
          </p>
        </div>
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-coral/10 border-r border-b border-coral/20 transform rotate-45" />
      </div>

      {/* Feature Callouts */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Brain className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">Context-Aware</p>
            <p className="text-[10px] text-muted-foreground">Prediction Engine</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50">
          <div className="w-8 h-8 rounded-lg bg-coral/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-coral" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">Smart Sign</p>
            <p className="text-[10px] text-muted-foreground opacity-60">Next: "rest"...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
