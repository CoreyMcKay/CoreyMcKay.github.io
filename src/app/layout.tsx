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
      <body className="min-h-screen bg-[#0a0f1c]">
        <ThemeProviderWrapper>
          <div className="relative min-h-screen">
            {/* Background Effects */}
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-secondary-900/30" />
            </div>

            {/* Content */}
            <div className="relative">
              <Navbar />
              <main className="container mx-auto px-4 pt-20">
                {children}
              </main>
            </div>
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
} 