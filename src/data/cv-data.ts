export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  domain: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  summary: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  interests: string[];
}

export const cvData: CVData = {
  personalInfo: {
    name: 'Jagdish Sah',
    title: 'Full Stack Developer with AI Assistance | NEPSE Analyst',
    location: 'Siraha / Pokhara, Nepal',
    email: 'jagdishsah126@gmail.com',
    phone: '+977 9702406668',
    domain: 'https://jagdishsah.com.np',
    facebook: 'https://www.facebook.com/jagdish.sah.king',
    instagram: 'https://www.instagram.com/jagdish.sah.daya/',
    linkedin: 'https://www.linkedin.com/in/jagdish-sah6347482ba/',
    summary: 'A passionate Computer Engineering (BCT) 2nd Semester student at TU WRC College with strong expertise in full-stack web development, AI-assisted engineering workflows, and financial data analysis. Active in NEPSE market research and algorithmic trade tracking. In my own words: "I am a traveller in this vast cosmos, travelling and exploring everything this universe can provide."',
  },
  education: [
    {
      id: '1',
      institution: 'Tribhuvan University, Western Regional Campus (WRC)',
      degree: 'Bachelor in Computer Engineering (BCT) - 2nd Semester',
      year: '2024 - Present',
      description: 'Focusing on core Computer Science, Algorithms, Data Structures, OOP (C/C++), and modern web engineering.',
    },
    {
      id: '2',
      institution: 'Prasadi Academy, Lalitpur',
      degree: '+2 Science (Higher Secondary)',
      year: '2022 - 2024',
      description: 'Completed higher secondary education in Science stream with deep focus on Physics, Mathematics, and Computer Science.',
    },
    {
      id: '3',
      institution: 'Sagarmatha Higher Secondary School, Mirchaiya-6, Siraha',
      degree: 'Secondary Education (SEE / Class 10)',
      year: '2022',
      description: 'Graduated secondary school with academic distinction and early passion for computer technology.',
    }
  ],
  experience: [
    {
      id: '1',
      role: 'Full Stack Developer & Quantitative Analyst',
      company: 'Personal Projects & Independent Research',
      duration: '2023 - Present',
      description: 'Built multiple production-grade web applications, NEPSE trading utilities, and data pipelines leveraging AI tooling for maximum efficiency.',
      achievements: [
        'Developed "My NEPSE Diary" (https://github.com/DayaSah/My_Nepse_Diary) for logging trades, technical analysis, and tracking Nepal Stock Exchange performance.',
        'Engineered an interactive multi-page Next.js 14 Portfolio & CV hub with 3D particle physics and theme switching.',
        'Created Python-based web scrapers and data tools for automated financial analysis.',
      ],
    },
  ],
  certifications: [
    {
      id: '1',
      name: 'Full Stack Web Development & AI Tools Proficiency',
      issuer: 'Self-Directed & Project Portfolio',
      year: '2023 - 2024',
    }
  ],
  interests: [
    'NEPSE Trading & Market Analysis',
    'Data Scraping & Machine Learning',
    'AI-Assisted Software Development',
    'Astrophysics & Cosmic Exploration',
    'Open Source Software',
  ],
};
