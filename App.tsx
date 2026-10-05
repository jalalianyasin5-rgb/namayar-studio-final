/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { PricingSection } from './components/sections/PricingSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { AboutStudioSection } from './components/sections/AboutStudioSection';
import { RequestTeaserCTA } from './components/sections/RequestTeaserCTA';
import { TeaserLightboxModal } from './components/modals/TeaserLightboxModal';
import { PricingPlanItem, TeaserPortfolioItem } from './types/studio';

const SECTION_IDS = ['hero', 'portfolio', 'services', 'pricing', 'process', 'about', 'request-cta'];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedTeaserModal, setSelectedTeaserModal] = useState<TeaserPortfolioItem | null>(null);
  const [selectedContext, setSelectedContext] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRequestWithContext = (contextLabel: string) => {
    setSelectedTeaserModal(null);
    setSelectedContext(contextLabel);
    scrollToSection('request-cta');
  };

  const handleSelectPlan = (plan: PricingPlanItem) => {
    setSelectedContext(`${plan.planLabel} — ${plan.title} (${plan.price} ${plan.currency})`);
    scrollToSection('request-cta');
  };

  return (
    <ThemeProvider>
      <div
        dir="rtl"
        className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#161618] dark:bg-[#08080A] dark:text-[#F4F1EA] transition-colors duration-500 overflow-x-hidden"
      >
        {/* Sticky / Floating 2.5D Header */}
        <Header activeSection={activeSection} onNavigate={scrollToSection} />

        {/* Main Studio Flow */}
        <main className="flex-1">
          {/* 1. Mobile-First Cinematic 2.5D Hero */}
          <HeroSection
            onOpenTeaserModal={(teaser) => setSelectedTeaserModal(teaser)}
            onNavigate={scrollToSection}
          />

          {/* 2. Featured Video Portfolio */}
          <PortfolioSection
            onOpenTeaserModal={(teaser) => setSelectedTeaserModal(teaser)}
            onRequestSimilar={handleRequestWithContext}
          />

          {/* 3. Multi-Category Creative AI Services */}
          <ServicesSection onSelectServiceForBrief={handleRequestWithContext} />

          {/* 4. Premium Minimal Pricing Section */}
          <PricingSection
            onSelectPlan={handleSelectPlan}
            onNavigatePortfolio={() => scrollToSection('portfolio')}
          />

          {/* 5. 6-Stage Animated Creative Process */}
          <ProcessSection onNavigate={scrollToSection} />

          {/* 6. About Namayar AI Creative Studio */}
          <AboutStudioSection />

          {/* 7. Minimal Luxury CTA Section (Order Form Removed) */}
          <RequestTeaserCTA
            selectedContext={selectedContext}
            onClearContext={() => setSelectedContext(undefined)}
            onNavigate={scrollToSection}
          />
        </main>

        {/* Minimal Copyright Footer */}
        <Footer />

        {/* Interactive Fullscreen Video Teaser Lightbox */}
        <TeaserLightboxModal
          teaser={selectedTeaserModal}
          onClose={() => setSelectedTeaserModal(null)}
          onOrderSimilar={handleRequestWithContext}
        />
      </div>
    </ThemeProvider>
  );
}
