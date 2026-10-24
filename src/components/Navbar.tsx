import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Search,
  LayoutGrid,
  Menu,
  X,
  FileSpreadsheet,
  Receipt,
  Scale,
  Calculator,
  ShieldCheck,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
  onOpenSearch: () => void;
  onOpenQuickTools: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

const SERVICES_LIST = [
  {
    name: 'Corporate Tax',
    slug: '/services/corporate-tax',
    desc: 'UAE 9% federal corporate tax compliance, grouping & returns',
    icon: Scale,
  },
  {
    name: 'VAT',
    slug: '/services/vat',
    desc: '5% Value Added Tax registration, filing & voluntary disclosures',
    icon: Receipt,
  },
  {
    name: 'Excise Tax',
    slug: '/services/excise-tax',
    desc: 'Regulated inventory compliance, warehouse registration & reporting',
    icon: FileSpreadsheet,
  },
  {
    name: 'Bookkeeping & Accounting',
    slug: '/services/bookkeeping-accounting',
    desc: 'IFRS compliant monthly financial records, ledger & payroll',
    icon: Calculator,
  },
  {
    name: 'Auditing Services',
    slug: '/services/auditing',
    desc: 'Statutory annual audits & internal governance for UAE licenses',
    icon: ShieldCheck,
  },
  {
    name: 'Business Advisory',
    slug: '/services/business-advisory',
    desc: 'Free zone qualifying status, mainland restructuring & M&A',
    icon: Briefcase,
  },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenSearch,
  onOpenQuickTools,
  currentPath = '/',
  onNavigate,
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Scroll detection to subtly increase glass opacity for readability while floating
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or on Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isServicesPage = currentPath === '/services' || currentPath?.startsWith('/services');

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.location.href = '/';
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.location.href = '/';
    }
  };

  const handleServicesNav = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('/services');
    } else {
      window.location.href = '/services';
    }
  };

  // Frosted glassmorphism background style driven by centralized theme variables
  const navBackgroundStyle: React.CSSProperties = {
    background: isScrolled
      ? 'var(--taxa-nav-glass-scrolled)'
      : 'var(--taxa-nav-glass)',
    backdropFilter: 'blur(20px) saturate(140%)',
    WebkitBackdropFilter: 'blur(20px) saturate(140%)',
    border: '1px solid var(--taxa-nav-border)',
    boxShadow: isScrolled
      ? '0 14px 35px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.08)'
      : '0 10px 30px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.07)',
  };

  return (
    <>
      {/* Fixed Floating Navigation Bar with Controlled Centered Width */}
      <header
        ref={headerRef}
        className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-300"
      >
        <nav
          aria-label="Main Navigation"
          style={navBackgroundStyle}
          className="pointer-events-auto w-[calc(100%-24px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-96px)] max-w-[1320px] h-[64px] sm:h-[68px] rounded-full px-4 sm:px-6 md:px-8 flex items-center justify-between transition-all duration-300 ease-out"
        >
          {/* Left: Brand Logo */}
          <div className="flex items-center shrink-0">
            <a
              href="/"
              onClick={handleBrandClick}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-90"
              aria-label="Taxa Homepage"
            >
              <img
                src="/assets/taxa_logo.png"
                alt="Taxa"
                className="w-[65px] sm:w-[68px] md:w-[72px] h-auto object-contain select-none block"
                width={72}
                height={19}
              />
            </a>
          </div>

          {/* Center: Main Menu (Desktop) */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-3 text-sm font-medium">
            {/* Home Link */}
            <a
              href="/"
              onClick={handleHomeClick}
              className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-250 ease-out hover:bg-white/10 hover:-translate-y-[1px] active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--taxa-accent)]/50 ${
                !isServicesPage
                  ? 'text-white'
                  : 'text-neutral-300 hover:text-[var(--taxa-accent)]'
              }`}
            >
              {!isServicesPage && (
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--taxa-accent)] shadow-[0_0_8px_var(--taxa-glow)]"
                  aria-hidden="true"
                />
              )}
              <span className={!isServicesPage ? 'font-semibold text-white' : 'font-medium group-hover:text-[var(--taxa-accent)]'}>
                Home
              </span>
            </a>

            {/* Services Link with Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              <div
                className={`group flex items-center rounded-full transition-all duration-250 ease-out px-3.5 py-1.5 hover:-translate-y-[1px] active:translate-y-0 ${
                  isServicesOpen
                    ? 'bg-white/10 text-[var(--taxa-accent)]'
                    : 'hover:bg-white/10'
                }`}
              >
                {isServicesPage && (
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[var(--taxa-accent)] shadow-[0_0_8px_var(--taxa-glow)] mr-2"
                    aria-hidden="true"
                  />
                )}
                {/* Separate Target 1: Clickable link directly navigating to /services */}
                <a
                  href="/services"
                  onClick={handleServicesNav}
                  className={`text-sm transition-colors duration-250 cursor-pointer focus:outline-none focus-visible:text-[var(--taxa-accent)] ${
                    isServicesPage
                      ? 'text-white font-semibold'
                      : 'text-neutral-300 group-hover:text-[var(--taxa-accent)] font-medium'
                  }`}
                >
                  Services
                </a>

                {/* Separate Target 2: Chevron button that toggles the dropdown */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsServicesOpen((prev) => !prev);
                  }}
                  aria-label="Toggle Services dropdown"
                  aria-expanded={isServicesOpen}
                  className="p-1 ml-0.5 text-neutral-400 group-hover:text-[var(--taxa-accent)] transition-colors duration-250 cursor-pointer focus:outline-none rounded-full"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-250 ease-out ${
                      isServicesOpen ? 'rotate-180 text-[var(--taxa-accent)]' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  style={{
                    background: 'var(--taxa-nav-dropdown)',
                    backdropFilter: 'blur(20px) saturate(140%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(140%)',
                    border: '1px solid var(--taxa-nav-border)',
                    boxShadow:
                      '0 20px 50px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.08)',
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-80 sm:w-96 rounded-2xl p-2.5 sm:p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50 overflow-visible before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:content-['']"
                >
                  <div className="px-3 py-2 border-b border-white/10 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--taxa-accent)]">
                      Practice Areas • Dubai & UAE
                    </span>
                  </div>
                  {SERVICES_LIST.map((svc) => {
                    const Icon = svc.icon;
                    const isSelected = currentPath === svc.slug;

                    return (
                      <button
                        key={svc.name}
                        onClick={() => {
                          setIsServicesOpen(false);
                          if (onNavigate) {
                            onNavigate(svc.slug);
                          } else {
                            window.location.href = svc.slug;
                          }
                        }}
                        className={`group/item relative z-10 hover:z-20 w-full text-left p-2.5 rounded-xl flex items-start gap-3 cursor-pointer will-change-transform transform-gpu origin-left transition-all duration-[240ms] ease-out hover:scale-[1.025] hover:translate-x-[4px] hover:bg-[#8ef78b]/[0.08] hover:border-[var(--taxa-accent)]/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.35),0_0_12px_rgba(142,247,139,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)] focus-visible:scale-[1.025] focus-visible:translate-x-[4px] focus-visible:bg-[#8ef78b]/[0.08] ${
                          isSelected
                            ? 'bg-white/[0.12] border border-[var(--taxa-accent)]/40 shadow-xs'
                            : 'border border-transparent'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-[240ms] ease-out shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-[var(--taxa-accent)]/20 border-[var(--taxa-accent)] text-[var(--taxa-accent)]'
                              : 'bg-white/5 border-white/10 group-hover/item:border-[var(--taxa-accent)]/60 group-hover/item:bg-[var(--taxa-accent)]/20 text-neutral-400 group-hover/item:text-[var(--taxa-accent)] group-hover/item:shadow-[0_0_10px_rgba(142,247,139,0.2)]'
                          }`}
                        >
                          <Icon className="w-4 h-4 transition-colors duration-[240ms]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-xs sm:text-sm font-semibold transition-colors duration-[240ms] flex items-center justify-between ${
                              isSelected
                                ? 'text-[var(--taxa-accent)]'
                                : 'text-white group-hover/item:text-[var(--taxa-accent)]'
                            }`}
                          >
                            <span>{svc.name}</span>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--taxa-accent)] shadow-[0_0_6px_var(--taxa-accent)]" />
                            )}
                          </div>
                          <p className="text-[11px] text-neutral-400 line-clamp-1 transition-colors duration-[240ms] group-hover/item:text-neutral-300">
                            {svc.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <button
              onClick={() => onOpenConsultation()}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-neutral-300 hover:text-[var(--taxa-accent)] hover:bg-white/10 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-250 ease-out cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--taxa-accent)]/50"
            >
              Contact
            </button>
          </div>

          {/* Right side: Circular Utility Icons + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Search Icon Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search advisory topics and regulations"
              title="Search Tax Topics"
              style={{
                background: 'rgba(10, 20, 37, 0.65)',
                border: '1px solid var(--taxa-nav-border)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
              }}
              className="group w-[40px] h-[40px] rounded-full hover:bg-[var(--taxa-accent)]/15 hover:border-[var(--taxa-accent)]/40 hover:-translate-y-[1px] active:translate-y-0 flex items-center justify-center text-white/80 hover:text-[var(--taxa-accent)] transition-all duration-250 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)]"
            >
              <Search className="w-4 h-4 text-white/80 group-hover:text-[var(--taxa-accent)] transition-colors duration-250" />
            </button>

            {/* 4-Square Grid Utility Icon */}
            <button
              onClick={onOpenQuickTools}
              aria-label="Open UAE tax tools and compliance overview"
              title="UAE Tax Rates & Compliance Guide"
              style={{
                background: 'rgba(10, 20, 37, 0.65)',
                border: '1px solid var(--taxa-nav-border)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
              }}
              className="group w-[40px] h-[40px] rounded-full hover:bg-[var(--taxa-accent)]/15 hover:border-[var(--taxa-accent)]/40 hover:-translate-y-[1px] active:translate-y-0 flex items-center justify-center text-white/80 hover:text-[var(--taxa-accent)] transition-all duration-250 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxa-accent)]"
            >
              <LayoutGrid className="w-4 h-4 text-white/80 group-hover:text-[var(--taxa-accent)] transition-colors duration-250" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              style={{
                background: 'rgba(10, 20, 37, 0.65)',
                border: '1px solid var(--taxa-nav-border)',
              }}
              className="md:hidden w-[40px] h-[40px] rounded-full hover:bg-[var(--taxa-accent)]/15 hover:border-[var(--taxa-accent)]/40 flex items-center justify-center text-white/80 hover:text-[var(--taxa-accent)] transition-all duration-250 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div
            style={{
              background: 'var(--taxa-nav-dropdown)',
              backdropFilter: 'blur(20px) saturate(140%)',
              WebkitBackdropFilter: 'blur(20px) saturate(140%)',
              border: '1px solid var(--taxa-nav-border)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.65)',
            }}
            className="pointer-events-auto md:hidden mt-2.5 w-[calc(100%-16px)] sm:w-[calc(100%-48px)] max-w-[1200px] rounded-2xl p-5 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200"
          >
            <div className="flex flex-col space-y-2 border-b border-white/10 pb-4">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  if (onNavigate) onNavigate('/');
                  else window.location.href = '/';
                }}
                className="flex items-center gap-2 text-white font-medium text-sm py-1.5 cursor-pointer"
              >
                {!isServicesPage && <span className="w-1.5 h-1.5 rounded-full bg-[var(--taxa-accent)]" />}
                Home
              </a>
              <div className="py-1">
                <div className="flex items-center justify-between mb-2">
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleServicesNav();
                    }}
                    className="text-[11px] font-bold uppercase tracking-wider text-[var(--taxa-accent)] hover:underline cursor-pointer"
                  >
                    Services
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {SERVICES_LIST.map((s) => {
                    const isSelected = currentPath === s.slug;

                    return (
                      <button
                        key={s.name}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          if (onNavigate) {
                            onNavigate(s.slug);
                          } else {
                            window.location.href = s.slug;
                          }
                        }}
                        className={`text-left text-xs py-1.5 flex items-center justify-between cursor-pointer transition-colors ${
                          isSelected ? 'text-[var(--taxa-accent)] font-semibold' : 'text-neutral-300 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[var(--taxa-accent)]" />}
                          <span>{s.name}</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-neutral-500" />
                      </button>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="text-left text-neutral-300 hover:text-white font-medium text-sm py-1.5 cursor-pointer"
              >
                Contact
              </button>
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 taxa-btn-primary font-semibold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--taxa-accent-text-dark)]" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* In-flow spacer so existing hero sections and titles preserve their exact original top spacing */}
      <div className="w-full h-[72px] sm:h-[78px] pointer-events-none select-none shrink-0" aria-hidden="true" />
    </>
  );
};
