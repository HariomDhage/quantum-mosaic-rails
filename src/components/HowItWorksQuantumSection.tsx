import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Database, Cpu, Command } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksQuantumSection = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  const stackComponents = [
    {
      id: 1,
      icon: Database,
      name: "DNA Vault",
      function: "Extracts and structures institutional judgment into living IP",
      shortDesc: "Your expertise becomes institutional intelligence",
      fullDesc: "DNA Vault → Extracts and structures institutional judgment into living IP. Captures decision patterns, policy logic, and strategic playbooks from your top performers, converting tacit knowledge into explicit, executable intelligence.",
      color: "emerald"
    },
    {
      id: 2,
      icon: Cpu,
      name: "Decision Engine", 
      function: "Encodes constraints & policy logic into executable corridors",
      shortDesc: "Transform policies into automated enforcement",
      fullDesc: "Decision Engine → Encodes constraints & policy logic into executable corridors. Converts business rules, compliance requirements, and strategic guidelines into dynamic workflows that adapt and execute in real-time.",
      color: "blue"
    },
    {
      id: 3,
      icon: Command,
      name: "Command Layer",
      function: "Orchestrates execution, monitors performance, compounds learning",
      shortDesc: "Continuous optimization through intelligent orchestration",
      fullDesc: "Command Layer → Orchestrates execution, monitors performance, compounds learning. Coordinates all systems, tracks outcomes, and continuously improves performance through machine learning and human feedback loops.",
      color: "purple"
    }
  ];

  const toggleComponent = (id: number) => {
    setExpandedComponent(expandedComponent === id ? null : id);
  };

  const getColorClasses = (color: string, expanded: boolean) => {
    const colorMap = {
      emerald: {
        border: expanded ? 'border-emerald-500' : 'border-emerald-200',
        bg: 'bg-emerald-100',
        text: 'text-emerald-600',
        icon: 'text-emerald-600'
      },
      blue: {
        border: expanded ? 'border-blue-500' : 'border-blue-200',
        bg: 'bg-blue-100', 
        text: 'text-blue-600',
        icon: 'text-blue-600'
      },
      purple: {
        border: expanded ? 'border-purple-500' : 'border-purple-200',
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        icon: 'text-purple-600'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-8">
            The Mosaic Stack
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three layers that transform your expertise into infinitely scalable execution.
          </p>
        </div>

        {/* Stack Components */}
        <div className="space-y-6 mb-16">
          {stackComponents.map((component) => {
            const colors = getColorClasses(component.color, expandedComponent === component.id);
            
            return (
              <Card 
                key={component.id}
                className={`transition-all duration-300 cursor-pointer border-2 ${
                  expandedComponent === component.id 
                    ? `${colors.border} shadow-xl` 
                    : 'border-slate-200 hover:border-slate-300'
                } hover:shadow-lg`}
                onClick={() => toggleComponent(component.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 flex-1">
                      <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center`}>
                        <component.icon className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {component.name}
                        </h3>
                        <p className={`text-lg font-medium ${colors.text} mb-2`}>
                          {component.function}
                        </p>
                        <p className="text-slate-600">
                          {expandedComponent === component.id ? component.fullDesc : component.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="ml-6">
                      {expandedComponent === component.id ? (
                        <ChevronDown className="h-8 w-8 text-emerald-600" />
                      ) : (
                        <ChevronRight className="h-8 w-8 text-slate-400" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Outcome */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-8 md:p-12 text-center">
          <h4 className="text-3xl font-bold text-slate-900 mb-6">
            Outcome:
          </h4>
          <p className="text-2xl text-slate-700 leading-relaxed">
            Your best decisions — applied 
            <span className="text-emerald-600 font-bold"> instantly</span>, 
            <span className="text-blue-600 font-bold"> everywhere</span>, 
            without 
            <span className="text-purple-600 font-bold"> dilution</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksQuantumSection;