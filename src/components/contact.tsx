import React from "react";
import { ContactSection } from "./contact/ContactSection";

const Contact = () => {

  return (
    <>
      {/* Add margin-top to account for fixed navbar */}
      <main>
        <ContactSection/>
      </main>
    </>
  );
};

export default Contact;
