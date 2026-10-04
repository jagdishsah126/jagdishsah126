export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubAccount: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  category: 'web' | 'data' | 'tool';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'nepse-floorsheet-archive',
    description: 'An autonomous data pipeline that collects the complete daily transaction floorsheet data from the Nepal Stock Exchange (NEPSE) and archives it into version-controlled CSV files.',
    techStack: ['Python', 'Automation', 'Data Pipelines', 'Pandas'],
    githubAccount: 'Jagdishsah126',
    githubUrl: 'https://github.com/Jagdishsah126/nepse-floorsheet-archive',
    category: 'data',
    featured: true,
  },
  {
    id: '2',
    title: 'MD_File_Reader',
    description: 'A lightweight and memory-efficient Markdown previewer for Linux. Opens .md files directly from the file manager without a browser, Electron, or internet connection.',
    techStack: ['Python', 'Linux', 'Desktop Integration'],
    githubAccount: 'Jagdishsah126',
    githubUrl: 'https://github.com/Jagdishsah126/MD_File_Reader',
    category: 'tool',
    featured: true,
  },
  {
    id: '3',
    title: 'Canteen',
    description: 'A handcrafted Progressive Web App for managing monthly canteen/bill information for WRC hostellers. Runs primarily client-side without a traditional backend/cloud database.',
    techStack: ['JavaScript', 'PWA', 'Frontend', 'Local Storage'],
    githubAccount: 'Jagdishsah126',
    githubUrl: 'https://github.com/Jagdishsah126/Canteen',
    category: 'web',
    featured: true,
  },
  {
    id: '4',
    title: 'Insta_Analyzer_V1',
    description: 'A privacy-focused Brave/Chrome browser extension for capturing, analyzing, and comparing Instagram follower and following data.',
    techStack: ['JavaScript', 'Browser Extensions', 'Manifest V3', 'Data Analysis'],
    githubAccount: 'Jagdishsah126',
    githubUrl: 'https://github.com/Jagdishsah126/Insta_Analyzer_V1',
    category: 'tool',
    featured: true,
  },
  {
    id: '5',
    title: 'Nepal_Mobile_store',
    description: 'An academic Computer Science project developed during Grade 12 at Prasadi Academy, Lalitpur, Nepal.',
    techStack: ['C', 'C++'],
    githubAccount: 'Jagdishsah',
    githubUrl: 'https://github.com/Jagdishsah/Nepal_Mobile_store',
    category: 'web',
    featured: false,
  },
  {
    id: '6',
    title: 'HomePage',
    description: 'A personal browser homepage containing frequently used websites for quick access, along with a personal NEPSE portfolio/life-summary section using an API.',
    techStack: ['HTML', 'JavaScript', 'API Integration'],
    githubAccount: 'Jagdishsah',
    githubUrl: 'https://github.com/Jagdishsah/HomePage',
    category: 'web',
    featured: false,
  },
  {
    id: '7',
    title: 'Floorsheet_cockroachlabs',
    description: 'An experimental NEPSE data pipeline that collects floorsheet data from ShareHub and stores the data in CockroachDB.',
    techStack: ['Python', 'Web Scraping', 'CockroachDB', 'Data Engineering'],
    githubAccount: 'DayaSah',
    githubUrl: 'https://github.com/DayaSah/Floorsheet_cockroachlabs',
    category: 'data',
    featured: true,
  },
  {
    id: '8',
    title: 'Fast_API',
    description: 'An API project created to support the personal HomePage project and provide backend/API functionality.',
    techStack: ['Python', 'FastAPI', 'Backend', 'APIs'],
    githubAccount: 'DayaSah',
    githubUrl: 'https://github.com/DayaSah/Fast_API',
    category: 'tool',
    featured: false,
  },
];
