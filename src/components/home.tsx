import React, { useState } from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import AboutSection from "./about/AboutSection";
import FeaturesSection from "./landing/FeaturesSection";
import HowItWorksSection from "./landing/HowItWorksSection";
import ServicesSection from "./landing/ServicesSection";
import JobsSection from "./landing/JobsSection";

import Footer from "./landing/Footer";
import { ToastContainer } from 'react-toastify';
import RegistrationDialog from "./landing/RegistrationDialog";

const Home = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegistrationClick = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <>

      {/* No top offset: the hero's full-bleed image sits behind the transparent-at-top navbar */}
      <main>
        <HeroSection onCtaClick={handleRegistrationClick} />
        <FeaturesSection />
        <HowItWorksSection onCtaClick={handleRegistrationClick} />
        <AboutSection onCtaClick={handleRegistrationClick} />
        <ServicesSection />
        <JobsSection />
      </main>

      <RegistrationDialog
        open={isRegistrationOpen}
        onOpenChange={setIsRegistrationOpen}
      />
    </>
  );
};

export default Home;
