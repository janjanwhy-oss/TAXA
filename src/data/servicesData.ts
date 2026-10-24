export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  verticalTitle: string;
  slug: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
}

export interface PracticeArea {
  id: string;
  name: string;
  slug: string;
  desc: string;
  hasDetailPage: boolean;
}

export const TAXA_PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate-tax',
    name: 'Corporate Tax',
    slug: '/services/corporate-tax',
    desc: 'UAE 9% federal corporate tax compliance, grouping & returns',
    hasDetailPage: true,
  },
  {
    id: 'vat',
    name: 'VAT',
    slug: '/services/vat',
    desc: '5% Value Added Tax registration, filing & voluntary disclosures',
    hasDetailPage: true,
  },
  {
    id: 'excise-tax',
    name: 'Excise Tax',
    slug: '/services/excise-tax',
    desc: 'Regulated inventory compliance, warehouse registration & reporting',
    hasDetailPage: true,
  },
  {
    id: 'bookkeeping-accounting',
    name: 'Bookkeeping & Accounting',
    slug: '/services/bookkeeping-accounting',
    desc: 'IFRS compliant monthly financial records, ledger & payroll',
    hasDetailPage: true,
  },
  {
    id: 'auditing',
    name: 'Auditing Services',
    slug: '/services/auditing',
    desc: 'Statutory annual audits & internal governance for UAE licenses',
    hasDetailPage: true,
  },
  {
    id: 'business-advisory',
    name: 'Business Advisory',
    slug: '/services/business-advisory',
    desc: 'Free zone qualifying status, mainland restructuring & M&A',
    hasDetailPage: true,
  },
];

export interface ServiceDetailConfig {
  id: string;
  slug: string;
  name: string;
  heroTitle: string;
  primaryImage: {
    url: string;
    alt: string;
  };
  introHeading: string;
  introParagraphs: [string, string];
  secondHeading: string;
  secondParagraphs: [string, string];
  supportingImages: [
    { url: string; alt: string },
    { url: string; alt: string }
  ];
  checklistHeading: string;
  checklistIntro: string;
  checklistItems: string[];
  secondaryContentHeading: string;
  secondaryParagraphs: [string, string];
  mediaCard: {
    imageUrl: string;
    imageAlt: string;
    modalBadge: string;
    modalTitle: string;
    modalSubtitle: string;
    modalDescription: string;
  };
  closingParagraph: string;
  sidebarSubtitle: string;
  successMessage: string;
}

