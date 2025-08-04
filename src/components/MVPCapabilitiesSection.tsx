import React from 'react';
import { FileText, Shield, BarChart3, Target, Archive } from 'lucide-react';

const MVPCapabilitiesSection = () => {
  const capabilities = [
    {
      icon: FileText,
      title: "Document Parsing",
      description: "Intelligent extraction and structuring of information from contracts, policies, and business documents.",
      features: ["Multi-format support", "Context-aware extraction", "Automated categorization"]
    },
    {
      icon: Shield,
      title: "Policy Corridors",
      description: "Dynamic constraint systems that ensure AI decisions remain within approved organizational boundaries.",
      features: ["Real-time validation", "Hierarchical permissions", "Breach prevention"]
    },
    {
      icon: Target,
      title: "Scoring Engine",
      description: "Multi-dimensional decision scoring that evaluates options against organizational priorities and constraints.",
      features: ["Weighted criteria", "Risk assessment", "Confidence intervals"]
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time visibility into decision patterns, performance metrics, and system health indicators.",
      features: ["Live monitoring", "Trend analysis", "Custom metrics"]
    },
    {
      icon: Archive,
      title: "Audit Vault",
      description: "Immutable logging system that maintains complete decision history for compliance and learning.",
      features: ["Tamper-proof logs", "Regulatory compliance", "Decision reconstruction"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-6 font-sora">
            📈 What Our MVP Delivers Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-ready capabilities that immediately enhance your decision-making infrastructure
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="h-7 w-7 text-white" />
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-accent mb-4 font-sora group-hover:text-primary transition-colors">
                {capability.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {capability.description}
              </p>
              
              <div className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Demo Flash Effect */}
              <div className="mt-6 p-3 bg-primary/5 rounded-lg border border-primary/20 group-hover:bg-primary/10 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">Demo Available</span>
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center font-sora">
            Integrated Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5x</span>
              </div>
              <h4 className="font-semibold text-accent mb-2">Decision Speed</h4>
              <p className="text-sm text-muted-foreground">Reduce decision latency from days to minutes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h4 className="font-semibold text-accent mb-2">Compliance</h4>
              <p className="text-sm text-muted-foreground">Every decision logged and auditable</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">90%</span>
              </div>
              <h4 className="font-semibold text-accent mb-2">Consistency</h4>
              <p className="text-sm text-muted-foreground">Eliminate decision variance across teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVPCapabilitiesSection;