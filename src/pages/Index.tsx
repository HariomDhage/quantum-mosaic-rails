
import React from 'react';
import QuantumHeader from '@/components/QuantumHeader';
import QuantumFooter from '@/components/QuantumFooter';
import ExecutiveHeroSection from '@/components/ExecutiveHeroSection';
import TransformationOfferSection from '@/components/TransformationOfferSection';
import ProofUrgencySection from '@/components/ProofUrgencySection';
import MentalModelShiftsSection from '@/components/MentalModelShiftsSection';
import CredibilitySocialProofSection from '@/components/CredibilitySocialProofSection';
import WhoWeServeBestSection from '@/components/WhoWeServeBestSection';
import ProofPointsSection from '@/components/ProofPointsSection';
import HowItWorksQuantumSection from '@/components/HowItWorksQuantumSection';
import WhyItMattersSection from '@/components/WhyItMattersSection';
import FinalExecutiveCTASection from '@/components/FinalExecutiveCTASection';
import FAQSection from '@/components/FAQSection';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <QuantumHeader />
      <SEO 
        title="Scale Judgment. Multiply Value. Transform Growth | Quantum Mosaic" 
        description="Turn your best expertise into decision-ready intelligence and infinitely repeatable execution. Book a demo to see how leaders scale judgment without scaling costs." 
        canonical="https://www.quantummosaic.com/" 
      />
      <main className="pt-16">
        <ExecutiveHeroSection />
        <TransformationOfferSection />
        <ProofUrgencySection />
        <MentalModelShiftsSection />
        <CredibilitySocialProofSection />
        <WhoWeServeBestSection />
        <ProofPointsSection />
        <HowItWorksQuantumSection />
        <WhyItMattersSection />
        <FinalExecutiveCTASection />
        <FAQSection />
      </main>
      <QuantumFooter />
    </div>
  );
};

export default Index;
