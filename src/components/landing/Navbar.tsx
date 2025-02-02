import React from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

interface NavbarProps {
  onRegisterClick?: () => void;
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
}

const Navbar = ({
  onRegisterClick = () => {},
  logo = "Kolkata Business Club",
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
            <a href="#" className="text-2xl font-bold text-blue-900">
              {logo}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-blue-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={onRegisterClick}
              className="bg-blue-900 hover:bg-blue-800 text-white"
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
                      className="text-gray-600 hover:text-blue-900 transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button
                    onClick={onRegisterClick}
                    className="bg-blue-900 hover:bg-blue-800 text-white w-full"
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
