import React from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
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
}

const FeatureCard = ({
  icon,
  title = "Feature Title",
  description = "Feature description goes here",
}: FeatureCardProps) => {
  return (
    <Card
      className="h-full bg-white hover:shadow-lg transition-all duration-200 cursor-pointer"
    >
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-blue-100 hover:bg-blue-200">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
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
    icon: <Network className="w-6 h-6 text-blue-600" />,
    title: "Business Networking",
    description:
      "Connect with fellow entrepreneurs and business leaders in Kolkata through our mobile app",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Knowledge Sharing",
    description:
      "Access exclusive content, business insights, and success stories from the community",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Community Forums",
    description:
      "Engage in discussions, seek advice, and share experiences with other entrepreneurs",
  },
  {
    icon: <Calendar className="w-6 h-6 text-blue-600" />,
    title: "Event Updates",
    description:
      "Stay informed about upcoming business events, workshops, and meetups in Kolkata",
  },
  {
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    title: "Business Directory",
    description:
      "Discover and connect with local businesses and service providers",
  },
  {
    icon: <Trophy className="w-6 h-6 text-blue-600" />,
    title: "Exclusive Opportunities",
    description:
      "Access to funding opportunities, partnerships, and business deals",
  },
];

const FeaturesSection = ({
  features = defaultFeatures,
}: FeaturesSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Why Join Kolkata Business Club?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock exclusive benefits and opportunities to grow your business
            network
          </p>
          <Separator className="w-24 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
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

