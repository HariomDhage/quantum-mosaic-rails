import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const ProofSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const scrollRef = useRef(null);

  const mainTestimonial = {
    quote: "Our IC cycle time dropped by more than half without hiring anyone.",
    author: "CIO, Top 5 Private Credit Fund ($4B AUM)"
  };

  const caseStudies = [
    {
      industry: "Private Credit",
      title: "NAV-Gated Capital Calls",
      constraint: "Call capital only if NAV > 0.9× base case",
      result: "100% adherence, $2M+ annual cost avoidance",
      metric: "$2M+",
      metricLabel: "Cost Avoidance",
      detail: "Automated NAV monitoring and capital call triggers ensure perfect adherence to investment guidelines while eliminating manual oversight costs.",
      testimonial: "Never had a single compliance violation since implementation.",
      author: "Fund Operations Director"
    },
    {
      industry: "Private Equity",
      title: "IC Approvals", 
      constraint: "No deal advances without full IC sign-off",
      result: "Cycle cut from 10 days → 48 hours",
      metric: "80%",
      metricLabel: "Faster IC Cycles",
      detail: "Intelligent routing ensures all required approvals are collected in parallel while maintaining full audit trail and compliance documentation.",
      testimonial: "We can now respond to time-sensitive opportunities that we used to miss.",
      author: "Investment Committee Chair"
    },
    {
      industry: "Real Estate Credit",
      title: "Standardized Underwriting",
      constraint: "All analysts follow identical risk criteria",
      result: "35% faster underwriting, zero quality loss",
      metric: "35%",
      metricLabel: "Faster Underwriting",
      detail: "Embedded risk models and automated data validation ensure consistent underwriting standards across all analysts and deal types.",
      testimonial: "Our underwriting quality has never been more consistent across the team.",
      author: "Head of Underwriting"
    }
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;
    container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
  };

  return (
    <>
      <section className="py-24 bg-section-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Serving top funds managing over $50B in AUM
            </p>
            
            {/* Main Testimonial */}
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
              <blockquote className="text-2xl font-medium text-foreground mb-4 italic">
                "{mainTestimonial.quote}"
              </blockquote>
              <p className="text-muted-foreground">— {mainTestimonial.author}</p>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-8">Proof It Works</h3>
          </div>

          {/* Horizontal Scroll Cards */}
          <div className="relative">
            {/* Navigation buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide px-12 py-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-96 bg-white rounded-2xl p-8 shadow-xl hover-lift cursor-pointer group"
                  onClick={() => setSelectedCase(index)}
                >
                  {/* Industry badge */}
                  <div className="mb-6">
                    <span className="inline-block bg-gradient-to-r from-secondary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-primary mb-4">{study.title}</h4>
                  
                  {/* Constraint */}
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Constraint:</p>
                    <p className="text-gray-700">{study.constraint}</p>
                  </div>
                  
                  {/* Big metric */}
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-2">
                      {study.metric}
                    </div>
                    <p className="text-lg font-semibold text-gray-700">{study.metricLabel}</p>
                  </div>
                  
                  {/* Quick result */}
                  <p className="text-gray-600 text-center mb-6 font-medium">{study.result}</p>
                  
                  {/* Click to expand indicator */}
                  <div className="flex items-center justify-center text-accent group-hover:text-secondary transition-colors">
                    <span className="text-sm mr-2">Click to expand</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-semibold rounded-full hover-lift animate-pulse-glow mb-4"
              onClick={() => setIsContactModalOpen(true)}
            >
              Book Your 45-Minute Pilot Call →
            </Button>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your highest-ROI workflow identified, decision process mapped, and custom ROI model — most clients see 300–500% ROI in 6 months
            </p>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-3xl" />
      </section>

      {/* Case Study Detail Modal */}
      {selectedCase !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative animate-scale-in">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              ×
            </button>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-gradient-to-r from-secondary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {caseStudies[selectedCase].industry}
                </span>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                  {caseStudies[selectedCase].metric}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-primary mb-2">{caseStudies[selectedCase].title}</h3>
              <p className="text-xl text-gray-600 mb-6">{caseStudies[selectedCase].industry}</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Challenge</h4>
                <p className="text-gray-600">{caseStudies[selectedCase].constraint}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Solution & Results</h4>
                <p className="text-gray-600 mb-4">{caseStudies[selectedCase].detail}</p>
                <p className="text-lg font-medium text-accent">{caseStudies[selectedCase].result}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{caseStudies[selectedCase].testimonial}"
                </blockquote>
                <p className="text-sm text-gray-600">— {caseStudies[selectedCase].author}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default ProofSection;