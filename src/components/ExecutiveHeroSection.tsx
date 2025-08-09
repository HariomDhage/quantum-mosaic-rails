import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';
import ContactForm from './ContactForm';
import heroMosaicBg from '@/assets/hero-mosaic-bg.jpg';

const ExecutiveHeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDemo = () => {
    setIsFormOpen(true);
  };

  const handleVideoDemo = () => {
    window.open('https://share.synthesia.io/3f373475-6df6-46ae-9c7a-738065eb8b15', '_blank');
  };

  return (
    <>
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroMosaicBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-block bg-emerald-400/20 text-emerald-300 px-6 py-3 rounded-full text-lg font-semibold border border-emerald-400/30">
                Your Judgment. Everywhere.
              </span>
            </div>
            
            {/* Main Headlines - Visual First */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-2">Scale Judgment.</span>
              <span className="block text-emerald-400 mb-2">Multiply Value.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Transform Growth.
              </span>
            </h1>
            
            {/* Subheadline - Concise */}
            <div className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-12 max-w-4xl mx-auto">
              <p>
                Turn your best expertise into <span className="text-emerald-400 font-semibold">decision-ready intelligence</span> and 
                <span className="text-emerald-400 font-semibold"> infinitely repeatable execution</span> — so every great decision compounds into competitive advantage.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                onClick={handleDemo}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25 hover:scale-105"
              >
                Book a Demo
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
              
              <Button
                onClick={handleVideoDemo}
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 bg-blue-600/20 text-blue-200 hover:bg-blue-600/30 hover:border-blue-300 px-8 py-4 rounded-lg font-semibold text-xl transition-all duration-300"
              >
                <Play className="mr-2 h-6 w-6" />
                See How It Works
              </Button>
            </div>

            {/* Visual Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">2×</div>
                <div className="text-blue-100">Deal Throughput</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">30 Days</div>
                <div className="text-blue-100">To First Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">40%</div>
                <div className="text-blue-100">Faster Execution</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default ExecutiveHeroSection;