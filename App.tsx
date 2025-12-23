import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MethodSection from './components/MethodSection';
import OutcomesSection from './components/OutcomesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="text-slate-800 antialiased bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 space-y-12 pb-20">
        <MethodSection />
        <OutcomesSection />
        <CaseStudiesSection />
        <PricingSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;