export type SkillCategoryName = 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Languages';

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
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'Code', proficiency: 90 },
      { name: 'Next.js', icon: 'Globe', proficiency: 85 },
      { name: 'HTML', icon: 'FileCode2', proficiency: 95 },
      { name: 'CSS', icon: 'Palette', proficiency: 90 },
      { name: 'JavaScript', icon: 'FileJson', proficiency: 90 },
      { name: 'TypeScript', icon: 'FileCode', proficiency: 85 },
      { name: 'Tailwind CSS', icon: 'Wind', proficiency: 95 },
      { name: 'Bootstrap', icon: 'Layout', proficiency: 80 },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'Server', proficiency: 80 },
      { name: 'Express', icon: 'Cpu', proficiency: 75 },
      { name: 'Python', icon: 'FileTerminal', proficiency: 85 },
      { name: 'Django', icon: 'Layers', proficiency: 70 },
      { name: 'Flask', icon: 'Feather', proficiency: 75 },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: 'Database', proficiency: 80 },
      { name: 'PostgreSQL', icon: 'Database', proficiency: 75 },
      { name: 'MySQL', icon: 'Database', proficiency: 85 },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'GitBranch', proficiency: 90 },
      { name: 'GitHub', icon: 'Github', proficiency: 95 },
      { name: 'Docker', icon: 'Box', proficiency: 70 },
      { name: 'VS Code', icon: 'Code2', proficiency: 95 },
    ]
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: 'Coffee', proficiency: 75 },
      { name: 'C', icon: 'Terminal', proficiency: 80 },
      { name: 'C++', icon: 'FileCog', proficiency: 75 },
    ]
  }
];
