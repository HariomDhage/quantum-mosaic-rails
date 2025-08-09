import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Zap, Shield } from 'lucide-react';

const ValueBlocksSection = () => {

  const valueBlocks = [
    {
      id: 1,
      title: "Digitize Judgment",
      powerPhrase: "Turn Expertise Into IP",
      icon: Brain,
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "from-emerald-400 to-teal-500",
      modalContent: {
        headline: "Capture & Scale Your Best Decisions",
        stats: ["3x faster onboarding", "Zero knowledge loss", "Instant expertise transfer"],
        description: "Transform your top performers' decision logic into executable intelligence that works 24/7."
      }
    },
    {
      id: 2,
      title: "Drive Velocity",
      powerPhrase: "Execute at Light Speed",
      icon: Zap,
      gradient: "from-blue-500 to-indigo-600",
      hoverGradient: "from-blue-400 to-indigo-500",
      modalContent: {
        headline: "Orchestrate Teams Without Friction",
        stats: ["40% faster cycles", "Zero bottlenecks", "Real-time coordination"],
        description: "Connect departments with intelligent workflows that adapt and accelerate your operations."
      }
    },
    {
      id: 3,
      title: "Future-Proof Knowledge",
      powerPhrase: "Wisdom That Compounds",
      icon: Shield,
      gradient: "from-purple-500 to-violet-600",
      hoverGradient: "from-purple-400 to-violet-500",
      modalContent: {
        headline: "Build Institutional Intelligence",
        stats: ["Infinite retention", "Self-improving", "Competitive moat"],
        description: "Create a living repository of wisdom that learns, adapts, and becomes more valuable over time."
      }
    }
  ];

  return (
    <>
      <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {valueBlocks.map((block) => (
              <Card
                key={block.id}
                className="group border-0 bg-transparent overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`
                    relative h-96 rounded-2xl bg-gradient-to-br ${block.gradient} 
                    group-hover:bg-gradient-to-br group-hover:${block.hoverGradient}
                    transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl
                    flex flex-col items-center justify-center text-white
                  `}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                          style={{
                            left: `${20 + (i * 15) % 60}%`,
                            top: `${20 + (i * 20) % 60}%`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="relative z-10 text-center">
                      <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                        <block.icon className="w-20 h-20 mx-auto mb-4" />
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4">
                        {block.title}
                      </h3>
                      
                      <p className="text-xl font-semibold opacity-90">
                        {block.powerPhrase}
                      </p>
                      
                      {/* Hover Details */}
                      <div className="absolute inset-0 bg-slate-900/98 rounded-2xl p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center">
                          <h4 className="text-2xl font-bold mb-4 text-white">
                            {block.modalContent.headline}
                          </h4>
                          <div className="space-y-2 mb-4">
                            {block.modalContent.stats.map((stat, index) => (
                              <div key={index} className="text-sm text-emerald-300 font-semibold bg-emerald-900/30 px-3 py-1 rounded-full">
                                {stat}
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-slate-100 leading-relaxed">
                            {block.modalContent.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default ValueBlocksSection;