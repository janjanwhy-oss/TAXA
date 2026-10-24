import React from 'react';
import { Navbar } from '../Navbar';

interface ServicesHeroProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
  onOpenConsultation: (service?: string) => void;
  onOpenSearch: () => void;
  onOpenQuickTools: () => void;
}

export const ServicesHero: React.FC<ServicesHeroProps> = ({
  onNavigateHome,
  onNavigate,
  onOpenConsultation,
  onOpenSearch,
  onOpenQuickTools,
}) => {
  // Generate multi-line curved wave paths matching the Bullish / Taxa visual reference
  const waveLines = Array.from({ length: 28 }, (_, i) => {
    const offset = i * 16;
    return {
      key: i,
      path: `M -150 ${180 + offset * 0.7} C 250 ${70 - offset * 0.3}, 650 ${310 + offset * 0.6}, 1050 ${160 - offset * 0.4} C 1450 ${80 + offset * 0.5}, 1800 ${320 + offset * 0.3}, 2150 ${190}`,
    };
  });

  return (
    <section className="relative w-full bg-[var(--taxa-dark-bg-1)] overflow-hidden rounded-b-[40px] sm:rounded-b-[56px] shadow-2xl z-20">
      {/* 1. Flowing Wave Lines Vector Art (Matching Screenshot) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35" aria-hidden="true">
        <svg
          className="w-full h-full object-cover min-w-[1200px]"
          viewBox="0 0 2000 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {waveLines.map((line) => (
            <path
              key={line.key}
              d={line.path}
              stroke="url(#services-hero-green-grad)"
              strokeWidth="1.1"
              strokeOpacity="0.45"
            />
          ))}
          <defs>
            <linearGradient id="services-hero-green-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--taxa-wave-stop1)" stopOpacity="0.1" />
              <stop offset="40%" stopColor="var(--taxa-wave-stop2)" stopOpacity="0.7" />
              <stop offset="70%" stopColor="var(--taxa-wave-stop3)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--taxa-wave-stop2)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. Soft Green Radial Glow Center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--taxa-accent)]/8 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Floating Glass Navbar */}
      <Navbar
        onOpenConsultation={onOpenConsultation}
        onOpenSearch={onOpenSearch}
        onOpenQuickTools={onOpenQuickTools}
        currentPath="/services"
        onNavigate={(path) => {
          if (path === '/') onNavigateHome();
          else if (onNavigate) onNavigate(path);
        }}
      />

      {/* 4. Hero Content Area: Title & Breadcrumb */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-24 sm:pt-28 sm:pb-32 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5 sm:mb-6">
          Service Listing
        </h1>

        {/* Breadcrumb matching reference: Home / Service Listing */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm sm:text-base font-medium">
          <button
            onClick={onNavigateHome}
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:underline"
          >
            Home
          </button>
          <span className="text-neutral-500 font-light select-none">/</span>
          <span className="text-[var(--taxa-accent)]">Service Listing</span>
        </nav>
      </div>
    </section>
  );
};
