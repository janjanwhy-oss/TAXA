/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { ServiceHighlightsSection } from './components/ServiceHighlightsSection';
import { ProfessionalGuidanceSection } from './components/ProfessionalGuidanceSection';
import { AdvancedToolsSection } from './components/AdvancedToolsSection';
import { OurFeaturesSection } from './components/OurFeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OurTeamSection } from './components/OurTeamSection';
import { WorkProcessSection } from './components/WorkProcessSection';
import { FaqSection } from './components/FaqSection';
import { ContactConsultationSection } from './components/ContactConsultationSection';
import { FooterSection } from './components/FooterSection';
import { ConsultationModal } from './components/ConsultationModal';
import { SearchModal } from './components/SearchModal';
import { QuickToolsModal } from './components/QuickToolsModal';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuickToolsOpen, setIsQuickToolsOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsConsultationOpen(true);
  };

  // Route Handling: Service Detail Pages
  const cleanPath = currentPath.replace(/\/$/, '');
  const serviceDetailMatch = cleanPath.match(
    /^\/services\/(corporate-tax|vat|excise-tax|bookkeeping-accounting|auditing|business-advisory)$/
  );

  if (serviceDetailMatch) {
    const serviceKey = serviceDetailMatch[1];
    return (
      <ServiceDetailPage
        serviceKey={serviceKey}
        onNavigateHome={() => navigateTo('/')}
        onNavigateServices={() => navigateTo('/services')}
        onNavigate={navigateTo}
      />
    );
  }

  // Route: Services Listing Page
  if (cleanPath === '/services') {
    return <ServicesPage onNavigateHome={() => navigateTo('/')} onNavigate={navigateTo} />;
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[var(--taxa-dark-bg-1)] text-white select-none transition-colors duration-300">
      {/* SECTION 1: Full-Viewport Hero + Contained Glassmorphic Navbar */}
      <div className="relative min-h-screen h-screen w-full flex flex-col justify-between overflow-hidden bg-[var(--taxa-dark-bg-1)]">
        {/* 1. Full-screen Background Hero Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[var(--taxa-dark-bg-1)]">
          <img
            src="/assets/aistudio/texa_hero_image_cf043faf.webp"
            alt="Taxa Advisory Financial & Tax Consultant"
            width={1376}
            height={768}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />

          {/* 2. Subtle Left Scrim for Text Contrast while Preserving Background Image Detail */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[var(--taxa-dark-bg-1)]/80 via-[var(--taxa-dark-bg-1)]/45 to-transparent"
            aria-hidden="true"
          />

          {/* 3. Subtle Top & Bottom Atmospheric Vignette */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-[var(--taxa-dark-bg-1)]/65"
            aria-hidden="true"
          />
        </div>

        {/* 4. Contained Glassmorphic Navigation Bar */}
        <Navbar
          onOpenConsultation={handleOpenConsultation}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenQuickTools={() => setIsQuickToolsOpen(true)}
          currentPath={currentPath}
          onNavigate={navigateTo}
        />

        {/* 5. Hero Section Content (Left-Aligned, Right Breathing Space) */}
        <HeroSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 6. Quiet Minimal Bottom Micro-Indicator */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-4 pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 border-t border-white/5">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Taxa Advisory Ltd.</span>
            <span className="text-white/20">|</span>
            <span>DIFC Gate Precinct • Downtown Dubai</span>
          </div>
          <div className="flex items-center gap-4 mt-1 sm:mt-0">
            <span className="text-neutral-400">FTA Registered Tax Agency</span>
            <span className="text-white/20">|</span>
            <button
              onClick={() => handleOpenConsultation()}
              className="text-[var(--taxa-accent)] hover:underline cursor-pointer"
            >
              Inquire Online
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: Who We Are Section */}
      <WhoWeAreSection onOpenConsultation={handleOpenConsultation} />

      {/* SECTION 3: Service Highlights Section */}
      <ServiceHighlightsSection onOpenConsultation={handleOpenConsultation} />

      {/* SECTION 4: Professional Guidance Section */}
      <ProfessionalGuidanceSection onOpenConsultation={handleOpenConsultation} />

      {/* SECTION 5: Advanced Tools & Features Section */}
      <AdvancedToolsSection
        onOpenConsultation={handleOpenConsultation}
        onNavigateServices={() => navigateTo('/services')}
      />

      {/* SECTION 6: Our Features Section */}
      <OurFeaturesSection onOpenConsultation={handleOpenConsultation} />

      {/* SECTION 7: Client Testimonials Section */}
      <TestimonialsSection onOpenConsultation={handleOpenConsultation} />

      {/* SECTION 8: Our Team Section */}
      <OurTeamSection onOpenConsultation={handleOpenConsultation} />

      {/* SECTION 9: Our Work Process Section */}
      <WorkProcessSection onOpenConsultation={handleOpenConsultation} />

      {/* SECTION 10: Frequently Asked Questions (FAQ) Section */}
      <FaqSection onOpenConsultation={handleOpenConsultation} />

      {/* SECTION 11: Contact & Consultation Section */}
      <ContactConsultationSection onOpenConsultation={handleOpenConsultation} />

      {/* SECTION 12: Premium Minimalist Footer */}
      <FooterSection
        onOpenConsultation={handleOpenConsultation}
        onNavigateServices={() => navigateTo('/services')}
        onNavigateHome={() => navigateTo('/')}
        onNavigate={navigateTo}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={selectedService}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={(service) => handleOpenConsultation(service)}
      />

      <QuickToolsModal
        isOpen={isQuickToolsOpen}
        onClose={() => setIsQuickToolsOpen(false)}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </main>
  );
}