export const SERVICE_DETAILS_MAP: Record<string, ServiceDetailConfig> = {
  'corporate-tax': {
    id: 'corporate-tax',
    slug: '/services/corporate-tax',
    name: 'Corporate Tax',
    heroTitle: 'Corporate Tax',
    primaryImage: {
      url: '/assets/services/tax_consultant_portrait_1200.webp',
      alt: 'Corporate Tax Advisory Consultation in Dubai',
    },
    introHeading: 'Corporate Tax Advisory for UAE Businesses',
    introParagraphs: [
      'Corporate Tax is an important part of financial and regulatory planning for businesses operating in the United Arab Emirates. Understanding registration requirements, taxable income, available reliefs, reporting obligations, and recordkeeping responsibilities helps businesses approach compliance with greater clarity.',
      'Taxa Advisory supports startups, SMEs, and established businesses with practical Corporate Tax guidance. Our approach focuses on understanding your business structure, reviewing relevant financial information, and helping you prepare for your reporting and compliance responsibilities.',
    ],
    secondHeading: 'Structured Support for Corporate Tax Compliance',
    secondParagraphs: [
      'Every business has its own operational structure and financial circumstances. We help you assess the applicable requirements, organize essential documentation, and develop a clear approach to Corporate Tax compliance.',
      'Our services cover registration assistance, tax-related financial reviews, return preparation support, and guidance on matters relevant to mainland and free zone businesses. We also help identify areas where additional documentation or specialist review may be necessary.',
    ],
    supportingImages: [
      {
        url: '/assets/services/business_meeting_discussion_800.webp',
        alt: 'Tax consultant discussing reporting requirements',
      },
      {
        url: '/assets/services/finance_team_collaboration_800.webp',
        alt: 'Finance team reviewing corporate tax documentation',
      },
    ],
    checklistHeading: 'How We Support Your Business',
    checklistIntro:
      'Our Corporate Tax advisory services help companies approach their obligations in an organized, informed, and practical way.',
    checklistItems: [
      'Corporate Tax registration and compliance guidance',
      'Review of relevant financial records and documentation',
      'Corporate Tax return preparation support',
      'Assessment of applicable reliefs and free zone considerations',
      'Ongoing guidance on reporting and recordkeeping obligations',
    ],
    secondaryContentHeading: 'A Clearer Path to Corporate Tax Compliance',
    secondaryParagraphs: [
      'Managing Corporate Tax involves more than submitting a return. Businesses also need consistent financial records, an understanding of their tax position, and processes that support accurate reporting.',
      'Taxa Advisory works with businesses to make these responsibilities easier to understand and manage. Whether you’re preparing for registration, reviewing financial records, or seeking guidance on your next filing obligations, we provide a structured approach centered on clarity and practical action.',
    ],
    mediaCard: {
      imageUrl:
        '/assets/services/executive_briefing_session_1200.webp',
      imageAlt: 'UAE Corporate Tax Advisory Briefing Session',
      modalBadge: 'Taxa Executive Briefing',
      modalTitle: 'UAE Corporate Tax 9% Compliance Guide',
      modalSubtitle: 'Executive Corporate Tax Overview',
      modalDescription:
        'Our senior advisors summarize the core principles of Federal Decree-Law No. 47 on UAE Corporate Tax, qualifying free zone exemptions, and corporate return documentation.',
    },
    closingParagraph:
      'Speak with our advisory team to discuss how your business can approach UAE Corporate Tax requirements with better preparation, clearer financial information, and dependable support.',
    sidebarSubtitle:
      'Have a question about UAE Corporate Tax? Send your inquiry and our team can discuss the support your business needs.',
    successMessage:
      'Thank you! Our Corporate Tax team will respond within 2 business hours.',
  },

  vat: {
    id: 'vat',
    slug: '/services/vat',
    name: 'VAT',
    heroTitle: 'VAT Services',
    primaryImage: {
      url: '/assets/services/vat_calculator_review_1200.webp',
      alt: 'Value Added Tax Advisory and Return Verification in Dubai',
    },
    introHeading: 'Value Added Tax (VAT) Advisory & Filing in the UAE',
    introParagraphs: [
      'Value Added Tax (VAT) at the standard rate of 5% applies to taxable supplies of goods and services across the UAE mainland and designated zones. Ensuring accurate calculation, timely return submission, and adherence to Federal Tax Authority (FTA) guidelines is vital to avoid severe administrative penalties.',
      'Taxa Advisory provides comprehensive end-to-end VAT solutions for companies across Dubai and the UAE. From initial mandatory or voluntary threshold registrations to quarterly return filings and input tax apportionment, our tax practitioners ensure rigorous regulatory compliance.',
    ],
    secondHeading: 'Strategic Guidance for Complex Indirect Tax Scenarios',
    secondParagraphs: [
      'Cross-border trade, designated free zone transactions, and mixed supply businesses often present complex VAT challenges. Misclassifying exempt versus zero-rated supplies or mishandling import VAT reverse charge mechanisms can create unexpected liabilities.',
      'We conduct detailed transaction mapping, review supply chain documentation, verify tax invoices against FTA regulatory formats, and assist with Voluntary Disclosures (Form 211) and Reconsideration requests to safeguard your business operations.',
    ],
    supportingImages: [
      {
        url: '/assets/services/auditing_legal_review_1200.webp',
        alt: 'Accountant auditing tax invoices and VAT reconciliations',
      },
      {
        url: '/assets/services/corporate_financial_tower_800.webp',
        alt: 'Corporate financial office in Dubai Financial Centre',
      },
    ],
    checklistHeading: 'Comprehensive VAT Solutions We Deliver',
    checklistIntro:
      'Our indirect tax specialists assist your company with every facet of FTA compliance, risk mitigation, and reporting.',
    checklistItems: [
      'Mandatory and voluntary VAT registration & deregistration with the FTA',
      'Periodic VAT return preparation, reconciliation, and Form 201 filing',
      'Input tax recovery assessment & partial exemption apportionment calculations',
      'Voluntary Disclosures (VDF 211) and penalty reconsideration appeals',
      'FTA tax audit defense, mock audits, and documentation health checks',
    ],
    secondaryContentHeading: 'Minimizing Exposure and Protecting Cash Flow',
    secondaryParagraphs: [
      'Effective VAT management is not merely an administrative exercise; it directly impacts your working capital and liquidity. Delaying input tax recovery or accumulating non-deductible expenses damages business performance over time.',
      'Taxa Advisory implements standardized VAT accounting systems within your ERP, reconciles your customs declarations with FTA clearance statements, and equips your accounting team with reliable protocols for long-term audit readiness.',
    ],
    mediaCard: {
      imageUrl:
        '/assets/services/accounting_analysis_charts_1200.webp',
      imageAlt: 'UAE VAT Compliance & Strategy Briefing',
      modalBadge: 'Taxa Executive Briefing',
      modalTitle: 'UAE VAT 5% Compliance & Filing Protocols',
      modalSubtitle: 'Value Added Tax Advisory Briefing',
      modalDescription:
        'Discover how Taxa Advisory assists UAE enterprises with FTA indirect tax obligations, input tax optimization, and penalty avoidance strategies.',
    },
    closingParagraph:
      'Connect with our VAT specialists today to evaluate your current indirect tax structure, streamline quarterly filings, and resolve complex FTA inquiries.',
    sidebarSubtitle:
      'Have a question about UAE VAT registration or filing? Send your inquiry and our certified tax agents will assist you promptly.',
    successMessage:
      'Thank you! Our VAT advisory team will respond within 2 business hours.',
  },

  'excise-tax': {
    id: 'excise-tax',
    slug: '/services/excise-tax',
    name: 'Excise Tax',
    heroTitle: 'Excise Tax',
    primaryImage: {
      url: '/assets/services/warehouse_logistics_excise_1200.webp',
      alt: 'Excise Tax Distribution and Bonded Warehouse Operations in Dubai',
    },
    introHeading: 'Excise Tax Compliance & Designated Zone Advisory',
    introParagraphs: [
      'Excise tax is levied across the UAE on specific goods deemed harmful to human health or the environment, including tobacco products, energy drinks, carbonated beverages, sweetened drinks, and electronic smoking devices. Businesses producing, importing, stockpiling, or releasing excise goods from designated zones must satisfy strict FTA mandates.',
      'Navigating excise tax requires accurate product classification, digital tax stamp (DTS) scheme compliance, registration of designated zones, and rigorous tracking of inventory movements to prevent customs impoundment and heavy penalties.',
    ],
    secondHeading: 'End-to-End Inventory Tracking & Warehouse Governance',
    secondParagraphs: [
      'The FTA enforces continuous tracking of excise goods through registered warehouse keepers and designated zones. Unregistered stockpiling or discrepancies between customs import data and excise declarations trigger immediate compliance audits.',
      'Taxa Advisory assists importers, producers, and warehouse operators in securing designated zone statuses, registering taxable goods on the FTA EmaraTax portal, and setting up real-time inventory reconciliation systems that satisfy FTA auditors.',
    ],
    supportingImages: [
      {
        url: '/assets/services/inventory_pallet_distribution_800.webp',
        alt: 'Warehouse compliance inspection and excise stock management',
      },
      {
        url: '/assets/services/advisory_corporate_suit_800.webp',
        alt: 'Business executive evaluating excise tax inventory reports',
      },
    ],
    checklistHeading: 'Key Excise Tax Capabilities We Provide',
    checklistIntro:
      'We ensure full operational and regulatory alignment for manufacturers, importers, and warehouse operators.',
    checklistItems: [
      'Excise business registration, product listing & price verification on EmaraTax',
      'Designated Zone and Warehouse Keeper licensing and FTA approval',
      'Digital Tax Stamp (DTS) scheme implementation and tracking',
      'Monthly excise tax return filing, stock audit & inventory reconciliation',
      'Handling FTA excise inspection inquiries and customs clearances',
    ],
    secondaryContentHeading: 'Safeguarding Supply Chains Against Regulatory Halts',
    secondaryParagraphs: [
      'Because excise tax applies at rates up to 100% on retail selling prices, miscalculating tax liabilities or failing to account for goods lost or damaged in designated zones poses major financial liability.',
      'Our dedicated excise team establishes standard operating procedures for inbound cargo, reconciles FTA declarations against Dubai Customs records, and ensures your supply chain maintains seamless continuity.',
    ],
    mediaCard: {
      imageUrl:
        '/assets/services/customs_cargo_inspection_1200.webp',
      imageAlt: 'Excise Tax Supply Chain and Warehouse Briefing',
      modalBadge: 'Taxa Executive Briefing',
      modalTitle: 'UAE Excise Tax & Designated Zone Framework',
      modalSubtitle: 'Regulated Goods & Warehouse Governance',
      modalDescription:
        'A comprehensive briefing on Federal Decree-Law on Excise Tax, product registration rules, and customs warehouse governance in Dubai.',
    },
    closingParagraph:
      'Speak with our excise specialists to verify your product catalog, register designated warehouses, and establish dependable monthly compliance.',
    sidebarSubtitle:
      'Need assistance with UAE Excise Tax or designated zone requirements? Send your details and an excise specialist will contact you.',
    successMessage:
      'Thank you! Our Excise Tax specialists will respond within 2 business hours.',
  },

  'bookkeeping-accounting': {
    id: 'bookkeeping-accounting',
    slug: '/services/bookkeeping-accounting',
    name: 'Bookkeeping & Accounting',
    heroTitle: 'Bookkeeping & Accounting',
    primaryImage: {
      url: '/assets/services/bookkeeping_financial_graphs_1200.webp',
      alt: 'Financial Management, Ledger Systems and Bookkeeping in Dubai',
    },
    introHeading: 'IFRS-Compliant Accounting & Financial Management',
    introParagraphs: [
      'Maintaining structured, accurate, and up-to-date accounting records is now a mandatory statutory obligation under UAE Commercial Companies Law and Corporate Tax legislation. Modern UAE enterprises require robust books that satisfy FTA auditors, commercial banks, and international investors alike.',
      'Taxa Advisory delivers professional bookkeeping and management accounting services that turn raw transactions into actionable financial intelligence. We establish customized chart of accounts, record multi-currency transactions, and produce timely monthly closing statements.',
    ],
    secondHeading: 'Precision General Ledger, Payroll, and Bank Reconciliation',
    secondParagraphs: [
      'Without disciplined month-end close procedures, businesses risk erroneous tax filings, working capital blind spots, and delays in annual license renewals. Our accounting professionals integrate seamlessly with your internal workflow.',
      'From Wages Protection System (WPS) compliant payroll processing to accounts payable/receivable management and automated bank feeds, we maintain pristine records in compliance with International Financial Reporting Standards (IFRS).',
    ],
    supportingImages: [
      {
        url: '/assets/services/tax_filing_forms_review_800.webp',
        alt: 'Financial controller analyzing corporate ledger accounts',
      },
      {
        url: '/assets/services/business_advisory_partnership_1200.webp',
        alt: 'Finance executive team reviewing quarterly profitability statements',
      },
    ],
    checklistHeading: 'Accounting Services Tailored to Your Growth',
    checklistIntro:
      'Our certified accountants ensure your books remain accurate, compliant, and ready for regulatory scrutiny.',
    checklistItems: [
      'Day-to-day transaction recording, accounts payable and receivable management',
      'IFRS-compliant monthly financial statements (P&L, Balance Sheet, Cash Flow)',
      'Multi-currency bank reconciliations and fixed asset depreciation registers',
      'UAE Wages Protection System (WPS) payroll calculation and processing',
      'Cloud accounting migration (Xero, QuickBooks, Zoho Books, NetSuite)',
    ],
    secondaryContentHeading: 'From Financial Data to Strategic Business Clarity',
    secondaryParagraphs: [
      'Reliable books are the foundation of smart leadership. When your management reports are delivered on time each month, you can forecast cash reserves, monitor margins, and make confident capital allocation decisions.',
      'Taxa Advisory assigns a dedicated finance manager to oversee your account, ensuring your ledger remains perpetually reconciled and audit-ready throughout the fiscal year.',
    ],
    mediaCard: {
      imageUrl:
        '/assets/services/business_meeting_discussion_800.webp',
      imageAlt: 'Corporate Financial Accounting Briefing',
      modalBadge: 'Taxa Executive Briefing',
      modalTitle: 'IFRS Accounting & Financial Governance for UAE Firms',
      modalSubtitle: 'Modern Cloud Accounting & WPS Payroll',
      modalDescription:
        'Learn how Taxa Advisory helps UAE businesses maintain institutional-grade financial reporting, cash flow control, and statutory compliance.',
    },
    closingParagraph:
      'Schedule a consultation with our accounting team to discover how our outsourced bookkeeping and controller services can empower your enterprise.',
    sidebarSubtitle:
      'Looking for reliable bookkeeping and financial management in Dubai? Submit your inquiry to connect with our senior accountants.',
    successMessage:
      'Thank you! Our Senior Accounting team will reach out within 2 business hours.',
  },

  auditing: {
    id: 'auditing',
    slug: '/services/auditing',
    name: 'Auditing Services',
    heroTitle: 'Auditing Services',
    primaryImage: {
      url: '/assets/services/auditing_legal_review_1200.webp',
      alt: 'Auditing Services and Statutory Review for UAE Companies',
    },
    introHeading: 'Statutory Audits & Independent Assurance in Dubai',
    introParagraphs: [
      'Independent financial audits provide business stakeholders, banking institutions, and regulatory authorities with absolute confidence in the credibility of your financial reports. In the UAE, annual audited financial statements are mandatory for mainland license renewals, free zone compliance, and corporate tax return filings.',
      'Taxa Advisory delivers rigorous, objective statutory and internal audit services tailored to UAE commercial environments. Our certified audit specialists examine internal control frameworks, test material balances, and deliver comprehensive audit opinions in accordance with International Standards on Auditing (ISA).',
    ],
    secondHeading: 'Strengthening Governance & Fulfilling Free Zone Authorities',
    secondParagraphs: [
      'Free zone authorities—such as DIFC, DMCC, DAFZA, and JAFZA—enforce strict deadlines for audited accounts. Failure to submit audited financial statements can lead to severe fines, suspension of portal services, or loss of license renewal.',
      'Our methodology combines thorough risk assessment with efficient testing protocols, minimizing disruption to your daily operations while pinpointing operational vulnerabilities and internal control deficiencies.',
    ],
    supportingImages: [
      {
        url: '/assets/services/advisory_corporate_suit_800.webp',
        alt: 'Senior auditor verifying ledger balances and internal controls',
      },
      {
        url: '/assets/services/corporate_financial_tower_800.webp',
        alt: 'Dubai commercial towers and financial institutions',
      },
    ],
    checklistHeading: 'Comprehensive Audit & Assurance Solutions',
    checklistIntro:
      'We perform thorough, independent evaluations designed to protect corporate integrity and satisfy UAE regulatory authorities.',
    checklistItems: [
      'Statutory annual audits for UAE mainland and free zone entity renewals',
      'Internal audits, risk management review & governance stress-testing',
      'Financial due diligence for mergers, acquisitions & corporate partnerships',
      'AML (Anti-Money Laundering) compliance reviews and GoAML verification',
      'Special purpose audits, revenue certifications, and liquidation audit reports',
    ],
    secondaryContentHeading: 'Uncompromising Integrity and Practical Insights',
    secondaryParagraphs: [
      'An audit should not simply be a compliance checkbox; it should be an instrument for organizational resilience. Our detailed management letters provide concrete recommendations to bolster internal controls, prevent fraud, and optimize working capital.',
      'Whether your business is preparing for banking facility reviews, shareholder meetings, or free zone regulatory submissions, Taxa Advisory provides timely, accredited audit reports you can rely upon.',
    ],
    mediaCard: {
      imageUrl:
        '/assets/services/finance_team_collaboration_800.webp',
      imageAlt: 'Corporate Statutory Audit and Assurance Presentation',
      modalBadge: 'Taxa Executive Briefing',
      modalTitle: 'UAE Statutory Audit Standards & Governance Protocols',
      modalSubtitle: 'Statutory Assurance & Free Zone Compliance',
      modalDescription:
        'Understand the statutory requirements, free zone submission deadlines, and internal assurance measures crucial for UAE enterprises.',
    },
    closingParagraph:
      'Speak with our audit partners today to schedule your annual statutory audit or request an internal controls diagnostic.',
    sidebarSubtitle:
      'Require an annual statutory audit or financial assurance in the UAE? Submit your details to speak with our certified audit team.',
    successMessage:
      'Thank you! Our Audit Partners will contact you within 2 business hours.',
  },

  'business-advisory': {
    id: 'business-advisory',
    slug: '/services/business-advisory',
    name: 'Business Advisory',
    heroTitle: 'Business Advisory',
    primaryImage: {
      url: '/assets/services/executive_briefing_session_1200.webp',
      alt: 'Strategic Corporate Business Advisory in Dubai',
    },
    introHeading: 'Strategic Corporate Advisory & UAE Restructuring',
    introParagraphs: [
      'The UAE business landscape offers unparalleled global opportunity, but navigating company formation, qualifying free zone regulations, Economic Substance Regulations (ESR), and Ultimate Beneficial Ownership (UBO) rules requires deep strategic foresight.',
      'Taxa Advisory serves as a trusted corporate consigliere to founders, multinational corporations, and family offices. We help businesses design tax-efficient corporate structures, enter the UAE market smoothly, and scale sustainably across mainland and free zone jurisdictions.',
    ],
    secondHeading: 'Corporate Structuring, ESR Compliance, and M&A Advisory',
    secondParagraphs: [
      'Deciding between mainland LLCs, branch offices, and designated free zone holding companies has lasting tax and commercial implications under the UAE Corporate Tax regime. Selecting the optimal legal structure preserves the 0% Qualifying Free Zone Person (QFZP) benefit.',
      'Our advisory team conducts thorough corporate health checks, models commercial contracts for regulatory compliance, and oversees mergers, acquisitions, and cross-border group reorganizations with precision.',
    ],
    supportingImages: [
      {
        url: '/assets/services/executive_advisor_briefing_800.webp',
        alt: 'Corporate consultant analyzing enterprise restructuring plan',
      },
      {
        url: '/assets/services/business_meeting_discussion_800.webp',
        alt: 'Senior business advisors strategizing market expansion',
      },
    ],
    checklistHeading: 'Strategic Advisory Capabilities',
    checklistIntro:
      'We partner with leadership teams to navigate complex regulatory, structural, and expansion challenges.',
    checklistItems: [
      'UAE market entry, holding company setup & optimal jurisdiction selection',
      'Qualifying Free Zone Person (QFZP) status preservation & de minimis modeling',
      'Economic Substance Regulations (ESR) assessments and notification filings',
      'Ultimate Beneficial Ownership (UBO) compliance and register maintenance',
      'M&A tax due diligence, valuation analysis & corporate restructuring',
    ],
    secondaryContentHeading: 'Building Lasting Commercial Value in the UAE',
    secondaryParagraphs: [
      'Sustainable success in the Emirates demands seamless cohesion between legal structures, banking relationships, and tax efficiency. By aligning operational reality with statutory requirements, we eliminate hidden compliance liabilities.',
      'Taxa Advisory delivers pragmatic, executive-level counsel that protects shareholder value, accelerates growth, and positions your enterprise for long-term regional prominence.',
    ],
    mediaCard: {
      imageUrl:
        '/assets/services/business_advisory_partnership_1200.webp',
      imageAlt: 'Executive Business Advisory & Market Entry Briefing',
      modalBadge: 'Taxa Executive Briefing',
      modalTitle: 'UAE Corporate Structuring & Free Zone Strategy',
      modalSubtitle: 'Strategic Expansion & Holding Structures',
      modalDescription:
        'Gain strategic insights into UAE legal frameworks, QFZP 0% corporate tax benefits, and holding company structures with our advisory directors.',
    },
    closingParagraph:
      'Schedule a confidential consultation with our senior advisory directors to discuss your business expansion, group restructuring, or compliance roadmap.',
    sidebarSubtitle:
      'Planning an expansion, restructuring, or free zone strategy in Dubai? Send your inquiry to connect with our senior advisory leaders.',
    successMessage:
      'Thank you! Our Senior Advisory Leadership will contact you within 2 business hours.',
  },
};

