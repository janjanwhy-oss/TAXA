import React from 'react';
import { motion } from 'framer-motion';

interface OurTeamSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'omar-hassan',
    name: 'Omar Hassan',
    role: 'Senior Tax Consultant',
    image: '/assets/aistudio/Professional_man_standing_crosse__20261024133253_2f469715.jpg',
  },
  {
    id: 'tariq-al-mansoor',
    name: 'Tariq Al-Mansoor',
    role: 'Head of Accounting',
    image: '/assets/aistudio/Man_standing_in_business_suit_20261024131047__1__4586d3a1.webp',
  },
  {
    id: 'sarah-malik',
    name: 'Sarah Malik',
    role: 'Business Advisory Consultant',
    image: '/assets/aistudio/Woman_posing_for_business_portrait_20261024131005_598907b9.webp',
  },
  {
    id: 'daniel-foster',
    name: 'Daniel Foster',
    role: 'Audit & Compliance Specialist',
    image: '/assets/aistudio/make_it_middle_age_20261024131017_25e0a011.webp',
  },
];

export const OurTeamSection: React.FC<OurTeamSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="our-team"
      className="relative w-full bg-[#f4f5f5] text-neutral-900 pt-16 pb-24 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 select-none"
      aria-label="Our Team"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* 1. SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow with decorative dots and short horizontal lines */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
            <span className="w-8 h-[1.5px] bg-neutral-900 inline-block" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-800 px-1">
              OUR TEAM
            </span>
            <span className="w-8 h-[1.5px] bg-neutral-900 inline-block" />
            <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Expert Guidance Team
          </h2>

          <p className="text-neutral-500 text-sm sm:text-base mt-3 max-w-xl mx-auto font-normal leading-relaxed">
            Meet the professionals bringing financial clarity, practical knowledge, and dedicated
            advisory support to UAE businesses.
          </p>
        </motion.div>

        {/* 2. FOUR PROFILE CARDS (HORIZONTAL ROW) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: easeCurve }}
              onClick={() => onOpenConsultation(`Consultation with ${member.name} (${member.role})`)}
              className="group relative bg-white rounded-[26px] overflow-hidden border border-neutral-200/70 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenConsultation(`Consultation with ${member.name} (${member.role})`);
                }
              }}
              aria-label={`Consultation with ${member.name}, ${member.role}`}
            >
              {/* Upper Portrait Container (~75% of card) */}
              <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-[#e5e7e7] rounded-t-[26px]">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle bottom gradient to blend seamlessly into white info panel */}
                <div
                  className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* White Lower Information Panel */}
              <div className="py-5 sm:py-6 px-4 bg-white flex flex-col items-center justify-center text-center grow">
                <h3 className="text-lg sm:text-[19px] font-bold text-neutral-950 tracking-tight leading-snug transition-colors duration-300 group-hover:text-[var(--taxa-primary)]">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-500 font-medium mt-1 leading-normal">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
