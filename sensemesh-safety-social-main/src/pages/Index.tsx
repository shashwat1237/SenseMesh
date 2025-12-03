import Header from "@/components/Header";
import SafetyPanel from "@/components/SafetyPanel";
import SocialContextPanel from "@/components/SocialContextPanel";
import FooterAction from "@/components/FooterAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        {/* Page Title */}
        <div className="mb-8 text-center animate-fade-in-up">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Context & Safety{" "}
            <span className="bg-gradient-to-r from-primary to-teal-glow bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Real-time environmental awareness and social context interpretation
            powered by AI — your personal safety net and social interpreter.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Top Panel: Environmental Safety */}
          <SafetyPanel />

          {/* Bottom Panel: Social Context AI */}
          <SocialContextPanel />
        </div>

        {/* Footer Action */}
        <FooterAction />
      </main>
    </div>
  );
};

export default Index;
