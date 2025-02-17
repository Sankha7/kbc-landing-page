import React, { useState } from "react";
import Navbar from "./landing/Navbar";

import Footer from "./landing/Footer";
import { ToastContainer } from 'react-toastify';
import RegistrationDialog from "./landing/RegistrationDialog";
import AboutSection from "./about/AboutSection";

const About = () => {

  return (
    <>
      {/* Add margin-top to account for fixed navbar */}
      <main>
        <AboutSection/>
      </main>
    </>
  );
};

export default About;
