import React, { useState, useEffect } from 'react';
import { User, Users, Building, ArrowRight } from 'lucide-react';

const StartAnywhereSection = () => {
  const [activeLevel, setActiveLevel] = useState(0);
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

    const section = document.getElementById('start-anywhere');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const levels = [
    {
      icon: User,
      title: "Employee",
      subtitle: "Start Small",
      description: "One high-value workflow",
      scale: "1x",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Users,
      title: "Department", 
      subtitle: "Scale Up",
      description: "Team-wide processes",
      scale: "10x",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Building,
      title: "Enterprise",
      subtitle: "Transform",
      description: "Organization-wide platform",
      scale: "100x",
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section id="start-anywhere" className="py-24 bg-dark-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Start Anywhere —<br />Expand Everywhere
          </h2>
          <p className="text-xl text-white/80">
            Interactive roadmap: zoom in from employee to enterprise
          </p>
        </div>

        {/* Interactive Roadmap */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 rounded-full" />
          
          <div className="flex items-center justify-between relative">
            {levels.map((level, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setActiveLevel(index)}
                onMouseEnter={() => setActiveLevel(index)}
              >
                {/* Scale indicator */}
                <div className="text-center mb-4">
                  <div className={`text-2xl font-bold transition-all duration-300 ${
                    activeLevel === index ? 'text-white scale-125' : 'text-white/60'
                  }`}>
                    {level.scale}
                  </div>
                </div>

                {/* Main circle */}
                <div className="relative">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeLevel === index 
                      ? `bg-gradient-to-br ${level.color} scale-125 shadow-2xl` 
                      : 'bg-white/10 scale-100'
                  }`}>
                    <level.icon className={`transition-all duration-300 ${
                      activeLevel === index ? 'w-12 h-12 text-white' : 'w-8 h-8 text-white/60'
                    }`} />
                  </div>
                  
                  {/* Ripple effect */}
                  {activeLevel === index && (
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${level.color} animate-ping opacity-30`} />
                  )}
                </div>

                {/* Labels */}
                <div className="text-center mt-4">
                  <h3 className={`text-xl font-bold transition-all duration-300 ${
                    activeLevel === index ? 'text-white' : 'text-white/60'
                  }`}>
                    {level.title}
                  </h3>
                  <p className={`text-sm transition-all duration-300 ${
                    activeLevel === index ? 'text-white/90' : 'text-white/40'
                  }`}>
                    {level.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active level details */}
          <div className="mt-16 text-center">
            <div className={`transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h4 className="text-3xl font-bold mb-4">
                Digitize {levels[activeLevel].title}
              </h4>
              <p className="text-xl text-white/80 mb-8">
                {levels[activeLevel].description}
              </p>
              
              {/* Zoom animation effect */}
              <div className="relative inline-block">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${levels[activeLevel].color} flex items-center justify-center animate-pulse-glow`}>
                  {React.createElement(levels[activeLevel].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};

export default StartAnywhereSection;