import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative w-full flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-12 z-20 pb-8 sm:pb-12 pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Left-aligned Content Block with breathing room on right */}
        <div className="max-w-2xl lg:max-w-2xl text-left space-y-6 sm:space-y-7">
          
          {/* Eyebrow Label with Decorative Line & Dot Styling */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: easeCurve }}
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium tracking-wide text-neutral-300"
          >
            {/* Left decorative line with circular dot */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-5 sm:w-7 h-[1.5px] bg-white/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            </div>

            {/* Eyebrow Text */}
            <span className="text-white/90 font-medium">
              Dubai, UAE • Tax & Financial Advisory
            </span>

            {/* Right decorative line with circular dot */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              <span className="w-5 sm:w-7 h-[1.5px] bg-white/40" />
            </div>
          </motion.div>

          {/* Main H1 - Two-Line Structure matching reference hierarchy */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: easeCurve }}
            className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white tracking-[-0.03em] leading-[1.08] text-balance"
          >
            Trusted Tax &amp; <span className="taxa-text-gradient font-extrabold">Financial</span>
            <br />
            Advisory Partner
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: easeCurve }}
            className="text-base sm:text-[17px] text-neutral-300/95 font-normal leading-relaxed max-w-xl"
          >
            Strategic tax, accounting, and compliance support for businesses in the UAE. We help founders and growing companies navigate corporate tax, VAT, bookkeeping, and advisory with clarity.
          </motion.p>

          {/* CTA Row - Inspired directly by the second attachment */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46, ease: easeCurve }}
            className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Prominent CTA Button with Main Gradient */}
            <button
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center justify-center gap-3 taxa-btn-primary font-semibold text-base sm:text-[17px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-5 h-5 text-[var(--taxa-accent-text-dark)] group-hover:translate-x-1.5 transition-transform duration-200 stroke-[2.5]" />
            </button>

            {/* 3 Overlapping Circular Profile Images with Crisp White Borders */}
            <div
              className="flex items-center"
              title="FTA Certified Senior Tax Advisors"
            >
              <div className="flex items-center -space-x-3">
                {/* Avatar 1 */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[3px] border-white shadow-md overflow-hidden bg-neutral-200 transition-transform hover:scale-105 hover:z-30 duration-200">
                  <img
                    src="/assets/avatar1.png?v=2"
                    alt="Corporate Tax Specialist"
                    className="w-full h-full object-cover object-center block"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Avatar 2 */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[3px] border-white shadow-md overflow-hidden bg-neutral-200 transition-transform hover:scale-105 hover:z-30 duration-200">
                  <img
                    src="/assets/avatar2.png?v=2"
                    alt="Senior Tax Consultant"
                    className="w-full h-full object-cover object-center block"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Avatar 3 */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[3px] border-white shadow-md overflow-hidden bg-neutral-200 transition-transform hover:scale-105 hover:z-30 duration-200">
                  <img
                    src="/assets/avatar3.png?v=2"
                    alt="Auditing and Advisory Partner"
                    className="w-full h-full object-cover object-center block"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Quiet Trust Indicator next to avatars */}
              <div className="hidden sm:flex flex-col ml-3 text-left">
                <span className="text-xs font-semibold text-white/90 flex items-center gap-1">
                  FTA Registered
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--taxa-accent)]" />
                </span>
                <span className="text-[11px] text-neutral-400">
                  Senior Dubai Advisors
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Regulatory Assurance Micro-Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.62, ease: easeCurve }}
            className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--taxa-accent)]" />
              Federal Tax Authority (FTA) Certified
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--taxa-accent)]" />
              DIFC &amp; Mainland Licensed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--taxa-accent)]" />
              IFRS Accounting Standards
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
