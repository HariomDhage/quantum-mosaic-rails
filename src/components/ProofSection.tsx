import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const ProofSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const caseStudies = [
    {
      constraint: "Private Equity Fund",
      result: "Reduced deal review time from 3 weeks to 5 days while maintaining 100% compliance standards"
    },
    {
      constraint: "Real Estate Credit Fund", 
      result: "Increased loan processing capacity by 250% without adding staff"
    },
    {
      constraint: "Investment Management Firm",
      result: "Eliminated 90% of manual approvals while improving audit trail completeness"
    }
  ];

  return (
    <>
      <section className="py-16 sm:py-20 bg-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Proof It Works
            </h2>
          </div>
          
          {/* Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-border">
                <div className="text-sm font-semibold text-secondary mb-3">{study.constraint}</div>
                <div className="text-foreground font-medium">{study.result}</div>
              </div>
            ))}
          </div>
          
          {/* Featured Testimonial */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-border max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <Quote className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
              <div>
                <blockquote className="text-lg sm:text-xl text-foreground font-medium mb-4">
                  "Quantum Mosaic transformed our approval workflows from a 3-week bottleneck into a 24-hour competitive advantage. The ROI was immediate and the compliance peace of mind is invaluable."
                </blockquote>
                <cite className="text-muted-foreground font-medium">
                  — Chief Investment Officer, $2.5B Private Equity Fund
                </cite>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => setIsContactModalOpen(true)}
            >
              BOOK YOUR 45-MINUTE PILOT CALL
            </Button>
          </div>
        </div>
      </section>
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default ProofSection;