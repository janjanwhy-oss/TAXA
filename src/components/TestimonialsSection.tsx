import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Plus } from 'lucide-react';

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface TestimonialsSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const COLUMN_ONE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'col1-1',
    quote:
      'Taxa Advisory simplified our UAE corporate tax transition seamlessly. Their team understood our group structure and saved us countless hours.',
    author: 'Mario Pascal',
    role: 'Project Manager',
    avatar: '/assets/avatar1.webp',
  },
  {
    id: 'col1-2',
    quote:
      'Euismod quam justo lectus commodo augue arcu dignissim. Porttitor ullamcorper et magnis dis parturient montes.',
    author: 'Sarah Malik',
    role: 'Operations Manager & CEO',
    avatar: '/assets/avatar2.webp',
  },
  {
    id: 'col1-3',
    quote:
      'Luctus nibh finibus facilisis dapibus etiam interdum tortor. Tincidunt nam porta elementum a enim vivamus.',
    author: 'Nicole Saskia',
    role: 'Founder & Director',
    avatar: '/assets/avatar3.webp',
  },
];

const COLUMN_TWO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'col2-1',
    quote:
      'Imperdiet mollis nullam volutpat porttitor. Their monthly VAT filings and FTA compliance have given our leadership total confidence.',
    author: 'Edelgard Gisa',
    role: 'HR & Finance Director',
    avatar: '/assets/avatar3.webp',
  },
  {
    id: 'col2-2',
    quote:
      'Taciti sociosqu ad litora torquent per conubia nostra. Et magnis dis parturient montes nascetur ridiculus mus.',
    author: 'Tariq Al-Mansoor',
    role: 'Managing Partner',
    avatar: '/assets/avatar1.webp',
  },
  {
    id: 'col2-3',
    quote:
      'Viverra ac tincidunt nam porta elementum a enim. From day one, Taxa provided actionable financial guidance that helped us scale.',
    author: 'Elena Rostova',
    role: 'Chief Financial Officer',
    avatar: '/assets/avatar2.webp',
  },
];

/**
 * Editable Business Statistics Configuration
 * Update these target values, suffixes, and labels to adjust figures before launch.
 */
