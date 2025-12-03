import { MessageCircle, Hand, Mic, Camera, Activity, Video, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  text: string;
  isIncoming: boolean;
  emotion?: string;
  showSignIcon?: boolean;
  showHaptic?: boolean;
}

interface DeviceDisplayProps {
  userType: "deaf" | "hearing";
  messages: Message[];
  label: string;
  sublabel: string;
  autoSummary?: string;
  className?: string;
}

export const DeviceDisplay = ({
  userType,
  messages,
  label,
  sublabel,
  autoSummary,
  className,
}: DeviceDisplayProps) => {
  const isDeaf = userType === "deaf";

  return (
    <div className={cn("relative", className)}>
      {/* Device Frame */}
      <div className="relative bg-card border-2 border-border rounded-[2.5rem] p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Device Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-card rounded-b-xl z-10" />
        
        {/* Screen */}
        <div className="bg-background rounded-[2rem] overflow-hidden min-h-[480px] flex flex-col">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 pt-6 pb-2">
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-2 h-2 rounded-full animate-pulse",
                isDeaf ? "bg-primary" : "bg-secondary"
              )} />
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Live</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-primary/60 rounded-sm" />
              <div className="w-1 h-2 bg-primary rounded-sm" />
            </div>
          </div>

          {/* User Label Header */}
          <div className="px-4 py-3 border-b border-border/50 bg-muted/30">
            <p className="text-sm font-semibold text-foreground">{label}</p>
            <p className="text-xs text-muted-foreground">{sublabel}</p>
          </div>

          {/* Auto-Summary Banner */}
          {autoSummary && (
            <div className="mx-3 mt-3 p-2.5 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-primary leading-relaxed">
                  <span className="font-semibold">Auto-Summary:</span> {autoSummary}
                </p>
              </div>
            </div>
          )}

          {/* Conversation Timeline */}
          <ScrollArea className="flex-1 px-3 py-3">
            <div className="space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex",
                    msg.isIncoming ? "justify-start" : "justify-end"
                  )}
                >
                  <div className={cn(
                    "relative max-w-[85%] p-3 rounded-2xl shadow-sm",
                    msg.isIncoming 
                      ? "bg-muted border border-border/50 rounded-tl-sm" 
                      : isDeaf 
                        ? "bg-primary/15 border border-primary/30 rounded-tr-sm"
                        : "bg-secondary/15 border border-secondary/30 rounded-tr-sm"
                  )}>
                    <p className="text-sm text-foreground leading-relaxed">
                      {msg.text}
                    </p>
                    
                    {/* Sign Language Icon */}
                    {msg.showSignIcon && (
                      <div className="absolute -right-2 -bottom-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-md animate-pulse">
                        <Hand className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                    )}

                    {/* Emotion Indicator */}
                    {msg.emotion && (
                      <div className="mt-2 flex items-center gap-1.5 p-1.5 bg-secondary/20 rounded-md">
                        <MessageCircle className="w-3 h-3 text-secondary" />
                        <span className="text-[10px] font-medium text-secondary">
                          Tone: {msg.emotion}
                        </span>
                      </div>
                    )}

                    {/* Haptic Indicator */}
                    {msg.showHaptic && (
                      <div className="mt-2 flex items-center gap-1.5 p-1.5 bg-accent/20 rounded-md">
                        <Activity className="w-3 h-3 text-accent animate-pulse" />
                        <span className="text-[10px] font-medium text-accent">
                          Haptic Alert
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-3 border-t border-border/50 bg-muted/20">
            {isDeaf ? (
              // Deaf User: Camera Input for Sign Language
              <button className="w-full flex items-center justify-center gap-3 p-3.5 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl transition-all duration-200 active:scale-[0.98]">
                <div className="relative">
                  <Video className="w-5 h-5 text-primary" />
                  <Camera className="w-2.5 h-2.5 text-primary absolute -bottom-0.5 -right-0.5" />
                </div>
                <span className="text-sm font-medium text-primary">Tap to Sign</span>
              </button>
            ) : (
              // Hearing User: Text Input with Mic
              <div className="flex items-center gap-2">
                <Input 
                  placeholder="Type Message..." 
                  className="flex-1 border-primary/30 focus:border-primary bg-background"
                />
                <button className="p-2.5 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl transition-colors">
                  <Mic className="w-5 h-5 text-primary" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
