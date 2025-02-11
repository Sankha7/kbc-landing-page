import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-gray-100 py-16">

      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-start my-16 gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Community and Grow Your Business
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            As a member of the Kolkata Business Club, you'll get access to a range
            of exclusive benefits and opportunities to grow your business network.
          </p>
          <ul className="list-disc text-gray-700 text-lg pl-8">
            <li>Business Networking: Connect with fellow entrepreneurs and business leaders in Kolkata through our mobile app</li>
            <li>Knowledge Sharing: Access exclusive content, business insights, and success stories from the community</li>
            <li>Community Forums: Engage in discussions, seek advice, and share experiences with other entrepreneurs</li>
            <li>Event Updates: Stay informed about upcoming business events, workshops, and meetups in Kolkata</li>
            <li>Business Directory: Discover and connect with local businesses and service providers</li>
            <li>Exclusive Opportunities: Access to funding opportunities, partnerships, and business deals</li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42"
            alt="Unlock Exclusive Benefits and Opportunities to Grow Your Business Network"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

