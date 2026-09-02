import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TitleUpdater from "./TitleUpdater";
import { appAuthUrl } from "./lib/config";

function Layout() {
  return (
    <>
      <TitleUpdater />
      <div className="min-h-screen">
        <ToastContainer position="top-center" autoClose={4000} />
        <Navbar />

        <Outlet />

        <Footer onCtaClick={() => { window.location.href = appAuthUrl("signup"); }} />
      </div>
    </>
  );
}

export default Layout;
