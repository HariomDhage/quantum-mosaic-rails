
import React from 'react';
import QuantumHeader from '@/components/QuantumHeader';
import QuantumFooter from '@/components/QuantumFooter';
import SEO from '@/components/SEO';
const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Quantum Mosaic Privacy Policy"
        description="How we collect, use, and protect your data, including encryption, access controls, and audit logging practices."
        canonical="https://www.quantummosaic.com/privacy" 
      />
      <QuantumHeader />
      
      <main className="pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-accent mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Last updated:</strong> January 1, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at hello@quantummosaic.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <QuantumFooter />
    </div>
  );
};

export default Privacy;
