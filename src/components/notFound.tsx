import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from './ui/button';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Kolkata Business Club</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-4 text-foreground">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-3 text-foreground">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground max-w-md">
          The page you are looking for may have been moved, removed, or never existed.
        </p>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 rounded-xl font-bold py-2.5 px-6 transition-all"
          >
            Return to Home
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="rounded-xl py-2.5 px-6"
          >
            Go Back
          </Button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
