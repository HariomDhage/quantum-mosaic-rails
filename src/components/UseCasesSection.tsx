
import React from 'react';
import { Filter, DollarSign, Vote, FileCheck, Lock, TrendingUp } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Filter,
      title: 'Automated Deal Flow Filtering',
      description: 'Acts as an ATS for investment. Automatically screens inbound pitch decks against your unique investment thesis, filtering out the noise so your team only sees qualified, relevant opportunities.'
    },
    {
      icon: DollarSign,
      title: 'NAV Gated Capital Calls',
      description: 'Automatically block drawdowns unless NAV thresholds and all pre-funding approvals are met.'
    },
    {
      icon: Vote,
      title: 'IC Vote Triggered Approvals',
      description: 'Ensure investment memos are automatically routed and that deals cannot proceed without the required committee votes.'
    },
    {
      icon: FileCheck,
      title: 'LP Mandate & Side Letter Enforcement',
      description: 'Programmatically enforce exposure limits, ESG policies, and other side letter terms before capital is allocated.'
    },
    {
      icon: Lock,
      title: 'Redemption Lock Workflows',
      description: 'Automatically pause redemptions when trigger events, like a significant NAV drop, occur.'
    },
    {
      icon: TrendingUp,
      title: 'Covenant Monitoring',
      description: 'Continuously monitor data feeds for covenant triggers (like DSCR) and automatically escalate breaches to the risk team.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            An Execution OS (XOS) for Your Entire Investment Lifecycle
          </h2>
          <p className="text-xl text-gray-600">
            From deal flow to investor reporting, Quantum Mosaic provides the programmable infrastructure to govern your most critical workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <useCase.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">{useCase.title}</h3>
              </div>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
