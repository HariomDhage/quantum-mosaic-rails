import React, { useState, useEffect, useRef } from 'react';
import { TrendingDown, Clock, XCircle } from 'lucide-react';

const ProblemSection = () => {
  const [counters, setCounters] = useState({ first: 0, second: 0, third: 0 });
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

    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const targets = { first: 25, second: 45, third: 70 };
      
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        
        setCounters({
          first: Math.floor(targets.first * easeOutQuad),
          second: Math.floor(targets.second * easeOutQuad),
          third: Math.floor(targets.third * easeOutQuad)
        });

        if (step >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, duration / steps);
    };

    animateCounters();
  }, [isVisible]);

  const problems = [
    {
      icon: TrendingDown,
      percentage: counters.first,
      label: 'of decisions are suboptimal',
      color: 'text-red-400'
    },
    {
      icon: Clock,
      percentage: counters.second,
      label: 'miss market windows',
      color: 'text-amber-400'
    },
    {
      icon: XCircle,
      percentage: counters.third,
      label: 'fail at execution',
      color: 'text-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-6 font-sora transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            The Problem – 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              "Complexity Kills Scale"
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 delay-${index * 300} ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
            >
              <div className="relative mb-8">
                {/* Subtle background */}
                <div className="absolute inset-0 bg-card rounded-full blur-sm opacity-50"></div>
                <div className="relative bg-card border border-border rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-6">
                  <problem.icon className={`h-12 w-12 ${problem.color}`} />
                </div>
              </div>
              
              {/* Counter */}
              <div className="mb-4">
                <span className={`text-6xl md:text-7xl font-bold ${problem.color} font-sora`}>
                  {problem.percentage}
                </span>
                <span className={`text-4xl md:text-5xl font-bold ${problem.color}`}>%</span>
              </div>
              
              <p className="text-xl text-muted-foreground font-inter">
                {problem.label}
              </p>

              {/* Subtle indicator line */}
              <div className="mt-8 relative">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <div className="absolute left-1/2 top-0 w-2 h-2 bg-primary/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-professional-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-sora">Decision Bottlenecks in Action</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              {['Strategy', 'Approval', 'Execution'].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg font-medium">
                    {step}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block w-16 h-px bg-gradient-to-r from-red-500/30 to-red-500/10 mx-4 relative">
                      <div className="absolute right-0 top-0 w-2 h-2 bg-red-400 rounded-full transform -translate-y-1/2 animate-smooth-bounce"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;