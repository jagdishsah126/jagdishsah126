export interface Education {
  institution: string;
  degree: string;
  year: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  skills: {
    frontend: string[];
    backend: string[];
    languages: string[];
    databases: string[];
    tools: string[];
  };
  interests: string[];
}

export const cvData: CVData = {
  personalInfo: {
    name: '[Data to be Inserted: Full Name]',
    title: '[Data to be Inserted: Professional Title]',
    location: '[Data to be Inserted: City, Country]',
    email: '[Data to be Inserted: Email Address]',
    phone: '[Data to be Inserted: Phone Number]',
    website: '[Data to be Inserted: Portfolio URL]',
    summary: '[Data to be Inserted: A concise 3-4 sentence professional summary highlighting your core expertise, career objectives, and strengths.]',
  },
  education: [
    {
      institution: '[Data to be Inserted: University / College Name]',
      degree: '[Data to be Inserted: Degree Name]',
      year: '[Data to be Inserted: Year Range]',
      description: '[Data to be Inserted: Brief description of major coursework, academic highlights, or honors.]',
    },
    {
      institution: '[Data to be Inserted: High School / Institution Name]',
      degree: '[Data to be Inserted: Level / Stream]',
      year: '[Data to be Inserted: Year Range]',
      description: '[Data to be Inserted: Key academic subjects and achievements.]',
    },
  ],
  experience: [
    {
      role: '[Data to be Inserted: Job Role / Position]',
      company: '[Data to be Inserted: Company / Project Name]',
      period: '[Data to be Inserted: Duration / Year]',
      description: [
        '[Data to be Inserted: Achievement or responsibility 1]',
        '[Data to be Inserted: Achievement or responsibility 2]',
      ],
    },
  ],
  certifications: [
    {
      name: '[Data to be Inserted: Certification Name]',
      issuer: '[Data to be Inserted: Issuing Body / Platform]',
      year: '[Data to be Inserted: Year Issued]',
    },
  ],
  skills: {
    frontend: ['[Data to be Inserted: Frontend Skill 1]', '[Data to be Inserted: Frontend Skill 2]'],
    backend: ['[Data to be Inserted: Backend Skill 1]', '[Data to be Inserted: Backend Skill 2]'],
    languages: ['[Data to be Inserted: Language 1]', '[Data to be Inserted: Language 2]'],
    databases: ['[Data to be Inserted: Database 1]', '[Data to be Inserted: Database 2]'],
    tools: ['[Data to be Inserted: Tool 1]', '[Data to be Inserted: Tool 2]'],
  },
  interests: [
    '[Data to be Inserted: Interest 1]',
    '[Data to be Inserted: Interest 2]',
    '[Data to be Inserted: Interest 3]',
  ],
};
