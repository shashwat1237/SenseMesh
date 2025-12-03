import { AlertTriangle, Mic } from "lucide-react";
import SoundWaveIndicator from "./SoundWaveIndicator";
import SignLanguageIcon from "./SignLanguageIcon";
import HapticPattern from "./HapticPattern";

const AlertCard = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Sound Input Indicator */}
      <div className="mb-4 flex items-center justify-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-danger/10">
          <Mic className="h-5 w-5 text-danger" />
        </div>
        <div className="flex items-center gap-2">
          <SoundWaveIndicator />
          <span className="text-sm font-medium text-muted-foreground">
            Sound Detected
          </span>
        </div>
      </div>

      {/* Main Alert Card */}
      <div className="relative overflow-hidden rounded-2xl border border-danger/30 bg-gradient-to-br from-danger/5 to-danger/15 p-6 shadow-danger animate-pulse-danger">
        {/* Urgent Badge */}
        <div className="absolute right-4 top-4">
          <div className="flex items-center gap-1.5 rounded-full bg-danger px-3 py-1">
            <AlertTriangle className="h-3.5 w-3.5 text-primary-foreground" />
            <span className="text-xs font-semibold text-primary-foreground">
              URGENT
            </span>
          </div>
        </div>

        {/* Alert Content */}
        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-danger">
            Environmental Alert
          </p>
          <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            FIRE ALARM DETECTED
          </h3>
        </div>

        {/* Multi-Sensory Output Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Visual Sign */}
          <div className="flex flex-col items-center justify-center rounded-xl bg-card/50 p-4 backdrop-blur-sm">
            <SignLanguageIcon />
          </div>

          {/* Haptic Pattern */}
          <div className="flex flex-col items-center justify-center rounded-xl bg-card/50 p-4 backdrop-blur-sm">
            <HapticPattern />
          </div>

          {/* Caption Output */}
          <div className="flex flex-col items-center justify-center rounded-xl bg-card/50 p-4 backdrop-blur-sm">
            <div className="mb-2 rounded-lg bg-danger px-4 py-2">
              <p className="text-center text-sm font-bold text-primary-foreground">
                EMERGENCY: EVACUATE NOW!
              </p>
            </div>
            <p className="text-xs font-medium text-danger-foreground">
              Caption: Clear Text Alert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
