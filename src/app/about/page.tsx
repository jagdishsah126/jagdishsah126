'use client';

import { motion } from 'framer-motion';
import SkillsGrid from '@/components/about/SkillsGrid';
import Timeline from '@/components/about/Timeline';
import { Database, LineChart, Code2, GitBranch } from 'lucide-react';

export default function AboutPage() {
  const interests = [
    { title: 'NEPSE Trading', icon: LineChart, desc: 'Analyzing Nepal Stock Exchange data and trends.' },
    { title: 'Data Analysis', icon: Database, desc: 'Extracting insights from large datasets.' },
    { title: 'AI Development', icon: Code2, desc: 'Building smart applications with AI assistance.' },
    { title: 'Open Source', icon: GitBranch, desc: 'Contributing to community projects.' },
  ];

  return (
    <main className="min-h-screen py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Student, Developer, and Tech Enthusiast</p>
      </motion.div>

      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300 space-y-6"
        >
          <p>
            Hello! I am Jagdish Sah, currently pursuing my Bachelor's in Computer Engineering (BCT) at TU WRC College, Nepal. I am deeply passionate about technology, software development, and exploring how things work under the hood.
          </p>
          <p>
            As a full-stack developer, I enjoy building scalable and responsive web applications using modern technologies like Next.js, React, and TypeScript. I am particularly interested in AI-assisted development, leveraging modern tools to enhance productivity and code quality.
          </p>
          <p>
            Beyond coding, I have a strong interest in NEPSE trading and data analysis. I actively follow the stock market and enjoy applying my technical skills to analyze market trends and make data-driven decisions.
          </p>
        </motion.div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">My Skills</h2>
        <SkillsGrid />
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Education & Journey</h2>
        <Timeline />
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, idx) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:-translate-y-2 transition-transform"
              >
                <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{interest.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
