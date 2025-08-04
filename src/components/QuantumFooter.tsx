import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuantumFooter = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1fcfa24b-386a-4344-b39d-ddf6814c3981.png"
              alt="Quantum Mosaic™"
              className="h-8 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-sm text-muted-foreground">
                The AWS for Enterprise AI Factories
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
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
          <div className="flex items-center space-x-4">
            <a
              href="mailto:hello@quantummosaic.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">hello@quantummosaic.com</span>
            </a>
            <a
              href="https://linkedin.com/company/quantum-mosaic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with precision by <span className="text-primary font-medium">Quantum Mosaic™</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Quantum Mosaic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default QuantumFooter;