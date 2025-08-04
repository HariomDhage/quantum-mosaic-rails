import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Calendar } from 'lucide-react';
import ContactForm from './ContactForm';

const QuantumHeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDemo = () => {
    setIsFormOpen(true);
  };

  const handleDiscoveryCall = () => {
    // For now, same as demo - can be customized later
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="min-h-screen bg-background relative overflow-hidden flex items-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Professional Brand Badge */}
            <div className="mb-8 relative">
              <div className="inline-block">
                <span className="inline-block bg-card/50 backdrop-blur-sm border border-border text-foreground px-6 py-3 rounded-full text-sm font-medium">
                  Quantum Mosaic™
                </span>
              </div>
            </div>
            
            {/* Professional Headline */}
            <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight font-sora">
                <span className="block text-foreground">Quantum Mosaic™</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  The AWS for Enterprise AI Factories
                </span>
              </h1>
            </div>
            
            {/* Professional Subheading */}
            <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed font-inter">
                Scale judgment, not headcount. 
                <br />
                <span className="text-accent font-medium">Achieve exponential growth at linear cost.</span>
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <Button
                onClick={handleDemo}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/20 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300"
                size="lg"
              >
                <Rocket className="mr-3 h-5 w-5" />
                Request a Demo
              </Button>
              
              <Button
                onClick={handleDiscoveryCall}
                variant="outline"
                className="border-primary/30 bg-card/50 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300"
                size="lg"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Schedule a Discovery Call
              </Button>
            </div>

            {/* Subtle Floating Elements */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-primary/5 rounded-full animate-gentle-float"></div>
            <div className="absolute bottom-32 right-16 w-12 h-12 bg-accent/5 rounded-full animate-gentle-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default QuantumHeroSection;