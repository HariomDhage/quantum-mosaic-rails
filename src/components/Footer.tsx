import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleJoinProgram = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/291984d7-024e-4a9e-8d15-9ca4adfd7fed.png" 
                  alt="Quantum Mosaic Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Building the world's first Execution Operating System (XOS) for private capital markets.
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleJoinProgram}
              >
                Join the XOS Pioneer Program
              </Button>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">deepak@q-mosaic-ai.com</p>
              <p className="text-gray-300">+1 (669) 400-6038</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Quantum Mosaic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Footer;
