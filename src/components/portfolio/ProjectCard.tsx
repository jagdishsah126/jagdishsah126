'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubAccount: string;
    liveUrl?: string;
    githubUrl: string;
    featured?: boolean;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-3xl glass-card overflow-hidden flex flex-col justify-between"
    >
      {/* Card Header Background with Abstract Glass Grid */}
      <div className="h-40 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-purple-500/15 relative flex items-center justify-center overflow-hidden border-b border-black/5 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        <div className="p-4 rounded-2xl glass-panel shadow-sm text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
          <FolderGit2 className="w-8 h-8" />
        </div>
        {project.featured && (
          <span className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full bg-blue-600 text-white shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Featured
          </span>
        )}
      </div>
      
      <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2 mb-3">
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-500 transition-colors">
              {project.title}
            </h3>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full glass-badge text-gray-600 dark:text-gray-300 shrink-0">
              @{project.githubAccount}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
        
        <div>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-lg glass-badge text-blue-700 dark:text-blue-300">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-black/5 dark:border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
            >
              <GithubIcon className="w-4 h-4" />
              Source
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
