
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import ContactForm from './ContactForm';

const AnimatedHeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDemo = () => {
    setIsFormOpen(true);
  };

  const handleVideoDemo = () => {
    window.open('https://share.synthesia.io/3f373475-6df6-46ae-9c7a-738065eb8b15', '_blank');
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block bg-emerald-400/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold">
                From Strategy to Self-Governance
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              The Rise of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Autonomous Institutions
              </span>
            </h1>
            
            <div className="space-y-6 text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
              <p>
                Every institution makes plans. But few can guarantee they're followed — let alone enforced in real time.
              </p>
              <p>
                That's where <span className="text-emerald-400 font-semibold">Quantum Mosaic (QM)</span> comes in.
              </p>
              <p>
                We're building something foundational: a new <span className="text-emerald-400 font-semibold">Execution Operating System (XOS)</span> that lets leaders encode their judgment, policies, and strategic intent into a living layer of executable logic. Not in hindsight. Not on paper. But at runtime.
              </p>
              <p className="text-emerald-300 font-medium">
                And this is just the beginning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleDemo}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25"
              >
                Book a Pilot Call
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={handleVideoDemo}
                variant="outline"
                className="border-blue-400 bg-blue-600/20 text-blue-200 hover:bg-blue-600/30 hover:border-blue-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default AnimatedHeroSection;
