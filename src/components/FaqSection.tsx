import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FaqSectionProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const LEFT_FAQS: FaqItem[] = [
  {
    id: 'faq-01',
    number: '01',
    question: 'What services does Taxa Advisory provide?',
    answer:
      'We provide UAE corporate tax, VAT, excise tax, bookkeeping and accounting, auditing-related support, and business advisory services for startups and growing businesses.',
  },
  {
    id: 'faq-02',
    number: '02',
    question: 'Can you help with UAE corporate tax registration?',
    answer:
      'Yes. We assist businesses with understanding their corporate tax obligations, registration procedures, recordkeeping, and related compliance requirements.',
  },
  {
    id: 'faq-03',
    number: '03',
    question: 'Do you provide VAT registration and filing services?',
    answer:
      'Our VAT services include registration assistance, return preparation, record reviews, and ongoing compliance support.',
  },
  {
    id: 'faq-04',
    number: '04',
    question: 'Can Taxa manage bookkeeping for my business?',
    answer:
      'We provide organized bookkeeping, account reconciliation, and financial reporting support to help businesses maintain reliable financial records.',
  },
  {
    id: 'faq-05',
    number: '05',
    question: 'Do you provide auditing services?',
    answer:
      'We support businesses with audit preparation, financial documentation, and coordination of audit-related requirements.',
  },
];

