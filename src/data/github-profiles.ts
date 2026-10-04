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
        description: 'Autonomous pipeline collecting daily NEPSE floorsheet data into version-controlled CSVs.',
        language: 'Python',
        url: 'https://github.com/Jagdishsah126/nepse-floorsheet-archive',
      },
      {
        name: 'MD_File_Reader',
        description: 'Lightweight, memory-efficient Markdown previewer for Linux.',
        language: 'Python',
        url: 'https://github.com/Jagdishsah126/MD_File_Reader',
      },
      {
        name: 'Canteen',
        description: 'Client-side PWA for monthly canteen/bill management for WRC hostellers.',
        language: 'JavaScript',
        url: 'https://github.com/Jagdishsah126/Canteen',
      },
      {
        name: 'Insta_Analyzer_V1',
        description: 'Privacy-focused browser extension for Instagram follower/following analysis.',
        language: 'JavaScript',
        url: 'https://github.com/Jagdishsah126/Insta_Analyzer_V1',
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
        description: 'Academic Computer Science project from Grade 12 at Prasadi Academy, Lalitpur.',
        language: 'C / C++',
        url: 'https://github.com/Jagdishsah/Nepal_Mobile_store',
      },
      {
        name: 'HomePage',
        description: 'Personal browser homepage with NEPSE portfolio/life-summary via API.',
        language: 'HTML / JavaScript',
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
        description: 'Experimental NEPSE floorsheet pipeline storing data in CockroachDB.',
        language: 'Python',
        url: 'https://github.com/DayaSah/Floorsheet_cockroachlabs',
      },
      {
        name: 'Fast_API',
        description: 'API backend supporting the personal HomePage project.',
        language: 'Python / FastAPI',
        url: 'https://github.com/DayaSah/Fast_API',
      },
    ],
  },
  {
    username: 'Jagdish-sah',
    displayName: 'Jagdish-sah — BCT / College',
    bio: 'Academic GitHub account for BCT college work, assignments, coursework, experiments, and engineering development.',
    url: 'https://github.com/Jagdish-sah',
    avatarUrl: 'https://avatars.githubusercontent.com/u/311089177?v=4',
    repos: [],
  },
  {
    username: 'YourZara',
    displayName: 'YourZara — Personal AI / GitHub Agent',
    bio: 'Personal account for AI-agent-assisted development and GitHub automation: committing, project management, and AI-assisted workflows.',
    url: 'https://github.com/YourZara',
    avatarUrl: 'https://avatars.githubusercontent.com/u/323277726?v=4',
    repos: [],
  },
];
