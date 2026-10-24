import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { TAILORED_SERVICES, ServiceItem } from '../../data/servicesData';

interface PrecisionAccordionProps {
  onOpenConsultation: (serviceName?: string) => void;
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const PrecisionAccordion: React.FC<PrecisionAccordionProps> = ({
  onOpenConsultation,
  onSelectServiceForInquiry,
}) => {
  // Initially expand panel 02 ("technology-upgrade") matching Image 2 screenshot exactly
  const [activeId, setActiveId] = useState<string>('technology-upgrade');

  const handleAction = (item: ServiceItem) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(item.title);
      // Smooth scroll to inquiry form
      const el = document.getElementById('service-inquiry');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onOpenConsultation(item.title);
  };

  return (
    <section className="relative w-full bg-[#f4f5f5] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Precision Tailored Services
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            Commodo augue arcu dignissim imperdiet mollis. Eros lobortis nulla molestie.
          </p>
        </div>

        {/* Desktop & Tablet: Horizontal Interactive Accordion (5 Tall Panels) */}
        <div className="hidden md:flex items-stretch gap-4 lg:gap-6 min-h-[580px] lg:min-h-[620px] transition-all duration-500">
          {TAILORED_SERVICES.map((item) => {
            const isActive = activeId === item.id;

            if (isActive) {
              return (
                <div
                  key={item.id}
                  className="flex-[3.8] taxa-card-gradient text-[var(--taxa-accent-text-dark)] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between shadow-[0_16px_40px_var(--taxa-accent-glow)] transition-all duration-500 ease-in-out cursor-default relative overflow-hidden"
                >
                  {/* Top: Number Badge & Title */}
                  <div>
                    <div className="w-11 h-11 rounded-full border border-neutral-900/30 flex items-center justify-center text-xs font-bold text-neutral-900 mb-6 bg-white/20 backdrop-blur-xs">
                      {item.number}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 tracking-tight mb-6">
                      {item.verticalTitle}
                    </h3>

                    {/* High-Resolution Professional Image */}
                    <div className="w-full h-56 lg:h-64 rounded-2xl overflow-hidden shadow-md bg-neutral-900/10 mb-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-neutral-800 text-sm sm:text-[15px] leading-relaxed max-w-xl font-medium">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Bottom: Pill CTA Button "Know More →" */}
                  <div className="pt-6">
                    <button
                      onClick={() => handleAction(item)}
                      className="bg-white hover:bg-neutral-900 text-neutral-900 hover:text-white px-7 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2.5 transition-all shadow-sm hover:shadow-md cursor-pointer group"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            }

            // Inactive Tall Vertical Panel
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                aria-label={`Expand ${item.title}`}
                className="flex-1 bg-white hover:bg-neutral-50 border border-neutral-200/80 rounded-[32px] p-6 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-all duration-500 ease-in-out cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)]"
              >
                {/* Top Number Badge in Soft Lime */}
                <div className="w-11 h-11 rounded-full taxa-card-gradient text-[var(--taxa-accent-text-dark)] flex items-center justify-center text-xs font-bold shadow-xs group-hover:scale-110 transition-transform">
                  {item.number}
                </div>

                {/* Rotated Vertical Title matching Reference Screenshot */}
                <div className="my-auto py-8">
                  <span
                    className="text-lg lg:text-xl font-bold tracking-tight text-neutral-900 whitespace-nowrap block"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {item.verticalTitle}
                  </span>
                </div>

                {/* Bottom subtle spacer */}
                <div className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-[var(--taxa-accent)] transition-colors" />
              </button>
            );
          })}
        </div>

        {/* Mobile: Vertical Responsive Accordion */}
        <div className="md:hidden flex flex-col gap-4">
          {TAILORED_SERVICES.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'taxa-card-gradient text-[var(--taxa-accent-text-dark)] p-6 shadow-md'
                    : 'bg-white border border-neutral-200 p-5 shadow-xs'
                }`}
              >
                <button
                  onClick={() => setActiveId(isActive ? '' : item.id)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${
                        isActive
                          ? 'border border-neutral-900/30 text-neutral-900'
                          : 'taxa-card-gradient text-[var(--taxa-accent-text-dark)]'
                      }`}
                    >
                      {item.number}
                    </div>
                    <span className="font-bold text-base text-neutral-900">
                      {item.verticalTitle}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-neutral-800">
                    {isActive ? '−' : '+'}
                  </span>
                </button>

                {isActive && (
                  <div className="mt-5 pt-4 border-t border-neutral-900/10 animate-in fade-in duration-300">
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 shadow-xs">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-neutral-800 text-sm font-medium mb-4">
                      {item.shortDesc}
                    </p>
                    <button
                      onClick={() => handleAction(item)}
                      className="w-full bg-white text-neutral-900 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
