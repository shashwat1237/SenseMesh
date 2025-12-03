import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Sign Input",
    content: "Camera captures sign language gestures and processes them in real-time using advanced recognition algorithms.",
  },
  {
    title: "Interpretation",
    content: "AI-powered interpretation converts signs to text and speech, preserving context and nuance.",
  },
  {
    title: "Speech Output",
    content: "Natural text-to-speech synthesis delivers clear audio output for hearing users.",
  },
  {
    title: "Reverse Flow",
    content: "Speech recognition converts audio to text and sign animations, completing the two-way communication loop.",
  },
];

export const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-xl font-medium text-foreground mb-8 text-center">
          How It Works
        </h2>
        
        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-border/50 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{item.title}</span>
                <ChevronDown 
                  className={cn(
                    "w-4 h-4 text-muted-foreground transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-40" : "max-h-0"
                )}
              >
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
