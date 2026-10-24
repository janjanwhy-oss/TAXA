import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface WorkProcessSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'We begin by understanding your business, financial needs, and regulatory priorities.',
    image: '/assets/guidance_panel_1.jpg',
    icon: (
      <svg
        className="w-9 h-9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Documentation',
    description:
      'We review the relevant records, business information, and supporting documents.',
    image: '/assets/guidance_panel_2.jpg',
    icon: (
      <svg
        className="w-9 h-9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Verification',
    description:
      'We assess information, confirm requirements, and identify the appropriate next steps.',
    image: '/assets/guidance_panel_3.jpg',
    icon: (
      <svg
        className="w-9 h-9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Implementation',
    description:
      'We help put the agreed financial, tax, or advisory approach into practice.',
    image: '/assets/guidance_panel_4.jpg',
    icon: (
      <svg
        className="w-9 h-9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
        <path d="M3 4l6 6 4-4 8 8" />
      </svg>
    ),
  },
];

export const WorkProcessSection: React.FC<WorkProcessSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      id="work-process"
      className="relative w-full bg-[#F4F5F5] text-[#0c120e] py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden select-none border-t border-neutral-200/50"
      aria-label="Our Work Process"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Top Heading Area */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20"
        >
          <div className="max-w-xl">
            {/* Decorative Dot-and-Line Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c120e]" />
                <span className="w-6 h-[1.5px] bg-[#0c120e]" />
              </div>
              <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.08em] uppercase text-[#0c120e] px-1">
                WORK PROCESS
              </span>
              <div className="flex items-center">
                <span className="w-6 h-[1.5px] bg-[#0c120e]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c120e]" />
              </div>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-0.03em] leading-[1.08] text-[#0c120e]">
              Execution With
              <br />
              Clear Steps.
            </h2>
          </div>

          {/* Upper-Right CTA Button */}
          <div className="md:pb-1">
            <button
              type="button"
              onClick={() => onOpenConsultation('Work Process')}
              className="group inline-flex items-center gap-2.5 taxa-btn-primary font-semibold text-[14px] sm:text-[15px] px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[var(--taxa-accent-text-dark)]" />
            </button>
          </div>
        </motion.div>

        {/* 4 Steps Horizontal Row with Dashed Connector */}
        <div className="relative">
          {/* Dashed connector line passing behind tiles (Desktop only) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: easeCurve }}
            style={{ originX: 0 }}
            className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-0 border-b-2 border-dashed border-[var(--taxa-accent)]/60 pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Small circular nodes between steps on the connector line */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.25, ease: easeCurve }}
            className="hidden lg:block absolute top-[72px] -translate-y-1/2 left-[25%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[var(--taxa-accent)] ring-4 ring-[var(--taxa-accent)]/25 pointer-events-none z-0"
            aria-hidden="true"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.45, ease: easeCurve }}
            className="hidden lg:block absolute top-[72px] -translate-y-1/2 left-[50%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[var(--taxa-accent)] ring-4 ring-[var(--taxa-accent)]/25 pointer-events-none z-0"
            aria-hidden="true"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.65, ease: easeCurve }}
            className="hidden lg:block absolute top-[72px] -translate-y-1/2 left-[75%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[var(--taxa-accent)] ring-4 ring-[var(--taxa-accent)]/25 pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: easeCurve }}
                className="flex flex-col items-center group focus-within:outline-none"
              >
                {/* Rounded Icon Tile with Hover Photo & Overlay Reveal */}
                <div
                  tabIndex={0}
                  className="w-36 h-36 rounded-[28px] bg-white border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] relative flex items-center justify-center overflow-hidden cursor-pointer group-hover:shadow-[0_8px_30px_var(--taxa-glow-soft)] transition-all duration-300 ease-out focus:ring-2 focus:ring-[var(--taxa-accent)] focus:outline-none"
                >
                  {/* Photograph reveals on hover with smooth zoom */}
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-108 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                  />

                  {/* Translucent overlay */}
                  <div
                    className="absolute inset-0 taxa-card-gradient opacity-0 group-hover:opacity-85 group-focus-within:opacity-85 transition-opacity duration-300 pointer-events-none mix-blend-multiply"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-[var(--taxa-blue-primary)]/30 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Centered Icon: Vibrant Blue by default, Solid Black on Hover */}
                  <div className="relative z-10 text-[var(--taxa-accent)] group-hover:text-neutral-950 group-focus-within:text-neutral-950 transition-colors duration-300 transform group-hover:scale-105">
                    {step.icon}
                  </div>

                  {/* Number Badge Overlapping the Bottom Border */}
                  <div className="absolute -bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <span className="inline-block taxa-card-gradient text-[var(--taxa-accent-text-dark)] font-bold text-xs tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Title & Description */}
                <div className="mt-8 text-center flex flex-col items-center">
                  <h3 className="text-lg sm:text-[19px] font-bold text-neutral-900 tracking-tight group-hover:text-[var(--taxa-accent)] transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed mt-2 max-w-[230px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Centered Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-sm sm:text-base text-neutral-600">
            Let&apos;s discuss your business needs.{' '}
            <button
              type="button"
              onClick={() => onOpenConsultation('Work Process Consultation')}
              className="font-semibold text-neutral-900 underline decoration-[var(--taxa-accent)] decoration-2 underline-offset-4 hover:text-[var(--taxa-accent)] hover:decoration-[var(--taxa-accent)] transition-colors cursor-pointer ml-1 inline-flex items-center gap-1"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 inline-block" />
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
