import React, { useState } from 'react';
import { Search, X, ArrowRight, FileText, ChevronRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

const SEARCH_ITEMS = [
  {
    title: 'UAE Corporate Tax Registration & 9% Rate Advisory',
    category: 'Corporate Tax',
    desc: 'Determination of taxable income, free zone qualifying status, and FTA compliance.',
  },
  {
    title: 'VAT Health Check & Return Filing',
    category: 'VAT',
    desc: '5% Value Added Tax compliance, voluntary disclosures, and audit trail validation.',
  },
  {
    title: 'Excise Tax on Regulated Goods',
    category: 'Excise Tax',
    desc: 'Registration requirements for tobacco, energy drinks, and sweetened beverages.',
  },
  {
    title: 'IFRS Bookkeeping & Monthly Financial Statements',
    category: 'Bookkeeping',
    desc: 'Cloud ledger management, payroll processing, and management accounts.',
  },
  {
    title: 'Auditing Services & Statutory Clearance',
    category: 'Auditing',
    desc: 'Annual audit reports required for trade license renewals in UAE free zones.',
  },
  {
    title: 'Free Zone Qualifying Person (QFZP) Optimization',
    category: 'Business Advisory',
    desc: 'De-minimis rules, qualifying intellectual property, and 0% tax compliance.',
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[var(--taxa-dark-card)] border border-white/15 rounded-2xl shadow-2xl p-6 text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Search className="w-5 h-5 text-[var(--taxa-accent)] shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search UAE tax regulations, services, VAT, or advisory..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-2 pr-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-neutral-400 text-sm">
              No matching tax topics or services found for "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectService(item.category);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[var(--taxa-accent)]/40 transition-all flex items-start justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-[var(--taxa-accent)] uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[var(--taxa-accent)] transition-colors">
                    {item.title}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-[var(--taxa-accent)] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </button>
            ))
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
          <span>Press ESC or click outside to dismiss</span>
          <span className="text-[#8ef78b]">Dubai FTA Certified Practice</span>
        </div>
      </div>
    </div>
  );
};
