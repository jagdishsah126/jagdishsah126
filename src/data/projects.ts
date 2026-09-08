export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubAccount: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: '[Data to be Inserted: Project Title 1]',
    description: '[Data to be Inserted: Detailed description of project 1, what problem it solves, and how it was implemented.]',
    techStack: ['[Tech 1]', '[Tech 2]', '[Tech 3]'],
    githubAccount: '[Account]',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'web',
    featured: true,
  },
  {
    id: 'project-2',
    title: '[Data to be Inserted: Project Title 2]',
    description: '[Data to be Inserted: Detailed description of project 2.]',
    techStack: ['[Tech 1]', '[Tech 2]'],
    githubAccount: '[Account]',
    githubUrl: 'https://github.com',
    category: 'tool',
    featured: false,
  },
];
