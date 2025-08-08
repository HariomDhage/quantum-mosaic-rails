
import React from 'react';
import QuantumHeader from '@/components/QuantumHeader';
import QuantumFooter from '@/components/QuantumFooter';
import SEO from '@/components/SEO';
const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Quantum Mosaic Terms of Service"
        description="Terms governing your use of Quantum Mosaic’s platform, services, and governed execution capabilities."
        canonical="https://www.quantummosaic.com/terms" 
      />
      <QuantumHeader />
      <main className="pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-accent mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Last updated:</strong> January 1, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using Quantum Mosaic's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily use Quantum Mosaic's services for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The materials on Quantum Mosaic's platform are provided on an 'as is' basis. Quantum Mosaic makes no warranties, expressed or implied.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">4. Limitations</h2>
              <p className="text-muted-foreground mb-4">
                In no event shall Quantum Mosaic or its suppliers be liable for any damages arising out of the use or inability to use the materials on our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-accent mb-4">5. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at hello@quantummosaic.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <QuantumFooter />
    </div>
  );
};

export default Terms;
