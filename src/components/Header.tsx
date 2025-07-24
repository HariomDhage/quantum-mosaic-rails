
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
                  src="/images/quantum-mosaic-logo.png" 
                  alt="Quantum Mosaic Logo" 
                  className="h-10 sm:h-12 w-auto brightness-110 contrast-110"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
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

            {/* Desktop Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2"
                onClick={handleJoinProgram}
              >
                Join the XOS Pioneer Program
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                About
              </Link>
              <div className="px-3 pt-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-sm py-3"
                  onClick={() => {
                    handleJoinProgram();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Join the XOS Pioneer Program
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Header;
