
import React, { useState } from 'react';
import { Users, Mail, AlertTriangle, Zap, CheckCircle, X } from 'lucide-react';

const TransformationSection = () => {
  const [isTransformed, setIsTransformed] = useState(false);

  const problemTiles = [
    { icon: Users, text: "Human bottlenecks", color: "text-red-400" },
    { icon: Mail, text: "Email trails", color: "text-red-400" },
    { icon: AlertTriangle, text: "Manual oversight", color: "text-red-400" }
  ];

  const solutionTiles = [
    { icon: Zap, text: "BLUF Execution", color: "text-emerald-400" },
    { icon: CheckCircle, text: "Automated Gates", color: "text-emerald-400" },
    { icon: CheckCircle, text: "Real-time Compliance", color: "text-emerald-400" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What If Your Strategy Could
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Execute Itself?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform from chaotic human processes to elegant autonomous systems
          </p>
          
          <button
            onClick={() => setIsTransformed(!isTransformed)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
          >
            {isTransformed ? 'Show Problems' : 'Transform Now'}
          </button>
        </div>

        {/* Transformation Visual */}
        <div className="relative">
          {/* Before State */}
          <div className={`transition-all duration-1000 ${
            isTransformed ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
                Traditional Execution: Chaos & Bottlenecks
              </h3>
              
              {/* Chaotic Org Chart */}
              <div className="relative bg-white rounded-xl p-6 mb-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {/* Scattered people icons with stress indicators */}
                  {[1,2,3,4,5,6].map((i) => (
                    <div key={i} className="relative">
                      <div className="bg-red-100 p-4 rounded-lg border-2 border-red-300 animate-pulse">
                        <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                        <div className="text-xs text-red-600">Waiting...</div>
                      </div>
                      {/* Stress lines */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                    </div>
                  ))}
                </div>
                
                {/* Email chaos arrows */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full">
                    <defs>
                      <marker id="arrowhead-red" markerWidth="10" markerHeight="7" 
                       refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                      </marker>
                    </defs>
                    <path d="M 50 50 Q 150 25 250 50" stroke="#ef4444" strokeWidth="2" 
                          fill="none" markerEnd="url(#arrowhead-red)" className="animate-pulse" />
                    <path d="M 150 100 Q 100 75 50 100" stroke="#ef4444" strokeWidth="2" 
                          fill="none" markerEnd="url(#arrowhead-red)" className="animate-pulse" />
                  </svg>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {problemTiles.map((tile, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border-2 border-red-200 text-center">
                    <X className="h-8 w-8 text-red-500 mx-auto mb-3" />
                    <tile.icon className={`h-12 w-12 ${tile.color} mx-auto mb-3`} />
                    <p className="font-semibold text-gray-800">{tile.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* After State */}
          <div className={`absolute inset-0 transition-all duration-1000 ${
            isTransformed ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
          }`}>
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
                Autonomous Execution: Elegant & Reliable
              </h3>
              
              {/* Smooth Logic Flow */}
              <div className="relative bg-white rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300">
                      <div className="text-sm font-semibold text-blue-800">Policy Input</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 mx-4">
                    <div className="relative">
                      <div className="h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full">
                        <div className="absolute top-0 left-0 w-4 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-center mt-2 text-sm text-gray-600">BLUF Logic Rail</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-emerald-100 p-4 rounded-lg border-2 border-emerald-300">
                      <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-emerald-800">Auto-Execute</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {solutionTiles.map((tile, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border-2 border-emerald-200 text-center">
                    <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                    <tile.icon className={`h-12 w-12 ${tile.color} mx-auto mb-3`} />
                    <p className="font-semibold text-gray-800">{tile.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BLUF Explanation */}
        <div className="mt-12 text-center">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h4 className="text-2xl font-bold text-slate-800 mb-4">
              BLUF: Bottom Line Up Front
            </h4>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              No guesswork. No ambiguity. Just codified logic that executes your strategy 
              exactly as intended, every single time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
