import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const personalInfo = {
  name: "Sadia Imran",
  title: "Full-Stack Software Engineer",
  location: "Islamabad, Pakistan",
  email: "sadiaimran837@gmail.com",
  phone: "+92-315-5354758",
  summary: "Full-Stack Software Engineer with strong expertise in backend development, scalable API design, and DevOps practices. Proven track record building production systems using Python (FastAPI, Flask), Node.js, and modern databases. Experience spans cross-platform development (Qt/QML, Flutter), cloud infrastructure (AWS, Docker, Kubernetes), and AI/ML integration. Currently driving backend architecture at Stackware Ltd. with focus on system integration, and real-time applications.",
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sadia-imran-3b627227b/",
      icon: Linkedin
    },
    {
      name: "GitHub",
      url: "https://github.com/SadiaImran",
      icon: Github
    },
    {
      name: "Email",
      url: "mailto:sadiaimran837@gmail.com",
      icon: Mail
    },
    {
      name: "Resume",
      url: "/assets/resume.pdf",
      icon: FileText
    }
  ]
};

export const experience = [
  {
    company: "Stackware Ltd.",
    role: "Junior Software Engineer (Full-Stack)",
    period: "Jan 2025 – Present",
    location: "Islamabad, Pakistan (Hybrid)",
    description: [
      "Architected and developed cross-platform applications using Qt/QML, PyQt, and Flutter with focus on backend system integration.",
      "Designed and implemented backend APIs in Python and C++.",
      "Collaborated with cross-functional teams using Git workflow, code reviews, and spftware engineering methodologies."
    ]
  },
  {
    company: "Stackware Ltd.",
    role: "Backend Development Intern",
    period: "Oct 2024 – Dec 2024",
    location: "Islamabad, Pakistan (Hybrid)",
    description: [
      "Engineered backend features for protocols including Bluetooth Low Energy, Maps API integration, and network communication layers.",
      "Contributed to full-stack development using C++, Python, and Qt/QML for UI/backend integration",
      "Gained experience with version control and collaborative tools."
    ]
  }
];

export const education = [
  {
    institution: "COMSATS University Islamabad",
    degree: "Bachelor of Science in Computer Science",
    period: "Jan 2022 – Jan 2026",
    location: "Islamabad, Pakistan",
    description: [
      "CGPA: 3.78/4.0",
      "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, DevOps, Machine Learning, Computer Networks, Operating Systems"
    ]
  }
];

export const projects = [
  {
    title: "PodVerse",
    tech: ["React.js", "FastAPI", "LiveKit", "Supabase", "AI/ML", "LLM", "FFMPEG"],
    period: "Dec 2024 – Present",
    image: "/assets/podverse-demo.png",
    description: [
      "Architecting AI-powered podcast platform automating content creation through script generation, voice cloning, and RAG-based guest hosting",
      "Built scalable FastAPI backend with Supabase integration handling concurrent users, implementing real-time audio processing, faceless video generation, and automated subtitle creation",
      "Implemented RAG based LLM for personalized knowledge base integration."
    ],
    links: []
  },
  {
    title: "JobPilot",
    tech: ["FastAPI", "Supabase", "React.js", "TailwindCSS", "LLM"],
    period: "2025",
    image: "/assets/jobpilot.png",
    description: [
      "Developed full-stack job application tracker with FastAPI backend and React frontend.",
      "Integrated LLM-powered resume analysis providing intelligent job matching and content suggestions.",
      "Generates cover letter on the basis of job description and resume."
    ],
    links: [{ name: "GitHub", url: "https://github.com/SadiaImran/JobPilot" }]
  },
  {
    title: "Real Time Weather",
    tech: ["FLutter" , "OpenWeatherMap API"],
    period: "2025",
    image: "/assets/weather.png",
    description: [
      "Cross-platform real-time weather application built with Flutter. It provides weather updates for any location entered by the user.",
      "The app fetches live weather data details such as temperature, humidity, wind speed, precipitation, and UV index."
    ],
    links: [{ name: "GitHub", url: "https://sadiaimran.github.io/realtime-weather-demo/" }]
  },
  {
    title: "Predictive Analytics for Housing Prices",
    tech: ["Python", "Scikit-learn", "Flask"],
    period: "2025",
    image: "/assets/home-price.png",
    description: [
      "Developed ML regression model housing price prediction pipeline to predict housing prices based on input features.",
      "Created Flask API for real-time predictions through web interface",
      "Engineered data preprocessing pipeline handling missing values and feature engineering"
    ],
    links: [{ name: "GitHub", url: "https://github.com/SadiaImran/Predict-house-pricing" }]
  },
  {
    title: "Celebrity Face Classifier",
    tech: ["Python", "OpenCV", "Flask", "ML"],
    period: "2025",
    image: "/assets/celebrity.png",
    description: [
      "Built ML-based multi-face detection system with 88% classification accuracy to detect and classify multiple celebrities in an uploaded image.",
      "Implemented Flask backend for image processing and real-time inference with optimized model serving"
    ],
    links: [{ name: "GitHub", url: "https://github.com/SadiaImran/Celebrity-face-detection" }]
  },
  {
    title: "Travel Planner App",
    tech: ["Flutter", "Firebase"],
    period: "2025",
    image: "/assets/travel-app.png",
    description: [
      "Developed cross-platform mobile app with Firebase backend for real-time trip planning and booking",
      "Developed a Flutter app that helps users explore destinations, book stays, plan trips",
      "Used Firebase Firestore for real-time data storage"
    ],
    links: [{ name: "GitHub", url: "https://github.com/SadiaImran/travel_app" }]
  }
];

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Dart", "SQL", "Bash"],
  Backend: ["FastAPI", "Flask", "Django", "Node.js", "Express.js", "RESTful APIs", "WebSockets"],
  Databases: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Redis"],
  Cloud_DevOps: ["AWS (EC2, S3)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"],
  Frontend: ["React.js", "Next.js", "TailwindCSS", "Flutter", "Qt/QML", "HTML/CSS"],
  AI_Tools: ["Scikit-learn", "TensorFlow", "OpenCV", "LLMs", "RAG", "FFMPEG", "Pandas", "NumPy"]
};
