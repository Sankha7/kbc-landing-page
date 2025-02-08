import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-gray-100 py-16">
      {/* Section 1 */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-start my-16 gap-10">
        {/* Image */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd"
            alt="About Us"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 w-full px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Our Company
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            We are a team of passionate entrepreneurs and business leaders who
            are committed to delivering excellence in every aspect of our work.
            Our team is dedicated to providing the best services to our clients,
            ensuring satisfaction and success.
          </p>
          <p className="text-gray-700 text-lg">
            With years of experience in the industry, we have consistently
            achieved outstanding results by leveraging innovative solutions and
            a customer-centric approach. Our team is dedicated to providing the
            best services to our clients, ensuring satisfaction and success.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-start my-16 gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Meet our team of dedicated professionals who are passionate about
            delivering exceptional results. Our team is dedicated to providing
            the best services to our clients, ensuring satisfaction and success.
          </p>
          <p className="text-gray-700 text-lg">
            With years of experience in the industry, our team is dedicated to
            providing the best services to our clients, ensuring satisfaction and
            success. Our team is dedicated to providing the best services to our
            clients, ensuring satisfaction and success.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full bg-gray-100 rounded-lg shadow-md mb-8 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42"
            alt="Our Team"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-start justify-start my-16 gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Our mission is to empower entrepreneurs and businesses to reach their
            full potential. By providing exceptional services and innovative
            solutions, we aim to make a positive impact on the business
            community.
          </p>
          <p className="text-gray-700 text-lg">
            Our team is dedicated to providing the best services to our clients,
            ensuring satisfaction and success. Our team is dedicated to providing
            the best services to our clients, ensuring satisfaction and success.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1593642634367-d91a135587b5"
            alt="Our Mission"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

