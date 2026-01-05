import { Linkedin, Mail } from "lucide-react";
import Layout from "@/components/Layout";

/* =========================
   IMAGE IMPORTS (VITE WAY)
========================= */


// Current Team
import rima from "@/assets/team/rima.jpg";
import ujjwal from "@/assets/team/ujjwal.jpg";
import shreyansh from "@/assets/team/shreyansh.jpg";
import khushi from "@/assets/team/khusi.jpg";
import dipu from "@/assets/team/dipu.jpg";
import harshR from "@/assets/team/harshRanjan.jpg";
import vikash from "@/assets/team/vikash.jpg";
import amritesh from "@/assets/team/amritesh.jpg";
import kaushal from "@/assets/team/kaushal.jpg";
import harshA from "@/assets/team/harshAgrawal.jpg";

/* =========================
   DATA
========================= */

const currentTeamMembers = [
  { id: 11, name: "Rima Muskan", role: "Core Member", department: "EDC IIEST Shibpur", image: rima, linkedin: "https://www.linkedin.com/in/rima-muskan-379a80281/" },
  { id: 12, name: "Ujjwal Kumar", role: "Core Member", department: "EDC IIEST Shibpur", image: ujjwal, linkedin: "https://www.linkedin.com/in/ujjwal-kumar-4763b02b0/" },
  { id: 13, name: "Shreyansh Srivastava", role: "Core Member", department: "EDC IIEST Shibpur", image: shreyansh, linkedin: "https://www.linkedin.com/in/shreyansh-srivastava-29b749250/" },
  { id: 14, name: "Khushi Singal", role: "Core Member", department: "EDC IIEST Shibpur", image: khushi, linkedin: "https://www.linkedin.com/in/khushi-singal/" },
  { id: 15, name: "Dipu Shaw", role: "Core Member", department: "EDC IIEST Shibpur", image: dipu, linkedin: "https://www.linkedin.com/in/dipu-shaw/" },
  { id: 16, name: "Harsh Ranjan", role: "Core Member", department: "EDC IIEST Shibpur", image: harshR, linkedin: "https://www.linkedin.com/in/harshrjn/" },
  { id: 17, name: "Vikash Gopalak", role: "Core Member", department: "EDC IIEST Shibpur", image: vikash, linkedin: "https://www.linkedin.com/in/vikash-gopalak-6a8133260/" },
  { id: 18, name: "Amritesh Kumar", role: "Core Member", department: "EDC IIEST Shibpur", image: amritesh, linkedin: "https://www.linkedin.com/in/amritesh-kumar-773b9929a/" },
  { id: 19, name: "Kaushal Gupta", role: "Core Member", department: "EDC IIEST Shibpur", image: kaushal, linkedin: "https://www.linkedin.com/in/kaushal-kumar-54aa5225a" },
  { id: 20, name: "Harsh Aggarwal", role: "Core Member", department: "EDC IIEST Shibpur", image: harshA, linkedin: "https://www.linkedin.com/in/harshagrawal768/" },
];

/* =========================
   COMPONENT
========================= */

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            OUR TEAM
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation and
            entrepreneurship at EDC IIEST Shibpur.
          </p>
        </div>
      </section>

      {/* Current Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            Current Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {currentTeamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-primary/5 border border-border group-hover:border-primary/50 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:edc.iiests@gmail.com"
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {member.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We're always looking for passionate individuals to join our
            community.
          </p>
          <a
            href="mailto:iiests.edc@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            <Mail className="h-5 w-5" />
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
