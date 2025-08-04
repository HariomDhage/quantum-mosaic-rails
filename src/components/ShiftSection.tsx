import React, { useState, useRef, useEffect } from 'react';
import { Users, Brain, ArrowRight } from 'lucide-react';

const ShiftSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  const models = {
    old: {
      title: "Old Model",
      subtitle: "Bandwidth-Limited",
      items: [
        "Scale by hiring more people",
        "Manual decision-making",
        "Tribal knowledge silos",
        "Reactive problem-solving",
        "Linear cost growth"
      ],
      icon: Users,
      color: "from-red-500/20 to-red-600/20",
      borderColor: "border-red-500/30"
    },
    new: {
      title: "New Model", 
      subtitle: "Intelligence-Encoded",
      items: [
        "Scale through AI multiplication",
        "Automated decision corridors", 
        "Codified institutional knowledge",
        "Proactive execution rails",
        "Exponential capability growth"
      ],
      icon: Brain,
      color: "from-primary/20 to-accent/20",
      borderColor: "border-primary/30"
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-6 font-sora transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            The Shift – 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              "From Bandwidth to Encoded Brilliance"
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Old Model Card */}
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className={`relative group cursor-pointer transition-all duration-500 ${isFlipped ? 'scale-95' : 'scale-100'}`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${models.old.color} rounded-2xl blur-xl transition-all duration-500`}></div>
              <div className={`relative bg-card ${models.old.borderColor} border-2 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 ${isFlipped ? 'opacity-75' : 'opacity-100'}`}>
                <div className="flex items-center mb-6">
                  <models.old.icon className="h-12 w-12 text-red-500 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-sora">{models.old.title}</h3>
                    <p className="text-red-400 font-inter">{models.old.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {models.old.items.map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-4 opacity-60"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className={`lg:col-span-2 flex justify-center my-8 lg:my-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-10 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full shadow-lg animate-glow-pulse">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* New Model Card */}
          <div 
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className={`relative group cursor-pointer transition-all duration-500 ${isFlipped ? 'scale-105' : 'scale-100'}`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${models.new.color} rounded-2xl blur-xl transition-all duration-500`}></div>
              <div className={`relative bg-card ${models.new.borderColor} border-2 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 ${isFlipped ? 'shadow-2xl shadow-primary/25' : ''}`}>
                <div className="flex items-center mb-6">
                  <models.new.icon className="h-12 w-12 text-primary mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-sora">{models.new.title}</h3>
                    <p className="text-accent font-inter">{models.new.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {models.new.items.map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 animate-glow-pulse"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SVG Transformation Diagram */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-card border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-sora">The Intelligence Transformation</h3>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
              {/* Headcount Visualization */}
              <div className="text-center">
                <div className="flex justify-center mb-4 space-x-2">
                  {[...Array(6)].map((_, i) => (
                    <Users key={i} className="h-8 w-8 text-red-400 opacity-70" />
                  ))}
                </div>
                <p className="text-muted-foreground font-inter">Traditional Scaling</p>
                <p className="text-red-400 text-sm">Linear Cost Growth</p>
              </div>

              {/* Arrow */}
              <div className="animate-bounce-gentle">
                <ArrowRight className="h-12 w-12 text-primary" />
              </div>

              {/* Intelligence Visualization */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Brain className="h-16 w-16 text-primary animate-glow-pulse" />
                </div>
                <p className="text-muted-foreground font-inter">AI-Powered Scaling</p>
                <p className="text-accent text-sm">Exponential Capability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;