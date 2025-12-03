import { Sparkles } from "lucide-react";

interface AIInsightCardProps {
  insight: string;
  detail: string;
}

const AIInsightCard = ({ insight, detail }: AIInsightCardProps) => {
  return (
    <div className="animate-fade-in-up animation-delay-200 ml-4 flex items-start gap-3 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 p-3 shadow-teal">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Sparkles className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {insight}
        </p>
        <p className="text-sm text-muted-foreground">{detail}</p>
      </div>
    </div>
  );
};

export default AIInsightCard;
