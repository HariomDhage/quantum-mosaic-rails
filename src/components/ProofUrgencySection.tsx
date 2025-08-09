import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, TrendingUp } from 'lucide-react';
import ContactForm from './ContactForm';
import costCurveImage from '@/assets/cost-curve-comparison.jpg';

const ProofUrgencySection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const handleCTA = () => {
    setIsFormOpen(true);
  };

  const toggleExample = () => {
    setShowExample(!showExample);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8">
              The Constraint Era 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                {" "}Changes the Rules.
              </span>
            </h2>
          </div>

          {/* Visual Comparison */}
          <div className="mb-16">
            <img 
              src={costCurveImage} 
              alt="Cost curve comparison: exponential hiring costs vs linear AI scaling"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Key Message */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-8">
              <p className="mb-6">
                For decades, growth has been tied to hiring — creating <span className="text-red-400 font-semibold">exponential costs</span> at every scale.
              </p>
              <p className="mb-6">
                In private credit and other constraint-heavy markets, <span className="text-emerald-400 font-semibold">judgment is the last competitive moat.</span>
              </p>
              <p className="text-emerald-300 font-semibold text-2xl">
                We help you make it infinite.
              </p>
            </div>
          </div>

          {/* 30 Days Promise */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              From Bottleneck to 
              <span className="text-emerald-400"> Flywheel in 30 Days</span>
            </h3>
            
            <div className="text-center">
              <Button
                onClick={toggleExample}
                variant="outline"
                className="border-emerald-400 text-emerald-300 hover:bg-emerald-400/20 mb-8"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                {showExample ? 'Hide Example' : 'See Real Example'}
              </Button>

              {showExample && (
                <div className="bg-slate-800/50 rounded-lg p-6 text-left max-w-3xl mx-auto">
                  <h4 className="text-xl font-bold text-emerald-400 mb-4">
                    Example: Criteria-Gated Deal Screening
                  </h4>
                  
                  <div className="space-y-4 text-blue-100">
                    <div>
                      <span className="font-semibold text-white">Constraint:</span> "Review deals only if DSCR &gt; 1.3× and LTV &lt; 75%."
                    </div>
                    
                    <div>
                      <span className="font-semibold text-white">Corridor:</span> Encodes key credit criteria (DSCR, LTV thresholds, etc.) and auto-extracts these metrics from pitch decks and financials.
                    </div>
                    
                    <div>
                      <span className="font-semibold text-white">Enforcement Rail:</span> Blocks deals that fall outside the thresholds; triggers an exception review loop for borderline cases.
                    </div>
                    
                    <div className="border-t border-emerald-400/30 pt-4">
                      <span className="font-semibold text-emerald-400">Outcome:</span> Real-time screening aligned to underwriting policy — no wasted effort on non‑starters, no manual oversight.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              onClick={handleCTA}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25"
            >
              See More Use Cases
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default ProofUrgencySection;