import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';

const FinalQuantumCTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEarlyAccess = () => setIsFormOpen(true);
  const handleDemo = () => setIsFormOpen(true);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-quantum rounded-full blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-quantum rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Your Constraints Aren't Limits—
              <span className="block bg-gradient-quantum bg-clip-text text-transparent">
                They're Leverage
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the pioneers building the future of autonomous enterprise intelligence. 
              Transform your organization's decision-making capabilities today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                onClick={handleEarlyAccess}
                size="lg"
                className="bg-gradient-quantum hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Join Early Access
              </Button>
              <Button 
                onClick={handleDemo}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                See It in Action
              </Button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">10x</div>
                <div className="text-sm text-muted-foreground">Decision Speed</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};

export default FinalQuantumCTASection;