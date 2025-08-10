import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Shield } from 'lucide-react';

const ValueSnapshotSection = () => {
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

    const section = document.getElementById('value-snapshot');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      number: "300–500%",
      label: "ROI",
      description: "Return on investment achieved within 6 months",
      delay: "0ms"
    },
    {
      icon: Zap,
      number: "40%",
      label: "Faster Decisions",
      description: "Speed increase without compliance misses",
      delay: "200ms"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Compliance",
      description: "Full regulatory adherence guaranteed",
      delay: "400ms"
    }
  ];

  return (
    <section id="value-snapshot" className="py-20 bg-section-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 text-center hover-lift cursor-pointer transition-all duration-500 ${
                isVisible ? 'reveal revealed' : 'reveal'
              }`}
              style={{ animationDelay: stat.delay }}
            >
              <div className="relative">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className="text-5xl sm:text-6xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {stat.label}
                </h3>

                {/* Description - Hidden by default, shown on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <p className="text-muted-foreground text-sm">
                    {stat.description}
                  </p>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/5 to-secondary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default ValueSnapshotSection;