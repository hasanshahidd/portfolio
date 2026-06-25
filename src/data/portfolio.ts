// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Hassan Shahid',
  firstName: 'Hassan',
  title: 'Agentic AI Engineer / Data Scientist',
  tagline:
    'I help enterprises turn ambitious AI ideas into production systems they can trust: multi-agent orchestration, RAG, and LLM intelligence for GRC, banking compliance, and procurement.',
  location: 'Lahore, Pakistan',
  email: 'ch.hassanshahid3@gmail.com',
  phone: '+92-336-7798256',
  github: 'https://github.com/hasanshahidd',
  linkedin: 'https://linkedin.com/in/hassann-shahid',
  resume: './Hassan_Shahid_CV.pdf',
  // Scheduling link — every "Book a call" button uses this.
  booking: 'https://calendly.com/ch-hassanshahid3/30min',
} as const

export const about = [
  'I am an Agentic AI Engineer and Data Scientist who helps organizations move from "we should use AI" to systems they can actually run in production. I work closely with clients and stakeholders to understand the business problem first, then design the GenAI architecture that solves it.',
  'My focus is regulated, high-stakes work: governance, risk and compliance, banking compliance, and procurement. Every solution I deliver ships with guardrails, confidence scoring, role-based access and audit-ready logging, so it holds up to real enterprise and regulatory scrutiny.',
  'Over the past three years I have led analytics teams, shipped machine-learning models on datasets of ten million rows and more, and built multi-agent platforms now running in production. I care about outcomes leadership can measure: faster audits, shorter procurement cycles, and millions of dollars saved.',
]

