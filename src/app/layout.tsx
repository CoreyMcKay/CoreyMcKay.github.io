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
      <body className="min-h-screen bg-[#0a0f1c] antialiased">
        <ThemeProviderWrapper>
          <div className="relative min-h-screen overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
              <div 
                className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
                style={{ opacity: '0.15' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-secondary-900/30 backdrop-blur-[1px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 max-w-7xl">
                {children}
              </main>
            </div>
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
} 