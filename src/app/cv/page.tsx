'use client';

import { Printer, Mail, MapPin, Globe } from 'lucide-react';
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
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-md active:scale-95"
          >
            <Printer size={20} />
            <span>Print / Save PDF</span>
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-xl print:shadow-none rounded-2xl print:rounded-none overflow-hidden border border-gray-200 dark:border-gray-700 print:border-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8 sm:p-10 print:bg-white print:text-black print:border-b-2 print:border-gray-300">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">Jagdish Sah</h1>
            <h2 className="text-lg sm:text-xl text-blue-400 print:text-gray-600 mb-6 font-medium">Full Stack Developer with AI Assistance | BCT Student @ TU WRC</h2>
            
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-300 print:text-gray-600">
              <a href="mailto:jagdishsah126@gmail.com" className="flex items-center gap-1.5 hover:text-white"><Mail size={16} /> jagdishsah126@gmail.com</a>
              <div className="flex items-center gap-1.5"><MapPin size={16} /> Siraha / Pokhara, Nepal</div>
              <a href="https://github.com/jagdishsah126" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><GithubIcon className="w-4 h-4" /> @jagdishsah126</a>
              <a href="https://github.com/DayaSah/My_Nepse_Diary" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><Globe size={16} /> My NEPSE Diary</a>
            </div>
          </div>

          <div className="p-8 sm:p-10 space-y-8">
            {/* Summary */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-3 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Professional Summary</h3>
              <p className="text-gray-700 dark:text-gray-300 print:text-black leading-relaxed text-sm sm:text-base">
                Passionate Computer Engineering (BCT) 2nd Semester student at TU WRC College with practical expertise in full-stack web development (Next.js 14, React, TypeScript, Python) and AI-assisted workflows. Active trader and data analyst specializing in automated data scraping and quantitative trend tracking for the Nepal Stock Exchange (NEPSE). Driven by continuous learning and cosmic curiosity.
              </p>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Education History</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white print:text-black">Bachelor in Computer Engineering (BCT)</h4>
                    <span className="text-blue-600 dark:text-blue-400 print:text-gray-600 font-semibold text-sm">2024 - Present (2nd Sem)</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 print:text-gray-800 text-sm">Tribhuvan University, Western Regional Campus (WRC), Pokhara, Nepal</div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white print:text-black">+2 Science (Higher Secondary)</h4>
                    <span className="text-blue-600 dark:text-blue-400 print:text-gray-600 font-semibold text-sm">2022 - 2024</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 print:text-gray-800 text-sm">Prasadi Academy, Lalitpur, Nepal</div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white print:text-black">Secondary Education (Class 10 / SEE)</h4>
                    <span className="text-blue-600 dark:text-blue-400 print:text-gray-600 font-semibold text-sm">Graduated 2022</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 print:text-gray-800 text-sm">Sagarmatha Higher Secondary School, Mirchaiya-6, Siraha</div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 dark:bg-gray-800/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white print:text-black mb-1">Frontend Engineering</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black">Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion, HTML5/CSS3</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white print:text-black mb-1">Backend & Databases</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black">Node.js, Express, Python (Flask / Django), MongoDB, PostgreSQL, MySQL</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white print:text-black mb-1">Languages & Tools</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black">C, C++, Java, Python, Git, GitHub, Docker, VS Code, Vercel</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white print:text-black mb-1">Financial & Data Analysis</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black">Web Scraping (BeautifulSoup), Pandas, NEPSE Market Analytics, AI Pair Programming</p>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Featured Projects</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white print:text-black">My NEPSE Diary</h4>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">Python, Pandas, Jupyter</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black">
                    Automated trading journal and data analysis suite tracking daily Nepal Stock Exchange market sentiment, entry/exit prices, and historical trends (<a href="https://github.com/DayaSah/My_Nepse_Diary" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">github.com/DayaSah/My_Nepse_Diary</a>).
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white print:text-black">Personal Portfolio & CV Hub</h4>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">Next.js 14, TypeScript, Tailwind</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black">
                    Interactive multi-page web application featuring 3D particle physics, dynamic theme switcher, printable CV, and 4-account GitHub showcase.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Interests & Philosophy */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-3 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Interests & Philosophy</h3>
              <p className="text-gray-700 dark:text-gray-300 print:text-black text-sm leading-relaxed">
                NEPSE Trading & Quantitative Scraping, AI-Assisted Software Engineering, Cosmic & Space Science Exploration, Open Source Collaboration.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
