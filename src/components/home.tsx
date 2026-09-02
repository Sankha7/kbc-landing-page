import React from "react";
import HeroSection from "./landing/HeroSection";
import AboutSection from "./about/AboutSection";
import FeaturesSection from "./landing/FeaturesSection";
import HowItWorksSection from "./landing/HowItWorksSection";
import ServicesSection from "./landing/ServicesSection";
import JobsSection from "./landing/JobsSection";
import { appAuthUrl } from "../lib/config";

const Home = () => {
  const goToSignup = () => {
    window.location.href = appAuthUrl("signup");
  };

  return (
    <main>
      <HeroSection onCtaClick={goToSignup} />
      <FeaturesSection />
      <HowItWorksSection onCtaClick={goToSignup} />
      <AboutSection onCtaClick={goToSignup} />
      <ServicesSection onCtaClick={goToSignup} />
      <JobsSection onCtaClick={goToSignup} />
    </main>
  );
};

export default Home;

