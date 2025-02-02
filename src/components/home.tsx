import React, { useState } from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import FeaturesSection from "./landing/FeaturesSection";
import StatsSection from "./landing/StatsSection";

import Footer from "./landing/Footer";

import RegistrationDialog from "./landing/RegistrationDialog";

const Home = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegistrationClick = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onRegisterClick={handleRegistrationClick} />

      {/* Add margin-top to account for fixed navbar */}
      <main className="pt-20">
        <HeroSection onCtaClick={handleRegistrationClick} />
        <FeaturesSection />
        <StatsSection />
      </main>

      <Footer />

      <RegistrationDialog
        open={isRegistrationOpen}
        onOpenChange={setIsRegistrationOpen}
      />
    </div>
  );
};

export default Home;
