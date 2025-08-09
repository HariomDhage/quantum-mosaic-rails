import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download } from 'lucide-react';
import ContactForm from './ContactForm';

const FinalExecutiveCTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDemo = () => {
    setIsFormOpen(true);
  };

  const handleDownload = () => {
    // For now, open contact form with download context
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 via-blue-600/80 to-purple-600/80"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)
              `
            }}></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Headlines */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Your Best Judgment 
            <br />
            Is Your Best 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
              {" "}Moat.
            </span>
          </h2>

          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            Let's Scale It.
          </h3>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              onClick={handleDemo}
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-xl transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book a Demo
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
            
            <Button
              onClick={handleDownload}
              variant="outline"
              size="lg"
              className="border-2 border-white bg-white/10 text-white hover:bg-white/20 hover:border-white px-8 py-4 rounded-lg font-bold text-xl transition-all duration-300 backdrop-blur-sm"
            >
              <Download className="mr-2 h-6 w-6" />
              Download Overview
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-6">
              <div className="text-2xl font-bold text-yellow-300 mb-2">Immediate</div>
              <div className="text-white/90">Implementation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-6">
              <div className="text-2xl font-bold text-yellow-300 mb-2">Infinite</div>
              <div className="text-white/90">Scalability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-6">
              <div className="text-2xl font-bold text-yellow-300 mb-2">Uncatchable</div>
              <div className="text-white/90">Advantage</div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default FinalExecutiveCTASection;