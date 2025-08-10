import React from 'react';
import NewHeader from '@/components/NewHeader';
import NewFooter from '@/components/NewFooter';
import NewHeroSection from '@/components/NewHeroSection';
import ValueSnapshotSection from '@/components/ValueSnapshotSection';
import ProblemUrgencySection from '@/components/ProblemUrgencySection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import HowItWorksNewSection from '@/components/HowItWorksNewSection';
import ProofSection from '@/components/ProofSection';
import StartAnywhereSection from '@/components/StartAnywhereSection';
import ImplementationSection from '@/components/ImplementationSection';
import TeamSection from '@/components/TeamSection';
import FinalCTASection from '@/components/FinalCTASection';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NewHeader />
      <SEO 
        title="Outpace Competitors: Double Deal Throughput in 90 Days — No New Headcount | Quantum Mosaic" 
        description="300–500% ROI in 6 months. 40% faster decisions without compliance misses. Live in 60 days or less — full money-back guarantee." 
        canonical="https://www.quantummosaic.com/" 
      />
      <main className="pt-16">
        <NewHeroSection />
        <ValueSnapshotSection />
        <ProblemUrgencySection />
        <WhatWeDoSection />
        <HowItWorksNewSection />
        <ProofSection />
        <StartAnywhereSection />
        <ImplementationSection />
        <TeamSection />
        <FinalCTASection />
      </main>
      <NewFooter />
    </div>
  );
};

export default Index;