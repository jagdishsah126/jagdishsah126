export type TabType = 
  | "home" 
  | "journey" 
  | "projects" 
  | "nepse" 
  | "spaces" 
  | "cv" 
  | "contact";

export interface ProjectPlanet {
  id: string;
  name: string;
  codename: string;
  solarIndex: number; // 1 to 8 matching Solar System
  planetType: string;
  orbitRadius: number; // orbital distance in px
  orbitSpeed: number; // orbital velocity factor
  size: number; // planet radius in px
  color: string; // primary color
  glowColor: string; // box shadow glow
  category: "data" | "web" | "system" | "extension" | "academic" | "creative";
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "Active" | "Completed" | "Experiment" | "Archived";
  isFlagship?: boolean;
}

export interface JourneyMilestone {
  period: string;
  location: string;
  title: string;
  institution?: string;
  score?: string;
  badge: string;
  description: string;
  learnings: string[];
}

export interface GitHubSpace {
  id: string;
  account: string;
  role: string;
  focus: string;
  url: string;
  badge: string;
  color: string;
  notableRepos: string[];
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  status?: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; featured?: boolean }[];
}
