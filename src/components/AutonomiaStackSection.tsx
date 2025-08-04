import React from 'react';
import { Map, Code, Shield, RotateCcw, Zap } from 'lucide-react';

const AutonomiaStackSection = () => {
  const stackLayers = [
    {
      icon: Map,
      title: "Experience Mapping",
      description: "Capture and model complex decision workflows from domain experts",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Policy Encoding", 
      description: "Transform business rules and compliance requirements into executable logic",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Precision Enforcement",
      description: "Deploy AI agents that operate within defined policy corridors",
      color: "from-green-500 to-green-600"
    },
    {
      icon: RotateCcw,
      title: "Feedback Loops",
      description: "Continuous learning and optimization from decision outcomes",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Zap,
      title: "Autonomous Flow",
      description: "End-to-end automation of complex enterprise processes",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            The Autonomia Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five layers of intelligence that transform your enterprise into an autonomous decision-making machine.
          </p>
        </div>

        <div className="space-y-6">
          {stackLayers.map((layer, index) => (
            <div 
              key={index}
              className="group relative animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className={`bg-gradient-to-br ${layer.color} p-4 rounded-xl flex-shrink-0`}>
                    <layer.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Layer {index + 1}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                        {layer.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {layer.description}
                    </p>
                  </div>

                  <div className="hidden lg:block w-12 h-px bg-gradient-to-r from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              
              {/* Connecting Line */}
              {index < stackLayers.length - 1 && (
                <div className="absolute left-8 lg:left-12 top-full w-px h-6 bg-gradient-to-b from-primary to-accent opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutonomiaStackSection;