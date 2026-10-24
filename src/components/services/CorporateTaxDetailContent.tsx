import React from 'react';
import { ServiceDetailContent } from './ServiceDetailContent';
import { SERVICE_DETAILS_MAP } from '../../data/servicesData';

interface CorporateTaxDetailContentProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const CorporateTaxDetailContent: React.FC<CorporateTaxDetailContentProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <ServiceDetailContent
      serviceConfig={SERVICE_DETAILS_MAP['corporate-tax']}
      onNavigate={onNavigate}
      onOpenConsultation={onOpenConsultation}
    />
  );
};
