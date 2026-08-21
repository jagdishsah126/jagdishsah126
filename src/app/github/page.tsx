'use client';

import { motion } from 'framer-motion';
import GitHubCard from '@/components/github/GitHubCard';
import { githubProfiles } from '@/data/github-profiles';
import { GithubIcon } from '@/components/icons/BrandIcons';

export default function GithubPage() {
  const totalRepos = githubProfiles.reduce((acc, curr) => acc + curr.repoCount, 0);

  return (
    <main className="min-h-screen py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">My GitHub Profiles</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I maintain different GitHub accounts for various purposes, organizing my code for better workflow and management.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 rounded-xl p-6 mb-12 flex items-center justify-center gap-4 shadow-sm"
      >
        <GithubIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <div className="text-lg text-gray-700 dark:text-gray-300">
          Total Repositories across all accounts: <span className="font-bold text-2xl text-blue-600 dark:text-blue-400 ml-2">{totalRepos}</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {githubProfiles.map((profile, index) => (
          <GitHubCard key={profile.username} profile={profile} index={index} />
        ))}
      </div>
    </main>
  );
}
