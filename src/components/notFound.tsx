import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Button 
        onClick={() => navigate(-1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Back
      </Button>
    </div>
  );
}

export default NotFound;
