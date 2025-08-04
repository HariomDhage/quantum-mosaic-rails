import React from 'react';
import { Database, Settings, Zap, RotateCcw, ArrowRight } from 'lucide-react';

const AIFactorySection = () => {
  const steps = [
    { icon: Database, label: 'Experience', color: 'from-blue-500 to-cyan-500' },
    { icon: Settings, label: 'Policy', color: 'from-cyan-500 to-teal-500' },
    { icon: Zap, label: 'Enforcement', color: 'from-teal-500 to-green-500' },
    { icon: RotateCcw, label: 'Feedback', color: 'from-green-500 to-blue-500' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-6 font-sora">
            🏭 What Is an AI Factory?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A private AWS instance for decision-making: capturing knowledge, encoding policy, 
            and deploying compliant AI agents that learn and evolve.
          </p>
        </div>

        {/* Decision Pipeline Visualization */}
        <div className="relative mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="group flex flex-col items-center animate-bounce-in" style={{ animationDelay: `${index * 0.3}s` }}>
                  {/* Icon Container */}
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${step.color} p-1 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Pulse Effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30 animate-ping`}></div>
                  </div>
                  
                  {/* Label */}
                  <span className="mt-4 text-lg font-semibold text-accent font-sora">{step.label}</span>
                  
                  {/* Description */}
                  <div className="mt-2 text-center max-w-32">
                    <p className="text-sm text-muted-foreground">
                      {index === 0 && "Capture knowledge"}
                      {index === 1 && "Encode rules"}
                      {index === 2 && "Deploy agents"}
                      {index === 3 && "Learn & adapt"}
                    </p>
                  </div>
                </div>
                
                {/* Flow Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block">
                    <ArrowRight className="h-8 w-8 text-primary/60 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Completion Flow */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary to-secondary rounded-full px-8 py-4 text-white">
              <span className="text-lg font-semibold">→ Autonomous Flow</span>
            </div>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-accent mb-3 font-sora">Always Learning</h3>
            <p className="text-muted-foreground">Continuously captures and encodes institutional knowledge from every decision.</p>
          </div>

          <div className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-accent mb-3 font-sora">Policy Compliant</h3>
            <p className="text-muted-foreground">Every action follows encoded policies with full audit trails and compliance logging.</p>
          </div>

          <div className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-accent mb-3 font-sora">Real-time Execution</h3>
            <p className="text-muted-foreground">Decisions are made and executed instantly within defined constraints and corridors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFactorySection;