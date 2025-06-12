import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import OpportunitySection from './components/OpportunitySection';
import TargetAudienceSection from './components/TargetAudienceSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import ProofSection from './components/ProofSection';
import OriginStorySection from './components/OriginStorySection';
import ProductBreakdownSection from './components/ProductBreakdownSection';
import PricingSection from './components/PricingSection';
import FutureVisionSection from './components/FutureVisionSection';
import ConcernsSection from './components/ConcernsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const targetId = href?.substring(1);
        const targetElement = targetId ? document.getElementById(targetId) : null;
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <OpportunitySection />
        <TargetAudienceSection />
        <ValuePropositionSection />
        <ProofSection />
        <OriginStorySection />
        <ProductBreakdownSection />
        <PricingSection />
        <FutureVisionSection />
        <ConcernsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;