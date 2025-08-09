import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MentalModelShiftsSection = () => {
  const [expandedShift, setExpandedShift] = useState<number | null>(null);

  const mentalShifts = [
    { 
      id: 1, 
      shift: "People don't run the business — they design it",
      impact: "Transform from operators to architects of intelligent systems"
    },
    { 
      id: 2, 
      shift: "Growth isn't hiring — it's encoding",
      impact: "Scale capability without scaling headcount exponentially"
    },
    { 
      id: 3, 
      shift: "Documents don't scale — intelligence products do",
      impact: "Convert static processes into dynamic, learning systems"
    },
    { 
      id: 4, 
      shift: "Compliance is a design principle, not a checkpoint",
      impact: "Build governance into execution from the ground up"
    },
    { 
      id: 5, 
      shift: "From sequential tasks → parallel orchestration",
      impact: "Eliminate bottlenecks through intelligent coordination"
    },
    { 
      id: 6, 
      shift: "Knowledge compounds, it doesn't walk out the door",
      impact: "Institutional memory becomes institutional intelligence"
    },
    { 
      id: 7, 
      shift: "AI isn't a tool — it's a colleague",
      impact: "Collaborative intelligence amplifies human judgment"
    },
    { 
      id: 8, 
      shift: "Cost-per-capability replaces cost-per-project",
      impact: "Invest once, deploy everywhere with zero marginal cost"
    },
    { 
      id: 9, 
      shift: "From best practices → encoded excellence",
      impact: "Your expertise becomes infinitely reproducible"
    },
    { 
      id: 10, 
      shift: "From incremental efficiency → competitive moats",
      impact: "Build defensible advantages through execution superiority"
    }
  ];

  const toggleShift = (id: number) => {
    setExpandedShift(expandedShift === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-100 p-4 rounded-full">
              <Brain className="h-12 w-12 text-emerald-600" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            The 10 Mental Model Shifts 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              {" "}for Modern Enterprises
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            To unlock this level of growth, leaders must embrace a different operating logic:
          </p>
        </div>

        {/* Interactive List */}
        <div className="space-y-4">
          {mentalShifts.map((item) => (
            <Card 
              key={item.id}
              className={`transition-all duration-300 cursor-pointer hover:shadow-lg ${
                expandedShift === item.id 
                  ? 'border-2 border-emerald-500 shadow-lg' 
                  : 'border border-slate-200 hover:border-emerald-300'
              }`}
              onClick={() => toggleShift(item.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                      expandedShift === item.id ? 'bg-emerald-600' : 'bg-slate-400'
                    }`}>
                      {item.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.shift}
                      </h3>
                      {expandedShift === item.id && (
                        <p className="text-emerald-600 font-medium mt-2">
                          → {item.impact}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedShift === item.id ? (
                      <ChevronDown className="h-6 w-6 text-emerald-600" />
                    ) : (
                      <ChevronRight className="h-6 w-6 text-slate-400" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentalModelShiftsSection;