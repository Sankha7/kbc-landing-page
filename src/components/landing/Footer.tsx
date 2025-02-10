import React from "react";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

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
    // { icon: <Facebook className="w-5 h-5" />, href: "#" },
    // { icon: <Twitter className="w-5 h-5" />, href: "#" },
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
              <a
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Kolkata Business Club. All rights
            reserved.
          </div>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div> */}
          <div className="flex gap-6">
            <a href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="/about" className="hover:text-white transition-colors">
              About Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
