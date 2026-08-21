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
    title: 'My NEPSE Diary',
    description: 'Personal NEPSE trading diary and quantitative analysis suite. Tracks daily trades, entry/exit levels, market sentiments, and historical price movements on the Nepal Stock Exchange.',
    techStack: ['Python', 'Pandas', 'Data Analysis', 'Jupyter'],
    githubAccount: 'DayaSah',
    githubUrl: 'https://github.com/DayaSah/My_Nepse_Diary',
    liveUrl: 'https://github.com/DayaSah/My_Nepse_Diary',
    category: 'data',
    featured: true,
  },
  {
    id: '2',
    title: 'Personal Portfolio & CV Hub',
    description: 'Modern, responsive multi-page portfolio website featuring 3D particle animations, dark/light theme toggle, interactive CV, and GitHub ecosystem showcase.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubAccount: 'jagdishsah126',
    githubUrl: 'https://github.com/jagdishsah126/jagdishsah126',
    liveUrl: 'https://github.com/jagdishsah126/jagdishsah126',
    category: 'web',
    featured: true,
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    description: 'Full-featured online marketplace with product catalogs, shopping cart state management, checkout flows, and administrator dashboards.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubAccount: 'jagdishsah',
    githubUrl: 'https://github.com/jagdishsah',
    category: 'web',
    featured: true,
  },
  {
    id: '4',
    title: 'NEPSE Stock Market Scraper',
    description: 'Automated Python script that extracts daily market depth, floorsheets, company disclosures, and closing indices directly from NEPSE.',
    techStack: ['Python', 'BeautifulSoup', 'PostgreSQL'],
    githubAccount: 'DayaSah',
    githubUrl: 'https://github.com/DayaSah',
    category: 'data',
    featured: false,
  },
  {
    id: '5',
    title: 'Real-Time Task Manager',
    description: 'Kanban-style productivity tool with drag-and-drop boards, priority tags, real-time sync, and category organization.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubAccount: 'jagdish-sah',
    githubUrl: 'https://github.com/jagdish-sah',
    category: 'web',
    featured: false,
  },
  {
    id: '6',
    title: 'AI Chat Interface',
    description: 'Conversational AI interface with streaming responses, markdown code block rendering, and conversational context persistence.',
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    githubAccount: 'jagdishsah',
    githubUrl: 'https://github.com/jagdishsah',
    category: 'tool',
    featured: true,
  },
  {
    id: '7',
    title: 'BCT Engineering Lab Repository',
    description: 'Structured repository containing lab exercises, C/C++ data structure implementations, and academic projects for BCT coursework at TU WRC.',
    techStack: ['C', 'C++', 'Java'],
    githubAccount: 'jagdishsah126',
    githubUrl: 'https://github.com/jagdishsah126',
    category: 'tool',
    featured: false,
  },
  {
    id: '8',
    title: 'Weather & Climate Dashboard',
    description: 'Forecast application displaying 7-day meteorological forecasts, interactive radar maps, and regional climate tracking for Nepali cities.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubAccount: 'jagdishsah',
    githubUrl: 'https://github.com/jagdishsah',
    category: 'web',
    featured: false,
  },
  {
    id: '9',
    title: 'NEPSE Portfolio & Dividend Tracker',
    description: 'Financial dashboard calculating real-time profit/loss, weighted average costs (WACC), dividend yields, and portfolio allocation charts.',
    techStack: ['React', 'Python', 'Flask', 'MySQL'],
    githubAccount: 'DayaSah',
    githubUrl: 'https://github.com/DayaSah',
    category: 'data',
    featured: true,
  },
  {
    id: '10',
    title: 'URL Analytics & Shortener Service',
    description: 'Lightweight URL shortener featuring geographic click analytics, custom branded slugs, and instant QR code generation.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    githubAccount: 'jagdish-sah',
    githubUrl: 'https://github.com/jagdish-sah',
    category: 'tool',
    featured: false,
  },
  {
    id: '11',
    title: 'Developer Blog & Notes Platform',
    description: 'Markdown-powered engineering publication space with categorization, full-text search, and static site generation.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubAccount: 'jagdishsah',
    githubUrl: 'https://github.com/jagdishsah',
    category: 'web',
    featured: false,
  },
  {
    id: '12',
    title: 'Personal Expense & Budget Visualizer',
    description: 'Finance tracking application offering spending breakdowns, recurring subscription alerts, and interactive monthly charts.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
    githubAccount: 'jagdish-sah',
    githubUrl: 'https://github.com/jagdish-sah',
    category: 'web',
    featured: false,
  },
];
