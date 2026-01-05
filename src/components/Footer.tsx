import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import edcLogo from "@/assets/edc-logo.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
    

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="bg-foreground/95 rounded-lg px-3 py-2">
                <img src={edcLogo} alt="EDC Logo" className="h-10 w-auto" />
              </div>
            </Link>
            <p className="text-foreground font-semibold mb-1">
              Entrepreneurship Development Cell
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Indian Institute of Engineering Science and Technology, Shibpur
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>IIEST, Shibpur<br />Howrah, West Bengal, 711103</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:edc@iiests.ac.in" className="hover:text-primary transition-colors">
                  iiests.edc@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Events", path: "/events" },
                { name: "Team", path: "/team" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: "Help Center", path: "mailto:iiests.edc@gmail.com" },
                { name: "Contact Us", path: "mailto:iiests.edc@gmail.com" },
                { name: "Partnership", path: "mailto:iiests.edc@gmail.com" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-of-service" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect With Us</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Follow us on social media to stay connected
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/edciiests/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/edc.iiests/profilecard/?igsh=MTBpd2dkNDFwbXFybg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/edc.iiests/profilecard/?igsh=MTBpd2dkNDFwbXFybg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <p>© 2016 EDC IIEST. All rights reserved.</p>
          <p>Designed with ❤️ by EDC Web Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
