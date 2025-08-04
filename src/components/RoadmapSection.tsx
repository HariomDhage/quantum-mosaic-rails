import React from 'react';
import { CheckCircle, Clock, Rocket } from 'lucide-react';

const RoadmapSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      status: "Live",
      icon: CheckCircle,
      title: "Foundation Layer",
      features: [
        "Real-time document parsing",
        "Basic scoring algorithms", 
        "Analytics dashboard",
        "Audit trail system"
      ],
      color: "text-green-400",
      bgColor: "from-green-500/10 to-green-600/10",
      borderColor: "border-green-500/30"
    },
    {
      phase: "Phase 2", 
      status: "Upcoming",
      icon: Clock,
      title: "Intelligence Layer",
      features: [
        "Agent credentialing system",
        "Adaptive policy logic",
        "Advanced compliance monitoring",
        "Multi-modal decision support"
      ],
      color: "text-yellow-400",
      bgColor: "from-yellow-500/10 to-yellow-600/10", 
      borderColor: "border-yellow-500/30"
    },
    {
      phase: "Phase 3",
      status: "Future",
      icon: Rocket,
      title: "Autonomous Layer",
      features: [
        "Fully autonomous orchestration",
        "Cross-system integration",
        "Predictive decision modeling",
        "Self-optimizing workflows"
      ],
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-500/30"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Product Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey to fully autonomous enterprise intelligence, delivered in phases.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="space-y-12 lg:space-y-24">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`relative animate-fade-in ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-quantum rounded-full border-4 border-background"></div>

                <div className={`bg-gradient-to-br ${phase.bgColor} border ${phase.borderColor} rounded-xl p-6 lg:p-8 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-gradient-to-br ${phase.bgColor} p-3 rounded-lg border ${phase.borderColor}`}>
                      <phase.icon className={`w-6 h-6 ${phase.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-foreground">
                          {phase.phase}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${phase.color} bg-background/50`}>
                          {phase.status}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-foreground mt-1">
                        {phase.title}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${phase.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;