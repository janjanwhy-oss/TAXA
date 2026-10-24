import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { INSIGHT_CAROUSEL_ITEMS } from '../../data/servicesData';

interface ServicesCarouselProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({
  onOpenConsultation,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Maximum start index allowing 3 visible cards on desktop
  const total = INSIGHT_CAROUSEL_ITEMS.length;
  const maxDesktopIndex = Math.max(0, total - 3);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxDesktopIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxDesktopIndex ? prev + 1 : 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxDesktopIndex]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    setTouchStart(null);
  };

  // Wave line paths
  const waveLines = Array.from({ length: 22 }, (_, i) => {
    const offset = i * 22;
    return {
      key: i,
      path: `M -100 ${150 + offset * 0.6} C 400 ${380 - offset * 0.4}, 900 ${70 + offset * 0.5}, 1400 ${320 - offset * 0.3} C 1800 ${110 + offset * 0.4}, 2100 ${360}, 2300 ${220}`,
    };
  });

  return (
    <section className="relative w-full bg-[var(--taxa-dark-bg-1)] py-24 sm:py-32 px-4 sm:px-8 lg:px-14 overflow-hidden text-white select-none">
      {/* 1. Subtle Flowing Green Curved Lines Vector Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25" aria-hidden="true">
        <svg
          className="w-full h-full object-cover min-w-[1200px]"
          viewBox="0 0 2000 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {waveLines.map((line) => (
            <path
              key={line.key}
              d={line.path}
              stroke="url(#services-carousel-wave)"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />
          ))}
          <defs>
            <linearGradient id="services-carousel-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--taxa-wave-stop1)" stopOpacity="0.05" />
              <stop offset="35%" stopColor="var(--taxa-wave-stop2)" stopOpacity="0.6" />
              <stop offset="75%" stopColor="var(--taxa-wave-stop3)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--taxa-wave-stop2)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Heading matching Image 3 */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow: ● — Trusted Services — ● */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--taxa-accent)]" />
            <span className="w-4 h-[1px] bg-[var(--taxa-accent)]/60" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-300">
              Trusted Services
            </span>
            <span className="w-4 h-[1px] bg-[var(--taxa-accent)]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--taxa-accent)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Financial <span className="taxa-text-gradient">Insight</span> that You Need
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Et nemo maxime ut internos enim qui quas sint aut commodi adipisci.
          </p>
        </div>

        {/* Carousel Container with Outer Navigation Buttons */}
        <div className="relative flex items-center justify-between gap-4 sm:gap-6">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous service insights"
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/20 bg-neutral-900/80 hover:bg-[var(--taxa-accent)] hover:text-[var(--taxa-accent-text-dark)] hover:border-[var(--taxa-accent)] flex items-center justify-center text-white transition-all duration-300 shadow-lg shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] z-20 group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Cards Track (Visible 3 cards on desktop) */}
          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex-1 overflow-hidden"
          >
            <div
              className="flex gap-6 sm:gap-8 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${startIndex * (100 / 3 + 1.2)}%)`,
              }}
            >
              {INSIGHT_CAROUSEL_ITEMS.map((card, idx) => (
                <div
                  key={card.id}
                  onClick={() => onOpenConsultation(card.title)}
                  className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] shrink-0 bg-[var(--taxa-dark-card)] hover:brightness-110 border border-white/10 hover:border-[var(--taxa-accent)]/40 rounded-[32px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer group shadow-xl"
                >
                  {/* Card Header matching Screenshot 3 */}
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[var(--taxa-accent)] transition-colors mb-3">
                      {card.title}
                    </h3>

                    {/* Middle Card in screenshot has subtitle and separator line */}
                    {idx % 2 === 1 ? (
                      <div>
                        <div className="h-[1px] w-full bg-white/10 mb-4" />
                        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                          {card.description}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Card Photograph */}
                  <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-black/40 shadow-inner relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next service insights"
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/20 bg-neutral-900/80 hover:bg-[var(--taxa-accent)] hover:text-[var(--taxa-accent-text-dark)] hover:border-[var(--taxa-accent)] flex items-center justify-center text-white transition-all duration-300 shadow-lg shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] z-20 group"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Indicator dots for mobile/tablet */}
        <div className="flex items-center justify-center gap-2 mt-8 lg:hidden">
          {Array.from({ length: total - 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                startIndex === i ? 'w-6 bg-[var(--taxa-accent)]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
