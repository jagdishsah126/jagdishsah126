export type SkillCategoryName = 'Programming' | 'Web & Frameworks' | 'Databases' | 'Tools & Data';

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillCategory {
  title: SkillCategoryName;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: 'FileTerminal', proficiency: 90 },
      { name: 'TypeScript', icon: 'FileCode', proficiency: 80 },
      { name: 'JavaScript', icon: 'FileJson', proficiency: 85 },
      { name: 'C', icon: 'Code', proficiency: 75 },
      { name: 'C++', icon: 'Code', proficiency: 75 },
    ]
  },
  {
    title: 'Web & Frameworks',
    skills: [
      { name: 'React', icon: 'Globe', proficiency: 85 },
      { name: 'Next.js', icon: 'Globe', proficiency: 80 },
      { name: 'Node.js', icon: 'Server', proficiency: 75 },
      { name: 'Express', icon: 'Cpu', proficiency: 70 },
      { name: 'Flask', icon: 'Feather', proficiency: 70 },
      { name: 'Tailwind CSS', icon: 'Wind', proficiency: 90 },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: 'Database', proficiency: 75 },
      { name: 'Supabase', icon: 'Database', proficiency: 70 },
      { name: 'Neon DB', icon: 'Database', proficiency: 70 },
      { name: 'Cockroach DB', icon: 'Database', proficiency: 65 },
      { name: 'PostgreSQL', icon: 'Database', proficiency: 75 },
      { name: 'MySQL', icon: 'Database', proficiency: 80 },
    ]
  },
  {
    title: 'Tools & Data',
    skills: [
      { name: 'Git', icon: 'GitBranch', proficiency: 85 },
      { name: 'GitHub', icon: 'Github', proficiency: 90 },
      { name: 'Vercel', icon: 'Cloud', proficiency: 80 },
      { name: 'Pandas', icon: 'Table', proficiency: 85 },
      { name: 'BeautifulSoup', icon: 'Globe', proficiency: 85 },
    ]
  },
];
