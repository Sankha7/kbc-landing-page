import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Reveal, RevealGroup, RevealItem } from "../ui/reveal";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "1",
    title: "Create Your Profile",
    description:
      "Sign up and tell us about your business — it takes less than two minutes.",
  },
  {
    number: "2",
    title: "Get Verified",
    description:
      "Our admin team reviews and verifies every member, so you always know who you're doing business with.",
  },
  {
    number: "3",
    title: "Grow With the Community",
    description:
      "Connect, message, post jobs, and grow your business through trusted introductions.",
  },
];

interface HowItWorksSectionProps {
  onCtaClick?: () => void;
}

const HowItWorksSection = ({ onCtaClick = () => {} }: HowItWorksSectionProps) => {
  return (
    <section
      id="how-it-works"
      className="glass-section-dark overflow-hidden py-24 scroll-mt-24"
    >
      <div className="glow-orb anim-float-slow w-[600px] h-[600px] -top-64 -left-40 opacity-40" />
      <div className="glow-orb anim-float-medium w-[500px] h-[500px] -bottom-56 -right-32 opacity-30" />

      <div className="container relative mx-auto px-4">
        <Reveal className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white mb-4">
            Three Steps to Get Started
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            From application to your first introduction &mdash; here's what
            joining the club looks like
          </p>
        </Reveal>

        <RevealGroup className="relative grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-white/40" />

          {steps.map((step) => (
            <RevealItem key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white font-serif text-2xl font-extrabold text-[#0A2558] shadow-lg">
                {step.number}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-white/80 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="text-center mb-16" delay={0.15}>
          <Button
            size="lg"
            onClick={onCtaClick}
            className="group rounded-full bg-white text-[#0A2558] hover:bg-white/90 px-8 py-6 text-base font-bold border-0 shadow-lg transition-all"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorksSection;
