import React, { useState } from 'react';
import { Camera, Settings, Gauge, RefreshCw, X, Brain, Zap } from 'lucide-react';

const HowItWorksNewSection = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    {
      icon: Camera,
      title: "Capture Expertise",
      shortDesc: "Map exactly how your best people assess, decide, and act",
      fullDesc: "We work with your top performers to map their decision-making process in detail. Every approval gate, risk assessment, and compliance check is documented and understood.",
      benefit: "Your best judgment, codified"
    },
    {
      icon: Settings,
      title: "Encode Logic", 
      shortDesc: "Turn judgment into rules, approval paths, and compliance triggers",
      fullDesc: "Transform your expertise into enforceable workflows. Decision trees, approval hierarchies, and compliance gates are built into the system architecture.",
      benefit: "Institutional knowledge preserved"
    },
    {
      icon: Gauge,
      title: "Automate & Monitor",
      shortDesc: "Route tasks, block out-of-policy actions, escalate instantly",
      fullDesc: "Deploy intelligent workflows that automatically route decisions, prevent policy violations, and escalate edge cases to the right people at the right time.",
      benefit: "Scale without losing control"
    },
    {
      icon: RefreshCw,
      title: "Refine & Improve",
      shortDesc: "Use analytics to sharpen execution continuously",
      fullDesc: "The system learns from every transaction, providing insights and recommendations to continuously optimize your processes while maintaining compliance.",
      benefit: "Gets smarter over time"
    }
  ];

  const techStack = [
    "AI-assisted decision mapping",
    "Dynamic approval engines", 
    "Embedded compliance guards",
    "Analytics dashboards"
  ];

  return (
    <>
      <section className="py-24 bg-dark-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Visual flow diagram — each step lights up on interaction
            </p>
          </div>

          {/* Interactive Flow Diagram */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Circle */}
                  <div 
                    className="group cursor-pointer"
                    onClick={() => setSelectedStep(index)}
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse-glow" />
                      
                      {/* Main circle */}
                      <div className="relative w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-white/70 text-sm">{step.shortDesc}</p>
                    </div>
                  </div>
                  
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block w-16 h-1 bg-gradient-to-r from-secondary to-accent rounded-full opacity-60" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Under the Hood</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2 text-white/90">
                  <Brain className="w-4 h-4 text-accent" />
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
            <p className="text-white/70 text-center mt-6">
              All live with &lt;8 hours of IT time
            </p>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedStep !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative animate-scale-in">
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                {React.createElement(steps[selectedStep].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">{steps[selectedStep].title}</h3>
                <p className="text-accent font-medium">{steps[selectedStep].benefit}</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              {steps[selectedStep].fullDesc}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HowItWorksNewSection;