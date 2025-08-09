import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Target, Building, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhoWeServeBestSection = () => {
  const [expandedSector, setExpandedSector] = useState<number | null>(null);

  const sectors = [
    {
      id: 1,
      icon: Target,
      title: "Private Credit & Alternatives",
      subtitle: "GPs, LPs, and Allocators",
      shortDesc: "Where execution risk and decision lag erode returns",
      fullDesc: "Private Credit & Alternatives — GPs, LPs, and Allocators where execution risk and decision lag erode returns. Transform deal screening, portfolio monitoring, and compliance workflows into competitive advantages.",
      color: "emerald"
    },
    {
      id: 2,
      icon: Building,
      title: "Complex, Regulated Sectors", 
      subtitle: "Insurance, Infrastructure, Healthcare, Energy",
      shortDesc: "Governance-first industries with zero margin for error",
      fullDesc: "Complex, Regulated Sectors — insurance, infrastructure, healthcare, energy where compliance isn't optional and audit trails must be perfect. Build governance into every decision from day one.",
      color: "blue"
    },
    {
      id: 3,
      icon: Zap,
      title: "High-Throughput Enterprises",
      subtitle: "Where Scale Multiplies Impact",
      shortDesc: "Single decision logic applied thousands of times",
      fullDesc: "High-Throughput Enterprises — where a single decision logic can be applied thousands of times. Turn your best judgment into an infinitely scalable competitive moat.",
      color: "purple"
    }
  ];

  const toggleSector = (id: number) => {
    setExpandedSector(expandedSector === id ? null : id);
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
          <h2 className="text-5xl font-bold mb-6">
            Who We Serve 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              {" "}Best
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Leaders in markets where judgment, speed, and compliance create lasting competitive advantages.
          </p>
        </div>

        {/* Sector Cards */}
        <div className="space-y-6">
          {sectors.map((sector) => {
            const colors = getColorClasses(sector.color, expandedSector === sector.id);
            
            return (
              <Card 
                key={sector.id}
                className={`transition-all duration-300 cursor-pointer bg-white/10 backdrop-blur-sm border-2 ${
                  expandedSector === sector.id 
                    ? `${colors.border} shadow-xl` 
                    : 'border-white/20 hover:border-white/40'
                } hover:shadow-lg`}
                onClick={() => toggleSector(sector.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 flex-1">
                      <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center`}>
                        <sector.icon className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {sector.title}
                        </h3>
                        <p className={`text-lg font-medium ${colors.text.replace('text-', 'text-').replace('-600', '-300')} mb-2`}>
                          {sector.subtitle}
                        </p>
                        <p className="text-blue-100">
                          {expandedSector === sector.id ? sector.fullDesc : sector.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="ml-6">
                      {expandedSector === sector.id ? (
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
      </div>
    </section>
  );
};

export default WhoWeServeBestSection;