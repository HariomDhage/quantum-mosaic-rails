
import React, { useState, useEffect } from 'react';
import { Code, Shield, FileCheck, ArrowRight } from 'lucide-react';

const ArchitectureSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Code,
      title: 'Encode',
      subtitle: 'Policy becomes code corridors',
      description: 'Transform institutional policies into executable code pathways',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Enforce',
      subtitle: 'Rail gates allow only compliant moves',
      description: 'Automated gates prevent non-compliant transactions in real-time',
      color: 'emerald'
    },
    {
      icon: FileCheck,
      title: 'Audit',
      subtitle: 'Immutable logs spark as actions occur',
      description: 'Every decision creates an unalterable audit trail',
      color: 'amber'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      blue: {
        bg: isActive ? 'bg-blue-500' : 'bg-blue-400',
        border: 'border-blue-300',
        text: 'text-blue-600',
        shadow: isActive ? 'shadow-blue-500/50' : 'shadow-blue-400/30'
      },
      emerald: {
        bg: isActive ? 'bg-emerald-500' : 'bg-emerald-400',
        border: 'border-emerald-300',
        text: 'text-emerald-600',
        shadow: isActive ? 'shadow-emerald-500/50' : 'shadow-emerald-400/30'
      },
      amber: {
        bg: isActive ? 'bg-amber-500' : 'bg-amber-400',
        border: 'border-amber-300',
        text: 'text-amber-600',
        shadow: isActive ? 'shadow-amber-500/50' : 'shadow-amber-400/30'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Our Unique Architecture: Encode. Enforce. Audit.
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-sans font-normal">
            Three-layer architecture that transforms policy into executable governance
          </p>
        </div>

        {/* Futuristic Venn Diagram */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <svg viewBox="0 0 800 400" className="w-full h-96">
            {/* Background Grid */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Circles */}
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const colorClasses = getColorClasses(step.color, isActive);
              const positions = [
                { cx: 200, cy: 200 }, // Encode
                { cx: 400, cy: 150 }, // Enforce  
                { cx: 600, cy: 200 }  // Audit
              ];

              return (
                <g key={index}>
                  <circle
                    cx={positions[index].cx}
                    cy={positions[index].cy}
                    r={isActive ? "85" : "75"}
                    fill="none"
                    stroke={isActive ? `rgb(${step.color === 'blue' ? '59 130 246' : step.color === 'emerald' ? '16 185 129' : '245 158 11'})` : '#64748b'}
                    strokeWidth={isActive ? "3" : "2"}
                    className={`transition-all duration-500 ${isActive ? 'drop-shadow-lg' : ''}`}
                    style={{
                      filter: isActive ? `drop-shadow(0 0 10px rgb(${step.color === 'blue' ? '59 130 246' : step.color === 'emerald' ? '16 185 129' : '245 158 11'}))` : 'none'
                    }}
                  />
                  <text
                    x={positions[index].cx}
                    y={positions[index].cy - 20}
                    textAnchor="middle"
                    className={`text-lg font-bold fill-white transition-all duration-300 ${isActive ? 'scale-110' : ''}`}
                  >
                    {step.title}
                  </text>
                  <text
                    x={positions[index].cx}
                    y={positions[index].cy + 5}
                    textAnchor="middle"
                    className="text-xs fill-slate-300"
                  >
                    <tspan x={positions[index].cx} dy="0">{step.subtitle.split(' ').slice(0, 2).join(' ')}</tspan>
                    <tspan x={positions[index].cx} dy="18">{step.subtitle.split(' ').slice(2).join(' ')}</tspan>
                  </text>
                </g>
              );
            })}

            {/* Animated Arrows */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
              </marker>
            </defs>
            
            {/* Policy → Enforcement */}
            <path
              d="M 285 200 Q 340 175 360 150"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              className={`transition-opacity duration-500 ${activeStep >= 1 ? 'opacity-100' : 'opacity-30'}`}
            />
            
            {/* Enforcement → Proof */}
            <path
              d="M 485 175 Q 540 185 515 200"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              className={`transition-opacity duration-500 ${activeStep >= 2 ? 'opacity-100' : 'opacity-30'}`}
            />
          </svg>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const colorClasses = getColorClasses(step.color, isActive);
            const StepIcon = step.icon;

            return (
              <div
                key={index}
                className={`bg-slate-800 rounded-2xl p-8 border-2 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isActive 
                    ? `${colorClasses.border} shadow-2xl ${colorClasses.shadow}` 
                    : 'border-slate-600 hover:border-slate-500'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                  isActive ? colorClasses.bg : 'bg-slate-700'
                }`}>
                  <StepIcon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                  isActive ? colorClasses.text.replace('text-', 'text-') : 'text-white'
                }`}>
                  {step.title}
                </h3>
                
                <p className="text-slate-300 mb-4 font-medium">
                  {step.subtitle}
                </p>
                
                <p className="text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
