import { ReactNode } from "react";

interface ModeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  variant: "deaf" | "blind" | "mute" | "elder";
  onClick?: () => void;
}

const variantClasses = {
  deaf: "mode-card-deaf",
  blind: "mode-card-blind",
  mute: "mode-card-mute",
  elder: "mode-card-elder",
};

const iconBgClasses = {
  deaf: "bg-deaf-accent/20",
  blind: "bg-blind-accent/20",
  mute: "bg-mute-accent/20",
  elder: "bg-elder-accent/20",
};

const iconColorClasses = {
  deaf: "text-deaf-accent",
  blind: "text-blind-accent",
  mute: "text-mute-accent",
  elder: "text-elder-accent",
};

const titleColorClasses = {
  deaf: "text-deaf-foreground",
  blind: "text-blind-foreground",
  mute: "text-mute-foreground",
  elder: "text-elder-foreground",
};

export const ModeCard = ({ title, description, icon, variant, onClick }: ModeCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`mode-card ${variantClasses[variant]} w-full text-left group`}
    >
      <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${iconBgClasses[variant]} transition-transform duration-300 group-hover:scale-110`}>
        <span className={iconColorClasses[variant]}>{icon}</span>
      </div>
      <h3 className={`font-display text-xl font-semibold ${titleColorClasses[variant]} mb-2`}>
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className={`mt-4 flex items-center gap-2 text-sm font-medium ${iconColorClasses[variant]} opacity-0 transform translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0`}>
        <span>Enter Mode</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </button>
  );
};
