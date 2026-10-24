import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProfessionalGuidanceSectionProps {
  onOpenConsultation?: (service?: string) => void;
}

const easeCurve = [0.22, 1, 0.36, 1] as const;

interface GuidancePanelItem {
  id: string;
  number: string;
  title: string;
  description: string;
  buttonText: string;
  consultationKey: string;
}

const GUIDANCE_PANELS: GuidancePanelItem[] = [
  {
    id: '01',
    number: '01',
    title: 'Corporate Tax Strategy',
    description:
      'Navigate UAE corporate tax with a structured approach to registration, planning, documentation, and compliance. We help businesses understand their obligations and make informed tax decisions.',
    buttonText: 'Explore Tax Services',
    consultationKey: 'Corporate Tax Strategy & Filing',
  },
  {
    id: '02',
    number: '02',
    title: 'Accounting Systems',
    description:
      'Build a stronger financial foundation with organized bookkeeping, reliable reporting, and modern accounting workflows. Gain clearer visibility into your business finances.',
    buttonText: 'Explore Accounting',
    consultationKey: 'Bookkeeping & Accounting (IFRS)',
  },
  {
    id: '03',
    number: '03',
    title: 'Financial Advisory',
    description:
      'Turn financial information into practical business decisions. Our advisory support helps business owners understand performance, manage cash flow, and plan their next steps.',
    buttonText: 'Explore Advisory',
    consultationKey: 'Free Zone vs Mainland Advisory',
  },
  {
    id: '04',
    number: '04',
    title: 'Risk & Compliance',
    description:
      'Stay prepared for UAE regulatory requirements with organized records, compliance reviews, and practical guidance covering corporate tax, VAT, and financial reporting.',
    buttonText: 'Explore Compliance',
    consultationKey: 'VAT Health Check & Compliance',
  },
  {
    id: '05',
    number: '05',
    title: 'Business Optimization',
    description:
      'Improve financial processes, reporting efficiency, and business visibility through structured systems and practical operational advisory.',
    buttonText: 'Explore Business Advisory',
    consultationKey: 'Free Zone vs Mainland Advisory',
  },
];

