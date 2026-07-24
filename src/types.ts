export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: 'Work' | 'Project' | 'Education';
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'NLP & Chatbots' | 'AutoML & MLOps' | 'Audio & Deep Learning' | 'Production AI';
  subtitle: string;
  techStack: string[];
  description: string;
  keyFeatures: string[];
  impact?: string;
  demoType?: 'counsellor' | 'automl' | 'emotion';
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  details: string[];
  coursework?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  type: 'Hackathon' | 'Certification' | 'Simulation';
  badge: string;
}
