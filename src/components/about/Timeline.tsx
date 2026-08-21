'use client';

import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2025 - Present',
    title: 'Bachelor in Computer Engineering (BCT)',
    institution: 'Tribhuvan University, WRC College, Pokhara',
    description: 'Currently studying in 2nd Semester. Deepening core engineering fundamentals in Data Structures, Algorithms, C/C++, and building production-ready web apps with AI assistance.',
  },
  {
    year: '2025 - Present',
    title: 'NEPSE Quant & Full-Stack Projects',
    institution: 'Independent Research & Development',
    description: 'Built "My NEPSE Diary", automated scrapers, portfolio trackers, and responsive React/Next.js web applications across multiple specialized GitHub accounts.',
  },
  {
    year: '2023 - 2024',
    title: '+2 Science (Higher Secondary)',
    institution: 'Prasadi Academy, Lalitpur, Nepal',
    description: 'Completed higher secondary education in Science with strong foundations in Mathematics, Physics, and programming basics.',
  },
  {
    year: '2023',
    title: 'Secondary Education (Class 10 / SEE)',
    institution: 'Sagarmatha Higher Secondary School, Mirchaiya-6, Siraha',
    description: 'Completed school level education with academic distinction and early exploration of computer technologies.',
  }
];

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-blue-500/40 dark:border-blue-500/20 ml-4 md:ml-0 md:space-y-12">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="mb-8 md:mb-0 md:flex items-center justify-between w-full relative"
        >
          {/* Glowing Glass Node */}
          <div className="absolute w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 -left-[27px] md:left-1/2 md:-ml-2.5 top-1 md:top-auto z-10 shadow-[0_0_15px_rgba(59,130,246,0.9)] ring-4 ring-white/80 dark:ring-[#07090e]" />
          
          <div className={`pl-8 md:pl-0 w-full md:w-[46%] ${index % 2 === 0 ? 'md:mr-auto md:text-right md:pr-8' : 'md:ml-auto md:pl-8'}`}>
            <div className="p-6 sm:p-7 rounded-3xl glass-card text-left">
              <span className="inline-block py-1 px-3.5 rounded-full glass-badge text-blue-600 dark:text-blue-400 text-xs font-bold mb-3">
                {item.year}
              </span>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-1">{item.title}</h3>
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-1.5">
                🏛️ {item.institution}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
