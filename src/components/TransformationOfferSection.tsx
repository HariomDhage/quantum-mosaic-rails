import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, User, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from './ContactForm';
import employeeIcon from '@/assets/digitize-employee-icon.jpg';
import departmentIcon from '@/assets/digitize-department-icon.jpg';
import enterpriseIcon from '@/assets/digitize-enterprise-icon.jpg';

const TransformationOfferSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const transformations = [
    {
      id: 1,
      title: "Digitize an Employee",
      icon: employeeIcon,
      subtitle: "Fill Critical Roles Instantly",
      shortDesc: "Turn your top performer's decision logic into 24/7 execution.",
      fullDesc: "Fill critical high-value roles instantly — not with generic automation, but with judgment corridors that capture your top performer's decision logic and execute it flawlessly, 24/7.",
      cta: "See Example Role"
    },
    {
      id: 2,
      title: "Digitize a Department", 
      icon: departmentIcon,
      subtitle: "Coordinate Cross-Functional Teams",
      shortDesc: "Layered approvals, conditional workflows, embedded policy logic.",
      fullDesc: "Coordinate cross-functional teams through layered approvals, conditional workflows, and embedded policy logic — ensuring every action is timely, compliant, and strategically aligned.",
      cta: "See Example Department"
    },
    {
      id: 3,
      title: "Digitize the Enterprise",
      icon: enterpriseIcon,
      subtitle: "Institutionalize Best Practices",
      shortDesc: "Self-improving governance systems that learn and adapt.",
      fullDesc: "Institutionalize your best practices and strategic playbooks into self-improving governance systems that learn from every execution and adapt in real time.",
      cta: "See Enterprise Transformation"
    }
  ];

  const handleCardClick = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleCTA = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Start Anywhere. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                {" "}Expand Everywhere.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose your transformation path. Each unlocks exponential value.
            </p>
          </div>

          {/* Transformation Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transformations.map((item) => (
              <Card 
                key={item.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  expandedCard === item.id 
                    ? 'border-emerald-500 shadow-lg' 
                    : 'border-slate-200 hover:border-emerald-300'
                }`}
                onClick={() => handleCardClick(item.id)}
              >
                <CardContent className="p-8">
                  {/* Visual Icon */}
                  <div className="mb-6 relative overflow-hidden rounded-lg">
                    <img 
                      src={item.icon} 
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg font-semibold text-emerald-600 mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-slate-600 mb-6">
                      {expandedCard === item.id ? item.fullDesc : item.shortDesc}
                    </p>

                    {/* CTA Button */}
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCTA();
                      }}
                      variant="outline"
                      className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
                    >
                      {item.cta}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default TransformationOfferSection;