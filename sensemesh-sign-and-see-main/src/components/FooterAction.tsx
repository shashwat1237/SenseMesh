import { ArrowRight, Eye, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterAction() {
  return (
    <footer className="mt-8 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <Button
        variant="outline"
        size="lg"
        className="group rounded-full px-6 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4 text-primary" />
            <Accessibility className="w-4 h-4 text-accent" />
          </div>
          <span className="text-foreground font-medium">Next: Explore Blind & Adaptive Modes</span>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </Button>
    </footer>
  );
}
