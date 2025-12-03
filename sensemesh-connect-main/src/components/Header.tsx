import { Moon, Sun, Waves } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/30">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-teal flex items-center justify-center glow-teal">
              <Waves className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-accent rounded-full border-2 border-card animate-pulse-soft" />
          </div>
          <div>
            <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
              SenseMesh
            </h1>
            <p className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">
              Real-Time Communication
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="relative w-12 h-12 rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-300 flex items-center justify-center group"
          aria-label="Toggle dark mode"
        >
          <Sun className={`w-5 h-5 text-gold absolute transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
          <Moon className={`w-5 h-5 text-primary absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
        </button>
      </div>
    </header>
  );
}
