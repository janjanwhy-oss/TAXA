import React, { useState } from 'react';
import { ArrowRight, Check, Play, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { TAXA_PRACTICE_AREAS, ServiceDetailConfig } from '../../data/servicesData';

interface ServiceDetailContentProps {
  serviceConfig: ServiceDetailConfig;
  onNavigate: (path: string) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ServiceDetailContent: React.FC<ServiceDetailContentProps> = ({
  serviceConfig,
  onNavigate,
  onOpenConsultation,
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 600);
  };

  return (
    <section className="relative w-full bg-[#f4f5f5] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ============================================================ */}
          {/* LEFT CONTENT COLUMN (~68–70% width: lg:col-span-8)          */}
          {/* ============================================================ */}
          <article className="lg:col-span-8 space-y-12 sm:space-y-14">
            {/* 1. PRIMARY SERVICE IMAGE */}
            <div className="w-full h-[340px] sm:h-[440px] lg:h-[480px] rounded-[30px] overflow-hidden shadow-sm bg-neutral-200">
              <img
                src={serviceConfig.primaryImage.url}
                alt={serviceConfig.primaryImage.alt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 2. CONTENT BLOCK 01 */}
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-neutral-900 leading-snug">
                {serviceConfig.introHeading}
              </h2>
              {serviceConfig.introParagraphs.map((para, idx) => (
                <p key={idx} className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* 3. CONTENT BLOCK 02 */}
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-neutral-900 leading-snug">
                {serviceConfig.secondHeading}
              </h3>
              {serviceConfig.secondParagraphs.map((para, idx) => (
                <p key={idx} className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* 4. TWO SUPPORTING IMAGES SIDE-BY-SIDE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {serviceConfig.supportingImages.map((img, idx) => (
                <div key={idx} className="h-60 sm:h-72 rounded-2xl overflow-hidden shadow-xs bg-neutral-200">
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>

            {/* 5. BENEFITS AND COMPLIANCE CHECKLIST */}
            <div className="space-y-6 pt-2">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-neutral-900">
                {serviceConfig.checklistHeading}
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {serviceConfig.checklistIntro}
              </p>

              {/* Checklist Items with Compact Black Circular Checkmark Icons */}
              <ul className="space-y-4 pt-1">
                {serviceConfig.checklistItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3 h-3 stroke-[2.8]" />
                    </span>
                    <span className="text-neutral-800 text-sm sm:text-[15px] font-medium leading-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. SECONDARY CONTENT BLOCK */}
            <div className="space-y-5 pt-2">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-neutral-900 leading-snug">
                {serviceConfig.secondaryContentHeading}
              </h3>
              {serviceConfig.secondaryParagraphs.map((para, idx) => (
                <p key={idx} className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* 7. MEDIA CARD WITH CENTERED GREEN PLAY BUTTON */}
            <div className="space-y-4 pt-2">
              <div className="relative w-full h-[320px] sm:h-[400px] rounded-[30px] overflow-hidden shadow-md bg-neutral-900 group">
                <img
                  src={serviceConfig.mediaCard.imageUrl}
                  alt={serviceConfig.mediaCard.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* Centered Circular Green Play Button */}
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label={`Play ${serviceConfig.name} advisory video briefing`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-18 sm:h-18 rounded-full taxa-card-gradient text-[var(--taxa-accent-text-dark)] flex items-center justify-center shadow-[0_0_35px_var(--taxa-accent-glow)] hover:scale-110 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
                >
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-neutral-950 ml-1" />
                </button>
              </div>

              {/* Supporting Paragraph below media card */}
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                {serviceConfig.closingParagraph}
              </p>
            </div>
          </article>

          {/* ============================================================ */}
          {/* RIGHT SIDEBAR (~30–32% width: lg:col-span-4)                 */}
          {/* ============================================================ */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-6">
            {/* White Rounded Container containing Six Service Buttons & Contact Form */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-neutral-200/70 space-y-8">
              {/* SIX SOFT-GREEN GRADIENT SERVICE BUTTONS */}
              <div className="space-y-3">
                {TAXA_PRACTICE_AREAS.map((svc) => {
                  const isCurrent = svc.slug === serviceConfig.slug;

                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => onNavigate(svc.slug)}
                      className={`w-full py-3.5 px-6 rounded-2xl font-semibold text-sm sm:text-[15px] flex items-center justify-between transition-all duration-200 cursor-pointer text-left ${
                        isCurrent
                          ? 'taxa-card-gradient text-[var(--taxa-accent-text-dark)] shadow-[0_6px_20px_var(--taxa-accent-glow)] ring-2 ring-neutral-900/10'
                          : 'bg-gradient-to-r from-[var(--taxa-card-stop1)]/70 to-[var(--taxa-card-stop3)]/70 hover:from-[var(--taxa-card-stop1)] hover:to-[var(--taxa-card-stop3)] text-neutral-900 hover:shadow-xs'
                      }`}
                    >
                      <span className="tracking-tight">{svc.name}</span>
                      {isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-neutral-950" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-800/40 opacity-0 group-hover:opacity-100" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* SIDEBAR CONTACT FORM ("Say, Hello !") */}
              <div className="pt-2 border-t border-neutral-100">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-2">
                  Say, Hello !
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {serviceConfig.sidebarSubtitle}
                </p>

                {isSubmitted ? (
                  <div className="bg-[var(--taxa-accent)]/15 border border-[var(--taxa-accent)]/40 rounded-2xl p-5 text-center space-y-2 animate-in fade-in">
                    <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                    <h4 className="text-sm font-bold text-neutral-900">
                      Message Sent
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {serviceConfig.successMessage}
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2 text-xs text-neutral-900 underline font-semibold cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                    {/* Your Name * */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name*"
                        className={`w-full bg-[#f4f5f5] text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm rounded-xl px-4 py-3.5 border focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-[var(--taxa-accent)]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Address * */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address*"
                        className={`w-full bg-[#f4f5f5] text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm rounded-xl px-4 py-3.5 border focus:outline-none transition-colors ${
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

                    {/* Phone Number * */}
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number*"
                        className={`w-full bg-[#f4f5f5] text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm rounded-xl px-4 py-3.5 border focus:outline-none transition-colors ${
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

                    {/* Additional Message * */}
                    <div>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Additional Message*"
                        className={`w-full bg-[#f4f5f5] text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm rounded-xl px-4 py-3 border focus:outline-none transition-colors resize-none ${
                          errors.message ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-[var(--taxa-accent)]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full taxa-btn-primary hover:opacity-95 text-[var(--taxa-accent-text-dark)] font-semibold py-3.5 px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_6px_20px_var(--taxa-accent-glow)] cursor-pointer disabled:opacity-50"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Service Executive Video Briefing Modal */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-[var(--taxa-dark-card)] border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8ef78b]">
                  {serviceConfig.mediaCard.modalBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {serviceConfig.mediaCard.modalTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Presentation Card */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8ef78b]/20 border border-[#8ef78b]/50 text-[#8ef78b] flex items-center justify-center mb-4">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {serviceConfig.mediaCard.modalSubtitle}
              </h4>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-md leading-relaxed mb-6">
                {serviceConfig.mediaCard.modalDescription}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onOpenConsultation(serviceConfig.name);
                  }}
                  className="bg-[#8ef78b] text-neutral-950 font-semibold px-6 py-2.5 rounded-xl text-xs hover:bg-[#7eec94] transition-colors cursor-pointer"
                >
                  Schedule Consultation
                </button>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="bg-white/10 text-white font-medium px-5 py-2.5 rounded-xl text-xs hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Close Briefing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