export const TAILORED_SERVICES: ServiceItem[] = [
  {
    id: 'growth-strategy',
    number: '01',
    title: 'Growth Strategy & Tax Planning',
    verticalTitle: 'Growth Strategy',
    slug: '/services/growth-strategy',
    category: 'Corporate Advisory',
    shortDesc: 'Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ac.',
    fullDesc: 'Comprehensive corporate tax structuring and forward-looking financial planning aligned with UAE Federal Tax Authority regulations and economic substance benchmarks.',
    image: '/assets/services/business_meeting_discussion_800.webp',
    features: ['Qualifying Free Zone Status', 'Corporate Restructuring', 'Cross-Border M&A Tax Due Diligence']
  },
  {
    id: 'technology-upgrade',
    number: '02',
    title: 'Technology Upgrade & ERP',
    verticalTitle: 'Technology Upgrade',
    slug: '/services/technology-upgrade',
    category: 'Digital Transformation',
    shortDesc: 'Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ac.',
    fullDesc: 'Modern cloud accounting integration, automated e-invoicing compliance, and digital ledger optimization designed for UAE enterprise scalability.',
    image: '/assets/services/tax_consultant_portrait_1200.webp',
    features: ['Automated Tax Return Filing', 'Custom ERP Accounting Bridges', 'Real-Time Financial Dashboards']
  },
  {
    id: 'finance-advisory',
    number: '03',
    title: 'Finance Advisory & VAT',
    verticalTitle: 'Finance Advisory',
    slug: '/services/finance-advisory',
    category: 'Indirect Taxation',
    shortDesc: 'Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ac.',
    fullDesc: 'End-to-end VAT 5% advisory, voluntary disclosure management, and strategic cash flow engineering tailored to UAE mainland and free zone operations.',
    image: '/assets/services/vat_calculator_review_1200.webp',
    features: ['FTA Audit Representation', 'Reconsideration & Appeal Filings', 'Import/Export VAT Recoupment']
  },
  {
    id: 'risk-planning',
    number: '04',
    title: 'Risk Planning & Assurance',
    verticalTitle: 'Risk Planning',
    slug: '/services/risk-planning',
    category: 'Audit & Governance',
    shortDesc: 'Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ac.',
    fullDesc: 'Independent statutory auditing, internal control stress-testing, and rigorous regulatory compliance for commercial license renewals in Dubai.',
    image: '/assets/services/auditing_legal_review_1200.webp',
    features: ['Annual Statutory Audit Reports', 'AML & Anti-Fraud Audits', 'Board Governance Review']
  },
  {
    id: 'process-management',
    number: '05',
    title: 'Process Management & Bookkeeping',
    verticalTitle: 'Process Management',
    slug: '/services/process-management',
    category: 'Accounting Operations',
    shortDesc: 'Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin erat viverra ac.',
    fullDesc: 'Structured monthly bookkeeping, payroll WPS compliance, and IFRS-compliant trial balances that empower confident executive decision-making.',
    image: '/assets/services/corporate_financial_tower_800.webp',
    features: ['IFRS General Ledger Management', 'WPS Payroll Processing', 'Monthly Balance Sheet Closing']
  }
];

