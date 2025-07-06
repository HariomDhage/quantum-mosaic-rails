
import React, { useState, useEffect } from 'react';
import { Shield, DollarSign, Users, CheckCircle, X } from 'lucide-react';

const AutonomousInstitutionsSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  const demos = [
    {
      title: "ESG Policy Enforcement",
      description: "Vendor screening with automatic compliance gates",
      icon: Shield,
      color: "emerald",
      steps: [
        "Vendor submits application",
        "ESG score calculation",
        "Policy gate evaluation",
        "Auto-approve/reject decision"
      ]
    },
    {
      title: "Capital Call Governance",
      description: "Blocked until NAV + IC vote conditions are met",
      icon: DollarSign,
      color: "blue",
      steps: [
        "Capital call requested",
        "NAV threshold check",
        "IC vote verification",
        "Execution authorized"
      ]
    },
    {
      title: "HR Workflow Rails",
      description: "Rails light up only under compliant conditions",
      icon: Users,
      color: "orange",
      steps: [
        "Process initiation",
        "Compliance verification",
        "Authority validation",
        "Workflow execution"
      ]
    }
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % demos[activeDemo].steps.length);
    }, 2000);

    const demoInterval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
      setAnimationStep(0);
    }, 8000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(demoInterval);
    };
  }, [activeDemo]);

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      emerald: { bg: 'bg-emerald-400', text: 'text-emerald-400', border: 'border-emerald-400' },
      blue: { bg: 'bg-blue-400', text: 'text-blue-400', border: 'border-blue-400' },
      orange: { bg: 'bg-orange-400', text: 'text-orange-400', border: 'border-orange-400' }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || '';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Autonomous Institutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch as policies enforce themselves in real-time through programmable governance
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {demos.map((demo, index) => {
              const IconComponent = demo.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveDemo(index);
                    setAnimationStep(0);
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeDemo === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="h-5 w-5 inline mr-2" />
                  {demo.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Demo Visualization */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
              getColorClasses(demos[activeDemo].color, 'bg')
            }/20`}>
              {React.createElement(demos[activeDemo].icon, {
                className: `h-8 w-8 ${getColorClasses(demos[activeDemo].color, 'text')}`
              })}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {demos[activeDemo].title}
            </h3>
            <p className="text-lg text-gray-600">
              {demos[activeDemo].description}
            </p>
          </div>

          {/* 3D-Style Process Flow */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {demos[activeDemo].steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < demos[activeDemo].steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <div className={`w-6 h-1 transition-all duration-500 ${
                        animationStep > index
                          ? `${getColorClasses(demos[activeDemo].color, 'bg')} shadow-lg`
                          : 'bg-gray-200'
                      }`}>
                        {animationStep > index && (
                          <div className={`absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 ${
                            getColorClasses(demos[activeDemo].color, 'bg')
                          } rounded-full animate-pulse`}></div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step Card */}
                  <div className={`relative p-6 rounded-2xl border-2 transition-all duration-500 transform ${
                    animationStep >= index
                      ? `${getColorClasses(demos[activeDemo].color, 'border')} bg-white shadow-xl scale-105`
                      : 'border-gray-200 bg-gray-50 scale-100'
                  }`}>
                    {/* Step Number */}
                    <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                      animationStep >= index
                        ? `${getColorClasses(demos[activeDemo].color, 'bg')} ${getColorClasses(demos[activeDemo].color, 'border')} text-white shadow-lg`
                        : 'bg-gray-200 border-gray-300 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>

                    {/* Status Icon */}
                    <div className="flex justify-center mb-4">
                      {animationStep > index ? (
                        <CheckCircle className={`h-8 w-8 ${getColorClasses(demos[activeDemo].color, 'text')} animate-pulse`} />
                      ) : animationStep === index ? (
                        <div className={`w-8 h-8 border-2 ${getColorClasses(demos[activeDemo].color, 'border')} rounded-full animate-spin border-t-transparent`}></div>
                      ) : (
                        <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                      )}
                    </div>

                    {/* Step Text */}
                    <p className={`text-center font-semibold transition-all duration-500 ${
                      animationStep >= index
                        ? 'text-gray-900'
                        : 'text-gray-500'
                    }`}>
                      {step}
                    </p>

                    {/* Active Step Glow */}
                    {animationStep === index && (
                      <div className={`absolute inset-0 rounded-2xl ${getColorClasses(demos[activeDemo].color, 'bg')}/10 animate-pulse`}></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Result */}
            <div className="mt-12 text-center">
              <div className={`inline-flex items-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-1000 ${
                animationStep === demos[activeDemo].steps.length - 1
                  ? `${getColorClasses(demos[activeDemo].color, 'bg')} text-white shadow-2xl scale-110`
                  : 'bg-gray-200 text-gray-500 scale-100'
              }`}>
                {animationStep === demos[activeDemo].steps.length - 1 ? (
                  <>
                    <CheckCircle className="h-6 w-6 mr-3 animate-pulse" />
                    Policy Enforced Automatically
                  </>
                ) : (
                  <>
                    <div className="w-6 h-6 mr-3 border-2 border-gray-400 rounded-full animate-spin border-t-transparent"></div>
                    Processing...
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            As you scroll, each policy enforces itself visually ↓
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutonomousInstitutionsSection;
