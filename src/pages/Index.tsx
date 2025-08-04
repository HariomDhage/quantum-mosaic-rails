
import React from 'react';
import QuantumHeroSection from '@/components/QuantumHeroSection';
import ProblemSection from '@/components/ProblemSection';
import ShiftSection from '@/components/ShiftSection';
import AIFactorySection from '@/components/AIFactorySection';
import AutonomousIntelligenceSection from '@/components/AutonomousIntelligenceSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <QuantumHeroSection />
        <ProblemSection />
        <ShiftSection />
        <AIFactorySection />
        <AutonomousIntelligenceSection />
      </main>
    </div>
  );
};

export default Index;
