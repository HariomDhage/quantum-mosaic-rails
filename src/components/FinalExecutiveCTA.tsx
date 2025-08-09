import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download, Zap } from 'lucide-react';
import ContactForm from './ContactForm';

const FinalExecutiveCTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [glowIndex, setGlowIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGlowIndex((prev) => (prev + 1) % 8);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDemo = () => {
    setIsFormOpen(true);
  };

  const handleBriefing = () => {
    window.open('https://share.synthesia.io/3f373475-6df6-46ae-9c7a-738065eb8b15', '_blank');
  };

  return (
    <>
      <section className="py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Premium Animated Background */}
        <div className="absolute inset-0">
          {/* Radial Waves */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-emerald-400/10 rounded-full animate-pulse"
              style={{
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
          
          {/* Glowing Nodes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 rounded-full transition-all duration-1000 ${
                glowIndex === i ? 'bg-emerald-400 scale-150 shadow-lg shadow-emerald-400/50' : 'bg-blue-400/30'
              }`}
              style={{
                left: `${15 + (i * 10) % 70}%`,
                top: `${20 + (i * 15) % 60}%`
              }}
            />
          ))}

          {/* Connecting Grid */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" className="text-emerald-400" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Power Badge */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-3 bg-emerald-400/10 text-emerald-300 px-8 py-4 rounded-full text-xl font-bold border border-emerald-400/30">
              <Zap className="w-6 h-6" />
              Your Irreplaceable Moat
            </span>
          </div>
          
          {/* Bold Headline */}
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-none">
            <span className="block mb-4">Your Judgment Is</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Your Best Moat
            </span>
          </h2>
          
          {/* Power Subheadline */}
          <div className="text-3xl sm:text-4xl text-blue-100 mb-16 font-light">
            <p>Scale It Now.</p>
          </div>

          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Button
              onClick={handleDemo}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-16 py-8 rounded-2xl font-bold text-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-600/30 hover:scale-105 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center">
                Book a Live Demo
                <ChevronRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
            
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold text-emerald-400 mb-3">30 Days</div>
              <div className="text-blue-100 text-lg">To First Value</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold text-emerald-400 mb-3">Fortune 500</div>
              <div className="text-blue-100 text-lg">Proven at Scale</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold text-emerald-400 mb-3">Zero Risk</div>
              <div className="text-blue-100 text-lg">Pilot Programs</div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default FinalExecutiveCTA;