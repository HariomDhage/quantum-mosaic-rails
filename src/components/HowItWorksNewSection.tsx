import React from 'react';
import { Camera, Code, Zap, TrendingUp } from 'lucide-react';

const HowItWorksNewSection = () => {
  const steps = [
    {
      icon: Camera,
      title: "Capture",
      description: "We shadow your best performers to map decision patterns and capture institutional knowledge"
    },
    {
      icon: Code,
      title: "Encode", 
      description: "Transform those patterns into executable logic with our proprietary modeling system"
    },
    {
      icon: Zap,
      title: "Automate & Monitor",
      description: "Deploy automated workflows with real-time monitoring and compliance tracking"
    },
    {
      icon: TrendingUp,
      title: "Refine & Improve",
      description: "Continuous optimization based on performance data and market feedback"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No rip-and-replace: Deploy in 50 days with &lt;8 hours of IT time
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksNewSection;