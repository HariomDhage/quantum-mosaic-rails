import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap } from 'lucide-react';
import ContactForm from './ContactForm';

const ExecutiveHero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationIndex((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleExperience = () => {
    setIsFormOpen(true);
  };

  const handleROI = () => {
    window.open('https://share.synthesia.io/3f373475-6df6-46ae-9c7a-738065eb8b15', '_blank');
  };

  return (
    <>
      <section className="min-h-screen relative overflow-hidden flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        {/* Quantum Mosaic Animation Background */}
        <div className="absolute inset-0">
          {/* Flowing Data Patterns */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-20 bg-gradient-to-b from-emerald-400/30 to-transparent animate-pulse"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${Math.sin(i) * 20 + 40}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 3)}s`,
                transform: `rotate(${i * 12}deg)`
              }}
            />
          ))}
          
          {/* Quantum Nodes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 rounded-full transition-all duration-1000 ${
                animationIndex === i % 6 ? 'bg-emerald-400 scale-150' : 'bg-blue-400/40 scale-100'
              }`}
              style={{
                left: `${10 + (i * 8) % 80}%`,
                top: `${20 + (i * 10) % 60}%`,
                boxShadow: animationIndex === i % 6 ? '0 0 20px #10b981' : 'none'
              }}
            />
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1={`${10 + (i * 12) % 80}%`}
                y1={`${30 + (i * 8) % 40}%`}
                x2={`${30 + (i * 15) % 60}%`}
                y2={`${50 + (i * 12) % 30}%`}
                stroke="rgba(16, 185, 129, 0.2)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Premium Badge */}
            <div className="mb-8 animate-fade-in">
              <span className="inline-flex items-center gap-2 bg-emerald-400/10 text-emerald-300 px-6 py-3 rounded-full text-lg font-semibold border border-emerald-400/20">
                <Zap className="w-5 h-5" />
                Your Judgment. Everywhere.
              </span>
            </div>
            
            {/* Bold Headlines */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-none">
              <span className="block text-white mb-4">Multiply Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-4">
                Best Decisions
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl text-slate-300">
                Instantly, Endlessly
              </span>
            </h1>
            
            {/* Power Subheadline */}
            <div className="text-2xl sm:text-3xl text-blue-100 leading-relaxed mb-16 max-w-3xl mx-auto">
              <p className="font-light">
                Scale your <span className="text-emerald-400 font-semibold">judgment</span>. 
                Defend your <span className="text-emerald-400 font-semibold">edge</span>.
              </p>
            </div>

            {/* Bold CTAs */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button
                onClick={handleExperience}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 rounded-xl font-bold text-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-600/25 hover:scale-105 group"
              >
                Book a Pilot Call
                <ChevronRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default ExecutiveHero;