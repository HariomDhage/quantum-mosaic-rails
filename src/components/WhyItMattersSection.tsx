import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Target, Globe, TrendingUp, DollarSign, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyItMattersSection = () => {
  const [expandedImpact, setExpandedImpact] = useState<number | null>(null);

  const impacts = [
    {
      id: 1,
      icon: Target,
      title: "2× Deal Throughput",
      subtitle: "Win more deals without more analysts",
      shortDesc: "Scale deal evaluation without scaling team size",
      fullDesc: "2× Deal Throughput — win more deals without more analysts. Automated screening and evaluation processes allow your team to process twice the volume while maintaining or improving decision quality.",
      color: "emerald"
    },
    {
      id: 2,
      icon: Globe,
      title: "Faster Market Entry",
      subtitle: "Launch in new geographies in months, not years", 
      shortDesc: "Deploy proven playbooks instantly in new markets",
      fullDesc: "Faster Market Entry — launch in new geographies in months, not years. Your encoded expertise travels instantly, eliminating the need to rebuild capabilities from scratch in each new market.",
      color: "blue"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Portfolio Uplift",
      subtitle: "Optimize asset performance proactively, not reactively",
      shortDesc: "Continuous optimization drives superior returns",
      fullDesc: "Portfolio Uplift — optimize asset performance proactively, not reactively. Intelligent monitoring and automated interventions identify and address performance issues before they impact returns.",
      color: "purple"
    }
  ];

  const toggleImpact = (id: number) => {
    setExpandedImpact(expandedImpact === id ? null : id);
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8">
            Why It Matters 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              {" "}(Value Creation First)
            </span>
          </h2>
          <p className="text-2xl text-blue-100 mb-8">
            When your judgment scales, so does your impact:
          </p>
        </div>

        {/* Impact Cards */}
        <div className="space-y-6 mb-16">
          {impacts.map((impact) => {
            const colors = getColorClasses(impact.color, expandedImpact === impact.id);
            
            return (
              <Card 
                key={impact.id}
                className={`transition-all duration-300 cursor-pointer bg-white/10 backdrop-blur-sm border-2 ${
                  expandedImpact === impact.id 
                    ? `${colors.border} shadow-xl` 
                    : 'border-white/20 hover:border-white/40'
                } hover:shadow-lg`}
                onClick={() => toggleImpact(impact.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 flex-1">
                      <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center`}>
                        <impact.icon className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {impact.title}
                        </h3>
                        <p className={`text-lg font-medium ${colors.text.replace('text-', 'text-').replace('-600', '-300')} mb-2`}>
                          {impact.subtitle}
                        </p>
                        <p className="text-blue-100">
                          {expandedImpact === impact.id ? impact.fullDesc : impact.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="ml-6">
                      {expandedImpact === impact.id ? (
                        <ChevronDown className="h-8 w-8 text-emerald-400" />
                      ) : (
                        <ChevronRight className="h-8 w-8 text-white/60" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Message */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-blue-100 mb-6">
              Cost efficiency isn't the headline — it's the 
              <span className="text-emerald-400 font-bold"> reinvestment fuel.</span>
            </p>
            <div className="flex justify-center items-center space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <Rocket className="h-6 w-6 text-emerald-400" />
                <span className="text-white font-semibold">Expand</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-6 w-6 text-blue-400" />
                <span className="text-white font-semibold">Acquire</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-purple-400" />
                <span className="text-white font-semibold">Innovate</span>
              </div>
            </div>
            <p className="text-emerald-300 font-semibold text-xl mt-6">
              Free up resources to go on offense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;