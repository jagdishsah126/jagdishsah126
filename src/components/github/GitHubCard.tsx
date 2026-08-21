'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, GitFork } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import Image from 'next/image';

interface Repo {
  name: string;
  description: string;
  language: string;
  url: string;
  liveUrl?: string;
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
      className="rounded-3xl glass-card overflow-hidden flex flex-col justify-between"
    >
      <div className="p-6 sm:p-7 border-b border-black/5 dark:border-white/10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden glass-panel border border-blue-500/30 shrink-0">
              {profile.avatarUrl ? (
                <Image
                  src={profile.avatarUrl}
                  alt={profile.displayName}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-blue-500">
                  <GithubIcon className="w-7 h-7" />
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-gray-900 dark:text-white leading-tight">{profile.displayName}</h3>
              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline flex items-center gap-1 mt-0.5">
                @{profile.username}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-end shrink-0">
            <span className="glass-badge text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-2">
              {profile.repoCount} Repos
            </span>
          </div>
        </div>
        
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">{profile.bio}</p>
      </div>

      <div className="p-6 sm:p-7 flex-grow bg-white/20 dark:bg-white/[0.02]">
        <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-1.5 uppercase tracking-wider">
          <BookOpen size={14} className="text-blue-500" /> Notable Repositories
        </h4>
        <div className="space-y-2.5">
          {profile.repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-2xl bg-white/40 dark:bg-white/[0.03] hover:bg-blue-50/60 dark:hover:bg-white/[0.08] border border-black/5 dark:border-white/5 transition-all group"
            >
              <div className="flex items-center justify-between">
                <h5 className="text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:underline">
                  {repo.name}
                </h5>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  {repo.language}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                {repo.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
