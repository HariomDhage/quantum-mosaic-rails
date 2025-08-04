import React from 'react';
import { TrendingDown, Clock, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  const stats = [
    {
      icon: TrendingDown,
      percentage: 25,
      description: "of strategic decisions are suboptimal",
      color: "text-red-500"
    },
    {
      icon: Clock,
      percentage: 45,
      description: "take too long and miss market windows",
      color: "text-orange-500"
    },
    {
      icon: AlertTriangle,
      percentage: 70,
      description: "fail in execution",
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-6 font-sora">
            📉 Complexity Kills Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional decision-making systems create bottlenecks that compound at scale, 
            turning strategic advantages into operational liabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-slide-in-left group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`p-4 rounded-full bg-muted ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2 font-sora">
                  {stat.percentage}%
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decision Flow Breakdown Diagram */}
        <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
          <h3 className="text-2xl font-semibold text-accent mb-8 text-center font-sora">
            Where Decisions Break Down
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {['Strategy', 'Planning', 'Approval', 'Execution', 'Review'].map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg mb-2">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-accent">{step}</span>
                </div>
                {index < 4 && (
                  <div className="hidden md:block">
                    <div className="w-8 h-px bg-gradient-to-r from-primary to-secondary opacity-50"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Each handoff introduces <span className="text-accent font-semibold">delays</span>, 
              <span className="text-accent font-semibold"> miscommunication</span>, and 
              <span className="text-accent font-semibold"> drift from original intent</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;