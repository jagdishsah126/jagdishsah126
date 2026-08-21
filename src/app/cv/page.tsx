'use client';

import { Printer, Mail, MapPin, Globe, Phone, ExternalLink } from 'lucide-react';
import { GithubIcon, WhatsAppIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-16 px-4 print:py-0 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 print:hidden">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full glass-badge text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-1">
              Curriculum Vitae
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Online Resume</h1>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-95 text-sm"
          >
            <Printer size={18} />
            <span>Print / Save PDF</span>
          </button>
        </div>

        <div className="glass-panel shadow-2xl print:shadow-none rounded-3xl print:rounded-none overflow-hidden border border-white/60 dark:border-white/10 print:border-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900/90 via-slate-900/90 to-gray-900/90 text-white p-8 sm:p-10 print:bg-white print:text-black print:border-b-2 print:border-gray-300">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 tracking-tight">Jagdish Sah</h1>
            <h2 className="text-base sm:text-lg text-blue-400 print:text-gray-600 mb-6 font-medium">Full Stack Developer with AI Assistance | BCT Student @ TU WRC</h2>
            
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-300 print:text-gray-600">
              <a href="mailto:jagdishsah126@gmail.com" className="flex items-center gap-1.5 hover:text-white"><Mail size={15} /> jagdishsah126@gmail.com</a>
              <a href="tel:+9779702406668" className="flex items-center gap-1.5 hover:text-white"><Phone size={15} /> +977 9702406668</a>
              <div className="flex items-center gap-1.5"><MapPin size={15} /> Siraha / Pokhara, Nepal</div>
              <a href="https://jagdishsah.com.np" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><Globe size={15} /> jagdishsah.com.np</a>
              <a href="https://github.com/jagdishsah126" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><GithubIcon className="w-4 h-4" /> @jagdishsah126</a>
            </div>
          </div>

          <div className="p-8 sm:p-10 space-y-8 bg-white/40 dark:bg-black/20">
            {/* Summary */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white print:text-black mb-3 pb-2 border-b border-black/10 dark:border-white/10 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Professional Summary</h3>
              <p className="text-gray-700 dark:text-gray-300 print:text-black leading-relaxed text-sm sm:text-base">
                Passionate Computer Engineering (BCT) 2nd Semester student at TU WRC College with practical expertise in full-stack web development (Next.js 14, React, TypeScript, Python) and AI-assisted workflows. Active trader and data analyst specializing in automated data scraping and quantitative trend tracking for the Nepal Stock Exchange (NEPSE). Driven by continuous learning and cosmic curiosity.
              </p>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b border-black/10 dark:border-white/10 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Education History</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white print:text-black">Bachelor in Computer Engineering (BCT)</h4>
                    <span className="text-blue-600 dark:text-blue-400 print:text-gray-600 font-bold text-xs sm:text-sm">2024 - Present (2nd Sem)</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 print:text-gray-800 text-sm">Tribhuvan University, Western Regional Campus (WRC), Pokhara, Nepal</div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white print:text-black">+2 Science (Higher Secondary)</h4>
                    <span className="text-blue-600 dark:text-blue-400 print:text-gray-600 font-bold text-xs sm:text-sm">2022 - 2024</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 print:text-gray-800 text-sm">Prasadi Academy, Lalitpur, Nepal</div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white print:text-black">Secondary Education (Class 10 / SEE)</h4>
                    <span className="text-blue-600 dark:text-blue-400 print:text-gray-600 font-bold text-xs sm:text-sm">Graduated 2022</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 print:text-gray-800 text-sm">Sagarmatha Higher Secondary School, Mirchaiya-6, Siraha</div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b border-black/10 dark:border-white/10 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-2xl glass-card">
                  <h4 className="font-bold text-gray-900 dark:text-white print:text-black mb-1">Frontend Engineering</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-xs sm:text-sm">Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion, HTML5/CSS3</p>
                </div>
                <div className="p-4 rounded-2xl glass-card">
                  <h4 className="font-bold text-gray-900 dark:text-white print:text-black mb-1">Backend & Databases</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-xs sm:text-sm">Node.js, Express, Python (Flask / Django), MongoDB, PostgreSQL, MySQL</p>
                </div>
                <div className="p-4 rounded-2xl glass-card">
                  <h4 className="font-bold text-gray-900 dark:text-white print:text-black mb-1">Languages & Tools</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-xs sm:text-sm">C, C++, Java, Python, Git, GitHub, Docker, VS Code, Vercel</p>
                </div>
                <div className="p-4 rounded-2xl glass-card">
                  <h4 className="font-bold text-gray-900 dark:text-white print:text-black mb-1">Financial & Data Analysis</h4>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-xs sm:text-sm">Web Scraping (BeautifulSoup), Pandas, NEPSE Market Analytics, AI Pair Programming</p>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b border-black/10 dark:border-white/10 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Featured Projects</h3>
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-2xl glass-card">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white print:text-black">My NEPSE Diary</h4>
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">Python, Pandas, Jupyter</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-xs sm:text-sm">
                    Automated trading journal and data analysis suite tracking daily Nepal Stock Exchange market sentiment, entry/exit prices, and historical trends (<a href="https://github.com/DayaSah/My_Nepse_Diary" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">github.com/DayaSah/My_Nepse_Diary</a>).
                  </p>
                </div>

                <div className="p-4 rounded-2xl glass-card">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white print:text-black">Personal Portfolio & CV Hub</h4>
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">Next.js 14, TypeScript, Tailwind</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 print:text-black text-xs sm:text-sm">
                    Interactive multi-page web application featuring 3D particle physics, dynamic theme switcher, printable CV, and 4-account GitHub showcase.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Interests & Philosophy */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white print:text-black mb-3 pb-2 border-b border-black/10 dark:border-white/10 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Interests & Philosophy</h3>
              <p className="text-gray-700 dark:text-gray-300 print:text-black text-xs sm:text-sm leading-relaxed">
                NEPSE Trading & Quantitative Scraping, AI-Assisted Software Engineering, Cosmic & Space Science Exploration, Open Source Collaboration.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
