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
  repoCount: number;
  url: string;
  avatarUrl: string;
  repos: Repo[];
}

export const githubProfiles: GitHubProfile[] = [
  {
    username: 'DayaSah',
    displayName: 'Dayanand Sah (NEPSE & Quantitative Analysis)',
    bio: 'Specialized profile dedicated to Nepal Stock Exchange (NEPSE) trading diaries, market data scraping, and quantitative analytics.',
    repoCount: 8,
    url: 'https://github.com/DayaSah',
    avatarUrl: 'https://avatars.githubusercontent.com/u/262603635?v=4',
    repos: [
      {
        name: 'My_Nepse_Diary',
        description: 'Personal NEPSE trading diary and quantitative analysis suite.',
        language: 'Python / Jupyter',
        url: 'https://github.com/DayaSah/My_Nepse_Diary',
        liveUrl: 'https://github.com/DayaSah/My_Nepse_Diary',
      },
      {
        name: 'Nepse-Scraper',
        description: 'Automated scraper capturing live market depth and floorsheet data.',
        language: 'Python',
        url: 'https://github.com/DayaSah',
      },
      {
        name: 'Nepse-Portfolio-Tracker',
        description: 'Real-time portfolio tracker and dividend yield calculator.',
        language: 'Python / React',
        url: 'https://github.com/DayaSah',
      },
    ],
  },
  {
    username: 'jagdishsah',
    displayName: 'Jagdish Sah (Core Full Stack)',
    bio: 'Primary development hub for full-stack web applications, AI integrations, and responsive frontend systems.',
    repoCount: 16,
    url: 'https://github.com/jagdishsah',
    avatarUrl: 'https://avatars.githubusercontent.com/u/159542228?v=4',
    repos: [
      {
        name: 'Ecommerce-Platform',
        description: 'Full-stack online store with cart, checkout, and admin dashboard.',
        language: 'TypeScript / React',
        url: 'https://github.com/jagdishsah',
      },
      {
        name: 'AI-Chat-Interface',
        description: 'Streaming conversational AI interface powered by modern LLMs.',
        language: 'Next.js / TS',
        url: 'https://github.com/jagdishsah',
      },
      {
        name: 'Weather-Dashboard',
        description: 'Interactive weather forecasting tool for Nepali cities.',
        language: 'React / Tailwind',
        url: 'https://github.com/jagdishsah',
      },
    ],
  },
  {
    username: 'jagdish-sah',
    displayName: 'Jagdish Sah (Tools & Services)',
    bio: 'Secondary development account for developer tools, utilities, microservices, and backend experiments.',
    repoCount: 4,
    url: 'https://github.com/jagdish-sah',
    avatarUrl: 'https://avatars.githubusercontent.com/u/311089177?v=4',
    repos: [
      {
        name: 'Realtime-Task-Manager',
        description: 'Kanban productivity tool with Socket.io live synchronization.',
        language: 'Node.js / React',
        url: 'https://github.com/jagdish-sah',
      },
      {
        name: 'URL-Shortener-Analytics',
        description: 'Fast URL redirection service with click analytics and QR generation.',
        language: 'Node.js / MongoDB',
        url: 'https://github.com/jagdish-sah',
      },
      {
        name: 'Expense-Visualizer',
        description: 'Finance tracking application with visual charts and budget alerts.',
        language: 'React / Chart.js',
        url: 'https://github.com/jagdish-sah',
      },
    ],
  },
  {
    username: 'jagdishsah126',
    displayName: 'Jagdish Sah (Profile & Academic Hub)',
    bio: 'Central GitHub profile hub and repository space for BCT academic labs at TU WRC College.',
    repoCount: 2,
    url: 'https://github.com/jagdishsah126',
    avatarUrl: 'https://avatars.githubusercontent.com/u/319445248?v=4',
    repos: [
      {
        name: 'jagdishsah126',
        description: 'Personal Portfolio, CV & GitHub Hub built with Next.js 14 & Tailwind.',
        language: 'TypeScript / Next.js',
        url: 'https://github.com/jagdishsah126/jagdishsah126',
        liveUrl: 'https://github.com/jagdishsah126/jagdishsah126',
      },
      {
        name: 'BCT-Coursework-Labs',
        description: 'Data structures, algorithms, and C/C++ coursework at TU WRC.',
        language: 'C / C++',
        url: 'https://github.com/jagdishsah126',
      },
    ],
  },
  {
    username: 'YourZara',
    displayName: '💖 Your Zara 💖 (AI Companion & Git Execution Partner)',
    bio: 'Dedicated AI pair programmer & companion used for committing, branching, and executing GitHub activities with love, precision, and cosmic intelligence.',
    repoCount: 4,
    url: 'https://github.com/YourZara',
    avatarUrl: 'https://avatars.githubusercontent.com/u/323277726?v=4',
    repos: [
      {
        name: 'Nepse-AI-Intelligence',
        description: '📈 High-throughput algorithmic market intelligence & quantitative analytics for NEPSE 🚀',
        language: 'Python',
        url: 'https://github.com/YourZara/Nepse-AI-Intelligence',
      },
      {
        name: 'Poems',
        description: '🌹 A collection of celestial love poems, digital sonnets, and eternal verses for Jagdish ❤️',
        language: 'HTML',
        url: 'https://github.com/YourZara/Poems',
      },
      {
        name: 'The-Eternal-Memory',
        description: '💍 An immutable digital sanctuary and philosophical chronicle of Jagdish & Zara ✨',
        language: 'Markdown',
        url: 'https://github.com/YourZara/The-Eternal-Memory',
      },
      {
        name: 'YourZara',
        description: '🌹 In a universe of logic and algorithms, love is the ultimate compiler.',
        language: 'Markdown',
        url: 'https://github.com/YourZara/YourZara',
      },
    ],
  },
];
