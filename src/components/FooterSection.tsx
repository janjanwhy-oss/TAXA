import React, { useState } from 'react';
import { Send, ArrowUp, X, CheckCircle2, AlertCircle } from 'lucide-react';

interface FooterSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
  onNavigateServices?: () => void;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenConsultation,
  onNavigateServices,
  onNavigateHome,
  onNavigate,
}) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!consent) {
      setStatus('error');
      setErrorMessage('Please accept the Privacy Policy to proceed.');
      return;
    }

    // Validation succeeded - prepared for newsletter integration
    setStatus('success');
    setEmail('');
    setConsent(false);
  };

  const handleLinkClick = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollToTop();
    }
  };

  // Flowing wavy contour lines for the background
  const waveLines = Array.from({ length: 32 }, (_, i) => {
    const offset = i * 14;
    return {
      key: i,
      path: `M -100 ${120 + offset * 0.9} C 300 ${80 - offset * 0.4}, 700 ${320 + offset * 0.8}, 1100 ${180 - offset * 0.5} C 1450 ${70 + offset * 0.7}, 1750 ${350 + offset * 0.4}, 2050 ${240}`,
    };
  });

  return (
    <footer
      className="relative w-full bg-[var(--taxa-dark-bg-1)] text-white pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 px-5 sm:px-10 lg:px-16 rounded-t-[36px] sm:rounded-t-[48px] overflow-hidden select-none"
      aria-label="Footer"
    >
      {/* 1. Subtle Flowing Green Curved-Line Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.22]"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full min-w-[1400px]"
          viewBox="0 0 1920 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="footerWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--taxa-wave-stop1)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="var(--taxa-wave-stop2)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--taxa-wave-stop3)" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          {waveLines.map((line) => (
            <path
              key={line.key}
              d={line.path}
              stroke="url(#footerWaveGradient)"
              strokeWidth="0.85"
              strokeDasharray={line.key % 3 === 0 ? '4 3' : 'none'}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* Main Footer Content: Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* LEFT — BRAND COLUMN (Approx 40%) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Taxa Brand Logo */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateHome) onNavigateHome();
                  else scrollToTop();
                }}
                className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8ef78b] rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-90"
                aria-label="Taxa Homepage"
              >
                <img
                  src="/assets/taxa_logo.png"
                  alt="Taxa"
                  className="w-[120px] sm:w-[130px] md:w-[138px] h-auto object-contain select-none"
                  width={138}
                  height={36}
                />
              </a>

              {/* Supporting Text */}
              <p className="text-sm sm:text-[15px] text-neutral-400 max-w-sm mt-4 leading-relaxed font-normal">
                Helping UAE businesses navigate tax, accounting, and financial decisions with confidence.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mt-10 lg:mt-16">
              <h4 className="text-white font-semibold text-sm sm:text-base tracking-wide mb-3">
                Stay Connected
              </h4>
              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Taxa Advisory on LinkedIn"
                  className="group w-[54px] h-[54px] rounded-full border border-white/20 bg-white/[0.04] text-[#E8EDE9] flex items-center justify-center cursor-pointer transition-all duration-300 ease-out hover:bg-[var(--taxa-accent)] hover:border-[var(--taxa-accent)] hover:text-[var(--taxa-accent-text-dark)] hover:-translate-y-[3px] hover:shadow-[0_4px_20px_var(--taxa-accent-glow)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] focus-visible:bg-[var(--taxa-accent)] focus-visible:border-[var(--taxa-accent)] focus-visible:text-[var(--taxa-accent-text-dark)] focus-visible:-translate-y-[3px] focus-visible:shadow-[0_4px_20px_var(--taxa-accent-glow)] motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  <svg
                    className="w-[22px] h-[22px] fill-current transition-colors duration-300"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Taxa Advisory on Facebook"
                  className="group w-[54px] h-[54px] rounded-full border border-white/20 bg-white/[0.04] text-[#E8EDE9] flex items-center justify-center cursor-pointer transition-all duration-300 ease-out hover:bg-[var(--taxa-accent)] hover:border-[var(--taxa-accent)] hover:text-[var(--taxa-accent-text-dark)] hover:-translate-y-[3px] hover:shadow-[0_4px_20px_var(--taxa-accent-glow)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] focus-visible:bg-[var(--taxa-accent)] focus-visible:border-[var(--taxa-accent)] focus-visible:text-[var(--taxa-accent-text-dark)] focus-visible:-translate-y-[3px] focus-visible:shadow-[0_4px_20px_var(--taxa-accent-glow)] motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  <svg
                    className="w-[22px] h-[22px] fill-current transition-colors duration-300"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Taxa Advisory on Instagram"
                  className="group w-[54px] h-[54px] rounded-full border border-white/20 bg-white/[0.04] text-[#E8EDE9] flex items-center justify-center cursor-pointer transition-all duration-300 ease-out hover:bg-[var(--taxa-accent)] hover:border-[var(--taxa-accent)] hover:text-[var(--taxa-accent-text-dark)] hover:-translate-y-[3px] hover:shadow-[0_4px_20px_var(--taxa-accent-glow)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] focus-visible:bg-[var(--taxa-accent)] focus-visible:border-[var(--taxa-accent)] focus-visible:text-[var(--taxa-accent-text-dark)] focus-visible:-translate-y-[3px] focus-visible:shadow-[0_4px_20px_var(--taxa-accent-glow)] motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  <svg
                    className="w-[22px] h-[22px] fill-none stroke-current transition-colors duration-300"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Taxa Advisory on X"
                  className="group w-[54px] h-[54px] rounded-full border border-white/20 bg-white/[0.04] text-[#E8EDE9] flex items-center justify-center cursor-pointer transition-all duration-300 ease-out hover:bg-[var(--taxa-accent)] hover:border-[var(--taxa-accent)] hover:text-[var(--taxa-accent-text-dark)] hover:-translate-y-[3px] hover:shadow-[0_4px_20px_var(--taxa-accent-glow)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] focus-visible:bg-[var(--taxa-accent)] focus-visible:border-[var(--taxa-accent)] focus-visible:text-[var(--taxa-accent-text-dark)] focus-visible:-translate-y-[3px] focus-visible:shadow-[0_4px_20px_var(--taxa-accent-glow)] motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  <svg
                    className="w-[21px] h-[21px] fill-current transition-colors duration-300"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — NEWSLETTER AND THREE LINK COLUMNS (Approx 60%) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Newsletter Area */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Stay Informed With Taxa
              </h3>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative flex items-center bg-[#f0f2f1] rounded-2xl p-1.5 max-w-xl shadow-lg transition-all focus-within:ring-2 focus-within:ring-[var(--taxa-accent)]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address"
                    className="w-full bg-transparent text-neutral-900 placeholder:text-neutral-500 text-sm sm:text-base px-4 py-2.5 focus:outline-none"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="group taxa-btn-primary font-bold px-4 py-2.5 rounded-xl hover:brightness-105 transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-xs"
                  >
                    <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--taxa-accent-text-dark)]" />
                  </button>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-0.5">
                  <input
                    type="checkbox"
                    id="footer-consent"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (status === 'error') setStatus('idle');
                    }}
                    className="mt-0.5 w-4 h-4 rounded text-[var(--taxa-accent)] focus:ring-[var(--taxa-accent)] bg-neutral-800 border-white/20 cursor-pointer accent-[var(--taxa-accent)]"
                  />
                  <label
                    htmlFor="footer-consent"
                    className="text-xs sm:text-[13px] text-neutral-400 select-none cursor-pointer"
                  >
                    I agree to receive updates and accept the{' '}
                    <button
                      type="button"
                      onClick={() => setActiveModal('privacy')}
                      className="text-neutral-300 underline hover:text-[var(--taxa-accent)] transition-colors"
                    >
                      Privacy Policy
                    </button>
                    .
                  </label>
                </div>

                {/* Feedback notifications */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-xs text-rose-400 pt-1 animate-in fade-in">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                {status === 'success' && (
                  <div className="flex items-center gap-2 text-xs text-[var(--taxa-accent)] pt-1 animate-in fade-in">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Thank you for subscribing! Your request has been recorded.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Horizontal Divider Line between newsletter & link columns */}
            <div className="border-t border-white/10 my-8 sm:my-10" />

            {/* Three Link Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              {/* COLUMN 01 — SERVICES */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateServices) onNavigateServices();
                    else handleNavigate('/services');
                  }}
                  className="text-white font-semibold text-sm sm:text-base tracking-wide mb-4 hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer focus:outline-none focus-visible:text-[var(--taxa-accent)]"
                >
                  Services
                </button>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                  <li>
                    <a
                      href="/services/corporate-tax"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/services/corporate-tax');
                      }}
                      className="group inline-flex items-center gap-1.5 text-neutral-400 hover:text-[var(--taxa-accent)] transition-colors duration-250 cursor-pointer focus:outline-none focus-visible:text-[var(--taxa-accent)] focus-visible:underline rounded-xs"
                    >
                      <span>Corporate Tax</span>
                      <svg
                        className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-250 ease-out text-[var(--taxa-accent)] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/vat"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/services/vat');
                      }}
                      className="group inline-flex items-center gap-1.5 text-neutral-400 hover:text-[var(--taxa-accent)] transition-colors duration-250 cursor-pointer focus:outline-none focus-visible:text-[var(--taxa-accent)] focus-visible:underline rounded-xs"
                    >
                      <span>VAT</span>
                      <svg
                        className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-250 ease-out text-[var(--taxa-accent)] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/excise-tax"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/services/excise-tax');
                      }}
                      className="group inline-flex items-center gap-1.5 text-neutral-400 hover:text-[var(--taxa-accent)] transition-colors duration-250 cursor-pointer focus:outline-none focus-visible:text-[var(--taxa-accent)] focus-visible:underline rounded-xs"
                    >
                      <span>Excise Tax</span>
                      <svg
                        className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-250 ease-out text-[var(--taxa-accent)] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/bookkeeping-accounting"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/services/bookkeeping-accounting');
                      }}
                      className="group inline-flex items-center gap-1.5 text-neutral-400 hover:text-[var(--taxa-accent)] transition-colors duration-250 cursor-pointer focus:outline-none focus-visible:text-[var(--taxa-accent)] focus-visible:underline rounded-xs"
                    >
                      <span>Bookkeeping &amp; Accounting</span>
                      <svg
                        className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-250 ease-out text-[var(--taxa-accent)] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/auditing"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/services/auditing');
                      }}
                      className="group inline-flex items-center gap-1.5 text-neutral-400 hover:text-[var(--taxa-accent)] transition-colors duration-250 cursor-pointer focus:outline-none focus-visible:text-[var(--taxa-accent)] focus-visible:underline rounded-xs"
                    >
                      <span>Auditing Services</span>
                      <svg
                        className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-250 ease-out text-[var(--taxa-accent)] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/business-advisory"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/services/business-advisory');
                      }}
                      className="group inline-flex items-center gap-1.5 text-neutral-400 hover:text-[var(--taxa-accent)] transition-colors duration-250 cursor-pointer focus:outline-none focus-visible:text-[var(--taxa-accent)] focus-visible:underline rounded-xs"
                    >
                      <span>Business Advisory</span>
                      <svg
                        className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-250 ease-out text-[var(--taxa-accent)] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              {/* COLUMN 02 — COMPANY */}
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-base tracking-wide mb-4">
                  Company
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                  <li>
                    <button
                      onClick={() => {
                        if (onNavigateHome) onNavigateHome();
                        else scrollToTop();
                      }}
                      className="hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('who-we-are')}
                      className="hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('our-team')}
                      className="hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer"
                    >
                      Our Team
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('work-process')}
                      className="hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer"
                    >
                      Our Process
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('testimonials')}
                      className="hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer"
                    >
                      Testimonials
                    </button>
                  </li>
                </ul>
              </div>

              {/* COLUMN 03 — QUICK LINKS */}
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-base tracking-wide mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                  <li>
                    <button
                      onClick={() => handleLinkClick('contact-consultation')}
                      className="hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer"
                    >
                      Contact Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onOpenConsultation()}
                      className="hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer"
                    >
                      Book Consultation
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('faq')}
                      className="hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer"
                    >
                      FAQs
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveModal('privacy')}
                      className="hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveModal('terms')}
                      className="hover:text-[var(--taxa-accent)] transition-colors text-left cursor-pointer"
                    >
                      Terms &amp; Conditions
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="border-t border-white/10 pt-8 mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-neutral-400 text-center sm:text-left">
            © 2026 Taxa Advisory. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400">
              <button
                onClick={() => setActiveModal('privacy')}
                className="hover:text-[var(--taxa-accent)] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setActiveModal('terms')}
                className="hover:text-[var(--taxa-accent)] transition-colors cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
            </div>

            {/* Back to top button matching reference's compact green square with black upward arrow */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="w-9 h-9 rounded-lg taxa-card-gradient text-[var(--taxa-accent-text-dark)] flex items-center justify-center transition-all cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--taxa-accent)] active:scale-95"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Legal Modals for Privacy Policy & Terms */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[var(--taxa-dark-card)] border border-white/15 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 text-neutral-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {activeModal === 'privacy' ? (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Taxa Advisory — Privacy Policy
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <p>
                    Taxa Advisory (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting the privacy of your personal and business financial data in compliance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and DIFC Data Protection Law.
                  </p>
                  <h4 className="text-sm font-semibold text-white pt-2">1. Information Collection</h4>
                  <p>
                    We collect corporate information, tax identification numbers, contact details, and financial documentation provided voluntarily during consultations, VAT registrations, or corporate tax filings.
                  </p>
                  <h4 className="text-sm font-semibold text-white pt-2">2. Use of Information</h4>
                  <p>
                    Data is used exclusively to fulfill statutory compliance, provide accounting guidance, file required returns with the Federal Tax Authority (FTA), and deliver requested advisory updates.
                  </p>
                  <h4 className="text-sm font-semibold text-white pt-2">3. Data Security &amp; Confidentiality</h4>
                  <p>
                    All accounting records and personal disclosures are maintained under strict non-disclosure safeguards and encrypted transmission standards within our UAE operating environment.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Taxa Advisory — Terms &amp; Conditions
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <p>
                    Welcome to Taxa Advisory. By accessing our platform or engaging our corporate tax, VAT, and accounting services, you agree to comply with the following terms governed by the laws of the United Arab Emirates.
                  </p>
                  <h4 className="text-sm font-semibold text-white pt-2">1. Scope of Advisory</h4>
                  <p>
                    Our services constitute professional tax, accounting, and business advisory based on the Federal Tax Authority (FTA) guidelines. Final tax liabilities and statutory declarations remain the legal responsibility of the taxable person or entity.
                  </p>
                  <h4 className="text-sm font-semibold text-white pt-2">2. Client Responsibilities</h4>
                  <p>
                    Clients agree to provide accurate, complete, and timely accounting records, invoices, and bank statements necessary for prompt preparation and filing of returns.
                  </p>
                  <h4 className="text-sm font-semibold text-white pt-2">3. Jurisdiction</h4>
                  <p>
                    Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the Courts of the Dubai International Financial Centre (DIFC) or the competent courts of Dubai, UAE.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl taxa-btn-primary font-semibold text-xs sm:text-sm hover:brightness-105 transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
