import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuantumFooter = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Logo and Brand */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
            <img 
              src="/lovable-uploads/1fcfa24b-386a-4344-b39d-ddf6814c3981.png"
              alt="Quantum Mosaic™"
              className="h-6 sm:h-8 w-auto"
            />
            <div className="hidden md:block">
              <div className="text-xs sm:text-sm text-muted-foreground">
                Scale Judgment. Multiply Impact.
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 sm:space-x-8 text-sm sm:text-base">
            <Link 
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link 
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms
            </Link>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:deepak@quantummosaic.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base"
            >
              <Mail className="h-4 sm:h-5 w-4 sm:w-5" />
              <span className="hidden sm:inline">deepak@quantummosaic.com</span>
              <span className="sm:hidden">Contact</span>
            </a>
            <a
              href="https://linkedin.com/company/quantum-mosaic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-4 sm:h-5 w-4 sm:w-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Built with love from Silicon Valley
          </p>
          <p className="text-xs text-muted-foreground mt-1 sm:mt-2">
            © 2025 Quantum Mosaic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default QuantumFooter;