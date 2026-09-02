import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background/60">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Button
        onClick={() => navigate(-1)}
        className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0 rounded-xl font-bold py-2 px-4"
      >
        Go Back
      </Button>
    </div>
  );
}

export default NotFound;
