
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Zap } from 'lucide-react';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeGate, setActiveGate] = useState(0);

  const gates = [
    "Policy Check",
    "IC Approval",
    "Risk Analysis",
    "Final Gate"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGate((prev) => (prev + 1) % gates.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDemo = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Execution You Can Trust.<br />
              <span className="text-emerald-400">Compliance You Can Prove.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
              The first real-time execution governance platform for private capital. 
              Every dollar and decision flows through programmable compliance corridors, 
              ensuring institutional trust at the speed of business.
            </p>

            {/* Credit Funnel Animation */}
            <div className="mb-12 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-lg font-semibold mb-6 text-slate-300">Live Execution Flow</h3>
              <div className="flex items-center justify-between max-w-4xl mx-auto">
                {/* Multiple Deals */}
                <div className="flex flex-col space-y-2">
                  <div className="w-16 h-12 bg-slate-600 rounded animate-pulse"></div>
                  <div className="w-16 h-12 bg-slate-600 rounded animate-pulse delay-100"></div>
                  <div className="w-16 h-12 bg-slate-600 rounded animate-pulse delay-200"></div>
                  <p className="text-xs text-slate-400 mt-2">Deal Flow</p>
                </div>

                {/* Gates */}
                {gates.map((gate, index) => (
                  <div key={index} className="flex items-center">
                    <ChevronRight className="h-6 w-6 text-slate-500 mx-4" />
                    <div className="text-center">
                      <div 
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                          activeGate >= index 
                            ? 'border-emerald-400 bg-emerald-400/20 shadow-lg shadow-emerald-400/50' 
                            : 'border-slate-500'
                        }`}
                      >
                        {activeGate >= index && <Shield className="h-6 w-6 text-emerald-400" />}
                      </div>
                      <p className="text-xs text-slate-400 mt-2 whitespace-nowrap">{gate}</p>
                    </div>
                  </div>
                ))}

                <ChevronRight className="h-6 w-6 text-slate-500 mx-4" />

                {/* Approved Deal */}
                <div className="text-center">
                  <div className={`w-20 h-16 rounded-lg border-2 flex items-center justify-center transition-all duration-1000 ${
                    activeGate === gates.length - 1 
                      ? 'border-emerald-400 bg-emerald-400/20 shadow-2xl shadow-emerald-400/50 animate-pulse' 
                      : 'border-slate-500 bg-slate-700'
                  }`}>
                    <Zap className={`h-8 w-8 ${activeGate === gates.length - 1 ? 'text-emerald-400' : 'text-slate-500'}`} />
                  </div>
                  <p className="text-xs text-slate-400 mt-2">IC Approved</p>
                </div>
              </div>
            </div>

            {/* Circuit Toggle Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleDemo}
                className="group relative overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25 border-2 border-emerald-500"
              >
                <span className="relative z-10 flex items-center">
                  Request Demo
                  <div className="ml-3 w-8 h-4 bg-emerald-800 rounded-full relative">
                    <div className="absolute left-1 top-0.5 w-3 h-3 bg-white rounded-full transition-transform group-hover:translate-x-3"></div>
                  </div>
                </span>
              </button>
              
              <button
                onClick={handleDemo}
                className="group relative overflow-hidden bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border-2 border-slate-400 hover:border-white"
              >
                <span className="relative z-10 flex items-center">
                  See It In Action
                  <div className="ml-3 w-8 h-4 bg-slate-600 rounded-full relative">
                    <div className="absolute left-1 top-0.5 w-3 h-3 bg-slate-300 rounded-full transition-transform group-hover:translate-x-3"></div>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default HeroSection;
