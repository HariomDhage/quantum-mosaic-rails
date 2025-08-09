import React from 'react';

const TeamSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Team Building the Future
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneers in autonomous intelligence, enterprise architecture, and institutional finance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Deepak Jha */}
          <div className="group bg-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                  <img
                    src="/images/deepak-jha.png"
                    alt="Deepak Jha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-background"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-1">Deepak Jha</h3>
              <div className="text-primary font-semibold mb-4 text-lg">Founder</div>
              
              <p className="text-muted-foreground leading-relaxed">
                Deepak is a 2x founder with a deep background in enterprise sales and go-to-market strategy from his time at major firms like Oracle, GE, and Accenture.
              </p>
            </div>
          </div>

          {/* Gunjan Karun */}
          <div className="group bg-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                  <img
                    src="/images/gunjan-karun.png"
                    alt="Gunjan Karun"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-background"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-1">Gunjan Karun</h3>
              <div className="text-primary font-semibold mb-4 text-lg">CTO</div>
              
              <p className="text-muted-foreground leading-relaxed">
                Gunjan leads our technology vision with deep expertise in event-driven architecture, policy engines, and AI/NLP. He holds three U.S. patents in related fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;