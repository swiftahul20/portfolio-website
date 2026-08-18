// lib/content.ts
// Single source of truth for all portfolio copy.
// Keeping content separate from markup means you can rewrite copy
// without touching layout, and reuse the same data for e.g. a résumé
// export or JSON-LD structured data later.

export const tokens = {
  bg: "#0B1220",
  surface: "#121B2E",
  text: "#E8EDF4",
  muted: "#8A97AC",
  accent: "#4CE0B3",
  alert: "#FF6B5E",
};

export const hero = {
  status: "STATUS: AVAILABLE FOR WORK",
  name: "Mift",
  roles: ["Frontend Developer", "Vue.js & Next.js", "Healthcare Systems"],
  tagline:
    "I build the interfaces clinicians actually rely on — hemodialysis charts, patient vitals, nursing assessments — where a wrong field mapping isn't just a bug, it's a patient record error.",
  ctaPrimary: { label: "View projects", href: "#projects" },
  ctaSecondary: { label: "Get in touch", href: "#connect" },
};

export const about = {
  eyebrow: "ABOUT",
  paragraphs: [
    "I'm a frontend developer based in Yogyakarta, Indonesia, with five years spent mostly inside hospital information systems — the unglamorous, high-stakes kind of software where forms have to survive edge cases, not just look good in a demo.",
    "Most of my recent work lives in Vue 2, building and debugging modules for hemodialysis sessions, PEWS scoring, CPPT notes, and physiotherapy and nursing assessments. A lot of it is less 'build a new feature' and more 'trace why this field silently overwrote that one' — root-cause work that rewards patience over speed.",
    "Outside of contract work, I shoot for Shutterstock and curate shoppable product and book lists on Benable — different muscle, same instinct for noticing what's actually useful to the person on the other end.",
  ],
  highlights: [
    { label: "Experience", value: "5+ years" },
    { label: "Focus", value: "Healthcare frontend systems" },
    { label: "Base", value: "Yogyakarta, Indonesia" },
  ],
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "RS Taman Harapan Baru",
    role: "Frontend Developer",
    period: "2023 — Present",
    type: "PKWT Contract",
    summary:
      "Built and maintained Vue.js modules for hospital nursing and clinical workflows, from print-ready medical documents to modal-based clinical forms.",
    highlights: [
      "Built six hemodialysis sub-tab forms inside a single modal, covering pre/intra/post-session data capture",
      "Shipped print components for lab and clinical documents with QR-based electronic signatures",
      "Fixed cross-field payload bugs where object spreads were silently overwriting ICD-10 diagnosis data",
      "Split a combined doctor_prescription_id field into doctor_pj_code / doctor_pj_name to fix downstream data integrity",
    ],
  },
  {
    company: "fe-zeemarr / simrs-thb-frontend",
    role: "Frontend Developer",
    period: "2022 — 2023",
    type: "PKWT Contract",
    summary:
      "Maintained a Vue CLI-based hospital information system frontend, including build tooling and legacy dependency issues.",
    highlights: [
      "Diagnosed and resolved a Node.js 20 incompatibility with progress-webpack-plugin, restoring local builds via a Node 16 downgrade path",
      "Built patient medical records history views with BootstrapVue and modal-based record creation",
    ],
  },
  {
    company: "Independent / Contract Work",
    role: "Frontend Developer",
    period: "Earlier roles",
    type: "PKWT Contract",
    summary:
      "Delivered frontend features across remote and on-site fixed-term contracts, primarily on Vue.js healthcare tooling.",
    highlights: [
      "Implemented inline date editing for clinical notes using datetime-local inputs and centralized Vuex actions",
      "Built PEWS scoring modals with automated colour grading based on clinical thresholds",
    ],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["Vue 2 / Vue 3", "Next.js", "React", "Tailwind CSS"],
  },
  {
    category: "State & Data",
    items: ["Vuex", "Zustand", "REST / SOAP integration"],
  },
  {
    category: "UI Tooling",
    items: ["BootstrapVue", "v-select", "Feather Icons", "moment.js"],
  },
  {
    category: "Practice",
    items: ["Git workflows", "Component architecture", "Root-cause debugging"],
  },
];

export type Project = {
  title: string;
  context: string;
  contribution: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Workspace Configurator",
    context:
      "An interactive coding assessment: a configurator letting users design and preview a workspace layout in real time.",
    contribution:
      "Built end-to-end with the App Router — component architecture, global state, and a live visual preview that updates as options change.",
    stack: ["Next.js (App Router)", "Tailwind CSS", "Zustand"],
    link: "#",
    linkLabel: "View live demo",
  },
  {
    title: "Hemodialysis Nursing Module",
    context:
      "A six-tab clinical form for capturing pre, intra, and post-session hemodialysis data inside a hospital's nursing workflow.",
    contribution:
      "Owned the form logic end-to-end — payload mapping, watcher side-effects, cross-tab field contamination, and population bugs when reloading existing records.",
    stack: ["Vue 2", "Vuex", "BootstrapVue"],
  },
  {
    title: "PEWS Scoring Modal",
    context:
      "Paediatric Early Warning Score modal used by nursing staff to flag deteriorating patients quickly.",
    contribution:
      "Implemented the scoring logic and colour-graded severity indicators tied to clinical thresholds.",
    stack: ["Vue 2", "Vuex"],
  },
  {
    title: "Clinical Document Printing",
    context:
      "Print-ready lab, radiology, and clinical documents with electronic signatures for hospital records.",
    contribution:
      "Built a repeatable print pattern: dedicated print canvas, explicit @page orientation, fixed-layout tables for landscape A4, and QR-coded e-signatures.",
    stack: ["Vue 2", "qrcode", "Vuex"],
  },
];

export const connect = {
  eyebrow: "CONNECT",
  heading: "Let's talk about your frontend",
  body: "Open to contract and full-time frontend roles — particularly anything with real data complexity behind the UI.",
  email: "your.email@example.com",
  links: [
    { label: "Email", href: "mailto:your.email@example.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
    { label: "GitHub", href: "https://github.com/your-profile" },
    {
      label: "Shutterstock",
      href: "https://www.shutterstock.com/g/your-profile",
    },
  ],
};
