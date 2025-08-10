import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const NewHeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const benefits = [
    "300–500% ROI in 6 months",
    "40% faster decisions without compliance misses", 
    "Live in 60 days or less — full money-back guarantee"
  ];

  return (
    <>
      <section className="min-h-screen bg-dark-primary text-white relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Outpace Competitors: Double Deal Throughput in 90 Days — No New Headcount
            </h1>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg sm:text-xl text-gray-100">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => setIsContactModalOpen(true)}
              >
                BOOK YOUR 45-MINUTE PILOT CALL
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </section>
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default NewHeroSection;