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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({
  icon,
  title = "Feature Title",
  description = "Feature description goes here",
  index,
}: FeatureCardProps) => {
  return (
    <div className="premium-card group relative h-full p-8">
      <span className="absolute top-6 right-7 font-serif text-sm font-bold text-accent/25 transition-colors duration-300 group-hover:text-accent/50">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="icon-badge w-14 h-14 mb-6">{icon}</div>
      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

interface FeaturesSectionProps {
  features?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

const defaultFeatures = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Verified Membership",
    description:
      "Every member is personally vetted and approved before joining, so you always know who you're dealing with",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Digital Member Card",
    description:
      "Your verified Blue Tick and digital executive pass — shareable proof of your standing in the club",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Direct Messaging",
    description:
      "Message any verified member directly and start real conversations, no middlemen or forms",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Jobs & Gigs Board",
    description:
      "Post opportunities or apply to freelance gigs and full-time roles shared exclusively within the club",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Service Provider Directory",
    description:
      "Find and hire verified consultants, freelancers, and service providers by category",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Timeline",
    description:
      "Share updates, milestones, and announcements with the whole club in one shared feed",
  },
];

const FeaturesSection = ({
  features = defaultFeatures,
}: FeaturesSectionProps) => {
  return (
    <section className="glass-section py-24 overflow-hidden">
      <div className="section-grid" />
      <div className="glow-orb anim-float-medium w-[500px] h-[500px] -top-64 -right-40 opacity-40" />
      <div className="container relative mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="tag-pill mb-5">Features</span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mt-5 mb-5">
            Why Join Kolkata Business Club?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock exclusive benefits and opportunities to grow your business
            network
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <RevealItem key={index}>
              <FeatureCard
                index={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

export default FeaturesSection;
