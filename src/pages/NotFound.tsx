import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from '@/components/SEO';
import QuantumHeader from '@/components/QuantumHeader';
import QuantumFooter from '@/components/QuantumFooter';
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Page Not Found | Quantum Mosaic"
        description="This page doesn’t exist. Return to Quantum Mosaic’s homepage to explore governed execution."
        canonical="https://www.quantummosaic.com/not-found" 
      />
      <QuantumHeader />
      <main className="pt-24 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-accent">404</h1>
          <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
          <Link to="/" className="text-primary underline hover:opacity-90">
            Return to Home
          </Link>
        </div>
      </main>
      <QuantumFooter />
    </div>
  );
};

export default NotFound;
