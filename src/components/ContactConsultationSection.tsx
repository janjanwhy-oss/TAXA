import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, ChevronDown, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface ContactConsultationSectionProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export const ContactConsultationSection: React.FC<ContactConsultationSectionProps> = ({
  onOpenConsultation: _onOpenConsultation,
}) => {
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    'Corporate Tax Compliance',
    'VAT & Excise Advisory',
    'Bookkeeping & Accounting',
    'Auditing & Assurance',
    'Strategic Business Advisory',
    'Transfer Pricing & ESR',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real client request handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#f4f5f5] text-neutral-900 pt-16 sm:pt-24 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-12 select-none overflow-hidden"
      aria-label="Contact and Consultation"
    >
      {/* 1. Subtle Dotted World Map Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.22] flex items-center justify-center"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full object-cover min-w-[1000px] text-neutral-500"
          fill="currentColor"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" />
            </pattern>
            {/* World map silhouette mask */}
            <mask id="world-map-mask">
              <rect width="1200" height="600" fill="black" />
              {/* North America */}
              <ellipse cx="230" cy="190" rx="140" ry="90" fill="white" />
              <ellipse cx="180" cy="140" rx="90" ry="60" fill="white" />
              <ellipse cx="290" cy="140" rx="70" ry="40" fill="white" />
              <ellipse cx="260" cy="270" rx="50" ry="70" fill="white" />
              {/* South America */}
              <ellipse cx="340" cy="400" rx="70" ry="110" fill="white" />
              {/* Europe */}
              <ellipse cx="580" cy="180" rx="75" ry="60" fill="white" />
              <ellipse cx="620" cy="150" rx="60" ry="45" fill="white" />
              {/* Africa */}
              <ellipse cx="600" cy="320" rx="85" ry="100" fill="white" />
              {/* Middle East */}
              <ellipse cx="690" cy="250" rx="55" ry="45" fill="white" />
              {/* Asia */}
              <ellipse cx="800" cy="190" rx="140" ry="90" fill="white" />
              <ellipse cx="900" cy="230" rx="110" ry="75" fill="white" />
              <ellipse cx="770" cy="290" rx="60" ry="50" fill="white" />
              <ellipse cx="860" cy="330" rx="50" ry="40" fill="white" />
              {/* Australia */}
              <ellipse cx="970" cy="430" rx="75" ry="55" fill="white" />
              <ellipse cx="1060" cy="470" rx="30" ry="35" fill="white" />
            </mask>
          </defs>
          <rect width="1200" height="600" fill="url(#dot-grid)" mask="url(#world-map-mask)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: Company Contact Details (~45%) ================= */}
          <div className="lg:col-span-5 flex flex-col pt-2 sm:pt-4">
            
            {/* Eyebrow matching the reference: ● — Let's Start Talking — ● */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 inline-block" />
              <span className="w-8 h-[1.5px] bg-neutral-900 inline-block" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-900 px-1">
                Let's Start Talking
              </span>
              <span className="w-8 h-[1.5px] bg-neutral-900 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 inline-block" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-neutral-900 leading-tight mb-4">
              Send Us Your Query
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-10 max-w-md">
              Have a question about corporate tax, VAT, accounting, or business advisory? Connect with Taxa Advisory and discover how we can support your business with precision.
            </p>

            {/* 2x2 Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              
              {/* 1. Company Address */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs p-2 flex items-center justify-center shrink-0 border border-neutral-200/50">
                  <div className="w-full h-full taxa-card-gradient rounded-xl flex items-center justify-center text-[var(--taxa-accent-text-dark)]">
                    <MapPin className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">
                    Company Address
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-snug">
                    Level 14, Al Sa'ada Tower, DIFC
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-snug">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              {/* 2. Talk To Us */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs p-2 flex items-center justify-center shrink-0 border border-neutral-200/50">
                  <div className="w-full h-full taxa-card-gradient rounded-xl flex items-center justify-center text-[var(--taxa-accent-text-dark)]">
                    <Phone className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">
                    Talk To Us
                  </h3>
                  <a
                    href="tel:+97142883920"
                    className="text-xs sm:text-sm text-neutral-500 hover:text-neutral-900 transition-colors leading-snug"
                  >
                    +971 4 288 3920
                  </a>
                  <a
                    href="tel:+971508924110"
                    className="text-xs sm:text-sm text-neutral-500 hover:text-neutral-900 transition-colors leading-snug"
                  >
                    +971 50 892 4110
                  </a>
                </div>
              </div>

              {/* 3. Office Days */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs p-2 flex items-center justify-center shrink-0 border border-neutral-200/50">
                  <div className="w-full h-full taxa-card-gradient rounded-xl flex items-center justify-center text-[var(--taxa-accent-text-dark)]">
                    <Clock className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">
                    Office Days
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-snug">
                    Mon to Fri: 08:30am–06:00pm
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-snug">
                    Saturday : By Appointment
                  </p>
                </div>
              </div>

              {/* 4. Email Us */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs p-2 flex items-center justify-center shrink-0 border border-neutral-200/50">
                  <div className="w-full h-full taxa-card-gradient rounded-xl flex items-center justify-center text-[var(--taxa-accent-text-dark)]">
                    <Mail className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@taxaadvisory.ae"
                    className="text-xs sm:text-sm text-neutral-500 hover:text-neutral-900 transition-colors leading-snug"
                  >
                    info@taxaadvisory.ae
                  </a>
                  <a
                    href="mailto:support@taxaadvisory.ae"
                    className="text-xs sm:text-sm text-neutral-500 hover:text-neutral-900 transition-colors leading-snug"
                  >
                    support@taxaadvisory.ae
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: Book Your Free Consultation Form (~55%) ================= */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-sm border border-neutral-200/70 relative">
              <h3 className="text-2xl sm:text-[28px] font-bold text-neutral-900 mb-8 tracking-tight">
                Book Your Free Consultation
              </h3>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--taxa-accent)]/20 text-[var(--taxa-primary)] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-2">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-neutral-600 max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-neutral-900">{formData.firstName}</span>. Our senior tax advisor has received your request regarding <span className="font-semibold text-neutral-900">{formData.service}</span> and will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: '',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-neutral-950 underline underline-offset-4 cursor-pointer"
                  >
                    Send Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name*"
                        className={`w-full bg-[#f4f5f5] rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--taxa-accent)] border transition-all ${
                          errors.firstName ? 'border-red-400 ring-1 ring-red-400' : 'border-transparent'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name*"
                        className={`w-full bg-[#f4f5f5] rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--taxa-accent)] border transition-all ${
                          errors.lastName ? 'border-red-400 ring-1 ring-red-400' : 'border-transparent'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email Address & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address*"
                        className={`w-full bg-[#f4f5f5] rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--taxa-accent)] border transition-all ${
                          errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-transparent'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number*"
                        className={`w-full bg-[#f4f5f5] rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--taxa-accent)] border transition-all ${
                          errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-transparent'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Company & Choose Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company*"
                        className={`w-full bg-[#f4f5f5] rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--taxa-accent)] border transition-all ${
                          errors.company ? 'border-red-400 ring-1 ring-red-400' : 'border-transparent'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.company}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full appearance-none bg-[#f4f5f5] rounded-xl px-4 py-3.5 text-sm text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--taxa-accent)] border transition-all cursor-pointer ${
                          !formData.service ? 'text-neutral-400' : 'text-neutral-900'
                        } ${errors.service ? 'border-red-400 ring-1 ring-red-400' : 'border-transparent'}`}
                      >
                        <option value="" disabled>
                          Choose Services*
                        </option>
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="text-neutral-900">
                            {svc}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      {errors.service && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Additional Message */}
                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Additional Message"
                      className="w-full bg-[#f4f5f5] rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--taxa-accent)] border border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-xl taxa-btn-primary font-semibold text-sm hover:opacity-95 active:scale-98 shadow-xs transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Floating Scroll to Top button matching the reference bottom-right */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl taxa-card-gradient text-[var(--taxa-accent-text-dark)] flex items-center justify-center shadow-lg transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
      >
        <span className="text-lg font-bold leading-none">↑</span>
      </button>
    </section>
  );
};
