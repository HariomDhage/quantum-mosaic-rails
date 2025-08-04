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
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particles"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(143,0,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(143,0,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo/Brand with Ripple Effect */}
            <div className="mb-8 relative">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ripple"></div>
                <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent px-6 py-3 rounded-full text-sm font-semibold border border-primary/30">
                  Quantum Mosaic™
                </span>
              </div>
            </div>
            
            {/* Typewriter Headline */}
            <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight font-sora">
                <span className="block text-foreground">Quantum Mosaic™</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  The AWS for Enterprise AI Factories
                </span>
              </h1>
            </div>
            
            {/* Subheading */}
            <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed font-inter">
                Scale judgment, not headcount. 
                <br />
                <span className="text-accent font-semibold">Achieve exponential growth at linear cost.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <Button
                onClick={handleDemo}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 animate-glow-pulse"
                size="lg"
              >
                <Rocket className="mr-3 h-5 w-5" />
                Request a Demo
              </Button>
              
              <Button
                onClick={handleDiscoveryCall}
                variant="outline"
                className="border-accent bg-background/10 text-accent hover:bg-accent/20 hover:border-accent/80 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                size="lg"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Schedule a Discovery Call
              </Button>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
            <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default QuantumHeroSection;