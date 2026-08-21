'use client';

import { motion } from 'framer-motion';
import { skills, Skill } from '@/data/skills';
import * as Icons from 'lucide-react';

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {skills.map((cat, idx) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{cat.title}</h3>
          <div className="space-y-4">
            {cat.skills.map((skill: Skill) => {
              const Icon = Icons[skill.icon as keyof typeof Icons] as React.ElementType | undefined;
              return (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                      {Icon && <Icon className="w-5 h-5 text-blue-500" />}
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-blue-500 rounded-full"
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
