
import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonTable = () => {
  const comparisons = [
    {
      category: 'Approvals',
      without: 'Buried in Slack & email',
      with: 'Codified, enforced, and auditable'
    },
    {
      category: 'Compliance',
      without: 'Post-hoc review, checklist-driven',
      with: 'Preemptive, programmable enforcement'
    },
    {
      category: 'Governance',
      without: 'Manual signoffs, risky overrides',
      with: 'Real-time circuit breakers'
    },
    {
      category: 'Audit Trail',
      without: 'Painful, patchy, and manual',
      with: 'Immutable, transparent, and instant'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Life Without vs. With Quantum Mosaic
          </h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 gap-0">
            <div className="bg-gray-50 p-6 font-semibold text-gray-900 border-r border-b">
              Category
            </div>
            <div className="bg-red-50 p-6 font-semibold text-red-900 border-r border-b text-center">
              <X className="h-5 w-5 inline mr-2" />
              Without QM (The Status Quo)
            </div>
            <div className="bg-green-50 p-6 font-semibold text-green-900 border-b text-center">
              <Check className="h-5 w-5 inline mr-2" />
              With QM (Execution OS)
            </div>
            
            {comparisons.map((item, index) => (
              <React.Fragment key={index}>
                <div className="p-6 font-medium text-gray-900 border-r border-b">
                  {item.category}
                </div>
                <div className="p-6 text-gray-700 border-r border-b bg-red-25">
                  {item.without}
                </div>
                <div className="p-6 text-gray-700 border-b bg-green-25">
                  {item.with}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
