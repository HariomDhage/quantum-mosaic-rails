
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

const FinalCTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleJoinProgram = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Define the Future of Execution.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Be among the first firms to enforce institutional logic as code. Join the Execution OS Pioneer Program and help shape the future of private capital infrastructure.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4"
            onClick={handleJoinProgram}
          >
            Join the Pioneer Program
          </Button>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default FinalCTASection;