export interface InsightCarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const INSIGHT_CAROUSEL_ITEMS: InsightCarouselItem[] = [
  {
    id: 'cashflow',
    title: 'Cashflow Optimization',
    description: 'Senectus netus suscipit auctor curabitur facilisi cubilia curae.',
    image: '/assets/services/executive_briefing_session_1200.webp',
    category: 'Financial Engineering'
  },
  {
    id: 'decision-streamlining',
    title: 'Decision Streamlining',
    description: 'Senectus netus suscipit auctor curabitur facilisi cubilia curae.',
    image: '/assets/services/finance_team_collaboration_800.webp',
    category: 'Executive Advisory'
  },
  {
    id: 'boosted-efficiency',
    title: 'Boosted Efficiency',
    description: 'Senectus netus suscipit auctor curabitur facilisi cubilia curae.',
    image: '/assets/services/executive_advisor_briefing_800.webp',
    category: 'Operational Scale'
  },
  {
    id: 'corporate-tax-health',
    title: 'Corporate Tax Health',
    description: 'Senectus netus suscipit auctor curabitur facilisi cubilia curae.',
    image: '/assets/services/accounting_analysis_charts_1200.webp',
    category: 'Regulatory Assurance'
  },
  {
    id: 'cross-border-audit',
    title: 'Cross-Border Governance',
    description: 'Senectus netus suscipit auctor curabitur facilisi cubilia curae.',
    image: '/assets/services/business_advisory_partnership_1200.webp',
    category: 'International Tax'
  },
  {
    id: 'digital-accounting',
    title: 'Digital Ledger Systems',
    description: 'Senectus netus suscipit auctor curabitur facilisi cubilia curae.',
    image: '/assets/services/bookkeeping_financial_graphs_1200.webp',
    category: 'ERP Automation'
  }
];
