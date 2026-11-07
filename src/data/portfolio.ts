export type Project = {
  id: string;
  name: string;
  codename: string;
  category: "data" | "web" | "system" | "extension" | "creative" | "academic";
  categoryLabel: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  status: string;
  metric: { label: string; value: string }[];
};

export const PROFILE = {
  name: "Jagdish Sah",
  formalName: "जगदीश साह",
  role: "Computer Engineering Student · NEPSE Analyst",
  location: "Pokhara / Bishnupur, Siraha, Nepal",
  domain: "swarm.jagdishsah.com.np",
  email: "jagdishsah126@gmail.com",
  github: "https://github.com/jagdishsah126",
  linkedin: "https://www.linkedin.com/in/jagdish-sah6347482ba/",
  instagram: "https://www.instagram.com/jagdish___sah/",
  avatar: "/media/avatar-256.webp",
  portrait: "/media/hero-portrait.webp",
  tagline: "I build data-driven web systems and read the market through its own transaction records.",
  motto:
    "An explorer navigating the frontiers of a boundless universe. In a cosmos with no limits or boundaries, I build with creative intent, observe the patterns, and discover what is possible.",
  availability: "Open to internships & collaborations",
};

export const STATS = [
  { value: "08", label: "Shipped Systems" },
  { value: "05", label: "GitHub Spaces" },
  { value: "3.69", label: "+2 Science GPA" },
  { value: "00", label: "Backlogs" },
];

export const PRINCIPLES = [
  {
    index: "01",
    title: "Observe before building",
    body: "Every system starts as a question. I read the data, the constraints, and the failure modes before writing a line of code.",
  },
  {
    index: "02",
    title: "Offline-first by default",
    body: "Software that works without a server is software that keeps working. Local storage, deterministic logic, zero cloud dependency where it counts.",
  },
  {
    index: "03",
    title: "Human–AI symbiosis",
    body: "I treat AI as a collaborator, not a crutch — a way to expand what one person can architect and verify.",
  },
];

export const FLAGSHIPS: Project[] = [
  {
    id: "nepse-floorsheet",
    name: "NEPSE Floorsheet Archive",
    codename: "Mercury",
    category: "data",
    categoryLabel: "Autonomous Data Pipeline",
    tagline: "The complete daily NEPSE transaction record, archived openly.",
    description:
      "An autonomous, version-controlled pipeline that extracts the full daily floorsheet from the Nepal Stock Exchange and commits it as structured CSV. Built to remove the subscription paywall between Nepali developers and their own market data.",
    techStack: ["Python", "GitHub Actions", "Pandas", "Scraping"],
    githubUrl: "https://github.com/jagdishsah126/nepse-floorsheet-archive",
    liveUrl: "https://github.com/jagdishsah126/nepse-floorsheet-archive/tree/main/Floorsheet",
    status: "Active",
    metric: [
      { label: "Cadence", value: "Daily" },
      { label: "Cost", value: "Open" },
      { label: "Runtime", value: "Cron" },
    ],
  },
  {
    id: "canteen-pwa",
    name: "Canteen — WRC Hostel PWA",
    codename: "Venus",
    category: "web",
    categoryLabel: "Offline-First Product",
    tagline: "Mess billing that settles arguments, not servers.",
    description:
      "A hand-built progressive web app that ended monthly billing disputes in the IOE WRC hostel. Runs entirely client-side with service workers and local persistence, so it works in a dead zone and costs nothing to host.",
    techStack: ["Vanilla JS", "Service Workers", "IndexedDB", "PWA"],
    githubUrl: "https://github.com/jagdishsah126/Canteen",
    liveUrl: "https://canteen-wrc.vercel.app/",
    status: "In daily use",
    metric: [
      { label: "Cloud", value: "None" },
      { label: "Users", value: "Hostel" },
      { label: "Mode", value: "Offline" },
    ],
  },
  {
    id: "md-file-reader",
    name: "MD File Reader",
    codename: "Earth",
    category: "system",
    categoryLabel: "Native Linux Utility",
    tagline: "Markdown preview without the Electron tax.",
    description:
      "A native Linux previewer that opens .md files straight from the file manager in under 25 MB of RAM. Built because opening a browser to read a text file is a design failure.",
    techStack: ["Python", "GTK", "Linux .desktop", "Markdown"],
    githubUrl: "https://github.com/jagdishsah126/MD_File_Reader",
    status: "Completed",
    metric: [
      { label: "Memory", value: "<25MB" },
      { label: "Cold start", value: "Instant" },
      { label: "Platform", value: "Linux" },
    ],
  },
];

