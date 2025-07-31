
import React from 'react';
import { FileText, Link as LinkIcon, Shield } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Define the Logic',
      description: 'Work with us to translate one of your critical, high-risk workflows into a QM Corridor.'
    },
    {
      icon: LinkIcon,
      title: 'Connect the Triggers',
      description: 'Link the Corridor to your existing systems—a file upload, a data feed, or an API call.'
    },
    {
      icon: Shield,
      title: 'Enforce & Audit',
      description: 'Go live and watch as your policy is enforced automatically, with a complete, immutable log of every action.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Launch Your First Automated Workflow in 3 Steps
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
