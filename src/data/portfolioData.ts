import { CertificationItem, EducationItem, ExperienceItem, ProjectItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Rudrakshula Navadeep Sai',
  shortName: 'Navadeep Sai',
  title: 'AI Engineer & ML Developer',
  tagline: 'Specializing in End-to-End ML Pipelines, Conversational NLP Chatbots, and Voice Audio Analytics.',
  email: 'navadeepsairudrakshula@gmail.com',
  phone: '+91 9030484449',
  location: 'Andhra Pradesh, India',
  linkedin: 'https://linkedin.com/in/rns-navadeep',
  linkedinHandle: 'linkedin.com/in/rns-navadeep',
  github: 'https://github.com/RNSNavadeep',
  githubHandle: 'github.com/RNSNavadeep',
  availability: 'Open to AI & Software Engineering Roles',
  summary: `AI Engineer with experience building and deploying scalable ML/DL models and AI-powered bots. At Elevate Labs, developed intelligent conversational agents using modern AI tools and frameworks, driving automation and improved user engagement. Possesses a strong foundation in the full ML pipeline — from data preparation to model deployment — with a passion for building efficient, production-ready AI systems.`,
  cgpa: '8.87 / 10.0',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages & Core',
    description: 'Core programming & data manipulation languages',
    iconName: 'Code2',
    skills: [
      { name: 'Python', level: 'Advanced', highlight: true },
      { name: 'SQL', level: 'Proficient', highlight: true },
      { name: 'Java', level: 'Proficient' },
      { name: 'C', level: 'Proficient' },
      { name: 'JavaScript', level: 'Proficient' },
    ],
  },
  {
    category: 'ML & Deep Learning',
    description: 'Frameworks for model development & training',
    iconName: 'Brain',
    skills: [
      { name: 'PyTorch', level: 'Advanced', highlight: true },
      { name: 'Scikit-learn', level: 'Advanced', highlight: true },
      { name: 'Rasa Framework', level: 'Advanced', highlight: true },
      { name: 'NLTK', level: 'Proficient' },
      { name: 'OpenCV / Speech Features', level: 'Proficient' },
    ],
  },
  {
    category: 'Backend & Databases',
    description: 'Server frameworks & persistent storage engines',
    iconName: 'Server',
    skills: [
      { name: 'Django', level: 'Proficient', highlight: true },
      { name: 'MySQL', level: 'Proficient', highlight: true },
      { name: 'RESTful APIs', level: 'Proficient' },
    ],
  },
  {
    category: 'DevOps & MLOps Tools',
    description: 'Deployment, version control & UI platforms',
    iconName: 'Terminal',
    skills: [
      { name: 'Streamlit', level: 'Advanced', highlight: true },
      { name: 'Git & GitHub Actions', level: 'Proficient', highlight: true },
      { name: 'Joblib & Persistence', level: 'Advanced' },
      { name: 'Pandas & NumPy', level: 'Advanced' },
      { name: 'Matplotlib & Seaborn', level: 'Proficient' },
    ],
  },
  {
    category: 'Engineering Concepts',
    description: 'Theoretical & algorithmic fundamentals',
    iconName: 'Cpu',
    skills: [
      { name: 'OOPS Architecture', level: 'Advanced', highlight: true },
      { name: 'Data Structures & Algorithms', level: 'Advanced', highlight: true },
      { name: 'DBMS', level: 'Proficient' },
      { name: 'OS', level: 'Proficient' },
      { name: 'CN', level: 'Proficient' },
      { name: 'SDLC', level: 'Proficient' },
      { name: 'Conversational Dialogue AI', level: 'Advanced' },
      { name: 'Audio Feature Extraction', level: 'Proficient' },
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'elevate-labs',
    role: 'AI Engineer Intern',
    company: 'Elevate Labs',
    location: 'Remote',
    period: 'Jun 2026 – Present',
    isCurrent: true,
    type: 'Work',
    summary: 'Developing and deploying real-world AI applications using PyTorch, Scikit-learn, Rasa, NLTK, and Streamlit.',
    highlights: [
      'Developed and deployed real-world AI applications using Python, PyTorch, Scikit-learn, Rasa, NLTK, and Streamlit as part of AI engineering projects and internship deliverables.',
      'Built an AI-powered Virtual Career Counsellor chatbot leveraging NLP, intent classification, entity extraction, dialogue management, and recommendation systems to provide personalized career guidance.',
      'Designed and implemented a Human Emotion Detection from Voice system by extracting speech features and training deep learning models to recognize human emotions from audio signals.',
      'Collaborated in an Agile development environment while following end-to-end AI workflows including data preprocessing, model training, evaluation, deployment, and performance optimization.',
    ],
    skills: ['PyTorch', 'Rasa NLP', 'Scikit-learn', 'Streamlit', 'Agile Workflows', 'Voice ML'],
  },
];

export const PROJECTS_ITEMS: ProjectItem[] = [
  {
    id: 'career-counsellor',
    title: 'AI Virtual Career Counsellor',
    category: 'NLP & Chatbots',
    subtitle: 'End-to-End Conversational AI Pipeline with Personalized Recommendation Engine',
    techStack: ['Python', 'Rasa', 'NLTK', 'Streamlit', 'RapidFuzz', 'PySpellChecker', 'Scikit-learn', 'YAML'],
    description: 'An AI-powered career guidance chatbot using Rasa, NLTK, and Streamlit to deliver tailored career path recommendations based on user interests, technical skills, and educational background.',
    keyFeatures: [
      'Engineered complete conversational AI pipeline incorporating NLP preprocessing, intent classification, entity extraction, and dialogue management.',
      'Designed a modular recommendation engine backed by a structured career knowledge base for dynamic roadmaps and learning suggestions.',
      'Improved chatbot robustness using spell correction, synonym mapping, and fuzzy string matching.',
      'Integrated a responsive Streamlit frontend for a deployment-ready, end-to-end solution.',
    ],
    impact: 'Provides instant, personalized career roadmaps and course recommendations through natural language dialogue.',
    demoType: 'counsellor',
    githubUrl: 'https://github.com/RNSNavadeep',
  },
  {
    id: 'automl-platform',
    title: 'AutoML Platform',
    category: 'AutoML & MLOps',
    subtitle: 'Automated ML Experimentation & Model Deployment Suite',
    techStack: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Joblib'],
    description: 'An end-to-end AutoML platform that automates data preprocessing, feature engineering, model selection, hyperparameter tuning, and performance evaluation for classification and regression tasks.',
    keyFeatures: [
      'Built interactive Streamlit dashboard allowing users to upload datasets and perform automated Exploratory Data Analysis (EDA).',
      'Automated preprocessing pipeline including missing value imputation, categorical encoding, scaling, and train-test splitting.',
      'Multi-model benchmarking with evaluation via Accuracy, Precision, Recall, F1-Score, MAE, MSE, RMSE, and R².',
      'Integrated model persistence using Joblib to allow instant model export for production use.',
    ],
    impact: 'Democratizes machine learning experimentation for users with minimal coding experience.',
    demoType: 'automl',
    githubUrl: 'https://github.com/RNSNavadeep',
  },
  {
    id: 'emotion-detection',
    title: 'Human Emotion Detection from Voice',
    category: 'Audio & Deep Learning',
    subtitle: 'Speech Feature Extraction & Audio Signal Neural Classifier',
    techStack: ['Python', 'PyTorch', 'Audio ML', 'MFCC Extraction', 'Scikit-learn', 'Streamlit'],
    description: 'A deep learning system that analyzes acoustic features from audio voice signals (MFCCs, Chroma, Mel-spectrograms) to recognize and classify human emotional states.',
    keyFeatures: [
      'Extracted high-dimensional speech features from raw audio signals for neural model input.',
      'Trained deep neural network architectures achieving high classification accuracy across multi-class emotion datasets.',
      'Built real-time audio analysis feedback pipeline with confidence probability distribution.',
    ],
    impact: 'Enhances call center analytics and mental wellness monitoring through automated voice emotion tracking.',
    demoType: 'emotion',
    githubUrl: 'https://github.com/RNSNavadeep',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Information Technology',
    institution: 'Vishnu Institute of Technology',
    location: 'Bhimavaram, Andhra Pradesh',
    period: 'Aug 2024 – Present',
    score: 'Current CGPA: 8.87 / 10.0',
    details: [
      'Maintaining strong academic standing with 8.87 CGPA.',
      'Actively engaging in hands-on AI projects, hackathons, and technical workshops.',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning',
      'Artificial Intelligence',
    ],
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Aditya Junior College',
    location: 'Mandapeta, Andhra Pradesh',
    period: 'Jun 2022 – Apr 2024',
    details: [
      'Completed Higher Secondary Education with focus on Mathematics, Physics, and Chemistry (MPC).',
      'Built strong analytical and mathematical foundation for computer science engineering.',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Winner - HackOdessy IoT Hackathon 2023',
    issuer: 'HackOdessy',
    type: 'Hackathon',
    badge: '🏆 1st Place',
  },
  {
    title: 'Deloitte Australia – Data Analytics Job Simulation',
    issuer: 'Forage',
    type: 'Simulation',
    badge: 'Data Analytics',
  },
  {
    title: 'Google Analytics Certification',
    issuer: 'Google',
    type: 'Certification',
    badge: 'Google Certified',
  },
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys Springboard',
    type: 'Certification',
    badge: 'AI Specialist',
  },
];
