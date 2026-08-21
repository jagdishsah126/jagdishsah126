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
      </body>
    </html>
  )
}
