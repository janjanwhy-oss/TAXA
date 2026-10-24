import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface AdvancedToolsSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
  onNavigateServices?: () => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface ToolTabItem {
  id: string;
  tabLabel: string;
  heading: string;
  description: string;
  benefits: [string, string, string];
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
}

const TOOL_TABS: ToolTabItem[] = [
  {
    id: 'tax-strategy',
    tabLabel: 'Tax Strategy',
    heading: 'Confident Tax Decisions, Backed by Expertise',
    description:
      'Navigate UAE corporate tax requirements with practical guidance that supports compliance, planning, and sound financial decisions.',
    benefits: [
      'Corporate tax planning and registration support',
      'Clear guidance on UAE tax obligations',
      'Structured documentation and compliance reviews',
    ],
    image: '/assets/aistudio/Advisor_consulting_client_in_office_20261024125002_66dd2cc8.webp',
    imageAlt: 'Senior tax advisor consulting client on UAE corporate tax strategy in modern Dubai office',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'accounting-systems',
    tabLabel: 'Accounting Systems',
    heading: 'Smarter Accounting for Growing Businesses',
    description:
      'Build a dependable financial foundation with organized bookkeeping, timely reporting, and efficient accounting processes.',
    benefits: [
      'Accurate bookkeeping and financial records',
      'Monthly reporting and account reconciliation',
      'Better visibility into business performance',
    ],
    image: '/assets/aistudio/Professionals_reviewing_financia__20261024125000_e441170e.webp',
    imageAlt: 'Financial professionals reviewing accounting systems and digital reports on laptop in UAE office',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1" />
        <path d="M12 6v2m0 8v2" />
      </svg>
    ),
  },
  {
    id: 'compliance-insights',
    tabLabel: 'Compliance Insights',
    heading: 'Stay Ahead With Clear Compliance Insights',
    description:
      'Keep your business prepared for UAE tax and reporting requirements through structured records, reviews, and proactive compliance support.',
    benefits: [
      'VAT registration and return preparation',
      'Compliance reviews and documentation',
      'Improved readiness for regulatory requirements',
    ],
    image: '/assets/aistudio/image_6b00096f.png',
    imageAlt: 'Corporate compliance team reviewing regulatory tax documentation and financial records in Dubai office',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    id: 'growth-planning',
    tabLabel: 'Growth Planning',
    heading: 'Financial Planning That Supports Growth',
    description:
      'Turn financial information into actionable plans that help business owners understand performance and prepare for future opportunities.',
    benefits: [
      'Financial performance assessment',
      'Cash flow and budgeting guidance',
      'Planning support for business expansion',
    ],
    image: '/assets/aistudio/Professionals_planning_business___20261024125004_ceabfa66.webp',
    imageAlt: 'Executive strategy team planning business growth and financial projections overlooking Dubai skyline',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3c.5 4.2 2.8 6.5 7 7-4.2.5-6.5 2.8-7 7-.5-4.2-2.8-6.5-7-7 4.2-.5 6.5-2.8 7-7Z" />
        <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
      </svg>
    ),
  },
  {
    id: 'financial-advisory',
    tabLabel: 'Financial Advisory',
    heading: 'Practical Financial Guidance for Every Stage',
    description:
      'Make important business decisions with greater clarity through financial analysis, advisory support, and tailored recommendations.',
    benefits: [
      'Financial reporting and analysis',
      'Business decision-making support',
      'Tailored financial improvement strategies',
    ],
    image: '/assets/aistudio/Advisor_meeting_business_client_20261024125008_0cb583f3.webp',
    imageAlt: 'Senior financial advisor consulting business clients in executive UAE conference room',
    icon: (
      <svg
        width="20"
        height="20"
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
];

export const AdvancedToolsSection: React.FC<AdvancedToolsSectionProps> = ({
  onOpenConsultation,
  onNavigateServices,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeTab = TOOL_TABS[activeIndex];

  return (
    <section
      id="advanced-tools"
      className="relative w-full bg-[#F4F5F5] text-[#0c120e] py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Top Heading Area */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14"
        >
          <div className="max-w-xl">
            {/* Decorative Dot-and-Line Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c120e]" />
                <span className="w-6 h-[1.5px] bg-[#0c120e]" />
              </div>
              <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.08em] uppercase text-[#0c120e] px-1">
                SMART SOLUTIONS
              </span>
              <div className="flex items-center">
                <span className="w-6 h-[1.5px] bg-[#0c120e]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c120e]" />
              </div>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-0.03em] leading-[1.08] text-[#0c120e]">
              Advanced Tools &amp;
              <br />
              Features.
            </h2>
          </div>

          {/* Upper-Right CTA Button */}
          <div className="md:pb-1">
            <button
              type="button"
              onClick={() => {
                if (onNavigateServices) {
                  onNavigateServices();
                } else {
                  onOpenConsultation(activeTab.tabLabel);
                }
              }}
              className="group inline-flex items-center gap-2.5 taxa-btn-primary font-semibold text-[14px] sm:text-[15px] px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[var(--taxa-accent-text-dark)]" />
            </button>
          </div>
        </motion.div>

        {/* Main Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-stretch">
          {/* LEFT COLUMN — FIVE VERTICAL TABS */}
          <div
            role="tablist"
            aria-label="Advanced Tools and Features Tabs"
            className="lg:col-span-4 flex flex-col justify-between gap-3.5 sm:gap-4"
          >
            {TOOL_TABS.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tool-panel-${tab.id}`}
                  id={`tool-tab-${tab.id}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: easeCurve }}
                  style={{
                    transition: 'all 250ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  className={`w-full flex items-center gap-3.5 px-6 py-5 sm:py-5.5 rounded-[18px] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c120e]/30 ${
                    isActive
                      ? 'taxa-card-gradient text-[var(--taxa-accent-text-dark)] shadow-[0_8px_24px_var(--taxa-glow-soft)]'
                      : 'bg-white hover:bg-white/90 text-[#0c120e] shadow-[0_2px_10px_rgba(12,18,14,0.03)]'
                  }`}
                >
                  <span className="shrink-0 text-[var(--taxa-accent-text-dark)]">{tab.icon}</span>
                  <span className="text-[16px] sm:text-[17px] font-bold tracking-[-0.015em] text-[var(--taxa-accent-text-dark)]">
                    {tab.tabLabel}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT COLUMN — LARGE CONTENT PANEL */}
          <motion.div
            id={`tool-panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`tool-tab-${activeTab.id}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: easeCurve }}
            className="lg:col-span-8 bg-white rounded-[26px] shadow-[0_10px_35px_rgba(12,18,14,0.04)] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[420px] sm:min-h-[440px]"
          >
            {/* LEFT HALF: Large Rectangular Professional Photograph with Rounded Corners */}
            <div className="md:col-span-6 relative min-h-[280px] sm:min-h-[340px] md:min-h-full overflow-hidden rounded-[22px] sm:rounded-[24px]">
              {TOOL_TABS.map((tab, index) => {
                const isSelected = index === activeIndex;
                return (
                  <img
                    key={tab.id}
                    src={tab.image}
                    alt={tab.imageAlt}
                    loading="lazy"
                    decoding="async"
                    style={{
                      transition:
                        'opacity 360ms cubic-bezier(0.22, 1, 0.36, 1), transform 380ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    className={`absolute inset-0 w-full h-full object-cover object-center rounded-[22px] sm:rounded-[24px] ${
                      isSelected
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-[1.02] z-0 pointer-events-none'
                    }`}
                  />
                );
              })}
            </div>

            {/* RIGHT HALF: Content Stack with Smooth Fade + Upward Motion */}
            <div className="md:col-span-6 relative flex flex-col justify-center p-7 sm:p-9 lg:p-11">
              <div
                key={activeTab.id}
                style={{
                  animation: 'taxaToolContentFadeIn 260ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
                }}
              >
                {/* Prominent Bold Black Heading */}
                <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-bold tracking-[-0.025em] leading-[1.2] text-[#0c120e] mb-4">
                  {activeTab.heading}
                </h3>

                {/* Supporting Description Paragraph */}
                <p className="text-[14.5px] sm:text-[15px] text-[#555d58] leading-[1.65] mb-7">
                  {activeTab.description}
                </p>

                {/* Three Bullet Points with Black Circular Checkmark Icons */}
                <ul className="space-y-3.5">
                  {activeTab.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#0c120e] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.8]" />
                      </span>
                      <span className="text-[14.5px] sm:text-[15px] font-semibold text-[#0c120e] leading-snug">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Keyframe definition for the right-column text reveal */}
      <style>{`
        @keyframes taxaToolContentFadeIn {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
