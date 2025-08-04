import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const QuantumFooter = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-quantum rounded-lg"></div>
            <span className="text-xl font-display font-bold text-foreground">
              Quantum Mosaic™
            </span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6 text-muted-foreground">
            <a 
              href="mailto:contact@quantummosaic.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">contact@quantummosaic.com</span>
            </a>
            <a 
              href="https://linkedin.com/company/quantum-mosaic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with love by Quantum Mosaic™ © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default QuantumFooter;