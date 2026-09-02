import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Compass,
  Building,
  Calendar,
  Globe,
} from "lucide-react";
import { Button } from "../ui/button";

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Trust & Verification",
    description:
      "Every member is verified, so you always know exactly who you're doing business with.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth-Focused",
    description:
      "We exist to help Kolkata's entrepreneurs grow through connections, capital, and opportunity.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community First",
    description:
      "A tightly-knit network where members support, mentor, and do business with one another.",
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Long-Term Vision",
    description:
      "Building Kolkata's most trusted business ecosystem, one relationship at a time.",
  },
];

const impactStats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "500+",
    label: "Entrepreneurs",
  },
  {
    icon: <Building className="w-6 h-6" />,
    value: "100+",
    label: "Local Businesses",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    value: "20+",
    label: "Monthly Events",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    value: "5+",
    label: "Industry Sectors",
  },
];

interface AboutSectionProps {
  onCtaClick?: () => void;
}

const AboutSection = ({ onCtaClick = () => {} }: AboutSectionProps) => {
  return (
    <section className="glass-section py-24 overflow-hidden">
      <div className="section-grid" />
      <div className="glow-orb anim-float-slow w-[500px] h-[500px] -top-64 -left-40 opacity-30" />
      <div className="container relative mx-auto px-4">
        {/* Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-14 mb-24">
          <div className="lg:w-1/2 w-full flex flex-col">
            <span className="tag-pill mb-5 self-start">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mt-5 mb-5 leading-tight">
              Join Our Community and Grow Your Business
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              As a member of the Kolkata Business Club, you'll get access to a
              range of exclusive benefits and opportunities to grow your
              business network.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 pb-8 border-b border-border">
              Founded in 2024, Kolkata Business Club began with a simple idea
              &mdash; business is easier, and far more rewarding, when you're
              not doing it alone. Today we're building the city's most
              trusted, curated network of entrepreneurs, business owners, and
              verified service providers.
            </p>
            <Button
              size="lg"
              onClick={onCtaClick}
              className="group self-start bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-[0_0_40px_-8px_hsl(var(--primary)/0.6)] transition-all border-0"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="glow-orb anim-float-medium w-72 h-72 -bottom-10 -right-10 opacity-40" />
              <div className="relative overflow-hidden rounded-2xl border border-accent/15 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
                <img
                  src="/images/about.webp"
                  alt="Unlock Exclusive Benefits and Opportunities to Grow Your Business Network"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="premium-card flex items-center gap-3 absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 px-5 py-3 sm:px-6 sm:py-4">
                <div className="icon-badge w-9 h-9 shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl font-extrabold text-accent leading-tight">
                    Est. 2024
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Kolkata Business Club
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="text-center mb-12">
          <span className="tag-pill mb-5">Our Mission</span>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-foreground mt-5 mb-5">
            What We Stand For
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that shape every introduction, deal, and
            partnership made through the club
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value) => (
            <div key={value.title} className="premium-card group h-full p-7">
              <div className="icon-badge w-12 h-12 mb-5">{value.icon}</div>
              <h4 className="font-serif text-lg font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-accent">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-accent/15 bg-accent/15 overflow-hidden">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 bg-card/40 backdrop-blur-xl backdrop-saturate-150 px-6 py-7"
            >
              <div className="icon-badge w-11 h-11 shrink-0">{stat.icon}</div>
              <div>
                <p className="font-serif text-2xl font-extrabold text-foreground leading-none">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1.5">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
