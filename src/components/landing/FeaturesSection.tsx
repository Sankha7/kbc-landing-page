import React from "react";
import {
  ShieldCheck,
  MessageSquare,
  Briefcase,
  Building2,
  CreditCard,
  Users,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  span: string;
  featured?: boolean;
}

interface FeaturesSectionProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: <ShieldCheck />,
    title: "Verified Membership",
    description:
      "Every member is personally vetted and approved before joining, so you always know who you're dealing with. It's the foundation everything else in the club is built on.",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    icon: <CreditCard />,
    title: "Digital Member Card",
    description:
      "Your verified Blue Tick and digital executive pass — shareable proof of your standing in the club.",
    span: "lg:col-span-2",
  },
  {
    icon: <MessageSquare />,
    title: "Direct Messaging",
    description:
      "Message any verified member directly and start real conversations, no middlemen or forms.",
    span: "lg:col-span-1",
  },
  {
    icon: <Briefcase />,
    title: "Jobs & Gigs Board",
    description:
      "Post opportunities or apply to freelance gigs and full-time roles shared exclusively within the club.",
    span: "lg:col-span-1",
  },
  {
    icon: <Building2 />,
    title: "Service Provider Directory",
    description:
      "Find and hire verified consultants, freelancers, and service providers by category.",
    span: "lg:col-span-2",
  },
  {
    icon: <Users />,
    title: "Community Timeline",
    description:
      "Share updates, milestones, and announcements with the whole club in one shared feed.",
    span: "lg:col-span-2",
  },
];

const FeatureTile = ({ feature, index }: { feature: Feature; index: number }) => {
  if (feature.featured) {
    return (
      <div className={`bento-tile group ${feature.span} min-h-[19rem]`}>
        <div className="pointer-events-none absolute -right-8 -top-8 select-none font-serif text-[11rem] font-bold leading-none text-primary/[0.06]">
          01
        </div>
        <div className="relative">
          <div className="icon-badge h-16 w-16 border-primary/25">
            {React.cloneElement(feature.icon as React.ReactElement, { className: "h-8 w-8" })}
          </div>
          <h3 className="mt-8 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {feature.title}
          </h3>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {feature.description}
          </p>
        </div>
        <span className="relative mt-8 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          The foundation of the club
        </span>
      </div>
    );
  }

  return (
    <div className={`bento-tile group ${feature.span}`}>
      <div className="flex items-start justify-between">
        <div className="icon-badge h-12 w-12">
          {React.cloneElement(feature.icon as React.ReactElement, { className: "h-5 w-5" })}
        </div>
        <span className="font-serif text-sm font-bold text-muted-foreground/30 transition-colors duration-300 group-hover:text-primary/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-6">
        <h3 className="font-sans text-lg font-bold text-foreground">{feature.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const FeaturesSection = ({ features = defaultFeatures }: FeaturesSectionProps) => {
  return (
    <section className="section-soft relative py-24 md:py-32 overflow-hidden">
      <div className="container relative mx-auto px-4">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <span className="section-label">Why Join</span>
            <h2 className="mt-5 font-serif text-5xl font-extrabold leading-[1.02] text-foreground sm:text-6xl">
              Six reasons the club works
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm md:text-right">
            <p className="text-base leading-relaxed text-muted-foreground">
              Unlock exclusive benefits and opportunities to grow your business
              network — built around one thing: knowing exactly who you're dealing with.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(10.5rem,auto)]">
          {features.map((feature, index) => (
            <RevealItem key={feature.title} className={feature.span}>
              <FeatureTile feature={feature} index={index} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

export default FeaturesSection;
