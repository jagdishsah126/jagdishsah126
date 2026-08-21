'use client';

import { motion } from 'framer-motion';
import { skills, Skill } from '@/data/skills';
import * as Icons from 'lucide-react';

export default function SkillsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skills.map((cat, idx) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="p-6 sm:p-8 rounded-3xl glass-card relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-black/5 dark:border-white/10">
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              {cat.title}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium px-3 py-1 rounded-full glass-badge">
              {cat.skills.length} skills
            </span>
          </div>

          <div className="space-y-4">
            {cat.skills.map((skill: Skill) => {
              const Icon = Icons[skill.icon as keyof typeof Icons] as React.ElementType | undefined;
              return (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-1.5 text-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        {Icon ? <Icon className="w-4 h-4" /> : <Icons.Code className="w-4 h-4" />}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-sm"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
