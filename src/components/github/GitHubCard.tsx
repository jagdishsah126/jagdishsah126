'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

interface Repo {
  name: string;
  description: string;
  language: string;
  url: string;
}

interface GitHubCardProps {
  profile: {
    username: string;
    displayName: string;
    bio: string;
    repoCount: number;
    url: string;
    avatarUrl: string;
    repos: Repo[];
  };
  index: number;
}

export default function GitHubCard({ profile, index }: GitHubCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
    >
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              {/* Avatar placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <GithubIcon className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{profile.displayName}</h3>
              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                @{profile.username}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
              {profile.repoCount} Repos
            </span>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded transition-colors"
            >
              View Profile
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{profile.bio}</p>
      </div>

      <div className="p-6 flex-grow bg-gray-50/50 dark:bg-gray-800/50">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <BookOpen size={16} /> Notable Repositories
        </h4>
        <div className="space-y-3">
          {profile.repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                    {repo.name}
                  </h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                    {repo.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="text-xs text-gray-500">{repo.language}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
