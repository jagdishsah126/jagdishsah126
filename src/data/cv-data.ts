export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
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
    title: 'Full Stack Developer',
    location: 'Nepal',
    email: 'contact@example.com',
    phone: '+977-9800000000',
    summary: 'I am a passionate BCT (Bachelor in Computer Engineering) 2nd Semester student at TU WRC College with a keen interest in full-stack web development. Combining my enthusiasm for coding with AI assistance, I build efficient and modern applications. I am also deeply interested in NEPSE trading and data analysis, constantly looking for ways to merge technology with financial insights.',
  },
  education: [
    {
      id: '1',
      institution: 'TU WRC College',
      degree: 'Bachelor in Computer Engineering (BCT)',
      year: '2024 - Present',
      description: 'Currently in 2nd semester, focusing on core computer engineering subjects and practical programming skills. Active in tech clubs and development activities.',
    }
  ],
  experience: [
    {
      id: '1',
      role: 'Full Stack Developer (Personal Projects)',
      company: 'Self-Employed',
      duration: '2023 - Present',
      description: 'Developed and maintained various web applications and tools, integrating AI for enhanced productivity and robust code quality.',
      achievements: [
        'Built a comprehensive NEPSE Portfolio Tracker using Next.js and Python.',
        'Developed an AI-assisted code generation CLI tool.',
        'Created multiple modern UI/UX web projects utilizing Tailwind CSS and Framer Motion.',
      ],
    },
    {
      id: '2',
      role: 'Data Analysis Enthusiast',
      company: 'Independent Research',
      duration: '2023 - Present',
      description: 'Conducted independent research and data analysis on NEPSE market trends.',
      achievements: [
        'Collected and cleaned large datasets of historical stock market data.',
        'Developed scripts using Python and Pandas for identifying trading patterns.',
        'Built predictive models for short-term price forecasting.',
      ],
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'Full Stack Web Development Certification',
      issuer: 'Placeholder Institution',
      year: '2023',
    }
  ],
  interests: [
    'NEPSE Trading',
    'Data Analysis',
    'AI-Assisted Development',
    'Open Source',
  ],
};
