import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { ThemeProvider } from '../components/layout/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jagdish Sah | Full Stack Developer & NEPSE Analyst',
  description: 'Portfolio & CV of Jagdish Sah - Full Stack Developer with AI Assistance, BCT Student at TU WRC College, Nepal. Specialized in Next.js, Python, and NEPSE trading analytics.',
  metadataBase: new URL('https://jagdishsah.com.np'),
  openGraph: {
    title: 'Jagdish Sah | Full Stack Developer & NEPSE Analyst',
    description: 'Portfolio & CV of Jagdish Sah - Full Stack Developer with AI Assistance, BCT Student at TU WRC College, Nepal.',
    url: 'https://jagdishsah.com.np',
    siteName: 'Jagdish Sah Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col transition-colors relative selection:bg-blue-500/30`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {/* Ambient Cosmic Background Orbs for Glassmorphism Backlight */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/15 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-500/20 dark:bg-purple-600/15 rounded-full blur-[140px]" />
            <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-500/20 dark:bg-indigo-600/15 rounded-full blur-[130px]" />
          </div>

          <Navbar />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
