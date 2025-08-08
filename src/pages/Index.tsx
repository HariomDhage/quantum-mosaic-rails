
import React from 'react';
import QuantumHeader from '@/components/QuantumHeader';
import QuantumFooter from '@/components/QuantumFooter';
import QuantumHeroSection from '@/components/QuantumHeroSection';
import ProblemSection from '@/components/ProblemSection';
import ShiftSection from '@/components/ShiftSection';

import AutonomousIntelligenceSection from '@/components/AutonomousIntelligenceSection';
import AutonomiaStackSection from '@/components/AutonomiaStackSection';
import MVPCapabilitiesSection from '@/components/MVPCapabilitiesSection';
import RoadmapSection from '@/components/RoadmapSection';
import FinalQuantumCTASection from '@/components/FinalQuantumCTASection';
import ParadigmShiftsSection from '@/components/ParadigmShiftsSection';
import ExpertiseSystemSection from '@/components/ExpertiseSystemSection';
import FAQSection from '@/components/FAQSection';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <QuantumHeader />
      <SEO 
        title="Quantum Mosaic: Enterprise AI Governance & Execution" 
        description="Encode expertise into governed, self‑improving decisions. Corridors & Rails automate compliant execution with real-time audit trails." 
        canonical="https://www.quantummosaic.com/" 
      />
      <main className="pt-16">
        <QuantumHeroSection />
        <ProblemSection />
        <ShiftSection />
        <ParadigmShiftsSection />
        <ExpertiseSystemSection />
        <FAQSection />
        <AutonomousIntelligenceSection />
        <AutonomiaStackSection />
        <MVPCapabilitiesSection />
        <RoadmapSection />
        <FinalQuantumCTASection />
      </main>
      <QuantumFooter />
    </div>
  );
};

export default Index;
