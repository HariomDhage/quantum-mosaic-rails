import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormModal from './ContactFormModal';

const ValueSnapshotSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('value-snapshot');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const quickValues = [
    {
      icon: TrendingUp,
      text: "2–3× throughput with your current team"
    },
    {
      icon: Zap,
      text: "40% faster decision cycles — no quality loss"
    },
    {
      icon: Shield,
      text: "300–500% ROI in 6 months (proven across $50B+ in AUM)"
    },
    {
      icon: CheckCircle,
      text: "100% policy compliance — every time, no exceptions"
    },
    {
      icon: Clock,
      text: "Live in 90 days or less — full money-back guarantee"
    }
  ];

  return (
    <>
      <section id="value-snapshot" className="py-20 bg-section-light relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>Quick Value Snapshot — For the Time-Starved Executive</span>
            </div>
          </div>

          {/* Quick Value List */}
          <div className="space-y-6 mb-12">
            {quickValues.map((value, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 bg-white rounded-xl p-6 shadow-sm hover-lift transition-all duration-500 ${
                  isVisible ? 'reveal revealed' : 'reveal'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium text-foreground">{value.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-semibold rounded-full hover-lift animate-pulse-glow mb-6"
              onClick={() => setIsContactModalOpen(true)}
            >
              Book Your 45-Minute Pilot Call →
            </Button>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In one session: build your ROI model, pinpoint your highest-impact workflow, and see exactly how to digitize it for maximum return.
            </p>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/5 to-secondary/5 rounded-full blur-3xl -z-10" />
      </section>
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default ValueSnapshotSection;