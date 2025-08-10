import React, { useState, useEffect } from 'react';
import { Users, Cog, Shield } from 'lucide-react';

const WhatWeDoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('what-we-do');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      icon: Users,
      title: "Captures your top performers' decision logic",
      description: "We work with your best people to understand exactly how they make decisions"
    },
    {
      number: 2,
      icon: Cog,
      title: "Encodes it into enforceable workflows",
      description: "Transform expertise into automated systems that scale your best judgment"
    },
    {
      number: 3,
      icon: Shield,
      title: "Ensures every decision matches your highest standards",
      description: "At scale, in real time — without compromising quality or compliance"
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            What We Do
          </h2>
          <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We don't replace your people. We multiply your best people.
          </p>
          <div className="inline-block bg-gradient-to-r from-secondary to-accent text-white px-6 py-3 rounded-full text-lg font-semibold">
            Quantum Mosaic:
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 transition-all duration-700 ${
                isVisible ? 'reveal revealed' : 'reveal'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Step Circle */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-2xl">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual Arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-32">
                  <div className="w-1 h-16 bg-gradient-to-b from-secondary to-accent rounded-full opacity-30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-secondary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default WhatWeDoSection;