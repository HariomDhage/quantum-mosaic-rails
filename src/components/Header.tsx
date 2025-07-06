
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleJoinProgram = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/753cfba0-0ee2-4421-ae25-53b8df3b8669.png" 
                  alt="Quantum Mosaic Logo" 
                  className="h-8 w-auto"
                />
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
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Header;
