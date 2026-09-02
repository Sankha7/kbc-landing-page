import React from "react";
import { Quote } from "lucide-react";
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
    <section className="relative w-full py-24 px-4 bg-background overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] -top-48 -right-32 opacity-30" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-pill mb-5">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mt-5 mb-5">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our valued members about their experiences
          </p>
        </div>

        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="premium-card p-10">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="w-10 h-10 text-accent/60 mb-6" />
                    <p className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-8">
                      "{testimonial.content}"
                    </p>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4 border-2 border-accent/40"
                    />
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-accent">{testimonial.company}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 border-accent/30 bg-card hover:bg-accent/10 hover:text-accent" />
          <CarouselNext className="-right-12 border-accent/30 bg-card hover:bg-accent/10 hover:text-accent" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
