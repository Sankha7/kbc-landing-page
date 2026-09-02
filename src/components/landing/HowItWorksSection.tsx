import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "1",
    title: "Join the Waitlist",
    description:
      "Tell us about your business and what you're looking for. It takes less than two minutes to apply.",
  },
  {
    number: "2",
    title: "Get Verified & Connected",
    description:
      "Once invited, complete your profile and get matched with verified entrepreneurs in your industry.",
  },
  {
    number: "3",
    title: "Grow With the Community",
    description:
      "Attend events, close deals, and grow your business through trusted introductions and mentorship.",
  },
];

const quotes = [
  "The club helped me raise the bar and rewrite my business playbook.",
  "Over 70% of my new clients now come through referrals from KBC members.",
  "KBC has been a genuine game changer for my business growth.",
  "Real relationships, real deals — closed within the first 3 months.",
  "Friends who became my most reliable business partners.",
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
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white mb-4">
            Three Steps to Get Started
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            From application to your first introduction &mdash; here's what
            joining the club looks like
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-white/40" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white font-serif text-2xl font-extrabold text-[#0A2558] shadow-lg">
                {step.number}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-white/80 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button
            size="lg"
            onClick={onCtaClick}
            className="group rounded-full bg-white text-[#0A2558] hover:bg-white/90 px-8 py-6 text-base font-bold border-0 shadow-lg transition-all"
          >
            Join Waitlist
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/60">
          What Members Are Saying
        </p>
      </div>

      {/* Auto-scrolling proof strip */}
      <div className="relative overflow-hidden marquee-pause">
        <div className="flex w-max gap-5 px-4 sm:px-8 animate-marquee">
          {[...quotes, ...quotes].map((quote, index) => (
            <div
              key={index}
              className="shrink-0 w-[260px] sm:w-[300px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl backdrop-saturate-150 p-6"
            >
              <p className="text-white text-base leading-relaxed">{quote}</p>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#0A2558] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#0A2558] to-transparent" />
      </div>
    </section>
  );
};

export default HowItWorksSection;
