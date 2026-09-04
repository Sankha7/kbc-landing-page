import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Compass,
  Building,
  Calendar,
  Globe,
} from "lucide-react";
import { Button } from "../ui/button";
import { Reveal } from "../ui/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const values = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Trust & Verification",
    description:
      "Every member is verified, so you always know exactly who you're doing business with.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Growth-Focused",
    description:
      "We exist to help Kolkata's entrepreneurs grow through connections, capital, and opportunity.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community First",
    description:
      "A tightly-knit network where members support, mentor, and do business with one another.",
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Long-Term Vision",
    description:
      "Building Kolkata's most trusted business ecosystem, one relationship at a time.",
  },
];

// Deliberately qualitative, not fabricated numbers — the club is early-stage and doesn't
// have hundreds of members yet, so claiming "500+ Entrepreneurs" would be false advertising.
const impactStats = [
  { icon: <Users className="w-4 h-4" />, value: "Verified", label: "Members Only" },
  { icon: <Building className="w-4 h-4" />, value: "Kolkata", label: "Home Base" },
  { icon: <Calendar className="w-4 h-4" />, value: "Growing", label: "Every Week" },
  { icon: <Globe className="w-4 h-4" />, value: "Curated", label: "Business Network" },
];

interface AboutSectionProps {
  onCtaClick?: () => void;
}

const AboutSection = ({ onCtaClick }: AboutSectionProps) => {
  return (
    <section className="section-pale overflow-hidden">
      <div className="section-grid" />

      {/* Editorial split — image dominant, text runs alongside, stats overlap the photo */}
      <div className="container relative mx-auto px-4 pt-24 md:pt-32">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5 lg:pt-6" y={20}>
            <span className="section-label mb-6">About Us</span>
            <h2 className="font-serif text-5xl font-extrabold leading-[1.02] text-foreground sm:text-6xl lg:text-[3.6rem]">
              Business is easier when you're not doing it alone.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              As a member of the Kolkata Business Club, you'll get access to a
              range of exclusive benefits and opportunities to grow your
              business network.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Founded in 2024, KBC began with a simple idea — today we're
              building the city's most trusted, curated network of
              entrepreneurs, business owners, and verified service providers.
            </p>
            <Button
              size="lg"
              onClick={onCtaClick}
              className="group mt-9 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 border-0"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Reveal>

          <Reveal className="relative lg:col-span-7" delay={0.14} y={24}>
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_30px_70px_-24px_rgba(6,19,38,0.4)]">
              <img
                src="/images/about.webp"
                alt="Kolkata Business Club members collaborating"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[16/10]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071A2F]/55 via-transparent to-transparent" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                <Calendar className="h-3.5 w-3.5" />
                Est. 2024
              </div>
            </div>

            {/* Stat strip — overlaps the photo instead of living as its own centered section */}
            <div className="relative z-10 mx-4 -mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-xl backdrop-blur-xl sm:-mt-8 sm:mx-6 lg:grid-cols-4">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2.5 bg-[#0A2342]/95 px-4 py-4 sm:px-5"
                >
                  <span className="text-primary/80">{stat.icon}</span>
                  <div className="min-w-0">
                    <p className="truncate font-serif text-base font-bold leading-none text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 truncate text-[10px] uppercase tracking-wide text-white/60">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* What We Stand For — a numbered editorial list, not a 2x2 card grid */}
      <div className="container relative mx-auto px-4 pb-24 pt-24 md:pb-32 md:pt-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4" y={18}>
            <span className="section-label mb-6">Our Mission</span>
            <h3 className="font-serif text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              What we stand for
            </h3>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
              The principles that shape every introduction, deal, and
              partnership made through the club.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-t border-border">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
                  className="group flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:gap-8"
                >
                  <span className="font-serif text-3xl font-bold text-muted-foreground/25 transition-colors duration-300 group-hover:text-primary/40 sm:w-14 sm:shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="icon-badge h-11 w-11 shrink-0">{value.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-sans text-lg font-bold text-foreground">
                      {value.title}
                    </h4>
                    <p className="mt-1 max-w-xl leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                  <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