export type SkillGroup = { title: string; tags: string[]; icon: string }
export const skills: SkillGroup[] = [
  {
    title: 'GenAI & LLM Engineering',
    icon: 'sparkles',
    tags: ['LangChain', 'CrewAI', 'AutoGen', 'ReAct', 'RAG', 'Pinecone', 'FAISS', 'Chroma', 'STT / TTS'],
  },
  {
    title: 'Enterprise AI Solutions',
    icon: 'building',
    tags: ['GRC', 'Banking Compliance', 'Procurement', 'Guardrails', 'Multi-agent Orchestration', 'Doc Intelligence'],
  },
  {
    title: 'LLM Integration',
    icon: 'link',
    tags: ['GPT-4 / 4o', 'Claude', 'Open-source LLMs', 'Prompt Design', 'Function Calling'],
  },
  {
    title: 'Python & ML Stack',
    icon: 'code',
    tags: ['Python', 'FastAPI', 'Flask', 'Dash', 'React', 'pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'PyTorch', 'NLP'],
  },
  {
    title: 'Data Engineering',
    icon: 'database',
    tags: ['ETL', 'Airflow', 'OCR (Tesseract)', 'SQL', 'Snowflake', 'APIs'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    tags: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Analytics & Visualization',
    icon: 'pie',
    tags: ['Power BI', 'Plotly', 'Dash', 'SQL', 'Computer Vision (OpenCV/CNN)'],
  },
  {
    title: 'AI Safety & Reliability',
    icon: 'lock',
    tags: ['Confidence Scoring', 'Hallucination Mitigation', 'RBAC', 'Human-in-the-loop', 'Audit Logging', 'Tenant Isolation'],
  },
]

// Tech strip for the scrolling marquee (top tape).
export const marqueeTech = [
  'LangChain', 'CrewAI', 'GPT-4o', 'Claude', 'RAG', 'Pinecone', 'FastAPI', 'AWS',
  'Azure', 'Docker', 'Kubernetes', 'PyTorch', 'TensorFlow', 'Power BI', 'Python', 'Snowflake',
]

// Domains / specialties strip (bottom tape, runs the other way).
export const marqueeDomains = [
  'Enterprise GenAI', 'GRC & Compliance', 'Procurement Intelligence', 'Banking Compliance',
  'Voice AI', 'RAG Systems', 'Multi-Agent Orchestration', 'Document Intelligence', 'Data Engineering',
]

export type Service = { title: string; desc: string; icon: string }
export const services: Service[] = [
  {
    title: 'GenAI System Architecture',
    icon: 'cpu',
    desc: 'End-to-end design of production LLM systems, from retrieval and orchestration to guardrails, evaluation and deployment.',
  },
  {
    title: 'RAG & Compliance Copilots',
    icon: 'shield',
    desc: 'Natural-language assistants over your policies, controls and documents, with validation, confidence scoring and audit-ready traces.',
  },
  {
    title: 'Agentic Automation',
    icon: 'share',
    desc: 'Multi-agent workflows that resolve real tasks like procurement, intake and reporting, with human-in-the-loop and spend guardrails.',
  },
  {
    title: 'Data Science & ML',
    icon: 'chart',
    desc: 'Predictive models, dashboards and ETL pipelines that turn millions of rows into decisions leadership can act on.',
  },
]

export type ProcessStep = { step: string; title: string; desc: string; icon: string }
export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    icon: 'search',
    desc: 'I learn your workflow, constraints and what success looks like, then scope the smallest high-impact build.',
  },
  {
    step: '02',
    title: 'Architect',
    icon: 'layers',
    desc: 'I design the system: models, retrieval, data flow and the guardrails that fit your security and compliance needs.',
  },
  {
    step: '03',
    title: 'Build',
    icon: 'code',
    desc: 'Iterative delivery with working software early, validated against real data and real users.',
  },
  {
    step: '04',
    title: 'Ship & Scale',
    icon: 'rocket',
    desc: 'Production deployment with monitoring, audit logging and a clear path to scale across teams and tenants.',
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  location?: string
  points: string[]
}
export const experience: Experience[] = [
  {
    role: 'AI/ML Engineer, GenAI & Enterprise Systems',
    company: 'Liztek',
    period: 'Sep 2025 to Present',
    points: [
      'Architected AI-powered GRC and procurement assistants so auditors, risk managers and procurement teams can query policies, controls, vendors and risks in natural language.',
      'Led a banking engagement with State Bank of North America, building a compliance intelligence layer over their regulatory schema that automates control mapping, audit evidence retrieval and regulatory reporting with LLM-powered RAG.',
      'Designed safe multi-table agentic query pipelines with full RBAC and tenant isolation, cutting audit preparation time by 60 to 70 percent.',
      'Built guardrails and confidence scoring into LLM agents to meet enterprise and regulatory standards.',
      'Collaborated cross-functionally with product, compliance and engineering teams to align AI outputs with real enterprise workflows and audit requirements.',
    ],
  },
  {
    role: 'Data Scientist & ML Engineer, Leading GenAI',
    company: 'Optivex Solutions (greeka)',
    period: 'Apr 2024 to Jul 2025',
    location: 'Lahore, Pakistan',
    points: [
      'Led a team of 5 analysts building enterprise-wide KPI dashboards used by senior leadership for weekly decision-making.',
      'Analyzed over ten million rows across marketing, finance and operations, with insights contributing to a 15 percent revenue lift and C-level quarterly planning.',
      'Built an LLM-powered BI reporting engine with LangChain: agents summarise KPIs, surface anomalies and auto-generate executive briefings.',
      'Deployed an OCR and auto-summarization pipeline (Tesseract with LangChain), improving document processing speed by 50 percent.',
      'Automated reporting pipelines with Python and Excel macros, reducing manual reporting time by 40 percent.',
    ],
  },
  {
    role: 'Sales Analyst / Scientist',
    company: 'Fierra Footwear',
    period: 'Jan 2023 to Feb 2024',
    location: 'Lahore, Pakistan',
    points: [
      'Led a 3-member analytics team on sprint-based retail analysis; Power BI dashboards used by leadership reduced overstock by 25 percent.',
      'Used SQL and Excel across 10+ product lines to increase monthly revenue by 12 percent.',
      'Applied GenAI to generate personalized mobile ad creatives, improving engagement metrics by 22 percent.',
    ],
  },
]

export type Project = {
  title: string
  category: string
  problem: string
  blurb: string
  tags: string[]
  highlights: string[]
  metric: string
  featured?: boolean
}
export const projects: Project[] = [
  {
    title: 'Agentic Procurement Intelligence Platform',
    category: 'Agentic AI',
    problem: 'Manual purchase-order triage was slow and error-prone across thousands of vendors and contracts.',
    blurb:
      'A fully autonomous multi-agent procurement workflow that resolves purchase orders from natural language with zero manual triage.',
    tags: ['CrewAI', 'LangChain', 'GPT-4o', 'FastAPI', 'Pinecone', 'AWS'],
    highlights: [
      '40-agent CrewAI crew: Intake, Vendor Intelligence, Approval Orchestrator, Audit Trail.',
      'Pinecone vector store over 50K+ procurement docs for clause retrieval and contract risk flagging.',
      'Live ERP APIs with spend-threshold guardrails and human-in-the-loop escalation.',
    ],
    metric: '55% faster procurement cycle',
    featured: true,
  },
  {
    title: 'Enterprise GRC & Compliance Intelligence',
    category: 'GenAI · Compliance',
    problem: 'Auditors spent weeks manually mapping controls and gathering evidence across complex regulatory schemas.',
    blurb:
      'An AI-driven GRC platform letting auditors and compliance teams query controls, risks and policies in natural language across complex enterprise schemas.',
    tags: ['LangChain', 'GPT-4o', 'RAG', 'Pinecone', 'FastAPI'],
    highlights: [
      'RAG pipelines with validation layers and confidence scoring.',
      'Banking deployment (State Bank of N. America): control mapping, gap analysis, audit evidence.',
      'RBAC, tenant isolation and explainability traces across multi-client deployments.',
    ],
    metric: '60 to 70% less audit prep',
    featured: true,
  },
  {
    title: 'Voice AI Patient Registration System',
    category: 'Voice AI · Healthcare',
    problem: 'Patient intake calls needed accurate, validated data capture without adding front-desk headcount.',
    blurb:
      'A production voice agent that answers real U.S. phone calls, runs natural LLM conversations, and persists validated patient records.',
    tags: ['Vapi.ai', 'GPT-4o-mini', 'FastAPI', 'PostgreSQL', 'Railway'],
    highlights: [
      '4-layer pipeline: telephony and STT/TTS, then LLM, then FastAPI validation, then PostgreSQL.',
      'Async endpoints for concurrent calls; UUID keys for horizontal scaling.',
      'HIPAA-aware design with no audio persistence; full CRUD and web dashboard.',
    ],
    metric: 'Live U.S. call handling',
    featured: true,
  },
  {
    title: 'RAG Compliance Intelligence Platform',
    category: 'RAG · Compliance',
    problem: 'Teams needed to benchmark internal policies against PCI-DSS and ISO 27001 without weeks of manual review.',
    blurb:
      'A production RAG system that benchmarks enterprise policies against PCI-DSS v3.2 and ISO 27001:2013 and returns citation-backed gap reports.',
    tags: ['Streamlit', 'FAISS', 'Groq Llama 3.1', 'LangChain', 'Tesseract'],
    highlights: [
      'FAISS retrieval over policy corpora with citation-grounded answers.',
      'Groq Llama 3.1 for fast inference; Tesseract OCR for scanned policies.',
      'Automated gap reports against PCI-DSS v3.2 and ISO 27001:2013.',
    ],
    metric: 'Grounded answers in <5s',
  },
  {
    title: 'OMANI Therapist Voice',
    category: 'Voice AI',
    problem: 'Culturally appropriate, real-time mental-health support was unavailable in spoken Omani Arabic.',
    blurb:
      'A real-time, voice-only mental-health chatbot delivering culturally sensitive CBT therapy in Omani Arabic.',
    tags: ['Azure STT/TTS', 'GPT-4o', 'Claude Opus 4', 'Groq', 'Flask', 'Docker'],
    highlights: [
      'Sub-20s end-to-end latency (avg 12 to 15s) via dual-model emotion detection and safety screening.',
      'Fine-tuned Hugging Face emotion model on annotated Omani Arabic, with crisis-keyword escalation.',
      'Dockerized at zero monthly cost (Azure Free Tier with Groq); HIPAA-aware, Kubernetes-ready.',
    ],
    metric: 'Sub-20s latency',
  },
  {
    title: 'Healthcare Readmission Risk Prediction',
    category: 'ML · Healthcare',
    problem: 'Hospitals lacked an early-warning signal for which patients were likely to be readmitted.',
    blurb:
      'A machine-learning system predicting hospital readmission risk and surfacing it through a real-time operational dashboard.',
    tags: ['XGBoost', 'Dash', 'Flask', 'Plotly', 'scikit-learn'],
    highlights: [
      'XGBoost on a 1M-row dataset with 5-fold cross-validation; risk scoring for 200K patients.',
      'Real-time Dash dashboard: 30s updates, 6 visualizations, 1K daily queries.',
      'Found a 15% winter spike (ages 61 to 80) and reallocated resources accordingly.',
    ],
    metric: '$6.7M saved per year',
  },
  {
    title: 'Real-Time Facial Emotion Detection',
    category: 'Computer Vision',
    problem: 'Live video needed real-time emotion classification running on commodity hardware.',
    blurb:
      'A computer-vision system classifying facial expressions from live video using a custom-trained CNN.',
    tags: ['OpenCV', 'CNN', 'TensorFlow/Keras', 'FER-2013'],
    highlights: [
      'Custom CNN on FER-2013 classifying live-video expressions at 70% accuracy.',
      'OpenCV face detection feeding frame-by-frame CNN inference.',
      'End-to-end pipeline: preprocessing, training, then real-time inference.',
    ],
    metric: 'Live-video inference',
  },
  {
    title: 'Ace Predictor: Tennis Match Prediction',
    category: 'ML · Sports',
    problem: 'Could machine learning out-forecast expert fantasy players on ATP tennis matches?',
    blurb:
      'An ML-vs-human benchmark for ATP match forecasting comparing four supervised models against 2018 fantasy player predictions.',
    tags: ['Python', 'XGBoost', 'scikit-learn', 'Random Forest'],
    highlights: [
      'Compared Logistic Regression, Naive Bayes, Random Forest and XGBoost.',
      'Benchmarked predictions against 2018 fantasy tennis players.',
      'XGBoost surpassed the best human forecasters.',
    ],
    metric: 'Beat top 2018 forecasters',
  },
  {
    title: 'Pandemic Pulse: COVID-19 Intelligence',
    category: 'Data Analytics',
    problem: 'COVID-19 data was vast and hard to read for decision-makers.',
    blurb:
      'A SQL and Power BI analytics pipeline over the Our World in Data COVID-19 dataset for cases, deaths and vaccination trends.',
    tags: ['SQL', 'Power BI', 'DAX'],
    highlights: [
      'CTEs and window functions to shape the raw global dataset.',
      'DAX-powered dashboards for cases, deaths and vaccinations.',
      'Trend storytelling tuned for non-technical stakeholders.',
    ],
    metric: 'Global COVID dashboards',
  },
  {
    title: 'NYC Taxi Intelligence',
    category: 'Data Analytics',
    problem: 'The NYC taxi ecosystem hid demand and pricing patterns across millions of rides.',
    blurb:
      'Exploratory analysis of the NYC taxi ecosystem surfaced across five interactive Power BI dashboards.',
    tags: ['Python', 'Power BI', 'Pandas', 'Excel'],
    highlights: [
      'Ride-frequency, fare-distribution and geospatial analysis.',
      'Five interactive Power BI dashboards.',
      'Surfaced demand and pricing patterns across the city.',
    ],
    metric: '5 interactive dashboards',
  },
  {
    title: 'GlobalMart Sales Analysis',
    category: 'Business Intelligence',
    problem: 'A multinational retailer needed one source of truth across cloud and CSV data.',
    blurb:
      'An enterprise BI platform with a star-schema model consolidating Azure and CSV sources into PostgreSQL with Power BI reporting.',
    tags: ['PostgreSQL', 'Power BI', 'Python', 'Azure', 'SQL'],
    highlights: [
      'Star-schema data model built for fast analytics.',
      'Python connector consolidating Azure Cloud databases and CSVs.',
      'Executive Power BI reporting across regions.',
    ],
    metric: 'Unified BI platform',
  },
]

export type Stat = { value: number; suffix: string; prefix?: string; label: string }
export const stats: Stat[] = [
  { value: 70, suffix: '%', label: 'Audit prep time reduced' },
  { value: 55, suffix: '%', label: 'Procurement cycle cut' },
  { value: 10, suffix: 'M+', label: 'Data rows analyzed' },
  { value: 6.7, suffix: 'M+', prefix: '$', label: 'Annual savings delivered' },
  { value: 40, suffix: '', label: 'Agent autonomous crew' },
  { value: 3, suffix: '+', label: 'Years AI & data' },
]

export const education = {
  degree: 'BS in Artificial Intelligence',
  school: 'Superior University, Lahore',
  courses: ['Data Science', 'Programming with AI', 'Python Programming', 'Artificial Intelligence'],
  certifications: [
    'AI with Python',
    'Big Data Analytics',
    'Applications of AI',
    'Neural Networks',
    'Time Series Analysis & Statistics',
    'Cloud Foundations',
    'Python Wrangling',
  ],
}

export const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
] as const
