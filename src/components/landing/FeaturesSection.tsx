import React from "react";
import {
  Network,
  BookOpen,
  Users,
  Calendar,
  Building2,
  Trophy,
} from "lucide-react";

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
    icon: <Network className="w-6 h-6" />,
    title: "Business Networking",
    description:
      "Connect with fellow entrepreneurs and business leaders in Kolkata through our mobile app",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Knowledge Sharing",
    description:
      "Access exclusive content, business insights, and success stories from the community",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Forums",
    description:
      "Engage in discussions, seek advice, and share experiences with other entrepreneurs",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Event Updates",
    description:
      "Stay informed about upcoming business events, workshops, and meetups in Kolkata",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Business Directory",
    description:
      "Discover and connect with local businesses and service providers",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Exclusive Opportunities",
    description:
      "Access to funding opportunities, partnerships, and business deals",
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
        <div className="text-center mb-16">
          <span className="tag-pill mb-5">Features</span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mt-5 mb-5">
            Why Join Kolkata Business Club?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock exclusive benefits and opportunities to grow your business
            network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
