import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ContactForm from '@/components/ContactForm';
import {
  ShieldCheck,
  Settings2,
  Brain,
  Layers,
  Network,
  Gauge,
  LineChart,
  FileCode2,
} from 'lucide-react';

interface ShiftItem {
  title: string;
  short: string;
  detail: string;
  icon: React.ComponentType<any>;
}

const SHIFTS: ShiftItem[] = [
  {
    title: 'Projects → Platforms',
    short: 'Build reusable capability layers.',
    detail: 'Move from one-off initiatives to composable platforms that compound value across products and teams.',
    icon: Layers,
  },
  {
    title: 'Manual Decisions → Guardrails',
    short: 'Encode expertise into policy.',
    detail: 'Operationalize institutional knowledge as policy-as-code so every action respects constraints by default.',
    icon: ShieldCheck,
  },
  {
    title: 'Data Lakes → Decision Fabric',
    short: 'From storage to outcomes.',
    detail: 'Connect signals, models, and actions into closed loops that continuously learn and improve execution.',
    icon: Network,
  },
  {
    title: 'Dashboards → Orchestration',
    short: 'From monitoring to doing.',
    detail: 'Replace passive reporting with autonomous workflows that resolve issues and advance goals in real time.',
    icon: Settings2,
  },
  {
    title: 'Experts → Expert Systems',
    short: 'Scale judgment, not headcount.',
    detail: 'Capture domain heuristics and escalate only edge cases—freeing experts to focus on novel problems.',
    icon: Brain,
  },
  {
    title: 'Processes → Policies-as-Code',
    short: 'Deterministic compliance.',
    detail: 'Shift from doc-based SOPs to executable constraints that are testable, traceable, and auditable.',
    icon: FileCode2,
  },
  {
    title: 'After-the-fact → By-Design',
    short: 'Compliance embedded.',
    detail: 'Bake risk, regulation, and controls into every step of the lifecycle instead of bolting them on later.',
    icon: ShieldCheck,
  },
  {
    title: 'Silos → Composability',
    short: 'Shared primitives.',
    detail: 'Expose capabilities as APIs and reusable components to maximize reuse and minimize duplication.',
    icon: Layers,
  },
  {
    title: 'Linear Scale → Exponential Leverage',
    short: 'Outcomes per expert ↑',
    detail: 'Multiply impact using automation, memory, and reusable workflows instead of adding more people.',
    icon: Gauge,
  },
  {
    title: 'Insights → Execution',
    short: 'Close the last mile.',
    detail: 'Convert analysis into actions with autonomous agents that take safe, reversible steps toward targets.',
    icon: LineChart,
  },
];

const ParadigmShiftsSection: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The 10 Paradigm Shifts for Scaling Expertise into Market Advantage',
    itemListElement: SHIFTS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      description: s.detail,
    })),
  }), []);

  const Card = ({ item, index }: { item: ShiftItem; index: number }) => {
    const [flipped, setFlipped] = useState(false);
    const Icon = item.icon;
    return (
      <div
        className="group relative h-full w-full cursor-pointer select-none"
        onClick={() => setFlipped((f) => !f)}
        role="button"
        aria-label={`${item.title} card`}
      >
        <div
          className={
            'relative h-full min-h-48 rounded-[4px] border border-[hsl(var(--border))] bg-card p-4 shadow-sm transition-all duration-500 transform-gpu [perspective:1000px] hover:shadow-lg hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.35)]'
          }
        >
          <div
            className={`h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
              flipped ? '[transform:rotateY(180deg)]' : ''
            }`}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            {/* Front */}
            <div className="flex h-full w-full flex-col justify-between gap-3 [backface-visibility:hidden]">
              <div className="flex items-center gap-3 text-accent">
                <Icon aria-hidden size={22} />
                <h3 className="text-sm font-semibold text-accent">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.short}</p>
            </div>
            {/* Back */}
            <div className="absolute inset-0 flex h-full w-full flex-col justify-center rounded-[4px] bg-[hsl(var(--muted))] p-4 text-sm text-foreground shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <p>{item.detail}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="paradigm-shifts"
      aria-labelledby="paradigm-shifts-title"
      className="relative mx-auto w-full max-w-7xl px-4 py-16 md:py-20"
    >
      {/* Header with subtle gradient bar */}
      <header className="relative mb-8 md:mb-10">
        <div
          aria-hidden
          className="absolute -inset-x-4 -top-2 h-8 rounded-md opacity-20 blur-sm md:-inset-x-6"
          style={{ background: 'var(--gradient-primary)' }}
        />
        <h2
          id="paradigm-shifts-title"
          className="relative z-10 font-sans text-2xl font-extrabold leading-tight text-accent sm:text-3xl md:text-4xl"
        >
          The 10 Paradigm Shifts for Scaling Expertise into Market Advantage
        </h2>
        <p className="relative z-10 mt-3 max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-base">
          Quantum Mosaic™ reframes enterprise decision-making—turning institutional knowledge into a compounding execution advantage.
        </p>
      </header>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <Carousel opts={{ align: 'start' }}>
          <CarouselContent className="-ml-2">
            {SHIFTS.map((s, i) => (
              <CarouselItem key={s.title} className="pl-2 basis-[85%]">
                <Card item={s} index={i} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2" />
          <CarouselNext className="-right-2" />
        </Carousel>
      </div>

      {/* Grid on tablet/desktop */}
      <div className="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-4 xl:grid-cols-5">
        {SHIFTS.map((s, i) => (
          <div key={s.title} className="animate-fade-in" style={{ animationDelay: `${i * 70}ms` }}>
            <Card item={s} index={i} />
          </div>
        ))}
      </div>

      {/* Callout + CTA */}
      <div className="mt-12 overflow-hidden rounded-md bg-accent p-6 text-accent-foreground md:mt-16 md:p-10">
        <div className="mx-auto max-w-5xl">
          <p className="animate-slide-in-left text-center text-lg font-semibold leading-relaxed md:text-2xl">
            “The Ultimate Reframe: It’s not about doing more with what you have. It’s about doing everything with what you know.”
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] hover:shadow-[0_12px_30px_-8px_hsl(var(--primary)/0.45)]"
              onClick={() => setIsFormOpen(true)}
              aria-label="Request a Demo"
            >
              <span className="mr-1">🚀</span> Request a Demo
            </Button>
            <Button
              variant="outline"
              className="border-[hsl(var(--accent-foreground))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent-foreground))]/10"
              onClick={() => setIsFormOpen(true)}
              aria-label="Schedule a Discovery Call"
            >
              <span className="mr-1">📅</span> Schedule a Discovery Call
            </Button>
          </div>
        </div>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {isFormOpen && (
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </section>
  );
};

export default ParadigmShiftsSection;
