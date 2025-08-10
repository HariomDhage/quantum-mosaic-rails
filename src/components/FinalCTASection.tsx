
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap } from 'lucide-react';
import ContactForm from './ContactForm';

const FinalCTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeRail, setActiveRail] = useState(0);

  const rails = [
    "Policy Gate",
    "Risk Gate", 
    "Approval Gate",
    "Execution Gate"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRail((prev) => (prev + 1) % rails.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleJoinProgram = () => {
    setIsFormOpen(true);
  };

  const handleDiscoveryCall = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="py-32 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        {/* Premium Particles Background */}
        <div className="absolute inset-0 particles-bg opacity-40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-white/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-white/25 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-white/15 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/35 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 bg-white/20 rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Shape the Future
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-12 text-white/90">
              of Execution
            </h3>
          </div>
          
          {/* Compliance Rails Animation */}
          <div className="mb-16 max-w-5xl mx-auto animate-slide-in-left delay-300">
            <p className="text-2xl mb-12 text-white/80 font-light">
              Be among the first firms to enforce <span className="text-accent font-semibold">institutional logic as code</span>
            </p>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold mb-8 text-white/90">Compliance Rails Activation</h3>
              <div className="flex items-center justify-between space-x-6">
                {rails.map((rail, index) => (
                  <div key={index} className="flex-1 group">
                    <div className={`h-12 rounded-full border-2 flex items-center justify-center transition-all duration-700 hover:scale-110 ${
                      activeRail >= index 
                        ? 'border-accent bg-accent/20 shadow-lg shadow-accent/50 animate-pulse' 
                        : 'border-white/30 bg-white/10 hover:border-accent/50'
                    }`}>
                      {activeRail >= index && (
                        <CheckCircle className="h-6 w-6 text-accent animate-bounce" />
                      )}
                    </div>
                    <p className="text-sm text-white/70 mt-3 font-medium group-hover:text-white transition-colors">{rail}</p>
                  </div>
                ))}
                
                {/* Final Green Light */}
                <div className="flex-1 group">
                  <div className={`h-16 w-16 rounded-full border-2 flex items-center justify-center mx-auto transition-all duration-1000 hover:scale-110 ${
                    activeRail === rails.length - 1 
                      ? 'border-accent bg-accent/30 shadow-2xl shadow-accent/60 animate-pulse scale-110' 
                      : 'border-white/30 bg-white/10 hover:border-accent/50'
                  }`}>
                    <Zap className={`h-8 w-8 ${activeRail === rails.length - 1 ? 'text-accent' : 'text-white/50'} transition-colors`} />
                  </div>
                  <p className="text-base text-white/90 mt-3 font-bold group-hover:text-white transition-colors">
                    {activeRail === rails.length - 1 ? 'Execution Allowed' : 'Pending...'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-2xl mb-16 max-w-4xl mx-auto text-white/80 font-light animate-fade-in delay-600">
            Join our early access program and help shape the <span className="text-accent font-semibold">OS of institutional trust</span>
          </p>
          
          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-up delay-900">
            <button
              onClick={handleDiscoveryCall}
              className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:shadow-2xl hover:shadow-accent/40 border border-accent/50 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center">
                Book a Discovery Call
                <div className="ml-4 w-10 h-6 bg-white/20 rounded-full relative overflow-hidden">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 group-hover:translate-x-4"></div>
                </div>
              </span>
            </button>
            
            <button
              onClick={handleJoinProgram}
              className="group relative overflow-hidden bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 border border-white/30 hover:border-white/60 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center">
                Get Early Access Brochure
                <div className="ml-4 w-10 h-6 bg-white/20 rounded-full relative overflow-hidden">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white/70 rounded-full transition-transform duration-300 group-hover:translate-x-4"></div>
                </div>
              </span>
            </button>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default FinalCTASection;
