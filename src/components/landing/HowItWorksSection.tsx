import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, UserPlus, ShieldCheck, Handshake } from "lucide-react";
import { Reveal } from "../ui/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  offset: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Sign up and tell us about your business — it takes less than two minutes.",
    icon: UserPlus,
    offset: "lg:translate-y-0",
  },
  {
    number: "02",
    title: "Get Verified",
    description:
      "Our admin team reviews and verifies every member, so you always know who you're doing business with.",
    icon: ShieldCheck,
    offset: "lg:translate-y-16",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Message, post jobs, and grow your business through trusted introductions.",
    icon: Handshake,
    offset: "lg:translate-y-0",
  },
];

interface HowItWorksSectionProps {
  onCtaClick?: () => void;
}

const HowItWorksSection = ({ onCtaClick = () => {} }: HowItWorksSectionProps) => {
  return (
    <section
      id="how-it-works"
      className="section-deep relative overflow-hidden py-24 md:py-36 scroll-mt-20"
    >
      <div className="grain-overlay" />
      <div className="container relative mx-auto px-4">
        <div className="mb-20 flex flex-col gap-8 md:mb-28 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <span className="section-label-alt">How It Works</span>
            <h2 className="mt-5 font-serif text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl">
              Three steps, no gatekeeping
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm md:text-right">
            <p className="text-base leading-relaxed text-white/65">
              From application to your first introduction &mdash; here's what
              joining the club actually looks like.
            </p>
          </Reveal>
        </div>

        {/* Connecting path — desktop only */}
        <div className="relative hidden lg:block">
          <svg
            className="pointer-events-none absolute left-0 top-[4.5rem] h-24 w-full"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M 100 10 C 400 10, 400 90, 600 90 C 800 90, 800 10, 1100 10"
              stroke="hsl(var(--primary) / 0.35)"
              strokeWidth="1.5"
              strokeDasharray="2 10"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.6, ease: EASE }}
            />
          </svg>
        </div>

        <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: EASE }}
              className={`relative ${step.offset}`}
            >
              <div className="relative">
                <span className="text-outline block font-serif text-[6.5rem] font-bold leading-none sm:text-[8rem]">
                  {step.number}
                </span>
                <div className="-mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-[#0a1f3d] text-primary shadow-lg">
                  <step.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs leading-relaxed text-white/65">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-20 lg:mt-28" delay={0.15}>
          <button
            type="button"
            onClick={onCtaClick}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-[#0A1F3D] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90"
          >
            Get Started
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorksSection;
