'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/portfolio/ProjectCard';
import ProjectFilter from '@/components/portfolio/ProjectFilter';
import { projects } from '@/data/projects';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.techStack.some(tech => tech.toLowerCase() === activeFilter.toLowerCase()) ||
           project.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <main className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full glass-badge text-blue-600 dark:text-blue-400 text-xs font-bold mb-4 tracking-wider uppercase">
          Showcase & Applications
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Portfolio</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore full-stack web applications, NEPSE trading utilities, and quantitative data pipelines.
        </p>
      </div>

      <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-24 rounded-3xl glass-panel max-w-md mx-auto my-12 text-gray-500 dark:text-gray-400">
          <p className="font-semibold">No projects found for &ldquo;{activeFilter}&rdquo;.</p>
          <button
            onClick={() => setActiveFilter('All')}
            className="mt-4 px-5 py-2 rounded-full bg-blue-600 text-white text-xs font-bold"
          >
            Show All Projects
          </button>
        </div>
      )}
    </main>
  );
}
