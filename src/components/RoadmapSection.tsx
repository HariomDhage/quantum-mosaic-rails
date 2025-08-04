import React, { useState, useEffect } from 'react';
import { Clock, Zap, Rocket, ChevronRight } from 'lucide-react';

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      icon: Clock,
      title: "Phase 1",
      subtitle: "Foundation",
      timeframe: "Q1-Q2 2024",
      status: "Available Now",
      color: "from-green-500 to-emerald-500",
      features: [
        "Real-time document parsing & analysis",
        "Decision scoring & recommendation engine", 
        "Interactive analytics dashboard",
        "Basic policy corridor enforcement",
        "Audit trail & compliance logging"
      ],
      description: "Core decision intelligence infrastructure with immediate business value"
    },
    {
      icon: Zap,
      title: "Phase 2", 
      subtitle: "Intelligence",
      timeframe: "Q3-Q4 2024",
      status: "In Development",
      color: "from-blue-500 to-primary",
      features: [
        "AI agent credentialing & permissions",
        "Adaptive policy learning & refinement",
        "Multi-stakeholder approval workflows",
        "Advanced constraint optimization",
        "Predictive decision modeling"
      ],
      description: "Autonomous agents with learning capabilities and sophisticated policy management"
    },
    {
      icon: Rocket,
      title: "Phase 3",
      subtitle: "Autonomy", 
      timeframe: "2025",
      status: "Future Vision",
      color: "from-purple-500 to-secondary",
      features: [
        "Full autonomous enterprise orchestration",
        "Cross-departmental decision networks",
        "Dynamic organizational restructuring",
        "Exponential scaling without human oversight",
        "Self-improving institutional intelligence"
      ],
      description: "Complete autonomous enterprise management with exponential scaling capabilities"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-6 font-sora">
            📍 The Path to Autonomous Enterprise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A three-phase journey from enhanced decision-making to fully autonomous organizational intelligence
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-muted">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
              style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
            />
          </div>

          {/* Phases */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  activePhase === index ? 'scale-105 lg:scale-110' : 'scale-95 lg:scale-100 opacity-75'
                }`}
                onClick={() => setActivePhase(index)}
              >
                {/* Timeline Node */}
                <div className="hidden lg:block absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center border-4 border-background shadow-lg`}>
                    <phase.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Phase Card */}
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 mt-8 lg:mt-16">
                  {/* Mobile Icon */}
                  <div className="lg:hidden flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center`}>
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-accent mb-2 font-sora">
                      {phase.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium mb-2">
                      {phase.subtitle}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm text-muted-foreground">{phase.timeframe}</span>
                      <span className="text-xs">•</span>
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                        index === 0 ? 'bg-green-100 text-green-700' :
                        index === 1 ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {phase.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start space-x-3 animate-fade-in"
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  {activePhase === index && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className={`h-2 rounded-full bg-gradient-to-r ${phase.color} animate-pulse`} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-accent mb-4 font-sora">
              The Exponential Future
            </h3>
            <p className="text-muted-foreground mb-4">
              By 2025, early adopters will operate autonomous enterprises that scale 
              exponentially while maintaining human oversight and values.
            </p>
            <div className="inline-flex items-center space-x-2 text-primary font-medium">
              <span>Join the transformation</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;