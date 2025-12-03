import { cn } from "@/lib/utils";

interface ConversationBubbleProps {
  text: string;
  speaker?: string;
  variant?: "default" | "emotion" | "speakerA" | "speakerB";
  className?: string;
}

const ConversationBubble = ({
  text,
  speaker,
  variant = "default",
  className,
}: ConversationBubbleProps) => {
  const variantStyles = {
    default: "bg-card border-border",
    emotion:
      "bg-gradient-to-r from-emotion/10 to-emotion/20 border-emotion/30 shadow-emotion",
    speakerA: "bg-teal-light border-teal/30",
    speakerB: "bg-lavender border-lavender-foreground/20",
  };

  const textStyles = {
    default: "text-foreground",
    emotion: "text-emotion-foreground font-medium",
    speakerA: "text-foreground",
    speakerB: "text-foreground",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border p-4 transition-all",
        variantStyles[variant],
        className
      )}
    >
      {speaker && (
        <p
          className={cn(
            "mb-1 text-xs font-semibold uppercase tracking-wider",
            variant === "speakerA" && "text-primary",
            variant === "speakerB" && "text-lavender-foreground"
          )}
        >
          {speaker}
        </p>
      )}
      <p className={cn("text-sm md:text-base", textStyles[variant])}>{text}</p>
    </div>
  );
};

export default ConversationBubble;
