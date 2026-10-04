export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  domain: string;
  github: string;
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

export interface Interest {
  title: string;
  description: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: { category: string; items: string[] }[];
  projects: { name: string; description: string; tech: string; url: string }[];
  interests: string[];
  aiUsage: string[];
  careerDirection: string[];
}

export const cvData: CVData = {
  personalInfo: {
    name: 'Jagdish Sah',
    title: 'Computer Engineering Student | Full-Stack Web Developer | AI-Assisted Development',
    location: 'Current: Pokhara, Nepal | Home: Siraha, Nepal',
    email: 'jagdishsah126@gmail.com',
    phone: '+977 9702406668',
    domain: 'https://jagdishsah.com.np',
    github: 'https://github.com/Jagdishsah126',
    summary: 'Computer Engineering (BCT) student at Tribhuvan University, WRC, Pokhara. Combining software development, AI-assisted development, data analysis, and NEPSE/financial-market interests. Passionate about automation, scraping, and building useful tools. Strongest at Python and data analysis via Python.',
  },
  education: [
    {
      id: '1',
      institution: 'Tribhuvan University, Western Regional Campus (WRC), Pokhara',
      degree: 'Bachelor in Computer Engineering (BCT) — 3rd Semester',
      year: '2025 – Present',
      description: 'Currently in 3rd semester. No backlogs in any subject. Expected graduation end of 2029. Strong in Python, C++, digital logic and computer-related subjects.',
    },
    {
      id: '2',
      institution: 'Prasadi Academy, Lalitpur',
      degree: '+2 Science (Higher Secondary)',
      year: '2022 – 2024',
      description: 'Higher secondary education in the Science stream.',
    },
    {
      id: '3',
      institution: 'Sagarmatha Higher Secondary School, Mirchaiya-6, Siraha',
      degree: 'SEE / Secondary Education',
      year: 'Completed 2022',
      description: 'Secondary education completed with early interest in computer technology.',
    },
  ],
  experience: [
    {
      id: '1',
      role: 'Software Developer & NEPSE Data Analyst',
      company: 'Personal Projects & Academic Work',
      duration: '2024 – Present',
      description: 'Building practical projects across web, data pipelines, and automation while studying BCT. Part-time swing/short-term NEPSE trader.',
      achievements: [
        'Created Canteen PWA for monthly billing management at WRC.',
        'Built MD_File_Reader for lightweight Linux Markdown previewing.',
        'Developed Insta_Analyzer_V1 for privacy-focused Instagram analytics.',
        'Built NEPSE-related websites to analyze market data without premium services.',
      ],
    },
  ],
  skills: [
    { category: 'Programming', items: ['Python', 'TypeScript', 'JavaScript', 'C', 'C++'] },
    { category: 'Web / Software', items: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'Tailwind CSS'] },
    { category: 'Databases', items: ['MongoDB', 'Supabase', 'Neon DB', 'Cockroach DB', 'PostgreSQL', 'MySQL'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'Pandas', 'BeautifulSoup'] },
  ],
  projects: [
    { name: 'nepse-floorsheet-archive', description: 'Autonomous pipeline archiving daily NEPSE floorsheet data into version-controlled CSVs.', tech: 'Python, Pandas, Automation', url: 'https://github.com/Jagdishsah126/nepse-floorsheet-archive' },
    { name: 'MD_File_Reader', description: 'Lightweight, memory-efficient Markdown previewer for Linux.', tech: 'Python, Linux', url: 'https://github.com/Jagdishsah126/MD_File_Reader' },
    { name: 'Canteen', description: 'Client-side PWA for monthly canteen/bill management at WRC.', tech: 'JavaScript, PWA', url: 'https://github.com/Jagdishsah126/Canteen' },
    { name: 'Insta_Analyzer_V1', description: 'Privacy-focused browser extension for Instagram follower/following analytics.', tech: 'JavaScript, Manifest V3', url: 'https://github.com/Jagdishsah126/Insta_Analyzer_V1' },
    { name: 'Floorsheet_cockroachlabs', description: 'Experimental NEPSE floorsheet pipeline storing data in CockroachDB.', tech: 'Python, CockroachDB', url: 'https://github.com/DayaSah/Floorsheet_cockroachlabs' },
    { name: 'Fast_API', description: 'API backend supporting the HomePage project.', tech: 'Python, FastAPI', url: 'https://github.com/DayaSah/Fast_API' },
    { name: 'HomePage', description: 'Personal browser homepage with NEPSE portfolio/life-summary API section.', tech: 'HTML, JavaScript', url: 'https://github.com/Jagdishsah/HomePage' },
    { name: 'Nepal_Mobile_store', description: 'Academic CS project from Grade 12 at Prasadi Academy.', tech: 'C / C++', url: 'https://github.com/Jagdishsah/Nepal_Mobile_store' },
  ],
  interests: [
    'NEPSE / Stock Market',
    'Trading',
    'Data Analysis',
    'Artificial Intelligence',
    'Software Development',
    'Web Applications',
    'Automation',
    'Technology',
    'Science / Cosmos / Exploration',
  ],
  aiUsage: [
    'Gemini (For Study)',
    'ChatGPT (Creative Related Things, Planning Projects, Brainstorm)',
    'Antigravity CLI (Main Agentic AI)',
    'Cursor CLI (2nd agentic AI when AGY tokens expire)',
    'Claude.ai web (Experiments with standalone websites/scripts)',
  ],
  careerDirection: [
    'Part-time swing/short-term NEPSE Trader',
    'Remote job that can be done from home',
  ],
};
