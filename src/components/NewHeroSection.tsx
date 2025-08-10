import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const NewHeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="min-h-screen particles-bg text-white relative overflow-hidden flex items-center justify-center">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Parallax Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: 'radial-gradient(circle at 30% 70%, hsl(var(--secondary) / 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, hsl(var(--accent) / 0.2) 0%, transparent 50%)'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
              Double Deal<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
                Throughput
              </span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-12 text-white/90">
              90 Days. No New Headcount.
            </h2>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-semibold rounded-full hover-lift animate-pulse-glow"
                onClick={() => setIsContactModalOpen(true)}
              >
                Book Your Pilot Call
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default NewHeroSection;