import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Building, Mail, Phone, User, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICES = [
  'Corporate Tax Strategy & Filing',
  'VAT Health Check & Compliance',
  'Excise Tax Advisory',
  'Bookkeeping & Accounting (IFRS)',
  'Statutory & Internal Audit',
  'Free Zone vs Mainland Advisory',
];

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [service, setService] = useState(initialService || SERVICES[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '10:00 AM',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[var(--taxa-dark-card)] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-white overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative grid in modal */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--taxa-accent) 1px, transparent 1px), linear-gradient(to bottom, var(--taxa-accent) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[var(--taxa-accent)]/20 border border-[var(--taxa-accent)]/40 text-[var(--taxa-accent)] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Consultation Requested
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{formData.name || 'valued client'}</span>. A senior FTA-registered tax advisor from Taxa Advisory will confirm your session for <span className="text-[var(--taxa-accent)] font-medium">{service}</span> within 2 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 taxa-btn-primary font-semibold text-sm rounded-xl transition-colors shadow-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[var(--taxa-accent)] font-semibold">
                Direct Advisor Booking
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Schedule a Consultation
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                Discuss UAE corporate tax, VAT compliance, or financial structuring with our certified Dubai partners.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Select Advisory Area
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--taxa-accent)] transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-neutral-900 text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rashid Al Mansoori"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--taxa-accent)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="name@company.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--taxa-accent)] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      required
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--taxa-accent)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Company / Trade License
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Apex Trading FZ-LLC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--taxa-accent)] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-3.5 py-2 text-sm text-white focus:outline-none focus:border-[var(--taxa-accent)] transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Preferred Time (GST)
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--taxa-accent)] transition-colors"
                    >
                      <option value="09:00 AM" className="bg-neutral-900">09:00 AM GST</option>
                      <option value="10:00 AM" className="bg-neutral-900">10:00 AM GST</option>
                      <option value="11:30 AM" className="bg-neutral-900">11:30 AM GST</option>
                      <option value="02:00 PM" className="bg-neutral-900">02:00 PM GST</option>
                      <option value="04:00 PM" className="bg-neutral-900">04:00 PM GST</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 taxa-btn-primary font-semibold text-sm rounded-xl transition-all shadow-[0_8px_20px_var(--taxa-accent-glow)] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Confirm Consultation Request</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-[11px] text-center text-neutral-400">
                🔒 All inquiries handled under strict confidentiality agreements. No upfront fee for initial 30-min discovery.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