export const ProfessionalGuidanceSection: React.FC<ProfessionalGuidanceSectionProps> = ({
  onOpenConsultation,
}) => {
  // Initially Panel 01 is expanded; clicking another panel expands it
  const [activeId, setActiveId] = useState<string>('01');

  const handleSelectPanel = (id: string) => {
    if (id !== activeId) {
      setActiveId(id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelectPanel(id);
    }
  };

  return (
    <section
      id="professional-guidance"
      className="relative w-full bg-[#f4f5f4] text-[#0c120e] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Centered Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: easeCurve }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12"
        >
          {/* Decorative Dot-and-Line Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#0c120e]">
            <div className="flex items-center" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0c120e]" />
              <span className="w-3.5 h-[1.5px] bg-[#0c120e]" />
            </div>
            <span>Professional Guidance</span>
            <div className="flex items-center" aria-hidden="true">
              <span className="w-3.5 h-[1.5px] bg-[#0c120e]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0c120e]" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0c120e] tracking-[-0.025em] leading-[1.12]">
            Precision Tailored Services
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base text-neutral-500 font-normal max-w-2xl mx-auto leading-relaxed">
            Practical tax, accounting, and financial guidance tailored to the needs of businesses operating across the UAE.
          </p>
        </motion.div>

        {/* DESKTOP & TABLET HORIZONTAL COMPACT FIVE-PANEL ACCORDION (md and up) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeCurve }}
          className="hidden md:flex items-stretch gap-3.5 lg:gap-5 w-full h-[340px] lg:h-[365px]"
          role="region"
          aria-label="Professional Guidance Services Accordion"
        >
          {GUIDANCE_PANELS.map((panel) => {
            const isActive = activeId === panel.id;

            return (
              <div
                key={panel.id}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`${panel.number} ${panel.title}`}
                onClick={() => handleSelectPanel(panel.id)}
                onKeyDown={(e) => handleKeyDown(e, panel.id)}
                style={{
                  flex: isActive ? '4 1 0%' : '1 1 0%',
                  transition:
                    'flex 450ms cubic-bezier(0.22, 1, 0.36, 1), background-color 450ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 450ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                className={`relative h-full rounded-[22px] sm:rounded-[24px] overflow-hidden select-none motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c120e] ${
                  isActive
                    ? 'shadow-[0_16px_40px_rgba(126,236,148,0.22)] cursor-default'
                    : 'bg-white hover:bg-neutral-50/90 shadow-[0_6px_22px_rgba(12,18,14,0.03)] cursor-pointer'
                }`}
              >
                {/* Theme Gradient Layer (Fades in smoothly on active panel) */}
                <div
                  className="absolute inset-0 pointer-events-none taxa-card-gradient motion-reduce:transition-none"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 450ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  aria-hidden="true"
                />

                {/* Top Circular Number Badge */}
                <div
                  className="absolute top-6 lg:top-7 z-20 motion-reduce:transition-none"
                  style={{
                    left: isActive ? '1.75rem' : '50%',
                    transform: isActive ? 'translateX(0%)' : 'translateX(-50%)',
                    transition:
                      'left 450ms cubic-bezier(0.22, 1, 0.36, 1), transform 450ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  <div
                    className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-xs lg:text-sm font-semibold text-[var(--taxa-accent-text-dark)] motion-reduce:transition-none ${
                      isActive
                        ? 'border border-[var(--taxa-accent-text-dark)]/75 bg-transparent'
                        : 'taxa-card-gradient border border-transparent shadow-xs'
                    }`}
                    style={{
                      transition:
                        'background 350ms cubic-bezier(0.22, 1, 0.36, 1), border-color 350ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {panel.number}
                  </div>
                </div>

                {/* COLLAPSED STATE: Vertically Rotated Title centered naturally */}
                <div
                  className="absolute inset-x-0 bottom-6 top-20 lg:top-22 z-10 flex items-center justify-center pointer-events-none motion-reduce:transition-none"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transform: isActive ? 'translateY(8px)' : 'translateY(0px)',
                    transition: isActive
                      ? 'opacity 180ms cubic-bezier(0.22, 1, 0.36, 1), transform 180ms cubic-bezier(0.22, 1, 0.36, 1)'
                      : 'opacity 300ms cubic-bezier(0.22, 1, 0.36, 1) 150ms, transform 300ms cubic-bezier(0.22, 1, 0.36, 1) 150ms',
                  }}
                  aria-hidden={isActive}
                >
                  <span className="[writing-mode:vertical-rl] rotate-180 text-lg lg:text-[21px] font-bold text-[#0c120e] tracking-tight whitespace-nowrap">
                    {panel.title}
                  </span>
                </div>

                {/* EXPANDED STATE: Clean Text-Only Content (Heading, Description, White CTA) */}
                <div
                  className="relative z-10 h-full w-full max-w-[520px] pt-[4.75rem] lg:pt-[5.25rem] pb-6 lg:pb-7 px-7 lg:px-9 flex flex-col justify-between motion-reduce:transition-none"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0px)' : 'translateY(8px)',
                    transition: isActive
                      ? 'opacity 300ms cubic-bezier(0.22, 1, 0.36, 1) 150ms, transform 300ms cubic-bezier(0.22, 1, 0.36, 1) 150ms'
                      : 'opacity 150ms cubic-bezier(0.22, 1, 0.36, 1), transform 150ms cubic-bezier(0.22, 1, 0.36, 1)',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  aria-hidden={!isActive}
                >
                  {/* Service Heading and Balanced Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl lg:text-[28px] font-bold text-[var(--taxa-accent-text-dark)] tracking-tight leading-snug">
                      {panel.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-[14px] text-[var(--taxa-accent-text-dark)]/90 font-normal leading-relaxed max-w-lg">
                      {panel.description}
                    </p>
                  </div>

                  {/* White Rounded CTA Button with Black Arrow */}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultation?.(panel.consultationKey);
                      }}
                      className="group inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 text-[#0c120e] font-semibold text-xs lg:text-sm px-5 lg:px-6 py-3 rounded-xl shadow-[0_4px_16px_rgba(12,18,14,0.06)] transition-all duration-200 active:scale-[0.98] cursor-pointer"
                    >
                      <span>{panel.buttonText}</span>
                      <ArrowRight className="w-4 h-4 text-[#0c120e] group-hover:translate-x-1 transition-transform duration-200 stroke-[2.2]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* MOBILE VERTICAL COMPACT ACCORDION (below md) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeCurve }}
          className="md:hidden flex flex-col gap-3 w-full"
        >
          {GUIDANCE_PANELS.map((panel) => {
            const isActive = activeId === panel.id;

            return (
              <div
                key={panel.id}
                className={`w-full rounded-[20px] overflow-hidden transition-all duration-400 motion-reduce:transition-none ${
                  isActive
                    ? 'taxa-card-gradient shadow-[0_12px_30px_var(--taxa-glow-soft)] text-[var(--taxa-accent-text-dark)]'
                    : 'bg-white shadow-[0_4px_16px_rgba(12,18,14,0.04)]'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => handleSelectPanel(panel.id)}
                  className="w-full p-4 sm:p-5 flex items-center gap-3.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c120e] cursor-pointer"
                >
                  <div
                    className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold text-[var(--taxa-accent-text-dark)] ${
                      isActive
                        ? 'border border-[var(--taxa-accent-text-dark)]/75 bg-transparent'
                        : 'taxa-card-gradient'
                    }`}
                  >
                    {panel.number}
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold tracking-tight ${isActive ? 'text-[var(--taxa-accent-text-dark)]' : 'text-[#0c120e]'}`}>
                    {panel.title}
                  </h3>
                </button>

                <div
                  className="grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                  style={{
                    gridTemplateRows: isActive ? '1fr' : '0fr',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0 space-y-3.5">
                      <p className="text-xs sm:text-sm text-[var(--taxa-accent-text-dark)]/90 leading-relaxed">
                        {panel.description}
                      </p>
                      <div>
                        <button
                          type="button"
                          onClick={() => onOpenConsultation?.(panel.consultationKey)}
                          className="inline-flex items-center gap-2 bg-white text-[#0c120e] font-semibold text-xs px-4 py-2.5 rounded-xl shadow-xs hover:bg-neutral-50 active:scale-[0.98] transition-all cursor-pointer"
                        >
                          <span>{panel.buttonText}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#0c120e]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
