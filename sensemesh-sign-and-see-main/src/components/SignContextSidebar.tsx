import { Hand, CircleStop, RotateCcw, Check, X, StopCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SignContextSidebarProps {
  currentWord: string;
  isFingerSpelling: boolean;
  upcomingWords: string[];
  onStopOverlay?: () => void;
  onRepeatLastSign?: () => void;
}

const gestureCommands = [
  { label: "YES", icon: Check, description: "Confirm action" },
  { label: "NO", icon: X, description: "Cancel action" },
  { label: "STOP", icon: CircleStop, description: "Pause playback" },
  { label: "REPEAT", icon: RotateCcw, description: "Replay segment" },
];

export function SignContextSidebar({ 
  currentWord, 
  isFingerSpelling, 
  upcomingWords,
  onStopOverlay,
  onRepeatLastSign
}: SignContextSidebarProps) {
  return (
    <aside className="w-72 h-[600px] bg-card rounded-2xl soft-shadow flex flex-col animate-slide-in-right flex-shrink-0">
      {/* Fixed Header */}
      <div className="p-5 pb-0 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Hand className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-semibold text-foreground text-sm">Sign Context & History</h2>
        </div>
      </div>

      {/* Fixed Current Sign Section */}
      <div className="p-5 pb-3 flex-shrink-0">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Current Sign</h3>
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Hand className="w-5 h-5 text-primary animate-sign-pulse" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-primary text-lg truncate">{currentWord}</p>
            {isFingerSpelling && (
              <p className="text-xs text-primary/70">Finger-spelling active</p>
            )}
          </div>
        </div>
      </div>

      {/* Scrollable Upcoming Signs Section */}
      <div className="px-5 flex-1 min-h-0 flex flex-col">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 flex-shrink-0">
          Upcoming Signs
        </h3>
        <ScrollArea className="flex-1 -mx-1 px-1">
          <div className="space-y-2 pr-2">
            {upcomingWords.length > 0 ? (
              upcomingWords.map((word, index) => (
                <div
                  key={index}
                  className="bg-muted/50 rounded-lg p-3 flex items-center gap-3 transition-all hover:bg-muted"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-gold">{index + 1}</span>
                  </div>
                  <span className="text-sm text-gold font-medium truncate">{word}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground italic">End of segment</p>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Divider */}
      <div className="border-t border-border mx-5 flex-shrink-0" />

      {/* Fixed Gesture Commands Reference */}
      <div className="p-5 pt-4 flex-shrink-0">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Quick Gesture Commands</h3>
        <div className="grid grid-cols-4 gap-2">
          {gestureCommands.map((command) => (
            <div
              key={command.label}
              className="gesture-icon flex flex-col items-center gap-1 text-center hover:bg-accent/80 transition-colors cursor-pointer p-2"
            >
              <command.icon className="w-4 h-4 text-accent-foreground" />
              <span className="text-[10px] font-medium text-accent-foreground">{command.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border mx-5 flex-shrink-0" />

      {/* Fixed Action Buttons at Bottom */}
      <div className="p-5 pt-4 flex-shrink-0 space-y-2">
        <Button 
          variant="destructive" 
          className="w-full gap-2"
          onClick={onStopOverlay}
        >
          <StopCircle className="w-4 h-4" />
          Stop Overlay
        </Button>
        <Button 
          variant="outline" 
          className="w-full gap-2 border-primary/30 text-primary hover:bg-primary/10"
          onClick={onRepeatLastSign}
        >
          <RotateCcw className="w-4 h-4" />
          Repeat Last Sign
        </Button>
      </div>
    </aside>
  );
}
