'use client';

import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2023 - Present',
    title: 'BCT Student (2nd Sem)',
    institution: 'TU WRC College, Nepal',
    description: 'Pursuing Bachelor in Computer Engineering. Focusing on core computer science subjects, algorithms, and software engineering principles.',
  },
  {
    year: '2022 - 2023',
    title: 'Full Stack Development Learner',
    institution: 'Self Taught',
    description: 'Mastered React, Next.js, Node.js, and MongoDB. Built several projects and learned AI-assisted development techniques.',
  },
  {
    year: '2021 - 2022',
    title: 'NEPSE Analyst',
    institution: 'Self Taught',
    description: 'Developed an interest in NEPSE trading and data analysis. Learned to analyze market trends and stock data.',
  }
];

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-blue-500 dark:border-blue-700 ml-4 md:ml-0 md:space-y-12">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="mb-8 md:mb-0 md:flex items-center justify-between w-full relative"
        >
          <div className="absolute w-4 h-4 rounded-full bg-blue-500 -left-[25px] md:left-1/2 md:-ml-2 top-1 md:top-auto z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          
          <div className={`pl-8 md:pl-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:text-right md:pr-8' : 'md:ml-auto md:pl-8'}`}>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
              <h4 className="text-md font-medium text-gray-600 dark:text-gray-400 mb-3">{item.institution}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
