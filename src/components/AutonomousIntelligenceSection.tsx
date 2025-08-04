import React from 'react';
import { CheckCircle, FileText, TrendingUp } from 'lucide-react';

const AutonomousIntelligenceSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Executes decisions under constraints",
      description: "AI agents operate within predefined policy boundaries"
    },
    {
      icon: FileText,
      title: "Logs every action for compliance",
      description: "Complete audit trails for regulatory requirements"
    },
    {
      icon: TrendingUp,
      title: "Learns and evolves with outcomes",
      description: "Continuous improvement through decision feedback"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            AI That Thinks 
            <span className="bg-gradient-quantum bg-clip-text text-transparent"> Within the Lines</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Auditable. Compliant. Optimized.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-all duration-300 animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-quantum p-4 rounded-full">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 lg:p-12 text-center animate-fade-in">
          <blockquote className="text-xl lg:text-2xl text-foreground font-medium italic mb-6 leading-relaxed">
            "True breakthroughs happen when leaders abandon incrementalism and embrace the possibility of 10x improvement."
          </blockquote>
          <cite className="text-primary font-semibold">
            — Mike Maples Jr., Floodgate Capital
          </cite>
        </div>
      </div>
    </section>
  );
};

export default AutonomousIntelligenceSection;