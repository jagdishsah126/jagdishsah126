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
    return project.techStack.includes(activeFilter);
  });

  return (
    <main className="min-h-screen py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">A collection of my recent work</p>
      </div>

      <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          No projects found for this category.
        </div>
      )}
    </main>
  );
}
