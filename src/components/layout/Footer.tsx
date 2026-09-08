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
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Jagdish Sah</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full Stack Developer with AI Assistance & BCT Engineering Student at TU WRC College, Nepal.
            </p>
            <p className="text-xs text-gray-500 italic">
              &ldquo;I am a traveller in this vast cosmos.&rdquo;
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
              <li><a href="https://github.com/DayaSah" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">@DayaSah (NEPSE Analysis)</a></li>
              <li><a href="https://github.com/jagdishsah" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">@jagdishsah (Core Full Stack)</a></li>
              <li><a href="https://github.com/jagdish-sah" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">@jagdish-sah (Tools & Services)</a></li>
              <li><a href="https://github.com/jagdishsah126" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">@jagdishsah126 (Profile Hub)</a></li>
              <li><a href="https://github.com/YourZara" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-600 dark:text-pink-400 hover:underline transition-colors font-medium">💖 @YourZara (AI Companion & Partner)</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Connect & Socials</h4>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/jagdish.sah.king" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors" aria-label="Facebook"><FacebookIcon className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/jagdish.sah.daya/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors" aria-label="Instagram"><InstagramIcon className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/jagdish-sah6347482ba/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn"><LinkedinIcon className="w-5 h-5" /></a>
              <a href="https://wa.me/9779702406668" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors" aria-label="WhatsApp"><WhatsAppIcon className="w-5 h-5" /></a>
              <a href="https://github.com/jagdishsah126" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" aria-label="GitHub"><GithubIcon className="w-5 h-5" /></a>
              <a href="mailto:jagdishsah126@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors" aria-label="Email"><Mail size={20} /></a>
            </div>
            <div className="pt-2 text-xs text-gray-500 flex items-center gap-1.5">
              <Globe size={14} />
              <a href="https://jagdishsah.com.np" target="_blank" rel="noopener noreferrer" className="hover:underline">
                jagdishsah.com.np
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Jagdish Sah. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js 14, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
