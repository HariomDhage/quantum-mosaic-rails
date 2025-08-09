import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Zap, Shield, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const ValueBlocksSection = () => {
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

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
                className="group cursor-pointer border-0 bg-transparent overflow-hidden"
                onClick={() => setSelectedBlock(block.id)}
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
                      
                      <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-sm font-medium bg-white/20 px-4 py-2 rounded-full">
                          Click to explore →
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

      {/* Modal for expanded content */}
      <Dialog open={selectedBlock !== null} onOpenChange={() => setSelectedBlock(null)}>
        <DialogContent className="max-w-2xl bg-slate-900 border-slate-700 text-white">
          {selectedBlock && (
            <div className="p-8">
              <button
                onClick={() => setSelectedBlock(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              
              {(() => {
                const block = valueBlocks.find(b => b.id === selectedBlock);
                if (!block) return null;
                
                return (
                  <div className="text-center">
                    <block.icon className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
                    <h2 className="text-4xl font-bold mb-6">
                      {block.modalContent.headline}
                    </h2>
                    
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {block.modalContent.stats.map((stat, index) => (
                        <div key={index} className="bg-slate-800 rounded-xl p-4">
                          <div className="text-emerald-400 font-bold text-lg">
                            {stat}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-xl text-slate-300 leading-relaxed">
                      {block.modalContent.description}
                    </p>
                  </div>
                );
              })()}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ValueBlocksSection;