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
    "Data Scientist / AI/ML Engineer 🚀 specializing in GenAI pipelines, enterprise LLM applications, and agent orchestration. Expert in building production-grade AI systems for GRC, compliance, and business intelligence."
  ),
  resumeLink:
    "", // Set to empty to hide the button
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
  subTitle: "AI/ML ENGINEER SPECIALIZING IN GENAI, LLM AGENTS, AND ENTERPRISE INTELLIGENCE SYSTEMS",
  skills: [
    emoji(
      "⚡ Build GenAI pipelines with LangChain, ReAct agents, RAG systems, and vector stores (Pinecone, FAISS)"
    ),
    emoji(
      "⚡ Design enterprise AI assistants for GRC, compliance, procurement with guardrails and validation"
    ),
    emoji(
      "⚡ Deploy production ML models with FastAPI, Docker; integrate GPT-4, Claude, and open-source LLMs"
    ),
    emoji(
      "⚡ Build ETL pipelines, OCR workflows, and decision-critical dashboards (Power BI, Dash, Plotly)"
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
      date: "Sep 2024 – Present",
      desc: "Leading enterprise AI applications with focus on GRC, procurement, and compliance automation.",
      descBullets: [
        "Built AI-powered GRC & procurement assistants with natural language query capabilities",
        "Integrated LLM agents with backend APIs for audit evidence retrieval and compliance reporting"
      ]
    },
    {
      role: "Data Scientist & ML Engineer (Leading GenAI)",
      company: "Optivex Solutions",
      companylogo: require("./assets/images/optivex.jpg"),
      date: "Jan 2024 – Jul 2025",
      desc: "Led team of 5 analysts building enterprise KPI dashboards and GenAI solutions.",
      descBullets: [
        "Analyzed 10M+ rows delivering insights contributing to 15% revenue lift",
        "Deployed OCR-powered text extraction pipeline improving processing speed by 50%"
      ]
    },
    {
      role: "Sales Analyst/Scientist",
      company: "Fierra Footwear",
      companylogo: require("./assets/images/Fierra.jpg"),
      date: "Jan 2023 – Jan 2024",
      desc: "Led analytics team on retail analysis and revenue optimization.",
      descBullets: [
        "Designed Power BI dashboards reducing overstock by 25% and increasing revenue by 12%",
        "Applied GenAI models for personalized ad creatives, improving engagement by 22%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "ENTERPRISE AI SYSTEMS AND ML SOLUTIONS DELIVERING REAL BUSINESS IMPACT",
  projects: [
    {
      image: require("./assets/images/GRC.jpg"),
      projectName: "Enterprise GRC & Compliance Intelligence",
      projectDesc: "AI-driven GRC system enabling natural language queries over controls, policies, risks, and evidence with 60-70% reduction in audit preparation time.",
      footerLink: []
    },
    {
      image: require("./assets/images/healthcare.png"),
      projectName: "Healthcare Readmission Risk Prediction",
      projectDesc: "XGBoost model on 1M-row dataset with real-time Dash dashboard, reducing readmissions by 15% and saving $3.5M annually.",
      footerLink: []
    },
    {
      image: require("./assets/images/omani.png"),
      projectName: "Omani Therapist Voice Chatbot",
      projectDesc: "Culturally adapted mental health assistant using GPT-4, Azure STT/TTS with <20s latency and 96% satisfaction in testing.",
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
