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
  playStoreUrl = "https://play.google.com/store/apps/details?id=com.kolkata.business.club",
  ctaText = "Join Waitlist",
  onCtaClick = () => {},
  backgroundImage = homePageBackgroundImage,
}: HeroSectionProps) => {
  return (
    <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <img
        src={backgroundImage}
        alt="Kolkata Business Club background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-slate-900/70" />

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
            className="bg-orange-800 hover:bg-orange-900 text-white px-8 py-6 text-lg"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
            <div className="mt-4 flex flex-col items-center">
              <div className="mt-6 flex items-center gap-6">

                <div className="relative">
                  <Link
                    to={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="h-12 drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                    />
                  </Link>
                  <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>


                <div className="relative">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Coming soon on App Store"
                    className="h-12 opacity-50 drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                  />
                </div>

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
