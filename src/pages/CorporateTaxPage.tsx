import React from 'react';
import { ServiceDetailPage } from './ServiceDetailPage';

interface CorporateTaxPageProps {
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onNavigate: (path: string) => void;
}

export const CorporateTaxPage: React.FC<CorporateTaxPageProps> = (props) => {
  return <ServiceDetailPage serviceKey="corporate-tax" {...props} />;
};
