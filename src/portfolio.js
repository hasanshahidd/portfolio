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
  linkedin: "https://www.linkedin.com/in/hassan-shahid",
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
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "GenAI & LLM Engineering",
      icon: "fas fa-brain",
      progressPercentage: "95%"
    },
    {
      Stack: "Machine Learning & Data Science",
      icon: "fas fa-chart-line",
      progressPercentage: "90%"
    },
    {
      Stack: "Python & Backend Development",
      icon: "fab fa-python",
      progressPercentage: "88%"
    },
    {
      Stack: "Data Engineering & ETL",
      icon: "fas fa-database",
      progressPercentage: "85%"
    },
    {
      Stack: "Business Intelligence & Dashboards",
      icon: "fas fa-chart-bar",
      progressPercentage: "87%"
    }
  ],
  displayCodersrank: false
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
  title: emoji("Certifications & Achievements 🏆 "),
  subtitle:
    "Professional certifications and key accomplishments in AI/ML and Data Science",

  achievementsCards: [
    {
      title: "Artificial Intelligence with Python",
      subtitle:
        "Python-based AI certification covering machine learning algorithms, neural networks, and intelligent system development.",
      image: require("./assets/images/AI with python.jpeg"),
      imageAlt: "AI with Python",
      footerLink: []
    },
    {
      title: "Time Series Analysis & Stock Market Prediction",
      subtitle:
        "Advanced predictive modeling certification focusing on time series forecasting and financial market analysis using Python.",
      image: require("./assets/images/TSAS.jpeg"),
      imageAlt: "Time Series Analysis",
      footerLink: []
    },
    {
      title: "Big Data Analytics Course",
      subtitle:
        "Comprehensive certification in distributed systems, large-scale data processing, and analytics at enterprise scale.",
      image: require("./assets/images/Big data analytics.jpeg"),
      imageAlt: "Big Data Analytics",
      footerLink: []
    },
    {
      title: "Applications of AI",
      subtitle:
        "Practical AI applications certification covering real-world use cases, industry implementations, and AI solution design.",
      image: require("./assets/images/Applications of AI.jpeg"),
      imageAlt: "Applications of AI",
      footerLink: []
    },
    {
      title: "Introduction to Neural Networks",
      subtitle:
        "Foundational deep learning certification covering neural network architectures, backpropagation, and training techniques.",
      image: require("./assets/images/neural Networks.jpeg"),
      imageAlt: "Neural Networks",
      footerLink: []
    },
    {
      title: "Cloud Foundations – Advanced",
      subtitle:
        "Advanced cloud infrastructure certification for deploying and scaling ML workflows in production environments.",
      image: require("./assets/images/Cloud Foundations.jpeg"),
      imageAlt: "Cloud Foundations",
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
