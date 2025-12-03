import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Unify every sense.
              <br />
              <span className="text-primary">Eliminate every barrier.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your inclusive conversation today.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 glow-primary text-lg px-8 py-6 rounded-full"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Experience SenseMesh
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Supporting Text */}
          <p className="text-sm text-muted-foreground pt-4">
            Available for iOS and Android • Free to download
          </p>
        </div>
      </div>
    </section>
  );
};
