
import React, { useState, useEffect } from 'react';
import { Code2, ArrowRight, CheckCircle, FileText } from 'lucide-react';

const BLUFStudioSection = () => {
  const [inputText, setInputText] = useState('');
  const [isTransforming, setIsTransforming] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const exampleRules = [
    "If ESG score < B → Reject vendor application",
    "If IC vote >= 3 of 5 → Approve investment",
    "If NAV drops > 15% → Pause redemptions",
    "If leverage ratio > 70% → Block new deals"
  ];

  const [currentExample, setCurrentExample] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % exampleRules.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTransform = () => {
    if (!inputText.trim()) {
      setInputText(exampleRules[currentExample]);
    }
    
    setIsTransforming(true);
    setTimeout(() => {
      setIsTransforming(false);
      setShowResult(true);
    }, 2000);
  };

  const reset = () => {
    setInputText('');
    setShowResult(false);
    setIsTransforming(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Introducing:
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              BLUF Studio
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-4">
            Transform plain English governance rules into executable logic
          </p>
          <p className="text-lg text-emerald-300 font-semibold">
            No coding. No ambiguity. No regrets.
          </p>
        </div>

        {/* Studio Interface */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Input */}
            <div className="p-8 border-r border-slate-700">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-slate-200">
                  Plain English Rule
                </h3>
              </div>

              {/* Example Rules Cycling */}
              <div className="mb-6">
                <p className="text-sm text-slate-400 mb-2">Try one of these examples:</p>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                  <div className="text-emerald-300 font-mono text-sm transition-all duration-500">
                    {exampleRules[currentExample]}
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="space-y-4">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your governance rule in plain English..."
                  className="w-full h-32 bg-slate-700/50 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none resize-none"
                />
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleTransform}
                    disabled={isTransforming}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    {isTransforming ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Transforming...
                      </>
                    ) : (
                      <>
                        Transform to Logic
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={reset}
                    className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-all duration-300"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Logic Output */}
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Code2 className="h-6 w-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-semibold text-slate-200">
                  Executable Logic Block
                </h3>
              </div>

              {!showResult && !isTransforming && (
                <div className="flex items-center justify-center h-64 border-2 border-dashed border-slate-600 rounded-lg">
                  <div className="text-center text-slate-400">
                    <Code2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Your logic will appear here</p>
                  </div>
                </div>
              )}

              {isTransforming && (
                <div className="space-y-4">
                  <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mr-2"></div>
                      <span className="text-sm text-slate-300">Parsing natural language...</span>
                    </div>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
                      <span className="text-sm text-slate-300">Creating corridor logic...</span>
                    </div>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse mr-2"></div>
                      <span className="text-sm text-slate-300">Activating rails...</span>
                    </div>
                  </div>
                </div>
              )}

              {showResult && (
                <div className="space-y-4 animate-fade-in">
                  {/* Logic Block */}
                  <div className="bg-gradient-to-br from-emerald-900/30 to-blue-900/30 p-6 rounded-lg border border-emerald-400/50 shadow-lg shadow-emerald-400/20">
                    <div className="font-mono text-sm space-y-2">
                      <div className="text-emerald-300">// Corridor Definition</div>
                      <div className="text-blue-300">CORRIDOR: {inputText.split(' ')[0]}_Gate</div>
                      <div className="text-white">
                        CONDITION: {inputText.toLowerCase().includes('esg') ? 'ESG_score >= B' : 
                                   inputText.toLowerCase().includes('ic') ? 'IC_approval_count >= 3' :
                                   inputText.toLowerCase().includes('nav') ? 'NAV_drop <= 15%' : 
                                   'leverage_ratio <= 70%'}
                      </div>
                      <div className="text-orange-300">
                        ACTION: {inputText.toLowerCase().includes('reject') ? 'REJECT' : 
                                inputText.toLowerCase().includes('approve') ? 'APPROVE' : 
                                inputText.toLowerCase().includes('pause') ? 'PAUSE' : 'BLOCK'}
                      </div>
                      <div className="text-emerald-300">AUDIT: immutable_log_enabled</div>
                    </div>
                  </div>

                  {/* Rails Activation */}
                  <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Rails Status:</span>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-400 mr-2 animate-pulse" />
                        <span className="text-emerald-300 font-semibold">Active & Enforcing</span>
                      </div>
                    </div>
                  </div>

                  {/* Audit Trail */}
                  <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Audit Trail:</span>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mr-2"></div>
                        <span className="text-blue-300 font-semibold">Immutable Log Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Animation Flow Visualization */}
        {showResult && (
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center space-x-6">
              <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
                <FileText className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm text-blue-300">Plain Sentence</div>
              </div>
              
              <ArrowRight className="h-6 w-6 text-slate-400" />
              
              <div className="bg-emerald-500/20 p-4 rounded-lg border border-emerald-400">
                <Code2 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-sm text-emerald-300">Corridor Logic</div>
              </div>
              
              <ArrowRight className="h-6 w-6 text-slate-400" />
              
              <div className="bg-orange-500/20 p-4 rounded-lg border border-orange-400">
                <CheckCircle className="h-8 w-8 text-orange-400 mx-auto mb-2 animate-pulse" />
                <div className="text-sm text-orange-300">Rails Active</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BLUFStudioSection;
