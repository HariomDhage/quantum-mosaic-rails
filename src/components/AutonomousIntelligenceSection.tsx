import React from 'react';
import { Shield, FileText, TrendingUp, Quote } from 'lucide-react';

const AutonomousIntelligenceSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Executes decisions under constraints",
      description: "AI agents operate within predefined policy corridors, ensuring every action aligns with organizational guardrails."
    },
    {
      icon: FileText,
      title: "Logs every action for compliance",
      description: "Complete audit trails with real-time compliance monitoring and automated reporting for regulatory requirements."
    },
    {
      icon: TrendingUp,
      title: "Learns and evolves with outcomes",
      description: "Continuous feedback loops refine decision-making models, improving accuracy and efficiency over time."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-6 font-sora">
            🤖 AI That Thinks Within the Lines
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Autonomous intelligence that combines the speed of AI with the wisdom of human judgment, 
            operating safely within organizational constraints.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-accent mb-4 font-sora group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mike Maples Quote */}
        <div className="relative">
          <div className="bg-gradient-to-r from-muted/50 to-background rounded-3xl p-12 border border-border shadow-lg">
            <Quote className="h-12 w-12 text-primary/30 mb-6" />
            
            <blockquote className="text-2xl md:text-3xl font-medium text-accent leading-relaxed mb-8 font-sora">
              "True breakthroughs happen when leaders abandon incrementalism and commit to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> exponential thinking</span>."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                MM
              </div>
              <div>
                <p className="font-semibold text-accent">Mike Maples Jr.</p>
                <p className="text-muted-foreground">Co-founder, Floodgate</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full opacity-30"></div>
        </div>

        {/* Intelligence Visualization */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-muted rounded-2xl p-8 border border-border">
            <h3 className="text-lg font-semibold text-accent mb-4 font-sora">
              Decision Intelligence Pipeline
            </h3>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">Input</span>
              <span>→</span>
              <span className="bg-primary/20 px-3 py-1 rounded-full">Analysis</span>
              <span>→</span>
              <span className="bg-primary/30 px-3 py-1 rounded-full">Constraints</span>
              <span>→</span>
              <span className="bg-primary/40 px-3 py-1 rounded-full">Decision</span>
              <span>→</span>
              <span className="bg-primary px-3 py-1 rounded-full text-white">Action</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousIntelligenceSection;