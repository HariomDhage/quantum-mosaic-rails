import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';

const QuantumHeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDemo = () => setIsFormOpen(true);
  const handleDiscoveryCall = () => setIsFormOpen(true);

  return (
    <>
      <section className="relative min-h-screen bg-background overflow-hidden flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(270_100%_50%_/_0.1),transparent_50%)]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              <span className="block">Quantum Mosaic™</span>
              <span className="block bg-gradient-quantum bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                The AWS for Enterprise AI Factories
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-left">
              Scale judgment, not headcount. Achieve exponential growth at linear cost.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
              <Button 
                onClick={handleDemo}
                size="lg"
                className="bg-gradient-quantum hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Request a Demo
              </Button>
              <Button 
                onClick={handleDiscoveryCall}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Schedule a Discovery Call
              </Button>
            </div>
          </div>

          {/* Floating Logo Animation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5">
            <div className="w-96 h-96 animate-float">
              <div className="w-full h-full rounded-full bg-gradient-quantum blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};

export default QuantumHeroSection;