import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Satellite, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';

const FinalQuantumCTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleJoinAccess = () => {
    setIsFormOpen(true);
  };

  const handleSeeInAction = () => {
    window.open('https://share.synthesia.io/3f373475-6df6-46ae-9c7a-738065eb8b15', '_blank');
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Radial Wave Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-primary/20 rounded-full animate-ping"
              style={{
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-8 leading-tight font-sora animate-scale-in">
              Your Constraints Aren't Limits—
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                They're Leverage.
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Transform organizational constraints into competitive advantages. 
              Join the pioneers building the first autonomous enterprises.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-bounce-in">
              <Button
                onClick={handleJoinAccess}
                className="group bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/30 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <Brain className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                🧠 Join Early Access
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={handleSeeInAction}
                variant="outline"
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <Satellite className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                🛰 See It in Action
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-slide-in-left">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">∞</span>
                </div>
                <h3 className="font-semibold text-accent mb-2 font-sora">Exponential Scale</h3>
                <p className="text-sm text-muted-foreground">Linear cost, exponential capability</p>
              </div>

              <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">⚡</span>
                </div>
                <h3 className="font-semibold text-accent mb-2 font-sora">Instant Deployment</h3>
                <p className="text-sm text-muted-foreground">Ready-to-use AI infrastructure</p>
              </div>

              <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">🛡️</span>
                </div>
                <h3 className="font-semibold text-accent mb-2 font-sora">Full Compliance</h3>
                <p className="text-sm text-muted-foreground">Built-in audit trails and governance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Glowing Border Effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default FinalQuantumCTASection;