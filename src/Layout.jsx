import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";
import { ToastContainer } from 'react-toastify';
import RegistrationDialog from "./components/landing/RegistrationDialog";
import TitleUpdater from "./TitleUpdater";

function Layout() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegistrationClick = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <>
    <TitleUpdater />
    <div className="min-h-screen bg-white">
      <ToastContainer/>
      <Navbar onRegisterClick={handleRegistrationClick} />

      <Outlet />

      <Footer />

      <RegistrationDialog
        open={isRegistrationOpen}
        onOpenChange={setIsRegistrationOpen}
      />
    </div>
    </>
  )
}

export default Layout