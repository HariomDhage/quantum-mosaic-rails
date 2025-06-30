
import React from 'react';
import { Brain, Shield, Zap } from 'lucide-react';

const WhyNowSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Execution Can't Wait
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Brain className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">The Rise of AI</h3>
            <p className="text-gray-600">
              AI is making decisions faster than human governance can keep up. You need automated guardrails to manage this new speed and scale.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Regulatory Pressure</h3>
            <p className="text-gray-600">
              The SEC is cracking down on operational risk and demanding stricter compliance. "Hope" is no longer a viable compliance strategy.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Operational Complexity</h3>
            <p className="text-gray-600">
              Rising LP demands, complex fund structures, and fragmented systems have pushed manual workflows to their breaking point.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-gray-900">
            Legacy tools weren't built for this world. QM is.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
