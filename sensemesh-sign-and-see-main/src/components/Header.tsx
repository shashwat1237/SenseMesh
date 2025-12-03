import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    <header className="w-full px-6 py-4 flex items-center justify-between border-b border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">SM</span>
        </div>
        <span className="text-xl font-semibold text-foreground">SenseMesh</span>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className="rounded-full hover:bg-muted"
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-gold" />
        ) : (
          <Moon className="h-5 w-5 text-muted-foreground" />
        )}
      </Button>
    </header>
  );
}
