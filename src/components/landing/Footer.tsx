import React from "react";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  logo?: string;
  socialLinks?: Array<{
    icon: React.ReactNode;
    href: string;
  }>;
}

const Footer = ({
  logo = "Kolkata Business Club",
  socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/the-kolkata-business-club/" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/kolkatabusinessclub/" },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="flex items-center text-3xl font-bold">
              <span className="text-white">KB</span>
              <span className="text-[#E31E24]">C</span>
              <span className="text-[#E31E24]">.</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Kolkata Business Club. All rights
            reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
