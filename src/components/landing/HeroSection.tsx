import React from "react";
import { Button } from "@/components/ui/button";
import  homePageBackgroundImage  from "/images/homepageImg.webp";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

const HeroSection = ({
  title = "Kolkata Business Club",
  subtitle = "Join the waitlist for the exclusive community app for Kolkata entrepreneurs.",
  appStoreUrl = "#",
  playStoreUrl = "#",
  ctaText = "Join Waitlist",
  onCtaClick = () => {},
  backgroundImage = homePageBackgroundImage,
}: HeroSectionProps) => {
  return (
    <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
          {subtitle}
        </p>

        <div>
          <div className="flex flex-col items-center gap-6">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>

            <div className="mt-4 flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <p className="text-amber-400 text-sm font-semibold tracking-wider uppercase">
                  Coming Soon
                </p>
              </div>
              <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Link
                  to={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on App Store"
                    className="h-10"
                  />
                </Link>
                <Link
                  to={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-900 to-transparent" />
      </div>
    </div>
  );
};

export default HeroSection;
