
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ContactForm from './ContactForm';

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinProgram = () => {
    setIsFormOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center space-x-3"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <img 
                  src="/lovable-uploads/b75fe8db-3bff-422e-9fb0-23c6bd4fa258.png" 
                  alt="Quantum Mosaic Logo" 
                  className="h-12 w-auto brightness-110 contrast-110"
                />
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                About
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 hidden sm:block"
                onClick={handleJoinProgram}
              >
                Book a Live Demo
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 sm:hidden"
                onClick={handleJoinProgram}
              >
                Book Demo
              </Button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </header>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Header;
