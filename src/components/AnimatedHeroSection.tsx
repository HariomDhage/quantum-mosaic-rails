
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Code2, Zap, CheckCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const AnimatedHeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const executionSteps = [
    "Strategy Document",
    "Logic Translation", 
    "Corridor Creation",
    "Rails Activation",
    "Autonomous Execution"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % executionSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleDemo = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden flex items-center">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 animate-pulse opacity-20">
            <div className="bg-emerald-400/20 p-3 rounded font-mono text-sm">
              if (IC_vote {'>'}= 3) → execute()
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-pulse opacity-20 delay-1000">
            <div className="bg-orange-400/20 p-3 rounded font-mono text-sm">
              ESG_score {'>'} B → approve_vendor()
            </div>
          </div>
          <div className="absolute bottom-32 left-40 animate-pulse opacity-20 delay-2000">
            <div className="bg-blue-400/20 p-3 rounded font-mono text-sm">
              NAV_threshold_met → capital_call()
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Copy */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-emerald-400/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold">
                  From Strategy to Self-Governance
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                The Rise of
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                  Autonomous Institutions
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                What if your strategy could execute itself? Welcome to the world where governance becomes code, 
                compliance becomes automatic, and trust becomes programmable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDemo}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25"
                >
                  Book a Pilot Call
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button
                  onClick={handleDemo}
                  variant="outline"
                  className="border-slate-400 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg"
                >
                  Get Early Access
                </Button>
              </div>
            </div>

            {/* Right Side - Execution Flow Animation */}
            <div className="relative">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold mb-8 text-center text-slate-300">
                  Strategy in Motion
                </h3>
                
                <div className="space-y-6">
                  {executionSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        animationStep >= index 
                          ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' 
                          : 'bg-slate-600'
                      }`}></div>
                      
                      <div className={`flex-1 p-3 rounded-lg transition-all duration-500 ${
                        animationStep === index 
                          ? 'bg-emerald-400/20 border border-emerald-400/50 shadow-lg shadow-emerald-400/20' 
                          : 'bg-slate-700/50'
                      }`}>
                        <span className={`font-medium ${
                          animationStep === index ? 'text-emerald-300' : 'text-slate-300'
                        }`}>
                          {step}
                        </span>
                      </div>
                      
                      {animationStep === index && (
                        <div className="animate-pulse">
                          {index === executionSteps.length - 1 ? (
                            <CheckCircle className="h-6 w-6 text-emerald-400" />
                          ) : (
                            <Zap className="h-6 w-6 text-emerald-400" />
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Final Execution State */}
                <div className="mt-8 text-center">
                  <div className={`inline-flex items-center px-6 py-3 rounded-full transition-all duration-1000 ${
                    animationStep === executionSteps.length - 1
                      ? 'bg-emerald-400/20 border border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-400/30'
                      : 'bg-slate-700/50 text-slate-400'
                  }`}>
                    <Code2 className="h-5 w-5 mr-2" />
                    <span className="font-semibold">
                      {animationStep === executionSteps.length - 1 ? '✅ Executed' : 'Processing...'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default AnimatedHeroSection;
