import React from 'react';

const TeamSection = () => {
  return (
    <section className="py-20 bg-dark-primary relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 particles-bg opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
            The Architects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto animate-pulse-glow"></div>
        </div>

        {/* Premium team cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Deepak Jha */}
          <div className="group hover-lift reveal" style={{ animationDelay: '0.2s' }}>
            <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-10 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-500 hover:bg-background/20">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/30 group-hover:border-accent transition-all duration-500 group-hover:scale-110">
                    <img
                      src="/images/deepak-jha.png"
                      alt="Deepak Jha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-accent rounded-full border-4 border-dark-primary flex items-center justify-center group-hover:animate-pulse">
                    <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-primary-foreground mb-2">Deepak Jha</h3>
                <div className="text-accent font-bold mb-6 text-xl tracking-wide">FOUNDER, CEO</div>
                
                <div className="text-primary-foreground/80 leading-relaxed text-lg font-light">
                  Enterprise strategist. Oracle, GE, Accenture veteran.
                  <span className="block mt-2 text-accent font-medium">2x Founder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gunjan Karun */}
          <div className="group hover-lift reveal" style={{ animationDelay: '0.4s' }}>
            <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-10 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-500 hover:bg-background/20">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/30 group-hover:border-accent transition-all duration-500 group-hover:scale-110">
                    <img
                      src="/images/gunjan-karun.png"
                      alt="Gunjan Karun"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-accent rounded-full border-4 border-dark-primary flex items-center justify-center group-hover:animate-pulse">
                    <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-primary-foreground mb-2">Gunjan Karun</h3>
                <div className="text-accent font-bold mb-6 text-xl tracking-wide">CTO</div>
                
                <div className="text-primary-foreground/80 leading-relaxed text-lg font-light">
                  AI architecture visionary. Event-driven systems expert.
                  <span className="block mt-2 text-accent font-medium">3 U.S. Patents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;