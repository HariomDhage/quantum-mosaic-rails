import React, { useState } from 'react';
import { Users, Brain, ArrowRight } from 'lucide-react';

const ShiftSection = () => {
  const [activeModel, setActiveModel] = useState<'old' | 'new'>('old');

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 sm:mb-6 font-sora px-2">
            ⚖️ From Human Bandwidth to Encoded Intelligence
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            The fundamental shift from scaling people to scaling intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Old Model */}
          <div 
            className={`group cursor-pointer transition-all duration-500 ${
              activeModel === 'old' ? 'scale-105' : 'scale-95 opacity-75'
            }`}
            onClick={() => setActiveModel('old')}
          >
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <Users className="h-8 sm:h-12 w-8 sm:w-12 text-red-500 mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 font-sora">Old Model</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-700">Hire more senior people</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-700">Create approval chains</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-700">Add oversight layers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-700">Hope for consistency</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-sm text-red-600 font-medium">
                  Result: O(n²) cost scaling, diminishing returns
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center lg:hidden">
            <ArrowRight className="h-8 w-8 text-primary" />
          </div>

          {/* New Model */}
          <div 
            className={`group cursor-pointer transition-all duration-500 ${
              activeModel === 'new' ? 'scale-105' : 'scale-95 opacity-75'
            }`}
            onClick={() => setActiveModel('new')}
          >
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Brain className="h-12 w-12 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-primary font-sora">New Model</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary">Encode senior judgment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary">Deploy AI agents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary">Continuous learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary">Guaranteed consistency</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-primary font-medium">
                  Result: O(1) cost scaling, exponential returns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow Animation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-muted rounded-full px-8 py-4">
            <span className="text-muted-foreground">Traditional Org Chart</span>
            <ArrowRight className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold">AI Decision Network</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;