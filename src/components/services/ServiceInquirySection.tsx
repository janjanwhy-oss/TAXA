import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, ChevronDown, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface ServiceInquirySectionProps {
  initialService?: string;
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

export const ServiceInquirySection: React.FC<ServiceInquirySectionProps> = ({
  initialService = 'Corporate Tax Compliance',
}) => {
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: initialService,
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
    'Technology Upgrade & ERP',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
    // Simulate high-reliability API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: 'Corporate Tax Compliance',
        message: '',
      });
    }, 600);
  };

  return (
    <section
      id="service-inquiry"
      className="relative w-full bg-[#f4f5f5] py-20 sm:py-28 px-4 sm:px-8 lg:px-14 overflow-hidden text-neutral-900"
    >
      {/* Dotted World Map Background Pattern matching screenshot */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.055] bg-[radial-gradient(#101010_1.5px,transparent_1.5px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Approx 45%) */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <div>
              {/* Eyebrow: ● — Let's Chat — ● */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                <span className="w-4 h-[1.5px] bg-neutral-900" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-900">
                  Let&apos;s Chat
                </span>
                <span className="w-4 h-[1.5px] bg-neutral-900" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                Submit Your Inquiry
              </h2>

              {/* Subtitle */}
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
                Vehicula praesent dui felis venenatis ultrices proin libero. Blandit quis suspendisse aliquet nisi sodales consequat magna.
              </p>
            </div>

            {/* 4 Contact Info Blocks (2x2 Grid) matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {/* 1. Visit Us Here */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#7eec94] flex items-center justify-center text-neutral-950 shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 fill-neutral-950/20" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 mb-1">
                    Visit Us Here
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Gate Precinct 4, Level 4, DIFC, Downtown Dubai
                  </p>
                </div>
              </div>

              {/* 2. Talk To Us */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl taxa-card-gradient flex items-center justify-center text-[var(--taxa-accent-text-dark)] shrink-0 shadow-xs">
                  <Phone className="w-5 h-5 fill-neutral-950/20" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 mb-1">
                    Talk To Us
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-mono">
                    +971 4 398 2211
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed font-mono">
                    +971 50 842 1900
                  </p>
                </div>
              </div>

              {/* 3. In-Office Days */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl taxa-card-gradient flex items-center justify-center text-[var(--taxa-accent-text-dark)] shrink-0 shadow-xs">
                  <Clock className="w-5 h-5 fill-neutral-950/20" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 mb-1">
                    In-Office Days
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Mon to Sat : 09am – 07pm
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Sunday : Closed
                  </p>
                </div>
              </div>

              {/* 4. Email Us */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl taxa-card-gradient flex items-center justify-center text-[var(--taxa-accent-text-dark)] shrink-0 shadow-xs">
                  <Mail className="w-5 h-5 fill-neutral-950/20" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 mb-1">
                    Email Us
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed truncate max-w-[170px]">
                    advisory@taxaadvisory.ae
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed truncate max-w-[170px]">
                    support@taxaadvisory.ae
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Approx 55%): Rounded White Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[36px] p-8 sm:p-11 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-neutral-100 relative">
              {isSubmitted ? (
                <div className="py-16 px-6 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-[var(--taxa-accent)]/20 text-[var(--taxa-primary)] rounded-full flex items-center justify-center mx-auto mb-5 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Inquiry Submitted Successfully
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you for reaching out to Taxa Advisory. A senior tax partner will review your requirements and get in touch within 2 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#101010] text-white px-7 py-3 rounded-full text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
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
                        className={`w-full bg-[#f4f5f5] text-neutral-900 placeholder:text-neutral-400 text-sm rounded-xl px-4 py-3.5 border focus:outline-none transition-colors ${
                          errors.firstName ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-[var(--taxa-accent)]'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.firstName}
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
                        className={`w-full bg-[#f4f5f5] text-neutral-900 placeholder:text-neutral-400 text-sm rounded-xl px-4 py-3.5 border focus:outline-none transition-colors ${
                          errors.lastName ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-[var(--taxa-accent)]'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.lastName}
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
                        className={`w-full bg-[#f4f5f5] text-neutral-900 placeholder:text-neutral-400 text-sm rounded-xl px-4 py-3.5 border focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-[var(--taxa-accent)]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
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
                        className={`w-full bg-[#f4f5f5] text-neutral-900 placeholder:text-neutral-400 text-sm rounded-xl px-4 py-3.5 border focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-[var(--taxa-accent)]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
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
                        className={`w-full bg-[#f4f5f5] text-neutral-900 placeholder:text-neutral-400 text-sm rounded-xl px-4 py-3.5 border focus:outline-none transition-colors ${
                          errors.company ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-[var(--taxa-accent)]'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full bg-[#f4f5f5] text-neutral-900 text-sm rounded-xl px-4 py-3.5 border appearance-none focus:outline-none transition-colors cursor-pointer ${
                          errors.service ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-[var(--taxa-accent)]'
                        }`}
                      >
                        <option value="" disabled>
                          Choose Services*
                        </option>
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      {errors.service && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.service}
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
                      className="w-full bg-[#f4f5f5] text-neutral-900 placeholder:text-neutral-400 text-sm rounded-xl px-4 py-3.5 border border-transparent focus:border-[var(--taxa-accent)] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Row 5: Submit Button matching screenshot */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="taxa-btn-primary hover:opacity-95 text-[var(--taxa-accent-text-dark)] font-semibold px-8 py-3.5 rounded-xl text-sm inline-flex items-center gap-2.5 transition-all shadow-[0_8px_20px_var(--taxa-accent-glow)] cursor-pointer disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
