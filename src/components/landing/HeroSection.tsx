import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import homePageBackgroundImage from "/images/homepageImg.webp";

const EASE = [0.16, 1, 0.3, 1] as const;

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

// Qualitative, not fabricated — see AboutSection.tsx for why real numbers aren't used yet.
const stats = [
  { value: "Verified", label: "Members Only" },
  { value: "Kolkata", label: "Home Base" },
  { value: "Growing", label: "Every Week" },
];

const HeroSection = ({
  title = "Kolkata Business Club",
  subtitle = "The exclusive, verified network for Kolkata's entrepreneurs — join now and start connecting.",
  ctaText = "Get Started",
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
        // @ts-expect-error -- @types/react has camelCase fetchPriority, but through React 18.x
        // (including 18.3) the runtime doesn't recognize it as a standard DOM prop and warns
        // unless it's passed lowercase. React 19 adds it to the DOM property whitelist.
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="glow-orb anim-float-slow w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 opacity-50" />

      {/* Content */}
      <div className="relative min-h-[720px] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center py-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="tag-pill mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
        >
          Private Business Network
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="font-serif text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6 drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-[0_0_40px_-8px_hsl(var(--primary)/0.6)] transition-all border-0"
            onClick={onCtaClick}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-base font-semibold rounded-xl transition-all"
          >
            <a href="#how-it-works">
              <Compass className="mr-2 h-5 w-5" />
              See How It Works
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
