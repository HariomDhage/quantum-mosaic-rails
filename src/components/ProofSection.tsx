import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const ProofSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const scrollRef = useRef(null);

  const caseStudies = [
    {
      industry: "Private Equity",
      company: "Meridian Capital",
      constraint: "Manual due diligence taking 6-8 weeks",
      result: "Reduced to 2 weeks, 400% more deals analyzed",
      metric: "400%",
      metricLabel: "Deal Analysis Increase",
      detail: "Automated document review, risk assessment, and compliance checks across 12 different deal types. Eliminated 90% of manual data entry while maintaining 100% accuracy.",
      testimonial: "We went from 20 deals per quarter to 45 deals per quarter with the same team.",
      author: "Sarah Chen, CIO"
    },
    {
      industry: "Real Estate Credit",
      company: "Urban Capital",
      constraint: "Compliance review bottleneck",
      result: "Automated 80% of compliance checks, zero violations",
      metric: "80%",
      metricLabel: "Compliance Automated",
      detail: "Integrated with 15 regulatory databases for real-time compliance monitoring. Reduced approval time from 5 days to 4 hours while achieving perfect regulatory record.",
      testimonial: "The compliance automation alone saved us from three potential violations that could have cost millions.",
      author: "Michael Rodriguez, Chief Compliance Officer"
    },
    {
      industry: "Corporate Finance",
      company: "Global Finance Corp",
      constraint: "Deal coordination across 12 departments",
      result: "Single workflow, 50% faster deal closure",
      metric: "50%",
      metricLabel: "Faster Closure",
      detail: "Unified workflow eliminated 200+ email chains per deal. Real-time status tracking and automated approvals reduced coordination overhead by 75%.",
      testimonial: "What used to take 8 weeks now takes 4 weeks. Our deal velocity has never been higher.",
      author: "Lisa Park, Managing Director"
    },
    {
      industry: "Investment Banking",
      company: "Premier Partners",
      constraint: "Client reporting scattered across systems",
      result: "Unified dashboard, 90% reporting automation",
      metric: "90%",
      metricLabel: "Reporting Automated",
      detail: "Consolidated data from 25 systems into one real-time dashboard. Automated generation of regulatory reports and client updates.",
      testimonial: "Our clients now get real-time updates instead of waiting for monthly reports.",
      author: "David Kim, Operations Director"
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
              Proof It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real companies
            </p>
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
                  
                  {/* Big metric */}
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-2">
                      {study.metric}
                    </div>
                    <p className="text-lg font-semibold text-gray-700">{study.metricLabel}</p>
                  </div>
                  
                  {/* Company name */}
                  <h4 className="text-xl font-bold text-primary mb-4 text-center">{study.company}</h4>
                  
                  {/* Quick result */}
                  <p className="text-gray-600 text-center mb-6">{study.result}</p>
                  
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
              className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-semibold rounded-full hover-lift animate-pulse-glow"
              onClick={() => setIsContactModalOpen(true)}
            >
              Get Your Custom ROI Analysis
            </Button>
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
              
              <h3 className="text-3xl font-bold text-primary mb-2">{caseStudies[selectedCase].company}</h3>
              <p className="text-xl text-gray-600 mb-6">{caseStudies[selectedCase].metricLabel}</p>
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