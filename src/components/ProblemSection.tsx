import React from 'react';
import { TrendingDown, Clock, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      stat: "25%",
      text: "of strategic decisions are suboptimal",
      color: "text-red-400"
    },
    {
      icon: Clock,
      stat: "45%", 
      text: "take too long and miss market windows",
      color: "text-yellow-400"
    },
    {
      icon: AlertTriangle,
      stat: "70%",
      text: "fail in execution",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Complexity Kills Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise decision-making breaks down under complexity, creating bottlenecks that stifle growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-all duration-300 animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4">
                <problem.icon className={`w-12 h-12 ${problem.color}`} />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {problem.stat}
              </div>
              <p className="text-muted-foreground">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center animate-fade-in">
          <blockquote className="text-lg text-muted-foreground italic mb-4">
            "The cost of poor decision-making compounds exponentially in enterprise environments."
          </blockquote>
          <cite className="text-sm text-primary font-medium">
            — Harvard Business Review, 2024
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;