import React from 'react';
import { User, Users, Building } from 'lucide-react';

const StartAnywhereSection = () => {
  const approaches = [
    {
      icon: User,
      title: "Digitize an Employee",
      description: "Start with one high-value role and automate their most critical decisions",
      details: ["Investment analyst workflows", "Credit evaluation processes", "Compliance reviews"]
    },
    {
      icon: Users,
      title: "Digitize a Department", 
      description: "Scale across a team to eliminate bottlenecks and improve coordination",
      details: ["Investment committee workflows", "Due diligence processes", "Risk assessment pipelines"]
    },
    {
      icon: Building,
      title: "Digitize the Firm",
      description: "Transform your entire operation into an execution machine",
      details: ["End-to-end deal workflows", "Enterprise-wide compliance", "Institutional knowledge capture"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-dark-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Start Anywhere — Expand Everywhere
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose your entry point based on immediate needs and scale from there
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                <approach.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{approach.title}</h3>
              <p className="text-gray-300 mb-6">{approach.description}</p>
              
              <ul className="space-y-2">
                {approach.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartAnywhereSection;