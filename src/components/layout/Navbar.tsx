'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'GitHub', path: '/github' },
  { name: 'CV', path: '/cv' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/60 dark:bg-[#07090e]/60 border-b border-white/40 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            JS
          </div>
          <span className="text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors hidden sm:inline">
            Jagdish Sah
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/40 dark:bg-white/[0.04] p-1.5 rounded-full border border-black/5 dark:border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/25'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white/50 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10 backdrop-blur-md"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-b border-white/20 dark:border-white/10 bg-white/80 dark:bg-[#07090e]/90 backdrop-blur-2xl px-4 py-4 space-y-2 shadow-xl"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={closeMenu}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
