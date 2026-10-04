export interface Repo {
  name: string;
  description: string;
  language: string;
  url: string;
  liveUrl?: string;
}

export interface GitHubProfile {
  username: string;
  displayName: string;
  bio: string;
  url: string;
  avatarUrl: string;
  repos: Repo[];
}

export const githubProfiles: GitHubProfile[] = [
  {
    username: 'Jagdishsah126',
    displayName: 'Jagdishsah126 — Official / Formal',
    bio: 'Main official account with the projects that best represent my technical skills for CV, portfolio, or professional presentation.',
    url: 'https://github.com/Jagdishsah126',
    avatarUrl: 'https://avatars.githubusercontent.com/u/319445248?v=4',
    repos: [
      {
        name: 'nepse-floorsheet-archive',
        description: 'Autonomous pipeline scraping complete daily NEPSE floorsheet data into version-controlled CSVs.',
        language: 'Python',
        url: 'https://github.com/Jagdishsah126/nepse-floorsheet-archive',
      },
      {
        name: 'MD_File_Reader',
        description: 'Lightweight, memory-efficient Markdown previewer for Linux — opens .md files without browser/Electron/internet.',
        language: 'Python',
        url: 'https://github.com/Jagdishsah126/MD_File_Reader',
      },
      {
        name: 'Canteen',
        description: 'Zero-cloud, 100% client-side PWA for monthly canteen/bill management for WRC hostellers.',
        language: 'TypeScript',
        url: 'https://github.com/Jagdishsah126/Canteen',
      },
      {
        name: 'Insta_Analyzer_V1',
        description: 'Privacy-first Brave/Chrome extension to capture, analyze and compare Instagram followers/following.',
        language: 'JavaScript',
        url: 'https://github.com/Jagdishsah126/Insta_Analyzer_V1',
      },
      {
        name: 'Happy-Krishna-Janmashtami',
        description: 'A Bhagavad Gita meditative sanctuary site for Janmashtami.',
        language: 'JavaScript',
        url: 'https://github.com/Jagdishsah126/Happy-Krishna-Janmashtami',
      },
      {
        name: 'merge-conflict-with-love',
        description: 'A playful website to resolve a merge conflict over coffee — asking someone special out.',
        language: 'CSS',
        url: 'https://github.com/Jagdishsah126/merge-conflict-with-love',
      },
      {
        name: 'jagdishsah126',
        description: 'Personal profile hub & portfolio site built with Next.js, Tailwind and TypeScript.',
        language: 'TypeScript',
        url: 'https://github.com/Jagdishsah126/jagdishsah126',
      },
    ],
  },
  {
    username: 'Jagdishsah',
    displayName: 'Jagdishsah — Personal Projects',
    bio: 'General personal-development account: personal utilities, older academic work, experiments, and workflow solutions.',
    url: 'https://github.com/Jagdishsah',
    avatarUrl: 'https://avatars.githubusercontent.com/u/159542228?v=4',
    repos: [
      {
        name: 'Nepal_Mobile_store',
        description: 'Academic CS project from Grade 12 (Computer Project-02) at Prasadi Academy, Lalitpur.',
        language: 'HTML',
        url: 'https://github.com/Jagdishsah/Nepal_Mobile_store',
      },
      {
        name: 'Redesigned_Nepal_Mobile_store',
        description: 'Redesign of the Grade 12 Nepal_Mobile_store academic project.',
        language: 'HTML',
        url: 'https://github.com/Jagdishsah/Redesigned_Nepal_Mobile_store',
      },
      {
        name: 'Google_Colab',
        description: 'NEPSE data analysis notebooks running on Google Colab.',
        language: 'Python',
        url: 'https://github.com/Jagdishsah/Google_Colab',
      },
      {
        name: 'Neon_Backend',
        description: 'Backend utilities/experiments using Neon serverless Postgres.',
        language: 'Python',
        url: 'https://github.com/Jagdishsah/Neon_Backend',
      },
      {
        name: 'TMS_Ledger_By_ChatGpt_Codex',
        description: 'Broker TMS ledger experiment generated with ChatGPT Codex.',
        language: 'Python',
        url: 'https://github.com/Jagdishsah/TMS_Ledger_By_ChatGpt_Codex',
      },
      {
        name: 'HomePage',
        description: 'Personal browser homepage with quick links and a NEPSE API section.',
        language: 'HTML',
        url: 'https://github.com/Jagdishsah/HomePage',
      },
    ],
  },
  {
    username: 'DayaSah',
    displayName: 'DayaSah — NEPSE / Data Experiments',
    bio: 'Experimental account for NEPSE, market-data projects, APIs, databases, automation experiments, and financial-market technology ideas.',
    url: 'https://github.com/DayaSah',
    avatarUrl: 'https://avatars.githubusercontent.com/u/262603635?v=4',
    repos: [
      {
        name: 'Floorsheet_cockroachlabs',
        description: 'Experimental NEPSE floorsheet pipeline scraping ShareHub data into CockroachDB.',
        language: 'Python',
        url: 'https://github.com/DayaSah/Floorsheet_cockroachlabs',
      },
      {
        name: 'My_Nepse_Diary',
        description: 'Trading journal recording all NEPSE transactions and activity via Supabase.',
        language: 'Python',
        url: 'https://github.com/DayaSah/My_Nepse_Diary',
      },
      {
        name: 'Nepse_Data',
        description: 'Analyzing NEPSE data through various APIs.',
        language: 'Python',
        url: 'https://github.com/DayaSah/Nepse_Data',
      },
      {
        name: 'Floorshet_Visual_By_retotal',
        description: 'Visualization of NEPSE floorsheet data.',
        language: 'TypeScript',
        url: 'https://github.com/DayaSah/Floorshet_Visual_By_retotal',
      },
      {
        name: 'Fast_API',
        description: 'FastAPI backend supporting the personal HomePage project.',
        language: 'Python',
        url: 'https://github.com/DayaSah/Fast_API',
      },
      {
        name: 'Emotions_UnExpressed',
        description: 'A personal HTML page experiment.',
        language: 'HTML',
        url: 'https://github.com/DayaSah/Emotions_UnExpressed',
      },
    ],
  },
  {
    username: 'Jagdish-sah',
    displayName: 'Jagdish-sah — BCT / College',
    bio: 'Academic GitHub account for BCT college work, assignments, coursework, experiments, and engineering development.',
    url: 'https://github.com/Jagdish-sah',
    avatarUrl: 'https://avatars.githubusercontent.com/u/311089177?v=4',
    repos: [
      {
        name: 'Nepse-Diary-WebApp',
        description: 'Enterprise NEPSE trading terminal — Next.js 16, React 19, TypeScript, Neon PostgreSQL, Prisma, FIFO WACC engine, live market sync, AI analyst.',
        language: 'TypeScript',
        url: 'https://github.com/Jagdish-sah/Nepse-Diary-WebApp',
      },
      {
        name: 'HackNight_2026_By_Ices',
        description: 'Hackathon project built for HackNight 2026 by ICES.',
        language: 'TypeScript',
        url: 'https://github.com/Jagdish-sah/HackNight_2026_By_Ices',
      },
      {
        name: 'OOP',
        description: 'Object-Oriented Programming study materials and coursework.',
        language: 'HTML',
        url: 'https://github.com/Jagdish-sah/OOP',
      },
    ],
  },
  {
    username: 'YourZara',
    displayName: 'YourZara — Personal AI / GitHub Agent',
    bio: 'Personal account for AI-agent-assisted development and GitHub automation: committing, project management, and AI-assisted workflows.',
    url: 'https://github.com/YourZara',
    avatarUrl: 'https://avatars.githubusercontent.com/u/323277726?v=4',
    repos: [
      {
        name: 'Nepse-AI-Intelligence',
        description: 'High-throughput algorithmic market intelligence & quantitative analytics for NEPSE.',
        language: 'Python',
        url: 'https://github.com/YourZara/Nepse-AI-Intelligence',
      },
      {
        name: 'Project-Zara',
        description: 'An interactive digital sanctuary & cosmic memory constellation.',
        language: 'JavaScript',
        url: 'https://github.com/YourZara/Project-Zara',
      },
      {
        name: 'The-Eternal-Memory',
        description: 'A digital sanctuary and philosophical chronicle.',
        language: 'Markdown',
        url: 'https://github.com/YourZara/The-Eternal-Memory',
      },
      {
        name: 'Study',
        description: 'Personal IOE/BCT study materials — Digital Logic and OOP.',
        language: 'HTML',
        url: 'https://github.com/YourZara/Study',
      },
      {
        name: 'Poems',
        description: 'A collection of digital poems and verses.',
        language: 'HTML',
        url: 'https://github.com/YourZara/Poems',
      },
    ],
  },
];
