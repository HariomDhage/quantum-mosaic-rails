
import React from 'react';
import { Users, AlertTriangle, FileX } from 'lucide-react';

const WhoWeAreForSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Built for Those Who Own Execution Risk
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We're for the COOs, CFOs, General Partners, and Heads of Investment Ops who carry the weight of "What if this fails?".
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700">Chased a missing approval</p>
            </div>
            <div>
              <FileX className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700">Patched over an Excel error</p>
            </div>
            <div>
              <AlertTriangle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700">Faced a regulator with incomplete records</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xl font-semibold text-gray-900">
              If you've ever experienced any of these situations — QM is for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreForSection;
