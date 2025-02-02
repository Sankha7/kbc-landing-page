import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

interface NavbarProps {
  onRegisterClick?: () => void;
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
}

const Navbar = ({
  onRegisterClick = () => {},
  menuItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
  ],
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="block">
              <div className="flex items-center text-3xl md:text-4xl font-bold">
                <span className="text-[#0A2558]">KB</span>
                <span className="text-[#E31E24]">C</span>
                <span className="text-[#E31E24]">.</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#0A2558] hover:text-[#E31E24] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={onRegisterClick}
              className="bg-[#E31E24] hover:bg-[#0A2558] text-white transition-colors"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="text-[#0A2558] hover:text-[#E31E24] transition-colors font-medium py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button
                    onClick={onRegisterClick}
                    className="bg-[#E31E24] hover:bg-[#0A2558] text-white w-full transition-colors"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
