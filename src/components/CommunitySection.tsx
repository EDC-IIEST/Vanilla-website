import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
            <Users className="h-10 w-10 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Connect with like-minded entrepreneurs, mentors, and innovators.
            Be part of a thriving ecosystem that nurtures ideas and transforms
            them into successful ventures.
          </p>

          <Button variant="hero" size="xl">
            Join Our Community <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex justify-center gap-6 mt-10">
            <a
              href="https://www.linkedin.com/company/edciiests/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/edc.iiests/profilecard/?igsh=MTBpd2dkNDFwbXFybg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/edc.iiests/profilecard/?igsh=MTBpd2dkNDFwbXFybg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
