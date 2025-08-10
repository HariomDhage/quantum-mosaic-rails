import React, { useState, useEffect } from 'react';

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

  return (
    <section id="problem-section" className="py-24 bg-white relative overflow-hidden">
      {/* Split Screen Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
          {/* Left Side - Chaotic */}
          <div className="relative bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-12">
            <div className={`text-center ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              {/* Chaotic visual representation */}
              <div className="relative mb-8">
                <div className="grid grid-cols-3 gap-4 opacity-60">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-red-200 rounded-lg animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">😵‍💫</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-red-700">Deal Volume Rising</h3>
                <h3 className="text-2xl font-bold text-orange-700">Margins Shrinking</h3>
                <h3 className="text-2xl font-bold text-red-600">Compliance Risk Climbing</h3>
              </div>
            </div>
            
            {/* Parallax chaos elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-red-300 rounded-full animate-bounce" />
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-orange-300 rounded-full animate-ping" />
          </div>

          {/* Right Side - Sleek AI */}
          <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-12">
            <div className={`text-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              {/* Clean AI workflow visual */}
              <div className="relative mb-8">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                    <div className="text-2xl">🎯</div>
                  </div>
                  <div className="w-8 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                    <div className="text-2xl">⚡</div>
                  </div>
                  <div className="w-8 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                    <div className="text-2xl">✅</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-purple-700">AI-Assisted Workflow</h3>
                <h3 className="text-2xl font-bold text-blue-700">Automated Compliance</h3>
                <h3 className="text-2xl font-bold text-purple-600">Effortless Scale</h3>
              </div>
            </div>

            {/* Smooth flowing elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-purple-300 rounded-full animate-float" />
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-300 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
      
      {/* Overlaid text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md">
          <h2 className="text-4xl font-bold text-primary mb-4">The Problem</h2>
          <p className="text-lg text-muted-foreground">Manual processes can't scale with opportunity</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemUrgencySection;