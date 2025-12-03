import { Shield, Volume2, Bell, Car, User } from "lucide-react";
import AlertCard from "./AlertCard";

const SafetyPanel = () => {
  const detectedSounds = [
    { icon: Volume2, label: "Sirens" },
    { icon: Bell, label: "Doorbell" },
    { icon: User, label: "Name Calling" },
    { icon: Car, label: "Car Horns" },
  ];

  return (
    <section className="rounded-3xl border border-border/50 bg-card p-6 shadow-card md:p-8">
      {/* Section Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-danger/10">
          <Shield className="h-5 w-5 text-danger" />
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground md:text-xl">
            Ambient Awareness Mode
          </h2>
          <p className="text-sm text-muted-foreground">
            Your Real-Time Safety Net
          </p>
        </div>
      </div>

      {/* Alert Card */}
      <AlertCard />

      {/* Detected Sounds List */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <span className="text-xs font-medium text-muted-foreground">
          Detects:
        </span>
        {detectedSounds.map((sound, index) => (
          <div
            key={sound.label}
            className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 animate-fade-in-up"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <sound.icon className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs font-medium text-foreground">
              {sound.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafetyPanel;
