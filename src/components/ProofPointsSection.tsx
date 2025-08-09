import React, { useState } from 'react';
import { ChevronDown, ChevronRight, TrendingUp, Building, Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProofPointsSection = () => {
  const [expandedProof, setExpandedProof] = useState<number | null>(null);

  const proofPoints = [
    {
      id: 1,
      icon: TrendingUp,
      client: "Global Credit Fund",
      metric: "2× Speed + 30% Win Rate",
      shortDesc: "Doubled deal screening speed while increasing win rate",
      fullDesc: "Global credit fund — doubled deal screening speed while increasing win rate by 30%. Automated initial screening freed analysts to focus on high-value deal structuring and relationship building.",
      color: "emerald"
    },
    {
      id: 2,
      icon: Building,
      client: "Real Estate Asset Manager",
      metric: "Zero Manual Approvals",
      shortDesc: "Enforced NAV-based capital call policies automatically",
      fullDesc: "Real estate asset manager — enforced NAV-based capital call policies automatically, eliminating manual approvals. Reduced processing time from days to minutes while ensuring 100% policy compliance.",
      color: "blue"
    },
    {
      id: 3,
      icon: Activity,
      client: "Healthcare Investment Platform",
      metric: "40% Faster Execution",
      shortDesc: "Integrated compliance logic into every deal process",
      fullDesc: "Healthcare investment platform — integrated compliance logic into every deal process, reducing delays by 40%. Built regulatory requirements directly into workflow automation, eliminating back-and-forth reviews.",
      color: "purple"
    }
  ];

  const toggleProof = (id: number) => {
    setExpandedProof(expandedProof === id ? null : id);
  };

  const getColorClasses = (color: string, expanded: boolean) => {
    const colorMap = {
      emerald: {
        border: expanded ? 'border-emerald-500' : 'border-emerald-200',
        bg: 'bg-emerald-100',
        text: 'text-emerald-600',
        icon: 'text-emerald-600',
        metric: 'text-emerald-600'
      },
      blue: {
        border: expanded ? 'border-blue-500' : 'border-blue-200',
        bg: 'bg-blue-100',
        text: 'text-blue-600', 
        icon: 'text-blue-600',
        metric: 'text-blue-600'
      },
      purple: {
        border: expanded ? 'border-purple-500' : 'border-purple-200',
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        icon: 'text-purple-600', 
        metric: 'text-purple-600'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Proof Points 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              {" "}(Anonymized)
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from leaders who transformed constraint into competitive advantage.
          </p>
        </div>

        {/* Proof Point Cards */}
        <div className="space-y-6">
          {proofPoints.map((proof) => {
            const colors = getColorClasses(proof.color, expandedProof === proof.id);
            
            return (
              <Card 
                key={proof.id}
                className={`transition-all duration-300 cursor-pointer border-2 ${
                  expandedProof === proof.id 
                    ? `${colors.border} shadow-xl` 
                    : 'border-slate-200 hover:border-slate-300'
                } hover:shadow-lg`}
                onClick={() => toggleProof(proof.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 flex-1">
                      <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center`}>
                        <proof.icon className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {proof.client}
                        </h3>
                        <p className={`text-xl font-bold ${colors.metric} mb-2`}>
                          {proof.metric}
                        </p>
                        <p className="text-slate-600">
                          {expandedProof === proof.id ? proof.fullDesc : proof.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="ml-6">
                      {expandedProof === proof.id ? (
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
      </div>
    </section>
  );
};

export default ProofPointsSection;