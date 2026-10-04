'use client';

import { Printer, Mail, MapPin, Globe } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { cvData } from '@/data/cv-data';

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  const { personalInfo, education, skills, projects, interests, aiUsage, careerDirection } = cvData;

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">{personalInfo.name}</h1>
            <h2 className="text-lg sm:text-xl text-blue-400 print:text-gray-600 mb-6 font-medium">{personalInfo.title}</h2>

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-300 print:text-gray-600">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-white"><Mail size={16} /> {personalInfo.email}</a>
              <div className="flex items-center gap-1.5"><MapPin size={16} /> {personalInfo.location}</div>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><GithubIcon className="w-4 h-4" /> @Jagdishsah126</a>
              <a href={personalInfo.domain} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><Globe size={16} /> jagdishsah.com.np</a>
            </div>
          </div>

          <div className="p-8 sm:p-10 space-y-8">
            {/* Summary */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-3 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Professional Summary</h3>
              <p className="text-gray-700 dark:text-gray-300 print:text-black leading-relaxed text-sm sm:text-base">
                {personalInfo.summary}
              </p>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Education History</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                      <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white print:text-black">{edu.degree}</h4>
                      <span className="text-blue-600 dark:text-blue-400 print:text-gray-600 font-semibold text-sm">{edu.year}</span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 print:text-gray-800 text-sm">{edu.institution}</div>
                    <p className="text-gray-600 dark:text-gray-400 print:text-gray-800 text-sm mt-1">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {skills.map((cat) => (
                  <div key={cat.category} className="bg-gray-50 dark:bg-gray-800/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white print:text-black mb-1">{cat.category}</h4>
                    <p className="text-gray-700 dark:text-gray-300 print:text-black">{cat.items.join(', ')}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Featured Projects</h3>
              <div className="space-y-4 text-sm">
                {projects.map((proj) => (
                  <div key={proj.name}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-gray-900 dark:text-white print:text-black">{proj.name}</h4>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{proj.tech}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 print:text-black">
                      {proj.description}{' '}
                      <a href={proj.url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{proj.url.replace('https://', '')}</a>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-3 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Interests & Philosophy</h3>
              <p className="text-gray-700 dark:text-gray-300 print:text-black text-sm leading-relaxed">
                {interests.join(', ')}.
              </p>
            </section>

            {/* AI Usage */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-3 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">AI Usage</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 print:text-black text-sm space-y-1">
                {aiUsage.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            {/* Career Direction */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white print:text-black mb-3 pb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-300 uppercase tracking-wider text-xs sm:text-sm">Career Direction</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 print:text-black text-sm space-y-1">
                {careerDirection.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
