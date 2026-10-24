import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface WhoWeAreSectionProps {
  onOpenConsultation: (service?: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface ValueItem {
  id: string;
  title: string;
  description: string;
}

const VALUE_ITEMS: ValueItem[] = [
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'We work with transparency, accuracy, and long-term trust.',
  },
  {
    id: 'client-focus',
    title: 'Client Focus',
    description: 'Every solution is shaped around your business goals and compliance needs.',
  },
  {
    id: 'risk-resilience',
    title: 'Risk Resilience',
    description: 'We help reduce tax exposure and improve regulatory readiness.',
  },
  {
    id: 'expertise',
    title: 'Expertise',
    description: 'Our guidance combines technical knowledge with practical business insight.',
  },
];

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ onOpenConsultation }) => {
  const [activeValueId, setActiveValueId] = useState<string | null>(null);

  return (
    <section
      id="who-we-are"
      className="relative w-full bg-[#f6f7f6] text-[#0c120e] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Top Row: Two-Column Layout (Image Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Large Rounded-Corner Image with Left-to-Right Clipping Mask */}
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.6 }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: easeCurve }}
            className="lg:col-span-7"
          >
            <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-[26px] shadow-[0_20px_50px_rgba(12,18,14,0.08)] bg-neutral-200 aspect-[16/10]">
              <img
                src="/assets/aistudio/image_9327471e.png"
                alt="Taxa Advisory tax consultant and client reviewing financial advisory documents in a modern Dubai office"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Column: Eyebrow, Heading, Paragraph, Green CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-5 sm:space-y-6">
            {/* Eyebrow Label matching reference style */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: easeCurve }}
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#0c120e]"
            >
              <div className="flex items-center" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c120e]" />
                <span className="w-3.5 h-[1.5px] bg-[#0c120e]" />
              </div>
              <span>Who We Are</span>
              <div className="flex items-center" aria-hidden="true">
                <span className="w-3.5 h-[1.5px] bg-[#0c120e]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c120e]" />
              </div>
            </motion.div>

            {/* Large Heading reveals upward */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.12, ease: easeCurve }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c120e] tracking-[-0.025em] leading-[1.15] text-balance"
            >
              Driving confident business decisions through expert tax advisory.
            </motion.h2>

            {/* Supporting Paragraph follows with subtle stagger */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.22, ease: easeCurve }}
              className="text-sm sm:text-base text-neutral-500 font-normal leading-relaxed"
            >
              Taxa Advisory helps businesses in the UAE manage tax, accounting, and compliance with clarity. From corporate tax and VAT to bookkeeping and advisory support, we provide practical guidance built for growing companies.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.32, ease: easeCurve }}
              className="pt-2"
            >
              <button
                onClick={() => onOpenConsultation('Business Advisory')}
                className="group inline-flex items-center justify-center gap-2.5 taxa-btn-primary font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>About Taxa Advisory</span>
                <ArrowRight className="w-4 h-4 text-[var(--taxa-accent-text-dark)] group-hover:translate-x-1 transition-transform duration-200 stroke-[2.2]" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row: Four Evenly Spaced Text-Only Value Items (No Icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-4">
          {VALUE_ITEMS.map((item, idx) => {
            const isSelected = activeValueId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: easeCurve }}
                onMouseEnter={() => setActiveValueId(item.id)}
                onMouseLeave={() => setActiveValueId(null)}
                onClick={() => setActiveValueId(item.id)}
                className="group flex flex-col items-start text-left cursor-pointer"
              >
                {/* Thin Top Horizontal Divider Line */}
                <div
                  className={`w-full h-[1.5px] mb-4 sm:mb-5 transition-colors duration-300 ${
                    isSelected ? 'bg-[var(--taxa-accent)]' : 'bg-neutral-200 group-hover:bg-[var(--taxa-accent)]'
                  }`}
                />

                {/* Value Item Title */}
                <h3
                  className={`text-xl sm:text-[22px] font-bold tracking-tight mb-2.5 transition-colors duration-300 ${
                    isSelected ? 'text-[#0c120e]' : 'text-neutral-700 group-hover:text-[#0c120e]'
                  }`}
                >
                  {item.title}
                </h3>

                {/* Value Item Description */}
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isSelected ? 'text-neutral-700' : 'text-neutral-500 group-hover:text-neutral-700'
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
