import React from 'react';
import { FileText, Shield, Target, BarChart3, Archive } from 'lucide-react';

const MVPCapabilitiesSection = () => {
  const capabilities = [
    {
      icon: FileText,
      title: "Document Parsing",
      description: "Intelligent extraction and analysis of complex documents",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Policy Corridors", 
      description: "Define and enforce business rules and compliance boundaries",
      color: "text-purple-400"
    },
    {
      icon: Target,
      title: "Decision Scoring",
      description: "Real-time evaluation and optimization of decisions",
      color: "text-green-400"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into decision patterns and outcomes",
      color: "text-yellow-400"
    },
    {
      icon: Archive,
      title: "Audit Vault",
      description: "Immutable record of all decisions and actions",
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What Our MVP Delivers Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-ready capabilities that immediately enhance your decision-making infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 animate-scale-in hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <capability.icon className={`w-8 h-8 ${capability.color}`} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {capability.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready for Production
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our MVP is battle-tested in enterprise environments, processing millions of decisions 
              while maintaining 99.9% uptime and complete compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVPCapabilitiesSection;