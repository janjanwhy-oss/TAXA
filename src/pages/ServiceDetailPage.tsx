import React, { useState } from 'react';
import { ServiceDetailHero } from '../components/services/ServiceDetailHero';
import { ServiceDetailContent } from '../components/services/ServiceDetailContent';
import { FooterSection } from '../components/FooterSection';
import { ConsultationModal } from '../components/ConsultationModal';
import { SearchModal } from '../components/SearchModal';
import { QuickToolsModal } from '../components/QuickToolsModal';
import { SERVICE_DETAILS_MAP, ServiceDetailConfig } from '../data/servicesData';

interface ServiceDetailPageProps {
  serviceKey: string;
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceKey,
  onNavigateHome,
  onNavigateServices,
  onNavigate,
}) => {
  const config: ServiceDetailConfig =
    SERVICE_DETAILS_MAP[serviceKey] || SERVICE_DETAILS_MAP['corporate-tax'];

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(config.name);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuickToolsOpen, setIsQuickToolsOpen] = useState(false);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName || config.name);
    setIsConsultationOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0d120f] text-white overflow-x-hidden selection:bg-[#8ef78b] selection:text-black">
      {/* 1. Dark Service Detail Hero matching Reference Image 1 */}
      <ServiceDetailHero
        title={config.heroTitle}
        currentPath={config.slug}
        onNavigateHome={onNavigateHome}
        onNavigateServices={onNavigateServices}
        onNavigate={onNavigate}
        onOpenConsultation={handleOpenConsultation}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuickTools={() => setIsQuickToolsOpen(true)}
      />

      {/* 2. Main Content & Sidebar Layout matching Reference Images 2, 3, 4, 5 */}
      <ServiceDetailContent
        serviceConfig={config}
        onNavigate={onNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* 3. Reused Shared Footer matching Reference Image 6 */}
      <FooterSection
        onOpenConsultation={handleOpenConsultation}
        onNavigateHome={onNavigateHome}
        onNavigateServices={onNavigateServices}
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
