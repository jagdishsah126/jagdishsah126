'use client';

import { motion } from 'framer-motion';
import GitHubCard from '@/components/github/GitHubCard';
import { githubProfiles } from '@/data/github-profiles';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { GitBranch, Layers } from 'lucide-react';

export default function GithubPage() {
  const totalRepos = githubProfiles.reduce((acc, curr) => acc + curr.repoCount, 0);

  return (
    <main className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full glass-badge text-blue-600 dark:text-blue-400 text-xs font-bold mb-4 tracking-wider uppercase">
          Multi-Account Ecosystem
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">GitHub Profiles</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I organize my repositories across specialized GitHub accounts for NEPSE financial analytics, web applications, and tools.
        </p>
      </div>

      {/* Glass Aggregated Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto rounded-3xl glass-panel p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/60 dark:border-white/10"
      >
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25">
            <GithubIcon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-extrabold text-gray-900 dark:text-white text-lg">Total Ecosystem Repos</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Aggregated across all 4 developer profiles</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            {totalRepos}+
          </span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Repos</span>
        </div>
      </motion.div>

      {/* Grid of 4 GitHub Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {githubProfiles.map((profile, index) => (
          <GitHubCard key={profile.username} profile={profile} index={index} />
        ))}
      </div>
    </main>
  );
}
