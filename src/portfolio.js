/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hassan Shahid",
  title: "Hi all, I'm Hassan Shahid",
  subTitle: emoji(
    "Agentic AI Engineer / Data Scientist 🚀. Building production GenAI systems with LangChain, CrewAI, and RAG for GRC, banking compliance, procurement, and voice AI. Expert in multi-agent orchestration, LLM integration (GPT-4o, Claude), and enterprise-grade guardrails."
  ),
  resumeLink:
    "https://hasanshahidd.github.io/portfolio/",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hasanshahidd",
  linkedin: "https://www.linkedin.com/in/hassann-shahid",
  gmail: "ch.hassanshahid3@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AGENTIC AI ENGINEER SPECIALIZING IN GENAI, MULTI-AGENT ORCHESTRATION, AND ENTERPRISE INTELLIGENCE",
  skills: [
    emoji(
      "⚡ Build multi-agent systems with LangChain, CrewAI, AutoGen, and ReAct-style reasoning over RAG + vector stores (Pinecone, FAISS, Chroma)"
    ),
    emoji(
      "⚡ Ship enterprise AI for GRC, banking compliance, procurement, and voice AI with guardrails, confidence scoring, and tenant isolation"
    ),
    emoji(
      "⚡ Integrate GPT-4o, Claude Opus 4, and open-source LLMs into FastAPI / Flask services deployed on AWS, Azure, GCP with Docker + K8s"
    ),
    emoji(
      "⚡ Design ETL + OCR pipelines (Tesseract, Airflow) and decision-critical dashboards in Power BI, Dash, and Plotly"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "fastapi",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "langchain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "powerbi",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Services Section

const servicesSection = {
  title: "Services I Offer",
  subTitle: "COMPREHENSIVE AI/ML AND DATA SCIENCE SOLUTIONS FOR YOUR BUSINESS",
  services: [
    {
      title: "GenAI & LLM Solutions",
      iconClass: "fas fa-robot",
      description: "Enterprise-grade AI applications with LLM agents, RAG systems, and intelligent automation.",
      details: [
        "Build custom LLM agents with LangChain, ReAct, and function calling",
        "Design RAG systems with vector stores (Pinecone, FAISS, Weaviate)",
        "Implement guardrails, validation, and compliance frameworks",
        "Integrate GPT-4, Claude, and open-source models",
        "Deploy production-ready GenAI pipelines with monitoring"
      ],
      technologies: ["LangChain", "OpenAI", "Anthropic", "Pinecone", "FAISS", "Hugging Face"]
    },
    {
      title: "Enterprise AI Systems",
      iconClass: "fas fa-building",
      description: "End-to-end AI systems for GRC, compliance, procurement, and business intelligence.",
      details: [
        "GRC & compliance intelligence platforms with natural language query",
        "AI-powered procurement and vendor management assistants",
        "Document intelligence with OCR, extraction, and classification",
        "Automated audit evidence retrieval and reporting",
        "Custom enterprise chatbots with backend API integration"
      ],
      technologies: ["FastAPI", "Docker", "Azure", "AWS", "PostgreSQL", "Redis"]
    },
    {
      title: "Machine Learning Models",
      iconClass: "fas fa-brain",
      description: "Production ML models for prediction, classification, and decision support systems.",
      details: [
        "Predictive models (regression, time series, forecasting)",
        "Classification systems (risk assessment, churn prediction)",
        "NLP models (sentiment analysis, text classification, NER)",
        "Computer vision applications (OCR, image classification)",
        "Model deployment with CI/CD pipelines and monitoring"
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "MLflow", "Docker"]
    },
    {
      title: "Data Engineering & ETL",
      iconClass: "fas fa-cogs",
      description: "Scalable data pipelines, ETL workflows, and data warehouse solutions.",
      details: [
        "Design ETL pipelines for multi-source data integration",
        "Build data warehouses and lakes (Azure, AWS, Snowflake)",
        "Implement real-time data streaming (Kafka, Spark)",
        "Data quality validation and monitoring frameworks",
        "API development for data access and orchestration"
      ],
      technologies: ["Apache Airflow", "Pandas", "PySpark", "SQL", "Azure Data Factory", "AWS Glue"]
    },
    {
      title: "Business Intelligence & Dashboards",
      iconClass: "fas fa-chart-line",
      description: "Interactive dashboards and BI solutions that drive data-driven decision making.",
      details: [
        "Power BI dashboards with advanced DAX calculations",
        "Real-time web dashboards (Plotly Dash, Streamlit)",
        "KPI tracking and executive reporting systems",
        "Sales, inventory, and operational analytics",
        "Embedded analytics and white-label solutions"
      ],
      technologies: ["Power BI", "Tableau", "Plotly", "Dash", "Streamlit", "D3.js"]
    },
    {
      title: "AI Consulting & Strategy",
      iconClass: "fas fa-lightbulb",
      description: "Strategic AI consulting to identify opportunities and build implementation roadmaps.",
      details: [
        "AI readiness assessment and opportunity identification",
        "GenAI use case discovery and feasibility analysis",
        "ML model architecture design and technology selection",
        "Team training on AI/ML tools and best practices",
        "Technical due diligence and code reviews"
      ],
      technologies: ["Strategy", "Training", "Architecture", "Best Practices", "Mentorship"]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Superior University",
      logo: require("./assets/images/superior.jpg"),
      subHeader: "Bachelor of Science in Artificial Intelligence",
      duration: "",
      desc: "Focused on AI/ML fundamentals, data science, and Python programming.",
      descBullets: [
        "Relevant Coursework: Data Science, AI Programming, Python, Machine Learning",
        "Certifications: Big Data Analytics, Python with AI, Time Series Analysis"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "GenAI & LLM Engineering", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning & Data Science",
      progressPercentage: "90%"
    },
    {
      Stack: "Python & Backend Development",
      progressPercentage: "88%"
    },
    {
      Stack: "Data Engineering & ETL",
      progressPercentage: "85%"
    },
    {
      Stack: "Business Intelligence & Dashboards",
      progressPercentage: "87%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI/ML Engineer (GenAI & Enterprise Systems)",
      company: "Liztek",
      companylogo: require("./assets/images/liztek_logo.jpg"),
      date: "Sep 2025 – Present",
      desc: "Architecting AI-powered GRC and procurement assistants for enterprise and banking clients.",
      descBullets: [
        "Built AI-powered GRC and procurement assistants with natural language querying over policies and risks",
        "Delivered RAG compliance layer for State Bank of North America, cutting audit prep time by 60-70%",
        "Integrated LLM agents with enterprise APIs using guardrails, tenant isolation, and confidence scoring"
      ]
    },
    {
      role: "Data Scientist & ML Engineer (Leading GenAI)",
      company: "Optivex Solutions",
      companylogo: require("./assets/images/optivex.jpg"),
      date: "Apr 2024 – Jul 2025",
      desc: "Led a 5-analyst team delivering enterprise KPI dashboards and LLM-powered business intelligence.",
      descBullets: [
        "Led 5-analyst team building KPI dashboards for weekly C-level decisions across sales and ops",
        "Analyzed 10M+ rows delivering strategic insights that contributed to a 15% revenue lift",
        "Shipped LLM-powered BI engine and OCR pipeline, boosting document processing speed by 50%"
      ]
    },
    {
      role: "Sales Analyst / Data Scientist",
      company: "Fierra Footwear",
      companylogo: require("./assets/images/Fierra.jpg"),
      date: "Jan 2023 – Feb 2024",
      desc: "Led 5-member analytics team on sprint-based retail analysis and GenAI-driven marketing.",
      descBullets: [
        "Led 5-analyst team; Power BI dashboards reduced overstock by 25% via inventory optimization",
        "SQL-driven insights across 10+ product lines increased monthly revenue by 12%",
        "Applied GenAI to personalized mobile ad creatives, improving engagement metrics by 22%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Disabled: no GitHub token configured, so profile.json isn't generated
  display: false // Disabled: Major Projects section already showcases work
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "ENTERPRISE AI SYSTEMS, GENAI AGENTS, AND ML SOLUTIONS DELIVERING REAL BUSINESS IMPACT",
  projects: [
    {
      image: require("./assets/images/GRC.jpg"),
      projectName: "Enterprise GRC & Compliance Intelligence",
      projectDesc: "AI-driven GRC platform with LangChain + GPT-4o RAG pipelines for natural language queries over controls, policies, and risks. Banking-sector deployment cut audit prep time by 60-70%.",
      longDescription: "AI-driven Governance, Risk, and Compliance platform enabling auditors and compliance teams to query controls, risks, and policies via natural language across complex enterprise schemas. Built on LLM-powered RAG pipelines with validation layers and confidence scoring. Banking deployment with State Bank of North America automated regulatory control mapping, compliance gap analysis, and audit evidence generation across multi-client tenant-isolated environments.",
      highlights: [
        "Cut manual audit preparation time by 60-70% across multi-client banking deployments",
        "Delivered role-based access control, tenant isolation, and explainability traces",
        "Improved audit decision turnaround time by 40% with confidence-scored responses",
        "Designed safe multi-table agentic query pipelines across complex enterprise schemas"
      ],
      techStack: ["LangChain", "GPT-4o", "RAG", "Pinecone", "FastAPI", "PostgreSQL"],
      footerLink: []
    },
    {
      image: require("./assets/images/agentic-procurement.png"),
      projectName: "Agentic Procurement Intelligence Platform",
      projectDesc: "Fully autonomous 4-agent CrewAI crew (Intake, Vendor Intelligence, Approval Orchestrator, Audit Trail) with Pinecone vector store over 50K+ procurement docs. Reduced procurement cycle time by 55%.",
      longDescription: "Fully autonomous multi-agent procurement workflow using a 4-agent CrewAI crew — Intake, Vendor Intelligence, Approval Orchestrator, and Audit Trail — enabling natural language PO resolution with zero manual triage. Deployed on AWS with audit-ready logging fully compatible with enterprise GRC and SOX compliance requirements.",
      highlights: [
        "Built Pinecone vector store over 50K+ procurement documents for real-time clause retrieval",
        "Reduced procurement cycle time by 55% in pilot deployment",
        "Integrated live ERP APIs with spend-threshold guardrails and human-in-the-loop escalation",
        "Deployed on AWS Lambda + API Gateway with FastAPI backend and audit-ready logging"
      ],
      techStack: ["CrewAI", "LangChain", "GPT-4o", "FastAPI", "Pinecone", "AWS Lambda"],
      footerLink: []
    },
    {
      image: require("./assets/images/rag-compliance.png"),
      projectName: "RAG Compliance Intelligence Platform",
      projectDesc: "Production-grade RAG system benchmarking enterprise policies against PCI-DSS v3.2 and ISO 27001:2013. FAISS + Groq Llama 3.1 delivers citation-backed gap reports in under 5 seconds.",
      longDescription: "Retrieval-augmented generation system for analyzing enterprise security policies against PCI-DSS v3.2 and ISO 27001:2013 compliance standards. Processes ~81,000-word policy PDFs into 251 semantic segments using FAISS vector search, Groq Llama 3.1 for LLM reasoning, and Hugging Face SentenceTransformers for embeddings, all surfaced through an interactive Streamlit UI.",
      highlights: [
        "Ingests ~81,000-word policy PDFs, chunked into 26 large and 162 small semantic segments",
        "FAISS-powered semantic retrieval delivers grounded answers in under 5 seconds",
        "Automated compliance gap analysis with markdown-formatted executive risk reports",
        "Interactive Streamlit UI for querying and report generation by compliance teams"
      ],
      techStack: ["Streamlit", "FAISS", "Groq Llama 3.1", "Hugging Face", "LangChain", "Tesseract"],
      footerLink: []
    },
    {
      image: require("./assets/images/omani.png"),
      projectName: "OMANI Therapist Voice Chatbot",
      projectDesc: "Real-time voice-only mental health chatbot in Omani Arabic with sub-20s latency via Azure STT/TTS, fine-tuned Hugging Face emotion model, GPT-4o/Claude Opus 4, and crisis safety screening.",
      longDescription: "Real-time, voice-only mental health chatbot delivering culturally sensitive therapy in Omani Arabic. Achieves sub-20-second end-to-end latency (avg. 12-15s) via a pipeline of Azure STT, dual-model emotion detection, safety screening, GPT-4o / Claude Opus 4 response generation, and Azure TTS with authentic dialect adaptation.",
      highlights: [
        "Fine-tuned Hugging Face emotion model on annotated Omani Arabic phrases with CBT therapy responses",
        "Crisis keyword safety screening with escalation protocols for high-risk inputs",
        "Deployed on Docker at zero monthly cost using Azure Free Tier and Groq free-tier LLM inference",
        "HIPAA-aware logging with no audio persistence; Kubernetes-compatible for production scaling"
      ],
      techStack: ["Azure STT/TTS", "GPT-4o", "Claude Opus 4", "Groq", "Flask", "Docker", "Hugging Face"],
      footerLink: []
    },
    {
      image: require("./assets/images/voice-ai-patient.png"),
      projectName: "Voice AI Patient Registration System",
      projectDesc: "Production voice AI agent answering real U.S. phone calls with Vapi.ai + GPT-4o-mini + FastAPI + PostgreSQL. HIPAA-aware design with async handling and full CRUD dashboard on Railway.",
      longDescription: "Production-ready voice AI agent answering real U.S. phone calls, conducting natural LLM-driven conversations to collect patient demographics, validate input in real time, and persist confirmed records to PostgreSQL with duplicate detection and soft-delete audit trails.",
      highlights: [
        "4-layer pipeline: Vapi.ai telephony + STT/TTS → GPT-4o-mini → FastAPI validation → PostgreSQL",
        "UUID primary keys for horizontal scalability and async endpoints for concurrent call handling",
        "HIPAA-aware data design with no audio persistence beyond immediate processing",
        "Deployed on Railway with live REST API, full CRUD, and web dashboard for record management"
      ],
      techStack: ["Vapi.ai", "GPT-4o-mini", "FastAPI", "PostgreSQL", "Railway"],
      footerLink: []
    },
    {
      image: require("./assets/images/emotion-detection.png"),
      projectName: "Real-Time Emotion Detection System",
      projectDesc: "Real-time facial emotion recognition combining a custom-trained CNN with OpenCV face detection. Achieves 70% classification accuracy on live video streams with GPU-accelerated local inference.",
      longDescription: "Real-time emotion detection system combining machine learning and computer vision to recognize facial expressions from live video feeds. A custom-trained convolutional neural network handles emotion classification while OpenCV manages face detection, with GPU support for local execution.",
      highlights: [
        "70% classification accuracy on emotion recognition from real-time video",
        "Custom CNN architecture trained specifically for facial expression classification",
        "OpenCV-powered face detection pipeline for reliable frame-by-frame processing",
        "GPU-accelerated local execution for low-latency inference"
      ],
      techStack: ["Python", "OpenCV", "CNN", "Jupyter Notebook", "Deep Learning"],
      footerLink: []
    },
    {
      image: require("./assets/images/healthcare.png"),
      projectName: "Healthcare Readmission Risk Prediction",
      projectDesc: "XGBoost model on 1M-row dataset with 5-fold CV and real-time Dash + Flask dashboard. Reduced readmissions by 15%, saving $3.5M annually and $1.2M in operational costs.",
      longDescription: "Predictive machine learning system on a 1M-row patient dataset for real-time hospital readmission risk scoring. XGBoost model with 5-fold cross-validation automates risk assessment for 200K test patients, paired with a real-time Dash + Flask dashboard surfacing actionable insights for clinical intervention teams.",
      highlights: [
        "Reduced 30-day readmissions by 15%, saving $3.5M annually across the network",
        "Real-time Dash dashboard with 6 visualizations updating every 30 seconds for 1K daily queries",
        "Identified 15% winter readmission spike in 61-80 age group, saving an additional $2M via resource reallocation",
        "Cut intervention delays by 30%, saving $1.2M in operational costs"
      ],
      techStack: ["XGBoost", "scikit-learn", "Dash", "Flask", "Plotly", "Pandas"],
      footerLink: []
    },
    {
      image: require("./assets/images/ace-predictor.png"),
      projectName: "Ace Predictor: Tennis Match Prediction",
      projectDesc: "ML-vs-human benchmark for ATP match forecasting. Tested four supervised models on 2018 fantasy-tennis predictions; XGBoost surpassed the best human experts in predictive accuracy.",
      longDescription: "Machine learning research project investigating whether algorithmic models can forecast ATP tennis match outcomes more accurately than expert fantasy tennis players. Built a full supervised-learning comparison across four algorithms, evaluated on historical ATP match data alongside 2018 fantasy player predictions as a human baseline.",
      highlights: [
        "Benchmarked Logistic Regression, Gaussian Naive Bayes, Random Forest, and XGBoost on tennis match outcomes",
        "XGBoost model surpassed the best 2018 fantasy tennis players in predictive accuracy",
        "Investigated ranking-based strategies and where expert human forecasters systematically fail",
        "Built on historical ATP match data with engineered match-context features"
      ],
      techStack: ["Python", "XGBoost", "scikit-learn", "Random Forest", "Jupyter Notebook"],
      footerLink: []
    },
    {
      image: require("./assets/images/pandemic-pulse.png"),
      projectName: "Pandemic Pulse: COVID-19 Intelligence",
      projectDesc: "SQL + Power BI analytics pipeline over Our World in Data's COVID-19 dataset. CTEs, window functions, and DAX-powered dashboards surface cases, deaths, and vaccination wave patterns.",
      longDescription: "End-to-end analytics pipeline transforming the Our World in Data COVID-19 dataset into actionable intelligence. Combines advanced SQL (CTEs, window functions, aggregate views) with interactive Power BI dashboards and DAX measures to deliver yearly, quarterly, and monthly breakdowns of cases, deaths, and vaccination coverage across regions.",
      highlights: [
        "Advanced SQL with CTEs, window functions, aggregate views, and temporal year/quarter/month extraction",
        "Power BI dashboards with dynamic slicers, drill-downs, and DAX-calculated measures",
        "Global totals, regional comparisons, and stacked-bar trend charts for cases and deaths",
        "Revealed vaccination-death rate correlations and wave pattern variations by region"
      ],
      techStack: ["SQL", "Power BI", "DAX", "Our World in Data"],
      footerLink: []
    },
    {
      image: require("./assets/images/nyc-taxi.png"),
      projectName: "NYC Taxi Intelligence",
      projectDesc: "Data-driven exploration of NYC's taxi ecosystem — ride frequency, fare distribution, and geospatial trends surfaced through a Python → Power BI workflow with five interactive dashboards.",
      longDescription: "End-to-end exploratory data analysis of New York City's taxi ecosystem, uncovering patterns in ride frequency, fare distribution, and geospatial trends across the city. The workflow moves from raw data preparation in Excel, through cleaning and EDA in Python / Jupyter, into five interactive Power BI dashboards for stakeholder-ready storytelling.",
      highlights: [
        "Three-stage workflow: Excel for raw storage, Python / Jupyter for cleaning + EDA, Power BI for reporting",
        "Five interactive Power BI dashboards covering ride frequency, fare distribution, and geospatial trends",
        "Critical-thinking focus on data-quality evaluation and meaningful pattern extraction",
        "Actionable output for urban planning and transportation strategy decisions"
      ],
      techStack: ["Python", "Jupyter Notebook", "Excel", "Power BI", "Pandas"],
      footerLink: []
    },
    {
      image: require("./assets/images/globalmart-sales.png"),
      projectName: "GlobalMart Sales Analysis",
      projectDesc: "Enterprise BI platform for a multinational retailer. Star-schema data model over Azure Cloud + CSV sources with Python, SQL, and Power BI surfacing revenue, regional, and customer insights.",
      longDescription: "Business intelligence solution for GlobalMart, a multinational retailer, consolidating fragmented data sources into a centralized model for structured reporting. Ingests from Azure Cloud databases and CSV files, exposes the unified model through PostgreSQL and an automated Python connector, and delivers interactive Power BI dashboards for revenue trends, product performance, regional insights, and customer behavior.",
      highlights: [
        "Star-schema data model implementation optimized for analytical query performance",
        "Centralized sales hub consolidating Azure Cloud databases and CSV source files",
        "SQL queries for store sales overviews by type — revenue percentages and order counts",
        "Customer segmentation, seasonal pattern identification, and regional performance benchmarking",
        "Python connector automating database query execution for notebook-based analysis"
      ],
      techStack: ["Python", "PostgreSQL", "Power BI", "SQL", "Azure", "Git"],
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional certifications in Artificial Intelligence, Machine Learning, and Data Science",

  achievementsCards: [
    {
      title: "AI with Python",
      subtitle:
        "Completed comprehensive training in Artificial Intelligence programming with Python, covering AI algorithms, libraries, and practical implementations.",
      image: require("./assets/images/AI with python.jpeg"),
      imageAlt: "AI with Python Certificate",
      footerLink: []
    },
    {
      title: "Big Data Analytics",
      subtitle:
        "Advanced certification in Big Data Analytics, focusing on large-scale data processing, analysis techniques, and business intelligence applications.",
      image: require("./assets/images/Big data analytics.jpeg"),
      imageAlt: "Big Data Analytics Certificate",
      footerLink: []
    },
    {
      title: "Applications of AI",
      subtitle:
        "Specialized training in practical applications of Artificial Intelligence across various domains and industry use cases.",
      image: require("./assets/images/Applications of AI.jpeg"),
      imageAlt: "Applications of AI Certificate",
      footerLink: []
    },
    {
      title: "Neural Networks",
      subtitle:
        "Deep learning certification covering neural network architectures, training methodologies, and implementation of deep learning models.",
      image: require("./assets/images/neural Networks.jpeg"),
      imageAlt: "Neural Networks Certificate",
      footerLink: []
    },
    {
      title: "Time Series Analysis & Statistics",
      subtitle:
        "Advanced training in Time Series Analysis and Statistical methods for forecasting, trend analysis, and data-driven decision making.",
      image: require("./assets/images/TSAS.jpeg"),
      imageAlt: "Time Series Analysis Certificate",
      footerLink: []
    },
    {
      title: "Cloud Foundations",
      subtitle:
        "Comprehensive certification in cloud computing fundamentals, cloud architecture, and deployment strategies on major cloud platforms.",
      image: require("./assets/images/Cloud Foundations.jpeg"),
      imageAlt: "Cloud Foundations Certificate",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing insights on AI/ML, GenAI, and data science best practices.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Building Production-Ready GenAI Pipelines",
      description:
        "Best practices for deploying LLM agents with guardrails, validation, and enterprise-grade reliability."
    },
    {
      url: "",
      title: "RAG Systems for Enterprise Compliance",
      description:
        "How to build retrieval-augmented generation systems that meet regulatory requirements and audit standards."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "SHARING KNOWLEDGE ON AI/ML AND GENAI IMPLEMENTATIONS 🚀"
  ),

  talks: [
    {
      title: "Enterprise GenAI Applications",
      subtitle: "AI/ML Best Practices Workshop",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSIONS ON AI/ML AND DATA SCIENCE",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to async remote engagements across EU/UK/US/AUS time zones. Let's discuss your AI/ML project!",
  number: "+92-3367798256",
  email_address: "ch.hassanshahid3@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  servicesSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