const RIGHT_FAQS: FaqItem[] = [
  {
    id: 'faq-06',
    number: '06',
    question: 'Do you work with startups and SMEs?',
    answer:
      'Yes. Our services support startups, small and medium-sized businesses, and growing companies operating across the UAE.',
  },
  {
    id: 'faq-07',
    number: '07',
    question: 'Can you support free zone and mainland businesses?',
    answer:
      'We provide tax, accounting, and advisory guidance for businesses operating in UAE mainland and free zone environments, considering their specific requirements.',
  },
  {
    id: 'faq-08',
    number: '08',
    question: 'How often should a company update its financial records?',
    answer:
      'Financial records should be maintained consistently. The appropriate reporting schedule depends on business activity, regulatory obligations, and management needs.',
  },
  {
    id: 'faq-09',
    number: '09',
    question: 'How do I know which tax services my company needs?',
    answer:
      'Our advisory process begins by understanding your business structure, activities, and reporting obligations before identifying appropriate services.',
  },
  {
    id: 'faq-10',
    number: '10',
    question: 'How can I book a consultation?',
    answer:
      'Complete the consultation form on our website, select the service you need, and provide a short description of your inquiry.',
  },
];

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation }) => {
  // Initially: Question 01 (index 0) in Left column, Question 06 (index 0) in Right column expanded
  const [expandedLeft, setExpandedLeft] = useState<number | null>(0);
  const [expandedRight, setExpandedRight] = useState<number | null>(0);

  const toggleLeft = (index: number) => {
    setExpandedLeft((prev) => (prev === index ? null : index));
  };

  const toggleRight = (index: number) => {
    setExpandedRight((prev) => (prev === index ? null : index));
  };

  // Flowing wavy contour lines matching the reference screenshot's upper-left pattern
  const waveLines = Array.from({ length: 30 }, (_, i) => {
    const offset = i * 11;
    return {
      key: i,
      path: `M -160 ${220 - offset * 0.8} C 180 ${180 - offset * 1.2}, 420 ${-80 + offset * 0.9}, 740 ${60 + offset * 1.1} C 1080 ${190 + offset * 1.3}, 1280 ${540 - offset * 0.7}, 1720 ${500 - offset * 0.9}`,
    };
  });

  return (
    <section
      id="faq"
      className="relative w-full bg-[var(--taxa-dark-bg-2)] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-12 select-none overflow-hidden transition-colors duration-300"
      aria-label="Frequently Asked Questions"
    >
      {/* 1. Flowing Curved Lines Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.28]"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full min-w-[1200px]"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="faqWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--taxa-wave-stop1)" stopOpacity="0.45" />
              <stop offset="40%" stopColor="var(--taxa-wave-stop2)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--taxa-wave-stop3)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {waveLines.map((line) => (
            <path
              key={line.key}
              d={line.path}
              stroke="url(#faqWaveGradient)"
              strokeWidth="1.15"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 2. SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow with decorative dots and short horizontal lines */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[var(--taxa-accent)] inline-block" />
            <span className="w-8 h-[1.5px] bg-[var(--taxa-accent)]/60 inline-block" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--taxa-accent)] px-1">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-8 h-[1.5px] bg-[var(--taxa-accent)]/60 inline-block" />
            <span className="w-2 h-2 rounded-full bg-[var(--taxa-accent)] inline-block" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Answers to Your Questions
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our tax, accounting, and business advisory services.
          </p>
        </motion.div>

        {/* 3. TWO-COLUMN ACCORDION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {LEFT_FAQS.map((item, index) => {
              const isOpen = expandedLeft === index;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: easeCurve }}
                  className={`rounded-2xl sm:rounded-[22px] transition-all duration-300 ease-out border overflow-hidden ${
                    isOpen
                      ? 'taxa-card-gradient text-[var(--taxa-accent-text-dark)] border-transparent shadow-[0_12px_28px_var(--taxa-glow-soft)]'
                      : 'bg-[var(--taxa-dark-card)] hover:bg-[var(--taxa-dark-card-hover)] text-white border-white/[0.06] shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleLeft(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-left-${index}`}
                    className="w-full text-left px-5 sm:px-7 py-5 sm:py-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] transition-colors"
                  >
                    <span
                      className={`text-[16px] sm:text-[18px] font-normal sm:font-medium leading-snug transition-colors ${
                        isOpen ? 'text-[var(--taxa-accent-text-dark)] font-medium' : 'text-white'
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* Small solid triangle arrow matching reference image */}
                    <span
                      className={`shrink-0 ml-2 mt-1.5 transition-transform duration-300 ease-out inline-block ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 12 8"
                        className={`w-3 h-2 fill-current transition-colors ${
                          isOpen ? 'text-[var(--taxa-accent-text-dark)]' : 'text-white'
                        }`}
                      >
                        <path d="M6 8L0 0H12L6 8Z" />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth height expansion container */}
                  <div
                    id={`faq-answer-left-${index}`}
                    role="region"
                    aria-labelledby={`faq-left-btn-${index}`}
                    className={`grid transition-[grid-template-rows] duration-350 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-5 sm:px-7 pb-6 pt-1 text-[14px] sm:text-[15px] leading-relaxed transition-opacity duration-300 ease-out ${
                          isOpen
                            ? 'opacity-100 text-[var(--taxa-accent-text-dark)]/90'
                            : 'opacity-0 text-transparent'
                        }`}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {RIGHT_FAQS.map((item, index) => {
              const isOpen = expandedRight === index;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: easeCurve }}
                  className={`rounded-2xl sm:rounded-[22px] transition-all duration-300 ease-out border overflow-hidden ${
                    isOpen
                      ? 'taxa-card-gradient text-[var(--taxa-accent-text-dark)] border-transparent shadow-[0_12px_28px_var(--taxa-glow-soft)]'
                      : 'bg-[var(--taxa-dark-card)] hover:bg-[var(--taxa-dark-card-hover)] text-white border-white/[0.06] shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleRight(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-right-${index}`}
                    className="w-full text-left px-5 sm:px-7 py-5 sm:py-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] transition-colors"
                  >
                    <span
                      className={`text-[16px] sm:text-[18px] font-normal sm:font-medium leading-snug transition-colors ${
                        isOpen ? 'text-[var(--taxa-accent-text-dark)] font-medium' : 'text-white'
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* Small solid triangle arrow matching reference image */}
                    <span
                      className={`shrink-0 ml-2 mt-1.5 transition-transform duration-300 ease-out inline-block ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 12 8"
                        className={`w-3 h-2 fill-current transition-colors ${
                          isOpen ? 'text-[var(--taxa-accent-text-dark)]' : 'text-white'
                        }`}
                      >
                        <path d="M6 8L0 0H12L6 8Z" />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth height expansion container */}
                  <div
                    id={`faq-answer-right-${index}`}
                    role="region"
                    aria-labelledby={`faq-right-btn-${index}`}
                    className={`grid transition-[grid-template-rows] duration-350 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-5 sm:px-7 pb-6 pt-1 text-[14px] sm:text-[15px] leading-relaxed transition-opacity duration-300 ease-out ${
                          isOpen
                            ? 'opacity-100 text-[var(--taxa-accent-text-dark)]/90'
                            : 'opacity-0 text-transparent'
                        }`}
                      >
                        <p>{item.answer}</p>
                        {item.id === 'faq-10' && onOpenConsultation && (
                          <div className="pt-3">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenConsultation('Free Consultation');
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--taxa-accent-text-dark)] underline underline-offset-4 hover:opacity-80 cursor-pointer"
                            >
                              Open Consultation Form →
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
