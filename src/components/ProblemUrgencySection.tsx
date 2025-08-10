import React from 'react';
import { TrendingUp, Clock, Shield } from 'lucide-react';

const ProblemUrgencySection = () => {
  const whyNowPoints = [
    {
      icon: TrendingUp,
      title: "Deal Volume Rising",
      description: "More opportunities than ever, but your team can't scale"
    },
    {
      icon: Clock,
      title: "Speed Kills",
      description: "First mover advantage in competitive markets"
    },
    {
      icon: Shield,
      title: "Compliance Risk",
      description: "Manual processes = human error = regulatory exposure"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            The Problem — And Why It's Urgent
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Problem Description */}
          <div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Deal volume is rising, but throughput is stalling. Margins are shrinking as you hire more people to handle the same processes. Meanwhile, compliance risk climbs with every manual handoff, every email approval, every spreadsheet that could have a hidden error.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mt-6">
              Your competitors who automate first will capture market share while you're still hiring coordinators.
            </p>
          </div>
          
          {/* Right Column - Why Now Points */}
          <div className="space-y-6">
            {whyNowPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemUrgencySection;