import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactFormModal from './ContactFormModal';

const FinalCTASection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Start Your 90-Day Pilot?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            You'll leave with your highest-ROI workflow identified, decision process mapped, 
            and custom ROI model — most clients see 300–500% ROI in 6 months.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
            <p className="text-lg font-semibold text-primary mb-4">
              Book Your 45-Minute Pilot Call — You'll leave with:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <p className="text-foreground">Highest-ROI workflow identified & scoped</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <p className="text-foreground">Mapped version of your best decision-making — ready to scale</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <p className="text-foreground">Custom ROI model tailored to your firm</p>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            onClick={() => setIsContactModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Your 45-Minute Pilot Call →
          </Button>

          <div className="mt-6 text-sm text-muted-foreground">
            <p className="font-medium">No risk: No measurable value in 90 days? We refund 100% of your investment.</p>
          </div>
        </div>
      </div>

      <ContactFormModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default FinalCTASection;