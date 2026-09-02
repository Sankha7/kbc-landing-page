import React from "react";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface FooterProps {
  onCtaClick?: () => void;
  socialLinks?: Array<{
    name: string;
    icon: React.ReactNode;
    href: string;
  }>;
}

const Footer = ({
  onCtaClick = () => {},
  socialLinks = [
    { 
      name: "Facebook", 
      icon: <Facebook className="w-5 h-5" />, 
      href: "https://www.facebook.com/profile.php?id=61572514180460" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/company/the-kolkata-business-club" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://www.instagram.com/kolkatabusinessclub" 
    },
  ],
}: FooterProps) => {
  return (
    <footer className="glass-section text-muted-foreground overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.5), transparent)",
        }}
      />
      <div className="glow-orb w-[500px] h-[500px] -bottom-64 left-1/2 -translate-x-1/2 opacity-20" />
      <div className="container relative mx-auto px-4 pt-16">
        {/* CTA band */}
        <div className="premium-card flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10 mb-16">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-foreground mb-2">
              Ready to grow your network?
            </h3>
            <p className="text-sm text-muted-foreground">
              Join the waitlist and be first in line when Kolkata Business Club opens its doors.
            </p>
          </div>
          <Button
            size="lg"
            onClick={onCtaClick}
            className="group shrink-0 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-base font-semibold rounded-xl border-0 transition-all"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 pb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="block mb-4">
              <img src="/images/logo.png" alt="Kolkata Business Club" className="w-32" />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Kolkata's premier private business network, connecting
              entrepreneurs and business leaders through trusted introductions.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="icon-badge w-10 h-10 hover:text-accent hover:border-accent/50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-200">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/delete-account"
                  className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-200"
                >
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Kolkata, West Bengal, India</li>
              <li>
                <a
                  href="mailto:info@kolkatabusinessclub.com"
                  className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-200"
                >
                  info@kolkatabusinessclub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm py-8">
          <div>
            © {new Date().getFullYear()} Kolkata Business Club. All rights
            reserved.
          </div>
          <Link to="/privacy-policy" className="inline-block hover:text-accent transition-colors duration-200">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
