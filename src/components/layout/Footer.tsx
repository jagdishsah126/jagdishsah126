import Link from 'next/link'
import { Mail, Globe } from 'lucide-react'
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from '../icons/BrandIcons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-[#111111] border-t border-gray-200 dark:border-gray-800 mt-auto transition-colors">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">[Data to be Inserted: Your Name]</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              [Data to be Inserted: Professional title, role, and summary.]
            </p>
            <p className="text-xs text-gray-500 italic">
              &ldquo;[Data to be Inserted: Tagline]&rdquo;
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Portfolio</Link></li>
              <li><Link href="/github" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">GitHub Accounts</Link></li>
              <li><Link href="/cv" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Interactive CV</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub Profiles</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">@[Data to be Inserted: Account 1]</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">@[Data to be Inserted: Account 2]</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Connect & Socials</h4>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors" aria-label="Social"><FacebookIcon className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors" aria-label="Social"><InstagramIcon className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors" aria-label="Social"><LinkedinIcon className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors" aria-label="Social"><WhatsAppIcon className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" aria-label="Social"><GithubIcon className="w-5 h-5" /></a>
            </div>
            <div className="pt-2 text-xs text-gray-500 flex items-center gap-1.5">
              <Globe size={14} />
              <span>[Data to be Inserted: yourdomain.com]</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} [Data to be Inserted: Name]. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js 14, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
