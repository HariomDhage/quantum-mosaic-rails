import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { X, Check, Zap } from 'lucide-react';

const JudgmentCorridorsComparison = () => {
  const [hoveredSide, setHoveredSide] = useState<'traditional' | 'quantum' | null>(null);

  const comparisonPoints = [
    {
      traditional: "Manual decision bottlenecks",
      quantum: "Instant intelligent routing",
      icon: Zap
    },
    {
      traditional: "Knowledge walks out the door",
      quantum: "Wisdom compounds forever",
      icon: Check
    },
    {
      traditional: "Inconsistent execution",
      quantum: "Perfect replication at scale",
      icon: Check
    },
    {
      traditional: "Growth requires more people",
      quantum: "Growth multiplies impact",
      icon: Check
    }
  ];

  return (
    <section className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Why Judgment Corridors
          </h2>
          <p className="text-2xl text-slate-300">
            The future of execution is here
          </p>
        </div>

        {/* Split Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Traditional Side */}
          <Card
            className={`
              transition-all duration-500 border-2
              ${hoveredSide === 'traditional' ? 'border-red-500 scale-105' : 'border-slate-600'}
              ${hoveredSide === 'quantum' ? 'opacity-50 scale-95' : 'opacity-100'}
            `}
            onMouseEnter={() => setHoveredSide('traditional')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <CardContent className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Traditional Automation</h3>
                <p className="text-slate-400">Rigid, limited, fragile</p>
              </div>

              <div className="space-y-6">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <X className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 text-lg">{point.traditional}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <div className="text-red-400 font-semibold mb-2">Result:</div>
                <div className="text-slate-300">Diminishing returns, increasing complexity</div>
              </div>
            </CardContent>
          </Card>

          {/* Quantum Mosaic Side */}
          <Card
            className={`
              transition-all duration-500 border-2
              ${hoveredSide === 'quantum' ? 'border-emerald-500 scale-105' : 'border-slate-600'}
              ${hoveredSide === 'traditional' ? 'opacity-50 scale-95' : 'opacity-100'}
            `}
            onMouseEnter={() => setHoveredSide('quantum')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <CardContent className="p-8 bg-gradient-to-br from-emerald-900/50 to-blue-900/50 h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Quantum Mosaic</h3>
                <p className="text-emerald-400">Intelligent, adaptive, infinite</p>
              </div>

              <div className="space-y-6">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-white text-lg">{point.quantum}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <div className="text-emerald-400 font-semibold mb-2">Result:</div>
                <div className="text-white">Exponential value, compound advantage</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-4">
            The choice is obvious
          </div>
          <p className="text-xl text-slate-300">
            Join the leaders who've already made the leap
          </p>
        </div>
      </div>
    </section>
  );
};

export default JudgmentCorridorsComparison;