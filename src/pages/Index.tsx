import React from 'react';
import QuantumHeader from '@/components/QuantumHeader';
import QuantumFooter from '@/components/QuantumFooter';
import ExecutiveHero from '@/components/ExecutiveHero';
import ValueBlocksSection from '@/components/ValueBlocksSection';
import ProofCaseStudies from '@/components/ProofCaseStudies';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import JudgmentCorridorsComparison from '@/components/JudgmentCorridorsComparison';
import FinalExecutiveCTA from '@/components/FinalExecutiveCTA';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <QuantumHeader />
      <SEO 
        title="Multiply Your Best Decisions - Quantum Mosaic" 
        description="Scale your judgment. Defend your edge. Turn your best expertise into infinitely repeatable execution." 
        canonical="https://www.quantummosaic.com/" 
      />
      <main className="pt-16">
        <ExecutiveHero />
        <ValueBlocksSection />
        <ProofCaseStudies />
        <HowItWorksSteps />
        <JudgmentCorridorsComparison />
        <FinalExecutiveCTA />
      </main>
      <QuantumFooter />
    </div>
  );
};

export default Index;