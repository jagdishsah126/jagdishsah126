'use client';

import { motion } from 'framer-motion';
import SkillsGrid from '@/components/about/SkillsGrid';
import Timeline from '@/components/about/Timeline';
import { Database, LineChart, Code2, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const interests = [
    { title: '[Data to be Inserted: Interest 1]', icon: LineChart, desc: '[Data to be Inserted: Description of interest 1]' },
    { title: '[Data to be Inserted: Interest 2]', icon: Database, desc: '[Data to be Inserted: Description of interest 2]' },
    { title: '[Data to be Inserted: Interest 3]', icon: Code2, desc: '[Data to be Inserted: Description of interest 3]' },
    { title: '[Data to be Inserted: Interest 4]', icon: Sparkles, desc: '[Data to be Inserted: Description of interest 4]' },
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
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          [Data to be Inserted: Professional Subtitle / Headline]
        </p>
      </motion.div>

      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300 space-y-6 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm"
        >
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-xl text-blue-600 dark:text-blue-400 font-medium">
            &ldquo;[Data to be Inserted: Your Personal Quote or Philosophy]&rdquo;
          </blockquote>

          <p>
            [Data to be Inserted: Introduction paragraph about yourself, who you are, what you are currently studying or working on, and your key technical focus areas.]
          </p>

          <p>
            [Data to be Inserted: Background and educational foundation, key experiences, and how they shaped your problem-solving mindset.]
          </p>

          <p>
            [Data to be Inserted: Technologies, frameworks, and modern tools you specialize in, and your development methodologies.]
          </p>

          <p>
            [Data to be Inserted: Key projects, passions outside work, and personal aspirations for the future.]
          </p>
        </motion.div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Technical Skills</h2>
        <SkillsGrid />
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Academic & Project Journey</h2>
        <Timeline />
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Core Interests</h2>
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
