import React from "react";

const faqs = [
  {
    q: "What is Quantum Mosaic?",
    a: "Quantum Mosaic encodes enterprise expertise into a scalable, governed system of self‑improving decisions. We turn policies into executable logic with real‑time auditability."
  },
  {
    q: "How is Quantum Mosaic different from RPA or traditional workflow tools?",
    a: "RPA automates clicks and workflows route tasks. Quantum Mosaic enforces governed decisions—our Corridors codify rules; our Rails execute and block non‑compliant actions automatically."
  },
  {
    q: "What are Corridors and Rails?",
    a: "Corridors are human‑readable rule sets that codify your policies. Rails are the enforcement engine that runs those rules, logs decisions, and creates an immutable audit trail."
  },
  {
    q: "Who is Quantum Mosaic for?",
    a: "Operators who own execution risk: COOs, CFOs, GPs, Heads of Investment Ops, Risk/Compliance leads at funds and complex enterprises."
  },
  {
    q: "How does Quantum Mosaic improve compliance and audit readiness?",
    a: "Every decision is validated against Corridors, non‑compliant actions are blocked, and Rails generate real‑time, line‑item audit trails with clear evidence."
  },
  {
    q: "Can Quantum Mosaic integrate with our existing stack?",
    a: "Yes. We connect to source systems (CRM, OMS, fund accounting, data warehouses) and orchestrate governed actions across them."
  },
  {
    q: "How is data secured?",
    a: "We practice least‑privilege access, encrypt data in transit and at rest, and offer tenant‑level isolation. Logs are tamper‑evident and time‑stamped."
  },
  {
    q: "How fast can we implement?",
    a: "Most teams start with 1–2 high‑value Corridors in 2–6 weeks, then expand. We provide accelerators for investment lifecycle, approvals, and reporting."
  },
  {
    q: "Does this replace my team?",
    a: "No. It augments teams by preventing errors, standardizing decisions, and removing rework—freeing experts to focus on analysis and strategy."
  },
  {
    q: "How does Quantum Mosaic support regulators and stakeholders?",
    a: "We provide clear, exportable records of what happened, why it was allowed, and who approved it—mapped to your policies and controls."
  }
];

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  } as const;

  return (
    <section aria-labelledby="faq" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h2 id="faq" className="text-3xl sm:text-4xl font-bold">
            FAQs: Enterprise AI Governance & Execution
          </h2>
          <p className="mt-2 text-muted-foreground">
            Clear answers for operators and compliance leaders evaluating governed AI execution.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <details key={i} className="group rounded-lg border p-4">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <div className="mt-2 text-muted-foreground">{item.a}</div>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
};

export default FAQSection;
