import React from 'react';
import { X, Calendar, Percent, ShieldCheck, MapPin, Phone, ExternalLink } from 'lucide-react';

interface QuickToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const QuickToolsModal: React.FC<QuickToolsModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[var(--taxa-dark-card)] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-7 text-white overflow-hidden max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-[var(--taxa-accent)]/20 text-[var(--taxa-accent)] flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">UAE Compliance Overview</h3>
            <p className="text-xs text-neutral-400">Taxa Advisory Quick Reference Guide</p>
          </div>
        </div>

        <div className="space-y-3.5">
          {/* Statutory rates */}
          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
            <span className="text-[11px] font-semibold text-[var(--taxa-accent)] uppercase tracking-wider block">
              Key UAE Tax Rates
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-black/30 p-2.5 rounded-lg border border-white/5">
                <span className="text-neutral-400 block">Corporate Tax</span>
                <span className="text-white font-bold text-sm">9%</span>
                <span className="text-[10px] text-neutral-400 block mt-0.5">Above AED 375,000</span>
              </div>
              <div className="bg-black/30 p-2.5 rounded-lg border border-white/5">
                <span className="text-neutral-400 block">Standard VAT</span>
                <span className="text-white font-bold text-sm">5%</span>
                <span className="text-[10px] text-neutral-400 block mt-0.5">Threshold AED 375,000</span>
              </div>
            </div>
          </div>

          {/* Key Compliance Deadlines */}
          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
            <span className="text-[11px] font-semibold text-[var(--taxa-accent)] uppercase tracking-wider block">
              Upcoming Deadlines
            </span>
            <ul className="text-xs space-y-2 text-neutral-300">
              <li className="flex items-start gap-2">
                <Calendar className="w-3.5 h-3.5 text-[var(--taxa-accent)] shrink-0 mt-0.5" />
                <span><strong>Corporate Tax Return:</strong> Within 9 months of financial year end</span>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="w-3.5 h-3.5 text-[var(--taxa-accent)] shrink-0 mt-0.5" />
                <span><strong>Quarterly VAT:</strong> 28th day following the tax period end</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-2 text-xs">
            <span className="text-[11px] font-semibold text-[var(--taxa-accent)] uppercase tracking-wider block">
              Dubai Headquarters
            </span>
            <div className="flex items-start gap-2 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[var(--taxa-accent)] shrink-0 mt-0.5" />
              <span>Level 24, Al Sa'ada Tower, DIFC, Dubai, United Arab Emirates</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <Phone className="w-3.5 h-3.5 text-[var(--taxa-accent)] shrink-0" />
              <span>+971 4 821 9900</span>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full py-2.5 px-4 taxa-btn-primary text-xs font-semibold rounded-xl transition-colors text-center cursor-pointer shadow-md"
          >
            Book Free Advisory Session
          </button>
        </div>
      </div>
    </div>
  );
};
