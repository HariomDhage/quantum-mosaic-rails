import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Code, Eye, Shield } from 'lucide-react';

const About = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleJoinProgram = () => {
    setIsFormOpen(true);
  };

  const teamMembers = [
    {
      name: 'Deepak Jha',
      role: 'Founder',
      description: 'Deepak is a 2x founder with a deep background in enterprise sales and go-to-market strategy from his time at major firms like Oracle, GE, and Accenture.',
      image: '/lovable-uploads/3d5c0718-bd9b-4b57-ac6a-a401d893a537.png'
    },
    {
      name: 'Gunjan Karun',
      role: 'CTO',
      description: 'Gunjan leads our technology vision with deep expertise in event-driven architecture, policy engines, and AI/NLP. He holds three U.S. patents in related fields.',
      image: '/lovable-uploads/04780c8a-ef04-4a44-a628-b8b42e08a2bc.png'
    }
  ];

  // Advisors section replaced with general description

  const philosophies = [
    {
      icon: Code,
      title: 'Build Corridors, Not Features',
      description: 'We give our clients the building blocks to design their own governance. Our job is to provide a robust engine, not a rigid application.'
    },
    {
      icon: Shield,
      title: 'Enforcement over Visibility',
      description: 'Dashboards see what happened. Our platform enforces what should happen. We focus on pre-emptive compliance, not post-hoc review.'
    },
    {
      icon: Eye,
      title: 'Trust Through Transparency',
      description: 'Every action, rule, and override is logged in an immutable audit trail. We believe the best way to build trust is with undeniable transparency.'
    }
  ];

  return (
    <>
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Mission Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-6">
                  Building the World's First Execution Operating System
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  The private capital market is one of the most powerful engines for growth in the world, yet it runs on invisible friction. Critical decisions are managed by fragmented emails, static PDFs, and human memory, creating enormous operational and compliance risk. At Quantum Mosaic, our mission is to replace that friction with certainty. We are building the programmable infrastructure that allows institutions to codify their policies and enforce them automatically. We believe that when execution is guaranteed, capital can move with confidence and speed.
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                  From Manual Chaos to Programmable Trust
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Quantum Mosaic was born from a simple observation: in a world of increasingly complex financial rules, the systems designed to enforce them were stuck in the past. We saw brilliant investment teams spending their days chasing approvals and manually verifying compliance. We started by tackling the most universal pain point—drowning in off-thesis pitch decks. Instead of just digitizing paperwork, we decided to program discipline, starting at the very top of the investment funnel.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  The Team Building the Execution OS
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900">Guided by Industry Pioneers</h3>
              </div>
              
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Quantum Mosaic is built with the strategic guidance of a world-class advisory board — including leaders from institutional investing, AI infrastructure, regulatory compliance, enterprise software, and private capital markets.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our advisors bring deep domain expertise and real-world insight to help us navigate complexity, anticipate market needs, and build execution infrastructure that's not just visionary — but operationally sound and trusted by the industry.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From CIOs of multi-billion-dollar portfolios to AI architects and regulatory veterans — our advisory circle ensures QM delivers at the intersection of trust, precision, and scale.
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  How We Think
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {philosophies.map((philosophy, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <philosophy.icon className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{philosophy.title}</h3>
                    <p className="text-gray-600">{philosophy.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                Join us in creating the infrastructure that will power the next generation of private capital markets.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4"
                onClick={handleJoinProgram}
              >
                Join the XOS Pioneer Program
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default About;
