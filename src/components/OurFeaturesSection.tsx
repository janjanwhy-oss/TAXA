import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface OurFeaturesSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  hasBackgroundImage?: boolean;
  backgroundImage?: string;
  backgroundAlt?: string;
  icon: React.ReactNode;
}

const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 'expert-guidance',
    title: 'Expert Guidance',
    description:
      'Practical UAE tax, accounting, and compliance guidance informed by your business needs.',
    hasBackgroundImage: true,
    backgroundImage: '/assets/our_features_card_1.webp',
    backgroundAlt: 'Two financial advisors discussing documents and tablet in office',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.2" fill="currentColor" className="text-[#0c120e]" />
        <path
          d="M12 10.3v3.4M10.9 11.2c0-.5.5-.9 1.1-.9s1.1.4 1.1.9-.5.8-1.1.9-1.1.4-1.1.9.5.9 1.1.9 1.1-.4 1.1-.9"
          stroke="var(--taxa-accent)"
          strokeWidth="1.3"
        />
        <path d="M8.8 8.8 5.5 5.5M15.2 8.8l3.3-3.3M8.8 15.2l-3.3 3.3M15.2 15.2l3.3 3.3" />
        <path d="M5.5 8V5.5H8M18.5 8V5.5H16M5.5 16v2.5H8M18.5 16v2.5H16" />
      </svg>
    ),
  },
  {
    id: 'our-process',
    title: 'Our Process',
    description:
      'A structured approach that turns complex financial responsibilities into clear, manageable steps.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="3.5" height="3.5" rx="0.8" fill="currentColor" />
        <rect x="10.25" y="4" width="3.5" height="3.5" rx="0.8" fill="currentColor" />
        <rect x="16.5" y="4" width="3.5" height="3.5" rx="0.8" fill="currentColor" />
        <path d="M5.75 7.5v3a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-3" />
        <path d="M12 7.5v6.5" />
        <circle cx="12" cy="17.5" r="3.2" fill="currentColor" />
        <path d="M12 16.1v2.8" stroke="var(--taxa-accent)" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: 'compliance-focus',
    title: 'Compliance Focus',
    description:
      'Supporting your business with organized records, regulatory awareness, and dependable financial practices.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path
          d="M12 3.5 5.5 6.3v5.3c0 4.5 2.8 8.5 6.5 9.9 3.7-1.4 6.5-5.4 6.5-9.9V6.3L12 3.5Z"
          fill="currentColor"
        />
        <path
          d="m9.3 12.2 1.9 1.9 3.7-3.7"
          stroke="var(--taxa-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'business-support',
    title: 'Business Support',
    description:
      'Financial insight and practical advisory tailored to startups, SMEs, and growing UAE businesses.',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="8.5" r="3.5" fill="currentColor" />
        <path d="M11 7.1v2.8" stroke="var(--taxa-accent)" strokeWidth="1.4" />
        <circle cx="16.5" cy="7.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M4.5 16.5c1.5-1.2 3.4-1.5 5.5-.8l3.2.8c1.2.3 2.3-.2 2.8-1l2.8-1.5c.8-.4 1.7.2 1.5 1.1-.4 1.6-2.4 3.4-4.6 3.9-2.4.5-5.2-.1-7.8-.9l-3.4-1.6Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export const OurFeaturesSection: React.FC<OurFeaturesSectionProps> = ({
  onOpenConsultation,
}) => {
  // Generate subtle flowing wave paths matching the reference background pattern
  const waveLines = Array.from({ length: 28 }, (_, i) => {
    const offset = i * 9;
    const offset2 = i * 12;
    return {
      key: i,
      topWave: `M -120 ${380 - offset * 0.9} C 260 ${320 - offset * 1.3}, 440 ${-60 + offset * 0.7}, 780 ${80 + offset * 1.1} C 1120 ${220 + offset * 1.2}, 1260 ${680 - offset2 * 0.5}, 1680 ${620 - offset * 0.8}`,
      rightWave: `M 720 ${1180 + offset * 0.6} C 940 ${880 - offset * 0.8}, 1220 ${680 - offset * 1.1}, 1660 ${740 + offset * 0.9}`,
    };
  });

  const handleCardKeyDown = (e: React.KeyboardEvent, title: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenConsultation(title);
    }
  };

  return (
    <section
      id="our-features"
      className="relative w-full bg-[#F4F5F5] pb-12 sm:pb-16"
    >
      {/* Large Dark Container with Soft Rounded Corners */}
      <div className="relative w-full bg-[var(--taxa-dark-bg-2)] rounded-[36px] sm:rounded-[48px] py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-colors duration-300">
        {/* Flowing Curved-Line Pattern Background */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden select-none"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1600 1050"
             preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <defs>
              <linearGradient id="taxaFeatureWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--taxa-wave-stop1)" stopOpacity="0.28" />
                <stop offset="50%" stopColor="var(--taxa-wave-stop2)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="var(--taxa-wave-stop3)" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            {waveLines.map((line) => (
              <React.Fragment key={line.key}>
                <path
                  d={line.topWave}
                  stroke="url(#taxaFeatureWaveGrad)"
                  strokeWidth="1.05"
                />
                <path
                  d={line.rightWave}
                  stroke="url(#taxaFeatureWaveGrad)"
                  strokeWidth="1.05"
                />
              </React.Fragment>
            ))}
          </svg>

          {/* Subtle Radial Vignette for Depth and Text Contrast */}
          <div className="absolute inset-0 bg-radial from-transparent via-[var(--taxa-dark-bg-2)]/30 to-[var(--taxa-dark-bg-2)]/75" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-[1260px] mx-auto">
          {/* Upper-Left Heading Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="max-w-xl mb-10 sm:mb-12 lg:mb-14"
          >
            {/* Decorative Dot-and-Line Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="w-4 h-[1.5px] bg-white" />
              </div>
              <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.06em] uppercase text-white">
                OUR FEATURES
              </span>
              <div className="flex items-center">
                <span className="w-4 h-[1.5px] bg-white" />
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>

            {/* Two-Line Bold White Heading */}
            <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-bold tracking-[-0.03em] leading-[1.1] text-white">
              Creating Financial
              <br />
              Futures
            </h2>
          </motion.div>

          {/* Asymmetric Two-Column Layout: Left Large Photo (~47%) + Right 2x2 Grid (~53%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
            {/* LEFT — LARGE VERTICAL PHOTOGRAPH (~46-48% width on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: easeCurve }}
              className="lg:col-span-6 xl:col-span-6 relative rounded-[24px] sm:rounded-[26px] overflow-hidden min-h-[380px] sm:min-h-[480px] lg:min-h-[590px] bg-[var(--taxa-dark-card)] shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            >
              <img
                src="/assets/aistudio/Advisor_reviewing_financial_docu_opt.webp"
                alt="Confident financial advisor seated at a desk in a modern bright office working with a tablet and financial documents"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* RIGHT — 2x2 GRID OF FOUR DARK FEATURE CARDS (~52-54% width on desktop) */}
            <div className="lg:col-span-6 xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
              {FEATURE_CARDS.map((card, idx) => {
                const isPhotoCard = Boolean(card.hasBackgroundImage && card.backgroundImage);

                return (
                  <motion.div
                    key={card.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`${card.title} — Discover More`}
                    onClick={() => onOpenConsultation(card.title)}
                    onKeyDown={(e) => handleCardKeyDown(e, card.title)}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: idx * 0.09, ease: easeCurve }}
                    style={{
                      transition: 'border 300ms cubic-bezier(0.22, 1, 0.36, 1), background 300ms cubic-bezier(0.22, 1, 0.36, 1), transform 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    className={`group relative rounded-[22px] sm:rounded-[24px] p-6 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] ${
                      isPhotoCard
                        ? 'bg-[var(--taxa-dark-card)] border-white/[0.08] hover:border-[var(--taxa-accent)]/35'
                        : 'bg-[var(--taxa-dark-card)] hover:bg-[var(--taxa-dark-card-hover)] border-white/[0.06] hover:border-white/[0.15]'
                    }`}
                  >
                    {/* Photographic Card Background + Controlled Dark Overlay */}
                    {isPhotoCard && (
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                          src={card.backgroundImage}
                          alt={card.backgroundAlt || card.title}
                          loading="lazy"
                          decoding="async"
                          style={{
                            transition: 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1)',
                          }}
                          className="w-full h-full object-cover object-center group-hover:scale-[1.04]"
                        />
                        {/* Controlled dark overlay for crisp text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[var(--taxa-dark-bg-2)]/60 via-[var(--taxa-dark-bg-2)]/80 to-[var(--taxa-dark-bg-2)]/95 transition-opacity duration-300 group-hover:opacity-95" />
                      </div>
                    )}

                    {/* Subtle Ambient Corner Sheen for Solid Charcoal Cards */}
                    {!isPhotoCard && (
                      <div
                        className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/[0.03] via-transparent to-[var(--taxa-accent)]/[0.05]"
                        aria-hidden="true"
                      />
                    )}

                    {/* Card Top: White Rounded Square Outer + Soft Inner Icon Block */}
                    <div className="relative z-10 mb-5">
                      <div className="w-[56px] h-[56px] rounded-[15px] bg-white p-[5px] shadow-[0_6px_18px_rgba(0,0,0,0.2)] transition-transform duration-300">
                        <div className="w-full h-full rounded-[11px] taxa-card-gradient text-[var(--taxa-accent-text-dark)] flex items-center justify-center transition-all duration-300">
                          {card.icon}
                        </div>
                      </div>
                    </div>

                    {/* Card Body: Title & Description */}
                    <div className="relative z-10 flex-1 flex flex-col justify-start">
                      <h3 className="text-[20px] sm:text-[21px] font-bold tracking-[-0.02em] text-white mb-2.5">
                        {card.title}
                      </h3>
                      <p className="text-[13.5px] sm:text-[14px] text-white/80 leading-[1.6] mb-6">
                        {card.description}
                      </p>
                    </div>

                    {/* Card Footer: Discover More → Link */}
                    <div className="relative z-10 pt-1">
                      <span className="inline-flex items-center gap-2 text-[13.5px] sm:text-[14px] font-semibold text-white group-hover:text-[var(--taxa-accent)] transition-colors duration-250">
                        <span>Discover More</span>
                        <ArrowRight
                          style={{
                            transition: 'transform 280ms cubic-bezier(0.22, 1, 0.36, 1)',
                          }}
                          className="w-4 h-4 group-hover:translate-x-1.5"
                        />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
