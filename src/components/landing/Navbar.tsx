import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link, NavLink, useLocation } from "react-router-dom";
import { appAuthUrl } from "@/lib/config";

interface NavbarProps {
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
}

const Navbar = ({
  menuItems = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ],
}: NavbarProps) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsScrolled(window.scrollY > 40);
  }, [location.pathname]);

  const isTransparent = location.pathname === "/" && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-24 flex items-center transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-background/40 backdrop-blur-2xl backdrop-saturate-200 border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="block shrink-0">
            <img src="/images/logo.png" alt="KBC Logo" className="w-32" />
          </Link>

          {/* Desktop pill nav */}
          <div
            className={`hidden md:flex items-center rounded-full border p-1.5 pl-6 shadow-lg transition-all duration-300 ${
              isTransparent
                ? "border-white/20 bg-white/5 backdrop-blur-xl"
                : "border-white/10 bg-background/30 backdrop-blur-xl"
            }`}
          >
            <div className="flex items-center gap-7 pr-5">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-accent"
                        : isTransparent
                          ? "text-white hover:text-accent"
                          : "text-foreground hover:text-accent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

            </div>
            <a
              href={appAuthUrl("login")}
              className={`text-sm font-semibold transition-colors mr-4 ${
                isTransparent
                  ? "text-white hover:text-accent"
                  : "text-foreground hover:text-accent"
              }`}
            >
              Login
            </a>
            <Button
              asChild
              className="rounded-full h-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-6 py-2.5 border-0 transition-all"
            >
              <a href={appAuthUrl("signup")}>Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-1">

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="open menu"
                  className={`rounded-full ${
                    isTransparent
                      ? "text-white hover:text-white hover:bg-white/10"
                      : ""
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="text-foreground hover:text-accent transition-colors font-medium py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href={appAuthUrl("login")}
                    className="text-foreground hover:text-accent transition-colors font-medium py-2"
                  >
                    Login
                  </a>
                  <Button
                    asChild
                    className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white w-full border-0 transition-all"
                  >
                    <a href={appAuthUrl("signup")}>Get Started</a>
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
