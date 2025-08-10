import React from 'react';
import { Calendar, Wrench, Target } from 'lucide-react';

const ImplementationSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "90 Days to Live",
      description: "From kickoff to production deployment in under 3 months"
    },
    {
      icon: Wrench,
      title: "Minimal IT",
      description: "Less than 8 hours of your IT team's time required"
    },
    {
      icon: Target,
      title: "Tailored Rollout",
      description: "Custom implementation plan based on your specific workflows and risk tolerance"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Implementation — Low Lift, Fast Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We handle the complexity so you can focus on what matters most
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;