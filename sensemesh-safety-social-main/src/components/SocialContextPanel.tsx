import { Brain, Users } from "lucide-react";
import ConversationBubble from "./ConversationBubble";
import AIInsightCard from "./AIInsightCard";

const SocialContextPanel = () => {
  return (
    <section className="rounded-3xl border border-border/50 bg-card p-6 shadow-card md:p-8">
      {/* Section Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Brain className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground md:text-xl">
            Context AI
          </h2>
          <p className="text-sm text-muted-foreground">
            Understanding Nuance and Tone
          </p>
        </div>
      </div>

      {/* Conversation Timeline */}
      <div className="space-y-4">
        {/* Bubble 1: Emotion-Mapped */}
        <div className="animate-fade-in-up">
          <ConversationBubble
            text={'"I am absolutely thrilled with the result!"'}
            variant="emotion"
          />
          <p className="mt-1.5 ml-4 text-xs text-emotion-foreground">
            ✨ Emotion: Happiness/Excitement detected
          </p>
        </div>

        {/* Bubble 2: Sarcasm Detection */}
        <div className="animate-fade-in-up animation-delay-100">
          <ConversationBubble
            text={'"Oh, that\'s just WONDERFUL news."'}
            variant="default"
          />
          <AIInsightCard
            insight="Context Insight"
            detail="Tone detected is Sarcastic. Speaker means the opposite."
          />
        </div>

        {/* Bubble 3: Group Conversation Splitter */}
        <div className="animate-fade-in-up animation-delay-300">
          <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Group Conversation Splitter
              </p>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <ConversationBubble
                text="I agree."
                speaker="Speaker A"
                variant="speakerA"
              />
              <ConversationBubble
                text="Not yet."
                speaker="Speaker B"
                variant="speakerB"
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Color-coded captions for each person speaking in a group
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialContextPanel;
