'use client';

import { motion } from 'framer-motion';
import SkillsGrid from '@/components/about/SkillsGrid';
import Timeline from '@/components/about/Timeline';
import { Database, LineChart, Code2, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const interests = [
    { title: 'NEPSE Trading', icon: LineChart, desc: 'Analyzing Nepal Stock Exchange trends, market depth, and quantitative metrics.' },
    { title: 'Data Scraping & Analysis', icon: Database, desc: 'Automating pipelines with Python & Pandas to extract actionable market intelligence.' },
    { title: 'AI-Assisted Engineering', icon: Code2, desc: 'Accelerating modern full-stack development with state-of-the-art AI pair programming.' },
    { title: 'Cosmic Exploration', icon: Sparkles, desc: 'Exploring science, astronomy, and technology with an infinite mindset.' },
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
          Full Stack Developer with AI Assistance & BCT Engineering Student at TU WRC College, Nepal
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
            &ldquo;I am a traveller in this vast cosmos, travelling and exploring everything this universe can provide.&rdquo;
          </blockquote>

          <p>
            Hello! I am <strong>Jagdish Sah</strong>, currently pursuing my <strong>Bachelor in Computer Engineering (BCT)</strong> in the 2nd Semester at <strong>Tribhuvan University, Western Regional Campus (WRC)</strong> in Pokhara, Nepal.
          </p>

          <p>
            My academic journey started at <strong>Sagarmatha Higher Secondary School</strong> in Mirchaiya-6, Siraha, followed by higher secondary (+2 Science) studies at <strong>Prasadi Academy</strong>, Lalitpur. These experiences cultivated my disciplined problem-solving mindset and deep fascination with computer systems.
          </p>

          <p>
            As a developer, I specialize in crafting clean, scalable web applications with <strong>Next.js 14</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>Python</strong>. By adopting AI-assisted workflows, I bridge the gap between complex ideas and fast, robust code execution.
          </p>

          <p>
            Beyond traditional web development, I am an active participant in Nepal&apos;s financial markets. Through projects like <strong><a href="https://github.com/DayaSah/My_Nepse_Diary" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">My NEPSE Diary</a></strong>, I combine Python scripting, web scraping, and data visualization to log trades and dissect market movements on the Nepal Stock Exchange.
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
