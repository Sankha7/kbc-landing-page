import React, { Fragment } from "react";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import homePageBackgroundImage from "/images/homepageImg.webp";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const stats = [
  { value: "500+", label: "Entrepreneurs" },
  { value: "100+", label: "Businesses" },
  { value: "20+", label: "Monthly Events" },
];

const HeroSection = ({
  title = "Kolkata Business Club",
  subtitle = "Join the waitlist for the exclusive community app for Kolkata entrepreneurs.",
  ctaText = "Join Waitlist",
  onCtaClick = () => { },
  backgroundImage = homePageBackgroundImage,
}: HeroSectionProps) => {
  return (
    <div className="relative min-h-[720px] w-full bg-background overflow-hidden">
      {/* Full-bleed background image */}
      <img
        src={backgroundImage}
        alt="Kolkata Business Club"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="glow-orb anim-float-slow w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 opacity-50" />

      {/* Content */}
      <div className="relative min-h-[720px] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center py-24">
        <span className="tag-pill mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
          Private Business Network
        </span>

        <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6 drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-[0_0_40px_-8px_hsl(var(--primary)/0.6)] transition-all border-0"
            onClick={onCtaClick}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <a href="#how-it-works">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-base font-semibold rounded-xl transition-all"
            >
              <Compass className="mr-2 h-5 w-5" />
              See How It Works
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {stats.map((stat, index) => (
            <Fragment key={stat.label}>
              <div className="text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                <span className="font-serif text-2xl font-extrabold text-accent">
                  {stat.value}
                </span>{" "}
                <span className="text-sm text-white/70">
                  {stat.label}
                </span>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block h-8 w-px bg-white/20" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
