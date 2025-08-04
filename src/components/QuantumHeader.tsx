import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const QuantumHeader = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinProgram = () => setIsFormOpen(true);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-quantum rounded-lg"></div>
              <span className="text-xl font-display font-bold text-foreground">
                Quantum Mosaic™
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button 
                onClick={handleJoinProgram}
                className="bg-gradient-quantum hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Join Early Access
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
              <div className="px-4 py-4 space-y-4">
                <a 
                  href="#home" 
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <Button 
                  onClick={() => {
                    handleJoinProgram();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-quantum hover:opacity-90 text-white rounded-lg font-medium"
                >
                  Join Early Access
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};

export default QuantumHeader;