
import React, { useEffect, useState } from 'react';
import { AlertTriangle, FileX, Mail, CheckCircle, Shield, Zap } from 'lucide-react';

const WhatWeSolveSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            What We Solve
          </h2>
          <div className="text-2xl text-red-600 font-semibold mb-8 animate-pulse">
            Private capital workflows are broken.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Chaos */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
                <AlertTriangle className="h-8 w-8 mr-3 animate-bounce" />
                Current State: Chaos
              </h3>
              
              <div className="space-y-4">
                {/* Scattered Documents */}
                <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <FileX className="h-6 w-6 text-red-500 animate-pulse" />
                  <div>
                    <div className="font-semibold text-red-700">PDF Policy Documents</div>
                    <div className="text-sm text-red-600">Static, unenforceable, outdated</div>
                  </div>
                </div>

                {/* Email Chaos */}
                <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <Mail className="h-6 w-6 text-red-500 animate-pulse delay-100" />
                  <div>
                    <div className="font-semibold text-red-700">Email Approvals</div>
                    <div className="text-sm text-red-600">Lost threads, missed approvals</div>
                  </div>
                </div>

                {/* Manual Processes */}
                <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <AlertTriangle className="h-6 w-6 text-red-500 animate-pulse delay-200" />
                  <div>
                    <div className="font-semibold text-red-700">Excel Checklists</div>
                    <div className="text-sm text-red-600">Human error, no enforcement</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-300">
                <p className="text-red-800 font-semibold">Result: Bottlenecks. Errors. Exceptions.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Solution */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 mr-3 text-emerald-500" />
                Quantum Mosaic: Order
              </h3>
              
              <div className="space-y-4">
                {/* Programmable Corridors */}
                <div className={`flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                  <Shield className="h-6 w-6 text-emerald-500" />
                  <div>
                    <div className="font-semibold text-emerald-700">Policy Corridors</div>
                    <div className="text-sm text-emerald-600">Code-based, automatically enforced</div>
                  </div>
                </div>

                {/* Real-time Gates */}
                <div className={`flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200 transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                  <Zap className="h-6 w-6 text-emerald-500" />
                  <div>
                    <div className="font-semibold text-emerald-700">Rail Gates</div>
                    <div className="text-sm text-emerald-600">Real-time compliance signals</div>
                  </div>
                </div>

                {/* Immutable Logs */}
                <div className={`flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200 transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <div>
                    <div className="font-semibold text-emerald-700">Audit Trail</div>
                    <div className="text-sm text-emerald-600">Immutable, transparent logs</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-100 rounded-lg border border-emerald-300">
                <p className="text-emerald-800 font-semibold">Result: Full-stack compliance, live.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolveSection;
