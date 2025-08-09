import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Cpu, Command, ArrowRight } from 'lucide-react';

const HowItWorksSteps = () => {

  const steps = [
    {
      id: 1,
      title: "Decision Mapping",
      subtitle: "Capture Your Logic",
      icon: Brain,
      gradient: "from-emerald-500 to-teal-600",
      details: {
        process: "Extract decision patterns from your best performers",
        outcome: "Codified expertise ready for infinite replication",
        timeframe: "2-3 weeks"
      }
    },
    {
      id: 2,
      title: "Corridor Execution",
      subtitle: "Deploy Intelligence",
      icon: Cpu,
      gradient: "from-blue-500 to-indigo-600",
      details: {
        process: "Transform logic into executable workflows",
        outcome: "Automated judgment that scales instantly",
        timeframe: "1-2 weeks"
      }
    },
    {
      id: 3,
      title: "Scale & Learn",
      subtitle: "Compound Value",
      icon: Command,
      gradient: "from-purple-500 to-violet-600",
      details: {
        process: "Continuous optimization through machine learning",
        outcome: "Self-improving competitive advantage",
        timeframe: "Ongoing"
      }
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Three Steps to Transformation
          </h2>
          <p className="text-2xl text-slate-300">
            Minimal complexity, maximum impact
          </p>
        </div>

        {/* Steps Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <Card
                className="group bg-transparent border-0 w-full lg:w-80"
              >
                <CardContent className="p-0">
                  <div className={`
                    relative h-80 rounded-2xl bg-gradient-to-br ${step.gradient}
                    transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl
                    flex flex-col items-center justify-center text-white
                  `}>
                    {/* Step Number */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                      {step.id}
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-16 h-16" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-lg opacity-90 text-center">
                      {step.subtitle}
                    </p>
                    
                    {/* Expanded Details on Hover */}
                    <div className="absolute inset-0 bg-slate-900/95 rounded-2xl p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="space-y-4">
                        <div>
                          <div className="text-emerald-400 font-semibold mb-1">Process:</div>
                          <div className="text-sm">{step.details.process}</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold mb-1">Outcome:</div>
                          <div className="text-sm">{step.details.outcome}</div>
                        </div>
                        <div>
                          <div className="text-purple-400 font-semibold mb-1">Timeline:</div>
                          <div className="text-sm">{step.details.timeframe}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block w-8 h-8 text-slate-500" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-20">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
            From insight to impact in 30 days
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;