export const PROJECTS: Project[] = [
  ...FLAGSHIPS,
  {
    id: "insta-analyzer",
    name: "Insta Analyzer",
    codename: "Mars",
    category: "extension",
    categoryLabel: "Privacy-First Extension",
    tagline: "Follower analytics that never leave your machine.",
    description:
      "A Manifest V3 extension that computes follower and following differentials locally. No credentials, no telemetry, no server round-trip.",
    techStack: ["Manifest V3", "JavaScript", "Local Storage"],
    githubUrl: "https://github.com/jagdishsah126/Insta_Analyzer_V1",
    status: "Completed",
    metric: [
      { label: "Telemetry", value: "Zero" },
      { label: "Compute", value: "Local" },
      { label: "Browser", value: "MV3" },
    ],
  },
  {
    id: "nepse-data",
    name: "NEPSE Data Engine",
    codename: "Jupiter",
    category: "data",
    categoryLabel: "Market Intelligence",
    tagline: "Broker concentration and smart-money screening.",
    description:
      "A private analytics dashboard that reads broker turnover concentration, sector momentum, and accumulation patterns from raw floorsheet data.",
    techStack: ["Python", "Streamlit", "Pandas", "NumPy"],
    githubUrl: "https://github.com/DayaSah/Nepse_Data",
    status: "Active",
    metric: [
      { label: "Scope", value: "NEPSE" },
      { label: "Mode", value: "Private" },
      { label: "Signals", value: "Multi" },
    ],
  },
  {
    id: "nepse-diary",
    name: "NEPSE Diary",
    codename: "Saturn",
    category: "data",
    categoryLabel: "Trading Journal",
    tagline: "Every trade, with the psychology attached.",
    description:
      "A personal ledger recording entry and exit logic, emotional state, commission, tax, and risk-to-reward — designed for Nepal's upcoming intraday regime.",
    techStack: ["Python", "FastAPI", "SQLite", "Analytics"],
    githubUrl: "https://github.com/DayaSah/My_Nepse_Diary",
    status: "Active",
    metric: [
      { label: "Entries", value: "Per trade" },
      { label: "Tax", value: "Tracked" },
      { label: "Scope", value: "Private" },
    ],
  },
  {
    id: "nepal-mobile-store",
    name: "Nepal Mobile Store",
    codename: "Uranus",
    category: "academic",
    categoryLabel: "Academic Genesis",
    tagline: "The Grade 12 project where this started.",
    description:
      "An e-commerce simulation built at Prasadi Academy: catalog browsing, cart calculation, and layout logic — the first proof that a screen could be made to behave.",
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    githubUrl: "https://github.com/Jagdishsah/Nepal_Mobile_store",
    liveUrl: "https://jagdishsah.github.io/Nepal_Mobile_store/",
    status: "Completed",
    metric: [
      { label: "Year", value: "Grade 12" },
      { label: "Stack", value: "Vanilla" },
      { label: "Host", value: "Pages" },
    ],
  },
  {
    id: "merge-conflict-love",
    name: "Ask Her",
    codename: "Neptune",
    category: "creative",
    categoryLabel: "Interactive Experience",
    tagline: "A merge conflict resolved over coffee.",
    description:
      "A coder-humour interactive site with evasive button physics, synthesised Web Audio chimes, and confetti. Proof that engineering can be playful.",
    techStack: ["Vanilla JS", "CSS Animations", "Web Audio API"],
    githubUrl: "https://github.com/jagdishsah126/merge-conflict-with-love",
    liveUrl: "https://askher.jagdishsah.com.np/",
    status: "Live",
    metric: [
      { label: "Deps", value: "Zero" },
      { label: "Audio", value: "Synth" },
      { label: "Physics", value: "Custom" },
    ],
  },
];

export const FILTERS = [
  { id: "all", label: "All Systems", match: [] as string[] },
  { id: "data", label: "Data & Markets", match: ["data"] },
  { id: "web", label: "Web", match: ["web", "academic"] },
  { id: "system", label: "Systems", match: ["system", "extension"] },
  { id: "creative", label: "Creative", match: ["creative"] },
];
