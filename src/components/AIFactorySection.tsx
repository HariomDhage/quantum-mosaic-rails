import React, { useState, useRef, useEffect } from 'react';
import { Database, Shield, Bot, TrendingUp, ArrowRight } from 'lucide-react';

const AIFactorySection = () => {
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const steps = [
    {
      icon: Database,
      title: "Capture tribal workflows",
      description: "Transform institutional knowledge into executable logic",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Encode guardrails",
      description: "Build compliance and governance into every decision",
      color: "text-green-400"
    },
    {
      icon: Bot,
      title: "Deploy AI agents",
      description: "Autonomous execution within defined corridors",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Learn from every decision",
      description: "Continuous optimization and intelligence growth",
      color: "text-accent"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-6 font-sora transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            What Is an 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              AI Factory?
            </span>
          </h2>
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-inter transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            Your enterprise's private AWS instance for programmable decision-making.
          </p>
        </div>

        {/* Animated Loop Diagram */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-card border border-primary/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-500 ${activeStep === index ? 'scale-110' : 'scale-100'}`}
                >
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 rounded-full transition-all duration-500 ${activeStep === index ? 'bg-gradient-to-r from-primary/30 to-accent/30 blur-xl' : 'bg-muted/20 blur-sm'}`}></div>
                    <div className={`relative w-20 h-20 mx-auto rounded-full border-2 flex items-center justify-center transition-all duration-500 ${activeStep === index ? 'border-primary bg-primary/10' : 'border-muted bg-muted/5'}`}>
                      <step.icon className={`h-10 w-10 transition-all duration-500 ${activeStep === index ? step.color : 'text-muted-foreground'}`} />
                    </div>
                    
                    {/* Step Number */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${activeStep === index ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-lg font-bold mb-2 font-sora transition-all duration-500 ${activeStep === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm font-inter transition-all duration-500 ${activeStep === index ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>
                    {step.description}
                  </p>

                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 z-10">
                      <div className={`w-8 h-px transition-all duration-500 ${activeStep === index ? 'bg-gradient-to-r from-primary to-accent' : 'bg-muted'}`}>
                        <ArrowRight className={`h-4 w-4 absolute -right-2 -top-2 transition-all duration-500 ${activeStep === index ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Feedback Loop Indicator */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-muted/20 rounded-full px-6 py-3 border border-muted">
                <div className="w-3 h-3 bg-accent rounded-full animate-bounce-gentle"></div>
                <span className="text-muted-foreground font-inter">Continuous Learning Loop</span>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          {[
            {
              title: "Auditable",
              description: "Every decision tracked with immutable logs",
              icon: "🔍"
            },
            {
              title: "Compliant", 
              description: "Built-in governance and regulatory alignment",
              icon: "✅"
            },
            {
              title: "Optimized",
              description: "Self-improving through continuous feedback",
              icon: "⚡"
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-sora">{benefit.title}</h3>
              <p className="text-muted-foreground font-inter">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFactorySection;