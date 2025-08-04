import React from 'react';
import { Users, Brain, ArrowRight } from 'lucide-react';

const ShiftSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            From Human Bandwidth to 
            <span className="bg-gradient-quantum bg-clip-text text-transparent"> Encoded Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The future belongs to organizations that can scale judgment, not just execution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Old Model */}
          <div className="bg-background border border-border rounded-xl p-8 animate-slide-in-left">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Old Model</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Hire more experts for complex decisions</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Manual processes with human bottlenecks</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Inconsistent execution across teams</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Limited audit trails and compliance gaps</span>
              </li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-gradient-quantum p-4 rounded-full animate-float">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* New Model */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-8 animate-slide-in-right">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">New Model</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Encode expert judgment into AI systems</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Autonomous processes with human oversight</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Consistent execution at enterprise scale</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Complete audit trails and compliance automation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;