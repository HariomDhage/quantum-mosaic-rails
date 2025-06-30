
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleJoinProgram = () => {
    window.location.href = 'mailto:hello@quantummosaic.com?subject=Join the Pioneer Program&body=Hi, I am interested in joining the Quantum Mosaic Pioneer Program. Please send me more information.';
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Quantum Mosaic
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleJoinProgram}
            >
              Join the Pioneer Program
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
