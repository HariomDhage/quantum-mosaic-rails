import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight } from 'lucide-react';

const ProofCaseStudies = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      industry: "Private Credit Fund",
      logo: "PC",
      metric: "+40% Faster Cycles",
      secondaryMetric: "30% Higher Win Rate",
      summary: "Automated deal screening with intelligent criteria gates, eliminating manual bottlenecks while improving quality.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      industry: "Real Estate Asset Manager",
      logo: "RE",
      metric: "Zero Manual Approvals",
      secondaryMetric: "100% Policy Compliance",
      summary: "Embedded capital call policies into automated workflows, ensuring perfect execution at scale.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      industry: "Healthcare Investment Platform",
      logo: "HI",
      metric: "40% Faster Execution",
      secondaryMetric: "Perfect Compliance",
      summary: "Integrated regulatory logic into every process, accelerating deals while maintaining strict compliance.",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  return (
    <section className="py-32 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Proven Results
          </h2>
          <p className="text-2xl text-slate-300">
            Real impact, real executives, real transformation
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className="bg-slate-900 border-slate-700 overflow-hidden cursor-pointer transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl"
              onClick={() => toggleExpanded(study.id)}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-8 flex-1">
                    {/* Anonymous Logo */}
                    <div className={`
                      w-20 h-20 rounded-xl bg-gradient-to-br ${study.gradient} 
                      flex items-center justify-center text-white font-bold text-2xl
                    `}>
                      {study.logo}
                    </div>
                    
                    {/* Metrics */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-12">
                        <div>
                          <div className="text-4xl font-bold text-emerald-400 mb-2">
                            {study.metric}
                          </div>
                          <div className="text-lg text-slate-400">
                            {study.industry}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-2xl font-semibold text-blue-400">
                            {study.secondaryMetric}
                          </div>
                        </div>
                      </div>
                      
                      {/* Expanded Content */}
                      {expandedCase === study.id && (
                        <div className="mt-6 pt-6 border-t border-slate-700">
                          <p className="text-xl text-slate-300 leading-relaxed">
                            {study.summary}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Expand Icon */}
                  <div className="ml-6">
                    {expandedCase === study.id ? (
                      <ChevronDown className="h-8 w-8 text-emerald-400" />
                    ) : (
                      <ChevronRight className="h-8 w-8 text-slate-400" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-lg">
            Results anonymized to protect competitive advantage
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofCaseStudies;