import React, { useState } from 'react';
import { Map, Code, Shield, RotateCcw, Workflow } from 'lucide-react';

const AutonomiaStackSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      icon: Map,
      title: "Experience Mapping",
      description: "Capture and structure organizational knowledge, decision patterns, and institutional wisdom into queryable formats.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Policy Encoding",
      description: "Transform business rules, compliance requirements, and strategic guidelines into executable logic and constraints.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Precision Enforcement",
      description: "Deploy AI agents that operate strictly within defined policy corridors, ensuring compliant autonomous execution.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: RotateCcw,
      title: "Feedback Loops",
      description: "Continuous learning from outcomes, policy refinement, and adaptive improvement of decision-making accuracy.",
      color: "from-green-500 to-yellow-500"
    },
    {
      icon: Workflow,
      title: "Autonomous Flow",
      description: "Self-managing decision networks that scale exponentially while maintaining full compliance and auditability.",
      color: "from-yellow-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-6 font-sora">
            🧱 The Autonomia Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five integrated layers that transform human judgment into scalable, 
            autonomous intelligence systems.
          </p>
        </div>

        {/* Desktop View - Horizontal Cards */}
        <div className="hidden lg:block">
          <div className="flex space-x-6 overflow-x-auto pb-8">
            {layers.map((layer, index) => (
              <div
                key={index}
                className={`min-w-[300px] bg-background rounded-2xl p-6 shadow-lg border border-border cursor-pointer transition-all duration-500 ${
                  activeLayer === index 
                    ? 'scale-105 shadow-xl border-primary' 
                    : 'hover:scale-102 hover:shadow-lg'
                }`}
                onClick={() => setActiveLayer(index)}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${layer.color} flex items-center justify-center mr-4`}>
                    <layer.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-accent mb-3 font-sora">
                  {layer.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {layer.description}
                </p>
                
                {activeLayer === index && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${layer.color} animate-pulse`}></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-lg border border-border animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${layer.color} flex items-center justify-center mr-4`}>
                  <layer.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-accent font-sora">
                    {layer.title}
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    Layer {index + 1}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stack Integration Visualization */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-lg font-semibold text-accent mb-4 font-sora">
              Integrated Intelligence System
            </h3>
            <div className="flex items-center justify-center space-x-2 text-sm">
              {[1, 2, 3, 4, 5].map((num, index) => (
                <React.Fragment key={num}>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${layers[index].color} flex items-center justify-center text-white text-xs font-bold`}>
                    {num}
                  </div>
                  {index < 4 && (
                    <div className="w-4 h-px bg-gradient-to-r from-primary to-secondary opacity-50"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Each layer builds upon the previous, creating exponential capability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomiaStackSection;