import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO",
    company: "Tech Innovations Kolkata",
    content:
      "Joining the Kolkata Business Club has been transformative for our business. The networking opportunities and resources provided are invaluable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
  },
  {
    id: 2,
    name: "Priya Banerjee",
    role: "Founder",
    company: "Bengal Artisans Collective",
    content:
      "The mentorship and support from fellow members have helped me scale my traditional crafts business to new heights.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    id: 3,
    name: "Amit Shah",
    role: "Managing Director",
    company: "Eastern Trade Links",
    content:
      "The business resources and connections made through the club have opened up new markets for our export business.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
  },
];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  return (
    <section className="w-full min-h-[600px] bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our valued members about their experiences
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="p-8 bg-white">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="w-12 h-12 text-blue-600 mb-6" />
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4"
                    />
                    <p className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-blue-600">{testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
