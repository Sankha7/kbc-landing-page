import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, MapPin, TrendingUp } from "lucide-react";
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

const credibilityRow = [
  { icon: ShieldCheck, label: "Verified Members Only" },
  { icon: MapPin, label: "Based in Kolkata" },
  { icon: TrendingUp, label: "Growing Every Week" },
];

const HeroSection = ({
  title = "Kolkata Business Club",
  subtitle = "The exclusive, verified network for Kolkata's entrepreneurs — join now and start connecting.",
  ctaText = "Get Started",
  onCtaClick = () => {},
  backgroundImage = homePageBackgroundImage,
}: HeroSectionProps) => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 110]);

  return (
    <div ref={containerRef} className="relative min-h-[100svh] w-full overflow-hidden bg-[#071A2F]">
      {/* Background image with subtle blue duotone + parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={backgroundImage}
          alt="Victoria Memorial, Kolkata — home of Kolkata Business Club"
          className="h-[112%] w-full object-cover object-[center_28%]"
          loading="eager"
          decoding="async"
          // @ts-expect-error -- @types/react has camelCase fetchPriority, but through React 18.x
          // (including 18.3) the runtime doesn't recognize it as a standard DOM prop and warns
          // unless it's passed lowercase. React 19 adds it to the DOM property whitelist.
          fetchpriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#1261D6] mix-blend-color opacity-[0.22]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2F] via-[#071A2F]/55 to-[#071A2F]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-transparent to-[#071A2F]/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      <div className="grain-overlay" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-20 pt-32 sm:px-8 md:pt-36 lg:px-10 lg:pb-32">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="section-label-alt"
          >
            Private Business Network &middot; Est. 2024
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mt-6 leading-[0.92]"
          >
            <span className="block font-serif text-[16vw] font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem]">
              Kolkata
            </span>
            <span className="mt-1 block text-xl font-semibold uppercase tracking-[0.2em] text-primary sm:text-2xl md:text-3xl">
              Business Club
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="mt-7 max-w-md text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 border-0"
              onClick={onCtaClick}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/85 transition-colors hover:text-white"
            >
              <span className="border-b border-white/40 pb-0.5 group-hover:border-white">
                See how it works
              </span>
              <ArrowRight className="h-4 w-4 -rotate-45 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="mt-12"
          >
            <div className="divider-thin-alt mb-5 max-w-md" />
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {credibilityRow.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/65"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
