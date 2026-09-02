import React from "react";
import { Users, Building, Calendar, Globe } from "lucide-react";

interface Stat {
  id: number;
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

interface StatsSectionProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    id: 1,
    icon: <Users className="w-7 h-7" />,
    value: "500+",
    label: "Entrepreneurs",
    description: "Expected to join in first month",
  },
  {
    id: 2,
    icon: <Building className="w-7 h-7" />,
    value: "100+",
    label: "Local Businesses",
    description: "Already expressed interest",
  },
  {
    id: 3,
    icon: <Calendar className="w-7 h-7" />,
    value: "20+",
    label: "Monthly Events",
    description: "Planned for members",
  },
  {
    id: 4,
    icon: <Globe className="w-7 h-7" />,
    value: "5+",
    label: "Industry Sectors",
    description: "Represented in our network",
  },
];

const StatsSection = ({ stats = defaultStats }: StatsSectionProps) => {
  return (
    <section className="relative w-full py-24 px-4 bg-background overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-pill mb-5">By The Numbers</span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mt-5 mb-5">
            Growing Business Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Join Kolkata's fastest-growing business network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="premium-card p-8 text-center cursor-pointer"
            >
              <div className="icon-badge w-14 h-14 mx-auto mb-5">
                {stat.icon}
              </div>
              <div className="font-serif text-4xl font-extrabold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
