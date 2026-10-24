import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceHighlightsSectionProps {
  onOpenConsultation?: (service?: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const SERVICE_CARDS: ServiceCardItem[] = [
  {
    id: 'corporate-tax',
    title: 'Corporate Tax Advisory',
    description: 'Strategic guidance for UAE corporate tax planning, structuring, and compliance.',
    image: '/assets/aistudio/image_6b00096f.png',
  },
  {
    id: 'vat-registration',
    title: 'VAT Registration & Filing',
    description: 'End-to-end VAT support including registration, returns, and compliance checks.',
    image: '/assets/aistudio/image_921e64e0.png',
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Reporting',
    description: 'Accurate financial records, monthly reporting, and clean bookkeeping systems.',
    image: '/assets/aistudio/image_f65185aa.png',
  },
  {
    id: 'audit-compliance',
    title: 'Audit & Compliance Support',
    description: 'Stay prepared with organized documentation and advisory for regulatory requirements.',
    image: '/assets/aistudio/image_fdca7190.png',
  },
  {
    id: 'business-growth',
    title: 'Business Growth Advisory',
    description: 'Financial insight and practical advisory to help businesses scale with confidence.',
    image: '/assets/aistudio/image_1509aeb9.png',
  },
];

export const ServiceHighlightsSection: React.FC<ServiceHighlightsSectionProps> = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [activeDot, setActiveDot] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCardActivate = (cardId: string) => {
    setActiveCardId((prev) => (prev === cardId ? null : cardId));
  };

  const handleCardKeyDown = (e: React.KeyboardEvent, cardId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardActivate(cardId);
    }
  };

  const handleDotClick = (index: number) => {
    setActiveDot(index);
    const container = scrollContainerRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll > 0) {
      const targetScroll = (maxScroll / 2) * index;
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 10) return;
    const ratio = container.scrollLeft / maxScroll;
    if (ratio < 0.33) setActiveDot(0);
    else if (ratio < 0.67) setActiveDot(1);
    else setActiveDot(2);
  };

  return (
    <section
      id="service-highlights"
      className="relative w-full bg-[#f6f7f6] pb-12 sm:pb-16"
    >
      {/* Large Black Rounded Outer Section Container */}
      <div className="w-full bg-[#000000] rounded-[36px] sm:rounded-[48px] py-20 sm:py-28 lg:py-32 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        {/* Centered Heading Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="max-w-3xl mx-auto px-4 sm:px-8 text-center space-y-4 mb-12 sm:mb-16"
        >
          {/* Small Eyebrow Label */}
          <div className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white">
            <div className="flex items-center" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="w-3.5 h-[1.5px] bg-white" />
            </div>
            <span>Service Highlights</span>
            <div className="flex items-center" aria-hidden="true">
              <span className="w-3.5 h-[1.5px] bg-white" />
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>

          {/* Main Heading with 'With' highlighted with theme gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-[-0.025em] leading-[1.14]">
            Built <span className="taxa-text-gradient">With</span> Your Needs
          </h2>

          {/* Short Supporting Text */}
          <p className="text-xs sm:text-sm text-neutral-300 font-normal max-w-xl mx-auto leading-relaxed">
            Tailored tax, accounting, and advisory solutions designed to support growing businesses in the UAE.
          </p>
        </motion.div>

        {/* Horizontal Carousel Row of 5 Photographic Service Cards */}
        <div className="w-full pl-4 sm:pl-8 lg:pl-[max(2rem,calc((100vw-82rem)/2+2rem))] pr-4 sm:pr-6">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-5 gap-4 sm:gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {SERVICE_CARDS.map((card, idx) => {
              const isActive = activeCardId === card.id;

              return (
                <motion.article
                  key={card.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease: easeCurve }}
                  onClick={() => handleCardActivate(card.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, card.id)}
                  className="group relative shrink-0 w-[265px] sm:w-[290px] lg:w-auto aspect-[397/443] snap-start bg-[#1A1A1A] rounded-[20px] overflow-hidden flex flex-col justify-end select-none cursor-pointer shadow-[0_14px_34px_rgba(0,0,0,0.45)] border border-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)]"
                >
                  {/* Single Continuous Image Layer with Animated Curved Clip-Path & Transform */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none motion-reduce:transition-none"
                    style={{
                      clipPath: isActive
                        ? 'inset(0% 0% 0% 0% round 20px 20px 20px 20px)'
                        : 'inset(0% 0% 34.1% 27.2% round 16px 20px 16px 280px)',
                      transition: 'clip-path 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center motion-reduce:transition-none"
                      style={{
                        transform: isActive
                          ? 'translate(0%, 0%) scale(1.02)'
                          : 'translate(13.6%, -13.6%) scale(0.728)',
                        transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />

                    {/* Subtle Dark Readability Gradient Over Expanded Image */}
                    <div
                      className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/95 via-black/65 via-45% to-black/10 motion-reduce:transition-none"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transition: 'opacity 350ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Text & Learn More Overlay Positioned Near Lower-Left of Card */}
                  <div
                    className="relative z-20 px-5 sm:px-6 pb-6 pt-8 text-left flex flex-col justify-end motion-reduce:transition-none"
                    style={{
                      transform: isActive ? 'translateY(0px)' : 'translateY(26px)',
                      transition: 'transform 320ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <h3
                      className={`text-base sm:text-[18px] font-bold tracking-tight leading-snug mb-2 motion-reduce:transition-none ${
                        isActive
                          ? 'text-[var(--taxa-accent)]'
                          : 'text-white group-hover:text-white/95'
                      }`}
                      style={{
                        transition: 'color 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-[13px] font-normal leading-relaxed motion-reduce:transition-none ${
                        isActive ? 'text-white/95' : 'text-neutral-400'
                      }`}
                      style={{
                        transition: 'color 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    >
                      {card.description}
                    </p>

                    {/* Learn More -> Link Revealed on Active State */}
                    <div
                      className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-white motion-reduce:transition-none"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0px)' : 'translateY(6px)',
                        transition:
                          'opacity 280ms cubic-bezier(0.22, 1, 0.36, 1), transform 280ms cubic-bezier(0.22, 1, 0.36, 1)',
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                      aria-hidden={!isActive}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.2]" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Centered Carousel Pagination Dots (3 Dots, Active Pill in Theme Gradient) */}
        <div
          className="mt-10 sm:mt-12 flex items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Service highlights carousel pagination"
        >
          {[0, 1, 2].map((dotIndex) => {
            const isActive = activeDot === dotIndex;
            return (
              <button
                key={dotIndex}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`View service slide group ${dotIndex + 1}`}
                onClick={() => handleDotClick(dotIndex)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-7 taxa-card-gradient shadow-[0_0_10px_var(--taxa-glow)]'
                    : 'w-2 bg-white hover:bg-white/80'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
