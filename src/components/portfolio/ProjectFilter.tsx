'use client';

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  const filters = ['All', 'Python', 'Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB'];

  return (
    <div className="flex gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-hide justify-center flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-5 py-2 rounded-full whitespace-nowrap text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${
            activeFilter === filter
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border border-transparent'
              : 'glass-panel text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
