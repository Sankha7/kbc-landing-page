import React from "react";

interface HeritageSectionProps {
  image?: string;
  title?: string;
  subtitle?: string;
}

const HeritageSection = ({
  image = "https://images.unsplash.com/photo-1590136000753-f2a6daa6b242?q=80&w=2787&auto=format&fit=crop",
  title = "A Legacy of Business Excellence",
  subtitle = "Since 2024",
}: HeritageSectionProps) => {
  return (
    <section className="relative h-[600px] overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/30" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
        {/* Banner/Plaque Effect */}
        <div className="bg-[#0A2558]/90 p-8 rounded-lg backdrop-blur-sm border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="flex items-center justify-center text-2xl md:text-3xl font-bold mb-2">
            <span className="text-white">KB</span>
            <span className="text-[#E31E24]">C</span>
            <span className="text-[#E31E24]">.</span>
          </div>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default HeritageSection;