export interface BusinessStatItem {
  id: string;
  targetValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export const BUSINESS_STATISTICS: BusinessStatItem[] = [
  {
    id: 'years-experience',
    targetValue: 7,
    suffix: '+',
    label: 'Years of Experience',
  },
  {
    id: 'clients-served',
    targetValue: 350,
    suffix: '+',
    label: 'Clients Served',
  },
  {
    id: 'core-services',
    targetValue: 6,
    label: 'Core Services',
  },
  {
    id: 'client-satisfaction',
    targetValue: 99,
    suffix: '%',
    label: 'Client Satisfaction',
  },
];

/**
 * StatisticsBar component with smooth requestAnimationFrame count-up animation
 * Triggers once when approximately 40% of the section enters the viewport.
 */
export const StatisticsBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animatedRef = useRef<boolean>(false);
  const [displayValues, setDisplayValues] = useState<number[]>(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return BUSINESS_STATISTICS.map((s) => s.targetValue);
    }
    return BUSINESS_STATISTICS.map(() => 0);
  });

  useEffect(() => {
    // Respect reduced-motion preferences immediately
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayValues(BUSINESS_STATISTICS.map((s) => s.targetValue));
      animatedRef.current = true;
      return;
    }

    if (animatedRef.current) return;

    const element = containerRef.current;
    if (!element) return;

    let rafId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if ((entry.isIntersecting || entry.intersectionRatio >= 0.38) && !animatedRef.current) {
          animatedRef.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const duration = 2200; // 2.2 seconds smooth count-up

          // Cubic-quartic ease-out: starts fast and gradually settles into final value
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3.5);

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOut(progress);

            setDisplayValues(
              BUSINESS_STATISTICS.map((item) => {
                if (progress >= 1) return item.targetValue;
                return Math.round(eased * item.targetValue);
              })
            );

            if (progress < 1) {
              rafId = requestAnimationFrame(animate);
            }
          };

          rafId = requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.4, // Trigger when approx 40% of the section becomes visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[var(--taxa-dark-bg-2)] rounded-[24px] sm:rounded-[28px] px-6 sm:px-12 py-8 sm:py-10 relative overflow-hidden text-white border border-white/5 shadow-md select-none transition-colors duration-300"
    >
      {/* Flowing wave lines running across the entire width */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-50,110 C150,140 320,40 550,85 C780,130 960,30 1250,90"
          stroke="var(--taxa-accent)"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
        <path
          d="M-50,130 C200,160 380,60 620,105 C860,150 1020,50 1250,115"
          stroke="var(--taxa-accent)"
          strokeWidth="0.9"
          strokeOpacity="0.3"
        />
        <path
          d="M-50,90 C120,110 260,20 480,65 C700,110 890,15 1250,75"
          stroke="var(--taxa-accent)"
          strokeWidth="1"
          strokeOpacity="0.25"
        />
        <path
          d="M-50,145 C250,170 420,80 690,120 C940,160 1080,70 1250,130"
          stroke="var(--taxa-accent)"
          strokeWidth="0.8"
          strokeOpacity="0.2"
        />
      </svg>

      {/* 4 Metrics in a row with subtle vertical dividers */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
        {BUSINESS_STATISTICS.map((stat, idx) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center lg:items-start lg:px-8 text-center lg:text-left pt-4 sm:pt-0 ${
              idx === 0 ? 'lg:pl-0' : ''
            } ${idx === BUSINESS_STATISTICS.length - 1 ? 'lg:pr-0' : ''}`}
          >
            <span className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-none mb-2 tabular-nums inline-flex items-baseline">
              <span>{displayValues[idx]}</span>
              {stat.suffix && <span>{stat.suffix}</span>}
            </span>
            <span className="text-xs sm:text-sm text-neutral-300 font-normal tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#f4f5f5] text-neutral-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
      aria-label="Client Testimonials and Metrics"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* 1. SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="text-center max-w-2xl mx-auto flex flex-col items-center"
        >
          {/* Eyebrow with decorative dot and horizontal lines */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
            <span className="w-8 h-[1.5px] bg-neutral-900 inline-block" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-800 px-1">
              Testimonials
            </span>
            <span className="w-8 h-[1.5px] bg-neutral-900 inline-block" />
            <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Hear What Our Clients Say
          </h2>

          <p className="text-neutral-500 text-sm sm:text-base mt-3 max-w-xl font-normal leading-relaxed">
            Discover how businesses benefit from clear financial guidance, dependable accounting,
            and practical tax advisory support.
          </p>
        </motion.div>

        {/* 2. MAIN 70 / 30 LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT CONTAINER (~70%): Big rounded white card with intro & 2 vertical scrolling columns */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: easeCurve }}
            className="lg:col-span-8 bg-white rounded-[32px] p-6 sm:p-8 md:p-10 shadow-xs border border-neutral-200/60 overflow-hidden flex flex-col md:flex-row gap-6 relative min-h-[490px]"
          >
            {/* AREA A: Introduction Panel with subtle grid texture */}
            <div className="w-full md:w-[42%] flex flex-col justify-between relative z-10 shrink-0">
              {/* Subtle background grid pattern */}
              <div
                className="absolute -inset-4 sm:-inset-6 pointer-events-none opacity-40 z-0"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #e2e5e5 1px, transparent 1px), linear-gradient(to bottom, #e2e5e5 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 pt-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 leading-[1.18] tracking-tight">
                  Trusted By Over 1300
                  <br />
                  Loyal Clients
                </h3>

                <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed mt-4 font-normal max-w-xs">
                  Ad litora torquent per conubia nostra inceptos himenaeos. Dis parturient montes
                  nascetur ridiculus mus donec.
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <button
                  type="button"
                  onClick={() => onOpenConsultation('Client Advisory')}
                  className="inline-flex items-center gap-2 taxa-btn-primary font-semibold px-6 py-3 rounded-full text-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[var(--taxa-accent-text-dark)]" />
                </button>
              </div>
            </div>

            {/* AREA B & C: Two Vertical Scrolling Columns with top/bottom fade gradient masks */}
            <div className="w-full md:w-[58%] relative overflow-hidden h-[450px]">
              {/* Top fade gradient */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-20"
                aria-hidden="true"
              />
              {/* Bottom fade gradient */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-20"
                aria-hidden="true"
              />

              <div className="grid grid-cols-2 gap-3.5 h-full">
                {/* Column 1: Upward Continuous Loop */}
                <div className="relative overflow-hidden group">
                  <div className="animate-marquee-up pause-on-hover flex flex-col gap-3.5">
                    {/* Double list for seamless 100% infinite vertical loop */}
                    {[...COLUMN_ONE_TESTIMONIALS, ...COLUMN_ONE_TESTIMONIALS].map((item, idx) => (
                      <div
                        key={`col1-${item.id}-${idx}`}
                        className="bg-[#f8f9fa] rounded-[20px] p-4 border border-neutral-200/70 shadow-2xs hover:border-[#7ce778]/50 transition-colors flex flex-col justify-between"
                      >
                        {/* Quotation mark icon */}
                        <svg
                          className="w-5 h-5 text-neutral-900 fill-current opacity-90"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.322 1.487-4.14 3.738-4.246 5.25.438-.344 1.037-.557 1.705-.557 1.657 0 2.94 1.343 2.94 3 0 1.657-1.343 3-3 3-.88 0-1.68-.383-2.739-1.573zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.322 1.487-4.14 3.738-4.246 5.25.438-.344 1.037-.557 1.705-.557 1.657 0 2.94 1.343 2.94 3 0 1.657-1.343 3-3 3-.88 0-1.68-.383-2.739-1.573z" />
                        </svg>

                        <p className="text-[12px] text-neutral-600 leading-relaxed mt-2.5 mb-3.5 line-clamp-4">
                          {item.quote}
                        </p>

                        <div className="flex items-center gap-2.5 pt-1">
                          <img
                            src={item.avatar}
                            alt={item.author}
                            width={32}
                            height={32}
                            loading="lazy"
                            decoding="async"
                            className="w-8 h-8 rounded-full object-cover border border-white shadow-2xs shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="block text-[12px] font-bold text-neutral-900 leading-tight truncate">
                              {item.author}
                            </span>
                            <span className="block text-[10.5px] text-neutral-500 leading-tight truncate mt-0.5">
                              {item.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Downward Continuous Loop */}
                <div className="relative overflow-hidden group">
                  <div className="animate-marquee-down pause-on-hover flex flex-col gap-3.5">
                    {/* Double list for seamless 100% infinite vertical loop */}
                    {[...COLUMN_TWO_TESTIMONIALS, ...COLUMN_TWO_TESTIMONIALS].map((item, idx) => (
                      <div
                        key={`col2-${item.id}-${idx}`}
                        className="bg-[#f8f9fa] rounded-[20px] p-4 border border-neutral-200/70 shadow-2xs hover:border-[#7ce778]/50 transition-colors flex flex-col justify-between"
                      >
                        {/* Quotation mark icon */}
                        <svg
                          className="w-5 h-5 text-neutral-900 fill-current opacity-90"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.322 1.487-4.14 3.738-4.246 5.25.438-.344 1.037-.557 1.705-.557 1.657 0 2.94 1.343 2.94 3 0 1.657-1.343 3-3 3-.88 0-1.68-.383-2.739-1.573zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.322 1.487-4.14 3.738-4.246 5.25.438-.344 1.037-.557 1.705-.557 1.657 0 2.94 1.343 2.94 3 0 1.657-1.343 3-3 3-.88 0-1.68-.383-2.739-1.573z" />
                        </svg>

                        <p className="text-[12px] text-neutral-600 leading-relaxed mt-2.5 mb-3.5 line-clamp-4">
                          {item.quote}
                        </p>

                        <div className="flex items-center gap-2.5 pt-1">
                          <img
                            src={item.avatar}
                            alt={item.author}
                            width={32}
                            height={32}
                            loading="lazy"
                            decoding="async"
                            className="w-8 h-8 rounded-full object-cover border border-white shadow-2xs shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="block text-[12px] font-bold text-neutral-900 leading-tight truncate">
                              {item.author}
                            </span>
                            <span className="block text-[10.5px] text-neutral-500 leading-tight truncate mt-0.5">
                              {item.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT STACK (~30%): Top Rating Card & Bottom Green Collaboration Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Top Rating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeCurve }}
              className="bg-white rounded-[28px] p-6 sm:p-7 shadow-xs border border-neutral-200/60 relative overflow-hidden flex flex-col items-center justify-center text-center flex-1 min-h-[225px]"
            >
              {/* Concentric rings background SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                viewBox="0 0 300 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="150" cy="110" r="60" stroke="#d4d4d8" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="150" cy="110" r="95" stroke="#e4e4e7" strokeWidth="1" />
                <circle cx="150" cy="110" r="130" stroke="#f4f4f5" strokeWidth="1.2" />
              </svg>

              <div className="relative z-10 flex flex-col items-center">
                <span className="text-5xl sm:text-6xl font-bold text-neutral-950 tracking-tight leading-none">
                  4.80
                </span>

                {/* 5 Filled Gold Stars */}
                <div className="flex items-center gap-1 my-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={`star-${i}`}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-[12px] text-neutral-500 font-medium mb-3.5">
                  2,568 Reviews and counting
                </p>

                {/* Platform Icons (Apple, Google, YouTube) */}
                <div className="flex items-center gap-4">
                  {/* Apple Icon */}
                  <svg
                    className="w-5 h-5 text-neutral-950 fill-current hover:opacity-75 transition-opacity"
                    viewBox="0 0 170 170"
                    aria-label="Apple App Store reviews"
                  >
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-5.7-8.68-10.15-18.42-13.34-29.21-3.2-10.79-4.8-21.09-4.8-30.89 0-14.34 3.65-26.04 10.95-35.09 7.3-9.06 16.34-13.68 27.13-13.88 4.8 0 10.12 1.25 15.96 3.75 5.84 2.5 9.77 3.86 11.79 4.09 1.63-.23 5.76-1.63 12.39-4.18 6.63-2.56 12.18-3.71 16.65-3.46 12.63.65 22.84 5.37 30.63 14.17-11.05 6.69-16.46 15.95-16.24 27.79.22 9.24 3.86 17.06 10.93 23.47 7.07 6.41 15.44 10.12 25.1 11.13-2.39 7.28-5.37 14.78-8.94 22.51zM119.22 31.84c0-7.39 2.67-14.35 8-20.89 5.33-6.53 11.85-10.5 19.56-11.91.87 7.28-1.52 14.45-7.17 21.51-5.65 7.06-12.45 10.8-20.39 11.29z" />
                  </svg>

                  {/* Google Icon */}
                  <svg
                    className="w-5 h-5 hover:opacity-75 transition-opacity"
                    viewBox="0 0 24 24"
                    aria-label="Google reviews"
                  >
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>

                  {/* YouTube Icon */}
                  <svg
                    className="w-6 h-5 hover:opacity-75 transition-opacity"
                    viewBox="0 0 28 20"
                    aria-label="YouTube client stories"
                  >
                    <path
                      fill="#FF0000"
                      d="M27.42 3.07C27.1 1.86 26.14.9 24.94.58 22.75 0 14 0 14 0S5.25 0 3.06.58C1.86.9.9 1.86.58 3.07 0 5.27 0 9.85 0 9.85s0 4.58.58 6.78c.32 1.21 1.28 2.17 2.48 2.49 2.19.58 10.94.58 10.94.58s8.75 0 10.94-.58c1.2-.32 2.16-1.28 2.48-2.49.58-2.2.58-6.78.58-6.78s0-4.58-.58-6.78z"
                    />
                    <path fill="#FFFFFF" d="M11.2 14.07l7.28-4.22-7.28-4.22v8.44z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Bottom Collaboration Card (Group Cooperation) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeCurve }}
              className="rounded-[28px] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between flex-1 min-h-[225px] border border-white/10 shadow-xs taxa-card-gradient text-[var(--taxa-accent-text-dark)]"
            >
              {/* Underlying photographic texture */}
              <img
                src="/assets/consultant_right.webp"
                alt="Advisory group cooperation"
                width={1000}
                height={798}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
              />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--taxa-accent-text-dark)] leading-tight tracking-tight">
                  Group
                  <br />
                  Cooperation
                </h3>
              </div>

              {/* Overlapping Avatars & Black Plus Action Button */}
              <div className="relative z-10 flex items-center justify-between pt-6">
                <div className="flex items-center -space-x-2.5">
                  <img
                    src="/assets/avatar1.webp"
                    alt="Client member 1"
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <img
                    src="/assets/avatar2.webp"
                    alt="Client member 2"
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <img
                    src="/assets/avatar3.webp"
                    alt="Client member 3"
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => onOpenConsultation('Group Cooperation')}
                  className="w-10 h-10 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-95 cursor-pointer ml-2"
                  aria-label="Join our advisory network or book consultation"
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3. BOTTOM STATISTICS STRIP */}
        <StatisticsBar />
      </div>
    </section>
  );
};
