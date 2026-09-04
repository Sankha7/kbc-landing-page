import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { appAuthUrl } from "@/lib/config";
import ThemeToggle from "../ui/theme-toggle";

interface NavbarProps {
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
}

const EASE = [0.16, 1, 0.3, 1] as const;

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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsScrolled(window.scrollY > 48);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const isTransparent = location.pathname === "/" && !isScrolled && !mobileOpen;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          layout
          transition={{ layout: { duration: 0.45, ease: EASE } }}
          className={`flex w-full items-center justify-between transition-colors duration-500 ${
            isScrolled
              ? "mt-3 max-w-4xl rounded-full border border-border/80 bg-background/90 px-5 py-2.5 shadow-[0_8px_30px_-12px_rgba(6,19,38,0.25)] backdrop-blur-xl dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
              : "mt-0 max-w-7xl rounded-none border-transparent bg-transparent px-2 py-5"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src="/images/logo.png"
              alt="Kolkata Business Club"
              className={`transition-all duration-500 ${isScrolled ? "w-12" : "w-16 md:w-20"}`}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                className={({ isActive }) =>
                  `relative py-1 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-primary"
                      : isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/70 hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle
              className={isTransparent ? "text-white hover:text-white hover:bg-white/10" : ""}
            />
            <a
              href={appAuthUrl("login")}
              className={`text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                isTransparent ? "text-white/90 hover:text-white" : "text-foreground/70 hover:text-primary"
              }`}
            >
              Login
            </a>
            <a
              href={appAuthUrl("signup")}
              className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-[13px] font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile trigger */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle
              className={isTransparent ? "text-white hover:text-white hover:bg-white/10" : ""}
            />
            <button
              type="button"
              aria-label="open menu"
              onClick={() => setMobileOpen(true)}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                isTransparent ? "text-white hover:bg-white/10" : "text-foreground hover:bg-secondary"
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Full-screen editorial mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#061326] text-white"
          >
            <div className="grain-overlay" />
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-serif text-lg font-bold">KBC</span>
              <button
                type="button"
                aria-label="close menu"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + index * 0.06, ease: EASE }}
                  className="border-b border-white/10 py-4"
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 font-serif text-4xl font-bold transition-colors ${
                        isActive ? "text-primary" : "text-white hover:text-primary"
                      }`
                    }
                  >
                    <span className="text-sm font-sans font-normal text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
              className="flex flex-col gap-4 px-6 pb-10"
            >
              <a
                href={appAuthUrl("login")}
                className="text-sm font-semibold uppercase tracking-wide text-white/70 hover:text-white"
              >
                Login
              </a>
              <a
                href={appAuthUrl("signup")}
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
