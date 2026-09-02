import React from "react";
import { ArrowRight, BadgeCheck, CalendarHeart, LineChart, Megaphone } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const ServiceCard = ({ icon, title, description, tags }: ServiceCardProps) => {
  return (
    <div className="premium-card group flex h-full flex-col p-8">
      <div className="icon-badge w-14 h-14 mb-6">{icon}</div>

      <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-accent">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

interface ServicesSectionProps {
  services?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    tags: string[];
  }>;
}

const defaultServices = [
  {
    icon: <BadgeCheck className="w-7 h-7" />,
    title: "Membership Plans",
    description:
      "Flexible membership tiers tailored to your business size, stage, and networking goals.",
    tags: ["TIERED PLANS", "PRIORITY ACCESS"],
  },
  {
    icon: <CalendarHeart className="w-7 h-7" />,
    title: "Event Hosting & Sponsorship",
    description:
      "We plan, host, and promote networking events, workshops, and business meetups across Kolkata.",
    tags: ["EVENT PLANNING", "SPONSORSHIP"],
  },
  {
    icon: <LineChart className="w-7 h-7" />,
    title: "Business Consulting",
    description:
      "Get expert guidance on growth strategy, operations, and market expansion from experienced mentors.",
    tags: ["STRATEGY", "MENTORSHIP"],
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: "Advertising & Promotion",
    description:
      "Showcase your business to Kolkata's most active community of entrepreneurs and decision makers.",
    tags: ["BRAND REACH", "FEATURED LISTING"],
  },
];

const ServicesSection = ({
  services = defaultServices,
}: ServicesSectionProps) => {
  return (
    <section className="glass-section py-24 overflow-hidden">
      <div className="section-grid" />
      <div className="glow-orb anim-float-slow w-[500px] h-[500px] -bottom-64 -left-40 opacity-40" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <span className="tag-pill mb-5">Services</span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mt-5 mb-5">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything Kolkata Business Club offers to help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tags={service.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
