import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterAction = () => {
  return (
    <div className="mt-8 flex justify-center animate-fade-in-up animation-delay-400">
      <Button
        size="lg"
        className="group gap-2 rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-teal transition-all hover:shadow-lg"
      >
        <Play className="h-4 w-4" />
        Next: Explore Content Consumption
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default FooterAction;
