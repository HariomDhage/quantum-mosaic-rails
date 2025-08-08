import React from 'react';

const ExpertiseSystemSection = () => {
  return (
    <section aria-labelledby="expertise-system" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="animate-fade-in">
          <div className="h-2 w-32 bg-gradient-to-r from-primary to-secondary rounded-full mb-4" />
          <h2 id="expertise-system" className="text-3xl sm:text-4xl font-bold text-accent font-sora leading-tight">
            {"Quantum Mosaic encodes enterprise expertise into a scalable, governed system of self-improving decisions."}
          </h2>
        </header>
      </div>
    </section>
  );
};

export default ExpertiseSystemSection;
