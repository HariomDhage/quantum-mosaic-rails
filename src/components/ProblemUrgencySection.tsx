import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const ProblemUrgencySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('problem-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const problemPoints = [
    {
      icon: TrendingUp,
      title: "Deal volume is rising",
      description: "More opportunities than ever before"
    },
    {
      icon: TrendingDown,
      title: "Throughput is stalling",
      description: "Teams can't keep up with demand"
    },
    {
      icon: TrendingDown,
      title: "Margins are shrinking",
      description: "Competition eating into profits"
    },
    {
      icon: AlertTriangle,
      title: "Compliance risk is climbing",
      description: "Regulatory pressure increasing"
    }
  ];

  const urgencyPoints = [
    "Scarce, expensive talent takes years to train",
    "Regulations tightening across all asset classes", 
    "First movers win — those who embed elite decision-making into every workflow today will dominate the next decade"
  ];

  return (
    <section id="problem-section" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Problem Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            The Problem — And Why It's Urgent
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problemPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 text-center transition-all duration-500 ${
                  isVisible ? 'reveal revealed' : 'reveal'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-red-700 mb-2">{point.title}</h3>
                <p className="text-sm text-red-600">{point.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your best people are drowning in operational chaos while AI-powered competitors are multiplying their best judgment across every deal, every day.
          </p>
        </div>

        {/* Why Now Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Why Now</h3>
          
          <div className="space-y-6">
            {urgencyPoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 transition-all duration-500 ${
                  isVisible ? 'reveal revealed' : 'reveal'
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full mt-3" />
                <p className="text-lg text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-red-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-100/20 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default ProblemUrgencySection;