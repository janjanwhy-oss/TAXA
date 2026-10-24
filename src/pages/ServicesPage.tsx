import React, { useState } from 'react';
import { ServicesHero } from '../components/services/ServicesHero';
import { PrecisionAccordion } from '../components/services/PrecisionAccordion';
import { ServicesCarousel } from '../components/services/ServicesCarousel';
import { ServiceInquirySection } from '../components/services/ServiceInquirySection';
import { FooterSection } from '../components/FooterSection';
import { ConsultationModal } from '../components/ConsultationModal';
import { SearchModal } from '../components/SearchModal';
import { QuickToolsModal } from '../components/QuickToolsModal';

interface ServicesPageProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onNavigate,
}) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuickToolsOpen, setIsQuickToolsOpen] = useState(false);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0d120f] text-white overflow-x-hidden selection:bg-[#8ef78b] selection:text-black">
      {/* 1. Services Hero (Image 1 reference) */}
      <ServicesHero
        onNavigateHome={onNavigateHome}
        onNavigate={onNavigate}
        onOpenConsultation={handleOpenConsultation}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuickTools={() => setIsQuickToolsOpen(true)}
      />

      {/* 2. Precision Tailored Services Accordion (Image 2 reference) */}
      <PrecisionAccordion
        onOpenConsultation={handleOpenConsultation}
        onSelectServiceForInquiry={handleSelectServiceForInquiry}
      />

      {/* 3. Financial Insight Carousel (Image 3 reference) */}
      <ServicesCarousel onOpenConsultation={handleOpenConsultation} />

      {/* 4. Contact / Service Inquiry Section (Image 4 reference) */}
      <ServiceInquirySection initialService={selectedService || 'Corporate Tax Compliance'} />

      {/* 5. Minimalist Footer (Image 5 reference) */}
      <FooterSection
        onOpenConsultation={handleOpenConsultation}
        onNavigateHome={onNavigateHome}
        onNavigateServices={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigate={onNavigate}
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
    </div>
  );
};
