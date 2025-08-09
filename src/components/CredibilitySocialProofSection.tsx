import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, TrendingUp, Shield } from 'lucide-react';

const CredibilitySocialProofSection = () => {
  const clientTypes = [
    {
      icon: Building2,
      type: "Private Credit Fund",
      description: "$15B AUM"
    },
    {
      icon: TrendingUp,
      type: "Real Estate Asset Manager", 
      description: "Multi-Family Focus"
    },
    {
      icon: Shield,
      type: "Healthcare Investment Firm",
      description: "Regulated Sector"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Built With and For Leaders in 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              {" "}Constraint-Heavy Markets
            </span>
          </h2>
        </div>

        {/* Client Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {clientTypes.map((client, index) => (
            <Card key={index} className="text-center border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-slate-100 p-4 rounded-full">
                    <client.icon className="h-12 w-12 text-slate-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {client.type}
                </h3>
                <p className="text-slate-600">
                  {client.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-emerald-600 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 mb-8 leading-relaxed">
              Quantum Mosaic didn't just make us faster — it made us 
              <span className="text-emerald-600 font-bold"> uncatchable.</span>
            </blockquote>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">MD</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Managing Director</div>
                <div className="text-slate-600">$15B AUM Fund</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySocialProofSection;