import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { getBlogBySlug } from "./components/blogData";

const TitleUpdater = () => {
  const location = useLocation();

  const routesMetadata: Record<string, { title: string; description: string; canonical: string; keyword: string }> = {
    "/": {
      title: "Kolkata Business Club | Premium Business Networking in Kolkata",
      description: "Join the Kolkata Business Club - the leading business networking platform for entrepreneurs, startups, and professionals in Kolkata. Grow your network, collaborate, and expand your business horizons.",
      canonical: "https://kolkatabusinessclub.com/",
      keyword: "Kolkata Business Club, business networking Kolkata, entrepreneurs Kolkata, business community, startup networking, business events Kolkata, business growth Kolkata"
    },
    "/blogs": {
      title: "Blogs | Kolkata Business Club",
      description: "Explore the Kolkata Business Club blog for expert insights, business growth strategies, networking tips, and industry updates in Kolkata’s entrepreneurial ecosystem.",
      canonical: "https://kolkatabusinessclub.com/blogs",
      keyword: "business blog Kolkata, networking tips, business strategy Kolkata, entrepreneur blog, Kolkata startup insights, business growth tips, industry news Kolkata"
    },
    "/contact": {
      title: "Contact Us | Kolkata Business Club",
      description: "Get in touch with Kolkata Business Club for membership, collaborations, and event inquiries. We’re here to support your business networking journey in Kolkata.",
      canonical: "https://kolkatabusinessclub.com/contact",
      keyword: "contact Kolkata Business Club, business club contact, join business network Kolkata, business inquiries Kolkata, event registration Kolkata, connect with business club"
    },
    "/about": {
      title: "About Us | Kolkata Business Club",
      description: "Learn about Kolkata Business Club – a powerful community for business leaders, entrepreneurs, and professionals. Discover our mission, vision, and the value we bring to Kolkata’s business landscape.",
      canonical: "https://kolkatabusinessclub.com/about",
      keyword: "about Kolkata Business Club, business networking Kolkata, entrepreneur community, Kolkata startup club, business collaboration Kolkata, networking platform Kolkata"
    },
    "/privacy-policy": {
      title: "Privacy Policy | Kolkata Business Club",
      description: "Privacy policy and data handling practices of Kolkata Business Club.",
      canonical: "https://kolkatabusinessclub.com/privacy-policy",
      keyword: "privacy policy, Kolkata Business Club privacy"
    },
    "/delete-account": {
      title: "Delete Account | Kolkata Business Club",
      description: "Information and procedures for deleting your Kolkata Business Club account.",
      canonical: "https://kolkatabusinessclub.com/delete-account",
      keyword: "delete account, account removal Kolkata Business Club"
    }
  };

  // If on dynamic blog post, BlogDetails manages its own specific SEO tags
  if (location.pathname.startsWith("/blogs/") && location.pathname !== "/blogs") {
    const slug = location.pathname.replace("/blogs/", "");
    const blog = getBlogBySlug(slug);
    if (blog) {
      return null;
    }
  }

  const currentRoute = routesMetadata[location.pathname] || {
    title: "Kolkata Business Club | Premier Business Network in Kolkata",
    description: "Kolkata Business Club - connecting entrepreneurs and professionals in Kolkata through networking events, collaborations, and business growth opportunities.",
    canonical: `https://kolkatabusinessclub.com${location.pathname}`,
    keyword: "Kolkata Business Club, business networking, entrepreneurs, professionals, Kolkata"
  };

  return (
    <Helmet prioritizeSeoTags>
      <title>{currentRoute.title}</title>
      <meta name="description" content={currentRoute.description} />
      <link rel="canonical" href={currentRoute.canonical} />
      <meta name="keywords" content={currentRoute.keyword} />

      {/* Open Graph */}
      <meta property="og:title" content={currentRoute.title} />
      <meta property="og:description" content={currentRoute.description} />
      <meta property="og:url" content={currentRoute.canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentRoute.title} />
      <meta name="twitter:description" content={currentRoute.description} />
    </Helmet>
  );
};

export default TitleUpdater;
