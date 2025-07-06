
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeroSection from '@/components/AnimatedHeroSection';
import TransformationSection from '@/components/TransformationSection';
import AutonomousInstitutionsSection from '@/components/AutonomousInstitutionsSection';
import BLUFStudioSection from '@/components/BLUFStudioSection';
import WhatWeSolveSection from '@/components/WhatWeSolveSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import WhyNowSection from '@/components/WhyNowSection';
import ComparisonTable from '@/components/ComparisonTable';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import UseCasesSection from '@/components/UseCasesSection';
import DifferentiationSection from '@/components/DifferentiationSection';
import WhoWeAreForSection from '@/components/WhoWeAreForSection';
import FinalCTASection from '@/components/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AnimatedHeroSection />
        <TransformationSection />
        <AutonomousInstitutionsSection />
        <BLUFStudioSection />
        <WhatWeSolveSection />
        <ArchitectureSection />
        <WhyNowSection />
        <ComparisonTable />
        <SolutionSection />
        <HowItWorksSection />
        <UseCasesSection />
        <DifferentiationSection />
        <WhoWeAreForSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
