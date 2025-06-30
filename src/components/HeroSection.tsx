
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleJoinProgram = () => {
    window.location.href = 'mailto:hello@quantummosaic.com?subject=Join the Pioneer Program&body=Hi, I am interested in joining the Quantum Mosaic Pioneer Program. Please send me more information.';
  };

  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Execution Operating System for Private Capital
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            We're building the world's first Execution OS for private capital. It's an infrastructure that converts your investment policies into automated, enforceable workflows, ensuring your capital only moves when it meets 100% of your rules.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4"
            onClick={handleJoinProgram}
          >
            Join the Pioneer Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
