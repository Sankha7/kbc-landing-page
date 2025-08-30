import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const TitleUpdater = () => {
  const location = useLocation();
    
  const routesMetadata = [
    { path: "/", title: 'Kolkata Business Club | Premium Business Networking in Kolkata', description: "Join the Kolkata Business Club - the leading business networking platform for entrepreneurs, startups, and professionals in Kolkata. Grow your network, collaborate, and expand your business horizons", canonical: "https://kolkatabusinessclub.com/", keyword: "Kolkata Business Club, business networking Kolkata, entrepreneurs Kolkata, business community, startup networking, business events Kolkata, business growth Kolkata" },
    { path: "/blogs", title: 'Blogs', description: "Explore the Kolkata Business Club blog for expert insights, business growth strategies, networking tips, and industry updates in Kolkata’s entrepreneurial ecosystem", canonical: "https://kolkatabusinessclub.com/blogs", keyword: "business blog Kolkata, networking tips, business strategy Kolkata, entrepreneur blog, Kolkata startup insights, business growth tips, industry news Kolkata" },
    { path: "/contact", title: 'Contact Us', description: "Get in touch with Kolkata Business Club for membership, collaborations, and event inquiries. We’re here to support your business networking journey in Kolkata.", canonical: "https://kolkatabusinessclub.com/contact", keyword: "contact Kolkata Business Club, business club contact, join business network Kolkata, business inquiries Kolkata, event registration Kolkata, connect with business club" },
    { path: "/about", title: 'About Us ', description: "Learn about Kolkata Business Club – a powerful community for business leaders, entrepreneurs, and professionals. Discover our mission, vision, and the value we bring to Kolkata’s business landscape.", canonical: "https://kolkatabusinessclub.com/about", keyword: "about Kolkata Business Club, business networking Kolkata, entrepreneur community, Kolkata startup club, business collaboration Kolkata, networking platform Kolkata"}
  ];

  const defaultMetadata = {
    title: "Kolkata Business Club | Premier Business Network in Kolkata",
    description: "Kolkata Business Club - connecting entrepreneurs and professionals in Kolkata through networking events, collaborations, and business growth opportunities.",
    canonical: "https://kolkatabusinessclub.com",
    keyword: "Kolkata Business Club, business networking, entrepreneurs, professionals, Kolkata"
};
      
  const currentRoute = routesMetadata.find((route) => route.path === location.pathname) || defaultMetadata;

  useEffect(() => {
    document.title = currentRoute ? currentRoute.title : "Kolkata Business Club | Premier Business Network in Kolkata";
  }, [currentRoute]);


  return (
    <Helmet prioritizeSeoTags>
        <title>{currentRoute.title}</title>
        <meta name="description" content={currentRoute.description} />
        <link rel="canonical" href={currentRoute.canonical} />
        <meta name="keywords" content={currentRoute.keyword} />

        {/* Add Open Graph tags for better social sharing */}
      <meta property="og:title" content={currentRoute.title} />
      <meta property="og:description" content={currentRoute.description} />
      <meta property="og:url" content={currentRoute.canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default TitleUpdater;
