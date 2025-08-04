import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';
import ContactForm from './ContactForm';

const QuantumHeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "The AWS for Enterprise AI Factories";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleDemo = () => {
    setIsFormOpen(true);
  };

  const handleVideoDemo = () => {
    window.open('https://share.synthesia.io/3f373475-6df6-46ae-9c7a-738065eb8b15', '_blank');
  };

  return (
    <>
      <section className="min-h-screen bg-background relative overflow-hidden flex items-center">
        {/* Animated Background Network */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, hsl(211 100% 50% / 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, hsl(255 100% 50% / 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, hsl(211 100% 50% / 0.05) 0%, transparent 50%)
            `
          }}></div>
        </div>
        
        {/* Floating Decision Nodes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo Animation */}
            <div className="mb-8 animate-scale-in">
              <span className="inline-block bg-muted text-accent px-6 py-3 rounded-full text-sm font-medium border border-border">
                ⚡ Quantum Mosaic™
              </span>
            </div>
            
            {/* Typewriter Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight font-sora">
              <span className="text-foreground">Quantum Mosaic™ —</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary min-h-[1.2em] inline-block">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            {/* Subheading */}
            <div className="space-y-4 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-inter animate-fade-in">
              <p className="font-medium">
                Scale judgment, not headcount. Achieve exponential growth at linear cost.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-bounce-in">
              <Button
                onClick={handleDemo}
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 animate-pulse-glow group"
              >
                🚀 Request a Demo
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={handleVideoDemo}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                📅 Schedule a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default QuantumHeroSection;