import React from "react";
import { Card } from "@/components/ui/card";
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
    icon: <Users className="w-8 h-8 text-blue-600" />,
    value: "500+",
    label: "Entrepreneurs",
    description: "Expected to join in first month",
  },
  {
    id: 2,
    icon: <Building className="w-8 h-8 text-blue-600" />,
    value: "100+",
    label: "Local Businesses",
    description: "Already expressed interest",
  },
  {
    id: 3,
    icon: <Calendar className="w-8 h-8 text-blue-600" />,
    value: "20+",
    label: "Monthly Events",
    description: "Planned for members",
  },
  {
    id: 4,
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    value: "5+",
    label: "Industry Sectors",
    description: "Represented in our network",
  },
];

const StatsSection = ({ stats = defaultStats }: StatsSectionProps) => {
  return (
    <section className="w-full min-h-[600px] bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Growing Business Community
          </h2>
          <p className="text-lg text-gray-600">
            Join Kolkata's fastest-growing business network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Card key={stat.id} className="p-6 bg-white text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 rounded-full bg-blue-50">{stat.icon}</div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {stat.label}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {stat.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
