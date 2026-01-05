import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              EDC IIEST Shibpur
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to EDCell! Entrepreneurship Development Cell was set up in the
                year 2009 under the AICTE initiative and is working under the guidance
                of the Department of Human Resources Management in co-ordination with
                NRDC-IIEST IFC, TCGTBI and now with IIC IIESTS.
              </p>
              <p>
                We enable smooth and efficient interaction between its principal
                components spanning students, faculty, working professionals, aspiring
                and existing entrepreneurs, mentors, angel investors, and venture
                capitalists.
              </p>
              <p>
                We're connected with other agencies of our institute involved in
                entrepreneurship and innovation like Institution's Innovation Council
                (IIC), Tagore Centre for Green Technology Business Incubation, NRDC
                IIEST Innovation Facilitation Centre (IFC), IPR Cell, etc.
              </p>
              <p>
                We share the common belief that for India to emerge as a world power,
                the youth has to break the shackles of prejudices and inertia that has
                kept them from starting up. Creating an entrepreneurial ecosystem to
                provide the platform for individuals with creative minds and ideas with
                potential for substantial business opportunities, is what we strive
                towards continually.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="hero">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="hero-outline">
                <MessageCircle className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
                alt="EDC Event"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
