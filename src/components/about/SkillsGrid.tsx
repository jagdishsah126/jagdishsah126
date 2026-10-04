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
          <div className="space-y-5">
            {cat.skills.map((skill: Skill) => {
              const Icon = Icons[skill.icon as keyof typeof Icons] as React.ElementType | undefined;
              return (
                <div key={skill.name}>
                  <div className="flex items-center gap-2 mb-1.5">
                    {Icon && <Icon className="w-5 h-5 text-blue-500" />}
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                  {skill.usedIn.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {skill.usedIn.map((proj) => (
                        <span key={proj} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                          {proj}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400 dark:text-gray-500 italic">Not yet featured in a public repo</span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
