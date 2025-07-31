
import React, { useState } from 'react';
import { X, Check, AlertTriangle } from 'lucide-react';

const ComparisonTable = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const comparisons = [
    {
      feature: 'Policy Codification',
      legacy: { status: 'none', text: 'Manual Documents' },
      quantum: { status: 'check', text: 'Programmable Corridors' }
    },
    {
      feature: 'Workflow Enforcement',
      legacy: { status: 'warning', text: 'Manual Review' },
      quantum: { status: 'check', text: 'Automated Rails' }
    },
    {
      feature: 'Audit Logs',
      legacy: { status: 'none', text: 'Scattered Records' },
      quantum: { status: 'check', text: 'Immutable Trail' }
    },
    {
      feature: 'Real-Time Compliance',
      legacy: { status: 'none', text: 'Post-Hoc Review' },
      quantum: { status: 'check', text: 'Proactive Gates' }
    },
    {
      feature: 'Exception Handling',
      legacy: { status: 'warning', text: 'Ad-Hoc Override' },
      quantum: { status: 'check', text: 'Governed Escalation' }
    }
  ];

  const getStatusIcon = (status: string, isHovered: boolean) => {
    switch (status) {
      case 'check':
        return <Check className={`h-5 w-5 transition-all duration-300 ${isHovered ? 'text-emerald-400 scale-125 drop-shadow-lg' : 'text-emerald-500'}`} />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'none':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Legacy Systems vs. Quantum Mosaic
          </h2>
          <p className="text-xl text-slate-300">
            The future of execution governance is here
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-3 gap-0">
            {/* Header */}
            <div className="bg-slate-700/50 p-6 font-sans font-normal text-slate-200 border-r border-slate-600">
              <h3 className="text-lg font-sans font-normal">Feature</h3>
            </div>
            <div className="bg-red-900/20 p-6 font-sans font-normal text-red-200 border-r border-slate-600 text-center">
              <h3 className="text-lg font-sans font-normal flex items-center justify-center">
                <X className="h-5 w-5 mr-2" />
                Legacy Systems
              </h3>
            </div>
            <div className="bg-emerald-900/20 p-6 font-sans font-normal text-emerald-200 text-center">
              <h3 className="text-lg font-sans font-normal flex items-center justify-center">
                <Check className="h-5 w-5 mr-2" />
                Quantum Mosaic
              </h3>
            </div>
            
            {/* Rows */}
            {comparisons.map((item, index) => (
              <React.Fragment key={index}>
                <div 
                  className="p-6 font-sans font-normal text-slate-200 border-r border-slate-600 border-t border-slate-700 bg-slate-800/30"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {item.feature}
                </div>
                <div 
                  className="p-6 font-sans font-normal text-slate-300 border-r border-slate-600 border-t border-slate-700 bg-red-900/10 text-center"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {getStatusIcon(item.legacy.status, false)}
                    <span className="font-sans font-normal">{item.legacy.text}</span>
                  </div>
                </div>
                <div 
                  className="p-6 font-sans font-normal text-slate-300 border-t border-slate-700 bg-emerald-900/10 text-center transition-all duration-300"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {getStatusIcon(item.quantum.status, hoveredFeature === index)}
                    <span className={`font-sans ${hoveredFeature === index ? 'font-normal' : 'font-normal'}`}>{item.quantum.text}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
