
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-16 left-16 w-3 h-3 bg-white opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-24 w-5 h-5 bg-white opacity-15 rounded-full animate-pulse delay-75"></div>
          <div className="absolute bottom-24 left-32 w-4 h-4 bg-white opacity-10 rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-16 right-16 w-6 h-6 bg-white opacity-25 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white opacity-30 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white opacity-20 rounded-full animate-pulse delay-400"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Shape the Future of Execution
          </h2>
          
          {/* Compliance Rails Animation */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl mb-8 text-blue-100">
              Be among the first firms to enforce institutional logic as code
            </p>
            
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-lg font-semibold mb-6 text-slate-300">Compliance Rails Activation</h3>
              <div className="flex items-center justify-between space-x-4">
                {rails.map((rail, index) => (
                  <div key={index} className="flex-1">
                    <div className={`h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      activeRail >= index 
                        ? 'border-emerald-400 bg-emerald-400/20 shadow-lg shadow-emerald-400/50' 
                        : 'border-slate-500 bg-slate-700/50'
                    }`}>
                      {activeRail >= index && (
                        <CheckCircle className="h-5 w-5 text-emerald-400 animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-2">{rail}</p>
                  </div>
                ))}
                
                {/* Final Green Light */}
                <div className="flex-1">
                  <div className={`h-12 w-12 rounded-full border-2 flex items-center justify-center mx-auto transition-all duration-1000 ${
                    activeRail === rails.length - 1 
                      ? 'border-emerald-400 bg-emerald-400/20 shadow-2xl shadow-emerald-400/50 animate-pulse' 
                      : 'border-slate-500 bg-slate-700'
                  }`}>
                    <Zap className={`h-6 w-6 ${activeRail === rails.length - 1 ? 'text-emerald-400' : 'text-slate-500'}`} />
                  </div>
                  <p className="text-sm text-slate-300 mt-2 font-semibold">
                    {activeRail === rails.length - 1 ? 'Execution Allowed' : 'Pending...'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Join our early access program and help shape the OS of institutional trust.
          </p>
          
          {/* Circuit Toggle Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDiscoveryCall}
              className="group relative overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25 border-2 border-emerald-500"
            >
              <span className="relative z-10 flex items-center">
                Book a Discovery Call
                <div className="ml-3 w-8 h-4 bg-emerald-800 rounded-full relative">
                  <div className="absolute left-1 top-0.5 w-3 h-3 bg-white rounded-full transition-transform group-hover:translate-x-3"></div>
                </div>
              </span>
            </button>
            
            <button
              onClick={handleJoinProgram}
              className="group relative overflow-hidden bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border-2 border-slate-400 hover:border-white"
            >
              <span className="relative z-10 flex items-center">
                Get Early Access Brochure
                <div className="ml-3 w-8 h-4 bg-slate-600 rounded-full relative">
                  <div className="absolute left-1 top-0.5 w-3 h-3 bg-slate-300 rounded-full transition-transform group-hover:translate-x-3"></div>
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
