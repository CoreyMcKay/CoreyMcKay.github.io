import './globals.css'
import { Inter, Fira_Code } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { ThemeProviderWrapper } from '@/components/ThemeProviderWrapper'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const metadata: Metadata = {
  title: 'Corey McKay | Cybersecurity & AI Blog',
  description: 'Personal blog focused on cybersecurity and AI development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="min-h-screen bg-[#0a0f1c] antialiased selection:bg-primary-500/20 selection:text-primary-200">
        <ThemeProviderWrapper>
          <div className="relative min-h-screen overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] bg-repeat"
                style={{ opacity: '0.07' }}
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
              <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/80" />
              
              {/* Accent Colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20 backdrop-blur-[1px]" />
              
              {/* Animated Effects */}
              <div className="absolute inset-0 bg-gradient-shine bg-[length:200%_200%] animate-glow opacity-5" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5 animate-pulse-slow" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 max-w-7xl animate-fade-in">
                {children}
              </main>
            </div>
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
} 