'use client';

import { motion } from 'framer-motion';
import SkillsGrid from '@/components/about/SkillsGrid';
import Timeline from '@/components/about/Timeline';
import { Database, LineChart, Code2, Sparkles, User, Award, Rocket } from 'lucide-react';

export default function AboutPage() {
  const interests = [
    { title: 'NEPSE Trading', icon: LineChart, desc: 'Analyzing Nepal Stock Exchange trends, market depth, and quantitative metrics.' },
    { title: 'Data Scraping & Analysis', icon: Database, desc: 'Automating pipelines with Python & Pandas to extract actionable market intelligence.' },
    { title: 'AI-Assisted Engineering', icon: Code2, desc: 'Accelerating modern full-stack development with state-of-the-art AI pair programming.' },
    { title: 'Cosmic Exploration', icon: Sparkles, desc: 'Exploring science, astronomy, and technology with an infinite mindset.' },
  ];

  return (
    <main className="min-h-screen py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <span className="inline-block px-4 py-1.5 rounded-full glass-badge text-blue-600 dark:text-blue-400 text-xs font-bold mb-4 tracking-wider uppercase">
          Profile & Philosophy
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">About Me</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Full Stack Developer with AI Assistance & BCT Engineering Student at TU WRC College, Nepal
        </p>
      </motion.div>

      {/* Main Bio Card */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose dark:prose-invert max-w-none text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-6 glass-panel p-8 sm:p-12 rounded-3xl border border-white/60 dark:border-white/10 shadow-xl"
        >
          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20">
            <blockquote className="border-none p-0 m-0 italic text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-semibold leading-relaxed">
              ✨ &ldquo;I am a traveller in this vast cosmos, travelling and exploring everything this universe can provide.&rdquo;
            </blockquote>
          </div>

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
            Beyond traditional web development, I am an active participant in Nepal&apos;s financial markets. Through projects like <strong><a href="https://github.com/DayaSah/My_Nepse_Diary" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">My NEPSE Diary</a></strong>, I combine Python scripting, web scraping, and data visualization to log trades and dissect market movements on the Nepal Stock Exchange.
          </p>
        </motion.div>
      </section>

      {/* Skills Grid */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Technical Arsenal</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Frameworks, languages, databases, and development tools I work with</p>
        </div>
        <SkillsGrid />
      </section>

      {/* Journey Timeline */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Academic & Development Journey</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Milestones from school education to engineering studies and open-source</p>
        </div>
        <Timeline />
      </section>

      {/* Interests */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Areas of Interest</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">What drives my curiosity and passion beyond the terminal</p>
        </div>
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
                className="p-7 rounded-3xl glass-card text-center"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-to-tr from-blue-500/10 to-indigo-500/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{interest.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
