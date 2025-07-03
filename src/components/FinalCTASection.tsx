
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23ffffff\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')] opacity-30"></div>
        
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
