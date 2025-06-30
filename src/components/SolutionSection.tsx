
import React from 'react';
import { Code, Cog } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From Policy on Paper to Policy in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Quantum Mosaic introduces a new foundation for institutional execution: Corridors and Rails. We transform your static documents into active, self-enforcing workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Corridors: Your Strategy, Codified</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Define your firm's unique rules for any process—from capital calls to IC votes—in simple, readable 'Corridors'. This is your investment strategy, made executable.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Cog className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Rails: Your Automated Enforcement Engine</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Our 'Rails' infrastructure is the enforcement engine that automatically runs your Corridors, blocking non-compliant actions and creating a real-time audit trail for every decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
