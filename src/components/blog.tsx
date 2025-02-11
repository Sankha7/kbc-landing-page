import React, { useState } from "react";
import Navbar from "./landing/Navbar";

import Footer from "./landing/Footer";
import { ToastContainer } from 'react-toastify';
import RegistrationDialog from "./landing/RegistrationDialog";
import BlogsSection from "./landing/BlogsSection";

const Blog = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegistrationClick = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer/>
      <Navbar onRegisterClick={handleRegistrationClick} />

      {/* Add margin-top to account for fixed navbar */}
      <main className="mt-10">
        <BlogsSection/>
      </main>

      <Footer />

      <RegistrationDialog
        open={isRegistrationOpen}
        onOpenChange={setIsRegistrationOpen}
      />
    </div>
  );
};

export default Blog;
