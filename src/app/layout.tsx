import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { ThemeProvider } from '../components/layout/ThemeProvider'
import RotationGuard from '../components/system/RotationGuard'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jagdish Sah | Full Stack Developer & NEPSE Analyst',
  description: 'Portfolio & CV of Jagdish Sah - Full Stack Developer with AI Assistance, BCT Student at TU WRC College, Nepal. Specialized in Next.js, Python, and NEPSE trading analytics.',
  metadataBase: new URL('https://jagdishsah.com.np'),
  alternates: {
    canonical: 'https://legacy.jagdishsah.com.np/',
  },
  // This is an alternate design of the same portfolio. Indexing it would put a
  // duplicate of jagdishsah.com.np in the results, so it stays out of the index
  // while still passing link equity through.
  robots: {
    index: false,
    follow: true,
  },
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
      <head>
        <RotationGuard />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col transition-colors`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
