import React, { useState, useRef, useEffect } from 'react';
import { Brain, Shield, Target, Zap } from 'lucide-react';

const AutonomousIntelligenceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: "Auditable",
      description: "Complete transparency with immutable decision trails and compliance tracking",
      color: "text-green-400",
      bgColor: "from-green-400/20 to-green-600/20"
    },
    {
      icon: Target,
      title: "Compliant", 
      description: "Built-in regulatory alignment and governance frameworks for every decision",
      color: "text-blue-400",
      bgColor: "from-blue-400/20 to-blue-600/20"
    },
    {
      icon: Zap,
      title: "Optimized",
      description: "Continuous learning and improvement through every execution cycle",
      color: "text-accent",
      bgColor: "from-accent/20 to-primary/20"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-6 font-sora transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              AI That Thinks Within the Lines
            </span>
          </h2>
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-inter transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            Autonomous Intelligence that operates within your defined guardrails
          </p>
        </div>

        {/* 3D Cube to Brain Morphing Visualization */}
        <div className={`mb-16 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl"></div>
            
            {/* Main Container */}
            <div className="relative bg-card border border-primary/30 rounded-3xl p-12 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-8">
                {/* Morphing Icon */}
                <div className="relative">
                  <div className="w-32 h-32 border-4 border-primary/50 rounded-lg transform rotate-45 animate-float">
                    <div className="absolute inset-4 border-2 border-accent/50 rounded-md"></div>
                    <div className="absolute inset-8 border border-primary/30 rounded-sm"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="h-16 w-16 text-primary animate-glow-pulse" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2 font-sora">Structured Decision-Making</h3>
                  <p className="text-muted-foreground font-inter">Intelligence within defined boundaries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              <div className={`relative group cursor-pointer transition-all duration-500 ${hoveredBenefit === index ? 'scale-105' : 'scale-100'}`}>
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.bgColor} rounded-2xl blur-xl transition-all duration-500 ${hoveredBenefit === index ? 'opacity-100' : 'opacity-50'}`}></div>
                
                {/* Card Content */}
                <div className="relative bg-card border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
                  {/* Pulsing Icon */}
                  <div className="mb-6 relative">
                    <div className={`absolute inset-0 rounded-full transition-all duration-500 ${hoveredBenefit === index ? 'animate-glow-pulse' : ''}`}></div>
                    <div className="relative w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center">
                      <benefit.icon className={`h-8 w-8 ${benefit.color} transition-all duration-500 ${hoveredBenefit === index ? 'scale-110' : 'scale-100'}`} />
                      
                      {/* Pulsing Dot */}
                      <div className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full animate-bounce-gentle"></div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 font-sora">{benefit.title}</h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">{benefit.description}</p>

                  {/* Hover Effect Lines */}
                  <div className={`mt-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-500 ${hoveredBenefit === index ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture Hint */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-card border border-primary/20 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4 font-sora">The Intelligence Layer</h3>
            <p className="text-muted-foreground font-inter leading-relaxed">
              Unlike traditional AI that operates in isolation, Quantum Mosaic's Autonomous Intelligence 
              integrates directly with your business logic, creating a living layer of executable intelligence 
              that evolves with your organization.
            </p>
            
            {/* Technical Indicators */}
            <div className="flex justify-center space-x-8 mt-8">
              {['Real-time', 'Governance', 'Learning'].map((indicator, index) => (
                <div key={indicator} className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-bounce-gentle" style={{ animationDelay: `${index * 0.3}s` }}></div>
                  <span className="text-sm text-muted-foreground font-inter">{indicator}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousIntelligenceSection;