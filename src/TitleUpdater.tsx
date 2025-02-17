import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const TitleUpdater = () => {
    const location = useLocation();
    
    const routesMetadata = [
        { path: "/", title: 'Kolkata Business Club', description: "Welcome to the Dashboard.", canonical: "https://kolkatabusinessclub.com/" },
        { path: "/blogs", title: 'Kolkata Business Club | Blogs', description: "Welcome to the Blogs Page.", canonical: "https://kolkatabusinessclub.com/blogs" },
        { path: "/contact", title: 'Kolkata Business Club | Contact', description: "Welcome to the Contact Page.", canonical: "https://kolkatabusinessclub.com/contact" },
        { path: "/about", title: 'Kolkata Business Club | About', description: "Welcome to the About Page.", canonical: "https://kolkatabusinessclub.com/about" }
      ];
      
  const currentRoute = routesMetadata.find((route) => route.path === location.pathname);

  useEffect(() => {
    console.log('currentRoute--', currentRoute);
    
    document.title = currentRoute ? currentRoute.title : "Kolkata Business Club | Premier Business Network in Kolkata";
  }, [currentRoute]);


  return (
    <Helmet>
      <title>{currentRoute && currentRoute.title }</title>
      {currentRoute?.description && (
        <meta name="description" content={currentRoute.description} />
      )}
      {currentRoute?.canonical && (
        <link rel="canonical" href={currentRoute.canonical} />
      )}
    </Helmet>
  );
};

export default TitleUpdater;
