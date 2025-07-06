
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
              
              <p className="text-xl md:text-2xl mb-6 text-blue-100 leading-relaxed">
                Every institution makes plans. But few can guarantee they're followed — let alone enforced in real time.
              </p>
              
              <p className="text-xl md:text-2xl mb-6 text-blue-100 leading-relaxed">
                That's where Quantum Mosaic (QM) comes in.
              </p>
              
              <p className="text-lg mb-8 text-blue-200 leading-relaxed">
                We're building something foundational: a new Execution Operating System (XOS) that lets leaders encode their judgment, policies, and strategic intent into a living layer of executable logic. Not in hindsight. Not on paper. But at runtime.
              </p>
              
              <p className="text-lg mb-8 text-emerald-300 font-semibold">
                And this is just the beginning.
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

            {/* Right Side - Strategy in Motion Visual */}
            <div className="relative">
              <div className="relative">
                {/* Main Image with Animation Overlay */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/538a16c4-7faa-4616-adec-3eeeacbb0140.png" 
                    alt="Strategy in Motion Dashboard" 
                    className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                  />
                  
                  {/* Animated Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 animate-pulse"></div>
                  
                  {/* Floating Animation Dots */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75 delay-1000"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-75 delay-2000"></div>
                  
                  {/* Processing Indicator Animation */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-slate-300 font-mono">
                          {animationStep === executionSteps.length - 1 ? '✅ Executed' : 'Processing...'}
                        </span>
                        {animationStep < executionSteps.length - 1 && (
                          <Zap className="h-4 w-4 text-emerald-400 animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Strategy Steps Indicator */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                  <div className="space-y-4">
                    {executionSteps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          animationStep >= index 
                            ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50 scale-125' 
                            : 'bg-slate-600 scale-100'
                        }`}></div>
                        <div className={`text-xs font-medium transition-all duration-500 ${
                          animationStep === index ? 'text-emerald-300 scale-110' : 'text-slate-400'
                        }`}>
                          {step}
                        </div>
                      </div>
                    ))}
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
