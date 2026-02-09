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
  title: "Hi all, I'm Hassan",
  subTitle: emoji(
    "A passionate Data Scientist & AI/ML Engineer 🚀 specializing in GenAI pipelines, LLM orchestration, and enterprise AI solutions. Experience building production-grade RAG systems, compliance intelligence platforms, and agent-based automation with LangChain, GPT-4, and open-source models."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: "ch.hassanshahid3@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI/ML ENGINEER SPECIALIZING IN GENAI, LLM ORCHESTRATION & ENTERPRISE AUTOMATION",
  skills: [
    emoji(
      "⚡ Build GenAI pipelines with LangChain, ReAct-style reasoning, agent orchestration, RAG over vector stores (Pinecone, FAISS)"
    ),
    emoji("⚡ Design enterprise AI assistants for GRC, compliance, procurement & document intelligence with validation and guardrails"),
    emoji(
      "⚡ Develop production-grade ML models with Python, TensorFlow, PyTorch, and deploy with Docker, FastAPI, Flask"
    ),
    emoji(
      "⚡ Create ETL pipelines, OCR workflows (Tesseract), and decision-critical dashboards (Power BI, Dash, Plotly)"
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
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
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
      skillName: "API Development",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Data Analytics",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Natural Language Processing",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
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
      duration: "Lahore, Pakistan",
      desc: "Focused on Data Science, AI Programming, and Python development.",
      descBullets: [
        "Relevant Courses: Data Science, Programming with AI, Python Programming, Machine Learning",
        "Certifications: Big Data Analytics, Python Wrangling, Python with AI"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "LangChain & LLM Orchestration",
      icon: "fas fa-link"
    },
    {
      Stack: "Python & FastAPI",
      icon: "fab fa-python"
    },
    {
      Stack: "TensorFlow & PyTorch",
      icon: "fas fa-brain"
    },
    {
      Stack: "Docker & Kubernetes",
      icon: "fab fa-docker"
    },
    {
      Stack: "RAG & Vector Stores",
      icon: "fas fa-database"
    },
    {
      Stack: "NLP & Transformers",
      icon: "fas fa-language"
    },
    {
      Stack: "AWS Cloud Services",
      icon: "fab fa-aws"
    },
    {
      Stack: "Data Engineering & ETL",
      icon: "fas fa-cogs"
    },
    {
      Stack: "Power BI & Dash",
      icon: "fas fa-chart-line"
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
      desc: "Enterprise AI applications for GRC, procurement, and compliance automation.",
      descBullets: [
        "Designed AI-powered GRC assistants enabling natural language queries across policies, controls, and risks",
        "Built secure multi-table query pipelines with role-based access and tenant isolation",
        "Integrated LLM agents with APIs for audit evidence retrieval and compliance reporting"
      ]
    },
    {
      role: "Data Scientist and ML (Leading GenAI)",
      company: "Optivex Solutions",
      companylogo: require("./assets/images/optivex.jpg"),
      date: "Jan 2024 – July 2025",
      desc: "Led analytics team and GenAI initiatives for enterprise intelligence.",
      descBullets: [
        "Led team of 5 building KPI dashboards, contributing to 15% revenue lift",
        "Analyzed 10M+ data rows delivering strategic insights for C-level planning",
        "Deployed OCR pipeline with LangChain, improving processing speed by 50%"
      ]
    },
    {
      role: "Sales Analyst/Scientist",
      company: "Fierra Footwear",
      companylogo: require("./assets/images/Fierra.jpg"),
      date: "Jan 2023 – Jan 2024",
      desc: "Led retail analytics team for revenue optimization.",
      descBullets: [
        "Led 5-member team designing dashboards, reducing overstock by 25%",
        "Performed SQL analysis across 10+ product lines, increasing revenue by 12%",
        "Applied GenAI for personalized ad creatives, improving engagement by 22%"
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "ENTERPRISE AI SOLUTIONS & PRODUCTION ML SYSTEMS",
  projects: [
    {
      image: require("./assets/images/GRC.jpg"),
      projectName: "Enterprise GRC & Compliance Intelligence",
      projectDesc: "AI-driven GRC system enabling auditors and compliance teams to query controls, policies, risks using natural language. Automated compliance reporting and evidence retrieval, cutting audit time by 60-70%.",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/healthcare.png"),
      projectName: "Real-Time Healthcare Readmission Prediction",
      projectDesc: "XGBoost predictive model on 1M-row dataset with real-time Dash dashboard and Flask API. Reduced readmissions by 15%, saving $3.5M annually with 30-second risk scoring updates.",
      footerLink: [
        {
          name: "View Details",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/omani.png"),
      projectName: "Omani Therapist Voice Chatbot",
      projectDesc: "Culturally adapted mental health assistant for Arabic speakers using GPT-4, Azure STT/TTS, and emotion-aware response logic. Achieved <20s latency and 96% satisfaction with embedded safety filters.",
      footerLink: [
        {
          name: "Explore Project",
          url: ""
        }
      ]
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
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Time Series Analysis & Stock Market Prediction",
      subtitle:
        "Advanced predictive modeling certification focusing on time series forecasting and financial market analysis using Python.",
      image: require("./assets/images/TSAS.jpeg"),
      imageAlt: "Time Series Analysis",
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Big Data Analytics Course",
      subtitle:
        "Comprehensive certification in distributed systems, large-scale data processing, and analytics at enterprise scale.",
      image: require("./assets/images/Big data analytics.jpeg"),
      imageAlt: "Big Data Analytics",
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Applications of AI",
      subtitle:
        "Practical AI applications certification covering real-world use cases, industry implementations, and AI solution design.",
      image: require("./assets/images/Applications of AI.jpeg"),
      imageAlt: "Applications of AI",
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Introduction to Neural Networks",
      subtitle:
        "Foundational deep learning certification covering neural network architectures, backpropagation, and training techniques.",
      image: require("./assets/images/neural Networks.jpeg"),
      imageAlt: "Neural Networks",
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Cloud Foundations – Advanced",
      subtitle:
        "Advanced cloud infrastructure certification for deploying and scaling ML workflows in production environments.",
      image: require("./assets/images/Cloud Foundations.jpeg"),
      imageAlt: "Cloud Foundations",
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
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
        "Best practices for designing and deploying enterprise-grade GenAI systems with LangChain and vector stores."
    },
    {
      url: "",
      title: "RAG Systems for Compliance and GRC",
      description:
        "How to implement Retrieval-Augmented Generation for regulatory compliance and governance use cases."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "AI/ML in Enterprise Systems",
      subtitle: "Technical deep-dive on GenAI implementation",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
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
