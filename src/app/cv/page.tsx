'use client';

import { Printer, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 print:py-0 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-6 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            <Printer size={20} />
            <span>Print / Save PDF</span>
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-xl print:shadow-none rounded-2xl print:rounded-none overflow-hidden border border-gray-200 dark:border-gray-700 print:border-none">
          {/* Header */}
          <div className="bg-gray-900 text-white p-10 print:bg-white print:text-black print:border-b-2 print:border-gray-300">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Jagdish Sah</h1>
            <h2 className="text-xl md:text-2xl text-blue-400 print:text-gray-600 mb-6 font-medium">Full Stack Developer | BCT Student</h2>
            
            <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-300 print:text-gray-600">
              <div className="flex items-center gap-1"><Mail size={16} /> jagdish@example.com</div>
              <div className="flex items-center gap-1"><Phone size={16} /> +977 98XXXXXXXX</div>
              <div className="flex items-center gap-1"><MapPin size={16} /> Pokhara, Nepal</div>
              <div className="flex items-center gap-1"><GithubIcon className="w-4 h-4" /> @DayaSah</div>
              <div className="flex items-center gap-1"><Globe size={16} /> portfolio.example.com</div>
            </div>
          </div>

          <div className="p-10 space-y-8">
            {/* Summary */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-sm">Summary</h3>
              <p className="text-gray-700 dark:text-gray-300 print:text-black leading-relaxed">
                Motivated Computer Engineering (BCT) student at TU WRC College with a strong foundation in full-stack web development. Passionate about leveraging AI tools to enhance coding efficiency. Enthusiastic about data analysis and NEPSE trading. Proven ability to build responsive applications and continuously learn new technologies.
              </p>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-sm">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white print:text-black">Bachelor in Computer Engineering (BCT)</h4>
                    <span className="text-blue-600 dark:text-blue-400 print:text-gray-600 font-medium">2023 - Present</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 print:text-gray-800">Tribhuvan University, WRC College, Pokhara, Nepal</div>
                  <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 print:text-black text-sm">
                    <li>Currently in 2nd Semester</li>
                    <li>Focus on Core Computer Science, Algorithms, and Mathematics</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-sm">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white print:text-black mb-2">Frontend</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-sm">React, Next.js 14, TypeScript, Tailwind CSS, Framer Motion</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white print:text-black mb-2">Backend & Database</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-sm">Node.js, Express, MongoDB, Python, SQL</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white print:text-black mb-2">Tools & Practices</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-sm">Git, GitHub, AI-Assisted Dev, Responsive Design</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white print:text-black mb-2">Domain Knowledge</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-sm">Data Analysis, Data Scraping, Basic NEPSE Analysis</p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-sm">Key Projects</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white print:text-black">Personal Portfolio Website</h4>
                    <span className="text-gray-500 text-sm">Next.js, Tailwind, TS</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-sm">
                    Developed a fully responsive, dark-mode supported portfolio featuring dynamic animations with Framer Motion and interactive particle backgrounds.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white print:text-black">NEPSE Data Scraper</h4>
                    <span className="text-gray-500 text-sm">Python, Pandas</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-sm">
                    Built a Python tool to scrape daily market data from the Nepal Stock Exchange for local analysis and tracking.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Interests */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-sm">Interests</h3>
              <p className="text-gray-700 dark:text-gray-300 print:text-black">
                NEPSE Trading, Data Analysis, Artificial Intelligence, Open Source Software, Algorithmic Trading Concepts.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
