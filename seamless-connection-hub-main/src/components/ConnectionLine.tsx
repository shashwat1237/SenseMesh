import { Bluetooth } from "lucide-react";

export const ConnectionLine = () => {
  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Connection Line */}
      <div className="relative w-full max-w-[200px]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full h-1 animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full h-1 opacity-50 blur-md" />
        
        {/* Bluetooth Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-40 animate-pulse" />
            <div className="relative bg-background border-2 border-primary rounded-full p-3 glow-primary">
              <Bluetooth className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Label */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <p className="text-xs font-medium text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
          Collaborative Dual-Device Mode
        </p>
      </div>
    </div>
  );
};
