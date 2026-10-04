export type SkillCategoryName = 'Programming' | 'Web & Frameworks' | 'Databases' | 'Tools & Data';

export interface Skill {
  name: string;
  icon: string;
  usedIn: string[];
}

export interface SkillCategory {
  title: SkillCategoryName;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: 'FileTerminal', usedIn: ['nepse-floorsheet-archive', 'MD_File_Reader', 'Floorsheet_cockroachlabs', 'Fast_API', 'Nepse_Data', 'My_Nepse_Diary', 'Google_Colab'] },
      { name: 'TypeScript', icon: 'FileCode', usedIn: ['jagdishsah126', 'Canteen', 'Nepse-Diary-WebApp', 'Floorshet_Visual_By_retotal'] },
      { name: 'JavaScript', icon: 'FileJson', usedIn: ['Insta_Analyzer_V1', 'Happy-Krishna-Janmashtami', 'Project-Zara', 'HomePage'] },
      { name: 'C', icon: 'Code', usedIn: ['Nepal_Mobile_store'] },
      { name: 'C++', icon: 'Code', usedIn: ['Nepal_Mobile_store', 'OOP'] },
    ]
  },
  {
    title: 'Web & Frameworks',
    skills: [
      { name: 'React', icon: 'Globe', usedIn: ['Nepse-Diary-WebApp'] },
      { name: 'Next.js', icon: 'Globe', usedIn: ['Nepse-Diary-WebApp', 'jagdishsah126'] },
      { name: 'Node.js', icon: 'Server', usedIn: ['Nepse-Diary-WebApp', 'jagdishsah126'] },
      { name: 'Express', icon: 'Cpu', usedIn: [] },
      { name: 'Flask', icon: 'Feather', usedIn: [] },
      { name: 'Tailwind CSS', icon: 'Wind', usedIn: ['Nepse-Diary-WebApp', 'jagdishsah126'] },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: 'Database', usedIn: ['mongodb'] },
      { name: 'Supabase', icon: 'Database', usedIn: ['My_Nepse_Diary'] },
      { name: 'Neon DB', icon: 'Database', usedIn: ['Nepse-Diary-WebApp', 'Neon_Backend'] },
      { name: 'Cockroach DB', icon: 'Database', usedIn: ['Floorsheet_cockroachlabs'] },
      { name: 'PostgreSQL', icon: 'Database', usedIn: ['Nepse-Diary-WebApp'] },
      { name: 'MySQL', icon: 'Database', usedIn: [] },
    ]
  },
  {
    title: 'Tools & Data',
    skills: [
      { name: 'Git', icon: 'GitBranch', usedIn: ['All repositories'] },
      { name: 'GitHub', icon: 'Github', usedIn: ['All 5 accounts'] },
      { name: 'Vercel', icon: 'Cloud', usedIn: ['jagdishsah126', 'Canteen'] },
      { name: 'Pandas', icon: 'Table', usedIn: ['nepse-floorsheet-archive', 'Nepse_Data', 'My_Nepse_Diary'] },
      { name: 'BeautifulSoup', icon: 'Globe', usedIn: ['nepse-floorsheet-archive', 'Floorsheet_cockroachlabs'] },
    ]
  },
];
