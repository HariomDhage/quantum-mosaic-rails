import React from 'react';
import { Database, Shield, Cpu, RotateCcw, Zap } from 'lucide-react';

const AIFactorySection = () => {
  const flowSteps = [
    { icon: Database, label: "Experience", color: "text-blue-400" },
    { icon: Shield, label: "Policy", color: "text-purple-400" },
    { icon: Cpu, label: "Enforcement", color: "text-green-400" },
    { icon: RotateCcw, label: "Feedback", color: "text-yellow-400" },
    { icon: Zap, label: "Autonomous Flow", color: "text-red-400" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What Is an AI Factory?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A private AWS instance for decision-making: capturing knowledge, encoding policy, 
            and deploying compliant AI agents that learn and evolve.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="relative mb-16">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {flowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div 
                  className="flex flex-col items-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group-hover:scale-110">
                    <step.icon className={`w-12 h-12 ${step.color} mb-3`} />
                    <p className="text-sm font-medium text-foreground text-center">
                      {step.label}
                    </p>
                  </div>
                </div>
                
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block w-8 h-px bg-gradient-to-r from-primary to-accent opacity-50"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Capture Tribal Workflows",
              description: "Extract and formalize institutional knowledge",
              icon: Database
            },
            {
              title: "Encode Guardrails", 
              description: "Define policy boundaries and compliance rules",
              icon: Shield
            },
            {
              title: "Deploy AI Agents",
              description: "Autonomous execution within defined constraints",
              icon: Cpu
            },
            {
              title: "Learn from Every Decision",
              description: "Continuous improvement through feedback loops",
              icon: RotateCcw
            }
          ].map((capability, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <capability.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {capability.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFactorySection;