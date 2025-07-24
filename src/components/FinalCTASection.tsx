
import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap } from 'lucide-react';

const FinalCTASection = () => {
  const [activeRail, setActiveRail] = useState(0);

  const rails = [
    "Policy Gate",
    "Risk Gate", 
    "Approval Gate",
    "Execution Gate"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRail((prev) => (prev + 1) % rails.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleVideoDemo = () => {
    window.open('https://share.synthesia.io/3f373475-6df6-46ae-9c7a-738065eb8b15', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-16 left-16 w-3 h-3 bg-white opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-24 w-5 h-5 bg-white opacity-15 rounded-full animate-pulse delay-75"></div>
          <div className="absolute bottom-24 left-32 w-4 h-4 bg-white opacity-10 rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-16 right-16 w-6 h-6 bg-white opacity-25 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white opacity-30 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white opacity-20 rounded-full animate-pulse delay-400"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            Shape the Future of Execution
          </h2>
          
          {/* Compliance Rails Animation */}
          <div className="mb-8 sm:mb-12 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100 px-4 sm:px-0">
              Be among the first firms to enforce institutional logic as code
            </p>
            
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700 mx-4 sm:mx-0">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-slate-300">Compliance Rails Activation</h3>
              <div className="flex items-center justify-between space-x-2 sm:space-x-4">
                {rails.map((rail, index) => (
                  <div key={index} className="flex-1">
                    <div className={`h-6 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      activeRail >= index 
                        ? 'border-emerald-400 bg-emerald-400/20 shadow-lg shadow-emerald-400/50' 
                        : 'border-slate-500 bg-slate-700/50'
                    }`}>
                      {activeRail >= index && (
                        <CheckCircle className="h-3 sm:h-5 w-3 sm:w-5 text-emerald-400 animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-2 hidden sm:block">{rail}</p>
                    <p className="text-xs text-slate-400 mt-1 sm:hidden">{rail.split(' ')[0]}</p>
                  </div>
                ))}
                
                {/* Final Green Light */}
                <div className="flex-1">
                  <div className={`h-8 sm:h-12 w-8 sm:w-12 rounded-full border-2 flex items-center justify-center mx-auto transition-all duration-1000 ${
                    activeRail === rails.length - 1 
                      ? 'border-emerald-400 bg-emerald-400/20 shadow-2xl shadow-emerald-400/50 animate-pulse' 
                      : 'border-slate-500 bg-slate-700'
                  }`}>
                    <Zap className={`h-4 sm:h-6 w-4 sm:w-6 ${activeRail === rails.length - 1 ? 'text-emerald-400' : 'text-slate-500'}`} />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 font-semibold">
                    {activeRail === rails.length - 1 ? 'Execution Allowed' : 'Pending...'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto text-blue-100 px-4 sm:px-0">
            Experience the future of institutional execution.
          </p>
          
          {/* Circuit Toggle Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <button
              onClick={handleVideoDemo}
              className="group relative overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25 border-2 border-emerald-500"
            >
              <span className="relative z-10 flex items-center">
                Watch XOS Demo
                <div className="ml-3 w-6 sm:w-8 h-3 sm:h-4 bg-emerald-800 rounded-full relative">
                  <div className="absolute left-0.5 sm:left-1 top-0.5 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full transition-transform group-hover:translate-x-2 sm:group-hover:translate-x-3"></div>
                </div>
              </span>
            </button>
            
            <button
              onClick={scrollToTop}
              className="group relative overflow-hidden bg-transparent hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 border-2 border-slate-400 hover:border-white"
            >
              <span className="relative z-10 flex items-center">
                Join the Program
                <div className="ml-3 w-6 sm:w-8 h-3 sm:h-4 bg-slate-600 rounded-full relative">
                  <div className="absolute left-0.5 sm:left-1 top-0.5 w-2 sm:w-3 h-2 sm:h-3 bg-slate-300 rounded-full transition-transform group-hover:translate-x-2 sm:group-hover:translate-x-3"></div>
                </div>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTASection;
