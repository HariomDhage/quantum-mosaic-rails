import React, { useState } from 'react';
import QuantumHeader from '@/components/QuantumHeader';
import QuantumFooter from '@/components/QuantumFooter';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Code, Eye, Shield, Brain, Target, Rocket } from 'lucide-react';
import SEO from '@/components/SEO';
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
      image: '/images/deepak-jha.png'
    },
    {
      name: 'Gunjan Karun',
      role: 'CTO',
      description: 'Gunjan leads our technology vision with deep expertise in event-driven architecture, policy engines, and AI/NLP. He holds three U.S. patents in related fields.',
      image: '/images/gunjan-karun.png'
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
      <SEO 
        title="About Quantum Mosaic | Mission, Team, Approach"
        description="Our mission: governed, self‑improving decisions for enterprises. Meet the team and the principles behind Corridors & Rails."
        canonical="https://www.quantummosaic.com/about" 
      />
      <div className="min-h-screen bg-background">
        <QuantumHeader />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-5xl mx-auto">
                <div className="mb-8 animate-scale-in">
                  <span className="inline-block bg-muted text-accent px-6 py-3 rounded-full text-sm font-medium border border-border">
                    🧠 About Quantum Mosaic™
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight font-sora animate-fade-in">
                  Building the World's First
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Execution Operating System
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-bounce-in">
                  The private capital market is one of the most powerful engines for growth in the world, yet it runs on invisible friction. At Quantum Mosaic, our mission is to replace that friction with <span className="text-accent font-semibold">programmable certainty</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Mission Deep Dive */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-slide-in-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-8 font-sora">
                    From Manual Chaos to Programmable Trust
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Critical decisions are managed by fragmented emails, static PDFs, and human memory, creating enormous operational and compliance risk.
                    </p>
                    <p>
                      We are building the <span className="text-accent font-semibold">programmable infrastructure</span> that allows institutions to codify their policies and enforce them automatically.
                    </p>
                    <p className="text-accent font-medium">
                      When execution is guaranteed, capital can move with confidence and speed.
                    </p>
                  </div>
                </div>
                
                <div className="animate-slide-in-right">
                  <div className="bg-muted/50 rounded-2xl p-8 border border-border">
                    <h3 className="text-xl font-semibold text-accent mb-6 font-sora">Our Vision</h3>
                    <div className="space-y-4">
                      {[
                        { icon: Brain, text: "Autonomous decision networks" },
                        { icon: Shield, text: "Guaranteed compliance at scale" },
                        { icon: Target, text: "Real-time policy enforcement" },
                        { icon: Rocket, text: "Exponential institutional growth" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                            <item.icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-6 font-sora">
                  The Team Building the Future
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Pioneers in autonomous intelligence, enterprise architecture, and institutional finance
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {teamMembers.map((member, index) => (
                  <div key={index} className="group bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-muted group-hover:border-primary transition-colors duration-300"
                      />
                      <div className="text-center sm:text-left flex-1">
                        <h3 className="text-2xl font-bold text-accent mb-2 font-sora group-hover:text-primary transition-colors">{member.name}</h3>
                        <p className="text-primary font-semibold mb-4 text-lg">{member.role}</p>
                        <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-accent font-sora">Guided by Industry Pioneers</h3>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-6 text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Quantum Mosaic is built with the strategic guidance of a world-class advisory board — including leaders from <span className="text-accent font-semibold">institutional investing</span>, <span className="text-accent font-semibold">AI infrastructure</span>, <span className="text-accent font-semibold">regulatory compliance</span>, and <span className="text-accent font-semibold">private capital markets</span>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our advisors bring deep domain expertise and real-world insight to help us navigate complexity, anticipate market needs, and build execution infrastructure that's not just visionary — but <span className="text-primary font-semibold">operationally sound and trusted by the industry</span>.
                  </p>
                  <div className="inline-flex items-center space-x-4 bg-muted rounded-full px-8 py-4 mt-6">
                    <span className="text-muted-foreground">From CIOs of multi-billion-dollar portfolios</span>
                    <span className="text-primary">→</span>
                    <span className="text-accent font-semibold">To AI architects and regulatory veterans</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-6 font-sora">
                  How We Think
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our core principles that guide every decision and line of code
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {philosophies.map((philosophy, index) => (
                  <div key={index} className="group bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <philosophy.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-accent text-center font-sora group-hover:text-primary transition-colors">{philosophy.title}</h3>
                    <p className="text-muted-foreground text-center leading-relaxed">{philosophy.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <div className="animate-scale-in">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-accent font-sora">
                  Ready to Build the Future?
                </h2>
                <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-muted-foreground leading-relaxed">
                  Join us in creating the infrastructure that will power the next generation of 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold"> autonomous enterprises</span>.
                </p>
                
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/30 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
                  onClick={handleJoinProgram}
                >
                  🚀 Join the XOS Pioneer Program
                  <div className="ml-3 group-hover:translate-x-1 transition-transform">→</div>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <QuantumFooter />
      </div>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default About;
